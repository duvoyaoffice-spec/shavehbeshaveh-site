/* ============================================================
   שווה בשווה — Service Worker
   פתיחה מיידית וגם ללא רשת, בלי להינעל על גרסה ישנה.

   אסטרטגיה (״הצג מהמטמון, בדוק ברקע״ ברמת האפליקציה כולה):
   - בהתקנה נשמרת במטמון מעטפת שלמה ועקבית של גרסה אחת (SHELL, נוצרת
     ב־build-web.sh): הדף, הקוד, העיצוב וההגדרה — בשמות עם חתימת תוכן.
     הדף נבדק לפני השמירה: הוא חייב להפנות לקבצים החתומים של אותה גרסה.
     אם משהו נכשל בהורדה, ההתקנה נכשלת והגרסה הקודמת ממשיכה לעבוד
     (ומנסים שוב בבדיקה הבאה) — לעולם לא מעטפת חצי־מעודכנת.
   - פתיחת האפליקציה (ניווט): הדף מהמטמון מיד, בלי לחכות לרשת.
   - קבצים עם חתימת תוכן (app.<חתימה>.js וכו׳): מהמטמון תמיד — התוכן
     שלהם לעולם לא משתנה, ולכן אין מה לבדוק.
   - שאר הקבצים מאותו אתר (אייקונים, manifest, ומרכז העזרה — help/kb.json
     ו־help/search.js בכתובת ‎?v=<גרסה>‎, שנשמרים כבר בהתקנה כדי שהחיפוש
     במאמרים יעבוד גם בלי רשת): מהמטמון, ובמקביל רענון ברקע לפעם הבאה.
   - הבדיקה ברקע: הדפדפן בודק את sw.js בכל פתיחה (ו־app.js גם בחזרה
     ללשונית). כל פריסה משנה את VER ולכן את הקובץ הזה — SW חדש מתקין
     מעטפת חדשה, משתלט (skipWaiting + claim), ומוחק את המטמון הישן.
     app.js טוען מחדש כשהגרסה החדשה משתלטת (ואם באמצע עריכה — מציע
     רענון), כך שגם אפליקציה מותקנת שלא נסגרת לעולם מתעדכנת.
   נתוני הקבוצה (Supabase), שערי מטבע, גופנים ותמונות חיצוניות לעולם
   אינם עוברים כאן — הם מאתרים אחרים ותמיד מהרשת (או מהמטמון הרגיל של
   הדפדפן).
   ============================================================ */
const VER = "a53c7059ef";
const CACHE = "shaveh-" + VER;
/* קובצי המעטפת של הגרסה הזו — מוזרקים בבנייה */
const SHELL = ["./", "./config.9cb975f5da.js", "./i18n.d20e62d137.js", "./logic.81707caa93.js", "./app.3e9b6f492f.js", "./styles.a96280fc39.css", "./help/search.js?v=f5da86cf", "./help/kb.json?v=f5da86cf", "./manifest.webmanifest", "./icons/icon-192.png"];
/* קובץ עם חתימת תוכן בשם: app.0a1b2c3d4e.js / styles.0a1b2c3d4e.css */
const HASHED = /\.[0-9a-f]{10}\.(?:js|css)$/;

/* תשובה שנוצרה מהפניה (redirect) — עותק נקי, כדי שאפשר יהיה להגיש
   אותה לניווט (דפדפנים דוחים תשובת הפניה שמוגשת מ־SW לניווט) */
function clean(res) {
  if (!res || !res.redirected) return res;
  return res.blob().then((body) => new Response(body, { status: res.status, statusText: res.statusText, headers: res.headers }));
}
const cacheable = (res) => !!res && res.status === 200 && res.type === "basic";

/* הורדת קובץ מעטפת אחד; נכשלת על כל תשובה שאינה 200 מאותו אתר.
   cache: "no-cache" — השרת מאשר שהעותק עדכני (ETag) לפני שמירה: אין עותק
   ישן מהמטמון הרגיל של הדפדפן, ואין הורדה כפולה של מה שהדף כבר הוריד */
function get(u, mode) {
  return fetch(new Request(u, { cache: mode || "no-cache" })).then((res) => {
    if (!cacheable(res)) throw new Error("precache " + u + " → " + (res && res.status));
    return res;
  });
}

/* הדף חייב להפנות בדיוק לקבצים החתומים של הגרסה הזו. בחלון ההפצה של
   ה־CDN אחרי פריסה עלול להגיע sw.js חדש יחד עם index.html ישן — דף כזה
   מפנה לקבצים שכבר לא קיימים בשרת, ושמירתו הייתה נועלת את האפליקציה על
   שלד הטעינה עד הפריסה הבאה (VER לא משתנה, ולכן אין ״עדכון״ שיתקן). */
const PINNED = SHELL.filter((u) => HASHED.test(u)).map((u) => u.replace(/^\.\//, ""));
function matches(res) {
  return res.clone().text().then((html) => PINNED.every((n) => html.indexOf(n) >= 0));
}
/* הדף הראשי: קודם הכתובת הרגילה; לא תואם — שוב בכתובת שעוקפת מטמונים
   בדרך (‎./?sw=VER‎, בלי מטמון הדפדפן). עדיין לא תואם — ההתקנה נכשלת,
   הגרסה הקודמת ממשיכה לעבוד, ובבדיקת העדכון הבאה מנסים שוב. */
function page() {
  return get("./").then((res) => matches(res).then((ok) => ok ? res
    : get("./?sw=" + VER, "reload").then((res2) => matches(res2).then((ok2) => {
      if (!ok2) throw new Error("precache ./ → הדף אינו תואם לגרסה " + VER);
      return res2;
    }))));
}

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE)
      .then((c) => Promise.all(SHELL.map((u) =>
        (u === "./" ? page() : get(u))
          .then((res) => Promise.resolve(clean(res)).then((r) => c.put(u, r))))))
      .then(() => self.skipWaiting())
      /* כשל: מוחקים את המטמון החלקי, וההתקנה נכשלת — הגרסה הקודמת נשארת */
      .catch((err) => caches.delete(CACHE).then(() => { throw err; }))
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys
        .filter((k) => k.indexOf("shaveh-") === 0 && k !== CACHE)
        .map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

/* הדף הראשי (כל כתובת של האפליקציה, עם או בלי ?פרמטרים) — מהמטמון מיד */
async function shell(req) {
  const c = await caches.open(CACHE);
  const hit = await c.match("./");
  if (hit) return hit;
  /* אין עותק (לא אמור לקרות אחרי התקנה מוצלחת) — מהרשת */
  return fetch(req);
}

/* קבצים עם חתימת תוכן — מהמטמון; חסר (למשל קובץ של גרסה אחרת) — מהרשת ונשמר */
async function cacheFirst(req) {
  const c = await caches.open(CACHE);
  const hit = await c.match(req);
  if (hit) return hit;
  const res = await fetch(req);
  if (cacheable(res)) c.put(req, res.clone()).catch(() => {});
  return res;
}

/* שאר הקבצים מאותו אתר — מהמטמון מיד, ורענון ברקע לפעם הבאה */
async function staleWhileRevalidate(e, req) {
  const c = await caches.open(CACHE);
  const hit = await c.match(req);
  const net = fetch(req).then((res) => {
    if (cacheable(res)) return c.put(req, res.clone()).then(() => res);
    return res;
  });
  if (hit) {
    e.waitUntil(net.catch(() => {}));
    return hit;
  }
  return net;
}

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;

  let url;
  try { url = new URL(req.url); } catch (err) { return; }

  /* נתוני הקבוצה, שערי מטבע, גופנים ותמונות יעד — לא כאן */
  if (url.origin !== self.location.origin) return;
  if (url.pathname.indexOf("/rest/v1/") >= 0) return;
  const scope = new URL(self.registration.scope).pathname;
  if (url.pathname.indexOf(scope) !== 0) return;

  if (req.mode === "navigate") {
    const rest = url.pathname.slice(scope.length);
    if (rest === "" || rest === "index.html") { e.respondWith(shell(req)); return; }
    /* ניווט לכתובת אחרת באתר (מרכז העזרה, מדריכים) — מהרשת; בלי רשת — הפניה לשורש, שם המעטפת
       מוגשת מהמטמון. לא מגישים את המעטפת תחת הכתובת הזו: ה־<script src="app.<hash>.js"> שלה
       יחסיים, ותחת ‎/help/…‎ היו נפתרים ל־‎/help/app.<hash>.js‎ — לא במטמון ואין רשת — שלד תקוע */
    e.respondWith(fetch(req).catch(() => caches.open(CACHE).then((c) => c.match("./"))
      .then((hit) => (hit ? Response.redirect(self.registration.scope, 302) : Response.error()))));
    return;
  }
  /* כתובות עם פרמטרים פרטיים (‎?paid=<מזהה>‎, ‎?join=<מזהה>‎, ‎?paytest=…‎ ישן ועוד) לעולם לא
     נשמרות במטמון לפי הכתובת המלאה: ניווט מוגש מהמעטפת (נשמרת רק תחת ‎./‎ — בלי ה־query),
     ושאר הבקשות עוברות כאן רק בלי query או עם ‎?v=<גרסה>‎ של קובצי האתר; כל השאר — מהרשת,
     בלי מטמון של ה־SW. */
  if (url.search && !/^\?v=[\w.-]*$/.test(url.search)) return;
  if (HASHED.test(url.pathname)) { e.respondWith(cacheFirst(req)); return; }
  e.respondWith(staleWhileRevalidate(e, req));
});
