(()=>{"use strict";if(window.top!==window.self&&!(window.claude&&typeof window.claude.use=="function")){let e=!0;try{e=window.top.location.origin!==window.location.origin}catch{e=!0}if(e){try{window.top.location.replace(window.location.href)}catch{}const t=document.getElementById("app");t&&(t.removeAttribute("aria-busy"),t.innerHTML='<div class="frame-guard"><h1 class="brand-name">שווה בשווה</h1><p>מטעמי אבטחה האפליקציה נפתחת רק בחלון משלה, ולא בתוך אתר אחר.</p><a class="btn primary block" target="_blank" rel="noopener" href="'+String(window.location.href).replace(/[&"<>]/g,a=>({"&":"&amp;",'"':"&quot;","<":"&lt;",">":"&gt;"})[a])+'">פתיחת שווה בשווה בחלון נפרד</a></div>'),window.__shavehFramed=!0;return}}(function(){const t=document.querySelector('link[rel="preload"][as="style"][href*="fonts.googleapis"]');if(!t||document.querySelector('link[rel="stylesheet"][href*="fonts.googleapis"]'))return;const a=document.createElement("link");a.rel="stylesheet",a.href=t.href,document.head.appendChild(a)})();const ya=[{c:"ILS",n:"שקל ישראלי",r:1},{c:"EUR",n:"אירו",r:3.5169},{c:"USD",n:"דולר אמריקאי",r:3.049},{c:"GBP",n:"לירה שטרלינג",r:4.1084},{c:"CHF",n:"פרנק שוויצרי",r:3.7259},{c:"HUF",n:"פורינט הונגרי",r:.0096},{c:"CZK",n:"כתר צ׳כי",r:.1444},{c:"PLN",n:"זלוטי פולני",r:.8092},{c:"RON",n:"לאו רומני",r:.6668},{c:"BGN",n:"לב בולגרי",r:1.795},{c:"RSD",n:"דינר סרבי",r:.0299},{c:"GEL",n:"לארי גאורגי",r:1.169},{c:"TRY",n:"לירה טורקית",r:.0625},{c:"AED",n:"דירהם (איחוד האמירויות)",r:.8279},{c:"THB",n:"באט תאילנדי",r:.0914},{c:"JPY",n:"ין יפני",r:.0196},{c:"MAD",n:"דירהם מרוקאי",r:.3206},{c:"CAD",n:"דולר קנדי",r:2.1846},{c:"MXN",n:"פסו מקסיקני",r:.1773}],rt=[{id:"trip",ic:"✈️",nm:"טיול",ex:"בודפשט עם החברים"},{id:"family",ic:"👨‍👩‍👧‍👦",nm:"מפגש משפחתי",ex:"שבת משפחתית בצפון"},{id:"mangal",ic:"🔥",nm:"מנגל / על האש",ex:"מנגל יום העצמאות"},{id:"team",ic:"💼",nm:"ערב צוות / גיבוש",ex:"גיבוש צוות ספטמבר"},{id:"reunion",ic:"🎓",nm:"פגישת מחזור",ex:"המחזור של תשס״ח"},{id:"simcha",ic:"💍",nm:"חתונה / שמחה",ex:"שבע ברכות למשפחת כהן"},{id:"producer",ic:"🎬",nm:"הפקת אירוע",ex:"חתונת לוי — הפקה"},{id:"kablan",ic:"🏗️",nm:"קבלן / פרויקט",ex:"שיפוץ הדירה ברעננה"},{id:"flat",ic:"🏠",nm:"דירת שותפים",ex:"הדירה ברחוב יפו 12"},{id:"other",ic:"🤝",nm:"משהו אחר",ex:"הקבוצה שלנו"}];function ze(e){const t=e&&e.kind||"trip";return rt.find(a=>a.id===t)||rt[rt.length-1]}const Ze=e=>e&&e.flag||ze(e).ic,ve=[{id:"food",ic:"🍽️",nm:"אוכל ומסעדות"},{id:"hotel",ic:"🏨",nm:"לינה"},{id:"taxi",ic:"🚕",nm:"נסיעות"},{id:"flight",ic:"✈️",nm:"טיסות"},{id:"shop",ic:"🛍️",nm:"קניות"},{id:"fun",ic:"🎟️",nm:"בילוי ואטרקציות"},{id:"market",ic:"🛒",nm:"סופר"},{id:"meat",ic:"🥩",nm:"בשר ודגים"},{id:"drinks",ic:"🥤",nm:"שתייה"},{id:"gear",ic:"⛺",nm:"ציוד"},{id:"gift",ic:"🎁",nm:"מתנות"},{id:"host",ic:"🏡",nm:"אירוח"},{id:"venue",ic:"🏛️",nm:"אולם ומקום"},{id:"catering",ic:"🥘",nm:"קייטרינג"},{id:"music",ic:"🎶",nm:"מוזיקה ותזמורת"},{id:"photo",ic:"📸",nm:"צילום"},{id:"decor",ic:"💐",nm:"עיצוב ופרחים"},{id:"staff",ic:"👷",nm:"עובדים"},{id:"materials",ic:"🧱",nm:"חומרים"},{id:"tools",ic:"🛠️",nm:"כלים והשכרה"},{id:"transport",ic:"🚚",nm:"הובלות"},{id:"rent",ic:"🏠",nm:"שכירות"},{id:"bills",ic:"💡",nm:"חשבונות"},{id:"cleaning",ic:"🧹",nm:"ניקיון"},{id:"other",ic:"📎",nm:"אחר"}],Ai={trip:["food","hotel","taxi","flight","shop","fun","market","other"],family:["food","market","host","gift","fun","taxi","gear","other"],mangal:["meat","market","drinks","gear","taxi","fun","other"],team:["food","fun","venue","taxi","gift","drinks","other"],reunion:["venue","catering","music","photo","decor","gift","other"],simcha:["venue","catering","music","photo","decor","gift","host","other"],producer:["venue","catering","music","photo","decor","staff","transport","other"],kablan:["materials","staff","tools","transport","bills","other"],flat:["rent","bills","market","cleaning","food","gear","other"],other:["food","market","shop","fun","gift","taxi","other"]};function Ci(e,t){const a=(Ai[ze(e).id]||Ai.other).slice();return(t||[]).forEach(n=>{const s=n.category||"other";a.indexOf(s)<0&&a.push(s)}),a.map(n=>ve.find(s=>s.id===n)).filter(Boolean)}const Ie=["#1E6B4C","#3C5B7A","#7A4A33","#5A4A78","#2F6E6B","#7A5230","#8A3F52","#4A6136"],_l=["אמרלד","כחול דיו","ערמון","שזיף","טורקיז עמוק","טבק","בורדו","זית"],Zn={exp:{on:"all",off:"mine",lblOn:'<span aria-hidden="true">👁️</span> כל הוצאות הקבוצה',lblOff:'<span aria-hidden="true">🔒</span> רק ההוצאות שלהם'},bal:{on:"all",off:"mine",lblOn:'<span aria-hidden="true">👁️</span> המאזן של כל המשתתפים',lblOff:'<span aria-hidden="true">🔒</span> רק החשבון האישי שלהם'},sum:{on:"on",off:"off",lblOn:'<span aria-hidden="true">👁️</span> הסיכום הקבוצתי המלא',lblOff:'<span aria-hidden="true">🔒</span> סיכום קבוצתי למנהל בלבד'}},Oi=1e4,Qt=[["#3C8C68","#1E6B4C"],["#5FA98A","#2F7A5C"],["#4E9C94","#2F6E6B"],["#7FA860","#4A6136"],["#6E9BB8","#3C5B7A"],["#9C8F5E","#6E6234"]],Mi={trip:["✈️","🌍","🏔️","🏖️","🚗","⛺","🇭🇺","🇦🇹","🇨🇿","🇮🇹","🇫🇷","🇨🇭","🇬🇧","🇺🇸","🇬🇷","🇪🇸","🇵🇱","🇷🇴","🇬🇪","🇦🇪","🇹🇭","🇲🇦","🇵🇹","🇩🇪"],family:["👨‍👩‍👧‍👦","🏡","🍲","🎂","🕯️","🧺","🥗","🎈"],mangal:["🔥","🥩","🌭","🍗","🧆","🍉","⚽","🏞️"],team:["💼","🎳","🍕","🎯","🚀","🏢","🎤","☕"],reunion:["🎓","📸","🎉","🎈","🕰️","🎤","🍰","🏫"],simcha:["💍","🎊","💐","🎁","🎶","✨","🕍","🎉"],producer:["🎬","🎤","🎪","📋","🎛️","💡","🎭","📸"],kablan:["🏗️","🧱","🔨","🛠️","📐","🚧","🏠","🪚"],flat:["🏠","🔑","🛋️","🧾","💡","🧹","🛒","🚿"],other:["🤝","⭐","📦","🎯","💰","📌","🎈","🧾"]},f={ready:!1,cloud:!1,assets:null,downloads:null,trips:[],tripId:null,expenses:[],expensesReady:!1,tab:"exp",screen:"home",joinTripId:null,filter:{cat:null,payer:null},showArchived:!1,celebrated:{},unsubExp:null,syncError:null,tripsWatch:null};let L=null;const m=(e,t)=>(t||document).querySelector(e),J=(e,t)=>Array.from((t||document).querySelectorAll(e)),F={get(e){try{return localStorage.getItem(e)}catch{return null}},set(e,t){try{return localStorage.setItem(e,t),!0}catch{return!1}},del(e){try{localStorage.removeItem(e)}catch{}}},vt={get(e){try{return sessionStorage.getItem(e)}catch{return null}},set(e,t){try{return sessionStorage.setItem(e,t),!0}catch{return!1}},del(e){try{sessionStorage.removeItem(e)}catch{}}},ke=!(typeof window!="undefined"&&window.claude&&typeof window.claude.use=="function"),Sl="",ea="https://shavehbeshaveh.co.il/",Pi=ea.replace(/^https?:\/\//,"").replace(/\/+$/,""),Xn="shaveh_synccfg_v1",Qn=/^https:\/\/[a-z0-9-]{3,63}\.supabase\.co$/;function ga(){const e=typeof window!="undefined"&&window.SHAVEH_CONFIG||null;return e&&e.u&&e.k?{u:String(e.u).replace(/\/+$/,""),k:String(e.k)}:null}const Ni=!!ga();function Za(){const e=ga();if(e)return e;try{const t=JSON.parse(F.get(Xn)||"null");return t&&t.u&&t.k&&Qn.test(String(t.u).replace(/\/+$/,""))?t:null}catch{return null}}function es(e){e?F.set(Xn,JSON.stringify(e)):F.set(Xn,"null")}function ts(){const e={};return(location.hash||"").replace(/^#/,"").split("&").forEach(t=>{if(!t)return;const a=t.indexOf("="),n=a<0?t:t.slice(0,a);let s=a<0?"":t.slice(a+1);try{s=decodeURIComponent(s)}catch{}e[n]=s}),e}function Hi(){const e=(location.hash||"").indexOf("admin")>=0?"#admin":"";try{history.replaceState(null,"",location.pathname+location.search+e)}catch{}}function ta(){try{const e=new URL(location.href);if(!e.searchParams.has("join"))return;e.searchParams.delete("join"),history.replaceState(null,"",e.pathname+e.search+e.hash)}catch{}}async function jl(e){const t=ts().cfg;if(t==null)return;Hi();let a=null;try{a=JSON.parse(decodeURIComponent(escape(atob(t.replace(/-/g,"+").replace(/_/g,"/")))))}catch(d){console.warn("cfg link ignored — not valid",d),E("קישור ההגדרות אינו תקין ולא הוחל");return}const n=a&&typeof a.u=="string"?a.u.trim().replace(/\/+$/,""):"",s=a&&typeof a.k=="string"?a.k.trim():"";if(e)return;const o=ga();if(o){n!==o.u&&E("קישור ההגדרות לא הוחל — האפליקציה מחוברת לשרת הקבוע שלה");return}if(!Qn.test(n)||!/^[A-Za-z0-9._-]{20,600}$/.test(s)){E("קישור ההגדרות אינו תקין ולא הוחל");return}const i=n.replace(/^https:\/\//,"");await xe("חיבור לשרת נתונים",`הקישור מבקש לחבר את האפליקציה במכשיר הזה לשרת ${i}. כל מה שתרשמו מעכשיו יישמר שם. לחבר רק אם הקישור הגיע ממי שמנהל את הקבוצה שלכם. לחבר?`,"חיבור")&&es({u:n,k:s})}const Tl="https://shaveh-admin.surge.sh/";let Ct=null,va=null;function Ii(e){va=e==="licensed"||e==="exempt"?e:null}function $a(){return va==="licensed"?"המחירים סופיים וכוללים מע״מ.":va==="exempt"?"המחירים סופיים — מפעיל השירות עוסק פטור, ולא נגבה מע״מ.":"המחירים סופיים וכוללים מע״מ ככל שחל."}let as="";function Di(e){const t=Logic.normalizePhone(e);as=/^05\d{8}$/.test(t)?t:""}const Al=["week","month","annual","exp20","days7","business","pro"];let Xa={};function Ri(e){const t={};e&&typeof e=="object"&&!Array.isArray(e)&&Al.forEach(a=>{const n=typeof e[a]=="string"?e[a].trim():"";/^https:\/\/\S{3,}$/.test(n)&&n.length<=500&&(t[a]=n)}),Xa=t}function Cl(e){const t=ga();return!!(t&&e&&typeof e.u=="string"&&t.u===e.u.replace(/\/+$/,""))}async function Bi(e){if(!e||f.apiMode==="legacy")return;const t=Cl(e);try{const a=await fetch(e.u.replace(/\/+$/,"")+"/rest/v1/rpc/get_public_settings",{method:"POST",body:"{}",headers:{apikey:e.k,Authorization:"Bearer "+e.k,"Content-Type":"application/json"}});if(!a.ok)return;const n=await a.json();if(!n||typeof n!="object")return;let s=!1,o=!1;const i=va;if(t){typeof n.sellerPhone=="string"&&Di(n.sellerPhone);const p=JSON.stringify(Xa);Ri(n.payLinks),s=JSON.stringify(Xa)!==p;const u={};typeof n.businessEmail=="string"&&(u.email=n.businessEmail),typeof n.businessAddress=="string"&&(u.address=n.businessAddress),typeof n.businessPhone=="string"&&(u.phone=n.businessPhone),o=Object.keys(u).length>0,o&&us(u),Ii(n.vatMode),mo(n.vatMode)}const c=n.maintenance,d=n.announcement,l=c&&c.text?{text:String(c.text),warn:!0}:d&&d.text?{text:String(d.text),warn:d.tone==="warn"}:null;Ct=l?{text:l.text.slice(0,280),warn:l.warn}:null,(Ct||o||s||va!==i)&&Y()}catch{}}function Ol(){return Ct?`<div class="banner${Ct.warn?" warn":""}" role="status" style="margin:0 0 12px;">${r(Ct.text)}</div>`:""}function Ml(){return`<a class="btn primary block" href="${Tl}" target="_blank" rel="noopener" style="margin-top:14px;">
        ${he("chart",18)} לאזור הניהול המקצועי</a>
      <p class="hint">לוח בקרה, הכנסות, רישיונות, פרטיות ויומן פעולות — בכניסה מאובטחת עם אימות דו־שלבי.</p>`}const Ot={iter:0,salt:"",hash:""},aa="shaveh_admin_s1";let ns=!1,Qa="";F.del("shaveh_admin_v1");function wa(){try{return JSON.parse(vt.get(aa)||"null")}catch{return null}}(function(){const t=wa();t&&typeof t.s=="string"&&vt.del(aa)})();function ka(){const e=wa();return!e||e.m!=="server"?"":typeof e.t=="string"&&/^sess_[A-Za-z0-9_-]{20,100}$/.test(e.t)?e.t:e.mem&&Qa?Qa:""}const Fi=()=>L&&L.serverAdmin?"server":"local";function $t(){if(ns)return!0;const e=wa();return!!(e&&e.m===Fi()&&(e.m==="local"||ka()))}function Ui(){const e=wa();e&&typeof e.t=="string"&&L&&L.adminLogout&&L.adminLogout(e.t),Qa="",vt.del(aa)}function Pl(){wa()&&(Ui(),E("הגישה לאזור המנהל פגה — יש להיכנס מחדש"),Y())}async function Nl(e,t,a){const n=new TextEncoder,s=new Uint8Array((t.match(/../g)||[]).map(c=>parseInt(c,16))),o=await crypto.subtle.importKey("raw",n.encode(e),"PBKDF2",!1,["deriveBits"]),i=await crypto.subtle.deriveBits({name:"PBKDF2",hash:"SHA-256",salt:s,iterations:a},o,256);return Array.from(new Uint8Array(i)).map(c=>c.toString(16).padStart(2,"0")).join("")}async function Hl(e,t){const a=String(e||"").trim();if(a.length<12||a.length>200)return{ok:!1,error:"denied"};if(Fi()==="server"){const o=await L.adminLogin(a,String(t||"").replace(/\D/g,"").slice(0,6));return o&&typeof o.token=="string"&&o.token.indexOf("sess_")===0?(vt.set(aa,JSON.stringify({m:"server",t:o.token})),{ok:!0}):o&&o.legacy?(o.ok&&(Qa=a,vt.set(aa,JSON.stringify({m:"server",mem:!0}))),{ok:!!o.ok,error:o.ok?"":"denied"}):{ok:!1,error:o&&typeof o.error=="string"&&o.error||"denied"}}if(!Ot.hash||!Ot.salt||!(crypto&&crypto.subtle))return{ok:!1,error:"no_local"};const n=await Nl(a,Ot.salt,Ot.iter);let s=n.length^Ot.hash.length;for(let o=0;o<n.length&&o<Ot.hash.length;o++)s|=n.charCodeAt(o)^Ot.hash.charCodeAt(o);return s===0&&vt.set(aa,JSON.stringify({m:"local"})),{ok:s===0,error:s===0?"":"denied"}}const en={denied:"הסיסמה שגויה — נסו שוב",code:"הקוד שגוי או שפג תוקפו — הזינו את הקוד העדכני מאפליקציית האימות",totp_required:"הזינו את הקוד בן 6 הספרות מאפליקציית האימות",rate:"יותר מדי ניסיונות — נסו שוב בעוד כמה דקות",stale_migration:"השרת דורש עדכון לפני כניסה — ראו את אזור הניהול המקצועי",no_local:"במכשיר הזה אין כניסה מקומית לאזור המנהל — היכנסו דרך אזור הניהול המקצועי"},na="shaveh_known_v1",sa=/^[A-Za-z0-9_-]{22,64}$/,ia=/^[A-Za-z0-9_-]{1,100}$/,tn="shaveh_src_v1";function Il(){let e=null;try{e=JSON.parse(F.get(tn)||"null")}catch{e=null}const t=Date.now(),a=Logic.sourceFromQuery(location.search,{kinds:rt.map(s=>s.id),joinRe:ia,now:t}),n=Logic.firstTouch(e,a,t);if(!n){e!=null&&F.del(tn);return}JSON.stringify(n)!==JSON.stringify(e)&&F.set(tn,JSON.stringify(n))}function Dl(){try{return Logic.sourceValid(JSON.parse(F.get(tn)||"null"),Date.now())}catch{return null}}function oa(){let e=null;try{e=JSON.parse(F.get(na)||"null")}catch{e=null}if(!e||typeof e!="object"||Array.isArray(e)){e={};const t=n=>{ia.test(n)&&!e[n]&&(e[n]={at:Date.now()})},a=n=>{try{return JSON.parse(F.get(n)||"{}")||{}}catch{return{}}};Object.keys(a("shaveh_owner_v1")).forEach(t),Object.keys(a("shaveh_me_v2")).forEach(t),Object.keys(a("shaveh_mgrpass_v1")).forEach(t),F.set(na,JSON.stringify(e))}return e}function Mt(e,t,a){if(!e||!ia.test(e)||tt)return;const n=oa(),s=n[e]||{},o=!!(t&&sa.test(t));if(a&&o&&s.k&&s.k!==t){if(s.nk===t)return;n[e]=Object.assign({},s,{nk:t,at:Date.now()}),F.set(na,JSON.stringify(n));return}const i=o?t:s.k,c=o&&!!s.nk;if(s.k===i&&n[e]&&!c&&Date.now()-(s.at||0)<864e5)return;const d=Object.assign({},s,i?{k:i}:{},{at:Date.now()});c&&delete d.nk,n[e]=d,F.set(na,JSON.stringify(n))}function Rl(e,t){const a=oa(),n=a[e];if(!n||!n.nk)return;const s=Object.assign({},n);t&&(s.k=n.nk),delete s.nk,a[e]=s,F.set(na,JSON.stringify(a))}const Ki=e=>(oa()[e]||{}).nk||"";function an(e){Bl(e);const t=oa();t[e]&&(delete t[e],F.set(na,JSON.stringify(t)))}const ss="shaveh_mkeys_v1";function is(){try{const e=JSON.parse(F.get(ss)||"{}");return e&&typeof e=="object"&&!Array.isArray(e)?e:{}}catch{return{}}}function Pt(e,t){const a=is()[e],n=a&&t?a[t]:"";return typeof n=="string"&&sa.test(n)?n:""}function nn(e,t,a){if(tt||!ia.test(e||"")||!ia.test(t||"")||!sa.test(a||""))return;const n=is();n[e]=Object.assign({},n[e],{[t]:a}),F.set(ss,JSON.stringify(n))}function Bl(e){const t=is();t[e]&&(delete t[e],F.set(ss,JSON.stringify(t)))}const xa=e=>(oa()[e]||{}).k||"";function zi(){const e=new Uint8Array(16);return crypto.getRandomValues(e),btoa(String.fromCharCode.apply(null,Array.from(e))).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function Nt(e){return"https://wa.me/?text="+encodeURIComponent(e)}function Ht(e,t){let a=Logic.normalizePhone(e);return a.indexOf("0")===0&&(a=a.slice(1)),"https://wa.me/972"+a+"?text="+encodeURIComponent(t)}const Fl={trip:{noun:"הטיול",word:"טיול",warm:"היה נפלא לטייל יחד!",bye:"בטיול הבא"},mangal:{noun:"המנגל",word:"מנגל",warm:"היה נפלא להיפגש!",bye:"במנגל הבא"},family:{noun:"המפגש",word:"מפגש",warm:"היה נפלא להיות יחד!",bye:"במפגש הבא"},team:{noun:"הערב",word:"ערב",warm:"היה ערב נהדר!",bye:"בערב הבא"},reunion:{noun:"המפגש",word:"מפגש",warm:"היה נפלא להיפגש שוב!",bye:"במפגש הבא"},simcha:{noun:"האירוע",word:"אירוע",warm:"היה נפלא לשמוח יחד!",bye:"בשמחות"},producer:{noun:"האירוע",word:"אירוע",warm:"היה תענוג לעבוד יחד!",bye:"באירוע הבא"},kablan:{noun:"הפרויקט",word:"פרויקט",warm:"תודה על עבודה משותפת!",bye:"בפרויקט הבא"},other:{noun:"האירוע",word:"אירוע",warm:"היה נפלא לחגוג יחד!",bye:"באירוע הבא"}},qi=e=>Fl[ze(e).id]||null,sn=e=>e.map(t=>t&&"‏"+t).join(`
`),lt=(e,t)=>Se(Math.abs(e),t).replace(/\.00(?!\d)/,""),It=(e,t)=>{const a=lt(e,t);return a.charAt(0)==="‏"?"‏*"+a.slice(1)+"*":"*"+a+"*"},Le=e=>Logic.waUser(e,60),os=e=>(/^[\u0590-\u05FF]/.test(Logic.cleanText(e,60))?"ל":"ל־")+Le(e),ct=e=>{let t=String(e||"");return/^[1-9]\d{7,8}$/.test(t)&&(t="0"+t),/^05\d{8}$/.test(t)||/^07\d{8}$/.test(t)?t.slice(0,3)+"-"+t.slice(3):/^0\d{8}$/.test(t)?t.slice(0,2)+"-"+t.slice(2):t},Ul=(e,t,a,n)=>e===1?t:e===2?a:e+" "+n;function rs(e){const t=e.start?_e(e.start):"",a=e.start?_e(e.end||e.start):"",n=t?t===a?t:`${t}–${a}`:"";return[e.dest?Le(e.dest):"",n].filter(Boolean).join(" · ")}function Ji(e){return Logic.splitsByHead(e)?"חלוקה לפי ראשים"+(Logic.kidRateOf(e)===1?"":" · "+Ra(e).replace(/\.$/,"")):""}const Yi=e=>Logic.settleModeOf(e)==="min"?"_שיטה: קיזוז · מספר ההעברות הקטן ביותר_":"_שיטה: העברות ישירות · החזר לפי כל הוצאה_",ls=e=>ke&&!dl(e),cs=e=>ls(e)?": "+ma(e):"",ds=e=>{const t=Et(e);return t?`_${Le(t.name)} · באמצעות ״שווה בשווה״_`:"_שווה בשווה_"};function on(e,t,a,n,s,o){const i=Ue(e,t),c=Logic.dec(e.base),d=o||se(e.id),l=Logic.payTextLines(i.pay,{name:Le(i.name),memberPhone:we(i),secure:Ne(e),level:a,warnBank:i.id!==d,amount:n>0?Logic.fromCents(n,c).toFixed(c):"",cur:e.base,userText:Le});if(l.length){const u=Rr(i);return a!=="names"&&i.id!==se(e.id)&&u&&l.push(`_פרטי התשלום עודכנו ב־${Hn(u)} — כדאי לוודא מול ${Le(i.name)} לפני העברה_`),l}if(a==="names")return[];const p=s?we(i):"";return[p?`אמצעי התשלום: לתאם ישירות עם ${Le(i.name)}, בטלפון ${ct(p)}`:`אמצעי התשלום: לתאם ישירות עם ${Le(i.name)}`]}function Kl(e){const t=qi(e),a=[`${Ze(e)} *הזמנה להצטרף לקבוצת ״${Le(e.name)}״*`],n=Et(e);a.push(n?`_באדיבות ${Le(n.name)} · ${t?"כל הוצאות "+t.noun:"כל ההוצאות"} במקום אחד_`:`_${t?"כל הוצאות "+t.noun:"כל ההוצאות"} במקום אחד, והחשבון מתחלק ״שווה בשווה״_`),a.push("");const s=rs(e);s&&a.push(s);const o=(e.members||[]).map(c=>Le(c.name));if(o.length){const c=o.length>8?o.slice(0,6).join(", ")+` ועוד ${o.length-6}`:o.join(", ");a.push("כבר בקבוצה: "+c)}const i=Ji(e);return i&&a.push(i),Number(e.budget)>0&&(de(e)||Xe(e).sum==="on")&&a.push("תקציב: "+lt(Logic.toCents(e.budget,Logic.dec(e.base)),e.base)),a.push(""),a.push("*להצטרפות בלחיצה:* "+ma(e)),Et(e)&&(a.push(""),a.push(ds(e))),sn(a)}function ps(e){const t=Logic.computeBalances(e,f.expenses),a=Logic.computeBalances(e,Logic.onlyExpenses(f.expenses)),n=mn(f.expenses),s=[`${Ze(e)} *סיכום הוצאות · ״${Le(e.name)}״*`],o=rs(e);o&&s.push(`_${o}_`),s.push(""),s.push(`סה״כ ${It(t.grand,e.base)} · ${Ul(n,"הוצאה אחת","שתי הוצאות","הוצאות")}`);const i=Ji(e);i&&s.push(i),s.push(""),s.push("*מצב החשבון*"),$r(e,t).forEach(d=>{const l=t.net[d.id]||0;s.push(l>0?`▲ *${Le(d.name)}* · לקבל ${It(l,e.base)}`:l<0?`▼ *${Le(d.name)}* · לשלם ${It(l,e.base)}`:`— *${Le(d.name)}* · ללא יתרה`),s.push(`_שולם ${lt(a.paid[d.id]||0,e.base)} · חלק בהוצאות ${lt(a.share[d.id]||0,e.base)}_`)});const c=Logic.transfersFor(e,f.expenses);if(s.push(""),c.length){s.push("*העברות לסגירת החשבון*"),s.push(Yi(e)),c.forEach(p=>s.push(`◂ מאת ${Le(le(e,p.from))} ${os(le(e,p.to))}: ${It(p.cents,e.base)}`));const d=[];c.forEach(p=>{d.indexOf(p.to)<0&&d.push(p.to)});const l=[].concat(...d.map(p=>on(e,p,"names")));l.length&&(s.push(""),s.push("*איך מעבירים*"),l.forEach(p=>s.push(p)),s.push("_הפרטים המלאים מופיעים באפליקציה, אצל מי שצריך להעביר_")),s.push(""),s.push(`✓ ${c.length===1?"אחרי ההעברה":"אחרי כל העברה"}, לסמן ״שולם״ באפליקציה${cs(e)}`)}else s.push("✓ *החשבון סגור, אין העברות פתוחות*"),ls(e)&&s.push("לפרטים באפליקציה: "+ma(e));return s.push(""),s.push(ds(e)),sn(s)}function Vi(e,t){const a=Logic.computeBalances(e,f.expenses),n=Logic.computeBalances(e,Logic.onlyExpenses(f.expenses)),s=Logic.transfersFor(e,f.expenses),o=a.net[t]||0,i=Ue(e,t),c=[`${Ze(e)} *החשבון של ${Le(i.name)} · ״${Le(e.name)}״*`],d=rs(e);d&&c.push(`_${d}_`),c.push(""),c.push(o>0?`▲ *בשורה התחתונה: לקבל ${lt(o,e.base)}*`:o<0?`▼ *בשורה התחתונה: לשלם ${lt(o,e.base)}*`:"— *בשורה התחתונה: ללא יתרה*"),c.push(`_שולם ${lt(n.paid[t]||0,e.base)} · חלק בהוצאות ${lt(n.share[t]||0,e.base)}_`);const l=s.filter(u=>u.from===t),p=s.filter(u=>u.to===t);if(l.length||p.length){const u=de(e);c.push(""),c.push("*העברות פתוחות*"),c.push(Yi(e)),l.forEach(h=>{c.push(`◂ להעביר ${os(le(e,h.to))}: ${It(h.cents,e.base)}`),(ii(Ue(e,h.to))||u)&&on(e,h.to,"full",h.cents,u).forEach(v=>c.push(v))}),p.forEach(h=>c.push(`▸ לקבל מאת ${Le(le(e,h.from))}: ${It(h.cents,e.base)}`)),p.length&&ii(i)&&(c.push(""),c.push("*איך להעביר לי*"),on(e,t,"full",p.length===1?p[0].cents:0,!1,"__other").forEach(h=>c.push(h))),c.push(""),l.length?c.push(`✓ ${l.length===1?"אחרי ההעברה":"אחרי כל העברה"}, לסמן ״שולם״ באפליקציה${cs(e)}`):ls(e)&&c.push("לפרטים באפליקציה: "+ma(e))}return sn(c)}function zl(e,t,a){const n=qi(e),s=Logic.cleanText(e.name,80),o=Le(s);let i;const c=Ze(e);n?new RegExp("^ה?"+n.word+"(\\s|$)").test(s)?i=`${c} *״${o}״ הסתיים*`:i=`${c} *${n.noun} ״${o}״ הסתיים*`:i=`${c} *סגירת חשבון · ״${o}״*`;const d=[i];d.push(`שלום ${Le(t.name)}, ${n?n.warm:"הגיע הזמן לסגור את החשבון."}`);const l=a.length;if(d.push(l===1?"לסגירת החשבון נשארה העברה אחת בלבד:":l===2?"לסגירת החשבון נשארו שתי העברות:":`לסגירת החשבון נשארו ${l} העברות:`),a.forEach(p=>{d.push(""),d.push(`◂ *להעביר ${os(le(e,p.to))}: ${lt(p.cents,e.base)}*`),on(e,p.to,"full",p.cents,!0,t.id).forEach(u=>d.push(u))}),l>=2){const p=a.reduce((u,h)=>u+h.cents,0);d.push(""),d.push(`${l===2?"סה״כ בשתי ההעברות":"סה״כ בכל ההעברות"}: ${It(p,e.base)}`)}return d.push(""),d.push(`✓ ${l===1?"אחרי ההעברה":"אחרי כל העברה"}, לסמן ״שולם״ באפליקציה${cs(e)}`),d.push(""),d.push(n?`תודה רבה, ונתראה ${n.bye}!`:"תודה רבה!"),d.push(ds(e)),sn(d)}const we=e=>e&&e.phone?Logic.normalizePhone(e.phone):"",Dt=e=>!!we(e),rn=(e,t)=>Logic.phonesEqual(we(e),t);function $p(e,t){return Logic.phoneKey(t)&&(e.members||[]).find(a=>rn(a,t))||null}const Gi="shaveh_owner_v1";function Ge(){try{return JSON.parse(F.get(Gi)||"{}")||{}}catch{return{}}}function ra(e,t){const a=Ge();a[e]=t,F.set(Gi,JSON.stringify(a))}const Ea={email:"shavehbeshaveh.app@gmail.com",address:"רחוב האר״י 100/51, צפת 1320950",phone:"",hours:""},et=Object.assign({name:"שמעון שטרן",bizId:"207518226"},Ea);function ql(e){if(typeof e!="string"||e.length>30)return"";const t=Logic.normalizePhone(e);return/^0[2-9]\d{7,8}$/.test(t)?t:""}function us(e){if(!e||typeof e!="object")return;const t=(a,n)=>typeof a=="string"?a.trim().slice(0,n):"";if("email"in e){const a=t(e.email,120);et.email=/^[^\s@<>"']+@[^\s@<>"']+\.[^\s@<>"']{2,}$/.test(a)?a:Ea.email}"address"in e&&(et.address=t(e.address,200)||Ea.address),"phone"in e&&(et.phone=ql(e.phone)||Ea.phone),"hours"in e&&(et.hours=t(e.hours,80)||Ea.hours)}let fs=null;function Jl(e){if(!e)return!1;if((e.purchases||[]).some(a=>a&&Number(a.price)>0))return!0;const t=Logic.planState(e,re,Date.now(),Rt,$e);return t.id!=="free"&&t.id!=="legacy"}function Wi(){return tt?fs!==!1:ko()?!0:(f.trips||[]).some(e=>e&&!e.demo&&Jl(e)&&de(e))}function De(e){const t=et.phone||"",a=e===!0||e!==!1&&Wi();return{name:et.name,bizId:a?et.bizId:"",full:a,phoneRaw:t,phone:t?t.replace(/^(0[57]\d)(\d{7})$/,"$1-$2").replace(/^(0[2-9])(\d{7})$/,"$1-$2"):"",tel:t?"+972"+t.replace(/^0/,""):"",mobile:/^05\d{8}$/.test(t),email:et.email,address:a?et.address:"",hours:t?et.hours:""}}function La(e){return e.phone?`<a href="tel:${r(e.tel)}" class="num" dir="ltr">${r(e.phone)}</a>`:""}function _a(e){return e.email?`<a href="mailto:${r(e.email)}" dir="ltr">${r(e.email)}</a>`:""}function ln(e){const t=De(e&&e.full),a=r(t.name)+(t.bizId?` · ת״ז/מספר עוסק <span class="num" dir="ltr">${r(t.bizId)}</span>`:"");return e&&e.noPhone||!t.phone?a:`${a} · טלפון ${La(t)}`}const Yl="פרטי העוסק המלאים, כולל מען למשלוח דואר, מוצגים לפני כל רכישה ובאישור העסקה שנשלח לרוכש.",Zi="לכתובת המופיעה באישור העסקה";function hs(e){return De(e&&e.full).full?"":`<p class="legal-biz-note" data-ref="biz-note">${Yl}</p>`}function la(e,t){const a=De(t&&t.full),n=!!(t&&t.noForm),s=[];a.email&&s.push(`<li><b>דוא״ל</b>: ${_a(a)}</li>`),a.address?s.push(`<li><b>${e==="general"?"דואר":"דואר רשום"}</b>: ${r(a.address)}</li>`):e==="cancel"&&s.push(`<li><b>דואר רשום</b>: ${Zi}</li>`);const o=e==="cancel"?'הקישור <button type="button" class="linklike" data-help-open="contact" data-help-id="cancellation">״ביטול עסקה״</button> בתחתית מסך הבית':`<button type="button" class="linklike" data-help-open="contact"${e==="privacy"?' data-help-id="privacy"':e==="a11y"?' data-help-id="accessibility"':""}>״פנייה לנציג״</button> במרכז העזרה`;return n||s.push(`<li><b>${e==="cancel"?"טופס באפליקציה":"באתר"}</b>: ${o}</li>`),a.phone&&s.push(`<li><b>טלפון</b> (שיחה קולית): ${La(a)}${a.hours?` · ${r(a.hours)}`:""}</li>`),a.mobile&&s.push(`<li><b>וואטסאפ</b>${e==="cancel"||e==="privacy"?" (דרך נוספת)":""}: <span class="num" dir="ltr">${r(a.phone)}</span>${e==="a11y"?" — גם בהודעה כתובה":""}</li>`),`<ul class="legal-contact">${s.join("")}</ul>`}function ms(e,t){const a=De(t&&t.full);return bs([a.email?`בדוא״ל ${_a(a)}`:"",a.phone?`בטלפון ${La(a)}`:"",a.address?`בדואר רשום: ${r(a.address)}`:`בדואר רשום ${Zi}`,e])}function Xi(){const e=De(!0);return`
      <details class="pay-biz" data-ref="pay-biz">
        <summary>פרטי העוסק</summary>
        <ul class="legal-contact">
          <li><b>מפעיל השירות</b>: ${r(e.name)}</li>
          <li><b>ת״ז/מספר עוסק</b>: <span class="num" dir="ltr">${r(e.bizId)}</span></li>
          ${e.phone?`<li><b>טלפון</b>: ${La(e)}</li>`:""}
          <li><b>דוא״ל</b>: ${_a(e)}</li>
          <li><b>מען למשלוח דואר</b>: ${r(e.address)}</li>
        </ul>
      </details>`}function bs(e){const t=e.filter(Boolean);return t.length>1?`${t.slice(0,-1).join(", ")} או ${t[t.length-1]}`:t[0]||""}function ys(){if(as)return as;const e=De();return e.mobile?e.phoneRaw:""}function ca(){return ys()?"wa":"mail"}function cn(){return ca()==="wa"?"בוואטסאפ":"בדוא״ל"}function Qi(e,t,a){const n=s=>encodeURIComponent(String(s||"").replace(/\r?\n/g,`\r
`));return"mailto:"+e+"?subject="+n(t)+"&body="+n(a)}function Sa(e,t){const a=ys();return a?Ht(a,e):Qi(De().email,t||"שווה בשווה — בקשה",e)}function ja(e){return ca()==="wa"?e?"btn wa block":"btn wa soft block":e?"btn primary block":"btn block"}function gs(){return ca()==="wa"?' data-seller="wa" target="_blank" rel="noopener"':' data-seller="mail"'}const dn="6.10.2026",eo={terms:{ttl:"תקנון שימוש",body:()=>{const e=De();return`
      <h3>1 · מהות השירות ופרטי מפעיל השירות</h3>
      <p>״שווה בשווה״ הוא כלי לרישום ולחישוב של הוצאות משותפות בקבוצות. השירות מופעל על ידי ״מפעיל השירות״: ${ln()}. פרטי ההתקשרות:</p>
      ${la("general")}
      ${hs()}
      <h3>2 · השירות אינו שירות תשלומים</h3>
      <p>האפליקציה מחשבת ומציגה בלבד. כסף בין המשתתפים אינו עובר דרך השירות: ההעברות מתבצעות ישירות ביניהם (ביט, פייבוקס, מזומן וכדומה), באחריותם הבלעדית. סימון ״שולם״ הוא רישום בלבד ואינו אסמכתא לביצוע העברה. פרטי התשלום שמוצגים בקבוצה (טלפון לביט/פייבוקס, פרטי חשבון וכדומה) מוזנים על ידי המשתתפים ובאחריותם — יש לוודא אותם מול המקבל לפני כל העברה.</p>
      <h3>3 · נכונות החישובים</h3>
      <p>החישובים מבוססים אך ורק על הנתונים שהזינו המשתתפים. שערי מטבע הם משוערים או מתעדכנים באיחור, ומסומנים ככאלה; באחריות המשתתפים לוודא סכומים לפני העברת כסף. השירות ומפעילו אינם אחראים לטעויות הזנה, לסכסוכים בין משתתפים או לנזקים עקיפים.</p>
      <h3>4 · אחריות מנהל הקבוצה</h3>
      <p>מי שפותח קבוצה אחראי לנכונות פרטיה, לשיתוף קישור ההצטרפות רק עם חברי הקבוצה, ולשימוש בבקרות הפרטיות. קישור ההצטרפות מקנה גישה לנתוני הקבוצה — יש לשתפו בזהירות.</p>
      <h3>5 · מסלולים בתשלום</h3>
      <p>המחירים מוצגים במסך ״המסלולים״. ${r($a())} השירות דיגיטלי ומסופק מיידית עם ההפעלה. מסלולי קבוצה (שבוע, חודש, שנה) וחבילות השלמה חלים על הקבוצה שעבורה נרכשו, לתקופה ולמספר ההוצאות שצוינו בהם; מעבר למסלול גדול יותר בזמן שהמסלול הקיים בתוקף — בתשלום ההפרש; חידוש של אותו מסלול מתווסף לסוף התוקף הקיים. רישיון עסקי (חודשי או שנתי) חל על כל הקבוצות שפותח מנהל שמספר הטלפון שלו רשום ברישיון, וכולל הצגת שם העסק והלוגו שלו. בתום תקופה הקבוצה חוזרת למכסת המסלול החינמי, ורק הוספת הוצאות מעבר לה נעצרת — הנתונים, הצפייה וההתחשבנות נשמרים. רישיון עסקי אינו מחליף את המסלול של הקבוצה: בתום הרישיון חוזרת הקבוצה למסלול שהיה לה. אין חידוש אוטומטי.</p>
      <p>תשלום באתר מתבצע בעמוד התשלום המאובטח של Grow (לשעבר משולם), חברת סליקה מורשית — בכרטיס אשראי, Bit, Apple Pay או Google Pay. פרטי אמצעי התשלום נמסרים ל-Grow בלבד ואינם נשמרים אצלנו, וקבלה נשלחת אוטומטית. כשהתשלום בעמוד המאובטח מאושר — המסלול מופעל מיד; בתשלום בקישור תשלום או בהעברה ישירה למפעיל השירות — ההפעלה ידנית, לאחר אישור התשלום.</p>
      <h3>6 · ביטול עסקה והחזרים</h3>
      <p>אפשר לבטל רכישה של מסלול, רישיון או חבילת השלמה בתוך <span class="num">14</span> יום מיום הרכישה או מיום קבלת המסמך עם פרטי העסקה — המאוחר מביניהם, גם אם השירות כבר הופעל. התשלום יוחזר לאותו אמצעי תשלום בתוך <span class="num">14</span> יום מקבלת הודעת הביטול, בניכוי תמורה יחסית לתקופה שבה נעשה שימוש בשירות, ובניכוי דמי ביטול של עד <span class="num">5%</span> ממחיר העסקה או <span class="num">100 ₪</span> — הנמוך מביניהם (חוק הגנת הצרכן, התשמ״א-1981, סעיפים 14ג ו־14ה).</p>
      <p>אנשים עם מוגבלות, אזרחים ותיקים ועולים חדשים רשאים לבטל בתוך <span class="num">4</span> חודשים מיום העסקה או מיום קבלת המסמך עם פרטי העסקה — המאוחר מביניהם, כאשר ההתקשרות כללה שיחה עם מפעיל השירות, לרבות שיחה בתקשורת אלקטרונית (סעיף 14ג1).</p>
      <p><b>אפשר למסור הודעת ביטול בכל אחת מהדרכים האלה:</b></p>
      ${la("cancel")}
      <p>בהודעת הביטול מציינים שם ומספר זהות${e.phone?"; בביטול טלפוני ייתכן שנבקש פרט מזהה נוסף, אם סוכם עליו מראש":""}. בטופס שבאתר מספר זהות אינו חובה — די בשם, בטלפון לחזרה ובשם הקבוצה או המסלול; מי שרוצים לציין אותו יכולים לכתוב אותו בתוכן ההודעה.</p>
      <p>ההתקשרות תסתיים בתוך <span class="num">3</span> ימי עסקים מקבלת ההודעה (<span class="num">6</span> ימי עסקים בהודעה שנשלחה בדואר רשום), ומאותו מועד לא ייגבה תשלום נוסף. אישור על הביטול יישלח בכתב.</p>
      <h3>7 · העוזר הדיגיטלי (בינה מלאכותית)</h3>
      <p>במרכז העזרה פועל עוזר דיגיטלי מבוסס בינה מלאכותית. זו מערכת אוטומטית ולא אדם; התשובות שלו הן מידע כללי בלבד, וייתכנו בהן טעויות. במקרה של סתירה — גוברים תקנון זה והמחירים שבמסך ״המסלולים״. העוזר אינו מקבל הודעות ביטול, בקשות החזר או בקשות לפי חוק הגנת הפרטיות, ואינו מבצע פעולות בחשבון — לשם כך פונים בדרכים שבסעיף 6 או ב״פנייה לנציג״ שבמרכז העזרה.</p>
      <h3>8 · פניות ותלונות</h3>
      <p>מענה אנושי ניתן בנושאים שהחוק מחייב בהם פנייה ישירה: ביטול עסקה, החזר כספי או חיוב שגוי, עיון במידע אישי, תיקונו או מחיקתו, נגישות, ותלונות — כולל תלונה על תשובה שגויה של העוזר. פונים דרך ״פנייה לנציג״ במרכז העזרה או בפרטי ההתקשרות שבסעיף 1. לכל פנייה בטופס ניתן מספר פנייה, ומענה ראשון ניתן בדרך כלל בתוך <span class="num">2</span> ימי עסקים.</p>
      <h3>9 · שימוש הוגן</h3>
      <p>אין להשתמש בשירות למטרה בלתי חוקית, להזין תוכן פוגעני או להתחזות לאחר. מפעיל השירות רשאי להסיר תוכן או קבוצה החורגים מכך.</p>
      <h3>10 · זמינות ושינויים</h3>
      <p>השירות ניתן כפי שהוא (As-Is). ייתכנו הפסקות זמינות, עדכונים ושינויים בתקנון; הודעה על שינוי מהותי תוצג באפליקציה. מומלץ לגבות נתונים חשובים (אזור המנהל ← גיבוי).</p>
      <h3>11 · דין וסמכות שיפוט</h3>
      <p>על השימוש בשירות יחול הדין הישראלי בלבד, וסמכות השיפוט הבלעדית נתונה לבית המשפט המוסמך בישראל.</p>`}},privacy:{ttl:"מדיניות פרטיות",body:()=>{const e=De();return`
      <h3>1 · מי אחראי למידע</h3>
      <p>בעל השליטה במאגר המידע של ״שווה בשווה״ הוא מפעיל השירות, ${ln({noPhone:!0})}. אפשר לפנות אליו בכל עניין של פרטיות:</p>
      ${la("general")}
      ${hs()}
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
      <h3>7 · פניות לנציג</h3>
      <p>פנייה שנשלחת בטופס ״פנייה לנציג״ נשמרת בטבלה סגורה בשרתי Supabase באיחוד האירופי, ומשמשת רק לטיפול בה ולתיעוד הטיפול. התראה על פנייה חדשה עשויה להישלח למפעיל השירות בדוא״ל — דרך ספק משלוח דוא״ל חיצוני, Resend (ארצות הברית), שמעביר את פרטי הפנייה (שם, פרטי קשר, נושא ותוכן) לתיבת הדוא״ל של המפעיל לצורך הטיפול בה בלבד. אפשר לבקש את מחיקת הפנייה בכל עת, בדרכים שבסעיף 8.</p>
      <h3>8 · אבטחה וזכויותיכם (לפי חוק הגנת הפרטיות, כולל תיקון 13)</h3>
      <p>הגישה לנתונים עוברת רק דרך ממשק בשרת שבודק את מפתח הקבוצה בכל פעולה; שדות של מסלולים ורישיונות אינם ניתנים לשינוי מהדפדפן. לכל אדם הזכות לעיין במידע עליו (סעיף 13), בעברית, בערבית או באנגלית, וכן לבקש לתקן מידע שאינו נכון, שלם, ברור או מעודכן, או למחוק אותו (סעיף 14). את הבקשה מגישים בכתב — ${bs([e.email?"בדוא״ל":"","בטופס ״פנייה לנציג״ (נושא: עיון, תיקון או מחיקה של מידע אישי)",e.address?"בדואר רשום לכתובת שבסעיף 1":""])}. העיון אינו כרוך בתשלום. מענה יינתן בתוך <span class="num">30</span> יום לכל היותר. מחיקת קבוצה מוחקת את נתוניה לצמיתות. במחיקת מידע אישי לבקשתכם נמחקים השם, הטלפון ופרטי התשלום בכל הקבוצות, וגם השם, הדוא״ל והטלפון ברישומי התשלום; הסכום, התאריך ומספר הקבלה של תשלום שבוצע נשמרים, כנדרש לפי דין לצורכי הנהלת חשבונות. פנייה לנציג נמחקת יחד איתם, אלא אם היא עדיין בטיפול או נדרשת כראיה (למשל לביטול עסקה).</p>
      ${la("privacy")}
      <h3>9 · גיל</h3>
      <p>השירות מיועד לבני 18 ומעלה, או לקטינים בידיעת אחראי מבוגר.</p>
      <h3>10 · עדכונים</h3>
      <p>מדיניות זו עודכנה לאחרונה ב־<span class="num">${r(dn)}</span>; שינוי מהותי יוצג באפליקציה.</p>`}},a11y:{ttl:"הצהרת נגישות",body:()=>{const e=De();return`
      <h3>מחויבות</h3>
      <p>״שווה בשווה״ נבנתה כך שתהיה נגישה לכלל המשתמשים, בהתאם לתקן הישראלי ת״י 5568 ולהנחיות WCAG 2.1 ברמה AA.</p>
      <h3>מה יושם</h3>
      <p>ניווט מלא במקלדת ובקורא מסך (תוויות ARIA), יחסי ניגודיות תקניים, יעדי מגע בגודל 44 פיקסלים לפחות, גופן קריא בגודל מינימלי 12 פיקסלים, תמיכה במצב כהה, טפסים עם הודעות שגיאה ברורות, ותיאור מילולי לגרפים.</p>
      <h3>מרכז העזרה והעוזר הדיגיטלי</h3>
      <p>מרכז העזרה והעוזר הדיגיטלי (בינה מלאכותית) נבנו לפי אותו תקן: ניווט במקלדת, הקראת תשובות חדשות בקורא מסך ותוויות לכל שדה. מי שמתקשים להשתמש בעוזר, או מעדיפים מענה מאדם, יקבלו את אותו שירות בכל אחת מדרכי הפנייה שלהלן.</p>
      <h3>נתקלתם בקושי?</h3>
      <p>לדיווח על קושי בנגישות או לבקשת התאמה אפשר לפנות אל ${r(e.name)}, איש הקשר לנגישות בשירות:</p>
      ${la("a11y")}
      <p>נשיב בתוך <span class="num">2</span> ימי עסקים. עד לתיקון ליקוי נספק את השירות בדרך חלופית, ונתקן אותו בהקדם — ולכל המאוחר בתוך <span class="num">60</span> יום.</p>
      <h3>עדכון</h3>
      <p>ההצהרה עודכנה ב־<span class="num">${r(dn)}</span>.</p>`}}};function pn(e){const t=eo[e];if(!t)return;const a=De();pe(`
      <div class="sheet-head"><h2 class="sheet-title">${r(t.ttl)}</h2></div>
      <div class="legal-body">${typeof t.body=="function"?t.body():t.body}</div>
      <p class="hint legal-foot">עודכן: <span class="num">${r(dn)}</span>${a.email?` · שאלות: ${_a(a)}`:""}</p>`)}const Vl=Date.parse("2026-09-23T00:00:00+03:00"),Gl=Date.parse("2026-10-04T00:00:00+03:00"),Rt={paywall:Vl,v2:Gl,oldFreeMax:15},re={free:{nm:"חינם",price:0,maxExp:10},week:{nm:"שבוע",price:15,maxExp:40,days:7,topUp:!0,per:"לשבוע",blurb:"עד 40 הוצאות, לשבוע — לסוף שבוע ולטיול קצר."},month:{nm:"חודש",price:29,maxExp:80,days:31,topUp:!0,per:"לחודש",blurb:"עד 80 הוצאות, לחודש — לטיול ארוך ולאירוע גדול."},annual:{nm:"שנתי",price:250,maxExp:1/0,days:365,per:"לשנה",blurb:"ללא הגבלת הוצאות, לשנה שלמה — לדירת שותפים ולכל קבוצה מתמשכת."},event:{nm:"אירוע (מסלול קודם)",price:14.9,maxExp:100,legacy:!0},monthly:{nm:"מנוי חודשי (מסלול קודם)",price:19.9,maxExp:1/0,days:31,legacy:!0},pro:{nm:"פרו שנתי (מסלול קודם)",price:349,maxExp:1/0,days:365,legacy:!0}},$e={business:{nm:"עסקי",price:65,days:31,per:"לחודש",blurb:"ללא הגבלה, בכל הקבוצות שאתם פותחים — עם הלוגו והשם של העסק."},pro:{nm:"מקצועי שנתי",price:790,days:365,per:"לשנה",blurb:"כמו העסקי, לשנה שלמה — למפיקים, לקבלנים ולמארגנים."}},un=["free","week","month","annual"],Wl={trip:"week",mangal:"week",family:"week",team:"week",flat:"annual"},fn=["business","pro"],fe={exp20:{nm:"20 הוצאות נוספות",price:8},days7:{nm:"7 ימים נוספים",price:8}},hn=864e5,Zl=7*hn,W=e=>(Math.round(e*100)%100?Number(e).toFixed(2):String(Math.round(e)))+" ₪",to=(e,t)=>Object.assign(e,t?{nm:t.nm,price:t.price,days:t.days||0}:{nm:"ותיקים",price:0,days:0});function da(e){const t=Logic.planState(e,re,Date.now(),Rt,$e);return to(t,t.isLicense?$e[t.id]:re[t.id])}function wt(e){const t=Logic.planState(e,re,Date.now(),Rt,$e),a=t.isLicense?Logic.planState(Object.assign({},e,{licPlan:null,licUntil:0,licenseId:""}),re,Date.now(),Rt,$e):t;return to(a,re[a.id])}const vs=e=>Logic.onlyExpenses(e).filter(t=>!t.appFee).length,mn=e=>Logic.onlyExpenses(e).length,$s=e=>Logic.localIsoDay(e),qe=(e,t)=>{const a=new Date(Logic.timeMs(e)),n=a.getFullYear();return`${a.getDate()}.${a.getMonth()+1}`+(t||n!==new Date().getFullYear()?`.${n}`:"")},Bt=e=>qe(e.until,(e.days||0)>=365);function bn(e,t,a){const n=a&&a.own?wt(e):da(e);if(n.id==="legacy")return"מסלול ותיקים — ללא הגבלת הוצאות";const s=t?vs(t):Kt(e),o=n.isLicense?`רישיון עסקי ״${n.nm}״`:n.nm,i=` <span class="num">${s}</span> מתוך <span class="num">${n.maxExp}</span> הוצאות`;if(n.expired)return`${r(o)} · פג תוקף ב־<span class="num">${r(Bt(n))}</span> · במסלול החינמי:${i}`;const c=n.maxExp===1/0?" · ללא הגבלת הוצאות":` ·${i}`,d=n.until?` · בתוקף עד <span class="num">${r(Bt(n))}</span>`:"";return`${r(o)}${c}${d}`}function ws(e,t){const a=(t||[]).filter(o=>o&&o.appFee),n=new Set(a.map(o=>o.id)),s=new Set;return a.forEach(o=>(o.feeFor||[]).forEach(i=>s.add(i))),(e.purchases||[]).filter(o=>o&&o.price>0&&o.env!=="sandbox"&&!s.has(o.id)&&!(o.shared&&n.has(o.shared)))}const Xl=80;function Ql(e){const t=e.slice().sort().join("_"),a="e_fee_"+t;return a.length<=Xl?a:"e_fee_"+Logic.hashId(t).toString(36)+Logic.hashId("fee|"+t).toString(36)+"_"+e.length}function ao(e,t){const a=Logic.splitsByHead(e),n=a?Logic.groupHeads(e):(e.members||[]).length;return n>0?`כ־${W(Math.ceil(t/n*10)/10)} ${a?"למבוגר":"לכל משתתף"}`:""}function ks(e,t){const a=re[t];if(!a.price)return{kind:"free",cost:0,label:a.nm};if(wt(e).id===t&&a.days)return{kind:"renew",cost:a.price,label:`${a.nm} · חידוש ${W(a.price)}`};const s=Logic.upgradeCost(e,re,t,Date.now(),Rt);return s<a.price?{kind:"diff",cost:s,label:`${a.nm} · הפרש ${W(s)}`}:{kind:"full",cost:s,label:`${a.nm} · ${W(s)}`}}function dt(e,t,a,n){if(f.tripId===e.id&&!f.expensesReady&&(a||0)<50){setTimeout(()=>{f.tripId===e.id&&dt(e,t,(a||0)+1,n)},100);return}const s=n&&n.pick&&re[n.pick]?n.pick:"",o=f.trips.find(A=>A.id===e.id)||e,i=Date.now(),c=da(o),d=wt(o),l=!!c.isLicense,p=(o.members||[]).length,u=`
מזהה הקבוצה: ${o.id}`,h=A=>Sa(A,`שווה בשווה — ${o.name}`),v=cn(),y=gs(),b=oo(),S={link:0,wa:0},T=A=>A?"btn primary block":"btn block",w=A=>ja(A),k=A=>{const D=`<p class="pay-line">${r(A.line)}</p>`,be=`aria-label="${r(`${so}: ${A.what}, ${W(A.amount)}`)}"`;if(b==="grow")return D+`<button class="${T(A.rec)} pay-btn" data-pay="${r(A.item)}" data-amount="${A.amount}" data-kind="${r(A.kind)}" ${be}>${yn}</button>`;const Ee=b==="links"?$n(A.item,A.amount):"";if(S[Ee?"link":"wa"]++,!Ee)return A.waHtml;const yt=`שלום! שילמתי בקישור התשלום של Grow על ${A.what} (${W(A.amount)})`+(A.lic?`${g?`
הטלפון שלי: ${ct(Logic.normalizePhone(g))}`:""}`:` לקבוצה ״${o.name}״.${u}`)+`
אשמח להפעלה.`;return D+`<a class="${T(A.rec)} pay-btn" href="${r(Ee)}" target="_blank" rel="noopener" data-paylink="${r(A.item)}" data-what="${r(A.what)}" data-amount="${A.amount}"${A.lic?' data-lic="1"':""} ${be}>${yn}</a>
        <a class="${ja(!1)} sm pay-wa" href="${r(h(yt))}"${y} aria-label="${r(`אחרי התשלום על ${A.what} — אישור להפעלה ${v}`)}">אחרי התשלום — אישור להפעלה ${v}</a>`},O=ze(o),N=Wl[O.id]||"month",K=O.id==="other"?"מומלץ":"מומלץ ל"+O.nm.split(" / ")[0],U=d.days>0&&(d.expired||d.until-i<Zl),z=!!(re[d.id]&&re[d.id].legacy)&&U&&!d.expired;let B=!1;const ae=A=>{const D=re[A],be=d.id===A,Ee=A==="free"&&(d.id==="free"||d.expired)&&!l,yt=be&&d.active&&!l||Ee,Vn=!l&&be&&D.days&&D.price&&U,Wa=!l&&!be&&(Logic.isUpgrade(o,re,A,i,Rt)||z&&D.price&&D.maxExp>=d.maxExp),gt=A===N&&!!(Vn||Wa&&A!=="free");gt&&(B=!0);const M=Logic.upgradeCost(o,re,A,i,Rt),oe=Wa&&M<D.price,ot=A==="free"?`עד ${d.freeMax} הוצאות — מספיק למנגל ולארוחה משותפת.`:D.blurb,Gn=d.expired?"מהיום":`מסוף התוקף הנוכחי (${Bt(d)})`;let Wn="";if(Vn)Wn=k({item:A,amount:D.price,kind:"renew",line:`חידוש · ${W(D.price)}`,what:`חידוש מסלול ״${D.nm}״`,rec:gt,waHtml:`<a class="${w(gt)}" href="${r(h(`שלום! אשמח לחדש את מסלול ״${D.nm}״ (${W(D.price)}) לקבוצה ״${o.name}״ — ${Gn}.${u}`))}"${y}>
               חידוש ${v} — ${r(W(D.price))}</a>`})+`<p class="hint">החידוש מתווסף ${r(Gn)}${D.topUp?", וההשלמות שנקנו נשמרות":""}.</p>`;else if(Wa&&A!=="free"){const vp=oe?`שלום! אשמח לשדרג את הקבוצה ״${o.name}״ ממסלול ״${d.nm}״ למסלול ״${D.nm}״ — תשלום ההפרש ${W(M)}.${u}`:`שלום! אשמח להפעיל את מסלול ״${D.nm}״ (${W(D.price)}) לקבוצה ״${o.name}״.${u}`;Wn=k({item:A,amount:oe?M:D.price,kind:oe?"upgrade":"plan",line:oe?`שדרוג בתשלום ההפרש · ${W(M)}`:`הפעלה מהיום · ${W(D.price)}`,what:oe?`שדרוג למסלול ״${D.nm}״ (הפרש)`:`מסלול ״${D.nm}״`,rec:gt,waHtml:`<a class="${w(gt)}" href="${r(h(vp))}"${y}>
               ${oe?`שדרוג בתשלום ההפרש — ${r(W(M))}`:`הפעלה ${v} — ${r(W(D.price))}`}</a>`})}else!yt&&!l&&A!=="free"&&(Wn='<p class="plan-note">המסלול הנוכחי של הקבוצה כבר כולל את זה</p>');const Ll=D.price&&p>1?ao(o,D.price):"",Ti=A===s;return`
      <div class="plan-card${yt?" current":""}${gt?" rec":""}${Ti?" picked":""}" data-plan="${A}"${Ti?' data-ref="picked"':""}>
        <div class="plan-top">
          <span class="plan-title"><b class="plan-nm">${r(D.nm)}</b>${Ti?'<span class="plan-badge pick">המסלול שבחרתם</span>':gt?`<span class="plan-badge">${r(K)}</span>`:""}</span>
          <span class="plan-price">${D.price?`${r(W(D.price))} <small>${r(D.per||"")}</small>`:"ללא עלות"}</span>
        </div>
        <p class="plan-blurb">${r(ot)}</p>
        ${Ll?`<p class="plan-per">${r(Ll)}, אם מחלקים את העלות ${Logic.splitsByHead(o)?"לפי הנפשות":"בין המשתתפים"}</p>`:""}
        ${yt?`<p class="plan-cur">✓ המסלול הנוכחי${be&&d.until&&!d.expired?` · בתוקף עד <span class="num">${r(Bt(d))}</span>`:""}</p>`:""}
        ${Wn}
      </div>`},C=!l&&re[d.id]&&re[d.id].topUp,x=Object.keys(fe).filter(A=>!(d.expired&&A==="exp20")),P=A=>`<span>${r(fe[A].nm)}</span><b>${r(W(fe[A].price))}</b>`,I=A=>`${so}: ${fe[A].nm}, ${W(fe[A].price)}`,ie=b==="links"&&x.some(A=>$n(A,fe[A].price)),q=A=>{if(b==="grow")return`<button class="btn block topup" data-pay="${A}" data-amount="${fe[A].price}" data-kind="topup" aria-label="${r(I(A))}">${P(A)}</button>`;const D=b==="links"?$n(A,fe[A].price):"";S[D?"link":"wa"]++;const be=`${fe[A].nm} (${W(fe[A].price)})`;if(D){const yt=`שלום! שילמתי בקישור התשלום של Grow על ${be} לקבוצה ״${o.name}״.${u}
אשמח להפעלה.`;return`<div class="topup-item">
          <a class="btn block topup" href="${r(D)}" target="_blank" rel="noopener" data-paylink="${A}" data-what="${r(fe[A].nm)}" data-amount="${fe[A].price}" aria-label="${r(I(A))}">${P(A)}<small class="topup-how">תשלום מאובטח בקישור</small></a>
          <a class="${ja(!1)} sm pay-wa" data-topup-confirm="${A}" href="${r(h(yt))}"${y} aria-label="${r(`אחרי התשלום על ${be} — אישור להפעלה ${v}`)}">אחרי התשלום על ${r(fe[A].nm)} — אישור ${v}</a>
        </div>`}const Ee=`<a class="btn block topup" data-topup-offer="${A}" href="${r(h(`שלום! אשמח להוסיף ${be} לקבוצה ״${o.name}״${A==="days7"?` — ${d.expired?"מהיום":"מסוף התוקף הנוכחי"}`:""}.${u}`))}"${y}>
          ${P(A)}${ie?`<small class="topup-how">הזמנה ותשלום ${v}</small>`:""}</a>`;return ie?`<div class="topup-item">${Ee}</div>`:Ee},ce=b==="grow"?`<p class="hint pay-hint">${yn}</p>`:ie?`<p class="hint pay-hint">בקישור המאובטח — אשראי, <span class="nowrap" dir="ltr">Bit</span>, <span class="nowrap" dir="ltr">Apple Pay</span>. ההפעלה בהקדם אחרי אישור קצר ${v}.</p>`:"",Z=C?`
      <h3 class="plans-sub">${d.expired?"התוקף נגמר? אפשר להוסיף זמן":"נגמרו ההוצאות או הזמן? השלמה מהירה"}</h3>
      <div class="topup-row${ie?" links":""}">
        ${x.map(A=>q(A)).join("")}
      </div>
      ${ce}
      ${d.expired?`<p class="hint">״${r(fe.exp20.nm)}״ — זמינות רק כשהמסלול בתוקף. אחרי הוספת 7 ימים אפשר להוסיף גם אותן.</p>`:""}`:"",ue=f.tripId===o.id&&f.expensesReady?f.expenses:null,ne=(ue?ws(o,ue):[]).reduce((A,D)=>A+D.price,0),ye=()=>ne>0&&de(o)&&p>1?`
      <div class="share-cost">
        <p><b>אפשר לחלק את עלות המסלול בין כולם</b> — ${r(W(ne))} בסך הכול, ${r(ao(o,ne))}${Logic.splitsByHead(o)?" (החלוקה לפי הנפשות)":""}.</p>
        <button class="${B?"btn block":"btn primary block"}" data-ref="sharecost">חלוקת העלות בין כל המשתתפים</button>
        <p class="hint">נרשמת הוצאה אחת, ששולמה על ידי מנהל הקבוצה ומתחלקת כמו כל הוצאה. היא לא נספרת במכסת ההוצאות.</p>
      </div>`:"",g=we((o.members||[]).find(A=>A.id===o.managerId))||je().phone||"",_=A=>{const D=$e[A],be=`שלום! אשמח לרישיון ״${D.nm}״ (${W(D.price)} ${D.per}) עם הלוגו והשם של העסק שלי.${g?`
הטלפון שלי: ${ct(Logic.normalizePhone(g))}`:""}`,Ee=l&&c.id===A;return`
      <div class="plan-card biz${Ee?" current":""}">
        <div class="plan-top">
          <b class="plan-nm">${r(D.nm)}</b>
          <span class="plan-price">${r(W(D.price))} <small>${r(D.per)}</small></span>
        </div>
        <p class="plan-blurb">${r(D.blurb)}</p>
        ${Ee?`<p class="plan-cur">✓ הרישיון הנוכחי · בתוקף עד <span class="num">${r(Bt(c))}</span></p>`:""}
        ${k({item:A,amount:D.price,kind:"license",lic:!0,what:`רישיון ״${D.nm}״`,line:`${Ee?"חידוש":"הפעלה"} · ${W(D.price)} ${D.per}`,waHtml:`<a class="${w(!1)}" href="${r(h(be))}"${y}>${Ee?"חידוש":"פנייה"} ${v} — ${r(W(D.price))}</a>`})}
      </div>`},$=c.expired,H=un.map(ae).join(""),R=fn.map(_).join(""),G=A=>`<span class="nowrap">${A}</span>`,te=`כרטיס אשראי, ${G("Bit")}, ${G("Apple Pay")} או ${G("Google Pay")}`,ee=ca()==="wa"?"הודעת וואטסאפ קצרה":"הודעה קצרה בדוא״ל",Ae=b==="grow"?`התשלום בעמוד המאובטח של Grow (משולם) — ${te}. פרטי הכרטיס אינם עוברים דרכנו, קבלה נשלחת אליכם אוטומטית, והמסלול מופעל מיד עם אישור התשלום.`:b==="links"&&!S.wa?`התשלום בקישור המאובטח של Grow (משולם), וקבלה נשלחת אליכם אוטומטית. אחרי התשלום שולחים לנו ${ee}, וההפעלה נעשית בהקדם לאחר אישור התשלום.`:b==="links"?`בפריטים עם הכפתור ״תשלום מאובטח״ — התשלום בקישור המאובטח של Grow (משולם), וקבלה נשלחת אליכם אוטומטית; אחרי התשלום שולחים לנו ${ee}. בשאר הפריטים — התשלום מול מנהל השירות בביט או בפייבוקס. ההפעלה נעשית בהקדם לאחר אישור התשלום.`:"התשלום מול מנהל השירות בביט או בפייבוקס, וההפעלה נעשית בהקדם לאחר אישור התשלום.",X=pe(`
      <div class="sheet-head"><h2 class="sheet-title">המסלולים</h2></div>
      ${t?`<div class="banner warn" role="status">${$?`תוקף המסלול הסתיים, והקבוצה הגיעה למכסה החינמית (${c.maxExp} הוצאות) — ולכן אי אפשר להוסיף הוצאות חדשות. הצפייה, ההתחשבנות וסימון ״שולם״ נשארים פתוחים.`:"הקבוצה הגיעה למגבלת ההוצאות של המסלול הנוכחי."} להמשך — בוחרים מסלול${C?" או השלמה":""}:</div>`:""}
      <div class="banner" style="margin:0 0 6px;">${bn(o,ue)}</div>
      ${ye()}
      <h3 class="plans-sub">לקבוצה הזו</h3>
      ${l?`<div class="banner" style="margin:0 0 8px;">הקבוצה מכוסה ברישיון העסקי ״${r(c.nm)}״ עד <span class="num">${r(Bt(c))}</span> — ללא הגבלה. כשהרישיון מסתיים, הקבוצה חוזרת למסלול שלה עצמה (${d.id==="legacy"?"ותיקים — ללא הגבלה":r(d.nm)}).</div>`:""}
      ${H}
      ${Z}
      <h3 class="plans-sub">לעסקים — מפיקים, קבלנים ומארגנים</h3>
      ${R}
      ${hc(o)}
      <p class="hint plans-foot">
        <span class="vat-note">${r($a())}</span>
        ${Ae}
        המשתתפים בקבוצה אינם משלמים, אלא אם בוחרים לחלק ביניהם את עלות המסלול.
        כשתוקף מסלול מסתיים — הקבוצה חוזרת למכסה החינמית, ורק הוספת הוצאות מעבר לה נעצרת.
        ביטול עסקה${b==="none"?"":' בתוך <span class="num">14</span> יום'} — לפי
        <button class="linklike" data-act="legal" data-id="terms">התקנון (סעיף 6)</button> וחוק הגנת הצרכן,
        ${ms('<span class="nowrap"><button class="linklike" data-help-open="contact" data-help-id="cancellation">בטופס ״ביטול עסקה״</button>.</span>')}
      </p>
      ${b==="none"?"":`<p class="hint plans-help">שאלה על תשלום? <a class="linklike" href="${r(h(`שלום! יש לי שאלה על תשלום לקבוצה ״${o.name}״.${u}`))}"${y}>כתבו לנו ${v}</a></p>`}`),Oe=m('[data-ref="sharecost"]',X.el);Oe&&Oe.addEventListener("click",()=>ec(o,X,Oe)),J("[data-confirm-buy]",X.el).forEach(A=>A.addEventListener("click",()=>{const D=(o.purchases||[]).find(be=>be&&be.id===A.dataset.confirmBuy);D&&pc(o,D)})),J("[data-pay]",X.el).forEach(A=>A.addEventListener("click",()=>uo(o,{item:A.dataset.pay,amount:Number(A.dataset.amount),kind:A.dataset.kind}))),J("a[data-paylink]",X.el).forEach(A=>{const D=be=>{be.type==="auxclick"&&be.button!==1||(be.preventDefault(),po(o,{link:A.href,what:A.dataset.what||"",amount:Number(A.dataset.amount)||0,lic:!!A.dataset.lic}))};A.addEventListener("click",D),A.addEventListener("auxclick",D)});const He=s?m('[data-ref="picked"]',X.el):null;if(He){const A=m(".pay-btn, .btn",He);setTimeout(()=>{try{He.scrollIntoView({block:"start",behavior:"smooth"})}catch{}A&&A.focus({preventScroll:!0})},60)}}function no(){const e=oo(),t=cn(),a=gs(),n=Logic.normalizePhone(je().phone||""),s=w=>`<span class="nowrap">${w}</span>`,o=" · ",i=w=>w>=365?"שנה שלמה":Je(w,"יום אחד","ימים"),c=w=>`
      <div class="plan-card pc${w.biz?" biz":""}" data-plan="${w.id}">
        <b class="plan-nm">${r(w.nm)}</b>
        <span class="pc-price">${w.price?`<span class="pc-amt">${r(W(w.price))}</span><small class="pc-per">${r(w.per)}</small>`:'<span class="pc-amt pc-free">ללא עלות</span>'}</span>
        <p class="pc-desc">${w.desc}</p>
        ${w.feats?`<ul class="pc-feats">${w.feats.map(k=>`<li>${he("check",16)}<span>${r(k)}</span></li>`).join("")}</ul>`:""}
        <div class="pc-act">${w.action}</div>
      </div>`,d=w=>{const k=re[w],O=!k.price,N=k.maxExp===1/0?"ללא הגבלת הוצאות":`עד ${Je(k.maxExp,"הוצאה אחת","הוצאות")}`,K=s(r(N))+o+s(r(k.days?i(k.days):"בלי הגבלת זמן")),U=O?"פותחים קבוצה בחינם":"פותחים קבוצה ובוחרים מסלול",z=O?U:`${U} ״${k.nm}״ — ${W(k.price)} ${k.per||""}`;return c({id:w,nm:k.nm,price:k.price,per:k.per||"",desc:K,action:`<button type="button" class="btn block" data-pick="${w}" aria-label="${r(z)}">${U}</button>`})},l=["כל הקבוצות שאתם פותחים","ללא הגבלת הוצאות","הלוגו והשם של העסק בקבוצות"],p=w=>{const k=$e[w],O=`רישיון ״${k.nm}״`,N=`aria-label="${r(`רכישת רישיון ״${k.nm}״ — ${W(k.price)} ${k.per}`)}"`,K=e==="links"?$n(w,k.price):"";let U;if(e==="grow")U=`<button type="button" class="btn block pay-btn" data-pay="${w}" data-amount="${k.price}" data-kind="license" ${N}>רכישת רישיון</button>
        <p class="pay-line">${yn}</p>`;else if(K)U=`<a class="btn block pay-btn" href="${r(K)}" target="_blank" rel="noopener" data-paylink="${w}" data-what="${r(O)}" data-amount="${k.price}" data-lic="1" ${N}>רכישת רישיון</a>
        <p class="pay-line">תשלום מאובטח בקישור — אשראי, <span class="nowrap" dir="ltr">Bit</span>, <span class="nowrap" dir="ltr">Apple Pay</span></p>`;else{const z=`שלום! אשמח לרישיון ״${k.nm}״ (${W(k.price)} ${k.per}) עם הלוגו והשם של העסק שלי.${n?`
הטלפון שלי: ${ct(n)}`:""}`;U=`<a class="${ja(!1)}" href="${r(Sa(z,"שווה בשווה — רישיון עסקי"))}"${a} ${N}>רכישת רישיון ${r(t)}</a>
        <p class="pay-line">הזמנה ותשלום ${r(t)} — ההפעלה אחרי אישור התשלום</p>`}return c({id:w,biz:!0,nm:`רישיון ${k.nm}`,price:k.price,per:k.per,desc:`תוקף: ${r(i(k.days))}`,feats:l,action:U})},u=Object.keys(fe).map(w=>`<span class="pc-chip">${r(fe[w].nm)}${o}${r(W(fe[w].price))}</span>`).join(""),h=De(!1),v=`אשראי, ${s("Bit")}, ${s("Apple Pay")} או ${s("Google Pay")}`,y=e==="grow"?`תשלום מאובטח בעמוד של Grow (משולם) — ${v}. פרטי הכרטיס אינם עוברים דרכנו, הקבלה נשלחת אליכם אוטומטית, והמסלול מופעל מיד עם אישור התשלום.`:e==="links"?`בפריט עם קישור תשלום — תשלום מאובטח בקישור של Grow (משולם), ${v}; פרטי הכרטיס אינם עוברים דרכנו, ואחרי התשלום שולחים לנו הודעה קצרה ${r(t)}. בשאר הפריטים — תשלום מול מפעיל השירות בביט או בפייבוקס. ההפעלה בהקדם לאחר אישור התשלום.`:"תשלום מול מפעיל השירות בביט או בפייבוקס, וההפעלה בהקדם לאחר אישור התשלום.",b=bs([h.email?`בדוא״ל ${_a(h)}`:"",h.phone?`בטלפון ${La(h)}`:"",s('<button type="button" class="linklike" data-help-open="contact" data-help-id="cancellation">בטופס ״ביטול עסקה״</button>.')]),S=[r($a()),y,"מסלול חל על קבוצה אחת — בוחר ומשלם רק מנהל הקבוצה, וכשהתוקף מסתיים היא חוזרת למכסה החינמית (ההוצאות נשמרות). רישיון עסקי חל על כל הקבוצות שלכם.",`ביטול עסקה${e==="none"?"":' בתוך <span class="num">14</span> יום'} — לפי <button type="button" class="linklike" data-act="legal" data-id="terms">התקנון (סעיף 6)</button> וחוק הגנת הצרכן, ${b}`],T=pe(`
      <div class="sheet-head"><h2 class="sheet-title">מסלולים ומחירים</h2></div>
      <div class="pricing">
        <p class="pricing-intro">כל קבוצה נפתחת בחינם — מסלול בוחרים רק כשצריך יותר.</p>
        <section class="pricing-sec" aria-labelledby="pricing-h-group">
          <h3 class="plans-sub" id="pricing-h-group">מסלול לקבוצה</h3>
          <p class="pc-sec-sub">לכל קבוצה בנפרד — בוחר מנהל הקבוצה.</p>
          <div class="pricing-grid">${un.map(d).join("")}</div>
          <div class="pc-topups"><span class="pc-topups-l">השלמות לשבוע ולחודש, מתוך הקבוצה:</span>${u}</div>
        </section>
        <section class="pricing-sec" aria-labelledby="pricing-h-biz">
          <h3 class="plans-sub" id="pricing-h-biz">לעסקים</h3>
          <p class="pc-sec-sub">למפיקים, לקבלנים ולמארגנים — רישיון אחד לכל הקבוצות שלכם.</p>
          <div class="pricing-grid">${fn.map(p).join("")}</div>
        </section>
        <section class="pricing-notes" aria-labelledby="pricing-h-notes">
          <h3 id="pricing-h-notes">חשוב לדעת</h3>
          <ul>${S.map(w=>`<li>${w}</li>`).join("")}</ul>
        </section>
        <p class="hint plans-help">שאלה על המסלולים? <button type="button" class="linklike" data-help-open="article" data-help-id="where-to-buy">במרכז העזרה</button>${e==="none"?"":` · <a class="linklike" href="${r(Sa("שלום! יש לי שאלה על המסלולים והמחירים.","שווה בשווה — שאלה על המסלולים"))}"${a}>כתבו לנו ${r(t)}</a>`}</p>
      </div>`);J("[data-pick]",T.el).forEach(w=>w.addEventListener("click",()=>{const k=w.dataset.pick;T.close(),br(re[k]&&re[k].price>0?{plan:k}:void 0)})),J("[data-pay]",T.el).forEach(w=>w.addEventListener("click",()=>uo(null,{item:w.dataset.pay,amount:Number(w.dataset.amount),kind:"license"}))),J("a[data-paylink]",T.el).forEach(w=>{const k=O=>{O.type==="auxclick"&&O.button!==1||(O.preventDefault(),po(null,{link:w.href,what:w.dataset.what||"",amount:Number(w.dataset.amount)||0,lic:!0}))};w.addEventListener("click",k),w.addEventListener("auxclick",k)})}let xs=!1;async function ec(e,t,a){if(xs)return;xs=!0,a&&(a.disabled=!0);const n=async()=>{let s=f.trips.find(i=>i.id===e.id)||e;if(L.getTripOnce){const i=await L.getTripOnce(e.id);i&&(s=i)}const o=await L.getExpensesOnce(e.id);return{t:s,list:o||[]}};try{let{t:s,list:o}=await n(),i=ws(s,o);const c=i.reduce((v,y)=>v+y.price,0);if(!(c>0)){E("עלות המסלול כבר חולקה ✓"),t&&t.close(),Y();return}const d=s.managerId&&(s.members||[]).some(v=>v.id===s.managerId)?s.managerId:se(s.id);if(!d){E("קודם נכנסים לחשבון שלכם בקבוצה");return}if(!await xe("חלוקת עלות המסלול",`תירשם הוצאה של ${W(c)} ששולמה על ידי ${le(s,d)}, ותתחלק בין כל ${(s.members||[]).length} המשתתפים. להמשיך?`,"חלוקה"))return;({t:s,list:o}=await n());const p=ws(s,o);if(p.map(v=>v.id).sort().join()!==i.map(v=>v.id).sort().join()){E(p.length?"העלות השתנתה בינתיים — פותחים שוב את המסלולים":"עלות המסלול כבר חולקה ✓"),t&&t.close(),Y(),p.length&&dt(s);return}if(i=p,s.base!=="ILS"&&!((s.rates||{}).ILS>0)){const v=Object.assign({},s.rates,{ILS:Ha("ILS",s.base)});await L.updateTrip(s.id,{rates:v}),s.rates=v}const u=i.map(v=>v.id),h={id:Ql(u),appFee:!0,feeFor:u,amount:c,currency:"ILS",category:"other",payerId:d,parts:(s.members||[]).map(v=>v.id),split:{mode:"equal"},note:"מסלול ״שווה בשווה״ — "+i.map(v=>v.what).join(" + "),date:An(),created:Date.now()};await L.saveExpense(s.id,h),await At(s,o.filter(v=>v.id!==h.id).concat([h])),t&&t.close(),E("העלות חולקה בין כל המשתתפים ✓"),Y()}catch(s){console.error(s),E(Te(s,"החלוקה נכשלה — נסו שוב"))}finally{xs=!1,a&&(a.disabled=!1)}}const so="תשלום מאובטח — אשראי, Bit, Apple Pay",yn='<span class="pay-btn-txt">תשלום מאובטח — אשראי, <span class="nowrap" dir="ltr">Bit</span>, <span class="nowrap" dir="ltr">Apple Pay</span></span>',kt="shaveh_pay_pending_v1",io=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;function Ta(){return typeof window!="undefined"&&window.SHAVEH_CONFIG||{}}function gn(){const e=Ta(),t=e.payApi||(e.u?String(e.u).replace(/\/+$/,"")+"/functions/v1":"");return/^https:\/\//.test(t)?t.replace(/\/+$/,""):""}let Es=!1,vn="";const Ls=/^[A-Za-z0-9_-]{1,128}$/;function oo(){if((Ta().pay==="grow"||Es)&&ke&&gn()&&L&&L.secure===!0&&(f.shared||tt))return"grow";const t=_s();return Object.keys(t).some(a=>/^https:\/\//.test(String(t[a])))?"links":"none"}function _s(){const e=Ta().payLinks;return e&&typeof e=="object"&&Object.keys(e).some(t=>/^https:\/\//.test(String(e[t])))?e:Xa}function $n(e,t){const a=_s(),n=fe[e]?fe[e].price:fn.indexOf(e)>=0?$e[e].price:re[e]?re[e].price:null,o=a[e+":"+t]||(Number(t)===n?a[e]:"");return/^https:\/\//.test(String(o||""))?String(o):""}function Ss(){const e=String(Ta().k||""),t={"Content-Type":"application/json"};return/^eyJ/.test(e)&&(t.apikey=e,t.Authorization="Bearer "+e),t}async function js(e,t){const a=await fetch(gn()+"/"+e,Object.assign({headers:Ss()},t));let n=null;try{n=await a.json()}catch{n=null}if(!n)throw{code:"network",status:a.status};return n}const xt={bad_name:"נא להזין שם פרטי ושם משפחה — כפי שיופיע בקבלה.",bad_phone:"נא להזין מספר נייד ישראלי תקין, למשל 050-1234567.",bad_email:"כתובת הדוא״ל אינה תקינה — אפשר גם להשאיר ריק.",bad_biz:"נא להזין את שם העסק.",terms:"כדי להמשיך לתשלום, יש לסמן את אישור התקנון ומדיניות הפרטיות.",trip_not_found:"הקבוצה לא נמצאה בשרת. אם היא חדשה מאוד — נסו שוב בעוד רגע.",not_offered:"המסלול הזה כבר לא מוצע לקבוצה במצבה הנוכחי. סגרו ופתחו מחדש את המסלולים.",license_active:"הקבוצה מכוסה ברישיון עסקי פעיל — אין צורך במסלול נוסף.",too_many:"היו כאן ניסיונות תשלום רבים בשעה האחרונה. נסו שוב מאוחר יותר, או כתבו לנו.",provider_error:"חברת הסליקה לא זמינה כרגע. נסו שוב בעוד דקה.",not_configured:"התשלום המקוון עוד לא הופעל. אפשר לפנות אלינו ולשלם בדרך אחרת.",sandbox_locked:"התשלום המקוון במצב בדיקה ופתוח כרגע רק לבדיקות של מפעיל השירות. אפשר לפנות אלינו ולשלם בדרך אחרת.",payment_open:"בדקות האחרונות כבר נפתח עמוד תשלום למסלול של הקבוצה הזו. כדי שלא ייגבה פעמיים — אפשר להשלים את התשלום שנפתח, או לנסות שוב בעוד כ־10 דקות."},tc=["not_configured","sandbox_locked","too_many","provider_error","trip_not_found"],wn="לא הצלחנו לפתוח את עמוד התשלום. בדקו את החיבור לרשת ונסו שוב.";function ro(e,t){if(t.kind==="license"){const n=$e[t.item];return{what:`רישיון עסקי ״${n.nm}״`,effect:`ללא הגבלה בכל הקבוצות שנפתחות בטלפון שלכם — ל־${n.days} ימים${t.renew?", מסוף התוקף הנוכחי":""}. שם העסק יוצג אחרי אישור קצר.`}}if(fe[t.item])return{what:fe[t.item].nm,effect:t.item==="exp20"?"יתווספו 20 הוצאות למסלול הנוכחי של הקבוצה.":"תוקף המסלול יוארך ב־7 ימים."};const a=re[t.item];return t.kind==="renew"?{what:`חידוש מסלול ״${a.nm}״`,effect:`התוקף יוארך ב־${a.days} ימים, מסוף התוקף הנוכחי${a.topUp?" — וההשלמות שנקנו נשמרות":""}.`}:{what:t.kind==="upgrade"?`שדרוג למסלול ״${a.nm}״`:`מסלול ״${a.nm}״`,effect:`${a.maxExp===1/0?"ללא הגבלת הוצאות":`עד ${a.maxExp} הוצאות`}, ל־${a.days} ימים מהיום${t.kind==="upgrade"?" — בתשלום ההפרש בלבד":""}.`}}function lo(){return`ביטול עסקה — בתוך <span class="num">14</span> יום מיום הרכישה או מיום קבלת פרטי העסקה בכתב, המאוחר מביניהם,
        בניכוי תמורה יחסית לתקופת השימוש ודמי ביטול של עד <span class="num">5%</span> או <span class="num">100 ₪</span>, הנמוך מביניהם.
        לחלק מהאוכלוסיות — <span class="nowrap">עד <span class="num">4</span> חודשים</span>; הפרטים
        <button class="linklike" data-act="legal" data-id="terms">בסעיף 6 בתקנון</button>.
        הודעת ביטול — ${ms('<button type="button" class="linklike" data-help-open="contact" data-help-id="cancellation">בטופס ״ביטול עסקה״</button>',{full:!0})}.`}const co=`
      <label class="pay-consent">
        <input type="checkbox" id="pay-terms" data-ref="terms" aria-describedby="pay-terms-h">
        <span>מאשרים את <button type="button" class="linklike" data-act="legal" data-id="terms">התקנון</button>, כולל תנאי הביטול שבסעיף 6,
          ואת <button type="button" class="linklike" data-act="legal" data-id="privacy">מדיניות הפרטיות</button>.</span>
      </label>
      <p class="hint pay-consent-h" id="pay-terms-h">האישור נדרש לפני המעבר לעמוד התשלום.</p>`;function po(e,t){const a=pe(`
      <div class="sheet-head"><h2 class="sheet-title">לפני התשלום</h2></div>
      <div class="pay-sum">
        <div class="pay-sum-top"><b>${r(t.what)}</b><span class="pay-amt">${r(W(t.amount))}</span></div>
        ${e&&!t.lic?`<p class="pay-for">לקבוצה ״${r(e.name)}״</p>`:""}
      </div>
      ${Xi()}
      ${co}
      <div class="banner warn" role="status" data-ref="payerr" hidden></div>
      <button class="btn primary block" data-ref="go">מעבר לתשלום — ${r(W(t.amount))}</button>
      <p class="hint pay-legal">
        <span class="vat-note">${r($a())}</span>
        עמוד התשלום המאובטח של Grow (משולם) ייפתח בלשונית חדשה: כרטיס אשראי, <span class="nowrap">Bit</span>, <span class="nowrap">Apple Pay</span> או <span class="nowrap">Google Pay</span>.
        פרטי הכרטיס אינם עוברים דרכנו, וקבלה נשלחת אליכם אוטומטית. אחרי התשלום שולחים לנו הודעת וואטסאפ קצרה, וההפעלה נעשית בהקדם לאחר אישור התשלום.
        ${lo()}
      </p>`,null,{compact:!0}),n=a.el,s=m('[data-ref="terms"]',n),o=m('[data-ref="payerr"]',n),i=c=>{o.hidden=!c,o.textContent="",c&&setTimeout(()=>{o.textContent=c},30)};s.addEventListener("change",()=>{s.checked&&(s.removeAttribute("aria-invalid"),i(""))}),m('[data-ref="go"]',n).addEventListener("click",()=>{if(!s.checked){s.setAttribute("aria-invalid","true"),i(xt.terms),s.focus();return}if(!/^https:\/\//.test(t.link)){i(wn);return}window.open(t.link,"_blank","noopener"),a.close(),E("עמוד התשלום נפתח בלשונית חדשה. אחרי התשלום — אישור להפעלה בוואטסאפ")})}function uo(e,t){const a=t.kind==="license";let n=ro(e,t);const s=e&&e.members||[],o=e?s.find(N=>N.id===se(e.id)):null,i=e?s.find(N=>N.id===e.managerId):null,c=je(),d=c.name||o&&o.name||"",l=we(o)||we(i)||Logic.normalizePhone(c.phone||""),p=e&&e.brand&&e.brand.name||"";let u=t.amount,h="";const y=pe(`
      <div class="sheet-head"><h2 class="sheet-title">תשלום מאובטח</h2></div>
      ${Es&&Ta().pay!=="grow"?'<div class="banner warn">מצב בדיקה — הכפתור מוצג רק בלשונית הזו.</div>':""}
      <div class="pay-sum">
        <div class="pay-sum-top"><b data-ref="what">${r(n.what)}</b><span class="pay-amt" data-ref="amt">${r(W(u))}</span></div>
        ${e&&!a?`<p class="pay-for">לקבוצה ״${r(e.name)}״</p>`:""}
        <p class="pay-effect" data-ref="effect">${r(n.effect)}</p>
      </div>
      <div class="field">
        <label for="pay-name">שם מלא — כפי שיופיע בקבלה</label>
        <input class="input" id="pay-name" autocomplete="name" maxlength="60" placeholder="שם פרטי ושם משפחה" value="${r(d)}">
      </div>
      <div class="field">
        <label for="pay-phone">טלפון נייד</label>
        <input class="input ltr" id="pay-phone" type="tel" inputmode="tel" autocomplete="tel" maxlength="20"
          placeholder="050-0000000" value="${r(l?ct(l):"")}">
        ${a?'<p class="hint">הרישיון חל על כל הקבוצות שנפתחות בטלפון הזה — גם על אלה שכבר פתוחות.</p>':""}
      </div>
      ${a?`
      <div class="field">
        <label for="pay-biz">שם העסק — יוצג בהזמנות ובהודעות</label>
        <input class="input" id="pay-biz" maxlength="40" placeholder="למשל: יוני צור הפקות" value="${r(p)}">
        <p class="hint">השם יוצג בקבוצות אחרי אישור קצר של מפעיל השירות (כדי שאיש לא יוכל להתחזות לעסק אחר). את הלוגו מוסיפים אחר כך, בפנייה קצרה ${cn()}.</p>
      </div>`:""}
      <div class="field">
        <label for="pay-email">דוא״ל לקבלה <span class="opt">(רשות)</span></label>
        <input class="input ltr" id="pay-email" type="email" inputmode="email" autocomplete="email" maxlength="120" placeholder="name@example.com">
      </div>
      ${Xi()}
      ${co}
      <div class="banner warn" role="status" data-ref="payerr" hidden></div>
      <button class="btn primary block" data-ref="save">מעבר לתשלום מאובטח — <span data-ref="btnamt">${r(W(u))}</span></button>
      <p class="hint pay-legal">
        <span class="vat-note">${r($a())}</span>
        תועברו לעמוד התשלום המאובטח של Grow (משולם): כרטיס אשראי, <span class="nowrap">Bit</span>, <span class="nowrap">Apple Pay</span> או <span class="nowrap">Google Pay</span>.
        פרטי הכרטיס אינם עוברים דרכנו, וקבלה נשלחת אליכם אוטומטית.
        ${lo()}
      </p>`).el,b=m('[data-ref="save"]',y),S=m('[data-ref="payerr"]',y),T=m('[data-ref="terms"]',y);T.addEventListener("change",()=>{T.checked&&(T.removeAttribute("aria-invalid"),S.textContent===xt.terms&&w(""))});const w=(N,K)=>{S.hidden=!N,S.textContent="",N&&setTimeout(()=>{if(S.textContent=N,!K)return;const U=`שלום! ניסיתי לשלם באתר על ${n.what} (${W(u)})`+(e&&!a?` לקבוצה ״${e.name}״.
מזהה הקבוצה: ${e.id}`:".")+`
התשלום המקוון לא נפתח — אשמח לשלם בדרך אחרת.`,z=document.createElement("a"),B=ca()==="wa";z.className=ja(!1)+" sm pay-err-wa",z.href=Sa(U,"שווה בשווה — תשלום"),z.dataset.seller=B?"wa":"mail",B&&(z.target="_blank",z.rel="noopener"),z.textContent=B?"תשלום דרך הוואטסאפ":"פנייה אלינו בדוא״ל",S.appendChild(z)},30)},k=()=>T.checked?!1:(T.setAttribute("aria-invalid","true"),w(xt.terms),T.focus(),!0);let O=!1;b.addEventListener("click",async()=>{if(O)return;if(h){k()||location.assign(h);return}const N=m("#pay-name",y).value.trim().replace(/\s+/g," "),K=m("#pay-phone",y).value.trim(),U=m("#pay-email",y).value.trim(),z=a?m("#pay-biz",y).value.trim():"";let B=Logic.normalizePhone(K);if(/^5\d{8}$/.test(B)&&(B="0"+B),N.split(" ").length<2){w(xt.bad_name),m("#pay-name",y).focus();return}if(!/^05\d{8}$/.test(B)){w(xt.bad_phone),m("#pay-phone",y).focus();return}if(U&&!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(U)){w(xt.bad_email),m("#pay-email",y).focus();return}if(a&&z.length<2){w(xt.bad_biz),m("#pay-biz",y).focus();return}if(k())return;w(""),O=!0,b.disabled=!0;const ae=b.innerHTML;b.textContent="פותחים את עמוד התשלום…";try{const C=!a&&e&&L&&L.joinKeyFor&&L.joinKeyFor(e.id)||"",x=await js("create-payment",{method:"POST",body:JSON.stringify({tripId:a?e?e.id:"":e.id,item:t.item,name:N,phone:B,email:U,bizName:z,terms:{v:dn,at:Date.now()},...C?{joinKey:C}:{},...vn?{testKey:vn}:{}})});if(!x.ok||!x.url){w(xt[x.code]||wn,tc.indexOf(x.code)>=0);return}if(Ca(c.name?"":N,c.phone?"":B),F.set(kt,JSON.stringify({id:x.id,tripId:e?e.id:"",item:t.item,at:Date.now()})),!(/^https:\/\//.test(x.url)||tt)){w(wn);return}if(Number(x.amount)!==Number(u)){u=Number(x.amount),h=x.url;const P=ro(e,Object.assign({},t,x.kind?{kind:x.kind}:{}));n=P,m('[data-ref="what"]',y).textContent=P.what,m('[data-ref="effect"]',y).textContent=P.effect,m('[data-ref="amt"]',y).textContent=W(u),w(`הסכום עודכן ל־${W(u)} לפי המצב הנוכחי של הקבוצה. להמשך — לוחצים שוב.`),b.innerHTML=ae,m('[data-ref="btnamt"]',y).textContent=W(u);return}b.textContent="מעבירים לעמוד התשלום…",location.assign(x.url);return}catch(C){console.error("create-payment failed",C),w(wn)}finally{O=!1,/מעבירים/.test(b.textContent)||(b.disabled=!1,h||(b.innerHTML=ae))}})}let pt=null;function ac(e,t){const a=t&&t.paytest!=null?String(t.paytest):null,n=e.get("paytest"),s=a!=null?a:n==="0"?"0":null;let o="";try{s==="0"?sessionStorage.removeItem("shaveh_paytest"):s&&Ls.test(s)&&sessionStorage.setItem("shaveh_paytest",s),o=sessionStorage.getItem("shaveh_paytest")||""}catch{o=s&&s!=="0"&&Ls.test(s)?s:""}a!=null&&nc(),vn=Ls.test(o)?o:"",Es=!!vn;const i=String(e.get("paid")||"").toLowerCase();if(io.test(i)&&(pt={id:i,cancel:e.get("cancel")==="1",shown:!1}),!(!pt&&n==null))try{const c=new URL(location.href);["paytest"].concat(pt?["paid","cancel","response"].concat(Array.from({length:9},(d,l)=>"cField"+(l+1))):[]).forEach(d=>c.searchParams.delete(d)),history.replaceState(null,"",c.pathname+(c.searchParams.toString()?"?"+c.searchParams.toString():"")+c.hash)}catch{}}function nc(){const e=(location.hash||"").replace(/^#/,"").split("&").filter(t=>t&&t.split("=")[0]!=="paytest");try{history.replaceState(null,"",location.pathname+location.search+(e.length?"#"+e.join("&"):""))}catch{}}function sc(){if(f.ready){if(!pt){oc();return}pt.shown||(pt.shown=!0,ho(pt.id,pt.cancel))}}const ic=2*864e5;let fo=!1;async function oc(){if(fo)return;fo=!0;let e=null;try{e=JSON.parse(F.get(kt)||"null")}catch{e=null}if(!e||!io.test(String(e.id||"")))return;const t=Date.now()-Number(e.at||0);if(!(t>=0&&t<ic)){F.set(kt,"");return}if(!gn())return;let a=null;try{a=await js("payment-status?id="+encodeURIComponent(e.id),{method:"GET",headers:Ss()})}catch(n){console.error("pending payment check failed",n);return}a&&a.ok&&(a.status==="paid"||a.status==="review")?ho(e.id,!1):a&&!a.ok&&(a.code==="not_found"||a.code==="bad_id")&&F.set(kt,"")}function ho(e,t){let a=!1,n=null,s=0,o=null;const i=pe(`
      <div class="sheet-head"><h2 class="sheet-title">התשלום</h2></div>
      <div class="pay-result" data-ref="body" role="status" aria-live="polite"></div>`,()=>{a=!0,clearTimeout(n)}),c=m('[data-ref="body"]',i.el),d=30,l=y=>`<a class="${ca()==="wa"?"btn wa block":"btn block"} pay-help" href="${r(Sa(`שלום! ${y}
מספר התשלום: ${e}`,"שווה בשווה — תשלום "+e.slice(0,8)))}"${gs()}>כתבו לנו ${cn()}</a>`,p=y=>y&&y.tripId?f.trips.find(b=>b.id===y.tripId):null,u=(y,b)=>{const S=p(b),T=b&&b.itemName?b.itemName:"",w=y==="paid"?lc(b,S):null;let k="";if(y==="checking")k=`<div class="pay-icon wait" aria-hidden="true"></div>
          <h3 class="pay-title">מאשרים את התשלום…</h3>
          <p class="pay-text">בודקים מול חברת הסליקה — זה לוקח כמה שניות. אין צורך לרענן את הדף.</p>`;else if(y==="paid"){let O="";if(b.license&&b.license.until)O=`${r(T)} פעיל עד <span class="num">${r(qe(b.license.until,!0))}</span> — ללא הגבלה, בכל הקבוצות שנפתחות בטלפון שלכם.`+(b.license.brandChange?" שם העסק החדש יחליף את השם הקיים אחרי אישור קצר של מפעיל השירות — עד אז יוצג השם הנוכחי.":b.license.brandPending?" שם העסק יוצג בקבוצות אחרי אישור קצר של מפעיל השירות — נעדכן אתכם.":"");else if(b.trip){const N=S?` לקבוצה ״${r(S.name)}״`:"";b.item==="exp20"?O=`נוספו 20 הוצאות${N}.`:b.item==="days7"?O=`התוקף הוארך${N} עד <span class="num">${r(qe(b.trip.planUntil))}</span>.`:O=`${r(T)} הופעל${N} — בתוקף עד <span class="num">${r(qe(b.trip.planUntil,b.item==="annual"))}</span>.`}else O=`${r(T)} הופעל.`;k=`<div class="pay-icon ok" aria-hidden="true">✓</div>
          <h3 class="pay-title">התשלום התקבל — תודה!</h3>
          <p class="pay-text">${O}</p>
          <p class="pay-paid">שולמו <span class="num">${r(W(b.amount))}</span></p>
          ${/^https:\/\/[^\s"'<>]+$/.test(String(b.invoiceUrl||""))?`<a class="btn block" href="${r(b.invoiceUrl)}" target="_blank" rel="noopener">צפייה בקבלה</a>`:'<p class="hint pay-center">הקבלה נשלחת אליכם אוטומטית מ־Grow.</p>'}
          ${bo(w,{pending:!w.saved,phone:S?go(S):je().phone,license:!!$e[b.item]})}
          <p class="hint pay-center pay-cancel">ביטול עסקה בתוך <span class="num">14</span> יום (סעיף 6 בתקנון) —
            ${ms('בטופס הביטול באפליקציה: <button type="button" class="linklike" data-help-open="contact" data-help-id="cancellation">ביטול עסקה</button>',{full:!0})}.
            מפעיל השירות: ${ln({noPhone:!0,full:!0})}.</p>
          <button class="btn primary block" data-ref="done">${S?"מעבר לקבוצה":"סיום"}</button>`}else y==="cancelled"?k=`<div class="pay-icon off" aria-hidden="true">✕</div>
          <h3 class="pay-title">התשלום בוטל</h3>
          <p class="pay-text">לא בוצע חיוב. אפשר לחזור למסלולים ולנסות שוב בכל עת.</p>
          ${S&&de(S)?'<button class="btn primary block" data-ref="plans">חזרה למסלולים</button>':""}
          <button class="btn block" data-ref="done">סגירה</button>`:y==="review"?k=`<div class="pay-icon warn" aria-hidden="true">!</div>
          <h3 class="pay-title">התשלום בבדיקה</h3>
          <p class="pay-text">משהו בתשלום דורש בדיקה ידנית. נטפל בזה בהקדם ונעדכן אתכם — אין צורך לשלם שוב.</p>
          ${l("התשלום שלי מסומן ״בבדיקה״.")}
          <button class="btn block" data-ref="done">סגירה</button>`:y==="pending"?k=`<div class="pay-icon still" aria-hidden="true"><svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg></div>
          <h3 class="pay-title">התשלום עדיין לא אושר</h3>
          <p class="pay-text">אם התשלום הושלם — המסלול יופעל אוטומטית ברגע שהאישור יגיע מחברת הסליקה, ואין צורך לשלם שוב. אם הוא לא הופעל בתוך שעה — כתבו לנו.</p>
          <button class="btn primary block" data-ref="again">בדיקה נוספת</button>
          ${l("שילמתי, אבל המסלול עוד לא הופעל.")}`:y==="notfound"?k=`<div class="pay-icon warn" aria-hidden="true">?</div>
          <h3 class="pay-title">לא מצאנו את התשלום הזה</h3>
          <p class="pay-text">ייתכן שהקישור ישן או שהועתק בחלקו. אם חויבתם — כתבו לנו, ונבדוק לפי מספר התשלום.</p>
          ${l("חויבתי, אבל התשלום לא נמצא באתר.")}
          <button class="btn block" data-ref="done">סגירה</button>`:k=`<div class="pay-icon warn" aria-hidden="true">!</div>
          <h3 class="pay-title">לא הצלחנו לבדוק את התשלום</h3>
          <p class="pay-text">ייתכן שאין חיבור לרשת. אם שילמתם — המסלול יופעל אוטומטית, ואין צורך לשלם שוב.</p>
          <button class="btn primary block" data-ref="again">ניסיון נוסף</button>
          ${l("לא הצלחתי לוודא את התשלום.")}`;c.innerHTML="",setTimeout(()=>{if(a)return;c.innerHTML=k,c.dataset.state=y,w&&yo(c,w);const O=m('[data-ref="done"]',c);O&&O.addEventListener("click",()=>{i.close(),S&&y==="paid"&&f.tripId!==S.id&&Qe(S.id)});const N=m('[data-ref="plans"]',c);N&&N.addEventListener("click",()=>{i.close(),f.tripId!==S.id&&Qe(S.id),dt(S)});const K=m('[data-ref="again"]',c);K&&K.addEventListener("click",()=>{s=0,u("checking",o),v()})},30)},h=y=>{const b=p(y);b&&y.trip&&(Object.assign(b,{plan:y.trip.plan,planUntil:y.trip.planUntil,extraExp:y.trip.extraExp}),y.trip.licPlan&&Object.assign(b,{licPlan:y.trip.licPlan,licUntil:y.trip.licUntil})),f.tripsWatch&&f.tripsWatch.refresh&&f.tripsWatch.refresh(),y.license&&(Ye=null),F.set(kt,""),Y()},v=async()=>{if(a)return;s++;let y=null;try{y=await js("payment-status?id="+encodeURIComponent(e),{method:"GET",headers:Ss()})}catch(b){console.error("payment-status failed",b)}if(!a){if(y&&y.ok&&(o=y),y&&y.ok&&y.status==="paid"){h(y),u("paid",y),tr();return}if(y&&y.ok&&y.status==="review"){F.set(kt,""),u("review",y);return}if(t){F.set(kt,""),u("cancelled",y&&y.ok?y:null);return}if(y&&!y.ok&&(y.code==="not_found"||y.code==="bad_id")){F.set(kt,""),u("notfound",null);return}if(s>=d){u(y?"pending":"error",o);return}n=setTimeout(v,s<5?1500:2500)}};if(!gn()){u("error",null);return}u("checking",null),v()}let kn=null;function mo(e){kn=e==="licensed"||e==="exempt"?e:null}function xn(){const e=De(!0);return{name:e.name,bizId:e.bizId,phone:e.phoneRaw,email:e.email,address:e.address}}function Ts(e){if($e[e])return{nm:$e[e].nm,days:$e[e].days,maxExp:null};if(fe[e])return{nm:fe[e].nm,days:e==="days7"?7:0,maxExp:null};const t=re[e];return t?{nm:t.nm,maxExp:t.maxExp,days:t.days||0}:{}}const En=e=>!!(e&&typeof e.text=="string"&&e.text);function rc(e,t,a){const n=En(a)?a:En(t.confirm)?t.confirm:null;if(n)return{text:n.text,saved:!0,at:Logic.timeMs(n.at),ref:t.id,incomplete:n.incomplete===!0};const s=Logic.purchaseItemOf(t.what),o=(e.purchases||[]).reduce((d,l)=>l&&Logic.timeMs(l.at)>=Logic.timeMs(d&&d.at)?l:d,null),i=s&&!$e[s]&&o&&o.id===t.id?Logic.timeMs(e.planUntil):0;return{text:Logic.purchaseConfirmation({ref:t.id,at:Logic.timeMs(t.at),what:t.what,price:t.price,item:s,product:Ts(s),until:i,group:e.name,biz:xn(),vatMode:kn,appUrl:ea,src:t.src==="grow"?"grow":"manual",sandbox:t.env==="sandbox"}).text,saved:!1,at:0,ref:t.id}}function lc(e,t){if(En(e.confirm))return{text:e.confirm.text,saved:!0,at:Logic.timeMs(e.confirm.at),ref:"",incomplete:e.confirm.incomplete===!0};const a=!!$e[e.item],n=a&&e.license&&e.license.renewed?"renew":e.kind;return{text:Logic.purchaseConfirmation({at:Date.now(),price:e.amount,item:e.item,kind:n,product:Ts(e.item),until:a?Logic.timeMs(e.license&&e.license.until):Logic.timeMs(e.trip&&e.trip.planUntil),group:!a&&t?t.name:"",biz:xn(),vatMode:kn,appUrl:ea,src:"grow"}).text,saved:!1,at:0,ref:""}}function cc(e,t){const a=Logic.normalizePhone(t||"");return/^05\d{8}$/.test(a)?Ht(a,e):Nt(e)}let dc=0;function bo(e,t){const a=t||{},n="cf-h"+ ++dc;let s=e.saved?`האישור נשמר${e.at?` ב־<span class="num">${r(qe(e.at,!0))}</span>`:""} כפי שנמסר, ולא ישתנה.`:a.loadFailed?"לא הצלחנו לטעון כרגע את הנוסח השמור — זה עותק שנבנה מפרטי הרכישה ומפרטי העסק העדכניים.":a.pending&&a.license?"עותק ראשוני — שמרו עותק עכשיו (שמירה כקובץ או שליחה לעצמי).":a.pending?"עותק ראשוני — האישור הסופי יישמר גם במסלולים ← ״הרכישות שלי״.":"נבנה מפרטי הרכישה ומפרטי העסק העדכניים.";return a.license&&(s+=" עותק נוסף של אישור על רישיון אפשר לקבל בפנייה אלינו בטלפון או בוואטסאפ."),e.incomplete&&(s+=" בעותק הזה עדיין חסרים דוא״ל וכתובת של העסק — פרטי ההתקשרות המלאים תמיד בתקנון (סעיף 1)."),`
      <section class="confirm-card${t&&t.full?" full":""}" aria-labelledby="${n}" data-ref="confirm">
        <h3 class="confirm-title" id="${n}">אישור העסקה</h3>
        <p class="confirm-note">מסמך עם פרטי העסקה, זכות הביטול ודרכי הביטול. כדאי לשמור עותק. ${s}</p>
        <pre class="confirm-text" tabindex="0" aria-label="נוסח אישור העסקה">${r(e.text)}</pre>
        <div class="confirm-actions">
          <button type="button" class="btn block" data-ref="cf-save">${Cn()?"שמירה כקובץ":"העתקת האישור"}</button>
          <a class="btn wa block" data-ref="cf-wa" href="${r(cc(e.text,t&&t.phone))}" target="_blank" rel="noopener">שליחה לעצמי בוואטסאפ</a>
        </div>
      </section>`}function yo(e,t){const a=m('[data-ref="cf-save"]',e);a&&a.addEventListener("click",async()=>{if(!Cn()){Un(t.text,"האישור הועתק ✓");return}const n=String(t.ref||"").replace(/[^A-Za-z0-9_-]/g,"").slice(0,40)||$s(Date.now());try{await Qs("shaveh-confirmation-"+n+".txt","\uFEFF"+t.text.replace(/\n/g,`\r
`)+`\r
`),E("האישור נשמר כקובץ ✓")}catch(s){console.error(s),Un(t.text,"השמירה לא הצליחה — האישור הועתק ✓")}})}const go=e=>we(e&&(e.members||[]).find(t=>t.id===se(e.id)))||je().phone||"";async function pc(e,t){const a=!!(t.confirm&&!En(t.confirm)&&Logic.timeMs(t.confirm.at)>0),n=a&&!!(L&&L.purchaseConfirm),s=pe(`
      <div class="sheet-head"><h2 class="sheet-title">אישור העסקה</h2></div>
      <p class="hint confirm-for">${r(t.what)} · <span class="num">${r(W(t.price))}</span> · <span class="num">${r(qe(t.at,!0))}</span></p>
      <div data-ref="cf-body">${n?'<p class="hint confirm-loading" role="status">טוענים את האישור השמור…</p>':""}</div>`),o=m('[data-ref="cf-body"]',s.el);let i=null;if(n){try{const d=await L.purchaseConfirm(e.id,t.id);i=d&&d.confirm}catch(d){console.error("purchase confirmation load failed",d)}if(!s.el.isConnected)return s}const c=rc(e,t,i);return o.innerHTML=bo(c,{phone:go(e),full:!0,loadFailed:a&&!c.saved}),yo(s.el,c),s}const uc=[["","לא צוין — ניסוח כללי"],["link","קישור תשלום של Grow"],["bit","ביט או פייבוקס"],["transfer","העברה בנקאית"]];function fc(e,t){const a=(e.members||[]).find(y=>y.id===e.managerId),n=we(a),s=/^05\d{8}$/.test(n),o=Logic.confirmMissing(xn()),i=Logic.purchaseItemOf(t.what);let c=null;const d=y=>{const b=Logic.purchaseConfirmation({ref:t.id,at:Logic.timeMs(t.at),what:t.what,price:t.price,item:i,product:Ts(i),until:i&&!$e[i]?Logic.timeMs(e.planUntil):0,group:e.name,biz:xn(),vatMode:kn,appUrl:ea,src:"manual",payVia:y});return{v:b.v,text:b.text}},l=pe(`
      <div class="sheet-head"><h2 class="sheet-title">שליחת אישור לקונה</h2></div>
      <p class="hint confirm-for">${r(t.what)} · <span class="num">${r(W(t.price))}</span> · ${r(e.name)}</p>
      <p class="confirm-note">חוק הגנת הצרכן מחייב למסור לקונה, לא יאוחר מההפעלה, מסמך בכתב עם פרטי העסקה ודרכי הביטול.
        הנוסח נפתח בוואטסאפ אל מנהל הקבוצה${a?` — ${r(a.name)}`:""}${s?` · <span class="num" dir="ltr">${r(ct(n))}</span>`:""}.</p>
      ${o.length?`<div class="banner warn" role="status" data-ref="cf-missing">חסרים באישור ${o.length>1?"דוא״ל וכתובת לדואר רשום":o[0]==="email"?"דוא״ל":"כתובת לדואר רשום"} של העסק —
        דרכי ביטול שהחוק מחייב. כדאי להשלים אותם באזור הניהול המקצועי (״הגדרות ← פרטי העסק״) לפני השליחה.</div>`:""}
      ${s?"":'<div class="banner warn" role="status">לא רשום טלפון נייד תקין למנהל הקבוצה. אפשר להעתיק את הנוסח ולשלוח בדרך אחרת.</div>'}
      <div class="field">
        <label for="cf-payvia">איך שולם?</label>
        <select class="input" id="cf-payvia" data-ref="cf-payvia">
          ${uc.map(([y,b])=>`<option value="${y}">${r(b)}</option>`).join("")}
        </select>
      </div>
      <pre class="confirm-text full" tabindex="0" aria-label="נוסח אישור העסקה" data-ref="cf-text"></pre>
      <div class="confirm-actions">
        <button type="button" class="btn block" data-ref="cf-copy">העתקת הנוסח</button>
        ${s?'<a class="btn wa block" data-ref="cf-send" href="#" target="_blank" rel="noopener">שליחה בוואטסאפ למנהל הקבוצה</a>':'<button type="button" class="btn block" disabled>אין טלפון לשליחה</button>'}
      </div>`),p=m('[data-ref="cf-text"]',l.el),u=m('[data-ref="cf-send"]',l.el),h=m('[data-ref="cf-payvia"]',l.el),v=()=>{c=d(h.value),p.textContent=c.text,u&&(u.href=Ht(n,c.text))};return h.addEventListener("change",v),v(),m('[data-ref="cf-copy"]',l.el).addEventListener("click",()=>Un(c.text,"הנוסח הועתק ✓")),u&&u.addEventListener("click",async()=>{if(!L.purchaseConfirmSent){E("האישור נפתח בוואטסאפ ✓");return}try{await L.purchaseConfirmSent(e.id,t.id,c),E("האישור נשלח לקונה ונרשם ✓")}catch(y){console.error("confirm record failed",y),E("האישור נפתח בוואטסאפ, אבל הרישום בשרת נכשל")}}),l}function hc(e){const t=(e.purchases||[]).filter(a=>a&&a.id&&a.price>0).slice().sort((a,n)=>Logic.timeMs(n.at)-Logic.timeMs(a.at));return!t.length||!de(e)?"":`
      <h3 class="plans-sub" id="my-buys-h">הרכישות שלי</h3>
      <ul class="buys-list" aria-labelledby="my-buys-h">
        ${t.map(a=>`
          <li class="buy-row">
            <span class="buy-mid">
              <b>${r(a.what)}</b>
              <small><span class="num">${r(qe(a.at,!0))}</span> · <span class="num">${r(W(a.price))}</span>${a.env==="sandbox"?" · רכישת ניסיון":""}</small>
            </span>
            <button type="button" class="btn sm" data-confirm-buy="${r(a.id)}" aria-label="${r(`אישור העסקה: ${a.what}, ${W(a.price)}`)}">אישור העסקה</button>
          </li>`).join("")}
      </ul>`}let As="";function mc(e){const t=e.get("legal");if(t!=null){Object.prototype.hasOwnProperty.call(eo,t)&&(As=t);try{const a=new URL(location.href);a.searchParams.delete("legal"),history.replaceState(null,"",a.pathname+(a.searchParams.toString()?"?"+a.searchParams.toString():"")+a.hash)}catch{}}}function bc(){const e=As;!e||!f.ready||pt||(As="",setTimeout(()=>pn(e),120))}const Cs="shaveh_brand_v1";let Ye=null,Ln=!1,Ft=!1,tt=!1,Os=null;async function vo(e){if(!L||!L.listLicenses)return[];if(Ye&&!e)return Ye;try{Ye=await L.listLicenses()||[],Ft=!1}catch(t){if(console.error("licenses load failed",t),Ft=!0,!Ye)throw t}return Ye}function $o(){Ln||(Ln=!0,vo(!0).catch(()=>{}).then(()=>{Ln=!1,Y()}))}const Ms=e=>!!(e&&Number(e.until)>Date.now());async function wo(e){return!e||!L||!L.licenseForPhone?null:L.licenseForPhone(e)}function Et(e){return!e||!e.brand||!e.brand.name?null:da(e).isLicense?e.brand:null}function Ps(){if(tt)return Os;try{return JSON.parse(F.get(Cs)||"null")}catch{return null}}function ko(){const e=Ps();return e&&e.name&&Number(e.until)>Date.now()?e:null}function xo(e){const t={id:e.id,name:e.brand.name,logo:e.brand.logo||"",until:e.until};if(tt){Os=t;return}F.set(Cs,JSON.stringify(t))}function yc(){if(tt){Os=null;return}F.set(Cs,"")}function Eo(e){e&&Ms(e)&&e.brand&&e.brand.name?xo(e):yc()}const Lo=e=>ea+"?brand="+encodeURIComponent(e.id);function _n(e,t){const a=Ut(e.logo);return a?`<img class="${t||"brand-logo"}" src="${r(a)}" alt="" aria-hidden="true">`:`<span class="${t||"brand-logo"} brand-initial" aria-hidden="true">${r(String(e.name||"?").trim().charAt(0))}</span>`}async function gc(e,t){const a=Date.now();let n=0;for(const s of f.trips){const o=(s.members||[]).find(l=>l.id===s.managerId),i=o?we(o):"";if(!(s.licenseId===e.id||i&&Logic.phonesEqual(i,e.phone)))continue;const d=Logic.licensePatch(s,i,t,a,$e);if(d)try{await L.updateTrip(s.id,d),Object.assign(s,d),n++}catch(l){console.error("apply license failed",l)}}return n}function vc(){const e='<button class="linklike" data-act="licenses-retry">ניסיון נוסף</button>';if(!Ye)return Ft&&!Ln?`<div class="banner warn" role="status">לא הצלחנו לטעון את הרישיונות כרגע. ${e}</div>`:(Ft||$o(),'<p class="hint">טוענים רישיונות…</p>');const t=Ft?`<div class="banner warn" role="status">הטעינה האחרונה של הרישיונות נכשלה — ייתכן שהרשימה אינה מעודכנת. ${e}</div>`:"";return Ye.length?t+`<div class="acct-list">${Ye.slice().sort((a,n)=>(n.until||0)-(a.until||0)).map(a=>{const n=a.brand&&a.brand.name||"ללא שם",s=$e[a.plan]||{},o=Ms(a)?"בתוקף עד "+qe(a.until,(s.days||0)>=365):"לא בתוקף",i=ct(a.phone);return`
      <button class="acct-row tap" data-act="license-open" data-id="${r(a.id)}" aria-label="${r(`ניהול הרישיון של ${n} — ${s.nm||""} · ${o} · טלפון ${i}`)}">
        ${_n(a.brand||{},"brand-logo sm")}
        <span class="acct-mid">
          <b>${r(n)}</b>
          <small>${r(s.nm||"")} · ${r(o)} · <span class="num">${r(i)}</span></small>
        </span>
      </button>`}).join("")}</div>`:t+'<p class="hint">עדיין אין רישיונות עסקיים.</p>'}function _o(e){const t=!e,a=e?Q(e):{id:Ve("lic"),phone:"",plan:"pro",until:0,brand:{name:"",logo:""},created:Date.now()};a.brand=a.brand||{name:"",logo:""},$e[a.plan]||(a.plan="pro");let n=a.plan;const s=!t&&Ms(a),o=Number(a.until)||0,i=$e[a.plan],c=`שלום! הרישיון ״${i.nm}״ של ״${a.brand.name}״ פעיל עד ${qe(a.until,i.days>=365)}.`+(ke?`
האפליקציה עם הלוגו שלכם: ${Lo(a)}`:"")+`
כל קבוצה שתפתחו — ללא הגבלה ועם המיתוג שלכם.`,d=pe(`
      <div class="sheet-head"><h2 class="sheet-title">${t?"רישיון עסקי חדש":"רישיון — "+r(a.brand.name)}</h2></div>
      <div class="field">
        <label for="lic-name">שם העסק</label>
        <input class="input" id="lic-name" maxlength="40" placeholder="למשל: יוני צור הפקות" value="${r(a.brand.name)}">
        ${L&&L.kind==="rest"&&L.secure?'<p class="hint">בשרת המשותף השם והלוגו מוצגים בקבוצות רק אחרי ״אישור מיתוג״ באזור הניהול המקצועי — גם אחרי כל שינוי בהם.</p>':""}
      </div>
      <div class="field">
        <label for="lic-phone">הטלפון של המנהל</label>
        <input class="input ltr" id="lic-phone" type="tel" inputmode="tel" maxlength="20"
          placeholder="050-0000000" value="${r(a.phone?ct(a.phone):"")}">
        <p class="hint">הרישיון חל על כל הקבוצות שהמנהל הזה פותח — וגם על אלה שכבר פתוחות. המסלול של כל קבוצה נשמר, וחוזר לתוקף כשהרישיון מסתיים.</p>
      </div>
      <div class="field">
        <label>לוגו</label>
        <div class="lic-logo" data-ref="logobox">${Ut(a.brand.logo)?`<img src="${r(Ut(a.brand.logo))}" alt="הלוגו של העסק">`:'<span class="hint">עדיין אין לוגו — תוצג האות הראשונה של שם העסק</span>'}</div>
        <input type="file" accept="image/*" data-ref="logoinput" hidden>
        <button type="button" class="btn sm block" data-ref="logobtn" style="margin-top:8px;">בחירת תמונת לוגו</button>
      </div>
      <div class="field">
        <label id="lic-plan-lbl">מסלול</label>
        <div class="chip-row" role="group" aria-labelledby="lic-plan-lbl">
          ${fn.map(w=>`<button type="button" class="chip" data-licplan="${w}" aria-pressed="${n===w}">${r($e[w].nm)} · ${r(W($e[w].price))}</button>`).join("")}
        </div>
        <p class="hint">${t?"התוקף מתחיל מהיום.":s?`בתוקף עד ${r(qe(o,i.days>=365))}. ״שמירת הפרטים״ אינה משנה את התוקף; ״חידוש לתקופה נוספת״ מוסיף תקופה מהתאריך הזה.`:"הרישיון אינו בתוקף כרגע. ״חידוש לתקופה נוספת״ מפעיל אותו מחדש מהיום."}</p>
      </div>
      ${t?'<button class="btn primary block" data-ref="activate">הפעלת הרישיון</button>':`<button class="btn primary block" data-ref="details">שמירת הפרטים</button>
           <button class="btn block" data-ref="renew" style="margin-top:10px;">חידוש לתקופה נוספת</button>`}
      ${s?(ke?`
      <div class="field" style="margin-top:16px;">
        <label for="lic-link">קישור המיתוג של העסק</label>
        <input class="input ltr" id="lic-link" readonly value="${r(Lo(a))}">
        <p class="hint">מי שנכנס דרך הקישור רואה את האפליקציה עם הלוגו והשם של העסק.</p>
      </div>`:`
      <p class="hint" style="margin-top:16px;">קישור המיתוג (מסך הבית עם הלוגו של העסק) פועל בגרסת הווב בלבד — <span class="num">${r(Pi)}</span> — שם נשמרים הרישיונות של העסקים. כאן הרישיון חל על הקבוצות שבגרסה הזו.</p>`)+(a.phone?`<a class="btn wa block" href="${r(Ht(a.phone,c))}" target="_blank" rel="noopener">שליחת ${ke?"הקישור":"ההודעה"} לעסק בוואטסאפ</a>`:"")+'<button class="btn danger block" data-ref="stop" style="margin-top:10px;">הפסקת הרישיון</button>':""}
    `),l=d.el;J("[data-licplan]",l).forEach(w=>w.addEventListener("click",()=>{n=w.dataset.licplan,J("[data-licplan]",l).forEach(k=>k.setAttribute("aria-pressed",String(k===w)))}));const p=m('[data-ref="logoinput"]',l);m('[data-ref="logobtn"]',l).addEventListener("click",()=>p.click()),p.addEventListener("change",async()=>{const w=p.files&&p.files[0];if(w)try{let k=await zn(w,320,.86,!0,{keepAlpha:!0});if(k.length>Go&&(k=await zn(w,200,.8,!0,{keepAlpha:!0})),k.length>Go||!Ut(k)){E("הלוגו גדול מדי — נסו תמונה פשוטה או קטנה יותר");return}a.brand.logo=k,m('[data-ref="logobox"]',l).innerHTML=`<img src="${r(k)}" alt="הלוגו של העסק">`}catch(k){console.error(k),E("לא הצלחנו לקרוא את התמונה")}});const u=()=>J('[data-ref="activate"],[data-ref="details"],[data-ref="renew"],[data-ref="stop"]',l);let h=!1;const v=async(w,k,O,N)=>{if(h)return;let K=null;if(N){const B=m("#lic-name",l).value.trim(),ae=m("#lic-phone",l).value.trim();if(!B){Pe(m("#lic-name",l),"נא להזין את שם העסק");return}if(!Logic.validatePhone(ae)){Pe(m("#lic-phone",l),"מספר הטלפון אינו תקין — למשל 050-0000000");return}K={name:B,phone:Logic.normalizePhone(ae)}}h=!0;const U=w.textContent;u().forEach(B=>{B.disabled=!0}),w.textContent="שומרים…";const z=a.until;K&&(a.brand.name=K.name,a.phone=K.phone,a.plan=n),k();try{await L.saveLicense(a);let B;try{B=await vo(!0)}catch{B=Ye||[]}B=B.filter(x=>x.id!==a.id).concat([Q(a)]),Ye=B;const ae=await gc(a,B),C=Ps();C&&C.id===a.id&&Eo(a),d.close(),E(O+(ae?ae===1?" · קבוצה אחת עודכנה":` · ${ae} קבוצות עודכנו`:"")),Y()}catch(B){console.error(B),a.until=z,w.textContent=U,E(zt(B))}finally{h=!1,u().forEach(B=>{B.disabled=!1})}},y=m('[data-ref="activate"]',l);y&&y.addEventListener("click",()=>v(y,()=>{a.until=Logic.extendFrom(0,Date.now(),$e[a.plan].days)},"הרישיון הופעל ✓",!0));const b=m('[data-ref="details"]',l);b&&b.addEventListener("click",()=>v(b,()=>{},"פרטי הרישיון נשמרו ✓",!0));const S=m('[data-ref="renew"]',l);S&&S.addEventListener("click",async()=>{const w=$e[n].days,k=Logic.extendFrom(o,Date.now(),w);await xe("חידוש הרישיון",`הרישיון ״${$e[n].nm}״ יוארך עד ${qe(k,w>=365)}. להמשיך?`,"חידוש")&&v(S,()=>{a.until=Logic.extendFrom(o,Date.now(),$e[a.plan].days)},"הרישיון חודש ✓",!0)});const T=m('[data-ref="stop"]',l);T&&T.addEventListener("click",async()=>{await xe("הפסקת הרישיון",`הרישיון של ״${a.brand.name}״ יופסק עכשיו. כל קבוצה תחזור למסלול שלה עצמה (או לרישיון פעיל אחר של אותו טלפון, אם יש), והנתונים נשמרים. להמשיך?`,"הפסקה",!0)&&v(T,()=>{a.until=Date.now()-1},"הרישיון הופסק",!1)})}const So="shaveh_mgrpass_v1";function jo(){try{return JSON.parse(F.get(So)||"{}")||{}}catch{return{}}}function To(e,t){const a=jo();a[e]=t,F.set(So,JSON.stringify(a))}async function Ao(e,t){const a=e+"|"+String(t||"");try{const n=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(a));return Array.from(new Uint8Array(n)).map(s=>s.toString(16).padStart(2,"0")).join("")}catch{return"h"+Logic.hashId(a).toString(16)}}function Ns(e){const t=se(e.id);return t?(e.members||[]).some(n=>n.id===t)?t:(Me(e.id,null),null):null}function $c(e){return de(e)?!f.secure||$t()?!0:!!Ge()[e.id]:!1}const Co="מחיקת הקבוצה אפשרית רק מהמכשיר שפתח אותה, או אחרי כניסה בסיסמת מנהל הקבוצה.";function Aa(e){return!!(e&&f.secure&&L&&L.kind==="rest"&&Array.isArray(e.keyed))}function Oo(e,t){return Aa(e)&&!!t&&e.keyed.indexOf(t)>=0&&!Pt(e.id,t)}const Hs=()=>!!(L&&L.kind==="rest"&&L.secure),Is=e=>!!(e&&(e.mgrPass||e.hasMgrPass));function wc(e){return!e||!Hs()||!e.managerId||de(e)||Aa(e)?!1:se(e.id)===e.managerId}function de(e){return e?$t()||e.managerId&&se(e.id)===e.managerId&&(!Hs()||Aa(e)&&Pt(e.id,e.managerId))||e.mgrPass&&jo()[e.id]===e.mgrPass?!0:e.ownerToken?Ge()[e.id]===e.ownerToken:!1:!1}const Mo="שינוי ההוצאה שמור למי שרשם אותה ולמנהל הקבוצה";function Ds(e,t){const a=se(e.id);return!!(a&&(t.payerId===a||Logic.partsOf(e,t).indexOf(a)>=0))}function Po(e,t){return!e||!t?!1:typeof t.canEdit=="boolean"?t.canEdit:de(e)||Ds(e,t)}function No(e,t){return!e||!t?!1:typeof t.canDel=="boolean"?t.canDel:de(e)||t.payerId===se(e.id)}function Xe(e){const t=e&&e.vis||{};return{exp:t.exp==="all"?"all":"mine",bal:t.bal==="all"?"all":"mine",sum:t.sum==="on"?"on":"off"}}function Ho(e){return(e||[]).filter(t=>t.delReq&&t.delReq.by)}const Rs="shaveh_profile_v1";function je(){try{return JSON.parse(F.get(Rs)||"{}")||{}}catch{return{}}}function Ca(e,t){const a=je();e&&(a.name=e),t&&(a.phone=t),F.set(Rs,JSON.stringify(a))}const Bs="shaveh_me_v2",Io="shaveh_me_v1";try{F.get(Io)!==null&&F.set(Io,"")}catch{}function se(e){try{return(JSON.parse(F.get(Bs)||"{}")||{})[e]||null}catch{return null}}function Me(e,t){let a={};try{a=JSON.parse(F.get(Bs)||"{}")||{}}catch{a={}}t?a[e]=t:delete a[e],F.set(Bs,JSON.stringify(a))}async function Oa(e,t){if(!L||!L.claimMember||!e||!t)return!1;if(L.hasMemberKey(e.id,t))return!0;try{return!!await L.claimMember(e.id,t)}catch(a){return console.error("member key claim failed",a),!1}}const Do={};function Ro(e){if(!e||!f.secure||!L||!L.claimMember||!Array.isArray(e.keyed))return;const t=se(e.id);if(!t||L.hasMemberKey(e.id,t)||e.keyed.indexOf(t)>=0||!(e.members||[]).some(n=>n.id===t)||Ge()[e.id]&&t!==e.managerId)return;const a=e.id+"|"+t;Do[a]||(Do[a]=!0,Oa(e,t))}function Fs(){try{const e=document.querySelector("script[data-ver]")||[...document.scripts].find(n=>/(^|\/)app[.]/.test(n.getAttribute("src")||""));if(!e)return"";const t=e.getAttribute("data-ver");if(t&&/^[a-f0-9]+$/.test(t))return t;const a=(e.getAttribute("src")||"").match(/app\.([0-9a-f]{10})\.js|[?&]v=([a-f0-9]+)/);return a?a[1]||a[2]:""}catch{return""}}const Bo="shaveh_notif_v1";let Lt=null,Ma=null;const ut=()=>F.get(Bo)!=="off";function Sn(e){F.set(Bo,e?"on":"off")}function Us(){if(ut())try{const e=window.AudioContext||window.webkitAudioContext;if(!e)return;Lt||(Lt=new e),Lt.state==="suspended"&&Lt.resume();const t=Lt.currentTime;[[0,1318.5],[.11,1046.5]].forEach(([a,n])=>{[1,2.02].forEach((s,o)=>{const i=Lt.createOscillator(),c=Lt.createGain();i.type="triangle",i.frequency.value=n*s;const d=o===0?.22:.09;c.gain.setValueAtTime(1e-4,t+a),c.gain.exponentialRampToValueAtTime(d,t+a+.012),c.gain.exponentialRampToValueAtTime(1e-4,t+a+.42),i.connect(c),c.connect(Lt.destination),i.start(t+a),i.stop(t+a+.45)})})}catch(e){console.error("sound failed",e)}}function Fo(e,t){try{if(!ut()||!("Notification"in window)||Notification.permission!=="granted"||document.visibilityState==="visible")return;new Notification(e,{body:t,tag:"shaveh-expense",icon:ke?"icons/icon-192.png":void 0})}catch(a){console.error("notify failed",a)}}async function Uo(){try{return"Notification"in window?Notification.permission==="granted"?!0:Notification.permission==="denied"?!1:await Notification.requestPermission()==="granted":!1}catch{return!1}}function kc(e,t){const a=new Set(t.map(l=>l.id));if(Ma===null){Ma=a;return}const n=se(e.id),s=t.filter(l=>!Ma.has(l.id));if(Ma=a,!s.length)return;const o=s.filter(l=>l.payerId!==n);if(!o.length)return;const i=o[o.length-1],c=le(e,i.payerId),d=Logic.isPayment(i)?`תשלום חדש מאת ${c}: ${Se(Logic.expenseBaseCents(e,i),e.base)}`:`הוצאה חדשה מאת ${c}: ${i.note?i.note+" · ":""}${Se(Logic.expenseBaseCents(e,i),e.base)}`;Us(),E(o.length>1?`💰 ${o.length} הוצאות חדשות בקבוצה`:"💰 "+d),Fo(e.name,d)}const Ko="shaveh_install_v1";let pa=null;const xc=()=>{try{return window.matchMedia&&matchMedia("(display-mode: standalone)").matches||window.navigator.standalone===!0}catch{return!1}},zo=()=>{try{return/iPad|iPhone|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}catch{return!1}};function qo(){const e=Number(F.get(Ko)||0);return e>0&&Date.now()-e<14*864e5}function Jo(){F.set(Ko,String(Date.now()))}function Ec(){return ke&&!xc()&&(pa||zo())}typeof window!="undefined"&&(window.addEventListener("beforeinstallprompt",e=>{e.preventDefault(),pa=e,f.ready&&!qo()&&Y()}),window.addEventListener("appinstalled",()=>{pa=null,E("האפליקציה נוספה למסך הבית ✓"),Y()}));function Lc(){const e=zo(),t=pe(`
      <div class="sheet-head"><h2 class="sheet-title">הוספה למסך הבית</h2></div>
      <div class="install-hero">
        <img src="${ke?"icons/icon-192.png":""}" alt="" class="install-icon" data-ref="installicon">
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
    `),a=m('[data-ref="installicon"]',t.el);if(a){const s=()=>{a.style.display="none"};!a.getAttribute("src")||a.complete&&!a.naturalWidth?s():a.addEventListener("error",s)}const n=m('[data-ref="doinstall"]',t.el);n&&n.addEventListener("click",async()=>{if(!pa){E("ההתקנה אינה זמינה בדפדפן זה");return}const s=pa;pa=null,t.close();try{s.prompt();const o=await s.userChoice;o&&o.outcome!=="accepted"&&Jo()}catch(o){console.error(o)}}),m('[data-ref="later"]',t.el).addEventListener("click",()=>{Jo(),t.close(),Y()})}const jn={calculator:`<rect x="4.5" y="2.5" width="15" height="19" rx="2.8"/>
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
       <path d="M10 13h4"/>`,back:'<path d="M4.5 12h15M12.5 5l7 7-7 7"/>',plus:'<path d="M12 5v14M5 12h14"/>',check:'<path d="m5 12.5 4.5 4.5L19 7.5"/>',bell:'<path d="M6 16v-5a6 6 0 1 1 12 0v5l1.5 2h-15L6 16Z"/><path d="M10 20.5a2 2 0 0 0 4 0"/>',bellOff:'<path d="M6 16v-5a6 6 0 0 1 9.5-4.9M18 11v5l1.5 2H8"/><path d="M10 20.5a2 2 0 0 0 4 0"/><path d="M4 4l16 16"/>',out:'<path d="M7 17 17 7"/><path d="M9 7h8v8"/>',in:'<path d="M17 7 7 17"/><path d="M15 17H7V9"/>',copy:'<rect x="8" y="8" width="12" height="12" rx="2.5"/><path d="M16 8V5.5A1.5 1.5 0 0 0 14.5 4h-9A1.5 1.5 0 0 0 4 5.5v9A1.5 1.5 0 0 0 5.5 16H8"/>',chat:'<path d="M4 20l1.3-3.9A8 8 0 1 1 8 19.1L4 20Z"/>',finish:'<path d="M5 21V4"/><path d="M5 4h11l-2 4 2 4H5"/>',chart:'<path d="M4 20h16"/><path d="M7 16v-5M12 16V7M17 16v-8"/>',users:'<circle cx="9" cy="8" r="3.2"/><path d="M3.5 19a5.5 5.5 0 0 1 11 0"/><path d="M16 5.2a3 3 0 0 1 0 5.6M17.5 14.2A5 5 0 0 1 20.5 19"/>',camera:'<path d="M4 8h3l2-3h6l2 3h3v11H4Z"/><circle cx="12" cy="13.5" r="3.5"/>',spark:'<path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2V16h5v-.1c0-.8.4-1.5 1-2A6 6 0 0 0 12 3Z"/>',lock:'<rect x="5" y="10.5" width="14" height="10" rx="2.5"/><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5"/>',trash:'<path d="M4 7h16M10 11v6M14 11v6"/><path d="M6 7l1 12.5A1.5 1.5 0 0 0 8.5 21h7a1.5 1.5 0 0 0 1.5-1.5L18 7M9 7V4h6v3"/>',chevron:'<path d="m14.5 6-6 6 6 6"/>',tag:'<path d="M20.6 13.4l-7.2 7.2a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8Z"/><circle cx="7.5" cy="7.5" r="1.5"/>'};function he(e,t){const a=jn[e];return a?`<svg class="ico" viewBox="0 0 24 24" width="${t||21}" height="${t||21}"
      fill="none" stroke="currentColor" stroke-width="1.6"
      stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${a}</svg>`:""}[["chat",'<path d="M4 20l1.3-3.9A8 8 0 1 1 8 19.1L4 20Z"/>'],["copy",'<rect x="8" y="8" width="12" height="12" rx="2.5"/><path d="M16 8V5.5A1.5 1.5 0 0 0 14.5 4h-9A1.5 1.5 0 0 0 4 5.5v9A1.5 1.5 0 0 0 5.5 16H8"/>'],["users",'<circle cx="9" cy="8" r="3.2"/><path d="M3.5 19a5.5 5.5 0 0 1 11 0"/><path d="M16 5.2a3 3 0 0 1 0 5.6M17.5 14.2A5 5 0 0 1 20.5 19"/>'],["plus",'<path d="M12 5v14M5 12h14"/>']].forEach(([e,t])=>{jn[e]||(jn[e]=t)});const Ks="shaveh_destimg_v2";let Pa=null;F.del("shaveh_destimg_v1");function Tn(){if(Pa)return Pa;try{Pa=JSON.parse(F.get(Ks)||"{}")||{}}catch{Pa={}}return Pa}function zs(e){if(!e)return null;const t=Tn()[String(e).trim()];return t&&t.url&&Ut(t.url)||null}const _c=30*864e5,Sc=36e5,Yo=e=>!!e&&Date.now()-(e.at||0)<(e.err?Sc:_c),Na=new Map;function Vo(e){const t=(e||"").trim();if(!t||!ke)return Promise.resolve(null);const a=Tn()[t];if(Yo(a))return Promise.resolve(a.url||null);if(Na.has(t))return Na.get(t);const n=jc(t).finally(()=>Na.delete(t));return Na.set(t,n),n}async function jc(e){const t=Tn(),a=t[e]&&t[e].url||null,n=()=>(t[e]={url:a,at:Date.now(),err:!0},F.set(Ks,JSON.stringify(t)),a);try{const s=new AbortController,o=setTimeout(()=>s.abort(),7e3),i=await fetch("https://he.wikipedia.org/api/rest_v1/page/summary/"+encodeURIComponent(e),{signal:s.signal}).finally(()=>clearTimeout(o));if(!i.ok&&(i.status!==404||a))return n();let c=null;if(i.ok){const d=await i.json();c=Logic.destImageUrl(d)}return t[e]={url:c,at:Date.now()},F.set(Ks,JSON.stringify(t)),c}catch{return console.warn("dest image unavailable — will retry in an hour",e),n()}}function Tc(e){if(!ke)return;const t=Tn(),a=(e||[]).map(n=>(ze(n).id==="trip"&&n.dest||"").trim()).filter(n=>n&&!Yo(t[n])&&!Na.has(n));a.length&&Promise.all(Array.from(new Set(a)).slice(0,8).map(Vo)).then(n=>{n.some(Boolean)&&Y()}).catch(()=>{})}function qs(e){const t=Number.isInteger(e.colorIdx)?e.colorIdx:Logic.hashId(e.id)%Qt.length,a=Qt[(t%Qt.length+Qt.length)%Qt.length];return`--trip-g1:${a[0]};--trip-g2:${a[1]}`}const Ut=e=>Logic.safeImgUrl(e,typeof location!="undefined"?location.origin:""),Go=12e4;function r(e){return String(e==null?"":e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}const Ac="0123456789abcdefghijklmnopqrstuvwxyz";function Ve(e){let t="";for(;t.length<25;){const a=new Uint8Array(32);crypto.getRandomValues(a);for(let n=0;n<a.length&&t.length<25;n++)a[n]<252&&(t+=Ac[a[n]%36])}return e+"_"+Date.now().toString(36)+t}const Q=e=>JSON.parse(JSON.stringify(e));function at(e){return ya.find(t=>t.c===e)||{c:e,n:e,r:1}}const Wo="shaveh_rates_v1",Js=360*60*1e3;let Ce=null;function Cc(){try{const e=JSON.parse(F.get(Wo)||"null");if(e&&e.base&&e.rates&&Date.now()-(e.at||0)<Js)return e}catch{}return null}async function Ys(e){if(Ce&&Ce.base===e&&Date.now()-Ce.at<Js)return Ce;const t=Cc();if(t&&t.base===e)return Ce=t,t;if(!ke)return null;try{const a=new AbortController,n=setTimeout(()=>a.abort(),8e3),s=await fetch("https://open.er-api.com/v6/latest/"+encodeURIComponent(e),{signal:a.signal}).finally(()=>clearTimeout(n));if(!s.ok)throw new Error("rates "+s.status);const o=await s.json();if(!o||o.result!=="success"||!o.rates)throw new Error("bad payload");const i={};return Object.keys(o.rates).forEach(c=>{const d=Number(o.rates[c]);d>0&&(i[c]=1/d)}),Ce={base:e,at:Date.now(),rates:i,updated:o.time_last_update_utc||""},F.set(Wo,JSON.stringify(Ce)),Ce}catch(a){return console.error("live rates failed",a),null}}function Vs(e,t){return e===t?1:Ce&&Ce.base===t&&Ce.rates[e]>0&&Date.now()-(Ce.at||0)<Js?Ce.rates[e]:null}function Zo(){if(!Ce)return"";try{const e=Ce.updated?new Date(Ce.updated):new Date(Ce.at);return isNaN(e.getTime())?"":new Intl.DateTimeFormat("he-IL",{day:"numeric",month:"numeric"}).format(e)}catch{return""}}function Ha(e,t){if(e===t)return 1;const a=Vs(e,t);if(a)return Math.round(a*1e4)/1e4;const n=at(e).r||1,s=at(t).r||1;return Math.round(n/s*1e4)/1e4}function Se(e,t){const a=Logic.dec(t),n=Logic.fromCents(e,a);try{return new Intl.NumberFormat("he-IL",{style:"currency",currency:t,minimumFractionDigits:a?2:0,maximumFractionDigits:a?2:0}).format(n)}catch{const o=String(t||"").replace(/[^A-Za-z]/g,"").slice(0,3).toUpperCase();return n.toFixed(a?2:0)+(o?" "+o:"")}}const V=(e,t)=>`<span class="num">${r(Se(e,t))}</span>`,Oc=(e,t)=>V(Logic.toCents(e,Logic.dec(t)),t),nt=e=>Logic.parseAmount(e),ft=e=>Math.trunc(Number(e))||0;function Re(e,t,a){const n=ft(e);return n===1?t:`<span class="num">${n}</span> ${a}`}function Je(e,t,a){const n=ft(e);return n===1?t:n+" "+a}const Kt=e=>Math.max(0,ft(e&&e.stats&&e.stats.count));if(typeof window!="undefined"&&window.visualViewport){const e=window.visualViewport;let t=0;const a=()=>{document.documentElement.style.setProperty("--vvh",Math.round(e.height)+"px"),document.documentElement.style.setProperty("--vvtop",Math.round(e.offsetTop)+"px");const n=document.activeElement;n&&/^(INPUT|TEXTAREA|SELECT)$/.test(n.tagName)&&n.closest(".sheet")&&(cancelAnimationFrame(t),t=requestAnimationFrame(()=>{try{n.scrollIntoView({block:"center"})}catch{}}))};e.addEventListener("resize",a),e.addEventListener("scroll",a),a()}function An(){const e=new Date,t=a=>String(a).padStart(2,"0");return e.getFullYear()+"-"+t(e.getMonth()+1)+"-"+t(e.getDate())}function Xo(e){if(!e)return"";try{const t=new Date(e+"T12:00:00"),a={weekday:"long",day:"numeric",month:"long"};return t.getFullYear()!==new Date().getFullYear()&&(a.year="numeric"),new Intl.DateTimeFormat("he-IL",a).format(t)}catch{return""}}function _e(e){if(!e)return"";try{return new Intl.DateTimeFormat("he-IL",{day:"numeric",month:"numeric"}).format(new Date(e+"T12:00:00"))}catch{return""}}let _t=null;function Qo(){const e=m("#toast");e&&e.remove();const t=document.createElement("div");return t.className="toast",t.id="toast",t.setAttribute("role","status"),m("#overlays").appendChild(t),t}function E(e){const t=Qo();clearTimeout(_t),setTimeout(()=>{t.isConnected&&(t.innerHTML=`<span>${r(e)}</span>`)},30),_t=setTimeout(()=>t.remove(),2800)}function er(e,t,a,n,s){const o=Qo(),i=a||Oi;clearTimeout(_t),setTimeout(()=>{o.isConnected&&(o.innerHTML=`<div><span>${r(e)}</span><button class="undo" aria-label="${r(s||"ביטול המחיקה ושחזור ההוצאה")}">${r(n||"ביטול")}</button></div>`,m("button.undo",o).addEventListener("click",()=>{clearTimeout(_t),o.remove(),t()}))},30),_t=setTimeout(()=>o.remove(),i);const c=()=>clearTimeout(_t),d=()=>{clearTimeout(_t),_t=setTimeout(()=>o.remove(),4e3)};o.addEventListener("mouseenter",c),o.addEventListener("focusin",c),o.addEventListener("mouseleave",d),o.addEventListener("focusout",d)}function tr(){try{if(window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches)return;const e=document.createElement("canvas");e.className="confetti-canvas",e.width=innerWidth,e.height=innerHeight,m("#overlays").appendChild(e);const t=e.getContext("2d"),a=["#C9A64E","#A8852F","#F3EAD3","#7E6320","#FFFFFF"],n=Array.from({length:90},()=>({x:e.width/2+(Math.random()-.5)*120,y:e.height*.35,vx:(Math.random()-.5)*9,vy:-Math.random()*10-3,s:4+Math.random()*5,r:Math.random()*Math.PI,vr:(Math.random()-.5)*.3,c:a[Math.random()*a.length|0]})),s=performance.now();(function o(i){const c=(i-s)/1e3;t.clearRect(0,0,e.width,e.height),n.forEach(d=>{d.x+=d.vx,d.y+=d.vy,d.vy+=.35,d.r+=d.vr,t.save(),t.translate(d.x,d.y),t.rotate(d.r),t.fillStyle=d.c,t.globalAlpha=Math.max(0,1.5-c),t.fillRect(-d.s/2,-d.s/2,d.s,d.s*.6),t.restore()}),c<1.6?requestAnimationFrame(o):e.remove()})(s)}catch{}}const ht=[];function Ia(){for(;ht.length;)ht[ht.length-1]()}function pe(e,t,a){const n=document.createElement("div");n.className="sheet-backdrop"+(a&&a.compact?" compact":""),n.innerHTML=`<div class="sheet" role="dialog" aria-modal="true" tabindex="-1"><div class="sheet-grip"></div>${e}</div>`;const s=m(".sheet",n),o=document.activeElement;let i=!1;const c=()=>{if(i)return;i=!0;const u=ht.indexOf(c);u>=0&&ht.splice(u,1),n.remove(),ht.length||document.documentElement.classList.remove("sheet-open"),document.removeEventListener("keydown",l);try{o&&o.focus&&o.focus()}catch{}t&&t()};ht.push(c),document.documentElement.classList.add("sheet-open");const d=()=>{const u=J(".sheet-backdrop");return u.length&&u[u.length-1]===n},l=u=>{u.key==="Escape"&&d()&&c()};n.addEventListener("click",u=>{u.target===n&&c()}),n.addEventListener("keydown",u=>{if(u.key!=="Tab")return;const h=J("button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])",s).filter(b=>!b.disabled&&!b.hidden&&b.offsetParent!==null);if(!h.length)return;const v=h[0],y=h[h.length-1];u.shiftKey&&(document.activeElement===v||document.activeElement===s)?(u.preventDefault(),y.focus()):!u.shiftKey&&document.activeElement===y&&(u.preventDefault(),v.focus())}),s.addEventListener("focusin",u=>{u.target.matches("input, select, textarea")&&setTimeout(()=>{try{u.target.scrollIntoView({block:"center",behavior:"smooth"})}catch{}},120)}),document.addEventListener("keydown",l),m("#overlays").appendChild(n);const p=m(".sheet-title",s);if(p){p.id||(p.id=Ve("ttl")),s.setAttribute("aria-labelledby",p.id);const u=p.parentElement;if(u&&u.classList.contains("sheet-head")&&!m(".sheet-close",u)){const h=document.createElement("button");h.className="iconbtn sheet-close",h.setAttribute("aria-label","סגירת החלון"),h.textContent="✕",h.addEventListener("click",c),u.appendChild(h)}}return s.focus(),{el:s,close:c}}function xe(e,t,a,n){return new Promise(s=>{let o=!1;const i=d=>{o||(o=!0,s(d))},c=pe(`
        <div class="sheet-head"><h2 class="sheet-title">${r(e)}</h2></div>
        <p style="color: var(--ink-2); margin: 0 0 18px;">${r(t)}</p>
        <div class="form-row">
          <button class="btn block" data-ref="cancel">ביטול</button>
          <button class="btn block ${n?"danger":"primary"}" data-ref="ok">${r(a||"אישור")}</button>
        </div>`,()=>i(!1),{compact:!0});m('[data-ref="ok"]',c.el).addEventListener("click",()=>{i(!0),c.close()}),m('[data-ref="cancel"]',c.el).addEventListener("click",()=>c.close())})}function Pe(e,t){if(!e||!e.isConnected){E(t);return}for(let o=e.closest("details");o;o=o.parentElement&&o.parentElement.closest("details"))o.open=!0;if(!e.getClientRects().length){E(t);return}const a=e.closest(".sheet")||m("#app")||document;J(".field-err",a).forEach(nr);const n=document.createElement("p");n.className="field-err",n.id=Ve("ferr"),n.setAttribute("role","alert"),n._for=e,e.insertAdjacentElement("afterend",n),e.setAttribute("aria-invalid","true"),e.setAttribute("aria-describedby",((e.getAttribute("aria-describedby")||"")+" "+n.id).trim()),setTimeout(()=>{n.textContent=t},30);const s=()=>{nr(n),e.removeEventListener("input",s),e.removeEventListener("change",s),e._clearErr=null};e._clearErr=s,e.addEventListener("input",s),e.addEventListener("change",s);try{e.focus({preventScroll:!0}),e.scrollIntoView({block:"center"})}catch{}}function ar(e,t){e.value=t,e._clearErr&&e._clearErr()}function nr(e){const t=e&&e._for;if(t){t.removeAttribute("aria-invalid");const a=(t.getAttribute("aria-describedby")||"").split(" ").filter(n=>n&&n!==e.id).join(" ");a?t.setAttribute("aria-describedby",a):t.removeAttribute("aria-describedby")}e&&e.parentNode&&e.parentNode.removeChild(e)}const sr="את זה אפשר לעשות רק מהמכשיר של המשתתף עצמו, או מנהל הקבוצה (מהמכשיר שפתח אותה או אחרי כניסה בסיסמת המנהל)",ir="יותר מדי פעולות ברצף מהרשת הזו — נסו שוב בעוד כמה דקות";function Te(e,t){const a=e&&e.code;return a==="forbidden"?"הפעולה לא בוצעה — "+sr:a==="rate"?ir:t}function zt(e){const t=e&&e.code;return t==="forbidden"?"השמירה נכשלה — "+sr:t==="rate"?ir:t==="too_large"?"השמירה נכשלה — הרשומה גדולה מדי (למשל צילום כבד). נסו צילום קטן יותר":t==="denied"?"השמירה נכשלה — אין הרשאה. ייתכן שהקישור ישן; בקשו קישור הזמנה חדש":t==="invalid"?"השמירה נכשלה — אחד הערכים אינו תקין":t==="plan_limit"?"ההוצאה לא נשמרה — הקבוצה הגיעה למגבלת ההוצאות של המסלול":"השמירה נכשלה — נסו שוב"}async function We(e){try{return await e()}catch(t){if(t&&t.code==="unavailable")return await new Promise(a=>setTimeout(a,400+Math.random()*500)),e();throw t}}function Mc(e){const t=a=>{console.error("db subscription error",a),f.syncError=a&&a.code||"unavailable",f.ready=!0,Y(),a&&a.code==="revoked"&&E("הגישה לנתונים השתנתה — רעננו את הדף")};return{watchTrips(a){return e.collection("trips").onSnapshot(n=>{f.syncError=null;const s=n.docs.filter(o=>o.exists).map(o=>Object.assign({id:o.id},o.data()));s.sort((o,i)=>(i.created||0)-(o.created||0)),a(s.map(Q))},t)},saveTrip(a){const n=Q(a);return delete n.id,We(()=>e.doc("trips/"+a.id).set(n))},updateTrip(a,n){return We(()=>e.doc("trips/"+a).update(Q(n)))},async deleteTripDeep(a){const n=await We(()=>e.collection("trips/"+a+"/expenses").get()),s=n.docs.filter(o=>o.exists).map(o=>Q(o.data()));for(const o of n.docs)await We(()=>e.doc("trips/"+a+"/expenses/"+o.id).delete());return await We(()=>e.doc("trips/"+a).delete()),s},watchExpenses(a,n){return e.collection("trips/"+a+"/expenses").onSnapshot(s=>{n(s.docs.filter(o=>o.exists).map(o=>Q(Object.assign({id:o.id},o.data()))))},t)},async getExpensesOnce(a){return(await We(()=>e.collection("trips/"+a+"/expenses").get())).docs.filter(s=>s.exists).map(s=>Q(Object.assign({id:s.id},s.data())))},async getTripOnce(a){const n=await We(()=>e.doc("trips/"+a).get());return n.exists?Q(Object.assign({id:a},n.data())):null},async listLicenses(){return(await We(()=>e.collection("licenses").get())).docs.filter(n=>n.exists).map(n=>Q(Object.assign({id:n.id},n.data())))},saveLicense(a){const n=Q(a);return delete n.id,We(()=>e.doc("licenses/"+a.id).set(n))},async getExpenseOnce(a,n){const s=await We(()=>e.doc("trips/"+a+"/expenses/"+n).get());return s.exists?Q(Object.assign({id:n},s.data())):null},saveExpense(a,n){const s=Q(n);return delete s.id,We(()=>e.doc("trips/"+a+"/expenses/"+n.id).set(s))},deleteExpense(a,n){return We(()=>e.doc("trips/"+a+"/expenses/"+n).delete())}}}function or(){const e="shaveh_v1";let t=null;try{t=JSON.parse(F.get(e)||"null")}catch{t=null}(!t||typeof t!="object")&&(t={}),t.trips=t.trips||{},t.expenses=t.expenses||{};const a=[],n={};function s(){F.set(e,JSON.stringify(t))||E("האחסון במכשיר מלא — ייתכן שהשמירה לא נקלטה")}function o(){const l=Object.keys(t.trips).map(p=>Object.assign({id:p},Q(t.trips[p])));return l.sort((p,u)=>(u.created||0)-(p.created||0)),l}function i(l){const p=t.expenses[l]||{};return Object.keys(p).map(u=>Object.assign({id:u},Q(p[u])))}const c=()=>a.forEach(l=>l(o())),d=l=>(n[l]||[]).forEach(p=>p(i(l)));return{_seed(l,p){t.trips=l,t.expenses=p,s()},watchTrips(l){return a.push(l),Promise.resolve().then(()=>l(o())),()=>{const p=a.indexOf(l);p>=0&&a.splice(p,1)}},async saveTrip(l){const p=Q(l);delete p.id,t.trips[l.id]=p,s(),c()},async updateTrip(l,p){const u=t.trips[l];if(!u)throw{code:"invalid_argument",message:"trip missing"};Object.keys(p).forEach(h=>{const v=p[h];v&&typeof v=="object"&&!Array.isArray(v)&&u[h]&&typeof u[h]=="object"&&!Array.isArray(u[h])?Object.assign(u[h],Q(v)):u[h]=Q(v)}),s(),c()},async deleteTripDeep(l){return delete t.trips[l],delete t.expenses[l],s(),c(),[]},async getExpensesOnce(l){return i(l)},async getTripOnce(l){return t.trips[l]?Object.assign({id:l},Q(t.trips[l])):null},async getExpenseOnce(l,p){const u=(t.expenses[l]||{})[p];return u?Object.assign({id:p},Q(u)):null},async listLicenses(){const l=t.licenses||{};return Object.keys(l).map(p=>Object.assign({id:p},Q(l[p])))},async saveLicense(l){const p=Q(l);delete p.id,(t.licenses=t.licenses||{})[l.id]=p,s()},watchExpenses(l,p){return(n[l]=n[l]||[]).push(p),Promise.resolve().then(()=>p(i(l))),()=>{const u=n[l]||[],h=u.indexOf(p);h>=0&&u.splice(h,1)}},async saveExpense(l,p){const u=Q(p);delete u.id,(t.expenses[l]=t.expenses[l]||{})[p.id]=u,s(),d(l)},async deleteExpense(l,p){t.expenses[l]&&delete t.expenses[l][p],s(),d(l)}}}const rr="shaveh_api_v1";async function lr(e){const t=F.get(rr)==="secure";if(t)return"secure";try{const a=new AbortController,n=setTimeout(()=>a.abort(),5e3);return(await fetch(e.u.replace(/\/+$/,"")+"/rest/v1/rpc/api_version",{method:"POST",signal:a.signal,body:"{}",headers:{apikey:e.k,Authorization:"Bearer "+e.k,"Content-Type":"application/json"}}).finally(()=>clearTimeout(n))).ok?(F.set(rr,"secure"),"secure"):t?"secure":"legacy"}catch{return t?"secure":"legacy"}}function Pc(e,t){const a=String(t||"");return{code:e===403&&/member key required|manager required|not allowed/.test(a)?"forbidden":e===404&&/PGRST202|Could not find the function/.test(a)?"no_function":e===401||e===403?"denied":e===404?"not_found":e===409?"conflict":e===413?"too_large":e===429?"rate":e===400?"invalid":e===402?"plan_limit":"unavailable",status:e,message:"sync "+e+" "+a.slice(0,200)}}const Nc=["plan","planUntil","extraExp","purchases","licPlan","licUntil","licenseId","brand"],Gs=["ownerToken","mgrPass","joinKey","hasMgrPass","legacyOpen","keyed"],cr=["managerId","vis"],dr=["created","demo"],Hc=(e,t)=>(t.created||0)-(e.created||0);function pr(){const e=oa();return Object.keys(e).sort((t,a)=>(e[a].at||0)-(e[t].at||0)).slice(0,100)}function Ic(e,t){const a=e.u.replace(/\/+$/,""),n=a+"/rest/v1/docs",s={apikey:e.k,Authorization:"Bearer "+e.k,"Content-Type":"application/json"},o=encodeURIComponent,i=t==="secure",c={};let d=0,l=!1;function p(){l||vt.get("shaveh_api_reload")||(l=!0,lr(e).then(g=>{g==="secure"&&(vt.set("shaveh_api_reload","1"),location.reload())}).finally(()=>{l=!1}))}async function u(g,_){let $;try{$=await fetch(g,_)}catch(R){throw{code:"unavailable",message:String(R&&R.message||R)}}if(!$.ok){const R=await $.text().catch(()=>"");throw!i&&($.status===401||$.status===403||$.status===404)&&p(),Pc($.status,R)}const H=await $.text();return H?JSON.parse(H):null}const h=(g,_)=>u(a+"/rest/v1/rpc/"+g,{method:"POST",headers:s,body:JSON.stringify(_||{})});async function v(g,_){const $=ka();if(!$)throw{code:"denied",message:"admin locked"};const H=await h(g,Object.assign({p_secret:$},_||{}));if(H&&H.error==="denied")throw Pl(),{code:"denied",message:"admin denied"};if(H&&H.error)throw{code:H.error==="too_large"?"too_large":H.error==="not_found"?"not_found":"invalid",message:H.error};return H}const y=()=>i&&!!ka()&&$t();let b=2;async function S(g,_,$){if(b>=2)try{return await h(g,_)}catch(R){if(!R||R.code!=="no_function")throw R;b=1}if($===null)throw{code:"no_function",message:g};const H=Object.assign({},$||_);return delete H.p_auth,delete H.p_self,h(g,H)}function T(g,_){const $={},H=Ge()[g];H&&($.o=H);const R=_&&Pt(g,_)?_:se(g),G=R?Pt(g,R):"";return G&&($.m=R,$.k=G),y()&&($.a=ka()),Object.keys($).length?$:null}const w={},k=(g,_)=>{const $=w[g];return $?Object.keys(_).every(H=>H==="vis"?JSON.stringify(Xe({vis:_.vis}))===JSON.stringify(Xe($)):String(_[H]||"")===String($[H]||"")):!1};async function O(g,_){if(!(!Object.keys(_).length||k(g,_)))try{await S("manager_update_trip",{p_id:g,p_key:U(g),p_auth:T(g),p_patch:_},null)}catch($){if(!$||$.code!=="no_function")throw $}}function N(g){const _={};return b<2||(cr.forEach($=>{$ in g&&(_[$]=g[$]),delete g[$]}),dr.forEach($=>{delete g[$]})),_}const K=g=>xa(g)||c[g]||"";function U(g){const _=K(g);if(!_)throw{code:"denied",message:"no key for trip"};return _}const z=(g,_)=>(_.forEach($=>{delete g[$]}),g);async function B(g){return(await u(n+"?collection=eq."+o(g)+"&select=id,body",{headers:s})).map($=>Object.assign({},$.body||{},{id:$.id}))}async function ae(g,_){const $=await u(n+"?collection=eq."+o(g)+"&id=eq."+o(_)+"&select=id,body",{headers:s});return $.length?Object.assign({},$[0].body||{},{id:$[0].id}):null}async function C(g,_,$){await u(n+"?on_conflict=collection,id",{method:"POST",headers:Object.assign({Prefer:"resolution=merge-duplicates"},s),body:JSON.stringify([{collection:g,id:_,body:$}])})}async function x(g,_){await u(n+"?collection=eq."+o(g)+"&id=eq."+o(_),{method:"DELETE",headers:s})}async function P(){if($t())return B("trips");const g=pr(),_=[];for(let H=0;H<g.length;H+=40){const R=g.slice(H,H+40).map(te=>'"'+te+'"').join(",");(await u(n+"?collection=eq.trips&id=in.("+o(R)+")&select=id,body",{headers:s})).forEach(te=>_.push(Object.assign({},te.body||{},{id:te.id})))}const $=new Set(_.map(H=>H.id));return g.forEach(H=>{$.has(H)||an(H)}),_.forEach(H=>Mt(H.id,H.joinKey)),_}function I(g){const _=z(Object.assign({},g.body||{},{id:g.id}),Gs);return g.owner&&(_.ownerToken=Ge()[g.id]||""),g.hasMgrPass&&(_.hasMgrPass=!0),g.legacyOpen&&(_.legacyOpen=!0),Array.isArray(g.keyed)&&(_.keyed=g.keyed.filter($=>typeof $=="string")),w[g.id]=g.body||{},_}async function ie(g){if(!g.length)return[];const _=Ge(),$=await h("get_trips",{p_ids:g,p_keys:g.map(te=>K(te)||null),p_owner_keys:g.map(te=>_[te]||null)});($.trips||[]).forEach(te=>{(te.joinKey||xa(te.id))&&Mt(te.id,te.joinKey)}),($.missing||[]).forEach(an);const H=($.trips||[]).slice(),R=new Set($.missing||[]),G=g.filter(te=>!R.has(te)&&Ki(te));if(G.length)try{const te=await h("get_trips",{p_ids:G,p_keys:G.map(Ki),p_owner_keys:G.map(()=>null)}),ee=new Set((te.trips||[]).map(X=>X.id));G.forEach(X=>Rl(X,ee.has(X)));const Ae=new Set(H.map(X=>X.id));(te.trips||[]).forEach(X=>{Ae.has(X.id)||H.push(X)})}catch(te){console.error("pending join key check failed — will retry",te)}return H.map(I)}async function q(){if(y()||Object.keys(c).forEach(g=>{delete c[g]}),y())try{const g=await v("admin_list_trips");return(g.trips||[]).forEach(_=>{_.joinKey&&(c[_.id]=_.joinKey)}),(g.trips||[]).map(I)}catch(g){if(g.code!=="denied")throw g}return ie(pr())}async function ce(g){return i?(await S("list_expenses",{p_id:g,p_key:U(g),p_auth:T(g)})||[]).map($=>Object.assign({},$.body||{},{id:$.id})):B("trips/"+g+"/expenses")}function Z(g,_,$,H){let R=null,G=!1,te=null,ee=0,Ae=!1,X=!1;function Oe(){clearTimeout(te);const be=Math.min(6e4,$*Math.pow(2,Math.min(ee,4)));te=setTimeout(()=>{typeof document!="undefined"&&document.visibilityState==="hidden"||He()},be)}async function He(){if(!G){if(Ae){X=!0;return}Ae=!0,clearTimeout(te);try{const be=await g();H&&be.sort(H),ee=0,d=0,f.syncError&&(f.syncError=null,Y());const Ee=JSON.stringify(be);Ee!==R&&(R=Ee,_(be))}catch(be){ee++,d++,d===3&&(f.syncError="unavailable",f.ready=!0,Y()),console.error("sync poll failed",be)}finally{Ae=!1}G||(X?(X=!1,He()):Oe())}}He();const A=()=>{document.visibilityState==="visible"&&He()};document.addEventListener("visibilitychange",A);const D=()=>{G=!0,clearTimeout(te),document.removeEventListener("visibilitychange",A)};return D.refresh=He,D}let ue=null,me=null;const ne=()=>{ue&&ue.refresh&&ue.refresh(),me&&me.refresh&&me.refresh()},ye={kind:"rest",secure:i,serverAdmin:i,refresh:ne,watchTrips(g){return ue=Z(i?q:P,g,7e3,Hc),ue},async saveTrip(g,_){const $=Q(g);if(delete $.id,delete $.hasMgrPass,i){z($,Gs);const H=!K(g.id);if(H){const R=await S("create_trip",{p_id:g.id,p_body:$,p_auth:y()?{a:ka()}:null});Mt(R.id,R.joinKey),ra(R.id,R.ownerKey),R.memberKey&&nn(R.id,R.memberId,R.memberKey),g.ownerToken=R.ownerKey}else{const R=Q($),G=N($);await O(g.id,G),await S("update_trip",{p_id:g.id,p_key:U(g.id),p_patch:$,p_replace:!0,p_auth:T(g.id)},{p_id:g.id,p_key:U(g.id),p_patch:R,p_replace:!0}),Object.assign($,R)}if(_&&_.withServerFields&&y()){const R={};Nc.concat(cr,dr).forEach(te=>{te in $&&(R[te]=$[te])}),H&&!("plan"in $)&&(R.plan=null);const G=H&&Array.isArray($.members)&&$.members.length>0;G&&(R.members=$.members),Object.keys(R).length&&await v("admin_update_trip",Object.assign({p_id:g.id,p_patch:R},G?{p_restore:!0}:{}))}}else $.joinKey||($.joinKey=xa(g.id)||zi()),await C("trips",g.id,$),Mt(g.id,$.joinKey);ne()},async updateTrip(g,_){if(i){const R=z(Q(_),Gs);if(y())await v("admin_update_trip",{p_id:g,p_patch:R});else{const G=Q(R),te=N(R);await O(g,te),(Object.keys(R).length||b<2)&&await S("update_trip",{p_id:g,p_key:U(g),p_patch:R,p_auth:T(g)},{p_id:g,p_key:U(g),p_patch:G})}ne();return}const $=await ae("trips",g);if(!$)throw{code:"invalid_argument",message:"trip missing"};const H=Q($);delete H.id,Object.keys(_).forEach(R=>{const G=_[R];G&&typeof G=="object"&&!Array.isArray(G)&&H[R]&&typeof H[R]=="object"&&!Array.isArray(H[R])?Object.assign(H[R],Q(G)):H[R]=Q(G)}),await C("trips",g,H),ne()},async deleteTripDeep(g){if(i){if(y())await v("admin_delete_trip",{p_id:g});else{const H=Ge()[g];if(!H)throw{code:"denied",message:"owner key required"};await h("delete_trip",{p_id:g,p_owner_key:H})}return an(g),ne(),[]}const _="trips/"+g+"/expenses",$=await B(_);return await u(n+"?collection=eq."+o(_),{method:"DELETE",headers:s}),await x("trips",g),an(g),ne(),$},watchExpenses(g,_){return me&&me(),me=Z(()=>ce(g),_,5e3),me},getExpensesOnce:ce,async getTripOnce(g){return i?(await ie([g]))[0]||null:ae("trips",g)},async getExpenseOnce(g,_){if(!i)return ae("trips/"+g+"/expenses",_);const $=await S("get_expense",{p_id:g,p_key:U(g),p_eid:_,p_auth:T(g)});return $?Object.assign({},$.body||{},{id:$.id}):null},async saveExpense(g,_){const $=Q(_);delete $.canEdit,delete $.canDel,i?await S("save_expense",{p_id:g,p_key:U(g),p_expense:$,p_auth:T(g)}):(delete $.id,await C("trips/"+g+"/expenses",_.id,$)),ne()},async deleteExpense(g,_){i?await S("delete_expense",{p_id:g,p_key:U(g),p_eid:_,p_auth:T(g)}):await x("trips/"+g+"/expenses",_),ne()},async listLicenses(){return i?((await v("admin_list_licenses")).licenses||[]).map(_=>Object.assign({},_.body||{},{id:_.id})):B("licenses")},async saveLicense(g){if(i){await v("admin_save_license",{p_license:Q(g)});return}const _=Q(g);delete _.id,await C("licenses",g.id,_)},async licenseForPhone(g){return i?h("license_for_phone",{p_phone:String(g||"")}):Logic.licenseForPhone(await B("licenses"),g,Date.now())},async brandById(g){if(i)return h("brand_by_id",{p_id:String(g||"")});const _=await ae("licenses",g);return _&&Number(_.until)>Date.now()?_:null},joinKeyFor(g){return K(g)},async ensureJoinKey(g){if(!g)return"";if(i)return K(g.id);const _=xa(g.id)||(sa.test(g.joinKey||"")?g.joinKey:"");if(_)return Mt(g.id,_),_;const $=zi();return await ye.updateTrip(g.id,{joinKey:$}),Mt(g.id,$),g.joinKey=$,$}};return i&&(ye.upsertMember=async(g,_,$)=>{const H=!!($&&$.self),R=()=>S("add_member",{p_id:g,p_key:U(g),p_member:Q(_),p_auth:T(g,_.id),p_self:H});let G;try{G=await R()}catch(ee){if(!ee||ee.code!=="forbidden"||_.id!==se(g)||!await ye.claimMember(g,_.id))throw ee;G=await R()}let te=G;return G&&typeof G=="object"&&!Array.isArray(G)&&(G.memberKey&&nn(g,G.memberId||_.id,G.memberKey),te=G.members),ne(),te},ye.adminRestoreExpenses=async(g,_)=>{if(!y())return null;let $=0,H=0,R=[],G=0;const te=async()=>{if(!R.length)return;const ee=await v("admin_restore_expenses",{p_id:g,p_list:R});$+=Number(ee&&ee.saved)||0,H+=Number(ee&&ee.skipped)||0,R=[],G=0};try{for(const ee of _){const Ae=JSON.stringify(ee).length;R.length&&(R.length>=100||G+Ae>15e5)&&await te(),R.push(Q(ee)),G+=Ae}await te()}catch(ee){if(ee&&ee.status===404&&!$)return null;throw ee}return ne(),{saved:$,skipped:H}},ye.claimMember=async(g,_)=>{if(b<2)return"";let $;try{$=await S("claim_member",{p_id:g,p_key:U(g),p_member_id:_,p_auth:T(g,_)},null)}catch(H){if(H&&H.code==="no_function")return"";throw H}return $&&$.memberKey?(nn(g,$.memberId||_,$.memberKey),ne(),$.memberKey):$&&$.already?Pt(g,_):""},ye.resetMemberKey=async(g,_)=>{await S("reset_member_key",{p_id:g,p_key:U(g),p_auth:T(g),p_member_id:_},null),ne()},ye.hasMemberKey=(g,_)=>!!Pt(g,_),ye.adminLogin=async(g,_)=>{try{return await h("admin_login",{p_secret:g,p_code:_||null,p_label:"האפליקציה"})||{error:"denied"}}catch($){if($&&/stale_migration/.test(String($.message||"")))return{error:"stale_migration"};if(!$||$.code!=="no_function")throw $;return{legacy:!0,ok:!!await h("admin_check",{p_secret:g})}}},ye.adminLogout=async g=>{try{await h("admin_logout",{p_token:g})}catch{}},ye.exportAll=async()=>{const g=await v("admin_export"),_=$=>Object.assign({},$.body||{},{id:$.id});return{trips:(g.trips||[]).map($=>Object.assign(_($),{expenses:($.expenses||[]).map(_)})),licenses:(g.licenses||[]).map(_)}},ye.setManagerPass=async(g,_)=>{const $=Ge()[g];if(!$)throw{code:"denied",message:"owner key required"};await h("set_manager_pass",{p_id:g,p_owner_key:$,p_pass:_||""}),ne()},ye.purchaseConfirm=async(g,_)=>{if(y())return v("admin_purchase_confirm_get",{p_source:"trip",p_owner_id:g,p_purchase_id:_});const $=Ge()[g];if(!$)throw{code:"denied",message:"owner key required"};return h("purchase_confirm_get",{p_id:g,p_key:U(g),p_owner_key:$,p_purchase_id:_})},ye.purchaseConfirmSent=async(g,_,$)=>{const H=await v("admin_purchase_confirm",{p_source:"trip",p_owner_id:g,p_purchase_id:_,p_confirm:$||null});return ne(),H},ye.managerLogin=async(g,_)=>{const $=await h("manager_login",{p_id:g,p_key:U(g),p_pass:String(_||"")});if($&&$.ownerKey)return ra(g,$.ownerKey),$.memberId&&$.memberKey&&nn(g,$.memberId,$.memberKey),ne(),!0;if($&&$.error==="rate")throw{code:"rate",message:"too many attempts"};return!1}),ye}function Ws(e,t){return Object.assign(e,{kind:t,secure:!0,serverAdmin:!1,async licenseForPhone(a){return Logic.licenseForPhone(await e.listLicenses()||[],a,Date.now())},async brandById(a){const n=(await e.listLicenses()||[]).find(s=>s.id===a);return n&&Number(n.until)>Date.now()?n:null},async ensureJoinKey(){return""}})}const Dc=256*1024,ur=600*1024;function Rc(e){const t=JSON.stringify(e);try{return new TextEncoder().encode(t).length}catch{return t.length*3}}function Zs(e,t){if(Rc(e)>t)throw{code:"too_large",message:"too large"}}function Bc(e){const t=i=>c=>(Array.isArray(c)?c:[]).map(i).filter(Boolean),a=Logic.normalizeTrip,n=Logic.normalizeExpense,s=Logic.normalizeLicense,o=Object.assign({},e);return o.watchTrips=i=>e.watchTrips(c=>i(t(a)(c))),o.watchExpenses=(i,c)=>e.watchExpenses(i,d=>c(t(n)(d))),o.getTripOnce=async i=>a(await e.getTripOnce(i)),o.getExpensesOnce=async i=>t(n)(await e.getExpensesOnce(i)),o.getExpenseOnce=async(i,c)=>n(await e.getExpenseOnce(i,c)),o.saveTrip=async(i,c)=>(Zs(i,Dc),e.saveTrip(i,c)),o.saveExpense=async(i,c)=>(Zs(c,ur),e.saveExpense(i,c)),e.listLicenses&&(o.listLicenses=async()=>t(s)(await e.listLicenses())),e.licenseForPhone&&(o.licenseForPhone=async i=>{const c=await e.licenseForPhone(i);return c?s(c):null}),e.brandById&&(o.brandById=async i=>{const c=await e.brandById(i);return c?s(c):null}),e.upsertMember&&(o.upsertMember=async(i,c,d)=>t(Logic.normalizeMember)(await e.upsertMember(i,c,d))),e.adminRestoreExpenses&&(o.adminRestoreExpenses=async(i,c)=>{const d=[];let l=0;for(const u of c)try{Zs(u,ur),d.push(u)}catch{l++}const p=await e.adminRestoreExpenses(i,d);return p?{saved:p.saved,skipped:(p.skipped||0)+l}:null}),o}async function Fc(e){const t={apikey:e.k,Authorization:"Bearer "+e.k,"Content-Type":"application/json"},a=e.u.replace(/\/+$/,""),n=await fetch(a+"/rest/v1/rpc/api_version",{method:"POST",headers:t,body:"{}"}).catch(()=>null);return n&&n.ok?!0:(await fetch(a+"/rest/v1/docs?select=id&limit=1",{headers:t})).ok}function fr(e,t){const a="m_demo1",n="m_demo2",s="m_demo3",o="t_demo",i={};if(i[o]={name:"בודפשט",dest:"הונגריה",flag:"🇭🇺",kind:"trip",demo:!0,ownerToken:"own_demo",start:"2026-09-06",end:"2026-09-09",base:"ILS",budget:4e3,colorIdx:1,rates:{EUR:3.5169,HUF:.0096},members:[{id:a,name:"שמעון",color:Ie[0]},{id:n,name:"דוד",color:Ie[1]},{id:s,name:"אהרן",color:Ie[2]}],created:Date.now(),stats:{count:6,totalCents:0}},t){const u=Date.now()-5*hn;i[o].members[0].pay={methods:["bit","bank","cash"],phone:"0501234567",bank:{bankCode:"10",bankName:"בנק לאומי",branch:"607",account:"11710022",holder:"שמעון (הדגמה)"},updatedAt:u,updatedBy:a,firstAt:u},i[o].members[1].pay={methods:["paybox"],phone:"0527654321",updatedAt:u,updatedBy:n,firstAt:u}}e&&(Object.assign(i[o],{splitBy:"head",kidRate:.5}),Object.assign(i[o].members[1],{units:2,kids:2}),Object.assign(i[o].members[2],{units:2}));const c={},d=u=>c[u.id]=u;d({id:"e1",amount:96,currency:"EUR",category:"food",payerId:a,parts:[a,n,s],split:{mode:"equal"},note:"ארוחת ערב כשרה",date:"2026-09-06",created:1}),d({id:"e2",amount:21500,currency:"HUF",category:"taxi",payerId:n,parts:[a,n,s],split:{mode:"equal"},note:"מונית משדה התעופה",date:"2026-09-06",created:2}),d({id:"e3",amount:540,currency:"EUR",category:"hotel",payerId:a,parts:[a,n,s],split:{mode:"equal"},note:"שלושה לילות",date:"2026-09-07",created:3}),d({id:"e4",amount:12400,currency:"HUF",category:"market",payerId:s,parts:[n,s],split:{mode:"equal"},note:"קניות לדרך",date:"2026-09-07",created:4}),d({id:"e5",amount:75,currency:"EUR",category:"fun",payerId:n,parts:[a,n,s],split:{mode:"equal"},note:"שייט על הדנובה",date:"2026-09-08",created:5}),d({id:"e6",amount:180,currency:"ILS",category:"shop",payerId:a,parts:[a],split:{mode:"equal"},note:"מתנות",date:"2026-09-09",created:6});const l={};l[o]=c;const p=Logic.computeBalances(Object.assign({id:o},i[o]),Object.keys(c).map(u=>Object.assign({id:u},c[u])));i[o].stats.totalCents=p.grand,L._seed(i,l)}async function Uc(){const e=new URLSearchParams(location.search),t=ts(),a=e.get("theme");(a==="dark"||a==="light")&&document.documentElement.setAttribute("data-theme",a),Il();let n=null;if(ke){if(await jl(e.get("demo")==="1"),"serviceWorker"in navigator){let T=!1,w=!navigator.serviceWorker.controller;const k=()=>{if(w){w=!1;return}if(T)return;if(m(".sheet-backdrop")||document.activeElement&&/^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName)){er("גרסה חדשה מוכנה",()=>{T=!0,location.reload()},3e4,"רענון","מעבר לגרסה החדשה");return}T=!0,location.reload()};navigator.serviceWorker.addEventListener("controllerchange",k),window.addEventListener("load",()=>{navigator.serviceWorker.register("sw.js").then(O=>{const N=()=>O.update().catch(()=>{});document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&N()}),setInterval(()=>{document.visibilityState!=="hidden"&&N()},1800*1e3),N()}).catch(O=>console.error("sw",O))})}}else try{const T=await Promise.all([window.claude.use("db"),window.claude.use("assets"),window.claude.use("downloads")]);n=T[0],f.assets=T[1],f.downloads=T[2]}catch(T){console.error("capability init failed",T)}const s=e.get("demo")==="1";tt=s,s&&(window.__shavehSandbox={setBusinessInfo:us,setVatMode:mo,loadPublicSettings:Bi,sellerPhone:ys,payLinksCfg:_s,operatorInfo:De,isBuyerView:Wi,setBuyerView:T=>{fs=T===!0?!0:T===!1?!1:null},publicNotice:()=>Ct}),ns=s&&e.get("admin")==="1",ac(e,t),mc(e);const o=ke?Za():null;f.cloud=!!n&&!s,f.shared=!!o&&!s;const i=f.shared&&!n?await lr(o):null;f.apiMode=i;const c=s?Ws(or(),"local"):n?Ws(Mc(n),"cloud"):o?Ic(o,i):Ws(or(),"local");L=Bc(c),f.secure=!!L.secure;const d=e.get("join");if(!s&&d&&ia.test(d)&&Mt(d,sa.test(t.k||"")?t.k:"",!0),t.k&&Hi(),window.addEventListener("hashchange",()=>{const T=ts();(T.k!=null||T.cfg!=null)&&location.reload()}),s){let T=null;try{T=JSON.parse(F.get("shaveh_v1")||"{}")}catch{T={}}const w=e.get("pay")==="1";e.get("heads")==="1"?fr(!0,w):!Object.keys(T&&T.trips||{}).length&&e.get("fresh")!=="1"&&fr(!1,w),(e.get("legacy")==="1"||e.get("insecure")==="1")&&(L.secure=!1,f.secure=!1),e.get("role")==="member"?ra("t_demo",""):ra("t_demo","own_demo")}const l=e.get("brand"),p=Ps(),u=l||p&&p.id||"";u&&/^[A-Za-z0-9_-]{1,100}$/.test(u)&&L.brandById&&L.brandById(u).then(T=>{Eo(T),Y()}).catch(T=>console.error("brand check failed — keeping the saved brand",T));const h=e.get("join"),v=e.get("open")||h,y=e.get("tab");e.get("admin")==="1"&&(f.screen="admin"),s&&e.get("notice")==="1"?Ct={text:"הודעת הדגמה מאזור הניהול: מסלול שנתי ללא הגבלה — 250 ₪ לשנה.",warn:!1}:f.shared&&!s&&Bi(o),s&&e.get("seller")&&Di(e.get("seller")),s&&e.get("bizphone")&&us({phone:e.get("bizphone")}),s&&e.has("buyer")&&(fs=e.get("buyer")!=="0"),s&&e.get("publinks")==="1"&&Ri({week:"https://pay.grow.link/console-week",annual:"https://pay.grow.link/console-annual",bogus:"https://x.example/y",month:"javascript:alert(1)"}),s&&e.get("me")&&Me(v,e.get("me")),s&&e.get("vat")&&Ii(e.get("vat")),!!h&&!se(h)?(f.joinTripId=h,Y()):h&&ta(),(location.hash||"").indexOf("admin")>=0&&(f.screen="admin");let S=!1;f.tripsWatch=L.watchTrips(T=>{if(f.trips=T,f.ready=!0,Y(),vd(Be()),Ro(Be()),Tc(Mn()),sc(),bc(),f.joinTripId)return;if(e.get("shortcut")==="exp"&&!S){const k=Mn().filter(O=>!O.archived);if(k.length){S=!0,Qe(k[0].id);let O=0;const N=()=>{f.expensesReady?Ya(null):++O<50&&setTimeout(N,100)};setTimeout(N,150)}}const w=e.get("new");if(w&&!S){const k=rt.find(O=>O.id===w);k&&(S=!0,setTimeout(()=>Ja(null,k),150))}if(e.get("sheet")==="pricing"&&!v&&!S&&(S=!0,setTimeout(no,150)),v&&!S&&T.some(k=>k.id===v)){S=!0,Qe(v),y&&(f.tab=y,Y());const k=e.get("sheet");if(k){let O=0;const N=()=>{const K=Be();if(K){if(k==="conv")Er(K);else if(k==="invite")$i(K);else if(k==="settings"){if(f.expensesReady)Ja(K);else if(++O<50){setTimeout(N,100);return}}else if(k==="plans")dt(K);else if(k==="terms")pn("terms");else if(s&&(k==="identity"||k==="household"||k==="member"||k==="pay")){if(!f.expensesReady){++O<50&&setTimeout(N,100);return}const U=(K.members||[]).find(z=>z.id===(e.get("mid")||se(K.id)))||(K.members||[])[0];k==="identity"?bi(K):k==="household"?Ir(K,U):k==="pay"?Vr(K,U):Kn(K,U)}else if(k==="close"){if(f.expensesReady)rl(K);else if(++O<50){setTimeout(N,100);return}}else if(f.expensesReady)Ya(null);else if(++O<50){setTimeout(N,100);return}}};setTimeout(N,80)}}})}function Be(){return f.trips.find(e=>e.id===f.tripId)||null}function Qe(e){f.unsubExp&&(f.unsubExp(),f.unsubExp=null),f.tripId=e,f.tab="exp",f.expenses=[],f.expensesReady=!1,Ro(f.trips.find(t=>t.id===e)),f.screen="home",f.filter={cat:null,payer:null},Y(),Ma=null,f.unsubExp=L.watchExpenses(e,t=>{t.sort((n,s)=>n.date===s.date?(s.created||0)-(n.created||0):n.date<s.date?1:-1),f.expenses=t,f.expensesReady=!0,Y();const a=Be();a&&kc(a,t)})}function Xs(){f.unsubExp&&(f.unsubExp(),f.unsubExp=null),f.tripId=null,f.expenses=[],f.expensesReady=!1,f.screen="home",Y()}function St(e){return Logic.safeHex(e&&e.color)||Ie[Logic.hashId(String(e&&e.id||""))%Ie.length]}function Fe(e,t,a){const n=e&&typeof e.name=="string"&&e.name.trim()?e.name.trim().charAt(0):"?",s=St(e);return`<span class="avatar ${t||""}" style="background:${s}"${a?' aria-hidden="true"':` title="${r(e?e.name:"")}"`}>${r(n)}</span>`}function Kc(){return f.cloud?'<span class="storage-dot" title="הנתונים נשמרים בענן וזמינים מכל מכשיר"><i></i>ענן</span>':f.shared?'<span class="storage-dot" title="קבוצה משותפת — כל החברים רואים ורושמים יחד"><i></i>קבוצה משותפת</span>':'<span class="storage-dot local" title="הנתונים נשמרים בדפדפן במכשיר זה בלבד"><i></i>מכשיר זה</span>'}function Cn(){return!!f.downloads||ke}async function Qs(e,t){if(f.downloads)return await f.downloads.save({filename:e,data:t}),!0;const a=new Blob([t],{type:"application/octet-stream"}),n=document.createElement("a");return n.href=URL.createObjectURL(a),n.download=e,document.body.appendChild(n),n.click(),setTimeout(()=>{URL.revokeObjectURL(n.href),n.remove()},800),!0}function zc(){const e=ko();return`
      <div class="brandbar${e?" branded":""}">
        ${e?_n(e,"brand-mark brand-logo"):'<div class="brand-mark" aria-hidden="true">🤝</div>'}
        <div class="brand-text">
          <h1 class="brand-name"${e?` title="${r(e.name)}"`:""}>${e?r(e.name):"שווה בשווה"}</h1>
          <p class="brand-tag">${e?"חלוקת הוצאות לכל אירוע · באמצעות ״שווה בשווה״":"רושמים מי שילם — והחשבון מסתדר מעצמו"}</p>
        </div>
        <div class="brand-tools">
          ${$t()?`<button class="iconbtn" data-act="open-admin" aria-label="אזור המנהל">${he("archive")}</button>`:`<button class="iconbtn ghosted" data-act="open-admin" aria-label="אזור המנהל (דורש סיסמה)">${he("archive")}</button>`}
        </div>
      </div>
      <div class="rule-divider" aria-hidden="true"><span>✦</span></div>`}function qc(e,t){const a=e.stats&&e.stats.totalCents&&(de(e)||Xe(e).sum==="on")?V(e.stats.totalCents,e.base):"—",n=e.start?`${_e(e.start)}–${_e(e.end||e.start)}`:"",s=ze(e).id==="trip"?zs(e.dest):null;return`
      <button class="trip-card rise ${e.archived?"archived":""} ${s?"has-photo":""}"
        style="${qs(e)};animation-delay:${Math.min(t,8)*60}ms"
        data-act="open-trip" data-id="${r(e.id)}">
        ${s?`<span class="trip-photo" style="--photo:url('${r(s)}')" aria-hidden="true"><span class="trip-flag-badge">${r(Ze(e))}</span></span>`:`<span class="trip-flag" aria-hidden="true">${r(Ze(e))}</span>`}
        <span class="trip-info">
          <h3 class="trip-name">${r(e.name)}${e.demo?" <small style='color:var(--muted)'>· הדגמה</small>":""}</h3>
          <p class="trip-sub">
            <span>${r(ze(e).nm)}</span>
            ${e.dest?`<span>${r(e.dest)}</span>`:""}
            ${n?`<span class="num">${r(n)}</span>`:""}
            <span>${Re((e.members||[]).length,"משתתף אחד","משתתפים")}</span>
          </p>
          <span class="avatar-row">${(e.members||[]).slice(0,6).map(o=>Fe(o)).join("")}</span>
        </span>
        <span class="trip-total">
          <div class="amt">${a}</div>
          <div class="lbl">${Kt(e)?Re(Kt(e),"הוצאה אחת","הוצאות"):"עדיין ללא הוצאות"}</div>
        </span>
      </button>`}function On(){return f.syncError?'<div class="banner warn" role="status">⚠️ החיבור לנתונים לא הצליח כרגע — בדקו את החיבור לאינטרנט ונסו לרענן. מה שנרשם עד כה שמור.</div>':""}function Mn(){if($t())return f.trips;const e=Ge();return f.trips.filter(t=>t.ownerToken&&e[t.id]===t.ownerToken||!!se(t.id))}function hr(e,t){try{return qc(e,t)}catch(a){return console.error("trip card failed",e&&e.id,a),'<div class="banner warn" role="status">לא הצלחנו להציג קבוצה אחת — נסו לרענן.</div>'}}function Jc(){let e;const t=On(),a=Mn(),n=a.filter(i=>!i.archived),s=a.filter(i=>i.archived);a.length?e=`
        ${n.length?`
          <h2 class="section-title">הקבוצות שלי <small>${n.length}</small></h2>
          <div class="trip-list">${n.map((i,c)=>hr(i,c)).join("")}</div>`:`
          <div class="empty rise">
            <div class="art" aria-hidden="true">🗂️</div>
            <h3>כל הקבוצות בארכיון</h3>
            <p>אפשר לפתוח קבוצה חדשה, או לשחזר מהארכיון למטה.</p>
            <button class="btn primary" data-act="new-kind-picker">✚ &nbsp;קבוצה חדשה</button>
          </div>`}
        ${s.length?`
          <button class="archive-toggle" data-act="toggle-archive" aria-expanded="${f.showArchived}">
            ${f.showArchived?"הסתרת הארכיון":"ארכיון"} (<span class="num">${s.length}</span>)
            <span aria-hidden="true">${f.showArchived?"▲":"▼"}</span>
          </button>
          ${f.showArchived?`<div class="trip-list" style="margin-top:8px;">${s.map((i,c)=>hr(i,c)).join("")}</div>`:""}`:""}`:e=`
        <div class="empty rise kind-intro">
          <div class="art" aria-hidden="true">🤝</div>
          <h2>מה מארגנים?</h2>
          <p>בוחרים סוג, ממלאים פרטים — והקבוצה פתוחה.<br>החברים מצטרפים בקישור שתשלחו, בלי שום התקנה.</p>
        </div>
        <div class="kind-grid rise" style="animation-delay:80ms" role="group" aria-label="בחירת סוג הקבוצה">
          ${rt.map(i=>mr(i,!0)).join("")}
        </div>
        <p class="hint rise" style="text-align:center;margin-top:16px;animation-delay:140ms">
          קיבלתם קישור הצטרפות? פשוט לוחצים עליו — והקבוצה נפתחת כאן מעצמה.
        </p>`;const o=Ec()&&!qo()&&a.length?`<div class="identity-banner">
           <span>📲 רוצים אותה כמו אפליקציה? הוסיפו את ״שווה בשווה״ למסך הבית.</span>
           <button class="btn sm" data-act="install-app">הוספה</button>
         </div>`:"";return`
      ${zc()}
      ${t}
      ${Ol()}
      ${o}
      ${e}
      ${Yc()}
      <div data-ref="intro-slot"></div>
      <p class="legal-links">
        <button class="linklike" data-act="legal" data-id="terms">תקנון</button> ·
        <button class="linklike" data-act="legal" data-id="privacy">פרטיות</button> ·
        <button class="linklike" data-act="legal" data-id="a11y">נגישות</button>
      </p>
      <p class="footer-note" style="margin-top:6px;">שווה בשווה · חלוקת הוצאות הוגנת, לכל קבוצה${(()=>{const i=Fs();return i?`<br>גרסה <span class="num">${r(i)}</span>`:""})()}</p>
      ${a.length?'<div class="actionbar"><button class="btn primary" data-act="new-kind-picker">✚ &nbsp;קבוצה חדשה</button></div>':""}`}function Yc(){const e=un.filter(a=>re[a].price>0).map(a=>`${re[a].nm} ${W(re[a].price)}`),t=[`חינם עד ${re.free.maxExp} הוצאות`].concat(e,[`רישיון לעסקים מ־${W($e.business.price)} לחודש`]).map(a=>`<span class="nowrap">${r(a)}</span>`).join(" · ");return`
      <button type="button" class="pricing-entry rise" data-act="pricing" style="animation-delay:200ms">
        <span class="pe-ic" aria-hidden="true">${he("tag",20)}</span>
        <span class="pe-text">
          <b class="pe-title">מסלולים ומחירים</b>
          <small class="pe-sub">${t}</small>
        </span>
        <span class="pe-chev" aria-hidden="true">${he("chevron",18)}</span>
      </button>`}function mr(e,t){const a=e.nm.split(" / ").map((n,s,o)=>`<span class="nm-part">${r(n)}${s<o.length-1?" /":""}</span>`).join(" ");return`<button type="button" class="kind-cell"${t?' data-act="new-kind"':""} data-kind="${e.id}"><span class="ic" aria-hidden="true">${e.ic}</span><span class="nm">${a}</span></button>`}function br(e){const t=pe(`
      <div class="sheet-head"><h2 class="sheet-title">מה מארגנים?</h2></div>
      ${e&&e.plan&&re[e.plan]?`<p class="hint kind-plan-note">המסלול שבחרתם — ״${r(re[e.plan].nm)}״ — יוצע מיד אחרי פתיחת הקבוצה.</p>`:""}
      <div class="kind-grid" role="group" aria-label="בחירת סוג הקבוצה">
        ${rt.map(a=>mr(a,!1)).join("")}
      </div>`);J("[data-kind]",t.el).forEach(a=>a.addEventListener("click",()=>{const n=rt.find(s=>s.id===a.dataset.kind);t.close(),Ja(null,n,e)}))}function Vc(){return`
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
      </div>`}function Gc(){if(!$t())return Vc();const e=f.trips.filter(o=>!o.archived),t=f.trips.filter(o=>o.archived),a=f.trips.reduce((o,i)=>o+Kt(i),0),n=f.trips.some(o=>o.demo),s=f.trips.map(o=>`
      <div class="admin-row ${o.archived?"archived":""}">
        <span class="trip-flag" style="width:44px;height:44px;font-size:21px;border-radius:14px;" aria-hidden="true">${r(Ze(o))}</span>
        <div class="info">
          <p class="nm">${r(o.name)}${o.demo?" · הדגמה":""}${o.archived?" · בארכיון":""}</p>
          <p class="meta">${Kt(o)?Re(Kt(o),"הוצאה אחת","הוצאות")+" · "+V(ft(o.stats.totalCents),o.base):"ללא הוצאות"}</p>
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
          <h2 class="trip-name">אזור הניהול</h2>
          <p class="trip-dest">ניהול הקבוצות, ארכיון וגיבוי</p>
        </div>
        <div class="trip-actions">${Kc()}</div>
      </div>
      ${On()}
      ${Ml()}
      <div class="tile-grid" style="margin-top:14px;">
        <div class="tile"><div class="lbl">קבוצות פעילות</div><div class="val"><span class="num">${e.length}</span></div></div>
        <div class="tile"><div class="lbl">בארכיון</div><div class="val"><span class="num">${t.length}</span></div></div>
        <div class="tile"><div class="lbl">סך ההוצאות</div><div class="val"><span class="num">${ft(a)}</span></div></div>
        <div class="tile"><div class="lbl">אחסון</div><div class="val" style="font-size:15px;">${f.cloud?"ענן מסונכרן":f.shared?"קבוצה משותפת":"מכשיר זה"}</div></div>
      </div>
      <h2 class="section-title">הקבוצות</h2>
      ${s||'<div class="empty"><div class="art" aria-hidden="true">🗂️</div><h3>אין עדיין קבוצות</h3><p>הקבוצות שתיפתחנה יופיעו כאן לניהול.</p></div>'}
      ${ke?`
      <h2 class="section-title">קבוצה משותפת <small>סנכרון בין כל הטלפונים</small></h2>
      ${f.shared?f.secure?'<div class="banner">🔒 השרת במצב המאובטח: כל קבוצה נפתחת רק עם מפתח ההצטרפות שבקישור שלה, ופעולות הניהול מאומתות בשרת.</div>':'<div class="banner warn" role="status">השרת עדיין במצב הישן (גישה ישירה לטבלה). יש להריץ את ״deploy/אבטחה-בלחיצה.command״ — ראו docs/אבטחה.md.</div>':""}
      ${Ni?`
        <div class="banner">✓ האפליקציה מחוברת לקבוצה המשותפת. כל מי שמקבל מכם קישור הצטרפות נכנס לאותה קבוצה ורושם יחד אתכם — בלי שום הגדרה מצידו.</div>`:f.shared?`
        <div class="banner">✓ מחוברים לקבוצה המשותפת — כל מי שנכנס דרך קישור ההצטרפות רואה ורושם יחד אתכם.</div>
        <button class="btn ghost block" data-act="sync-disconnect">ניתוק מהקבוצה המשותפת במכשיר זה</button>`:`
        <div class="banner">כרגע הנתונים נשמרים במכשיר זה בלבד. חיבור קבוצה משותפת (חינם, כ־3 דקות) יאפשר לכל החברים לראות ולרשום יחד.</div>
        <button class="btn block" data-act="sync-setup">🔌 &nbsp;חיבור קבוצה משותפת</button>`}
      `:""}
      <h2 class="section-title">רישיונות עסקיים <small>כל הקבוצות של העסק, ללא הגבלה ועם מיתוג</small></h2>
      ${vc()}
      <button class="btn block" data-act="license-new" style="margin-top:10px;">רישיון עסקי חדש</button>
      <h2 class="section-title">נתונים וגיבוי</h2>
      <div style="display:flex; flex-direction:column; gap:10px;">
        <button class="btn block" data-act="backup">🗄️ &nbsp;גיבוי מלא של כל הנתונים (JSON)</button>
        <button class="btn ghost block" data-act="restore">📥 &nbsp;שחזור מקובץ גיבוי</button>
        ${n?'<button class="btn ghost block" data-act="clear-demo">🧹 &nbsp;מחיקת נתוני ההדגמה</button>':""}
        ${L&&L.kind==="rest"?"":'<button class="btn danger block" data-act="wipe-all">⚠️ &nbsp;מחיקת כל הנתונים לצמיתות</button>'}
      </div>
      <h2 class="section-title">גישה</h2>
      <button class="btn ghost block" data-act="admin-lock">🔒 &nbsp;נעילת אזור המנהל</button>
      <p class="footer-note">שווה בשווה · אזור מנהל${(()=>{const o=Fs();return o?` · גרסה <span class="num">${r(o)}</span>`:""})()}</p>`}function Wc(e,t){return!!(f.secure&&L&&L.resetMemberKey&&e&&t&&Array.isArray(e.keyed)&&e.keyed.indexOf(t.id)>=0&&de(e))}function yr(e,t){return!Wc(e,t)||t.id===se(e.id)?"":`
      <div class="field" data-ref="resetbox" style="margin-top:16px;">
        <label>המכשיר של ${r(t.name)}</label>
        <button class="btn block" data-ref="resetkey">איפוס המכשיר המחובר</button>
        <p class="hint">למי שהחליף טלפון: אחרי האיפוס, הכניסה לחשבון במכשיר החדש תחזיר לו את האפשרות לעדכן בעצמו את הטלפון ואת פרטי התשלום.</p>
      </div>`}function gr(e,t,a){const n=m('[data-ref="resetkey"]',e.el);n&&n.addEventListener("click",async()=>{if(await xe("איפוס המכשיר המחובר",`המכשיר שמחובר היום לחשבון של ${a.name} יאבד את ההרשאה לעדכן את הטלפון ואת פרטי התשלום, עד שייכנס שוב לחשבון. להמשיך?`,"איפוס")){n.disabled=!0;try{await L.resetMemberKey(t.id,a.id),t.keyed=(t.keyed||[]).filter(i=>i!==a.id);const o=m('[data-ref="resetbox"]',e.el);o&&o.remove(),E("המכשיר אופס ✓ — הכניסה הבאה לחשבון תחבר את המכשיר החדש")}catch(o){console.error(o),n.disabled=!1,E(Te(o,"האיפוס נכשל — נסו שוב"))}}})}async function Zc(e,t){const a=pe(`
      <div class="sheet-head">
        ${Fe(t,"lg",!0)}
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
          ${Ie.map((d,l)=>`<button class="chip" data-color="${r(d)}" aria-pressed="${t.color===d}" aria-label="בחירת צבע ${_l[l]}"><span class="dot" style="background:${r(d)};width:18px;height:18px;"></span></button>`).join("")}
        </div>
      </div>
      ${Logic.splitsByHead(e)?`
      <div class="field" data-ref="maheads">
        <label>כמה בחשבון?</label>
        ${fa(e,{units:Jt(t),kids:Yt(t)})}
        <p class="hint">הקבוצה מתחלקת לפי ראש. ${r(Ra(e))}${e.stats&&e.stats.count>0?" השינוי יחול גם על ההוצאות שכבר נרשמו.":""}</p>
      </div>`:""}
      <div class="field">
        <label>תפקיד</label>
        <button class="btn block" data-ref="setmgr" style="justify-content:space-between;">
          <span>${e.managerId===t.id?"🔑 זהו מנהל הקבוצה":"הגדרה כמנהל הקבוצה"}</span>
          <span style="color:var(--brand-strong);font-weight:800;">${e.managerId===t.id?"פעיל":""}</span>
        </button>
        ${Hs()&&e.managerId!==t.id&&!(Aa(e)&&e.keyed.indexOf(t.id)>=0)?'<p class="hint" data-ref="setmgr-hint">בשרת המאובטח המנהל החדש פותח את הניהול במכשיר שלו רק בכניסה בסיסמת המנהל. סיסמה זמנית למסירה — באזור הניהול, בפרטי הקבוצה (״סיסמת מנהל זמנית״).</p>':""}
      </div>
      ${yr(e,t)}
      <button class="btn primary block" data-ref="save">שמירת השינויים</button>
      ${e.managerId===t.id?'<p class="hint" data-ref="delmgrhint" style="text-align:center;margin-top:12px;">כדי להסיר את מנהל הקבוצה — קודם מגדירים משתתף אחר כמנהל.</p>':'<button class="btn danger block" data-ref="del" style="margin-top:10px;">הסרת המשתתף מהקבוצה</button>'}
    `);gr(a,e,t);let n=t.color;J("[data-color]",a.el).forEach(d=>d.addEventListener("click",()=>{Ie.indexOf(d.dataset.color)<0||(n=d.dataset.color,J("[data-color]",a.el).forEach(l=>l.setAttribute("aria-pressed",String(l===d))))}));const s={units:Jt(t),kids:Yt(t)},o=m('[data-ref="maheads"]',a.el);o&&Ba(o,s);let i=e.managerId===t.id;m('[data-ref="setmgr"]',a.el).addEventListener("click",function(){i=!i,this.innerHTML=`<span>${i?"🔑 יוגדר כמנהל הקבוצה":"הגדרה כמנהל הקבוצה"}</span><span style="color:var(--brand-strong);font-weight:800;">${i?"פעיל":""}</span>`}),m('[data-ref="save"]',a.el).addEventListener("click",async()=>{const d=m("#ma-name",a.el).value.trim(),l=m("#ma-phone",a.el).value.trim();if(!d){Pe(m("#ma-name",a.el),"נא להזין שם");return}if(l&&!Logic.validatePhone(l)){Pe(m("#ma-phone",a.el),"מספר הטלפון אינו תקין");return}const p=m('[data-ref="save"]',a.el);p.disabled=!0,p.textContent="שומרים…";try{const u=Logic.normalizePhone(l),h=Logic.normalizePay(t.pay),v=!Logic.phonesEqual(u,we(t))&&!h.phone&&(h.methods.indexOf("bit")>=0||h.methods.indexOf("paybox")>=0)?{pay:In(t.pay,se(e.id)||"mgr",t.pay)}:{};await st(e,Object.assign({id:t.id,name:d,phone:u,color:n},o?{units:s.units,kids:s.kids}:{},v)),i&&e.managerId!==t.id?await L.updateTrip(e.id,{managerId:t.id}):!i&&e.managerId===t.id&&await L.updateTrip(e.id,{managerId:""}),a.close(),E("פרטי המשתתף עודכנו ✓"),Y()}catch(u){console.error(u),p.disabled=!1,p.textContent="שמירת השינויים",E(zt(u))}});const c=m('[data-ref="del"]',a.el);c&&c.addEventListener("click",async()=>{if(await xe("הסרת משתתף",`${t.name} יוסר מהקבוצה. הוצאות שכבר נרשמו יישארו, ויתרתו תוצג כ״משתתף שהוסר״. להמשיך?`,"הסרה",!0))try{let l=e;if(L.getTripOnce){const v=await L.getTripOnce(e.id);v&&(l=v)}const p=(l.members||[]).filter(v=>v.id!==t.id),u=(l.members||[]).find(v=>v.id===t.id)||t,h=Object.assign({},l.removedHeads,{[t.id]:{units:Jt(u),kids:Yt(u)}});await L.updateTrip(e.id,{members:p,removedHeads:h}),e.members=p,e.removedHeads=h,a.close(),E("המשתתף הוסר"),Y()}catch(l){console.error(l),E(Te(l,"ההסרה נכשלה — נסו שוב"))}})}async function Xc(e){const t=f.trips.find(l=>l.id===e);if(!t)return;const a=pe(`
      <div class="sheet-head">
        <span class="trip-flag" style="width:40px;height:40px;font-size:19px;border-radius:12px;" aria-hidden="true">${r(Ze(t))}</span>
        <h2 class="sheet-title">${r(t.name)}</h2>
      </div>
      <div data-ref="body"><p class="hint">טוענים הוצאות…</p></div>`);let n=[];try{n=await L.getExpensesOnce(e)}catch(l){console.error(l)}n.sort((l,p)=>l.date===p.date?(p.created||0)-(l.created||0):l.date<p.date?1:-1);const s=Logic.computeBalances(t,n),o=()=>bn(t,n)+(da(t).isLicense?`<br><small>המסלול של הקבוצה עצמה: ${bn(t,n,{own:!0})}</small>`:"");m('[data-ref="body"]',a.el).innerHTML=`
      <div class="mgr-total" style="border-radius:var(--radius-sm);">
        <span>סך הוצאות</span><b>${V(s.grand,t.base)}</b>
      </div>
      <h2 class="section-title">משתתפים <small>${(t.members||[]).length}</small></h2>
      <div class="acct-list">
        ${(t.members||[]).map(l=>`
          <button class="acct-row tap" data-editmember="${r(l.id)}">
            ${Fe(l,"",!0)}
            <span class="acct-mid">
              <b>${r(l.name)}${t.managerId===l.id?" · 🔑 מנהל":""}</b>
              <small>${l.phone?`<span class="num">${r(l.phone)}</span>`:"ללא טלפון"}</small>
            </span>
            <span class="acct-amt">${r(Se(s.net[l.id]||0,t.base))}</span>
          </button>`).join("")}
      </div>
      <h2 class="section-title">מסלול <small>הפעלה ידנית לאחר תשלום</small></h2>
      <div class="banner" style="margin:0 0 8px;" data-ref="planstatus">${o()}</div>
      <div class="chip-row" data-ref="planpick" role="group" aria-label="בחירת מסלול לקבוצה">
        ${un.map(l=>`<button class="chip" data-setplan="${l}" aria-pressed="${wt(t).id===l}">${r(ks(t,l).label)}</button>`).join("")}
      </div>
      <div class="chip-row" role="group" aria-label="השלמות" style="margin-top:8px;">
        ${Object.keys(fe).map(l=>`<button class="chip" data-topup="${l}">+ ${fe[l].nm} · ${W(fe[l].price)}</button>`).join("")}
      </div>
      <p class="hint" data-ref="topuphint" hidden></p>
      <p class="hint">מסלול לקבוצה — כאן. רישיון עסקי (כל הקבוצות של המנהל, עם מיתוג) — במסך הניהול, ״רישיונות עסקיים״.</p>
      <h2 class="section-title">כל ההוצאות <small>${n.length}</small></h2>
      <div class="acct-list">
        ${n.length?n.map(l=>{const p=ve.find(u=>u.id===l.category)||ve[ve.length-1];return`
            <div class="acct-row">
              <span class="acct-ic" aria-hidden="true">${Logic.isPayment(l)?"✓":p.ic}</span>
              <span class="acct-mid">
                <b>${r(l.note||p.nm)}</b>
                <small>${r(_e(l.date))} · ${r(le(t,l.payerId))} · ${r(Se(Logic.expenseBaseCents(t,l),t.base))}</small>
              </span>
              <button class="xbtn" data-delexp="${r(l.id)}" aria-label="מחיקת ${r(l.note||p.nm)}">✕</button>
            </div>`}).join(""):'<p class="hint" style="padding:14px 15px;">אין הוצאות בקבוצה זו.</p>'}
      </div>`;let i=!1;const c=()=>{m('[data-ref="planstatus"]',a.el).innerHTML=o();const l=wt(t);J("[data-setplan]",a.el).forEach(h=>{h.textContent=ks(t,h.dataset.setplan).label,h.setAttribute("aria-pressed",String(h.dataset.setplan===l.id)),h.disabled=i});const p=!!(re[l.id]&&re[l.id].topUp);J("[data-topup]",a.el).forEach(h=>{h.disabled=i||!p||h.dataset.topup==="exp20"&&l.expired});const u=m('[data-ref="topuphint"]',a.el);u.textContent=p?l.expired?`״${fe.exp20.nm}״ — רק כשהמסלול בתוקף. אחרי שהתוקף נגמר מוסיפים קודם 7 ימים, או בוחרים מסלול.`:"":"השלמות — רק למסלולי שבוע וחודש.",u.hidden=!u.textContent},d=async l=>{if(!i){i=!0,c();try{let p=t;if(L.getTripOnce){const b=await L.getTripOnce(t.id);b&&(p=b)}const u=l(p);if(!u||!await xe(u.title,u.text,"אישור"))return;const v=Object.assign({},u.patch),y=u.purchase?Object.assign({id:Ve("buy"),at:Date.now(),by:"admin"},u.purchase):null;y&&(v.purchases=(p.purchases||[]).concat([y])),await L.updateTrip(t.id,v),Object.assign(t,p,v),E(u.okMsg),y&&setTimeout(()=>fc(t,y),60)}catch(p){console.error(p),E(Te(p,"העדכון נכשל — נסו שוב"))}finally{i=!1,c()}}};J("[data-setplan]",a.el).forEach(l=>l.addEventListener("click",()=>d(p=>{const u=l.dataset.setplan,h=re[u],v=ks(p,u),y=Date.now();if(v.kind==="free")return{patch:{plan:"free",planUntil:0,extraExp:0},purchase:null,okMsg:"המסלול עודכן: חינם ✓",title:"מעבר למסלול החינמי",text:`הקבוצה תעבור למסלול החינמי (${wt(p).freeMax} הוצאות). לא תירשם רכישה. להמשיך?`};if(v.kind==="renew"){const b=Logic.extendFrom(p.planUntil,y,h.days);return{patch:{plan:u,planUntil:b},purchase:{what:"חידוש "+h.nm,price:h.price},okMsg:`המסלול חודש: ${h.nm} עד ${qe(b,h.days>=365)} ✓`,title:"חידוש המסלול",text:`מסלול ״${h.nm}״ יוארך עד ${qe(b,h.days>=365)}${h.topUp?" (ההשלמות שנקנו נשמרות)":""}, ותירשם רכישה של ${W(h.price)}. להמשיך?`}}return{patch:{plan:u,planUntil:h.days?y+h.days*hn:0,extraExp:0},purchase:v.cost>0?{what:v.kind==="diff"?`שדרוג ל${h.nm}`:h.nm,price:v.cost}:null,okMsg:`המסלול עודכן: ${h.nm} ✓`,title:"הפעלת מסלול",text:`יופעל מסלול ״${h.nm}״${h.days?` ל־${h.days} ימים מהיום`:""}, ותירשם רכישה של ${W(v.cost)}${v.kind==="diff"?" (תשלום ההפרש)":""}. השלמות קודמות מתאפסות. להמשיך?`}}))),J("[data-topup]",a.el).forEach(l=>l.addEventListener("click",()=>d(p=>{const u=l.dataset.topup,h=wt(p);if(!(re[h.id]&&re[h.id].topUp))return E("השלמות — רק למסלולי שבוע וחודש"),null;if(u==="exp20"&&h.expired)return E("תוקף המסלול הסתיים — קודם מוסיפים 7 ימים או בוחרים מסלול"),null;const v=Logic.extendFrom(p.planUntil,Date.now(),7);return{patch:u==="exp20"?{extraExp:(Number(p.extraExp)||0)+20}:{planUntil:v},purchase:{what:fe[u].nm,price:fe[u].price},okMsg:`נוספו ${fe[u].nm} ✓`,title:"הוספת השלמה",text:`${u==="exp20"?"יתווספו 20 הוצאות למסלול הנוכחי":`התוקף יוארך עד ${qe(v)}`}, ותירשם רכישה של ${W(fe[u].price)}. להמשיך?`}}))),c(),J("[data-editmember]",a.el).forEach(l=>l.addEventListener("click",()=>{const p=(t.members||[]).find(u=>u.id===l.dataset.editmember);p&&(a.close(),Zc(t,p))})),J("[data-delexp]",a.el).forEach(l=>l.addEventListener("click",async()=>{const p=n.find(h=>h.id===l.dataset.delexp);if(await xe("מחיקת הוצאה",`״${p&&p.note||"הוצאה"}״ תימחק לצמיתות מהקבוצה. להמשיך?`,"מחיקה",!0))try{await L.deleteExpense(e,l.dataset.delexp),n=n.filter(h=>h.id!==l.dataset.delexp),await At(t,n),l.closest(".acct-row").remove(),E("ההוצאה נמחקה")}catch(h){console.error(h),E(Te(h,"המחיקה נכשלה"))}}))}async function Qc(e){if(!f.secure||!L.upsertMember||!L.getTripOnce)return 0;const t=await L.getTripOnce(e.id);if(!t)return 0;let a=0;for(const n of e.members||[]){const s=(t.members||[]).find(i=>i.id===n.id);if(!s)continue;const o=n.pay&&typeof n.pay=="object"?Object.assign({},n.pay):{methods:[]};Logic.samePay(o,s.pay,{secure:!0,memberPhone:we(s)})||(delete o.updatedAt,delete o.updatedBy,delete o.firstAt,await L.upsertMember(e.id,{id:n.id,pay:o}),a++)}return a}function ed(){const e=document.createElement("input");e.type="file",e.accept="application/json,.json",e.addEventListener("change",async()=>{const t=e.files&&e.files[0];if(!t)return;let a=null;try{a=JSON.parse(await t.text())}catch{E("הקובץ אינו קובץ גיבוי תקין");return}const n=Logic.backupData(a)||{trips:[],licenses:[]},s=n.trips,o=n.licenses;if(!s.length&&!o.length){E("לא נמצאו קבוצות בקובץ");return}const i=new Set(f.trips.map(S=>S.id)),c=f.secure?s.filter(S=>S&&S.id&&!i.has(S.id)).length:0,d=c?` ${Je(c,"קבוצה אחת אינה קיימת כרגע בשרת ותיפתח","קבוצות אינן קיימות כרגע בשרת וייפתחו")} מחדש עם קישור הצטרפות חדש — את הקישור החדש יש לשלוח שוב למשתתפים (הקישורים הישנים לא יעבדו).`:"";if(!await xe("שחזור מגיבוי",`נמצאו ${Je(s.length,"קבוצה אחת","קבוצות")}${o.length?` ו${Je(o.length,"רישיון עסקי אחד","רישיונות עסקיים")}`:""} בקובץ. מה שכבר קיים יידרס בגרסה מהגיבוי.${f.secure&&L.upsertMember?" פרטי תשלום שהשתנו מאז הגיבוי יוחזרו לגרסה שבגיבוי, וחברי הקבוצה יראו הודעה על העדכון.":""}${d} להמשיך?`,"שחזור"))return;let p=0,u=0,h=0;for(const S of s)try{const T=Array.isArray(S.expenses)?S.expenses:[],w=Q(S);if(delete w.expenses,!w.id)continue;const k=Logic.normalizeTrip(w);if(!k){u++;continue}await L.saveTrip(k,{withServerFields:!0});const O=T.map(K=>Logic.normalizeExpense(K)).filter(Boolean),N=L.adminRestoreExpenses?await L.adminRestoreExpenses(k.id,O):null;if(N)h+=N.skipped||0;else for(const K of O)await L.saveExpense(k.id,K);i.has(k.id)&&await Qc(k),p++}catch(T){console.error(T),u++}let v=0;for(const S of o){if(!L.saveLicense)break;const T=Logic.normalizeLicense(S);if(!T){u++;continue}try{await L.saveLicense(T),v++}catch(w){console.error(w),u++}}o.length&&(Ye=null,Ft=!1,Y());const y=v?` · ${Je(v,"רישיון אחד","רישיונות")}`:"",b=h?` · ${Je(h,"הוצאה אחת פגומה לא שוחזרה","הוצאות פגומות לא שוחזרו")}`:"";E((u?`שוחזרו ${p+v}, נכשלו ${u}`:Je(p,"קבוצה אחת שוחזרה","קבוצות שוחזרו")+y+(b?"":" ✓"))+b)}),e.click()}async function td(){if(!L||L.kind==="rest"){E("מחיקה גורפת אינה זמינה בשרת המשותף");return}if(!await xe("מחיקת כל הנתונים",`כל ${Je(f.trips.length,"הקבוצה","הקבוצות")} וכל ההוצאות יימחקו לצמיתות מהקבוצה המשותפת. אין דרך לבטל. מומלץ לגבות תחילה. להמשיך?`,"מחיקת הכול",!0)||!await xe("אישור אחרון","זו פעולה בלתי הפיכה שמשפיעה על כל חברי הקבוצה. למחוק?","כן, למחוק הכול",!0))return;let a=0;for(const n of f.trips.slice())try{await L.deleteTripDeep(n.id),Me(n.id,null),a++}catch(s){console.error(s)}E(Je(a,"קבוצה אחת נמחקה","קבוצות נמחקו"))}function vr(){const e=Za()||{u:"",k:""},t=pe(`
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
      <button class="btn primary block" data-ref="connect">בדיקה וחיבור</button>`);m('[data-ref="connect"]',t.el).addEventListener("click",async()=>{const a={u:m("#sync-url",t.el).value.trim().replace(/\/+$/,""),k:m("#sync-key",t.el).value.trim()};if(!Qn.test(a.u)||!/^[A-Za-z0-9._-]{20,600}$/.test(a.k)){E("נא למלא כתובת Supabase (‎https://…supabase.co‎) ומפתח תקינים");return}const n=m('[data-ref="connect"]',t.el);n.disabled=!0,n.textContent="בודקים חיבור…";try{if(!await Fc(a))throw new Error("bad");es(a),t.close(),E("החיבור הצליח ✓ טוענים מחדש…"),setTimeout(()=>location.reload(),700)}catch(s){console.error(s),n.disabled=!1,n.textContent="בדיקה וחיבור",E("החיבור נכשל — בדקו את הכתובת ואת המפתח, וּודאו שקובץ ההקמה כבר הורץ בפרויקט")}})}function le(e,t){const a=(e.members||[]).find(n=>n.id===t);return a?a.name:"משתתף שהוסר"}function Ue(e,t){return(e.members||[]).find(a=>a.id===t)||{id:t,name:"משתתף שהוסר",color:"#8A8171",ghost:!0}}function $r(e,t){const a=(e.members||[]).slice(),n=new Set(a.map(s=>s.id));return Object.keys(t.net||{}).forEach(s=>{!n.has(s)&&t.net[s]!==0&&a.push(Ue(e,s))}),a}function Da(e){return e.photo&&/^[A-Za-z0-9_-]{1,100}$/.test(e.photo)?"/_blob/"+e.photo:e.photoData&&Ut(e.photoData)||null}function ei(e){const t=new Date(Logic.timeMs(e)),a=n=>String(n).padStart(2,"0");return`<span class="num">${t.getDate()}.${t.getMonth()+1}</span> בשעה <span class="num">${a(t.getHours())}:${a(t.getMinutes())}</span>`}function wr(e,t,a){return a?a===t.id?"דווח מהמכשיר של המשתתף עצמו":a==="mgr"?"דווח ממכשיר מנהל הקבוצה":"דווח מהמכשיר של "+le(e,a):""}const ad=(e,t,a)=>r(wr(e,t,a));function kr(e,t,a){const n=Logic.timeMs(t&&t.pay&&t.pay.updatedAt);if(!n)return"";const s=!!(a&&a.named);if(s&&Logic.payIsFirstSetup(t.pay,t.id))return"";const o=ad(e,t,t.pay.updatedBy);return`<small class="pay-stamp">${s?`פרטי התשלום של ${r(t.name)}`:"פרטי התשלום"} עודכנו ב־${ei(n)}${o?" · "+o:""}</small>`}Object.assign(jn,{check:'<path d="m5 12.5 4.5 4.5L19 7.5"/>',bell:'<path d="M6 16v-5a6 6 0 1 1 12 0v5l1.5 2h-15L6 16Z"/><path d="M10 20.5a2 2 0 0 0 4 0"/>',bellOff:'<path d="M6 16v-5a6 6 0 0 1 9.5-4.9M18 11v5l1.5 2H8"/><path d="M10 20.5a2 2 0 0 0 4 0"/><path d="M4 4l16 16"/>',chat:'<path d="M4 20l1.3-3.9A8 8 0 1 1 8 19.1L4 20Z"/>',finish:'<path d="M5 21V4"/><path d="M5 4h11l-2 4 2 4H5"/>',chart:'<path d="M4 20h16"/><path d="M7 16v-5M12 16V7M17 16v-8"/>',users:'<circle cx="9" cy="8" r="3.2"/><path d="M3.5 19a5.5 5.5 0 0 1 11 0"/><path d="M16 5.2a3 3 0 0 1 0 5.6M17.5 14.2A5 5 0 0 1 20.5 19"/>',spark:'<path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2V16h5v-.1c0-.8.4-1.5 1-2A6 6 0 0 0 12 3Z"/>',chevron:'<path d="m14.5 6-6 6 6 6"/>',card:'<rect x="3" y="5.5" width="18" height="13" rx="2.5"/><path d="M3 10h18M7 15h4"/>'});function nd(e){const t=Ns(e),a=de(e),n=t?(e.members||[]).find(M=>M.id===t)||Ue(e,t):null,s=ze(e).id==="trip"||e.base!=="ILS"||Object.keys(e.rates||{}).some(M=>M!==e.base),o=e.start?`${_e(e.start)}–${_e(e.end||e.start)}`:"",i=[e.dest?r(e.dest):"",o?`<span class="num">${r(o)}</span>`:""].filter(Boolean),d=`
      <nav class="trip-tools" aria-label="פעולות הקבוצה">
        <button type="button" class="${f.expensesReady&&!f.expenses.length&&!!e.closedAt?"on":""}" data-act="share-join">${he("users",20)}<span>הזמנה</span></button>
        ${s?`<button type="button" data-act="converter">${he("calculator",20)}<span>מחשבון</span></button>`:""}
        <button type="button" class="${ut()?"":"off"}" data-act="toggle-notif" aria-pressed="${ut()}">${he(ut()?"bell":"bellOff",20)}<span>התראות</span></button>
        ${a?`<button type="button" data-act="trip-settings">${he("gear",20)}<span>הגדרות</span></button>`:""}
      </nav>`,l=`
      <div class="trip-header">
        <button class="iconbtn" data-act="back-home" aria-label="חזרה לרשימת הקבוצות">${he("back")}</button>
        ${Et(e)?_n(Et(e),"trip-flag brand-logo"):`<span class="trip-flag" style="width:44px;height:44px;font-size:22px;" aria-hidden="true">${r(Ze(e))}</span>`}
        <div class="trip-titlebox">
          <h2 class="trip-name">${r(e.name)}</h2>
          <p class="trip-dest">${i.length?i.join(" · "):r(ze(e).nm)}</p>
        </div>
        <div class="trip-actions"></div>
      </div>`+d;if(!f.expensesReady)return l+'<div class="skeleton"><div class="skel-card"></div><div class="skel-card"></div></div>'+On();if(!n){const M=e.members||[];return l+`
        <div class="who-wrap rise">
          <div class="who-art" aria-hidden="true">👋</div>
          <h2 class="who-title">מי אתם בקבוצה?</h2>
          <p class="who-sub">בחרו את השם שלכם — ונפתח לכם את החשבון האישי.</p>
          ${M.length?`
            <div class="who-list">
              ${M.map(oe=>`
                <button class="who-card" data-act="who-pick" data-id="${r(oe.id)}">
                  ${Fe(oe,"lg",!0)}
                  <span class="who-name">${r(oe.name)}</span>
                  <span class="who-go" aria-hidden="true">←</span>
                </button>`).join("")}
            </div>`:""}
          <button class="join-skip" data-act="pick-me">אני לא ברשימה — הצטרפות כמשתתף חדש</button>
          ${mi(e)}
        </div>`}const p=Logic.memberBreakdown(e,f.expenses,n.id),u=Logic.computeBalances(e,f.expenses),h=Logic.transfersFor(e,f.expenses),v=h.filter(M=>M.to===n.id),y=h.filter(M=>M.from===n.id),b=v.reduce((M,oe)=>M+oe.cents,0),S=y.reduce((M,oe)=>M+oe.cents,0),T=Logic.toCents(Number(e.budget)||0,Logic.dec(e.base));let w="";if(T>0&&(a||Xe(e).sum==="on")){const M=u.grand,oe=Math.min(100,Math.round(M/T*100)),ot=M>T;w=`
        <div class="status-budget${ot?" over":""}">
          <div class="bar-track" aria-hidden="true"><div class="bar-fill" style="width:${Math.max(3,oe)}%"></div></div>
          <p class="hint">${ot?`חריגה של ${V(M-T,e.base)} מהתקציב (${V(T,e.base)})`:`תקציב: <span class="num">${oe}%</span> · נותרו ${V(T-M,e.base)}`}</p>
        </div>`}const k=p.net>0?"pos":p.net<0?"neg":"",O=p.net>0?"מגיע לכם בחזרה":p.net<0?"נשאר לכם לשלם":`${he("check",16)}<span>אתם מאוזנים</span>`,K=!p.rows.length&&!p.net?`
      <section class="big-card status is-empty rise" aria-label="המצב שלכם">
        <div class="big-lbl">שלום, ${r(n.name)} · המצב שלכם</div>
        <p class="status-empty">כאן תופיע היתרה שלכם — כמה מגיע לכם בחזרה, או כמה נשאר לכם לשלם.</p>
        ${w}
      </section>`:`
      <section class="big-card status rise" aria-label="המצב שלכם">
        <div class="big-lbl">שלום, ${r(n.name)} · המצב שלכם</div>
        <div class="big-num ${k}">${V(Math.abs(p.net),e.base)}</div>
        <div class="big-sub ${k}">${O}</div>
        <div class="status-pair">
          <div><span class="lbl">החלק שלי</span><b>${V(p.shareTotal,e.base)}</b></div>
          <div><span class="lbl">שילמתי בפועל</span><b>${V(p.paidTotal,e.base)}</b></div>
        </div>
        ${w}
      </section>`,U=Logic.splitsByHead(e),z=U&&!n.ghost?`
      <div class="heads-line rise" style="animation-delay:40ms">
        <span class="heads-line-txt"><span aria-hidden="true">👨‍👩‍👧</span> בחשבון שלכם: <b>${r(Pr(n))}</b><small class="heads-count">בחלוקה: ${r(Vt(e,n))}</small></span>
        <button class="btn sm" data-act="household" aria-label="עדכון מספר הנפשות בחשבון שלי">עדכון</button>
      </div>`:"",B=Logic.insights(e,f.expenses,n.id),ae=[];if(B.nextPay>0?ae.push({ic:"💡",tone:"act",txt:`שילמתם פחות מחלקכם. אם תשלמו על ההוצאה הבאה בסכום של כ־<b>${Se(B.nextPay,e.base)}</b> — תתאזנו בדיוק.`}):p.net>0?ae.push({ic:"🌟",tone:"good",echo:!0,txt:`שילמתם יותר מחלקכם — <b>${Se(p.net,e.base)}</b> אמורים לחזור אליכם. אפשר לתת לאחרים לשלם בפעמים הבאות.`}):p.rows.length&&ae.push({ic:"✓",tone:"good",echo:!0,txt:"אתם מאוזנים בדיוק — אין מה לסדר."}),B.of>1&&B.expenseCount&&(B.rank===1?ae.push({ic:"🏆",tone:"info",txt:`אתם מובילים בתשלומים בקבוצה — שילמתם <b>${Se(B.paid,e.base)}</b>${a||Xe(e).sum==="on"?` מתוך <b>${Se(B.grand,e.base)}</b>`:""}.`}):B.rank===B.of&&B.paid<B.fairPaid&&ae.push({ic:"🙋",tone:"act",txt:`אתם משלמים הכי מעט בקבוצה. החלק ההוגן שלכם הוא כ־<b>${Se(B.fairPaid,e.base)}</b> — כדאי לקחת את ההוצאה הבאה.`})),p.rows.length>=3){const M=Math.round(p.shareTotal/p.rows.length);ae.push({ic:"📊",tone:"info",txt:`בממוצע כל הוצאה עולה לכם <b>${Se(M,e.base)}</b>.`})}const C=ae.find(M=>!M.echo),x=C&&p.rows.length>=3?`
      <div class="tips trip-tip">
        ${[C].map(M=>`<div class="tip ${M.tone}"><span class="tip-ic">${he("spark",18)}</span><span>${M.txt}</span></div>`).join("")}
      </div>`:"",P=n.ghost?"":`<div class="rise" style="animation-delay:50ms">${ui(e,n,{owed:b})}</div>`,I=(M,oe)=>`
      <div class="debt-item">
      <div class="debt-row">
        <span class="debt-ic ${oe?"out":"in"}" aria-hidden="true">${he(oe?"out":"in",16)}</span>
        <span class="debt-txt">${oe?"לשלם ל":"לקבל מאת "}<b>${r(le(e,oe?M.to:M.from))}</b></span>
        <span class="debt-amt ${oe?"neg":"pos"}">${V(M.cents,e.base)}</span>
        <button class="paybtn" data-act="mark-paid" data-from="${r(M.from)}" data-to="${r(M.to)}" data-cents="${M.cents}"
          aria-label="${oe?`שילמתי — רישום תשלום ל${r(le(e,M.to))}`:`קיבלתי — רישום תשלום מאת ${r(le(e,M.from))}`}">${oe?"שילמתי":"קיבלתי"}</button>
      </div>
      ${oe?`<div class="pay-how-wrap">${fi(e,M.to,M.cents)}</div>`:""}
      </div>`,ie=v.length||y.length?`
      <h2 class="section-title">מי חייב למי${Logic.settleModeOf(e)==="min"?" <small>מקוזז — מינימום העברות</small>":""}</h2>
      <div class="debt-list">
        ${y.map(M=>I(M,!0)).join("")}
        ${v.map(M=>I(M,!1)).join("")}
      </div>`:`
      <div class="banner" style="margin-top:18px;">✓ אין חובות פתוחים מולכם</div>`,q=p.rows.slice().sort((M,oe)=>M.expense.date===oe.expense.date?0:M.expense.date<oe.expense.date?1:-1),ce=q.length?`
      <div class="acct-list">
        ${q.map(M=>{const oe=ve.find(Gn=>Gn.id===M.expense.category)||ve[ve.length-1],ot=M.expense.delReq&&M.expense.delReq.by;return`
            <button class="acct-row tap ${ot?"pending-del":""}" data-act="edit-exp" data-id="${r(M.expense.id)}">
              <span class="acct-ic" aria-hidden="true">${ot?"⏳":oe.ic}</span>
              <span class="acct-mid">
                <b>${r(M.expense.note||oe.nm)}</b>
                <small>${r(_e(M.expense.date))} · ${M.isPayer?"שילמתי "+r(Se(M.total,e.base)):"שולם על ידי "+r(le(e,M.expense.payerId))}</small>
              </span>
              <span class="acct-amt">${V(M.share,e.base)}</span>
            </button>`}).join("")}
      </div>`:`
      <div class="empty">
        <div class="art" aria-hidden="true">🧾</div>
        <h3>עדיין אין הוצאות שלכם</h3>
        <p>מוסיפים הוצאה — והחשבון מתעדכן לבד.</p>
      </div>`,Z=p.payments.length?`
      <h2 class="section-title">תשלומים שנרשמו</h2>
      <div class="acct-list">
        ${p.payments.slice().reverse().map(M=>`
          <div class="acct-row">
            <span class="acct-ic" aria-hidden="true">✓</span>
            <span class="acct-mid">
              <b>${M.isPayer?"שילמתי ל"+r(le(e,(M.expense.parts||[])[0])):"התקבל מאת "+r(le(e,M.expense.payerId))}</b>
              <small>${r(_e(M.expense.date))}</small>
            </span>
            <span class="acct-amt">${V(M.isPayer?M.total:M.share,e.base)}</span>
            ${a||M.expense.payerId===n.id?`<button class="xbtn" data-act="del-payment" data-id="${r(M.expense.id)}" aria-label="מחיקת רישום התשלום ${M.isPayer?"ל"+r(le(e,(M.expense.parts||[])[0])):"מאת "+r(le(e,M.expense.payerId))}">✕</button>`:""}
          </div>`).join("")}
      </div>`:"",ue=Xe(e),me=u,ne=Ho(f.expenses),ye=(a||ue.exp==="all")&&f.expenses.length>0,g=ye&&(f.tab==="all"||f.tab==="bal"),_=(M,oe,ot)=>`<button type="button" class="tab" role="tab" id="exp-tab-${M}" data-act="tab" data-id="${M}"
          aria-selected="${ot}" aria-controls="exp-panel" tabindex="${ot?0:-1}">${oe}</button>`,$=ye?`
      <h2 class="section-title">ההוצאות</h2>
      <div class="tabs exp-tabs" role="tablist" aria-label="אילו הוצאות להציג">
        ${_("mine","שלי",!g)}
        ${_("all","של כל הקבוצה",g)}
      </div>
      <div id="exp-panel" role="tabpanel" aria-labelledby="exp-tab-${g?"all":"mine"}">
        ${g?od(e):ce}
      </div>`:`
      <h2 class="section-title">ההוצאות שלי</h2>
      ${ce}`,H=a||ue.bal==="all"?`
      <h2 class="section-title">תמונת הקבוצה${a?" <small>למנהל בלבד</small>":""}</h2>
      <div class="mgr-card">
        <div class="mgr-total">
          <span>סך ההוצאות</span>
          <b>${V(me.grand,e.base)}</b>
        </div>
        ${$r(e,me).map(M=>{const oe=me.net[M.id]||0;return`
            <button class="mgr-row" data-act="member-detail" data-id="${r(M.id)}">
              ${Fe(M,"",!0)}
              <span class="mgr-name">${r(M.name)}${M.id===n.id?" · אני":""}${U&&!M.ghost?` <small class="mgr-heads">· ${r(Vt(e,M))}</small>`:""}</span>
              <span class="mgr-amt ${oe>0?"pos":oe<0?"neg":""}">${oe===0?"מאוזן":(oe>0?"לקבל ":"לשלם ")+V(Math.abs(oe),e.base)}</span>
            </button>`}).join("")}
      </div>
      `:"",R=M=>`
        <${M.href?"a":"button"} class="acct-row tap${M.cls?" "+M.cls:""}"${M.href?` href="${r(M.href)}" target="_blank" rel="noopener"`:' type="button"'}${M.attrs||""}>
          <span class="acct-ic">${he(M.ic,18)}</span>
          <span class="acct-mid"><b>${M.nm}</b>${M.sub?`<small>${M.sub}</small>`:""}</span>
          <span class="end-go">${he("chevron",18)}</span>
        </${M.href?"a":"button"}>`,G=[];(a||ue.sum==="on")&&G.push({ic:"chart",nm:"הסיכום המלא של הקבוצה",sub:"סכומים, קטגוריות והקצב היומי",attrs:' data-act="full-summary"'}),G.push({ic:"chat",nm:"שליחת החשבון שלי בוואטסאפ",sub:"היתרה, החלק שלי וההעברות הפתוחות",cls:"wa-row",href:Nt(Vi(e,n.id)),attrs:' data-ref="mywa"'}),a&&f.expenses.length&&G.push({ic:"finish",nm:"סגירה והתחשבנות סופית",sub:"הודעה אישית לכל מי שנותר לשלם, ואז ארכוב",attrs:' data-act="close-trip"'});const te=`
      <div class="acct-list trip-end" role="group" aria-label="סיכום ושיתוף">
        ${G.map(R).join("")}
      </div>`,ee=da(e),Ae=vs(f.expenses),X=ee.until&&!ee.expired&&ee.until-Date.now()<2*hn,Oe=ee.maxExp-Ae,He=ee.maxExp!==1/0&&Oe<=0,A=ee.expired?He?`תוקף המסלול הסתיים והקבוצה הגיעה למכסה החינמית (${ee.maxExp} הוצאות) — הוספת הוצאות נעצרה (כל השאר פתוח).`:`תוקף המסלול הסתיים — הקבוצה במסלול החינמי: ${Ae} מתוך ${ee.maxExp} הוצאות.`:He?"הקבוצה הגיעה למגבלת ההוצאות של המסלול.":ee.maxExp!==1/0&&Oe<=3?"נותרו "+Je(Oe,"הוצאה אחת","הוצאות")+" במסלול הנוכחי.":X?`${ee.isLicense?"הרישיון העסקי":"המסלול"} בתוקף עד ${Bt(ee)}.`:"",D=a&&A?`
      <div class="identity-banner">
        <span>${r(A)}</span>
        <button class="btn sm primary" data-act="plans">${ee.expired||X?"חידוש":"שדרוג"}</button>
      </div>`:"",be=e.closedAt?`
      <div class="banner" role="status" style="margin-top:12px;">🏁 הקבוצה נסגרה להתחשבנות ב־<span class="num">${r(_e($s(e.closedAt)))}</span> — הנתונים שמורים במלואם.${a?"":" הוצאה חדשה — דרך מנהל הקבוצה."}</div>
      ${a?'<button class="btn block" data-act="final-summary" style="margin-top:10px;"><span aria-hidden="true">📁</span>&nbsp; הסיכום הסופי המלא</button>':""}`:"",Ee=!f.expenses.length&&!e.closedAt,yt=a&&ee.maxExp!==1/0?`
        <button class="plan-chip" data-act="plans" aria-label="מסלול ${r(ee.nm)} · ${ft(Ae)}/${ft(ee.maxExp)} הוצאות — פרטים על המסלולים">
          מסלול ${r(ee.nm)} · <span class="num">${ft(Ae)}/${ft(ee.maxExp)}</span> הוצאות</button>`:"",Vn=Ee?`
      <div class="empty trip-empty rise">
        <div class="art" aria-hidden="true">${he("users",34)}</div>
        <h3>הקבוצה מוכנה</h3>
        <p>שלחו את הקישור לחברים, ורשמו את ההוצאה הראשונה.</p>
        <div class="empty-actions">
          <button class="btn wa block" data-act="share-join">${he("chat",18)} הזמנת חברים</button>
          <button class="btn ghost block" data-act="add-exp">${he("plus",18)} רישום הוצאה</button>
        </div>
        ${yt}
      </div>`:"",Wa=a&&ne.length?`
      <div class="identity-banner warn pend-banner" role="status">
        <span>⏳ ${Re(ne.length,"בקשת מחיקה אחת ממתינה","בקשות מחיקה ממתינות")} לאישורכם</span>
        <button class="btn sm" data-act="show-pending">לבקשות</button>
      </div>`:"",gt=wc(e)?Is(e)?`
      <div class="identity-banner mgr-key-banner">
        <span>במכשיר הזה הניהול עוד לא נפתח. מנהלי הקבוצה נכנסים לניהול בסיסמת המנהל.</span>
        <button class="btn sm" data-act="mgr-login">כניסה בסיסמה</button>
      </div>`:`
      <div class="banner mgr-key-banner" role="note">במכשיר הזה הניהול עוד לא נפתח. כדי לנהל גם מכאן — קובעים סיסמת מנהל בהגדרות הקבוצה, במכשיר שפתח אותה, ונכנסים בה כאן. אין גישה למכשיר ההוא? מפעיל השירות יכול לקבוע לקבוצה סיסמה זמנית. <button type="button" class="linklike" data-help-open="article" data-help-id="lost-manager-access">איך משחזרים ניהול</button></div>`:"";return l+On()+gt+bd(e,n)+yd(e,n)+md(e,n)+Wa+D+be+(Ee?Vn:K)+z+P+(Ee?"":ie+x+$)+(Ee?"":H)+Z+(Ee?"":te+(e.closedAt&&!a?"":'<div class="actionbar"><button class="btn primary" data-act="add-exp">✚ &nbsp;הוצאה חדשה</button></div>'))}function sd(e,t){const a=ve.find(l=>l.id===t.category)||ve[ve.length-1],n=Logic.partsOf(e,t).length,s=Da(t),o=Logic.expenseBaseCents(e,t),i=t.currency!==e.base,c=i&&!(e.rates&&Number(e.rates[t.currency])>0),d=!!(t.delReq&&t.delReq.by);return`
      <button class="exp-row ${d?"pending-del":""}" data-act="edit-exp" data-id="${r(t.id)}">
        <span class="exp-cat" aria-hidden="true">${d?"⏳":t.hidden?"🔒":a.ic}</span>
        <span class="exp-mid">
          <p class="exp-title">${t.hidden?"פרטים מוסתרים":r(t.note||a.nm)}</p>
          <p class="exp-meta">שולם על ידי ${r(le(e,t.payerId))} · ${Logic.wholeGroupAt(e,t)?"כולם":Re(n,"משתתף אחד","משתתפים")}${c?' · <b style="color:var(--bad)">חסר שער ⚠️</b>':""}${d?' · <b style="color:var(--bad)">ממתין לאישור מחיקה</b>':""}</p>
        </span>
        ${s?`<img class="exp-thumb" src="${r(s)}" alt="קבלה" loading="lazy">`:""}
        <span class="exp-amts">
          <div class="exp-amt">${Oc(t.amount,t.currency)}</div>
          ${i?`<div class="exp-amt-base">${V(o,e.base)}</div>`:""}
        </span>
      </button>`}function id(e){if(de(e)||Xe(e).exp==="all")return Logic.onlyExpenses(f.expenses);const t=se(e.id);return t?Logic.onlyExpenses(f.expenses).filter(a=>a.payerId===t||Logic.partsOf(e,a).indexOf(t)>=0):[]}function od(e){if(!f.expensesReady)return f.syncError?'<div class="empty"><div class="art" aria-hidden="true">📡</div><h3>לא הצלחנו לטעון את ההוצאות</h3><p>בדקו את החיבור לאינטרנט ונסו לרענן את הדף.</p></div>':'<div class="skeleton"><div class="skel-card"></div><div class="skel-card"></div></div>';const t=id(e);if(!t.length)return f.expenses.length?'<div class="empty"><div class="art" aria-hidden="true">🔒</div><h3>אין הוצאות שנוגעות אליכם</h3><p>מוצגות כאן רק הוצאות ששילמתם עליהן או שאתם חלק מהן.</p></div>':`
        <div class="empty">
          <div class="art" aria-hidden="true">🧾</div>
          <h3>עדיין אין הוצאות</h3>
          <p>בכל תשלום — מקלידים סכום או מצלמים קבלה,<br>בוחרים מי שילם ועל מי זה מתחלק. זהו.</p>
          <button class="btn primary" data-act="add-exp">✚ &nbsp;ההוצאה הראשונה</button>
        </div>`;let a="";if(t.length>=4||f.filter.cat||f.filter.payer){const c=ve.filter(l=>l.id===f.filter.cat||t.some(p=>(p.category||"other")===l.id)),d=(e.members||[]).filter(l=>l.id===f.filter.payer||t.some(p=>p.payerId===l.id));a=`
        <div class="filterbar" role="group" aria-label="סינון הוצאות">
          <button class="fchip" aria-pressed="${!f.filter.cat&&!f.filter.payer}" data-act="filter-clear">הכול</button>
          ${c.map(l=>`<button class="fchip" aria-pressed="${f.filter.cat===l.id}" data-act="filter-cat" data-id="${l.id}"><span aria-hidden="true">${l.ic}</span> ${l.nm}</button>`).join("")}
          ${d.map(l=>`<button class="fchip" aria-pressed="${f.filter.payer===l.id}" data-act="filter-payer" data-id="${r(l.id)}"><span class="dot" style="width:9px;height:9px;border-radius:50%;background:${St(l)};display:inline-block;"></span> ${r(l.name)}</button>`).join("")}
        </div>`}const n=t.filter(c=>(!f.filter.cat||(c.category||"other")===f.filter.cat)&&(!f.filter.payer||c.payerId===f.filter.payer));if(!n.length)return a+'<div class="empty"><div class="art" aria-hidden="true">🔍</div><h3>אין תוצאות לסינון הזה</h3><p>נסו סינון אחר, או חזרו אל ״הכול״.</p></div>';const s=[];n.forEach(c=>{const d=s[s.length-1];!d||d.date!==c.date?s.push({date:c.date,items:[c]}):d.items.push(c)});const o=n.length!==t.length,i=o?n.reduce((c,d)=>c+Logic.expenseBaseCents(e,d),0):0;return a+(o?`<p class="hint" style="margin:0 4px 10px;" role="status">בתצוגה: ${Re(n.length,"הוצאה אחת","הוצאות")} · סך הכול ${V(i,e.base)}</p>`:"")+s.map((c,d)=>`
        <div class="day-head rise" style="animation-delay:${Math.min(d,6)*50}ms"><span>${r(Xo(c.date))}</span></div>
        <div class="exp-group rise" style="animation-delay:${Math.min(d,6)*50}ms">${c.items.map(l=>sd(e,l)).join("")}</div>`).join("")}function xr(e,t){if(!f.expensesReady)return'<div class="skeleton"><div class="skel-card"></div></div>';if(!de(e)&&Xe(e).sum!=="on"){const w=se(e.id);if(!w)return'<div class="empty"><div class="art" aria-hidden="true">👤</div><h3>מי אתם בקבוצה?</h3><p>בחירה חד־פעמית תציג לכם סיכום אישי.</p><button class="btn primary" data-act="pick-me">בחירת השם שלי</button></div>';const k=Logic.memberBreakdown(e,f.expenses,w);if(!k.rows.length)return'<div class="empty"><div class="art" aria-hidden="true">📊</div><h3>אין עדיין הוצאות שנוגעות אליכם</h3><p>ברגע שתשתתפו בהוצאה — הסיכום יופיע כאן.</p></div>';const O=k.rows.map(U=>U.expense),N=Logic.categoryTotals(e,O),K=N.length?N[0].cents:1;return`
        <div class="tile-grid">
          <div class="tile"><div class="lbl">החלק שלי</div><div class="val">${V(k.shareTotal,e.base)}</div></div>
          <div class="tile"><div class="lbl">שילמתי בפועל</div><div class="val">${V(k.paidTotal,e.base)}</div></div>
          <div class="tile"><div class="lbl">הוצאות שלי</div><div class="val"><span class="num">${k.rows.length}</span></div></div>
          <div class="tile"><div class="lbl">היתרה שלי</div><div class="val" style="font-size:16px;color:${k.net>0?"var(--good)":k.net<0?"var(--bad)":"var(--ink)"};">${k.net>0?"לקבל "+V(k.net,e.base):k.net<0?"לשלם "+V(-k.net,e.base):"מאוזן"}</div></div>
        </div>
        <h2 class="section-title">הקטגוריות שלי</h2>
        ${N.map(U=>{const z=ve.find(ae=>ae.id===U.cat)||ve[ve.length-1],B=k.rows.filter(ae=>(ae.expense.category||"other")===U.cat).reduce((ae,C)=>ae+C.share,0);return`
            <div class="bar-row">
              <div class="bar-label"><span aria-hidden="true">${z.ic}</span> ${r(z.nm)}</div>
              <div class="bar-val">${V(B,e.base)}</div>
              <div class="bar-track"><div class="bar-fill" style="width:${Math.max(3,Math.round(U.cents/K*100))}%"></div></div>
            </div>`}).join("")}
        <div class="banner" style="margin-top:18px;">🔒 הסיכום הכללי של הקבוצה גלוי למנהל בלבד.</div>`}if(!f.expenses.length)return'<div class="empty"><div class="art" aria-hidden="true">📊</div><h3>הסיכום יופיע כאן</h3><p>תמונת מצב לפי קטגוריות ומשלמים — אחרי ההוצאה הראשונה.</p></div>';const a=f.expenses.map(w=>w.date).filter(Boolean).sort();let n=1;e.start&&e.end?n=Math.max(1,Math.round((new Date(e.end)-new Date(e.start))/864e5)+1):a.length&&(n=Math.max(1,Math.round((new Date(a[a.length-1])-new Date(a[0]))/864e5)+1));const s=Logic.onlyExpenses(f.expenses).reduce((w,k)=>Math.max(w,Logic.expenseBaseCents(e,k)),0),o=`
      <div class="tile-grid">
        <div class="tile"><div class="lbl">סך הכול</div><div class="val">${V(t.grand,e.base)}</div></div>
        <div class="tile"><div class="lbl">ממוצע ליום</div><div class="val">${V(Math.round(t.grand/n),e.base)}</div></div>
        <div class="tile"><div class="lbl">מספר הוצאות</div><div class="val"><span class="num">${mn(f.expenses)}</span></div></div>
        <div class="tile"><div class="lbl">ההוצאה הגדולה</div><div class="val">${V(s,e.base)}</div></div>
      </div>`,i=Logic.onlyExpenses(f.expenses),c=Logic.categoryTotals(e,i),d=c.length?c[0].cents:1,l=c.map(w=>{const k=ve.find(O=>O.id===w.cat)||ve[ve.length-1];return`
        <div class="bar-row">
          <div class="bar-label"><span aria-hidden="true">${k.ic}</span> ${r(k.nm)} <span class="count">· ${w.count}</span></div>
          <div class="bar-val">${V(w.cents,e.base)}</div>
          <div class="bar-track"><div class="bar-fill" style="width:${Math.max(3,Math.round(w.cents/d*100))}%"></div></div>
        </div>`}).join(""),p=Logic.payerTotals(e,i),u=p.length?p[0].cents:1,h=p.map(w=>{const k=Ue(e,w.id);return`
        <div class="bar-row">
          <div class="bar-label">${Fe(k)} ${r(k.name)} <span class="count">· ${Re(w.count,"תשלום אחד","תשלומים")}</span></div>
          <div class="bar-val">${V(w.cents,e.base)}</div>
          <div class="bar-track"><div class="bar-fill" style="width:${Math.max(3,Math.round(w.cents/u*100))}%"></div></div>
        </div>`}).join(""),v=Logic.dayTotals(e,i);let y="";if(v.length>=2){const w=Math.max.apply(null,v.map(O=>O.cents)),k="הוצאות לפי יום: "+v.map(O=>_e(O.date)+" "+Se(O.cents,e.base)).join(", ");y=`
        <h2 class="section-title">הקצב היומי</h2>
        <div class="daychart" role="img" aria-label="${r(k)}">
          ${v.map(O=>{const N=Math.max(6,Math.round(O.cents/w*84)),K=O.cents===w;return`
            <div class="daycol" title="${r(Xo(O.date))}: ${r(Se(O.cents,e.base))}">
              ${K?`<div class="val"><span class="num">${r(Se(O.cents,e.base))}</span></div>`:""}
              <div class="bar" style="height:${N}px"></div>
              <div class="lbl"><span class="num">${r(_e(O.date))}</span></div>
            </div>`}).join("")}
        </div>`}const b=f.expenses.filter(w=>Da(w)),S=b.length?`
      <h2 class="section-title">הקבלות <small>${Re(b.length,"קבלה אחת","קבלות")}</small></h2>
      <div class="gallery">
        ${b.map(w=>{const k=ve.find(N=>N.id===w.category)||ve[ve.length-1],O=`הגדלת הקבלה: ${w.note||k.nm}, ${_e(w.date)}`;return`<button class="gal-btn" aria-label="${r(O)}" data-full="${r(Da(w))}">
            <img src="${r(Da(w))}" alt="" loading="lazy">
          </button>`}).join("")}
      </div>`:"",T=de(e)?`<h2 class="section-title">מי שילם בפועל</h2>${h}`:'<div class="banner" style="margin-top:18px;">🔒 פילוח התשלומים לפי משתתף גלוי למנהל הקבוצה בלבד.</div>';return`
      ${o}
      ${y}
      <h2 class="section-title">לפי קטגוריה</h2>
      ${l}
      ${T}
      ${S}`}function Er(e){const t=e.base,a=ya.map(b=>b.c).filter(b=>b!==t);let s=Object.keys(e.rates||{}).filter(b=>b!==t)[0]||a[0]||t,o="",i=!1;const d=pe(`
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
          ${[["7","8","9"],["4","5","6"],["1","2","3"],[".","0","back"]].map(b=>b.map(S=>S==="back"?'<button class="calc-key fn" data-key="back" aria-label="מחיקת ספרה">⌫</button>':`<button class="calc-key" data-key="${S}">${S==="."?".":`<span class="num">${S}</span>`}</button>`).join("")).join("")}
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
    `),l=d.el;function p(b){if(b===t)return 1;const S=e.rates&&Number(e.rates[b]);return S>0?S:Ha(b,t)}function u(b){return b===t?"same":e.rates&&Number(e.rates[b])>0?"trip":Vs(b,t)?"live":"estimate"}function h(){const b=p(s),S=nt(o);m('[data-ref="curlbl"]',l).textContent=i?t:s,m('[data-ref="outcur"]',l).textContent=i?s:t,m('[data-ref="typed"]',l).innerHTML=`<span class="num">${r(o||"0")}</span>`;const T=i?s:t,w=i?b?S/b:0:S*b;m('[data-ref="out"]',l).innerHTML=V(Logic.toCents(w,Logic.dec(T)),T),m('[data-ref="rate"]',l).innerHTML=`1 <span class="num">${r(s)}</span> = ${V(Logic.toCents(b,Logic.dec(t)),t)}`;const k=u(s),O=m('[data-ref="src"]',l);k==="trip"?O.textContent="לפי השער שהוגדר בקבוצה — ניתן לעדכון בהגדרות הקבוצה ⚙️":k==="live"?O.textContent="שער חי"+(Zo()?", עודכן ב־"+Zo():"")+" — צמוד לשער היציג.":O.textContent=ke?"שער משוער — לא הצלחנו למשוך שער חי כרגע.":"שער משוער. בגרסת הווב נמשך שער חי אוטומטית."}function v(b){b==="back"?o=o.slice(0,-1):b==="."?o.includes(".")||(o=(o||"0")+"."):o==="0"?o=b:o.replace(".","").length<9&&(o+=b),h()}J("[data-key]",l).forEach(b=>b.addEventListener("click",()=>v(b.dataset.key))),m('[data-ref="clear"]',l).addEventListener("click",()=>{o="",h()}),m('[data-ref="flip"]',l).addEventListener("click",()=>{i=!i,h()});const y=m('[data-ref="curselect"]',l);y.innerHTML=a.map(b=>`<option value="${b}" ${b===s?"selected":""}>${r(at(b).n)} (${b})</option>`).join(""),m('[data-ref="curbtn"]',l).addEventListener("click",()=>{y.hidden=!y.hidden,y.hidden||y.focus()}),y.addEventListener("change",()=>{s=y.value,y.hidden=!0,h(),Ys(t).then(()=>h())}),m('[data-ref="useit"]',l).addEventListener("click",()=>{const b=nt(o);if(!(b>0)){E("נא להקליד סכום");return}const S=p(s),T=i?S?b/S:0:b;d.close(),Ya(null,{amount:Math.round(T*100)/100,currency:s})}),l.addEventListener("keydown",b=>{b.target.tagName!=="SELECT"&&(/^[0-9]$/.test(b.key)?(b.preventDefault(),v(b.key)):b.key==="."||b.key===","?(b.preventDefault(),v(".")):b.key==="Backspace"&&(b.preventDefault(),v("back")))}),h(),Ys(t).then(()=>h())}function rd(e,t){const a=Dt(t),n=pe(`
      <div class="sheet-head">
        ${Fe(t,"lg",!0)}
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
      ${t.id===e.managerId?mi(e,"מנהלי הקבוצה? כניסה בסיסמת המנהל במקום הטלפון"):""}
      <button class="join-skip" data-ref="back">חזרה לרשימת השמות</button>
    `),s=m('[data-act="mgr-login"]',n.el);s&&s.addEventListener("click",c=>{c.stopPropagation(),n.close(),Qr(e)});const o=m("#wc-phone",n.el),i=m('[data-ref="wcerr"]',n.el);setTimeout(()=>o.focus(),250),m('[data-ref="back"]',n.el).addEventListener("click",()=>n.close()),m('[data-ref="go"]',n.el).addEventListener("click",async()=>{const c=o.value.trim();if(i.textContent="",!Logic.validatePhone(c)){i.textContent="מספר הטלפון אינו תקין — למשל 050-0000000";return}const d=m('[data-ref="go"]',n.el);d.disabled=!0,d.textContent="בודקים…";try{if(a){if(!rn(t,c)){i.textContent="המספר אינו תואם לשם שנבחר. אם זה המספר שלכם — פנו למנהל הקבוצה.",d.disabled=!1,d.textContent="כניסה לחשבון שלי";return}await Oa(e,t.id)}else{const l=(e.members||[]).find(p=>p.id!==t.id&&rn(p,c));if(l){i.textContent=`המספר הזה כבר רשום אצל ${l.name}.`,d.disabled=!1,d.textContent="כניסה לחשבון שלי";return}await st(e,{id:t.id,phone:Logic.normalizePhone(c)},{self:!0})}Ca(t.name,Logic.normalizePhone(c)),Me(e.id,t.id),n.close(),E(`שלום ${t.name}, החשבון שלכם פתוח ✓`),Y()}catch(l){console.error(l),d.disabled=!1,d.textContent="כניסה לחשבון שלי",i.textContent="הפעולה נכשלה — נסו שוב"}})}const ti=[{id:"from-now",nm:"רק מעכשיו",hint:"תשתתפו רק בהוצאות שיירשמו מעכשיו."},{id:"all",nm:"גם על מה שכבר שולם",hint:"תצורפו גם להוצאות המשותפות שכבר נרשמו, והחשבון יתעדכן בהתאם. הוצאה פרטית או של חלק מהחברים לא תתחלק עליכם."}],Lr=e=>ti.find(t=>t.id===e)||ti[0],_r=e=>!!(e&&e.stats&&e.stats.count>0&&!e.closedAt);async function Pn(e,t,a){const n=[].concat(t||[]),s=new Set;let o=0;for(let i=0;i<3&&!o;i++){let c,d=e;try{c=L.getExpensesOnce?await L.getExpensesOnce(e.id):f.expenses,L.getTripOnce&&(d=await L.getTripOnce(e.id)||e)}catch(p){console.error("retro: read failed",p),o++;break}const l=Logic.retroTargets(d,c||[],n,a);if(!l.length)break;for(const p of l)try{const u=L.getExpenseOnce?await L.getExpenseOnce(e.id,p.expense.id):p.expense;if(!u)continue;const h=Logic.retroTargets(d,[u],n,a)[0];if(!h)continue;await L.saveExpense(e.id,Object.assign({},u,{parts:h.parts})),s.add(u.id)}catch(u){o++,console.error("retro: save failed",u)}}return{added:s.size,failed:o}}const ua=[{id:"direct",nm:"ישירות למי ששילם",hint:"כל חוב עובר ישירות למי ששילם עליו — הכי שקוף."},{id:"min",nm:"קיזוז — מינימום העברות",hint:"החובות מתקזזים, ומספר ההעברות קטן ככל האפשר. היתרה של כל חשבון לא משתנה."}],qt=e=>e===1?"להוצאה אחת שכבר נרשמה":`ל־${e} הוצאות שכבר נרשמו`;async function Sr(e,t,a){const n=Date.now();if(t.joinFrom=n,await st(e,t,{self:!0}),!a)return{added:0,failed:0};const s=await Pn(e,t.id,n);return s.failed||await st(e,{id:t.id,joinFrom:0}),s}const Nn=e=>e&&e.failed?" · חלק מההוצאות הקודמות לא צורפו — מנהל הקבוצה יוכל להשלים":"";async function jr(e,t,a,n){await st(e,Object.assign({id:t.id},a),{self:!0});const s=Number(t.joinFrom)||0;if(!n||!(s>0))return{added:0,failed:0};const o=await Pn(e,t.id,s);return o.failed||await st(e,{id:t.id,joinFrom:0}),o}const ld={"from-now":"החשבונות שתוסיפו עכשיו ישתתפו רק בהוצאות שיירשמו מעכשיו.",all:"החשבונות שתוסיפו עכשיו יצורפו גם להוצאות המשותפות שכבר נרשמו, והמאזן של כולם יתעדכן."},Tr=(e,t)=>t?ld[Lr(e).id]:Lr(e).hint;function ai(e,t,a){return`
      <div class="field">
        <label id="scope-lbl">${a?"מי שמוסיפים עכשיו — מה עם ההוצאות שכבר נרשמו?":"מה עם ההוצאות שכבר נרשמו בקבוצה?"}</label>
        <div class="chip-row" role="group" aria-labelledby="scope-lbl">
          ${ti.map(n=>`<button type="button" class="chip" data-scope="${n.id}" ${t?`data-act="${t}"`:""} aria-pressed="${e===n.id}">${r(n.nm)}</button>`).join("")}
        </div>
        <p class="hint" data-ref="scopehint" ${a?'data-mgr="1"':""}>${r(Tr(e,a))}</p>
      </div>`}function Ar(e,t){J("[data-scope]",e).forEach(n=>n.setAttribute("aria-pressed",String(n.dataset.scope===t)));const a=m('[data-ref="scopehint"]',e);a&&(a.textContent=Tr(t,!!a.dataset.mgr))}function Cr(e,t){J("[data-scope]",e).forEach(a=>a.addEventListener("click",()=>{t.scope=a.dataset.scope,Ar(e,t.scope)}))}const ni=12,Or=[{v:0,nm:"חינם",txt:"ילדים אינם משלמים בקבוצה הזו."},{v:.25,nm:"רבע מחיר",txt:"ילדים נספרים כרבע ממבוגר."},{v:.5,nm:"חצי מחיר",txt:"ילדים נספרים כחצי ממבוגר."},{v:.75,nm:"שלושה רבעים",txt:"ילדים נספרים כשלושה רבעים ממבוגר."},{v:1,nm:"מחיר מלא",txt:"ילדים משלמים כמו מבוגרים."}],cd=["mangal","family"],Mr=(e,t)=>{const a=Math.trunc(Number(e));return isFinite(a)?Math.max(t,Math.min(ni,a)):t},Jt=e=>Mr(e&&e.units!=null?e.units:1,1),Yt=e=>Mr(e&&e.kids!=null?e.kids:0,0);function Ra(e){const t=Logic.kidRateOf(e),a=Or.find(n=>n.v===t);return a?a.txt:`ילדים נספרים כ־${Math.round(t*100)}% ממבוגר.`}function Pr(e){const t=Jt(e),a=Yt(e),n=t===1?"מבוגר אחד":t+" מבוגרים";return a?n+" · "+(a===1?"ילד אחד":a+" ילדים"):n}function Vt(e,t){const a=Math.round(Logic.headsOf(e,t)*100)/100;return a===1?"ראש אחד":a+" ראשים"}function Nr(e,t,a,n,s,o,i){const c=o?`data-act="${o}"`:"",d=i?`${t} בחשבון של ${i}`:t;return`
      <div class="stepper" role="group" aria-label="${r(d)}" data-stepper="${r(e)}" data-min="${n}" data-max="${s}">
        <span class="stepper-lbl" aria-hidden="true">${r(t)}</span>
        <span class="stepper-ctl" dir="ltr">
          <button type="button" class="step-btn" data-step="-1" ${c} aria-label="${r(d)} — אחד פחות" aria-disabled="${a<=n}">−</button>
          <output class="step-val num" aria-live="polite">${a}</output>
          <button type="button" class="step-btn" data-step="1" ${c} aria-label="${r(d)} — עוד אחד" aria-disabled="${a>=s}">+</button>
        </span>
      </div>`}function Hr(e,t){const a=e.closest("[data-stepper]"),n=Number(a.dataset.min),s=Number(a.dataset.max),o=Math.max(n,Math.min(s,(Number(t)||0)+Number(e.dataset.step)));return o===t?null:(m(".step-val",a).textContent=String(o),J("[data-step]",a).forEach(i=>i.setAttribute("aria-disabled",String(Number(i.dataset.step)>0?o>=s:o<=n))),o)}function Ba(e,t,a){J("[data-stepper] [data-step]",e).forEach(n=>n.addEventListener("click",()=>{const s=n.closest("[data-stepper]").dataset.stepper,o=Hr(n,t[s]);o!=null&&(t[s]=o,a&&a(s,o))}))}function fa(e,t,a,n){return`
      <div class="heads-pair">
        ${Nr("units","מבוגרים",t.units,1,ni,a,n)}
        ${Nr("kids","ילדים",t.kids,0,ni,a,n)}
      </div>`}function Ir(e,t,a){if(!t||!(de(e)||t.id===se(e.id))){E("את מספר הנפשות מעדכנים המשתתף עצמו או מנהל הקבוצה");return}const n={units:Jt(t),kids:Yt(t)},s=()=>Vt(e,n),o=pe(`
      <div class="sheet-head">
        ${Fe(t,"lg",!0)}
        <h2 class="sheet-title">כמה ${t.id===se(e.id)?"אתם":"בחשבון של "+r(t.name)}?</h2>
      </div>
      <p class="hint" style="margin:-6px 0 14px;">הקבוצה מתחלקת לפי ראש. בני זוג וילדים נרשמים יחד, בחשבון אחד. ${r(Ra(e))}${f.expensesReady&&Logic.onlyExpenses(f.expenses).length?" השינוי יחול גם על ההוצאות שכבר נרשמו.":""}</p>
      ${fa(e,n)}
      <p class="heads-sum" data-ref="hsum" role="status">בחשבון: ${r(s())}</p>
      <div class="sheet-foot">
        <button class="btn primary block" data-ref="save">שמירה</button>
      </div>
    `);Ba(o.el,n,()=>{m('[data-ref="hsum"]',o.el).textContent="בחשבון: "+s()}),m('[data-ref="save"]',o.el).addEventListener("click",async()=>{const i=m('[data-ref="save"]',o.el);i.disabled=!0,i.textContent="שומרים…";try{await st(e,{id:t.id,units:n.units,kids:n.kids}),Ia(),E("מספר הנפשות עודכן ✓"),Y(),a&&a()}catch(c){console.error(c),i.disabled=!1,i.textContent="שמירה",E(zt(c))}})}async function dd(e,t,a){if(await xe(a===1?"צירוף להוצאה שכבר נרשמה":"צירוף להוצאות שכבר נרשמו",`החשבון של ${t.name} יצורף ${a===1?"להוצאה משותפת אחת שנרשמה":"ל־"+a+" הוצאות משותפות שנרשמו"} לפני ההצטרפות, והמאזן של כולם יתעדכן. להמשיך?`,"צירוף"))try{const s=await Pn(e,t.id,t.joinFrom);if(Ia(),s.failed){E("הצירוף לא הושלם — נסו שוב"),Y();return}await st(e,{id:t.id,joinFrom:0}),E(s.added?`החשבון של ${t.name} צורף ${qt(s.added)} ✓`:"לא נמצאו הוצאות לצירוף"),Y()}catch(s){console.error(s),E(Te(s,"הצירוף נכשל — נסו שוב"))}}function pd(e,t,a){const n=Object.assign({},t),s=se(a)||"";e&&"pay"in t&&t.pay&&typeof t.pay=="object"&&!(Logic.timeMs(t.pay.updatedAt)>Logic.timeMs(e.pay&&e.pay.updatedAt))&&!Logic.samePay(t.pay,e.pay,{secure:!0})&&(n.pay=Logic.stampPay(t.pay,s||"mgr",e.pay,Date.now()));const o=e?we(e):"";return e&&"phone"in t&&!Logic.phonesEqual(o,t.phone||"")&&(o||Logic.phoneKey(t.phone||""))&&(n.phoneChangedAt=Date.now(),n.phoneChangedBy=s,o?delete n.phoneSet:n.phoneSet=!0),n}async function st(e,t,a){let n=e;if(L.getTripOnce)try{const h=await L.getTripOnce(e.id);h&&(n=h)}catch(h){console.error("fresh trip read failed",h)}const s=(n.members||[]).find(h=>h.id===t.id)||null,o=pd(s,t,e.id),i=!!(o.pay&&typeof o.pay=="object"),c="phone"in t&&!!s&&!Logic.phonesEqual(we(s),t.phone||""),d=i?Bn(e.id,t.id):null,l=c?ud(e.id,t.id):null,p=Date.now()+600*1e3;i&&Wt(e.id,t.id,Math.max(Logic.timeMs(o.pay.updatedAt),p)),c&&Ur(e.id,t.id,p);const u=h=>{const v=(h||[]).find(y=>y&&y.id===t.id)||o;return i&&Wt(e.id,t.id,Fa(v)||Logic.timeMs(o.pay.updatedAt)),c&&Ur(e.id,t.id,Logic.timeMs(v.phoneChangedAt)),h};try{if(L.upsertMember){const y=await L.upsertMember(e.id,o,a);return e.members=y,u(y)}const h=(n.members||[]).slice(),v=h.findIndex(y=>y.id===t.id);return v>=0?h[v]=Object.assign({},h[v],o):h.push(o),await L.updateTrip(e.id,{members:h}),e.members=h,u(h)}catch(h){throw i&&Kr(ri,e.id,t.id,d),c&&Kr(li,e.id,t.id,l),h}}const Dr="shaveh_payseen_v1",si=e=>{const t=e?e.id:f.joinTripId||f.tripId,a=e||(t?f.trips.find(n=>n.id===t):null);return!!(a&&a.legacyOpen)},Ne=e=>!!(L&&L.secure)&&!si(e),jt=e=>Logic.normalizePay(e&&e.pay,{secure:Ne()}),ii=e=>jt(e).methods.length>0,Gt=e=>(Logic.PAY_METHODS.find(t=>t.id===e)||{nm:e}).nm,Hn=e=>{const t=new Date(Number(e)||0);return t.getDate()+"."+(t.getMonth()+1)};function oi(e,t,a){const n=a!==void 0?a:t&&t.pay&&t.pay.updatedBy;return!n||n===t.id?"":wr(e,t,n)}const Rr=e=>Logic.payCheckAt(e,Date.now()),In=(e,t,a)=>Logic.stampPay(e,t,a,Date.now());function Br(){try{return JSON.parse(F.get(Dr)||"{}")||{}}catch{return{}}}function Fr(e,t){const a=Br(),n=a[e]||{};Object.keys(t).forEach(s=>{n[s]=Math.max(Number(n[s])||0,Number(t[s])||0)}),a[e]=n,F.set(Dr,JSON.stringify(a))}function Dn(e,t){const a={};(t||[]).forEach(n=>{const s=Math.max(Logic.timeMs(n&&n.pay&&n.pay.updatedAt),Logic.timeMs(n&&n.phoneChangedAt));n&&n.id&&s&&(a[n.id]=s)}),Object.keys(a).length&&Fr(e,a)}const ri="shaveh_mypay_v1";function Rn(){try{return JSON.parse(F.get(ri)||"{}")||{}}catch{return{}}}function Bn(e,t){const a=Rn()[e];return a&&t in a?Number(a[t])||0:null}function Wt(e,t,a){if(!e||!t)return;const n=Rn();n[e]=Object.assign({},n[e],{[t]:Number(a)||0}),F.set(ri,JSON.stringify(n))}const Fa=e=>Number(e&&e.pay&&e.pay.updatedAt)||0,li="shaveh_myphone_v1";function Fn(){try{return JSON.parse(F.get(li)||"{}")||{}}catch{return{}}}function ud(e,t){const a=Fn()[e];return a&&t in a?Number(a[t])||0:null}function Ur(e,t,a){if(!e||!t)return;const n=Fn();n[e]=Object.assign({},n[e],{[t]:Number(a)||0}),F.set(li,JSON.stringify(n))}function Kr(e,t,a,n){let s={};try{s=JSON.parse(F.get(e)||"{}")||{}}catch{s={}}n==null?s[t]&&delete s[t][a]:s[t]=Object.assign({},s[t],{[a]:n}),F.set(e,JSON.stringify(s))}async function ci(e,t,a,n){await st(e,Object.assign({id:t},n||{},a?{pay:a}:{}))}function Ua(e,t){const a=je();if(!e)delete a.pay,t&&t.declined&&(a.payRemember=!1);else{const n=Object.assign({},e);delete n.updatedAt,delete n.updatedBy,delete n.firstAt;const s=a.pay;!Ne()&&s&&s.bank&&!n.bank&&(n.bank=s.bank,(s.methods||[]).indexOf("bank")>=0&&n.methods.indexOf("bank")<0&&(n.methods=Logic.reinsertMethod(s.methods,n.methods,"bank"))),a.pay=n,delete a.payRemember}F.set(Rs,JSON.stringify(a))}const zr=()=>je().payRemember!==!1;function qr(e,t,a){const n=Logic.normalizePay(e,{secure:!0}),s=n.bank||{};return{methods:n.methods.filter(o=>a||o!=="bank"),phone:n.phone?Logic.fmtPhone(n.phone):t?Logic.fmtPhone(t):"",bank:{bankCode:s.bankCode||"",branch:s.branch||"",account:s.account||"",holder:s.holder||""},paypal:n.paypal||"",note:n.note||"",remember:!0,ack:"",msg:"",open:!1}}function di(e,t){const a=t.idp,n=b=>e.methods.indexOf(b)>=0,o=Logic.PAY_METHODS.filter(b=>t.secure||b.id!=="bank").map(b=>{const S=e.methods.indexOf(b.id);return`<button type="button" class="chip pp-chip" data-pm="${b.id}" aria-pressed="${S>=0}"
        aria-label="${r(b.nm)}${S>=0?" — העדפה "+(S+1):""}">${S>=0?`<span class="pp-ord num" aria-hidden="true">${S+1}</span>`:""}${r(b.nm)}</button>`}).join(""),i=e.bank,c=!i.bankCode||Logic.bankByCode(i.bankCode),d=Logic.BANK_GROUPS.map(b=>`
      <optgroup label="${r(b.nm)}">${Logic.BANKS.filter(S=>S.grp===b.id).map(S=>`<option value="${S.code}"${i.bankCode&&Number(i.bankCode)===Number(S.code)?" selected":""}>${r(S.nm)}${S.aka?" ("+r(S.aka)+")":""} · ${S.code}</option>`).join("")}
      </optgroup>`).join(""),l=n("bit")||n("paybox")?`
      <div class="field">
        <label for="${a}-phone">הטלפון ל${n("bit")&&n("paybox")?"ביט ולפייבוקס":n("bit")?"ביט":"פייבוקס"}</label>
        <input class="input ltr" id="${a}-phone" data-pf="phone" type="tel" inputmode="tel" maxlength="20" autocomplete="tel"
          placeholder="050-0000000" value="${r(e.phone)}">
        <p class="hint">${r(t.phoneHint||"אפשר להזין מספר אחר — למשל של בן או בת הזוג.")}</p>
      </div>`:"",p=n("bank")&&t.secure?`
      <fieldset class="pp-bank">
        <legend>פרטי החשבון להעברה בנקאית</legend>
        <div class="field">
          <label for="${a}-bank">בנק</label>
          <select class="input" id="${a}-bank" data-pf="bankCode">
            <option value="">בחירת בנק</option>
            ${c?"":`<option value="${r(i.bankCode)}" selected>${r(Logic.bankLabel(i.bankCode))}</option>`}
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
      </fieldset>`:"",u=n("paypal")?`
      <div class="field">
        <label for="${a}-paypal">שם המשתמש ב־PayPal.Me</label>
        <input class="input ltr" id="${a}-paypal" data-pf="paypal" autocomplete="off" spellcheck="false"
          maxlength="60" placeholder="paypal.me/dana" value="${r(e.paypal)}">
      </div>`:"",h=e.methods.length?`
      <div class="field">
        <label for="${a}-note">${n("other")?"איך עוד אפשר להעביר לכם?":"הערה <small>(רשות)</small>"}</label>
        <input class="input" id="${a}-note" data-pf="note" maxlength="80" autocomplete="off"
          placeholder="${n("other")?"למשל: מזומן במפגש הבא":"למשל: עדיף עד סוף החודש"}" value="${r(e.note)}">
      </div>`:"",v=t.secure?"":t.legacyOpen?`
      <p class="pp-soon" role="note"><b>העברה בנקאית — עוד לא בקבוצה הזו.</b> הקבוצה נפתחה לפני שדרוג האבטחה, ועד סוף תקופת המעבר אפשר להיכנס אליה גם בקישורים הישנים. לכן פרטי חשבון בנק יתווספו כאן כשהתקופה תסתיים. בינתיים אפשר לבחור את שאר הדרכים.</p>`:`
      <p class="pp-soon" role="note"><b>העברה בנקאית — בקרוב.</b> פרטי חשבון בנק יתווספו כאן בקרוב, עם שמירה מאובטחת. בינתיים אפשר לבחור את שאר הדרכים.</p>`,y=t.remember?`
      <label class="pp-remember">
        <input type="checkbox" data-pf="remember"${e.remember?" checked":""}>
        <span>לזכור את הפרטים במכשיר הזה, כדי למלא אותם מראש בקבוצות הבאות
          <small>נשמר רק בדפדפן של המכשיר הזה. אפשר לבטל ולמחוק בכל רגע.</small></span>
      </label>`:"";return`
      <p class="pp-lbl" id="${a}-lbl">לפי סדר העדפה — הראשון שבוחרים יוצג כמועדף. לחיצה נוספת מסירה.</p>
      <div class="chip-row pp-chips" role="group" aria-labelledby="${a}-lbl">${o}</div>
      ${v}
      ${l}${p}${u}${h}
      <p class="pp-msg" data-ref="ppmsg" role="status">${r(e.msg||"")}</p>
      <p class="lock-err" data-ref="pperr" role="status"></p>
      ${y}
      ${fd(t.secure)}`}function fd(e){return`
      <div class="pp-privacy" role="note">
        <b><span aria-hidden="true">🔒</span> מי רואה את הפרטים?</b>
        ${e?"הפרטים מוצגים לחברי הקבוצה — ובעיקר למי שצריך להעביר לכם כסף; מספר החשבון מוצג מוסתר עד שלוחצים ״הצגה״.":"הפרטים נשמרים בקבוצה המשותפת ומוצגים לחברי הקבוצה — ובעיקר למי שצריך להעביר לכם כסף. את פרטי הבנק נאפשר רק אחרי שהשמירה המאובטחת תופעל."}
        כל שינוי בפרטים מוצג לחברי הקבוצה, כדי שאף אחד לא יוכל להחליף אותם בלי שתדעו.
        אפשר לשנות או להסיר אותם בכל רגע. השירות אינו מעביר כסף ואינו משתמש בפרטים לשום מטרה אחרת.
        <button type="button" class="linklike" data-act="legal" data-id="privacy">מדיניות הפרטיות</button>
      </div>`}function Jr(e,t){const a=m('[data-ref="ppreadback"]',e);if(!a)return;const n=t.bank,s=String(n.account||"").replace(/\D/g,"");if(!n.bankCode||!s){a.textContent="",a.className="pp-readback";return}const o=Logic.bankAccountCheck(n.bankCode,n.branch,s),i=(Logic.bankByCode(n.bankCode)||{}).nm||"הבנק";a.className="pp-readback "+(o==="bad"?"bad":o==="ok"?"ok":""),a.innerHTML=`לבדיקה: ${r(Logic.bankLabel(n.bankCode))} · סניף <span class="num">${r(String(n.branch||"").replace(/\D/g,"")||"—")}</span> · חשבון <span class="num">${r(s)}</span><small>${o==="ok"?"✓ עבר את בדיקת התקינות של "+r(i):o==="bad"?"המספר לא עבר את בדיקת התקינות של "+r(i)+" — כדאי לבדוק שוב":"לבנק הזה אין בדיקה אוטומטית — כדאי לוודא שהמספר מדויק"}</small>`}function pi(e,t,a){const n=s=>{e.innerHTML=di(t,a),pi(e,t,a);const o=s&&m(s,e);o&&o.focus()};J("[data-pm]",e).forEach(s=>s.addEventListener("click",()=>{const o=s.dataset.pm,i=t.methods.indexOf(o);i>=0?t.methods.splice(i,1):t.methods.push(o),t.ack="",t.msg="",t.touched=!0,n(`[data-pm="${o}"]`)})),J("[data-pf]",e).forEach(s=>{const o=s.dataset.pf;if(o==="remember"){s.addEventListener("change",()=>{t.remember=s.checked});return}s.addEventListener(s.tagName==="SELECT"?"change":"input",()=>{if(t.ack="",t.touched=!0,o==="account"&&Logic.looksLikeIban(s.value)){const i=Logic.parseIban(s.value);if(i){Object.assign(t.bank,i),t.msg="זוהה IBAN — הבנק, הסניף והחשבון מולאו ✓",n('[data-pf="account"]');return}const c=m('[data-ref="ppmsg"]',e);s.value.replace(/[^A-Za-z0-9]/g,"").length>=23&&c&&(c.textContent="מספר ה־IBAN אינו תקין — כדאי לבדוק שוב (23 תווים, מתחיל ב־IL)"),t.bank.account=s.value;return}o==="bankCode"||o==="branch"||o==="account"||o==="holder"?t.bank[o]=s.value:t[o]=s.value,Jr(e,t)})}),Jr(e,t)}function Yr(e,t,a){const n=Logic.validatePay(t,a),s=e&&m('[data-ref="pperr"]',e);if(s&&(s.textContent="",s.classList.remove("soft")),n.errors.length){const c=n.errors[0];s&&(s.textContent=c.msg);const d=e&&m(`[data-pf="${c.field}"]`,e);return d&&d.focus(),null}const o=n.warnings.filter(c=>c.code!=="unknown"),i=JSON.stringify([t.bank.bankCode,t.bank.branch,t.bank.account]);return o.length&&t.ack!==i?(t.ack=i,s&&(s.textContent=o.map(c=>c.msg).join(" ")+" לבדיקה — מתקנים את המספר; כדי לשמור כמו שהוא — לוחצים שוב.",s.classList.add("soft")),null):n.pay}function hd(e,t){const a=jt(t);return a.methods.length?`<b>${r(a.methods.map(Gt).join(" · "))}</b>`+(a.bank?`<small class="heads-count">${r(Logic.bankLabel(a.bank.bankCode,a.bank.bankName))} · חשבון <span class="num">${r(Logic.maskAccount(a.bank.account))}</span></small>`:""):""}function ui(e,t,a){const n=a||{},s=t.id===se(e.id),o=de(e)||s&&!Oo(e,t.id),i=jt(t),c=!i.methods.length&&s&&o&&n.owed>0,d=oi(e,t),l=Number(t.pay&&t.pay.firstAt)===Number(t.pay&&t.pay.updatedAt)?"הוגדר":"עודכן",p=t.pay&&t.pay.updatedAt?`${l} ב־<span class="num">${Hn(t.pay.updatedAt)}</span>${d?" "+r(d):""}`:"";let u;const h=o&&i.methods.indexOf("bank")>=0&&Logic.payBankSuspect(i)?'<small class="heads-count pay-suspect">⚠️ מספר החשבון לא עבר את בדיקת התקינות — כדאי לבדוק ולתקן</small>':"";return i.methods.length?u=`קבלת כספים: ${hd(e,t)}${p?`<small class="heads-count">${p}</small>`:""}${h}`:s&&n.owed>0?u=`חייבים לכם ${V(n.owed,e.base)} — <b>איך נוח לכם לקבל?</b>`:u=s?'<b>איך נוח לכם לקבל כסף?</b><small class="heads-count">עוד לא הוגדר — כדאי להגדיר, כדי שיידעו לאן להעביר</small>':`קבלת כספים: <small class="heads-count">עוד לא הוגדר אצל ${r(t.name)}</small>`,`
      <div class="heads-line pay-line${n.cls?" "+n.cls:""}${c?" empty-pay":""}">
        <span class="heads-line-txt"><span class="pay-line-ic">${he("card",17)}</span> ${u}</span>
        ${o?`<button class="btn sm${c?" primary":""}" data-act="pay-prefs" data-id="${r(t.id)}"
          aria-label="${i.methods.length?"עריכת":"הגדרת"} הדרכים לקבל כסף${s?"":" של "+r(t.name)}">${i.methods.length?"עריכה":"הגדרה"}</button>`:""}
      </div>`}function fi(e,t,a){const n=Ue(e,t),s=jt(n),o=n.name;if(!s.methods.length)return`<p class="pay-none">עוד לא הוגדר אצל ${r(o)} איך נוח לקבל כסף — כדאי לתאם ישירות.</p>`;const i=(y,b,S)=>`<button class="btn sm pay-copy" data-act="pay-copy" data-copy="${r(y)}" data-what="${r(b)}" aria-label="${r(S)}">העתקה</button>`,c=(y,b,S)=>`<div class="pay-kv"><span class="pay-k">${r(y)}</span><span class="pay-v">${b}</span>${S||""}</div>`,d=s.phone||Logic.mobileDigits(we(n)),l=[];let p=!1;s.methods.forEach(y=>{let b="",S=Gt(y);if(y==="bit"||y==="paybox"){if(p)return;p=!0,s.methods.indexOf("bit")>=0&&s.methods.indexOf("paybox")>=0&&(S=y==="bit"?"ביט או פייבוקס":"פייבוקס או ביט"),b=d?c("טלפון",`<span class="num">${r(Logic.fmtPhone(d))}</span>`,i(d,"מספר הטלפון",`העתקת מספר הטלפון של ${o}`))+`<p class="pay-tip">לפני האישור באפליקציה — כדאי לוודא שהשם שמופיע הוא ${r(o)}.</p>`:`<p class="pay-tip">המספר אצל ${r(o)} — כדאי לתאם ישירות.</p>`}else if(y==="bank")if(!s.bank)b=`<p class="pay-tip">פרטי החשבון אצל ${r(o)}.</p>`;else{const T=s.bank.account,w=Logic.maskAccount(T),k=[s.bank.holder||o,Logic.bankLabel(s.bank.bankCode,s.bank.bankName),"סניף "+s.bank.branch,"חשבון "+T].join(`
`);b=c("בנק",r(Logic.bankLabel(s.bank.bankCode,s.bank.bankName)))+c("סניף",`<span class="num">${r(s.bank.branch)}</span>`,i(s.bank.branch,"מספר הסניף",`העתקת מספר הסניף של ${o}`))+c("חשבון",`<span class="num" data-acc>${r(w)}</span>`,`<button class="btn sm ghost pay-reveal" data-act="pay-reveal" data-full="${r(T)}" data-mask="${r(w)}" aria-pressed="false"
                aria-label="הצגת מספר החשבון המלא של ${r(o)}">הצגה</button>`+i(T,"מספר החשבון",`העתקת מספר החשבון של ${o}`))+(s.bank.holder?c("על שם",r(s.bank.holder)):"")+(Logic.payBankSuspect(s)?`<p class="pay-tip pay-tip-warn" role="note">מספר החשבון לא עבר את בדיקת התקינות — כדאי לוודא מול ${r(o)} לפני העברה.</p>`:"")+`<button class="btn sm ghost block pay-copy-all" data-act="pay-copy" data-copy="${r(k)}" data-what="כל הפרטים" aria-label="העתקת כל פרטי החשבון של ${r(o)}">העתקת כל הפרטים</button><p class="pay-tip">כדאי לוודא את הפרטים מול ${r(o)} בשיחה או בהודעה — במיוחד בסכום גבוה.</p>`}else if(y==="cash")b=`<p class="pay-tip">בתיאום ישיר עם ${r(o)}.</p>`;else if(y==="paypal"){if(!s.paypal)return;const T=Logic.dec(e.base),w=a>0?"/"+Logic.fromCents(a,T).toFixed(T)+e.base:"";b=`<a class="btn sm" href="${r("https://paypal.me/"+encodeURIComponent(s.paypal)+w)}" target="_blank" rel="noopener">פתיחה ב־PayPal</a>`}else y==="other"&&(b=`<p class="pay-tip">${r(s.note||"בתיאום ישיר")}</p>`);l.push(`<li class="pay-item"><div class="pay-item-head"><span class="pay-ord num" aria-hidden="true">${l.length+1}</span><b>${r(S)}</b></div>${b}</li>`)});const u=Rr(n),h=u&&u!==Number(n.pay&&n.pay.updatedAt),v=oi(e,n,h?n.phoneChangedBy:void 0);return`
      ${u?`<div class="banner warn pay-recent" role="status">${h?`מספר הטלפון של ${r(o)} הוחלף`:`פרטי התשלום של ${r(o)} עודכנו`} ב־<span class="num">${Hn(u)}</span>${v?" · "+r(v):""} — לפני העברה כדאי לוודא אותם מול ${r(o)}.</div>`:""}
      <p class="pay-how-ttl">הדרכים להעביר ל${r(o)}, לפי סדר העדפה</p>
      <ol class="pay-how">${l.join("")}</ol>
      ${s.note&&s.methods.indexOf("other")<0?`<p class="pay-tip">הערה: ${r(s.note)}</p>`:""}`}async function Un(e,t){try{await navigator.clipboard.writeText(e),E(t);return}catch{}const a=document.createElement("textarea");a.value=e,a.setAttribute("readonly",""),a.style.cssText="position:fixed;opacity:0;top:0;right:0",document.body.appendChild(a),a.select();let n=!1;try{n=document.execCommand("copy")}catch{n=!1}a.remove(),E(n?t:"ההעתקה לא הצליחה — אפשר לסמן ולהעתיק ידנית")}function md(e,t){if(!t)return"";const a=Br()[e.id]||{},n={pay:Rn()[e.id]||{},phone:Fn()[e.id]||{}},s=Logic.payChangesToNotify(e.members||[],a,t.id,Date.now(),{wrote:n,since:Number(t.joinFrom)||0});if(!s.length)return"";const o=s.map(c=>{const d=Ue(e,c.id),l=oi(e,d,c.by),p=`ב־${ei(c.at)}${l?" · "+r(l):""}`;return c.phone?`<li>${c.phoneSet?c.mine?"נקבע מספר טלפון לשם <b>שלכם</b>":`נקבע מספר טלפון לשם <b>${r(d.name)}</b>`:c.mine?"מספר הטלפון <b>שלכם</b> הוחלף":`מספר הטלפון של <b>${r(d.name)}</b> הוחלף`} ${p}.</li>`:c.mine?`<li>פרטי התשלום <b>שלכם</b> ${c.removed?"הוסרו":"עודכנו"} ${p} — כדאי לבדוק שהם נכונים.
            <button class="btn sm" data-act="pay-prefs" data-id="${r(d.id)}">בדיקה</button></li>`:`<li>פרטי התשלום של <b>${r(d.name)}</b> ${c.removed?"הוסרו":"עודכנו"} ${p}.</li>`}).join(""),i=s.map(c=>c.id+":"+c.at).join(",");return`
      <div class="banner warn pay-notice" role="status">
        <b>עדכון בפרטי תשלום</b>
        <ul>${o}</ul>
        ${s.some(c=>!c.mine)?"<p>לפני העברת כסף — כדאי לוודא את הפרטים החדשים מול מי שמקבל אותו.</p>":""}
        <button class="btn sm" data-act="pay-seen" data-ids="${r(i)}">ראיתי</button>
      </div>`}function bd(e,t){if(!t||t.ghost)return"";const a=(e.members||[]).find(d=>d.id===t.id);if(!a)return"";const n=Bn(e.id,a.id);if(n==null)return Wt(e.id,a.id,Fa(a)),"";if(!Logic.payChangedElsewhere(a.pay,a.id,n))return"";const s=jt(a),o=je(),i=!!(o.pay&&Logic.normalizePay(o.pay,{secure:Ne()}).methods.length)&&!Logic.samePay(Logic.normalizePay(o.pay,{secure:Ne()}),a.pay,{secure:Ne(),memberPhone:we(a)}),c=s.methods.length?`עכשיו מוצג: ${r(s.methods.map(Gt).join(" · "))}${s.bank?` · חשבון <span class="num">${r(Logic.maskAccount(s.bank.account))}</span>`:""}.`:"עכשיו לא מוצגת שום דרך לקבל כסף.";return`
      <div class="banner warn pay-device" role="alert">
        <b>פרטי התשלום שלכם שונו ממכשיר אחר — זה אתם?</b>
        <p>השינוי נעשה ב־<span class="num">${Hn(a.pay.updatedAt)}</span> בשמכם, לא מהמכשיר הזה. ${c}</p>
        <div class="pay-device-acts">
          <button class="btn sm" data-act="mypay-ok">כן, זה אני</button>
          ${i?'<button class="btn sm primary" data-act="mypay-restore">החזרה מהפרופיל</button>':""}
          <button class="btn sm${i?"":" primary"}" data-act="pay-prefs" data-id="${r(a.id)}">בדיקה ועריכה</button>
        </div>
      </div>`}function yd(e,t){if(!t||t.ghost||!Aa(e)||$t()||Pt(e.id,t.id))return"";if(e.managerId===t.id){if(de(e))return"";const s=!!(e.hasMgrPass||e.mgrPass);return`
      <div class="banner warn device-key mgr-key-banner" role="status" data-ref="devicekey">
        <b>המכשיר הזה עדיין לא מאומת כמכשיר של מנהל הקבוצה</b>
        <p>לכן פרטי ההוצאות מוסתרים כאן ופעולות הניהול אינן זמינות. הן פתוחות מהמכשיר שפתח את הקבוצה${s?", או כאן — אחרי כניסה בסיסמת המנהל":""}.</p>
        ${s?'<button class="btn sm" data-act="mgr-login">כניסה בסיסמת המנהל</button>':'<p>כדי לנהל גם מכאן — קובעים סיסמת מנהל בהגדרות הקבוצה, במכשיר שפתח אותה, ונכנסים בה כאן. אין גישה למכשיר ההוא? מפעיל השירות יכול לקבוע לקבוצה סיסמה זמנית. <button type="button" class="linklike" data-help-open="article" data-help-id="lost-manager-access">איך משחזרים ניהול</button></p>'}
      </div>`}if(!Oo(e,t.id))return"";const a=(e.members||[]).find(s=>s.id===e.managerId&&s.id!==t.id),n=`שלום, אפשר בבקשה לאפס את ״המכשיר המחובר״ לחשבון של ${t.name} בקבוצה ״${e.name}״ בשווה בשווה? (הגדרות הקבוצה ← המשתתף ← איפוס המכשיר המחובר). תודה!`;return`
      <div class="banner warn device-key" role="status" data-ref="devicekey">
        <b>החשבון שלכם מחובר למכשיר אחר</b>
        <p>כדי לעדכן מכאן את פרטי התשלום ולערוך את ההוצאות שלכם, מנהל הקבוצה צריך לאפס את המכשיר המחובר. אחרי האיפוס המכשיר הזה יתחבר מחדש מעצמו.</p>
        ${a&&Dt(a)?`<a class="btn sm wa soft" data-ref="askreset" href="${r(Ht(we(a),n))}" target="_blank" rel="noopener">${he("chat",16)} בקשה מ${r(a.name)} בוואטסאפ</a>`:""}
      </div>`}async function gd(e){const t=se(e.id),a=(e.members||[]).find(i=>i.id===t),n=je();if(!a||!n.pay)return;const s=Logic.normalizePay(n.pay,{secure:Ne()}),o={methods:s.methods};["phone","bank","paypal","note"].forEach(i=>{s[i]&&(o[i]=s[i])});try{await ci(e,a.id,In(o,t,a.pay)),E("פרטי התשלום הוחזרו מהפרופיל במכשיר ✓"),Y()}catch(i){console.error(i),E(Te(i,"השמירה נכשלה — נסו שוב"))}}let Ka=null;function vd(e){if(!e){Ka=null;return}const t={};(e.members||[]).forEach(p=>{t[p.id]=Math.max(Number(p.pay&&p.pay.updatedAt)||0,Logic.timeMs(p.phoneChangedAt))});const a=Ka&&Ka.tripId===e.id?Ka.map:null;if(Ka={tripId:e.id,map:t},!a)return;const n=se(e.id),s={pay:Rn()[e.id]||{},phone:Fn()[e.id]||{}},o=p=>t[p.id]>(a[p.id]||0),i=p=>p.id===n&&Logic.payChangedElsewhere(p.pay,p.id,Bn(e.id,p.id)),c=Logic.payChangesToNotify((e.members||[]).filter(o),a,n,Date.now(),{wrote:s}).map(p=>Object.assign({m:Ue(e,p.id)},p));if((e.members||[]).filter(p=>o(p)&&i(p)&&!c.some(u=>u.id===p.id)).forEach(p=>c.push({m:p,id:p.id,elsewhere:!0})),!c.length)return;const d=c[c.length-1],l=d.elsewhere||d.mine&&!d.phone&&i(d.m)?"פרטי התשלום שלכם שונו ממכשיר אחר — זה אתם?":d.phone?d.mine?"מספר הטלפון שלכם בקבוצה השתנה — כדאי לבדוק":`מספר הטלפון של ${d.m.name} השתנה — כדאי לוודא לפני העברה`:d.mine?"פרטי התשלום שלכם עודכנו בקבוצה — כדאי לבדוק שהם נכונים":`פרטי התשלום של ${d.m.name} עודכנו — כדאי לוודא לפני העברה`;E(l),Fo(e.name,l)}function Vr(e,t,a){const n=se(e.id);if(!t||!(de(e)||t.id===n)){E("את פרטי התשלום מעדכנים המשתתף עצמו או מנהל הקבוצה");return}const s=t.id===n,o=je(),i=t.pay&&Array.isArray(t.pay.methods)&&t.pay.methods.length?t.pay:null,c=qr(i||(s?o.pay:null),we(t),Ne(e));c.remember=s&&zr();const d={secure:Ne(e),legacyOpen:si(e),idp:"pps",remember:s,phoneHint:Dt(t)?"ממולא מהטלפון שנרשם. אפשר להזין מספר אחר — למשל של בן או בת הזוג.":"מספר נייד שרשום בביט או בפייבוקס."},l=pe(`
      <div class="sheet-head">
        ${Fe(t,"lg",!0)}
        <h2 class="sheet-title">${s?"איך נוח לכם לקבל כסף?":"איך נוח ל"+r(t.name)+" לקבל כסף?"}</h2>
      </div>
      <p class="pp-lead">כשמישהו בקבוצה צריך להעביר ${s?"לכם":"ל"+r(t.name)} כסף — זה מה שיוצג בהעברה, עם כפתורי העתקה. לא חובה, ואפשר לשנות בכל רגע.</p>
      ${s?"":`<div class="banner" role="note">הזנה עבור ${r(t.name)}: השינוי יוצג לחברי הקבוצה כ״עודכן על ידי ${r(n?le(e,n):"מנהל הקבוצה")}״. כדאי לוודא את הפרטים מול ${r(t.name)}.</div>`}
      <div class="pp-box" data-pp="sheet">${di(c,d)}</div>
      <button class="btn primary block" data-ref="save">שמירה</button>
      ${i?'<button class="btn ghost block" data-ref="ppclear" style="margin-top:10px;">הסרת פרטי התשלום מהקבוצה</button>':""}
      ${s&&o.pay?'<p style="text-align:center;margin:4px 0 0;"><button class="linklike" data-ref="ppforget">מחיקת הפרטים השמורים במכשיר הזה</button></p>':""}
    `),p=m('[data-pp="sheet"]',l.el);pi(p,c,d);const u=b=>{s&&(c.remember?b.methods.length&&Ua(b):Ua(null,{declined:!0}))},h=async(b,S)=>{const T=m('[data-ref="save"]',l.el);T.disabled=!0,T.textContent="שומרים…";try{await ci(e,t.id,In(b,n,t.pay)),u(b),Ia(),E(S),Y(),a&&a()}catch(w){console.error(w),T.disabled=!1,T.textContent="שמירה",E(Te(w,"השמירה נכשלה — נסו שוב"))}};m('[data-ref="save"]',l.el).addEventListener("click",()=>{const b=Yr(p,c,{secure:Ne(),memberPhone:we(t)});if(!b)return;if(Logic.samePay(b,t.pay,{secure:Ne(),memberPhone:we(t)})){u(b),Ia(),E("לא היה שינוי בפרטי התשלום");return}const S=!(t.pay&&Number(t.pay.updatedAt)>0);h(b,b.methods.length?S?"פרטי התשלום נשמרו ✓":"פרטי התשלום נשמרו ✓ — חברי הקבוצה יראו שהם עודכנו":"פרטי התשלום הוסרו מהקבוצה")});const v=m('[data-ref="ppclear"]',l.el);v&&v.addEventListener("click",async()=>{await xe("הסרת פרטי התשלום","הדרכים לקבל כסף יוסרו מהקבוצה, וחברי הקבוצה יראו הודעה על השינוי. להמשיך?","הסרה",!0)&&(c.methods=[],h({methods:[]},"פרטי התשלום הוסרו מהקבוצה"))});const y=m('[data-ref="ppforget"]',l.el);y&&y.addEventListener("click",()=>{Ua(null,{declined:!0}),c.remember=!1;const b=m('[data-pf="remember"]',l.el);b&&(b.checked=!1),y.remove(),E("הפרטים נמחקו מהמכשיר הזה ✓")})}const Gr=()=>({secure:Ne(),legacyOpen:si(),idp:"jp",remember:!0,phoneHint:"ריק — ישמש מספר הטלפון שהזנתם למעלה. אפשר להזין מספר אחר."});function $d(e){const t=e.pay;return`
      <div class="pp-join">
        <button type="button" class="pp-toggle" data-act="jpay-toggle" aria-expanded="${t.open}"${t.open?' aria-controls="jpay-body"':""}>
          <span class="pp-toggle-ic" aria-hidden="true">${t.open?"−":"+"}</span>
          <span>איך נוח לכם לקבל כסף? <small>(רשות)</small>${!t.open&&t.methods.length?`<small class="pp-toggle-sel">נבחרו: ${r(t.methods.filter(a=>Ne()||a!=="bank").map(Gt).join(" · "))} — יישמרו בהצטרפות</small>`:""}</span>
        </button>
        ${t.open?`<div class="pp-box" id="jpay-body" data-pp="join">${di(t,Gr())}</div>`:""}
      </div>`}function wd(e){const t=m('[data-pp="join"]',e);t&&ge&&ge.pay&&pi(t,ge.pay,Gr())}let ge=null;function hi(e){if(!ge||ge.tripId!==e.id){ge={tripId:e.id,scope:"from-now",units:1,kids:0,touched:!1,name:null,phone:null};const t=je();ge.pay=qr(t.pay||null,"",Ne(e)),ge.pay.phone=t.pay&&t.pay.phone?Logic.fmtPhone(t.pay.phone):"",ge.pay.open=!!(t.pay&&(t.pay.methods||[]).length),ge.pay.remember=zr()}return ge}function kd(e){if(!ge)return;const t=e.closest("[data-stepper]").dataset.stepper,a=Hr(e,ge[t]);a!=null&&(ge[t]=a,ge.touched=!0)}document.addEventListener("input",e=>{const t=e.target;!ge||!t||(t.id==="j-name"?ge.name=t.value:t.id==="j-id"&&(ge.phone=t.value))});function xd(e){if(!e)return f.ready?!f.shared&&!f.cloud?`
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
          </div>`;const t=e.members||[],a=e.start?`${_e(e.start)}–${_e(e.end||e.start)}`:"",n=[e.dest,a].filter(Boolean),s=ze(e).id==="trip"?zs(e.dest):null,o=hi(e),i=_r(e),c=Logic.splitsByHead(e);return`
      <div class="join-wrap" data-join-trip="${r(e.id)}" style="${qs(e)}">
        ${s?`<div class="join-photo rise" style="background-image:url('${r(s)}')" role="img" aria-label="תמונה של ${r(e.dest||e.name)}"></div>`:""}
        <div class="join-hero rise">
          ${Et(e)?`<div class="join-brand">${_n(Et(e),"join-brand-logo")}<span>באדיבות ${r(Et(e).name)}</span></div>`:""}
          <div class="join-flag" aria-hidden="true">${r(Ze(e))}</div>
          <p class="join-eyebrow">הוזמנתם להצטרף אל</p>
          <h1 class="join-name">${r(e.name)}</h1>
          ${n.length?`<p class="join-meta">${n.map(d=>`<span class="num">${r(d)}</span>`).join(" · ")}</p>`:""}
        </div>

        ${t.length?`
          <div class="join-crew rise" style="animation-delay:70ms">
            <p class="join-crew-lbl">${Re(t.length,"משתתף אחד כבר בקבוצה","משתתפים כבר בקבוצה")}</p>
            <div class="join-crew-list">
              ${t.map(d=>`<span class="join-crew-item">${Fe(d,"",!0)}${r(d.name)}</span>`).join("")}
            </div>
          </div>`:""}

        <div class="join-card rise" style="animation-delay:140ms">
          <h2 class="join-card-title">הפרטים שלכם</h2>
          <div class="field">
            <label for="j-name">השם שלכם</label>
            <input class="input" id="j-name" maxlength="24" autocomplete="name" placeholder="כך תופיעו בקבוצה"
              value="${r(o.name!=null?o.name:je().name||"")}">
          </div>
          <div class="field">
            <label for="j-id">מספר טלפון</label>
            <input class="input ltr lg" id="j-id" type="tel" inputmode="tel" maxlength="20" autocomplete="tel"
              placeholder="050-0000000" aria-label="מספר הטלפון שלי"
              value="${r(o.phone!=null?o.phone:je().phone||"")}">
            <p class="hint">זהו המפתח לחשבון שלכם בקבוצה — מי שכבר רשום יזוהה לפיו.</p>
          </div>
          ${c?`
          <div class="field">
            <label>כמה אתם?</label>
            ${fa(e,o,"jstep")}
            <p class="hint">הקבוצה מתחלקת לפי ראש. בני זוג וילדים נרשמים יחד, בחשבון אחד. ${r(Ra(e))}</p>
          </div>`:""}
          ${i?ai(o.scope,"jscope"):""}
          ${$d(o)}
          <p class="lock-err" data-ref="joinerr" role="status"></p>
          <button class="btn primary block" data-act="join-submit">✓ &nbsp;הצטרפות לקבוצה</button>
          <p class="hint" style="text-align:center;margin-top:10px;">בהצטרפות אתם מאשרים את
            <button class="linklike" data-act="legal" data-id="terms">התקנון</button> ואת
            <button class="linklike" data-act="legal" data-id="privacy">מדיניות הפרטיות</button>.</p>
        </div>

        <button class="join-skip" data-act="join-skip">כבר רשומים? בחרו את השם שלכם</button>
        ${mi(e)}
      </div>`}async function Ed(){const e=f.trips.find(l=>l.id===f.joinTripId);if(!e)return;const t=m("#j-name"),a=m("#j-id"),n=m('[data-ref="joinerr"]'),s=t&&t.value.trim()||"",o=a&&a.value.trim()||"";if(n&&(n.textContent=""),!s){n&&(n.textContent="נא להזין את השם שלכם"),t&&t.focus();return}if(!Logic.validatePhone(o)){n&&(n.textContent="מספר הטלפון אינו תקין — למשל 050-0000000"),a&&a.focus();return}const i=hi(e).pay;let c=null;if(i&&i.methods.length){const l={secure:Ne(e),memberPhone:o};if(!i.open){const p=Logic.validatePay(i,l);(p.errors.length||p.warnings.some(u=>u.code!=="unknown"))&&(i.open=!0,document.activeElement&&document.activeElement.blur&&document.activeElement.blur(),Y())}if(c=Yr(m('[data-pp="join"]'),i,l),!c){const p=m('[data-ref="joinerr"]');p&&(p.textContent="נא לבדוק את פרטי קבלת הכסף למעלה");return}}const d=m('[data-act="join-submit"]');d&&(d.disabled=!0,d.textContent="מצטרפים…");try{let l=e;if(L.getTripOnce){const z=await L.getTripOnce(e.id);z&&(l=z)}const p=l.members||[],u=Logic.normalizePhone(o);Ca(s,u),i&&!i.remember?Ua(null,{declined:!0}):c&&Ua(c);const h=(z,B)=>c?{pay:In(c,z,B)}:{},v=async z=>{if(!c)return"keep";const B={secure:Ne(e),memberPhone:we(z)||u};if(Logic.samePay(c,z.pay,B))return"same";const ae=jt(z);return ae.methods.length?i.touched&&await xe("פרטי התשלום בקבוצה",`לקבוצה הזו כבר יש לכם פרטי תשלום (${ae.methods.map(Gt).join(" · ")}). להחליף אותם במה שבחרתם עכשיו (${c.methods.map(Gt).join(" · ")})? חברי הקבוצה יראו שהפרטים עודכנו.`,"החלפה")?"write":"keep":"write"},y=p.filter(z=>Logic.phonesEqual(we(z),u))[0];if(y){if(!await Zr(s,y)){d&&(d.disabled=!1,d.innerHTML="✓ &nbsp;הצטרפות לקבוצה"),n&&(n.textContent=`המספר רשום בקבוצה על שם ${y.name}. אם זה לא המספר שלכם — בדקו אותו והזינו שוב.`),a&&a.focus();return}await Oa(e,y.id);const z=await v(y);z==="write"?await ci(e,y.id,h(y.id,y.pay).pay):Bn(e.id,y.id)==null&&Wt(e.id,y.id,Fa(y)),Me(e.id,y.id),f.joinTripId=null,ge=null,ta(),Qe(e.id),E(`שלום ${y.name}, החשבון שלכם פתוח ✓`+(z==="write"?" — פרטי התשלום עודכנו":z==="keep"&&c&&ii(y)?" — פרטי התשלום שלכם בקבוצה נשארו כפי שהיו":""));return}const b=hi(e),T=Logic.splitsByHead(l)?{units:b.units,kids:b.kids}:{},w=_r(l)&&b.scope==="all",k=p.find(z=>z.name===s&&!Dt(z));if(k){const B=await v(k)==="write"?h(k.id,k.pay):{};B.pay||Wt(e.id,k.id,Fa(k));const ae=await jr(e,k,Object.assign({phone:u},b.touched?T:{},B),w);Dn(e.id,p),Me(e.id,k.id),f.joinTripId=null,ge=null,ta(),Qe(e.id),E((ae.added?`שלום ${s}, החשבון שלכם פתוח ✓ — צורפתם גם ${qt(ae.added)}`:`שלום ${s}, החשבון שלכם פתוח ✓`)+Nn(ae));return}if(p.filter(z=>z.name===s&&Dt(z))[0]){d&&(d.disabled=!1,d.innerHTML="✓ &nbsp;הצטרפות לקבוצה"),n&&(n.textContent="קיים כבר משתתף בשם הזה. אם זה אתם — הזינו את הטלפון שנרשם; אחרת בחרו שם אחר.");return}const N=Ve("m"),K=Object.assign({id:N,name:s,phone:u,color:Ie[p.length%Ie.length]},T,h(N));K.pay||Wt(e.id,N,0);const U=await Sr(e,K,w);Dn(e.id,p),Me(e.id,K.id),f.joinTripId=null,ge=null,ta(),Qe(e.id),E((U.added?`ברוכים הבאים, ${s}! צורפתם גם ${qt(U.added)} ${ze(e).ic}`:`ברוכים הבאים, ${s}! ${ze(e).ic}`)+Nn(U)),setTimeout(tr,200)}catch(l){console.error(l),d&&(d.disabled=!1,d.innerHTML="✓ &nbsp;הצטרפות לקבוצה"),n&&(n.textContent=l&&l.code==="conflict"?"המספר הזה כבר רשום בקבוצה — לחצו שוב כדי להיכנס לחשבון הקיים":l&&l.code==="denied"?"הקישור אינו תקף עוד — בקשו מהחברים קישור הזמנה חדש":"ההצטרפות נכשלה — נסו שוב")}}const Wr=e=>String(e||"").normalize("NFKC").replace(/[\u0591-\u05C7"'׳״.\-]/g,"").replace(/\s+/g," ").trim().toLowerCase();function Ld(e,t){const a=Wr(e),n=Wr(t);if(!a||!n||a===n)return!0;const s=a.split(" ")[0],o=n.split(" ")[0];return s===o&&(a===s||n===o)}async function Zr(e,t){return Ld(e,t.name)?!0:xe("המספר כבר רשום בקבוצה",`מספר הטלפון הזה רשום בקבוצה על שם ${t.name}. זה אתם? אם לא — כדאי לבדוק שהמספר הוקלד נכון.`,`כן, אני ${t.name}`)}async function _d(e,t){try{let a=!1;if(L.managerLogin)a=await L.managerLogin(e.id,t);else{const s=await Ao(e.id,t);a=s===e.mgrPass,a&&To(e.id,s)}if(!a)return"wrong";const n=Ge()[e.id];return n&&[e,f.trips.find(s=>s.id===e.id)].forEach(s=>{s&&(s.ownerToken=n)}),!Ns(e)&&e.managerId&&(e.members||[]).some(s=>s.id===e.managerId)&&Me(e.id,e.managerId),"ok"}catch(a){return console.error(a),a&&a.code==="rate"?"rate":"error"}}const Sd={wrong:"הסיסמה שגויה — נסו שוב",rate:"יותר מדי ניסיונות — נסו שוב בעוד רבע שעה",error:"לא הצלחנו לבדוק כרגע — נסו שוב"};function Xr(e,t){const a=m('[data-ref="mgrlogin"]',t.el);if(!a)return;const n=m("#mgr-pass",t.el),s=m('[data-ref="mgrerr"]',t.el),o=async()=>{if(s.textContent="",!n.value.trim()){s.textContent="נא להזין את סיסמת המנהל",n.focus();return}a.disabled=!0;const i=await _d(e,n.value.trim());if(a.disabled=!1,i==="ok"){t.close(),E("ניהול הקבוצה נפתח במכשיר זה ✓"),f.joinTripId===e.id&&(f.joinTripId=null,ge=null,ta()),f.tripId!==e.id?Qe(e.id):Y();return}s.textContent=Sd[i],i==="wrong"&&(n.value="",n.focus())};a.addEventListener("click",o),n.addEventListener("keydown",i=>{i.key==="Enter"&&(i.preventDefault(),o())})}function Qr(e){if(!Is(e)){E("לקבוצה הזו עוד לא נקבעה סיסמת מנהל — קובעים אותה בהגדרות, במכשיר שפתח את הקבוצה");return}const t=pe(`
      <div class="sheet-head"><h2 class="sheet-title">כניסה בסיסמת מנהל</h2></div>
      <p class="hint" style="margin:-6px 0 14px;">הסיסמה שנקבעה בהגדרות הקבוצה פותחת את הניהול גם במכשיר הזה.</p>
      <div class="field">
        <label for="mgr-pass">סיסמת מנהל הקבוצה</label>
        <input class="input ltr" id="mgr-pass" type="password" autocomplete="current-password" maxlength="24">
        <p class="lock-err" data-ref="mgrerr" role="status"></p>
      </div>
      <div class="sheet-foot">
        <button class="btn primary block" data-ref="mgrlogin">כניסה לניהול הקבוצה</button>
      </div>`,null,{compact:!0});Xr(e,t),setTimeout(()=>{const a=m("#mgr-pass",t.el);a&&a.focus()},250)}const mi=(e,t)=>Is(e)&&!de(e)?`<button class="join-skip" data-act="mgr-login">${r(t||"מנהלי הקבוצה? כניסה בסיסמת מנהל")}</button>`:"";function bi(e){const t=se(e.id),a=e.members||[],n=de(e),s=Logic.splitsByHead(e),o=f.expensesReady&&Logic.onlyExpenses(f.expenses).length>0&&!e.closedAt,i={units:1,kids:0,scope:"from-now",touched:!1},c=pe(`
      <div class="sheet-head"><h2 class="sheet-title">${n?"מעבר בין חשבונות":"כניסה לחשבון שלי"}</h2></div>
      ${n?`<div class="banner">🔑 אתם מנהלי הקבוצה — מותר לכם לעבור בין החשבונות.</div>
           <div class="chip-row" role="group" aria-label="בחירת חשבון">
             ${a.map(p=>`<button class="chip" aria-pressed="${t===p.id}" data-mgrpick="${r(p.id)}"><span class="dot" style="background:${St(p)}"></span>${r(p.name)}</button>`).join("")}
           </div>`:`<p class="hint" style="margin:-6px 0 14px;">
             לכניסה לחשבון יש לבחור את השם ולהזין את מספר הטלפון שנרשם בהצטרפות.
           </p>
           <div class="field">
             <label for="who-select">השם שלי ברשימה</label>
             <select class="input" id="who-select">
               <option value="">בחרו את השם שלכם…</option>
               ${a.map(p=>`<option value="${r(p.id)}" ${t===p.id?"selected":""}>${r(p.name)}</option>`).join("")}
             </select>
           </div>
           <div class="field">
             <label for="who-id">מספר הטלפון שנרשם</label>
             <input class="input ltr lg" id="who-id" type="tel" inputmode="tel" maxlength="20" autocomplete="tel"
               placeholder="050-0000000" aria-label="מספר הטלפון שלי">
             <p class="lock-err" data-ref="iderr" role="status"></p>
           </div>
           <button class="btn primary block" data-ref="verify">כניסה לחשבון</button>`}
      ${!n&&(e.mgrPass||e.hasMgrPass)?`
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
        ${s?`
        <div class="field" style="margin-top:14px;">
          <label>כמה אתם?</label>
          ${fa(e,i)}
          <p class="hint">הקבוצה מתחלקת לפי ראש. בני זוג וילדים נרשמים יחד. ${r(Ra(e))}</p>
        </div>`:""}
        ${o?`<div style="margin-top:14px;">${ai(i.scope)}</div>`:""}
        <button class="btn block" data-ref="joinnew" style="margin-top:8px;">הצטרפות</button>
      </div>
      </div>`);Ba(c.el,i,()=>{i.touched=!0}),Cr(c.el,i),J("[data-mgrpick]",c.el).forEach(p=>p.addEventListener("click",()=>{e.ownerToken&&ra(e.id,e.ownerToken),Me(e.id,p.dataset.mgrpick),c.close(),E(`עברתם לחשבון של ${le(e,p.dataset.mgrpick)}`),Y()})),Xr(e,c);const d=m('[data-ref="verify"]',c.el);d&&d.addEventListener("click",async()=>{const p=m("#who-select",c.el),u=m('[data-ref="iderr"]',c.el),h=m("#who-id",c.el),v=p.value;if(u.textContent="",!v){u.textContent="נא לבחור את השם שלכם";return}const y=a.find(b=>b.id===v);if(!Dt(y)){u.textContent="למשתתף זה טרם נרשם מספר טלפון — פנו למנהל הקבוצה";return}d.disabled=!0,d.textContent="בודקים…";try{if(rn(y,h.value)){await Oa(e,y.id),Me(e.id,y.id),c.close(),E(`שלום ${y.name}, החשבון שלכם פתוח ✓`),Y();return}u.textContent="מספר הטלפון אינו תואם לשם שנבחר",h.value="",h.focus()}catch(b){console.error(b),u.textContent="הבדיקה נכשלה — נסו שוב"}d.disabled=!1,d.textContent="כניסה לחשבון"});const l=m('[data-ref="joinnew"]',c.el);l.addEventListener("click",async()=>{const p=m('[data-ref="newname"]',c.el).value.trim(),u=m('[data-ref="newphone"]',c.el).value.trim();if(!p){Pe(m('[data-ref="newname"]',c.el),"נא להזין שם");return}if(!Logic.validatePhone(u)){Pe(m('[data-ref="newphone"]',c.el),"מספר הטלפון אינו תקין — למשל 050-0000000");return}l.disabled=!0,l.textContent="מצטרפים…";try{let h=e;if(L.getTripOnce){const N=await L.getTripOnce(e.id);N&&(h=N)}const v=h.members||[],y=Logic.normalizePhone(u);Ca(p,y);const b=v.filter(N=>Logic.phonesEqual(we(N),y));if(b.length){if(!await Zr(p,b[0])){l.disabled=!1,l.textContent="הצטרפות",Pe(m('[data-ref="newphone"]',c.el),`המספר רשום בקבוצה על שם ${b[0].name}. אם זה לא המספר שלכם — בדקו אותו והזינו שוב.`);return}await Oa(e,b[0].id),Me(e.id,b[0].id),e.members=v,c.close(),E(`שלום ${b[0].name}, החשבון שלכם פתוח ✓`),Y();return}const S=s?{units:i.units,kids:i.kids}:{},T=o&&i.scope==="all",w=v.find(N=>N.name===p&&!Dt(N));if(w){const N=await jr(e,w,Object.assign({phone:y},i.touched?S:{}),T);Dn(e.id,v),Me(e.id,w.id),c.close(),E((N.added?`שלום ${p}, החשבון שלכם פתוח ✓ — צורפתם גם ${qt(N.added)}`:`שלום ${p}, החשבון שלכם פתוח ✓`)+Nn(N)),Y();return}const k=Object.assign({id:Ve("m"),name:p,phone:y,color:Ie[v.length%Ie.length]},S),O=await Sr(e,k,T);Dn(e.id,v),Me(e.id,k.id),c.close(),E((O.added?`ברוכים הבאים, ${p}! צורפתם גם ${qt(O.added)} ✓`:`ברוכים הבאים, ${p}! נוספתם לקבוצה ✓`)+Nn(O)),Y()}catch(h){console.error(h),l.disabled=!1,l.textContent="הצטרפות",E("ההצטרפות נכשלה — נסו שוב")}})}function Kn(e,t){if(!t||!(de(e)||t.id===se(e.id))){E("הפירוט האישי גלוי למשתתף עצמו ולמנהל הקבוצה");return}const a=Logic.memberBreakdown(e,f.expenses,t.id),n=a.paidTotal,s=a.shareTotal,o=a.net,i=o>0?`לקבל ${V(o,e.base)}`:o<0?`לשלם ${V(-o,e.base)}`:"מאוזן ✓",c=f.expenses.map(y=>{const b=Logic.expenseShares(e,y),S=b.shares[t.id]||0,T=y.payerId===t.id;if(!T&&!S)return"";const w=ve.find(k=>k.id===y.category)||ve[ve.length-1];return`
          <div class="me-line mv">
            <span class="mv-ic" aria-hidden="true">${w.ic}</span>
            <span class="mv-mid">
              <b>${r(y.note||w.nm)}</b>
              <small><span class="num">${r(_e(y.date))}</span>${T?` · שולם כאן ${V(b.total,e.base)}`:""}</small>
            </span>
            <span class="amt">${S?V(S,e.base):'<span aria-hidden="true">—</span><span class="sr-only">לא בחלוקה</span>'}</span>
          </div>`}).filter(Boolean).join(""),d=Logic.splitsByHead(e),l=de(e),p=l||t.id===se(e.id),u=l&&Number(t.joinFrom)>0?Logic.retroTargets(e,f.expenses,t.id,t.joinFrom).length:0,h=pe(`
      <div class="sheet-head">
        ${Fe(t,"lg")}
        <h2 class="sheet-title">${r(t.name)}</h2>
      </div>
      ${t.phone?`<p class="hint" style="margin:-8px 0 12px;">📞 <a href="tel:${r(String(t.phone).replace(/[^\d+]/g,""))}" style="color:var(--brand-strong);"><span class="num">${r(t.phone)}</span></a></p>`:""}
      ${d?`
      <div class="heads-line">
        <span class="heads-line-txt"><span aria-hidden="true">👨‍👩‍👧</span> <b>${r(Pr(t))}</b><small class="heads-count">בחלוקה: ${r(Vt(e,t))}</small></span>
        ${p?`<button class="btn sm" data-act="household" data-id="${r(t.id)}" aria-label="עדכון מספר הנפשות של ${r(t.name)}">עדכון</button>`:""}
      </div>`:""}
      ${t.ghost?"":ui(e,t,{owed:o,cls:"in-sheet"})}
      <div class="tile-grid tiles3">
        <div class="tile"><div class="lbl">שולם</div><div class="val">${V(n,e.base)}</div></div>
        <div class="tile"><div class="lbl">החלק</div><div class="val">${V(s,e.base)}</div></div>
        <div class="tile"><div class="lbl">יתרה</div><div class="val" style="color:${o>0?"var(--good)":o<0?"var(--bad)":"var(--ink)"};">${i}</div></div>
      </div>
      ${u?`
      <div class="banner" style="margin:4px 0 12px;">
        הצטרפות באמצע: ${u===1?"הוצאה משותפת אחת שנרשמה לפני ההצטרפות אינה מתחלקת":Re(u,"","הוצאות משותפות")+" שנרשמו לפני ההצטרפות אינן מתחלקות"} על החשבון הזה.
        <button class="btn sm block" data-ref="retro" style="margin-top:10px;">${u===1?"צירוף גם להוצאה שכבר נרשמה":"צירוף גם להוצאות שכבר נרשמו"}</button>
      </div>`:""}
      <h2 class="section-title" style="margin-top:6px;">התנועות <small>הסכום — החלק בהוצאה</small></h2>
      <div class="me-lines">${c||'<p class="hint">אין עדיין תנועות למשתתף זה.</p>'}</div>
      ${yr(e,t)}`),v=m('[data-ref="retro"]',h.el);v&&v.addEventListener("click",()=>dd(e,t,u)),gr(h,e,t)}function jd(){return'<button class="admin-dot" data-act="admin-dot" aria-label="אזור המנהל">•</button>'}let za=0,el=null,ha=null;function Td(){const e=m(".admin-dot");if(!e)return;const t=()=>{f.screen="admin",f.tripId=null,Y()},a=()=>{ha=setTimeout(()=>{ha=null,t()},750)},n=()=>{ha&&(clearTimeout(ha),ha=null)};e.addEventListener("pointerdown",a),["pointerup","pointerleave","pointercancel"].forEach(s=>e.addEventListener(s,n)),e.addEventListener("click",()=>{za++,clearTimeout(el),el=setTimeout(()=>{za=0},900),za>=3&&(za=0,t())})}let yi=0,qa=null,gi=null,vi=0;const tl={};function al(){return f.joinTripId?"join|"+f.joinTripId:f.ready?f.tripId?"trip|"+f.tripId:f.screen:"boot"}function nl(e){return f.joinTripId?e+"|"+(f.ready?1:0):e+(f.tripId?"|"+(f.expensesReady?1:0)+"|"+(se(f.tripId)||""):"")}function Y(){const e=m("#app");if(!e)return;const t=al();t!==qa&&qa&&(tl[qa]=window.scrollY),nl(t)===gi&&(clearTimeout(vi),e.classList.remove("enter"));try{Od(e),Cd(e),yi=0;const n=al();Ad(e,n,n!==qa,nl(n))}catch(n){console.error("render failed",n),yi++,e.innerHTML=`
        <div class="banner warn" role="status" style="margin-top:24px;">משהו השתבש בתצוגה — נסו לרענן. מה שנרשם שמור.</div>
        <div class="form-row" style="margin-top:12px;">
          <button class="btn block" data-act="reload">רענון</button>
          ${f.tripId&&yi<3?'<button class="btn ghost block" data-act="back-home">חזרה לרשימת הקבוצות</button>':""}
        </div>`}}function Ad(e,t,a,n){if(a){qa=t;const s=t.indexOf("|")<0&&tl[t]||0;try{window.scrollTo(0,s)}catch{}}n!==gi&&(gi=n,e.classList.add("enter"),clearTimeout(vi),vi=setTimeout(()=>e.classList.remove("enter"),900))}let mt=null,sl="";function Cd(e){if(mt||(mt=document.getElementById("intro")),!mt)return;const t=m("[data-ref=intro-slot]",e);if(t){const a=Mn().length?"collapsed":"open";a!==sl&&(sl=a,mt.open=a==="open"),mt.hidden=!1,t.replaceWith(mt)}else mt.hidden=!0,mt.isConnected||e.insertAdjacentElement("afterend",mt)}function Od(e){if(e.removeAttribute("aria-busy"),f.joinTripId){const t=f.ready?f.trips.find(o=>o.id===f.joinTripId):null,a=document.activeElement;if(t&&a&&e.contains(a)&&/^(INPUT|TEXTAREA|SELECT)$/.test(a.tagName)&&e.firstElementChild&&e.firstElementChild.dataset.joinTrip===t.id)return;let s=null;if(a&&e.contains(a)&&a.matches("[data-step], [data-scope], [data-pm], [data-act=jpay-toggle]")){const o=a.closest("[data-stepper]");s=o?`[data-stepper="${o.dataset.stepper}"] [data-step="${a.dataset.step}"]`:a.dataset.pm?`[data-pm="${a.dataset.pm}"]`:a.dataset.act==="jpay-toggle"?"[data-act=jpay-toggle]":`[data-scope="${a.dataset.scope}"]`}if(e.innerHTML=xd(t),wd(e),El(e),s){const o=m(s,e);o&&o.focus()}return}f.ready&&(f.tripId&&!Be()&&(f.unsubExp&&(f.unsubExp(),f.unsubExp=null),f.tripId=null,f.expenses=[],f.expensesReady=!1,Ia()),e.innerHTML=(f.tripId?nd(Be()):f.screen==="admin"?Gc():Jc())+(f.screen==="admin"?"":jd()),Td(),El(e))}function Ja(e,t,a){const n=!!e,s=!n&&a&&a.plan&&re[a.plan]&&re[a.plan].price>0?a.plan:"";if(n&&!de(e)){E("הגדרות הקבוצה שמורות למנהל הקבוצה");return}const o=t||ze(e);if(n&&!f.expensesReady){E("ההוצאות עדיין נטענות — נסו שוב בעוד רגע");return}const i=n?Q(e):{id:Ve("t"),ownerToken:Ve("own"),name:"",dest:"",flag:o.ic,kind:o.id,start:"",end:"",base:"ILS",rates:{},budget:0,colorIdx:f.trips.length%Qt.length,members:[],created:Date.now(),stats:{count:0,totalCents:0},plan:"free",planUntil:0,vis:{exp:"mine",bal:"mine",sum:"off"},splitBy:cd.indexOf(o.id)>=0?"head":"member",kidRate:.5},c=["mangal","team","reunion","simcha"].indexOf(o.id)>=0,d=new Set;n&&f.expenses.forEach(x=>{d.add(x.payerId),Logic.partsOf(i,x).forEach(P=>d.add(P))});const l={splitBy:i.splitBy==="head"?"head":"member",kidRate:Logic.kidRateOf(i)},p={units:1,kids:0},u=n&&Logic.onlyExpenses(f.expenses).length>0,h={scope:"from-now"},v=new Set((e&&e.members||[]).map(x=>x.id)),y=pe(`
      <div class="sheet-head">
        <h2 class="sheet-title">${n?"הגדרות הקבוצה":`${o.ic} קבוצה חדשה — ${o.nm}`}</h2>
      </div>
      <div class="field">
        <label for="f-name">שם הקבוצה</label>
        <input class="input" id="f-name" maxlength="60" placeholder="למשל: ${r(o.ex)}" value="${r(i.name)}">
      </div>
      ${n?"":`
      <div class="form-row">
        <div class="field">
          <label for="f-myname">השם שלכם (מנהל הקבוצה)</label>
          <input class="input" id="f-myname" maxlength="24" autocomplete="name" placeholder="השם המלא"
            value="${r(je().name||"")}">
        </div>
        <div class="field">
          <label for="f-myphone">הטלפון שלכם</label>
          <input class="input ltr" id="f-myphone" type="tel" inputmode="tel" maxlength="20" autocomplete="tel"
            placeholder="050-0000000" aria-label="מספר הטלפון שלי"
            value="${r(je().phone||"")}">
        </div>
      </div>
      <div class="field" data-ref="myheads" ${l.splitBy==="head"?"":"hidden"}>
        <label>כמה אתם?</label>
        ${fa(i,p)}
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
        <div class="chip-row" role="group" aria-label="בחירת סמל לקבוצה">${(Mi[o.id]||Mi.other).map(x=>`<button class="chip" data-flag="${r(x)}" style="font-size:19px; padding:5px 11px;">${r(x)}</button>`).join("")}</div>
      </div>
      <div class="form-row">
        <div class="field">
          <label for="f-start">${c?"תאריך":"מתאריך"}</label>
          <input class="input" id="f-start" type="date" value="${r(i.start)}">
        </div>
        ${c?"":`
        <div class="field">
          <label for="f-end">עד תאריך</label>
          <input class="input" id="f-end" type="date" value="${r(i.end)}">
        </div>`}
      </div>
      ${n?"":`
      <div class="field">
        <label for="f-base">מטבע החישוב של הקבוצה</label>
        <select class="input" id="f-base">
          ${ya.map(x=>`<option value="${x.c}" ${x.c===i.base?"selected":""}>${r(x.n)} (${x.c})</option>`).join("")}
        </select>
        <p class="hint">כל המאזנים וההתחשבנות יחושבו במטבע הזה. בדרך כלל — שקל.</p>
      </div>`}
      ${n?`
      <div class="field">
        <label>התראות</label>
        <button class="btn block" data-ref="notifbtn" style="justify-content:space-between;">
          <span>${ut()?"🔔 התראה וצליל בכל הוצאה חדשה":"🔕 ההתראות כבויות"}</span>
          <span style="color:var(--brand-strong);font-weight:800;">${ut()?"פעיל":"כבוי"}</span>
        </button>
        <p class="hint">הצליל נשמע כשמישהו בקבוצה רושם הוצאה — כל עוד האפליקציה פתוחה.</p>
      </div>`:""}
      <div class="field">
        <label for="f-budget">תקציב ב־${r(i.base)} (רשות)</label>
        <input class="input ltr" id="f-budget" inputmode="decimal" aria-label="תקציב ב${r(at(i.base).n)}" placeholder="למשל: 5,000" value="${i.budget?r(i.budget):""}">
        <p class="hint">הסכום במטבע החישוב של הקבוצה (${r(i.base)}). נציג מד התקדמות מול התקציב, ונתריע בחריגה.</p>
      </div>
      <div class="field">
        <label for="f-mgrpass">סיסמת מנהל הקבוצה ${n?'<span style="font-weight:400;color:var(--muted);">(להחלפה — משאירים ריק אם אין שינוי)</span>':'<span style="font-weight:400;color:var(--muted);">(רשות, מומלץ)</span>'}</label>
        <input class="input ltr" id="f-mgrpass" type="password" autocomplete="new-password" maxlength="24"
          placeholder="${n&&(i.mgrPass||i.hasMgrPass)?"••••••":"בחרו סיסמה קצרה"}"
          aria-label="סיסמת מנהל הקבוצה">
        <p class="hint">עם הסיסמה נכנסים לניהול הקבוצה מכל מכשיר: כל החשבונות, אישור מחיקות ובחירה מה המשתתפים רואים.</p>
      </div>
      ${n?`
      <div class="field">
        <label>מה המשתתפים רואים <span style="font-weight:400;color:var(--muted);">(המנהל תמיד רואה הכול)</span></label>
        <div style="display:flex;flex-direction:column;gap:8px;">
          ${Object.keys(Zn).map(x=>{const P=Zn[x],I=Xe(i)[x]===P.on;return`
          <button class="btn block" data-visopt="${x}" aria-pressed="${I}" style="justify-content:space-between;">
            <span>${I?P.lblOn:P.lblOff}</span>
            <span style="color:var(--brand-strong);font-weight:800;">${I?"גלוי":"מוסתר"}</span>
          </button>`}).join("")}
        </div>
        <p class="hint" data-ref="vishint">ברירת המחדל: כל משתתף רואה רק את ההוצאות שלו. בקבוצה משותפת התיאור, ההערה והקבלה של הוצאות של אחרים לא נשלחים למכשיר שלו; הסכומים כן — הם נדרשים לחישוב היתרות. הסתרת המאזן והסיכום היא הסתרה בתצוגה.</p>
      </div>
      <div class="field">
        <label>מסלול הקבוצה</label>
        <div class="banner" style="margin:0 0 8px;">${bn(i,f.expenses)}</div>
        <button class="btn block" data-ref="plansbtn"><span aria-hidden="true">💳</span>&nbsp; המסלולים והמחירים</button>
      </div>`:""}
      <div class="field">
        <label id="f-split-lbl">איך מתחלקות ההוצאות?</label>
        <div class="chip-row" role="group" aria-labelledby="f-split-lbl">
          <button type="button" class="chip" data-splitby="member" aria-pressed="${l.splitBy==="member"}">שווה לכל משתתף</button>
          <button type="button" class="chip" data-splitby="head" aria-pressed="${l.splitBy==="head"}">לפי ראש — מבוגרים וילדים</button>
        </div>
        <p class="hint" data-ref="splithint"></p>
        <div data-ref="kidratebox" style="margin-top:12px;" ${l.splitBy==="head"?"":"hidden"}>
          <label id="f-kid-lbl" class="sub-label">כמה משלמים על ילד?</label>
          <div class="chip-row" role="group" aria-labelledby="f-kid-lbl">
            ${Or.map(x=>`<button type="button" class="chip" data-kidrate="${x.v}" aria-pressed="${l.kidRate===x.v}">${r(x.nm)}</button>`).join("")}
          </div>
        </div>
      </div>
      <div class="field">
        <label id="f-settle-lbl">איך מתחשבנים בסוף?</label>
        <div class="chip-row" role="group" aria-labelledby="f-settle-lbl">
          ${ua.map(x=>`<button type="button" class="chip" data-settlemode="${x.id}" aria-pressed="${Logic.settleModeOf(i)===x.id}">${r(x.nm)}</button>`).join("")}
        </div>
        <p class="hint" data-ref="settlehint">${r((ua.find(x=>x.id===Logic.settleModeOf(i))||ua[0]).hint)}</p>
      </div>
      <div class="field">
        <label>${n?"המשתתפים בקבוצה":"משתתפים נוספים (רשות)"}</label>
        <div class="member-add-row">
          <input class="input" data-ref="newmember" maxlength="24" aria-label="שם המשתתף" placeholder="שם המשתתף, למשל: דוד">
          <button class="btn sm" data-ref="addmember" style="min-height:48px;">הוספה</button>
        </div>
        <div data-ref="memberlist" style="margin-top:10px;"></div>
        <p class="hint">${n?"משתתף שכבר רשום על הוצאה אינו ניתן להסרה.":"אתם נוספים אוטומטית כמנהל. את השאר הכי קל לצרף בקישור ההזמנה — מיד אחרי הפתיחה."}</p>
        ${u?`<div data-ref="addscope" hidden style="margin-top:12px;">${ai(h.scope,"",!0)}</div>`:""}
      </div>
      ${n?`
      <div class="field">
        <label>שערי המרה <span style="font-weight:400; color:var(--muted);">(1 יחידת מטבע = כמה ${r(i.base)})</span></label>
        <div data-ref="rates"></div>
        <select class="input" data-ref="addrate" aria-label="הוספת מטבע לקבוצה" style="margin-top:6px;">
          <option value="">+ הוספת מטבע לקבוצה…</option>
        </select>
        <button class="btn sm ghost block" data-ref="liverates" style="margin-top:8px;">🔄 &nbsp;עדכון לשער החי של היום</button>
        <p class="hint">השערים משמשים לחישוב כל ההוצאות במטבע זה — מומלץ לעדכן לפי החיוב בפועל בכרטיס האשראי.</p>
      </div>`:""}
      <button class="btn primary block" data-ref="save" style="margin-top:6px;">${n?"שמירת השינויים":"פתיחת הקבוצה"}</button>
      ${n?"":`<p class="hint" style="text-align:center;margin-top:10px;">בפתיחת קבוצה אתם מאשרים את
        <button class="linklike" data-act="legal" data-id="terms">התקנון</button> ואת
        <button class="linklike" data-act="legal" data-id="privacy">מדיניות הפרטיות</button>.</p>`}
      ${n&&$c(i)?'<button class="btn danger block" data-ref="deltrip" style="margin-top:10px;">מחיקת הקבוצה לצמיתות</button>':n&&de(i)?`<p class="hint" data-ref="delhint" style="text-align:center;margin-top:12px;">🔒 ${Co}</p>`:n?'<p class="hint" style="text-align:center;margin-top:12px;">🔒 מחיקת הקבוצה שמורה למנהל.</p>':""}
    `),b=y.el,S=m('[data-ref="flagbtn"]',b),T=m('[data-ref="flaggrid"]',b);S.addEventListener("click",()=>{T.hidden=!T.hidden}),J("[data-flag]",b).forEach(x=>x.addEventListener("click",()=>{i.flag=x.dataset.flag,S.textContent=i.flag,T.hidden=!0}));const w=m('[data-ref="notifbtn"]',b);w&&w.addEventListener("click",async()=>{if(ut())Sn(!1),w.innerHTML='<span>🔕 ההתראות כבויות</span><span style="color:var(--brand-strong);font-weight:800;">כבוי</span>',E("ההתראות כובו");else{Sn(!0),Us(),w.innerHTML='<span>🔔 התראה וצליל בכל הוצאה חדשה</span><span style="color:var(--brand-strong);font-weight:800;">פעיל</span>';const x=await Uo();E(x?"התראות פעילות 🔔 — כך הן יישמעו":"התראות פעילות בתוך האפליקציה 🔔")}});const k=m('[data-ref="plansbtn"]',b);k&&k.addEventListener("click",()=>dt(Be()||e)),i.vis=Xe(i),J("[data-visopt]",b).forEach(x=>x.addEventListener("click",()=>{const P=x.dataset.visopt,I=Zn[P];i.vis[P]=i.vis[P]===I.on?I.off:I.on;const ie=i.vis[P]===I.on;x.innerHTML=`<span>${ie?I.lblOn:I.lblOff}</span><span style="color:var(--brand-strong);font-weight:800;">${ie?"גלוי":"מוסתר"}</span>`,x.setAttribute("aria-pressed",String(ie))}));const O=m('[data-ref="memberlist"]',b);function N(){const x=l.splitBy==="head",P=Object.assign({},i,{kidRate:l.kidRate}),I=q=>d.has(q.id)||n&&q.id===e.managerId?"":`<button class="xbtn" data-delmember="${r(q.id)}" aria-label="הסרת ${r(q.name)} מהקבוצה">✕</button>`;O.className=x?"hm-list":"chip-row",O.innerHTML=i.members.length?x?i.members.map(q=>`
              <div class="hm-card" data-mid="${r(q.id)}" role="group" aria-label="${r(q.name)}">
                <div class="hm-top">
                  <span class="dot" style="background:${St(q)}"></span>
                  <b class="hm-name">${r(q.name)}</b>
                  <span class="hm-sum" data-ref="hsum">${r(Vt(P,q))}</span>
                  ${I(q)}
                </div>
                ${fa(P,{units:Jt(q),kids:Yt(q)},"",q.name)}
              </div>`).join(""):i.members.map(q=>`<span class="chip on"><span class="dot" style="background:${St(q)}"></span>${r(q.name)}${I(q)}</span>`).join(""):'<span class="hint">עדיין לא נוספו משתתפים.</span>',J("[data-delmember]",O).forEach(q=>q.addEventListener("click",()=>{i.members=i.members.filter(ce=>ce.id!==q.dataset.delmember),N()})),J(".hm-card",O).forEach(q=>{const ce=i.members.find(ue=>ue.id===q.dataset.mid);if(!ce)return;const Z={units:Jt(ce),kids:Yt(ce)};Ba(q,Z,(ue,me)=>{ce[ue]=me,m('[data-ref="hsum"]',q).textContent=Vt(P,ce)})});const ie=m('[data-ref="addscope"]',b);ie&&(ie.hidden=!i.members.some(q=>!v.has(q.id)))}function K(){const x=m('[data-ref="newmember"]',b),P=x.value.trim();if(P){if(i.members.some(I=>I.name===P)){E("כבר קיים משתתף בשם הזה");return}i.members.push({id:Ve("m"),name:P,color:Ie[i.members.length%Ie.length]}),x.value="",x.focus(),N()}}m('[data-ref="addmember"]',b).addEventListener("click",K),m('[data-ref="newmember"]',b).addEventListener("keydown",x=>{x.key==="Enter"&&(x.preventDefault(),K())}),N();const U=m('[data-ref="addscope"]',b);U&&Cr(U,h);function z(){const x=l.splitBy==="head";J("[data-splitby]",b).forEach(ie=>ie.setAttribute("aria-pressed",String(ie.dataset.splitby===l.splitBy))),J("[data-kidrate]",b).forEach(ie=>ie.setAttribute("aria-pressed",String(Number(ie.dataset.kidrate)===l.kidRate))),m('[data-ref="kidratebox"]',b).hidden=!x;const P=m('[data-ref="myheads"]',b);P&&(P.hidden=!x);const I=u&&(l.splitBy!==(e.splitBy==="head"?"head":"member")||x&&l.kidRate!==Logic.kidRateOf(e));m('[data-ref="splithint"]',b).textContent=(x?"בכל חשבון רושמים כמה מבוגרים וילדים, וההוצאות מתחלקות לפי מספר הראשים. מתאים למנגל, למפגש משפחתי ולשבת משותפת.":"חלק שווה לכל חשבון, בלי קשר למספר הנפשות.")+(I?" השינוי יחול גם על ההוצאות שכבר נרשמו.":"")}J("[data-splitby]",b).forEach(x=>x.addEventListener("click",()=>{l.splitBy=x.dataset.splitby,z(),N()})),J("[data-kidrate]",b).forEach(x=>x.addEventListener("click",()=>{l.kidRate=Number(x.dataset.kidrate),z(),N()})),z();let B=Logic.settleModeOf(i);J("[data-settlemode]",b).forEach(x=>x.addEventListener("click",()=>{B=x.dataset.settlemode,J("[data-settlemode]",b).forEach(P=>P.setAttribute("aria-pressed",String(P.dataset.settlemode===B))),m('[data-ref="settlehint"]',b).textContent=(ua.find(P=>P.id===B)||ua[0]).hint}));const ae=m('[data-ref="myheads"]',b);ae&&Ba(ae,p);const C=m("#f-base",b);if(C&&C.addEventListener("change",()=>{const x=C.value,P=m('label[for="f-budget"]',b);P&&(P.textContent=`תקציב ב־${x} (רשות)`);const I=m("#f-budget",b);if(I){I.setAttribute("aria-label",`תקציב ב${at(x).n}`);const ie=I.nextElementSibling;ie&&ie.classList.contains("hint")&&(ie.textContent=`הסכום במטבע החישוב של הקבוצה (${x}). נציג מד התקדמות מול התקציב, ונתריע בחריגה.`)}}),n){let I=function(){const ce=Object.keys(i.rates||{}).filter(Z=>Z!==i.base);x.innerHTML=ce.length?ce.map(Z=>`
              <div class="rate-row">
                <span class="cur">${r(at(Z).n)} (${r(Z)})</span>
                <input class="input" inputmode="decimal" data-rate="${r(Z)}" aria-label="שער המרה של ${r(at(Z).n)}" value="${r(i.rates[Z])}">
                <span style="color:var(--muted);">${r(i.base)}</span>
                <button class="xbtn" data-delrate="${r(Z)}" aria-label="הסרת ${r(at(Z).n)} מהקבוצה">✕</button>
              </div>`).join(""):'<p class="hint">כשתירשם הוצאה במטבע זר — השער יופיע כאן.</p>',P.innerHTML='<option value="">+ הוספת מטבע לקבוצה…</option>'+ya.filter(Z=>Z.c!==i.base&&!(Z.c in(i.rates||{}))).map(Z=>`<option value="${Z.c}">${r(Z.n)} (${Z.c})</option>`).join(""),J("[data-rate]",b).forEach(Z=>Z.addEventListener("change",()=>{const ue=nt(Z.value);ue>0&&(i.rates[Z.dataset.rate]=ue)})),J("[data-delrate]",b).forEach(Z=>Z.addEventListener("click",()=>{const ue=Z.dataset.delrate;if(f.expenses.some(me=>me.currency===ue)){E("יש הוצאות במטבע הזה — אי אפשר להסיר");return}delete i.rates[ue],I()}))};const x=m('[data-ref="rates"]',b),P=m('[data-ref="addrate"]',b);P.addEventListener("change",()=>{P.value&&(i.rates[P.value]=Ha(P.value,i.base),I())}),I();const ie=m('[data-ref="liverates"]',b);ie.addEventListener("click",async()=>{ie.disabled=!0,ie.textContent="מושכים שערים…";let ce=null;try{ce=await Ys(i.base)}finally{ie.disabled=!1,ie.innerHTML="🔄 &nbsp;עדכון לשער החי של היום"}if(!ce){E(ke?"לא הצלחנו למשוך שערים כרגע — נסו שוב":"משיכת שערים חיים זמינה בגרסת הווב");return}let Z=0;Object.keys(i.rates||{}).forEach(ue=>{const me=Vs(ue,i.base);me&&Math.abs(me-i.rates[ue])>1e-6&&(i.rates[ue]=Math.round(me*1e4)/1e4,Z++)}),I(),E(Z?Je(Z,"שער אחד עודכן","שערים עודכנו")+" ✓ (יש לשמור)":"השערים כבר מעודכנים ✓")});const q=m('[data-ref="deltrip"]',b);q&&q.addEventListener("click",async()=>{const ce=f.expenses.length,Z=ce===0?"":ce===1?" יחד עם ההוצאה שרשומה בה":` יחד עם ${ce} ההוצאות שרשומות בה`;if(await xe("מחיקת הקבוצה",`הקבוצה ״${i.name}״ תימחק לצמיתות${Z}. להמשיך?`,"מחיקה לצמיתות",!0))try{const me=await L.deleteTripDeep(i.id);if(y.close(),Xs(),E("הקבוצה נמחקה"),f.assets){for(const ne of me)if(ne&&ne.photo)try{await f.assets.delete(ne.photo)}catch(ye){console.error(ye)}}}catch(me){console.error(me),E(me&&me.code==="denied"?Co:"המחיקה נכשלה — נסו שוב")}})}m('[data-ref="save"]',b).addEventListener("click",async()=>{i.name=m("#f-name",b).value.trim(),i.dest=m("#f-dest",b).value.trim(),i.start=m("#f-start",b).value;const x=m("#f-end",b);i.end=x?x.value:m("#f-start",b).value,i.budget=nt(m("#f-budget",b).value)||0,n||(i.base=m("#f-base",b).value);const P=m("#f-mgrpass",b),I=P?P.value.trim():"";if(!i.name){Pe(m("#f-name",b),"נא לתת שם לקבוצה");return}if(I&&I.length<4){Pe(P,"סיסמת המנהל — לפחות 4 תווים");return}const ie=!!L.setManagerPass;let q=null;if(!n){const ne=m("#f-myname",b).value.trim(),ye=m("#f-myphone",b).value.trim();if(!ne){Pe(m("#f-myname",b),"נא להזין את השם שלכם");return}if(!Logic.validatePhone(ye)){Pe(m("#f-myphone",b),"מספר הטלפון אינו תקין — למשל 050-0000000");return}q={id:Ve("m"),name:ne,phone:Logic.normalizePhone(ye)},l.splitBy==="head"&&(q.units=p.units,q.kids=p.kids),Ca(ne,Logic.normalizePhone(ye)),i.members=[q].concat(i.members.filter(_=>_.name!==ne)),i.members.forEach((_,$)=>{_.color=Ie[$%Ie.length]}),i.managerId=q.id;const g=Dl();g?i.src=g:delete i.src}if(n&&!i.members.length){E("נא להוסיף לפחות משתתף אחד");return}if(i.start&&i.end&&i.end<i.start){Pe(x,"תאריך הסיום מוקדם מתאריך ההתחלה");return}i.splitBy=l.splitBy,i.kidRate=l.kidRate,i.settleMode=B;const ce=n?i.members.filter(ne=>!v.has(ne.id)):[],Z=u&&h.scope==="all"?ce.map(ne=>ne.id):[],ue=Date.now();u&&ce.forEach(ne=>{ne.joinFrom=ue});const me=m('[data-ref="save"]',b);me.disabled=!0,me.textContent="שומרים…";try{if(I&&!ie&&(i.mgrPass=await Ao(i.id,I)),n){const $=Logic.computeBalances(i,f.expenses);if(i.stats={count:mn(f.expenses),totalCents:$.grand},L.getTripOnce)try{const H=await L.getTripOnce(i.id);if(H){const R=["name","dest","flag","start","end","budget","members","rates","stats","vis","splitBy","kidRate","settleMode"];I&&!ie&&R.push("mgrPass"),R.forEach(X=>{X!=="members"&&(H[X]=i[X])});const G=new Set(i.members.map(X=>X.id)),te=(H.members||[]).filter(X=>!v.has(X.id)&&!G.has(X.id)),ee={},Ae={};(H.members||[]).forEach(X=>{ee[X.id]=X}),(e.members||[]).forEach(X=>{Ae[X.id]=X}),H.members=i.members.map(X=>{const Oe=ee[X.id];if(!Oe)return X;const He=Ae[X.id]||{},A=Object.assign({},X);return Oe.phone&&(!X.phone||Logic.phonesEqual(X.phone||"",He.phone||""))&&(A.phone=Oe.phone),["pay","phoneChangedAt","phoneChangedBy","phoneSet"].forEach(D=>{D in Oe?A[D]=Oe[D]:delete A[D]}),["units","kids","joinFrom"].forEach(D=>{X[D]===He[D]&&Oe[D]!==He[D]&&(A[D]=Oe[D])}),A}).concat(te),Object.keys(i).forEach(X=>{X in H||(H[X]=i[X])}),Object.assign(i,H)}}catch(H){console.error("fresh trip read failed",H)}}let ne=!1;if(!n&&q&&q.phone){let $=null;try{$=await wo(q.phone)}catch(H){console.error("license lookup failed — retrying",H);try{$=await wo(q.phone)}catch(R){console.error("license lookup failed",R),ne=!0}}$&&(Object.assign(i,{licPlan:$.plan,licUntil:Number($.until)||0,licenseId:$.id,brand:$.brand||null}),xo($))}!n&&i.ownerToken&&ra(i.id,i.ownerToken),I&&!ie&&To(i.id,i.mgrPass),await L.saveTrip(i);let ye=!1;if(I&&ie)try{await L.setManagerPass(i.id,I)}catch($){console.error("manager pass failed",$),ye=!0}q&&Me(i.id,q.id);let g={added:0,failed:0};if(Z.length&&(g=await Pn(i,Z,ue),!g.failed))for(const $ of Z)await st(i,{id:$,joinFrom:0});!n&&!f.trips.some($=>$.id===i.id)&&f.trips.unshift(Q(i)),y.close();const _=Z.length?(i.members.find($=>$.id===Z[0])||{}).name:"";E(ye?"ההגדרות נשמרו ✓ — אבל את סיסמת המנהל אפשר לקבוע רק מהמכשיר שפתח את הקבוצה (או אחרי כניסה בסיסמה הקודמת)":!n&&ne?"הקבוצה נפתחה ✓ — לא הצלחנו לבדוק כרגע את הרישיון העסקי; מנהל השירות יכול להחיל אותו בהמשך":!n&&s?"הקבוצה נפתחה ✓ — עכשיו בוחרים את המסלול":n?g.failed?"ההגדרות נשמרו ✓ — הצירוף להוצאות הקודמות לא הושלם; אפשר להשלים מכרטיס המשתתף":g.added?Z.length===1?`ההגדרות נשמרו ✓ — החשבון של ${_} צורף גם ${qt(g.added)}`:`ההגדרות נשמרו ✓ — החשבונות החדשים צורפו גם ${qt(g.added)}`:"ההגדרות נשמרו ✓":"הקבוצה נפתחה ✓ — עכשיו מזמינים את החברים"),n||(Qe(i.id),ke&&i.kind==="trip"&&i.dest&&Vo(i.dest).then($=>{$&&Y()}).catch(()=>{}),s?setTimeout(()=>{const $=Be();$&&$.id===i.id&&dt($,!1,0,{pick:s})},550):ke&&(i.members||[]).length>=1&&setTimeout(()=>{const $=Be();$&&$i($)},550))}catch(ne){console.error(ne),me.disabled=!1,me.textContent=n?"שמירת השינויים":"פתיחת הקבוצה",E(zt(ne))}})}function Ya(e,t){const a=Be();if(!a)return;if(!f.expensesReady){E("ההוצאות עדיין נטענות — נסו שוב בעוד רגע");return}if(!(a.members||[]).length){E("קודם מוסיפים משתתפים בהגדרות הקבוצה");return}if(!e&&a.closedAt&&!de(a)){E("הקבוצה נסגרה להתחשבנות — הוצאה חדשה דרך מנהל הקבוצה");return}if(!e&&vs(f.expenses)>=da(a).maxExp){de(a)?dt(a,!0):E("הקבוצה הגיעה למגבלת ההוצאות של המסלול — מנהל הקבוצה יכול לשדרג");return}const n=!!e,s=n&&!Po(a,e),o=Ns(a),i=n?Q(e):{id:Ve("e"),amount:t&&t.amount||"",currency:t&&t.currency||a.base,category:Ci(a,f.expenses)[0].id,payerId:o||a.members[0].id,parts:a.members.map(C=>C.id),split:{mode:"equal"},note:"",date:An(),created:Date.now()};i.split||(i.split={mode:"equal"});const c=Logic.splitsByHead(a),d=()=>i.split.mode==="custom"?"custom":c&&i.split.mode==="member"?"member":"equal";let l={changed:!1,file:null,removed:!1},p=i.currency===a.base?1:a.rates&&a.rates[i.currency]||Ha(i.currency,a.base);const u=pe(`
      <div class="sheet-head">
        <h2 class="sheet-title">${s?"פרטי ההוצאה":n?"עריכת הוצאה":"הוצאה חדשה"}</h2>
      </div>
      ${i.hidden?`<p class="hint" data-ref="hiddennote">בקבוצה הזו כל משתתף רואה רק את ההוצאות שלו, ולכן התיאור, ההערה והקבלה של ההוצאה הזו לא נשלחו למכשיר הזה. מנהל הקבוצה רואה אותם מהמכשיר שפתח את הקבוצה או אחרי כניסה בסיסמת המנהל.${s?"":" שינוי בתיאור לא יישמר; הסכום והחלוקה כן."}</p>`:""}
      ${s?`<p class="hint" data-ref="readonlynote">${Mo}.${Ds(a,i)?" אפשר לבקש מהמנהל למחוק אותה.":""}</p>`:""}
      <fieldset class="exp-fields"${s?" disabled":""}>
      <div class="field">
        <input class="amount-input" data-ref="amount" inputmode="decimal" autocomplete="off"
          placeholder="0.00" aria-label="סכום ההוצאה" value="${r(i.amount)}">
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
          ${Ci(a,f.expenses).map(C=>`<button class="cat-cell" data-cat="${C.id}" aria-pressed="${i.category===C.id}"><div class="ic" aria-hidden="true">${C.ic}</div><div class="nm">${C.nm}</div></button>`).join("")}
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
          ${c?`
          <button class="chip" data-mode="equal" aria-pressed="${d()==="equal"}">לפי ראש</button>
          <button class="chip" data-mode="member" aria-pressed="${d()==="member"}">שווה לכל משתתף</button>`:`
          <button class="chip" data-mode="equal" aria-pressed="${d()==="equal"}">שווה בשווה</button>`}
          <button class="chip" data-mode="custom" aria-pressed="${d()==="custom"}">סכומים ידניים</button>
        </div>
        ${c?'<p class="split-preview" data-ref="splitprev" role="status"></p>':""}
        <div data-ref="custombox" style="margin-top:10px;" ${i.split.mode==="custom"?"":"hidden"}>
          <div class="split-list" data-ref="customlist"></div>
          <div class="split-status" data-ref="customstatus" role="status"></div>
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
      <div class="field">
        <label>קבלה</label>
        <div class="photo-box" data-ref="photobox" role="button" tabindex="0" aria-label="צילום או בחירת קבלה"></div>
        <input type="file" accept="image/*" capture="environment" data-ref="photoinput" hidden>
      </div>
      </fieldset>
      <div class="banner warn plan-limit" role="status" data-ref="planerr" hidden></div>
      ${s?"":`<button class="btn primary block" data-ref="save">${n?"שמירת השינויים":"שמירת ההוצאה"}</button>`}
      ${n?(()=>{const C=de(a),x=i.delReq&&i.delReq.by?i.delReq:null;return x&&C?`
            <div class="delreq-card" data-ref="delreqbox">
              <p class="delreq-lbl">⏳ בקשת מחיקה מאת ${r(le(a,x.by))} להוצאה הזו</p>
              <div class="form-row">
                <button class="btn ghost block" data-ref="reject">דחיית הבקשה</button>
                <button class="btn danger block" data-ref="approve">אישור ומחיקה</button>
              </div>
            </div>`:x?'<div class="delreq-card pending"><p class="delreq-lbl">⏳ נשלחה בקשת מחיקה — ממתינה לאישור מנהל הקבוצה</p></div>':s&&!Ds(a,i)?"":`<button class="btn danger block" data-ref="delexp" style="margin-top:10px;">${C?"מחיקת ההוצאה":"בקשת מחיקה מהמנהל"}</button>`})():""}
    `),h=u.el,v=m('[data-ref="amount"]',h);n||setTimeout(()=>v.focus(),250);const y=()=>{const C=[a.base];return Object.keys(a.rates||{}).forEach(x=>{C.includes(x)||C.push(x)}),C.includes(i.currency)||C.push(i.currency),C};function b(){const C=m('[data-ref="curchips"]',h);C.innerHTML=y().map(P=>`<button class="chip" data-cur="${r(P)}" aria-pressed="${i.currency===P}">${r(P)}</button>`).join("")+'<button class="chip" data-ref="morecur">אחר…</button>',J("[data-cur]",h).forEach(P=>P.addEventListener("click",()=>S(P.dataset.cur))),m('[data-ref="morecur"]',h).addEventListener("click",()=>{const P=m('[data-ref="curselect"]',h);P.hidden=!1,P.innerHTML='<option value="">בחירת מטבע…</option>'+ya.map(I=>`<option value="${I.c}">${r(I.n)} (${I.c})</option>`).join(""),P.focus()});const x=m('[data-ref="ratebox"]',h);if(i.currency!==a.base){x.hidden=!1,m('[data-ref="ratecur"]',h).textContent=i.currency;const P=m('[data-ref="rateinput"]',h);ar(P,p),P.setAttribute("aria-label","שער המרה של "+at(i.currency).n)}else x.hidden=!0}function S(C){i.currency=C,p=C===a.base?1:a.rates&&a.rates[C]||Ha(C,a.base),m('[data-ref="curselect"]',h).hidden=!0,b(),N(),O()}m('[data-ref="curselect"]',h).addEventListener("change",C=>{C.target.value&&S(C.target.value)}),m('[data-ref="rateinput"]',h).addEventListener("change",C=>{const x=nt(C.target.value);x>0&&(p=x),O()}),b(),J("[data-cat]",h).forEach(C=>C.addEventListener("click",()=>{i.category=C.dataset.cat,J("[data-cat]",h).forEach(x=>x.setAttribute("aria-pressed",String(x===C)))}));function T(){m('[data-ref="payers"]',h).innerHTML=a.members.map(C=>`<button class="chip" data-payer="${r(C.id)}" aria-pressed="${i.payerId===C.id}"><span class="dot" style="background:${St(C)}"></span>${r(C.name)}</button>`).join(""),J("[data-payer]",h).forEach(C=>C.addEventListener("click",()=>{i.payerId=C.dataset.payer,T()}))}T();function w(){const C=i.parts.length===a.members.length;m('[data-ref="parts"]',h).innerHTML=`<button class="chip" data-ref="allparts" aria-pressed="${C}">👥 כולם</button>`+a.members.map(x=>`<button class="chip" data-part="${r(x.id)}" aria-pressed="${i.parts.includes(x.id)}"><span class="dot" style="background:${St(x)}"></span>${r(x.name)}</button>`).join(""),m('[data-ref="allparts"]',h).addEventListener("click",()=>{i.parts=C?[]:a.members.map(x=>x.id),w(),N(),O()}),J("[data-part]",h).forEach(x=>x.addEventListener("click",()=>{const P=x.dataset.part;i.parts=i.parts.includes(P)?i.parts.filter(I=>I!==P):i.parts.concat(P),w(),N(),O()}))}w();function k(C){i.split.mode=C,J("[data-mode]",h).forEach(x=>x.setAttribute("aria-pressed",String(x.dataset.mode===d()))),m('[data-ref="custombox"]',h).hidden=C!=="custom",N(),O()}J("[data-mode]",h).forEach(C=>C.addEventListener("click",()=>k(C.dataset.mode)));function O(){const C=m('[data-ref="splitprev"]',h);if(!C)return;const x=d();if(x==="custom"||!i.parts.length){C.hidden=!0;return}C.hidden=!1;const P=nt(v.value),I=Object.assign({},a,{rates:Object.assign({},a.rates,i.currency!==a.base?{[i.currency]:p}:{})}),ie={id:i.id,amount:P>0?P:0,currency:i.currency,parts:i.parts,split:{mode:x}},q=P>0?Logic.expenseShares(I,ie).shares:null;C.innerHTML=(x==="member"?"חלק שווה לכל משתתף":"לפי ראש")+": "+i.parts.map(ce=>{const Z=Ue(a,ce),ue=x==="equal"&&!Z.ghost&&Logic.headsOf(a,Z)!==1?` <small>(${r(Vt(a,Z))})</small>`:"";return`<span class="sp-item">${r(Z.name)}${ue}${q?" "+V(q[ce]||0,a.base):""}</span>`}).join(" · ")}function N(){if(i.split.mode!=="custom")return;i.split.custom=i.split.custom||{};const C=m('[data-ref="customlist"]',h);C.innerHTML=i.parts.map(x=>{const P=Ue(a,x);return`<div class="split-item">
          <span class="dot" style="width:10px;height:10px;border-radius:50%;background:${St(P)};flex:none;"></span>
          <span class="nm">${r(P.name)}</span>
          <input class="input" inputmode="decimal" data-custom="${r(x)}" aria-label="הסכום של ${r(P.name)}" placeholder="0" value="${r(i.split.custom[x]!=null?i.split.custom[x]:"")}">
        </div>`}).join(""),J("[data-custom]",h).forEach(x=>x.addEventListener("input",()=>{i.split.custom[x.dataset.custom]=nt(x.value),K()})),K()}function K(){const C=m('[data-ref="customstatus"]',h);if(!C)return;const x={amount:nt(v.value),currency:i.currency,split:i.split},P=Logic.customSplitDiff(x,i.parts),I=Logic.dec(i.currency);if(!x.amount){C.textContent="קודם מזינים את סכום ההוצאה למעלה",C.className="split-status";return}P===0?(C.textContent="החלוקה מאוזנת ✓",C.className="split-status ok"):P>0?(C.innerHTML=`נותרו להקצאה: ${V(P,i.currency)}`,C.className="split-status err"):(C.innerHTML=`הוקצה יותר מדי — עודף של ${V(-P,i.currency)}`,C.className="split-status err")}v.addEventListener("input",()=>{K(),O()}),i.split.mode==="custom"&&N(),O();const U=m('[data-ref="photobox"]',h),z=m('[data-ref="photoinput"]',h);s&&(U.removeAttribute("role"),U.removeAttribute("tabindex"),U.removeAttribute("aria-label"));function B(){const C=l.changed?l.file?URL.createObjectURL(l.file):null:Da(i);U.innerHTML=C?`<img src="${r(C)}" alt="קבלה">${s?"":'<button class="photo-remove" data-ref="removephoto">הסרה ✕</button>'}`:`<span>${s?"לא צורפה קבלה":"📷 &nbsp;צילום קבלה או בחירה מהגלריה"}</span>`;const x=m('[data-ref="removephoto"]',h);x&&x.addEventListener("click",P=>{P.stopPropagation(),l={changed:!0,file:null,removed:!0},B()})}if(U.addEventListener("click",C=>{s||C.target.closest('[data-ref="removephoto"]')||z.click()}),U.addEventListener("keydown",C=>{!s&&(C.key==="Enter"||C.key===" ")&&(C.preventDefault(),z.click())}),z.addEventListener("change",()=>{z.files&&z.files[0]&&(l={changed:!0,file:z.files[0],removed:!1},B())}),B(),n){const C=de(a);m('[data-ref="delreqbox"]',h)&&i.delReq&&C&&(m('[data-ref="approve"]',h).addEventListener("click",async()=>{try{await L.deleteExpense(a.id,i.id),await At(a,f.expenses.filter(I=>I.id!==i.id)),u.close(),ol(a,Q(i))}catch(I){console.error(I),E(Te(I,"המחיקה נכשלה — נסו שוב"))}}),m('[data-ref="reject"]',h).addEventListener("click",async()=>{try{const I=Q(i);delete I.delReq,await L.saveExpense(a.id,I),u.close(),E("הבקשה נדחתה — ההוצאה נשארת")}catch(I){console.error(I),E(Te(I,"הפעולה נכשלה — נסו שוב"))}}));const P=m('[data-ref="delexp"]',h);P&&P.addEventListener("click",async()=>{if(C){if(!await xe("מחיקת הוצאה","ההוצאה תימחק לצמיתות מהקבוצה. להמשיך?","מחיקה",!0))return;try{await L.deleteExpense(a.id,i.id),await At(a,f.expenses.filter(ce=>ce.id!==i.id)),u.close(),ol(a,Q(i))}catch(ce){console.error(ce),E(Te(ce,"המחיקה נכשלה — נסו שוב"))}return}if(i.delReq){E("כבר נשלחה בקשה — ממתינה לאישור מנהל הקבוצה");return}const I=se(a.id);if(await xe("בקשת מחיקה","רק מנהל הקבוצה יכול למחוק הוצאות. תישלח בקשה, וההוצאה תימחק רק לאחר אישורו.","שליחת בקשה"))try{const q=Q(i);q.delReq={by:I||"",at:Date.now()},await L.saveExpense(a.id,q),u.close(),E("הבקשה נשלחה למנהל הקבוצה ✓")}catch(q){console.error(q),E(Te(q,"שליחת הבקשה נכשלה — נסו שוב"))}})}const ae=m('[data-ref="save"]',h);ae&&ae.addEventListener("click",async()=>{if(!f.trips.some(x=>x.id===a.id)){u.close(),E("הקבוצה כבר אינה קיימת");return}if(i.amount=nt(v.value),i.date=m("#f-date",h).value||An(),i.note=m("#f-note",h).value.trim(),!(i.amount>0)){Pe(v,"נא להזין סכום");return}if(!i.payerId){E("נא לבחור מי שילם");return}if(!i.parts.length){E("נא לבחור על מי ההוצאה מתחלקת");return}if(i.currency!==a.base&&!(p>0)){Pe(m('[data-ref="rateinput"]',h),"נא להזין שער המרה");return}if(i.split.mode==="custom"){if(Logic.customSplitDiff(i,i.parts)!==0){E("החלוקה הידנית אינה מאוזנת — בדקו את הסכומים");return}const P={};i.parts.forEach(I=>P[I]=Number(i.split.custom[I])||0),i.split={mode:"custom",custom:P}}else i.split={mode:d()==="member"?"member":"equal"};const C=m('[data-ref="save"]',h);C.disabled=!0,C.textContent="שומרים…";try{i.currency!==a.base&&(a.rates||{})[i.currency]!==p&&(a.rates=a.rates||{},a.rates[i.currency]=p,await L.updateTrip(a.id,{rates:Q(a.rates)}));let x=null;if(l.changed&&(x=i.photo||null,delete i.photo,delete i.photoData,l.file&&Object.assign(i,await Nd(l.file))),await L.saveExpense(a.id,i),x&&f.assets&&x!==i.photo)try{await f.assets.delete(x)}catch(I){console.error(I)}const P=f.expenses.filter(I=>I.id!==i.id).concat([i]);await At(a,P),u.close(),E(n?"ההוצאה עודכנה ✓":"ההוצאה נשמרה ✓")}catch(x){if(C.disabled=!1,C.textContent=n?"שמירת השינויים":"שמירת ההוצאה",x&&x.code==="plan_limit"){Md(a,h,u);return}console.error(x),E(zt(x))}})}function Md(e,t,a){const n=m('[data-ref="planerr"]',t);if(!n){E(zt({code:"plan_limit"}));return}const s=de(e),o=Be()||e,i=wt(o),c=!!(re[i.id]&&re[i.id].topUp&&!i.expired);n.innerHTML=`<b>ההוצאה לא נשמרה — הקבוצה הגיעה למגבלת ההוצאות של המסלול.</b>
      ${s?`אפשר ${c?`לשדרג את המסלול או להוסיף ${r(fe.exp20.nm)}`:"לשדרג את המסלול"}, ואז לשמור שוב — מה שהוקלד נשאר כאן.`:"מנהל הקבוצה יכול לשדרג את המסלול. מה שהוקלד נשאר כאן — אפשר לשמור שוב אחרי השדרוג."}
      ${s?'<button class="btn block plan-limit-btn" data-ref="planerr-plans">למסלולים</button>':""}`,n.hidden=!1;const d=m('[data-ref="planerr-plans"]',n);d&&d.addEventListener("click",()=>dt(Be()||e,!0));try{n.scrollIntoView({block:"nearest"})}catch{}}let Tt=null;function il(){if(!Tt)return;const e=Tt;Tt=null,clearTimeout(e.timer),e.expense.photo&&f.assets&&f.assets.delete(e.expense.photo).catch(t=>console.error(t))}function ol(e,t){il();const a=f.expenses.filter(n=>n.id!==t.id).map(Q);Tt={trip:e,expense:t,listAfterDelete:a,timer:setTimeout(il,Oi+2e3)},er("ההוצאה נמחקה",async()=>{if(!Tt||Tt.expense.id!==t.id)return;const n=Tt;if(Tt=null,clearTimeout(n.timer),!f.trips.some(s=>s.id===n.trip.id)){E("הקבוצה כבר אינה קיימת");return}try{await L.saveExpense(n.trip.id,n.expense),await At(n.trip,n.listAfterDelete.concat([n.expense])),E("ההוצאה שוחזרה ✓")}catch(s){console.error(s),E(Te(s,"השחזור נכשל"))}})}async function At(e,t){try{const a=Logic.computeBalances(e,t);await L.updateTrip(e.id,{stats:{count:mn(t),totalCents:a.grand}})}catch(a){console.error("stats update failed",a)}}function Pd(e){return new Promise((t,a)=>{const n=URL.createObjectURL(e),s=new Image;s.onload=()=>t({img:s,url:n}),s.onerror=()=>{URL.revokeObjectURL(n),a(new Error("image load failed"))},s.src=n})}async function zn(e,t,a,n,s){const{img:o,url:i}=await Pd(e);try{const c=Math.min(1,t/Math.max(o.naturalWidth,o.naturalHeight)),d=Math.max(1,Math.round(o.naturalWidth*c)),l=Math.max(1,Math.round(o.naturalHeight*c)),p=document.createElement("canvas");p.width=d,p.height=l;const u=p.getContext("2d");u.drawImage(o,0,0,d,l);let h=!1;if(s&&s.keepAlpha)try{const y=u.getImageData(0,0,d,l).data;for(let b=3;b<y.length;b+=4)if(y[b]<255){h=!0;break}}catch{h=!1}let v="image/jpeg";if(h){const y=p.toDataURL("image/webp",a);if(v=y.indexOf("data:image/webp")===0?"image/webp":"image/png",n)return v==="image/webp"?y:p.toDataURL("image/png")}else u.globalCompositeOperation="destination-over",u.fillStyle="#ffffff",u.fillRect(0,0,d,l),u.globalCompositeOperation="source-over";return n?p.toDataURL(v,a):await new Promise((y,b)=>p.toBlob(S=>S?y(S):b(new Error("toBlob failed")),v,a))}finally{URL.revokeObjectURL(i)}}async function Nd(e){if(f.assets)try{const s=await zn(e,1600,.82,!1);return{photo:(await f.assets.upload(s,{type:"image/jpeg"})).id}}catch(s){console.error("asset upload failed, falling back to inline",s)}let t=.6,a=900,n=null;for(let s=0;s<3&&(n=await zn(e,a,t,!0),!(n.length<16e4));s++)t-=.18,a-=250;if(!n||n.length>23e4||!Ut(n))throw new Error("photo too large");return{photoData:n}}function Hd(e){const t=document.activeElement,a=document.createElement("div");a.className="lightbox",a.setAttribute("role","dialog"),a.setAttribute("aria-modal","true"),a.setAttribute("aria-label","תצוגת קבלה מוגדלת"),a.innerHTML=`
      <button class="lightbox-close" aria-label="סגירת התצוגה המוגדלת">✕</button>
      <img src="${r(e)}" alt="קבלה מוגדלת">`;const n=()=>{a.remove(),document.removeEventListener("keydown",s);try{t&&t.focus&&t.focus()}catch{}},s=o=>{o.key==="Escape"&&(o.stopPropagation(),n())};document.addEventListener("keydown",s),a.addEventListener("click",n),m("#overlays").appendChild(a),m(".lightbox-close",a).focus()}function Id(e,t,a){const n=Logic.memberBreakdown(e,f.expenses,t.id),s=a.filter(y=>y.to===t.id),o=a.filter(y=>y.from===t.id),i=n.net>0?"pos":n.net<0?"neg":"",c=n.net>0?`לקבל ${V(n.net,e.base)}`:n.net<0?`לשלם ${V(-n.net,e.base)}`:"מאוזנים ✓",d=[...s.map(y=>`
        <div class="me-line">
          <span class="debt-ic in" aria-hidden="true">${he("in",16)}</span>
          <span>לקבל מאת <b>${r(le(e,y.from))}</b></span>
          <span class="amt pos">${V(y.cents,e.base)}</span>
          <button class="paybtn" data-act="mark-paid" data-from="${r(y.from)}" data-to="${r(y.to)}" data-cents="${y.cents}"
            aria-label="קיבלתי — רישום תשלום מאת ${r(le(e,y.from))}">קיבלתי</button>
        </div>`),...o.map(y=>`
        <div class="me-line">
          <span class="debt-ic out" aria-hidden="true">${he("out",16)}</span>
          <span>לשלם ל<b>${r(le(e,y.to))}</b></span>
          <span class="amt neg">${V(y.cents,e.base)}</span>
          <button class="paybtn" data-act="mark-paid" data-from="${r(y.from)}" data-to="${r(y.to)}" data-cents="${y.cents}"
            aria-label="שילמתי — רישום תשלום ל${r(le(e,y.to))}">שילמתי</button>
        </div>
        <div class="pay-how-wrap">${fi(e,y.to,y.cents)}</div>`)].join(""),l=s.reduce((y,b)=>y+b.cents,0),p=o.reduce((y,b)=>y+b.cents,0),u=`
      <div class="tile-grid" style="margin:14px 0 0;">
        <div class="tile"><div class="lbl">ההוצאות שלי</div><div class="val"><span class="num">${n.rows.length}</span></div></div>
        <div class="tile"><div class="lbl">שילמתי בפועל</div><div class="val" style="font-size:16px;">${V(n.paidTotal,e.base)}</div></div>
        <div class="tile"><div class="lbl">חייבים לי</div><div class="val" style="font-size:16px;color:var(--good);">${V(l,e.base)}</div></div>
        <div class="tile"><div class="lbl">עליי לשלם</div><div class="val" style="font-size:16px;color:${p?"var(--bad)":"var(--ink)"};">${V(p,e.base)}</div></div>
      </div>`,h=n.rows.slice().sort((y,b)=>y.expense.date===b.expense.date?0:y.expense.date<b.expense.date?1:-1),v=h.map(y=>{const b=ve.find(S=>S.id===y.expense.category)||ve[ve.length-1];return`
        <div class="acct-row">
          <span class="acct-ic" aria-hidden="true">${b.ic}</span>
          <span class="acct-mid">
            <b>${r(y.expense.note||b.nm)}</b>
            <small>${r(_e(y.expense.date))} · ${y.isPayer?"שילמתי "+Se(y.total,e.base):"שולם על ידי "+r(le(e,y.expense.payerId))}</small>
          </span>
          <span class="acct-amt">${V(y.share,e.base)}</span>
        </div>`}).join("");return`
      <div class="me-card rise">
        <div class="me-head">
          ${Fe(t,"lg")}
          <span class="who">החשבון של ${r(t.name)}</span>
          <button class="swap" data-act="pick-me" aria-label="החלפת הזהות שלי בקבוצה">החלפה</button>
        </div>
        <div class="me-net ${i}">${c}</div>
        <p class="bal-detail" style="margin:2px 0 0;">
          שילמתי: ${V(n.paidTotal,e.base)} · החלק שלי: ${V(n.shareTotal,e.base)}
        </p>
        ${d?`<div class="me-lines">${d}</div>`:'<p class="hint" style="margin-top:10px;">אין כרגע חובות פתוחים מולכם.</p>'}
      </div>
      ${t.ghost?"":ui(e,t,{owed:l})}
      ${u}
      ${n.payments.length?`
        <h2 class="section-title">תשלומים שנרשמו <small>${Re(n.payments.length,"תשלום אחד","תשלומים")}</small></h2>
        <div class="acct-list">
          ${n.payments.slice().reverse().map(y=>`
            <div class="acct-row">
              <span class="acct-ic" aria-hidden="true">✓</span>
              <span class="acct-mid">
                <b>${y.isPayer?"שילמתי ל"+r(le(e,(y.expense.parts||[])[0])):"התקבל מאת "+r(le(e,y.expense.payerId))}</b>
                <small>${r(_e(y.expense.date))}</small>
              </span>
              <span class="acct-amt">${V(y.isPayer?y.total:y.share,e.base)}</span>
              ${No(e,y.expense)?`<button class="xbtn" data-act="del-payment" data-id="${r(y.expense.id)}" aria-label="מחיקת רישום התשלום ${y.isPayer?"ל"+r(le(e,(y.expense.parts||[])[0])):"מאת "+r(le(e,y.expense.payerId))}">✕</button>`:""}
            </div>`).join("")}
        </div>`:""}
      ${h.length?`
        <h2 class="section-title">הפירוט שלי <small>${Re(h.length,"הוצאה אחת","הוצאות")}</small></h2>
        <div class="acct-list">
          ${v}
          <div class="acct-row total">
            <span class="acct-mid"><b>סך החלק שלי</b></span>
            <span class="acct-amt">${V(n.shareTotal,e.base)}</span>
          </div>
        </div>`:""}`}function Dd(e,t,a,n){const s=Logic.dec(e.base),o=Logic.fromCents(n,s),i=pe(`
      <div class="sheet-head"><h2 class="sheet-title">רישום תשלום</h2></div>
      <p class="pay-lead">
        מאת <b>${r(le(e,t))}</b> אל <b>${r(le(e,a))}</b>
      </p>
      <div class="pay-full">
        <span>החוב הפתוח</span>
        <b>${V(n,e.base)}</b>
      </div>
      ${(se(e.id)===t||de(e))&&se(e.id)!==a?`<div class="pay-how-wrap in-sheet">${fi(e,a,n)}</div>`:""}
      <div class="field" style="margin-top:14px;">
        <label for="pay-amount">הסכום ששולם</label>
        <input class="input ltr" id="pay-amount" inputmode="decimal"
          style="font-size:22px;font-weight:800;"
          value="${r(String(o))}" aria-label="הסכום ששולם ב${r(at(e.base).n)}">
        <p class="hint">אפשר לשנות לסכום חלקי — היתרה תישאר פתוחה.</p>
      </div>
      <div class="chip-row" style="justify-content:center;margin-bottom:16px;">
        <button class="chip" data-quick="full">הסכום המלא</button>
        <button class="chip" data-quick="half">מחצית</button>
      </div>
      <button class="btn primary block" data-ref="confirm">✓ &nbsp;אישור התשלום</button>
    `),c=m("#pay-amount",i.el);J("[data-quick]",i.el).forEach(d=>d.addEventListener("click",()=>{ar(c,String(d.dataset.quick==="full"?o:Math.round(o/2*100)/100))})),m('[data-ref="confirm"]',i.el).addEventListener("click",async()=>{const d=nt(c.value);if(!(d>0)){Pe(c,"נא להזין סכום");return}if(Logic.toCents(d,s)>n&&!await xe("סכום גבוה מהחוב",`החוב הפתוח הוא ${Se(n,e.base)}. לרשום בכל זאת ${Se(Logic.toCents(d,s),e.base)}?`,"רישום"))return;const l=m('[data-ref="confirm"]',i.el);l.disabled=!0,l.textContent="רושמים…";try{const p={};p[a]=d;const u={id:Ve("pay"),kind:"payment",amount:d,currency:e.base,category:"other",payerId:t,parts:[a],split:{mode:"custom",custom:p},note:`החזר ל${le(e,a)}`,date:An(),created:Math.max(Date.now(),1+f.expenses.filter(Logic.isPayment).reduce((h,v)=>Math.max(h,Number(v.created)||0),0))};await L.saveExpense(e.id,u),await At(e,f.expenses.concat([u])),i.close(),E("התשלום נרשם ✓")}catch(p){console.error(p),l.disabled=!1,l.innerHTML="✓ &nbsp;אישור התשלום",E(Te(p,"רישום התשלום נכשל — נסו שוב"))}})}function rl(e){if(!de(e))return;if(!f.expensesReady){E("ההוצאות עדיין נטענות — נסו שוב בעוד רגע");return}const t=Logic.computeBalances(e,f.expenses),a={direct:Logic.transfersFor(e,f.expenses,"direct").length,min:Logic.transfersFor(e,f.expenses,"min").length};let n=Logic.settleModeOf(e),s=Logic.transfersFor(e,f.expenses,n);const o=Ho(f.expenses),i=o.length?`${Je(o.length,"בקשת מחיקה אחת עדיין ממתינה","בקשות מחיקה עדיין ממתינות")} לאישורכם — ${o.length===1?"ההוצאה הזו עדיין נספרת":"ההוצאות האלה עדיין נספרות"} בהתחשבנות.`:"",c=pe(`
      <div class="sheet-head"><h2 class="sheet-title">סגירת הקבוצה</h2></div>
      ${o.length?`<div class="banner warn close-pend" role="status">⏳ ${r(i)} כדאי לטפל ${o.length===1?"בה":"בהן"} לפני הסגירה.</div>`:""}
      <div class="mgr-total" style="border-radius:var(--radius-sm);">
        <span>סך ההוצאות</span><b>${V(t.grand,e.base)}</b>
      </div>
      ${a.direct?`
      <div class="field" style="margin-top:16px;">
        <label id="settle-lbl">איך מתחשבנים?</label>
        <div class="settle-modes" role="group" aria-labelledby="settle-lbl">
          ${ua.map(l=>`
          <button type="button" class="settle-opt" data-settle="${l.id}" aria-pressed="${n===l.id}">
            <b>${r(l.nm)}</b>
            <span class="settle-count">${Re(a[l.id],"העברה אחת","העברות")}</span>
            <small>${r(l.hint)}</small>
          </button>`).join("")}
        </div>
      </div>`:""}
      <div data-ref="debtors"></div>
      <a class="btn wa soft block" data-ref="sumwa" href="${r(Nt(ps(e)))}" target="_blank" rel="noopener" style="margin-top:14px;">
        ${he("chart",18)} שליחת הסיכום המלא לקבוצה</a>
      <div class="close-final">
        <button class="btn primary block" data-ref="closefinal">
          ${he("finish",18)} סגירת הקבוצה והעברה לארכיון</button>
        <p class="hint">הנתונים נשמרים בארכיון — אפשר לשחזר בכל רגע.</p>
      </div>
    `);function d(){const l={};s.forEach(h=>(l[h.from]=l[h.from]||[]).push(h));const u=Array.from(new Set(s.map(h=>h.to))).map(h=>Ue(e,h)).filter(h=>h&&Logic.payBankSuspect(jt(h))).map(h=>`
        <div class="identity-banner warn close-suspect" role="status">
          <span>⚠️ ${h.id===se(e.id)?"מספר החשבון שלכם":`מספר החשבון של ${r(h.name)}`} לא עבר את בדיקת התקינות — כדאי לתקן לפני השליחה. ההודעות לחייבים כוללות אזהרה.</span>
          <button class="btn sm" data-act="pay-prefs" data-id="${r(h.id)}">תיקון</button>
        </div>`).join("");m('[data-ref="debtors"]',c.el).innerHTML=u+(s.length?`
        <p class="hint" style="margin:12px 0 4px;">
          לכל מי שנותר לשלם — הודעה אישית בוואטסאפ, ישירות למספר שנרשם,
          עם הסכום, למי להעביר ולאן.
        </p>
        ${Object.keys(l).map(h=>{const v=Ue(e,h),y=l[h],b=y.reduce((k,O)=>k+O.cents,0),S=we(v),T=zl(e,v,y,n),w=S?Ht(S,T):Nt(T);return`
          <div class="mgr-card" style="margin:10px 0 0;">
            <div class="mgr-row" style="cursor:default;">
              ${Fe(v,"",!0)}
              <span class="mgr-name">${r(v.name)}</span>
              <span class="mgr-amt neg">לשלם ${V(b,e.base)}</span>
            </div>
            ${y.map(k=>{const O=Ue(e,k.to),N=we(O),K=Logic.timeMs(O.phoneChangedAt),U=jt(O).methods.map(Gt).join(" · ");return`<p class="hint" style="margin:0 14px 8px;">← ל${r(le(e,k.to))}: ${V(k.cents,e.base)}${N?` · <span class="num" dir="ltr">${r(ct(N))}</span>`:""}${U?` <span class="close-how">· ${r(U)}</span>`:""}${K?` · <small>${O.phoneSet?"הטלפון נקבע":"הטלפון הוחלף"} ב־${ei(K)}</small>`:""}${kr(e,O,{named:!0})?" · "+kr(e,O,{named:!0}):""}</p>`}).join("")}
            <div class="debtor-send">
              <a class="btn wa soft block" href="${r(w)}" target="_blank" rel="noopener"${S?"":` aria-describedby="nophone-${r(v.id)}"`}>
                ${he("chat",18)} שליחה אל ${r(v.name)}</a>
              ${S?"":`<p class="hint" id="nophone-${r(v.id)}">אין טלפון רשום — בוואטסאפ בוחרים את איש הקשר.</p>`}
            </div>
          </div>`}).join("")}`:`
        <div class="banner" style="margin-top:12px;">🎉 הקבוצה מאוזנת לחלוטין — אין חובות פתוחים. אפשר לסגור בלב שקט.</div>`)}d(),J("[data-settle]",c.el).forEach(l=>l.addEventListener("click",async()=>{if(l.dataset.settle!==n){n=l.dataset.settle,J("[data-settle]",c.el).forEach(p=>p.setAttribute("aria-pressed",String(p.dataset.settle===n)));try{await L.updateTrip(e.id,{settleMode:n}),e.settleMode=n}catch(p){console.error(p),E(zt(p))}s=Logic.transfersFor(e,f.expenses,n),d(),m('[data-ref="sumwa"]',c.el).href=Nt(ps(e)),Y()}})),m('[data-ref="closefinal"]',c.el).addEventListener("click",async()=>{if(!await xe("סגירת הקבוצה",(i?i+" ":"")+(s.length?s.length===1?`נותר חוב פתוח אחד — אפשר לסגור, והוא יישאר רשום גם בארכיון. לסגור את ״${e.name}״?`:`נותרו ${s.length} חובות פתוחים — אפשר לסגור, והם יישארו רשומים גם בארכיון. לסגור את ״${e.name}״?`:`הקבוצה מאוזנת. לסגור את ״${e.name}״ ולהעביר לארכיון?`),"סגירה וארכוב"))return;const p=m('[data-ref="closefinal"]',c.el);p.disabled=!0;try{const u=Date.now();await L.updateTrip(e.id,{archived:!0,closedAt:u}),e.archived=!0,e.closedAt=u,c.close(),E("הקבוצה נסגרה — הסיכום הסופי שמור ✓"),Y(),setTimeout(()=>ll(e),350)}catch(u){console.error(u),p.disabled=!1,E(Te(u,"הסגירה נכשלה — נסו שוב"))}})}function ll(e){const t=Logic.computeBalances(e,f.expenses),a=Logic.transfersFor(e,f.expenses);pe(`
      <div class="sheet-head"><h2 class="sheet-title">הסיכום הסופי — ${r(e.name)}</h2></div>
      ${e.closedAt?`<p class="hint" style="margin:-6px 0 10px;">הקבוצה נסגרה ב־<span class="num">${r(_e($s(e.closedAt)))}</span> · הנתונים שמורים במלואם</p>`:""}
      ${a.length?`
        <h2 class="section-title">חובות שנותרו פתוחים</h2>
        ${a.map(n=>`
          <div class="transfer-row">
            <span aria-hidden="true">💸</span>
            <span>מאת <b>${r(le(e,n.from))}</b> אל <b>${r(le(e,n.to))}</b></span>
            <span class="amt">${V(n.cents,e.base)}</span>
          </div>`).join("")}`:'<div class="banner">✓ כל החובות סגורים — ההתחשבנות הושלמה</div>'}
      ${xr(e,t)}`)}async function Rd(e){const t=ps(e);if(navigator.share)try{await navigator.share({text:t});return}catch(a){if(a&&a.name==="AbortError")return}try{await navigator.clipboard.writeText(t),E("הסיכום הועתק — אפשר להדביק בוואטסאפ")}catch(a){console.error(a),E("השיתוף לא הצליח בדפדפן זה")}}function cl(e){const a=(L&&L.joinKeyFor?L.joinKeyFor(e.id):"")||xa(e.id)||e.joinKey||"";return sa.test(a)?a:""}function dl(e){return ke&&!!L&&L.kind==="rest"&&L.secure&&!cl(e)}function ma(e){if(!ke)return Sl;let t=location.origin+location.pathname+"?join="+encodeURIComponent(e.id);const a=[],n=cl(e);n&&a.push("k="+n);const s=Ni?null:Za();if(s){const o=btoa(unescape(encodeURIComponent(JSON.stringify({u:s.u,k:s.k})))).replace(/\+/g,"-").replace(/\//g,"_");a.push("cfg="+o)}return a.length&&(t+="#"+a.join("&")),t}async function $i(e){if(ke&&!Za()){const i=pe(`
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
      `);m('[data-ref="setup"]',i.el).addEventListener("click",()=>{i.close(),vr()}),m('[data-ref="anyway"]',i.el).addEventListener("click",async()=>{i.close();try{await navigator.clipboard.writeText(ma(e)),E("הקישור הועתק — יעבוד רק אחרי הפעלת קבוצה משותפת")}catch(c){console.error(c),E("ההעתקה לא הצליחה")}});return}if(ke&&L.ensureJoinKey)try{await L.ensureJoinKey(e)}catch(i){console.error("join key",i)}if(dl(e)){pe(`
        <div class="sheet-head"><h2 class="sheet-title">אין כרגע קישור הזמנה</h2></div>
        <p style="color:var(--ink-2); font-size:15px; margin:0 0 14px;">
          במכשיר הזה לא שמור מפתח ההצטרפות של הקבוצה, ולכן קישור שיישלח מכאן לא ייפתח אצל החברים.
        </p>
        <p style="color:var(--ink-2); font-size:15px; margin:0 0 4px;">
          אפשר לשלוח את הקישור מהמכשיר של מנהל הקבוצה או של אחד המשתתפים — או לפתוח את אזור המנהל ולנסות שוב.
        </p>
      `,null,{compact:!0});return}if(!ke){const i=pe(`
        <div class="sheet-head"><h2 class="sheet-title">שיתוף עם הקבוצה</h2></div>
        <p style="color:var(--ink-2); font-size:15px; margin:0 0 14px;">
          הגרסה הזו פרטית לחשבון שלכם, ולכן חברי הקבוצה לא יוכלו להיכנס אליה.
        </p>
        <p style="color:var(--ink-2); font-size:15px; margin:0 0 18px;">
          לשיתוף עם כולם השתמשו בגרסת הווב:
          <b style="direction:ltr; display:inline-block;">${r(Pi)}</b> —
          שם אפשר להפעיל קבוצה משותפת ולשלוח קישורי הצטרפות.
        </p>
        <div class="sheet-foot">
          <button class="btn primary block" data-ref="copyweb">העתקת כתובת גרסת הווב</button>
        </div>
      `);m('[data-ref="copyweb"]',i.el).addEventListener("click",async()=>{i.close();try{await navigator.clipboard.writeText(ea),E("הכתובת הועתקה ✓")}catch(c){console.error(c),E("ההעתקה לא הצליחה")}});return}const t=ma(e),a=Kl(e),n=ze(e).id==="trip"?zs(e.dest):null,s=e.start?`${_e(e.start)}–${_e(e.end||e.start)}`:"",o=pe(`
      <div class="sheet-head"><h2 class="sheet-title">הזמנת חברים</h2></div>
      <div class="invite-card">
        ${n?`<div class="invite-photo" style="background-image:url('${r(n)}')" aria-hidden="true"></div>`:""}
        <div class="invite-body" style="${qs(e)}">
          <span class="invite-flag" aria-hidden="true">${r(Ze(e))}</span>
          <h3 class="invite-name">${r(e.name)}</h3>
          ${e.dest||s?`<p class="invite-meta">${[e.dest,s].filter(Boolean).map(i=>`<span class="num">${r(i)}</span>`).join(" · ")}</p>`:""}
          ${(e.members||[]).length?`
          <div class="avatar-row" style="justify-content:center;margin-top:10px;">${e.members.slice(0,8).map(i=>Fe(i,"",!0)).join("")}</div>
          <p class="invite-crew">כבר בקבוצה: ${Re(e.members.length,"משתתף אחד","משתתפים")}</p>`:""}
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
        <a class="btn wa block" href="${r(Nt(a))}" target="_blank" rel="noopener" data-ref="wa">
          ${he("chat",18)} שליחה בוואטסאפ</a>
        <div class="form-row">
          <button class="btn block" data-ref="copy">${he("copy",18)} העתקת הקישור</button>
          <button class="btn block" data-ref="more">${he("share",18)} שיתוף אחר…</button>
        </div>
      </div>
    `);m('[data-ref="wa"]',o.el).addEventListener("click",()=>setTimeout(()=>o.close(),400)),m('[data-ref="copy"]',o.el).addEventListener("click",async()=>{try{await navigator.clipboard.writeText(t),E("הקישור הועתק ✓"),o.close()}catch(i){console.error(i),E("ההעתקה לא הצליחה בדפדפן זה")}}),m('[data-ref="more"]',o.el).addEventListener("click",async()=>{if(navigator.share)try{await navigator.share({text:a}),o.close();return}catch(i){if(i&&i.name==="AbortError")return}try{await navigator.clipboard.writeText(a),E("ההזמנה הועתקה ✓"),o.close()}catch(i){console.error(i),E("השיתוף לא זמין בדפדפן זה")}})}async function Bd(){try{let e=[],t=[];if(L.exportAll){const s=await L.exportAll();e=s.trips,t=s.licenses}else{for(const s of f.trips){const o=await L.getExpensesOnce(s.id),i=Q(s);delete i.ownerToken,delete i.mgrPass,delete i.joinKey,delete i.hasMgrPass,e.push(Object.assign(i,{expenses:o}))}t=L.listLicenses?await L.listLicenses():[]}const a={app:"שווה בשווה",version:3,exportedAt:new Date().toISOString(),storage:f.cloud?"cloud":f.shared?"shared":"local",note:"צילומי קבלות בענן אינם כלולים בקובץ — רק המזהים שלהם.",trips:e,licenses:t||[]},n=JSON.stringify(a,null,2);Cn()?(await Qs("גיבוי-שווה-בשווה.json",n),E("קובץ הגיבוי נשמר ✓")):(await navigator.clipboard.writeText(n),E("הגיבוי הועתק ללוח — הדביקו ושמרו בפתקים"))}catch(e){if(e&&e.code==="declined")return;console.error(e),E("הגיבוי לא הצליח — נסו שוב")}}async function Fd(e,t){const a=f.expenses.find(s=>s.id===t);if(!a||!Logic.isPayment(a))return;if(!No(e,a)){E("מחיקת תשלום שמורה למי שרשם אותו ולמנהל הקבוצה");return}if(await xe("מחיקת תשלום","רישום התשלום יימחק והחוב ייפתח מחדש. להמשיך?","מחיקה",!0))try{await L.deleteExpense(e.id,a.id),await At(e,f.expenses.filter(s=>s.id!==a.id)),E("רישום התשלום נמחק ✓")}catch(s){console.error(s),E(Te(s,"המחיקה נכשלה — נסו שוב"))}}async function pl(e,t){try{await L.updateTrip(e,{archived:t}),E(t?"הקבוצה הועברה לארכיון":"הקבוצה שוחזרה מהארכיון")}catch(a){console.error(a),E(Te(a,"הפעולה נכשלה — נסו שוב"))}}async function Ud(e){const t=f.trips.find(o=>o.id===e);if(!t)return;const a=Kt(t),n=a===0?"":a===1?" יחד עם ההוצאה שרשומה בה":` יחד עם ${a} ההוצאות שרשומות בה`;if(await xe("מחיקת קבוצה",`הקבוצה ״${t.name}״ תימחק לצמיתות${n}. אין דרך לבטל. להמשיך?`,"מחיקה לצמיתות",!0))try{const o=await L.deleteTripDeep(e);if(Me(e,null),E("הקבוצה נמחקה"),f.assets){for(const i of o)if(i&&i.photo)try{await f.assets.delete(i.photo)}catch(c){console.error(c)}}}catch(o){console.error(o),E(Te(o,"המחיקה נכשלה — נסו שוב"))}}async function Kd(){const e=f.trips.filter(a=>a.demo);if(!(!e.length||!await xe("מחיקת נתוני ההדגמה",Je(e.length,"קבוצת ההדגמה תימחק לצמיתות","קבוצות ההדגמה יימחקו לצמיתות")+". להמשיך?","מחיקה",!0))){for(const a of e)try{await L.deleteTripDeep(a.id),Me(a.id,null)}catch(n){console.error(n)}E("נתוני ההדגמה נמחקו ✓")}}async function zd(e){if(!Cn())return;const t=["תאריך","קטגוריה","תיאור","סכום","מטבע",`סכום ב-${e.base}`,"שולם על ידי","מתחלק על"],a=f.expenses.slice().reverse().map(s=>{const o=ve.find(l=>l.id===s.category),i=Logic.partsOf(e,s).map(l=>le(e,l)).join(" | "),c=Logic.expenseBaseCents(e,s),d=l=>`"${String(l==null?"":l).replace(/"/g,'""')}"`;return[s.date,o?o.nm:"",s.note||"",s.amount,s.currency,Logic.fromCents(c,Logic.dec(e.base)),le(e,s.payerId),i].map(d).join(",")}),n="\uFEFF"+t.map(s=>`"${s}"`).join(",")+`
`+a.join(`
`);try{await Qs(`הוצאות-${e.name}.csv`.replace(/[\\/:*?"<>|]/g,"-"),n),E("הקובץ נשמר ✓")}catch(s){if(s&&(s.code==="declined"||s.code==="rate_limited"))return;console.error(s),E("שמירת הקובץ לא הצליחה")}}const qn=500,qd=10,ul=1500,Jd=6e3,Yd=25e3,fl="shaveh_help_dev_v1",Vd=[{id:"cancellation",label:"ביטול עסקה או מינוי",sla:"",idOk:!0,ack:"ההתקשרות תסתיים בתוך 3 ימי עסקים מקבלת ההודעה, ואישור על הביטול יישלח אליכם בכתב."},{id:"refund",label:"החזר כספי או חיוב שגוי",sla:""},{id:"privacy",label:"עיון, תיקון או מחיקה של מידע אישי",sla:"עד 30 יום"},{id:"accessibility",label:"נגישות — דיווח על קושי או בקשת התאמה",sla:""},{id:"complaint",label:"תלונה",sla:""}],Gd="עוזר דיגיטלי (בינה מלאכותית) — זו מערכת אוטומטית, לא אדם. ייתכנו טעויות; המידע המחייב מופיע בתקנון ובמסך המסלולים. נא לא לכתוב כאן מספרי זהות, פרטי אשראי או מידע רגיש.",j={kb:null,index:null,loading:null,error:!1,chat:[],busy:!1,sheet:null,view:"home",arg:null,back:[],ctx:"home",query:"",draft:null,deepLinked:!1,lastView:null};function Zt(){const e=typeof window!="undefined"&&window.SHAVEH_CONFIG&&window.SHAVEH_CONFIG.help||{},t=ga(),a=t&&t.u&&!tt?String(t.u).replace(/\/+$/,"")+"/functions/v1/":"",n=e.aiUrl?String(e.aiUrl):a?a+"ai-help":"",s=e.supportUrl?String(e.supportUrl):a&&e.support!==!1?a+"support-request":"";return{ai:e.ai===!0&&!!n,aiUrl:n,supportUrl:s,key:t&&t.k?String(t.k):""}}function hl(){let e=F.get(fl);return(!e||!/^[a-z0-9_]{8,40}$/.test(e))&&(e=Ve("d").toLowerCase().replace(/[^a-z0-9_]/g,""),F.set(fl,e)),e}function Wd(){const e=Fs();return e?"?v="+e:""}function Zd(e){return new Promise((t,a)=>{const n=document.createElement("script");n.src=e,n.async=!0,n.onload=()=>t(),n.onerror=()=>a(new Error("script load failed: "+e)),document.head.appendChild(n)})}function Xd(e){return new Promise((t,a)=>{const n=new XMLHttpRequest;n.open("GET",e,!0),n.onload=()=>{if(n.status&&(n.status<200||n.status>=300)){a(new Error("HTTP "+n.status));return}try{t(JSON.parse(n.responseText))}catch(s){a(s)}},n.onerror=()=>a(new Error("network")),n.send()})}function ml(){if(j.index)return Promise.resolve(j.index);if(j.loading)return j.loading;const e=Wd();return j.loading=(window.HelpSearch?Promise.resolve():Zd("help/search.js"+e)).then(()=>Xd("help/kb.json"+e)).then(t=>(j.kb=window.HelpSearch.normalizeKb(t),j.index=window.HelpSearch.build(j.kb),j.error=!1,j.index)).catch(t=>{throw console.warn("help: knowledge base unavailable",t),j.error=!0,j.loading=null,t}),j.loading}function wi(){const e=j.kb&&j.kb.contact&&j.kb.contact.topics;return e&&e.length?e:Vd}function bt(e){return wi().find(t=>t.id===e)||null}function Xt(e){return j.kb&&j.kb.articles.find(t=>t.id===e)||null}function ki(e){return j.kb&&j.kb.categories.find(t=>t.id===e)||null}function Qd(){return f.joinTripId?"join":f.tripId?"trip":f.screen==="admin"?"admin":"home"}function ep(){try{return!!(window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches)}catch{return!1}}function xi(e,t){let a=r(e).replace(/\*\*([^*]+)\*\*/g,"<b>$1</b>");return a=a.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g,(n,s,o)=>{const i=o.match(/^article:([\w-]+)$/);return i?Xt(i[1])?`<button class="linklike help-inline-link" data-h="article" data-id="${i[1]}">${s}</button>`:s:!t&&/^https:\/\/[^\s"'<>]+$/.test(o)?`<a href="${o}" target="_blank" rel="noopener">${s}</a>`:s}),a}function Ei(e,t){const a=[];let n=null;const s=()=>{n&&a.push(`<${n.t}>`+n.items.map(o=>"<li>"+xi(o,t)+"</li>").join("")+`</${n.t}>`),n=null};return String(e||"").replace(/\r/g,"").split(`
`).forEach(o=>{const i=o.trim();let c;if(!i)s();else if((c=i.match(/^[-•*]\s+(.*)$/))||(c=i.match(/^\d+[.)]\s+(.*)$/))){const d=/^\d/.test(i)?"ol":"ul";(!n||n.t!==d)&&(s(),n={t:d,items:[]}),n.items.push(c[1])}else(c=i.match(/^#{1,4}\s+(.*)$/))?(s(),a.push("<h4>"+xi(c[1],t)+"</h4>")):(s(),a.push("<p>"+xi(i,t)+"</p>"))}),s(),a.join("")}function bl(e){return String(e||"").replace(/\[([^\]]+)\]\([^)]*\)/g,"$1").replace(/\*\*/g,"").trim()}async function tp(e){try{if(navigator.clipboard&&navigator.clipboard.writeText)await navigator.clipboard.writeText(e);else{const t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="fixed",t.style.opacity="0",document.body.appendChild(t),t.select(),document.execCommand("copy"),t.remove()}E("התשובה הועתקה")}catch{E("ההעתקה לא הצליחה — אפשר לסמן את הטקסט ולהעתיק ידנית")}}function ba(e){e=e||{},j.sheet&&j.sheet.close(),j.ctx=Qd(),j.query="",j.back=[];const t=pe(`
      <div class="sheet-head"><h2 class="sheet-title">מרכז העזרה</h2></div>
      <div class="help" data-ref="help">
        <div class="help-searchbar" role="search" data-ref="searchbar">
          <label class="sr-only" for="help-q">חיפוש במאמרי העזרה</label>
          <span class="help-search-ic" aria-hidden="true">⌕</span>
          <input id="help-q" class="input help-q" type="search" maxlength="120" autocomplete="off"
            enterkeyhint="search" placeholder="מה תרצו לדעת?">
        </div>
        <div class="help-body" data-ref="body"></div>
      </div>`,()=>{j.sheet=null});j.sheet=t,j.lastView=null,t.el.classList.add("help-sheet");const a=m("#help-q",t.el);let n=null;a.addEventListener("input",()=>{clearTimeout(n),n=setTimeout(()=>{j.query=a.value.trim(),j.back=[],Ke(j.query?"results":"home",null,!1)},110)}),a.addEventListener("keydown",s=>{s.key==="Enter"&&(s.preventDefault(),a.blur())}),t.el.addEventListener("click",yp),t.el.addEventListener("submit",gp),t.el.addEventListener("keydown",s=>{s.target&&s.target.id==="help-ask"&&s.key==="Enter"&&!s.shiftKey&&!s.isComposing&&(s.preventDefault(),wl())}),t.el.addEventListener("input",s=>{s.target&&s.target.id==="help-ask"&&vl()}),t.el.addEventListener("change",s=>{if(!s.target||s.target.id!=="hc-topic")return;const o=s.target.closest("form"),i=j.draft&&j.draft.ref||"";j.draft=xl(o),m("#hc-ref",o)||(j.draft.ref=i),j.arg=s.target.value,it("contact",s.target.value);const c=m("#hc-topic",j.sheet.el);c&&c.focus()}),it("loading"),ml().then(()=>{j.sheet&&(e.view==="article"&&Xt(e.id)?Ke("article",e.id,!1):e.view==="chat"&&Zt().ai?(Ke("chat",null,!1),e.ask&&Si(e.ask)):e.view==="contact"?Ke("contact",e.id||null,!1):Ke("home",null,!1))}).catch(()=>{j.sheet&&(e.view==="contact"?Ke("contact",e.id||null,!1):it("error"))})}function Ke(e,t,a){a&&j.view!=="loading"&&j.view!=="error"&&j.back.push({view:j.view,arg:j.arg}),j.view=e,j.arg=t,it(e,t)}function ap(){const e=j.back.pop();e?(j.view=e.view,j.arg=e.arg,it(e.view,e.arg)):Ke(j.query?"results":"home",null,!1)}function it(e,t){const a=j.sheet;if(!a)return;const n=m('[data-ref="body"]',a.el),s=m('[data-ref="searchbar"]',a.el);s.hidden=e==="chat"||e==="contact"||e==="sent",a.el.dataset.helpView=e;let o="";if(e==="loading"?o='<div class="skeleton help-skel"><div class="skel-card"></div><div class="skel-card"></div></div><p class="sr-only" role="status">טוענים את מרכז העזרה…</p>':e==="error"?o=np():e==="home"?o=Li():e==="results"?o=ip(j.query):e==="category"?o=op(t):e==="article"?o=rp(t):e==="chat"?o=lp():e==="contact"?o=pp(t):e==="sent"&&(o=bp(t)),e==="chat"&&j.lastView==="chat"&&j.chat.length&&cp(n)){$l();return}if(n.innerHTML=o,e==="chat"&&$l(),e!==j.lastView&&e!=="results"&&e!=="home"){e!=="chat"&&(a.el.scrollTop=0);const i=m(".help-view-title",n);if(i){i.setAttribute("tabindex","-1");try{i.focus({preventScroll:!0})}catch{i.focus()}}}j.lastView=e}function Va(){return'<button class="help-back" data-h="back"><span aria-hidden="true">→</span> חזרה</button>'}function np(){return`
      <div class="banner warn" role="status">לא הצלחנו לטעון את מאמרי העזרה כרגע. בדקו את החיבור לאינטרנט ונסו שוב.</div>
      <button class="btn block" data-h="retry">ניסיון נוסף</button>
      ${yl()}`}function sp(){if(!Zt().ai)return"";const e=(j.kb&&j.kb.suggested.length?j.kb.suggested:[]).slice(0,3);return`
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
      </section>`}function yl(){const e=wi(),t=j.kb&&j.kb.contact&&j.kb.contact.intro||"מענה אנושי ניתן בנושאים שהחוק מחייב בהם פנייה ישירה:";return`
      <section class="help-legal" aria-labelledby="help-legal-ttl">
        <h3 id="help-legal-ttl" class="help-h">פנייה לנציג</h3>
        <p class="hint">${r(t)}</p>
        <div class="help-legal-list">
          ${e.map(a=>`<button class="help-legal-item" data-h="contact" data-id="${r(a.id)}"><span>${r(a.label)}</span><span class="help-go" aria-hidden="true">←</span></button>`).join("")}
        </div>
      </section>`}function Jn(e){const t=ki(e.category);return`
      <button class="help-row" data-h="article" data-id="${r(e.id)}">
        <span class="help-row-txt">
          <b>${r(e.title)}</b>
          <small>${r(window.HelpSearch.snippet(e,110))}</small>
        </span>
        ${t?`<span class="help-row-cat">${r(t.title)}</span>`:""}
      </button>`}function Li(){const e=j.kb,t=e.popular.map(Xt).filter(Boolean).slice(0,5),a=e.categories;return`
      ${sp()}
      ${a.length?`
        <h3 class="help-h">נושאים</h3>
        <div class="help-cats">
          ${a.map(n=>`
            <button class="help-cat" data-h="category" data-id="${r(n.id)}">
              ${n.icon?`<span class="help-cat-ic" aria-hidden="true">${r(n.icon)}</span>`:""}
              <span class="help-cat-nm">${r(n.title)}</span>
            </button>`).join("")}
        </div>`:""}
      ${t.length?`
        <h3 class="help-h">שאלות נפוצות</h3>
        <div class="help-list">${t.map(Jn).join("")}</div>`:""}
      ${yl()}`}function ip(e){const t=window.HelpSearch.search(j.index,e,{limit:8}),a=Zt().ai;return`
      <p class="help-count" role="status">${t.length?Re(t.length,"נמצא מאמר אחד","מאמרים נמצאו"):"לא נמצאו מאמרים מתאימים"}</p>
      ${t.length?`<div class="help-list">${t.map(n=>Jn(n.article)).join("")}</div>`:`
        <div class="help-empty">
          <p>נסו מילה אחרת, או עיינו בנושאים.</p>
          ${a?`<button class="btn primary block" data-h="ask" data-q="${r(e)}">לשאול את העוזר: ״${r(e.slice(0,60))}״</button>`:""}
          <button class="btn ghost block" data-h="home">לכל הנושאים</button>
        </div>`}
      ${t.length&&a?`<button class="btn ghost block help-ask-more" data-h="ask" data-q="${r(e)}">לא מצאתם? שאלו את העוזר</button>`:""}`}function op(e){const t=ki(e);if(!t)return Li();const a=j.kb.articles.filter(n=>n.category===e);return`
      ${Va()}
      <h3 class="help-view-title">${t.icon?`<span aria-hidden="true">${r(t.icon)}</span> `:""}${r(t.title)}</h3>
      ${t.description?`<p class="hint">${r(t.description)}</p>`:""}
      <div class="help-list">${a.map(Jn).join("")||'<p class="hint">אין עדיין מאמרים בנושא הזה.</p>'}</div>`}function rp(e){const t=Xt(e);if(!t)return Li();const a=ki(t.category),n=t.related.map(Xt).filter(Boolean),s=t.contact?bt(t.contact):null;return`
      ${Va()}
      <article class="help-article">
        ${a?`<p class="help-eyebrow">${r(a.title)}</p>`:""}
        <h3 class="help-view-title">${r(t.title)}</h3>
        <div class="help-prose">${Ei(t.body||t.summary)}</div>
      </article>
      ${s?`
        <div class="help-human">
          <p>בנושא הזה אפשר לפנות לנציג אנושי.</p>
          <button class="btn primary block" data-h="contact" data-id="${r(s.id)}">פנייה לנציג — ${r(s.label)}</button>
        </div>`:""}
      ${n.length?`
        <h3 class="help-h">מאמרים קשורים</h3>
        <div class="help-list">${n.map(Jn).join("")}</div>`:""}
      ${Zt().ai?'<button class="btn ghost block help-ask-more" data-h="chat">יש עוד שאלה? שאלו את העוזר</button>':""}`}function _i(e,t){if(e.role==="user")return`<div class="help-msg me" data-i="${t}"><span class="sr-only">השאלה שלכם: </span>${r(e.text)}</div>`;const a=(e.articles||[]).map(Xt).filter(Boolean),n=e.contact?bt(e.contact):null;return`
      <div class="help-msg bot ${e.kind!=="ok"?"soft":""}${e.fresh?" fresh":""}" data-i="${t}">
        <span class="sr-only">העוזר: </span>
        <div class="help-text">${Ei(e.text,!0)}</div>
        ${a.length?`<div class="help-cites"><span class="help-cites-lbl">מאמרים:</span>${a.map(s=>`<button class="chip help-chip sm" data-h="article" data-id="${r(s.id)}">${r(s.title)}</button>`).join("")}</div>`:""}
        ${n?`<button class="btn sm help-human-btn" data-h="contact" data-id="${r(n.id)}">פנייה לנציג — ${r(n.label)}</button>`:""}
        ${e.kind==="ok"?`<div class="help-msg-tools"><button class="help-tool" data-h="copy" data-i="${t}" aria-label="העתקת התשובה">העתקה</button></div>`:""}
      </div>`}function lp(){const e=j.kb&&j.kb.assistant&&j.kb.assistant.disclosure||Gd,t=j.kb&&j.kb.suggested.length?j.kb.suggested.slice(0,4):[];return`
      <div class="help-chat-top">
        ${Va()}
        ${j.chat.length?'<button class="help-tool" data-h="clear">ניקוי השיחה</button>':""}
      </div>
      <h3 class="help-view-title">שאלו את העוזר</h3>
      <p class="help-disclosure" role="note"><span aria-hidden="true">✦</span> ${r(e)}</p>
      <div class="help-log" role="log" aria-live="polite" aria-relevant="additions" data-ref="log">
        ${j.chat.length?j.chat.map(_i).join(""):`
          <div class="help-chat-empty">
            ${Ei(j.kb&&j.kb.assistant.welcome||"אפשר לשאול כל דבר על השימוש ב״שווה בשווה״ — מסלולים, חלוקה, הזמנת חברים והתחשבנות.")}
            ${t.length?`<div class="help-chips">${t.map(a=>`<button class="chip help-chip" data-h="ask" data-q="${r(a)}">${r(a)}</button>`).join("")}</div>`:""}
          </div>`}
        ${j.busy?gl():""}
      </div>
      <form class="help-ask" data-ref="askform" novalidate>
        <label class="sr-only" for="help-ask">השאלה לעוזר</label>
        <textarea id="help-ask" class="input" rows="1" maxlength="${qn}" placeholder="כתבו שאלה…" enterkeyhint="send"${j.busy?" disabled":""}></textarea>
        <button class="btn primary help-send" type="submit" aria-label="שליחת השאלה"${j.busy?" disabled":""}><span aria-hidden="true">↑</span></button>
      </form>
      <p class="help-ask-meta"><span class="help-warn" data-ref="askwarn" role="alert"></span><span class="num" data-ref="askcount"></span></p>`}function gl(){return'<div class="help-msg bot typing"><span class="help-dots" aria-hidden="true"><i></i><i></i><i></i></span><span class="sr-only">העוזר כותב תשובה…</span></div>'}function cp(e){const t=m('[data-ref="log"]',e);if(!t||J(".help-msg[data-i]",t).some(l=>Number(l.dataset.i)>=j.chat.length))return!1;const n=m(".help-chat-empty",t);n&&n.remove();const s=m(".help-msg.typing",t);s&&!j.busy&&s.remove(),j.chat.forEach((l,p)=>{if(m(`.help-msg[data-i="${p}"]`,t))return;const u=m(".help-msg.typing",t);u?u.insertAdjacentHTML("beforebegin",_i(l,p)):t.insertAdjacentHTML("beforeend",_i(l,p))}),j.busy&&!m(".help-msg.typing",t)&&t.insertAdjacentHTML("beforeend",gl());const o=m("#help-ask",e),i=m(".help-send",e);o&&(o.disabled=j.busy),i&&(i.disabled=j.busy);const c=m('[data-ref="askwarn"]',e);c&&(c.textContent="");const d=m(".help-chat-top",e);return d&&!m('[data-h="clear"]',d)&&d.insertAdjacentHTML("beforeend",'<button class="help-tool" data-h="clear">ניקוי השיחה</button>'),!0}function vl(){const e=j.sheet,t=e&&m("#help-ask",e.el),a=e&&m('[data-ref="askcount"]',e.el);if(!t||!a)return;const n=t.value.length;a.textContent=n>qn*.8?n+"/"+qn:"",t.style.height="auto",t.style.height=Math.min(t.scrollHeight,120)+"px"}function $l(){const e=j.sheet;if(!e)return;const t=m('[data-ref="log"]',e.el),a=()=>{try{e.el.scrollTop=e.el.scrollHeight}catch{}};a();const n=J(".help-msg.fresh",t),s=n[n.length-1];if(n.forEach(u=>u.classList.remove("fresh")),!s)return;const o=j.chat[Number(s.dataset.i)];if(o&&(o.fresh=!1),ep())return;const i=m(".help-text",s),c=i.innerHTML,d=bl(o?o.text:i.textContent).split(/(\s+)/);if(d.length<6)return;t.setAttribute("aria-busy","true"),i.textContent="";let l=0;const p=()=>{i.isConnected&&(l=Math.min(d.length,l+4),i.textContent=d.slice(0,l).join(""),l<d.length?setTimeout(p,22):(i.innerHTML=c,t.removeAttribute("aria-busy"),a()))};p()}function wl(){const e=j.sheet,t=e&&m("#help-ask",e.el);t&&Si(t.value)}function dp(){const e=j.chat,t=[];e.forEach((s,o)=>{if(s.role==="user"){const i=e[o+1],c=i&&i.role==="assistant"&&i.kind==="ok";(o===e.length-1||c)&&t.push({role:"user",content:s.text})}else if(s.kind==="ok"){const i=String(s.text||"");t.push({role:"assistant",content:i.length>ul?i.slice(0,ul-1)+"…":i})}});let a=t.slice(-qd),n=a.reduce((s,o)=>s+o.content.length,0);for(;a.length>1&&n>Jd;)n-=a.shift().content.length;for(;a.length>1&&a[0].role!=="user";)a=a.slice(1);return a}function Ga(e,t,a,n){return{role:"assistant",kind:e,fresh:!0,text:t+(a.length?`

הנה מאמרים שעשויים לעזור:`:""),articles:a.map(s=>s.id).slice(0,3),contact:n?n.id:null}}async function Si(e){const t=String(e||"").replace(/\s+/g," ").trim().slice(0,qn),a=j.sheet;if(!t||j.busy||!a)return;j.view!=="chat"&&Ke("chat",null,!0);const n=m('[data-ref="askwarn"]',a.el);if(window.HelpSearch.hasSensitiveNumber(t)){n&&(n.textContent="נראה שכתבתם מספר ארוך (כרטיס, תעודת זהות או חשבון). אין צורך בו — נסחו את השאלה בלעדיו.");const l=m("#help-ask",a.el);l&&(l.value=t,l.focus());return}const s=window.HelpSearch.search(j.index,t,{limit:3,prefix:!1}),o=window.HelpSearch.contactTopicFor(j.kb,t,s);j.chat.push({role:"user",text:t}),j.busy=!0;const i=m("#help-ask",a.el);i&&(i.value="",vl()),it("chat");const c=Zt();let d;if(typeof navigator!="undefined"&&navigator.onLine===!1)d=Ga("offline",j.kb&&j.kb.assistant.offline||"אין חיבור לרשת כרגע, ולכן העוזר לא זמין. החיפוש במאמרים עובד גם בלי רשת.",s,o);else if(!c.ai)d=Ga("fallback","העוזר אינו פעיל כרגע.",s,o);else{const l=typeof AbortController!="undefined"?new AbortController:null,p=setTimeout(()=>{l&&l.abort()},Yd);try{const u={"Content-Type":"application/json"};c.key&&!/^https?:\/\/[^/]*\.(test|localhost)\b/.test(c.aiUrl)&&(u.apikey=c.key,u.Authorization="Bearer "+c.key);const h=await fetch(c.aiUrl,{method:"POST",headers:u,signal:l?l.signal:void 0,body:JSON.stringify({messages:dp(),locale:"he",screen:j.ctx,device:hl()})});let v={};try{v=await h.json()}catch{v={}}if(h.status===429)d=Ga("limit",v.message||"הגעתם למספר השאלות המרבי לזמן הקרוב. אפשר לנסות שוב מאוחר יותר.",s,o);else if(!h.ok||v.fallback||!v.answer)d=Ga("fallback",v.message||"העוזר לא זמין כרגע.",s,o);else{const y=(Array.isArray(v.articles)?v.articles:[]).map(String).filter(S=>Xt(S)).slice(0,3),b=v.contact&&bt(String(v.contact))||o;d={role:"assistant",kind:"ok",fresh:!0,text:String(v.answer).slice(0,4e3),articles:y,contact:b?b.id:null}}}catch{d=Ga("fallback","לא הצלחנו להגיע לעוזר כרגע.",s,o)}finally{clearTimeout(p)}}if(j.busy=!1,j.chat.push(d),j.sheet&&j.view==="chat"){it("chat");const l=m("#help-ask",j.sheet.el);l&&!("ontouchstart"in window)&&l.focus()}}const kl="אבקש לבטל את העסקה.";function ji(e){return e==="cancellation"||e==="refund"}function pp(e){const t=wi(),a=j.draft||{},n=e||a.topic||"",s=typeof je=="function"&&je()||{},o=bt(n),c=(a.message===kl&&n!=="cancellation"?"":a.message||"")||(n==="cancellation"?kl:"");return`
      ${Va()}
      <h3 class="help-view-title">פנייה לנציג</h3>
      <p class="hint help-contact-note">פנייה אנושית ניתנת בנושאים שהחוק מחייב בהם מענה ישיר. לשאלות אחרות — העוזר והמאמרים זמינים בכל שעה.</p>
      <form class="help-form" data-ref="contactform" novalidate>
        <div class="field">
          <label for="hc-topic">נושא הפנייה</label>
          <select id="hc-topic" class="input" required>
            <option value="">בחרו נושא…</option>
            ${t.map(d=>`<option value="${r(d.id)}"${d.id===n?" selected":""}>${r(d.label)}</option>`).join("")}
          </select>
          ${o&&o.sla?`<p class="hint">זמן מענה: ${r(o.sla)}</p>`:""}
          ${n==="cancellation"?'<p class="hint help-cancel-note">אפשר לבטל בתוך 14 יום מיום הרכישה או מיום קבלת פרטי העסקה בכתב — המאוחר מביניהם, גם אם המסלול כבר הופעל. אנשים עם מוגבלות, אזרחים ותיקים ועולים חדשים — בתוך 4 חודשים מיום הרכישה או מיום קבלת פרטי העסקה בכתב (המאוחר מביניהם), כשההתקשרות כללה שיחה עם מפעיל השירות (התקנון, סעיף 6). מספר זהות אינו חובה בטופס הזה — נזהה את העסקה לפי הטלפון ושם הקבוצה; מי שרוצים לציין אותו יכולים לכתוב אותו בתוכן הפנייה. אישור על הביטול יישלח אליכם בכתב.</p>':""}
        </div>
        <div class="field">
          <label for="hc-name">שם</label>
          <input id="hc-name" class="input" autocomplete="name" maxlength="80" value="${r(a.name||s.name||"")}" required>
        </div>
        <div class="field">
          <label for="hc-contact">טלפון או דוא״ל לחזרה</label>
          <input id="hc-contact" class="input ltr" autocomplete="tel" inputmode="email" maxlength="120" value="${r(a.contact||s.phone||"")}" required>
        </div>
        ${ji(n)?`
        <div class="field">
          <label for="hc-ref">הקבוצה או המסלול <span class="hint">(רשות)</span></label>
          <input id="hc-ref" class="input" maxlength="80" autocomplete="off" placeholder="למשל: טיול לגליל — מסלול שבוע" value="${r(a.ref||"")}">
        </div>`:""}
        <div class="field">
          <label for="hc-msg">תוכן הפנייה</label>
          <textarea id="hc-msg" class="input" rows="4" maxlength="${ji(n)?1400:1500}" required>${r(c)}</textarea>
          <p class="hint">${o&&o.idOk?"אין לכתוב מספרי כרטיס אשראי או חשבון בנק — לא נבקש אותם לעולם. מספר זהות — רשות, אם רוצים לציין אותו בהודעת הביטול.":"אין לכתוב מספרי כרטיס אשראי, תעודת זהות או חשבון בנק — לא נבקש אותם לעולם."}</p>
        </div>
        <label class="help-consent">
          <input type="checkbox" id="hc-consent"${a.consent?" checked":""}>
          <span>מאשרים שהפרטים ישמשו רק למענה על הפנייה הזו, בהתאם <button type="button" class="linklike" data-h="legal" data-id="privacy">למדיניות הפרטיות</button>.</span>
        </label>
        <p class="help-form-err" data-ref="formerr" role="alert"></p>
        <button class="btn primary block" type="submit" data-ref="send">שליחת הפנייה</button>
      </form>
      ${up(n)}`}function up(e){const t=e==="cancellation"||e==="refund"?"cancel":e==="privacy"?"privacy":e==="accessibility"?"a11y":"general";return`
      <section class="help-channels" aria-labelledby="help-ch-ttl">
        <h4 id="help-ch-ttl">אפשר לפנות גם ישירות</h4>
        <p class="help-op-id">מפעיל השירות: ${ln({noPhone:!0})}</p>
        ${la(t,{noForm:!0})}
        ${hs()}
        <p class="hint">פרטי מפעיל השירות ודרכי הפנייה המלאות — <button type="button" class="linklike" data-h="legal" data-id="terms">בתקנון</button>.</p>
      </section>`}function fp(e){const t=String(e||"").trim();if(/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]{2,}$/.test(t))return!0;const a=t.replace(/[\s\-().]/g,"");return/^(\+?972|0)\d{8,9}$/.test(a)}function xl(e){return{topic:m("#hc-topic",e).value,name:m("#hc-name",e).value.trim(),contact:m("#hc-contact",e).value.trim(),message:m("#hc-msg",e).value.trim(),ref:m("#hc-ref",e)?m("#hc-ref",e).value.trim():"",consent:m("#hc-consent",e).checked}}function hp(e){const t=bt(e.topic);return["פנייה לנציג · ״שווה בשווה״","נושא: "+(t?t.label:e.topic),"שם: "+e.name,"פרטי קשר: "+e.contact,e.ref?"קבוצה או מסלול: "+e.ref:null,"",e.message].filter(a=>a!==null).join(`
`)}async function mp(e){const t=xl(e);j.draft=t;const a=m('[data-ref="formerr"]',e),n=(l,p)=>{a.textContent="",J("[aria-invalid]",e).forEach(h=>h.removeAttribute("aria-invalid"));const u=p&&m(p,e);if(u&&u.type!=="checkbox"){Pe(u,l);return}a.textContent=l,u&&(u.setAttribute("aria-invalid","true"),u.focus())};if(!bt(t.topic))return n("בחרו נושא לפנייה.","#hc-topic");if(t.name.length<2)return n("כתבו שם, כדי שנדע איך לפנות אליכם.","#hc-name");if(!fp(t.contact))return n("כתבו טלפון ישראלי או כתובת דוא״ל תקינה.","#hc-contact");if(t.message.length<5)return n("כתבו בכמה מילים במה מדובר.","#hc-msg");const s=!!(bt(t.topic)||{}).idOk,o=window.HelpSearch.hasSensitiveNumber;if(o(t.name))return n(s?"בשדה השם כותבים רק שם, בלי מספרים. מספר זהות, אם רוצים לציין אותו, כותבים בתוכן הפנייה.":"בשדה השם כותבים רק שם, בלי מספרים ארוכים (כרטיס, תעודת זהות או חשבון).","#hc-name");if(t.ref&&o(t.ref))return n(s?"בשדה ״הקבוצה או המסלול״ כותבים רק את שם הקבוצה או המסלול, בלי מספרים ארוכים. מספר זהות, אם רוצים לציין אותו, כותבים בתוכן הפנייה.":"בשדה ״הקבוצה או המסלול״ כותבים רק את שם הקבוצה או המסלול, בלי מספרים ארוכים (כרטיס, תעודת זהות או חשבון).","#hc-ref");if(o(t.message,{allowId:s}))return n(s?"נראה שבתוכן הפנייה יש מספר כרטיס אשראי או חשבון בנק. אין בו צורך — מחקו אותו (מספר זהות אפשר להשאיר), ואת הטלפון כתבו בשדה ״טלפון או דוא״ל״.":"נראה שבתוכן הפנייה יש מספר ארוך (כרטיס, תעודת זהות או חשבון). אין בו צורך — מחקו אותו, ואת הטלפון כתבו בשדה ״טלפון או דוא״ל״.","#hc-msg");if(!t.consent)return n("כדי לשלוח, יש לאשר את השימוש בפרטים למענה על הפנייה.","#hc-consent");a.textContent="";const i=m('[data-ref="send"]',e);i.disabled=!0,i.textContent="שולחים…";const c=Zt();let d=null;if(c.supportUrl&&(typeof navigator=="undefined"||navigator.onLine!==!1))try{const l={"Content-Type":"application/json"};c.key&&!/^https?:\/\/[^/]*\.(test|localhost)\b/.test(c.supportUrl)&&(l.apikey=c.key,l.Authorization="Bearer "+c.key);const p=await fetch(c.supportUrl,{method:"POST",headers:l,body:JSON.stringify({topic:t.topic,name:t.name,contact:t.contact,message:(t.ref&&ji(t.topic)?"קבוצה או מסלול: "+t.ref+`
`:"")+t.message,consent:!0,locale:"he",screen:j.ctx,device:hl()})}),u=await p.json().catch(()=>({}));p.ok&&u.ticket&&(d={no:String(u.ticket),sla:u.sla?String(u.sla):"",topic:t.topic})}catch{}j.draft=d?null:t,Ke("sent",d?{ticket:d}:{manual:t},!1)}function bp(e){if(e=e||{},e.ticket){const c=e.ticket,d=bt(c.topic),l=d&&d.ack?d.ack:"";return`
        <div class="help-sent">
          <div class="help-sent-ic" aria-hidden="true">✓</div>
          <h3 class="help-view-title">הפנייה התקבלה</h3>
          <p>מספר הפנייה: <b class="num">${r(c.no)}</b></p>
          ${l?`<p>${r(l)}</p>`:""}
          ${c.sla?`<p class="hint">זמן מענה: ${r(c.sla)}</p>`:""}
          <p class="hint">${c.sla||l?"":"נחזור אליכם בהקדם. "}כדאי לשמור את מספר הפנייה.</p>
          <button class="btn block" data-h="home">חזרה למרכז העזרה</button>
        </div>`}const t=e.manual||j.draft||{},a=hp(t),n=De(),s=n.email,o=bt(t.topic),i=[s?"בדוא״ל":"",n.mobile?"בוואטסאפ":""].filter(Boolean).join(" או ");return`
      ${Va()}
      <div class="help-sent">
        <h3 class="help-view-title">עוד צעד אחד — שליחה</h3>
        <p class="hint">הפנייה מוכנה.${i?` ${i} היא תיפתח מוכנה לשליחה${n.phone?", ואפשר גם להתקשר ולמסור אותה בשיחה":""}.`:n.phone?" אפשר להתקשר ולמסור אותה בשיחה.":""}</p>
        <pre class="help-preview" dir="rtl">${r(a)}</pre>
        ${s?`<a class="btn primary block" data-h="sent-manual" data-ref="sent-mail" href="${r(Qi(s,"פנייה לנציג — "+(o?o.label:""),a))}">שליחה בדוא״ל</a>`:""}
        ${n.phone?`<a class="btn block help-call" data-h="sent-manual" data-ref="sent-tel" href="tel:${r(n.tel)}">התקשרות <span class="num" dir="ltr">${r(n.phone)}</span></a>`:""}
        ${n.mobile?`<a class="${s?"btn wa soft block":"btn primary block"}" data-h="sent-manual" data-ref="sent-wa" href="${r(Ht(n.phoneRaw,a))}" target="_blank" rel="noopener">שליחה בוואטסאפ</a>`:""}
      </div>`}function yp(e){const t=e.target.closest("[data-h]");if(!t||!j.sheet||!j.sheet.el.contains(t))return;const a=t.dataset.h;if(a==="sent-manual"){j.draft=null;return}if(e.preventDefault(),a==="article")Ke("article",t.dataset.id,!0);else if(a==="category")Ke("category",t.dataset.id,!0);else if(a==="back")ap();else if(a==="home"){j.back=[],j.query="";const n=m("#help-q",j.sheet.el);n&&(n.value=""),Ke("home",null,!1)}else if(a==="chat")Ke("chat",null,!0);else if(a==="ask"){if(!Zt().ai)return;Si(t.dataset.q||"")}else if(a==="copy"){const n=j.chat[Number(t.dataset.i)];n&&tp(bl(n.text))}else a==="clear"?(j.chat=[],it("chat")):a==="contact"?Ke("contact",t.dataset.id||null,!0):a==="legal"?pn(t.dataset.id):a==="retry"&&(it("loading"),ml().then(()=>Ke("home",null,!1)).catch(()=>it("error")))}function gp(e){const t=e.target;!t||!j.sheet||(t.dataset.ref==="askform"?(e.preventDefault(),wl()):t.dataset.ref==="contactform"&&(e.preventDefault(),mp(t)))}function Yn(e){return`<button class="iconbtn help-btn ${e||""}" data-help-open aria-label="מרכז העזרה — מאמרים, שאלות ופנייה"><span aria-hidden="true">?</span></button>`}function El(e){if(!e)return;const t=m(".brand-tools",e),a=m(".trip-actions",e);if(t){if(!m("[data-help-open]",t)){const o=m('[data-act="open-admin"]',t);o?o.insertAdjacentHTML("beforebegin",Yn()):t.insertAdjacentHTML("beforeend",Yn())}const s=t.closest(".brandbar");s&&s.classList.add("has-help")}else a?m("[data-help-open]",a)||a.insertAdjacentHTML("afterbegin",Yn()):m(".help-fab",e)||e.insertAdjacentHTML("beforeend",Yn("help-fab"));const n=m(".legal-links",e);if(n&&!m("[data-help-open]",n)&&n.insertAdjacentHTML("beforeend",' · <button class="linklike" data-help-open>עזרה ושאלות</button> · <button class="linklike" data-help-open="contact" data-help-id="cancellation">ביטול עסקה</button>'),!j.deepLinked&&(f.ready||f.joinTripId)){j.deepLinked=!0;let s=null;try{s=new URLSearchParams(location.search).get("help")}catch{s=null}s&&setTimeout(()=>{ba(s==="chat"?{view:"chat"}:s==="contact"?{view:"contact"}:s==="cancel"?{view:"contact",id:"cancellation"}:s==="1"?{}:{view:"article",id:s})},120)}}document.addEventListener("click",e=>{const t=e.target.closest("[data-help-open]");if(!t)return;e.preventDefault();const a=t.closest(".sheet-backdrop");if(a&&!(j.sheet&&j.sheet.el.contains(t))){const n=J(".sheet-backdrop"),s=ht[ht.length-1];s&&n[n.length-1]===a&&s()}ba({view:t.dataset.helpOpen||"",id:t.dataset.helpId||""})}),document.addEventListener("click",e=>{const t=e.target.closest("[data-act]");if(!t)return;const a=t.dataset.act,n=Be();if(a==="join-submit")Ed();else if(a==="show-pending"&&n){f.tab="all",Y();const s=m(".exp-row.pending-del, .acct-row.pending-del");s&&(s.scrollIntoView({block:"center",behavior:"smooth"}),s.focus({preventScroll:!0}))}else if(a==="mgr-login"){const s=n||f.trips.find(o=>o.id===f.joinTripId);s&&Qr(s)}else if(a==="join-skip"){const s=f.joinTripId;f.joinTripId=null,ta(),s&&f.trips.some(o=>o.id===s)?Qe(s):Y()}else if(a==="new-trip"||a==="new-kind-picker")br();else if(a==="new-kind")Ja(null,rt.find(s=>s.id===t.dataset.kind));else if(a==="pricing")no();else if(a==="open-trip")Qe(t.dataset.id);else if(a==="back-home")Xs();else if(a==="open-admin")f.screen="admin",Y();else if(a==="toggle-archive")f.showArchived=!f.showArchived,Y();else if(a==="tab"){f.tab=t.dataset.id,Y();const s=m(`[data-act="tab"][data-id="${f.tab}"]`);s&&s.focus()}else if(a==="add-exp")Ya(null);else if(a==="edit-exp"){const s=f.expenses.find(o=>o.id===t.dataset.id);if(!s||!n)return;typeof s.canEdit=="boolean"||Po(n,s)?Ya(s):E(Mo)}else if(a==="trip-settings"&&n)Ja(n);else if(a==="share-summary"&&n)Rd(n);else if(a==="share-join"&&n)$i(n);else if(a==="export-csv"&&n)zd(n);else if(a==="del-payment"&&n)Fd(n,t.dataset.id);else if(a==="mark-paid"&&n)Dd(n,t.dataset.from,t.dataset.to,Number(t.dataset.cents)||0);else if(a==="my-area"&&n){const s=se(n.id),o=s?(n.members||[]).find(i=>i.id===s)||Ue(n,s):null;if(!o){bi(n);return}pe(`
        <div class="sheet-head">
          ${Fe(o,"lg",!0)}
          <h2 class="sheet-title">האזור האישי שלי</h2>
        </div>
        ${Id(n,o,Logic.transfersFor(n,f.expenses))}
        <div style="display:flex;flex-direction:column;gap:10px;margin-top:16px;">
          <a class="btn wa soft block" href="${r(Nt(Vi(n,o.id)))}" target="_blank" rel="noopener">
            ${he("chat",18)} שליחת החשבון שלי בוואטסאפ</a>
        </div>`)}else if(a==="toggle-notif"){const s=()=>{const o=m('.trip-tools [data-act="toggle-notif"]');o&&o.focus({preventScroll:!0})};ut()?(Sn(!1),E("ההתראות כובו"),Y(),s()):(Sn(!0),Us(),Uo().then(o=>{E(o?"התראות פעילות 🔔 — כך נשמע כשנרשמת הוצאה":"התראות פעילות בתוך האפליקציה 🔔"),Y(),s()}))}else if(a==="admin-trip")Xc(t.dataset.id);else if(a==="license-new")_o(null);else if(a==="licenses-retry")Ft=!1,$o(),Y();else if(a==="license-open"){const s=(Ye||[]).find(o=>o.id===t.dataset.id);s&&_o(s)}else if(a==="who-pick"&&n){const s=(n.members||[]).find(o=>o.id===t.dataset.id);s&&rd(n,s)}else if(a==="close-trip"&&n)rl(n);else if(a==="legal")pn(t.dataset.id);else if(a==="plans"&&n)dt(n);else if(a==="final-summary"&&n)ll(n);else if(a==="full-summary"&&n){const s=Logic.computeBalances(n,f.expenses);pe(`<div class="sheet-head"><h2 class="sheet-title">הסיכום המלא</h2></div>${xr(n,s)}`)}else if(a==="install-app")Lc();else if(a==="converter"&&n)Er(n);else if(a==="jscope")ge&&(ge.scope=t.dataset.scope),Ar(t.closest(".field")||document,t.dataset.scope);else if(a==="jstep")kd(t);else if(a==="mypay-ok"&&n){const s=(n.members||[]).find(o=>o.id===se(n.id));s&&Wt(n.id,s.id,Fa(s)),E("תודה — ההודעה הוסרה"),Y()}else if(a==="mypay-restore"&&n)gd(n);else if(a==="jpay-toggle")ge&&ge.pay&&(ge.pay.open=!ge.pay.open,Y());else if(a==="pay-prefs"&&n){const s=(n.members||[]).find(i=>i.id===(t.dataset.id||se(n.id))),o=t.closest(".sheet")&&t.closest(".sheet").querySelector(".tile-grid")?()=>{const i=Be(),c=i&&(i.members||[]).find(d=>d.id===s.id);c&&Kn(i,c)}:null;s&&Vr(n,s,o)}else if(a==="pay-copy")Un(t.dataset.copy||"",`${t.dataset.what||"הפרטים"} ${t.dataset.what==="כל הפרטים"?"הועתקו":"הועתק"} ✓`);else if(a==="pay-reveal"){const s=t.getAttribute("aria-pressed")==="true",o=t.parentElement&&t.parentElement.querySelector("[data-acc]");o&&(o.textContent=s?t.dataset.mask:t.dataset.full),t.setAttribute("aria-pressed",String(!s)),t.textContent=s?"הצגה":"הסתרה"}else if(a==="pay-seen"&&n){const s={};(t.dataset.ids||"").split(",").forEach(o=>{const i=o.lastIndexOf(":");i>0&&(s[o.slice(0,i)]=Number(o.slice(i+1)))}),Fr(n.id,s),Y()}else if(a==="household"&&n){const s=(n.members||[]).find(i=>i.id===(t.dataset.id||se(n.id))),o=t.closest(".sheet")?()=>{const i=Be(),c=i&&(i.members||[]).find(d=>d.id===s.id);c&&Kn(i,c)}:null;s&&(de(n)||s.id===se(n.id))&&Ir(n,s,o)}else if(a==="pick-me"&&n)bi(n);else if(a==="member-detail"&&n){const s=(n.members||[]).find(o=>o.id===t.dataset.id);if(!s)return;de(n)||s.id===se(n.id)?Kn(n,s):E("הפירוט האישי גלוי למשתתף עצמו ולמנהל הקבוצה")}else if(a==="filter-clear")f.filter={cat:null,payer:null},Y();else if(a==="filter-cat")f.filter.cat=f.filter.cat===t.dataset.id?null:t.dataset.id,Y();else if(a==="filter-payer")f.filter.payer=f.filter.payer===t.dataset.id?null:t.dataset.id,Y();else if(a==="archive-trip")pl(t.dataset.id,!0);else if(a==="restore-trip")pl(t.dataset.id,!1);else if(a==="delete-trip")Ud(t.dataset.id);else if(a==="backup")Bd();else if(a==="restore")ed();else if(a==="wipe-all")td();else if(a==="clear-demo")Kd();else if(a==="admin-unlock"){const s=m("#admin-pin"),o=m("#admin-code"),i=(s&&s.value||"").trim(),c=o&&!o.hidden?o.value.trim():"",d=m('[data-ref="err"]');if(t.disabled)return;t.disabled=!0,t.textContent="בודקים…",Hl(i,c).then(l=>{if(l.ok){E("אזור המנהל נפתח ✓"),L&&L.refresh&&L.refresh(),Y();return}if(l.error==="totp_required"&&o){o.hidden=!1,o.value="",d&&(d.textContent=en.totp_required),o.focus();return}d&&(d.textContent=l.error==="denied"&&c?en.code:en[l.error]||en.denied),l.error==="denied"&&c&&o?(o.value="",o.focus()):l.error==="denied"&&s&&(s.value="",s.focus())}).catch(l=>{console.error("admin unlock failed",l),d&&(d.textContent="לא הצלחנו לבדוק את הסיסמה כרגע — בדקו את החיבור ונסו שוב")}).then(()=>{t.disabled=!1,t.textContent="כניסה"})}else a==="admin-lock"?(Ui(),ns=!1,E("אזור המנהל ננעל"),L&&L.refresh&&L.refresh(),Xs()):a==="reload"?location.reload():a==="sync-setup"?vr():a==="sync-disconnect"&&xe("ניתוק מהקבוצה המשותפת","המכשיר הזה יחזור לרישום מקומי בלבד. הנתונים המשותפים עצמם לא יימחקו.","ניתוק").then(s=>{s&&(es(null),E("נותקתם מהקבוצה המשותפת"),setTimeout(()=>location.reload(),600))})}),document.addEventListener("keydown",e=>{const t=e.target;if(!t||!t.matches||!t.matches('.exp-tabs [role="tab"]'))return;const a=J('[role="tab"]',t.closest('[role="tablist"]')),n=a.indexOf(t),s=getComputedStyle(t).direction==="rtl";let o=-1;e.key==="Home"?o=0:e.key==="End"?o=a.length-1:e.key==="ArrowLeft"?o=(n+(s?1:-1)+a.length)%a.length:e.key==="ArrowRight"&&(o=(n+(s?-1:1)+a.length)%a.length),!(o<0)&&(e.preventDefault(),a[o].click())}),document.addEventListener("keydown",e=>{if(e.key!=="Enter"||!e.target||e.target.id!=="admin-pin")return;e.preventDefault();const t=m('[data-act="admin-unlock"]');t&&t.click()}),document.addEventListener("click",e=>{const t=e.target.closest(".exp-thumb, .gal-btn");t&&(e.preventDefault(),e.stopPropagation(),Hd(t.dataset.full||t.src))},!0),Uc()})();
