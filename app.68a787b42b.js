(()=>{"use strict";if(window.top!==window.self&&!(window.claude&&typeof window.claude.use=="function")){let e=!0;try{e=window.top.location.origin!==window.location.origin}catch{e=!0}if(e){try{window.top.location.replace(window.location.href)}catch{}const t=document.getElementById("app");t&&(t.removeAttribute("aria-busy"),t.innerHTML='<div class="frame-guard"><h1 class="brand-name">שווה בשווה</h1><p>מטעמי אבטחה האפליקציה נפתחת רק בחלון משלה, ולא בתוך אתר אחר.</p><a class="btn primary block" target="_blank" rel="noopener" href="'+String(window.location.href).replace(/[&"<>]/g,a=>({"&":"&amp;",'"':"&quot;","<":"&lt;",">":"&gt;"})[a])+'">פתיחת שווה בשווה בחלון נפרד</a></div>'),window.__shavehFramed=!0;return}}(function(){const t=document.querySelector('link[rel="preload"][as="style"][href*="fonts.googleapis"]');if(!t||document.querySelector('link[rel="stylesheet"][href*="fonts.googleapis"]'))return;const a=document.createElement("link");a.rel="stylesheet",a.href=t.href,document.head.appendChild(a)})();const ma=[{c:"ILS",n:"שקל ישראלי",r:1},{c:"EUR",n:"אירו",r:3.5169},{c:"USD",n:"דולר אמריקאי",r:3.049},{c:"GBP",n:"לירה שטרלינג",r:4.1084},{c:"CHF",n:"פרנק שוויצרי",r:3.7259},{c:"HUF",n:"פורינט הונגרי",r:.0096},{c:"CZK",n:"כתר צ׳כי",r:.1444},{c:"PLN",n:"זלוטי פולני",r:.8092},{c:"RON",n:"לאו רומני",r:.6668},{c:"BGN",n:"לב בולגרי",r:1.795},{c:"RSD",n:"דינר סרבי",r:.0299},{c:"GEL",n:"לארי גאורגי",r:1.169},{c:"TRY",n:"לירה טורקית",r:.0625},{c:"AED",n:"דירהם (איחוד האמירויות)",r:.8279},{c:"THB",n:"באט תאילנדי",r:.0914},{c:"JPY",n:"ין יפני",r:.0196},{c:"MAD",n:"דירהם מרוקאי",r:.3206},{c:"CAD",n:"דולר קנדי",r:2.1846},{c:"MXN",n:"פסו מקסיקני",r:.1773}],_t=[{id:"trip",ic:"✈️",nm:"טיול",ex:"בודפשט עם החברים"},{id:"family",ic:"👨‍👩‍👧‍👦",nm:"מפגש משפחתי",ex:"שבת משפחתית בצפון"},{id:"mangal",ic:"🔥",nm:"מנגל / על האש",ex:"מנגל יום העצמאות"},{id:"team",ic:"💼",nm:"ערב צוות / גיבוש",ex:"גיבוש צוות ספטמבר"},{id:"reunion",ic:"🎓",nm:"פגישת מחזור",ex:"המחזור של תשס״ח"},{id:"simcha",ic:"💍",nm:"חתונה / שמחה",ex:"שבע ברכות למשפחת כהן"},{id:"producer",ic:"🎬",nm:"הפקת אירוע",ex:"חתונת לוי — הפקה"},{id:"kablan",ic:"🏗️",nm:"קבלן / פרויקט",ex:"שיפוץ הדירה ברעננה"},{id:"flat",ic:"🏠",nm:"דירת שותפים",ex:"הדירה ברחוב יפו 12"},{id:"other",ic:"🤝",nm:"משהו אחר",ex:"הקבוצה שלנו"}];function qe(e){const t=e&&e.kind||"trip";return _t.find(a=>a.id===t)||_t[_t.length-1]}const Xe=e=>e&&e.flag||qe(e).ic,Ra=[{id:"food",ic:"🍽️",nm:"אוכל ומסעדות"},{id:"hotel",ic:"🏨",nm:"לינה"},{id:"taxi",ic:"🚕",nm:"נסיעות"},{id:"flight",ic:"✈️",nm:"טיסות"},{id:"shop",ic:"🛍️",nm:"קניות"},{id:"fun",ic:"🎟️",nm:"בילוי ואטרקציות"},{id:"market",ic:"🛒",nm:"סופר"},{id:"meat",ic:"🥩",nm:"בשר ודגים"},{id:"drinks",ic:"🥤",nm:"שתייה"},{id:"gear",ic:"⛺",nm:"ציוד"},{id:"gift",ic:"🎁",nm:"מתנות"},{id:"host",ic:"🏡",nm:"אירוח"},{id:"venue",ic:"🏛️",nm:"אולם ומקום"},{id:"catering",ic:"🥘",nm:"קייטרינג"},{id:"music",ic:"🎶",nm:"מוזיקה ותזמורת"},{id:"photo",ic:"📸",nm:"צילום"},{id:"decor",ic:"💐",nm:"עיצוב ופרחים"},{id:"staff",ic:"👷",nm:"עובדים"},{id:"materials",ic:"🧱",nm:"חומרים"},{id:"tools",ic:"🛠️",nm:"כלים והשכרה"},{id:"transport",ic:"🚚",nm:"הובלות"},{id:"rent",ic:"🏠",nm:"שכירות"},{id:"bills",ic:"💡",nm:"חשבונות"},{id:"cleaning",ic:"🧹",nm:"ניקיון"},{id:"other",ic:"📎",nm:"אחר"}],vo={trip:["food","hotel","taxi","flight","shop","fun","market","other"],family:["food","market","host","gift","fun","taxi","gear","other"],mangal:["meat","market","drinks","gear","taxi","fun","other"],team:["food","fun","venue","taxi","gift","drinks","other"],reunion:["venue","catering","music","photo","decor","gift","other"],simcha:["venue","catering","music","photo","decor","gift","host","other"],producer:["venue","catering","music","photo","decor","staff","transport","other"],kablan:["materials","staff","tools","transport","bills","other"],flat:["rent","bills","market","cleaning","food","gear","other"],other:["food","market","shop","fun","gift","taxi","other"]};function wn(e,t){const a=(vo[qe(e).id]||vo.other).slice();(t||[]).forEach(n=>{const o=n.category||"other";a.indexOf(o)<0&&a.push(o)});const s=e&&e.cats||[];return a.map(n=>Ra.find(o=>o.id===n)).filter(Boolean).filter(n=>!s.some(o=>o.id===n.id)).concat(s.map(n=>Object.assign({custom:!0},n)))}function ft(e,t){const a=(e&&e.cats||[]).find(s=>s.id===t);return a?Object.assign({custom:!0},a):Ra.find(s=>s.id===t)||Ra[Ra.length-1]}const Ba=e=>e&&e.custom?`var(--cat-${e.color})`:"",Ze=["#1E6B4C","#3C5B7A","#7A4A33","#5A4A78","#2F6E6B","#7A5230","#8A3F52","#4A6136"],Sc=["אמרלד","כחול דיו","ערמון","שזיף","טורקיז עמוק","טבק","בורדו","זית"],Ls={exp:{on:"all",off:"mine",lblOn:'<span aria-hidden="true">👁️</span> כל הוצאות הקבוצה',lblOff:'<span aria-hidden="true">🔒</span> רק ההוצאות שלהם'},bal:{on:"all",off:"mine",lblOn:'<span aria-hidden="true">👁️</span> המאזן של כל המשתתפים',lblOff:'<span aria-hidden="true">🔒</span> רק החשבון האישי שלהם'},sum:{on:"on",off:"off",lblOn:'<span aria-hidden="true">👁️</span> הסיכום הקבוצתי המלא',lblOff:'<span aria-hidden="true">🔒</span> סיכום קבוצתי למנהל בלבד'}},$o=1e4,ba=[["#3C8C68","#1E6B4C"],["#5FA98A","#2F7A5C"],["#4E9C94","#2F6E6B"],["#7FA860","#4A6136"],["#6E9BB8","#3C5B7A"],["#9C8F5E","#6E6234"]],wo={trip:["✈️","🌍","🏔️","🏖️","🚗","⛺","🇭🇺","🇦🇹","🇨🇿","🇮🇹","🇫🇷","🇨🇭","🇬🇧","🇺🇸","🇬🇷","🇪🇸","🇵🇱","🇷🇴","🇬🇪","🇦🇪","🇹🇭","🇲🇦","🇵🇹","🇩🇪"],family:["👨‍👩‍👧‍👦","🏡","🍲","🎂","🕯️","🧺","🥗","🎈"],mangal:["🔥","🥩","🌭","🍗","🧆","🍉","⚽","🏞️"],team:["💼","🎳","🍕","🎯","🚀","🏢","🎤","☕"],reunion:["🎓","📸","🎉","🎈","🕰️","🎤","🍰","🏫"],simcha:["💍","🎊","💐","🎁","🎶","✨","🕍","🎉"],producer:["🎬","🎤","🎪","📋","🎛️","💡","🎭","📸"],kablan:["🏗️","🧱","🔨","🛠️","📐","🚧","🏠","🪚"],flat:["🏠","🔑","🛋️","🧾","💡","🧹","🛒","🚿"],other:["🤝","⭐","📦","🎯","💰","📌","🎈","🧾"]},g={ready:!1,cloud:!1,assets:null,downloads:null,trips:[],tripId:null,expenses:[],expensesReady:!1,tab:"exp",screen:"home",joinTripId:null,filter:{cat:null,payer:null},showArchived:!1,celebrated:{},unsubExp:null,syncError:null,tripsWatch:null};let C=null;const m=(e,t)=>(t||document).querySelector(e),z=(e,t)=>Array.from((t||document).querySelectorAll(e)),J={get(e){try{return localStorage.getItem(e)}catch{return null}},set(e,t){try{return localStorage.setItem(e,t),!0}catch{return!1}},del(e){try{localStorage.removeItem(e)}catch{}}},Ht={get(e){try{return sessionStorage.getItem(e)}catch{return null}},set(e,t){try{return sessionStorage.setItem(e,t),!0}catch{return!1}},del(e){try{sessionStorage.removeItem(e)}catch{}}},Ne=!(typeof window!="undefined"&&window.claude&&typeof window.claude.use=="function"),_c="",Gt="https://shavehbeshaveh.co.il/",Es=Gt.replace(/^https?:\/\//,"").replace(/\/+$/,""),Ss="shaveh_synccfg_v1",_s=/^https:\/\/[a-z0-9-]{3,63}\.supabase\.co$/;function Fa(){const e=typeof window!="undefined"&&window.SHAVEH_CONFIG||null;return e&&e.u&&e.k?{u:String(e.u).replace(/\/+$/,""),k:String(e.k)}:null}const ko=!!Fa();function kn(){const e=Fa();if(e)return e;try{const t=JSON.parse(J.get(Ss)||"null");return t&&t.u&&t.k&&_s.test(String(t.u).replace(/\/+$/,""))?t:null}catch{return null}}function Ts(e){e?J.set(Ss,JSON.stringify(e)):J.set(Ss,"null")}function Cs(){const e={};return(location.hash||"").replace(/^#/,"").split("&").forEach(t=>{if(!t)return;const a=t.indexOf("="),s=a<0?t:t.slice(0,a);let n=a<0?"":t.slice(a+1);try{n=decodeURIComponent(n)}catch{}e[s]=n}),e}function xo(){const e=(location.hash||"").indexOf("admin")>=0?"#admin":"";try{history.replaceState(null,"",location.pathname+location.search+e)}catch{}}function ga(){try{const e=new URL(location.href);if(!e.searchParams.has("join"))return;e.searchParams.delete("join"),history.replaceState(null,"",e.pathname+e.search+e.hash)}catch{}}async function Tc(e){const t=Cs().cfg;if(t==null)return;xo();let a=null;try{a=JSON.parse(decodeURIComponent(escape(atob(t.replace(/-/g,"+").replace(/_/g,"/")))))}catch(d){console.warn("cfg link ignored — not valid",d),S("קישור ההגדרות אינו תקין ולא הוחל");return}const s=a&&typeof a.u=="string"?a.u.trim().replace(/\/+$/,""):"",n=a&&typeof a.k=="string"?a.k.trim():"";if(e)return;const o=Fa();if(o){s!==o.u&&S("קישור ההגדרות לא הוחל — האפליקציה מחוברת לשרת הקבוע שלה");return}if(!_s.test(s)||!/^[A-Za-z0-9._-]{20,600}$/.test(n)){S("קישור ההגדרות אינו תקין ולא הוחל");return}const i=s.replace(/^https:\/\//,"");await Me("חיבור לשרת נתונים",`הקישור מבקש לחבר את האפליקציה במכשיר הזה לשרת ${i}. כל מה שתרשמו מעכשיו יישמר שם. לחבר רק אם הקישור הגיע ממי שמנהל את הקבוצה שלכם. לחבר?`,"חיבור")&&Ts({u:s,k:n})}const Cc="https://shaveh-admin.surge.sh/";let Vt=null,Ua=null;function Lo(e){Ua=e==="licensed"||e==="exempt"?e:null}function Ka(){return Ua==="licensed"?"המחירים סופיים וכוללים מע״מ.":Ua==="exempt"?"המחירים סופיים — מפעיל השירות עוסק פטור, ולא נגבה מע״מ.":"המחירים סופיים וכוללים מע״מ ככל שחל."}let js="";function Eo(e){const t=Logic.normalizePhone(e);js=/^05\d{8}$/.test(t)?t:""}const jc=["week","month","annual","exp20","days7","business","pro"];let xn={};function So(e){const t={};e&&typeof e=="object"&&!Array.isArray(e)&&jc.forEach(a=>{const s=typeof e[a]=="string"?e[a].trim():"";/^https:\/\/\S{3,}$/.test(s)&&s.length<=500&&(t[a]=s)}),xn=t}function Ac(e){const t=Fa();return!!(t&&e&&typeof e.u=="string"&&t.u===e.u.replace(/\/+$/,""))}async function _o(e){if(!e||g.apiMode==="legacy")return;const t=Ac(e);try{const a=await fetch(e.u.replace(/\/+$/,"")+"/rest/v1/rpc/get_public_settings",{method:"POST",body:"{}",headers:{apikey:e.k,Authorization:"Bearer "+e.k,"Content-Type":"application/json"}});if(!a.ok)return;const s=await a.json();if(!s||typeof s!="object")return;let n=!1,o=!1,i=!1;const l=Ua;if(t){typeof s.sellerPhone=="string"&&Eo(s.sellerPhone);const h=JSON.stringify(xn);So(s.payLinks),n=JSON.stringify(xn)!==h;const b={};typeof s.businessEmail=="string"&&(b.email=s.businessEmail),typeof s.businessAddress=="string"&&(b.address=s.businessAddress),typeof s.businessPhone=="string"&&(b.phone=s.businessPhone),o=Object.keys(b).length>0,o&&Bs(b),Lo(s.vatMode),nr(s.vatMode),i=Ys(s.launchFree)}const d=s.maintenance,c=s.announcement,u=d&&d.text?{text:String(d.text),warn:!0}:c&&c.text?{text:String(c.text),warn:c.tone==="warn"}:null;Vt=u?{text:u.text.slice(0,280),warn:u.warn}:null,(Vt||o||n||i||Ua!==l)&&W()}catch{}}function Mc(){return Vt?`<div class="banner${Vt.warn?" warn":""}" role="status" style="margin:0 0 12px;">${r(Vt.text)}</div>`:""}function Oc(){return`<a class="btn primary block" href="${Cc}" target="_blank" rel="noopener" style="margin-top:14px;">
        ${he("chart",18)} לאזור הניהול המקצועי</a>
      <p class="hint">לוח בקרה, הכנסות, רישיונות, פרטיות ויומן פעולות — בכניסה מאובטחת עם אימות דו־שלבי.</p>`}const Xt={iter:0,salt:"",hash:""},ya="shaveh_admin_s1";let As=!1,Ln="";J.del("shaveh_admin_v1");function za(){try{return JSON.parse(Ht.get(ya)||"null")}catch{return null}}(function(){const t=za();t&&typeof t.s=="string"&&Ht.del(ya)})();function qa(){const e=za();return!e||e.m!=="server"?"":typeof e.t=="string"&&/^sess_[A-Za-z0-9_-]{20,100}$/.test(e.t)?e.t:e.mem&&Ln?Ln:""}const To=()=>C&&C.serverAdmin?"server":"local";function It(){if(As)return!0;const e=za();return!!(e&&e.m===To()&&(e.m==="local"||qa()))}function Co(){const e=za();e&&typeof e.t=="string"&&C&&C.adminLogout&&C.adminLogout(e.t),Ln="",Ht.del(ya)}function Pc(){za()&&(Co(),S("הגישה לאזור המנהל פגה — יש להיכנס מחדש"),W())}async function Nc(e,t,a){const s=new TextEncoder,n=new Uint8Array((t.match(/../g)||[]).map(l=>parseInt(l,16))),o=await crypto.subtle.importKey("raw",s.encode(e),"PBKDF2",!1,["deriveBits"]),i=await crypto.subtle.deriveBits({name:"PBKDF2",hash:"SHA-256",salt:n,iterations:a},o,256);return Array.from(new Uint8Array(i)).map(l=>l.toString(16).padStart(2,"0")).join("")}async function Hc(e,t){const a=String(e||"").trim();if(a.length<12||a.length>200)return{ok:!1,error:"denied"};if(To()==="server"){const o=await C.adminLogin(a,String(t||"").replace(/\D/g,"").slice(0,6));return o&&typeof o.token=="string"&&o.token.indexOf("sess_")===0?(Ht.set(ya,JSON.stringify({m:"server",t:o.token})),{ok:!0}):o&&o.legacy?(o.ok&&(Ln=a,Ht.set(ya,JSON.stringify({m:"server",mem:!0}))),{ok:!!o.ok,error:o.ok?"":"denied"}):{ok:!1,error:o&&typeof o.error=="string"&&o.error||"denied"}}if(!Xt.hash||!Xt.salt||!(crypto&&crypto.subtle))return{ok:!1,error:"no_local"};const s=await Nc(a,Xt.salt,Xt.iter);let n=s.length^Xt.hash.length;for(let o=0;o<s.length&&o<Xt.hash.length;o++)n|=s.charCodeAt(o)^Xt.hash.charCodeAt(o);return n===0&&Ht.set(ya,JSON.stringify({m:"local"})),{ok:n===0,error:n===0?"":"denied"}}const En={denied:"הסיסמה שגויה — נסו שוב",code:"הקוד שגוי או שפג תוקפו — הזינו את הקוד העדכני מאפליקציית האימות",totp_required:"הזינו את הקוד בן 6 הספרות מאפליקציית האימות",rate:"יותר מדי ניסיונות — נסו שוב בעוד כמה דקות",stale_migration:"השרת דורש עדכון לפני כניסה — ראו את אזור הניהול המקצועי",no_local:"במכשיר הזה אין כניסה מקומית לאזור המנהל — היכנסו דרך אזור הניהול המקצועי"},va="shaveh_known_v1",$a=/^[A-Za-z0-9_-]{22,64}$/,wa=/^[A-Za-z0-9_-]{1,100}$/,Sn="shaveh_src_v1";function Ic(){let e=null;try{e=JSON.parse(J.get(Sn)||"null")}catch{e=null}const t=Date.now(),a=Logic.sourceFromQuery(location.search,{kinds:_t.map(n=>n.id),joinRe:wa,now:t}),s=Logic.firstTouch(e,a,t);if(!s){e!=null&&J.del(Sn);return}JSON.stringify(s)!==JSON.stringify(e)&&J.set(Sn,JSON.stringify(s))}function Dc(){try{return Logic.sourceValid(JSON.parse(J.get(Sn)||"null"),Date.now())}catch{return null}}function ka(){let e=null;try{e=JSON.parse(J.get(va)||"null")}catch{e=null}if(!e||typeof e!="object"||Array.isArray(e)){e={};const t=s=>{wa.test(s)&&!e[s]&&(e[s]={at:Date.now()})},a=s=>{try{return JSON.parse(J.get(s)||"{}")||{}}catch{return{}}};Object.keys(a("shaveh_owner_v1")).forEach(t),Object.keys(a("shaveh_me_v2")).forEach(t),Object.keys(a("shaveh_mgrpass_v1")).forEach(t),J.set(va,JSON.stringify(e))}return e}function Zt(e,t,a){if(!e||!wa.test(e)||$t)return;const s=ka(),n=s[e]||{},o=!!(t&&$a.test(t));if(a&&o&&n.k&&n.k!==t){if(n.nk===t)return;s[e]=Object.assign({},n,{nk:t,at:Date.now()}),J.set(va,JSON.stringify(s));return}const i=o?t:n.k,l=o&&!!n.nk;if(n.k===i&&s[e]&&!l&&Date.now()-(n.at||0)<864e5)return;const d=Object.assign({},n,i?{k:i}:{},{at:Date.now()});l&&delete d.nk,s[e]=d,J.set(va,JSON.stringify(s))}function Rc(e,t){const a=ka(),s=a[e];if(!s||!s.nk)return;const n=Object.assign({},s);t&&(n.k=s.nk),delete n.nk,a[e]=n,J.set(va,JSON.stringify(a))}const jo=e=>(ka()[e]||{}).nk||"";function _n(e){Bc(e);const t=ka();t[e]&&(delete t[e],J.set(va,JSON.stringify(t)))}const Ms="shaveh_mkeys_v1";function Os(){try{const e=JSON.parse(J.get(Ms)||"{}");return e&&typeof e=="object"&&!Array.isArray(e)?e:{}}catch{return{}}}function Qt(e,t){const a=Os()[e],s=a&&t?a[t]:"";return typeof s=="string"&&$a.test(s)?s:""}function Tn(e,t,a){if($t||!wa.test(e||"")||!wa.test(t||"")||!$a.test(a||""))return;const s=Os();s[e]=Object.assign({},s[e],{[t]:a}),J.set(Ms,JSON.stringify(s))}function Bc(e){const t=Os();t[e]&&(delete t[e],J.set(Ms,JSON.stringify(t)))}const Ja=e=>(ka()[e]||{}).k||"";function Ao(){const e=new Uint8Array(16);return crypto.getRandomValues(e),btoa(String.fromCharCode.apply(null,Array.from(e))).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function Dt(e){return"https://wa.me/?text="+encodeURIComponent(e)}function ea(e,t){let a=Logic.normalizePhone(e);return a.indexOf("0")===0&&(a=a.slice(1)),"https://wa.me/972"+a+"?text="+encodeURIComponent(t)}const Fc={trip:{noun:"הטיול",word:"טיול",warm:"היה נפלא לטייל יחד!",bye:"בטיול הבא"},mangal:{noun:"המנגל",word:"מנגל",warm:"היה נפלא להיפגש!",bye:"במנגל הבא"},family:{noun:"המפגש",word:"מפגש",warm:"היה נפלא להיות יחד!",bye:"במפגש הבא"},team:{noun:"הערב",word:"ערב",warm:"היה ערב נהדר!",bye:"בערב הבא"},reunion:{noun:"המפגש",word:"מפגש",warm:"היה נפלא להיפגש שוב!",bye:"במפגש הבא"},simcha:{noun:"האירוע",word:"אירוע",warm:"היה נפלא לשמוח יחד!",bye:"בשמחות"},producer:{noun:"האירוע",word:"אירוע",warm:"היה תענוג לעבוד יחד!",bye:"באירוע הבא"},kablan:{noun:"הפרויקט",word:"פרויקט",warm:"תודה על עבודה משותפת!",bye:"בפרויקט הבא"},other:{noun:"האירוע",word:"אירוע",warm:"היה נפלא לחגוג יחד!",bye:"באירוע הבא"}},Mo=e=>Fc[qe(e).id]||null,Cn=e=>e.map(t=>t&&"‏"+t).join(`
`),Tt=(e,t)=>Ae(Math.abs(e),t).replace(/\.00(?!\d)/,""),ta=(e,t)=>{const a=Tt(e,t);return a.charAt(0)==="‏"?"‏*"+a.slice(1)+"*":"*"+a+"*"},Re=e=>Logic.waUser(e,60),Ps=e=>(/^[\u0590-\u05FF]/.test(Logic.cleanText(e,60))?"ל":"ל־")+Re(e),Ct=e=>{let t=String(e||"");return/^[1-9]\d{7,8}$/.test(t)&&(t="0"+t),/^05\d{8}$/.test(t)||/^07\d{8}$/.test(t)?t.slice(0,3)+"-"+t.slice(3):/^0\d{8}$/.test(t)?t.slice(0,2)+"-"+t.slice(2):t},Uc=(e,t,a,s)=>e===1?t:e===2?a:e+" "+s;function Ns(e){const t=e.start?_e(e.start):"",a=e.start?_e(e.end||e.start):"",s=t?t===a?t:`${t}–${a}`:"";return[e.dest?Re(e.dest):"",s].filter(Boolean).join(" · ")}function Oo(e){return Logic.splitsByHead(e)?"חלוקה לפי ראשים"+(Logic.kidRateOf(e)===1?"":" · "+dn(e).replace(/\.$/,"")):""}const Po=e=>Logic.settleModeOf(e)==="min"?"_שיטה: קיזוז · מספר ההעברות הקטן ביותר_":"_שיטה: העברות ישירות · החזר לפי כל הוצאה_",Hs=e=>Ne&&!cc(e),Is=e=>Hs(e)?": "+Ia(e):"",Ds=e=>{const t=Ut(e);return t?`_${Re(t.name)} · באמצעות ״שווה בשווה״_`:"_שווה בשווה_"};function jn(e,t,a,s,n,o){const i=Be(e,t),l=Logic.dec(e.base),d=o||pe(e.id),c=Logic.payTextLines(i.pay,{name:Re(i.name),memberPhone:Oe(i),secure:Ge(e),level:a,warnBank:i.id!==d,amount:s>0?Logic.fromCents(s,l).toFixed(l):"",cur:e.base,userText:Re});if(c.length){const h=Al(i);return a!=="names"&&i.id!==pe(e.id)&&h&&c.push(`_פרטי התשלום עודכנו ב־${rs(h)} — כדאי לוודא מול ${Re(i.name)} לפני העברה_`),c}if(a==="names")return[];const u=n?Oe(i):"";return[u?`אמצעי התשלום: לתאם ישירות עם ${Re(i.name)}, בטלפון ${Ct(u)}`:`אמצעי התשלום: לתאם ישירות עם ${Re(i.name)}`]}function Kc(e){const t=Mo(e),a=[`${Xe(e)} *הזמנה להצטרף לקבוצת ״${Re(e.name)}״*`],s=Ut(e);a.push(s?`_באדיבות ${Re(s.name)} · ${t?"כל הוצאות "+t.noun:"כל ההוצאות"} במקום אחד_`:`_${t?"כל הוצאות "+t.noun:"כל ההוצאות"} במקום אחד, והחשבון מתחלק ״שווה בשווה״_`),a.push("");const n=Ns(e);n&&a.push(n);const o=(e.members||[]).map(l=>Re(l.name));if(o.length){const l=o.length>8?o.slice(0,6).join(", ")+` ועוד ${o.length-6}`:o.join(", ");a.push("כבר בקבוצה: "+l)}const i=Oo(e);return i&&a.push(i),Number(e.budget)>0&&(fe(e)||dt(e).sum==="on")&&a.push("תקציב: "+Tt(Logic.toCents(e.budget,Logic.dec(e.base)),e.base)),a.push(""),a.push("*להצטרפות בלחיצה:* "+Ia(e)),Ut(e)&&(a.push(""),a.push(Ds(e))),Cn(a)}function An(e){const t=Logic.computeBalances(e,g.expenses),a=Logic.computeBalances(e,Logic.onlyExpenses(g.expenses)),s=Fn(g.expenses),n=[`${Xe(e)} *סיכום הוצאות · ״${Re(e.name)}״*`],o=Ns(e);o&&n.push(`_${o}_`),n.push(""),n.push(`סה״כ ${ta(t.grand,e.base)} · ${Uc(s,"הוצאה אחת","שתי הוצאות","הוצאות")}`);const i=Oo(e);i&&n.push(i),n.push(""),n.push("*מצב החשבון*"),ll(e,t).forEach(d=>{const c=t.net[d.id]||0;n.push(c>0?`▲ *${Re(d.name)}* · לקבל ${ta(c,e.base)}`:c<0?`▼ *${Re(d.name)}* · לשלם ${ta(c,e.base)}`:`— *${Re(d.name)}* · ללא יתרה`),n.push(`_שולם ${Tt(a.paid[d.id]||0,e.base)} · חלק בהוצאות ${Tt(a.share[d.id]||0,e.base)}_`)});const l=Logic.transfersFor(e,g.expenses);if(n.push(""),l.length){n.push("*העברות לסגירת החשבון*"),n.push(Po(e)),l.forEach(u=>n.push(`◂ מאת ${Re(me(e,u.from))} ${Ps(me(e,u.to))}: ${ta(u.cents,e.base)}`));const d=[];l.forEach(u=>{d.indexOf(u.to)<0&&d.push(u.to)});const c=[].concat(...d.map(u=>jn(e,u,"names")));c.length&&(n.push(""),n.push("*איך מעבירים*"),c.forEach(u=>n.push(u)),n.push("_הפרטים המלאים מופיעים באפליקציה, אצל מי שצריך להעביר_")),n.push(""),n.push(`✓ ${l.length===1?"אחרי ההעברה":"אחרי כל העברה"}, לסמן ״שולם״ באפליקציה${Is(e)}`)}else n.push("✓ *החשבון סגור, אין העברות פתוחות*"),Hs(e)&&n.push("לפרטים באפליקציה: "+Ia(e));return n.push(""),n.push(Ds(e)),Cn(n)}function Rs(e,t){const a=Logic.computeBalances(e,g.expenses),s=Logic.computeBalances(e,Logic.onlyExpenses(g.expenses)),n=Logic.transfersFor(e,g.expenses),o=a.net[t]||0,i=Be(e,t),l=[`${Xe(e)} *החשבון של ${Re(i.name)} · ״${Re(e.name)}״*`],d=Ns(e);d&&l.push(`_${d}_`),l.push(""),l.push(o>0?`▲ *בשורה התחתונה: לקבל ${Tt(o,e.base)}*`:o<0?`▼ *בשורה התחתונה: לשלם ${Tt(o,e.base)}*`:"— *בשורה התחתונה: ללא יתרה*"),l.push(`_שולם ${Tt(s.paid[t]||0,e.base)} · חלק בהוצאות ${Tt(s.share[t]||0,e.base)}_`);const c=n.filter(h=>h.from===t),u=n.filter(h=>h.to===t);if(c.length||u.length){const h=fe(e);l.push(""),l.push("*העברות פתוחות*"),l.push(Po(e)),c.forEach(b=>{l.push(`◂ להעביר ${Ps(me(e,b.to))}: ${ta(b.cents,e.base)}`),(Fi(Be(e,b.to))||h)&&jn(e,b.to,"full",b.cents,h).forEach(v=>l.push(v))}),u.forEach(b=>l.push(`▸ לקבל מאת ${Re(me(e,b.from))}: ${ta(b.cents,e.base)}`)),u.length&&Fi(i)&&(l.push(""),l.push("*איך להעביר לי*"),jn(e,t,"full",u.length===1?u[0].cents:0,!1,"__other").forEach(b=>l.push(b))),l.push(""),c.length?l.push(`✓ ${c.length===1?"אחרי ההעברה":"אחרי כל העברה"}, לסמן ״שולם״ באפליקציה${Is(e)}`):Hs(e)&&l.push("לפרטים באפליקציה: "+Ia(e))}return Cn(l)}function zc(e,t,a){const s=Mo(e),n=Logic.cleanText(e.name,80),o=Re(n);let i;const l=Xe(e);s?new RegExp("^ה?"+s.word+"(\\s|$)").test(n)?i=`${l} *״${o}״ הסתיים*`:i=`${l} *${s.noun} ״${o}״ הסתיים*`:i=`${l} *סגירת חשבון · ״${o}״*`;const d=[i];d.push(`שלום ${Re(t.name)}, ${s?s.warm:"הגיע הזמן לסגור את החשבון."}`);const c=a.length;if(d.push(c===1?"לסגירת החשבון נשארה העברה אחת בלבד:":c===2?"לסגירת החשבון נשארו שתי העברות:":`לסגירת החשבון נשארו ${c} העברות:`),a.forEach(u=>{d.push(""),d.push(`◂ *להעביר ${Ps(me(e,u.to))}: ${Tt(u.cents,e.base)}*`),jn(e,u.to,"full",u.cents,!0,t.id).forEach(h=>d.push(h))}),c>=2){const u=a.reduce((h,b)=>h+b.cents,0);d.push(""),d.push(`${c===2?"סה״כ בשתי ההעברות":"סה״כ בכל ההעברות"}: ${ta(u,e.base)}`)}return d.push(""),d.push(`✓ ${c===1?"אחרי ההעברה":"אחרי כל העברה"}, לסמן ״שולם״ באפליקציה${Is(e)}`),d.push(""),d.push(s?`תודה רבה, ונתראה ${s.bye}!`:"תודה רבה!"),d.push(Ds(e)),Cn(d)}const Oe=e=>e&&e.phone?Logic.normalizePhone(e.phone):"",aa=e=>!!Oe(e),Mn=(e,t)=>Logic.phonesEqual(Oe(e),t);function Du(e,t){return Logic.phoneKey(t)&&(e.members||[]).find(a=>Mn(a,t))||null}const No="shaveh_owner_v1";function lt(){try{return JSON.parse(J.get(No)||"{}")||{}}catch{return{}}}function xa(e,t){const a=lt();a[e]=t,J.set(No,JSON.stringify(a))}const Ya={email:"shavehbeshaveh.app@gmail.com",address:"רחוב האר״י 100/51, צפת 1320950",phone:"",hours:""},vt=Object.assign({name:"שמעון שטרן",bizId:"207518226"},Ya);function qc(e){if(typeof e!="string"||e.length>30)return"";const t=Logic.normalizePhone(e);return/^0[2-9]\d{7,8}$/.test(t)?t:""}function Bs(e){if(!e||typeof e!="object")return;const t=(a,s)=>typeof a=="string"?a.trim().slice(0,s):"";if("email"in e){const a=t(e.email,120);vt.email=/^[^\s@<>"']+@[^\s@<>"']+\.[^\s@<>"']{2,}$/.test(a)?a:Ya.email}"address"in e&&(vt.address=t(e.address,200)||Ya.address),"phone"in e&&(vt.phone=qc(e.phone)||Ya.phone),"hours"in e&&(vt.hours=t(e.hours,80)||Ya.hours)}let Fs=null;function Jc(e){if(!e)return!1;if((e.purchases||[]).some(a=>a&&Number(a.price)>0))return!0;const t=Logic.planState(e,be,Date.now(),na(),Ce);return t.id!=="free"&&t.id!=="legacy"}function Ho(){return $t?Fs!==!1:dr()?!0:(g.trips||[]).some(e=>e&&!e.demo&&Jc(e)&&fe(e))}function Qe(e){const t=vt.phone||"",a=e===!0||e!==!1&&Ho();return{name:vt.name,bizId:a?vt.bizId:"",full:a,phoneRaw:t,phone:t?t.replace(/^(0[57]\d)(\d{7})$/,"$1-$2").replace(/^(0[2-9])(\d{7})$/,"$1-$2"):"",tel:t?"+972"+t.replace(/^0/,""):"",mobile:/^05\d{8}$/.test(t),email:vt.email,address:a?vt.address:"",hours:t?vt.hours:""}}function Wa(e){return e.phone?`<a href="tel:${r(e.tel)}" class="num" dir="ltr">${r(e.phone)}</a>`:""}function Ga(e){return e.email?`<a href="mailto:${r(e.email)}" dir="ltr">${r(e.email)}</a>`:""}function On(e){const t=Qe(e&&e.full),a=r(t.name)+(t.bizId?` · ת״ז/מספר עוסק <span class="num" dir="ltr">${r(t.bizId)}</span>`:"");return e&&e.noPhone||!t.phone?a:`${a} · טלפון ${Wa(t)}`}const Yc="פרטי העוסק המלאים, כולל מען למשלוח דואר, מוצגים לפני כל רכישה ובאישור העסקה שנשלח לרוכש.",Io="לכתובת המופיעה באישור העסקה";function Us(e){return Qe(e&&e.full).full?"":`<p class="legal-biz-note" data-ref="biz-note">${Yc}</p>`}function La(e,t){const a=Qe(t&&t.full),s=!!(t&&t.noForm),n=[];a.email&&n.push(`<li><b>דוא״ל</b>: ${Ga(a)}</li>`),a.address?n.push(`<li><b>${e==="general"?"דואר":"דואר רשום"}</b>: ${r(a.address)}</li>`):e==="cancel"&&n.push(`<li><b>דואר רשום</b>: ${Io}</li>`);const o=e==="cancel"?'הקישור <button type="button" class="linklike" data-help-open="contact" data-help-id="cancellation">״ביטול עסקה״</button> בתחתית מסך הבית':`<button type="button" class="linklike" data-help-open="contact"${e==="privacy"?' data-help-id="privacy"':e==="a11y"?' data-help-id="accessibility"':""}>״פנייה לנציג״</button> במרכז העזרה`;return s||n.push(`<li><b>${e==="cancel"?"טופס באפליקציה":"באתר"}</b>: ${o}</li>`),a.phone&&n.push(`<li><b>טלפון</b> (שיחה קולית): ${Wa(a)}${a.hours?` · ${r(a.hours)}`:""}</li>`),a.mobile&&n.push(`<li><b>וואטסאפ</b>${e==="cancel"||e==="privacy"?" (דרך נוספת)":""}: <span class="num" dir="ltr">${r(a.phone)}</span>${e==="a11y"?" — גם בהודעה כתובה":""}</li>`),`<ul class="legal-contact">${n.join("")}</ul>`}function Ks(e,t){const a=Qe(t&&t.full);return zs([a.email?`בדוא״ל ${Ga(a)}`:"",a.phone?`בטלפון ${Wa(a)}`:"",a.address?`בדואר רשום: ${r(a.address)}`:`בדואר רשום ${Io}`,e])}function Do(){const e=Qe(!0);return`
      <details class="pay-biz" data-ref="pay-biz">
        <summary>פרטי העוסק</summary>
        <ul class="legal-contact">
          <li><b>מפעיל השירות</b>: ${r(e.name)}</li>
          <li><b>ת״ז/מספר עוסק</b>: <span class="num" dir="ltr">${r(e.bizId)}</span></li>
          ${e.phone?`<li><b>טלפון</b>: ${Wa(e)}</li>`:""}
          <li><b>דוא״ל</b>: ${Ga(e)}</li>
          <li><b>מען למשלוח דואר</b>: ${r(e.address)}</li>
        </ul>
      </details>`}function zs(e){const t=e.filter(Boolean);return t.length>1?`${t.slice(0,-1).join(", ")} או ${t[t.length-1]}`:t[0]||""}function qs(){if(js)return js;const e=Qe();return e.mobile?e.phoneRaw:""}function Ea(){return qs()?"wa":"mail"}function Pn(){return Ea()==="wa"?"בוואטסאפ":"בדוא״ל"}function Ro(e,t,a){const s=n=>encodeURIComponent(String(n||"").replace(/\r?\n/g,`\r
`));return"mailto:"+e+"?subject="+s(t)+"&body="+s(a)}function Va(e,t){const a=qs();return a?ea(a,e):Ro(Qe().email,t||"שווה בשווה — בקשה",e)}function Xa(e){return Ea()==="wa"?e?"btn wa block":"btn wa soft block":e?"btn primary block":"btn block"}function Js(){return Ea()==="wa"?' data-seller="wa" target="_blank" rel="noopener"':' data-seller="mail"'}const Nn="14.10.2026",Bo={terms:{ttl:"תקנון שימוש",body:()=>{const e=Qe();return`
      <h3>1 · מהות השירות ופרטי מפעיל השירות</h3>
      <p>״שווה בשווה״ הוא כלי לרישום ולחישוב של הוצאות משותפות בקבוצות. השירות מופעל על ידי ״מפעיל השירות״: ${On()}. פרטי ההתקשרות:</p>
      ${La("general")}
      ${Us()}
      <h3>2 · השירות אינו שירות תשלומים</h3>
      <p>האפליקציה מחשבת ומציגה בלבד. כסף בין המשתתפים אינו עובר דרך השירות: ההעברות מתבצעות ישירות ביניהם (ביט, פייבוקס, מזומן וכדומה), באחריותם הבלעדית. סימון ״שולם״ הוא רישום בלבד ואינו אסמכתא לביצוע העברה. פרטי התשלום שמוצגים בקבוצה (טלפון לביט/פייבוקס, פרטי חשבון וכדומה) מוזנים על ידי המשתתפים ובאחריותם — יש לוודא אותם מול המקבל לפני כל העברה.</p>
      <h3>3 · נכונות החישובים</h3>
      <p>החישובים מבוססים אך ורק על הנתונים שהזינו המשתתפים. שערי מטבע הם משוערים או מתעדכנים באיחור, ומסומנים ככאלה; באחריות המשתתפים לוודא סכומים לפני העברת כסף. השירות ומפעילו אינם אחראים לטעויות הזנה, לסכסוכים בין משתתפים או לנזקים עקיפים.</p>
      <h3>4 · אחריות מנהל הקבוצה</h3>
      <p>מי שפותח קבוצה אחראי לנכונות פרטיה, לשיתוף קישור ההצטרפות רק עם חברי הקבוצה, ולשימוש בבקרות הפרטיות. קישור ההצטרפות מקנה גישה לנתוני הקבוצה — יש לשתפו בזהירות.</p>
      <h3>5 · מסלולים בתשלום</h3>
      <p>המחירים מוצגים במסך ״המסלולים״. ${r(Ka())} השירות דיגיטלי ומסופק מיידית עם ההפעלה. מסלולי קבוצה (שבוע, חודש, שנה) וחבילות השלמה חלים על הקבוצה שעבורה נרכשו, לתקופה ולמספר ההוצאות שצוינו בהם; מעבר למסלול גדול יותר בזמן שהמסלול הקיים בתוקף — בתשלום ההפרש; חידוש של אותו מסלול מתווסף לסוף התוקף הקיים. רישיון עסקי (חודשי או שנתי) חל על כל הקבוצות שפותח מנהל שמספר הטלפון שלו רשום ברישיון, וכולל הצגת שם העסק והלוגו שלו. בתום תקופה הקבוצה חוזרת למכסת המסלול החינמי, ורק הוספת הוצאות מעבר לה נעצרת — הנתונים, הצפייה וההתחשבנות נשמרים. רישיון עסקי אינו מחליף את המסלול של הקבוצה: בתום הרישיון חוזרת הקבוצה למסלול שהיה לה. אין חידוש אוטומטי. בתקופת השקה המוצגת באתר ובאפליקציה השירות ניתן ללא תשלום ואינו מחייב רכישה; המחירים מוצגים לידיעה בלבד וייכנסו לתוקף רק כפי שיוצג באתר, וקבוצה שנפתחה בתקופה זו נשארת ללא הגבלת הוצאות גם לאחריה.</p>
      <p>תשלום באתר מתבצע בעמוד התשלום המאובטח של Grow (לשעבר משולם), חברת סליקה מורשית — בכרטיס אשראי, Bit, Apple Pay או Google Pay. פרטי אמצעי התשלום נמסרים ל-Grow בלבד ואינם נשמרים אצלנו, וקבלה נשלחת אוטומטית. כשהתשלום בעמוד המאובטח מאושר — המסלול מופעל מיד; בתשלום בקישור תשלום או בהעברה ישירה למפעיל השירות — ההפעלה ידנית, לאחר אישור התשלום.</p>
      <h3>6 · ביטול עסקה והחזרים</h3>
      <p>אפשר לבטל רכישה של מסלול, רישיון או חבילת השלמה בתוך <span class="num">14</span> יום מיום הרכישה או מיום קבלת המסמך עם פרטי העסקה — המאוחר מביניהם, גם אם השירות כבר הופעל. התשלום יוחזר לאותו אמצעי תשלום בתוך <span class="num">14</span> יום מקבלת הודעת הביטול, בניכוי תמורה יחסית לתקופה שבה נעשה שימוש בשירות, ובניכוי דמי ביטול של עד <span class="num">5%</span> ממחיר העסקה או <span class="num">100 ₪</span> — הנמוך מביניהם (חוק הגנת הצרכן, התשמ״א-1981, סעיפים 14ג ו־14ה).</p>
      <p>אנשים עם מוגבלות, אזרחים ותיקים ועולים חדשים רשאים לבטל בתוך <span class="num">4</span> חודשים מיום העסקה או מיום קבלת המסמך עם פרטי העסקה — המאוחר מביניהם, כאשר ההתקשרות כללה שיחה עם מפעיל השירות, לרבות שיחה בתקשורת אלקטרונית (סעיף 14ג1).</p>
      <p><b>אפשר למסור הודעת ביטול בכל אחת מהדרכים האלה:</b></p>
      ${La("cancel")}
      <p>בהודעת הביטול מציינים שם ומספר זהות${e.phone?"; בביטול טלפוני ייתכן שנבקש פרט מזהה נוסף, אם סוכם עליו מראש":""}. בטופס שבאתר מספר זהות אינו חובה — די בשם, בטלפון לחזרה ובשם הקבוצה או המסלול; מי שרוצים לציין אותו יכולים לכתוב אותו בתוכן ההודעה.</p>
      <p>ההתקשרות תסתיים בתוך <span class="num">3</span> ימי עסקים מקבלת ההודעה (<span class="num">6</span> ימי עסקים בהודעה שנשלחה בדואר רשום), ומאותו מועד לא ייגבה תשלום נוסף. אישור על הביטול יישלח בכתב.</p>
      <h3>7 · העוזר הדיגיטלי (בינה מלאכותית)</h3>
      <p>במרכז העזרה פועל עוזר דיגיטלי מבוסס בינה מלאכותית. זו מערכת אוטומטית ולא אדם; התשובות שלו הן מידע כללי בלבד, וייתכנו בהן טעויות. במקרה של סתירה — גוברים תקנון זה והמחירים שבמסך ״המסלולים״. העוזר אינו מקבל הודעות ביטול, בקשות החזר או בקשות לפי חוק הגנת הפרטיות, ואינו מבצע פעולות בחשבון — לשם כך פונים בדרכים שבסעיף 6 או ב״פנייה לנציג״ שבמרכז העזרה. קריאת קבלה מצולמת בבינה מלאכותית (״לקרוא מהקבלה״) היא עזר למילוי הטופס בלבד; הסכומים והפריטים שנקראו טעונים בדיקה, והאחריות לנכונות ההוצאה שנשמרת היא על מי שרושם אותה.</p>
      <h3>8 · פניות ותלונות</h3>
      <p>מענה אנושי ניתן בנושאים שהחוק מחייב בהם פנייה ישירה: ביטול עסקה, החזר כספי או חיוב שגוי, עיון במידע אישי, תיקונו או מחיקתו, נגישות, ותלונות — כולל תלונה על תשובה שגויה של העוזר. פונים דרך ״פנייה לנציג״ במרכז העזרה או בפרטי ההתקשרות שבסעיף 1. לכל פנייה בטופס ניתן מספר פנייה, ומענה ראשון ניתן בדרך כלל בתוך <span class="num">2</span> ימי עסקים.</p>
      <h3>9 · שימוש הוגן</h3>
      <p>אין להשתמש בשירות למטרה בלתי חוקית, להזין תוכן פוגעני או להתחזות לאחר. מפעיל השירות רשאי להסיר תוכן או קבוצה החורגים מכך.</p>
      <h3>10 · זמינות ושינויים</h3>
      <p>השירות ניתן כפי שהוא (As-Is). ייתכנו הפסקות זמינות, עדכונים ושינויים בתקנון; הודעה על שינוי מהותי תוצג באפליקציה. מומלץ לגבות נתונים חשובים (אזור המנהל ← גיבוי).</p>
      <h3>11 · דין וסמכות שיפוט</h3>
      <p>על השימוש בשירות יחול הדין הישראלי בלבד, וסמכות השיפוט הבלעדית נתונה לבית המשפט המוסמך בישראל.</p>`}},privacy:{ttl:"מדיניות פרטיות",body:()=>{const e=Qe();return`
      <h3>1 · מי אחראי למידע</h3>
      <p>בעל השליטה במאגר המידע של ״שווה בשווה״ הוא מפעיל השירות, ${On({noPhone:!0})}. אפשר לפנות אליו בכל עניין של פרטיות:</p>
      ${La("general")}
      ${Us()}
      <h3>2 · איזה מידע נאסף</h3>
      <p>שם, מספר טלפון, פרטי ההוצאות שהוזנו (סכומים, תיאורים, תאריכים), תמונות קבלות שהועלו, והגדרות הקבוצה. ברשות המשתתף בלבד: הדרכים שבהן נוח לו לקבל כסף — טלפון לביט או לפייבוקס, שם משתמש ב־PayPal, הערה, ופרטי חשבון בנק (כשהשמירה המאובטחת פעילה). לא נאסף מידע מעבר לנדרש להפעלת השירות, למעט נתון מדידה אחד: הערוץ שדרכו נפתחה קבוצה (פירוט בסעיף 5). בפנייה לנציג — גם שם, טלפון או דוא״ל לחזרה ותוכן הפנייה. מסירת המידע נעשית מרצון ואינה חובה לפי דין; בלי הפרטים הנדרשים לא ניתן להשתמש בחלק מהיכולות (למשל זיהוי משתתף בקבוצה או חזרה אליכם בפנייה).</p>
      <h3>3 · מטרת השימוש</h3>
      <p>הצגת החשבון המשותף לחברי הקבוצה, זיהוי בכניסה לחשבון, שליחת התראות על פעילות בקבוצה, הפעלת מסלולים בתשלום, מענה על פניות, ומדידת הערוץ שדרכו נפתחה קבוצה (מדידה של צד ראשון, שמשמשת אותנו בלבד כדי לדעת אילו ערוצי פרסום מביאים משתמשים). המידע אינו נמכר ואינו מועבר לצדדים שלישיים למטרות שיווק. תשלום באתר מתבצע אצל Grow (לשעבר משולם), שמקבלת לצורך זה את השם, הטלפון ופרטי אמצעי התשלום ומנפיקה את הקבלה; אצלנו נשמרים רק פרטי העסקה (שם, טלפון, סכום ומזהה עסקה) לצורכי הנהלת חשבונות, וגיבוב חד־כיווני של כתובת הרשת — להגבלת ניסיונות תשלום חוזרים בלבד.</p>
      <h3>4 · מי רואה את המידע</h3>
      <p>כל קבוצה נגישה רק למי שמחזיק בקישור ההזמנה שלה. הקישור כולל מפתח אקראי ארוך (128 ביט) שאי אפשר לנחש, והשרת מוסר את נתוני הקבוצה רק למי שמציג אותו. חריג זמני: קבוצות שנפתחו לפני הפעלת מנגנון המפתחות נפתחות, בתקופת מעבר של עד 60 יום, גם בקישור הישן שאין בו מפתח (לפי מזהה הקבוצה בלבד), כדי שקישורים שכבר נשלחו ימשיכו לעבוד; בכניסה הראשונה המכשיר מקבל את המפתח, ובתום התקופה גם קבוצות אלה נפתחות רק עם המפתח. אין שום דרך לעיין ברשימת הקבוצות של אחרים. בתוך הקבוצה, האפליקציה מציגה לכל משתתף את מה שמנהל הקבוצה קבע בהגדרות הנראות (ברירת המחדל: כל משתתף רואה את ההוצאות שלו בלבד). במצב הזה השרת אינו מוסר למשתתף את התיאור, ההערה ותמונת הקבלה של הוצאות של אחרים; אבל הסכומים, מי שילם ועל מי ההוצאה מתחלקת, וכן רשימת המשתתפים והטלפונים שלהם, נמסרים לכל מחזיק בקישור — הם נדרשים לחישוב היתרות. הסתרת המאזן של כולם והסיכום הקבוצתי היא הסתרה בתצוגה בלבד. לכן יש לשתף את הקישור רק עם חברי הקבוצה. שינוי של הטלפון או של פרטי התשלום של משתתף, ומחיקה של הוצאה שאדם אחר רשם, אפשריים רק מהמכשיר של המשתתף עצמו (מפתח אישי שנשמר בו בהצטרפות) או בידי מנהל הקבוצה. מחיקת קבוצה וקביעת סיסמת מנהל הקבוצה מחייבות את מפתח הניהול, שנשמר רק במכשיר שפתח את הקבוצה (או נמסר למי שנכנס בסיסמת מנהל הקבוצה). פרטי התשלום של משתתף נשמרים יחד עם נתוני הקבוצה ומוצגים לחבריה — בעיקר למי שצריך להעביר לו כסף (מספר החשבון מוצג מוסתר עד לחיצה על ״הצגה״); כמו שאר נתוני הקבוצה, הם נגישים לכל מי שמחזיק בקישור ההזמנה. פרטי חשבון בנק נאספים רק כשהשמירה המאובטחת פעילה. שינוי בפרטי התשלום או בטלפון של משתתף (כולל קביעת טלפון למשתתף שנרשם בלי טלפון) מוצג לכל הקבוצה, עם מועד השינוי, ואפשר להסיר את פרטי התשלום בכל רגע. מפעיל השירות ניגש לנתונים לצורכי תפעול, גיבוי ותמיכה בלבד, דרך אזור ניהול שהגישה אליו מאומתת בשרת.</p>
      <h3>5 · היכן המידע נשמר ומי עוד מעורב</h3>
      <p>בשרתי Supabase באיחוד האירופי (פרנקפורט, גרמניה). התקשורת מוצפנת (HTTPS). במכשיר שלכם (localStorage) נשמרים רשימת הקבוצות שלכם ומפתחות הגישה אליהן, והשם והטלפון שהזנתם — למילוי מהיר; ואם בחרתם בכך, גם הדרכים שבהן נוח לכם לקבל כסף — למילוי מראש בקבוצה הבאה, בדפדפן של המכשיר שלכם בלבד. מדידת מקור ההגעה: כשנכנסים מקישור של קמפיין (פרמטרים כמו utm_source או utm_campaign), מקישור לסוג קבוצה מסוים או מקישור הזמנה, נשמרים בדפדפן שלכם שם הערוץ והקמפיין כפי שהופיעו בקישור (בלי פרטים מזהים) ומועד הכניסה. אם תוך <span class="num">30</span> יום נפתחת מהמכשיר קבוצה חדשה, הנתונים האלה נשמרים יחד עם נתוני הקבוצה — ולכן הם קשורים לקבוצה ולמי שפתח אותה — וזמינים למפעיל השירות באזור הניהול; הם אינם מוצגים לחברי הקבוצה. תוקף 30 הימים נבדק בכניסה הבאה לאתר, ואז הרשומה בדפדפן נמחקת; אפשר גם למחוק אותה בכל רגע בניקוי נתוני האתר בדפדפן. זו מדידה שלנו בלבד — בלי עוגיות, בלי פיקסלים ובלי שירותי מדידה או פרסום של צד שלישי, והנתונים אינם מועברים לאף גורם. ספקים נוספים: תמונת יעד מוויקיפדיה (נשלח שם היעד בלבד), שערי מטבע מ־open.er-api.com, גופנים מ־Google Fonts, אחסון האתר, ווואטסאפ — רק כשאתם בוחרים לשתף.</p>
      <h3>6 · העוזר הדיגיטלי (בינה מלאכותית)</h3>
      <p>השאלות שכותבים לעוזר במרכז העזרה, יחד עם קטעים ממאמרי העזרה, נשלחות לעיבוד אצל ספק בינה מלאכותית חיצוני — Anthropic (ארצות הברית) — לצורך ניסוח התשובה בלבד. לא נשלחים אליו שם, טלפון או נתוני הקבוצה. אצלנו לא נשמר נוסח השאלות והתשובות, אלא רק נתונים סטטיסטיים אנונימיים (כמו מספר השאלות ועלותן), שנמחקים אחרי <span class="num">90</span> יום. לצורך הגבלת מספר השאלות נשמרים מזהה מכשיר אקראי, שאינו מזהה אדם, וגיבוב חד־כיווני של כתובת ה־IP, לכל היותר יומיים. אצל הספק השאלות והתשובות נשמרות לפרק זמן מוגבל בלבד, לפי התנאים המסחריים שלו (לצורך אבטחה ומניעת שימוש לרעה), ולפי אותם תנאים אינן משמשות לאימון מודלים. נא לא לכתוב לעוזר מספרי זהות, פרטי אשראי או מידע רגיש.</p>
      <p>קריאה מהקבלה: בלחיצה על ״לקרוא מהקבלה״ בטופס ההוצאה, תמונת הקבלה נשלחת לאותו ספק (Anthropic, ארצות הברית) לצורך קריאת הסכום, המטבע, התאריך והפריטים בלבד. אצל הספק התמונה נשמרת לפרק זמן מוגבל בלבד, לפי התנאים המסחריים שלו (לצורך אבטחה ומניעת שימוש לרעה), ולפי אותם תנאים אינה משמשת לאימון מודלים. התמונה אינה נשלחת בלי לחיצה מפורשת; אצלנו לא נשמר מה שנקרא ממנה (אלא אם שמרתם את ההוצאה), והתוצאה מוצגת לבדיקתכם לפני השמירה. הכפתור מופיע רק כשהעוזר הדיגיטלי פעיל. לפני הצילום כדאי לכסות פרטים רגישים, כמו ספרות כרטיס אשראי.</p>
      <h3>7 · פניות לנציג</h3>
      <p>פנייה שנשלחת בטופס ״פנייה לנציג״ נשמרת בטבלה סגורה בשרתי Supabase באיחוד האירופי, ומשמשת רק לטיפול בה ולתיעוד הטיפול. התראה על פנייה חדשה עשויה להישלח למפעיל השירות בדוא״ל — דרך ספק משלוח דוא״ל חיצוני, Resend (ארצות הברית), שמעביר את פרטי הפנייה (שם, פרטי קשר, נושא ותוכן) לתיבת הדוא״ל של המפעיל לצורך הטיפול בה בלבד. אפשר לבקש את מחיקת הפנייה בכל עת, בדרכים שבסעיף 8.</p>
      <h3>8 · אבטחה וזכויותיכם (לפי חוק הגנת הפרטיות, כולל תיקון 13)</h3>
      <p>הגישה לנתונים עוברת רק דרך ממשק בשרת שבודק את מפתח הקבוצה בכל פעולה; שדות של מסלולים ורישיונות אינם ניתנים לשינוי מהדפדפן. לכל אדם הזכות לעיין במידע עליו (סעיף 13), בעברית, בערבית או באנגלית, וכן לבקש לתקן מידע שאינו נכון, שלם, ברור או מעודכן, או למחוק אותו (סעיף 14). את הבקשה מגישים בכתב — ${zs([e.email?"בדוא״ל":"","בטופס ״פנייה לנציג״ (נושא: עיון, תיקון או מחיקה של מידע אישי)",e.address?"בדואר רשום לכתובת שבסעיף 1":""])}. העיון אינו כרוך בתשלום. מענה יינתן בתוך <span class="num">30</span> יום לכל היותר. מחיקת קבוצה מוחקת את נתוניה לצמיתות. במחיקת מידע אישי לבקשתכם נמחקים השם, הטלפון ופרטי התשלום בכל הקבוצות, וגם השם, הדוא״ל והטלפון ברישומי התשלום; הסכום, התאריך ומספר הקבלה של תשלום שבוצע נשמרים, כנדרש לפי דין לצורכי הנהלת חשבונות. פנייה לנציג נמחקת יחד איתם, אלא אם היא עדיין בטיפול או נדרשת כראיה (למשל לביטול עסקה).</p>
      ${La("privacy")}
      <h3>9 · גיל</h3>
      <p>השירות מיועד לבני 18 ומעלה, או לקטינים בידיעת אחראי מבוגר.</p>
      <h3>10 · עדכונים</h3>
      <p>מדיניות זו עודכנה לאחרונה ב־<span class="num">${r(Nn)}</span>; שינוי מהותי יוצג באפליקציה.</p>`}},a11y:{ttl:"הצהרת נגישות",body:()=>{const e=Qe();return`
      <h3>מחויבות</h3>
      <p>״שווה בשווה״ נבנתה כך שתהיה נגישה לכלל המשתמשים, בהתאם לתקן הישראלי ת״י 5568 ולהנחיות WCAG 2.1 ברמה AA.</p>
      <h3>מה יושם</h3>
      <p>ניווט מלא במקלדת ובקורא מסך (תוויות ARIA), יחסי ניגודיות תקניים, יעדי מגע בגודל 44 פיקסלים לפחות, גופן קריא בגודל מינימלי 12 פיקסלים, תמיכה במצב כהה, טפסים עם הודעות שגיאה ברורות, ותיאור מילולי לגרפים.</p>
      <h3>מרכז העזרה והעוזר הדיגיטלי</h3>
      <p>מרכז העזרה והעוזר הדיגיטלי (בינה מלאכותית) נבנו לפי אותו תקן: ניווט במקלדת, הקראת תשובות חדשות בקורא מסך ותוויות לכל שדה. מי שמתקשים להשתמש בעוזר, או מעדיפים מענה מאדם, יקבלו את אותו שירות בכל אחת מדרכי הפנייה שלהלן.</p>
      <h3>נתקלתם בקושי?</h3>
      <p>לדיווח על קושי בנגישות או לבקשת התאמה אפשר לפנות אל ${r(e.name)}, איש הקשר לנגישות בשירות:</p>
      ${La("a11y")}
      <p>נשיב בתוך <span class="num">2</span> ימי עסקים. עד לתיקון ליקוי נספק את השירות בדרך חלופית, ונתקן אותו בהקדם — ולכל המאוחר בתוך <span class="num">60</span> יום.</p>
      <h3>עדכון</h3>
      <p>ההצהרה עודכנה ב־<span class="num">${r(Nn)}</span>.</p>`}}};function Hn(e){const t=Bo[e];if(!t)return;const a=Qe();ge(`
      <div class="sheet-head"><h2 class="sheet-title">${r(t.ttl)}</h2></div>
      <div class="legal-body">${typeof t.body=="function"?t.body():t.body}</div>
      <p class="hint legal-foot">עודכן: <span class="num">${r(Nn)}</span>${a.email?` · שאלות: ${Ga(a)}`:""}</p>`)}const Wc=Date.parse("2026-09-23T00:00:00+03:00"),Gc=Date.parse("2026-10-04T00:00:00+03:00"),Fo={paywall:Wc,v2:Gc,oldFreeMax:15};let Je={active:!1,note:""};function Ys(e){const t=e&&typeof e=="object"&&!Array.isArray(e)?e:{},a=typeof t.note=="string"?t.note.replace(/[\u0000-\u001f<>]/g," ").replace(/\s+/g," ").trim().slice(0,140):"",s={active:t.active===!0,note:a},n=s.active!==Je.active||s.note!==Je.note;return Je=s,n}const na=()=>Je.active?Object.assign({},Fo,{launchFree:!0}):Fo,Ws=(e,t)=>Je.active||!t&&!!(e&&e.launchFree===!0),Uo="חינם בתקופת ההשקה",Ko="חינם עכשיו — אין צורך לרכוש",In=e=>`<span class="plan-badge launch${e?" "+e:""}">${Uo}</span>`,Gs=(e,t)=>`<button type="button" class="btn block launch" disabled aria-disabled="true" data-launch-free="${r(e)}" aria-label="${r(`${t} — ${Ko}`)}">${Ko}</button>`,be={free:{nm:"חינם",price:0,maxExp:10},week:{nm:"שבוע",price:15,maxExp:40,days:7,topUp:!0,per:"לשבוע",blurb:"עד 40 הוצאות, לשבוע — לסוף שבוע ולטיול קצר."},month:{nm:"חודש",price:29,maxExp:80,days:31,topUp:!0,per:"לחודש",blurb:"עד 80 הוצאות, לחודש — לטיול ארוך ולאירוע גדול."},annual:{nm:"שנתי",price:250,maxExp:1/0,days:365,per:"לשנה",blurb:"ללא הגבלת הוצאות, לשנה שלמה — לדירת שותפים ולכל קבוצה מתמשכת."},event:{nm:"אירוע (מסלול קודם)",price:14.9,maxExp:100,legacy:!0},monthly:{nm:"מנוי חודשי (מסלול קודם)",price:19.9,maxExp:1/0,days:31,legacy:!0},pro:{nm:"פרו שנתי (מסלול קודם)",price:349,maxExp:1/0,days:365,legacy:!0}},Ce={business:{nm:"עסקי",price:65,days:31,per:"לחודש",blurb:"ללא הגבלה, בכל הקבוצות שאתם פותחים — עם הלוגו והשם של העסק."},pro:{nm:"מקצועי שנתי",price:790,days:365,per:"לשנה",blurb:"כמו העסקי, לשנה שלמה — למפיקים, לקבלנים ולמארגנים."}},Dn=["free","week","month","annual"],Vc={trip:"week",mangal:"week",family:"week",team:"week",flat:"annual"},Rn=["business","pro"],xe={exp20:{nm:"20 הוצאות נוספות",price:8},days7:{nm:"7 ימים נוספים",price:8}},Bn=864e5,Xc=7*Bn,te=e=>(Math.round(e*100)%100?Number(e).toFixed(2):String(Math.round(e)))+" ₪",zo=(e,t)=>Object.assign(e,t?{nm:t.nm,price:t.price,days:t.days||0}:{nm:"ותיקים",price:0,days:0});function Sa(e){const t=Logic.planState(e,be,Date.now(),na(),Ce);return zo(t,t.isLicense?Ce[t.id]:be[t.id])}function Rt(e){const t=Logic.planState(e,be,Date.now(),na(),Ce),a=t.isLicense?Logic.planState(Object.assign({},e,{licPlan:null,licUntil:0,licenseId:""}),be,Date.now(),na(),Ce):t;return zo(a,be[a.id])}const Vs=e=>Logic.onlyExpenses(e).filter(t=>!t.appFee).length,Fn=e=>Logic.onlyExpenses(e).length,Xs=e=>Logic.localIsoDay(e),st=(e,t)=>{const a=new Date(Logic.timeMs(e)),s=a.getFullYear();return`${a.getDate()}.${a.getMonth()+1}`+(t||s!==new Date().getFullYear()?`.${s}`:"")},Bt=e=>st(e.until,(e.days||0)>=365);function Un(e,t,a){const s=a&&a.own?Rt(e):Sa(e);if(s.launchFree){const c=s.grandfathered?"קבוצה מתקופת ההשקה — ללא הגבלה":"חינם בתקופת ההשקה — ללא הגבלת הוצאות",u=s.id!=="free"&&s.id!=="legacy"&&!s.expired&&s.until?` · ${r(s.isLicense?`רישיון עסקי ״${s.nm}״`:`מסלול ״${s.nm}״`)} בתוקף עד <span class="num">${r(Bt(s))}</span>`:"";return`${c}${u}`}if(s.id==="legacy")return"מסלול ותיקים — ללא הגבלת הוצאות";const n=t?Vs(t):oa(e),o=s.isLicense?`רישיון עסקי ״${s.nm}״`:s.nm,i=` <span class="num">${n}</span> מתוך <span class="num">${s.maxExp}</span> הוצאות`;if(s.expired)return`${r(o)} · פג תוקף ב־<span class="num">${r(Bt(s))}</span> · במסלול החינמי:${i}`;const l=s.maxExp===1/0?" · ללא הגבלת הוצאות":` ·${i}`,d=s.until?` · בתוקף עד <span class="num">${r(Bt(s))}</span>`:"";return`${r(o)}${l}${d}`}function Zs(e,t){const a=(t||[]).filter(o=>o&&o.appFee),s=new Set(a.map(o=>o.id)),n=new Set;return a.forEach(o=>(o.feeFor||[]).forEach(i=>n.add(i))),(e.purchases||[]).filter(o=>o&&o.price>0&&o.env!=="sandbox"&&!n.has(o.id)&&!(o.shared&&s.has(o.shared)))}const Zc=80;function Qc(e){const t=e.slice().sort().join("_"),a="e_fee_"+t;return a.length<=Zc?a:"e_fee_"+Logic.hashId(t).toString(36)+Logic.hashId("fee|"+t).toString(36)+"_"+e.length}function qo(e,t){const a=Logic.splitsByHead(e),s=a?Logic.groupHeads(e):(e.members||[]).length;return s>0?`כ־${te(Math.ceil(t/s*10)/10)} ${a?"למבוגר":"לכל משתתף"}`:""}function Qs(e,t){const a=be[t];if(!a.price)return{kind:"free",cost:0,label:a.nm};if(Rt(e).id===t&&a.days)return{kind:"renew",cost:a.price,label:`${a.nm} · חידוש ${te(a.price)}`};const n=Logic.upgradeCost(e,be,t,Date.now(),na());return n<a.price?{kind:"diff",cost:n,label:`${a.nm} · הפרש ${te(n)}`}:{kind:"full",cost:n,label:`${a.nm} · ${te(n)}`}}function jt(e,t,a,s){if(g.tripId===e.id&&!g.expensesReady&&(a||0)<50){setTimeout(()=>{g.tripId===e.id&&jt(e,t,(a||0)+1,s)},100);return}const n=s&&s.pick&&be[s.pick]?s.pick:"",o=g.trips.find(y=>y.id===e.id)||e,i=Date.now(),l=Sa(o),d=Rt(o),c=!!l.isLicense,u=(o.members||[]).length,h=`
מזהה הקבוצה: ${o.id}`,b=y=>Va(y,`שווה בשווה — ${o.name}`),v=Pn(),p=Js(),f=Go(),L=Je.active,_=o.launchFree===!0,T=L||_,w={link:0,wa:0},E=y=>y?"btn primary block":"btn block",A=y=>Xa(y),D=y=>{const k=`<p class="pay-line">${r(y.line)}</p>`;if(Ws(o,!!y.lic))return k+Gs(y.item,y.what);const M=`aria-label="${r(`${Yo}: ${y.what}, ${te(y.amount)}`)}"`;if(f==="grow")return k+`<button class="${E(y.rec)} pay-btn" data-pay="${r(y.item)}" data-amount="${y.amount}" data-kind="${r(y.kind)}" ${M}>${Kn}</button>`;const H=f==="links"?Jn(y.item,y.amount):"";if(w[H?"link":"wa"]++,!H)return y.waHtml;const Y=`שלום! שילמתי בקישור התשלום של Grow על ${y.what} (${te(y.amount)})`+(y.lic?`${B?`
הטלפון שלי: ${Ct(Logic.normalizePhone(B))}`:""}`:` לקבוצה ״${o.name}״.${h}`)+`
אשמח להפעלה.`;return k+`<a class="${E(y.rec)} pay-btn" href="${r(H)}" target="_blank" rel="noopener" data-paylink="${r(y.item)}" data-what="${r(y.what)}" data-amount="${y.amount}"${y.lic?' data-lic="1"':""} ${M}>${Kn}</a>
        <a class="${Xa(!1)} sm pay-wa" href="${r(b(Y))}"${p} aria-label="${r(`אחרי התשלום על ${y.what} — אישור להפעלה ${v}`)}">אחרי התשלום — אישור להפעלה ${v}</a>`},U=qe(o),I=Vc[U.id]||"month",R=U.id==="other"?"מומלץ":"מומלץ ל"+U.nm.split(" / ")[0],re=d.days>0&&(d.expired||d.until-i<Xc),X=!!(be[d.id]&&be[d.id].legacy)&&re&&!d.expired;let P=!1;const q=y=>{const k=be[y],M=d.id===y,H=y==="free"&&(d.id==="free"||d.expired)&&!c,Y=M&&d.active&&!c||H,le=!c&&M&&k.days&&k.price&&re,ye=!c&&!M&&(Logic.isUpgrade(o,be,y,i,na())||X&&k.price&&k.maxExp>=d.maxExp),Se=y===I&&!!(le||ye&&y!=="free");Se&&(P=!0);const N=Logic.upgradeCost(o,be,y,i,na()),se=ye&&N<k.price,yt=y==="free"?T?`ללא הגבלת הוצאות בתקופת ההשקה · המחירון: עד ${d.freeMax} הוצאות.`:`עד ${d.freeMax} הוצאות — מספיק למנגל ולארוחה משותפת.`:k.blurb,Lc=d.expired?"מהיום":`מסוף התוקף הנוכחי (${Bt(d)})`;let $n="";if(T&&y!=="free"&&!Y)$n=D({item:y,amount:k.price,kind:"plan",line:`המחירון · ${te(k.price)} ${k.per||""}`.trim(),what:`מסלול ״${k.nm}״`,rec:!1,waHtml:""});else if(le)$n=D({item:y,amount:k.price,kind:"renew",line:`חידוש · ${te(k.price)}`,what:`חידוש מסלול ״${k.nm}״`,rec:Se,waHtml:`<a class="${A(Se)}" href="${r(b(`שלום! אשמח לחדש את מסלול ״${k.nm}״ (${te(k.price)}) לקבוצה ״${o.name}״ — ${Lc}.${h}`))}"${p}>
               חידוש ${v} — ${r(te(k.price))}</a>`})+`<p class="hint">החידוש מתווסף ${r(Lc)}${k.topUp?", וההשלמות שנקנו נשמרות":""}.</p>`;else if(ye&&y!=="free"){const Iu=se?`שלום! אשמח לשדרג את הקבוצה ״${o.name}״ ממסלול ״${d.nm}״ למסלול ״${k.nm}״ — תשלום ההפרש ${te(N)}.${h}`:`שלום! אשמח להפעיל את מסלול ״${k.nm}״ (${te(k.price)}) לקבוצה ״${o.name}״.${h}`;$n=D({item:y,amount:se?N:k.price,kind:se?"upgrade":"plan",line:se?`שדרוג בתשלום ההפרש · ${te(N)}`:`הפעלה מהיום · ${te(k.price)}`,what:se?`שדרוג למסלול ״${k.nm}״ (הפרש)`:`מסלול ״${k.nm}״`,rec:Se,waHtml:`<a class="${A(Se)}" href="${r(b(Iu))}"${p}>
               ${se?`שדרוג בתשלום ההפרש — ${r(te(N))}`:`הפעלה ${v} — ${r(te(k.price))}`}</a>`})}else!Y&&!c&&y!=="free"&&($n='<p class="plan-note">המסלול הנוכחי של הקבוצה כבר כולל את זה</p>');const Ec=k.price&&u>1&&!T?qo(o,k.price):"",yo=y===n;return`
      <div class="plan-card${Y?" current":""}${Se?" rec":""}${yo?" picked":""}" data-plan="${y}"${yo?' data-ref="picked"':""}>
        <div class="plan-top">
          <span class="plan-title"><b class="plan-nm">${r(k.nm)}</b>${yo?'<span class="plan-badge pick">המסלול שבחרתם</span>':Se?`<span class="plan-badge">${r(R)}</span>`:""}</span>
          <span class="plan-price">${k.price?`${r(te(k.price))} <small>${r(k.per||"")}</small>`:"ללא עלות"}</span>
        </div>
        <p class="plan-blurb">${r(yt)}</p>
        ${Ec?`<p class="plan-per">${r(Ec)}, אם מחלקים את העלות ${Logic.splitsByHead(o)?"לפי הנפשות":"בין המשתתפים"}</p>`:""}
        ${Y?`<p class="plan-cur">✓ המסלול הנוכחי${M&&d.until&&!d.expired?` · בתוקף עד <span class="num">${r(Bt(d))}</span>`:""}</p>`:""}
        ${$n}
      </div>`},Z=!c&&!T&&be[d.id]&&be[d.id].topUp,ce=Object.keys(xe).filter(y=>!(d.expired&&y==="exp20")),G=y=>`<span>${r(xe[y].nm)}</span><b>${r(te(xe[y].price))}</b>`,Le=y=>`${Yo}: ${xe[y].nm}, ${te(xe[y].price)}`,ee=f==="links"&&ce.some(y=>Jn(y,xe[y].price)),we=y=>{if(f==="grow")return`<button class="btn block topup" data-pay="${y}" data-amount="${xe[y].price}" data-kind="topup" aria-label="${r(Le(y))}">${G(y)}</button>`;const k=f==="links"?Jn(y,xe[y].price):"";w[k?"link":"wa"]++;const M=`${xe[y].nm} (${te(xe[y].price)})`;if(k){const Y=`שלום! שילמתי בקישור התשלום של Grow על ${M} לקבוצה ״${o.name}״.${h}
אשמח להפעלה.`;return`<div class="topup-item">
          <a class="btn block topup" href="${r(k)}" target="_blank" rel="noopener" data-paylink="${y}" data-what="${r(xe[y].nm)}" data-amount="${xe[y].price}" aria-label="${r(Le(y))}">${G(y)}<small class="topup-how">תשלום מאובטח בקישור</small></a>
          <a class="${Xa(!1)} sm pay-wa" data-topup-confirm="${y}" href="${r(b(Y))}"${p} aria-label="${r(`אחרי התשלום על ${M} — אישור להפעלה ${v}`)}">אחרי התשלום על ${r(xe[y].nm)} — אישור ${v}</a>
        </div>`}const H=`<a class="btn block topup" data-topup-offer="${y}" href="${r(b(`שלום! אשמח להוסיף ${M} לקבוצה ״${o.name}״${y==="days7"?` — ${d.expired?"מהיום":"מסוף התוקף הנוכחי"}`:""}.${h}`))}"${p}>
          ${G(y)}${ee?`<small class="topup-how">הזמנה ותשלום ${v}</small>`:""}</a>`;return ee?`<div class="topup-item">${H}</div>`:H},ke=f==="grow"?`<p class="hint pay-hint">${Kn}</p>`:ee?`<p class="hint pay-hint">בקישור המאובטח — אשראי, <span class="nowrap" dir="ltr">Bit</span>, <span class="nowrap" dir="ltr">Apple Pay</span>. ההפעלה בהקדם אחרי אישור קצר ${v}.</p>`:"",Q=Z?`
      <h3 class="plans-sub">${d.expired?"התוקף נגמר? אפשר להוסיף זמן":"נגמרו ההוצאות או הזמן? השלמה מהירה"}</h3>
      <div class="topup-row${ee?" links":""}">
        ${ce.map(y=>we(y)).join("")}
      </div>
      ${ke}
      ${d.expired?`<p class="hint">״${r(xe.exp20.nm)}״ — זמינות רק כשהמסלול בתוקף. אחרי הוספת 7 ימים אפשר להוסיף גם אותן.</p>`:""}`:"",ve=g.tripId===o.id&&g.expensesReady?g.expenses:null,j=(ve?Zs(o,ve):[]).reduce((y,k)=>y+k.price,0),x=()=>j>0&&fe(o)&&u>1?`
      <div class="share-cost">
        <p><b>אפשר לחלק את עלות המסלול בין כולם</b> — ${r(te(j))} בסך הכול, ${r(qo(o,j))}${Logic.splitsByHead(o)?" (החלוקה לפי הנפשות)":""}.</p>
        <button class="${P?"btn block":"btn primary block"}" data-ref="sharecost">חלוקת העלות בין כל המשתתפים</button>
        <p class="hint">נרשמת הוצאה אחת, ששולמה על ידי מנהל הקבוצה ומתחלקת כמו כל הוצאה. היא לא נספרת במכסת ההוצאות.</p>
      </div>`:"",B=Oe((o.members||[]).find(y=>y.id===o.managerId))||Ke().phone||"",K=y=>{const k=Ce[y],M=`שלום! אשמח לרישיון ״${k.nm}״ (${te(k.price)} ${k.per}) עם הלוגו והשם של העסק שלי.${B?`
הטלפון שלי: ${Ct(Logic.normalizePhone(B))}`:""}`,H=c&&l.id===y;return`
      <div class="plan-card biz${H?" current":""}">
        <div class="plan-top">
          <b class="plan-nm">${r(k.nm)}</b>
          <span class="plan-price">${r(te(k.price))} <small>${r(k.per)}</small></span>
        </div>
        <p class="plan-blurb">${r(k.blurb)}</p>
        ${H?`<p class="plan-cur">✓ הרישיון הנוכחי · בתוקף עד <span class="num">${r(Bt(l))}</span></p>`:""}
        ${D({item:y,amount:k.price,kind:"license",lic:!0,what:`רישיון ״${k.nm}״`,line:`${H?"חידוש":"הפעלה"} · ${te(k.price)} ${k.per}`,waHtml:`<a class="${A(!1)}" href="${r(b(M))}"${p}>${H?"חידוש":"פנייה"} ${v} — ${r(te(k.price))}</a>`})}
      </div>`},V=l.expired,oe=Dn.map(q).join(""),Ee=Rn.map(K).join(""),De=y=>`<span class="nowrap">${y}</span>`,ae=`כרטיס אשראי, ${De("Bit")}, ${De("Apple Pay")} או ${De("Google Pay")}`,Ve=Ea()==="wa"?"הודעת וואטסאפ קצרה":"הודעה קצרה בדוא״ל",$e=L?"בתקופת ההשקה לא נגבה תשלום. המחירים כאן הם המחירון שייכנס לתוקף בסיום התקופה, כפי שיוצג באתר.":f==="grow"?`התשלום בעמוד המאובטח של Grow (משולם) — ${ae}. פרטי הכרטיס אינם עוברים דרכנו, קבלה נשלחת אליכם אוטומטית, והמסלול מופעל מיד עם אישור התשלום.`:f==="links"&&!w.wa?`התשלום בקישור המאובטח של Grow (משולם), וקבלה נשלחת אליכם אוטומטית. אחרי התשלום שולחים לנו ${Ve}, וההפעלה נעשית בהקדם לאחר אישור התשלום.`:f==="links"?`בפריטים עם הכפתור ״תשלום מאובטח״ — התשלום בקישור המאובטח של Grow (משולם), וקבלה נשלחת אליכם אוטומטית; אחרי התשלום שולחים לנו ${Ve}. בשאר הפריטים — התשלום מול מנהל השירות בביט או בפייבוקס. ההפעלה נעשית בהקדם לאחר אישור התשלום.`:"התשלום מול מנהל השירות בביט או בפייבוקס, וההפעלה נעשית בהקדם לאחר אישור התשלום.",Ue=L?`<div class="banner launch-free" role="status" data-ref="launch-free">${In()}
          <p>בתקופת ההשקה כל הקבוצות ללא הגבלת הוצאות, ואין צורך לרכוש מסלול. המחירים מוצגים לידיעה בלבד.${Je.note?` ${r(Je.note)}`:""}</p></div>`:_?`<div class="banner launch-free" role="status" data-ref="launch-free">${In()}
          <p>הקבוצה נפתחה בתקופת ההשקה ונשארת ללא הגבלת הוצאות — אין צורך במסלול לקבוצה הזו.</p></div>`:"",je=ge(`
      <div class="sheet-head"><h2 class="sheet-title">המסלולים</h2></div>
      ${Ue}
      ${t?`<div class="banner warn" role="status">${V?`תוקף המסלול הסתיים, והקבוצה הגיעה למכסה החינמית (${l.maxExp} הוצאות) — ולכן אי אפשר להוסיף הוצאות חדשות. הצפייה, ההתחשבנות וסימון ״שולם״ נשארים פתוחים.`:"הקבוצה הגיעה למגבלת ההוצאות של המסלול הנוכחי."} להמשך — בוחרים מסלול${Z?" או השלמה":""}:</div>`:""}
      <div class="banner" style="margin:0 0 6px;">${Un(o,ve)}</div>
      ${x()}
      <h3 class="plans-sub">לקבוצה הזו</h3>
      ${c?`<div class="banner" style="margin:0 0 8px;">הקבוצה מכוסה ברישיון העסקי ״${r(l.nm)}״ עד <span class="num">${r(Bt(l))}</span> — ללא הגבלה. כשהרישיון מסתיים, הקבוצה חוזרת למסלול שלה עצמה (${d.id==="legacy"?"ותיקים — ללא הגבלה":r(d.nm)}).</div>`:""}
      ${oe}
      ${Q}
      <h3 class="plans-sub">לעסקים — מפיקים, קבלנים ומארגנים</h3>
      ${Ee}
      ${hd(o)}
      <p class="hint plans-foot">
        <span class="vat-note">${r(Ka())}</span>
        ${$e}
        המשתתפים בקבוצה אינם משלמים, אלא אם בוחרים לחלק ביניהם את עלות המסלול.
        כשתוקף מסלול מסתיים — הקבוצה חוזרת למכסה החינמית, ורק הוספת הוצאות מעבר לה נעצרת.
        ביטול עסקה${f==="none"?"":' בתוך <span class="num">14</span> יום'} — לפי
        <button class="linklike" data-act="legal" data-id="terms">התקנון (סעיף 6)</button> וחוק הגנת הצרכן,
        ${Ks('<span class="nowrap"><button class="linklike" data-help-open="contact" data-help-id="cancellation">בטופס ״ביטול עסקה״</button>.</span>')}
      </p>
      ${f==="none"?"":`<p class="hint plans-help">שאלה על תשלום? <a class="linklike" href="${r(b(`שלום! יש לי שאלה על תשלום לקבוצה ״${o.name}״.${h}`))}"${p}>כתבו לנו ${v}</a></p>`}`),ze=m('[data-ref="sharecost"]',je.el);ze&&ze.addEventListener("click",()=>ed(o,je,ze)),z("[data-confirm-buy]",je.el).forEach(y=>y.addEventListener("click",()=>{const k=(o.purchases||[]).find(M=>M&&M.id===y.dataset.confirmBuy);k&&pd(o,k)})),z("[data-pay]",je.el).forEach(y=>y.addEventListener("click",()=>er(o,{item:y.dataset.pay,amount:Number(y.dataset.amount),kind:y.dataset.kind}))),z("a[data-paylink]",je.el).forEach(y=>{const k=M=>{M.type==="auxclick"&&M.button!==1||(M.preventDefault(),Qo(o,{link:y.href,what:y.dataset.what||"",amount:Number(y.dataset.amount)||0,lic:!!y.dataset.lic}))};y.addEventListener("click",k),y.addEventListener("auxclick",k)});const ut=n?m('[data-ref="picked"]',je.el):null;if(ut){const y=m(".pay-btn, .btn",ut);setTimeout(()=>{try{ut.scrollIntoView({block:"start",behavior:"smooth"})}catch{}y&&y.focus({preventScroll:!0})},60)}}function Jo(){const e=Go(),t=Je.active,a=Pn(),s=Js(),n=Logic.normalizePhone(Ke().phone||""),o=w=>`<span class="nowrap">${w}</span>`,i=" · ",l=w=>w>=365?"שנה שלמה":He(w,"יום אחד","ימים"),d=w=>`
      <div class="plan-card pc${w.biz?" biz":""}" data-plan="${w.id}">
        <b class="plan-nm">${r(w.nm)}</b>
        <span class="pc-price">${w.price?`<span class="pc-amt">${r(te(w.price))}</span><small class="pc-per">${r(w.per)}</small>`:'<span class="pc-amt pc-free">ללא עלות</span>'}</span>
        <p class="pc-desc">${w.desc}</p>
        ${w.feats?`<ul class="pc-feats">${w.feats.map(E=>`<li>${he("check",16)}<span>${r(E)}</span></li>`).join("")}</ul>`:""}
        <div class="pc-act">${w.action}</div>
      </div>`,c=w=>{const E=be[w],A=!E.price,D=E.maxExp===1/0?"ללא הגבלת הוצאות":`עד ${He(E.maxExp,"הוצאה אחת","הוצאות")}`,U=t&&A?o("ללא הגבלת הוצאות בתקופת ההשקה")+i+o(r(`המחירון: ${D}`)):o(r(D))+i+o(r(E.days?l(E.days):"בלי הגבלת זמן")),I=A?"פותחים קבוצה בחינם":"פותחים קבוצה ובוחרים מסלול",R=A?I:`${I} ״${E.nm}״ — ${te(E.price)} ${E.per||""}`,re=t&&!A?Gs(w,`מסלול ״${E.nm}״`):`<button type="button" class="btn block" data-pick="${w}" aria-label="${r(R)}">${I}</button>`;return d({id:w,nm:E.nm,price:E.price,per:E.per||"",desc:U,action:re})},u=["כל הקבוצות שאתם פותחים","ללא הגבלת הוצאות","הלוגו והשם של העסק בקבוצות"],h=w=>{const E=Ce[w],A=`רישיון ״${E.nm}״`,D=`aria-label="${r(`רכישת רישיון ״${E.nm}״ — ${te(E.price)} ${E.per}`)}"`,U=e==="links"?Jn(w,E.price):"";let I;if(t)I=Gs(w,A)+`<p class="pay-line">המחירון · ${r(te(E.price))} ${r(E.per)}</p>`;else if(e==="grow")I=`<button type="button" class="btn block pay-btn" data-pay="${w}" data-amount="${E.price}" data-kind="license" ${D}>רכישת רישיון</button>
        <p class="pay-line">${Kn}</p>`;else if(U)I=`<a class="btn block pay-btn" href="${r(U)}" target="_blank" rel="noopener" data-paylink="${w}" data-what="${r(A)}" data-amount="${E.price}" data-lic="1" ${D}>רכישת רישיון</a>
        <p class="pay-line">תשלום מאובטח בקישור — אשראי, <span class="nowrap" dir="ltr">Bit</span>, <span class="nowrap" dir="ltr">Apple Pay</span></p>`;else{const R=`שלום! אשמח לרישיון ״${E.nm}״ (${te(E.price)} ${E.per}) עם הלוגו והשם של העסק שלי.${n?`
הטלפון שלי: ${Ct(n)}`:""}`;I=`<a class="${Xa(!1)}" href="${r(Va(R,"שווה בשווה — רישיון עסקי"))}"${s} ${D}>רכישת רישיון ${r(a)}</a>
        <p class="pay-line">הזמנה ותשלום ${r(a)} — ההפעלה אחרי אישור התשלום</p>`}return d({id:w,biz:!0,nm:`רישיון ${E.nm}`,price:E.price,per:E.per,desc:`תוקף: ${r(l(E.days))}`,feats:u,action:I})},b=Object.keys(xe).map(w=>`<span class="pc-chip">${r(xe[w].nm)}${i}${r(te(xe[w].price))}</span>`).join(""),v=Qe(!1),p=`אשראי, ${o("Bit")}, ${o("Apple Pay")} או ${o("Google Pay")}`,f=e==="grow"?`תשלום מאובטח בעמוד של Grow (משולם) — ${p}. פרטי הכרטיס אינם עוברים דרכנו, הקבלה נשלחת אליכם אוטומטית, והמסלול מופעל מיד עם אישור התשלום.`:e==="links"?`בפריט עם קישור תשלום — תשלום מאובטח בקישור של Grow (משולם), ${p}; פרטי הכרטיס אינם עוברים דרכנו, ואחרי התשלום שולחים לנו הודעה קצרה ${r(a)}. בשאר הפריטים — תשלום מול מפעיל השירות בביט או בפייבוקס. ההפעלה בהקדם לאחר אישור התשלום.`:"תשלום מול מפעיל השירות בביט או בפייבוקס, וההפעלה בהקדם לאחר אישור התשלום.",L=zs([v.email?`בדוא״ל ${Ga(v)}`:"",v.phone?`בטלפון ${Wa(v)}`:"",o('<button type="button" class="linklike" data-help-open="contact" data-help-id="cancellation">בטופס ״ביטול עסקה״</button>.')]),_=[...t?["בתקופת ההשקה לא נגבה תשלום ואין צורך לרכוש — כל הקבוצות ללא הגבלת הוצאות. המחירים כאן הם המחירון שייכנס לתוקף בסיום התקופה, כפי שיוצג באתר."]:[],r(Ka()),f,"מסלול חל על קבוצה אחת — בוחר ומשלם רק מנהל הקבוצה, וכשהתוקף מסתיים היא חוזרת למכסה החינמית (ההוצאות נשמרות). רישיון עסקי חל על כל הקבוצות שלכם.",`ביטול עסקה${e==="none"?"":' בתוך <span class="num">14</span> יום'} — לפי <button type="button" class="linklike" data-act="legal" data-id="terms">התקנון (סעיף 6)</button> וחוק הגנת הצרכן, ${L}`],T=ge(`
      <div class="sheet-head"><h2 class="sheet-title">מסלולים ומחירים</h2></div>
      <div class="pricing">
        ${t?`<div class="banner launch-free" role="status" data-ref="launch-free">${In()}<p>כרגע הכול חינם — תקופת השקה. כל קבוצה ללא הגבלת הוצאות, והמחירים מוצגים לידיעה בלבד.${Je.note?` ${r(Je.note)}`:""}</p></div>`:""}
        <p class="pricing-intro">${t?"כל קבוצה נפתחת בחינם — ובתקופת ההשקה גם נשארת כך, בלי הגבלה.":"כל קבוצה נפתחת בחינם — מסלול בוחרים רק כשצריך יותר."}</p>
        <section class="pricing-sec" aria-labelledby="pricing-h-group">
          <h3 class="plans-sub" id="pricing-h-group">מסלול לקבוצה</h3>
          <p class="pc-sec-sub">לכל קבוצה בנפרד — בוחר מנהל הקבוצה.</p>
          <div class="pricing-grid">${Dn.map(c).join("")}</div>
          <div class="pc-topups"><span class="pc-topups-l">השלמות לשבוע ולחודש, מתוך הקבוצה:</span>${b}</div>
        </section>
        <section class="pricing-sec" aria-labelledby="pricing-h-biz">
          <h3 class="plans-sub" id="pricing-h-biz">לעסקים</h3>
          <p class="pc-sec-sub">למפיקים, לקבלנים ולמארגנים — רישיון אחד לכל הקבוצות שלכם.</p>
          <div class="pricing-grid">${Rn.map(h).join("")}</div>
        </section>
        <section class="pricing-notes" aria-labelledby="pricing-h-notes">
          <h3 id="pricing-h-notes">חשוב לדעת</h3>
          <ul>${_.map(w=>`<li>${w}</li>`).join("")}</ul>
        </section>
        <p class="hint plans-help">שאלה על המסלולים? <button type="button" class="linklike" data-help-open="article" data-help-id="where-to-buy">במרכז העזרה</button>${e==="none"?"":` · <a class="linklike" href="${r(Va("שלום! יש לי שאלה על המסלולים והמחירים.","שווה בשווה — שאלה על המסלולים"))}"${s}>כתבו לנו ${r(a)}</a>`}</p>
      </div>`);z("[data-pick]",T.el).forEach(w=>w.addEventListener("click",()=>{const E=w.dataset.pick;T.close(),sl(be[E]&&be[E].price>0?{plan:E}:void 0)})),z("[data-pay]",T.el).forEach(w=>w.addEventListener("click",()=>er(null,{item:w.dataset.pay,amount:Number(w.dataset.amount),kind:"license"}))),z("a[data-paylink]",T.el).forEach(w=>{const E=A=>{A.type==="auxclick"&&A.button!==1||(A.preventDefault(),Qo(null,{link:w.href,what:w.dataset.what||"",amount:Number(w.dataset.amount)||0,lic:!0}))};w.addEventListener("click",E),w.addEventListener("auxclick",E)})}let ei=!1;async function ed(e,t,a){if(ei)return;ei=!0,a&&(a.disabled=!0);const s=async()=>{let n=g.trips.find(i=>i.id===e.id)||e;if(C.getTripOnce){const i=await C.getTripOnce(e.id);i&&(n=i)}const o=await C.getExpensesOnce(e.id);return{t:n,list:o||[]}};try{let{t:n,list:o}=await s(),i=Zs(n,o);const l=i.reduce((v,p)=>v+p.price,0);if(!(l>0)){S("עלות המסלול כבר חולקה ✓"),t&&t.close(),W();return}const d=n.managerId&&(n.members||[]).some(v=>v.id===n.managerId)?n.managerId:pe(n.id);if(!d){S("קודם נכנסים לחשבון שלכם בקבוצה");return}if(!await Me("חלוקת עלות המסלול",`תירשם הוצאה של ${te(l)} ששולמה על ידי ${me(n,d)}, ותתחלק בין כל ${(n.members||[]).length} המשתתפים. להמשיך?`,"חלוקה"))return;({t:n,list:o}=await s());const u=Zs(n,o);if(u.map(v=>v.id).sort().join()!==i.map(v=>v.id).sort().join()){S(u.length?"העלות השתנתה בינתיים — פותחים שוב את המסלולים":"עלות המסלול כבר חולקה ✓"),t&&t.close(),W(),u.length&&jt(n);return}if(i=u,n.base!=="ILS"&&!((n.rates||{}).ILS>0)){const v=Object.assign({},n.rates,{ILS:on("ILS",n.base)});await C.updateTrip(n.id,{rates:v}),n.rates=v}const h=i.map(v=>v.id),b={id:Qc(h),appFee:!0,feeFor:h,amount:l,currency:"ILS",category:"other",payerId:d,parts:(n.members||[]).map(v=>v.id),split:{mode:"equal"},note:"מסלול ״שווה בשווה״ — "+i.map(v=>v.what).join(" + "),date:rt(),created:Date.now()};await C.saveExpense(n.id,b),await Wt(n,o.filter(v=>v.id!==b.id).concat([b])),t&&t.close(),S("העלות חולקה בין כל המשתתפים ✓"),W()}catch(n){console.error(n),S(Fe(n,"החלוקה נכשלה — נסו שוב"))}finally{ei=!1,a&&(a.disabled=!1)}}const Yo="תשלום מאובטח — אשראי, Bit, Apple Pay",Kn='<span class="pay-btn-txt">תשלום מאובטח — אשראי, <span class="nowrap" dir="ltr">Bit</span>, <span class="nowrap" dir="ltr">Apple Pay</span></span>',Ft="shaveh_pay_pending_v1",Wo=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;function Za(){return typeof window!="undefined"&&window.SHAVEH_CONFIG||{}}function zn(){const e=Za(),t=e.payApi||(e.u?String(e.u).replace(/\/+$/,"")+"/functions/v1":"");return/^https:\/\//.test(t)?t.replace(/\/+$/,""):""}let ti=!1,qn="";const ai=/^[A-Za-z0-9_-]{1,128}$/;function Go(){if((Za().pay==="grow"||ti)&&Ne&&zn()&&C&&C.secure===!0&&(g.shared||$t))return"grow";const t=ni();return Object.keys(t).some(a=>/^https:\/\//.test(String(t[a])))?"links":"none"}function ni(){const e=Za().payLinks;return e&&typeof e=="object"&&Object.keys(e).some(t=>/^https:\/\//.test(String(e[t])))?e:xn}function Jn(e,t){const a=ni(),s=xe[e]?xe[e].price:Rn.indexOf(e)>=0?Ce[e].price:be[e]?be[e].price:null,o=a[e+":"+t]||(Number(t)===s?a[e]:"");return/^https:\/\//.test(String(o||""))?String(o):""}function si(){const e=String(Za().k||""),t={"Content-Type":"application/json"};return/^eyJ/.test(e)&&(t.apikey=e,t.Authorization="Bearer "+e),t}async function ii(e,t){const a=await fetch(zn()+"/"+e,Object.assign({headers:si()},t));let s=null;try{s=await a.json()}catch{s=null}if(!s)throw{code:"network",status:a.status};return s}const ct={bad_name:"נא להזין שם פרטי ושם משפחה — כפי שיופיע בקבלה.",bad_phone:"נא להזין מספר נייד ישראלי תקין, למשל 050-1234567.",bad_email:"כתובת הדוא״ל אינה תקינה — אפשר גם להשאיר ריק.",bad_biz:"נא להזין את שם העסק.",terms:"כדי להמשיך לתשלום, יש לסמן את אישור התקנון ומדיניות הפרטיות.",trip_not_found:"הקבוצה לא נמצאה בשרת. אם היא חדשה מאוד — נסו שוב בעוד רגע.",not_offered:"המסלול הזה כבר לא מוצע לקבוצה במצבה הנוכחי. סגרו ופתחו מחדש את המסלולים.",license_active:"הקבוצה מכוסה ברישיון עסקי פעיל — אין צורך במסלול נוסף.",too_many:"היו כאן ניסיונות תשלום רבים בשעה האחרונה. נסו שוב מאוחר יותר, או כתבו לנו.",provider_error:"חברת הסליקה לא זמינה כרגע. נסו שוב בעוד דקה.",not_configured:"התשלום המקוון עוד לא הופעל. אפשר לפנות אלינו ולשלם בדרך אחרת.",sandbox_locked:"התשלום המקוון במצב בדיקה ופתוח כרגע רק לבדיקות של מפעיל השירות. אפשר לפנות אלינו ולשלם בדרך אחרת.",payment_open:"בדקות האחרונות כבר נפתח עמוד תשלום למסלול של הקבוצה הזו. כדי שלא ייגבה פעמיים — אפשר להשלים את התשלום שנפתח, או לנסות שוב בעוד כ־10 דקות.",launch_free:"בתקופת ההשקה השירות חינם — אין צורך לרכוש, ולא נגבה תשלום.",launch_free_group:"הקבוצה הזו מתקופת ההשקה — ללא הגבלה, ואין צורך במסלול.",launch_free_unknown:"לא ניתן לאמת כרגע אם השירות בתקופת ההשקה — התשלום לא נפתח. נסו שוב בעוד רגע."},td=["not_configured","sandbox_locked","too_many","provider_error","trip_not_found"],Yn="לא הצלחנו לפתוח את עמוד התשלום. בדקו את החיבור לרשת ונסו שוב.";function Vo(e,t){if(t.kind==="license"){const s=Ce[t.item];return{what:`רישיון עסקי ״${s.nm}״`,effect:`ללא הגבלה בכל הקבוצות שנפתחות בטלפון שלכם — ל־${s.days} ימים${t.renew?", מסוף התוקף הנוכחי":""}. שם העסק יוצג אחרי אישור קצר.`}}if(xe[t.item])return{what:xe[t.item].nm,effect:t.item==="exp20"?"יתווספו 20 הוצאות למסלול הנוכחי של הקבוצה.":"תוקף המסלול יוארך ב־7 ימים."};const a=be[t.item];return t.kind==="renew"?{what:`חידוש מסלול ״${a.nm}״`,effect:`התוקף יוארך ב־${a.days} ימים, מסוף התוקף הנוכחי${a.topUp?" — וההשלמות שנקנו נשמרות":""}.`}:{what:t.kind==="upgrade"?`שדרוג למסלול ״${a.nm}״`:`מסלול ״${a.nm}״`,effect:`${a.maxExp===1/0?"ללא הגבלת הוצאות":`עד ${a.maxExp} הוצאות`}, ל־${a.days} ימים מהיום${t.kind==="upgrade"?" — בתשלום ההפרש בלבד":""}.`}}function Xo(){return`ביטול עסקה — בתוך <span class="num">14</span> יום מיום הרכישה או מיום קבלת פרטי העסקה בכתב, המאוחר מביניהם,
        בניכוי תמורה יחסית לתקופת השימוש ודמי ביטול של עד <span class="num">5%</span> או <span class="num">100 ₪</span>, הנמוך מביניהם.
        לחלק מהאוכלוסיות — <span class="nowrap">עד <span class="num">4</span> חודשים</span>; הפרטים
        <button class="linklike" data-act="legal" data-id="terms">בסעיף 6 בתקנון</button>.
        הודעת ביטול — ${Ks('<button type="button" class="linklike" data-help-open="contact" data-help-id="cancellation">בטופס ״ביטול עסקה״</button>',{full:!0})}.`}const Zo=`
      <label class="pay-consent">
        <input type="checkbox" id="pay-terms" data-ref="terms" aria-describedby="pay-terms-h">
        <span>מאשרים את <button type="button" class="linklike" data-act="legal" data-id="terms">התקנון</button>, כולל תנאי הביטול שבסעיף 6,
          ואת <button type="button" class="linklike" data-act="legal" data-id="privacy">מדיניות הפרטיות</button>.</span>
      </label>
      <p class="hint pay-consent-h" id="pay-terms-h">האישור נדרש לפני המעבר לעמוד התשלום.</p>`;function Qo(e,t){if(Ws(e,!!t.lic)){S(Je.active?ct.launch_free:ct.launch_free_group);return}const a=ge(`
      <div class="sheet-head"><h2 class="sheet-title">לפני התשלום</h2></div>
      <div class="pay-sum">
        <div class="pay-sum-top"><b>${r(t.what)}</b><span class="pay-amt">${r(te(t.amount))}</span></div>
        ${e&&!t.lic?`<p class="pay-for">לקבוצה ״${r(e.name)}״</p>`:""}
      </div>
      ${Do()}
      ${Zo}
      <div class="banner warn" role="status" data-ref="payerr" hidden></div>
      <button class="btn primary block" data-ref="go">מעבר לתשלום — ${r(te(t.amount))}</button>
      <p class="hint pay-legal">
        <span class="vat-note">${r(Ka())}</span>
        עמוד התשלום המאובטח של Grow (משולם) ייפתח בלשונית חדשה: כרטיס אשראי, <span class="nowrap">Bit</span>, <span class="nowrap">Apple Pay</span> או <span class="nowrap">Google Pay</span>.
        פרטי הכרטיס אינם עוברים דרכנו, וקבלה נשלחת אליכם אוטומטית. אחרי התשלום שולחים לנו הודעת וואטסאפ קצרה, וההפעלה נעשית בהקדם לאחר אישור התשלום.
        ${Xo()}
      </p>`,null,{compact:!0}),s=a.el,n=m('[data-ref="terms"]',s),o=m('[data-ref="payerr"]',s),i=l=>{o.hidden=!l,o.textContent="",l&&setTimeout(()=>{o.textContent=l},30)};n.addEventListener("change",()=>{n.checked&&(n.removeAttribute("aria-invalid"),i(""))}),m('[data-ref="go"]',s).addEventListener("click",()=>{if(!n.checked){n.setAttribute("aria-invalid","true"),i(ct.terms),n.focus();return}if(!/^https:\/\//.test(t.link)){i(Yn);return}window.open(t.link,"_blank","noopener"),a.close(),S("עמוד התשלום נפתח בלשונית חדשה. אחרי התשלום — אישור להפעלה בוואטסאפ")})}function er(e,t){const a=t.kind==="license";if(Ws(e,a)){S(Je.active?ct.launch_free:ct.launch_free_group);return}let s=Vo(e,t);const n=e&&e.members||[],o=e?n.find(A=>A.id===pe(e.id)):null,i=e?n.find(A=>A.id===e.managerId):null,l=Ke(),d=l.name||o&&o.name||"",c=Oe(o)||Oe(i)||Logic.normalizePhone(l.phone||""),u=e&&e.brand&&e.brand.name||"";let h=t.amount,b="";const p=ge(`
      <div class="sheet-head"><h2 class="sheet-title">תשלום מאובטח</h2></div>
      ${ti&&Za().pay!=="grow"?'<div class="banner warn">מצב בדיקה — הכפתור מוצג רק בלשונית הזו.</div>':""}
      <div class="pay-sum">
        <div class="pay-sum-top"><b data-ref="what">${r(s.what)}</b><span class="pay-amt" data-ref="amt">${r(te(h))}</span></div>
        ${e&&!a?`<p class="pay-for">לקבוצה ״${r(e.name)}״</p>`:""}
        <p class="pay-effect" data-ref="effect">${r(s.effect)}</p>
      </div>
      <div class="field">
        <label for="pay-name">שם מלא — כפי שיופיע בקבלה</label>
        <input class="input" id="pay-name" autocomplete="name" maxlength="60" placeholder="שם פרטי ושם משפחה" value="${r(d)}">
      </div>
      <div class="field">
        <label for="pay-phone">טלפון נייד</label>
        <input class="input ltr" id="pay-phone" type="tel" inputmode="tel" autocomplete="tel" maxlength="20"
          placeholder="050-0000000" value="${r(c?Ct(c):"")}">
        ${a?'<p class="hint">הרישיון חל על כל הקבוצות שנפתחות בטלפון הזה — גם על אלה שכבר פתוחות.</p>':""}
      </div>
      ${a?`
      <div class="field">
        <label for="pay-biz">שם העסק — יוצג בהזמנות ובהודעות</label>
        <input class="input" id="pay-biz" maxlength="40" placeholder="למשל: יוני צור הפקות" value="${r(u)}">
        <p class="hint">השם יוצג בקבוצות אחרי אישור קצר של מפעיל השירות (כדי שאיש לא יוכל להתחזות לעסק אחר). את הלוגו מוסיפים אחר כך, בפנייה קצרה ${Pn()}.</p>
      </div>`:""}
      <div class="field">
        <label for="pay-email">דוא״ל לקבלה <span class="opt">(רשות)</span></label>
        <input class="input ltr" id="pay-email" type="email" inputmode="email" autocomplete="email" maxlength="120" placeholder="name@example.com">
      </div>
      ${Do()}
      ${Zo}
      <div class="banner warn" role="status" data-ref="payerr" hidden></div>
      <button class="btn primary block" data-ref="save">מעבר לתשלום מאובטח — <span data-ref="btnamt">${r(te(h))}</span></button>
      <p class="hint pay-legal">
        <span class="vat-note">${r(Ka())}</span>
        תועברו לעמוד התשלום המאובטח של Grow (משולם): כרטיס אשראי, <span class="nowrap">Bit</span>, <span class="nowrap">Apple Pay</span> או <span class="nowrap">Google Pay</span>.
        פרטי הכרטיס אינם עוברים דרכנו, וקבלה נשלחת אליכם אוטומטית.
        ${Xo()}
      </p>`).el,f=m('[data-ref="save"]',p),L=m('[data-ref="payerr"]',p),_=m('[data-ref="terms"]',p);_.addEventListener("change",()=>{_.checked&&(_.removeAttribute("aria-invalid"),L.textContent===ct.terms&&T(""))});const T=(A,D)=>{L.hidden=!A,L.textContent="",A&&setTimeout(()=>{if(L.textContent=A,!D)return;const U=`שלום! ניסיתי לשלם באתר על ${s.what} (${te(h)})`+(e&&!a?` לקבוצה ״${e.name}״.
מזהה הקבוצה: ${e.id}`:".")+`
התשלום המקוון לא נפתח — אשמח לשלם בדרך אחרת.`,I=document.createElement("a"),R=Ea()==="wa";I.className=Xa(!1)+" sm pay-err-wa",I.href=Va(U,"שווה בשווה — תשלום"),I.dataset.seller=R?"wa":"mail",R&&(I.target="_blank",I.rel="noopener"),I.textContent=R?"תשלום דרך הוואטסאפ":"פנייה אלינו בדוא״ל",L.appendChild(I)},30)},w=()=>_.checked?!1:(_.setAttribute("aria-invalid","true"),T(ct.terms),_.focus(),!0);let E=!1;f.addEventListener("click",async()=>{if(E)return;if(b){w()||location.assign(b);return}const A=m("#pay-name",p).value.trim().replace(/\s+/g," "),D=m("#pay-phone",p).value.trim(),U=m("#pay-email",p).value.trim(),I=a?m("#pay-biz",p).value.trim():"";let R=Logic.normalizePhone(D);if(/^5\d{8}$/.test(R)&&(R="0"+R),A.split(" ").length<2){T(ct.bad_name),m("#pay-name",p).focus();return}if(!/^05\d{8}$/.test(R)){T(ct.bad_phone),m("#pay-phone",p).focus();return}if(U&&!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(U)){T(ct.bad_email),m("#pay-email",p).focus();return}if(a&&I.length<2){T(ct.bad_biz),m("#pay-biz",p).focus();return}if(w())return;T(""),E=!0,f.disabled=!0;const re=f.innerHTML;f.textContent="פותחים את עמוד התשלום…";try{const X=!a&&e&&C&&C.joinKeyFor&&C.joinKeyFor(e.id)||"",P=await ii("create-payment",{method:"POST",body:JSON.stringify({tripId:a?e?e.id:"":e.id,item:t.item,name:A,phone:R,email:U,bizName:I,terms:{v:Nn,at:Date.now()},...X?{joinKey:X}:{},...qn?{testKey:qn}:{}})});if(!P.ok||!P.url){T(ct[P.code]||Yn,td.indexOf(P.code)>=0);return}if(en(l.name?"":A,l.phone?"":R),J.set(Ft,JSON.stringify({id:P.id,tripId:e?e.id:"",item:t.item,at:Date.now()})),!(/^https:\/\//.test(P.url)||$t)){T(Yn);return}if(Number(P.amount)!==Number(h)){h=Number(P.amount),b=P.url;const q=Vo(e,Object.assign({},t,P.kind?{kind:P.kind}:{}));s=q,m('[data-ref="what"]',p).textContent=q.what,m('[data-ref="effect"]',p).textContent=q.effect,m('[data-ref="amt"]',p).textContent=te(h),T(`הסכום עודכן ל־${te(h)} לפי המצב הנוכחי של הקבוצה. להמשך — לוחצים שוב.`),f.innerHTML=re,m('[data-ref="btnamt"]',p).textContent=te(h);return}f.textContent="מעבירים לעמוד התשלום…",location.assign(P.url);return}catch(X){console.error("create-payment failed",X),T(Yn)}finally{E=!1,/מעבירים/.test(f.textContent)||(f.disabled=!1,b||(f.innerHTML=re))}})}let At=null;function ad(e,t){const a=t&&t.paytest!=null?String(t.paytest):null,s=e.get("paytest"),n=a!=null?a:s==="0"?"0":null;let o="";try{n==="0"?sessionStorage.removeItem("shaveh_paytest"):n&&ai.test(n)&&sessionStorage.setItem("shaveh_paytest",n),o=sessionStorage.getItem("shaveh_paytest")||""}catch{o=n&&n!=="0"&&ai.test(n)?n:""}a!=null&&nd(),qn=ai.test(o)?o:"",ti=!!qn;const i=String(e.get("paid")||"").toLowerCase();if(Wo.test(i)&&(At={id:i,cancel:e.get("cancel")==="1",shown:!1}),!(!At&&s==null))try{const l=new URL(location.href);["paytest"].concat(At?["paid","cancel","response"].concat(Array.from({length:9},(d,c)=>"cField"+(c+1))):[]).forEach(d=>l.searchParams.delete(d)),history.replaceState(null,"",l.pathname+(l.searchParams.toString()?"?"+l.searchParams.toString():"")+l.hash)}catch{}}function nd(){const e=(location.hash||"").replace(/^#/,"").split("&").filter(t=>t&&t.split("=")[0]!=="paytest");try{history.replaceState(null,"",location.pathname+location.search+(e.length?"#"+e.join("&"):""))}catch{}}function sd(){if(g.ready){if(!At){od();return}At.shown||(At.shown=!0,ar(At.id,At.cancel))}}const id=2*864e5;let tr=!1;async function od(){if(tr)return;tr=!0;let e=null;try{e=JSON.parse(J.get(Ft)||"null")}catch{e=null}if(!e||!Wo.test(String(e.id||"")))return;const t=Date.now()-Number(e.at||0);if(!(t>=0&&t<id)){J.set(Ft,"");return}if(!zn())return;let a=null;try{a=await ii("payment-status?id="+encodeURIComponent(e.id),{method:"GET",headers:si()})}catch(s){console.error("pending payment check failed",s);return}a&&a.ok&&(a.status==="paid"||a.status==="review")?ar(e.id,!1):a&&!a.ok&&(a.code==="not_found"||a.code==="bad_id")&&J.set(Ft,"")}function ar(e,t){let a=!1,s=null,n=0,o=null;const i=ge(`
      <div class="sheet-head"><h2 class="sheet-title">התשלום</h2></div>
      <div class="pay-result" data-ref="body" role="status" aria-live="polite"></div>`,()=>{a=!0,clearTimeout(s)}),l=m('[data-ref="body"]',i.el),d=30,c=p=>`<a class="${Ea()==="wa"?"btn wa block":"btn block"} pay-help" href="${r(Va(`שלום! ${p}
מספר התשלום: ${e}`,"שווה בשווה — תשלום "+e.slice(0,8)))}"${Js()}>כתבו לנו ${Pn()}</a>`,u=p=>p&&p.tripId?g.trips.find(f=>f.id===p.tripId):null,h=(p,f)=>{const L=u(f),_=f&&f.itemName?f.itemName:"",T=p==="paid"?ld(f,L):null;let w="";if(p==="checking")w=`<div class="pay-icon wait" aria-hidden="true"></div>
          <h3 class="pay-title">מאשרים את התשלום…</h3>
          <p class="pay-text">בודקים מול חברת הסליקה — זה לוקח כמה שניות. אין צורך לרענן את הדף.</p>`;else if(p==="paid"){let E="";if(f.license&&f.license.until)E=`${r(_)} פעיל עד <span class="num">${r(st(f.license.until,!0))}</span> — ללא הגבלה, בכל הקבוצות שנפתחות בטלפון שלכם.`+(f.license.brandChange?" שם העסק החדש יחליף את השם הקיים אחרי אישור קצר של מפעיל השירות — עד אז יוצג השם הנוכחי.":f.license.brandPending?" שם העסק יוצג בקבוצות אחרי אישור קצר של מפעיל השירות — נעדכן אתכם.":"");else if(f.trip){const A=L?` לקבוצה ״${r(L.name)}״`:"";f.item==="exp20"?E=`נוספו 20 הוצאות${A}.`:f.item==="days7"?E=`התוקף הוארך${A} עד <span class="num">${r(st(f.trip.planUntil))}</span>.`:E=`${r(_)} הופעל${A} — בתוקף עד <span class="num">${r(st(f.trip.planUntil,f.item==="annual"))}</span>.`}else E=`${r(_)} הופעל.`;w=`<div class="pay-icon ok" aria-hidden="true">✓</div>
          <h3 class="pay-title">התשלום התקבל — תודה!</h3>
          <p class="pay-text">${E}</p>
          <p class="pay-paid">שולמו <span class="num">${r(te(f.amount))}</span></p>
          ${/^https:\/\/[^\s"'<>]+$/.test(String(f.invoiceUrl||""))?`<a class="btn block" href="${r(f.invoiceUrl)}" target="_blank" rel="noopener">צפייה בקבלה</a>`:'<p class="hint pay-center">הקבלה נשלחת אליכם אוטומטית מ־Grow.</p>'}
          ${sr(T,{pending:!T.saved,phone:L?or(L):Ke().phone,license:!!Ce[f.item]})}
          <p class="hint pay-center pay-cancel">ביטול עסקה בתוך <span class="num">14</span> יום (סעיף 6 בתקנון) —
            ${Ks('בטופס הביטול באפליקציה: <button type="button" class="linklike" data-help-open="contact" data-help-id="cancellation">ביטול עסקה</button>',{full:!0})}.
            מפעיל השירות: ${On({noPhone:!0,full:!0})}.</p>
          <button class="btn primary block" data-ref="done">${L?"מעבר לקבוצה":"סיום"}</button>`}else p==="cancelled"?w=`<div class="pay-icon off" aria-hidden="true">✕</div>
          <h3 class="pay-title">התשלום בוטל</h3>
          <p class="pay-text">לא בוצע חיוב. אפשר לחזור למסלולים ולנסות שוב בכל עת.</p>
          ${L&&fe(L)?'<button class="btn primary block" data-ref="plans">חזרה למסלולים</button>':""}
          <button class="btn block" data-ref="done">סגירה</button>`:p==="review"?w=`<div class="pay-icon warn" aria-hidden="true">!</div>
          <h3 class="pay-title">התשלום בבדיקה</h3>
          <p class="pay-text">משהו בתשלום דורש בדיקה ידנית. נטפל בזה בהקדם ונעדכן אתכם — אין צורך לשלם שוב.</p>
          ${c("התשלום שלי מסומן ״בבדיקה״.")}
          <button class="btn block" data-ref="done">סגירה</button>`:p==="pending"?w=`<div class="pay-icon still" aria-hidden="true"><svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg></div>
          <h3 class="pay-title">התשלום עדיין לא אושר</h3>
          <p class="pay-text">אם התשלום הושלם — המסלול יופעל אוטומטית ברגע שהאישור יגיע מחברת הסליקה, ואין צורך לשלם שוב. אם הוא לא הופעל בתוך שעה — כתבו לנו.</p>
          <button class="btn primary block" data-ref="again">בדיקה נוספת</button>
          ${c("שילמתי, אבל המסלול עוד לא הופעל.")}`:p==="notfound"?w=`<div class="pay-icon warn" aria-hidden="true">?</div>
          <h3 class="pay-title">לא מצאנו את התשלום הזה</h3>
          <p class="pay-text">ייתכן שהקישור ישן או שהועתק בחלקו. אם חויבתם — כתבו לנו, ונבדוק לפי מספר התשלום.</p>
          ${c("חויבתי, אבל התשלום לא נמצא באתר.")}
          <button class="btn block" data-ref="done">סגירה</button>`:w=`<div class="pay-icon warn" aria-hidden="true">!</div>
          <h3 class="pay-title">לא הצלחנו לבדוק את התשלום</h3>
          <p class="pay-text">ייתכן שאין חיבור לרשת. אם שילמתם — המסלול יופעל אוטומטית, ואין צורך לשלם שוב.</p>
          <button class="btn primary block" data-ref="again">ניסיון נוסף</button>
          ${c("לא הצלחתי לוודא את התשלום.")}`;l.innerHTML="",setTimeout(()=>{if(a)return;l.innerHTML=w,l.dataset.state=p,T&&ir(l,T);const E=m('[data-ref="done"]',l);E&&E.addEventListener("click",()=>{i.close(),L&&p==="paid"&&g.tripId!==L.id&&ht(L.id)});const A=m('[data-ref="plans"]',l);A&&A.addEventListener("click",()=>{i.close(),g.tripId!==L.id&&ht(L.id),jt(L)});const D=m('[data-ref="again"]',l);D&&D.addEventListener("click",()=>{n=0,h("checking",o),v()})},30)},b=p=>{const f=u(p);f&&p.trip&&(Object.assign(f,{plan:p.trip.plan,planUntil:p.trip.planUntil,extraExp:p.trip.extraExp}),p.trip.licPlan&&Object.assign(f,{licPlan:p.trip.licPlan,licUntil:p.trip.licUntil})),g.tripsWatch&&g.tripsWatch.refresh&&g.tripsWatch.refresh(),p.license&&(ot=null),J.set(Ft,""),W()},v=async()=>{if(a)return;n++;let p=null;try{p=await ii("payment-status?id="+encodeURIComponent(e),{method:"GET",headers:si()})}catch(f){console.error("payment-status failed",f)}if(!a){if(p&&p.ok&&(o=p),p&&p.ok&&p.status==="paid"){b(p),h("paid",p),zr();return}if(p&&p.ok&&p.status==="review"){J.set(Ft,""),h("review",p);return}if(t){J.set(Ft,""),h("cancelled",p&&p.ok?p:null);return}if(p&&!p.ok&&(p.code==="not_found"||p.code==="bad_id")){J.set(Ft,""),h("notfound",null);return}if(n>=d){h(p?"pending":"error",o);return}s=setTimeout(v,n<5?1500:2500)}};if(!zn()){h("error",null);return}h("checking",null),v()}let Wn=null;function nr(e){Wn=e==="licensed"||e==="exempt"?e:null}function Gn(){const e=Qe(!0);return{name:e.name,bizId:e.bizId,phone:e.phoneRaw,email:e.email,address:e.address}}function oi(e){if(Ce[e])return{nm:Ce[e].nm,days:Ce[e].days,maxExp:null};if(xe[e])return{nm:xe[e].nm,days:e==="days7"?7:0,maxExp:null};const t=be[e];return t?{nm:t.nm,maxExp:t.maxExp,days:t.days||0}:{}}const Vn=e=>!!(e&&typeof e.text=="string"&&e.text);function rd(e,t,a){const s=Vn(a)?a:Vn(t.confirm)?t.confirm:null;if(s)return{text:s.text,saved:!0,at:Logic.timeMs(s.at),ref:t.id,incomplete:s.incomplete===!0};const n=Logic.purchaseItemOf(t.what),o=(e.purchases||[]).reduce((d,c)=>c&&Logic.timeMs(c.at)>=Logic.timeMs(d&&d.at)?c:d,null),i=n&&!Ce[n]&&o&&o.id===t.id?Logic.timeMs(e.planUntil):0;return{text:Logic.purchaseConfirmation({ref:t.id,at:Logic.timeMs(t.at),what:t.what,price:t.price,item:n,product:oi(n),until:i,group:e.name,biz:Gn(),vatMode:Wn,appUrl:Gt,src:t.src==="grow"?"grow":"manual",sandbox:t.env==="sandbox"}).text,saved:!1,at:0,ref:t.id}}function ld(e,t){if(Vn(e.confirm))return{text:e.confirm.text,saved:!0,at:Logic.timeMs(e.confirm.at),ref:"",incomplete:e.confirm.incomplete===!0};const a=!!Ce[e.item],s=a&&e.license&&e.license.renewed?"renew":e.kind;return{text:Logic.purchaseConfirmation({at:Date.now(),price:e.amount,item:e.item,kind:s,product:oi(e.item),until:a?Logic.timeMs(e.license&&e.license.until):Logic.timeMs(e.trip&&e.trip.planUntil),group:!a&&t?t.name:"",biz:Gn(),vatMode:Wn,appUrl:Gt,src:"grow"}).text,saved:!1,at:0,ref:""}}function cd(e,t){const a=Logic.normalizePhone(t||"");return/^05\d{8}$/.test(a)?ea(a,e):Dt(e)}let dd=0;function sr(e,t){const a=t||{},s="cf-h"+ ++dd;let n=e.saved?`האישור נשמר${e.at?` ב־<span class="num">${r(st(e.at,!0))}</span>`:""} כפי שנמסר, ולא ישתנה.`:a.loadFailed?"לא הצלחנו לטעון כרגע את הנוסח השמור — זה עותק שנבנה מפרטי הרכישה ומפרטי העסק העדכניים.":a.pending&&a.license?"עותק ראשוני — שמרו עותק עכשיו (שמירה כקובץ או שליחה לעצמי).":a.pending?"עותק ראשוני — האישור הסופי יישמר גם במסלולים ← ״הרכישות שלי״.":"נבנה מפרטי הרכישה ומפרטי העסק העדכניים.";return a.license&&(n+=" עותק נוסף של אישור על רישיון אפשר לקבל בפנייה אלינו בטלפון או בוואטסאפ."),e.incomplete&&(n+=" בעותק הזה עדיין חסרים דוא״ל וכתובת של העסק — פרטי ההתקשרות המלאים תמיד בתקנון (סעיף 1)."),`
      <section class="confirm-card${t&&t.full?" full":""}" aria-labelledby="${s}" data-ref="confirm">
        <h3 class="confirm-title" id="${s}">אישור העסקה</h3>
        <p class="confirm-note">מסמך עם פרטי העסקה, זכות הביטול ודרכי הביטול. כדאי לשמור עותק. ${n}</p>
        <pre class="confirm-text" tabindex="0" aria-label="נוסח אישור העסקה">${r(e.text)}</pre>
        <div class="confirm-actions">
          <button type="button" class="btn block" data-ref="cf-save">${Ca()?"שמירה כקובץ":"העתקת האישור"}</button>
          <a class="btn wa block" data-ref="cf-wa" href="${r(cd(e.text,t&&t.phone))}" target="_blank" rel="noopener">שליחה לעצמי בוואטסאפ</a>
        </div>
      </section>`}function ir(e,t){const a=m('[data-ref="cf-save"]',e);a&&a.addEventListener("click",async()=>{if(!Ca()){fs(t.text,"האישור הועתק ✓");return}const s=String(t.ref||"").replace(/[^A-Za-z0-9_-]/g,"").slice(0,40)||Xs(Date.now());try{await as("shaveh-confirmation-"+s+".txt","\uFEFF"+t.text.replace(/\n/g,`\r
`)+`\r
`),S("האישור נשמר כקובץ ✓")}catch(n){console.error(n),fs(t.text,"השמירה לא הצליחה — האישור הועתק ✓")}})}const or=e=>Oe(e&&(e.members||[]).find(t=>t.id===pe(e.id)))||Ke().phone||"";async function pd(e,t){const a=!!(t.confirm&&!Vn(t.confirm)&&Logic.timeMs(t.confirm.at)>0),s=a&&!!(C&&C.purchaseConfirm),n=ge(`
      <div class="sheet-head"><h2 class="sheet-title">אישור העסקה</h2></div>
      <p class="hint confirm-for">${r(t.what)} · <span class="num">${r(te(t.price))}</span> · <span class="num">${r(st(t.at,!0))}</span></p>
      <div data-ref="cf-body">${s?'<p class="hint confirm-loading" role="status">טוענים את האישור השמור…</p>':""}</div>`),o=m('[data-ref="cf-body"]',n.el);let i=null;if(s){try{const d=await C.purchaseConfirm(e.id,t.id);i=d&&d.confirm}catch(d){console.error("purchase confirmation load failed",d)}if(!n.el.isConnected)return n}const l=rd(e,t,i);return o.innerHTML=sr(l,{phone:or(e),full:!0,loadFailed:a&&!l.saved}),ir(n.el,l),n}const ud=[["","לא צוין — ניסוח כללי"],["link","קישור תשלום של Grow"],["bit","ביט או פייבוקס"],["transfer","העברה בנקאית"]];function fd(e,t){const a=(e.members||[]).find(p=>p.id===e.managerId),s=Oe(a),n=/^05\d{8}$/.test(s),o=Logic.confirmMissing(Gn()),i=Logic.purchaseItemOf(t.what);let l=null;const d=p=>{const f=Logic.purchaseConfirmation({ref:t.id,at:Logic.timeMs(t.at),what:t.what,price:t.price,item:i,product:oi(i),until:i&&!Ce[i]?Logic.timeMs(e.planUntil):0,group:e.name,biz:Gn(),vatMode:Wn,appUrl:Gt,src:"manual",payVia:p});return{v:f.v,text:f.text}},c=ge(`
      <div class="sheet-head"><h2 class="sheet-title">שליחת אישור לקונה</h2></div>
      <p class="hint confirm-for">${r(t.what)} · <span class="num">${r(te(t.price))}</span> · ${r(e.name)}</p>
      <p class="confirm-note">חוק הגנת הצרכן מחייב למסור לקונה, לא יאוחר מההפעלה, מסמך בכתב עם פרטי העסקה ודרכי הביטול.
        הנוסח נפתח בוואטסאפ אל מנהל הקבוצה${a?` — ${r(a.name)}`:""}${n?` · <span class="num" dir="ltr">${r(Ct(s))}</span>`:""}.</p>
      ${o.length?`<div class="banner warn" role="status" data-ref="cf-missing">חסרים באישור ${o.length>1?"דוא״ל וכתובת לדואר רשום":o[0]==="email"?"דוא״ל":"כתובת לדואר רשום"} של העסק —
        דרכי ביטול שהחוק מחייב. כדאי להשלים אותם באזור הניהול המקצועי (״הגדרות ← פרטי העסק״) לפני השליחה.</div>`:""}
      ${n?"":'<div class="banner warn" role="status">לא רשום טלפון נייד תקין למנהל הקבוצה. אפשר להעתיק את הנוסח ולשלוח בדרך אחרת.</div>'}
      <div class="field">
        <label for="cf-payvia">איך שולם?</label>
        <select class="input" id="cf-payvia" data-ref="cf-payvia">
          ${ud.map(([p,f])=>`<option value="${p}">${r(f)}</option>`).join("")}
        </select>
      </div>
      <pre class="confirm-text full" tabindex="0" aria-label="נוסח אישור העסקה" data-ref="cf-text"></pre>
      <div class="confirm-actions">
        <button type="button" class="btn block" data-ref="cf-copy">העתקת הנוסח</button>
        ${n?'<a class="btn wa block" data-ref="cf-send" href="#" target="_blank" rel="noopener">שליחה בוואטסאפ למנהל הקבוצה</a>':'<button type="button" class="btn block" disabled>אין טלפון לשליחה</button>'}
      </div>`),u=m('[data-ref="cf-text"]',c.el),h=m('[data-ref="cf-send"]',c.el),b=m('[data-ref="cf-payvia"]',c.el),v=()=>{l=d(b.value),u.textContent=l.text,h&&(h.href=ea(s,l.text))};return b.addEventListener("change",v),v(),m('[data-ref="cf-copy"]',c.el).addEventListener("click",()=>fs(l.text,"הנוסח הועתק ✓")),h&&h.addEventListener("click",async()=>{if(!C.purchaseConfirmSent){S("האישור נפתח בוואטסאפ ✓");return}try{await C.purchaseConfirmSent(e.id,t.id,l),S("האישור נשלח לקונה ונרשם ✓")}catch(p){console.error("confirm record failed",p),S("האישור נפתח בוואטסאפ, אבל הרישום בשרת נכשל")}}),c}function hd(e){const t=(e.purchases||[]).filter(a=>a&&a.id&&a.price>0).slice().sort((a,s)=>Logic.timeMs(s.at)-Logic.timeMs(a.at));return!t.length||!fe(e)?"":`
      <h3 class="plans-sub" id="my-buys-h">הרכישות שלי</h3>
      <ul class="buys-list" aria-labelledby="my-buys-h">
        ${t.map(a=>`
          <li class="buy-row">
            <span class="buy-mid">
              <b>${r(a.what)}</b>
              <small><span class="num">${r(st(a.at,!0))}</span> · <span class="num">${r(te(a.price))}</span>${a.env==="sandbox"?" · רכישת ניסיון":""}</small>
            </span>
            <button type="button" class="btn sm" data-confirm-buy="${r(a.id)}" aria-label="${r(`אישור העסקה: ${a.what}, ${te(a.price)}`)}">אישור העסקה</button>
          </li>`).join("")}
      </ul>`}let ri="";function md(e){const t=e.get("legal");if(t!=null){Object.prototype.hasOwnProperty.call(Bo,t)&&(ri=t);try{const a=new URL(location.href);a.searchParams.delete("legal"),history.replaceState(null,"",a.pathname+(a.searchParams.toString()?"?"+a.searchParams.toString():"")+a.hash)}catch{}}}function bd(){const e=ri;!e||!g.ready||At||(ri="",setTimeout(()=>Hn(e),120))}const li="shaveh_brand_v1";let ot=null,Xn=!1,sa=!1,$t=!1,ci=null;async function rr(e){if(!C||!C.listLicenses)return[];if(ot&&!e)return ot;try{ot=await C.listLicenses()||[],sa=!1}catch(t){if(console.error("licenses load failed",t),sa=!0,!ot)throw t}return ot}function lr(){Xn||(Xn=!0,rr(!0).catch(()=>{}).then(()=>{Xn=!1,W()}))}const di=e=>!!(e&&Number(e.until)>Date.now());async function cr(e){return!e||!C||!C.licenseForPhone?null:C.licenseForPhone(e)}function Ut(e){return!e||!e.brand||!e.brand.name?null:Sa(e).isLicense?e.brand:null}function pi(){if($t)return ci;try{return JSON.parse(J.get(li)||"null")}catch{return null}}function dr(){const e=pi();return e&&e.name&&Number(e.until)>Date.now()?e:null}function pr(e){const t={id:e.id,name:e.brand.name,logo:e.brand.logo||"",until:e.until};if($t){ci=t;return}J.set(li,JSON.stringify(t))}function gd(){if($t){ci=null;return}J.set(li,"")}function ur(e){e&&di(e)&&e.brand&&e.brand.name?pr(e):gd()}const fr=e=>Gt+"?brand="+encodeURIComponent(e.id);function Zn(e,t){const a=ia(e.logo);return a?`<img class="${t||"brand-logo"}" src="${r(a)}" alt="" aria-hidden="true">`:`<span class="${t||"brand-logo"} brand-initial" aria-hidden="true">${r(String(e.name||"?").trim().charAt(0))}</span>`}async function yd(e,t){const a=Date.now();let s=0;for(const n of g.trips){const o=(n.members||[]).find(c=>c.id===n.managerId),i=o?Oe(o):"";if(!(n.licenseId===e.id||i&&Logic.phonesEqual(i,e.phone)))continue;const d=Logic.licensePatch(n,i,t,a,Ce);if(d)try{await C.updateTrip(n.id,d),Object.assign(n,d),s++}catch(c){console.error("apply license failed",c)}}return s}function vd(){const e='<button class="linklike" data-act="licenses-retry">ניסיון נוסף</button>';if(!ot)return sa&&!Xn?`<div class="banner warn" role="status">לא הצלחנו לטעון את הרישיונות כרגע. ${e}</div>`:(sa||lr(),'<p class="hint">טוענים רישיונות…</p>');const t=sa?`<div class="banner warn" role="status">הטעינה האחרונה של הרישיונות נכשלה — ייתכן שהרשימה אינה מעודכנת. ${e}</div>`:"";return ot.length?t+`<div class="acct-list">${ot.slice().sort((a,s)=>(s.until||0)-(a.until||0)).map(a=>{const s=a.brand&&a.brand.name||"ללא שם",n=Ce[a.plan]||{},o=di(a)?"בתוקף עד "+st(a.until,(n.days||0)>=365):"לא בתוקף",i=Ct(a.phone);return`
      <button class="acct-row tap" data-act="license-open" data-id="${r(a.id)}" aria-label="${r(`ניהול הרישיון של ${s} — ${n.nm||""} · ${o} · טלפון ${i}`)}">
        ${Zn(a.brand||{},"brand-logo sm")}
        <span class="acct-mid">
          <b>${r(s)}</b>
          <small>${r(n.nm||"")} · ${r(o)} · <span class="num">${r(i)}</span></small>
        </span>
      </button>`}).join("")}</div>`:t+'<p class="hint">עדיין אין רישיונות עסקיים.</p>'}function hr(e){const t=!e,a=e?ie(e):{id:it("lic"),phone:"",plan:"pro",until:0,brand:{name:"",logo:""},created:Date.now()};a.brand=a.brand||{name:"",logo:""},Ce[a.plan]||(a.plan="pro");let s=a.plan;const n=!t&&di(a),o=Number(a.until)||0,i=Ce[a.plan],l=`שלום! הרישיון ״${i.nm}״ של ״${a.brand.name}״ פעיל עד ${st(a.until,i.days>=365)}.`+(Ne?`
האפליקציה עם הלוגו שלכם: ${fr(a)}`:"")+`
כל קבוצה שתפתחו — ללא הגבלה ועם המיתוג שלכם.`,d=ge(`
      <div class="sheet-head"><h2 class="sheet-title">${t?"רישיון עסקי חדש":"רישיון — "+r(a.brand.name)}</h2></div>
      <div class="field">
        <label for="lic-name">שם העסק</label>
        <input class="input" id="lic-name" maxlength="40" placeholder="למשל: יוני צור הפקות" value="${r(a.brand.name)}">
        ${C&&C.kind==="rest"&&C.secure?'<p class="hint">בשרת המשותף השם והלוגו מוצגים בקבוצות רק אחרי ״אישור מיתוג״ באזור הניהול המקצועי — גם אחרי כל שינוי בהם.</p>':""}
      </div>
      <div class="field">
        <label for="lic-phone">הטלפון של המנהל</label>
        <input class="input ltr" id="lic-phone" type="tel" inputmode="tel" maxlength="20"
          placeholder="050-0000000" value="${r(a.phone?Ct(a.phone):"")}">
        <p class="hint">הרישיון חל על כל הקבוצות שהמנהל הזה פותח — וגם על אלה שכבר פתוחות. המסלול של כל קבוצה נשמר, וחוזר לתוקף כשהרישיון מסתיים.</p>
      </div>
      <div class="field">
        <label>לוגו</label>
        <div class="lic-logo" data-ref="logobox">${ia(a.brand.logo)?`<img src="${r(ia(a.brand.logo))}" alt="הלוגו של העסק">`:'<span class="hint">עדיין אין לוגו — תוצג האות הראשונה של שם העסק</span>'}</div>
        <input type="file" accept="image/*" data-ref="logoinput" hidden>
        <button type="button" class="btn sm block" data-ref="logobtn" style="margin-top:8px;">בחירת תמונת לוגו</button>
      </div>
      <div class="field">
        <label id="lic-plan-lbl">מסלול</label>
        <div class="chip-row" role="group" aria-labelledby="lic-plan-lbl">
          ${Rn.map(T=>`<button type="button" class="chip" data-licplan="${T}" aria-pressed="${s===T}">${r(Ce[T].nm)} · ${r(te(Ce[T].price))}</button>`).join("")}
        </div>
        <p class="hint">${t?"התוקף מתחיל מהיום.":n?`בתוקף עד ${r(st(o,i.days>=365))}. ״שמירת הפרטים״ אינה משנה את התוקף; ״חידוש לתקופה נוספת״ מוסיף תקופה מהתאריך הזה.`:"הרישיון אינו בתוקף כרגע. ״חידוש לתקופה נוספת״ מפעיל אותו מחדש מהיום."}</p>
      </div>
      ${t?'<button class="btn primary block" data-ref="activate">הפעלת הרישיון</button>':`<button class="btn primary block" data-ref="details">שמירת הפרטים</button>
           <button class="btn block" data-ref="renew" style="margin-top:10px;">חידוש לתקופה נוספת</button>`}
      ${n?(Ne?`
      <div class="field" style="margin-top:16px;">
        <label for="lic-link">קישור המיתוג של העסק</label>
        <input class="input ltr" id="lic-link" readonly value="${r(fr(a))}">
        <p class="hint">מי שנכנס דרך הקישור רואה את האפליקציה עם הלוגו והשם של העסק.</p>
      </div>`:`
      <p class="hint" style="margin-top:16px;">קישור המיתוג (מסך הבית עם הלוגו של העסק) פועל בגרסת הווב בלבד — <span class="num">${r(Es)}</span> — שם נשמרים הרישיונות של העסקים. כאן הרישיון חל על הקבוצות שבגרסה הזו.</p>`)+(a.phone?`<a class="btn wa block" href="${r(ea(a.phone,l))}" target="_blank" rel="noopener">שליחת ${Ne?"הקישור":"ההודעה"} לעסק בוואטסאפ</a>`:"")+'<button class="btn danger block" data-ref="stop" style="margin-top:10px;">הפסקת הרישיון</button>':""}
    `),c=d.el;z("[data-licplan]",c).forEach(T=>T.addEventListener("click",()=>{s=T.dataset.licplan,z("[data-licplan]",c).forEach(w=>w.setAttribute("aria-pressed",String(w===T)))}));const u=m('[data-ref="logoinput"]',c);m('[data-ref="logobtn"]',c).addEventListener("click",()=>u.click()),u.addEventListener("change",async()=>{const T=u.files&&u.files[0];if(T)try{let w=await Oa(T,320,.86,!0,{keepAlpha:!0});if(w.length>Dr&&(w=await Oa(T,200,.8,!0,{keepAlpha:!0})),w.length>Dr||!ia(w)){S("הלוגו גדול מדי — נסו תמונה פשוטה או קטנה יותר");return}a.brand.logo=w,m('[data-ref="logobox"]',c).innerHTML=`<img src="${r(w)}" alt="הלוגו של העסק">`}catch(w){console.error(w),S("לא הצלחנו לקרוא את התמונה")}});const h=()=>z('[data-ref="activate"],[data-ref="details"],[data-ref="renew"],[data-ref="stop"]',c);let b=!1;const v=async(T,w,E,A)=>{if(b)return;let D=null;if(A){const R=m("#lic-name",c).value.trim(),re=m("#lic-phone",c).value.trim();if(!R){Ie(m("#lic-name",c),"נא להזין את שם העסק");return}if(!Logic.validatePhone(re)){Ie(m("#lic-phone",c),"מספר הטלפון אינו תקין — למשל 050-0000000");return}D={name:R,phone:Logic.normalizePhone(re)}}b=!0;const U=T.textContent;h().forEach(R=>{R.disabled=!0}),T.textContent="שומרים…";const I=a.until;D&&(a.brand.name=D.name,a.phone=D.phone,a.plan=s),w();try{await C.saveLicense(a);let R;try{R=await rr(!0)}catch{R=ot||[]}R=R.filter(P=>P.id!==a.id).concat([ie(a)]),ot=R;const re=await yd(a,R),X=pi();X&&X.id===a.id&&ur(a),d.close(),S(E+(re?re===1?" · קבוצה אחת עודכנה":` · ${re} קבוצות עודכנו`:"")),W()}catch(R){console.error(R),a.until=I,T.textContent=U,S(qt(R))}finally{b=!1,h().forEach(R=>{R.disabled=!1})}},p=m('[data-ref="activate"]',c);p&&p.addEventListener("click",()=>v(p,()=>{a.until=Logic.extendFrom(0,Date.now(),Ce[a.plan].days)},"הרישיון הופעל ✓",!0));const f=m('[data-ref="details"]',c);f&&f.addEventListener("click",()=>v(f,()=>{},"פרטי הרישיון נשמרו ✓",!0));const L=m('[data-ref="renew"]',c);L&&L.addEventListener("click",async()=>{const T=Ce[s].days,w=Logic.extendFrom(o,Date.now(),T);await Me("חידוש הרישיון",`הרישיון ״${Ce[s].nm}״ יוארך עד ${st(w,T>=365)}. להמשיך?`,"חידוש")&&v(L,()=>{a.until=Logic.extendFrom(o,Date.now(),Ce[a.plan].days)},"הרישיון חודש ✓",!0)});const _=m('[data-ref="stop"]',c);_&&_.addEventListener("click",async()=>{await Me("הפסקת הרישיון",`הרישיון של ״${a.brand.name}״ יופסק עכשיו. כל קבוצה תחזור למסלול שלה עצמה (או לרישיון פעיל אחר של אותו טלפון, אם יש), והנתונים נשמרים. להמשיך?`,"הפסקה",!0)&&v(_,()=>{a.until=Date.now()-1},"הרישיון הופסק",!1)})}const mr="shaveh_mgrpass_v1";function br(){try{return JSON.parse(J.get(mr)||"{}")||{}}catch{return{}}}function gr(e,t){const a=br();a[e]=t,J.set(mr,JSON.stringify(a))}async function yr(e,t){const a=e+"|"+String(t||"");try{const s=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(a));return Array.from(new Uint8Array(s)).map(n=>n.toString(16).padStart(2,"0")).join("")}catch{return"h"+Logic.hashId(a).toString(16)}}function ui(e){const t=pe(e.id);return t?(e.members||[]).some(s=>s.id===t)?t:(We(e.id,null),null):null}function $d(e){return fe(e)?!g.secure||It()?!0:!!lt()[e.id]:!1}const vr="מחיקת הקבוצה אפשרית רק מהמכשיר שפתח אותה, או אחרי כניסה בסיסמת מנהל הקבוצה.";function Qa(e){return!!(e&&g.secure&&C&&C.kind==="rest"&&Array.isArray(e.keyed))}function $r(e,t){return Qa(e)&&!!t&&e.keyed.indexOf(t)>=0&&!Qt(e.id,t)}const fi=()=>!!(C&&C.kind==="rest"&&C.secure),hi=e=>!!(e&&(e.mgrPass||e.hasMgrPass));function wd(e){return!e||!fi()||!e.managerId||fe(e)||Qa(e)?!1:pe(e.id)===e.managerId}function fe(e){return e?It()||e.managerId&&pe(e.id)===e.managerId&&(!fi()||Qa(e)&&Qt(e.id,e.managerId))||e.mgrPass&&br()[e.id]===e.mgrPass?!0:e.ownerToken?lt()[e.id]===e.ownerToken:!1:!1}const wr="שינוי ההוצאה שמור למי שרשם אותה ולמנהל הקבוצה";function mi(e,t){const a=pe(e.id);return!!(a&&(t.payerId===a||Logic.partsOf(e,t).indexOf(a)>=0))}function kr(e,t){return!e||!t?!1:typeof t.canEdit=="boolean"?t.canEdit:fe(e)||mi(e,t)}function xr(e,t){return!e||!t?!1:typeof t.canDel=="boolean"?t.canDel:fe(e)||t.payerId===pe(e.id)}function dt(e){const t=e&&e.vis||{};return{exp:t.exp==="all"?"all":"mine",bal:t.bal==="all"?"all":"mine",sum:t.sum==="on"?"on":"off"}}function Lr(e){return(e||[]).filter(t=>t.delReq&&t.delReq.by)}const bi="shaveh_profile_v1";function Ke(){try{return JSON.parse(J.get(bi)||"{}")||{}}catch{return{}}}function en(e,t){const a=Ke();e&&(a.name=e),t&&(a.phone=t),J.set(bi,JSON.stringify(a))}const gi="shaveh_me_v2",Er="shaveh_me_v1";try{J.get(Er)!==null&&J.set(Er,"")}catch{}function pe(e){try{return(JSON.parse(J.get(gi)||"{}")||{})[e]||null}catch{return null}}function We(e,t){let a={};try{a=JSON.parse(J.get(gi)||"{}")||{}}catch{a={}}t?a[e]=t:delete a[e],J.set(gi,JSON.stringify(a))}async function tn(e,t){if(!C||!C.claimMember||!e||!t)return!1;if(C.hasMemberKey(e.id,t))return!0;try{return!!await C.claimMember(e.id,t)}catch(a){return console.error("member key claim failed",a),!1}}const Sr={};function _r(e){if(!e||!g.secure||!C||!C.claimMember||!Array.isArray(e.keyed))return;const t=pe(e.id);if(!t||C.hasMemberKey(e.id,t)||e.keyed.indexOf(t)>=0||!(e.members||[]).some(s=>s.id===t)||lt()[e.id]&&t!==e.managerId)return;const a=e.id+"|"+t;Sr[a]||(Sr[a]=!0,tn(e,t))}function yi(){try{const e=document.querySelector("script[data-ver]")||[...document.scripts].find(s=>/(^|\/)app[.]/.test(s.getAttribute("src")||""));if(!e)return"";const t=e.getAttribute("data-ver");if(t&&/^[a-f0-9]+$/.test(t))return t;const a=(e.getAttribute("src")||"").match(/app\.([0-9a-f]{10})\.js|[?&]v=([a-f0-9]+)/);return a?a[1]||a[2]:""}catch{return""}}const Tr="shaveh_notif_v1";let Kt=null,an=null;const et=()=>J.get(Tr)!=="off";function _a(e){J.set(Tr,e?"on":"off")}const Cr="shaveh_mute_v1";function jr(){try{const e=JSON.parse(J.get(Cr)||"{}");return e&&typeof e=="object"?e:{}}catch{return{}}}const wt=e=>!!jr()[e];function kd(e,t){const a=jr();t?a[e]=!0:delete a[e],J.set(Cr,JSON.stringify(a))}function Qn(){if(et())try{const e=window.AudioContext||window.webkitAudioContext;if(!e)return;Kt||(Kt=new e),Kt.state==="suspended"&&Kt.resume();const t=Kt.currentTime;[[0,1318.5],[.11,1046.5]].forEach(([a,s])=>{[1,2.02].forEach((n,o)=>{const i=Kt.createOscillator(),l=Kt.createGain();i.type="triangle",i.frequency.value=s*n;const d=o===0?.22:.09;l.gain.setValueAtTime(1e-4,t+a),l.gain.exponentialRampToValueAtTime(d,t+a+.012),l.gain.exponentialRampToValueAtTime(1e-4,t+a+.42),i.connect(l),l.connect(Kt.destination),i.start(t+a),i.stop(t+a+.45)})})}catch(e){console.error("sound failed",e)}}function Ar(e,t){try{if(!et()||!("Notification"in window)||Notification.permission!=="granted"||document.visibilityState==="visible")return;new Notification(e,{body:t,tag:"shaveh-expense",icon:Ne?"icons/icon-192.png":void 0})}catch(a){console.error("notify failed",a)}}async function vi(){try{return"Notification"in window?Notification.permission==="granted"?!0:Notification.permission==="denied"?!1:await Notification.requestPermission()==="granted":!1}catch{return!1}}function xd(e,t){const a=new Set(t.map(c=>c.id));if(an===null){an=a;return}const s=pe(e.id),n=t.filter(c=>!an.has(c.id));if(an=a,!n.length||wt(e.id))return;const o=n.filter(c=>c.payerId!==s);if(!o.length)return;const i=o[o.length-1],l=me(e,i.payerId),d=Logic.isPayment(i)?`תשלום חדש מאת ${l}: ${Ae(Logic.expenseBaseCents(e,i),e.base)}`:`הוצאה חדשה מאת ${l}: ${i.note?i.note+" · ":""}${Ae(Logic.expenseBaseCents(e,i),e.base)}`;Qn(),S(o.length>1?`💰 ${o.length} הוצאות חדשות בקבוצה`:"💰 "+d),Ar(e.name,d)}const Mr="shaveh_install_v1";let Ta=null;const Ld=()=>{try{return window.matchMedia&&matchMedia("(display-mode: standalone)").matches||window.navigator.standalone===!0}catch{return!1}},Or=()=>{try{return/iPad|iPhone|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}catch{return!1}};function Pr(){const e=Number(J.get(Mr)||0);return e>0&&Date.now()-e<14*864e5}function Nr(){J.set(Mr,String(Date.now()))}function Ed(){return Ne&&!Ld()&&(Ta||Or())}typeof window!="undefined"&&(window.addEventListener("beforeinstallprompt",e=>{e.preventDefault(),Ta=e,g.ready&&!Pr()&&W()}),window.addEventListener("appinstalled",()=>{Ta=null,S("האפליקציה נוספה למסך הבית ✓"),W()}));function Sd(){const e=Or(),t=ge(`
      <div class="sheet-head"><h2 class="sheet-title">הוספה למסך הבית</h2></div>
      <div class="install-hero">
        <img src="${Ne?"icons/icon-192.png":""}" alt="" class="install-icon" data-ref="installicon">
        <p class="install-lead">פותחים את ״שווה בשווה״ בלחיצה אחת, כמו כל אפליקציה — בלי לחפש קישורים.</p>
      </div>
      ${e?`
        <ol class="install-steps">
          <li><b>לוחצים על כפתור השיתוף</b> <span class="ios-share" aria-hidden="true">􀈂</span>
            שבתחתית המסך (ריבוע עם חץ כלפי מעלה).</li>
          <li>גוללים ובוחרים <b>״הוספה למסך הבית״</b>.</li>
          <li>לוחצים <b>״הוסף״</b> — וזהו.</li>
        </ol>
        <p class="hint" style="text-align:center;">חשוב: באייפון הפעולה עובדת מדפדפן <b>Safari</b> בלבד.</p>`:`
        <p style="color:var(--ink-2); font-size:15px; margin:0 0 16px;">
          לוחצים על הכפתור, ומאשרים את ההודעה שתופיע.
        </p>
        <button class="btn primary block" data-ref="doinstall">הוספה למסך הבית</button>`}
      <button class="join-skip" data-ref="later">אולי בפעם אחרת</button>
    `),a=m('[data-ref="installicon"]',t.el);if(a){const n=()=>{a.style.display="none"};!a.getAttribute("src")||a.complete&&!a.naturalWidth?n():a.addEventListener("error",n)}const s=m('[data-ref="doinstall"]',t.el);s&&s.addEventListener("click",async()=>{if(!Ta){S("ההתקנה אינה זמינה בדפדפן זה");return}const n=Ta;Ta=null,t.close();try{n.prompt();const o=await n.userChoice;o&&o.outcome!=="accepted"&&Nr()}catch(o){console.error(o)}}),m('[data-ref="later"]',t.el).addEventListener("click",()=>{Nr(),t.close(),W()})}const es={calculator:`<rect x="4.5" y="2.5" width="15" height="19" rx="2.8"/>
       <rect x="7.5" y="5.8" width="9" height="3.6" rx="1.1" fill="currentColor" stroke="none"/>
       <g fill="currentColor" stroke="none">
         <rect x="7.2" y="12.2" width="2.6" height="2.6" rx="0.8"/>
         <rect x="10.7" y="12.2" width="2.6" height="2.6" rx="0.8"/>
         <rect x="14.2" y="12.2" width="2.6" height="2.6" rx="0.8"/>
         <rect x="7.2" y="16.4" width="2.6" height="2.6" rx="0.8"/>
         <rect x="10.7" y="16.4" width="2.6" height="2.6" rx="0.8"/>
         <rect x="14.2" y="16.4" width="2.6" height="2.6" rx="0.8"/>
       </g>`,gear:`<path d="M12 15.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Z"/>
       <path d="M19.1 14.2a1.5 1.5 0 0 0 .3 1.65l.05.05a1.8 1.8 0 1 1-2.55 2.55l-.05-.05a1.5 1.5 0 0 0-1.65-.3 1.5 1.5 0 0 0-.9 1.37v.14a1.8 1.8 0 1 1-3.6 0v-.07a1.5 1.5 0 0 0-.98-1.37 1.5 1.5 0 0 0-1.65.3l-.5.05a1.8 1.8 0 1 1-2.55-2.55l.05-.05a1.5 1.5 0 0 0 .3-1.65 1.5 1.5 0 0 0-1.37-.9h-.14a1.8 1.8 0 1 1 0-3.6h.07a1.5 1.5 0 0 0 1.37-.98 1.5 1.5 0 0 0-.3-1.65l-.05-.05A1.8 1.8 0 1 1 8.02 4.6l.5.05a1.5 1.5 0 0 0 1.65.3h.07a1.5 1.5 0 0 0 .9-1.37v-.14a1.8 1.8 0 1 1 3.6 0v.07a1.5 1.5 0 0 0 .9 1.37 1.5 1.5 0 0 0 1.65-.3l.05-.05a1.8 1.8 0 1 1 2.55 2.55l-.5.05a1.5 1.5 0 0 0-.3 1.65v.07a1.5 1.5 0 0 0 1.37.9h.14a1.8 1.8 0 1 1 0 3.6h-.07a1.5 1.5 0 0 0-1.37.9Z"/>`,share:`<circle cx="17.5" cy="5.8" r="2.6"/><circle cx="6.2" cy="12" r="2.6"/><circle cx="17.5" cy="18.2" r="2.6"/>
       <path d="m8.5 10.7 6.8-3.6M8.5 13.3l6.8 3.6"/>`,archive:`<rect x="3" y="4" width="18" height="4.5" rx="1.5"/>
       <path d="M4.8 8.5v10a1.5 1.5 0 0 0 1.5 1.5h11.4a1.5 1.5 0 0 0 1.5-1.5v-10"/>
       <path d="M10 13h4"/>`,back:'<path d="M4.5 12h15M12.5 5l7 7-7 7"/>',plus:'<path d="M12 5v14M5 12h14"/>',check:'<path d="m5 12.5 4.5 4.5L19 7.5"/>',bell:'<path d="M6 16v-5a6 6 0 1 1 12 0v5l1.5 2h-15L6 16Z"/><path d="M10 20.5a2 2 0 0 0 4 0"/>',bellOff:'<path d="M6 16v-5a6 6 0 0 1 9.5-4.9M18 11v5l1.5 2H8"/><path d="M10 20.5a2 2 0 0 0 4 0"/><path d="M4 4l16 16"/>',out:'<path d="M7 17 17 7"/><path d="M9 7h8v8"/>',in:'<path d="M17 7 7 17"/><path d="M15 17H7V9"/>',copy:'<rect x="8" y="8" width="12" height="12" rx="2.5"/><path d="M16 8V5.5A1.5 1.5 0 0 0 14.5 4h-9A1.5 1.5 0 0 0 4 5.5v9A1.5 1.5 0 0 0 5.5 16H8"/>',chat:'<path d="M4 20l1.3-3.9A8 8 0 1 1 8 19.1L4 20Z"/>',finish:'<path d="M5 21V4"/><path d="M5 4h11l-2 4 2 4H5"/>',chart:'<path d="M4 20h16"/><path d="M7 16v-5M12 16V7M17 16v-8"/>',users:'<circle cx="9" cy="8" r="3.2"/><path d="M3.5 19a5.5 5.5 0 0 1 11 0"/><path d="M16 5.2a3 3 0 0 1 0 5.6M17.5 14.2A5 5 0 0 1 20.5 19"/>',camera:'<path d="M4 8h3l2-3h6l2 3h3v11H4Z"/><circle cx="12" cy="13.5" r="3.5"/>',spark:'<path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2V16h5v-.1c0-.8.4-1.5 1-2A6 6 0 0 0 12 3Z"/>',lock:'<rect x="5" y="10.5" width="14" height="10" rx="2.5"/><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5"/>',trash:'<path d="M4 7h16M10 11v6M14 11v6"/><path d="M6 7l1 12.5A1.5 1.5 0 0 0 8.5 21h7a1.5 1.5 0 0 0 1.5-1.5L18 7M9 7V4h6v3"/>',chevron:'<path d="m14.5 6-6 6 6 6"/>',tag:'<path d="M20.6 13.4l-7.2 7.2a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8Z"/><circle cx="7.5" cy="7.5" r="1.5"/>',image:'<rect x="3.5" y="5" width="17" height="14" rx="2.5"/><circle cx="9" cy="10" r="1.8"/><path d="m4.5 17.5 5-4.5 3.5 3 3-2.5 4.5 4"/>'};function he(e,t){const a=es[e];return a?`<svg class="ico" viewBox="0 0 24 24" width="${t||21}" height="${t||21}"
      fill="none" stroke="currentColor" stroke-width="1.6"
      stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${a}</svg>`:""}[["chat",'<path d="M4 20l1.3-3.9A8 8 0 1 1 8 19.1L4 20Z"/>'],["copy",'<rect x="8" y="8" width="12" height="12" rx="2.5"/><path d="M16 8V5.5A1.5 1.5 0 0 0 14.5 4h-9A1.5 1.5 0 0 0 4 5.5v9A1.5 1.5 0 0 0 5.5 16H8"/>'],["users",'<circle cx="9" cy="8" r="3.2"/><path d="M3.5 19a5.5 5.5 0 0 1 11 0"/><path d="M16 5.2a3 3 0 0 1 0 5.6M17.5 14.2A5 5 0 0 1 20.5 19"/>'],["plus",'<path d="M12 5v14M5 12h14"/>']].forEach(([e,t])=>{es[e]||(es[e]=t)});const $i="shaveh_destimg_v2";let nn=null;J.del("shaveh_destimg_v1");function ts(){if(nn)return nn;try{nn=JSON.parse(J.get($i)||"{}")||{}}catch{nn={}}return nn}function wi(e){if(!e)return null;const t=ts()[String(e).trim()];return t&&t.url&&ia(t.url)||null}const _d=30*864e5,Td=36e5,Hr=e=>!!e&&Date.now()-(e.at||0)<(e.err?Td:_d),sn=new Map;function Ir(e){const t=(e||"").trim();if(!t||!Ne)return Promise.resolve(null);const a=ts()[t];if(Hr(a))return Promise.resolve(a.url||null);if(sn.has(t))return sn.get(t);const s=Cd(t).finally(()=>sn.delete(t));return sn.set(t,s),s}async function Cd(e){const t=ts(),a=t[e]&&t[e].url||null,s=()=>(t[e]={url:a,at:Date.now(),err:!0},J.set($i,JSON.stringify(t)),a);try{const n=new AbortController,o=setTimeout(()=>n.abort(),7e3),i=await fetch("https://he.wikipedia.org/api/rest_v1/page/summary/"+encodeURIComponent(e),{signal:n.signal}).finally(()=>clearTimeout(o));if(!i.ok&&(i.status!==404||a))return s();let l=null;if(i.ok){const d=await i.json();l=Logic.destImageUrl(d)}return t[e]={url:l,at:Date.now()},J.set($i,JSON.stringify(t)),l}catch{return console.warn("dest image unavailable — will retry in an hour",e),s()}}function jd(e){if(!Ne)return;const t=ts(),a=(e||[]).map(s=>(qe(s).id==="trip"&&s.dest||"").trim()).filter(s=>s&&!Hr(t[s])&&!sn.has(s));a.length&&Promise.all(Array.from(new Set(a)).slice(0,8).map(Ir)).then(s=>{s.some(Boolean)&&W()}).catch(()=>{})}function ki(e){const t=Number.isInteger(e.colorIdx)?e.colorIdx:Logic.hashId(e.id)%ba.length,a=ba[(t%ba.length+ba.length)%ba.length];return`--trip-g1:${a[0]};--trip-g2:${a[1]}`}const ia=e=>Logic.safeImgUrl(e,typeof location!="undefined"?location.origin:""),Dr=12e4;function r(e){return String(e==null?"":e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}const Ad="0123456789abcdefghijklmnopqrstuvwxyz";function it(e){let t="";for(;t.length<25;){const a=new Uint8Array(32);crypto.getRandomValues(a);for(let s=0;s<a.length&&t.length<25;s++)a[s]<252&&(t+=Ad[a[s]%36])}return e+"_"+Date.now().toString(36)+t}const ie=e=>JSON.parse(JSON.stringify(e));function kt(e){return ma.find(t=>t.c===e)||{c:e,n:e,r:1}}const Rr="shaveh_rates_v1",xi=360*60*1e3;let Ye=null;function Md(){try{const e=JSON.parse(J.get(Rr)||"null");if(e&&e.base&&e.rates&&Date.now()-(e.at||0)<xi)return e}catch{}return null}async function Li(e){if(Ye&&Ye.base===e&&Date.now()-Ye.at<xi)return Ye;const t=Md();if(t&&t.base===e)return Ye=t,t;if(!Ne)return null;try{const a=new AbortController,s=setTimeout(()=>a.abort(),8e3),n=await fetch("https://open.er-api.com/v6/latest/"+encodeURIComponent(e),{signal:a.signal}).finally(()=>clearTimeout(s));if(!n.ok)throw new Error("rates "+n.status);const o=await n.json();if(!o||o.result!=="success"||!o.rates)throw new Error("bad payload");const i={};return Object.keys(o.rates).forEach(l=>{const d=Number(o.rates[l]);d>0&&(i[l]=1/d)}),Ye={base:e,at:Date.now(),rates:i,updated:o.time_last_update_utc||""},J.set(Rr,JSON.stringify(Ye)),Ye}catch(a){return console.error("live rates failed",a),null}}function Ei(e,t){return e===t?1:Ye&&Ye.base===t&&Ye.rates[e]>0&&Date.now()-(Ye.at||0)<xi?Ye.rates[e]:null}function Br(){if(!Ye)return"";try{const e=Ye.updated?new Date(Ye.updated):new Date(Ye.at);return isNaN(e.getTime())?"":new Intl.DateTimeFormat("he-IL",{day:"numeric",month:"numeric"}).format(e)}catch{return""}}function on(e,t){if(e===t)return 1;const a=Ei(e,t);if(a)return Math.round(a*1e4)/1e4;const s=kt(e).r||1,n=kt(t).r||1;return Math.round(s/n*1e4)/1e4}function Ae(e,t){const a=Logic.dec(t),s=Logic.fromCents(e,a);try{return new Intl.NumberFormat("he-IL",{style:"currency",currency:t,minimumFractionDigits:a?2:0,maximumFractionDigits:a?2:0}).format(s)}catch{const o=String(t||"").replace(/[^A-Za-z]/g,"").slice(0,3).toUpperCase();return s.toFixed(a?2:0)+(o?" "+o:"")}}const F=(e,t)=>`<span class="num">${r(Ae(e,t))}</span>`,Fr=(e,t)=>F(Logic.toCents(e,Logic.dec(t)),t),xt=e=>Logic.parseAmount(e),Mt=e=>Math.trunc(Number(e))||0;function Pe(e,t,a){const s=Mt(e);return s===1?t:`<span class="num">${s}</span> ${a}`}function He(e,t,a){const s=Mt(e);return s===1?t:s+" "+a}const oa=e=>Math.max(0,Mt(e&&e.stats&&e.stats.count));if(typeof window!="undefined"&&window.visualViewport){const e=window.visualViewport;let t=0;const a=()=>{document.documentElement.style.setProperty("--vvh",Math.round(e.height)+"px"),document.documentElement.style.setProperty("--vvtop",Math.round(e.offsetTop)+"px");const s=document.activeElement;s&&/^(INPUT|TEXTAREA|SELECT)$/.test(s.tagName)&&s.closest(".sheet")&&(cancelAnimationFrame(t),t=requestAnimationFrame(()=>{try{s.scrollIntoView({block:"center"})}catch{}}))};e.addEventListener("resize",a),e.addEventListener("scroll",a),a()}let Si="";function rt(){if(Si)return Si;const e=new Date,t=a=>String(a).padStart(2,"0");return e.getFullYear()+"-"+t(e.getMonth()+1)+"-"+t(e.getDate())}function _i(e){if(!e)return"";try{const t=new Date(e+"T12:00:00"),a={weekday:"long",day:"numeric",month:"long"};return t.getFullYear()!==new Date().getFullYear()&&(a.year="numeric"),new Intl.DateTimeFormat("he-IL",a).format(t)}catch{return""}}function _e(e){if(!e)return"";try{return new Intl.DateTimeFormat("he-IL",{day:"numeric",month:"numeric"}).format(new Date(e+"T12:00:00"))}catch{return""}}let zt=null;function Ur(){const e=m("#toast");e&&e.remove();const t=document.createElement("div");return t.className="toast",t.id="toast",t.setAttribute("role","status"),m("#overlays").appendChild(t),t}function S(e){const t=Ur();clearTimeout(zt),setTimeout(()=>{t.isConnected&&(t.innerHTML=`<span>${r(e)}</span>`)},30),zt=setTimeout(()=>t.remove(),2800)}function Kr(e,t,a,s,n){const o=Ur(),i=a||$o;clearTimeout(zt),setTimeout(()=>{o.isConnected&&(o.innerHTML=`<div><span>${r(e)}</span><button class="undo" aria-label="${r(n||"ביטול המחיקה ושחזור ההוצאה")}">${r(s||"ביטול")}</button></div>`,m("button.undo",o).addEventListener("click",()=>{clearTimeout(zt),o.remove(),t()}))},30),zt=setTimeout(()=>o.remove(),i);const l=()=>clearTimeout(zt),d=()=>{clearTimeout(zt),zt=setTimeout(()=>o.remove(),4e3)};o.addEventListener("mouseenter",l),o.addEventListener("focusin",l),o.addEventListener("mouseleave",d),o.addEventListener("focusout",d)}function zr(){try{if(window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches)return;const e=document.createElement("canvas");e.className="confetti-canvas",e.width=innerWidth,e.height=innerHeight,m("#overlays").appendChild(e);const t=e.getContext("2d"),a=["#C9A64E","#A8852F","#F3EAD3","#7E6320","#FFFFFF"],s=Array.from({length:90},()=>({x:e.width/2+(Math.random()-.5)*120,y:e.height*.35,vx:(Math.random()-.5)*9,vy:-Math.random()*10-3,s:4+Math.random()*5,r:Math.random()*Math.PI,vr:(Math.random()-.5)*.3,c:a[Math.random()*a.length|0]})),n=performance.now();(function o(i){const l=(i-n)/1e3;t.clearRect(0,0,e.width,e.height),s.forEach(d=>{d.x+=d.vx,d.y+=d.vy,d.vy+=.35,d.r+=d.vr,t.save(),t.translate(d.x,d.y),t.rotate(d.r),t.fillStyle=d.c,t.globalAlpha=Math.max(0,1.5-l),t.fillRect(-d.s/2,-d.s/2,d.s,d.s*.6),t.restore()}),l<1.6?requestAnimationFrame(o):e.remove()})(n)}catch{}}const Ot=[];function rn(){for(;Ot.length;)Ot[Ot.length-1]()}function ge(e,t,a){const s=document.createElement("div");s.className="sheet-backdrop"+(a&&a.compact?" compact":""),s.innerHTML=`<div class="sheet" role="dialog" aria-modal="true" tabindex="-1"><div class="sheet-grip"></div>${e}</div>`;const n=m(".sheet",s),o=document.activeElement;let i=!1;const l=()=>{if(i)return;i=!0;const h=Ot.indexOf(l);h>=0&&Ot.splice(h,1),s.remove(),Ot.length||document.documentElement.classList.remove("sheet-open"),document.removeEventListener("keydown",c);try{o&&o.focus&&o.focus()}catch{}t&&t()};Ot.push(l),document.documentElement.classList.add("sheet-open");const d=()=>{const h=z(".sheet-backdrop");return h.length&&h[h.length-1]===s},c=h=>{h.key==="Escape"&&d()&&l()};s.addEventListener("click",h=>{h.target===s&&l()}),s.addEventListener("keydown",h=>{if(h.key!=="Tab")return;const b=z("button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])",n).filter(f=>!f.disabled&&!f.hidden&&f.offsetParent!==null);if(!b.length)return;const v=b[0],p=b[b.length-1];h.shiftKey&&(document.activeElement===v||document.activeElement===n)?(h.preventDefault(),p.focus()):!h.shiftKey&&document.activeElement===p&&(h.preventDefault(),v.focus())}),n.addEventListener("focusin",h=>{h.target.matches("input, select, textarea")&&setTimeout(()=>{try{h.target.scrollIntoView({block:"center",behavior:"smooth"})}catch{}},120)}),document.addEventListener("keydown",c),m("#overlays").appendChild(s);const u=m(".sheet-title",n);if(u){u.id||(u.id=it("ttl")),n.setAttribute("aria-labelledby",u.id);const h=u.parentElement;if(h&&h.classList.contains("sheet-head")&&!m(".sheet-close",h)){const b=document.createElement("button");b.className="iconbtn sheet-close",b.setAttribute("aria-label","סגירת החלון"),b.textContent="✕",b.addEventListener("click",l),h.appendChild(b)}}return n.focus(),{el:n,close:l}}function Me(e,t,a,s){return new Promise(n=>{let o=!1;const i=d=>{o||(o=!0,n(d))},l=ge(`
        <div class="sheet-head"><h2 class="sheet-title">${r(e)}</h2></div>
        <p style="color: var(--ink-2); margin: 0 0 18px;">${r(t)}</p>
        <div class="form-row">
          <button class="btn block" data-ref="cancel">ביטול</button>
          <button class="btn block ${s?"danger":"primary"}" data-ref="ok">${r(a||"אישור")}</button>
        </div>`,()=>i(!1),{compact:!0});m('[data-ref="ok"]',l.el).addEventListener("click",()=>{i(!0),l.close()}),m('[data-ref="cancel"]',l.el).addEventListener("click",()=>l.close())})}function Ie(e,t){if(!e||!e.isConnected){S(t);return}for(let o=e.closest("details");o;o=o.parentElement&&o.parentElement.closest("details"))o.open=!0;if(!e.getClientRects().length){S(t);return}const a=e.closest(".sheet")||m("#app")||document;z(".field-err",a).forEach(qr);const s=document.createElement("p");s.className="field-err",s.id=it("ferr"),s.setAttribute("role","alert"),s._for=e,e.insertAdjacentElement("afterend",s),e.setAttribute("aria-invalid","true"),e.setAttribute("aria-describedby",((e.getAttribute("aria-describedby")||"")+" "+s.id).trim()),setTimeout(()=>{s.textContent=t},30);const n=()=>{qr(s),e.removeEventListener("input",n),e.removeEventListener("change",n),e._clearErr=null};e._clearErr=n,e.addEventListener("input",n),e.addEventListener("change",n);try{e.focus({preventScroll:!0}),e.scrollIntoView({block:"center"})}catch{}}function Ti(e,t){e.value=t,e._clearErr&&e._clearErr()}function qr(e){const t=e&&e._for;if(t){t.removeAttribute("aria-invalid");const a=(t.getAttribute("aria-describedby")||"").split(" ").filter(s=>s&&s!==e.id).join(" ");a?t.setAttribute("aria-describedby",a):t.removeAttribute("aria-describedby")}e&&e.parentNode&&e.parentNode.removeChild(e)}const Jr="את זה אפשר לעשות רק מהמכשיר של המשתתף עצמו, או מנהל הקבוצה (מהמכשיר שפתח אותה או אחרי כניסה בסיסמת המנהל)",Yr="יותר מדי פעולות ברצף מהרשת הזו — נסו שוב בעוד כמה דקות";function Fe(e,t){const a=e&&e.code;return a==="forbidden"?"הפעולה לא בוצעה — "+Jr:a==="rate"?Yr:t}function qt(e){const t=e&&e.code;return t==="forbidden"?"השמירה נכשלה — "+Jr:t==="rate"?Yr:t==="too_large"?"השמירה נכשלה — הרשומה גדולה מדי (למשל צילום כבד). נסו צילום קטן יותר":t==="denied"?"השמירה נכשלה — אין הרשאה. ייתכן שהקישור ישן; בקשו קישור הזמנה חדש":t==="invalid"?"השמירה נכשלה — אחד הערכים אינו תקין":t==="plan_limit"?"ההוצאה לא נשמרה — הקבוצה הגיעה למגבלת ההוצאות של המסלול":"השמירה נכשלה — נסו שוב"}async function pt(e){try{return await e()}catch(t){if(t&&t.code==="unavailable")return await new Promise(a=>setTimeout(a,400+Math.random()*500)),e();throw t}}function Od(e){const t=a=>{console.error("db subscription error",a),g.syncError=a&&a.code||"unavailable",g.ready=!0,W(),a&&a.code==="revoked"&&S("הגישה לנתונים השתנתה — רעננו את הדף")};return{watchTrips(a){return e.collection("trips").onSnapshot(s=>{g.syncError=null;const n=s.docs.filter(o=>o.exists).map(o=>Object.assign({id:o.id},o.data()));n.sort((o,i)=>(i.created||0)-(o.created||0)),a(n.map(ie))},t)},saveTrip(a){const s=ie(a);return delete s.id,pt(()=>e.doc("trips/"+a.id).set(s))},updateTrip(a,s){return pt(()=>e.doc("trips/"+a).update(ie(s)))},async deleteTripDeep(a){const s=await pt(()=>e.collection("trips/"+a+"/expenses").get()),n=s.docs.filter(o=>o.exists).map(o=>ie(o.data()));for(const o of s.docs)await pt(()=>e.doc("trips/"+a+"/expenses/"+o.id).delete());return await pt(()=>e.doc("trips/"+a).delete()),n},watchExpenses(a,s){return e.collection("trips/"+a+"/expenses").onSnapshot(n=>{s(n.docs.filter(o=>o.exists).map(o=>ie(Object.assign({id:o.id},o.data()))))},t)},async getExpensesOnce(a){return(await pt(()=>e.collection("trips/"+a+"/expenses").get())).docs.filter(n=>n.exists).map(n=>ie(Object.assign({id:n.id},n.data())))},async getTripOnce(a){const s=await pt(()=>e.doc("trips/"+a).get());return s.exists?ie(Object.assign({id:a},s.data())):null},async listLicenses(){return(await pt(()=>e.collection("licenses").get())).docs.filter(s=>s.exists).map(s=>ie(Object.assign({id:s.id},s.data())))},saveLicense(a){const s=ie(a);return delete s.id,pt(()=>e.doc("licenses/"+a.id).set(s))},async getExpenseOnce(a,s){const n=await pt(()=>e.doc("trips/"+a+"/expenses/"+s).get());return n.exists?ie(Object.assign({id:s},n.data())):null},saveExpense(a,s){const n=ie(s);return delete n.id,pt(()=>e.doc("trips/"+a+"/expenses/"+s.id).set(n))},deleteExpense(a,s){return pt(()=>e.doc("trips/"+a+"/expenses/"+s).delete())}}}function Wr(){const e="shaveh_v1";let t=null;try{t=JSON.parse(J.get(e)||"null")}catch{t=null}(!t||typeof t!="object")&&(t={}),t.trips=t.trips||{},t.expenses=t.expenses||{};const a=[],s={};function n(){J.set(e,JSON.stringify(t))||S("האחסון במכשיר מלא — ייתכן שהשמירה לא נקלטה")}function o(){const c=Object.keys(t.trips).map(u=>Object.assign({id:u},ie(t.trips[u])));return c.sort((u,h)=>(h.created||0)-(u.created||0)),c}function i(c){const u=t.expenses[c]||{};return Object.keys(u).map(h=>Object.assign({id:h},ie(u[h])))}const l=()=>a.forEach(c=>c(o())),d=c=>(s[c]||[]).forEach(u=>u(i(c)));return{_seed(c,u){t.trips=c,t.expenses=u,n()},watchTrips(c){return a.push(c),Promise.resolve().then(()=>c(o())),()=>{const u=a.indexOf(c);u>=0&&a.splice(u,1)}},async saveTrip(c){const u=ie(c);delete u.id,t.trips[c.id]=u,n(),l()},async updateTrip(c,u){const h=t.trips[c];if(!h)throw{code:"invalid_argument",message:"trip missing"};Object.keys(u).forEach(b=>{const v=u[b];v&&typeof v=="object"&&!Array.isArray(v)&&h[b]&&typeof h[b]=="object"&&!Array.isArray(h[b])?Object.assign(h[b],ie(v)):h[b]=ie(v)}),n(),l()},async deleteTripDeep(c){return delete t.trips[c],delete t.expenses[c],n(),l(),[]},async getExpensesOnce(c){return i(c)},async getTripOnce(c){return t.trips[c]?Object.assign({id:c},ie(t.trips[c])):null},async getExpenseOnce(c,u){const h=(t.expenses[c]||{})[u];return h?Object.assign({id:u},ie(h)):null},async listLicenses(){const c=t.licenses||{};return Object.keys(c).map(u=>Object.assign({id:u},ie(c[u])))},async saveLicense(c){const u=ie(c);delete u.id,(t.licenses=t.licenses||{})[c.id]=u,n()},watchExpenses(c,u){return(s[c]=s[c]||[]).push(u),Promise.resolve().then(()=>u(i(c))),()=>{const h=s[c]||[],b=h.indexOf(u);b>=0&&h.splice(b,1)}},async saveExpense(c,u){const h=ie(u);delete h.id,(t.expenses[c]=t.expenses[c]||{})[u.id]=h,n(),d(c)},async deleteExpense(c,u){t.expenses[c]&&delete t.expenses[c][u],n(),d(c)}}}const Gr="shaveh_api_v1";async function Vr(e){const t=J.get(Gr)==="secure";if(t)return"secure";try{const a=new AbortController,s=setTimeout(()=>a.abort(),5e3);return(await fetch(e.u.replace(/\/+$/,"")+"/rest/v1/rpc/api_version",{method:"POST",signal:a.signal,body:"{}",headers:{apikey:e.k,Authorization:"Bearer "+e.k,"Content-Type":"application/json"}}).finally(()=>clearTimeout(s))).ok?(J.set(Gr,"secure"),"secure"):t?"secure":"legacy"}catch{return t?"secure":"legacy"}}function Pd(e,t){const a=String(t||"");return{code:e===403&&/member key required|manager required|not allowed/.test(a)?"forbidden":e===404&&/PGRST202|Could not find the function/.test(a)?"no_function":e===401||e===403?"denied":e===404?"not_found":e===409?"conflict":e===413?"too_large":e===429?"rate":e===400?"invalid":e===402?"plan_limit":"unavailable",status:e,message:"sync "+e+" "+a.slice(0,200)}}const Nd=["plan","planUntil","extraExp","purchases","licPlan","licUntil","licenseId","brand"],Ci=["ownerToken","mgrPass","joinKey","hasMgrPass","legacyOpen","keyed"],Xr=["managerId","vis","cats"],Zr=["created","demo"],Hd=(e,t)=>(t.created||0)-(e.created||0);function Qr(){const e=ka();return Object.keys(e).sort((t,a)=>(e[a].at||0)-(e[t].at||0)).slice(0,100)}function Id(e,t){const a=e.u.replace(/\/+$/,""),s=a+"/rest/v1/docs",n={apikey:e.k,Authorization:"Bearer "+e.k,"Content-Type":"application/json"},o=encodeURIComponent,i=t==="secure",l={};let d=0,c=!1;function u(){c||Ht.get("shaveh_api_reload")||(c=!0,Vr(e).then($=>{$==="secure"&&(Ht.set("shaveh_api_reload","1"),location.reload())}).finally(()=>{c=!1}))}async function h($,j){let x;try{x=await fetch($,j)}catch(K){throw{code:"unavailable",message:String(K&&K.message||K)}}if(!x.ok){const K=await x.text().catch(()=>"");throw!i&&(x.status===401||x.status===403||x.status===404)&&u(),Pd(x.status,K)}const B=await x.text();return B?JSON.parse(B):null}const b=($,j)=>h(a+"/rest/v1/rpc/"+$,{method:"POST",headers:n,body:JSON.stringify(j||{})});async function v($,j){const x=qa();if(!x)throw{code:"denied",message:"admin locked"};const B=await b($,Object.assign({p_secret:x},j||{}));if(B&&B.error==="denied")throw Pc(),{code:"denied",message:"admin denied"};if(B&&B.error)throw{code:B.error==="too_large"?"too_large":B.error==="not_found"?"not_found":"invalid",message:B.error};return B}const p=()=>i&&!!qa()&&It();let f=2;async function L($,j,x){if(f>=2)try{return await b($,j)}catch(K){if(!K||K.code!=="no_function")throw K;f=1}if(x===null)throw{code:"no_function",message:$};const B=Object.assign({},x||j);return delete B.p_auth,delete B.p_self,b($,B)}function _($,j){const x={},B=lt()[$];B&&(x.o=B);const K=j&&Qt($,j)?j:pe($),V=K?Qt($,K):"";return V&&(x.m=K,x.k=V),p()&&(x.a=qa()),Object.keys(x).length?x:null}const T={},w=($,j)=>{const x=T[$];return x?Object.keys(j).every(B=>B==="vis"?JSON.stringify(dt({vis:j.vis}))===JSON.stringify(dt(x)):String(j[B]||"")===String(x[B]||"")):!1};async function E($,j){if(!(!Object.keys(j).length||w($,j)))try{await L("manager_update_trip",{p_id:$,p_key:U($),p_auth:_($),p_patch:j},null)}catch(x){if(!x||x.code!=="no_function")throw x}}function A($){const j={};return f<2||(Xr.forEach(x=>{x in $&&(j[x]=$[x]),delete $[x]}),Zr.forEach(x=>{delete $[x]})),j}const D=$=>Ja($)||l[$]||"";function U($){const j=D($);if(!j)throw{code:"denied",message:"no key for trip"};return j}const I=($,j)=>(j.forEach(x=>{delete $[x]}),$);async function R($){return(await h(s+"?collection=eq."+o($)+"&select=id,body",{headers:n})).map(x=>Object.assign({},x.body||{},{id:x.id}))}async function re($,j){const x=await h(s+"?collection=eq."+o($)+"&id=eq."+o(j)+"&select=id,body",{headers:n});return x.length?Object.assign({},x[0].body||{},{id:x[0].id}):null}async function X($,j,x){await h(s+"?on_conflict=collection,id",{method:"POST",headers:Object.assign({Prefer:"resolution=merge-duplicates"},n),body:JSON.stringify([{collection:$,id:j,body:x}])})}async function P($,j){await h(s+"?collection=eq."+o($)+"&id=eq."+o(j),{method:"DELETE",headers:n})}async function q(){if(It())return R("trips");const $=Qr(),j=[];for(let B=0;B<$.length;B+=40){const K=$.slice(B,B+40).map(oe=>'"'+oe+'"').join(",");(await h(s+"?collection=eq.trips&id=in.("+o(K)+")&select=id,body",{headers:n})).forEach(oe=>j.push(Object.assign({},oe.body||{},{id:oe.id})))}const x=new Set(j.map(B=>B.id));return $.forEach(B=>{x.has(B)||_n(B)}),j.forEach(B=>Zt(B.id,B.joinKey)),j}function Z($){const j=I(Object.assign({},$.body||{},{id:$.id}),Ci);return $.owner&&(j.ownerToken=lt()[$.id]||""),$.hasMgrPass&&(j.hasMgrPass=!0),$.legacyOpen&&(j.legacyOpen=!0),Array.isArray($.keyed)&&(j.keyed=$.keyed.filter(x=>typeof x=="string")),T[$.id]=$.body||{},j}async function ce($){if(!$.length)return[];const j=lt(),x=await b("get_trips",{p_ids:$,p_keys:$.map(oe=>D(oe)||null),p_owner_keys:$.map(oe=>j[oe]||null)});(x.trips||[]).forEach(oe=>{(oe.joinKey||Ja(oe.id))&&Zt(oe.id,oe.joinKey)}),(x.missing||[]).forEach(_n);const B=(x.trips||[]).slice(),K=new Set(x.missing||[]),V=$.filter(oe=>!K.has(oe)&&jo(oe));if(V.length)try{const oe=await b("get_trips",{p_ids:V,p_keys:V.map(jo),p_owner_keys:V.map(()=>null)}),Ee=new Set((oe.trips||[]).map(ae=>ae.id));V.forEach(ae=>Rc(ae,Ee.has(ae)));const De=new Set(B.map(ae=>ae.id));(oe.trips||[]).forEach(ae=>{De.has(ae.id)||B.push(ae)})}catch(oe){console.error("pending join key check failed — will retry",oe)}return B.map(Z)}async function G(){if(p()||Object.keys(l).forEach($=>{delete l[$]}),p())try{const $=await v("admin_list_trips");return($.trips||[]).forEach(j=>{j.joinKey&&(l[j.id]=j.joinKey)}),($.trips||[]).map(Z)}catch($){if($.code!=="denied")throw $}return ce(Qr())}async function Le($){return i?(await L("list_expenses",{p_id:$,p_key:U($),p_auth:_($)})||[]).map(x=>Object.assign({},x.body||{},{id:x.id})):R("trips/"+$+"/expenses")}function ee($,j,x,B){let K=null,V=!1,oe=null,Ee=0,De=!1,ae=!1;function Ve(){clearTimeout(oe);const ze=Math.min(6e4,x*Math.pow(2,Math.min(Ee,4)));oe=setTimeout(()=>{typeof document!="undefined"&&document.visibilityState==="hidden"||$e()},ze)}async function $e(){if(!V){if(De){ae=!0;return}De=!0,clearTimeout(oe);try{const ze=await $();B&&ze.sort(B),Ee=0,d=0,g.syncError&&(g.syncError=null,W());const ut=JSON.stringify(ze);ut!==K&&(K=ut,j(ze))}catch(ze){Ee++,d++,d===3&&(g.syncError="unavailable",g.ready=!0,W()),console.error("sync poll failed",ze)}finally{De=!1}V||(ae?(ae=!1,$e()):Ve())}}$e();const Ue=()=>{document.visibilityState==="visible"&&$e()};document.addEventListener("visibilitychange",Ue);const je=()=>{V=!0,clearTimeout(oe),document.removeEventListener("visibilitychange",Ue)};return je.refresh=$e,je}let we=null,ke=null;const Q=()=>{we&&we.refresh&&we.refresh(),ke&&ke.refresh&&ke.refresh()},ve={kind:"rest",secure:i,serverAdmin:i,refresh:Q,watchTrips($){return we=ee(i?G:q,$,7e3,Hd),we},async saveTrip($,j){const x=ie($);if(delete x.id,delete x.hasMgrPass,i){I(x,Ci);const B=!D($.id);if(B){const K=await L("create_trip",{p_id:$.id,p_body:x,p_auth:p()?{a:qa()}:null});Zt(K.id,K.joinKey),xa(K.id,K.ownerKey),K.memberKey&&Tn(K.id,K.memberId,K.memberKey),$.ownerToken=K.ownerKey}else{const K=ie(x),V=A(x);await E($.id,V),await L("update_trip",{p_id:$.id,p_key:U($.id),p_patch:x,p_replace:!0,p_auth:_($.id)},{p_id:$.id,p_key:U($.id),p_patch:K,p_replace:!0}),Object.assign(x,K)}if(j&&j.withServerFields&&p()){const K={};Nd.concat(Xr,Zr).forEach(oe=>{oe in x&&(K[oe]=x[oe])}),B&&!("plan"in x)&&(K.plan=null);const V=B&&Array.isArray(x.members)&&x.members.length>0;V&&(K.members=x.members),Object.keys(K).length&&await v("admin_update_trip",Object.assign({p_id:$.id,p_patch:K},V?{p_restore:!0}:{}))}}else x.joinKey||(x.joinKey=Ja($.id)||Ao()),await X("trips",$.id,x),Zt($.id,x.joinKey);Q()},async updateTrip($,j){if(i){const K=I(ie(j),Ci);if(p())await v("admin_update_trip",{p_id:$,p_patch:K});else{const V=ie(K),oe=A(K);await E($,oe),(Object.keys(K).length||f<2)&&await L("update_trip",{p_id:$,p_key:U($),p_patch:K,p_auth:_($)},{p_id:$,p_key:U($),p_patch:V})}Q();return}const x=await re("trips",$);if(!x)throw{code:"invalid_argument",message:"trip missing"};const B=ie(x);delete B.id,Object.keys(j).forEach(K=>{const V=j[K];V&&typeof V=="object"&&!Array.isArray(V)&&B[K]&&typeof B[K]=="object"&&!Array.isArray(B[K])?Object.assign(B[K],ie(V)):B[K]=ie(V)}),await X("trips",$,B),Q()},async deleteTripDeep($){if(i){if(p())await v("admin_delete_trip",{p_id:$});else{const B=lt()[$];if(!B)throw{code:"denied",message:"owner key required"};await b("delete_trip",{p_id:$,p_owner_key:B})}return _n($),Q(),[]}const j="trips/"+$+"/expenses",x=await R(j);return await h(s+"?collection=eq."+o(j),{method:"DELETE",headers:n}),await P("trips",$),_n($),Q(),x},watchExpenses($,j){return ke&&ke(),ke=ee(()=>Le($),j,5e3),ke},getExpensesOnce:Le,async getTripOnce($){return i?(await ce([$]))[0]||null:re("trips",$)},async getExpenseOnce($,j){if(!i)return re("trips/"+$+"/expenses",j);const x=await L("get_expense",{p_id:$,p_key:U($),p_eid:j,p_auth:_($)});return x?Object.assign({},x.body||{},{id:x.id}):null},async saveExpense($,j){const x=ie(j);delete x.canEdit,delete x.canDel,i?await L("save_expense",{p_id:$,p_key:U($),p_expense:x,p_auth:_($)}):(delete x.id,await X("trips/"+$+"/expenses",j.id,x)),Q()},async deleteExpense($,j){i?await L("delete_expense",{p_id:$,p_key:U($),p_eid:j,p_auth:_($)}):await P("trips/"+$+"/expenses",j),Q()},async listLicenses(){return i?((await v("admin_list_licenses")).licenses||[]).map(j=>Object.assign({},j.body||{},{id:j.id})):R("licenses")},async saveLicense($){if(i){await v("admin_save_license",{p_license:ie($)});return}const j=ie($);delete j.id,await X("licenses",$.id,j)},async licenseForPhone($){return i?b("license_for_phone",{p_phone:String($||"")}):Logic.licenseForPhone(await R("licenses"),$,Date.now())},async brandById($){if(i)return b("brand_by_id",{p_id:String($||"")});const j=await re("licenses",$);return j&&Number(j.until)>Date.now()?j:null},joinKeyFor($){return D($)},async ensureJoinKey($){if(!$)return"";if(i)return D($.id);const j=Ja($.id)||($a.test($.joinKey||"")?$.joinKey:"");if(j)return Zt($.id,j),j;const x=Ao();return await ve.updateTrip($.id,{joinKey:x}),Zt($.id,x),$.joinKey=x,x}};return i&&(ve.upsertMember=async($,j,x)=>{const B=!!(x&&x.self),K=()=>L("add_member",{p_id:$,p_key:U($),p_member:ie(j),p_auth:_($,j.id),p_self:B});let V;try{V=await K()}catch(Ee){if(!Ee||Ee.code!=="forbidden"||j.id!==pe($)||!await ve.claimMember($,j.id))throw Ee;V=await K()}let oe=V;return V&&typeof V=="object"&&!Array.isArray(V)&&(V.memberKey&&Tn($,V.memberId||j.id,V.memberKey),oe=V.members),Q(),oe},ve.adminRestoreExpenses=async($,j)=>{if(!p())return null;let x=0,B=0,K=[],V=0;const oe=async()=>{if(!K.length)return;const Ee=await v("admin_restore_expenses",{p_id:$,p_list:K});x+=Number(Ee&&Ee.saved)||0,B+=Number(Ee&&Ee.skipped)||0,K=[],V=0};try{for(const Ee of j){const De=JSON.stringify(Ee).length;K.length&&(K.length>=100||V+De>15e5)&&await oe(),K.push(ie(Ee)),V+=De}await oe()}catch(Ee){if(Ee&&Ee.status===404&&!x)return null;throw Ee}return Q(),{saved:x,skipped:B}},ve.claimMember=async($,j)=>{if(f<2)return"";let x;try{x=await L("claim_member",{p_id:$,p_key:U($),p_member_id:j,p_auth:_($,j)},null)}catch(B){if(B&&B.code==="no_function")return"";throw B}return x&&x.memberKey?(Tn($,x.memberId||j,x.memberKey),Q(),x.memberKey):x&&x.already?Qt($,j):""},ve.resetMemberKey=async($,j)=>{await L("reset_member_key",{p_id:$,p_key:U($),p_auth:_($),p_member_id:j},null),Q()},ve.hasMemberKey=($,j)=>!!Qt($,j),ve.adminLogin=async($,j)=>{try{return await b("admin_login",{p_secret:$,p_code:j||null,p_label:"האפליקציה"})||{error:"denied"}}catch(x){if(x&&/stale_migration/.test(String(x.message||"")))return{error:"stale_migration"};if(!x||x.code!=="no_function")throw x;return{legacy:!0,ok:!!await b("admin_check",{p_secret:$})}}},ve.adminLogout=async $=>{try{await b("admin_logout",{p_token:$})}catch{}},ve.exportAll=async()=>{const $=await v("admin_export"),j=x=>Object.assign({},x.body||{},{id:x.id});return{trips:($.trips||[]).map(x=>Object.assign(j(x),{expenses:(x.expenses||[]).map(j)})),licenses:($.licenses||[]).map(j)}},ve.setManagerPass=async($,j)=>{const x=lt()[$];if(!x)throw{code:"denied",message:"owner key required"};await b("set_manager_pass",{p_id:$,p_owner_key:x,p_pass:j||""}),Q()},ve.purchaseConfirm=async($,j)=>{if(p())return v("admin_purchase_confirm_get",{p_source:"trip",p_owner_id:$,p_purchase_id:j});const x=lt()[$];if(!x)throw{code:"denied",message:"owner key required"};return b("purchase_confirm_get",{p_id:$,p_key:U($),p_owner_key:x,p_purchase_id:j})},ve.purchaseConfirmSent=async($,j,x)=>{const B=await v("admin_purchase_confirm",{p_source:"trip",p_owner_id:$,p_purchase_id:j,p_confirm:x||null});return Q(),B},ve.managerLogin=async($,j)=>{const x=await b("manager_login",{p_id:$,p_key:U($),p_pass:String(j||"")});if(x&&x.ownerKey)return xa($,x.ownerKey),x.memberId&&x.memberKey&&Tn($,x.memberId,x.memberKey),Q(),!0;if(x&&x.error==="rate")throw{code:"rate",message:"too many attempts"};return!1}),ve}function ji(e,t){return Object.assign(e,{kind:t,secure:!0,serverAdmin:!1,async licenseForPhone(a){return Logic.licenseForPhone(await e.listLicenses()||[],a,Date.now())},async brandById(a){const s=(await e.listLicenses()||[]).find(n=>n.id===a);return s&&Number(s.until)>Date.now()?s:null},async ensureJoinKey(){return""}})}const Dd=256*1024,el=600*1024;function Rd(e){const t=JSON.stringify(e);try{return new TextEncoder().encode(t).length}catch{return t.length*3}}function Ai(e,t){if(Rd(e)>t)throw{code:"too_large",message:"too large"}}function Bd(e){const t=i=>l=>(Array.isArray(l)?l:[]).map(i).filter(Boolean),a=Logic.normalizeTrip,s=Logic.normalizeExpense,n=Logic.normalizeLicense,o=Object.assign({},e);return o.watchTrips=i=>e.watchTrips(l=>i(t(a)(l))),o.watchExpenses=(i,l)=>e.watchExpenses(i,d=>l(t(s)(d))),o.getTripOnce=async i=>a(await e.getTripOnce(i)),o.getExpensesOnce=async i=>t(s)(await e.getExpensesOnce(i)),o.getExpenseOnce=async(i,l)=>s(await e.getExpenseOnce(i,l)),o.saveTrip=async(i,l)=>(Ai(i,Dd),e.saveTrip(i,l)),o.saveExpense=async(i,l)=>(Ai(l,el),e.saveExpense(i,l)),e.listLicenses&&(o.listLicenses=async()=>t(n)(await e.listLicenses())),e.licenseForPhone&&(o.licenseForPhone=async i=>{const l=await e.licenseForPhone(i);return l?n(l):null}),e.brandById&&(o.brandById=async i=>{const l=await e.brandById(i);return l?n(l):null}),e.upsertMember&&(o.upsertMember=async(i,l,d)=>t(Logic.normalizeMember)(await e.upsertMember(i,l,d))),e.adminRestoreExpenses&&(o.adminRestoreExpenses=async(i,l)=>{const d=[];let c=0;for(const h of l)try{Ai(h,el),d.push(h)}catch{c++}const u=await e.adminRestoreExpenses(i,d);return u?{saved:u.saved,skipped:(u.skipped||0)+c}:null}),o}async function Fd(e){const t={apikey:e.k,Authorization:"Bearer "+e.k,"Content-Type":"application/json"},a=e.u.replace(/\/+$/,""),s=await fetch(a+"/rest/v1/rpc/api_version",{method:"POST",headers:t,body:"{}"}).catch(()=>null);return s&&s.ok?!0:(await fetch(a+"/rest/v1/docs?select=id&limit=1",{headers:t})).ok}function tl(e,t,a){const s="m_demo1",n="m_demo2",o="m_demo3",i="t_demo",l={};if(l[i]={name:"בודפשט",dest:"הונגריה",flag:"🇭🇺",kind:"trip",demo:!0,ownerToken:"own_demo",start:"2026-09-06",end:"2026-09-09",base:"ILS",budget:4e3,colorIdx:1,rates:{EUR:3.5169,HUF:.0096},members:[{id:s,name:"שמעון",color:Ze[0]},{id:n,name:"דוד",color:Ze[1]},{id:o,name:"אהרן",color:Ze[2]}],created:Date.now(),stats:{count:6,totalCents:0}},t){const b=Date.now()-5*Bn;l[i].members[0].pay={methods:["bit","bank","cash"],phone:"0501234567",bank:{bankCode:"10",bankName:"בנק לאומי",branch:"607",account:"11710022",holder:"שמעון (הדגמה)"},updatedAt:b,updatedBy:s,firstAt:b},l[i].members[1].pay={methods:["paybox"],phone:"0527654321",updatedAt:b,updatedBy:n,firstAt:b}}e&&(Object.assign(l[i],{splitBy:"head",kidRate:.5}),Object.assign(l[i].members[1],{units:2,kids:2}),Object.assign(l[i].members[2],{units:2}));const d={},c=b=>d[b.id]=b;c({id:"e1",amount:96,currency:"EUR",category:"food",payerId:s,parts:[s,n,o],split:{mode:"equal"},note:"ארוחת ערב כשרה",date:"2026-09-06",created:1}),c({id:"e2",amount:21500,currency:"HUF",category:"taxi",payerId:n,parts:[s,n,o],split:{mode:"equal"},note:"מונית משדה התעופה",date:"2026-09-06",created:2}),c({id:"e3",amount:540,currency:"EUR",category:"hotel",payerId:s,parts:[s,n,o],split:{mode:"equal"},note:"שלושה לילות",date:"2026-09-07",created:3}),c({id:"e4",amount:12400,currency:"HUF",category:"market",payerId:o,parts:[n,o],split:{mode:"equal"},note:"קניות לדרך",date:"2026-09-07",created:4}),c({id:"e5",amount:75,currency:"EUR",category:"fun",payerId:n,parts:[s,n,o],split:{mode:"equal"},note:"שייט על הדנובה",date:"2026-09-08",created:5}),c({id:"e6",amount:180,currency:"ILS",category:"shop",payerId:s,parts:[s],split:{mode:"equal"},note:"מתנות",date:"2026-09-09",created:6}),a&&Object.assign(l[i],{archived:!0,closedAt:Date.UTC(2026,8,10,9)});const u={};u[i]=d;const h=Logic.computeBalances(Object.assign({id:i},l[i]),Object.keys(d).map(b=>Object.assign({id:b},d[b])));l[i].stats.totalCents=h.grand,C._seed(l,u)}async function Ud(){const e=new URLSearchParams(location.search),t=Cs(),a=e.get("theme");(a==="dark"||a==="light")&&document.documentElement.setAttribute("data-theme",a),Ic();let s=null;if(Ne){if(await Tc(e.get("demo")==="1"),"serviceWorker"in navigator){let _=!1,T=!navigator.serviceWorker.controller;const w=()=>{if(T){T=!1;return}if(_)return;if(m(".sheet-backdrop")||document.activeElement&&/^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName)){Kr("גרסה חדשה מוכנה",()=>{_=!0,location.reload()},3e4,"רענון","מעבר לגרסה החדשה");return}_=!0,location.reload()};navigator.serviceWorker.addEventListener("controllerchange",w),window.addEventListener("load",()=>{navigator.serviceWorker.register("sw.js").then(E=>{const A=()=>E.update().catch(()=>{});document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&A()}),setInterval(()=>{document.visibilityState!=="hidden"&&A()},1800*1e3),A()}).catch(E=>console.error("sw",E))})}}else try{const _=await Promise.all([window.claude.use("db"),window.claude.use("assets"),window.claude.use("downloads")]);s=_[0],g.assets=_[1],g.downloads=_[2]}catch(_){console.error("capability init failed",_)}const n=e.get("demo")==="1";$t=n,n&&/^\d{4}-\d{2}-\d{2}$/.test(e.get("today")||"")&&(Si=e.get("today")),n&&(window.__shavehSandbox={setBusinessInfo:Bs,setVatMode:nr,loadPublicSettings:_o,sellerPhone:qs,payLinksCfg:ni,operatorInfo:Qe,isBuyerView:Ho,setBuyerView:_=>{Fs=_===!0?!0:_===!1?!1:null},publicNotice:()=>Vt,setLaunchFree:_=>{Ys(_)&&W()},launchFree:()=>Je}),As=n&&e.get("admin")==="1",ad(e,t),md(e);const o=Ne?kn():null;g.cloud=!!s&&!n,g.shared=!!o&&!n;const i=g.shared&&!s?await Vr(o):null;g.apiMode=i;const l=n?ji(Wr(),"local"):s?ji(Od(s),"cloud"):o?Id(o,i):ji(Wr(),"local");C=Bd(l),g.secure=!!C.secure;const d=e.get("join");if(!n&&d&&wa.test(d)&&Zt(d,$a.test(t.k||"")?t.k:"",!0),t.k&&xo(),window.addEventListener("hashchange",()=>{const _=Cs();(_.k!=null||_.cfg!=null)&&location.reload()}),n){let _=null;try{_=JSON.parse(J.get("shaveh_v1")||"{}")}catch{_={}}const T=e.get("pay")==="1",w=e.get("closed")==="1";e.get("heads")==="1"||w?tl(e.get("heads")==="1",T,w):!Object.keys(_&&_.trips||{}).length&&e.get("fresh")!=="1"&&tl(!1,T),(e.get("legacy")==="1"||e.get("insecure")==="1")&&(C.secure=!1,g.secure=!1),e.get("role")==="member"?xa("t_demo",""):xa("t_demo","own_demo")}const c=e.get("brand"),u=pi(),h=c||u&&u.id||"";h&&/^[A-Za-z0-9_-]{1,100}$/.test(h)&&C.brandById&&C.brandById(h).then(_=>{ur(_),W()}).catch(_=>console.error("brand check failed — keeping the saved brand",_));const b=e.get("join"),v=e.get("open")||b,p=e.get("tab");e.get("admin")==="1"&&(g.screen="admin"),n&&e.get("notice")==="1"?Vt={text:"הודעת הדגמה מאזור הניהול: מסלול שנתי ללא הגבלה — 250 ₪ לשנה.",warn:!1}:g.shared&&!n&&_o(o),n&&e.get("launchfree")==="1"&&Ys({active:!0,note:e.get("lfnote")||""}),n&&e.get("seller")&&Eo(e.get("seller")),n&&e.get("bizphone")&&Bs({phone:e.get("bizphone")}),n&&e.has("buyer")&&(Fs=e.get("buyer")!=="0"),n&&e.get("publinks")==="1"&&So({week:"https://pay.grow.link/console-week",annual:"https://pay.grow.link/console-annual",bogus:"https://x.example/y",month:"javascript:alert(1)"}),n&&e.get("me")&&We(v,e.get("me")),n&&e.get("vat")&&Lo(e.get("vat")),!!b&&!pe(b)?(g.joinTripId=b,W()):b&&ga(),(location.hash||"").indexOf("admin")>=0&&(g.screen="admin");let L=!1;g.tripsWatch=C.watchTrips(_=>{if(g.trips=_,g.ready=!0,W(),wp(tt()),_r(tt()),jd(ln()),sd(),bd(),g.joinTripId)return;if(e.get("shortcut")==="exp"&&!L){const w=ln().filter(E=>!E.archived);if(w.length){L=!0,ht(w[0].id);let E=0;const A=()=>{g.expensesReady?gn(null):++E<50&&setTimeout(A,100)};setTimeout(A,150)}}const T=e.get("new");if(T&&!L){const w=_t.find(E=>E.id===T);w&&(L=!0,setTimeout(()=>bn(null,w),150))}if(e.get("sheet")==="pricing"&&!v&&!L&&(L=!0,setTimeout(Jo,150)),v&&!L&&_.some(w=>w.id===v)){L=!0,ht(v),p&&(g.tab=p,W());const w=e.get("sheet");if(w){let E=0;const A=()=>{const D=tt();if(D){if(w==="conv")gl(D);else if(w==="invite")ro(D);else if(w==="settings"){if(g.expensesReady)bn(D);else if(++E<50){setTimeout(A,100);return}}else if(w==="plans")jt(D);else if(w==="terms")Hn("terms");else if(w==="summary"||w==="daily"){if(!g.expensesReady){++E<50&&setTimeout(A,100);return}w==="summary"?tc(D):hl(D)}else if(n&&(w==="identity"||w==="household"||w==="member"||w==="pay")){if(!g.expensesReady){++E<50&&setTimeout(A,100);return}const U=(D.members||[]).find(I=>I.id===(e.get("mid")||pe(D.id)))||(D.members||[])[0];w==="identity"?Zi(D):w==="household"?Cl(D,U):w==="pay"?Bl(D,U):hs(D,U)}else if(w==="sharecards"){if(g.expensesReady)oc(D,{card:e.get("card"),size:e.get("size")});else if(++E<50){setTimeout(A,100);return}}else if(w==="close"){if(g.expensesReady)Ql(D);else if(++E<50){setTimeout(A,100);return}}else if(w==="cats")so(D);else if(w==="notif")ao(D);else if(g.expensesReady)gn(null);else if(++E<50){setTimeout(A,100);return}}};setTimeout(A,80)}}})}function tt(){return g.trips.find(e=>e.id===g.tripId)||null}function ht(e){g.unsubExp&&(g.unsubExp(),g.unsubExp=null),g.tripId=e,g.tab="exp",g.expenses=[],g.expensesReady=!1,_r(g.trips.find(t=>t.id===e)),g.screen="home",g.filter={cat:null,payer:null},W(),an=null,g.unsubExp=C.watchExpenses(e,t=>{t.sort((s,n)=>s.date===n.date?(n.created||0)-(s.created||0):s.date<n.date?1:-1),g.expenses=t,g.expensesReady=!0,W();const a=tt();a&&xd(a,t)})}function Mi(){g.unsubExp&&(g.unsubExp(),g.unsubExp=null),g.tripId=null,g.expenses=[],g.expensesReady=!1,g.screen="home",W()}function mt(e){return Logic.safeHex(e&&e.color)||Ze[Logic.hashId(String(e&&e.id||""))%Ze.length]}function at(e,t,a){const s=e&&typeof e.name=="string"&&e.name.trim()?e.name.trim().charAt(0):"?",n=mt(e);return`<span class="avatar ${t||""}" style="background:${n}"${a?' aria-hidden="true"':` title="${r(e?e.name:"")}"`}>${r(s)}</span>`}function Kd(){return g.cloud?'<span class="storage-dot" title="הנתונים נשמרים בענן וזמינים מכל מכשיר"><i></i>ענן</span>':g.shared?'<span class="storage-dot" title="קבוצה משותפת — כל החברים רואים ורושמים יחד"><i></i>קבוצה משותפת</span>':'<span class="storage-dot local" title="הנתונים נשמרים בדפדפן במכשיר זה בלבד"><i></i>מכשיר זה</span>'}function Ca(){return!!g.downloads||Ne}async function as(e,t){const a=typeof Blob!="undefined"&&t instanceof Blob;if(g.downloads)return await g.downloads.save({filename:e,data:a?await t.arrayBuffer():t}),!0;const s=a?t:new Blob([t],{type:"application/octet-stream"}),n=document.createElement("a");return n.href=URL.createObjectURL(s),n.download=e,document.body.appendChild(n),n.click(),setTimeout(()=>{URL.revokeObjectURL(n.href),n.remove()},800),!0}function zd(){const e=dr();return`
      <div class="brandbar${e?" branded":""}">
        ${e?Zn(e,"brand-mark brand-logo"):'<div class="brand-mark" aria-hidden="true">🤝</div>'}
        <div class="brand-text">
          <h1 class="brand-name"${e?` title="${r(e.name)}"`:""}>${e?r(e.name):"שווה בשווה"}</h1>
          <p class="brand-tag">${e?"חלוקת הוצאות לכל אירוע · באמצעות ״שווה בשווה״":"רושמים מי שילם — והחשבון מסתדר מעצמו"}</p>
        </div>
        <div class="brand-tools">
          ${It()?`<button class="iconbtn" data-act="open-admin" aria-label="אזור המנהל">${he("archive")}</button>`:`<button class="iconbtn ghosted" data-act="open-admin" aria-label="אזור המנהל (דורש סיסמה)">${he("archive")}</button>`}
        </div>
      </div>
      <div class="rule-divider" aria-hidden="true"><span>✦</span></div>`}function qd(e,t){const a=e.stats&&e.stats.totalCents&&(fe(e)||dt(e).sum==="on")?F(e.stats.totalCents,e.base):"—",s=e.start?`${_e(e.start)}–${_e(e.end||e.start)}`:"",n=qe(e).id==="trip"?wi(e.dest):null;return`
      <button class="trip-card rise ${e.archived?"archived":""} ${n?"has-photo":""}"
        style="${ki(e)};animation-delay:${Math.min(t,8)*60}ms"
        data-act="open-trip" data-id="${r(e.id)}">
        ${n?`<span class="trip-photo" style="--photo:url('${r(n)}')" aria-hidden="true"><span class="trip-flag-badge">${r(Xe(e))}</span></span>`:`<span class="trip-flag" aria-hidden="true">${r(Xe(e))}</span>`}
        <span class="trip-info">
          <h3 class="trip-name">${r(e.name)}${e.demo?" <small style='color:var(--muted)'>· הדגמה</small>":""}</h3>
          <p class="trip-sub">
            <span>${r(qe(e).nm)}</span>
            ${e.dest?`<span>${r(e.dest)}</span>`:""}
            ${s?`<span class="num">${r(s)}</span>`:""}
            <span>${Pe((e.members||[]).length,"משתתף אחד","משתתפים")}</span>
          </p>
          <span class="avatar-row">${(e.members||[]).slice(0,6).map(o=>at(o)).join("")}</span>
        </span>
        <span class="trip-total">
          <div class="amt">${a}</div>
          <div class="lbl">${oa(e)?Pe(oa(e),"הוצאה אחת","הוצאות"):"עדיין ללא הוצאות"}</div>
        </span>
      </button>`}function ns(){return g.syncError?'<div class="banner warn" role="status">⚠️ החיבור לנתונים לא הצליח כרגע — בדקו את החיבור לאינטרנט ונסו לרענן. מה שנרשם עד כה שמור.</div>':""}function ln(){if(It())return g.trips;const e=lt();return g.trips.filter(t=>t.ownerToken&&e[t.id]===t.ownerToken||!!pe(t.id))}function al(e,t){try{return qd(e,t)}catch(a){return console.error("trip card failed",e&&e.id,a),'<div class="banner warn" role="status">לא הצלחנו להציג קבוצה אחת — נסו לרענן.</div>'}}function Jd(){let e;const t=ns(),a=ln(),s=a.filter(i=>!i.archived),n=a.filter(i=>i.archived);a.length?e=`
        ${s.length?`
          <h2 class="section-title">הקבוצות שלי <small>${s.length}</small></h2>
          <div class="trip-list">${s.map((i,l)=>al(i,l)).join("")}</div>`:`
          <div class="empty rise">
            <div class="art" aria-hidden="true">🗂️</div>
            <h3>כל הקבוצות בארכיון</h3>
            <p>אפשר לפתוח קבוצה חדשה, או לשחזר מהארכיון למטה.</p>
            <button class="btn primary" data-act="new-kind-picker">✚ &nbsp;קבוצה חדשה</button>
          </div>`}
        ${n.length?`
          <button class="archive-toggle" data-act="toggle-archive" aria-expanded="${g.showArchived}">
            ${g.showArchived?"הסתרת הארכיון":"ארכיון"} (<span class="num">${n.length}</span>)
            <span aria-hidden="true">${g.showArchived?"▲":"▼"}</span>
          </button>
          ${g.showArchived?`<div class="trip-list" style="margin-top:8px;">${n.map((i,l)=>al(i,l)).join("")}</div>`:""}`:""}`:e=`
        <div class="empty rise kind-intro">
          <div class="art" aria-hidden="true">🤝</div>
          <h2>מה מארגנים?</h2>
          <p>בוחרים סוג, ממלאים פרטים — והקבוצה פתוחה.<br>החברים מצטרפים בקישור שתשלחו, בלי שום התקנה.</p>
        </div>
        <div class="kind-grid rise" style="animation-delay:80ms" role="group" aria-label="בחירת סוג הקבוצה">
          ${_t.map(i=>nl(i,!0)).join("")}
        </div>
        <p class="hint rise" style="text-align:center;margin-top:16px;animation-delay:140ms">
          קיבלתם קישור הצטרפות? פשוט לוחצים עליו — והקבוצה נפתחת כאן מעצמה.
        </p>`;const o=Ed()&&!Pr()&&a.length?`<div class="identity-banner">
           <span>📲 רוצים אותה כמו אפליקציה? הוסיפו את ״שווה בשווה״ למסך הבית.</span>
           <button class="btn sm" data-act="install-app">הוספה</button>
         </div>`:"";return`
      ${zd()}
      ${t}
      ${Mc()}
      ${o}
      ${e}
      ${tu(a)}
      ${Yd()}
      <div data-ref="intro-slot"></div>
      <p class="legal-links">
        <button class="linklike" data-act="legal" data-id="terms">תקנון</button> ·
        <button class="linklike" data-act="legal" data-id="privacy">פרטיות</button> ·
        <button class="linklike" data-act="legal" data-id="a11y">נגישות</button>
      </p>
      <p class="footer-note" style="margin-top:6px;">שווה בשווה · חלוקת הוצאות הוגנת, לכל קבוצה${(()=>{const i=yi();return i?`<br>גרסה <span class="num">${r(i)}</span>`:""})()}</p>
      ${a.length?'<div class="actionbar"><button class="btn primary" data-act="new-kind-picker">✚ &nbsp;קבוצה חדשה</button></div>':""}`}function Yd(){const e=Dn.filter(a=>be[a].price>0).map(a=>`${be[a].nm} ${te(be[a].price)}`),t=[`חינם עד ${be.free.maxExp} הוצאות`].concat(e,[`רישיון לעסקים מ־${te(Ce.business.price)} לחודש`]).map(a=>`<span class="nowrap">${r(a)}</span>`).join(" · ");return`
      <button type="button" class="pricing-entry rise" data-act="pricing" style="animation-delay:200ms">
        <span class="pe-ic" aria-hidden="true">${he("tag",20)}</span>
        <span class="pe-text">
          ${Je.active?`<span class="pe-badge">${Uo}</span>`:""}
          <b class="pe-title">מסלולים ומחירים</b>
          <small class="pe-sub">${t}</small>
        </span>
        <span class="pe-chev" aria-hidden="true">${he("chevron",18)}</span>
      </button>`}function nl(e,t){const a=e.nm.split(" / ").map((s,n,o)=>`<span class="nm-part">${r(s)}${n<o.length-1?" /":""}</span>`).join(" ");return`<button type="button" class="kind-cell"${t?' data-act="new-kind"':""} data-kind="${e.id}"><span class="ic" aria-hidden="true">${e.ic}</span><span class="nm">${a}</span></button>`}function sl(e){const t=ge(`
      <div class="sheet-head"><h2 class="sheet-title">מה מארגנים?</h2></div>
      ${e&&e.plan&&be[e.plan]?`<p class="hint kind-plan-note">המסלול שבחרתם — ״${r(be[e.plan].nm)}״ — יוצע מיד אחרי פתיחת הקבוצה.</p>`:""}
      <div class="kind-grid" role="group" aria-label="בחירת סוג הקבוצה">
        ${_t.map(a=>nl(a,!1)).join("")}
      </div>`);z("[data-kind]",t.el).forEach(a=>a.addEventListener("click",()=>{const s=_t.find(n=>n.id===a.dataset.kind);t.close(),bn(null,s,e)}))}function Wd(){return`
      <div class="lock-wrap">
        <div class="lock-card rise">
          <div class="lock-icon" aria-hidden="true">🔐</div>
          <h1 class="lock-title">אזור המנהל</h1>
          <p class="lock-sub">הזינו את סיסמת המנהל כדי להיכנס</p>
          <input class="lock-input" id="admin-pin" type="password" dir="ltr"
            autocomplete="current-password" maxlength="200" aria-label="סיסמת המנהל" placeholder="סיסמת המנהל">
          <input class="lock-input" id="admin-code" type="text" dir="ltr" inputmode="numeric" pattern="[0-9]*"
            autocomplete="one-time-code" maxlength="6" aria-label="קוד מאפליקציית האימות" placeholder="קוד בן 6 ספרות" hidden>
          <p class="lock-err" data-ref="err" role="status"></p>
          <button class="btn primary block" data-act="admin-unlock">כניסה</button>
          <button class="join-skip" data-act="back-home">חזרה לאפליקציה</button>
        </div>
      </div>`}function Gd(){if(!It())return Wd();const e=g.trips.filter(o=>!o.archived),t=g.trips.filter(o=>o.archived),a=g.trips.reduce((o,i)=>o+oa(i),0),s=g.trips.some(o=>o.demo),n=g.trips.map(o=>`
      <div class="admin-row ${o.archived?"archived":""}">
        <span class="trip-flag" style="width:44px;height:44px;font-size:21px;border-radius:14px;" aria-hidden="true">${r(Xe(o))}</span>
        <div class="info">
          <p class="nm">${r(o.name)}${o.demo?" · הדגמה":""}${o.archived?" · בארכיון":""}</p>
          <p class="meta">${oa(o)?Pe(oa(o),"הוצאה אחת","הוצאות")+" · "+F(Mt(o.stats.totalCents),o.base):"ללא הוצאות"}</p>
        </div>
        <div class="admin-actions">
          <button class="btn sm ghost" data-act="admin-trip" data-id="${r(o.id)}"
            aria-label="ניהול מלא של הקבוצה ${r(o.name)}">ניהול</button>
          <button class="btn sm ghost" data-act="open-trip" data-id="${r(o.id)}"
            aria-label="פתיחת הקבוצה ${r(o.name)}">פתיחה</button>
          <button class="btn sm ghost" data-act="${o.archived?"restore-trip":"archive-trip"}" data-id="${r(o.id)}"
            aria-label="${o.archived?"שחזור":"העברה לארכיון"} של הקבוצה ${r(o.name)}">${o.archived?"שחזור":"לארכיון"}</button>
          <button class="btn sm danger" data-act="delete-trip" data-id="${r(o.id)}"
            aria-label="מחיקת הקבוצה ${r(o.name)}">מחיקה</button>
        </div>
      </div>`).join("");return`
      <div class="trip-header">
        <button class="iconbtn" data-act="back-home" aria-label="חזרה לרשימת הקבוצות">${he("back")}</button>
        <div style="flex:1;min-width:0;">
          <h1 class="trip-name">אזור הניהול</h1>
          <p class="trip-dest">ניהול הקבוצות, ארכיון וגיבוי</p>
        </div>
        <div class="trip-actions">${Kd()}</div>
      </div>
      ${ns()}
      ${Oc()}
      <div class="tile-grid" style="margin-top:14px;">
        <div class="tile"><div class="lbl">קבוצות פעילות</div><div class="val"><span class="num">${e.length}</span></div></div>
        <div class="tile"><div class="lbl">בארכיון</div><div class="val"><span class="num">${t.length}</span></div></div>
        <div class="tile"><div class="lbl">סך ההוצאות</div><div class="val"><span class="num">${Mt(a)}</span></div></div>
        <div class="tile"><div class="lbl">אחסון</div><div class="val" style="font-size:15px;">${g.cloud?"ענן מסונכרן":g.shared?"קבוצה משותפת":"מכשיר זה"}</div></div>
      </div>
      <h2 class="section-title">הקבוצות</h2>
      ${n||'<div class="empty"><div class="art" aria-hidden="true">🗂️</div><h3>אין עדיין קבוצות</h3><p>הקבוצות שתיפתחנה יופיעו כאן לניהול.</p></div>'}
      ${Ne?`
      <h2 class="section-title">קבוצה משותפת <small>סנכרון בין כל הטלפונים</small></h2>
      ${g.shared?g.secure?'<div class="banner">🔒 השרת במצב המאובטח: כל קבוצה נפתחת רק עם מפתח ההצטרפות שבקישור שלה, ופעולות הניהול מאומתות בשרת.</div>':'<div class="banner warn" role="status">השרת עדיין במצב הישן (גישה ישירה לטבלה). יש להריץ את ״deploy/אבטחה-בלחיצה.command״ — ראו docs/אבטחה.md.</div>':""}
      ${ko?`
        <div class="banner">✓ האפליקציה מחוברת לקבוצה המשותפת. כל מי שמקבל מכם קישור הצטרפות נכנס לאותה קבוצה ורושם יחד אתכם — בלי שום הגדרה מצידו.</div>`:g.shared?`
        <div class="banner">✓ מחוברים לקבוצה המשותפת — כל מי שנכנס דרך קישור ההצטרפות רואה ורושם יחד אתכם.</div>
        <button class="btn ghost block" data-act="sync-disconnect">ניתוק מהקבוצה המשותפת במכשיר זה</button>`:`
        <div class="banner">כרגע הנתונים נשמרים במכשיר זה בלבד. חיבור קבוצה משותפת (חינם, כ־3 דקות) יאפשר לכל החברים לראות ולרשום יחד.</div>
        <button class="btn block" data-act="sync-setup">🔌 &nbsp;חיבור קבוצה משותפת</button>`}
      `:""}
      <h2 class="section-title">רישיונות עסקיים <small>כל הקבוצות של העסק, ללא הגבלה ועם מיתוג</small></h2>
      ${vd()}
      <button class="btn block" data-act="license-new" style="margin-top:10px;">רישיון עסקי חדש</button>
      <h2 class="section-title">נתונים וגיבוי</h2>
      <div style="display:flex; flex-direction:column; gap:10px;">
        <button class="btn block" data-act="backup">🗄️ &nbsp;גיבוי מלא של כל הנתונים (JSON)</button>
        <button class="btn ghost block" data-act="restore">📥 &nbsp;שחזור מקובץ גיבוי</button>
        ${s?'<button class="btn ghost block" data-act="clear-demo">🧹 &nbsp;מחיקת נתוני ההדגמה</button>':""}
        ${C&&C.kind==="rest"?"":'<button class="btn danger block" data-act="wipe-all">⚠️ &nbsp;מחיקת כל הנתונים לצמיתות</button>'}
      </div>
      <h2 class="section-title">גישה</h2>
      <button class="btn ghost block" data-act="admin-lock">🔒 &nbsp;נעילת אזור המנהל</button>
      <p class="footer-note">שווה בשווה · אזור מנהל${(()=>{const o=yi();return o?` · גרסה <span class="num">${r(o)}</span>`:""})()}</p>`}function Vd(e,t){return!!(g.secure&&C&&C.resetMemberKey&&e&&t&&Array.isArray(e.keyed)&&e.keyed.indexOf(t.id)>=0&&fe(e))}function il(e,t){return!Vd(e,t)||t.id===pe(e.id)?"":`
      <div class="field" data-ref="resetbox" style="margin-top:16px;">
        <label>המכשיר של ${r(t.name)}</label>
        <button class="btn block" data-ref="resetkey">איפוס המכשיר המחובר</button>
        <p class="hint">למי שהחליף טלפון: אחרי האיפוס, הכניסה לחשבון במכשיר החדש תחזיר לו את האפשרות לעדכן בעצמו את הטלפון ואת פרטי התשלום.</p>
      </div>`}function ol(e,t,a){const s=m('[data-ref="resetkey"]',e.el);s&&s.addEventListener("click",async()=>{if(await Me("איפוס המכשיר המחובר",`המכשיר שמחובר היום לחשבון של ${a.name} יאבד את ההרשאה לעדכן את הטלפון ואת פרטי התשלום, עד שייכנס שוב לחשבון. להמשיך?`,"איפוס")){s.disabled=!0;try{await C.resetMemberKey(t.id,a.id),t.keyed=(t.keyed||[]).filter(i=>i!==a.id);const o=m('[data-ref="resetbox"]',e.el);o&&o.remove(),S("המכשיר אופס ✓ — הכניסה הבאה לחשבון תחבר את המכשיר החדש")}catch(o){console.error(o),s.disabled=!1,S(Fe(o,"האיפוס נכשל — נסו שוב"))}}})}async function Xd(e,t){const a=ge(`
      <div class="sheet-head">
        ${at(t,"lg",!0)}
        <h2 class="sheet-title">עריכת משתתף</h2>
      </div>
      <div class="field">
        <label for="ma-name">שם</label>
        <input class="input" id="ma-name" maxlength="24" value="${r(t.name||"")}">
      </div>
      <div class="field">
        <label for="ma-phone">טלפון</label>
        <input class="input ltr" id="ma-phone" type="tel" inputmode="tel" maxlength="20"
          value="${r(t.phone||"")}"
          placeholder="050-0000000">
        <p class="hint">זהו המפתח שבו המשתתף נכנס לחשבון שלו.</p>
      </div>
      <div class="field">
        <label>צבע זיהוי</label>
        <div class="chip-row" data-ref="colors">
          ${Ze.map((d,c)=>`<button class="chip" data-color="${r(d)}" aria-pressed="${t.color===d}" aria-label="בחירת צבע ${Sc[c]}"><span class="dot" style="background:${r(d)};width:18px;height:18px;"></span></button>`).join("")}
        </div>
      </div>
      ${Logic.splitsByHead(e)?`
      <div class="field" data-ref="maheads">
        <label>כמה בחשבון?</label>
        ${Aa(e,{units:la(t),kids:ca(t)})}
        <p class="hint">הקבוצה מתחלקת לפי ראש. ${r(dn(e))}${e.stats&&e.stats.count>0?" השינוי יחול גם על ההוצאות שכבר נרשמו.":""}</p>
      </div>`:""}
      <div class="field">
        <label>תפקיד</label>
        <button class="btn block" data-ref="setmgr" style="justify-content:space-between;">
          <span>${e.managerId===t.id?"🔑 זהו מנהל הקבוצה":"הגדרה כמנהל הקבוצה"}</span>
          <span style="color:var(--brand-strong);font-weight:800;">${e.managerId===t.id?"פעיל":""}</span>
        </button>
        ${fi()&&e.managerId!==t.id&&!(Qa(e)&&e.keyed.indexOf(t.id)>=0)?'<p class="hint" data-ref="setmgr-hint">בשרת המאובטח המנהל החדש פותח את הניהול במכשיר שלו רק בכניסה בסיסמת המנהל. סיסמה זמנית למסירה — באזור הניהול, בפרטי הקבוצה (״סיסמת מנהל זמנית״).</p>':""}
      </div>
      ${il(e,t)}
      <button class="btn primary block" data-ref="save">שמירת השינויים</button>
      ${e.managerId===t.id?'<p class="hint" data-ref="delmgrhint" style="text-align:center;margin-top:12px;">כדי להסיר את מנהל הקבוצה — קודם מגדירים משתתף אחר כמנהל.</p>':'<button class="btn danger block" data-ref="del" style="margin-top:10px;">הסרת המשתתף מהקבוצה</button>'}
    `);ol(a,e,t);let s=t.color;z("[data-color]",a.el).forEach(d=>d.addEventListener("click",()=>{Ze.indexOf(d.dataset.color)<0||(s=d.dataset.color,z("[data-color]",a.el).forEach(c=>c.setAttribute("aria-pressed",String(c===d))))}));const n={units:la(t),kids:ca(t)},o=m('[data-ref="maheads"]',a.el);o&&pa(o,n);let i=e.managerId===t.id;m('[data-ref="setmgr"]',a.el).addEventListener("click",function(){i=!i,this.innerHTML=`<span>${i?"🔑 יוגדר כמנהל הקבוצה":"הגדרה כמנהל הקבוצה"}</span><span style="color:var(--brand-strong);font-weight:800;">${i?"פעיל":""}</span>`}),m('[data-ref="save"]',a.el).addEventListener("click",async()=>{const d=m("#ma-name",a.el).value.trim(),c=m("#ma-phone",a.el).value.trim();if(!d){Ie(m("#ma-name",a.el),"נא להזין שם");return}if(c&&!Logic.validatePhone(c)){Ie(m("#ma-phone",a.el),"מספר הטלפון אינו תקין");return}const u=m('[data-ref="save"]',a.el);u.disabled=!0,u.textContent="שומרים…";try{const h=Logic.normalizePhone(c),b=Logic.normalizePay(t.pay),v=!Logic.phonesEqual(h,Oe(t))&&!b.phone&&(b.methods.indexOf("bit")>=0||b.methods.indexOf("paybox")>=0)?{pay:ls(t.pay,pe(e.id)||"mgr",t.pay)}:{};await Lt(e,Object.assign({id:t.id,name:d,phone:h,color:s},o?{units:n.units,kids:n.kids}:{},v)),i&&e.managerId!==t.id?await C.updateTrip(e.id,{managerId:t.id}):!i&&e.managerId===t.id&&await C.updateTrip(e.id,{managerId:""}),a.close(),S("פרטי המשתתף עודכנו ✓"),W()}catch(h){console.error(h),u.disabled=!1,u.textContent="שמירת השינויים",S(qt(h))}});const l=m('[data-ref="del"]',a.el);l&&l.addEventListener("click",async()=>{if(await Me("הסרת משתתף",`${t.name} יוסר מהקבוצה. הוצאות שכבר נרשמו יישארו, ויתרתו תוצג כ״משתתף שהוסר״. להמשיך?`,"הסרה",!0))try{let c=e;if(C.getTripOnce){const v=await C.getTripOnce(e.id);v&&(c=v)}const u=(c.members||[]).filter(v=>v.id!==t.id),h=(c.members||[]).find(v=>v.id===t.id)||t,b=Object.assign({},c.removedHeads,{[t.id]:{units:la(h),kids:ca(h)}});await C.updateTrip(e.id,{members:u,removedHeads:b}),e.members=u,e.removedHeads=b,a.close(),S("המשתתף הוסר"),W()}catch(c){console.error(c),S(Fe(c,"ההסרה נכשלה — נסו שוב"))}})}async function Zd(e){const t=g.trips.find(c=>c.id===e);if(!t)return;const a=ge(`
      <div class="sheet-head">
        <span class="trip-flag" style="width:40px;height:40px;font-size:19px;border-radius:12px;" aria-hidden="true">${r(Xe(t))}</span>
        <h2 class="sheet-title">${r(t.name)}</h2>
      </div>
      <div data-ref="body"><p class="hint">טוענים הוצאות…</p></div>`);let s=[];try{s=await C.getExpensesOnce(e)}catch(c){console.error(c)}s.sort((c,u)=>c.date===u.date?(u.created||0)-(c.created||0):c.date<u.date?1:-1);const n=Logic.computeBalances(t,s),o=()=>Un(t,s)+(Sa(t).isLicense?`<br><small>המסלול של הקבוצה עצמה: ${Un(t,s,{own:!0})}</small>`:"");m('[data-ref="body"]',a.el).innerHTML=`
      <div class="mgr-total" style="border-radius:var(--radius-sm);">
        <span>סך הוצאות</span><b>${F(n.grand,t.base)}</b>
      </div>
      <h2 class="section-title">משתתפים <small>${(t.members||[]).length}</small></h2>
      <div class="acct-list">
        ${(t.members||[]).map(c=>`
          <button class="acct-row tap" data-editmember="${r(c.id)}">
            ${at(c,"",!0)}
            <span class="acct-mid">
              <b>${r(c.name)}${t.managerId===c.id?" · 🔑 מנהל":""}</b>
              <small>${c.phone?`<span class="num">${r(c.phone)}</span>`:"ללא טלפון"}</small>
            </span>
            <span class="acct-amt">${r(Ae(n.net[c.id]||0,t.base))}</span>
          </button>`).join("")}
      </div>
      <h2 class="section-title">מסלול <small>הפעלה ידנית לאחר תשלום</small></h2>
      <div class="banner" style="margin:0 0 8px;" data-ref="planstatus">${o()}</div>
      <div class="chip-row" data-ref="planpick" role="group" aria-label="בחירת מסלול לקבוצה">
        ${Dn.map(c=>`<button class="chip" data-setplan="${c}" aria-pressed="${Rt(t).id===c}">${r(Qs(t,c).label)}</button>`).join("")}
      </div>
      <div class="chip-row" role="group" aria-label="השלמות" style="margin-top:8px;">
        ${Object.keys(xe).map(c=>`<button class="chip" data-topup="${c}">+ ${xe[c].nm} · ${te(xe[c].price)}</button>`).join("")}
      </div>
      <p class="hint" data-ref="topuphint" hidden></p>
      <p class="hint">מסלול לקבוצה — כאן. רישיון עסקי (כל הקבוצות של המנהל, עם מיתוג) — במסך הניהול, ״רישיונות עסקיים״.</p>
      <h2 class="section-title">כל ההוצאות <small>${s.length}</small></h2>
      <div class="acct-list">
        ${s.length?s.map(c=>{const u=ft(t,c.category);return`
            <div class="acct-row">
              <span class="acct-ic" aria-hidden="true">${Logic.isPayment(c)?"✓":u.ic}</span>
              <span class="acct-mid">
                <b>${r(c.note||u.nm)}</b>
                <small>${r(_e(c.date))} · ${r(me(t,c.payerId))} · ${r(Ae(Logic.expenseBaseCents(t,c),t.base))}</small>
              </span>
              <button class="xbtn" data-delexp="${r(c.id)}" aria-label="מחיקת ${r(c.note||u.nm)}">✕</button>
            </div>`}).join(""):'<p class="hint" style="padding:14px 15px;">אין הוצאות בקבוצה זו.</p>'}
      </div>`;let i=!1;const l=()=>{m('[data-ref="planstatus"]',a.el).innerHTML=o();const c=Rt(t);z("[data-setplan]",a.el).forEach(b=>{b.textContent=Qs(t,b.dataset.setplan).label,b.setAttribute("aria-pressed",String(b.dataset.setplan===c.id)),b.disabled=i});const u=!!(be[c.id]&&be[c.id].topUp);z("[data-topup]",a.el).forEach(b=>{b.disabled=i||!u||b.dataset.topup==="exp20"&&c.expired});const h=m('[data-ref="topuphint"]',a.el);h.textContent=u?c.expired?`״${xe.exp20.nm}״ — רק כשהמסלול בתוקף. אחרי שהתוקף נגמר מוסיפים קודם 7 ימים, או בוחרים מסלול.`:"":"השלמות — רק למסלולי שבוע וחודש.",h.hidden=!h.textContent},d=async c=>{if(!i){i=!0,l();try{let u=t;if(C.getTripOnce){const f=await C.getTripOnce(t.id);f&&(u=f)}const h=c(u);if(!h||!await Me(h.title,h.text,"אישור"))return;const v=Object.assign({},h.patch),p=h.purchase?Object.assign({id:it("buy"),at:Date.now(),by:"admin"},h.purchase):null;p&&(v.purchases=(u.purchases||[]).concat([p])),await C.updateTrip(t.id,v),Object.assign(t,u,v),S(h.okMsg),p&&setTimeout(()=>fd(t,p),60)}catch(u){console.error(u),S(Fe(u,"העדכון נכשל — נסו שוב"))}finally{i=!1,l()}}};z("[data-setplan]",a.el).forEach(c=>c.addEventListener("click",()=>d(u=>{const h=c.dataset.setplan,b=be[h],v=Qs(u,h),p=Date.now();if(v.kind==="free")return{patch:{plan:"free",planUntil:0,extraExp:0},purchase:null,okMsg:"המסלול עודכן: חינם ✓",title:"מעבר למסלול החינמי",text:`הקבוצה תעבור למסלול החינמי (${Rt(u).freeMax} הוצאות). לא תירשם רכישה. להמשיך?`};if(v.kind==="renew"){const f=Logic.extendFrom(u.planUntil,p,b.days);return{patch:{plan:h,planUntil:f},purchase:{what:"חידוש "+b.nm,price:b.price},okMsg:`המסלול חודש: ${b.nm} עד ${st(f,b.days>=365)} ✓`,title:"חידוש המסלול",text:`מסלול ״${b.nm}״ יוארך עד ${st(f,b.days>=365)}${b.topUp?" (ההשלמות שנקנו נשמרות)":""}, ותירשם רכישה של ${te(b.price)}. להמשיך?`}}return{patch:{plan:h,planUntil:b.days?p+b.days*Bn:0,extraExp:0},purchase:v.cost>0?{what:v.kind==="diff"?`שדרוג ל${b.nm}`:b.nm,price:v.cost}:null,okMsg:`המסלול עודכן: ${b.nm} ✓`,title:"הפעלת מסלול",text:`יופעל מסלול ״${b.nm}״${b.days?` ל־${b.days} ימים מהיום`:""}, ותירשם רכישה של ${te(v.cost)}${v.kind==="diff"?" (תשלום ההפרש)":""}. השלמות קודמות מתאפסות. להמשיך?`}}))),z("[data-topup]",a.el).forEach(c=>c.addEventListener("click",()=>d(u=>{const h=c.dataset.topup,b=Rt(u);if(!(be[b.id]&&be[b.id].topUp))return S("השלמות — רק למסלולי שבוע וחודש"),null;if(h==="exp20"&&b.expired)return S("תוקף המסלול הסתיים — קודם מוסיפים 7 ימים או בוחרים מסלול"),null;const v=Logic.extendFrom(u.planUntil,Date.now(),7);return{patch:h==="exp20"?{extraExp:(Number(u.extraExp)||0)+20}:{planUntil:v},purchase:{what:xe[h].nm,price:xe[h].price},okMsg:`נוספו ${xe[h].nm} ✓`,title:"הוספת השלמה",text:`${h==="exp20"?"יתווספו 20 הוצאות למסלול הנוכחי":`התוקף יוארך עד ${st(v)}`}, ותירשם רכישה של ${te(xe[h].price)}. להמשיך?`}}))),l(),z("[data-editmember]",a.el).forEach(c=>c.addEventListener("click",()=>{const u=(t.members||[]).find(h=>h.id===c.dataset.editmember);u&&(a.close(),Xd(t,u))})),z("[data-delexp]",a.el).forEach(c=>c.addEventListener("click",async()=>{const u=s.find(b=>b.id===c.dataset.delexp);if(await Me("מחיקת הוצאה",`״${u&&u.note||"הוצאה"}״ תימחק לצמיתות מהקבוצה. להמשיך?`,"מחיקה",!0))try{await C.deleteExpense(e,c.dataset.delexp),s=s.filter(b=>b.id!==c.dataset.delexp),await Wt(t,s),c.closest(".acct-row").remove(),S("ההוצאה נמחקה")}catch(b){console.error(b),S(Fe(b,"המחיקה נכשלה"))}}))}async function Qd(e){if(!g.secure||!C.upsertMember||!C.getTripOnce)return 0;const t=await C.getTripOnce(e.id);if(!t)return 0;let a=0;for(const s of e.members||[]){const n=(t.members||[]).find(i=>i.id===s.id);if(!n)continue;const o=s.pay&&typeof s.pay=="object"?Object.assign({},s.pay):{methods:[]};Logic.samePay(o,n.pay,{secure:!0,memberPhone:Oe(n)})||(delete o.updatedAt,delete o.updatedBy,delete o.firstAt,await C.upsertMember(e.id,{id:s.id,pay:o}),a++)}return a}function ep(){const e=document.createElement("input");e.type="file",e.accept="application/json,.json",e.addEventListener("change",async()=>{const t=e.files&&e.files[0];if(!t)return;let a=null;try{a=JSON.parse(await t.text())}catch{S("הקובץ אינו קובץ גיבוי תקין");return}const s=Logic.backupData(a)||{trips:[],licenses:[]},n=s.trips,o=s.licenses;if(!n.length&&!o.length){S("לא נמצאו קבוצות בקובץ");return}const i=new Set(g.trips.map(L=>L.id)),l=g.secure?n.filter(L=>L&&L.id&&!i.has(L.id)).length:0,d=l?` ${He(l,"קבוצה אחת אינה קיימת כרגע בשרת ותיפתח","קבוצות אינן קיימות כרגע בשרת וייפתחו")} מחדש עם קישור הצטרפות חדש — את הקישור החדש יש לשלוח שוב למשתתפים (הקישורים הישנים לא יעבדו).`:"";if(!await Me("שחזור מגיבוי",`נמצאו ${He(n.length,"קבוצה אחת","קבוצות")}${o.length?` ו${He(o.length,"רישיון עסקי אחד","רישיונות עסקיים")}`:""} בקובץ. מה שכבר קיים יידרס בגרסה מהגיבוי.${g.secure&&C.upsertMember?" פרטי תשלום שהשתנו מאז הגיבוי יוחזרו לגרסה שבגיבוי, וחברי הקבוצה יראו הודעה על העדכון.":""}${d} להמשיך?`,"שחזור"))return;let u=0,h=0,b=0;for(const L of n)try{const _=Array.isArray(L.expenses)?L.expenses:[],T=ie(L);if(delete T.expenses,!T.id)continue;const w=Logic.normalizeTrip(T);if(!w){h++;continue}await C.saveTrip(w,{withServerFields:!0});const E=_.map(D=>Logic.normalizeExpense(D)).filter(Boolean),A=C.adminRestoreExpenses?await C.adminRestoreExpenses(w.id,E):null;if(A)b+=A.skipped||0;else for(const D of E)await C.saveExpense(w.id,D);i.has(w.id)&&await Qd(w),u++}catch(_){console.error(_),h++}let v=0;for(const L of o){if(!C.saveLicense)break;const _=Logic.normalizeLicense(L);if(!_){h++;continue}try{await C.saveLicense(_),v++}catch(T){console.error(T),h++}}o.length&&(ot=null,sa=!1,W());const p=v?` · ${He(v,"רישיון אחד","רישיונות")}`:"",f=b?` · ${He(b,"הוצאה אחת פגומה לא שוחזרה","הוצאות פגומות לא שוחזרו")}`:"";S((h?`שוחזרו ${u+v}, נכשלו ${h}`:He(u,"קבוצה אחת שוחזרה","קבוצות שוחזרו")+p+(f?"":" ✓"))+f)}),e.click()}async function tp(){if(!C||C.kind==="rest"){S("מחיקה גורפת אינה זמינה בשרת המשותף");return}if(!await Me("מחיקת כל הנתונים",`כל ${He(g.trips.length,"הקבוצה","הקבוצות")} וכל ההוצאות יימחקו לצמיתות מהקבוצה המשותפת. אין דרך לבטל. מומלץ לגבות תחילה. להמשיך?`,"מחיקת הכול",!0)||!await Me("אישור אחרון","זו פעולה בלתי הפיכה שמשפיעה על כל חברי הקבוצה. למחוק?","כן, למחוק הכול",!0))return;let a=0;for(const s of g.trips.slice())try{await C.deleteTripDeep(s.id),We(s.id,null),a++}catch(n){console.error(n)}S(He(a,"קבוצה אחת נמחקה","קבוצות נמחקו"))}function rl(){const e=kn()||{u:"",k:""},t=ge(`
      <div class="sheet-head"><h2 class="sheet-title">חיבור קבוצה משותפת</h2></div>
      <p class="hint" style="margin:-6px 0 12px;">
        פותחים פרויקט חינמי ב־supabase.com, מריצים שם את קובץ ההקמה שקיבלתם,
        ומדביקים כאן את שני הערכים מ־Settings ← API. מרגע החיבור — כל מי שמקבל
        מכם קישור הצטרפות רואה ורושם יחד אתכם.
      </p>
      <div class="field">
        <label for="sync-url">כתובת הפרויקט (Project URL)</label>
        <input class="input ltr" id="sync-url" placeholder="https://xxxx.supabase.co" value="${r(e.u)}">
      </div>
      <div class="field">
        <label for="sync-key">מפתח anon (public)</label>
        <input class="input ltr" id="sync-key" placeholder="eyJhbGciOi..." value="${r(e.k)}">
        <p class="hint">לתשומת הלב: כל מי שמחזיק בקישור ההצטרפות של קבוצה יוכל לראות ולערוך את נתוניה — שתפו אותו רק עם חברי הקבוצה. לפני שימוש אמיתי יש להחיל בפרויקט את המיגרציה המאובטחת (docs/אבטחה.md).</p>
      </div>
      <button class="btn primary block" data-ref="connect">בדיקה וחיבור</button>`);m('[data-ref="connect"]',t.el).addEventListener("click",async()=>{const a={u:m("#sync-url",t.el).value.trim().replace(/\/+$/,""),k:m("#sync-key",t.el).value.trim()};if(!_s.test(a.u)||!/^[A-Za-z0-9._-]{20,600}$/.test(a.k)){S("נא למלא כתובת Supabase (‎https://…supabase.co‎) ומפתח תקינים");return}const s=m('[data-ref="connect"]',t.el);s.disabled=!0,s.textContent="בודקים חיבור…";try{if(!await Fd(a))throw new Error("bad");Ts(a),t.close(),S("החיבור הצליח ✓ טוענים מחדש…"),setTimeout(()=>location.reload(),700)}catch(n){console.error(n),s.disabled=!1,s.textContent="בדיקה וחיבור",S("החיבור נכשל — בדקו את הכתובת ואת המפתח, וּודאו שקובץ ההקמה כבר הורץ בפרויקט")}})}function me(e,t){const a=(e.members||[]).find(s=>s.id===t);return a?a.name:"משתתף שהוסר"}function Be(e,t){return(e.members||[]).find(a=>a.id===t)||{id:t,name:"משתתף שהוסר",color:"#8A8171",ghost:!0}}function ll(e,t){const a=(e.members||[]).slice(),s=new Set(a.map(n=>n.id));return Object.keys(t.net||{}).forEach(n=>{!s.has(n)&&t.net[n]!==0&&a.push(Be(e,n))}),a}function cn(e){return e.photo&&/^[A-Za-z0-9_-]{1,100}$/.test(e.photo)?"/_blob/"+e.photo:e.photoData&&ia(e.photoData)||null}function Oi(e){const t=new Date(Logic.timeMs(e)),a=s=>String(s).padStart(2,"0");return`<span class="num">${t.getDate()}.${t.getMonth()+1}</span> בשעה <span class="num">${a(t.getHours())}:${a(t.getMinutes())}</span>`}function cl(e,t,a){return a?a===t.id?"דווח מהמכשיר של המשתתף עצמו":a==="mgr"?"דווח ממכשיר מנהל הקבוצה":"דווח מהמכשיר של "+me(e,a):""}const ap=(e,t,a)=>r(cl(e,t,a));function dl(e,t,a){const s=Logic.timeMs(t&&t.pay&&t.pay.updatedAt);if(!s)return"";const n=!!(a&&a.named);if(n&&Logic.payIsFirstSetup(t.pay,t.id))return"";const o=ap(e,t,t.pay.updatedBy);return`<small class="pay-stamp">${n?`פרטי התשלום של ${r(t.name)}`:"פרטי התשלום"} עודכנו ב־${Oi(s)}${o?" · "+o:""}</small>`}Object.assign(es,{check:'<path d="m5 12.5 4.5 4.5L19 7.5"/>',bell:'<path d="M6 16v-5a6 6 0 1 1 12 0v5l1.5 2h-15L6 16Z"/><path d="M10 20.5a2 2 0 0 0 4 0"/>',bellOff:'<path d="M6 16v-5a6 6 0 0 1 9.5-4.9M18 11v5l1.5 2H8"/><path d="M10 20.5a2 2 0 0 0 4 0"/><path d="M4 4l16 16"/>',chat:'<path d="M4 20l1.3-3.9A8 8 0 1 1 8 19.1L4 20Z"/>',finish:'<path d="M5 21V4"/><path d="M5 4h11l-2 4 2 4H5"/>',chart:'<path d="M4 20h16"/><path d="M7 16v-5M12 16V7M17 16v-8"/>',users:'<circle cx="9" cy="8" r="3.2"/><path d="M3.5 19a5.5 5.5 0 0 1 11 0"/><path d="M16 5.2a3 3 0 0 1 0 5.6M17.5 14.2A5 5 0 0 1 20.5 19"/>',spark:'<path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2V16h5v-.1c0-.8.4-1.5 1-2A6 6 0 0 0 12 3Z"/>',chevron:'<path d="m14.5 6-6 6 6 6"/>',card:'<rect x="3" y="5.5" width="18" height="13" rx="2.5"/><path d="M3 10h18M7 15h4"/>'});function np(e){const t=ui(e),a=fe(e),s=t?(e.members||[]).find(N=>N.id===t)||Be(e,t):null,n=qe(e).id==="trip"||e.base!=="ILS"||Object.keys(e.rates||{}).some(N=>N!==e.base),o=e.start?`${_e(e.start)}–${_e(e.end||e.start)}`:"",i=[e.dest?r(e.dest):"",o?`<span class="num">${r(o)}</span>`:""].filter(Boolean),d=`
      <nav class="trip-tools" aria-label="פעולות הקבוצה">
        <button type="button" class="${g.expensesReady&&!g.expenses.length&&!!e.closedAt?"on":""}" data-act="share-join">${he("users",20)}<span>הזמנה</span></button>
        ${n?`<button type="button" data-act="converter">${he("calculator",20)}<span>מחשבון</span></button>`:""}
        <button type="button" class="${et()&&!wt(e.id)?"":"off"}" data-act="toggle-notif" aria-pressed="${et()&&!wt(e.id)}"${et()&&wt(e.id)?' aria-label="התראות — הקבוצה מושתקת במכשיר הזה; פתיחת הגדרות ההתראות"':""}>${he(et()&&!wt(e.id)?"bell":"bellOff",20)}<span>התראות</span></button>
        ${a?`<button type="button" data-act="trip-settings">${he("gear",20)}<span>הגדרות</span></button>`:""}
      </nav>`,c=`
      <div class="trip-header">
        <button class="iconbtn" data-act="back-home" aria-label="חזרה לרשימת הקבוצות">${he("back")}</button>
        ${Ut(e)?Zn(Ut(e),"trip-flag brand-logo"):`<span class="trip-flag" style="width:44px;height:44px;font-size:22px;" aria-hidden="true">${r(Xe(e))}</span>`}
        <div class="trip-titlebox">
          <h1 class="trip-name">${r(e.name)}</h1>
          <p class="trip-dest">${i.length?i.join(" · "):r(qe(e).nm)}</p>
        </div>
        <div class="trip-actions"></div>
      </div>`+d;if(!g.expensesReady)return c+'<div class="skeleton"><div class="skel-card"></div><div class="skel-card"></div></div>'+ns();if(!s){const N=e.members||[];return c+`
        <div class="who-wrap rise">
          <div class="who-art" aria-hidden="true">👋</div>
          <h2 class="who-title">מי אתם בקבוצה?</h2>
          <p class="who-sub">בחרו את השם שלכם — ונפתח לכם את החשבון האישי.</p>
          ${N.length?`
            <div class="who-list">
              ${N.map(se=>`
                <button class="who-card" data-act="who-pick" data-id="${r(se.id)}">
                  ${at(se,"lg",!0)}
                  <span class="who-name">${r(se.name)}</span>
                  <span class="who-go" aria-hidden="true">←</span>
                </button>`).join("")}
            </div>`:""}
          <button class="join-skip" data-act="pick-me">אני לא ברשימה — הצטרפות כמשתתף חדש</button>
          ${Xi(e)}
        </div>`}const u=Logic.memberBreakdown(e,g.expenses,s.id),h=Logic.computeBalances(e,g.expenses),b=Logic.transfersFor(e,g.expenses),v=b.filter(N=>N.to===s.id),p=b.filter(N=>N.from===s.id),f=v.reduce((N,se)=>N+se.cents,0),L=p.reduce((N,se)=>N+se.cents,0),_=Logic.toCents(Number(e.budget)||0,Logic.dec(e.base));let T="";const w=a||dt(e).sum==="on";let E="";if(_>0&&w){const N=h.grand,se=Math.min(100,Math.round(N/_*100)),yt=N>_;E=`
          <div class="bar-track${yt?" over":""}" aria-hidden="true"><div class="bar-fill" style="width:${Math.max(3,se)}%"></div></div>
          <p class="hint${yt?" over":""}">${yt?`חריגה של ${F(N-_,e.base)} מהתקציב (${F(_,e.base)})`:`תקציב: <span class="num">${se}%</span> · נותרו ${F(_-N,e.base)}`}</p>`}const A=w?lp(e,g.expenses):"",D=a&&!e.closedAt?`
          <button type="button" class="btn ghost sm status-daily-btn" data-act="daily-budget">${he("calculator",16)}<span>${Logic.dailyBudgetOf(e,g.expenses).source==="explicit"?"עריכת התקציב היומי":"הגדרת תקציב יומי"}</span></button>`:"";(E||A||D)&&(T=`
        <div class="status-budget${E&&h.grand>_?" over":""}">${E}${A}${D}
        </div>`);const U=u.net>0?"pos":u.net<0?"neg":"",I=u.net>0?"מגיע לכם בחזרה":u.net<0?"נשאר לכם לשלם":`${he("check",16)}<span>אתם מאוזנים</span>`,re=!u.rows.length&&!u.net?`
      <section class="big-card status is-empty rise" aria-label="המצב שלכם">
        <div class="big-lbl">שלום, ${r(s.name)} · המצב שלכם</div>
        <p class="status-empty">כאן תופיע היתרה שלכם — כמה מגיע לכם בחזרה, או כמה נשאר לכם לשלם.</p>
        ${T}
      </section>`:`
      <section class="big-card status rise" aria-label="המצב שלכם">
        <div class="big-lbl">שלום, ${r(s.name)} · המצב שלכם</div>
        <div class="big-num ${U}">${F(Math.abs(u.net),e.base)}</div>
        <div class="big-sub ${U}">${I}</div>
        <div class="status-pair">
          <div><span class="lbl">החלק שלי</span><b>${F(u.shareTotal,e.base)}</b></div>
          <div><span class="lbl">שילמתי בפועל</span><b>${F(u.paidTotal,e.base)}</b></div>
        </div>
        ${T}
      </section>`,X=Logic.splitsByHead(e),P=X&&!s.ghost?`
      <div class="heads-line rise" style="animation-delay:40ms">
        <span class="heads-line-txt"><span aria-hidden="true">👨‍👩‍👧</span> בחשבון שלכם: <b>${r(_l(s))}</b><small class="heads-count">בחלוקה: ${r(da(e,s))}</small></span>
        <button class="btn sm" data-act="household" aria-label="עדכון מספר הנפשות בחשבון שלי">עדכון</button>
      </div>`:"",q=Logic.insights(e,g.expenses,s.id),Z=[];if(q.nextPay>0?Z.push({ic:"💡",tone:"act",txt:`שילמתם פחות מחלקכם. אם תשלמו על ההוצאה הבאה בסכום של כ־<b>${Ae(q.nextPay,e.base)}</b> — תתאזנו בדיוק.`}):u.net>0?Z.push({ic:"🌟",tone:"good",echo:!0,txt:`שילמתם יותר מחלקכם — <b>${Ae(u.net,e.base)}</b> אמורים לחזור אליכם. אפשר לתת לאחרים לשלם בפעמים הבאות.`}):u.rows.length&&Z.push({ic:"✓",tone:"good",echo:!0,txt:"אתם מאוזנים בדיוק — אין מה לסדר."}),q.of>1&&q.expenseCount&&(q.rank===1?Z.push({ic:"🏆",tone:"info",txt:`אתם מובילים בתשלומים בקבוצה — שילמתם <b>${Ae(q.paid,e.base)}</b>${a||dt(e).sum==="on"?` מתוך <b>${Ae(q.grand,e.base)}</b>`:""}.`}):q.rank===q.of&&q.paid<q.fairPaid&&Z.push({ic:"🙋",tone:"act",txt:`אתם משלמים הכי מעט בקבוצה. החלק ההוגן שלכם הוא כ־<b>${Ae(q.fairPaid,e.base)}</b> — כדאי לקחת את ההוצאה הבאה.`})),u.rows.length>=3){const N=Math.round(u.shareTotal/u.rows.length);Z.push({ic:"📊",tone:"info",txt:`בממוצע כל הוצאה עולה לכם <b>${Ae(N,e.base)}</b>.`})}const ce=Z.find(N=>!N.echo),G=ce&&u.rows.length>=3?`
      <div class="tips trip-tip">
        ${[ce].map(N=>`<div class="tip ${N.tone}"><span class="tip-ic">${he("spark",18)}</span><span>${N.txt}</span></div>`).join("")}
      </div>`:"",Le=s.ghost?"":`<div class="rise" style="animation-delay:50ms">${Wi(e,s,{owed:f})}</div>`,ee=(N,se)=>`
      <div class="debt-item">
      <div class="debt-row">
        <span class="debt-ic ${se?"out":"in"}" aria-hidden="true">${he(se?"out":"in",16)}</span>
        <span class="debt-txt">${se?"לשלם ל":"לקבל מאת "}<b>${r(me(e,se?N.to:N.from))}</b></span>
        <span class="debt-amt ${se?"neg":"pos"}">${F(N.cents,e.base)}</span>
        <button class="paybtn" data-act="mark-paid" data-from="${r(N.from)}" data-to="${r(N.to)}" data-cents="${N.cents}"
          aria-label="${se?`שילמתי — רישום תשלום ל${r(me(e,N.to))}`:`קיבלתי — רישום תשלום מאת ${r(me(e,N.from))}`}">${se?"שילמתי":"קיבלתי"}</button>
      </div>
      ${se?`<div class="pay-how-wrap">${Gi(e,N.to,N.cents)}</div>`:""}
      </div>`,we=v.length||p.length?`
      <h2 class="section-title">מי חייב למי${Logic.settleModeOf(e)==="min"?" <small>מקוזז — מינימום העברות</small>":""}</h2>
      <div class="debt-list">
        ${p.map(N=>ee(N,!0)).join("")}
        ${v.map(N=>ee(N,!1)).join("")}
      </div>`:`
      <div class="banner" style="margin-top:18px;">✓ אין חובות פתוחים מולכם</div>`,ke=u.rows.slice().sort((N,se)=>N.expense.date===se.expense.date?0:N.expense.date<se.expense.date?1:-1),Q=ke.length?`
      <div class="acct-list">
        ${ke.map(N=>{const se=ft(e,N.expense.category),yt=N.expense.delReq&&N.expense.delReq.by;return`
            <button class="acct-row tap ${yt?"pending-del":""}" data-act="edit-exp" data-id="${r(N.expense.id)}">
              <span class="acct-ic" aria-hidden="true">${yt?"⏳":se.ic}</span>
              <span class="acct-mid">
                <b>${r(N.expense.note||se.nm)}</b>
                <small>${r(_e(N.expense.date))} · ${N.isPayer?"שילמתי "+r(Ae(N.total,e.base)):"שולם על ידי "+r(me(e,N.expense.payerId))}${Pi(e,N.expense)?" · "+Pi(e,N.expense):""}${Logic.isFutureExpense(N.expense,rt())?' · <b class="exp-badge">עתידית</b>':""}${Logic.spreadDaysOf(N.expense)>1?` · <span class="num">${Logic.spreadDaysOf(N.expense)}</span> ימים`:""}</small>
              </span>
              <span class="acct-amt">${F(N.share,e.base)}</span>
            </button>`}).join("")}
      </div>`:`
      <div class="empty">
        <div class="art" aria-hidden="true">🧾</div>
        <h3>עדיין אין הוצאות שלכם</h3>
        <p>מוסיפים הוצאה — והחשבון מתעדכן לבד.</p>
      </div>`,ve=u.payments.length?`
      <h2 class="section-title">תשלומים שנרשמו</h2>
      <div class="acct-list">
        ${u.payments.slice().reverse().map(N=>`
          <div class="acct-row">
            <span class="acct-ic" aria-hidden="true">✓</span>
            <span class="acct-mid">
              <b>${N.isPayer?"שילמתי ל"+r(me(e,(N.expense.parts||[])[0])):"התקבל מאת "+r(me(e,N.expense.payerId))}</b>
              <small>${r(_e(N.expense.date))}</small>
            </span>
            <span class="acct-amt">${F(N.isPayer?N.total:N.share,e.base)}</span>
            ${a||N.expense.payerId===s.id?`<button class="xbtn" data-act="del-payment" data-id="${r(N.expense.id)}" aria-label="מחיקת רישום התשלום ${N.isPayer?"ל"+r(me(e,(N.expense.parts||[])[0])):"מאת "+r(me(e,N.expense.payerId))}">✕</button>`:""}
          </div>`).join("")}
      </div>`:"",$=dt(e),j=h,x=Lr(g.expenses),B=(a||$.exp==="all")&&g.expenses.length>0,K=B&&(g.tab==="all"||g.tab==="bal"),V=(N,se,yt)=>`<button type="button" class="tab" role="tab" id="exp-tab-${N}" data-act="tab" data-id="${N}"
          aria-selected="${yt}" aria-controls="exp-panel" tabindex="${yt?0:-1}">${se}</button>`,oe=B?`
      <h2 class="section-title">ההוצאות</h2>
      <div class="tabs exp-tabs" role="tablist" aria-label="אילו הוצאות להציג">
        ${V("mine","שלי",!K)}
        ${V("all","של כל הקבוצה",K)}
      </div>
      <div id="exp-panel" role="tabpanel" aria-labelledby="exp-tab-${K?"all":"mine"}">
        ${K?op(e):Q}
      </div>`:`
      <h2 class="section-title">ההוצאות שלי</h2>
      ${Q}`,Ee=a||$.bal==="all"?`
      <h2 class="section-title">תמונת הקבוצה${a?" <small>למנהל בלבד</small>":""}</h2>
      <div class="mgr-card">
        <div class="mgr-total">
          <span>סך ההוצאות</span>
          <b>${F(j.grand,e.base)}</b>
        </div>
        ${ll(e,j).map(N=>{const se=j.net[N.id]||0;return`
            <button class="mgr-row" data-act="member-detail" data-id="${r(N.id)}">
              ${at(N,"",!0)}
              <span class="mgr-name">${r(N.name)}${N.id===s.id?" · אני":""}${X&&!N.ghost?` <small class="mgr-heads">· ${r(da(e,N))}</small>`:""}</span>
              <span class="mgr-amt ${se>0?"pos":se<0?"neg":""}">${se===0?"מאוזן":(se>0?"לקבל ":"לשלם ")+F(Math.abs(se),e.base)}</span>
            </button>`}).join("")}
      </div>
      `:"",De=N=>`
        <${N.href?"a":"button"} class="acct-row tap${N.cls?" "+N.cls:""}"${N.href?` href="${r(N.href)}" target="_blank" rel="noopener"`:' type="button"'}${N.attrs||""}>
          <span class="acct-ic">${he(N.ic,18)}</span>
          <span class="acct-mid"><b>${N.nm}</b>${N.sub?`<small>${N.sub}</small>`:""}</span>
          <span class="end-go">${he("chevron",18)}</span>
        </${N.href?"a":"button"}>`,ae=[];(a||$.sum==="on")&&ae.push({ic:"chart",nm:"הסיכום המלא של הקבוצה",sub:"סכומים, קטגוריות והקצב היומי",attrs:' data-act="full-summary"'}),ae.push({ic:"chat",nm:"שליחת החשבון שלי בוואטסאפ",sub:"היתרה, החלק שלי וההעברות הפתוחות",cls:"wa-row",href:Dt(Rs(e,s.id)),attrs:' data-ref="mywa"'}),g.expenses.length&&ae.push({ic:"image",nm:"מזכרת לשיתוף",sub:"תמונה מעוצבת של הקבוצה — לסטורי ולוואטסאפ",attrs:' data-act="share-cards"'}),a&&g.expenses.length&&ae.push({ic:"finish",nm:"סגירה והתחשבנות סופית",sub:"הודעה אישית לכל מי שנותר לשלם, ואז ארכוב",attrs:' data-act="close-trip"'}),ae.push({ic:wt(e.id)?"bellOff":"bell",nm:"התראות בקבוצה הזו",sub:wt(e.id)?"מושתקת במכשיר הזה — בלי צליל ובלי הודעה על הוצאות":"צליל והודעה על כל הוצאה, או השתקה של הקבוצה הזו בלבד",attrs:' data-act="notif-sheet"'});const Ve=`
      <div class="acct-list trip-end" role="group" aria-label="סיכום ושיתוף">
        ${ae.map(De).join("")}
      </div>`,$e=Sa(e),Ue=Vs(g.expenses),je=$e.until&&!$e.expired&&$e.until-Date.now()<2*Bn,ze=$e.maxExp-Ue,ut=$e.maxExp!==1/0&&ze<=0,y=$e.expired?ut?`תוקף המסלול הסתיים והקבוצה הגיעה למכסה החינמית (${$e.maxExp} הוצאות) — הוספת הוצאות נעצרה (כל השאר פתוח).`:`תוקף המסלול הסתיים — הקבוצה במסלול החינמי: ${Ue} מתוך ${$e.maxExp} הוצאות.`:ut?"הקבוצה הגיעה למגבלת ההוצאות של המסלול.":$e.maxExp!==1/0&&ze<=3?"נותרו "+He(ze,"הוצאה אחת","הוצאות")+" במסלול הנוכחי.":je?`${$e.isLicense?"הרישיון העסקי":"המסלול"} בתוקף עד ${Bt($e)}.`:"",k=a&&y?`
      <div class="identity-banner">
        <span>${r(y)}</span>
        <button class="btn sm primary" data-act="plans">${$e.expired||je?"חידוש":"שדרוג"}</button>
      </div>`:"",M=e.closedAt?`
      <div class="banner" role="status" style="margin-top:12px;">🏁 הקבוצה נסגרה להתחשבנות ב־<span class="num">${r(_e(Xs(e.closedAt)))}</span> — הנתונים שמורים במלואם.${a?"":" הוצאה חדשה — דרך מנהל הקבוצה."}</div>
      ${a?`<button class="btn block" data-act="final-summary" style="margin-top:10px;"><span aria-hidden="true">📁</span>&nbsp; הסיכום הסופי המלא</button>
      <button class="btn block" data-act="reopen-trip" style="margin-top:8px;"><span aria-hidden="true">🔓</span>&nbsp; פתיחת הקבוצה מחדש</button>`:""}`:"",H=!g.expenses.length&&!e.closedAt,Y=a&&$e.launchFree?`
        <button class="plan-chip launch" data-act="plans" aria-label="${$e.grandfathered?"קבוצה מתקופת ההשקה":"חינם בתקופת ההשקה"} · ללא הגבלת הוצאות — פרטים על המסלולים">
          ${$e.grandfathered?"קבוצה מתקופת ההשקה":"חינם בתקופת ההשקה"} · ללא הגבלה</button>`:a&&$e.maxExp!==1/0?`
        <button class="plan-chip" data-act="plans" aria-label="מסלול ${r($e.nm)} · ${Mt(Ue)}/${Mt($e.maxExp)} הוצאות — פרטים על המסלולים">
          מסלול ${r($e.nm)} · <span class="num">${Mt(Ue)}/${Mt($e.maxExp)}</span> הוצאות</button>`:"",le=H?`
      <div class="empty trip-empty rise">
        <div class="art" aria-hidden="true">${he("users",34)}</div>
        <h3>הקבוצה מוכנה</h3>
        <p>שלחו את הקישור לחברים, ורשמו את ההוצאה הראשונה.</p>
        <div class="empty-actions">
          <button class="btn wa block" data-act="share-join">${he("chat",18)} הזמנת חברים</button>
          <button class="btn ghost block" data-act="add-exp">${he("plus",18)} רישום הוצאה</button>
        </div>
        ${Y}
      </div>`:"",ye=a&&x.length?`
      <div class="identity-banner warn pend-banner" role="status">
        <span>⏳ ${Pe(x.length,"בקשת מחיקה אחת ממתינה","בקשות מחיקה ממתינות")} לאישורכם</span>
        <button class="btn sm" data-act="show-pending">לבקשות</button>
      </div>`:"",Se=wd(e)?hi(e)?`
      <div class="identity-banner mgr-key-banner">
        <span>במכשיר הזה הניהול עוד לא נפתח. מנהלי הקבוצה נכנסים לניהול בסיסמת המנהל.</span>
        <button class="btn sm" data-act="mgr-login">כניסה בסיסמה</button>
      </div>`:`
      <div class="banner mgr-key-banner" role="note">במכשיר הזה הניהול עוד לא נפתח. כדי לנהל גם מכאן — קובעים סיסמת מנהל בהגדרות הקבוצה, במכשיר שפתח אותה, ונכנסים בה כאן. אין גישה למכשיר ההוא? מפעיל השירות יכול לקבוע לקבוצה סיסמה זמנית. <button type="button" class="linklike" data-help-open="article" data-help-id="lost-manager-access">איך משחזרים ניהול</button></div>`:"";return c+ns()+Se+yp(e,s)+vp(e,s)+gp(e,s)+ye+k+M+(H?le:re)+P+Le+(H?"":we+G+oe)+(H?"":Ee)+ve+(H?"":Ve+(e.closedAt&&!a?"":'<div class="actionbar"><button class="btn primary" data-act="add-exp">✚ &nbsp;הוצאה חדשה</button></div>'))}function Pi(e,t){const a=Logic.splitModeOf(e,t);return a==="custom"?"סכומים ידניים":a==="percent"?"באחוזים":a==="shares"?"במנות":a==="items"?"לפי פריטים":""}function sp(e,t){const a=ft(e,t.category),s=Pi(e,t),n=Logic.partsOf(e,t).length,o=cn(t),i=Logic.expenseBaseCents(e,t),l=t.currency!==e.base,d=l&&!(e.rates&&Number(e.rates[t.currency])>0),c=!!(t.delReq&&t.delReq.by);return`
      <button class="exp-row ${c?"pending-del":""}" data-act="edit-exp" data-id="${r(t.id)}">
        <span class="exp-cat" aria-hidden="true">${c?"⏳":t.hidden?"🔒":a.ic}</span>
        <span class="exp-mid">
          <p class="exp-title">${t.hidden?"פרטים מוסתרים":r(t.note||a.nm)}</p>
          <p class="exp-meta">שולם על ידי ${r(me(e,t.payerId))} · ${Logic.wholeGroupAt(e,t)?"כולם":Pe(n,"משתתף אחד","משתתפים")}${s?` · ${s}`:""}${d?' · <b style="color:var(--bad)">חסר שער ⚠️</b>':""}${c?' · <b style="color:var(--bad)">ממתין לאישור מחיקה</b>':""}${Logic.isFutureExpense(t,rt())?' · <b class="exp-badge">עתידית</b>':""}${Logic.spreadDaysOf(t)>1?` · <span class="num">${Logic.spreadDaysOf(t)}</span> ימים`:""}</p>
        </span>
        ${o?`<img class="exp-thumb" src="${r(o)}" alt="קבלה" loading="lazy">`:""}
        <span class="exp-amts">
          <div class="exp-amt">${Fr(t.amount,t.currency)}</div>
          ${l?`<div class="exp-amt-base">${F(i,e.base)}</div>`:""}
        </span>
      </button>`}function ip(e){if(fe(e)||dt(e).exp==="all")return Logic.onlyExpenses(g.expenses);const t=pe(e.id);return t?Logic.onlyExpenses(g.expenses).filter(a=>a.payerId===t||Logic.partsOf(e,a).indexOf(t)>=0):[]}function op(e){if(!g.expensesReady)return g.syncError?'<div class="empty"><div class="art" aria-hidden="true">📡</div><h3>לא הצלחנו לטעון את ההוצאות</h3><p>בדקו את החיבור לאינטרנט ונסו לרענן את הדף.</p></div>':'<div class="skeleton"><div class="skel-card"></div><div class="skel-card"></div></div>';const t=ip(e);if(!t.length)return g.expenses.length?'<div class="empty"><div class="art" aria-hidden="true">🔒</div><h3>אין הוצאות שנוגעות אליכם</h3><p>מוצגות כאן רק הוצאות ששילמתם עליהן או שאתם חלק מהן.</p></div>':`
        <div class="empty">
          <div class="art" aria-hidden="true">🧾</div>
          <h3>עדיין אין הוצאות</h3>
          <p>בכל תשלום — מקלידים סכום או מצלמים קבלה,<br>בוחרים מי שילם ועל מי זה מתחלק. זהו.</p>
          <button class="btn primary" data-act="add-exp">✚ &nbsp;ההוצאה הראשונה</button>
        </div>`;let a="";if(t.length>=4||g.filter.cat||g.filter.payer){const l=Ra.filter(c=>c.id===g.filter.cat||t.some(u=>(u.category||"other")===c.id)),d=(e.members||[]).filter(c=>c.id===g.filter.payer||t.some(u=>u.payerId===c.id));a=`
        <div class="filterbar" role="group" aria-label="סינון הוצאות">
          <button class="fchip" aria-pressed="${!g.filter.cat&&!g.filter.payer}" data-act="filter-clear">הכול</button>
          ${l.map(c=>`<button class="fchip" aria-pressed="${g.filter.cat===c.id}" data-act="filter-cat" data-id="${c.id}"><span aria-hidden="true">${c.ic}</span> ${c.nm}</button>`).join("")}
          ${d.map(c=>`<button class="fchip" aria-pressed="${g.filter.payer===c.id}" data-act="filter-payer" data-id="${r(c.id)}"><span class="dot" style="width:9px;height:9px;border-radius:50%;background:${mt(c)};display:inline-block;"></span> ${r(c.name)}</button>`).join("")}
        </div>`}const s=t.filter(l=>(!g.filter.cat||(l.category||"other")===g.filter.cat)&&(!g.filter.payer||l.payerId===g.filter.payer));if(!s.length)return a+'<div class="empty"><div class="art" aria-hidden="true">🔍</div><h3>אין תוצאות לסינון הזה</h3><p>נסו סינון אחר, או חזרו אל ״הכול״.</p></div>';const n=[];s.forEach(l=>{const d=n[n.length-1];!d||d.date!==l.date?n.push({date:l.date,items:[l]}):d.items.push(l)});const o=s.length!==t.length,i=o?s.reduce((l,d)=>l+Logic.expenseBaseCents(e,d),0):0;return a+(o?`<p class="hint" style="margin:0 4px 10px;" role="status">בתצוגה: ${Pe(s.length,"הוצאה אחת","הוצאות")} · סך הכול ${F(i,e.base)}</p>`:"")+n.map((l,d)=>`
        <div class="day-head rise" style="animation-delay:${Math.min(d,6)*50}ms"><span>${r(_i(l.date))}</span></div>
        <div class="exp-group rise" style="animation-delay:${Math.min(d,6)*50}ms">${l.items.map(c=>sp(e,c)).join("")}</div>`).join("")}function pl(e,t){if(!g.expensesReady)return'<div class="skeleton"><div class="skel-card"></div></div>';if(!fe(e)&&dt(e).sum!=="on"){const w=pe(e.id);if(!w)return'<div class="empty"><div class="art" aria-hidden="true">👤</div><h3>מי אתם בקבוצה?</h3><p>בחירה חד־פעמית תציג לכם סיכום אישי.</p><button class="btn primary" data-act="pick-me">בחירת השם שלי</button></div>';const E=Logic.memberBreakdown(e,g.expenses,w);if(!E.rows.length)return'<div class="empty"><div class="art" aria-hidden="true">📊</div><h3>אין עדיין הוצאות שנוגעות אליכם</h3><p>ברגע שתשתתפו בהוצאה — הסיכום יופיע כאן.</p></div>';const A=E.rows.map(I=>I.expense),D=Logic.categoryTotals(e,A),U=D.length?D[0].cents:1;return`
        <div class="tile-grid">
          <div class="tile"><div class="lbl">החלק שלי</div><div class="val">${F(E.shareTotal,e.base)}</div></div>
          <div class="tile"><div class="lbl">שילמתי בפועל</div><div class="val">${F(E.paidTotal,e.base)}</div></div>
          <div class="tile"><div class="lbl">הוצאות שלי</div><div class="val"><span class="num">${E.rows.length}</span></div></div>
          <div class="tile"><div class="lbl">היתרה שלי</div><div class="val" style="font-size:16px;color:${E.net>0?"var(--good)":E.net<0?"var(--bad)":"var(--ink)"};">${E.net>0?"לקבל "+F(E.net,e.base):E.net<0?"לשלם "+F(-E.net,e.base):"מאוזן"}</div></div>
        </div>
        <h2 class="section-title">הקטגוריות שלי</h2>
        ${D.map(I=>{const R=ft(e,I.cat),re=E.rows.filter(X=>(X.expense.category||"other")===I.cat).reduce((X,P)=>X+P.share,0);return`
            <div class="bar-row">
              <div class="bar-label"><span aria-hidden="true">${R.ic}</span> ${r(R.nm)}</div>
              <div class="bar-val">${F(re,e.base)}</div>
              <div class="bar-track"><div class="bar-fill" style="width:${Math.max(3,Math.round(I.cents/U*100))}%"></div></div>
            </div>`}).join("")}
        <div class="banner" style="margin-top:18px;">🔒 הסיכום הכללי של הקבוצה גלוי למנהל בלבד.</div>`}if(!g.expenses.length)return'<div class="empty"><div class="art" aria-hidden="true">📊</div><h3>הסיכום יופיע כאן</h3><p>תמונת מצב לפי קטגוריות ומשלמים — אחרי ההוצאה הראשונה.</p></div>';const a=g.expenses.map(w=>w.date).filter(Boolean).sort();let s=1;e.start&&e.end?s=Math.max(1,Math.round((new Date(e.end)-new Date(e.start))/864e5)+1):a.length&&(s=Math.max(1,Math.round((new Date(a[a.length-1])-new Date(a[0]))/864e5)+1));const n=Logic.onlyExpenses(g.expenses).reduce((w,E)=>Math.max(w,Logic.expenseBaseCents(e,E)),0),o=`
      <div class="tile-grid">
        <div class="tile"><div class="lbl">סך הכול</div><div class="val">${F(t.grand,e.base)}</div></div>
        <div class="tile"><div class="lbl">ממוצע ליום</div><div class="val">${F(Math.round(t.grand/s),e.base)}</div></div>
        <div class="tile"><div class="lbl">מספר הוצאות</div><div class="val"><span class="num">${Fn(g.expenses)}</span></div></div>
        <div class="tile"><div class="lbl">ההוצאה הגדולה</div><div class="val">${F(n,e.base)}</div></div>
      </div>`,i=Logic.onlyExpenses(g.expenses),l=`<div class="stats-wrap" data-ref="stats">${ml(e,g.expenses,fl(e))}</div>`,d=Logic.categoryTotals(e,i),c=d.length?d[0].cents:1,u=d.map(w=>{const E=ft(e,w.cat);return`
        <div class="bar-row">
          <div class="bar-label"><span aria-hidden="true">${E.ic}</span> ${r(E.nm)} <span class="count">· ${w.count}</span></div>
          <div class="bar-val">${F(w.cents,e.base)}</div>
          <div class="bar-track"><div class="bar-fill" style="width:${Math.max(3,Math.round(w.cents/c*100))}%${Ba(E)?`;background:${Ba(E)}`:""}"></div></div>
        </div>`}).join(""),h=Logic.payerTotals(e,i),b=h.length?h[0].cents:1,v=h.map(w=>{const E=Be(e,w.id);return`
        <div class="bar-row">
          <div class="bar-label">${at(E)} ${r(E.name)} <span class="count">· ${Pe(w.count,"תשלום אחד","תשלומים")}</span></div>
          <div class="bar-val">${F(w.cents,e.base)}</div>
          <div class="bar-track"><div class="bar-fill" style="width:${Math.max(3,Math.round(w.cents/b*100))}%"></div></div>
        </div>`}).join(""),p=Logic.spreadDayTotals(e,i,rt()).filter(w=>w.date);let f="";if(p.length>=2){const w=Math.max.apply(null,p.map(A=>A.cents)),E="הוצאות לפי יום: "+p.map(A=>_e(A.date)+" "+Ae(A.cents,e.base)+(A.future?" (עתידית)":"")).join(", ");f=`
        <h2 class="section-title">הקצב היומי</h2>
        <div class="daychart" role="img" aria-label="${r(E)}">
          ${p.map(A=>{const D=Math.max(6,Math.round(A.cents/w*84)),U=A.cents===w;return`
            <div class="daycol${A.future?" future":""}" title="${r(_i(A.date))}: ${r(Ae(A.cents,e.base))}${A.future?" (עתידית)":""}">
              ${U?`<div class="val"><span class="num">${r(Ae(A.cents,e.base))}</span></div>`:""}
              <div class="bar" style="height:${D}px"></div>
              <div class="lbl"><span class="num">${r(_e(A.date))}</span></div>
            </div>`}).join("")}
        </div>`}const L=g.expenses.filter(w=>cn(w)),_=L.length?`
      <h2 class="section-title">הקבלות <small>${Pe(L.length,"קבלה אחת","קבלות")}</small></h2>
      <div class="gallery">
        ${L.map(w=>{const E=ft(e,w.category),A=`הגדלת הקבלה: ${w.note||E.nm}, ${_e(w.date)}`;return`<button class="gal-btn" aria-label="${r(A)}" data-full="${r(cn(w))}">
            <img src="${r(cn(w))}" alt="" loading="lazy">
          </button>`}).join("")}
      </div>`:"",T=fe(e)?`<h2 class="section-title">מי שילם בפועל</h2>${v}`:'<div class="banner" style="margin-top:18px;">🔒 פילוח התשלומים לפי משתתף גלוי למנהל הקבוצה בלבד.</div>';return`
      ${o}
      ${f}
      ${l}
      <h2 class="section-title">לפי קטגוריה</h2>
      ${u}
      ${T}
      ${_}`}const ul=[["today","היום"],["week","השבוע"],["month","החודש"],["all","כל הקבוצה"]],rp=["א","ב","ג","ד","ה","ו","ש"],Ni={};function fl(e){if(!Ni[e.id]){const t=Logic.heatMonths(e,g.expenses),s=rt().slice(0,7);Ni[e.id]={period:"all",ym:t.indexOf(s)>=0?s:t[t.length-1]||s}}return Ni[e.id]}function Hi(e){try{return new Intl.DateTimeFormat("he-IL",{month:"long",year:"numeric"}).format(new Date(e+"-01T12:00:00"))}catch{return e}}function lp(e,t){const a=rt(),s=Logic.dailyPace(e,t,a);if(!s.dailyBudgetCents)return"";const n=s.dailyBudgetCents;if(s.active){const o=s.leftToday<0,i=Math.min(100,Math.round(s.todayCents/n*100));return`
          <div class="status-daily${o?" over":""}" data-ref="daily">
            <div class="daily-head"><span class="daily-lbl">${o?"חריגה היום":"נשאר להיום"}</span><b class="daily-val">${F(Math.abs(s.leftToday),e.base)}</b></div>
            <div class="bar-track" aria-hidden="true"><div class="bar-fill" style="width:${Math.max(3,i)}%"></div></div>
            <p class="hint">תקציב יומי ${F(n,e.base)} · הוצאות היום ${F(s.todayCents,e.base)}${s.budgetSource==="derived"?" · לפי התקציב הכללי חלקי ימי הקבוצה":""}</p>
          </div>`}return/^\d{4}-\d{2}-\d{2}$/.test(e.start||"")&&a<e.start?`
          <div class="status-daily" data-ref="daily">
            <p class="hint">תקציב יומי ${F(n,e.base)} · הקבוצה מתחילה ב־<span class="num">${r(_e(e.start))}</span>${s.futureCents?` · כבר נרשמו ${F(s.futureCents,e.base)} לימים הבאים`:""}</p>
          </div>`:`
          <div class="status-daily" data-ref="daily">
            <p class="hint">תקציב יומי ${F(n,e.base)} · הממוצע בפועל ${F(s.avgCents,e.base)} ליום${s.avgCents>n?' — <b class="over-txt">מעל התקציב היומי</b>':""}</p>
          </div>`}function hl(e){if(!fe(e)){S("את התקציב היומי קובע מנהל הקבוצה");return}const t=Logic.dailyBudgetOf(e,g.expenses),a=Number(e.dailyBudget)>0,s=(()=>{const l=Logic.toCents(Number(e.budget)||0,Logic.dec(e.base));return l>0?Math.round(l/t.days):0})(),n=ge(`
      <div class="sheet-head"><h2 class="sheet-title">תקציב יומי</h2></div>
      <p class="hint" style="margin:-4px 0 12px;">כמה הקבוצה מתכננת להוציא ביום. בכרטיס המצב יופיע ״נשאר להיום״, ובסיכום — הקצב מול התקציב. סטטיסטיקה בלבד: החלוקה והמאזנים לא משתנים.</p>
      <div class="field">
        <label>איך לקבוע?</label>
        <div class="chip-row" role="group" aria-label="אופן קביעת התקציב היומי">
          <button type="button" class="chip" data-mode="derived" aria-pressed="${!a}">לפי התקציב הכללי</button>
          <button type="button" class="chip" data-mode="explicit" aria-pressed="${a}">סכום קבוע ליום</button>
        </div>
        <p class="hint" data-ref="derivedhint">${s?`התקציב הכללי ${F(Logic.toCents(Number(e.budget)||0,Logic.dec(e.base)),e.base)} חלקי ${Pe(t.days,"יום אחד","ימים")} = <b>${F(s,e.base)}</b> ליום.`:"עוד לא הוגדר תקציב כללי לקבוצה (בהגדרות הקבוצה) — אפשר לקבוע סכום קבוע ליום."}</p>
      </div>
      <div class="field" data-ref="amountbox"${a?"":" hidden"}>
        <label for="daily-amt">סכום ליום (${r(e.base)})</label>
        <input class="input ltr lg" id="daily-amt" inputmode="decimal" autocomplete="off" placeholder="0" value="${a?r(e.dailyBudget):""}">
      </div>
      <div class="sheet-foot">
        <button type="button" class="btn primary block" data-ref="save">שמירת התקציב היומי</button>
      </div>`),o=n.el;let i=a?"explicit":"derived";z(".chip[data-mode]",o).forEach(l=>l.addEventListener("click",()=>{i=l.dataset.mode,z(".chip[data-mode]",o).forEach(d=>d.setAttribute("aria-pressed",String(d===l))),m('[data-ref="amountbox"]',o).hidden=i!=="explicit",i==="explicit"&&m("#daily-amt",o).focus()})),m('[data-ref="save"]',o).addEventListener("click",async()=>{const l=m("#daily-amt",o);let d=0;if(i==="explicit"&&(d=xt(l.value),!(d>0))){Ie(l,"נא להזין סכום ליום");return}const c=m('[data-ref="save"]',o);c.disabled=!0,c.textContent="שומרים…";try{await C.updateTrip(e.id,{dailyBudget:d}),e.dailyBudget=d,n.close(),S(d?"התקציב היומי נשמר ✓":"התקציב היומי נגזר מהתקציב הכללי ✓"),W()}catch(u){c.disabled=!1,c.textContent="שמירת התקציב היומי",console.error(u),S(qt(u))}})}function ml(e,t,a){const s=rt(),n=e.base,o=Logic.periodRange(a.period,s),i=Logic.periodStats(e,t,o,s),l=ul.find(E=>E[0]===a.period)[1],d=`
      <div class="chip-row stat-chips" role="group" aria-label="תקופה לפילוח">
        ${ul.map(E=>`<button type="button" class="chip" data-period="${E[0]}" aria-pressed="${a.period===E[0]}">${E[1]}</button>`).join("")}
      </div>`,c=i.cats.length?i.cats[0].cents:1,u=i.cats.length?`
      <p class="stat-line">${l}: <b>${F(i.cents,n)}</b> · ${Pe(i.count,"הוצאה אחת","הוצאות")} · ${Pe(i.days,"יום אחד","ימים")}${i.futureCount?` (מתוכן ${Pe(i.futureCount,"עתידית אחת","עתידיות")} בסך ${F(i.futureCents,n)} לימים הבאים)`:""}</p>
      ${i.cats.map(E=>{const A=ft(e,E.cat);return`
        <div class="bar-row">
          <div class="bar-label"><span aria-hidden="true">${A.ic}</span> ${r(A.nm)} <span class="count">· ${Math.round(E.cents/(i.cents||1)*100)}%</span></div>
          <div class="bar-val">${F(E.cents,n)}</div>
          <div class="bar-track"><div class="bar-fill" style="width:${Math.max(3,Math.round(E.cents/c*100))}%${Ba(A)?`;background:${Ba(A)}`:""}"></div></div>
        </div>`}).join("")}`:`<p class="stat-line empty-line" role="status">אין הוצאות ${a.period==="all"?"בקבוצה":a.period==="today"?"היום":a.period==="week"?"השבוע":"החודש"}.</p>`,h=Logic.dailyPace(e,t,s),b=h.dailyBudgetCents,v=b?h.active?h.leftToday>=0?`נשאר להיום ${F(h.leftToday,n)} — מתוך תקציב יומי של ${F(b,n)} לקבוצה.`:`היום ההוצאות עברו את התקציב היומי (${F(b,n)}) ב־${F(-h.leftToday,n)} בסך הכול.`:h.avgCents>b?`הממוצע בפועל גבוה מהתקציב היומי ב־${F(h.avgCents-b,n)} ליום.`:`הממוצע בפועל בתוך התקציב היומי — נותרו בממוצע ${F(b-h.avgCents,n)} ליום.`:fe(e)?"עוד לא הוגדר תקציב יומי — אפשר לקבוע אותו מכרטיס המצב.":"לא הוגדר תקציב יומי לקבוצה.",p=`
      <h2 class="section-title">הקצב מול התקציב</h2>
      <div class="tile-grid tiles3 pace-tiles" role="img" aria-label="${r(`היום ${Ae(h.todayCents,n)}, ממוצע ליום ${Ae(h.avgCents,n)}, תקציב יומי ${b?Ae(b,n):"לא הוגדר"}`)}">
        <div class="tile"><div class="lbl">היום</div><div class="val">${F(h.todayCents,n)}</div></div>
        <div class="tile"><div class="lbl">ממוצע ליום</div><div class="val">${F(h.avgCents,n)}</div></div>
        <div class="tile${b&&h.avgCents>b?" over":""}"><div class="lbl">תקציב יומי</div><div class="val">${b?F(b,n):"—"}</div></div>
      </div>
      <p class="stat-line" data-ref="pacetxt">${v}</p>`,f=Logic.heatMonths(e,t),L=Logic.heatMap(e,t,a.ym,s);let _="";if(L){const E=f.indexOf(a.ym),A=E>0?f[E-1]:f.length&&a.ym>f[0]?f.filter(R=>R<a.ym).pop():"",D=f.filter(R=>R>a.ym)[0]||"",U=L.days.filter(R=>R.cents>0),I=U.length?`מפת חום ${Hi(L.ym)}: ${Pe(L.spentDays,"יום הוצאה אחד","ימי הוצאה")}, סך ${Ae(L.total,n)}. `+U.map(R=>_e(R.date)+" "+Ae(R.cents,n)+(R.future?" (עתידית)":"")).join(", "):`מפת חום ${Hi(L.ym)}: אין הוצאות בחודש הזה`;_=`
      <div class="heat-head">
        <h2 class="section-title">ימי ההוצאות</h2>
        <div class="heat-nav">
          <button type="button" class="iconbtn sm flip" data-ym="${r(A)}" aria-label="החודש הקודם"${A?"":" disabled"}>${he("chevron",18)}</button>
          <span class="heat-month">${r(Hi(L.ym))}</span>
          <button type="button" class="iconbtn sm" data-ym="${r(D)}" aria-label="החודש הבא"${D?"":" disabled"}>${he("chevron",18)}</button>
        </div>
      </div>
      <div class="heatmap" role="img" aria-label="${r(I)}">
        ${rp.map(R=>`<span class="heat-dow">${R}</span>`).join("")}
        ${Array.from({length:L.startDow},()=>'<span class="heat-cell blank"></span>').join("")}
        ${L.days.map(R=>`<span class="heat-cell l${R.level}${R.future?" future":""}${R.inTrip?"":" dim"}${R.date===s?" today":""}" title="${r(_i(R.date))}${R.cents?": "+r(Ae(R.cents,n)):""}"><span class="num">${R.day}</span></span>`).join("")}
      </div>
      <p class="stat-line heat-caption">${U.length?`${Pe(L.spentDays,"יום הוצאה אחד","ימי הוצאה")} בחודש · סך ${F(L.total,n)} · היום החזק ${F(L.max,n)}`:"אין הוצאות בחודש הזה"}</p>
      <details class="chart-text"><summary>תיאור מילולי של המפה</summary><p>${r(I)}</p></details>`}const T=Logic.forecast(e,t,s);let w="";if(T&&!T.before){const E=_e(e.end),A=T.budgetCents?T.projected>T.budgetCents?` <b class="over-txt">זה מעל התקציב של ${F(T.budgetCents,n)}: חריגה צפויה של ${F(T.projected-T.budgetCents,n)} ${T.done?"בסיום":"עד הסיום"}.</b>`:` זה בתוך התקציב של ${F(T.budgetCents,n)}: נותר מרווח של ${F(T.budgetCents-T.projected,n)} ${T.done?"בסיום":"עד הסיום"}.`:"";w=`
      <h2 class="section-title">תחזית לסוף הקבוצה</h2>
      <div class="forecast-card">
        ${T.done?`<p>הקבוצה הסתיימה ב־<span class="num">${r(E)}</span> אחרי ${Pe(T.totalDays,"יום אחד","ימים")}: סך הכול <b>${F(T.projected,n)}</b>, בממוצע ${F(T.avgCents,n)} ליום.${A}</p>`:`<p>בקצב הנוכחי — ${F(T.avgCents,n)} ליום — הקבוצה צפויה להגיע עד <span class="num">${r(E)}</span> (עוד ${Pe(T.remaining,"יום אחד","ימים")}) לסך של <b>${F(T.projected,n)}</b> בסך הכול.${A}</p>
             <p class="hint">עד עכשיו ${F(T.spent,n)} ב־${Pe(T.elapsed,"יום אחד","ימים")}${h.futureCents?`, ועוד ${F(h.futureCents,n)} שכבר נרשמו לימים הבאים`:""}.</p>`}
      </div>`}return`
      <h2 class="section-title">לפי תקופה</h2>
      ${d}
      ${u}
      ${p}
      ${_}
      ${w}`}function bl(e,t){const a=m('[data-ref="stats"]',e);a&&a.addEventListener("click",s=>{const n=s.target.closest("[data-period]"),o=s.target.closest("[data-ym]"),i=fl(t);if(n)i.period=n.dataset.period;else if(o&&o.dataset.ym&&!o.disabled)i.ym=o.dataset.ym;else return;a.innerHTML=ml(t,g.expenses,i);let l=m(n?`[data-period="${i.period}"]`:`.heat-nav [aria-label="${o.getAttribute("aria-label")}"]`,a);l&&l.disabled&&(l=m(".heat-month",a),l&&(l.tabIndex=-1)),l&&l.focus()})}function gl(e){const t=e.base,a=ma.map(f=>f.c).filter(f=>f!==t);let n=Object.keys(e.rates||{}).filter(f=>f!==t)[0]||a[0]||t,o="",i=!1;const d=ge(`
      <div class="sheet-head"><h2 class="sheet-title">מחשבון המרה</h2></div>
      <div class="calc">
        <div class="calc-screen">
          <div class="calc-row calc-in">
            <button class="calc-cur" data-ref="curbtn" aria-label="בחירת מטבע"><span data-ref="curlbl"></span> ▾</button>
            <div class="calc-amount" data-ref="typed">0</div>
          </div>
          <button class="calc-flip" data-ref="flip" aria-label="החלפת כיוון ההמרה">⇅</button>
          <div class="calc-row calc-out">
            <span class="calc-cur static" data-ref="outcur"></span>
            <div class="calc-amount strong" data-ref="out" role="status" aria-label="התוצאה"></div>
          </div>
        </div>
        <div class="calc-rate" data-ref="rate"></div>
        <div class="calc-pad" data-ref="pad" role="group" aria-label="מקלדת מספרים">
          ${[["7","8","9"],["4","5","6"],["1","2","3"],[".","0","back"]].map(f=>f.map(L=>L==="back"?'<button class="calc-key fn" data-key="back" aria-label="מחיקת ספרה">⌫</button>':`<button class="calc-key" data-key="${L}">${L==="."?".":`<span class="num">${L}</span>`}</button>`).join("")).join("")}
        </div>
      </div>
      <select class="input" data-ref="curselect" hidden aria-label="בחירת מטבע מהרשימה המלאה"></select>
      <p class="hint" data-ref="src"></p>
      <div class="sheet-foot">
        <div class="calc-actions">
          <button class="btn ghost" data-ref="clear">ניקוי</button>
          <button class="btn primary" data-ref="useit">✚ &nbsp;רישום כהוצאה</button>
        </div>
      </div>
    `),c=d.el;function u(f){if(f===t)return 1;const L=e.rates&&Number(e.rates[f]);return L>0?L:on(f,t)}function h(f){return f===t?"same":e.rates&&Number(e.rates[f])>0?"trip":Ei(f,t)?"live":"estimate"}function b(){const f=u(n),L=xt(o);m('[data-ref="curlbl"]',c).textContent=i?t:n,m('[data-ref="outcur"]',c).textContent=i?n:t,m('[data-ref="typed"]',c).innerHTML=`<span class="num">${r(o||"0")}</span>`;const _=i?n:t,T=i?f?L/f:0:L*f;m('[data-ref="out"]',c).innerHTML=F(Logic.toCents(T,Logic.dec(_)),_),m('[data-ref="rate"]',c).innerHTML=`1 <span class="num">${r(n)}</span> = ${F(Logic.toCents(f,Logic.dec(t)),t)}`;const w=h(n),E=m('[data-ref="src"]',c);w==="trip"?E.textContent="לפי השער שהוגדר בקבוצה — ניתן לעדכון בהגדרות הקבוצה ⚙️":w==="live"?E.textContent="שער חי"+(Br()?", עודכן ב־"+Br():"")+" — צמוד לשער היציג.":E.textContent=Ne?"שער משוער — לא הצלחנו למשוך שער חי כרגע.":"שער משוער. בגרסת הווב נמשך שער חי אוטומטית."}function v(f){f==="back"?o=o.slice(0,-1):f==="."?o.includes(".")||(o=(o||"0")+"."):o==="0"?o=f:o.replace(".","").length<9&&(o+=f),b()}z("[data-key]",c).forEach(f=>f.addEventListener("click",()=>v(f.dataset.key))),m('[data-ref="clear"]',c).addEventListener("click",()=>{o="",b()}),m('[data-ref="flip"]',c).addEventListener("click",()=>{i=!i,b()});const p=m('[data-ref="curselect"]',c);p.innerHTML=a.map(f=>`<option value="${f}" ${f===n?"selected":""}>${r(kt(f).n)} (${f})</option>`).join(""),m('[data-ref="curbtn"]',c).addEventListener("click",()=>{p.hidden=!p.hidden,p.hidden||p.focus()}),p.addEventListener("change",()=>{n=p.value,p.hidden=!0,b(),Li(t).then(()=>b())}),m('[data-ref="useit"]',c).addEventListener("click",()=>{const f=xt(o);if(!(f>0)){S("נא להקליד סכום");return}const L=u(n),_=i?L?f/L:0:f;d.close(),gn(null,{amount:Math.round(_*100)/100,currency:n})}),c.addEventListener("keydown",f=>{f.target.tagName!=="SELECT"&&(/^[0-9]$/.test(f.key)?(f.preventDefault(),v(f.key)):f.key==="."||f.key===","?(f.preventDefault(),v(".")):f.key==="Backspace"&&(f.preventDefault(),v("back")))}),b(),Li(t).then(()=>b())}function cp(e,t){const a=aa(t),s=ge(`
      <div class="sheet-head">
        ${at(t,"lg",!0)}
        <h2 class="sheet-title">${r(t.name)}</h2>
      </div>
      <p class="hint" style="margin:-6px 0 14px;">
        ${a?"לאישור שזה אתם, הזינו את מספר הטלפון שנרשם.":"לא רשום לכם עדיין טלפון. הזינו אחד — כך תוכלו להיכנס לחשבון שלכם מכל מכשיר."}
      </p>
      <div class="field">
        <label for="wc-phone">מספר טלפון</label>
        <input class="input ltr lg" id="wc-phone" type="tel" inputmode="tel" maxlength="20" autocomplete="tel"
          placeholder="050-0000000"
          aria-label="מספר הטלפון שלי">
        <p class="lock-err" data-ref="wcerr" role="status"></p>
      </div>
      <button class="btn primary block" data-ref="go">כניסה לחשבון שלי</button>
      ${t.id===e.managerId?Xi(e,"מנהלי הקבוצה? כניסה בסיסמת המנהל במקום הטלפון"):""}
      <button class="join-skip" data-ref="back">חזרה לרשימת השמות</button>
    `),n=m('[data-act="mgr-login"]',s.el);n&&n.addEventListener("click",l=>{l.stopPropagation(),s.close(),ql(e)});const o=m("#wc-phone",s.el),i=m('[data-ref="wcerr"]',s.el);setTimeout(()=>o.focus(),250),m('[data-ref="back"]',s.el).addEventListener("click",()=>s.close()),m('[data-ref="go"]',s.el).addEventListener("click",async()=>{const l=o.value.trim();if(i.textContent="",!Logic.validatePhone(l)){i.textContent="מספר הטלפון אינו תקין — למשל 050-0000000";return}const d=m('[data-ref="go"]',s.el);d.disabled=!0,d.textContent="בודקים…";try{if(a){if(!Mn(t,l)){i.textContent="המספר אינו תואם לשם שנבחר. אם זה המספר שלכם — פנו למנהל הקבוצה.",d.disabled=!1,d.textContent="כניסה לחשבון שלי";return}await tn(e,t.id)}else{const c=(e.members||[]).find(u=>u.id!==t.id&&Mn(u,l));if(c){i.textContent=`המספר הזה כבר רשום אצל ${c.name}.`,d.disabled=!1,d.textContent="כניסה לחשבון שלי";return}await Lt(e,{id:t.id,phone:Logic.normalizePhone(l)},{self:!0})}en(t.name,Logic.normalizePhone(l)),We(e.id,t.id),s.close(),S(`שלום ${t.name}, החשבון שלכם פתוח ✓`),W()}catch(c){console.error(c),d.disabled=!1,d.textContent="כניסה לחשבון שלי",i.textContent="הפעולה נכשלה — נסו שוב"}})}const Ii=[{id:"from-now",nm:"רק מעכשיו",hint:"תשתתפו רק בהוצאות שיירשמו מעכשיו."},{id:"all",nm:"גם על מה שכבר שולם",hint:"תצורפו גם להוצאות המשותפות שכבר נרשמו, והחשבון יתעדכן בהתאם. הוצאה פרטית או של חלק מהחברים לא תתחלק עליכם."}],yl=e=>Ii.find(t=>t.id===e)||Ii[0],vl=e=>!!(e&&e.stats&&e.stats.count>0&&!e.closedAt);async function ss(e,t,a){const s=[].concat(t||[]),n=new Set;let o=0;for(let i=0;i<3&&!o;i++){let l,d=e;try{l=C.getExpensesOnce?await C.getExpensesOnce(e.id):g.expenses,C.getTripOnce&&(d=await C.getTripOnce(e.id)||e)}catch(u){console.error("retro: read failed",u),o++;break}const c=Logic.retroTargets(d,l||[],s,a);if(!c.length)break;for(const u of c)try{const h=C.getExpenseOnce?await C.getExpenseOnce(e.id,u.expense.id):u.expense;if(!h)continue;const b=Logic.retroTargets(d,[h],s,a)[0];if(!b)continue;await C.saveExpense(e.id,Object.assign({},h,{parts:b.parts})),n.add(h.id)}catch(h){o++,console.error("retro: save failed",h)}}return{added:n.size,failed:o}}const ja=[{id:"direct",nm:"ישירות למי ששילם",hint:"כל חוב עובר ישירות למי ששילם עליו — הכי שקוף."},{id:"min",nm:"קיזוז — מינימום העברות",hint:"החובות מתקזזים, ומספר ההעברות קטן ככל האפשר. היתרה של כל חשבון לא משתנה."}],ra=e=>e===1?"להוצאה אחת שכבר נרשמה":`ל־${e} הוצאות שכבר נרשמו`;async function $l(e,t,a){const s=Date.now();if(t.joinFrom=s,await Lt(e,t,{self:!0}),!a)return{added:0,failed:0};const n=await ss(e,t.id,s);return n.failed||await Lt(e,{id:t.id,joinFrom:0}),n}const is=e=>e&&e.failed?" · חלק מההוצאות הקודמות לא צורפו — מנהל הקבוצה יוכל להשלים":"";async function wl(e,t,a,s){await Lt(e,Object.assign({id:t.id},a),{self:!0});const n=Number(t.joinFrom)||0;if(!s||!(n>0))return{added:0,failed:0};const o=await ss(e,t.id,n);return o.failed||await Lt(e,{id:t.id,joinFrom:0}),o}const dp={"from-now":"החשבונות שתוסיפו עכשיו ישתתפו רק בהוצאות שיירשמו מעכשיו.",all:"החשבונות שתוסיפו עכשיו יצורפו גם להוצאות המשותפות שכבר נרשמו, והמאזן של כולם יתעדכן."},kl=(e,t)=>t?dp[yl(e).id]:yl(e).hint;function Di(e,t,a){return`
      <div class="field">
        <label id="scope-lbl">${a?"מי שמוסיפים עכשיו — מה עם ההוצאות שכבר נרשמו?":"מה עם ההוצאות שכבר נרשמו בקבוצה?"}</label>
        <div class="chip-row" role="group" aria-labelledby="scope-lbl">
          ${Ii.map(s=>`<button type="button" class="chip" data-scope="${s.id}" ${t?`data-act="${t}"`:""} aria-pressed="${e===s.id}">${r(s.nm)}</button>`).join("")}
        </div>
        <p class="hint" data-ref="scopehint" ${a?'data-mgr="1"':""}>${r(kl(e,a))}</p>
      </div>`}function xl(e,t){z("[data-scope]",e).forEach(s=>s.setAttribute("aria-pressed",String(s.dataset.scope===t)));const a=m('[data-ref="scopehint"]',e);a&&(a.textContent=kl(t,!!a.dataset.mgr))}function Ll(e,t){z("[data-scope]",e).forEach(a=>a.addEventListener("click",()=>{t.scope=a.dataset.scope,xl(e,t.scope)}))}const Ri=12,El=[{v:0,nm:"חינם",txt:"ילדים אינם משלמים בקבוצה הזו."},{v:.25,nm:"רבע מחיר",txt:"ילדים נספרים כרבע ממבוגר."},{v:.5,nm:"חצי מחיר",txt:"ילדים נספרים כחצי ממבוגר."},{v:.75,nm:"שלושה רבעים",txt:"ילדים נספרים כשלושה רבעים ממבוגר."},{v:1,nm:"מחיר מלא",txt:"ילדים משלמים כמו מבוגרים."}],pp=["mangal","family"],Sl=(e,t)=>{const a=Math.trunc(Number(e));return isFinite(a)?Math.max(t,Math.min(Ri,a)):t},la=e=>Sl(e&&e.units!=null?e.units:1,1),ca=e=>Sl(e&&e.kids!=null?e.kids:0,0);function dn(e){const t=Logic.kidRateOf(e),a=El.find(s=>s.v===t);return a?a.txt:`ילדים נספרים כ־${Math.round(t*100)}% ממבוגר.`}function _l(e){const t=la(e),a=ca(e),s=t===1?"מבוגר אחד":t+" מבוגרים";return a?s+" · "+(a===1?"ילד אחד":a+" ילדים"):s}function da(e,t){const a=Math.round(Logic.headsOf(e,t)*100)/100;return a===1?"ראש אחד":a+" ראשים"}function os(e,t,a,s,n,o,i){const l=o?`data-act="${o}"`:"",d=i?`${t} בחשבון של ${i}`:t;return`
      <div class="stepper" role="group" aria-label="${r(d)}" data-stepper="${r(e)}" data-min="${s}" data-max="${n}">
        <span class="stepper-lbl" aria-hidden="true">${r(t)}</span>
        <span class="stepper-ctl" dir="ltr">
          <button type="button" class="step-btn" data-step="-1" ${l} aria-label="${r(d)} — אחד פחות" aria-disabled="${a<=s}">−</button>
          <output class="step-val num" aria-live="polite">${a}</output>
          <button type="button" class="step-btn" data-step="1" ${l} aria-label="${r(d)} — עוד אחד" aria-disabled="${a>=n}">+</button>
        </span>
      </div>`}function Tl(e,t){const a=e.closest("[data-stepper]"),s=Number(a.dataset.min),n=Number(a.dataset.max),o=Math.max(s,Math.min(n,(Number(t)||0)+Number(e.dataset.step)));return o===t?null:(m(".step-val",a).textContent=String(o),z("[data-step]",a).forEach(i=>i.setAttribute("aria-disabled",String(Number(i.dataset.step)>0?o>=n:o<=s))),o)}function pa(e,t,a){z("[data-stepper] [data-step]",e).forEach(s=>s.addEventListener("click",()=>{const n=s.closest("[data-stepper]").dataset.stepper,o=Tl(s,t[n]);o!=null&&(t[n]=o,a&&a(n,o))}))}function Aa(e,t,a,s){return`
      <div class="heads-pair">
        ${os("units","מבוגרים",t.units,1,Ri,a,s)}
        ${os("kids","ילדים",t.kids,0,Ri,a,s)}
      </div>`}function Cl(e,t,a){if(!t||!(fe(e)||t.id===pe(e.id))){S("את מספר הנפשות מעדכנים המשתתף עצמו או מנהל הקבוצה");return}const s={units:la(t),kids:ca(t)},n=()=>da(e,s),o=ge(`
      <div class="sheet-head">
        ${at(t,"lg",!0)}
        <h2 class="sheet-title">כמה ${t.id===pe(e.id)?"אתם":"בחשבון של "+r(t.name)}?</h2>
      </div>
      <p class="hint" style="margin:-6px 0 14px;">הקבוצה מתחלקת לפי ראש. בני זוג וילדים נרשמים יחד, בחשבון אחד. ${r(dn(e))}${g.expensesReady&&Logic.onlyExpenses(g.expenses).length?" השינוי יחול גם על ההוצאות שכבר נרשמו.":""}</p>
      ${Aa(e,s)}
      <p class="heads-sum" data-ref="hsum" role="status">בחשבון: ${r(n())}</p>
      <div class="sheet-foot">
        <button class="btn primary block" data-ref="save">שמירה</button>
      </div>
    `);pa(o.el,s,()=>{m('[data-ref="hsum"]',o.el).textContent="בחשבון: "+n()}),m('[data-ref="save"]',o.el).addEventListener("click",async()=>{const i=m('[data-ref="save"]',o.el);i.disabled=!0,i.textContent="שומרים…";try{await Lt(e,{id:t.id,units:s.units,kids:s.kids}),rn(),S("מספר הנפשות עודכן ✓"),W(),a&&a()}catch(l){console.error(l),i.disabled=!1,i.textContent="שמירה",S(qt(l))}})}async function up(e,t,a){if(await Me(a===1?"צירוף להוצאה שכבר נרשמה":"צירוף להוצאות שכבר נרשמו",`החשבון של ${t.name} יצורף ${a===1?"להוצאה משותפת אחת שנרשמה":"ל־"+a+" הוצאות משותפות שנרשמו"} לפני ההצטרפות, והמאזן של כולם יתעדכן. להמשיך?`,"צירוף"))try{const n=await ss(e,t.id,t.joinFrom);if(rn(),n.failed){S("הצירוף לא הושלם — נסו שוב"),W();return}await Lt(e,{id:t.id,joinFrom:0}),S(n.added?`החשבון של ${t.name} צורף ${ra(n.added)} ✓`:"לא נמצאו הוצאות לצירוף"),W()}catch(n){console.error(n),S(Fe(n,"הצירוף נכשל — נסו שוב"))}}function fp(e,t,a){const s=Object.assign({},t),n=pe(a)||"";e&&"pay"in t&&t.pay&&typeof t.pay=="object"&&!(Logic.timeMs(t.pay.updatedAt)>Logic.timeMs(e.pay&&e.pay.updatedAt))&&!Logic.samePay(t.pay,e.pay,{secure:!0})&&(s.pay=Logic.stampPay(t.pay,n||"mgr",e.pay,Date.now()));const o=e?Oe(e):"";return e&&"phone"in t&&!Logic.phonesEqual(o,t.phone||"")&&(o||Logic.phoneKey(t.phone||""))&&(s.phoneChangedAt=Date.now(),s.phoneChangedBy=n,o?delete s.phoneSet:s.phoneSet=!0),s}async function Lt(e,t,a){let s=e;if(C.getTripOnce)try{const b=await C.getTripOnce(e.id);b&&(s=b)}catch(b){console.error("fresh trip read failed",b)}const n=(s.members||[]).find(b=>b.id===t.id)||null,o=fp(n,t,e.id),i=!!(o.pay&&typeof o.pay=="object"),l="phone"in t&&!!n&&!Logic.phonesEqual(Oe(n),t.phone||""),d=i?ps(e.id,t.id):null,c=l?hp(e.id,t.id):null,u=Date.now()+600*1e3;i&&fa(e.id,t.id,Math.max(Logic.timeMs(o.pay.updatedAt),u)),l&&Pl(e.id,t.id,u);const h=b=>{const v=(b||[]).find(p=>p&&p.id===t.id)||o;return i&&fa(e.id,t.id,pn(v)||Logic.timeMs(o.pay.updatedAt)),l&&Pl(e.id,t.id,Logic.timeMs(v.phoneChangedAt)),b};try{if(C.upsertMember){const p=await C.upsertMember(e.id,o,a);return e.members=p,h(p)}const b=(s.members||[]).slice(),v=b.findIndex(p=>p.id===t.id);return v>=0?b[v]=Object.assign({},b[v],o):b.push(o),await C.updateTrip(e.id,{members:b}),e.members=b,h(b)}catch(b){throw i&&Nl(Ki,e.id,t.id,d),l&&Nl(zi,e.id,t.id,c),b}}const jl="shaveh_payseen_v1",Bi=e=>{const t=e?e.id:g.joinTripId||g.tripId,a=e||(t?g.trips.find(s=>s.id===t):null);return!!(a&&a.legacyOpen)},Ge=e=>!!(C&&C.secure)&&!Bi(e),Jt=e=>Logic.normalizePay(e&&e.pay,{secure:Ge()}),Fi=e=>Jt(e).methods.length>0,ua=e=>(Logic.PAY_METHODS.find(t=>t.id===e)||{nm:e}).nm,rs=e=>{const t=new Date(Number(e)||0);return t.getDate()+"."+(t.getMonth()+1)};function Ui(e,t,a){const s=a!==void 0?a:t&&t.pay&&t.pay.updatedBy;return!s||s===t.id?"":cl(e,t,s)}const Al=e=>Logic.payCheckAt(e,Date.now()),ls=(e,t,a)=>Logic.stampPay(e,t,a,Date.now());function Ml(){try{return JSON.parse(J.get(jl)||"{}")||{}}catch{return{}}}function Ol(e,t){const a=Ml(),s=a[e]||{};Object.keys(t).forEach(n=>{s[n]=Math.max(Number(s[n])||0,Number(t[n])||0)}),a[e]=s,J.set(jl,JSON.stringify(a))}function cs(e,t){const a={};(t||[]).forEach(s=>{const n=Math.max(Logic.timeMs(s&&s.pay&&s.pay.updatedAt),Logic.timeMs(s&&s.phoneChangedAt));s&&s.id&&n&&(a[s.id]=n)}),Object.keys(a).length&&Ol(e,a)}const Ki="shaveh_mypay_v1";function ds(){try{return JSON.parse(J.get(Ki)||"{}")||{}}catch{return{}}}function ps(e,t){const a=ds()[e];return a&&t in a?Number(a[t])||0:null}function fa(e,t,a){if(!e||!t)return;const s=ds();s[e]=Object.assign({},s[e],{[t]:Number(a)||0}),J.set(Ki,JSON.stringify(s))}const pn=e=>Number(e&&e.pay&&e.pay.updatedAt)||0,zi="shaveh_myphone_v1";function us(){try{return JSON.parse(J.get(zi)||"{}")||{}}catch{return{}}}function hp(e,t){const a=us()[e];return a&&t in a?Number(a[t])||0:null}function Pl(e,t,a){if(!e||!t)return;const s=us();s[e]=Object.assign({},s[e],{[t]:Number(a)||0}),J.set(zi,JSON.stringify(s))}function Nl(e,t,a,s){let n={};try{n=JSON.parse(J.get(e)||"{}")||{}}catch{n={}}s==null?n[t]&&delete n[t][a]:n[t]=Object.assign({},n[t],{[a]:s}),J.set(e,JSON.stringify(n))}async function qi(e,t,a,s){await Lt(e,Object.assign({id:t},s||{},a?{pay:a}:{}))}function un(e,t){const a=Ke();if(!e)delete a.pay,t&&t.declined&&(a.payRemember=!1);else{const s=Object.assign({},e);delete s.updatedAt,delete s.updatedBy,delete s.firstAt;const n=a.pay;!Ge()&&n&&n.bank&&!s.bank&&(s.bank=n.bank,(n.methods||[]).indexOf("bank")>=0&&s.methods.indexOf("bank")<0&&(s.methods=Logic.reinsertMethod(n.methods,s.methods,"bank"))),a.pay=s,delete a.payRemember}J.set(bi,JSON.stringify(a))}const Hl=()=>Ke().payRemember!==!1;function Il(e,t,a){const s=Logic.normalizePay(e,{secure:!0}),n=s.bank||{};return{methods:s.methods.filter(o=>a||o!=="bank"),phone:s.phone?Logic.fmtPhone(s.phone):t?Logic.fmtPhone(t):"",bank:{bankCode:n.bankCode||"",branch:n.branch||"",account:n.account||"",holder:n.holder||""},paypal:s.paypal||"",note:s.note||"",remember:!0,ack:"",msg:"",open:!1}}function Ji(e,t){const a=t.idp,s=f=>e.methods.indexOf(f)>=0,o=Logic.PAY_METHODS.filter(f=>t.secure||f.id!=="bank").map(f=>{const L=e.methods.indexOf(f.id);return`<button type="button" class="chip pp-chip" data-pm="${f.id}" aria-pressed="${L>=0}"
        aria-label="${r(f.nm)}${L>=0?" — העדפה "+(L+1):""}">${L>=0?`<span class="pp-ord num" aria-hidden="true">${L+1}</span>`:""}${r(f.nm)}</button>`}).join(""),i=e.bank,l=!i.bankCode||Logic.bankByCode(i.bankCode),d=Logic.BANK_GROUPS.map(f=>`
      <optgroup label="${r(f.nm)}">${Logic.BANKS.filter(L=>L.grp===f.id).map(L=>`<option value="${L.code}"${i.bankCode&&Number(i.bankCode)===Number(L.code)?" selected":""}>${r(L.nm)}${L.aka?" ("+r(L.aka)+")":""} · ${L.code}</option>`).join("")}
      </optgroup>`).join(""),c=s("bit")||s("paybox")?`
      <div class="field">
        <label for="${a}-phone">הטלפון ל${s("bit")&&s("paybox")?"ביט ולפייבוקס":s("bit")?"ביט":"פייבוקס"}</label>
        <input class="input ltr" id="${a}-phone" data-pf="phone" type="tel" inputmode="tel" maxlength="20" autocomplete="tel"
          placeholder="050-0000000" value="${r(e.phone)}">
        <p class="hint">${r(t.phoneHint||"אפשר להזין מספר אחר — למשל של בן או בת הזוג.")}</p>
      </div>`:"",u=s("bank")&&t.secure?`
      <fieldset class="pp-bank">
        <legend>פרטי החשבון להעברה בנקאית</legend>
        <div class="field">
          <label for="${a}-bank">בנק</label>
          <select class="input" id="${a}-bank" data-pf="bankCode">
            <option value="">בחירת בנק</option>
            ${l?"":`<option value="${r(i.bankCode)}" selected>${r(Logic.bankLabel(i.bankCode))}</option>`}
            ${d}
          </select>
        </div>
        <div class="form-row">
          <div class="field pp-branch">
            <label for="${a}-branch">סניף</label>
            <input class="input ltr" id="${a}-branch" data-pf="branch" inputmode="numeric" maxlength="3" autocomplete="off"
              placeholder="607" value="${r(i.branch)}">
          </div>
          <div class="field pp-account">
            <label for="${a}-account">מספר חשבון</label>
            <input class="input ltr" id="${a}-account" data-pf="account" inputmode="numeric" maxlength="34" autocomplete="off"
              spellcheck="false" placeholder="11710022" value="${r(i.account)}">
          </div>
        </div>
        <p class="hint" style="margin-top:-8px;">יש לכם IBAN? אפשר להדביק אותו בשדה מספר החשבון — הבנק והסניף יתמלאו לבד.</p>
        <div class="field">
          <label for="${a}-holder">על שם <small>(אם שונה מהשם בקבוצה)</small></label>
          <input class="input" id="${a}-holder" data-pf="holder" maxlength="40" autocomplete="name" value="${r(i.holder)}">
        </div>
        <p class="pp-readback" data-ref="ppreadback" role="status"></p>
      </fieldset>`:"",h=s("paypal")?`
      <div class="field">
        <label for="${a}-paypal">שם המשתמש ב־PayPal.Me</label>
        <input class="input ltr" id="${a}-paypal" data-pf="paypal" autocomplete="off" spellcheck="false"
          maxlength="60" placeholder="paypal.me/dana" value="${r(e.paypal)}">
      </div>`:"",b=e.methods.length?`
      <div class="field">
        <label for="${a}-note">${s("other")?"איך עוד אפשר להעביר לכם?":"הערה <small>(רשות)</small>"}</label>
        <input class="input" id="${a}-note" data-pf="note" maxlength="80" autocomplete="off"
          placeholder="${s("other")?"למשל: מזומן במפגש הבא":"למשל: עדיף עד סוף החודש"}" value="${r(e.note)}">
      </div>`:"",v=t.secure?"":t.legacyOpen?`
      <p class="pp-soon" role="note"><b>העברה בנקאית — עוד לא בקבוצה הזו.</b> הקבוצה נפתחה לפני שדרוג האבטחה, ועד סוף תקופת המעבר אפשר להיכנס אליה גם בקישורים הישנים. לכן פרטי חשבון בנק יתווספו כאן כשהתקופה תסתיים. בינתיים אפשר לבחור את שאר הדרכים.</p>`:`
      <p class="pp-soon" role="note"><b>העברה בנקאית — בקרוב.</b> פרטי חשבון בנק יתווספו כאן בקרוב, עם שמירה מאובטחת. בינתיים אפשר לבחור את שאר הדרכים.</p>`,p=t.remember?`
      <label class="pp-remember">
        <input type="checkbox" data-pf="remember"${e.remember?" checked":""}>
        <span>לזכור את הפרטים במכשיר הזה, כדי למלא אותם מראש בקבוצות הבאות
          <small>נשמר רק בדפדפן של המכשיר הזה. אפשר לבטל ולמחוק בכל רגע.</small></span>
      </label>`:"";return`
      <p class="pp-lbl" id="${a}-lbl">לפי סדר העדפה — הראשון שבוחרים יוצג כמועדף. לחיצה נוספת מסירה.</p>
      <div class="chip-row pp-chips" role="group" aria-labelledby="${a}-lbl">${o}</div>
      ${v}
      ${c}${u}${h}${b}
      <p class="pp-msg" data-ref="ppmsg" role="status">${r(e.msg||"")}</p>
      <p class="lock-err" data-ref="pperr" role="status"></p>
      ${p}
      ${mp(t.secure)}`}function mp(e){return`
      <div class="pp-privacy" role="note">
        <b><span aria-hidden="true">🔒</span> מי רואה את הפרטים?</b>
        ${e?"הפרטים מוצגים לחברי הקבוצה — ובעיקר למי שצריך להעביר לכם כסף; מספר החשבון מוצג מוסתר עד שלוחצים ״הצגה״.":"הפרטים נשמרים בקבוצה המשותפת ומוצגים לחברי הקבוצה — ובעיקר למי שצריך להעביר לכם כסף. את פרטי הבנק נאפשר רק אחרי שהשמירה המאובטחת תופעל."}
        כל שינוי בפרטים מוצג לחברי הקבוצה, כדי שאף אחד לא יוכל להחליף אותם בלי שתדעו.
        אפשר לשנות או להסיר אותם בכל רגע. השירות אינו מעביר כסף ואינו משתמש בפרטים לשום מטרה אחרת.
        <button type="button" class="linklike" data-act="legal" data-id="privacy">מדיניות הפרטיות</button>
      </div>`}function Dl(e,t){const a=m('[data-ref="ppreadback"]',e);if(!a)return;const s=t.bank,n=String(s.account||"").replace(/\D/g,"");if(!s.bankCode||!n){a.textContent="",a.className="pp-readback";return}const o=Logic.bankAccountCheck(s.bankCode,s.branch,n),i=(Logic.bankByCode(s.bankCode)||{}).nm||"הבנק";a.className="pp-readback "+(o==="bad"?"bad":o==="ok"?"ok":""),a.innerHTML=`לבדיקה: ${r(Logic.bankLabel(s.bankCode))} · סניף <span class="num">${r(String(s.branch||"").replace(/\D/g,"")||"—")}</span> · חשבון <span class="num">${r(n)}</span><small>${o==="ok"?"✓ עבר את בדיקת התקינות של "+r(i):o==="bad"?"המספר לא עבר את בדיקת התקינות של "+r(i)+" — כדאי לבדוק שוב":"לבנק הזה אין בדיקה אוטומטית — כדאי לוודא שהמספר מדויק"}</small>`}function Yi(e,t,a){const s=n=>{e.innerHTML=Ji(t,a),Yi(e,t,a);const o=n&&m(n,e);o&&o.focus()};z("[data-pm]",e).forEach(n=>n.addEventListener("click",()=>{const o=n.dataset.pm,i=t.methods.indexOf(o);i>=0?t.methods.splice(i,1):t.methods.push(o),t.ack="",t.msg="",t.touched=!0,s(`[data-pm="${o}"]`)})),z("[data-pf]",e).forEach(n=>{const o=n.dataset.pf;if(o==="remember"){n.addEventListener("change",()=>{t.remember=n.checked});return}n.addEventListener(n.tagName==="SELECT"?"change":"input",()=>{if(t.ack="",t.touched=!0,o==="account"&&Logic.looksLikeIban(n.value)){const i=Logic.parseIban(n.value);if(i){Object.assign(t.bank,i),t.msg="זוהה IBAN — הבנק, הסניף והחשבון מולאו ✓",s('[data-pf="account"]');return}const l=m('[data-ref="ppmsg"]',e);n.value.replace(/[^A-Za-z0-9]/g,"").length>=23&&l&&(l.textContent="מספר ה־IBAN אינו תקין — כדאי לבדוק שוב (23 תווים, מתחיל ב־IL)"),t.bank.account=n.value;return}o==="bankCode"||o==="branch"||o==="account"||o==="holder"?t.bank[o]=n.value:t[o]=n.value,Dl(e,t)})}),Dl(e,t)}function Rl(e,t,a){const s=Logic.validatePay(t,a),n=e&&m('[data-ref="pperr"]',e);if(n&&(n.textContent="",n.classList.remove("soft")),s.errors.length){const l=s.errors[0];n&&(n.textContent=l.msg);const d=e&&m(`[data-pf="${l.field}"]`,e);return d&&d.focus(),null}const o=s.warnings.filter(l=>l.code!=="unknown"),i=JSON.stringify([t.bank.bankCode,t.bank.branch,t.bank.account]);return o.length&&t.ack!==i?(t.ack=i,n&&(n.textContent=o.map(l=>l.msg).join(" ")+" לבדיקה — מתקנים את המספר; כדי לשמור כמו שהוא — לוחצים שוב.",n.classList.add("soft")),null):s.pay}function bp(e,t){const a=Jt(t);return a.methods.length?`<b>${r(a.methods.map(ua).join(" · "))}</b>`+(a.bank?`<small class="heads-count">${r(Logic.bankLabel(a.bank.bankCode,a.bank.bankName))} · חשבון <span class="num">${r(Logic.maskAccount(a.bank.account))}</span></small>`:""):""}function Wi(e,t,a){const s=a||{},n=t.id===pe(e.id),o=fe(e)||n&&!$r(e,t.id),i=Jt(t),l=!i.methods.length&&n&&o&&s.owed>0,d=Ui(e,t),c=Number(t.pay&&t.pay.firstAt)===Number(t.pay&&t.pay.updatedAt)?"הוגדר":"עודכן",u=t.pay&&t.pay.updatedAt?`${c} ב־<span class="num">${rs(t.pay.updatedAt)}</span>${d?" "+r(d):""}`:"";let h;const b=o&&i.methods.indexOf("bank")>=0&&Logic.payBankSuspect(i)?'<small class="heads-count pay-suspect">⚠️ מספר החשבון לא עבר את בדיקת התקינות — כדאי לבדוק ולתקן</small>':"";return i.methods.length?h=`קבלת כספים: ${bp(e,t)}${u?`<small class="heads-count">${u}</small>`:""}${b}`:n&&s.owed>0?h=`חייבים לכם ${F(s.owed,e.base)} — <b>איך נוח לכם לקבל?</b>`:h=n?'<b>איך נוח לכם לקבל כסף?</b><small class="heads-count">עוד לא הוגדר — כדאי להגדיר, כדי שיידעו לאן להעביר</small>':`קבלת כספים: <small class="heads-count">עוד לא הוגדר אצל ${r(t.name)}</small>`,`
      <div class="heads-line pay-line${s.cls?" "+s.cls:""}${l?" empty-pay":""}">
        <span class="heads-line-txt"><span class="pay-line-ic">${he("card",17)}</span> ${h}</span>
        ${o?`<button class="btn sm${l?" primary":""}" data-act="pay-prefs" data-id="${r(t.id)}"
          aria-label="${i.methods.length?"עריכת":"הגדרת"} הדרכים לקבל כסף${n?"":" של "+r(t.name)}">${i.methods.length?"עריכה":"הגדרה"}</button>`:""}
      </div>`}function Gi(e,t,a){const s=Be(e,t),n=Jt(s),o=s.name;if(!n.methods.length)return`<p class="pay-none">עוד לא הוגדר אצל ${r(o)} איך נוח לקבל כסף — כדאי לתאם ישירות.</p>`;const i=(p,f,L)=>`<button class="btn sm pay-copy" data-act="pay-copy" data-copy="${r(p)}" data-what="${r(f)}" aria-label="${r(L)}">העתקה</button>`,l=(p,f,L)=>`<div class="pay-kv"><span class="pay-k">${r(p)}</span><span class="pay-v">${f}</span>${L||""}</div>`,d=n.phone||Logic.mobileDigits(Oe(s)),c=[];let u=!1;n.methods.forEach(p=>{let f="",L=ua(p);if(p==="bit"||p==="paybox"){if(u)return;u=!0,n.methods.indexOf("bit")>=0&&n.methods.indexOf("paybox")>=0&&(L=p==="bit"?"ביט או פייבוקס":"פייבוקס או ביט"),f=d?l("טלפון",`<span class="num">${r(Logic.fmtPhone(d))}</span>`,i(d,"מספר הטלפון",`העתקת מספר הטלפון של ${o}`))+`<p class="pay-tip">לפני האישור באפליקציה — כדאי לוודא שהשם שמופיע הוא ${r(o)}.</p>`:`<p class="pay-tip">המספר אצל ${r(o)} — כדאי לתאם ישירות.</p>`}else if(p==="bank")if(!n.bank)f=`<p class="pay-tip">פרטי החשבון אצל ${r(o)}.</p>`;else{const _=n.bank.account,T=Logic.maskAccount(_),w=[n.bank.holder||o,Logic.bankLabel(n.bank.bankCode,n.bank.bankName),"סניף "+n.bank.branch,"חשבון "+_].join(`
`);f=l("בנק",r(Logic.bankLabel(n.bank.bankCode,n.bank.bankName)))+l("סניף",`<span class="num">${r(n.bank.branch)}</span>`,i(n.bank.branch,"מספר הסניף",`העתקת מספר הסניף של ${o}`))+l("חשבון",`<span class="num" data-acc>${r(T)}</span>`,`<button class="btn sm ghost pay-reveal" data-act="pay-reveal" data-full="${r(_)}" data-mask="${r(T)}" aria-pressed="false"
                aria-label="הצגת מספר החשבון המלא של ${r(o)}">הצגה</button>`+i(_,"מספר החשבון",`העתקת מספר החשבון של ${o}`))+(n.bank.holder?l("על שם",r(n.bank.holder)):"")+(Logic.payBankSuspect(n)?`<p class="pay-tip pay-tip-warn" role="note">מספר החשבון לא עבר את בדיקת התקינות — כדאי לוודא מול ${r(o)} לפני העברה.</p>`:"")+`<button class="btn sm ghost block pay-copy-all" data-act="pay-copy" data-copy="${r(w)}" data-what="כל הפרטים" aria-label="העתקת כל פרטי החשבון של ${r(o)}">העתקת כל הפרטים</button><p class="pay-tip">כדאי לוודא את הפרטים מול ${r(o)} בשיחה או בהודעה — במיוחד בסכום גבוה.</p>`}else if(p==="cash")f=`<p class="pay-tip">בתיאום ישיר עם ${r(o)}.</p>`;else if(p==="paypal"){if(!n.paypal)return;const _=Logic.dec(e.base),T=a>0?"/"+Logic.fromCents(a,_).toFixed(_)+e.base:"";f=`<a class="btn sm" href="${r("https://paypal.me/"+encodeURIComponent(n.paypal)+T)}" target="_blank" rel="noopener">פתיחה ב־PayPal</a>`}else p==="other"&&(f=`<p class="pay-tip">${r(n.note||"בתיאום ישיר")}</p>`);c.push(`<li class="pay-item"><div class="pay-item-head"><span class="pay-ord num" aria-hidden="true">${c.length+1}</span><b>${r(L)}</b></div>${f}</li>`)});const h=Al(s),b=h&&h!==Number(s.pay&&s.pay.updatedAt),v=Ui(e,s,b?s.phoneChangedBy:void 0);return`
      ${h?`<div class="banner warn pay-recent" role="status">${b?`מספר הטלפון של ${r(o)} הוחלף`:`פרטי התשלום של ${r(o)} עודכנו`} ב־<span class="num">${rs(h)}</span>${v?" · "+r(v):""} — לפני העברה כדאי לוודא אותם מול ${r(o)}.</div>`:""}
      <p class="pay-how-ttl">הדרכים להעביר ל${r(o)}, לפי סדר העדפה</p>
      <ol class="pay-how">${c.join("")}</ol>
      ${n.note&&n.methods.indexOf("other")<0?`<p class="pay-tip">הערה: ${r(n.note)}</p>`:""}`}async function fs(e,t){try{await navigator.clipboard.writeText(e),S(t);return}catch{}const a=document.createElement("textarea");a.value=e,a.setAttribute("readonly",""),a.style.cssText="position:fixed;opacity:0;top:0;right:0",document.body.appendChild(a),a.select();let s=!1;try{s=document.execCommand("copy")}catch{s=!1}a.remove(),S(s?t:"ההעתקה לא הצליחה — אפשר לסמן ולהעתיק ידנית")}function gp(e,t){if(!t)return"";const a=Ml()[e.id]||{},s={pay:ds()[e.id]||{},phone:us()[e.id]||{}},n=Logic.payChangesToNotify(e.members||[],a,t.id,Date.now(),{wrote:s,since:Number(t.joinFrom)||0});if(!n.length)return"";const o=n.map(l=>{const d=Be(e,l.id),c=Ui(e,d,l.by),u=`ב־${Oi(l.at)}${c?" · "+r(c):""}`;return l.phone?`<li>${l.phoneSet?l.mine?"נקבע מספר טלפון לשם <b>שלכם</b>":`נקבע מספר טלפון לשם <b>${r(d.name)}</b>`:l.mine?"מספר הטלפון <b>שלכם</b> הוחלף":`מספר הטלפון של <b>${r(d.name)}</b> הוחלף`} ${u}.</li>`:l.mine?`<li>פרטי התשלום <b>שלכם</b> ${l.removed?"הוסרו":"עודכנו"} ${u} — כדאי לבדוק שהם נכונים.
            <button class="btn sm" data-act="pay-prefs" data-id="${r(d.id)}">בדיקה</button></li>`:`<li>פרטי התשלום של <b>${r(d.name)}</b> ${l.removed?"הוסרו":"עודכנו"} ${u}.</li>`}).join(""),i=n.map(l=>l.id+":"+l.at).join(",");return`
      <div class="banner warn pay-notice" role="status">
        <b>עדכון בפרטי תשלום</b>
        <ul>${o}</ul>
        ${n.some(l=>!l.mine)?"<p>לפני העברת כסף — כדאי לוודא את הפרטים החדשים מול מי שמקבל אותו.</p>":""}
        <button class="btn sm" data-act="pay-seen" data-ids="${r(i)}">ראיתי</button>
      </div>`}function yp(e,t){if(!t||t.ghost)return"";const a=(e.members||[]).find(d=>d.id===t.id);if(!a)return"";const s=ps(e.id,a.id);if(s==null)return fa(e.id,a.id,pn(a)),"";if(!Logic.payChangedElsewhere(a.pay,a.id,s))return"";const n=Jt(a),o=Ke(),i=!!(o.pay&&Logic.normalizePay(o.pay,{secure:Ge()}).methods.length)&&!Logic.samePay(Logic.normalizePay(o.pay,{secure:Ge()}),a.pay,{secure:Ge(),memberPhone:Oe(a)}),l=n.methods.length?`עכשיו מוצג: ${r(n.methods.map(ua).join(" · "))}${n.bank?` · חשבון <span class="num">${r(Logic.maskAccount(n.bank.account))}</span>`:""}.`:"עכשיו לא מוצגת שום דרך לקבל כסף.";return`
      <div class="banner warn pay-device" role="alert">
        <b>פרטי התשלום שלכם שונו ממכשיר אחר — זה אתם?</b>
        <p>השינוי נעשה ב־<span class="num">${rs(a.pay.updatedAt)}</span> בשמכם, לא מהמכשיר הזה. ${l}</p>
        <div class="pay-device-acts">
          <button class="btn sm" data-act="mypay-ok">כן, זה אני</button>
          ${i?'<button class="btn sm primary" data-act="mypay-restore">החזרה מהפרופיל</button>':""}
          <button class="btn sm${i?"":" primary"}" data-act="pay-prefs" data-id="${r(a.id)}">בדיקה ועריכה</button>
        </div>
      </div>`}function vp(e,t){if(!t||t.ghost||!Qa(e)||It()||Qt(e.id,t.id))return"";if(e.managerId===t.id){if(fe(e))return"";const n=!!(e.hasMgrPass||e.mgrPass);return`
      <div class="banner warn device-key mgr-key-banner" role="status" data-ref="devicekey">
        <b>המכשיר הזה עדיין לא מאומת כמכשיר של מנהל הקבוצה</b>
        <p>לכן פרטי ההוצאות מוסתרים כאן ופעולות הניהול אינן זמינות. הן פתוחות מהמכשיר שפתח את הקבוצה${n?", או כאן — אחרי כניסה בסיסמת המנהל":""}.</p>
        ${n?'<button class="btn sm" data-act="mgr-login">כניסה בסיסמת המנהל</button>':'<p>כדי לנהל גם מכאן — קובעים סיסמת מנהל בהגדרות הקבוצה, במכשיר שפתח אותה, ונכנסים בה כאן. אין גישה למכשיר ההוא? מפעיל השירות יכול לקבוע לקבוצה סיסמה זמנית. <button type="button" class="linklike" data-help-open="article" data-help-id="lost-manager-access">איך משחזרים ניהול</button></p>'}
      </div>`}if(!$r(e,t.id))return"";const a=(e.members||[]).find(n=>n.id===e.managerId&&n.id!==t.id),s=`שלום, אפשר בבקשה לאפס את ״המכשיר המחובר״ לחשבון של ${t.name} בקבוצה ״${e.name}״ בשווה בשווה? (הגדרות הקבוצה ← המשתתף ← איפוס המכשיר המחובר). תודה!`;return`
      <div class="banner warn device-key" role="status" data-ref="devicekey">
        <b>החשבון שלכם מחובר למכשיר אחר</b>
        <p>כדי לעדכן מכאן את פרטי התשלום ולערוך את ההוצאות שלכם, מנהל הקבוצה צריך לאפס את המכשיר המחובר. אחרי האיפוס המכשיר הזה יתחבר מחדש מעצמו.</p>
        ${a&&aa(a)?`<a class="btn sm wa soft" data-ref="askreset" href="${r(ea(Oe(a),s))}" target="_blank" rel="noopener">${he("chat",16)} בקשה מ${r(a.name)} בוואטסאפ</a>`:""}
      </div>`}async function $p(e){const t=pe(e.id),a=(e.members||[]).find(i=>i.id===t),s=Ke();if(!a||!s.pay)return;const n=Logic.normalizePay(s.pay,{secure:Ge()}),o={methods:n.methods};["phone","bank","paypal","note"].forEach(i=>{n[i]&&(o[i]=n[i])});try{await qi(e,a.id,ls(o,t,a.pay)),S("פרטי התשלום הוחזרו מהפרופיל במכשיר ✓"),W()}catch(i){console.error(i),S(Fe(i,"השמירה נכשלה — נסו שוב"))}}let fn=null;function wp(e){if(!e){fn=null;return}const t={};(e.members||[]).forEach(u=>{t[u.id]=Math.max(Number(u.pay&&u.pay.updatedAt)||0,Logic.timeMs(u.phoneChangedAt))});const a=fn&&fn.tripId===e.id?fn.map:null;if(fn={tripId:e.id,map:t},!a)return;const s=pe(e.id),n={pay:ds()[e.id]||{},phone:us()[e.id]||{}},o=u=>t[u.id]>(a[u.id]||0),i=u=>u.id===s&&Logic.payChangedElsewhere(u.pay,u.id,ps(e.id,u.id)),l=Logic.payChangesToNotify((e.members||[]).filter(o),a,s,Date.now(),{wrote:n}).map(u=>Object.assign({m:Be(e,u.id)},u));if((e.members||[]).filter(u=>o(u)&&i(u)&&!l.some(h=>h.id===u.id)).forEach(u=>l.push({m:u,id:u.id,elsewhere:!0})),!l.length)return;const d=l[l.length-1],c=d.elsewhere||d.mine&&!d.phone&&i(d.m)?"פרטי התשלום שלכם שונו ממכשיר אחר — זה אתם?":d.phone?d.mine?"מספר הטלפון שלכם בקבוצה השתנה — כדאי לבדוק":`מספר הטלפון של ${d.m.name} השתנה — כדאי לוודא לפני העברה`:d.mine?"פרטי התשלום שלכם עודכנו בקבוצה — כדאי לבדוק שהם נכונים":`פרטי התשלום של ${d.m.name} עודכנו — כדאי לוודא לפני העברה`;S(c),Ar(e.name,c)}function Bl(e,t,a){const s=pe(e.id);if(!t||!(fe(e)||t.id===s)){S("את פרטי התשלום מעדכנים המשתתף עצמו או מנהל הקבוצה");return}const n=t.id===s,o=Ke(),i=t.pay&&Array.isArray(t.pay.methods)&&t.pay.methods.length?t.pay:null,l=Il(i||(n?o.pay:null),Oe(t),Ge(e));l.remember=n&&Hl();const d={secure:Ge(e),legacyOpen:Bi(e),idp:"pps",remember:n,phoneHint:aa(t)?"ממולא מהטלפון שנרשם. אפשר להזין מספר אחר — למשל של בן או בת הזוג.":"מספר נייד שרשום בביט או בפייבוקס."},c=ge(`
      <div class="sheet-head">
        ${at(t,"lg",!0)}
        <h2 class="sheet-title">${n?"איך נוח לכם לקבל כסף?":"איך נוח ל"+r(t.name)+" לקבל כסף?"}</h2>
      </div>
      <p class="pp-lead">כשמישהו בקבוצה צריך להעביר ${n?"לכם":"ל"+r(t.name)} כסף — זה מה שיוצג בהעברה, עם כפתורי העתקה. לא חובה, ואפשר לשנות בכל רגע.</p>
      ${n?"":`<div class="banner" role="note">הזנה עבור ${r(t.name)}: השינוי יוצג לחברי הקבוצה כ״עודכן על ידי ${r(s?me(e,s):"מנהל הקבוצה")}״. כדאי לוודא את הפרטים מול ${r(t.name)}.</div>`}
      <div class="pp-box" data-pp="sheet">${Ji(l,d)}</div>
      <button class="btn primary block" data-ref="save">שמירה</button>
      ${i?'<button class="btn ghost block" data-ref="ppclear" style="margin-top:10px;">הסרת פרטי התשלום מהקבוצה</button>':""}
      ${n&&o.pay?'<p style="text-align:center;margin:4px 0 0;"><button class="linklike" data-ref="ppforget">מחיקת הפרטים השמורים במכשיר הזה</button></p>':""}
    `),u=m('[data-pp="sheet"]',c.el);Yi(u,l,d);const h=f=>{n&&(l.remember?f.methods.length&&un(f):un(null,{declined:!0}))},b=async(f,L)=>{const _=m('[data-ref="save"]',c.el);_.disabled=!0,_.textContent="שומרים…";try{await qi(e,t.id,ls(f,s,t.pay)),h(f),rn(),S(L),W(),a&&a()}catch(T){console.error(T),_.disabled=!1,_.textContent="שמירה",S(Fe(T,"השמירה נכשלה — נסו שוב"))}};m('[data-ref="save"]',c.el).addEventListener("click",()=>{const f=Rl(u,l,{secure:Ge(),memberPhone:Oe(t)});if(!f)return;if(Logic.samePay(f,t.pay,{secure:Ge(),memberPhone:Oe(t)})){h(f),rn(),S("לא היה שינוי בפרטי התשלום");return}const L=!(t.pay&&Number(t.pay.updatedAt)>0);b(f,f.methods.length?L?"פרטי התשלום נשמרו ✓":"פרטי התשלום נשמרו ✓ — חברי הקבוצה יראו שהם עודכנו":"פרטי התשלום הוסרו מהקבוצה")});const v=m('[data-ref="ppclear"]',c.el);v&&v.addEventListener("click",async()=>{await Me("הסרת פרטי התשלום","הדרכים לקבל כסף יוסרו מהקבוצה, וחברי הקבוצה יראו הודעה על השינוי. להמשיך?","הסרה",!0)&&(l.methods=[],b({methods:[]},"פרטי התשלום הוסרו מהקבוצה"))});const p=m('[data-ref="ppforget"]',c.el);p&&p.addEventListener("click",()=>{un(null,{declined:!0}),l.remember=!1;const f=m('[data-pf="remember"]',c.el);f&&(f.checked=!1),p.remove(),S("הפרטים נמחקו מהמכשיר הזה ✓")})}const Fl=()=>({secure:Ge(),legacyOpen:Bi(),idp:"jp",remember:!0,phoneHint:"ריק — ישמש מספר הטלפון שהזנתם למעלה. אפשר להזין מספר אחר."});function kp(e){const t=e.pay;return`
      <div class="pp-join">
        <button type="button" class="pp-toggle" data-act="jpay-toggle" aria-expanded="${t.open}"${t.open?' aria-controls="jpay-body"':""}>
          <span class="pp-toggle-ic" aria-hidden="true">${t.open?"−":"+"}</span>
          <span>איך נוח לכם לקבל כסף? <small>(רשות)</small>${!t.open&&t.methods.length?`<small class="pp-toggle-sel">נבחרו: ${r(t.methods.filter(a=>Ge()||a!=="bank").map(ua).join(" · "))} — יישמרו בהצטרפות</small>`:""}</span>
        </button>
        ${t.open?`<div class="pp-box" id="jpay-body" data-pp="join">${Ji(t,Fl())}</div>`:""}
      </div>`}function xp(e){const t=m('[data-pp="join"]',e);t&&Te&&Te.pay&&Yi(t,Te.pay,Fl())}let Te=null;function Vi(e){if(!Te||Te.tripId!==e.id){Te={tripId:e.id,scope:"from-now",units:1,kids:0,touched:!1,name:null,phone:null};const t=Ke();Te.pay=Il(t.pay||null,"",Ge(e)),Te.pay.phone=t.pay&&t.pay.phone?Logic.fmtPhone(t.pay.phone):"",Te.pay.open=!!(t.pay&&(t.pay.methods||[]).length),Te.pay.remember=Hl()}return Te}function Lp(e){if(!Te)return;const t=e.closest("[data-stepper]").dataset.stepper,a=Tl(e,Te[t]);a!=null&&(Te[t]=a,Te.touched=!0)}document.addEventListener("input",e=>{const t=e.target;!Te||!t||(t.id==="j-name"?Te.name=t.value:t.id==="j-id"&&(Te.phone=t.value))});function Ep(e){if(!e)return g.ready?!g.shared&&!g.cloud?`
          <div class="join-wrap">
            <div class="join-hero rise">
              <div class="join-flag" aria-hidden="true">🔌</div>
              <p class="join-eyebrow">כמעט שם</p>
              <h1 class="join-name">הקבוצה המשותפת עדיין לא הופעלה</h1>
              <p class="join-meta">
                הקבוצה קיימת — אבל היא שמורה כרגע רק במכשיר של מי ששלח לכם את הקישור,
                ולכן אי אפשר להיכנס אליו מכאן.
              </p>
            </div>
            <div class="join-card rise" style="animation-delay:100ms">
              <h2 class="join-card-title">מה עושים?</h2>
              <p style="color:var(--ink-2); font-size:14.5px; margin:0 0 14px;">
                בקשו ממי ששלח לכם את הקישור להיכנס באפליקציה אל
                <b>🗂️ אזור הניהול ← חיבור קבוצה משותפת</b>, ולשלוח לכם קישור חדש.
                זו פעולה חד־פעמית של כשלוש דקות, והיא מה שמאפשר לכולם לרשום יחד.
              </p>
              <button class="btn primary block" data-act="join-skip">כניסה לאפליקציה</button>
            </div>
          </div>`:`
        <div class="join-wrap">
          <div class="join-hero rise">
            <div class="join-flag" aria-hidden="true">🧭</div>
            <p class="join-eyebrow">הקישור לא נמצא</p>
            <h1 class="join-name">הקבוצה הזו כבר לא קיימת</h1>
            <p class="join-meta">ייתכן שהקישור ישן, או שהקבוצה נמחקה. בקשו מהחברים קישור עדכני.</p>
          </div>
          <button class="btn primary block" data-act="join-skip">מעבר לאפליקציה</button>
        </div>`:`
          <div class="join-wrap">
            <div class="join-hero">
              <div class="join-flag skeleton" aria-hidden="true"></div>
              <p class="join-eyebrow">רק רגע…</p>
              <h1 class="join-name">טוענים את פרטי הקבוצה</h1>
            </div>
          </div>`;const t=e.members||[],a=e.start?`${_e(e.start)}–${_e(e.end||e.start)}`:"",s=[e.dest,a].filter(Boolean),n=qe(e).id==="trip"?wi(e.dest):null,o=Vi(e),i=vl(e),l=Logic.splitsByHead(e);return`
      <div class="join-wrap" data-join-trip="${r(e.id)}" style="${ki(e)}">
        ${n?`<div class="join-photo rise" style="background-image:url('${r(n)}')" role="img" aria-label="תמונה של ${r(e.dest||e.name)}"></div>`:""}
        <div class="join-hero rise">
          ${Ut(e)?`<div class="join-brand">${Zn(Ut(e),"join-brand-logo")}<span>באדיבות ${r(Ut(e).name)}</span></div>`:""}
          <div class="join-flag" aria-hidden="true">${r(Xe(e))}</div>
          <p class="join-eyebrow">הוזמנתם להצטרף אל</p>
          <h1 class="join-name">${r(e.name)}</h1>
          ${s.length?`<p class="join-meta">${s.map(d=>`<span class="num">${r(d)}</span>`).join(" · ")}</p>`:""}
        </div>

        ${t.length?`
          <div class="join-crew rise" style="animation-delay:70ms">
            <p class="join-crew-lbl">${Pe(t.length,"משתתף אחד כבר בקבוצה","משתתפים כבר בקבוצה")}</p>
            <div class="join-crew-list">
              ${t.map(d=>`<span class="join-crew-item">${at(d,"",!0)}${r(d.name)}</span>`).join("")}
            </div>
          </div>`:""}

        <div class="join-card rise" style="animation-delay:140ms">
          <h2 class="join-card-title">הפרטים שלכם</h2>
          <div class="field">
            <label for="j-name">השם שלכם</label>
            <input class="input" id="j-name" maxlength="24" autocomplete="name" placeholder="כך תופיעו בקבוצה"
              value="${r(o.name!=null?o.name:Ke().name||"")}">
          </div>
          <div class="field">
            <label for="j-id">מספר טלפון</label>
            <input class="input ltr lg" id="j-id" type="tel" inputmode="tel" maxlength="20" autocomplete="tel"
              placeholder="050-0000000" aria-label="מספר הטלפון שלי"
              value="${r(o.phone!=null?o.phone:Ke().phone||"")}">
            <p class="hint">זהו המפתח לחשבון שלכם בקבוצה — מי שכבר רשום יזוהה לפיו.</p>
          </div>
          ${l?`
          <div class="field">
            <label>כמה אתם?</label>
            ${Aa(e,o,"jstep")}
            <p class="hint">הקבוצה מתחלקת לפי ראש. בני זוג וילדים נרשמים יחד, בחשבון אחד. ${r(dn(e))}</p>
          </div>`:""}
          ${i?Di(o.scope,"jscope"):""}
          ${kp(o)}
          <p class="lock-err" data-ref="joinerr" role="status"></p>
          <button class="btn primary block" data-act="join-submit">✓ &nbsp;הצטרפות לקבוצה</button>
          <p class="hint" style="text-align:center;margin-top:10px;">בהצטרפות אתם מאשרים את
            <button class="linklike" data-act="legal" data-id="terms">התקנון</button> ואת
            <button class="linklike" data-act="legal" data-id="privacy">מדיניות הפרטיות</button>.</p>
        </div>

        <button class="join-skip" data-act="join-skip">כבר רשומים? בחרו את השם שלכם</button>
        ${Xi(e)}
      </div>`}async function Sp(){const e=g.trips.find(c=>c.id===g.joinTripId);if(!e)return;const t=m("#j-name"),a=m("#j-id"),s=m('[data-ref="joinerr"]'),n=t&&t.value.trim()||"",o=a&&a.value.trim()||"";if(s&&(s.textContent=""),!n){s&&(s.textContent="נא להזין את השם שלכם"),t&&t.focus();return}if(!Logic.validatePhone(o)){s&&(s.textContent="מספר הטלפון אינו תקין — למשל 050-0000000"),a&&a.focus();return}const i=Vi(e).pay;let l=null;if(i&&i.methods.length){const c={secure:Ge(e),memberPhone:o};if(!i.open){const u=Logic.validatePay(i,c);(u.errors.length||u.warnings.some(h=>h.code!=="unknown"))&&(i.open=!0,document.activeElement&&document.activeElement.blur&&document.activeElement.blur(),W())}if(l=Rl(m('[data-pp="join"]'),i,c),!l){const u=m('[data-ref="joinerr"]');u&&(u.textContent="נא לבדוק את פרטי קבלת הכסף למעלה");return}}const d=m('[data-act="join-submit"]');d&&(d.disabled=!0,d.textContent="מצטרפים…");try{let c=e;if(C.getTripOnce){const I=await C.getTripOnce(e.id);I&&(c=I)}const u=c.members||[],h=Logic.normalizePhone(o);en(n,h),i&&!i.remember?un(null,{declined:!0}):l&&un(l);const b=(I,R)=>l?{pay:ls(l,I,R)}:{},v=async I=>{if(!l)return"keep";const R={secure:Ge(e),memberPhone:Oe(I)||h};if(Logic.samePay(l,I.pay,R))return"same";const re=Jt(I);return re.methods.length?i.touched&&await Me("פרטי התשלום בקבוצה",`לקבוצה הזו כבר יש לכם פרטי תשלום (${re.methods.map(ua).join(" · ")}). להחליף אותם במה שבחרתם עכשיו (${l.methods.map(ua).join(" · ")})? חברי הקבוצה יראו שהפרטים עודכנו.`,"החלפה")?"write":"keep":"write"},p=u.filter(I=>Logic.phonesEqual(Oe(I),h))[0];if(p){if(!await Kl(n,p)){d&&(d.disabled=!1,d.innerHTML="✓ &nbsp;הצטרפות לקבוצה"),s&&(s.textContent=`המספר רשום בקבוצה על שם ${p.name}. אם זה לא המספר שלכם — בדקו אותו והזינו שוב.`),a&&a.focus();return}await tn(e,p.id);const I=await v(p);I==="write"?await qi(e,p.id,b(p.id,p.pay).pay):ps(e.id,p.id)==null&&fa(e.id,p.id,pn(p)),We(e.id,p.id),g.joinTripId=null,Te=null,ga(),ht(e.id),S(`שלום ${p.name}, החשבון שלכם פתוח ✓`+(I==="write"?" — פרטי התשלום עודכנו":I==="keep"&&l&&Fi(p)?" — פרטי התשלום שלכם בקבוצה נשארו כפי שהיו":""));return}const f=Vi(e),_=Logic.splitsByHead(c)?{units:f.units,kids:f.kids}:{},T=vl(c)&&f.scope==="all",w=u.find(I=>I.name===n&&!aa(I));if(w){const R=await v(w)==="write"?b(w.id,w.pay):{};R.pay||fa(e.id,w.id,pn(w));const re=await wl(e,w,Object.assign({phone:h},f.touched?_:{},R),T);cs(e.id,u),We(e.id,w.id),g.joinTripId=null,Te=null,ga(),ht(e.id),S((re.added?`שלום ${n}, החשבון שלכם פתוח ✓ — צורפתם גם ${ra(re.added)}`:`שלום ${n}, החשבון שלכם פתוח ✓`)+is(re));return}if(u.filter(I=>I.name===n&&aa(I))[0]){d&&(d.disabled=!1,d.innerHTML="✓ &nbsp;הצטרפות לקבוצה"),s&&(s.textContent="קיים כבר משתתף בשם הזה. אם זה אתם — הזינו את הטלפון שנרשם; אחרת בחרו שם אחר.");return}const A=it("m"),D=Object.assign({id:A,name:n,phone:h,color:Ze[u.length%Ze.length]},_,b(A));D.pay||fa(e.id,A,0);const U=await $l(e,D,T);cs(e.id,u),We(e.id,D.id),g.joinTripId=null,Te=null,ga(),ht(e.id),S((U.added?`ברוכים הבאים, ${n}! צורפתם גם ${ra(U.added)} ${qe(e).ic}`:`ברוכים הבאים, ${n}! ${qe(e).ic}`)+is(U)),setTimeout(zr,200)}catch(c){console.error(c),d&&(d.disabled=!1,d.innerHTML="✓ &nbsp;הצטרפות לקבוצה"),s&&(s.textContent=c&&c.code==="conflict"?"המספר הזה כבר רשום בקבוצה — לחצו שוב כדי להיכנס לחשבון הקיים":c&&c.code==="denied"?"הקישור אינו תקף עוד — בקשו מהחברים קישור הזמנה חדש":"ההצטרפות נכשלה — נסו שוב")}}const Ul=e=>String(e||"").normalize("NFKC").replace(/[\u0591-\u05C7"'׳״.\-]/g,"").replace(/\s+/g," ").trim().toLowerCase();function _p(e,t){const a=Ul(e),s=Ul(t);if(!a||!s||a===s)return!0;const n=a.split(" ")[0],o=s.split(" ")[0];return n===o&&(a===n||s===o)}async function Kl(e,t){return _p(e,t.name)?!0:Me("המספר כבר רשום בקבוצה",`מספר הטלפון הזה רשום בקבוצה על שם ${t.name}. זה אתם? אם לא — כדאי לבדוק שהמספר הוקלד נכון.`,`כן, אני ${t.name}`)}async function Tp(e,t){try{let a=!1;if(C.managerLogin)a=await C.managerLogin(e.id,t);else{const n=await yr(e.id,t);a=n===e.mgrPass,a&&gr(e.id,n)}if(!a)return"wrong";const s=lt()[e.id];return s&&[e,g.trips.find(n=>n.id===e.id)].forEach(n=>{n&&(n.ownerToken=s)}),!ui(e)&&e.managerId&&(e.members||[]).some(n=>n.id===e.managerId)&&We(e.id,e.managerId),"ok"}catch(a){return console.error(a),a&&a.code==="rate"?"rate":"error"}}const Cp={wrong:"הסיסמה שגויה — נסו שוב",rate:"יותר מדי ניסיונות — נסו שוב בעוד רבע שעה",error:"לא הצלחנו לבדוק כרגע — נסו שוב"};function zl(e,t){const a=m('[data-ref="mgrlogin"]',t.el);if(!a)return;const s=m("#mgr-pass",t.el),n=m('[data-ref="mgrerr"]',t.el),o=async()=>{if(n.textContent="",!s.value.trim()){n.textContent="נא להזין את סיסמת המנהל",s.focus();return}a.disabled=!0;const i=await Tp(e,s.value.trim());if(a.disabled=!1,i==="ok"){t.close(),S("ניהול הקבוצה נפתח במכשיר זה ✓"),g.joinTripId===e.id&&(g.joinTripId=null,Te=null,ga()),g.tripId!==e.id?ht(e.id):W();return}n.textContent=Cp[i],i==="wrong"&&(s.value="",s.focus())};a.addEventListener("click",o),s.addEventListener("keydown",i=>{i.key==="Enter"&&(i.preventDefault(),o())})}function ql(e){if(!hi(e)){S("לקבוצה הזו עוד לא נקבעה סיסמת מנהל — קובעים אותה בהגדרות, במכשיר שפתח את הקבוצה");return}const t=ge(`
      <div class="sheet-head"><h2 class="sheet-title">כניסה בסיסמת מנהל</h2></div>
      <p class="hint" style="margin:-6px 0 14px;">הסיסמה שנקבעה בהגדרות הקבוצה פותחת את הניהול גם במכשיר הזה.</p>
      <div class="field">
        <label for="mgr-pass">סיסמת מנהל הקבוצה</label>
        <input class="input ltr" id="mgr-pass" type="password" autocomplete="current-password" maxlength="24">
        <p class="lock-err" data-ref="mgrerr" role="status"></p>
      </div>
      <div class="sheet-foot">
        <button class="btn primary block" data-ref="mgrlogin">כניסה לניהול הקבוצה</button>
      </div>`,null,{compact:!0});zl(e,t),setTimeout(()=>{const a=m("#mgr-pass",t.el);a&&a.focus()},250)}const Xi=(e,t)=>hi(e)&&!fe(e)?`<button class="join-skip" data-act="mgr-login">${r(t||"מנהלי הקבוצה? כניסה בסיסמת מנהל")}</button>`:"";function Zi(e){const t=pe(e.id),a=e.members||[],s=fe(e),n=Logic.splitsByHead(e),o=g.expensesReady&&Logic.onlyExpenses(g.expenses).length>0&&!e.closedAt,i={units:1,kids:0,scope:"from-now",touched:!1},l=ge(`
      <div class="sheet-head"><h2 class="sheet-title">${s?"מעבר בין חשבונות":"כניסה לחשבון שלי"}</h2></div>
      ${s?`<div class="banner">🔑 אתם מנהלי הקבוצה — מותר לכם לעבור בין החשבונות.</div>
           <div class="chip-row" role="group" aria-label="בחירת חשבון">
             ${a.map(u=>`<button class="chip" aria-pressed="${t===u.id}" data-mgrpick="${r(u.id)}"><span class="dot" style="background:${mt(u)}"></span>${r(u.name)}</button>`).join("")}
           </div>`:`<p class="hint" style="margin:-6px 0 14px;">
             לכניסה לחשבון יש לבחור את השם ולהזין את מספר הטלפון שנרשם בהצטרפות.
           </p>
           <div class="field">
             <label for="who-select">השם שלי ברשימה</label>
             <select class="input" id="who-select">
               <option value="">בחרו את השם שלכם…</option>
               ${a.map(u=>`<option value="${r(u.id)}" ${t===u.id?"selected":""}>${r(u.name)}</option>`).join("")}
             </select>
           </div>
           <div class="field">
             <label for="who-id">מספר הטלפון שנרשם</label>
             <input class="input ltr lg" id="who-id" type="tel" inputmode="tel" maxlength="20" autocomplete="tel"
               placeholder="050-0000000" aria-label="מספר הטלפון שלי">
             <p class="lock-err" data-ref="iderr" role="status"></p>
           </div>
           <button class="btn primary block" data-ref="verify">כניסה לחשבון</button>`}
      ${!s&&(e.mgrPass||e.hasMgrPass)?`
      <div class="field" style="margin-top:18px;">
        <label for="mgr-pass">כניסת מנהל הקבוצה</label>
        <input class="input ltr" id="mgr-pass" type="password" autocomplete="current-password" maxlength="24"
          placeholder="סיסמת המנהל" aria-label="סיסמת מנהל הקבוצה">
        <p class="lock-err" data-ref="mgrerr" role="status"></p>
        <button class="btn block" data-ref="mgrlogin">🔑 &nbsp;כניסה כמנהל הקבוצה</button>
      </div>`:""}
      <div class="sheet-foot sep">
      <div class="field">
        <label for="join-name">לא ברשימה? הצטרפות כמשתתף חדש</label>
        <input class="input" id="join-name" data-ref="newname" maxlength="24" aria-label="השם שלכם" placeholder="השם שלכם">
        <input class="input ltr" data-ref="newphone" type="tel" inputmode="tel" maxlength="20" autocomplete="tel"
          style="margin-top:8px;"
          placeholder="טלפון — למשל 050-0000000" aria-label="מספר הטלפון שלי">
        ${n?`
        <div class="field" style="margin-top:14px;">
          <label>כמה אתם?</label>
          ${Aa(e,i)}
          <p class="hint">הקבוצה מתחלקת לפי ראש. בני זוג וילדים נרשמים יחד. ${r(dn(e))}</p>
        </div>`:""}
        ${o?`<div style="margin-top:14px;">${Di(i.scope)}</div>`:""}
        <button class="btn block" data-ref="joinnew" style="margin-top:8px;">הצטרפות</button>
      </div>
      </div>`);pa(l.el,i,()=>{i.touched=!0}),Ll(l.el,i),z("[data-mgrpick]",l.el).forEach(u=>u.addEventListener("click",()=>{e.ownerToken&&xa(e.id,e.ownerToken),We(e.id,u.dataset.mgrpick),l.close(),S(`עברתם לחשבון של ${me(e,u.dataset.mgrpick)}`),W()})),zl(e,l);const d=m('[data-ref="verify"]',l.el);d&&d.addEventListener("click",async()=>{const u=m("#who-select",l.el),h=m('[data-ref="iderr"]',l.el),b=m("#who-id",l.el),v=u.value;if(h.textContent="",!v){h.textContent="נא לבחור את השם שלכם";return}const p=a.find(f=>f.id===v);if(!aa(p)){h.textContent="למשתתף זה טרם נרשם מספר טלפון — פנו למנהל הקבוצה";return}d.disabled=!0,d.textContent="בודקים…";try{if(Mn(p,b.value)){await tn(e,p.id),We(e.id,p.id),l.close(),S(`שלום ${p.name}, החשבון שלכם פתוח ✓`),W();return}h.textContent="מספר הטלפון אינו תואם לשם שנבחר",b.value="",b.focus()}catch(f){console.error(f),h.textContent="הבדיקה נכשלה — נסו שוב"}d.disabled=!1,d.textContent="כניסה לחשבון"});const c=m('[data-ref="joinnew"]',l.el);c.addEventListener("click",async()=>{const u=m('[data-ref="newname"]',l.el).value.trim(),h=m('[data-ref="newphone"]',l.el).value.trim();if(!u){Ie(m('[data-ref="newname"]',l.el),"נא להזין שם");return}if(!Logic.validatePhone(h)){Ie(m('[data-ref="newphone"]',l.el),"מספר הטלפון אינו תקין — למשל 050-0000000");return}c.disabled=!0,c.textContent="מצטרפים…";try{let b=e;if(C.getTripOnce){const A=await C.getTripOnce(e.id);A&&(b=A)}const v=b.members||[],p=Logic.normalizePhone(h);en(u,p);const f=v.filter(A=>Logic.phonesEqual(Oe(A),p));if(f.length){if(!await Kl(u,f[0])){c.disabled=!1,c.textContent="הצטרפות",Ie(m('[data-ref="newphone"]',l.el),`המספר רשום בקבוצה על שם ${f[0].name}. אם זה לא המספר שלכם — בדקו אותו והזינו שוב.`);return}await tn(e,f[0].id),We(e.id,f[0].id),e.members=v,l.close(),S(`שלום ${f[0].name}, החשבון שלכם פתוח ✓`),W();return}const L=n?{units:i.units,kids:i.kids}:{},_=o&&i.scope==="all",T=v.find(A=>A.name===u&&!aa(A));if(T){const A=await wl(e,T,Object.assign({phone:p},i.touched?L:{}),_);cs(e.id,v),We(e.id,T.id),l.close(),S((A.added?`שלום ${u}, החשבון שלכם פתוח ✓ — צורפתם גם ${ra(A.added)}`:`שלום ${u}, החשבון שלכם פתוח ✓`)+is(A)),W();return}const w=Object.assign({id:it("m"),name:u,phone:p,color:Ze[v.length%Ze.length]},L),E=await $l(e,w,_);cs(e.id,v),We(e.id,w.id),l.close(),S((E.added?`ברוכים הבאים, ${u}! צורפתם גם ${ra(E.added)} ✓`:`ברוכים הבאים, ${u}! נוספתם לקבוצה ✓`)+is(E)),W()}catch(b){console.error(b),c.disabled=!1,c.textContent="הצטרפות",S("ההצטרפות נכשלה — נסו שוב")}})}function hs(e,t){if(!t||!(fe(e)||t.id===pe(e.id))){S("הפירוט האישי גלוי למשתתף עצמו ולמנהל הקבוצה");return}const a=Logic.memberBreakdown(e,g.expenses,t.id),s=a.paidTotal,n=a.shareTotal,o=a.net,i=o>0?`לקבל ${F(o,e.base)}`:o<0?`לשלם ${F(-o,e.base)}`:"מאוזן ✓",l=g.expenses.map(p=>{const f=Logic.expenseShares(e,p),L=f.shares[t.id]||0,_=p.payerId===t.id;if(!_&&!L)return"";const T=ft(e,p.category);return`
          <div class="me-line mv">
            <span class="mv-ic" aria-hidden="true">${T.ic}</span>
            <span class="mv-mid">
              <b>${r(p.note||T.nm)}</b>
              <small><span class="num">${r(_e(p.date))}</span>${_?` · שולם כאן ${F(f.total,e.base)}`:""}</small>
            </span>
            <span class="amt">${L?F(L,e.base):'<span aria-hidden="true">—</span><span class="sr-only">לא בחלוקה</span>'}</span>
          </div>`}).filter(Boolean).join(""),d=Logic.splitsByHead(e),c=fe(e),u=c||t.id===pe(e.id),h=c&&Number(t.joinFrom)>0?Logic.retroTargets(e,g.expenses,t.id,t.joinFrom).length:0,b=ge(`
      <div class="sheet-head">
        ${at(t,"lg")}
        <h2 class="sheet-title">${r(t.name)}</h2>
      </div>
      ${t.phone?`<p class="hint" style="margin:-8px 0 12px;">📞 <a href="tel:${r(String(t.phone).replace(/[^\d+]/g,""))}" style="color:var(--brand-strong);"><span class="num">${r(t.phone)}</span></a></p>`:""}
      ${d?`
      <div class="heads-line">
        <span class="heads-line-txt"><span aria-hidden="true">👨‍👩‍👧</span> <b>${r(_l(t))}</b><small class="heads-count">בחלוקה: ${r(da(e,t))}</small></span>
        ${u?`<button class="btn sm" data-act="household" data-id="${r(t.id)}" aria-label="עדכון מספר הנפשות של ${r(t.name)}">עדכון</button>`:""}
      </div>`:""}
      ${t.ghost?"":Wi(e,t,{owed:o,cls:"in-sheet"})}
      <div class="tile-grid tiles3">
        <div class="tile"><div class="lbl">שולם</div><div class="val">${F(s,e.base)}</div></div>
        <div class="tile"><div class="lbl">החלק</div><div class="val">${F(n,e.base)}</div></div>
        <div class="tile"><div class="lbl">יתרה</div><div class="val" style="color:${o>0?"var(--good)":o<0?"var(--bad)":"var(--ink)"};">${i}</div></div>
      </div>
      ${h?`
      <div class="banner" style="margin:4px 0 12px;">
        הצטרפות באמצע: ${h===1?"הוצאה משותפת אחת שנרשמה לפני ההצטרפות אינה מתחלקת":Pe(h,"","הוצאות משותפות")+" שנרשמו לפני ההצטרפות אינן מתחלקות"} על החשבון הזה.
        <button class="btn sm block" data-ref="retro" style="margin-top:10px;">${h===1?"צירוף גם להוצאה שכבר נרשמה":"צירוף גם להוצאות שכבר נרשמו"}</button>
      </div>`:""}
      <h2 class="section-title" style="margin-top:6px;">התנועות <small>הסכום — החלק בהוצאה</small></h2>
      <div class="me-lines">${l||'<p class="hint">אין עדיין תנועות למשתתף זה.</p>'}</div>
      ${il(e,t)}`),v=m('[data-ref="retro"]',b.el);v&&v.addEventListener("click",()=>up(e,t,h)),ol(b,e,t)}function jp(){return'<button class="admin-dot" data-act="admin-dot" aria-label="אזור המנהל">•</button>'}let hn=0,Jl=null,Ma=null;function Ap(){const e=m(".admin-dot");if(!e)return;const t=()=>{g.screen="admin",g.tripId=null,W()},a=()=>{Ma=setTimeout(()=>{Ma=null,t()},750)},s=()=>{Ma&&(clearTimeout(Ma),Ma=null)};e.addEventListener("pointerdown",a),["pointerup","pointerleave","pointercancel"].forEach(n=>e.addEventListener(n,s)),e.addEventListener("click",()=>{hn++,clearTimeout(Jl),Jl=setTimeout(()=>{hn=0},900),hn>=3&&(hn=0,t())})}let Qi=0,mn=null,eo=null,to=0;const Yl={};function Wl(){return g.joinTripId?"join|"+g.joinTripId:g.ready?g.tripId?"trip|"+g.tripId:g.screen:"boot"}function Gl(e){return g.joinTripId?e+"|"+(g.ready?1:0):e+(g.tripId?"|"+(g.expensesReady?1:0)+"|"+(pe(g.tripId)||""):"")}function W(){const e=m("#app");if(!e)return;const t=Wl();t!==mn&&mn&&(Yl[mn]=window.scrollY),Gl(t)===eo&&(clearTimeout(to),e.classList.remove("enter"));try{Pp(e),Op(e),Qi=0;const s=Wl();Mp(e,s,s!==mn,Gl(s))}catch(s){console.error("render failed",s),Qi++,e.innerHTML=`
        <div class="banner warn" role="status" style="margin-top:24px;">משהו השתבש בתצוגה — נסו לרענן. מה שנרשם שמור.</div>
        <div class="form-row" style="margin-top:12px;">
          <button class="btn block" data-act="reload">רענון</button>
          ${g.tripId&&Qi<3?'<button class="btn ghost block" data-act="back-home">חזרה לרשימת הקבוצות</button>':""}
        </div>`}}function Mp(e,t,a,s){if(a){mn=t;const n=t.indexOf("|")<0&&Yl[t]||0;try{window.scrollTo(0,n)}catch{}}s!==eo&&(eo=s,e.classList.add("enter"),clearTimeout(to),to=setTimeout(()=>e.classList.remove("enter"),900))}let bt=null,Vl="";function Op(e){if(bt||(bt=document.getElementById("intro")),!bt)return;const t=m("[data-ref=intro-slot]",e),a=m("[data-ref=intro-launch]",bt);if(Je.active&&!a){const n=z(".intro-faq dt",bt).find(i=>/כמה זה עולה/.test(i.textContent)),o=n&&n.nextElementSibling;o&&o.insertAdjacentHTML("afterend",`<dd class="intro-launch" data-ref="intro-launch">${In()} כרגע, בתקופת ההשקה, הכול חינם — ללא הגבלת הוצאות ובלי צורך לרכוש. המחירון למעלה ייכנס לתוקף בסיום התקופה, כפי שיוצג כאן.</dd>`)}else!Je.active&&a&&a.remove();if(t){const s=ln().length?"collapsed":"open";s!==Vl&&(Vl=s,bt.open=s==="open"),bt.hidden=!1,t.replaceWith(bt)}else bt.hidden=!0,bt.isConnected||e.insertAdjacentElement("afterend",bt)}function Pp(e){if(e.removeAttribute("aria-busy"),g.joinTripId){const t=g.ready?g.trips.find(o=>o.id===g.joinTripId):null,a=document.activeElement;if(t&&a&&e.contains(a)&&/^(INPUT|TEXTAREA|SELECT)$/.test(a.tagName)&&e.firstElementChild&&e.firstElementChild.dataset.joinTrip===t.id)return;let n=null;if(a&&e.contains(a)&&a.matches("[data-step], [data-scope], [data-pm], [data-act=jpay-toggle]")){const o=a.closest("[data-stepper]");n=o?`[data-stepper="${o.dataset.stepper}"] [data-step="${a.dataset.step}"]`:a.dataset.pm?`[data-pm="${a.dataset.pm}"]`:a.dataset.act==="jpay-toggle"?"[data-act=jpay-toggle]":`[data-scope="${a.dataset.scope}"]`}if(e.innerHTML=Ep(t),xp(e),xc(e),n){const o=m(n,e);o&&o.focus()}return}g.ready&&(g.tripId&&!tt()&&(g.unsubExp&&(g.unsubExp(),g.unsubExp=null),g.tripId=null,g.expenses=[],g.expensesReady=!1,rn()),e.innerHTML=(g.tripId?np(tt()):g.screen==="admin"?Gd():Jd())+(g.screen==="admin"?"":jp()),Ap(),xc(e))}function bn(e,t,a){const s=!!e,n=!s&&a&&a.plan&&be[a.plan]&&be[a.plan].price>0?a.plan:"";if(s&&!fe(e)){S("הגדרות הקבוצה שמורות למנהל הקבוצה");return}const o=t||qe(e);if(s&&!g.expensesReady){S("ההוצאות עדיין נטענות — נסו שוב בעוד רגע");return}const i=s?ie(e):{id:it("t"),ownerToken:it("own"),name:"",dest:"",flag:o.ic,kind:o.id,start:"",end:"",base:"ILS",rates:{},budget:0,colorIdx:g.trips.length%ba.length,members:[],created:Date.now(),stats:{count:0,totalCents:0},plan:"free",planUntil:0,vis:{exp:"mine",bal:"mine",sum:"off"},splitBy:pp.indexOf(o.id)>=0?"head":"member",kidRate:.5},l=["mangal","team","reunion","simcha"].indexOf(o.id)>=0,d=new Set;s&&g.expenses.forEach(P=>{d.add(P.payerId),Logic.partsOf(i,P).forEach(q=>d.add(q))});const c={splitBy:i.splitBy==="head"?"head":"member",kidRate:Logic.kidRateOf(i)},u={units:1,kids:0},h=s&&Logic.onlyExpenses(g.expenses).length>0,b={scope:"from-now"},v=new Set((e&&e.members||[]).map(P=>P.id)),p=ge(`
      <div class="sheet-head">
        <h2 class="sheet-title">${s?"הגדרות הקבוצה":`${o.ic} קבוצה חדשה — ${o.nm}`}</h2>
      </div>
      <div class="field">
        <label for="f-name">שם הקבוצה</label>
        <input class="input" id="f-name" maxlength="60" placeholder="למשל: ${r(o.ex)}" value="${r(i.name)}">
      </div>
      ${s?"":`
      <div class="form-row">
        <div class="field">
          <label for="f-myname">השם שלכם (מנהל הקבוצה)</label>
          <input class="input" id="f-myname" maxlength="24" autocomplete="name" placeholder="השם המלא"
            value="${r(Ke().name||"")}">
        </div>
        <div class="field">
          <label for="f-myphone">הטלפון שלכם</label>
          <input class="input ltr" id="f-myphone" type="tel" inputmode="tel" maxlength="20" autocomplete="tel"
            placeholder="050-0000000" aria-label="מספר הטלפון שלי"
            value="${r(Ke().phone||"")}">
        </div>
      </div>
      <div class="field" data-ref="myheads" ${c.splitBy==="head"?"":"hidden"}>
        <label>כמה אתם?</label>
        ${Aa(i,u)}
      </div>`}
      <div class="form-row">
        <div class="field">
          <label for="f-dest">מקום (רשות)</label>
          <input class="input" id="f-dest" maxlength="40" placeholder="עיר, אולם או מדינה" value="${r(i.dest)}">
        </div>
        <div class="field" style="flex:0 0 118px;">
          <label>סמל</label>
          <button class="input" data-ref="flagbtn" style="font-size:24px; text-align:center;" aria-label="בחירת סמל לקבוצה">${r(i.flag)}</button>
        </div>
      </div>
      <div class="field" data-ref="flaggrid" hidden>
        <div class="chip-row" role="group" aria-label="בחירת סמל לקבוצה">${(wo[o.id]||wo.other).map(P=>`<button class="chip" data-flag="${r(P)}" style="font-size:19px; padding:5px 11px;">${r(P)}</button>`).join("")}</div>
      </div>
      <div class="form-row">
        <div class="field">
          <label for="f-start">${l?"תאריך":"מתאריך"}</label>
          <input class="input" id="f-start" type="date" value="${r(i.start)}">
        </div>
        ${l?"":`
        <div class="field">
          <label for="f-end">עד תאריך</label>
          <input class="input" id="f-end" type="date" value="${r(i.end)}">
        </div>`}
      </div>
      ${s?"":`
      <div class="field">
        <label for="f-base">מטבע החישוב של הקבוצה</label>
        <select class="input" id="f-base">
          ${ma.map(P=>`<option value="${P.c}" ${P.c===i.base?"selected":""}>${r(P.n)} (${P.c})</option>`).join("")}
        </select>
        <p class="hint">כל המאזנים וההתחשבנות יחושבו במטבע הזה. בדרך כלל — שקל.</p>
      </div>`}
      ${s?`
      <div class="field">
        <label>התראות</label>
        <button class="btn block" data-ref="notifbtn" style="justify-content:space-between;">
          <span>${et()?"🔔 התראה וצליל בכל הוצאה חדשה":"🔕 ההתראות כבויות"}</span>
          <span style="color:var(--brand-strong);font-weight:800;">${et()?"פעיל":"כבוי"}</span>
        </button>
        <p class="hint">הצליל נשמע כשמישהו בקבוצה רושם הוצאה — כל עוד האפליקציה פתוחה.</p>
      </div>`:""}
      <div class="field">
        <label for="f-budget">תקציב ב־${r(i.base)} (רשות)</label>
        <input class="input ltr" id="f-budget" inputmode="decimal" aria-label="תקציב ב${r(kt(i.base).n)}" placeholder="למשל: 5,000" value="${i.budget?r(i.budget):""}">
        <p class="hint">הסכום במטבע החישוב של הקבוצה (${r(i.base)}). נציג מד התקדמות מול התקציב, ונתריע בחריגה.</p>
      </div>
      <div class="field">
        <label for="f-mgrpass">סיסמת מנהל הקבוצה ${s?'<span style="font-weight:400;color:var(--muted);">(להחלפה — משאירים ריק אם אין שינוי)</span>':'<span style="font-weight:400;color:var(--muted);">(רשות, מומלץ)</span>'}</label>
        <input class="input ltr" id="f-mgrpass" type="password" autocomplete="new-password" maxlength="24"
          placeholder="${s&&(i.mgrPass||i.hasMgrPass)?"••••••":"בחרו סיסמה קצרה"}"
          aria-label="סיסמת מנהל הקבוצה">
        <p class="hint">עם הסיסמה נכנסים לניהול הקבוצה מכל מכשיר: כל החשבונות, אישור מחיקות ובחירה מה המשתתפים רואים.</p>
      </div>
      ${s?`
      <div class="field">
        <label>מה המשתתפים רואים <span style="font-weight:400;color:var(--muted);">(המנהל תמיד רואה הכול)</span></label>
        <div style="display:flex;flex-direction:column;gap:8px;">
          ${Object.keys(Ls).map(P=>{const q=Ls[P],Z=dt(i)[P]===q.on;return`
          <button class="btn block" data-visopt="${P}" aria-pressed="${Z}" style="justify-content:space-between;">
            <span>${Z?q.lblOn:q.lblOff}</span>
            <span style="color:var(--brand-strong);font-weight:800;">${Z?"גלוי":"מוסתר"}</span>
          </button>`}).join("")}
        </div>
        <p class="hint" data-ref="vishint">ברירת המחדל: כל משתתף רואה רק את ההוצאות שלו. בקבוצה משותפת התיאור, ההערה והקבלה של הוצאות של אחרים לא נשלחים למכשיר שלו; הסכומים כן — הם נדרשים לחישוב היתרות. הסתרת המאזן והסיכום היא הסתרה בתצוגה.</p>
      </div>
      <div class="field">
        <label>מסלול הקבוצה</label>
        <div class="banner" style="margin:0 0 8px;">${Un(i,g.expenses)}</div>
        <button class="btn block" data-ref="plansbtn"><span aria-hidden="true">💳</span>&nbsp; המסלולים והמחירים</button>
      </div>`:""}
      <div class="field">
        <label id="f-split-lbl">איך מתחלקות ההוצאות?</label>
        <div class="chip-row" role="group" aria-labelledby="f-split-lbl">
          <button type="button" class="chip" data-splitby="member" aria-pressed="${c.splitBy==="member"}">שווה לכל משתתף</button>
          <button type="button" class="chip" data-splitby="head" aria-pressed="${c.splitBy==="head"}">לפי ראש — מבוגרים וילדים</button>
        </div>
        <p class="hint" data-ref="splithint"></p>
        <div data-ref="kidratebox" style="margin-top:12px;" ${c.splitBy==="head"?"":"hidden"}>
          <label id="f-kid-lbl" class="sub-label">כמה משלמים על ילד?</label>
          <div class="chip-row" role="group" aria-labelledby="f-kid-lbl">
            ${El.map(P=>`<button type="button" class="chip" data-kidrate="${P.v}" aria-pressed="${c.kidRate===P.v}">${r(P.nm)}</button>`).join("")}
          </div>
        </div>
      </div>
      <div class="field">
        <label id="f-settle-lbl">איך מתחשבנים בסוף?</label>
        <div class="chip-row" role="group" aria-labelledby="f-settle-lbl">
          ${ja.map(P=>`<button type="button" class="chip" data-settlemode="${P.id}" aria-pressed="${Logic.settleModeOf(i)===P.id}">${r(P.nm)}</button>`).join("")}
        </div>
        <p class="hint" data-ref="settlehint">${r((ja.find(P=>P.id===Logic.settleModeOf(i))||ja[0]).hint)}</p>
      </div>
      <div class="field">
        <label>${s?"המשתתפים בקבוצה":"משתתפים נוספים (רשות)"}</label>
        <div class="member-add-row">
          <input class="input" data-ref="newmember" maxlength="24" aria-label="שם המשתתף" placeholder="שם המשתתף, למשל: דוד">
          <button class="btn sm" data-ref="addmember" style="min-height:48px;">הוספה</button>
        </div>
        <div data-ref="memberlist" style="margin-top:10px;"></div>
        <p class="hint">${s?"משתתף שכבר רשום על הוצאה אינו ניתן להסרה.":"אתם נוספים אוטומטית כמנהל. את השאר הכי קל לצרף בקישור ההזמנה — מיד אחרי הפתיחה."}</p>
        ${h?`<div data-ref="addscope" hidden style="margin-top:12px;">${Di(b.scope,"",!0)}</div>`:""}
      </div>
      ${s?`
      <div class="field">
        <label>שערי המרה <span style="font-weight:400; color:var(--muted);">(1 יחידת מטבע = כמה ${r(i.base)})</span></label>
        <div data-ref="rates"></div>
        <select class="input" data-ref="addrate" aria-label="הוספת מטבע לקבוצה" style="margin-top:6px;">
          <option value="">+ הוספת מטבע לקבוצה…</option>
        </select>
        <button class="btn sm ghost block" data-ref="liverates" style="margin-top:8px;">🔄 &nbsp;עדכון לשער החי של היום</button>
        <p class="hint">השערים משמשים לחישוב כל ההוצאות במטבע זה — מומלץ לעדכן לפי החיוב בפועל בכרטיס האשראי.</p>
      </div>`:""}
      <button class="btn primary block" data-ref="save" style="margin-top:6px;">${s?"שמירת השינויים":"פתיחת הקבוצה"}</button>
      ${s?"":`<p class="hint" style="text-align:center;margin-top:10px;">בפתיחת קבוצה אתם מאשרים את
        <button class="linklike" data-act="legal" data-id="terms">התקנון</button> ואת
        <button class="linklike" data-act="legal" data-id="privacy">מדיניות הפרטיות</button>.</p>`}
      ${s&&$d(i)?'<button class="btn danger block" data-ref="deltrip" style="margin-top:10px;">מחיקת הקבוצה לצמיתות</button>':s&&fe(i)?`<p class="hint" data-ref="delhint" style="text-align:center;margin-top:12px;">🔒 ${vr}</p>`:s?'<p class="hint" style="text-align:center;margin-top:12px;">🔒 מחיקת הקבוצה שמורה למנהל.</p>':""}
    `),f=p.el,L=m('[data-ref="flagbtn"]',f),_=m('[data-ref="flaggrid"]',f);L.addEventListener("click",()=>{_.hidden=!_.hidden}),z("[data-flag]",f).forEach(P=>P.addEventListener("click",()=>{i.flag=P.dataset.flag,L.textContent=i.flag,_.hidden=!0}));const T=m('[data-ref="notifbtn"]',f);T&&T.addEventListener("click",async()=>{if(et())_a(!1),T.innerHTML='<span>🔕 ההתראות כבויות</span><span style="color:var(--brand-strong);font-weight:800;">כבוי</span>',S("ההתראות כובו");else{_a(!0),Qn(),T.innerHTML='<span>🔔 התראה וצליל בכל הוצאה חדשה</span><span style="color:var(--brand-strong);font-weight:800;">פעיל</span>';const P=await vi();S(P?"התראות פעילות 🔔 — כך הן יישמעו":"התראות פעילות בתוך האפליקציה 🔔")}});const w=m('[data-ref="plansbtn"]',f);w&&w.addEventListener("click",()=>jt(tt()||e)),i.vis=dt(i),z("[data-visopt]",f).forEach(P=>P.addEventListener("click",()=>{const q=P.dataset.visopt,Z=Ls[q];i.vis[q]=i.vis[q]===Z.on?Z.off:Z.on;const ce=i.vis[q]===Z.on;P.innerHTML=`<span>${ce?Z.lblOn:Z.lblOff}</span><span style="color:var(--brand-strong);font-weight:800;">${ce?"גלוי":"מוסתר"}</span>`,P.setAttribute("aria-pressed",String(ce))}));const E=m('[data-ref="memberlist"]',f);function A(){const P=c.splitBy==="head",q=Object.assign({},i,{kidRate:c.kidRate}),Z=G=>d.has(G.id)||s&&G.id===e.managerId?"":`<button class="xbtn" data-delmember="${r(G.id)}" aria-label="הסרת ${r(G.name)} מהקבוצה">✕</button>`;E.className=P?"hm-list":"chip-row",E.innerHTML=i.members.length?P?i.members.map(G=>`
              <div class="hm-card" data-mid="${r(G.id)}" role="group" aria-label="${r(G.name)}">
                <div class="hm-top">
                  <span class="dot" style="background:${mt(G)}"></span>
                  <b class="hm-name">${r(G.name)}</b>
                  <span class="hm-sum" data-ref="hsum">${r(da(q,G))}</span>
                  ${Z(G)}
                </div>
                ${Aa(q,{units:la(G),kids:ca(G)},"",G.name)}
              </div>`).join(""):i.members.map(G=>`<span class="chip on"><span class="dot" style="background:${mt(G)}"></span>${r(G.name)}${Z(G)}</span>`).join(""):'<span class="hint">עדיין לא נוספו משתתפים.</span>',z("[data-delmember]",E).forEach(G=>G.addEventListener("click",()=>{i.members=i.members.filter(Le=>Le.id!==G.dataset.delmember),A()})),z(".hm-card",E).forEach(G=>{const Le=i.members.find(we=>we.id===G.dataset.mid);if(!Le)return;const ee={units:la(Le),kids:ca(Le)};pa(G,ee,(we,ke)=>{Le[we]=ke,m('[data-ref="hsum"]',G).textContent=da(q,Le)})});const ce=m('[data-ref="addscope"]',f);ce&&(ce.hidden=!i.members.some(G=>!v.has(G.id)))}function D(){const P=m('[data-ref="newmember"]',f),q=P.value.trim();if(q){if(i.members.some(Z=>Z.name===q)){S("כבר קיים משתתף בשם הזה");return}i.members.push({id:it("m"),name:q,color:Ze[i.members.length%Ze.length]}),P.value="",P.focus(),A()}}m('[data-ref="addmember"]',f).addEventListener("click",D),m('[data-ref="newmember"]',f).addEventListener("keydown",P=>{P.key==="Enter"&&(P.preventDefault(),D())}),A();const U=m('[data-ref="addscope"]',f);U&&Ll(U,b);function I(){const P=c.splitBy==="head";z("[data-splitby]",f).forEach(ce=>ce.setAttribute("aria-pressed",String(ce.dataset.splitby===c.splitBy))),z("[data-kidrate]",f).forEach(ce=>ce.setAttribute("aria-pressed",String(Number(ce.dataset.kidrate)===c.kidRate))),m('[data-ref="kidratebox"]',f).hidden=!P;const q=m('[data-ref="myheads"]',f);q&&(q.hidden=!P);const Z=h&&(c.splitBy!==(e.splitBy==="head"?"head":"member")||P&&c.kidRate!==Logic.kidRateOf(e));m('[data-ref="splithint"]',f).textContent=(P?"בכל חשבון רושמים כמה מבוגרים וילדים, וההוצאות מתחלקות לפי מספר הראשים. מתאים למנגל, למפגש משפחתי ולשבת משותפת.":"חלק שווה לכל חשבון, בלי קשר למספר הנפשות.")+(Z?" השינוי יחול גם על ההוצאות שכבר נרשמו.":"")}z("[data-splitby]",f).forEach(P=>P.addEventListener("click",()=>{c.splitBy=P.dataset.splitby,I(),A()})),z("[data-kidrate]",f).forEach(P=>P.addEventListener("click",()=>{c.kidRate=Number(P.dataset.kidrate),I(),A()})),I();let R=Logic.settleModeOf(i);z("[data-settlemode]",f).forEach(P=>P.addEventListener("click",()=>{R=P.dataset.settlemode,z("[data-settlemode]",f).forEach(q=>q.setAttribute("aria-pressed",String(q.dataset.settlemode===R))),m('[data-ref="settlehint"]',f).textContent=(ja.find(q=>q.id===R)||ja[0]).hint}));const re=m('[data-ref="myheads"]',f);re&&pa(re,u);const X=m("#f-base",f);if(X&&X.addEventListener("change",()=>{const P=X.value,q=m('label[for="f-budget"]',f);q&&(q.textContent=`תקציב ב־${P} (רשות)`);const Z=m("#f-budget",f);if(Z){Z.setAttribute("aria-label",`תקציב ב${kt(P).n}`);const ce=Z.nextElementSibling;ce&&ce.classList.contains("hint")&&(ce.textContent=`הסכום במטבע החישוב של הקבוצה (${P}). נציג מד התקדמות מול התקציב, ונתריע בחריגה.`)}}),s){let Z=function(){const Le=Object.keys(i.rates||{}).filter(ee=>ee!==i.base);P.innerHTML=Le.length?Le.map(ee=>`
              <div class="rate-row">
                <span class="cur">${r(kt(ee).n)} (${r(ee)})</span>
                <input class="input" inputmode="decimal" data-rate="${r(ee)}" aria-label="שער המרה של ${r(kt(ee).n)}" value="${r(i.rates[ee])}">
                <span style="color:var(--muted);">${r(i.base)}</span>
                <button class="xbtn" data-delrate="${r(ee)}" aria-label="הסרת ${r(kt(ee).n)} מהקבוצה">✕</button>
              </div>`).join(""):'<p class="hint">כשתירשם הוצאה במטבע זר — השער יופיע כאן.</p>',q.innerHTML='<option value="">+ הוספת מטבע לקבוצה…</option>'+ma.filter(ee=>ee.c!==i.base&&!(ee.c in(i.rates||{}))).map(ee=>`<option value="${ee.c}">${r(ee.n)} (${ee.c})</option>`).join(""),z("[data-rate]",f).forEach(ee=>ee.addEventListener("change",()=>{const we=xt(ee.value);we>0&&(i.rates[ee.dataset.rate]=we)})),z("[data-delrate]",f).forEach(ee=>ee.addEventListener("click",()=>{const we=ee.dataset.delrate;if(g.expenses.some(ke=>ke.currency===we)){S("יש הוצאות במטבע הזה — אי אפשר להסיר");return}delete i.rates[we],Z()}))};const P=m('[data-ref="rates"]',f),q=m('[data-ref="addrate"]',f);q.addEventListener("change",()=>{q.value&&(i.rates[q.value]=on(q.value,i.base),Z())}),Z();const ce=m('[data-ref="liverates"]',f);ce.addEventListener("click",async()=>{ce.disabled=!0,ce.textContent="מושכים שערים…";let Le=null;try{Le=await Li(i.base)}finally{ce.disabled=!1,ce.innerHTML="🔄 &nbsp;עדכון לשער החי של היום"}if(!Le){S(Ne?"לא הצלחנו למשוך שערים כרגע — נסו שוב":"משיכת שערים חיים זמינה בגרסת הווב");return}let ee=0;Object.keys(i.rates||{}).forEach(we=>{const ke=Ei(we,i.base);ke&&Math.abs(ke-i.rates[we])>1e-6&&(i.rates[we]=Math.round(ke*1e4)/1e4,ee++)}),Z(),S(ee?He(ee,"שער אחד עודכן","שערים עודכנו")+" ✓ (יש לשמור)":"השערים כבר מעודכנים ✓")});const G=m('[data-ref="deltrip"]',f);G&&G.addEventListener("click",async()=>{const Le=g.expenses.length,ee=Le===0?"":Le===1?" יחד עם ההוצאה שרשומה בה":` יחד עם ${Le} ההוצאות שרשומות בה`;if(await Me("מחיקת הקבוצה",`הקבוצה ״${i.name}״ תימחק לצמיתות${ee}. להמשיך?`,"מחיקה לצמיתות",!0))try{const ke=await C.deleteTripDeep(i.id);if(p.close(),Mi(),S("הקבוצה נמחקה"),g.assets){for(const Q of ke)if(Q&&Q.photo)try{await g.assets.delete(Q.photo)}catch(ve){console.error(ve)}}}catch(ke){console.error(ke),S(ke&&ke.code==="denied"?vr:"המחיקה נכשלה — נסו שוב")}})}m('[data-ref="save"]',f).addEventListener("click",async()=>{i.name=m("#f-name",f).value.trim(),i.dest=m("#f-dest",f).value.trim(),i.start=m("#f-start",f).value;const P=m("#f-end",f);i.end=P?P.value:m("#f-start",f).value,i.budget=xt(m("#f-budget",f).value)||0,s||(i.base=m("#f-base",f).value);const q=m("#f-mgrpass",f),Z=q?q.value.trim():"";if(!i.name){Ie(m("#f-name",f),"נא לתת שם לקבוצה");return}if(Z&&Z.length<4){Ie(q,"סיסמת המנהל — לפחות 4 תווים");return}const ce=!!C.setManagerPass;let G=null;if(!s){const Q=m("#f-myname",f).value.trim(),ve=m("#f-myphone",f).value.trim();if(!Q){Ie(m("#f-myname",f),"נא להזין את השם שלכם");return}if(!Logic.validatePhone(ve)){Ie(m("#f-myphone",f),"מספר הטלפון אינו תקין — למשל 050-0000000");return}G={id:it("m"),name:Q,phone:Logic.normalizePhone(ve)},c.splitBy==="head"&&(G.units=u.units,G.kids=u.kids),en(Q,Logic.normalizePhone(ve)),i.members=[G].concat(i.members.filter(j=>j.name!==Q)),i.members.forEach((j,x)=>{j.color=Ze[x%Ze.length]}),i.managerId=G.id;const $=Dc();$?i.src=$:delete i.src}if(s&&!i.members.length){S("נא להוסיף לפחות משתתף אחד");return}if(i.start&&i.end&&i.end<i.start){Ie(P,"תאריך הסיום מוקדם מתאריך ההתחלה");return}i.splitBy=c.splitBy,i.kidRate=c.kidRate,i.settleMode=R;const Le=s?i.members.filter(Q=>!v.has(Q.id)):[],ee=h&&b.scope==="all"?Le.map(Q=>Q.id):[],we=Date.now();h&&Le.forEach(Q=>{Q.joinFrom=we});const ke=m('[data-ref="save"]',f);ke.disabled=!0,ke.textContent="שומרים…";try{if(Z&&!ce&&(i.mgrPass=await yr(i.id,Z)),s){const x=Logic.computeBalances(i,g.expenses);if(i.stats={count:Fn(g.expenses),totalCents:x.grand},C.getTripOnce)try{const B=await C.getTripOnce(i.id);if(B){const K=["name","dest","flag","start","end","budget","members","rates","stats","vis","splitBy","kidRate","settleMode"];Z&&!ce&&K.push("mgrPass"),K.forEach(ae=>{ae!=="members"&&(B[ae]=i[ae])});const V=new Set(i.members.map(ae=>ae.id)),oe=(B.members||[]).filter(ae=>!v.has(ae.id)&&!V.has(ae.id)),Ee={},De={};(B.members||[]).forEach(ae=>{Ee[ae.id]=ae}),(e.members||[]).forEach(ae=>{De[ae.id]=ae}),B.members=i.members.map(ae=>{const Ve=Ee[ae.id];if(!Ve)return ae;const $e=De[ae.id]||{},Ue=Object.assign({},ae);return Ve.phone&&(!ae.phone||Logic.phonesEqual(ae.phone||"",$e.phone||""))&&(Ue.phone=Ve.phone),["pay","phoneChangedAt","phoneChangedBy","phoneSet"].forEach(je=>{je in Ve?Ue[je]=Ve[je]:delete Ue[je]}),["units","kids","joinFrom"].forEach(je=>{ae[je]===$e[je]&&Ve[je]!==$e[je]&&(Ue[je]=Ve[je])}),Ue}).concat(oe),Object.keys(i).forEach(ae=>{ae in B||(B[ae]=i[ae])}),Object.assign(i,B)}}catch(B){console.error("fresh trip read failed",B)}}let Q=!1;if(!s&&G&&G.phone){let x=null;try{x=await cr(G.phone)}catch(B){console.error("license lookup failed — retrying",B);try{x=await cr(G.phone)}catch(K){console.error("license lookup failed",K),Q=!0}}x&&(Object.assign(i,{licPlan:x.plan,licUntil:Number(x.until)||0,licenseId:x.id,brand:x.brand||null}),pr(x))}!s&&i.ownerToken&&xa(i.id,i.ownerToken),Z&&!ce&&gr(i.id,i.mgrPass),await C.saveTrip(i);let ve=!1;if(Z&&ce)try{await C.setManagerPass(i.id,Z)}catch(x){console.error("manager pass failed",x),ve=!0}G&&We(i.id,G.id);let $={added:0,failed:0};if(ee.length&&($=await ss(i,ee,we),!$.failed))for(const x of ee)await Lt(i,{id:x,joinFrom:0});!s&&!g.trips.some(x=>x.id===i.id)&&g.trips.unshift(ie(i)),p.close();const j=ee.length?(i.members.find(x=>x.id===ee[0])||{}).name:"";S(ve?"ההגדרות נשמרו ✓ — אבל את סיסמת המנהל אפשר לקבוע רק מהמכשיר שפתח את הקבוצה (או אחרי כניסה בסיסמה הקודמת)":!s&&Q?"הקבוצה נפתחה ✓ — לא הצלחנו לבדוק כרגע את הרישיון העסקי; מנהל השירות יכול להחיל אותו בהמשך":!s&&n?"הקבוצה נפתחה ✓ — עכשיו בוחרים את המסלול":s?$.failed?"ההגדרות נשמרו ✓ — הצירוף להוצאות הקודמות לא הושלם; אפשר להשלים מכרטיס המשתתף":$.added?ee.length===1?`ההגדרות נשמרו ✓ — החשבון של ${j} צורף גם ${ra($.added)}`:`ההגדרות נשמרו ✓ — החשבונות החדשים צורפו גם ${ra($.added)}`:"ההגדרות נשמרו ✓":"הקבוצה נפתחה ✓ — עכשיו מזמינים את החברים"),s||(ht(i.id),Ne&&i.kind==="trip"&&i.dest&&Ir(i.dest).then(x=>{x&&W()}).catch(()=>{}),n?setTimeout(()=>{const x=tt();x&&x.id===i.id&&jt(x,!1,0,{pick:n})},550):Ne&&(i.members||[]).length>=1&&setTimeout(()=>{const x=tt();x&&ro(x)},550))}catch(Q){console.error(Q),ke.disabled=!1,ke.textContent=s?"שמירת השינויים":"פתיחת הקבוצה",S(qt(Q))}})}function gn(e,t){const a=tt();if(!a)return;if(!g.expensesReady){S("ההוצאות עדיין נטענות — נסו שוב בעוד רגע");return}if(!(a.members||[]).length){S("קודם מוסיפים משתתפים בהגדרות הקבוצה");return}if(!e&&a.closedAt&&!fe(a)){S("הקבוצה נסגרה להתחשבנות — הוצאה חדשה דרך מנהל הקבוצה");return}if(!e&&Vs(g.expenses)>=Sa(a).maxExp){fe(a)?jt(a,!0):S("הקבוצה הגיעה למגבלת ההוצאות של המסלול — מנהל הקבוצה יכול לשדרג");return}const s=!!e,n=s&&!kr(a,e),o=ui(a),i=s?ie(e):{id:it("e"),amount:t&&t.amount||"",currency:t&&t.currency||a.base,category:wn(a,g.expenses)[0].id,payerId:o||a.members[0].id,parts:a.members.map(y=>y.id),split:{mode:"equal"},note:"",date:rt(),created:Date.now()};i.split||(i.split={mode:"equal"});const l=()=>wn(a,g.expenses).map(y=>`<button type="button" class="cat-cell${y.custom?" custom":""}" data-cat="${r(y.id)}" aria-pressed="${i.category===y.id}"><div class="ic" aria-hidden="true">${y.ic}</div><div class="nm">${y.custom?`<span class="dot" style="background:${Ba(y)}" aria-hidden="true"></span>`:""}${r(y.nm)}</div></button>`).join("")+(!n&&fe(a)?'<button type="button" class="cat-cell manage" data-ref="managecats"><div class="ic" aria-hidden="true">＋</div><div class="nm">ניהול קטגוריות</div></button>':""),d=Logic.splitsByHead(a),c=()=>i.split.mode==="custom"?"custom":i.split.mode==="percent"||i.split.mode==="shares"?i.split.mode:i.split.mode==="items"?"items":d&&i.split.mode==="member"?"member":"equal",u=y=>y==="custom"||y==="percent"||y==="shares";let h={changed:!1,file:null,removed:!1},b=i.currency===a.base?1:a.rates&&a.rates[i.currency]||on(i.currency,a.base);const v=ge(`
      <div class="sheet-head">
        <h2 class="sheet-title">${n?"פרטי ההוצאה":s?"עריכת הוצאה":"הוצאה חדשה"}</h2>
      </div>
      ${i.hidden?`<p class="hint" data-ref="hiddennote">בקבוצה הזו כל משתתף רואה רק את ההוצאות שלו, ולכן התיאור, ההערה והקבלה של ההוצאה הזו לא נשלחו למכשיר הזה. מנהל הקבוצה רואה אותם מהמכשיר שפתח את הקבוצה או אחרי כניסה בסיסמת המנהל.${n?"":" שינוי בתיאור לא יישמר; הסכום והחלוקה כן."}</p>`:""}
      ${n?`<p class="hint" data-ref="readonlynote">${wr}.${mi(a,i)?" אפשר לבקש מהמנהל למחוק אותה.":""}</p>`:""}
      <fieldset class="exp-fields"${n?" disabled":""}>
      <div class="field">
        <input class="amount-input" data-ref="amount" inputmode="decimal" autocomplete="off"
          placeholder="0.00" aria-label="סכום ההוצאה" value="${r(i.amount)}"${n?"":' aria-describedby="amount-calc-hint"'}>
        ${n?"":`
        <div class="calc-keys" role="group" aria-label="סימני חישוב לשדה הסכום">
          ${[["+","פלוס"],["-","מינוס"],["*","כפול"],["/","חלקי"]].map(([y,k])=>`<button type="button" class="amt-key" data-calc="${y}" aria-label="${k}">${y==="*"?"×":y==="/"?"÷":y==="-"?"−":y}</button>`).join("")}
        </div>
        <p class="hint amount-calc" data-ref="calcout" role="status" aria-live="polite" hidden></p>
        <p class="hint" id="amount-calc-hint">אפשר להקליד חישוב: 120+35 או 4114/2 — התוצאה תחושב בעזיבת השדה</p>`}
      </div>
      <div class="field">
        <label>מטבע</label>
        <div class="chip-row" data-ref="curchips" role="group" aria-label="בחירת מטבע"></div>
        <select class="input" data-ref="curselect" aria-label="בחירת מטבע מהרשימה המלאה" hidden style="margin-top:8px;"></select>
        <div data-ref="ratebox" hidden style="margin-top:10px;">
          <div class="rate-row">
            <span class="cur">שער: 1 <span data-ref="ratecur"></span> =</span>
            <input class="input" data-ref="rateinput" inputmode="decimal" aria-label="שער המרה למטבע הקבוצה">
            <span style="color:var(--muted);">${r(a.base)}</span>
          </div>
          <p class="hint">שער משוער — עדכנו לפי החיוב בפועל. השער נשמר לכל הוצאות הקבוצה במטבע זה.</p>
        </div>
      </div>
      <div class="field">
        <label>קטגוריה</label>
        <div class="cat-grid" data-ref="cats" role="group" aria-label="בחירת קטגוריה">
          ${l()}
        </div>
      </div>
      <div class="field">
        <label>מי שילם?</label>
        <div class="chip-row" data-ref="payers" role="group" aria-label="מי שילם"></div>
      </div>
      <div class="field">
        <label>על מי מתחלק?</label>
        <div class="chip-row" data-ref="parts" role="group" aria-label="על מי ההוצאה מתחלקת"></div>
      </div>
      <div class="field">
        <label>איך מתחלק?</label>
        <div class="chip-row" role="group" aria-label="אופן החלוקה">
          ${d?`
          <button class="chip" data-mode="equal" aria-pressed="${c()==="equal"}">לפי ראש</button>
          <button class="chip" data-mode="member" aria-pressed="${c()==="member"}">שווה לכל משתתף</button>`:`
          <button class="chip" data-mode="equal" aria-pressed="${c()==="equal"}">שווה בשווה</button>`}
          <button class="chip" data-mode="custom" aria-pressed="${c()==="custom"}">סכומים ידניים</button>
          <button class="chip" data-mode="percent" aria-pressed="${c()==="percent"}">באחוזים</button>
          <button class="chip" data-mode="shares" aria-pressed="${c()==="shares"}">במנות</button>
          <button class="chip" data-mode="items" aria-pressed="${c()==="items"}">לפי פריטים</button>
        </div>
        ${d?'<p class="split-preview" data-ref="splitprev" role="status"></p>':""}
        <div data-ref="custombox" style="margin-top:10px;" ${u(i.split.mode)?"":"hidden"}>
          <p class="hint" data-ref="splithint" hidden></p>
          <div class="split-list" data-ref="customlist"></div>
          <div class="split-status" data-ref="customstatus" role="status"></div>
        </div>
        <div data-ref="itemsbox" class="items-box" ${i.split.mode==="items"?"":"hidden"}>
          ${n?"":'<p class="hint">מתאים למסעדה: לכל פריט — שם, סכום ומי חולקים אותו. מה שנשאר מסכום ההוצאה (טיפ או שירות) מתחלק שווה בין כל המשתתפים.</p>'}
          <div class="items-list" data-ref="itemslist"></div>
          ${n?"":`<button class="btn ghost block" data-ref="additem" type="button">${he("plus",18)} הוספת פריט</button>`}
          <div class="split-status" data-ref="itemsstatus" role="status"></div>
          <p class="split-preview" data-ref="itemsprev" role="status" hidden></p>
        </div>
      </div>
      <div class="form-row">
        <div class="field">
          <label for="f-date">תאריך</label>
          <input class="input" id="f-date" type="date" value="${r(i.date)}">
        </div>
        <div class="field">
          <label for="f-note">תיאור (רשות)</label>
          <input class="input" id="f-note" maxlength="60" placeholder="למשל: ארוחת ערב" value="${r(i.note)}">
        </div>
      </div>
      <p class="hint future-hint" data-ref="futurehint" role="status"${Logic.isFutureExpense(i,rt())?"":" hidden"}>הוצאה עתידית — תסומן ״עתידית״ ותיספר בסטטיסטיקה היומית מתאריכה; בחלוקה ובמאזנים היא נספרת כבר עכשיו.</p>
      <div class="field exp-days" data-ref="daysbox">
        <label>על כמה ימים ההוצאה? <small>(לסטטיסטיקה בלבד)</small></label>
        ${os("days","ימים",Logic.spreadDaysOf(i),1,Logic.SPREAD_MAX_DAYS)}
        <p class="hint">לינה של כמה לילות או כרטיס לכמה ימים — הסכום נפרס בממוצע היומי ובגרפים. החלוקה והמאזנים לא משתנים.</p>
      </div>
      <div class="field">
        <label>קבלה</label>
        <div class="photo-box" data-ref="photobox" role="button" tabindex="0" aria-label="צילום או בחירת קבלה"></div>
        <input type="file" accept="image/*" capture="environment" data-ref="photoinput" hidden>
        <div class="receipt-ai" data-ref="receiptbox" hidden>
          <button class="btn ghost block" data-ref="readreceipt">לקרוא מהקבלה</button>
          <p class="hint">הקבלה נשלחת לקריאה אוטומטית (בינה מלאכותית) רק בלחיצה; אצל הספק היא נשמרת לפרק זמן מוגבל בלבד ואינה משמשת לאימון מודלים (פירוט במדיניות הפרטיות). התוצאה ממלאת את הטופס — בדקו אותה לפני השמירה.</p>
          <p class="split-status" data-ref="receiptstatus" role="status" hidden></p>
          <button class="btn ghost block" data-ref="receiptitems" hidden>לפצל לפי הפריטים שנקראו</button>
        </div>
      </div>
      </fieldset>
      <div class="banner warn plan-limit" role="status" data-ref="planerr" hidden></div>
      ${n?"":`<button class="btn primary block" data-ref="save">${s?"שמירת השינויים":"שמירת ההוצאה"}</button>`}
      ${s?(()=>{const y=fe(a),k=i.delReq&&i.delReq.by?i.delReq:null;return k&&y?`
            <div class="delreq-card" data-ref="delreqbox">
              <p class="delreq-lbl">⏳ בקשת מחיקה מאת ${r(me(a,k.by))} להוצאה הזו</p>
              <div class="form-row">
                <button class="btn ghost block" data-ref="reject">דחיית הבקשה</button>
                <button class="btn danger block" data-ref="approve">אישור ומחיקה</button>
              </div>
            </div>`:k?'<div class="delreq-card pending"><p class="delreq-lbl">⏳ נשלחה בקשת מחיקה — ממתינה לאישור מנהל הקבוצה</p></div>':n&&!mi(a,i)?"":`<button class="btn danger block" data-ref="delexp" style="margin-top:10px;">${y?"מחיקת ההוצאה":"בקשת מחיקה מהמנהל"}</button>`})():""}
    `),p=v.el,f=m('[data-ref="amount"]',p);s||setTimeout(()=>f.focus(),250);const L=()=>{const y=[a.base];return Object.keys(a.rates||{}).forEach(k=>{y.includes(k)||y.push(k)}),y.includes(i.currency)||y.push(i.currency),y};function _(){const y=m('[data-ref="curchips"]',p);y.innerHTML=L().map(M=>`<button class="chip" data-cur="${r(M)}" aria-pressed="${i.currency===M}">${r(M)}</button>`).join("")+'<button class="chip" data-ref="morecur">אחר…</button>',z("[data-cur]",p).forEach(M=>M.addEventListener("click",()=>T(M.dataset.cur))),m('[data-ref="morecur"]',p).addEventListener("click",()=>{const M=m('[data-ref="curselect"]',p);M.hidden=!1,M.innerHTML='<option value="">בחירת מטבע…</option>'+ma.map(H=>`<option value="${H.c}">${r(H.n)} (${H.c})</option>`).join(""),M.focus()});const k=m('[data-ref="ratebox"]',p);if(i.currency!==a.base){k.hidden=!1,m('[data-ref="ratecur"]',p).textContent=i.currency;const M=m('[data-ref="rateinput"]',p);Ti(M,b),M.setAttribute("aria-label","שער המרה של "+kt(i.currency).n)}else k.hidden=!0}function T(y){i.currency=y,b=y===a.base?1:a.rates&&a.rates[y]||on(y,a.base),m('[data-ref="curselect"]',p).hidden=!0,_(),X(),G(),R()}m('[data-ref="curselect"]',p).addEventListener("change",y=>{y.target.value&&T(y.target.value)}),m('[data-ref="rateinput"]',p).addEventListener("change",y=>{const k=xt(y.target.value);k>0&&(b=k),R()}),_();function w(){z("[data-cat]",p).forEach(k=>k.addEventListener("click",()=>{i.category=k.dataset.cat,z("[data-cat]",p).forEach(M=>M.setAttribute("aria-pressed",String(M===k)))}));const y=m('[data-ref="managecats"]',p);y&&y.addEventListener("click",()=>so(a,()=>{wn(a,g.expenses).some(M=>M.id===i.category)||(i.category="other");const k=m('[data-ref="cats"]',p);k&&(k.innerHTML=l(),w())}))}w();const E=m('[data-ref="calcout"]',p);function A(y){const k=f.value;if(!Logic.hasAmountOp(k)){E&&(E.hidden=!0,E.textContent="");return}const M=Logic.evalAmountExpr(k);if(!isFinite(M)){y?Ie(f,"לא הצלחנו לחשב את הביטוי — בדקו את הסימנים"):f.setAttribute("aria-invalid","true");return}f.removeAttribute("aria-invalid");const H=Logic.dec(i.currency),Y=Math.round(M*Math.pow(10,H))/Math.pow(10,H);if(f.value=String(Y),f.dispatchEvent(new Event("input",{bubbles:!0})),E){const le=k.trim().replace(/\*/g," × ").replace(/\//g," ÷ ").replace(/\+/g," + ").replace(/(\d)\s*-\s*(?=\d)/g,"$1 − ").replace(/\s+/g," ");E.textContent=`${le} = ${Y.toLocaleString("he-IL",{maximumFractionDigits:H})}`,E.hidden=!1}}n||(f.addEventListener("blur",()=>A(!1)),f.addEventListener("keydown",y=>{y.key==="Enter"&&(y.preventDefault(),A(!0))}),z("[data-calc]",p).forEach(y=>{["mousedown","touchstart"].forEach(k=>y.addEventListener(k,M=>M.preventDefault(),{passive:!1})),y.addEventListener("click",()=>{const k=y.dataset.calc,M=f.value;f.value=/[+\-*/]$/.test(M.trim())?M.trim().slice(0,-1)+k:M+k,f.focus();try{f.setSelectionRange(f.value.length,f.value.length)}catch{}})}));function D(){m('[data-ref="payers"]',p).innerHTML=a.members.map(y=>`<button class="chip" data-payer="${r(y.id)}" aria-pressed="${i.payerId===y.id}"><span class="dot" style="background:${mt(y)}"></span>${r(y.name)}</button>`).join(""),z("[data-payer]",p).forEach(y=>y.addEventListener("click",()=>{i.payerId=y.dataset.payer,D()}))}D();function U(){const y=i.parts.length===a.members.length;m('[data-ref="parts"]',p).innerHTML=`<button class="chip" data-ref="allparts" aria-pressed="${y}">${he("users",18)} כולם</button>`+a.members.map(k=>`<button class="chip" data-part="${r(k.id)}" aria-pressed="${i.parts.includes(k.id)}"><span class="dot" style="background:${mt(k)}"></span>${r(k.name)}</button>`).join(""),m('[data-ref="allparts"]',p).addEventListener("click",()=>{i.parts=y?[]:a.members.map(k=>k.id),U(),X(),G(),R()}),z("[data-part]",p).forEach(k=>k.addEventListener("click",()=>{const M=k.dataset.part;i.parts=i.parts.includes(M)?i.parts.filter(H=>H!==M):i.parts.concat(M),U(),X(),G(),R()}))}U();function I(y){i.split.mode=y,z("[data-mode]",p).forEach(k=>k.setAttribute("aria-pressed",String(k.dataset.mode===c()))),m('[data-ref="custombox"]',p).hidden=!u(y),m('[data-ref="itemsbox"]',p).hidden=y!=="items",X(),G(),R()}z("[data-mode]",p).forEach(y=>y.addEventListener("click",()=>I(y.dataset.mode)));function R(){const y=m('[data-ref="splitprev"]',p);if(!y)return;const k=c();if(u(k)||k==="items"||!i.parts.length){y.hidden=!0;return}y.hidden=!1;const M=Logic.amountFromInput(f.value),H=Object.assign({},a,{rates:Object.assign({},a.rates,i.currency!==a.base?{[i.currency]:b}:{})}),Y={id:i.id,amount:M>0?M:0,currency:i.currency,parts:i.parts,split:{mode:k}},le=M>0?Logic.expenseShares(H,Y).shares:null;y.innerHTML=(k==="member"?"חלק שווה לכל משתתף":"לפי ראש")+": "+i.parts.map(ye=>{const Se=Be(a,ye),N=k==="equal"&&!Se.ghost&&Logic.headsOf(a,Se)!==1?` <small>(${r(da(a,Se))})</small>`:"";return`<span class="sp-item">${r(Se.name)}${N}${le?" "+F(le[ye]||0,a.base):""}</span>`}).join(" · ")}function re(){const y=Logic.amountFromInput(f.value);if(!(y>0)||!i.parts.length)return null;const k=Object.assign({},a,{rates:Object.assign({},a.rates,i.currency!==a.base?{[i.currency]:b}:{})}),M={id:i.id,amount:y,currency:i.currency,parts:i.parts,split:i.split};return Logic.expenseShares(k,M).shares}function X(){const y=i.split.mode;if(!u(y))return;const k=m('[data-ref="customlist"]',p),M=m('[data-ref="splithint"]',p);y==="custom"?(i.split.custom=i.split.custom||{},M.hidden=!0,k.innerHTML=i.parts.map(H=>{const Y=Be(a,H);return`<div class="split-item">
            <span class="dot" style="width:10px;height:10px;border-radius:50%;background:${mt(Y)};flex:none;"></span>
            <span class="nm">${r(Y.name)}</span>
            <input class="input" inputmode="decimal" data-custom="${r(H)}" aria-label="הסכום של ${r(Y.name)}" placeholder="0" value="${r(i.split.custom[H]!=null?i.split.custom[H]:"")}">
          </div>`}).join(""),z("[data-custom]",p).forEach(H=>H.addEventListener("input",()=>{i.split.custom[H.dataset.custom]=xt(H.value),P()}))):y==="percent"?((!i.split.percent||!i.parts.some(H=>i.split.percent[H]!=null))&&(i.split.percent=Logic.evenPercent(i.parts)),i.parts.forEach(H=>{i.split.percent[H]==null&&(i.split.percent[H]=0)}),M.hidden=!0,k.innerHTML=i.parts.map(H=>{const Y=Be(a,H),le=i.split.percent[H];return`<div class="split-item">
            <span class="dot" style="width:10px;height:10px;border-radius:50%;background:${mt(Y)};flex:none;"></span>
            <span class="nm">${r(Y.name)} <small class="sp-amt" data-amt="${r(H)}"></small></span>
            <span class="pct-wrap"><input class="input" inputmode="decimal" data-pct="${r(H)}" aria-label="האחוז של ${r(Y.name)}" placeholder="0" value="${r(le!=null?le:"")}"><span class="pct-sign" aria-hidden="true">%</span></span>
          </div>`}).join(""),z("[data-pct]",p).forEach(H=>H.addEventListener("input",()=>{i.split.percent[H.dataset.pct]=xt(H.value),P()}))):((!i.split.shares||!i.parts.some(H=>i.split.shares[H]!=null))&&(i.split.shares={}),i.parts.forEach(H=>{i.split.shares[H]==null&&(i.split.shares[H]=1)}),M.hidden=!1,M.textContent="החלוקה יחסית למנות — למשל 2 מנות לזוג ומנה אחת למי שמגיע לבד. מנה 0 — בלי חלק בהוצאה הזו.",k.innerHTML=i.parts.map(H=>{const Y=Be(a,H);return`<div class="split-item">
            <span class="dot" style="width:10px;height:10px;border-radius:50%;background:${mt(Y)};flex:none;"></span>
            <span class="nm">${r(Y.name)} <small class="sp-amt" data-amt="${r(H)}"></small></span>
            ${os(H,"מנות",i.split.shares[H],0,Logic.SHARES_MAX,"",Y.name)}
          </div>`}).join(""),pa(k,i.split.shares,()=>P())),P()}function P(){const y=m('[data-ref="customstatus"]',p);if(!y)return;const k=i.split.mode,M=Logic.amountFromInput(f.value);if(k==="percent"||k==="shares"){const le=re();if(z("[data-amt]",p).forEach(ye=>{ye.innerHTML=le?F(le[ye.dataset.amt]||0,a.base):""}),k==="percent"){const ye=Logic.validatePercent(i.split.percent,i.parts),Se=N=>String(Math.round(N*100)/100);ye.ok?(y.textContent=`סך האחוזים: ${Se(ye.sum)}% ✓`,y.className="split-status ok"):ye.bad?(y.textContent="יש ערך לא תקין — לכל משתתף צריך אחוז (0 ומעלה)",y.className="split-status err"):ye.diff>0?(y.textContent=`נותרו ${Se(ye.diff)}% להקצאה`,y.className="split-status err"):(y.textContent=`הוקצו ${Se(-ye.diff)}% יותר מדי`,y.className="split-status err")}else{const ye=Logic.validateShares(i.split.shares,i.parts);ye.ok?(y.textContent=`סך המנות: ${ye.sum} ✓`,y.className="split-status ok"):ye.bad?(y.textContent=`יש ערך לא תקין — מנות הן מספר שלם בין 0 ל־${Logic.SHARES_MAX}`,y.className="split-status err"):(y.textContent="צריך לפחות מנה אחת",y.className="split-status err")}return}if(k!=="custom")return;const H={amount:M,currency:i.currency,split:i.split},Y=Logic.customSplitDiff(H,i.parts);if(!H.amount){y.textContent="קודם מזינים את סכום ההוצאה למעלה",y.className="split-status";return}Y===0?(y.textContent="החלוקה מאוזנת ✓",y.className="split-status ok"):Y>0?(y.innerHTML=`נותרו להקצאה: ${F(Y,i.currency)}`,y.className="split-status err"):(y.innerHTML=`הוקצה יותר מדי — עודף של ${F(-Y,i.currency)}`,y.className="split-status err")}f.addEventListener("input",()=>{P(),we(),R()}),u(i.split.mode)&&X();const q=Logic.ITEM_NAME_MAX,Z=()=>{const y=Logic.amountFromInput(f.value),k=Object.assign({},a,{rates:Object.assign({},a.rates,i.currency!==a.base?{[i.currency]:b}:{})}),M={id:i.id,amount:y>0?y:0,currency:i.currency,parts:i.parts,split:{mode:"items",items:i.split.items||[],rest:"equal"}};return{amount:y,probeTrip:k,probe:M}};function ce(){return{name:"",amount:"",who:i.parts.slice()}}function G(){if(i.split.mode!=="items")return;const y=m('[data-ref="itemslist"]',p);if(y){if(Array.isArray(i.split.items)||(i.split.items=[]),i.split.items.forEach(k=>{k.who=(Array.isArray(k.who)?k.who:[]).filter(M=>i.parts.includes(M))}),!i.split.items.length&&!n&&i.split.items.push(ce()),n){y.innerHTML=i.split.items.map(k=>{const M=(k.who||[]).map(H=>r(Be(a,H).name)).join(", ");return`<div class="item-ro"><span class="nm">${r(k.name||"פריט")}</span><span class="who">${M}</span><span class="amt">${Fr(Number(k.amount)||0,i.currency)}</span></div>`}).join("")||'<p class="hint">אין פריטים ברשומה הזו.</p>',we();return}y.innerHTML=i.split.items.map((k,M)=>`
        <div class="item-card" data-item="${M}">
          <div class="item-row">
            <input class="input" data-item-name="${M}" maxlength="${q}" placeholder="למשל: פיצה" aria-label="שם הפריט ${M+1}" value="${r(k.name||"")}">
            <input class="input item-amt" data-item-amt="${M}" inputmode="decimal" autocomplete="off" placeholder="0" aria-label="הסכום של הפריט ${M+1}" value="${r(k.amount!==""&&k.amount!=null?k.amount:"")}">
            <button class="item-del" type="button" data-item-del="${M}" aria-label="הסרת הפריט ${M+1}">✕</button>
          </div>
          <div class="item-who chip-row" role="group" aria-label="מי חולקים את הפריט ${M+1}" data-item-who="${M}"></div>
        </div>`).join(""),i.split.items.forEach((k,M)=>Le(M)),z("[data-item-name]",p).forEach(k=>k.addEventListener("input",()=>{i.split.items[Number(k.dataset.itemName)].name=k.value})),z("[data-item-amt]",p).forEach(k=>k.addEventListener("input",()=>{const M=xt(k.value);i.split.items[Number(k.dataset.itemAmt)].amount=k.value.trim()===""?"":isFinite(M)?M:NaN,we()})),z("[data-item-del]",p).forEach(k=>k.addEventListener("click",()=>{i.split.items.splice(Number(k.dataset.itemDel),1),G();const M=m('[data-ref="additem"]',p);M&&M.focus()})),we()}}function Le(y){const k=m(`[data-item-who="${y}"]`,p),M=i.split.items[y];if(!k||!M)return;const H=i.parts.length>0&&i.parts.every(Y=>M.who.includes(Y));k.innerHTML=`<button class="chip" type="button" data-who-all="${y}" aria-pressed="${H}">${he("users",18)} כולם</button>`+i.parts.map(Y=>{const le=Be(a,Y);return`<button class="chip" type="button" data-who="${r(Y)}" data-who-item="${y}" aria-pressed="${M.who.includes(Y)}"><span class="dot" style="background:${mt(le)}"></span>${r(le.name)}</button>`}).join(""),m(`[data-who-all="${y}"]`,p).addEventListener("click",()=>{M.who=H?[]:i.parts.slice(),Le(y),we()}),z(`[data-who-item="${y}"]`,p).forEach(Y=>Y.addEventListener("click",()=>{const le=Y.dataset.who;M.who=M.who.includes(le)?M.who.filter(ye=>ye!==le):M.who.concat(le),Le(y),we()}))}const ee={no_items:"נא להוסיף לפחות פריט אחד",too_many:`אפשר עד ${Logic.ITEMS_MAX} פריטים בהוצאה אחת`,bad_amount:"לכל פריט צריך סכום גדול מאפס",no_who:"לכל פריט צריך לבחור מי משתתפים בו",who_not_in_parts:"בפריט מסומן מישהו שאינו בין משתתפי ההוצאה",over_total:"סך הפריטים גבוה מסכום ההוצאה — בדקו את הסכומים"};function we(){const y=m('[data-ref="itemsstatus"]',p),k=m('[data-ref="itemsprev"]',p);if(!y||i.split.mode!=="items")return;const{amount:M,probeTrip:H,probe:Y}=Z(),le=Logic.validateItems(Y,i.parts);if(k.hidden=!0,!(M>0)){y.textContent="קודם מזינים את סכום ההוצאה למעלה",y.className="split-status";return}if(!i.parts.length){y.textContent="קודם בוחרים על מי ההוצאה מתחלקת",y.className="split-status";return}if(!le.ok){le.reason==="over_total"?y.innerHTML=`הפריטים גבוהים מסכום ההוצאה ב־${F(-le.restCents,i.currency)}`:y.textContent=ee[le.reason]||"בדקו את הפריטים",y.className="split-status err";return}y.innerHTML=`סך הפריטים: ${F(le.itemsCents,i.currency)}`+(le.restCents>0?` · שארית (טיפ/שירות): ${F(le.restCents,i.currency)} — מתחלקת שווה בין כולם`:" — בלי שארית ✓"),y.className="split-status ok";const ye=Logic.expenseShares(H,Y).shares,Se=i.parts.filter(N=>!(ye[N]>0));k.hidden=!1,k.innerHTML="יוצא לכל משתתף: "+i.parts.map(N=>`<span class="sp-item">${r(Be(a,N).name)} ${F(ye[N]||0,a.base)}</span>`).join(" · ")+(Se.length?`<br><small>${Se.map(N=>r(Be(a,N).name)).join(", ")} — בלי פריט ובלי שארית, ולכן החלק שלהם 0</small>`:"")}const ke=m('[data-ref="additem"]',p);ke&&ke.addEventListener("click",()=>{if(Array.isArray(i.split.items)||(i.split.items=[]),i.split.items.length>=Logic.ITEMS_MAX){S(ee.too_many);return}i.split.items.push(ce()),G();const y=m(`[data-item-name="${i.split.items.length-1}"]`,p);y&&y.focus()}),i.split.mode==="items"&&G(),R();const Q=m('[data-ref="photobox"]',p),ve=m('[data-ref="photoinput"]',p);n&&(Q.removeAttribute("role"),Q.removeAttribute("tabindex"),Q.removeAttribute("aria-label"));function $(){const y=h.changed?h.file?URL.createObjectURL(h.file):null:cn(i);Q.innerHTML=y?`${n?`<img src="${r(y)}" alt="קבלה">`:`<button type="button" class="photo-replace" data-ref="replacephoto" aria-label="החלפת צילום הקבלה"><img src="${r(y)}" alt="קבלה"></button><button class="photo-remove" data-ref="removephoto">הסרה ✕</button>`}`:`<span>${n?"לא צורפה קבלה":"📷 &nbsp;צילום קבלה או בחירה מהגלריה"}</span>`,y?(Q.removeAttribute("role"),Q.removeAttribute("tabindex"),Q.removeAttribute("aria-label")):n||(Q.setAttribute("role","button"),Q.setAttribute("tabindex","0"),Q.setAttribute("aria-label","צילום או בחירת קבלה"));const k=m('[data-ref="removephoto"]',p);k&&k.addEventListener("click",M=>{M.stopPropagation(),h={changed:!0,file:null,removed:!0},$()}),Ee()}Q.addEventListener("click",y=>{n||y.target.closest('[data-ref="removephoto"]')||ve.click()}),Q.addEventListener("keydown",y=>{!n&&(y.key==="Enter"||y.key===" ")&&(y.preventDefault(),ve.click())}),ve.addEventListener("change",()=>{ve.files&&ve.files[0]&&(h={changed:!0,file:ve.files[0],removed:!1},$())});const j=m('[data-ref="receiptbox"]',p),x=m('[data-ref="readreceipt"]',p),B=m('[data-ref="receiptstatus"]',p),K=m('[data-ref="receiptitems"]',p);let V=[];const oe={too_large:"התמונה גדולה מדי לקריאה אוטומטית — נסו צילום קרוב יותר של הקבלה, או הזינו את הפרטים ידנית.",image:"לא הצלחנו לקרוא את קובץ התמונה — נסו צילום אחר (JPEG או PNG), או הזינו את הפרטים ידנית."};function Ee(){const y=!n&&h.changed&&!!h.file&&Pt().receipt;j.hidden=!y,y||(V=[],K.hidden=!0,B.hidden=!0,B.textContent="")}function De(y,k){B.hidden=!y,B.innerHTML=y||"",B.className="split-status"+(k?" "+k:"")}function ae(y){const k=[],M=Number(y.amount);M>0&&(Ti(f,Math.round(M*100)/100),k.push("סכום"));const H=typeof y.currency=="string"?y.currency.trim().toUpperCase():"";H&&H!==i.currency&&ma.some(se=>se.c===H)&&(T(H),k.push("מטבע"));const Y=typeof y.date=="string"&&/^\d{4}-\d{2}-\d{2}$/.test(y.date)?y.date:"";Y&&(m("#f-date",p).value=Y,k.push("תאריך"));const le=m("#f-note",p),ye=typeof y.title=="string"?y.title.trim().slice(0,60):"";ye&&!le.value.trim()&&(le.value=ye,k.push("תיאור")),V=(Array.isArray(y.items)?y.items:[]).map(se=>({name:String(se&&se.name||"").trim().slice(0,40),amount:Math.round(Number(se&&se.amount)*100)/100})).filter(se=>se.name&&se.amount>0).slice(0,60),P(),we(),R();const Se=k.length?"נקראו מהקבלה: "+k.join(", ")+" — בדקו את הפרטים לפני השמירה.":"הקבלה נקראה, אך לא נמצאו בה פרטים למילוי — אפשר להזין אותם ידנית.",N=!!m('[data-mode="items"]',p);De(r(Se)+(V.length&&N?" נמצאו "+Pe(V.length,"פריט אחד","פריטים")+".":""),k.length?"ok":"err"),K.hidden=!V.length||!N}async function Ve(){const y=Pt();if(!y.receipt||!h.file||x.disabled)return;x.disabled=!0,x.textContent="קוראים את הקבלה…",De("","");const k=typeof AbortController!="undefined"?new AbortController:null,M=setTimeout(()=>{k&&k.abort()},pu);try{let H=String(await Oa(h.file,1200,.8,!0)),Y=H.match(/^data:(image\/[a-z]+);base64,([\s\S]+)$/);if(Y&&Y[2].length>uc&&(H=String(await Oa(h.file,900,.7,!0)),Y=H.match(/^data:(image\/[a-z]+);base64,([\s\S]+)$/)),!Y)throw new Error("image");if(Y[2].length>uc){De(oe.too_large,"err");return}const le={"Content-Type":"application/json"};y.key&&!/^https?:\/\/[^/]*\.(test|localhost)\b/.test(y.receiptUrl)&&(le.apikey=y.key,le.Authorization="Bearer "+y.key);const ye=await fetch(y.receiptUrl,{method:"POST",headers:le,signal:k?k.signal:void 0,body:JSON.stringify({image:Y[2],mime:Y[1],locale:"he",device:lo()})});let Se={};try{Se=await ye.json()}catch{Se={}}if(!ye.ok||Se.fallback){De(r(String(Se.message||oe[Se.error]||"קריאת הקבלה לא זמינה כרגע — אפשר להזין את הפרטים ידנית.")),"err");return}ae(Se)}catch(H){console.error(H),De("לא הצלחנו לקרוא את הקבלה כרגע — אפשר להזין את הפרטים ידנית.","err")}finally{clearTimeout(M),x.disabled=!1,x.textContent="לקרוא מהקבלה"}}if(x.addEventListener("click",Ve),K.addEventListener("click",()=>{if(!V.length)return;const y=i.parts.length?i.parts.slice():a.members.map(k=>k.id);i.parts.length||(i.parts=y.slice(),U()),i.split={mode:"items",items:V.map(k=>({name:k.name,amount:k.amount,who:y.slice()})),rest:"equal"},p.dispatchEvent(new CustomEvent("shaveh:receipt-items",{bubbles:!0,detail:ie(i.split)})),m('[data-mode="items"]',p)&&I("items"),K.hidden=!0}),$(),s){const y=fe(a);m('[data-ref="delreqbox"]',p)&&i.delReq&&y&&(m('[data-ref="approve"]',p).addEventListener("click",async()=>{try{await C.deleteExpense(a.id,i.id),await Wt(a,g.expenses.filter(H=>H.id!==i.id)),v.close(),Zl(a,ie(i))}catch(H){console.error(H),S(Fe(H,"המחיקה נכשלה — נסו שוב"))}}),m('[data-ref="reject"]',p).addEventListener("click",async()=>{try{const H=ie(i);delete H.delReq,await C.saveExpense(a.id,H),v.close(),S("הבקשה נדחתה — ההוצאה נשארת")}catch(H){console.error(H),S(Fe(H,"הפעולה נכשלה — נסו שוב"))}}));const M=m('[data-ref="delexp"]',p);M&&M.addEventListener("click",async()=>{if(y){if(!await Me("מחיקת הוצאה","ההוצאה תימחק לצמיתות מהקבוצה. להמשיך?","מחיקה",!0))return;try{await C.deleteExpense(a.id,i.id),await Wt(a,g.expenses.filter(ye=>ye.id!==i.id)),v.close(),Zl(a,ie(i))}catch(ye){console.error(ye),S(Fe(ye,"המחיקה נכשלה — נסו שוב"))}return}if(i.delReq){S("כבר נשלחה בקשה — ממתינה לאישור מנהל הקבוצה");return}const H=pe(a.id);if(await Me("בקשת מחיקה","רק מנהל הקבוצה יכול למחוק הוצאות. תישלח בקשה, וההוצאה תימחק רק לאחר אישורו.","שליחת בקשה"))try{const le=ie(i);le.delReq={by:H||"",at:Date.now()},await C.saveExpense(a.id,le),v.close(),S("הבקשה נשלחה למנהל הקבוצה ✓")}catch(le){console.error(le),S(Fe(le,"שליחת הבקשה נכשלה — נסו שוב"))}})}const $e={days:Logic.spreadDaysOf(i)};pa(m('[data-ref="daysbox"]',p),$e);const Ue=m("#f-date",p),je=m('[data-ref="futurehint"]',p),ze=()=>{je&&(je.hidden=!Logic.isFutureExpense({date:Ue.value},rt()))};Ue.addEventListener("change",ze),Ue.addEventListener("input",ze);const ut=m('[data-ref="save"]',p);ut&&ut.addEventListener("click",async()=>{if(!g.trips.some(M=>M.id===a.id)){v.close(),S("הקבוצה כבר אינה קיימת");return}const y=f.value;if(i.amount=Logic.amountFromInput(y),i.date=m("#f-date",p).value||rt(),i.note=m("#f-note",p).value.trim(),$e.days>1?i.days=$e.days:delete i.days,Logic.hasAmountOp(y)&&!isFinite(i.amount)){i.amount=0,Ie(f,"לא הצלחנו לחשב את הביטוי — בדקו את הסימנים");return}if(!(i.amount>0)){Ie(f,"נא להזין סכום");return}if(!i.payerId){S("נא לבחור מי שילם");return}if(!i.parts.length){S("נא לבחור על מי ההוצאה מתחלקת");return}if(i.currency!==a.base&&!(b>0)){Ie(m('[data-ref="rateinput"]',p),"נא להזין שער המרה");return}if(i.split.mode==="custom"){if(Logic.customSplitDiff(i,i.parts)!==0){S("החלוקה הידנית אינה מאוזנת — בדקו את הסכומים");return}const H={};i.parts.forEach(Y=>H[Y]=Number(i.split.custom[Y])||0),i.split={mode:"custom",custom:H}}else if(i.split.mode==="percent"){if(!Logic.validatePercent(i.split.percent,i.parts).ok){S("סך האחוזים צריך להיות 100 — בדקו את הערכים");return}const M={};i.parts.forEach(H=>M[H]=Math.round((Number(i.split.percent[H])||0)*100)/100),i.split={mode:"percent",percent:M}}else if(i.split.mode==="shares"){if(!Logic.validateShares(i.split.shares,i.parts).ok){S("צריך לפחות מנה אחת — בדקו את המנות");return}const M={};i.parts.forEach(H=>M[H]=Math.trunc(Number(i.split.shares[H])||0)),i.split={mode:"shares",shares:M}}else if(i.split.mode==="items"){const M=(i.split.items||[]).map(Y=>({name:String(Y.name||"").trim().slice(0,q),amount:Number(Y.amount)||0,who:(Array.isArray(Y.who)?Y.who:[]).filter(le=>i.parts.includes(le))})),H=Logic.validateItems({amount:i.amount,currency:i.currency,split:{mode:"items",items:M}},i.parts);if(!H.ok){S(ee[H.reason]||"בדקו את הפריטים");return}i.split={mode:"items",items:M,rest:"equal"}}else i.split={mode:c()==="member"?"member":"equal"};const k=m('[data-ref="save"]',p);k.disabled=!0,k.textContent="שומרים…";try{i.currency!==a.base&&(a.rates||{})[i.currency]!==b&&(a.rates=a.rates||{},a.rates[i.currency]=b,await C.updateTrip(a.id,{rates:ie(a.rates)}));let M=null;if(h.changed&&(M=i.photo||null,delete i.photo,delete i.photoData,h.file&&Object.assign(i,await Ip(h.file))),await C.saveExpense(a.id,i),M&&g.assets&&M!==i.photo)try{await g.assets.delete(M)}catch(Y){console.error(Y)}const H=g.expenses.filter(Y=>Y.id!==i.id).concat([i]);await Wt(a,H),v.close(),S(s?"ההוצאה עודכנה ✓":"ההוצאה נשמרה ✓")}catch(M){if(k.disabled=!1,k.textContent=s?"שמירת השינויים":"שמירת ההוצאה",M&&M.code==="plan_limit"){Np(a,p,v);return}console.error(M),S(qt(M))}})}function Np(e,t,a){const s=m('[data-ref="planerr"]',t);if(!s){S(qt({code:"plan_limit"}));return}const n=fe(e),o=tt()||e,i=Rt(o),l=!!(be[i.id]&&be[i.id].topUp&&!i.expired);s.innerHTML=`<b>ההוצאה לא נשמרה — הקבוצה הגיעה למגבלת ההוצאות של המסלול.</b>
      ${n?`אפשר ${l?`לשדרג את המסלול או להוסיף ${r(xe.exp20.nm)}`:"לשדרג את המסלול"}, ואז לשמור שוב — מה שהוקלד נשאר כאן.`:"מנהל הקבוצה יכול לשדרג את המסלול. מה שהוקלד נשאר כאן — אפשר לשמור שוב אחרי השדרוג."}
      ${n?'<button class="btn block plan-limit-btn" data-ref="planerr-plans">למסלולים</button>':""}`,s.hidden=!1;const d=m('[data-ref="planerr-plans"]',s);d&&d.addEventListener("click",()=>jt(tt()||e,!0));try{s.scrollIntoView({block:"nearest"})}catch{}}let Yt=null;function Xl(){if(!Yt)return;const e=Yt;Yt=null,clearTimeout(e.timer),e.expense.photo&&g.assets&&g.assets.delete(e.expense.photo).catch(t=>console.error(t))}function Zl(e,t){Xl();const a=g.expenses.filter(s=>s.id!==t.id).map(ie);Yt={trip:e,expense:t,listAfterDelete:a,timer:setTimeout(Xl,$o+2e3)},Kr("ההוצאה נמחקה",async()=>{if(!Yt||Yt.expense.id!==t.id)return;const s=Yt;if(Yt=null,clearTimeout(s.timer),!g.trips.some(n=>n.id===s.trip.id)){S("הקבוצה כבר אינה קיימת");return}try{await C.saveExpense(s.trip.id,s.expense),await Wt(s.trip,s.listAfterDelete.concat([s.expense])),S("ההוצאה שוחזרה ✓")}catch(n){console.error(n),S(Fe(n,"השחזור נכשל"))}})}async function Wt(e,t){try{const a=Logic.computeBalances(e,t);await C.updateTrip(e.id,{stats:{count:Fn(t),totalCents:a.grand}})}catch(a){console.error("stats update failed",a)}}function Hp(e){return new Promise((t,a)=>{const s=URL.createObjectURL(e),n=new Image;n.onload=()=>t({img:n,url:s}),n.onerror=()=>{URL.revokeObjectURL(s),a(new Error("image load failed"))},n.src=s})}async function Oa(e,t,a,s,n){const{img:o,url:i}=await Hp(e);try{const l=Math.min(1,t/Math.max(o.naturalWidth,o.naturalHeight)),d=Math.max(1,Math.round(o.naturalWidth*l)),c=Math.max(1,Math.round(o.naturalHeight*l)),u=document.createElement("canvas");u.width=d,u.height=c;const h=u.getContext("2d");h.drawImage(o,0,0,d,c);let b=!1;if(n&&n.keepAlpha)try{const p=h.getImageData(0,0,d,c).data;for(let f=3;f<p.length;f+=4)if(p[f]<255){b=!0;break}}catch{b=!1}let v="image/jpeg";if(b){const p=u.toDataURL("image/webp",a);if(v=p.indexOf("data:image/webp")===0?"image/webp":"image/png",s)return v==="image/webp"?p:u.toDataURL("image/png")}else h.globalCompositeOperation="destination-over",h.fillStyle="#ffffff",h.fillRect(0,0,d,c),h.globalCompositeOperation="source-over";return s?u.toDataURL(v,a):await new Promise((p,f)=>u.toBlob(L=>L?p(L):f(new Error("toBlob failed")),v,a))}finally{URL.revokeObjectURL(i)}}async function Ip(e){if(g.assets)try{const n=await Oa(e,1600,.82,!1);return{photo:(await g.assets.upload(n,{type:"image/jpeg"})).id}}catch(n){console.error("asset upload failed, falling back to inline",n)}let t=.6,a=900,s=null;for(let n=0;n<3&&(s=await Oa(e,a,t,!0),!(s.length<16e4));n++)t-=.18,a-=250;if(!s||s.length>23e4||!ia(s))throw new Error("photo too large");return{photoData:s}}function Dp(e){const t=document.activeElement,a=document.createElement("div");a.className="lightbox",a.setAttribute("role","dialog"),a.setAttribute("aria-modal","true"),a.setAttribute("aria-label","תצוגת קבלה מוגדלת"),a.innerHTML=`
      <button class="lightbox-close" aria-label="סגירת התצוגה המוגדלת">✕</button>
      <img src="${r(e)}" alt="קבלה מוגדלת">`;const s=()=>{a.remove(),document.removeEventListener("keydown",n);try{t&&t.focus&&t.focus()}catch{}},n=o=>{o.key==="Escape"&&(o.stopPropagation(),s())};document.addEventListener("keydown",n),a.addEventListener("click",s),m("#overlays").appendChild(a),m(".lightbox-close",a).focus()}function Rp(e,t,a){const s=Logic.memberBreakdown(e,g.expenses,t.id),n=a.filter(p=>p.to===t.id),o=a.filter(p=>p.from===t.id),i=s.net>0?"pos":s.net<0?"neg":"",l=s.net>0?`לקבל ${F(s.net,e.base)}`:s.net<0?`לשלם ${F(-s.net,e.base)}`:"מאוזנים ✓",d=[...n.map(p=>`
        <div class="me-line">
          <span class="debt-ic in" aria-hidden="true">${he("in",16)}</span>
          <span>לקבל מאת <b>${r(me(e,p.from))}</b></span>
          <span class="amt pos">${F(p.cents,e.base)}</span>
          <button class="paybtn" data-act="mark-paid" data-from="${r(p.from)}" data-to="${r(p.to)}" data-cents="${p.cents}"
            aria-label="קיבלתי — רישום תשלום מאת ${r(me(e,p.from))}">קיבלתי</button>
        </div>`),...o.map(p=>`
        <div class="me-line">
          <span class="debt-ic out" aria-hidden="true">${he("out",16)}</span>
          <span>לשלם ל<b>${r(me(e,p.to))}</b></span>
          <span class="amt neg">${F(p.cents,e.base)}</span>
          <button class="paybtn" data-act="mark-paid" data-from="${r(p.from)}" data-to="${r(p.to)}" data-cents="${p.cents}"
            aria-label="שילמתי — רישום תשלום ל${r(me(e,p.to))}">שילמתי</button>
        </div>
        <div class="pay-how-wrap">${Gi(e,p.to,p.cents)}</div>`)].join(""),c=n.reduce((p,f)=>p+f.cents,0),u=o.reduce((p,f)=>p+f.cents,0),h=`
      <div class="tile-grid" style="margin:14px 0 0;">
        <div class="tile"><div class="lbl">ההוצאות שלי</div><div class="val"><span class="num">${s.rows.length}</span></div></div>
        <div class="tile"><div class="lbl">שילמתי בפועל</div><div class="val" style="font-size:16px;">${F(s.paidTotal,e.base)}</div></div>
        <div class="tile"><div class="lbl">חייבים לי</div><div class="val" style="font-size:16px;color:var(--good);">${F(c,e.base)}</div></div>
        <div class="tile"><div class="lbl">עליי לשלם</div><div class="val" style="font-size:16px;color:${u?"var(--bad)":"var(--ink)"};">${F(u,e.base)}</div></div>
      </div>`,b=s.rows.slice().sort((p,f)=>p.expense.date===f.expense.date?0:p.expense.date<f.expense.date?1:-1),v=b.map(p=>{const f=ft(e,p.expense.category);return`
        <div class="acct-row">
          <span class="acct-ic" aria-hidden="true">${f.ic}</span>
          <span class="acct-mid">
            <b>${r(p.expense.note||f.nm)}</b>
            <small>${r(_e(p.expense.date))} · ${p.isPayer?"שילמתי "+Ae(p.total,e.base):"שולם על ידי "+r(me(e,p.expense.payerId))}</small>
          </span>
          <span class="acct-amt">${F(p.share,e.base)}</span>
        </div>`}).join("");return`
      <div class="me-card rise">
        <div class="me-head">
          ${at(t,"lg")}
          <span class="who">החשבון של ${r(t.name)}</span>
          <button class="swap" data-act="pick-me" aria-label="החלפת הזהות שלי בקבוצה">החלפה</button>
        </div>
        <div class="me-net ${i}">${l}</div>
        <p class="bal-detail" style="margin:2px 0 0;">
          שילמתי: ${F(s.paidTotal,e.base)} · החלק שלי: ${F(s.shareTotal,e.base)}
        </p>
        ${d?`<div class="me-lines">${d}</div>`:'<p class="hint" style="margin-top:10px;">אין כרגע חובות פתוחים מולכם.</p>'}
      </div>
      ${t.ghost?"":Wi(e,t,{owed:c})}
      ${h}
      ${s.payments.length?`
        <h2 class="section-title">תשלומים שנרשמו <small>${Pe(s.payments.length,"תשלום אחד","תשלומים")}</small></h2>
        <div class="acct-list">
          ${s.payments.slice().reverse().map(p=>`
            <div class="acct-row">
              <span class="acct-ic" aria-hidden="true">✓</span>
              <span class="acct-mid">
                <b>${p.isPayer?"שילמתי ל"+r(me(e,(p.expense.parts||[])[0])):"התקבל מאת "+r(me(e,p.expense.payerId))}</b>
                <small>${r(_e(p.expense.date))}</small>
              </span>
              <span class="acct-amt">${F(p.isPayer?p.total:p.share,e.base)}</span>
              ${xr(e,p.expense)?`<button class="xbtn" data-act="del-payment" data-id="${r(p.expense.id)}" aria-label="מחיקת רישום התשלום ${p.isPayer?"ל"+r(me(e,(p.expense.parts||[])[0])):"מאת "+r(me(e,p.expense.payerId))}">✕</button>`:""}
            </div>`).join("")}
        </div>`:""}
      ${b.length?`
        <h2 class="section-title">הפירוט שלי <small>${Pe(b.length,"הוצאה אחת","הוצאות")}</small></h2>
        <div class="acct-list">
          ${v}
          <div class="acct-row total">
            <span class="acct-mid"><b>סך החלק שלי</b></span>
            <span class="acct-amt">${F(s.shareTotal,e.base)}</span>
          </div>
        </div>`:""}`}function Bp(e,t,a,s){const n=Logic.dec(e.base),o=Logic.fromCents(s,n),i=ge(`
      <div class="sheet-head"><h2 class="sheet-title">רישום תשלום</h2></div>
      <p class="pay-lead">
        מאת <b>${r(me(e,t))}</b> אל <b>${r(me(e,a))}</b>
      </p>
      <div class="pay-full">
        <span>החוב הפתוח</span>
        <b>${F(s,e.base)}</b>
      </div>
      ${(pe(e.id)===t||fe(e))&&pe(e.id)!==a?`<div class="pay-how-wrap in-sheet">${Gi(e,a,s)}</div>`:""}
      <div class="field" style="margin-top:14px;">
        <label for="pay-amount">הסכום ששולם</label>
        <input class="input ltr" id="pay-amount" inputmode="decimal"
          style="font-size:22px;font-weight:800;"
          value="${r(String(o))}" aria-label="הסכום ששולם ב${r(kt(e.base).n)}">
        <p class="hint">אפשר לשנות לסכום חלקי — היתרה תישאר פתוחה.</p>
      </div>
      <div class="chip-row" style="justify-content:center;margin-bottom:16px;">
        <button class="chip" data-quick="full">הסכום המלא</button>
        <button class="chip" data-quick="half">מחצית</button>
      </div>
      <button class="btn primary block" data-ref="confirm">✓ &nbsp;אישור התשלום</button>
    `),l=m("#pay-amount",i.el);z("[data-quick]",i.el).forEach(d=>d.addEventListener("click",()=>{Ti(l,String(d.dataset.quick==="full"?o:Math.round(o/2*100)/100))})),m('[data-ref="confirm"]',i.el).addEventListener("click",async()=>{const d=xt(l.value);if(!(d>0)){Ie(l,"נא להזין סכום");return}if(Logic.toCents(d,n)>s&&!await Me("סכום גבוה מהחוב",`החוב הפתוח הוא ${Ae(s,e.base)}. לרשום בכל זאת ${Ae(Logic.toCents(d,n),e.base)}?`,"רישום"))return;const c=m('[data-ref="confirm"]',i.el);c.disabled=!0,c.textContent="רושמים…";try{const u={};u[a]=d;const h={id:it("pay"),kind:"payment",amount:d,currency:e.base,category:"other",payerId:t,parts:[a],split:{mode:"custom",custom:u},note:`החזר ל${me(e,a)}`,date:rt(),created:Math.max(Date.now(),1+g.expenses.filter(Logic.isPayment).reduce((b,v)=>Math.max(b,Number(v.created)||0),0))};await C.saveExpense(e.id,h),await Wt(e,g.expenses.concat([h])),i.close(),S("התשלום נרשם ✓")}catch(u){console.error(u),c.disabled=!1,c.innerHTML="✓ &nbsp;אישור התשלום",S(Fe(u,"רישום התשלום נכשל — נסו שוב"))}})}function Ql(e){if(!fe(e))return;if(!g.expensesReady){S("ההוצאות עדיין נטענות — נסו שוב בעוד רגע");return}const t=Logic.computeBalances(e,g.expenses),a={direct:Logic.transfersFor(e,g.expenses,"direct").length,min:Logic.transfersFor(e,g.expenses,"min").length};let s=Logic.settleModeOf(e),n=Logic.transfersFor(e,g.expenses,s);const o=Lr(g.expenses),i=o.length?`${He(o.length,"בקשת מחיקה אחת עדיין ממתינה","בקשות מחיקה עדיין ממתינות")} לאישורכם — ${o.length===1?"ההוצאה הזו עדיין נספרת":"ההוצאות האלה עדיין נספרות"} בהתחשבנות.`:"",l=ge(`
      <div class="sheet-head"><h2 class="sheet-title">סגירת הקבוצה</h2></div>
      ${o.length?`<div class="banner warn close-pend" role="status">⏳ ${r(i)} כדאי לטפל ${o.length===1?"בה":"בהן"} לפני הסגירה.</div>`:""}
      <div class="mgr-total" style="border-radius:var(--radius-sm);">
        <span>סך ההוצאות</span><b>${F(t.grand,e.base)}</b>
      </div>
      ${a.direct?`
      <div class="field" style="margin-top:16px;">
        <label id="settle-lbl">איך מתחשבנים?</label>
        <div class="settle-modes" role="group" aria-labelledby="settle-lbl">
          ${ja.map(c=>`
          <button type="button" class="settle-opt" data-settle="${c.id}" aria-pressed="${s===c.id}">
            <b>${r(c.nm)}</b>
            <span class="settle-count">${Pe(a[c.id],"העברה אחת","העברות")}</span>
            <small>${r(c.hint)}</small>
          </button>`).join("")}
        </div>
      </div>`:""}
      <div data-ref="debtors"></div>
      <a class="btn wa soft block" data-ref="sumwa" href="${r(Dt(An(e)))}" target="_blank" rel="noopener" style="margin-top:14px;">
        ${he("chart",18)} שליחת הסיכום המלא לקבוצה</a>
      <div class="close-final">
        <button class="btn primary block" data-ref="closefinal">
          ${he("finish",18)} סגירת הקבוצה והעברה לארכיון</button>
        <p class="hint">הנתונים נשמרים בארכיון — אפשר לשחזר בכל רגע.</p>
      </div>
    `);function d(){const c={};n.forEach(b=>(c[b.from]=c[b.from]||[]).push(b));const h=Array.from(new Set(n.map(b=>b.to))).map(b=>Be(e,b)).filter(b=>b&&Logic.payBankSuspect(Jt(b))).map(b=>`
        <div class="identity-banner warn close-suspect" role="status">
          <span>⚠️ ${b.id===pe(e.id)?"מספר החשבון שלכם":`מספר החשבון של ${r(b.name)}`} לא עבר את בדיקת התקינות — כדאי לתקן לפני השליחה. ההודעות לחייבים כוללות אזהרה.</span>
          <button class="btn sm" data-act="pay-prefs" data-id="${r(b.id)}">תיקון</button>
        </div>`).join("");m('[data-ref="debtors"]',l.el).innerHTML=h+(n.length?`
        <p class="hint" style="margin:12px 0 4px;">
          לכל מי שנותר לשלם — הודעה אישית בוואטסאפ, ישירות למספר שנרשם,
          עם הסכום, למי להעביר ולאן.
        </p>
        ${Object.keys(c).map(b=>{const v=Be(e,b),p=c[b],f=p.reduce((w,E)=>w+E.cents,0),L=Oe(v),_=zc(e,v,p,s),T=L?ea(L,_):Dt(_);return`
          <div class="mgr-card" style="margin:10px 0 0;">
            <div class="mgr-row" style="cursor:default;">
              ${at(v,"",!0)}
              <span class="mgr-name">${r(v.name)}</span>
              <span class="mgr-amt neg">לשלם ${F(f,e.base)}</span>
            </div>
            ${p.map(w=>{const E=Be(e,w.to),A=Oe(E),D=Logic.timeMs(E.phoneChangedAt),U=Jt(E).methods.map(ua).join(" · ");return`<p class="hint" style="margin:0 14px 8px;">← ל${r(me(e,w.to))}: ${F(w.cents,e.base)}${A?` · <span class="num" dir="ltr">${r(Ct(A))}</span>`:""}${U?` <span class="close-how">· ${r(U)}</span>`:""}${D?` · <small>${E.phoneSet?"הטלפון נקבע":"הטלפון הוחלף"} ב־${Oi(D)}</small>`:""}${dl(e,E,{named:!0})?" · "+dl(e,E,{named:!0}):""}</p>`}).join("")}
            <div class="debtor-send">
              <a class="btn wa soft block" href="${r(T)}" target="_blank" rel="noopener"${L?"":` aria-describedby="nophone-${r(v.id)}"`}>
                ${he("chat",18)} שליחה אל ${r(v.name)}</a>
              ${L?"":`<p class="hint" id="nophone-${r(v.id)}">אין טלפון רשום — בוואטסאפ בוחרים את איש הקשר.</p>`}
            </div>
          </div>`}).join("")}`:`
        <div class="banner" style="margin-top:12px;">🎉 הקבוצה מאוזנת לחלוטין — אין חובות פתוחים. אפשר לסגור בלב שקט.</div>`)}d(),z("[data-settle]",l.el).forEach(c=>c.addEventListener("click",async()=>{if(c.dataset.settle!==s){s=c.dataset.settle,z("[data-settle]",l.el).forEach(u=>u.setAttribute("aria-pressed",String(u.dataset.settle===s)));try{await C.updateTrip(e.id,{settleMode:s}),e.settleMode=s}catch(u){console.error(u),S(qt(u))}n=Logic.transfersFor(e,g.expenses,s),d(),m('[data-ref="sumwa"]',l.el).href=Dt(An(e)),W()}})),m('[data-ref="closefinal"]',l.el).addEventListener("click",async()=>{if(!await Me("סגירת הקבוצה",(i?i+" ":"")+(n.length?n.length===1?`נותר חוב פתוח אחד — אפשר לסגור, והוא יישאר רשום גם בארכיון. לסגור את ״${e.name}״?`:`נותרו ${n.length} חובות פתוחים — אפשר לסגור, והם יישארו רשומים גם בארכיון. לסגור את ״${e.name}״?`:`הקבוצה מאוזנת. לסגור את ״${e.name}״ ולהעביר לארכיון?`),"סגירה וארכוב"))return;const u=m('[data-ref="closefinal"]',l.el);u.disabled=!0;try{const h=Date.now();await C.updateTrip(e.id,{archived:!0,closedAt:h}),e.archived=!0,e.closedAt=h,l.close(),S("הקבוצה נסגרה — הסיכום הסופי שמור ✓"),W(),setTimeout(()=>ec(e),350)}catch(h){console.error(h),u.disabled=!1,S(Fe(h,"הסגירה נכשלה — נסו שוב"))}})}function ec(e){const t=Logic.computeBalances(e,g.expenses),a=Logic.transfersFor(e,g.expenses),s=ge(`
      <div class="sheet-head"><h2 class="sheet-title">הסיכום הסופי — ${r(e.name)}</h2></div>
      ${e.closedAt?`<p class="hint" style="margin:-6px 0 10px;">הקבוצה נסגרה ב־<span class="num">${r(_e(Xs(e.closedAt)))}</span> · הנתונים שמורים במלואם</p>`:""}
      ${a.length?`
        <h2 class="section-title">חובות שנותרו פתוחים</h2>
        ${a.map(n=>`
          <div class="transfer-row">
            <span aria-hidden="true">💸</span>
            <span>מאת <b>${r(me(e,n.from))}</b> אל <b>${r(me(e,n.to))}</b></span>
            <span class="amt">${F(n.cents,e.base)}</span>
          </div>`).join("")}`:'<div class="banner">✓ כל החובות סגורים — ההתחשבנות הושלמה</div>'}
      ${g.expenses.length?rc():""}
      ${pl(e,t)}`);bl(s.el,e)}function tc(e){const t=Logic.computeBalances(e,g.expenses),a=ge(`<div class="sheet-head"><h2 class="sheet-title">הסיכום המלא</h2></div>${g.expenses.length?rc():""}${pl(e,t)}`);bl(a.el,e)}async function Fp(e){if(!fe(e)){S("פתיחת הקבוצה מחדש — דרך מנהל הקבוצה");return}if(await Me("פתיחת הקבוצה מחדש",`״${e.name}״ תחזור לרשימת הקבוצות הפעילות, וכל המשתתפים יוכלו להוסיף הוצאות. כל הנתונים והסיכום נשארים שמורים.`,"פתיחה מחדש"))try{await C.updateTrip(e.id,{archived:!1,closedAt:0}),e.archived=!1,e.closedAt=0,S("הקבוצה נפתחה מחדש — אפשר להוסיף הוצאות"),W()}catch(a){console.error(a),S(Fe(a,"הפתיחה מחדש נכשלה — נסו שוב"))}}function ao(e){const t=ge(`
      <div class="sheet-head"><h2 class="sheet-title">התראות בקבוצה הזו</h2></div>
      <div data-ref="rows"></div>
      <p class="hint" style="margin-top:12px;">ההגדרות נשמרות במכשיר הזה בלבד. ההוצאות עצמן ממשיכות להופיע ברשימה גם כשהקבוצה מושתקת.</p>`,null,{compact:!0}),a=m('[data-ref="rows"]',t.el),s=()=>{const n=wt(e.id);a.innerHTML=`
        <button type="button" class="toggle-row" role="switch" aria-checked="${et()}" data-ref="device">
          <span class="toggle-ic" aria-hidden="true">${he(et()?"bell":"bellOff",20)}</span>
          <span class="toggle-mid"><b>התראות במכשיר הזה</b><small>צליל והודעה כשמישהו אחר רושם הוצאה — בכל הקבוצות</small></span>
          <span class="toggle-state">${et()?"פעיל":"כבוי"}</span>
        </button>
        <button type="button" class="toggle-row" role="switch" aria-checked="${n}" data-ref="mute">
          <span class="toggle-ic" aria-hidden="true">${he(n?"bellOff":"bell",20)}</span>
          <span class="toggle-mid"><b>לא לעדכן אותי על כל הוצאה בקבוצה הזו</b><small>רק ״${r(e.name)}״ מושתקת — בלי צליל ובלי הודעה; שאר הקבוצות כרגיל</small></span>
          <span class="toggle-state">${n?"מושתק":"כבוי"}</span>
        </button>`;const o=()=>{const i=m('[data-ref="device"]',a);i&&i.focus()};m('[data-ref="device"]',a).addEventListener("click",()=>{et()?(_a(!1),S("ההתראות כובו"),s(),W(),o()):(_a(!0),Qn(),vi().then(i=>{S(i?"התראות פעילות 🔔 — כך נשמע כשנרשמת הוצאה":"התראות פעילות בתוך האפליקציה 🔔"),s(),W(),o()}))}),m('[data-ref="mute"]',a).addEventListener("click",()=>{const i=!wt(e.id);kd(e.id,i),S(i?"הקבוצה הושתקה במכשיר הזה 🔕":"ההתראות על הקבוצה הזו חזרו"),s(),W();const l=m('[data-ref="mute"]',a);l&&l.focus()})};s()}const no=["🏷️","🍕","☕","🍦","🍷","🚗","⛽","🅿️","🚆","🏖️","🎭","🎮","💊","🧴","👕","📚","🐶","🧸","🔧","💳","🎂","🧺","🏕️","🎿"],ac={emerald:"אמרלד",blue:"כחול",plum:"סגול",rust:"חלודה",gold:"זהב",teal:"טורקיז",rose:"ורוד",slate:"אפור־כחול"};function so(e,t){if(!fe(e)){S("ניהול הקטגוריות שמור למנהל הקבוצה");return}let a=(e.cats||[]).map(v=>Object.assign({},v)),s=null,n=no[0],o=Logic.CAT_PALETTE_KEYS[0];const l=ge(`
      <div class="sheet-head"><h2 class="sheet-title">ניהול קטגוריות</h2></div>
      <p class="hint" style="margin:-6px 0 12px;">הקטגוריות הקבועות של סוג הקבוצה נשארות. כאן מוסיפים קטגוריות משלכם — עד 20 — והן מופיעות לכל המשתתפים בטופס ההוצאה ובסיכום.</p>
      <div class="cat-list" data-ref="list" role="list" aria-label="הקטגוריות המותאמות של הקבוצה"></div>
      <h2 class="section-title" data-ref="formtitle">קטגוריה חדשה</h2>
      <div class="field">
        <label for="cat-name">שם הקטגוריה</label>
        <input class="input" id="cat-name" maxlength="24" autocomplete="off" placeholder="למשל: גלידה, חניה, דלק">
      </div>
      <div class="field">
        <label id="cat-ic-lbl">סמל</label>
        <div class="emoji-grid" role="group" aria-labelledby="cat-ic-lbl" data-ref="icons"></div>
      </div>
      <div class="field">
        <label id="cat-color-lbl">צבע</label>
        <div class="cat-palette" role="group" aria-labelledby="cat-color-lbl" data-ref="colors"></div>
      </div>
      <div class="sheet-foot">
        <button class="btn block primary" data-ref="save">שמירת הקטגוריה</button>
        <button class="btn block" data-ref="canceledit" hidden style="margin-top:8px;">ביטול העריכה</button>
      </div>`).el,d=m("#cat-name",l),c=()=>{const v=m('[data-ref="list"]',l);a.length?v.setAttribute("role","list"):v.removeAttribute("role"),v.innerHTML=a.length?a.map(p=>`
        <div class="cat-row" role="listitem">
          <span class="cat-row-ic" aria-hidden="true">${p.ic}</span>
          <span class="dot" style="background:var(--cat-${p.color})" aria-hidden="true"></span>
          <span class="cat-row-nm">${r(p.nm)}<span class="sr-only"> · צבע ${ac[p.color]||""}</span></span>
          <button type="button" class="btn sm" data-edit="${r(p.id)}" aria-label="עריכת הקטגוריה ${r(p.nm)}">עריכה</button>
          <button type="button" class="btn sm" data-del="${r(p.id)}" aria-label="הסרת הקטגוריה ${r(p.nm)}">הסרה</button>
        </div>`).join(""):'<p class="hint" style="margin:0 0 6px;">עדיין אין קטגוריות מותאמות בקבוצה הזו.</p>',z("[data-edit]",l).forEach(p=>p.addEventListener("click",()=>{const f=a.find(L=>L.id===p.dataset.edit);f&&(s=f.id,d.value=f.nm,n=f.ic,o=f.color,m('[data-ref="formtitle"]',l).textContent=`עריכת ״${f.nm}״`,m('[data-ref="save"]',l).textContent="שמירת השינויים",m('[data-ref="canceledit"]',l).hidden=!1,u(),d.focus())})),z("[data-del]",l).forEach(p=>p.addEventListener("click",async()=>{const f=a.find(T=>T.id===p.dataset.del);if(!f)return;const L=g.expenses.filter(T=>T.category===f.id).length;await Me(`הסרת הקטגוריה ״${f.nm}״`,L?`${He(L,"הוצאה אחת","הוצאות")} ${L===1?"מסומנת":"מסומנות"} בקטגוריה הזו — אחרי ההסרה ${L===1?"היא תוצג":"הן יוצגו"} תחת ״אחר״.`:"הקטגוריה תוסר מרשימת הקבוצה.","הסרה",!0)&&(await b(a.filter(T=>T.id!==f.id),"הקטגוריה הוסרה"),s===f.id&&h())}))},u=()=>{m('[data-ref="icons"]',l).innerHTML=no.map(v=>`<button type="button" class="emoji-cell" data-ic="${v}" aria-pressed="${v===n}" aria-label="סמל ${v}">${v}</button>`).join(""),m('[data-ref="colors"]',l).innerHTML=Logic.CAT_PALETTE_KEYS.map(v=>`<button type="button" class="cat-swatch" data-color="${v}" aria-pressed="${v===o}" aria-label="${ac[v]}" style="--sw:var(--cat-${v})"><span class="dot" aria-hidden="true"></span></button>`).join(""),z("[data-ic]",l).forEach(v=>v.addEventListener("click",()=>{n=v.dataset.ic,z("[data-ic]",l).forEach(p=>p.setAttribute("aria-pressed",String(p===v)))})),z("[data-color]",l).forEach(v=>v.addEventListener("click",()=>{o=v.dataset.color,z("[data-color]",l).forEach(p=>p.setAttribute("aria-pressed",String(p===v)))}))},h=()=>{s=null,d.value="",n=no[0],o=Logic.CAT_PALETTE_KEYS[0],m('[data-ref="formtitle"]',l).textContent="קטגוריה חדשה",m('[data-ref="save"]',l).textContent="שמירת הקטגוריה",m('[data-ref="canceledit"]',l).hidden=!0,u()};async function b(v,p){const f=Logic.normalizeCats(v),L=m('[data-ref="save"]',l);L.disabled=!0;try{await C.updateTrip(e.id,{cats:f}),e.cats=f,a=f.map(_=>Object.assign({},_)),S(p),c(),W(),t&&t()}catch(_){console.error(_),S(Fe(_,"השמירה נכשלה — נסו שוב"))}finally{L.disabled=!1}}m('[data-ref="save"]',l).addEventListener("click",async()=>{const v=d.value.trim();if(!v){Ie(d,"נא להזין שם לקטגוריה");return}if(a.some(f=>f.id!==s&&f.nm===v)){Ie(d,"כבר יש קטגוריה בשם הזה");return}if(wn(e,g.expenses).some(f=>!f.custom&&f.nm===v)){Ie(d,"זה שם של קטגוריה קבועה בקבוצה — בחרו שם אחר");return}if(!s&&a.length>=20){Ie(d,"אפשר עד 20 קטגוריות מותאמות בקבוצה");return}const p=s?a.map(f=>f.id===s?Object.assign({},f,{nm:v,ic:n,color:o}):f):a.concat([{id:"c_"+it("").replace(/[^a-z0-9]/gi,"").toLowerCase().slice(0,10).padEnd(6,"0"),nm:v,ic:n,color:o}]);await b(p,s?"הקטגוריה עודכנה ✓":`הקטגוריה ״${v}״ נוספה ✓`),h()}),m('[data-ref="canceledit"]',l).addEventListener("click",h),c(),u()}const ne={bg:"#F6F3EA",surface:"#FFFEFA",ink:"#14231B",ink2:"#3E4F46",muted:"#6B7A72",brand:"#1E6B4C",brandStrong:"#135038",brandSoft:"#DCEBE3",line:"#D8D2C4",gold:"#B08D3C",goldSoft:"#F1E7CF",onBrand:"#FFFFFF"},ms=[{id:"story",nm:"סטורי",w:1080,h:1920},{id:"square",nm:"ריבוע",w:1080,h:1080}],Up=[{id:"classic",nm:"הכרטיס הקלאסי",sub:"הסך, הימים, הקטגוריות ומי שילם"},{id:"receipt",nm:"הקבלה",sub:"ההוצאות שורה אחרי שורה"},{id:"flight",nm:"כרטיס הטיסה",sub:"לקבוצות טיול",trip:!0},{id:"passport",nm:"הדרכון",sub:"חותמת היעד — לקבוצות טיול",trip:!0}],Et='"Frank Ruhl Libre", "Times New Roman", serif',nc='Assistant, "Helvetica Neue", Arial, system-ui, sans-serif',Kp='"Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", sans-serif',ue=(e,t,a)=>`${e} ${t}px ${a||nc}`;let bs=null;function zp(){return bs||(bs=(async()=>{if(!document.fonts||!document.fonts.load)return;const e=['700 48px "Frank Ruhl Libre"',"400 32px Assistant","600 32px Assistant","700 32px Assistant","800 32px Assistant"],t=Promise.all(e.map(a=>document.fonts.load(a).catch(()=>null)));await Promise.race([t,new Promise(a=>setTimeout(a,1500))])})().catch(()=>null),bs)}function gs(e){const t=document.createElement("canvas");t.width=e.w,t.height=e.h;const a=t.getContext("2d");return a.direction="rtl",a.textAlign="right",a.textBaseline="alphabetic",typeof a.roundRect!="function"&&(a.roundRect=function(s,n,o,i,l){const d=Math.max(0,Math.min(Array.isArray(l)?Number(l[0])||0:Number(l)||0,o/2,i/2));this.moveTo(s+d,n),this.arcTo(s+o,n,s+o,n+i,d),this.arcTo(s+o,n+i,s,n+i,d),this.arcTo(s,n+i,s,n,d),this.arcTo(s,n,s+o,n,d),this.closePath()}),{c:t,ctx:a}}function qp(e,t,a){if(!(a>0)||e.measureText(t).width<=a)return t;let s=t;for(;s.length>1&&e.measureText(s+"…").width>a;)s=s.slice(0,-1);return s.replace(/\s+$/,"")+"…"}function de(e,t,a,s,n){e.font=n.font,e.fillStyle=n.color||ne.ink,e.textAlign=n.align||"right";const o=qp(e,String(t==null?"":t),n.maxW);return e.fillText(o,a,s),e.measureText(o).width}function Ru(e,t,a,s,n){e.font=n.font;const o=Logic.wrapWords(t,n.maxW,i=>e.measureText(i).width,n.maxLines||3);return o.forEach((i,l)=>de(e,i,a,s+l*n.lh,n)),s+o.length*n.lh}function Pa(e,t,a,s,n,o){if(!t)return 0;e.font=`${n}px ${Kp}`,e.textAlign=o||"right",e.fillStyle=ne.ink;const i=e.measureText(t).width;return!(i>0)||i>n*2.2?0:(e.fillText(t,a,s),i)}function Na(e,t,a,s,n,o,i,l,d){e.beginPath(),e.roundRect(t,a,s,n,o),i&&(e.fillStyle=i,e.fill()),l&&(e.strokeStyle=l,e.lineWidth=d||2,e.stroke())}function io(e,t,a,s,n,o,i,l){e.save(),e.beginPath(),e.setLineDash(l||[]),e.strokeStyle=o,e.lineWidth=i||2,e.moveTo(t,a),e.lineTo(s,n),e.stroke(),e.restore()}function sc(e,t,a,s,n,o,i){Na(e,t-s,a,s,n,n/2,ne.line);const l=Math.max(n,Math.round(s*Math.min(1,Math.max(0,o))));Na(e,t-l,a,l,n,n/2,i||ne.brand)}const gt=(e,t)=>Ae(e,t);function ys(e,t,a){e.fillStyle=ne.bg,e.fillRect(0,0,t,a),e.fillStyle=ne.brand,e.fillRect(0,0,t,10),de(e,"שווה בשווה",t-72,a-56,{font:ue(700,30),color:ne.brandStrong}),de(e,Es,72,a-56,{font:ue(400,28),color:ne.muted,align:"left"})}function Jp(e,t,a,s,n){const i=t-144,l=Pa(e,Xe(a),t-72,s,n?92:72),d=t-72-(l?l+28:0),c=n?86:68;de(e,a.name||"",d,s,{font:ue(700,c,Et),maxW:i-(l?l+28:0)}),s+=n?56:48;const u=vs(a);return u&&de(e,u,t-72,s,{font:ue(400,n?36:32),color:ne.muted,maxW:i}),s+(n?72:60)}function Ha(e){return e.start?`${_e(e.start)}–${_e(e.end||e.start)}`:""}function vs(e){return[e.dest||"",Ha(e),qe(e).nm].filter(Boolean).join(" · ")}function ic(e){const t=fe(e)||dt(e).sum==="on",a=pe(e.id);if(t){const n=Logic.onlyExpenses(g.expenses);return{all:!0,expenses:n,total:n.reduce((o,i)=>o+Logic.expenseBaseCents(e,i),0),label:"סך ההוצאות"}}const s=a?Logic.memberBreakdown(e,g.expenses,a):{rows:[],shareTotal:0};return{all:!1,expenses:s.rows.map(n=>n.expense),total:s.shareTotal,label:"החלק שלי",meId:a}}const $s=(e,t)=>ft(e,t),oo=e=>Logic.destCountries(ln()).filter(t=>t.key!==Logic.countryKey(e.dest));function Yp(e,t,a){const{c:s,ctx:n}=gs(t),o=t.w,i=t.h,l=72,d=o-l*2,c=i>o;ys(n,o,i);let u=Jp(n,o,e,c?210:150,c);u+=c?30:0,de(n,a.label,o-l,u,{font:ue(600,c?38:34),color:ne.muted}),u+=c?132:100,de(n,gt(a.total,e.base),o-l,u,{font:ue(800,c?132:96),color:ne.brandStrong,maxW:d}),u+=c?100:64;const h=Logic.spanDays(e,a.expenses),b=[{v:String(h),l:h===1?"יום אחד":"ימים"},{v:String(a.expenses.length),l:a.expenses.length===1?"הוצאה אחת":"הוצאות"},{v:String((e.members||[]).length),l:"משתתפים"}],v=20,p=(d-v*2)/3,f=c?180:124;b.forEach((U,I)=>{const R=o-l-I*(p+v);Na(n,R-p,u,p,f,28,ne.surface,ne.line,2),de(n,U.v,R-p/2,u+(c?96:66),{font:ue(800,c?68:48),align:"center"}),de(n,U.l,R-p/2,u+f-(c?38:30),{font:ue(600,c?30:28),color:ne.muted,align:"center",maxW:p-20})}),u+=f+(c?96:64);const L=Logic.topCategories(e,a.expenses,3),_=c?136:96;L.length&&(de(n,"הקטגוריות המובילות",o-l,u,{font:ue(700,c?42:36,Et)}),u+=c?72:54,L.forEach(U=>{const I=$s(e,U.cat),R=Pa(n,I.ic,o-l,u,c?40:36);de(n,I.nm,o-l-(R?R+16:0),u,{font:ue(700,c?38:34),maxW:d-320}),de(n,`${gt(U.cents,e.base)} · ${U.pct}%`,l,u,{font:ue(600,c?32:30),color:ne.ink2,align:"left"}),sc(n,o-l,u+(c?28:22),d,c?18:14,U.pct/100),u+=_}));const T=i-150,w=c?96:76,E=c?102:64,A=Math.floor((T-u-E)/w),D=a.all&&A>0?Logic.payerTotals(e,a.expenses).slice(0,Math.min(5,A)):[];if(D.length){u+=c?30:4,de(n,"מי שילם",o-l,u,{font:ue(700,c?42:36,Et)}),u+=c?72:60;const U=D[0].cents||1;D.forEach(I=>{de(n,me(e,I.id),o-l,u,{font:ue(700,c?36:32),maxW:d-300}),de(n,gt(I.cents,e.base),l,u,{font:ue(600,c?32:30),color:ne.ink2,align:"left"}),sc(n,o-l,u+(c?24:18),d,c?14:10,I.cents/U,ne.gold),u+=w})}return s}function Wp(e,t,a){const{c:s,ctx:n}=gs(t),o=t.w,i=t.h,l=i>o;ys(n,o,i);const d=90,c=o-d*2,u=l?130:90,h=i-130,b=l?56:50,v=l?330:290,p=l?260:240,f=Math.max(1,Math.floor((h-u-v-p)/b)),L=Logic.receiptLines(e,a.expenses,Math.min(24,f)),_=v+(L.lines.length+(L.more?1:0))*b+p,T=Math.max(u,Math.round((i-_)/2)-(l?30:0)),w=Math.min(h,T+_);n.save(),n.shadowColor="rgba(20,35,27,0.14)",n.shadowBlur=40,n.shadowOffsetY=16,Na(n,d,T,c,w-T,10,ne.surface),n.restore(),n.fillStyle=ne.bg;for(let X=d;X<d+c;X+=36)n.beginPath(),n.moveTo(X,w),n.lineTo(X+18,w-18),n.lineTo(X+36,w),n.closePath(),n.fill();const E=56,A=d+c-E,D=d+E,U=c-E*2;let I=T+(l?110:90);de(n,"קבלה",A,I,{font:ue(700,l?72:60,Et)});const R=Pa(n,Xe(e),D,I,56,"left");I+=l?58:50,de(n,e.name||"",A,I,{font:ue(700,36),maxW:U-(R?R+20:0)}),I+=44;const re=vs(e);return re&&(de(n,re,A,I,{font:ue(400,28),color:ne.muted,maxW:U}),I+=30),I+=24,io(n,D,I,A,I,ne.line,2,[10,10]),I+=54,L.lines.forEach(X=>{const P=X.date?_e(X.date):"",q=P?de(n,P,A,I,{font:ue(600,l?28:26),color:ne.muted}):0,Z=de(n,gt(X.cents,e.base),D,I,{font:ue(700,l?30:28),align:"left"}),ce=X.note||$s(e,X.category).nm;de(n,ce,A-q-(P?22:0),I,{font:ue(400,l?30:28),maxW:U-q-Z-60}),I+=b}),L.more&&(de(n,`ועוד ${He(L.more,"הוצאה אחת","הוצאות")}`,A,I,{font:ue(400,26),color:ne.muted}),I+=b),I+=12,io(n,D,I,A,I,ne.line,2,[10,10]),I+=68,de(n,a.all?"סך הכול":"החלק שלי",A,I,{font:ue(700,36,Et)}),de(n,gt(a.total,e.base),D,I,{font:ue(800,44),color:ne.brandStrong,align:"left"}),I+=48,de(n,`${He(L.count,"הוצאה אחת","הוצאות")} · ${He((e.members||[]).length,"משתתף אחד","משתתפים")} · ${He(Logic.spanDays(e,a.expenses),"יום אחד","ימים")}`,A,I,{font:ue(400,26),color:ne.muted,maxW:U}),s}function Gp(e,t,a){const{c:s,ctx:n}=gs(t),o=t.w,i=t.h,l=i>o;ys(n,o,i);const d=70,c=o-d*2,u=l?1180:820,h=Math.round((i-u)/2)-(l?40:20);n.save(),n.shadowColor="rgba(20,35,27,0.16)",n.shadowBlur=44,n.shadowOffsetY=18,Na(n,d,h,c,u,40,ne.surface),n.restore(),n.save(),n.beginPath(),n.roundRect(d,h,c,u,40),n.clip(),n.fillStyle=ne.brand,n.fillRect(d,h,c,130),n.restore();const b=d+c-56,v=d+56,p=c-112;de(n,"כרטיס הטיסה",b,h+84,{font:ue(700,48,Et),color:ne.onBrand}),de(n,"BOARDING PASS",v,h+80,{font:ue(700,30),color:ne.onBrand,align:"left"});let f=h+240;const L=(U,I,R,re,X,P)=>{de(n,U,R,f,{font:ue(600,26),color:ne.muted,align:re}),de(n,I,R,f+(P?74:52),{font:ue(P?800:700,P?64:40,P?Et:nc),align:re,maxW:X})},_=Pa(n,Xe(e),v,f+70,88,"left");L("הקבוצה",e.name||"",b,"right",p-(_?_+40:0),!0),f+=150,L("אל",e.dest||"—",b,"right",p/2-20,!0),L("תאריכים",Ha(e)||"—",v+p/2-20,"right",p/2-20,!1),f+=150,L("נוסעים",String((e.members||[]).length),b,"right",p/3,!1),L("ימים",String(Logic.spanDays(e,a.expenses)),b-p/3,"right",p/3-20,!1),L("הוצאות",String(a.expenses.length),b-p*2/3,"right",p/3-20,!1),f+=150,L(a.label,gt(a.total,e.base),b,"right",p,!0),f+=150;const T=f+(l?40:0);io(n,d,T,d+c,T,ne.line,3,[16,14]),n.fillStyle=ne.bg,n.beginPath(),n.arc(d,T,26,0,Math.PI*2),n.fill(),n.beginPath(),n.arc(d+c,T,26,0,Math.PI*2),n.fill();const w=T+60,E=l?150:110;let A=Logic.hashId(e.id||e.name),D=v;for(n.fillStyle=ne.ink;D<b-8;){A=A*1103515245+12345>>>0;const U=4+A%9;(A>>8)%3&&n.fillRect(D,w,U,E),D+=U+5}return de(n,"שווה בשווה · חלוקת הוצאות הוגנת",b,w+E+56,{font:ue(600,26),color:ne.muted,maxW:p}),s}function Vp(e,t,a){const{c:s,ctx:n}=gs(t),o=t.w,i=t.h,l=i>o,d=72,c=o-d*2;ys(n,o,i),n.save(),n.strokeStyle="rgba(30,107,76,0.08)",n.lineWidth=2;for(let D=40;D<i-90;D+=44)n.beginPath(),n.moveTo(0,D),n.lineTo(o,D),n.stroke();n.restore();let u=l?170:130;de(n,"הדרכון",o-d,u,{font:ue(700,l?76:64,Et)}),de(n,"PASSPORT",d,u-6,{font:ue(700,30),color:ne.muted,align:"left"}),u+=56,de(n,e.name||"",o-d,u,{font:ue(600,34),color:ne.ink2,maxW:c});const h=l?340:250,b=o/2,v=u+h+(l?200:90);n.save(),n.translate(b,v),n.rotate(-8*Math.PI/180),n.strokeStyle=ne.brand,n.lineWidth=10,n.beginPath(),n.arc(0,0,h,0,Math.PI*2),n.stroke(),n.lineWidth=4,n.beginPath(),n.arc(0,0,h-26,0,Math.PI*2),n.stroke(),n.setLineDash([6,10]),n.lineWidth=3,n.beginPath(),n.arc(0,0,h-44,0,Math.PI*2),n.stroke(),n.setLineDash([]);const p=Pa(n,Xe(e),0,-h*.42,l?110:84,"center");de(n,e.dest||e.name||"",0,p?-h*.05:-h*.1,{font:ue(700,l?84:66,Et),color:ne.brandStrong,align:"center",maxW:h*1.5});const f=Ha(e);f&&de(n,f,0,h*.22,{font:ue(700,l?40:34),color:ne.brand,align:"center",maxW:h*1.5}),de(n,"ביקור · "+He(Logic.spanDays(e,a.expenses),"יום אחד","ימים"),0,h*.46,{font:ue(600,l?32:28),color:ne.brand,align:"center",maxW:h*1.3}),de(n,"שווה בשווה",0,h*.68,{font:ue(700,26),color:ne.muted,align:"center"}),n.restore(),u=v+h+(l?150:80),de(n,a.label,o-d,u,{font:ue(600,l?34:30),color:ne.muted}),de(n,gt(a.total,e.base),d,u,{font:ue(800,l?48:38),color:ne.brandStrong,align:"left"});const L=i-150;if(l){u+=60;const D=Logic.spanDays(e,a.expenses),U=a.expenses.length,I=(e.members||[]).length,R=[{v:String(D),l:D===1?"יום אחד":"ימים"},{v:String(U),l:U===1?"הוצאה אחת":"הוצאות"},{v:String(I),l:"משתתפים"}],re=20,X=(c-re*2)/3,P=150;R.forEach((q,Z)=>{const ce=o-d-Z*(X+re);Na(n,ce-X,u,X,P,28,ne.surface,ne.line,2),de(n,q.v,ce-X/2,u+78,{font:ue(800,56),align:"center"}),de(n,q.l,ce-X/2,u+P-32,{font:ue(600,28),color:ne.muted,align:"center",maxW:X-20})}),u+=P}const _=92,T=(c-_*2*3)/2,w=_*2+30,E=Math.floor((L-u-(l?150:130))/w),A=E>0?oo(e).slice(0,Math.min(l?6:3,E*3)):[];return A.length&&(u+=l?90:70,de(n,"עוד חותמות בדרכון",o-d,u,{font:ue(700,34,Et)}),u+=60,A.forEach((D,U)=>{const I=U%3,R=Math.floor(U/3),re=o-d-_-I*(_*2+T),X=u+_+R*(_*2+30);n.save(),n.translate(re,X),n.rotate((U%2?6:-5)*Math.PI/180),n.strokeStyle=ne.gold,n.lineWidth=5,n.setLineDash([8,8]),n.beginPath(),n.arc(0,0,_,0,Math.PI*2),n.stroke(),n.setLineDash([]);const P=Pa(n,D.flag,0,-22,44,"center");de(n,D.name,0,P?26:8,{font:ue(700,26),color:ne.ink2,align:"center",maxW:_*1.6}),D.years.length&&de(n,String(D.years[D.years.length-1]),0,P?58:44,{font:ue(600,22),color:ne.muted,align:"center"}),n.restore()})),s}function Xp(e,t,a,s){const n=Logic.spanDays(e,a.expenses),o=`״${e.name}״${vs(e)?" — "+vs(e):""}. ${a.label}: ${gt(a.total,e.base)}, ${He(n,"יום אחד","ימים")}, ${He(a.expenses.length,"הוצאה אחת","הוצאות")}, ${He((e.members||[]).length,"משתתף אחד","משתתפים")}.`;if(t==="classic"){const l=Logic.topCategories(e,a.expenses,3).map(c=>`${$s(e,c.cat).nm} ${gt(c.cents,e.base)} (${c.pct}%)`),d=a.all?Logic.payerTotals(e,a.expenses).slice(0,5).map(c=>`${me(e,c.id)} ${gt(c.cents,e.base)}`):[];return`הכרטיס הקלאסי: ${o}${l.length?" הקטגוריות המובילות: "+l.join(", ")+".":""}${d.length?" מי שילם: "+d.join(", ")+".":""}`}if(t==="receipt"){const l=Logic.receiptLines(e,a.expenses,24);return`הקבלה: ${o} השורות: ${l.lines.map(d=>`${d.date?_e(d.date)+" ":""}${d.note||$s(e,d.category).nm} ${gt(d.cents,e.base)}`).join("; ")}${l.more?` ועוד ${He(l.more,"הוצאה אחת","הוצאות")}`:""}.`}if(t==="flight")return`כרטיס הטיסה: ${o} אל ${e.dest||"—"}, ${Ha(e)||"ללא תאריכים"}.`;const i=oo(e).slice(0,s&&s.h>s.w?6:3).map(l=>l.name+(l.years.length?" "+l.years[l.years.length-1]:""));return`הדרכון: חותמת ${e.dest||e.name}${Ha(e)?" "+Ha(e):""}. ${o}${i.length?" עוד חותמות בדרכון, מקבוצות הטיול האחרות במכשיר הזה: "+i.join(", ")+".":""}`}async function Zp(e,t,a){await zp();const s=ms.find(i=>i.id===a)||ms[0],n=ic(e);return{canvas:(t==="receipt"?Wp:t==="flight"?Gp:t==="passport"?Vp:Yp)(e,s,n),desc:Xp(e,t,n,s),size:s}}const Qp=e=>new Promise(t=>{try{e.toBlob(a=>t(a),"image/png")}catch{t(null)}});async function eu(e,t,a,s){const n=await Qp(t);if(!n)return"none";const o=`shaveh-${qe(e).id}-${rt()}.png`,i=typeof File!="undefined"?new File([n],o,{type:"image/png"}):null;if(!s&&i&&navigator.share&&navigator.canShare){let l=!1;try{l=navigator.canShare({files:[i]})}catch{l=!1}if(l)try{return await navigator.share({files:[i],text:`${a} — ״${e.name}״ · ${Gt}`}),"shared"}catch(d){if(d&&d.name==="AbortError")return"aborted";console.error(d)}}return Ca()?(await as(o,n),"saved"):"none"}function oc(e,t){const a=qe(e).id==="trip",s=Up.filter(p=>!p.trip||a),n={card:s.some(p=>p.id===(t&&t.card))?t.card:"classic",size:ms.some(p=>p.id===(t&&t.size))?t.size:"story",busy:!1,canvas:null,desc:""},o=ic(e),i=o.all?An(e):o.meId?Rs(e,o.meId):"",l=!o.all&&!o.meId,d=a&&oo(e).length?" בכרטיס ״הדרכון״ מופיעות גם חותמות קטנות של היעדים מקבוצות הטיול האחרות במכשיר הזה.":"",c=ge(`
      <div class="sheet-head"><h2 class="sheet-title">מזכרת לשיתוף</h2></div>
      <p class="hint" style="margin:-6px 0 12px;">תמונה מעוצבת של הקבוצה — לסטורי, לוואטסאפ או לאלבום. בתמונה אין טלפונים ואין פרטי בנק.${o.all?"":" הכרטיס מציג את החלק שלכם בלבד."}${d}</p>
      ${l?'<div class="banner" role="note" data-ref="nome">עוד לא נבחר השם שלכם בקבוצה, ולכן הכרטיס ריק. <button type="button" class="btn sm" data-act="pick-me">בחירת השם שלי</button></div>':""}
      <div class="chip-row card-pick" role="group" aria-label="בחירת כרטיס">
        ${s.map(p=>`<button type="button" class="chip" data-card="${p.id}" aria-pressed="${p.id===n.card}">${r(p.nm)}</button>`).join("")}
      </div>
      <div class="chip-row card-size" role="group" aria-label="יחס התמונה">
        ${ms.map(p=>`<button type="button" class="chip" data-size="${p.id}" aria-pressed="${p.id===n.size}">${r(p.nm)} <small class="num">${p.w}×${p.h}</small></button>`).join("")}
      </div>
      <div class="share-card-preview" data-ref="preview" aria-live="polite"><p class="hint">מציירים את הכרטיס…</p></div>
      <details class="card-desc"><summary>תיאור מילולי של הכרטיס</summary><p data-ref="desc"></p></details>
      <div class="sheet-foot">
        <button class="btn primary" data-ref="share" disabled>שיתוף התמונה</button>
        ${Ca()?'<button class="btn" data-ref="save" disabled>שמירת התמונה</button>':""}
        ${i?`<a class="btn wa soft" href="${r(Dt(i))}" target="_blank" rel="noopener">שליחת הסיכום בוואטסאפ</a>`:""}
      </div>`),u=c.el,h=()=>(s.find(p=>p.id===n.card)||s[0]).nm,b=async()=>{const p=++v;n.busy=!0,z("[data-ref=share],[data-ref=save]",u).forEach(f=>{f.disabled=!0});try{const f=await Zp(e,n.card,n.size);if(p!==v||!u.isConnected)return;n.canvas=f.canvas,n.desc=f.desc;const L=document.createElement("img");L.alt=f.desc,L.width=f.size.w,L.height=f.size.h,L.src=f.canvas.toDataURL("image/png"),L.dataset.card=n.card,L.dataset.size=n.size;const _=m("[data-ref=preview]",u);_.innerHTML="",_.appendChild(L),m("[data-ref=desc]",u).textContent=f.desc,z("[data-ref=share],[data-ref=save]",u).forEach(T=>{T.disabled=!1})}catch(f){console.error(f),m("[data-ref=preview]",u).innerHTML='<p class="hint">הציור לא הצליח בדפדפן זה — אפשר לשלוח את הסיכום בוואטסאפ.</p>'}finally{n.busy=!1}};let v=0;return u.addEventListener("click",async p=>{const f=p.target.closest("button[data-card]"),L=p.target.closest("button[data-size]");if(f)n.card=f.dataset.card,z("button[data-card]",u).forEach(_=>_.setAttribute("aria-pressed",String(_.dataset.card===n.card))),b();else if(L)n.size=L.dataset.size,z("button[data-size]",u).forEach(_=>_.setAttribute("aria-pressed",String(_.dataset.size===n.size))),b();else if(p.target.closest("[data-ref=share],[data-ref=save]")){const _=!!p.target.closest("[data-ref=save]");if(!n.canvas||n.busy)return;const T=p.target.closest("button");T.disabled=!0;try{const w=await eu(e,n.canvas,h(),_);w==="saved"?S("התמונה נשמרה במכשיר — אפשר לשתף אותה בוואטסאפ או בסטורי"):w==="none"&&S("השיתוף לא זמין בדפדפן זה — אפשר לשלוח את הסיכום בוואטסאפ")}catch(w){console.error(w),S("השיתוף לא הצליח — נסו שוב")}finally{T.disabled=!1}}}),b(),c}const rc=()=>`<button class="btn block" data-act="share-cards" style="margin:0 0 14px;">${he("image",18)}&nbsp; מזכרת לשיתוף</button>`;function tu(e){const t=Logic.destCountries(e);if(!t.length)return"";const a=t.length;return`
      <section class="my-countries rise" aria-labelledby="mc-ttl">
        <h2 class="section-title" id="mc-ttl">המדינות שלי <small>${a}</small></h2>
        <p class="hint">${a===1?"יעד אחד":`<span class="num">${a}</span> יעדים`} בקבוצות הטיול שלכם</p>
        <ul class="stamps" aria-label="חותמות היעדים">
          ${t.map(s=>`
            <li class="stamp">
              ${s.flag?`<span class="stamp-flag" aria-hidden="true">${r(s.flag)}</span>`:""}
              <b>${r(s.name)}</b>
              <small class="num">${r(s.years.join(" · "))}${s.count>1?` · ×${s.count}`:""}</small>
            </li>`).join("")}
        </ul>
      </section>`}async function au(e){const t=An(e);if(navigator.share)try{await navigator.share({text:t});return}catch(a){if(a&&a.name==="AbortError")return}try{await navigator.clipboard.writeText(t),S("הסיכום הועתק — אפשר להדביק בוואטסאפ")}catch(a){console.error(a),S("השיתוף לא הצליח בדפדפן זה")}}function lc(e){const a=(C&&C.joinKeyFor?C.joinKeyFor(e.id):"")||Ja(e.id)||e.joinKey||"";return $a.test(a)?a:""}function cc(e){return Ne&&!!C&&C.kind==="rest"&&C.secure&&!lc(e)}function Ia(e){if(!Ne)return _c;let t=location.origin+location.pathname+"?join="+encodeURIComponent(e.id);const a=[],s=lc(e);s&&a.push("k="+s);const n=ko?null:kn();if(n){const o=btoa(unescape(encodeURIComponent(JSON.stringify({u:n.u,k:n.k})))).replace(/\+/g,"-").replace(/\//g,"_");a.push("cfg="+o)}return a.length&&(t+="#"+a.join("&")),t}async function ro(e){if(Ne&&!kn()){const i=ge(`
        <div class="sheet-head"><h2 class="sheet-title">רגע לפני ששולחים</h2></div>
        <p style="color:var(--ink-2); font-size:15px; margin:0 0 14px;">
          כרגע הקבוצה שמורה <b>רק במכשיר הזה</b>, ולכן קישור שתשלחו לא ייפתח אצל החברים —
          הם יראו שהקבוצה לא קיימת.
        </p>
        <p style="color:var(--ink-2); font-size:15px; margin:0 0 18px;">
          הפעלה חד־פעמית של <b>קבוצה משותפת</b> (כשלוש דקות, ללא עלות) פותרת את זה:
          מאותו רגע כל מי שמקבל קישור נכנס לאותה קבוצה ורושם יחד אתכם.
        </p>
        <div class="sheet-foot">
          <button class="btn primary block" data-ref="setup">🔌 &nbsp;הפעלת קבוצה משותפת</button>
          <button class="btn ghost block" data-ref="anyway">העתקת קישור בכל זאת</button>
        </div>
      `);m('[data-ref="setup"]',i.el).addEventListener("click",()=>{i.close(),rl()}),m('[data-ref="anyway"]',i.el).addEventListener("click",async()=>{i.close();try{await navigator.clipboard.writeText(Ia(e)),S("הקישור הועתק — יעבוד רק אחרי הפעלת קבוצה משותפת")}catch(l){console.error(l),S("ההעתקה לא הצליחה")}});return}if(Ne&&C.ensureJoinKey)try{await C.ensureJoinKey(e)}catch(i){console.error("join key",i)}if(cc(e)){ge(`
        <div class="sheet-head"><h2 class="sheet-title">אין כרגע קישור הזמנה</h2></div>
        <p style="color:var(--ink-2); font-size:15px; margin:0 0 14px;">
          במכשיר הזה לא שמור מפתח ההצטרפות של הקבוצה, ולכן קישור שיישלח מכאן לא ייפתח אצל החברים.
        </p>
        <p style="color:var(--ink-2); font-size:15px; margin:0 0 4px;">
          אפשר לשלוח את הקישור מהמכשיר של מנהל הקבוצה או של אחד המשתתפים — או לפתוח את אזור המנהל ולנסות שוב.
        </p>
      `,null,{compact:!0});return}if(!Ne){const i=ge(`
        <div class="sheet-head"><h2 class="sheet-title">שיתוף עם הקבוצה</h2></div>
        <p style="color:var(--ink-2); font-size:15px; margin:0 0 14px;">
          הגרסה הזו פרטית לחשבון שלכם, ולכן חברי הקבוצה לא יוכלו להיכנס אליה.
        </p>
        <p style="color:var(--ink-2); font-size:15px; margin:0 0 18px;">
          לשיתוף עם כולם השתמשו בגרסת הווב:
          <b style="direction:ltr; display:inline-block;">${r(Es)}</b> —
          שם אפשר להפעיל קבוצה משותפת ולשלוח קישורי הצטרפות.
        </p>
        <div class="sheet-foot">
          <button class="btn primary block" data-ref="copyweb">העתקת כתובת גרסת הווב</button>
        </div>
      `);m('[data-ref="copyweb"]',i.el).addEventListener("click",async()=>{i.close();try{await navigator.clipboard.writeText(Gt),S("הכתובת הועתקה ✓")}catch(l){console.error(l),S("ההעתקה לא הצליחה")}});return}const t=Ia(e),a=Kc(e),s=qe(e).id==="trip"?wi(e.dest):null,n=e.start?`${_e(e.start)}–${_e(e.end||e.start)}`:"",o=ge(`
      <div class="sheet-head"><h2 class="sheet-title">הזמנת חברים</h2></div>
      <div class="invite-card">
        ${s?`<div class="invite-photo" style="background-image:url('${r(s)}')" aria-hidden="true"></div>`:""}
        <div class="invite-body" style="${ki(e)}">
          <span class="invite-flag" aria-hidden="true">${r(Xe(e))}</span>
          <h3 class="invite-name">${r(e.name)}</h3>
          ${e.dest||n?`<p class="invite-meta">${[e.dest,n].filter(Boolean).map(i=>`<span class="num">${r(i)}</span>`).join(" · ")}</p>`:""}
          ${(e.members||[]).length?`
          <div class="avatar-row" style="justify-content:center;margin-top:10px;">${e.members.slice(0,8).map(i=>at(i,"",!0)).join("")}</div>
          <p class="invite-crew">כבר בקבוצה: ${Pe(e.members.length,"משתתף אחד","משתתפים")}</p>`:""}
        </div>
      </div>
      <section class="steps-card" aria-labelledby="inv-steps-ttl">
        <h3 class="steps-title" id="inv-steps-ttl">איך זה עובד</h3>
        <ol class="steps">
          <li>שולחים את הקישור לקבוצת הוואטסאפ</li>
          <li>החברים פותחים וממלאים שם וטלפון — בחינם ובלי התקנה</li>
          <li>רושמים הוצאות, והחשבון מסתדר לבד</li>
        </ol>
      </section>
      <div class="sheet-foot">
        <a class="btn wa block" href="${r(Dt(a))}" target="_blank" rel="noopener" data-ref="wa">
          ${he("chat",18)} שליחה בוואטסאפ</a>
        <div class="form-row">
          <button class="btn block" data-ref="copy">${he("copy",18)} העתקת הקישור</button>
          <button class="btn block" data-ref="more">${he("share",18)} שיתוף אחר…</button>
        </div>
      </div>
    `);m('[data-ref="wa"]',o.el).addEventListener("click",()=>setTimeout(()=>o.close(),400)),m('[data-ref="copy"]',o.el).addEventListener("click",async()=>{try{await navigator.clipboard.writeText(t),S("הקישור הועתק ✓"),o.close()}catch(i){console.error(i),S("ההעתקה לא הצליחה בדפדפן זה")}}),m('[data-ref="more"]',o.el).addEventListener("click",async()=>{if(navigator.share)try{await navigator.share({text:a}),o.close();return}catch(i){if(i&&i.name==="AbortError")return}try{await navigator.clipboard.writeText(a),S("ההזמנה הועתקה ✓"),o.close()}catch(i){console.error(i),S("השיתוף לא זמין בדפדפן זה")}})}async function nu(){try{let e=[],t=[];if(C.exportAll){const n=await C.exportAll();e=n.trips,t=n.licenses}else{for(const n of g.trips){const o=await C.getExpensesOnce(n.id),i=ie(n);delete i.ownerToken,delete i.mgrPass,delete i.joinKey,delete i.hasMgrPass,e.push(Object.assign(i,{expenses:o}))}t=C.listLicenses?await C.listLicenses():[]}const a={app:"שווה בשווה",version:3,exportedAt:new Date().toISOString(),storage:g.cloud?"cloud":g.shared?"shared":"local",note:"צילומי קבלות בענן אינם כלולים בקובץ — רק המזהים שלהם.",trips:e,licenses:t||[]},s=JSON.stringify(a,null,2);Ca()?(await as("גיבוי-שווה-בשווה.json",s),S("קובץ הגיבוי נשמר ✓")):(await navigator.clipboard.writeText(s),S("הגיבוי הועתק ללוח — הדביקו ושמרו בפתקים"))}catch(e){if(e&&e.code==="declined")return;console.error(e),S("הגיבוי לא הצליח — נסו שוב")}}async function su(e,t){const a=g.expenses.find(n=>n.id===t);if(!a||!Logic.isPayment(a))return;if(!xr(e,a)){S("מחיקת תשלום שמורה למי שרשם אותו ולמנהל הקבוצה");return}if(await Me("מחיקת תשלום","רישום התשלום יימחק והחוב ייפתח מחדש. להמשיך?","מחיקה",!0))try{await C.deleteExpense(e.id,a.id),await Wt(e,g.expenses.filter(n=>n.id!==a.id)),S("רישום התשלום נמחק ✓")}catch(n){console.error(n),S(Fe(n,"המחיקה נכשלה — נסו שוב"))}}async function dc(e,t){try{await C.updateTrip(e,{archived:t}),S(t?"הקבוצה הועברה לארכיון":"הקבוצה שוחזרה מהארכיון")}catch(a){console.error(a),S(Fe(a,"הפעולה נכשלה — נסו שוב"))}}async function iu(e){const t=g.trips.find(o=>o.id===e);if(!t)return;const a=oa(t),s=a===0?"":a===1?" יחד עם ההוצאה שרשומה בה":` יחד עם ${a} ההוצאות שרשומות בה`;if(await Me("מחיקת קבוצה",`הקבוצה ״${t.name}״ תימחק לצמיתות${s}. אין דרך לבטל. להמשיך?`,"מחיקה לצמיתות",!0))try{const o=await C.deleteTripDeep(e);if(We(e,null),S("הקבוצה נמחקה"),g.assets){for(const i of o)if(i&&i.photo)try{await g.assets.delete(i.photo)}catch(l){console.error(l)}}}catch(o){console.error(o),S(Fe(o,"המחיקה נכשלה — נסו שוב"))}}async function ou(){const e=g.trips.filter(a=>a.demo);if(!(!e.length||!await Me("מחיקת נתוני ההדגמה",He(e.length,"קבוצת ההדגמה תימחק לצמיתות","קבוצות ההדגמה יימחקו לצמיתות")+". להמשיך?","מחיקה",!0))){for(const a of e)try{await C.deleteTripDeep(a.id),We(a.id,null)}catch(s){console.error(s)}S("נתוני ההדגמה נמחקו ✓")}}async function ru(e){if(!Ca())return;const t=["תאריך","קטגוריה","תיאור","סכום","מטבע",`סכום ב-${e.base}`,"שולם על ידי","מתחלק על"],a=g.expenses.slice().reverse().map(n=>{const o=ft(e,n.category),i=Logic.partsOf(e,n).map(c=>me(e,c)).join(" | "),l=Logic.expenseBaseCents(e,n),d=c=>`"${String(c==null?"":c).replace(/"/g,'""')}"`;return[n.date,o?o.nm:"",n.note||"",n.amount,n.currency,Logic.fromCents(l,Logic.dec(e.base)),me(e,n.payerId),i].map(d).join(",")}),s="\uFEFF"+t.map(n=>`"${n}"`).join(",")+`
`+a.join(`
`);try{await as(`הוצאות-${e.name}.csv`.replace(/[\\/:*?"<>|]/g,"-"),s),S("הקובץ נשמר ✓")}catch(n){if(n&&(n.code==="declined"||n.code==="rate_limited"))return;console.error(n),S("שמירת הקובץ לא הצליחה")}}const ws=500,lu=10,pc=1500,cu=6e3,du=25e3,pu=6e4,uc=12e5,fc="shaveh_help_dev_v1",uu=[{id:"cancellation",label:"ביטול עסקה או מינוי",sla:"",idOk:!0,ack:"ההתקשרות תסתיים בתוך 3 ימי עסקים מקבלת ההודעה, ואישור על הביטול יישלח אליכם בכתב."},{id:"refund",label:"החזר כספי או חיוב שגוי",sla:""},{id:"privacy",label:"עיון, תיקון או מחיקה של מידע אישי",sla:"עד 30 יום"},{id:"accessibility",label:"נגישות — דיווח על קושי או בקשת התאמה",sla:""},{id:"complaint",label:"תלונה",sla:""}],fu="עוזר דיגיטלי (בינה מלאכותית) — זו מערכת אוטומטית, לא אדם. ייתכנו טעויות; המידע המחייב מופיע בתקנון ובמסך המסלולים. נא לא לכתוב כאן מספרי זהות, פרטי אשראי או מידע רגיש.",O={kb:null,index:null,loading:null,error:!1,chat:[],busy:!1,sheet:null,view:"home",arg:null,back:[],ctx:"home",query:"",draft:null,deepLinked:!1,lastView:null};function Pt(){const e=typeof window!="undefined"&&window.SHAVEH_CONFIG&&window.SHAVEH_CONFIG.help||{},t=Fa(),a=t&&t.u&&!$t?String(t.u).replace(/\/+$/,"")+"/functions/v1/":"",s=e.aiUrl?String(e.aiUrl):a?a+"ai-help":"",n=e.supportUrl?String(e.supportUrl):a&&e.support!==!1?a+"support-request":"",o=e.receiptUrl?String(e.receiptUrl):a?a+"ai-receipt":"";return{ai:e.ai===!0&&!!s,aiUrl:s,supportUrl:n,receipt:e.ai===!0&&!!o,receiptUrl:o,key:t&&t.k?String(t.k):""}}function lo(){let e=J.get(fc);return(!e||!/^[a-z0-9_]{8,40}$/.test(e))&&(e=it("d").toLowerCase().replace(/[^a-z0-9_]/g,""),J.set(fc,e)),e}function hu(){const e=yi();return e?"?v="+e:""}function mu(e){return new Promise((t,a)=>{const s=document.createElement("script");s.src=e,s.async=!0,s.onload=()=>t(),s.onerror=()=>a(new Error("script load failed: "+e)),document.head.appendChild(s)})}function bu(e){return new Promise((t,a)=>{const s=new XMLHttpRequest;s.open("GET",e,!0),s.onload=()=>{if(s.status&&(s.status<200||s.status>=300)){a(new Error("HTTP "+s.status));return}try{t(JSON.parse(s.responseText))}catch(n){a(n)}},s.onerror=()=>a(new Error("network")),s.send()})}function hc(){if(O.index)return Promise.resolve(O.index);if(O.loading)return O.loading;const e=hu();return O.loading=(window.HelpSearch?Promise.resolve():mu("help/search.js"+e)).then(()=>bu("help/kb.json"+e)).then(t=>(O.kb=window.HelpSearch.normalizeKb(t),O.index=window.HelpSearch.build(O.kb),O.error=!1,O.index)).catch(t=>{throw console.warn("help: knowledge base unavailable",t),O.error=!0,O.loading=null,t}),O.loading}function co(){const e=O.kb&&O.kb.contact&&O.kb.contact.topics;return e&&e.length?e:uu}function Nt(e){return co().find(t=>t.id===e)||null}function ha(e){return O.kb&&O.kb.articles.find(t=>t.id===e)||null}function po(e){return O.kb&&O.kb.categories.find(t=>t.id===e)||null}function gu(){return g.joinTripId?"join":g.tripId?"trip":g.screen==="admin"?"admin":"home"}function yu(){try{return!!(window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches)}catch{return!1}}function uo(e,t){let a=r(e).replace(/\*\*([^*]+)\*\*/g,"<b>$1</b>");return a=a.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g,(s,n,o)=>{const i=o.match(/^article:([\w-]+)$/);return i?ha(i[1])?`<button class="linklike help-inline-link" data-h="article" data-id="${i[1]}">${n}</button>`:n:!t&&/^https:\/\/[^\s"'<>]+$/.test(o)?`<a href="${o}" target="_blank" rel="noopener">${n}</a>`:n}),a}function fo(e,t){const a=[];let s=null;const n=()=>{s&&a.push(`<${s.t}>`+s.items.map(o=>"<li>"+uo(o,t)+"</li>").join("")+`</${s.t}>`),s=null};return String(e||"").replace(/\r/g,"").split(`
`).forEach(o=>{const i=o.trim();let l;if(!i)n();else if((l=i.match(/^[-•*]\s+(.*)$/))||(l=i.match(/^\d+[.)]\s+(.*)$/))){const d=/^\d/.test(i)?"ol":"ul";(!s||s.t!==d)&&(n(),s={t:d,items:[]}),s.items.push(l[1])}else(l=i.match(/^#{1,4}\s+(.*)$/))?(n(),a.push("<h4>"+uo(l[1],t)+"</h4>")):(n(),a.push("<p>"+uo(i,t)+"</p>"))}),n(),a.join("")}function mc(e){return String(e||"").replace(/\[([^\]]+)\]\([^)]*\)/g,"$1").replace(/\*\*/g,"").trim()}async function vu(e){try{if(navigator.clipboard&&navigator.clipboard.writeText)await navigator.clipboard.writeText(e);else{const t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="fixed",t.style.opacity="0",document.body.appendChild(t),t.select(),document.execCommand("copy"),t.remove()}S("התשובה הועתקה")}catch{S("ההעתקה לא הצליחה — אפשר לסמן את הטקסט ולהעתיק ידנית")}}function Da(e){e=e||{},O.sheet&&O.sheet.close(),O.ctx=gu(),O.query="",O.back=[];const t=ge(`
      <div class="sheet-head"><h2 class="sheet-title">מרכז העזרה</h2></div>
      <div class="help" data-ref="help">
        <div class="help-searchbar" role="search" data-ref="searchbar">
          <label class="sr-only" for="help-q">חיפוש במאמרי העזרה</label>
          <span class="help-search-ic" aria-hidden="true">⌕</span>
          <input id="help-q" class="input help-q" type="search" maxlength="120" autocomplete="off"
            enterkeyhint="search" placeholder="מה תרצו לדעת?">
        </div>
        <div class="help-body" data-ref="body"></div>
      </div>`,()=>{O.sheet=null});O.sheet=t,O.lastView=null,t.el.classList.add("help-sheet");const a=m("#help-q",t.el);let s=null;a.addEventListener("input",()=>{clearTimeout(s),s=setTimeout(()=>{O.query=a.value.trim(),O.back=[],nt(O.query?"results":"home",null,!1)},110)}),a.addEventListener("keydown",n=>{n.key==="Enter"&&(n.preventDefault(),a.blur())}),t.el.addEventListener("click",Nu),t.el.addEventListener("submit",Hu),t.el.addEventListener("keydown",n=>{n.target&&n.target.id==="help-ask"&&n.key==="Enter"&&!n.shiftKey&&!n.isComposing&&(n.preventDefault(),$c())}),t.el.addEventListener("input",n=>{n.target&&n.target.id==="help-ask"&&yc()}),t.el.addEventListener("change",n=>{if(!n.target||n.target.id!=="hc-topic")return;const o=n.target.closest("form"),i=O.draft&&O.draft.ref||"";O.draft=kc(o),m("#hc-ref",o)||(O.draft.ref=i),O.arg=n.target.value,St("contact",n.target.value);const l=m("#hc-topic",O.sheet.el);l&&l.focus()}),St("loading"),hc().then(()=>{O.sheet&&(e.view==="article"&&ha(e.id)?nt("article",e.id,!1):e.view==="chat"&&Pt().ai?(nt("chat",null,!1),e.ask&&bo(e.ask)):e.view==="contact"?nt("contact",e.id||null,!1):nt("home",null,!1))}).catch(()=>{O.sheet&&(e.view==="contact"?nt("contact",e.id||null,!1):St("error"))})}function nt(e,t,a){a&&O.view!=="loading"&&O.view!=="error"&&O.back.push({view:O.view,arg:O.arg}),O.view=e,O.arg=t,St(e,t)}function $u(){const e=O.back.pop();e?(O.view=e.view,O.arg=e.arg,St(e.view,e.arg)):nt(O.query?"results":"home",null,!1)}function St(e,t){const a=O.sheet;if(!a)return;const s=m('[data-ref="body"]',a.el),n=m('[data-ref="searchbar"]',a.el);n.hidden=e==="chat"||e==="contact"||e==="sent",a.el.dataset.helpView=e;let o="";if(e==="loading"?o='<div class="skeleton help-skel"><div class="skel-card"></div><div class="skel-card"></div></div><p class="sr-only" role="status">טוענים את מרכז העזרה…</p>':e==="error"?o=wu():e==="home"?o=ho():e==="results"?o=xu(O.query):e==="category"?o=Lu(t):e==="article"?o=Eu(t):e==="chat"?o=Su():e==="contact"?o=Cu(t):e==="sent"&&(o=Pu(t)),e==="chat"&&O.lastView==="chat"&&O.chat.length&&_u(s)){vc();return}if(s.innerHTML=o,e==="chat"&&vc(),e!==O.lastView&&e!=="results"&&e!=="home"){e!=="chat"&&(a.el.scrollTop=0);const i=m(".help-view-title",s);if(i){i.setAttribute("tabindex","-1");try{i.focus({preventScroll:!0})}catch{i.focus()}}}O.lastView=e}function yn(){return'<button class="help-back" data-h="back"><span aria-hidden="true">→</span> חזרה</button>'}function wu(){return`
      <div class="banner warn" role="status">לא הצלחנו לטעון את מאמרי העזרה כרגע. בדקו את החיבור לאינטרנט ונסו שוב.</div>
      <button class="btn block" data-h="retry">ניסיון נוסף</button>
      ${bc()}`}function ku(){if(!Pt().ai)return"";const e=(O.kb&&O.kb.suggested.length?O.kb.suggested:[]).slice(0,3);return`
      <section class="help-ai-card" aria-labelledby="help-ai-ttl">
        <div class="help-ai-head">
          <span class="help-ai-badge" aria-hidden="true">✦</span>
          <div>
            <h3 id="help-ai-ttl">שאלו את העוזר</h3>
            <p>תשובה קצרה בעברית, עם קישור למאמר המתאים.</p>
          </div>
        </div>
        ${e.length?`<div class="help-chips">${e.map(t=>`<button class="chip help-chip" data-h="ask" data-q="${r(t)}">${r(t)}</button>`).join("")}</div>`:""}
        <button class="btn primary block" data-h="chat">פתיחת שיחה עם העוזר</button>
      </section>`}function bc(){const e=co(),t=O.kb&&O.kb.contact&&O.kb.contact.intro||"מענה אנושי ניתן בנושאים שהחוק מחייב בהם פנייה ישירה:";return`
      <section class="help-legal" aria-labelledby="help-legal-ttl">
        <h3 id="help-legal-ttl" class="help-h">פנייה לנציג</h3>
        <p class="hint">${r(t)}</p>
        <div class="help-legal-list">
          ${e.map(a=>`<button class="help-legal-item" data-h="contact" data-id="${r(a.id)}"><span>${r(a.label)}</span><span class="help-go" aria-hidden="true">←</span></button>`).join("")}
        </div>
      </section>`}function ks(e){const t=po(e.category);return`
      <button class="help-row" data-h="article" data-id="${r(e.id)}">
        <span class="help-row-txt">
          <b>${r(e.title)}</b>
          <small>${r(window.HelpSearch.snippet(e,110))}</small>
        </span>
        ${t?`<span class="help-row-cat">${r(t.title)}</span>`:""}
      </button>`}function ho(){const e=O.kb,t=e.popular.map(ha).filter(Boolean).slice(0,5),a=e.categories;return`
      ${ku()}
      ${a.length?`
        <h3 class="help-h">נושאים</h3>
        <div class="help-cats">
          ${a.map(s=>`
            <button class="help-cat" data-h="category" data-id="${r(s.id)}">
              ${s.icon?`<span class="help-cat-ic" aria-hidden="true">${r(s.icon)}</span>`:""}
              <span class="help-cat-nm">${r(s.title)}</span>
            </button>`).join("")}
        </div>`:""}
      ${t.length?`
        <h3 class="help-h">שאלות נפוצות</h3>
        <div class="help-list">${t.map(ks).join("")}</div>`:""}
      ${bc()}`}function xu(e){const t=window.HelpSearch.search(O.index,e,{limit:8}),a=Pt().ai;return`
      <p class="help-count" role="status">${t.length?Pe(t.length,"נמצא מאמר אחד","מאמרים נמצאו"):"לא נמצאו מאמרים מתאימים"}</p>
      ${t.length?`<div class="help-list">${t.map(s=>ks(s.article)).join("")}</div>`:`
        <div class="help-empty">
          <p>נסו מילה אחרת, או עיינו בנושאים.</p>
          ${a?`<button class="btn primary block" data-h="ask" data-q="${r(e)}">לשאול את העוזר: ״${r(e.slice(0,60))}״</button>`:""}
          <button class="btn ghost block" data-h="home">לכל הנושאים</button>
        </div>`}
      ${t.length&&a?`<button class="btn ghost block help-ask-more" data-h="ask" data-q="${r(e)}">לא מצאתם? שאלו את העוזר</button>`:""}`}function Lu(e){const t=po(e);if(!t)return ho();const a=O.kb.articles.filter(s=>s.category===e);return`
      ${yn()}
      <h3 class="help-view-title">${t.icon?`<span aria-hidden="true">${r(t.icon)}</span> `:""}${r(t.title)}</h3>
      ${t.description?`<p class="hint">${r(t.description)}</p>`:""}
      <div class="help-list">${a.map(ks).join("")||'<p class="hint">אין עדיין מאמרים בנושא הזה.</p>'}</div>`}function Eu(e){const t=ha(e);if(!t)return ho();const a=po(t.category),s=t.related.map(ha).filter(Boolean),n=t.contact?Nt(t.contact):null;return`
      ${yn()}
      <article class="help-article">
        ${a?`<p class="help-eyebrow">${r(a.title)}</p>`:""}
        <h3 class="help-view-title">${r(t.title)}</h3>
        <div class="help-prose">${fo(t.body||t.summary)}</div>
      </article>
      ${n?`
        <div class="help-human">
          <p>בנושא הזה אפשר לפנות לנציג אנושי.</p>
          <button class="btn primary block" data-h="contact" data-id="${r(n.id)}">פנייה לנציג — ${r(n.label)}</button>
        </div>`:""}
      ${s.length?`
        <h3 class="help-h">מאמרים קשורים</h3>
        <div class="help-list">${s.map(ks).join("")}</div>`:""}
      ${Pt().ai?'<button class="btn ghost block help-ask-more" data-h="chat">יש עוד שאלה? שאלו את העוזר</button>':""}`}function mo(e,t){if(e.role==="user")return`<div class="help-msg me" data-i="${t}"><span class="sr-only">השאלה שלכם: </span>${r(e.text)}</div>`;const a=(e.articles||[]).map(ha).filter(Boolean),s=e.contact?Nt(e.contact):null;return`
      <div class="help-msg bot ${e.kind!=="ok"?"soft":""}${e.fresh?" fresh":""}" data-i="${t}">
        <span class="sr-only">העוזר: </span>
        <div class="help-text">${fo(e.text,!0)}</div>
        ${a.length?`<div class="help-cites"><span class="help-cites-lbl">מאמרים:</span>${a.map(n=>`<button class="chip help-chip sm" data-h="article" data-id="${r(n.id)}">${r(n.title)}</button>`).join("")}</div>`:""}
        ${s?`<button class="btn sm help-human-btn" data-h="contact" data-id="${r(s.id)}">פנייה לנציג — ${r(s.label)}</button>`:""}
        ${e.kind==="ok"?`<div class="help-msg-tools"><button class="help-tool" data-h="copy" data-i="${t}" aria-label="העתקת התשובה">העתקה</button></div>`:""}
      </div>`}function Su(){const e=O.kb&&O.kb.assistant&&O.kb.assistant.disclosure||fu,t=O.kb&&O.kb.suggested.length?O.kb.suggested.slice(0,4):[];return`
      <div class="help-chat-top">
        ${yn()}
        ${O.chat.length?'<button class="help-tool" data-h="clear">ניקוי השיחה</button>':""}
      </div>
      <h3 class="help-view-title">שאלו את העוזר</h3>
      <p class="help-disclosure" role="note"><span aria-hidden="true">✦</span> ${r(e)}</p>
      <div class="help-log" role="log" aria-live="polite" aria-relevant="additions" data-ref="log">
        ${O.chat.length?O.chat.map(mo).join(""):`
          <div class="help-chat-empty">
            ${fo(O.kb&&O.kb.assistant.welcome||"אפשר לשאול כל דבר על השימוש ב״שווה בשווה״ — מסלולים, חלוקה, הזמנת חברים והתחשבנות.")}
            ${t.length?`<div class="help-chips">${t.map(a=>`<button class="chip help-chip" data-h="ask" data-q="${r(a)}">${r(a)}</button>`).join("")}</div>`:""}
          </div>`}
        ${O.busy?gc():""}
      </div>
      <form class="help-ask" data-ref="askform" novalidate>
        <label class="sr-only" for="help-ask">השאלה לעוזר</label>
        <textarea id="help-ask" class="input" rows="1" maxlength="${ws}" placeholder="כתבו שאלה…" enterkeyhint="send"${O.busy?" disabled":""}></textarea>
        <button class="btn primary help-send" type="submit" aria-label="שליחת השאלה"${O.busy?" disabled":""}><span aria-hidden="true">↑</span></button>
      </form>
      <p class="help-ask-meta"><span class="help-warn" data-ref="askwarn" role="alert"></span><span class="num" data-ref="askcount"></span></p>`}function gc(){return'<div class="help-msg bot typing"><span class="help-dots" aria-hidden="true"><i></i><i></i><i></i></span><span class="sr-only">העוזר כותב תשובה…</span></div>'}function _u(e){const t=m('[data-ref="log"]',e);if(!t||z(".help-msg[data-i]",t).some(c=>Number(c.dataset.i)>=O.chat.length))return!1;const s=m(".help-chat-empty",t);s&&s.remove();const n=m(".help-msg.typing",t);n&&!O.busy&&n.remove(),O.chat.forEach((c,u)=>{if(m(`.help-msg[data-i="${u}"]`,t))return;const h=m(".help-msg.typing",t);h?h.insertAdjacentHTML("beforebegin",mo(c,u)):t.insertAdjacentHTML("beforeend",mo(c,u))}),O.busy&&!m(".help-msg.typing",t)&&t.insertAdjacentHTML("beforeend",gc());const o=m("#help-ask",e),i=m(".help-send",e);o&&(o.disabled=O.busy),i&&(i.disabled=O.busy);const l=m('[data-ref="askwarn"]',e);l&&(l.textContent="");const d=m(".help-chat-top",e);return d&&!m('[data-h="clear"]',d)&&d.insertAdjacentHTML("beforeend",'<button class="help-tool" data-h="clear">ניקוי השיחה</button>'),!0}function yc(){const e=O.sheet,t=e&&m("#help-ask",e.el),a=e&&m('[data-ref="askcount"]',e.el);if(!t||!a)return;const s=t.value.length;a.textContent=s>ws*.8?s+"/"+ws:"",t.style.height="auto",t.style.height=Math.min(t.scrollHeight,120)+"px"}function vc(){const e=O.sheet;if(!e)return;const t=m('[data-ref="log"]',e.el),a=()=>{try{e.el.scrollTop=e.el.scrollHeight}catch{}};a();const s=z(".help-msg.fresh",t),n=s[s.length-1];if(s.forEach(h=>h.classList.remove("fresh")),!n)return;const o=O.chat[Number(n.dataset.i)];if(o&&(o.fresh=!1),yu())return;const i=m(".help-text",n),l=i.innerHTML,d=mc(o?o.text:i.textContent).split(/(\s+)/);if(d.length<6)return;t.setAttribute("aria-busy","true"),i.textContent="";let c=0;const u=()=>{i.isConnected&&(c=Math.min(d.length,c+4),i.textContent=d.slice(0,c).join(""),c<d.length?setTimeout(u,22):(i.innerHTML=l,t.removeAttribute("aria-busy"),a()))};u()}function $c(){const e=O.sheet,t=e&&m("#help-ask",e.el);t&&bo(t.value)}function Tu(){const e=O.chat,t=[];e.forEach((n,o)=>{if(n.role==="user"){const i=e[o+1],l=i&&i.role==="assistant"&&i.kind==="ok";(o===e.length-1||l)&&t.push({role:"user",content:n.text})}else if(n.kind==="ok"){const i=String(n.text||"");t.push({role:"assistant",content:i.length>pc?i.slice(0,pc-1)+"…":i})}});let a=t.slice(-lu),s=a.reduce((n,o)=>n+o.content.length,0);for(;a.length>1&&s>cu;)s-=a.shift().content.length;for(;a.length>1&&a[0].role!=="user";)a=a.slice(1);return a}function vn(e,t,a,s){return{role:"assistant",kind:e,fresh:!0,text:t+(a.length?`

הנה מאמרים שעשויים לעזור:`:""),articles:a.map(n=>n.id).slice(0,3),contact:s?s.id:null}}async function bo(e){const t=String(e||"").replace(/\s+/g," ").trim().slice(0,ws),a=O.sheet;if(!t||O.busy||!a)return;O.view!=="chat"&&nt("chat",null,!0);const s=m('[data-ref="askwarn"]',a.el);if(window.HelpSearch.hasSensitiveNumber(t)){s&&(s.textContent="נראה שכתבתם מספר ארוך (כרטיס, תעודת זהות או חשבון). אין צורך בו — נסחו את השאלה בלעדיו.");const c=m("#help-ask",a.el);c&&(c.value=t,c.focus());return}const n=window.HelpSearch.search(O.index,t,{limit:3,prefix:!1}),o=window.HelpSearch.contactTopicFor(O.kb,t,n);O.chat.push({role:"user",text:t}),O.busy=!0;const i=m("#help-ask",a.el);i&&(i.value="",yc()),St("chat");const l=Pt();let d;if(typeof navigator!="undefined"&&navigator.onLine===!1)d=vn("offline",O.kb&&O.kb.assistant.offline||"אין חיבור לרשת כרגע, ולכן העוזר לא זמין. החיפוש במאמרים עובד גם בלי רשת.",n,o);else if(!l.ai)d=vn("fallback","העוזר אינו פעיל כרגע.",n,o);else{const c=typeof AbortController!="undefined"?new AbortController:null,u=setTimeout(()=>{c&&c.abort()},du);try{const h={"Content-Type":"application/json"};l.key&&!/^https?:\/\/[^/]*\.(test|localhost)\b/.test(l.aiUrl)&&(h.apikey=l.key,h.Authorization="Bearer "+l.key);const b=await fetch(l.aiUrl,{method:"POST",headers:h,signal:c?c.signal:void 0,body:JSON.stringify({messages:Tu(),locale:"he",screen:O.ctx,device:lo()})});let v={};try{v=await b.json()}catch{v={}}if(b.status===429)d=vn("limit",v.message||"הגעתם למספר השאלות המרבי לזמן הקרוב. אפשר לנסות שוב מאוחר יותר.",n,o);else if(!b.ok||v.fallback||!v.answer)d=vn("fallback",v.message||"העוזר לא זמין כרגע.",n,o);else{const p=(Array.isArray(v.articles)?v.articles:[]).map(String).filter(L=>ha(L)).slice(0,3),f=v.contact&&Nt(String(v.contact))||o;d={role:"assistant",kind:"ok",fresh:!0,text:String(v.answer).slice(0,4e3),articles:p,contact:f?f.id:null}}}catch{d=vn("fallback","לא הצלחנו להגיע לעוזר כרגע.",n,o)}finally{clearTimeout(u)}}if(O.busy=!1,O.chat.push(d),O.sheet&&O.view==="chat"){St("chat");const c=m("#help-ask",O.sheet.el);c&&!("ontouchstart"in window)&&c.focus()}}const wc="אבקש לבטל את העסקה.";function go(e){return e==="cancellation"||e==="refund"}function Cu(e){const t=co(),a=O.draft||{},s=e||a.topic||"",n=typeof Ke=="function"&&Ke()||{},o=Nt(s),l=(a.message===wc&&s!=="cancellation"?"":a.message||"")||(s==="cancellation"?wc:"");return`
      ${yn()}
      <h3 class="help-view-title">פנייה לנציג</h3>
      <p class="hint help-contact-note">פנייה אנושית ניתנת בנושאים שהחוק מחייב בהם מענה ישיר. לשאלות אחרות — העוזר והמאמרים זמינים בכל שעה.</p>
      <form class="help-form" data-ref="contactform" novalidate>
        <div class="field">
          <label for="hc-topic">נושא הפנייה</label>
          <select id="hc-topic" class="input" required>
            <option value="">בחרו נושא…</option>
            ${t.map(d=>`<option value="${r(d.id)}"${d.id===s?" selected":""}>${r(d.label)}</option>`).join("")}
          </select>
          ${o&&o.sla?`<p class="hint">זמן מענה: ${r(o.sla)}</p>`:""}
          ${s==="cancellation"?'<p class="hint help-cancel-note">אפשר לבטל בתוך 14 יום מיום הרכישה או מיום קבלת פרטי העסקה בכתב — המאוחר מביניהם, גם אם המסלול כבר הופעל. אנשים עם מוגבלות, אזרחים ותיקים ועולים חדשים — בתוך 4 חודשים מיום הרכישה או מיום קבלת פרטי העסקה בכתב (המאוחר מביניהם), כשההתקשרות כללה שיחה עם מפעיל השירות (התקנון, סעיף 6). מספר זהות אינו חובה בטופס הזה — נזהה את העסקה לפי הטלפון ושם הקבוצה; מי שרוצים לציין אותו יכולים לכתוב אותו בתוכן הפנייה. אישור על הביטול יישלח אליכם בכתב.</p>':""}
        </div>
        <div class="field">
          <label for="hc-name">שם</label>
          <input id="hc-name" class="input" autocomplete="name" maxlength="80" value="${r(a.name||n.name||"")}" required>
        </div>
        <div class="field">
          <label for="hc-contact">טלפון או דוא״ל לחזרה</label>
          <input id="hc-contact" class="input ltr" autocomplete="tel" inputmode="email" maxlength="120" value="${r(a.contact||n.phone||"")}" required>
        </div>
        ${go(s)?`
        <div class="field">
          <label for="hc-ref">הקבוצה או המסלול <span class="hint">(רשות)</span></label>
          <input id="hc-ref" class="input" maxlength="80" autocomplete="off" placeholder="למשל: טיול לגליל — מסלול שבוע" value="${r(a.ref||"")}">
        </div>`:""}
        <div class="field">
          <label for="hc-msg">תוכן הפנייה</label>
          <textarea id="hc-msg" class="input" rows="4" maxlength="${go(s)?1400:1500}" required>${r(l)}</textarea>
          <p class="hint">${o&&o.idOk?"אין לכתוב מספרי כרטיס אשראי או חשבון בנק — לא נבקש אותם לעולם. מספר זהות — רשות, אם רוצים לציין אותו בהודעת הביטול.":"אין לכתוב מספרי כרטיס אשראי, תעודת זהות או חשבון בנק — לא נבקש אותם לעולם."}</p>
        </div>
        <label class="help-consent">
          <input type="checkbox" id="hc-consent"${a.consent?" checked":""}>
          <span>מאשרים שהפרטים ישמשו רק למענה על הפנייה הזו, בהתאם <button type="button" class="linklike" data-h="legal" data-id="privacy">למדיניות הפרטיות</button>.</span>
        </label>
        <p class="help-form-err" data-ref="formerr" role="alert"></p>
        <button class="btn primary block" type="submit" data-ref="send">שליחת הפנייה</button>
      </form>
      ${ju(s)}`}function ju(e){const t=e==="cancellation"||e==="refund"?"cancel":e==="privacy"?"privacy":e==="accessibility"?"a11y":"general";return`
      <section class="help-channels" aria-labelledby="help-ch-ttl">
        <h4 id="help-ch-ttl">אפשר לפנות גם ישירות</h4>
        <p class="help-op-id">מפעיל השירות: ${On({noPhone:!0})}</p>
        ${La(t,{noForm:!0})}
        ${Us()}
        <p class="hint">פרטי מפעיל השירות ודרכי הפנייה המלאות — <button type="button" class="linklike" data-h="legal" data-id="terms">בתקנון</button>.</p>
      </section>`}function Au(e){const t=String(e||"").trim();if(/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]{2,}$/.test(t))return!0;const a=t.replace(/[\s\-().]/g,"");return/^(\+?972|0)\d{8,9}$/.test(a)}function kc(e){return{topic:m("#hc-topic",e).value,name:m("#hc-name",e).value.trim(),contact:m("#hc-contact",e).value.trim(),message:m("#hc-msg",e).value.trim(),ref:m("#hc-ref",e)?m("#hc-ref",e).value.trim():"",consent:m("#hc-consent",e).checked}}function Mu(e){const t=Nt(e.topic);return["פנייה לנציג · ״שווה בשווה״","נושא: "+(t?t.label:e.topic),"שם: "+e.name,"פרטי קשר: "+e.contact,e.ref?"קבוצה או מסלול: "+e.ref:null,"",e.message].filter(a=>a!==null).join(`
`)}async function Ou(e){const t=kc(e);O.draft=t;const a=m('[data-ref="formerr"]',e),s=(c,u)=>{a.textContent="",z("[aria-invalid]",e).forEach(b=>b.removeAttribute("aria-invalid"));const h=u&&m(u,e);if(h&&h.type!=="checkbox"){Ie(h,c);return}a.textContent=c,h&&(h.setAttribute("aria-invalid","true"),h.focus())};if(!Nt(t.topic))return s("בחרו נושא לפנייה.","#hc-topic");if(t.name.length<2)return s("כתבו שם, כדי שנדע איך לפנות אליכם.","#hc-name");if(!Au(t.contact))return s("כתבו טלפון ישראלי או כתובת דוא״ל תקינה.","#hc-contact");if(t.message.length<5)return s("כתבו בכמה מילים במה מדובר.","#hc-msg");const n=!!(Nt(t.topic)||{}).idOk,o=window.HelpSearch.hasSensitiveNumber;if(o(t.name))return s(n?"בשדה השם כותבים רק שם, בלי מספרים. מספר זהות, אם רוצים לציין אותו, כותבים בתוכן הפנייה.":"בשדה השם כותבים רק שם, בלי מספרים ארוכים (כרטיס, תעודת זהות או חשבון).","#hc-name");if(t.ref&&o(t.ref))return s(n?"בשדה ״הקבוצה או המסלול״ כותבים רק את שם הקבוצה או המסלול, בלי מספרים ארוכים. מספר זהות, אם רוצים לציין אותו, כותבים בתוכן הפנייה.":"בשדה ״הקבוצה או המסלול״ כותבים רק את שם הקבוצה או המסלול, בלי מספרים ארוכים (כרטיס, תעודת זהות או חשבון).","#hc-ref");if(o(t.message,{allowId:n}))return s(n?"נראה שבתוכן הפנייה יש מספר כרטיס אשראי או חשבון בנק. אין בו צורך — מחקו אותו (מספר זהות אפשר להשאיר), ואת הטלפון כתבו בשדה ״טלפון או דוא״ל״.":"נראה שבתוכן הפנייה יש מספר ארוך (כרטיס, תעודת זהות או חשבון). אין בו צורך — מחקו אותו, ואת הטלפון כתבו בשדה ״טלפון או דוא״ל״.","#hc-msg");if(!t.consent)return s("כדי לשלוח, יש לאשר את השימוש בפרטים למענה על הפנייה.","#hc-consent");a.textContent="";const i=m('[data-ref="send"]',e);i.disabled=!0,i.textContent="שולחים…";const l=Pt();let d=null;if(l.supportUrl&&(typeof navigator=="undefined"||navigator.onLine!==!1))try{const c={"Content-Type":"application/json"};l.key&&!/^https?:\/\/[^/]*\.(test|localhost)\b/.test(l.supportUrl)&&(c.apikey=l.key,c.Authorization="Bearer "+l.key);const u=await fetch(l.supportUrl,{method:"POST",headers:c,body:JSON.stringify({topic:t.topic,name:t.name,contact:t.contact,message:(t.ref&&go(t.topic)?"קבוצה או מסלול: "+t.ref+`
`:"")+t.message,consent:!0,locale:"he",screen:O.ctx,device:lo()})}),h=await u.json().catch(()=>({}));u.ok&&h.ticket&&(d={no:String(h.ticket),sla:h.sla?String(h.sla):"",topic:t.topic})}catch{}O.draft=d?null:t,nt("sent",d?{ticket:d}:{manual:t},!1)}function Pu(e){if(e=e||{},e.ticket){const l=e.ticket,d=Nt(l.topic),c=d&&d.ack?d.ack:"";return`
        <div class="help-sent">
          <div class="help-sent-ic" aria-hidden="true">✓</div>
          <h3 class="help-view-title">הפנייה התקבלה</h3>
          <p>מספר הפנייה: <b class="num">${r(l.no)}</b></p>
          ${c?`<p>${r(c)}</p>`:""}
          ${l.sla?`<p class="hint">זמן מענה: ${r(l.sla)}</p>`:""}
          <p class="hint">${l.sla||c?"":"נחזור אליכם בהקדם. "}כדאי לשמור את מספר הפנייה.</p>
          <button class="btn block" data-h="home">חזרה למרכז העזרה</button>
        </div>`}const t=e.manual||O.draft||{},a=Mu(t),s=Qe(),n=s.email,o=Nt(t.topic),i=[n?"בדוא״ל":"",s.mobile?"בוואטסאפ":""].filter(Boolean).join(" או ");return`
      ${yn()}
      <div class="help-sent">
        <h3 class="help-view-title">עוד צעד אחד — שליחה</h3>
        <p class="hint">הפנייה מוכנה.${i?` ${i} היא תיפתח מוכנה לשליחה${s.phone?", ואפשר גם להתקשר ולמסור אותה בשיחה":""}.`:s.phone?" אפשר להתקשר ולמסור אותה בשיחה.":""}</p>
        <pre class="help-preview" dir="rtl">${r(a)}</pre>
        ${n?`<a class="btn primary block" data-h="sent-manual" data-ref="sent-mail" href="${r(Ro(n,"פנייה לנציג — "+(o?o.label:""),a))}">שליחה בדוא״ל</a>`:""}
        ${s.phone?`<a class="btn block help-call" data-h="sent-manual" data-ref="sent-tel" href="tel:${r(s.tel)}">התקשרות <span class="num" dir="ltr">${r(s.phone)}</span></a>`:""}
        ${s.mobile?`<a class="${n?"btn wa soft block":"btn primary block"}" data-h="sent-manual" data-ref="sent-wa" href="${r(ea(s.phoneRaw,a))}" target="_blank" rel="noopener">שליחה בוואטסאפ</a>`:""}
      </div>`}function Nu(e){const t=e.target.closest("[data-h]");if(!t||!O.sheet||!O.sheet.el.contains(t))return;const a=t.dataset.h;if(a==="sent-manual"){O.draft=null;return}if(e.preventDefault(),a==="article")nt("article",t.dataset.id,!0);else if(a==="category")nt("category",t.dataset.id,!0);else if(a==="back")$u();else if(a==="home"){O.back=[],O.query="";const s=m("#help-q",O.sheet.el);s&&(s.value=""),nt("home",null,!1)}else if(a==="chat")nt("chat",null,!0);else if(a==="ask"){if(!Pt().ai)return;bo(t.dataset.q||"")}else if(a==="copy"){const s=O.chat[Number(t.dataset.i)];s&&vu(mc(s.text))}else a==="clear"?(O.chat=[],St("chat")):a==="contact"?nt("contact",t.dataset.id||null,!0):a==="legal"?Hn(t.dataset.id):a==="retry"&&(St("loading"),hc().then(()=>nt("home",null,!1)).catch(()=>St("error")))}function Hu(e){const t=e.target;!t||!O.sheet||(t.dataset.ref==="askform"?(e.preventDefault(),$c()):t.dataset.ref==="contactform"&&(e.preventDefault(),Ou(t)))}function xs(e){return`<button class="iconbtn help-btn ${e||""}" data-help-open aria-label="מרכז העזרה — מאמרים, שאלות ופנייה"><span aria-hidden="true">?</span></button>`}function xc(e){if(!e)return;const t=m(".brand-tools",e),a=m(".trip-actions",e);if(t){if(!m("[data-help-open]",t)){const o=m('[data-act="open-admin"]',t);o?o.insertAdjacentHTML("beforebegin",xs()):t.insertAdjacentHTML("beforeend",xs())}const n=t.closest(".brandbar");n&&n.classList.add("has-help")}else a?m("[data-help-open]",a)||a.insertAdjacentHTML("afterbegin",xs()):m(".help-fab",e)||e.insertAdjacentHTML("beforeend",xs("help-fab"));const s=m(".legal-links",e);if(s&&!m("[data-help-open]",s)&&s.insertAdjacentHTML("beforeend",' · <button class="linklike" data-help-open>עזרה ושאלות</button> · <button class="linklike" data-help-open="contact" data-help-id="cancellation">ביטול עסקה</button>'),!O.deepLinked&&(g.ready||g.joinTripId)){O.deepLinked=!0;let n=null;try{n=new URLSearchParams(location.search).get("help")}catch{n=null}n&&setTimeout(()=>{Da(n==="chat"?{view:"chat"}:n==="contact"?{view:"contact"}:n==="cancel"?{view:"contact",id:"cancellation"}:n==="1"?{}:{view:"article",id:n})},120)}}document.addEventListener("click",e=>{const t=e.target.closest("[data-help-open]");if(!t)return;e.preventDefault();const a=t.closest(".sheet-backdrop");if(a&&!(O.sheet&&O.sheet.el.contains(t))){const s=z(".sheet-backdrop"),n=Ot[Ot.length-1];n&&s[s.length-1]===a&&n()}Da({view:t.dataset.helpOpen||"",id:t.dataset.helpId||""})}),document.addEventListener("click",e=>{const t=e.target.closest("[data-act]");if(!t)return;const a=t.dataset.act,s=tt();if(a==="join-submit")Sp();else if(a==="show-pending"&&s){g.tab="all",W();const n=m(".exp-row.pending-del, .acct-row.pending-del");n&&(n.scrollIntoView({block:"center",behavior:"smooth"}),n.focus({preventScroll:!0}))}else if(a==="mgr-login"){const n=s||g.trips.find(o=>o.id===g.joinTripId);n&&ql(n)}else if(a==="join-skip"){const n=g.joinTripId;g.joinTripId=null,ga(),n&&g.trips.some(o=>o.id===n)?ht(n):W()}else if(a==="new-trip"||a==="new-kind-picker")sl();else if(a==="new-kind")bn(null,_t.find(n=>n.id===t.dataset.kind));else if(a==="pricing")Jo();else if(a==="open-trip")ht(t.dataset.id);else if(a==="back-home")Mi();else if(a==="open-admin")g.screen="admin",W();else if(a==="toggle-archive")g.showArchived=!g.showArchived,W();else if(a==="tab"){g.tab=t.dataset.id,W();const n=m(`[data-act="tab"][data-id="${g.tab}"]`);n&&n.focus()}else if(a==="add-exp")gn(null);else if(a==="edit-exp"){const n=g.expenses.find(o=>o.id===t.dataset.id);if(!n||!s)return;typeof n.canEdit=="boolean"||kr(s,n)?gn(n):S(wr)}else if(a==="trip-settings"&&s)bn(s);else if(a==="share-summary"&&s)au(s);else if(a==="share-join"&&s)ro(s);else if(a==="export-csv"&&s)ru(s);else if(a==="del-payment"&&s)su(s,t.dataset.id);else if(a==="mark-paid"&&s)Bp(s,t.dataset.from,t.dataset.to,Number(t.dataset.cents)||0);else if(a==="my-area"&&s){const n=pe(s.id),o=n?(s.members||[]).find(i=>i.id===n)||Be(s,n):null;if(!o){Zi(s);return}ge(`
        <div class="sheet-head">
          ${at(o,"lg",!0)}
          <h2 class="sheet-title">האזור האישי שלי</h2>
        </div>
        ${Rp(s,o,Logic.transfersFor(s,g.expenses))}
        <div style="display:flex;flex-direction:column;gap:10px;margin-top:16px;">
          <a class="btn wa soft block" href="${r(Dt(Rs(s,o.id)))}" target="_blank" rel="noopener">
            ${he("chat",18)} שליחת החשבון שלי בוואטסאפ</a>
        </div>`)}else if(a==="toggle-notif"){const n=()=>{const o=m('.trip-tools [data-act="toggle-notif"]');o&&o.focus({preventScroll:!0})};s&&et()&&wt(s.id)?ao(s):et()?(_a(!1),S("ההתראות כובו"),W(),n()):(_a(!0),Qn(),vi().then(o=>{S(o?"התראות פעילות 🔔 — כך נשמע כשנרשמת הוצאה":"התראות פעילות בתוך האפליקציה 🔔"),W(),n()}))}else if(a==="admin-trip")Zd(t.dataset.id);else if(a==="license-new")hr(null);else if(a==="licenses-retry")sa=!1,lr(),W();else if(a==="license-open"){const n=(ot||[]).find(o=>o.id===t.dataset.id);n&&hr(n)}else if(a==="who-pick"&&s){const n=(s.members||[]).find(o=>o.id===t.dataset.id);n&&cp(s,n)}else if(a==="close-trip"&&s)Ql(s);else if(a==="legal")Hn(t.dataset.id);else if(a==="plans"&&s)jt(s);else if(a==="final-summary"&&s)ec(s);else if(a==="full-summary"&&s)tc(s);else if(a==="daily-budget"&&s)hl(s);else if(a==="share-cards"&&s)oc(s);else if(a==="install-app")Sd();else if(a==="reopen-trip"&&s)Fp(s);else if(a==="notif-sheet"&&s)ao(s);else if(a==="manage-cats"&&s)so(s);else if(a==="converter"&&s)gl(s);else if(a==="jscope")Te&&(Te.scope=t.dataset.scope),xl(t.closest(".field")||document,t.dataset.scope);else if(a==="jstep")Lp(t);else if(a==="mypay-ok"&&s){const n=(s.members||[]).find(o=>o.id===pe(s.id));n&&fa(s.id,n.id,pn(n)),S("תודה — ההודעה הוסרה"),W()}else if(a==="mypay-restore"&&s)$p(s);else if(a==="jpay-toggle")Te&&Te.pay&&(Te.pay.open=!Te.pay.open,W());else if(a==="pay-prefs"&&s){const n=(s.members||[]).find(i=>i.id===(t.dataset.id||pe(s.id))),o=t.closest(".sheet")&&t.closest(".sheet").querySelector(".tile-grid")?()=>{const i=tt(),l=i&&(i.members||[]).find(d=>d.id===n.id);l&&hs(i,l)}:null;n&&Bl(s,n,o)}else if(a==="pay-copy")fs(t.dataset.copy||"",`${t.dataset.what||"הפרטים"} ${t.dataset.what==="כל הפרטים"?"הועתקו":"הועתק"} ✓`);else if(a==="pay-reveal"){const n=t.getAttribute("aria-pressed")==="true",o=t.parentElement&&t.parentElement.querySelector("[data-acc]");o&&(o.textContent=n?t.dataset.mask:t.dataset.full),t.setAttribute("aria-pressed",String(!n)),t.textContent=n?"הצגה":"הסתרה"}else if(a==="pay-seen"&&s){const n={};(t.dataset.ids||"").split(",").forEach(o=>{const i=o.lastIndexOf(":");i>0&&(n[o.slice(0,i)]=Number(o.slice(i+1)))}),Ol(s.id,n),W()}else if(a==="household"&&s){const n=(s.members||[]).find(i=>i.id===(t.dataset.id||pe(s.id))),o=t.closest(".sheet")?()=>{const i=tt(),l=i&&(i.members||[]).find(d=>d.id===n.id);l&&hs(i,l)}:null;n&&(fe(s)||n.id===pe(s.id))&&Cl(s,n,o)}else if(a==="pick-me"&&s)Zi(s);else if(a==="member-detail"&&s){const n=(s.members||[]).find(o=>o.id===t.dataset.id);if(!n)return;fe(s)||n.id===pe(s.id)?hs(s,n):S("הפירוט האישי גלוי למשתתף עצמו ולמנהל הקבוצה")}else if(a==="filter-clear")g.filter={cat:null,payer:null},W();else if(a==="filter-cat")g.filter.cat=g.filter.cat===t.dataset.id?null:t.dataset.id,W();else if(a==="filter-payer")g.filter.payer=g.filter.payer===t.dataset.id?null:t.dataset.id,W();else if(a==="archive-trip")dc(t.dataset.id,!0);else if(a==="restore-trip")dc(t.dataset.id,!1);else if(a==="delete-trip")iu(t.dataset.id);else if(a==="backup")nu();else if(a==="restore")ep();else if(a==="wipe-all")tp();else if(a==="clear-demo")ou();else if(a==="admin-unlock"){const n=m("#admin-pin"),o=m("#admin-code"),i=(n&&n.value||"").trim(),l=o&&!o.hidden?o.value.trim():"",d=m('[data-ref="err"]');if(t.disabled)return;t.disabled=!0,t.textContent="בודקים…",Hc(i,l).then(c=>{if(c.ok){S("אזור המנהל נפתח ✓"),C&&C.refresh&&C.refresh(),W();return}if(c.error==="totp_required"&&o){o.hidden=!1,o.value="",d&&(d.textContent=En.totp_required),o.focus();return}d&&(d.textContent=c.error==="denied"&&l?En.code:En[c.error]||En.denied),c.error==="denied"&&l&&o?(o.value="",o.focus()):c.error==="denied"&&n&&(n.value="",n.focus())}).catch(c=>{console.error("admin unlock failed",c),d&&(d.textContent="לא הצלחנו לבדוק את הסיסמה כרגע — בדקו את החיבור ונסו שוב")}).then(()=>{t.disabled=!1,t.textContent="כניסה"})}else a==="admin-lock"?(Co(),As=!1,S("אזור המנהל ננעל"),C&&C.refresh&&C.refresh(),Mi()):a==="reload"?location.reload():a==="sync-setup"?rl():a==="sync-disconnect"&&Me("ניתוק מהקבוצה המשותפת","המכשיר הזה יחזור לרישום מקומי בלבד. הנתונים המשותפים עצמם לא יימחקו.","ניתוק").then(n=>{n&&(Ts(null),S("נותקתם מהקבוצה המשותפת"),setTimeout(()=>location.reload(),600))})}),document.addEventListener("keydown",e=>{const t=e.target;if(!t||!t.matches||!t.matches('.exp-tabs [role="tab"]'))return;const a=z('[role="tab"]',t.closest('[role="tablist"]')),s=a.indexOf(t),n=getComputedStyle(t).direction==="rtl";let o=-1;e.key==="Home"?o=0:e.key==="End"?o=a.length-1:e.key==="ArrowLeft"?o=(s+(n?1:-1)+a.length)%a.length:e.key==="ArrowRight"&&(o=(s+(n?-1:1)+a.length)%a.length),!(o<0)&&(e.preventDefault(),a[o].click())}),document.addEventListener("keydown",e=>{if(e.key!=="Enter"||!e.target||e.target.id!=="admin-pin")return;e.preventDefault();const t=m('[data-act="admin-unlock"]');t&&t.click()}),document.addEventListener("click",e=>{const t=e.target.closest(".exp-thumb, .gal-btn");t&&(e.preventDefault(),e.stopPropagation(),Dp(t.dataset.full||t.src))},!0),Ud()})();
