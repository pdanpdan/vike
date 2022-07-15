var X=Object.defineProperty;var I=Object.getOwnPropertySymbols;var Z=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable;var L=(e,t,r)=>t in e?X(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,k=(e,t)=>{for(var r in t||(t={}))Z.call(t,r)&&L(e,r,t[r]);if(I)for(var r of I(t))ee.call(t,r)&&L(e,r,t[r]);return e};function te(e,t){e.stack=re(e.stack,t)}function re(e,t){if(!e)return e;const r=ne(e);let n=0;return r.filter(l=>l.includes(" (internal/")||l.includes(" (node:internal")?!1:n<t&&oe(l)?(n++,!1):!0).join(`
`)}function oe(e){return e.startsWith("    at ")}function ne(e){return e.split(/\r?\n/)}function W(e,t){let r;{var n=Error.stackTraceLimit;Error.stackTraceLimit=1/0,r=new Error(e),Error.stackTraceLimit=n}return te(r,t),r}const ae="0.4.7",b={projectName:"vite-plugin-ssr",projectVersion:ae,npmPackageName:"vite-plugin-ssr",githubRepository:"https://github.com/brillout/vite-plugin-ssr",discordInviteToolChannel:"https://discord.com/invite/qTq92FQzKb"},j=`[${b.npmPackageName}@${b.projectVersion}]`,se=`${j}[Bug]`,le=`${j}[Wrong Usage]`,_e=`${j}[Warning]`,ie=`${j}[Info]`,F=2;function a(e,t){if(e)return;const r=(()=>{if(!t)return"";const o=typeof t=="string"?t:"`"+JSON.stringify(t)+"`";return`Debug info (this is for the ${b.projectName} maintainers; you can ignore this): ${o}.`})();throw W([`${se} You stumbled upon a bug in ${b.projectName}'s source code.`,`Reach out at ${b.githubRepository}/issues/new or ${b.discordInviteToolChannel} and include this error stack (the error stack is usually enough to fix the problem).`,"A maintainer will fix the bug (usually under 24 hours).",`Do not hesitate to reach out as it makes ${b.projectName} more robust.`,r].join(" "),F)}function v(e,t){if(e)return;const r=t.startsWith("[")?"":" ";throw W(`${le}${r}${t}`,F)}function ue(e){return W(`${j} ${e}`,F)}let $=new Set;function ce(e,t,{onlyOnce:r,showStackTrace:n}){if(e)return;const o=`${_e} ${t}`;if(r){const l=r===!0?o:r;if($.has(l))return;$.add(l)}console.warn(n?new Error(o):o)}function Oo(e,t,{onlyOnce:r}){if(e)return;const n=`${ie} ${t}`,o=n;$.has(o)||($.add(o),console.log(n))}function P(e,t,r){return typeof e=="string"?A(e.split(""),t,r).join(""):A(e,t,r)}function A(e,t,r){const n=[];let o=t>=0?t:e.length+t;a(o>=0&&o<=e.length);let l=r>=0?r:e.length+r;for(a(l>=0&&l<=e.length);!(o===l||(o===e.length&&(o=0),o===l));){const s=e[o];a(s!==void 0),n.push(s),o++}return n}function de(e){return e.startsWith("/")||e.startsWith("http")||e.startsWith(".")||e.startsWith("?")||e.startsWith("#")||e===""}function fe(e,t){a(de(e),{url:e}),a(t.startsWith("/"),{url:e,baseUrl:t});const[r,...n]=e.split("#");a(r!==void 0);const o=["",...n].join("#")||null;a(o===null||o.startsWith("#"));const l=o===null?"":z(o.slice(1)),[s,..._]=r.split("?");a(s!==void 0);const i=["",..._].join("?")||null;a(i===null||i.startsWith("?"),{url:e,searchOriginal:i});const d={},x={};Array.from(new URLSearchParams(i||"")).forEach(([g,S])=>{d[g]=S,x[g]=[...x[g]||[],S]});const{origin:f,pathnameResolved:y}=pe(e,t);a(f===null||f===z(f),{origin:f}),a(y.startsWith("/"),{url:e,pathnameResolved:y}),a(f===null||e.startsWith(f),{url:e,origin:f});const T=s.slice((f||"").length);{const g=`${f||""}${T}${i||""}${o||""}`;a(e===g,{url:e,urlRecreated:g})}let{pathname:u,hasBaseUrl:p}=ve(y,t);return u=ge(u),a(u.startsWith("/")),{origin:f,pathname:u,pathnameOriginal:T,hasBaseUrl:p,search:d,searchAll:x,searchOriginal:i,hash:l,hashOriginal:o}}function z(e){try{return decodeURIComponent(e)}catch{}try{return decodeURI(e)}catch{}return e}function ge(e){return e.split("/").map(t=>z(t).split("/").join("%2F")).join("/")}function pe(e,t){var r;if(e.startsWith("//"))return{origin:null,pathnameResolved:e};let n,o;try{const l=new URL(e);n=l.origin,o=l.pathname}catch{n=null;let s=typeof window!="undefined"&&((r=window==null?void 0:window.document)===null||r===void 0?void 0:r.baseURI);s=s||"http://fake.example.org"+t,o=new URL(e,s).pathname}return a(o.startsWith("/"),{url:e,pathnameResolved:o}),a(o===o.split("?")[0].split("#")[0]),{origin:n,pathnameResolved:o}}function be(e){a(e.startsWith("/"))}function me(e){a(e.startsWith("/")),a(!e.includes("?")),a(!e.includes("#"))}function ve(e,t){me(e),be(t);let r=e;if(a(r.startsWith("/")),a(t.startsWith("/")),t==="/")return{pathname:e,hasBaseUrl:!0};let n=t;return t.endsWith("/")&&r===P(t,0,-1)&&(n=P(t,0,-1),a(r===n)),r.startsWith(n)?(a(r.startsWith("/")||r.startsWith("http")),a(r.startsWith(n)),r=r.slice(n.length),r.startsWith("/")||(r="/"+r),a(r.startsWith("/")),{pathname:r,hasBaseUrl:!0}):{pathname:e,hasBaseUrl:!1}}function H(e,t){Object.assign(e,t)}function R(e){return e instanceof Function||typeof e=="function"}function h(e){return typeof e=="object"&&e!==null}function xe(e){return Array.from(new Set(e))}function No(e){return(t,r)=>{const n=e(t),o=e(r);return n===o?0:n>o?-1:1}}function ye(e){return(t,r)=>{const n=e(t),o=e(r);if(a([!0,!1,null].includes(n)),a([!0,!1,null].includes(o)),n===o)return 0;if(n===!0||o===!1)return-1;if(o===!0||n===!1)return 1;a(!1)}}function Se(e){return ye(t=>{const r=e(t);return r===null?null:!r})}function J(){return typeof window!="undefined"&&typeof window.scrollY=="number"}function c(e,t,r="unknown"){if(!(typeof e=="object"&&e!==null&&t in e))return r==="undefined";if(r==="unknown")return!0;const o=e[t];return r==="array"?Array.isArray(o):r==="string[]"?Array.isArray(o)&&o.every(l=>typeof l=="string"):r==="function"?R(o):Array.isArray(r)?typeof o=="string"&&r.includes(o):r==="null"?o===null:r==="undefined"?o===void 0:typeof o===r}function he(e,t){return e.toLowerCase()<t.toLowerCase()?-1:e.toLowerCase()>t.toLowerCase()?1:0}const je=e=>e!=null,Oe="\\";function m(e){a(e&&!e.includes(Oe),`Wrongly formatted path: ${e}`)}function Ne(e){const t={};e.forEach(o=>{$e(o).forEach(({exportName:s,exportValue:_,isFromDefaultExport:i})=>{var d;a(s!=="default"),t[s]=(d=t[s])!==null&&d!==void 0?d:[],t[s].push({exportValue:_,_filePath:o.filePath,_fileType:o.fileType,_isFromDefaultExport:i})})});const r=Te(),n={};return Object.entries(t).forEach(([o,l])=>{l.forEach(({exportValue:s,_fileType:_,_isFromDefaultExport:i})=>{var d;n[o]=(d=n[o])!==null&&d!==void 0?d:s,_===".page"&&!i&&(o in r||(r[o]=s))})}),a(!("default"in n)),a(!("default"in t)),{exports:n,exportsAll:t,pageExports:r}}function $e(e){const{filePath:t,fileExports:r}=e;a(r);const n=[];return Object.entries(r).sort(Se(([o])=>o==="default")).forEach(([o,l])=>{let s=o==="default";if(s)if(!Pe(t))o="Page";else{v(h(l),`The \`export default\` of ${t} should be an object.`),Object.entries(l).forEach(([_,i])=>{ze(_,t),n.push({exportName:_,exportValue:i,isFromDefaultExport:s})});return}n.push({exportName:o,exportValue:l,isFromDefaultExport:s})}),n.forEach(({exportName:o,isFromDefaultExport:l})=>{a(!(l&&V.includes(o)))}),n}function Pe(e){return/\.(c|m)?(j|t)sx?$/.test(e)}function Te(){return new Proxy({},{get(...e){return J()||ce(!1,"`pageContext.pageExports` is outdated. Use `pageContext.exports` instead, see https://vite-plugin-ssr.com/exports",{onlyOnce:!0,showStackTrace:!0}),Reflect.get(...e)}})}const V=["render","clientRouting"];function ze(e,t){v(!V.includes(e),`${t}\` has export default { ${e} }\` which is forbidden, do \`export { ${e} }\` instead.`)}function q(e){const t=".page.",r=P(e.split(t),0,-1).join(t);return a(!r.includes("\\")),r}function Me(e){return a(!e.includes("\\")),e.includes("/_error")}function we(e){const t=o=>n.pageId===o||n.isDefaultPageFile&&(n.isRendererPageFile||Fe(o,n.filePath)),r=Ee(e),n={filePath:e,fileType:r,isRelevant:t,isDefaultPageFile:M(e),isRendererPageFile:M(e)&&We(e),isErrorPageFile:Me(e),pageId:q(e)};return n}function Ee(e){m(e);const r=e.split("/").slice(-1)[0].split("."),n=r.slice(-3)[0],o=r.slice(-2)[0];if(o==="page")return".page";if(a(n==="page",{filePath:e}),o==="server")return".page.server";if(o==="client")return".page.client";if(o==="route")return".page.route";a(!1,{filePath:e})}function M(e){return m(e),a(e.startsWith("/")),e.includes("/_default")}function We(e){return m(e),a(e.startsWith("/")),e.includes("/renderer/")}function Fe(e,t){m(e),m(t),a(e.startsWith("/")),a(t.startsWith("/")),a(!e.endsWith("/")),a(!t.endsWith("/")),a(M(t));const r=P(t.split("/"),0,-1).join("/");return e.startsWith(r)}const Re=[".page",".page.server",".page.route",".page.client"];function Ie(e){a(c(e,"isGeneratedFile"),"Missing `isGeneratedFile`."),a(e.isGeneratedFile!==!1,"vite-plugin-ssr was re-installed(/re-built). Restart your app."),a(e.isGeneratedFile===!0,`\`isGeneratedFile === ${e.isGeneratedFile}\``),a(c(e,"pageFilesLazy","object")),a(c(e,"pageFilesEager","object")),a(c(e,"pageFilesExportNamesLazy","object")),a(c(e,"pageFilesExportNamesEager","object")),a(c(e.pageFilesLazy,".page")),a(c(e.pageFilesLazy,".page.client")||c(e.pageFilesLazy,".page.server"));const t={};O(e.pageFilesLazy).forEach(({filePath:n,pageFile:o,globValue:l})=>{var s;o=t[n]=(s=t[n])!==null&&s!==void 0?s:o;const _=l;D(_),o.loadFile=async()=>{"fileExports"in o||(o.fileExports=await _())}}),O(e.pageFilesExportNamesLazy).forEach(({filePath:n,pageFile:o,globValue:l})=>{var s;o=t[n]=(s=t[n])!==null&&s!==void 0?s:o;const _=l;D(_),o.loadExportNames=async()=>{if(!("exportNames"in o)){const i=await _();a(c(i,"exportNames","string[]"),o.filePath),o.exportNames=i.exportNames}}}),O(e.pageFilesEager).forEach(({filePath:n,pageFile:o,globValue:l})=>{var s;o=t[n]=(s=t[n])!==null&&s!==void 0?s:o;const _=l;a(h(_)),o.fileExports=_}),O(e.pageFilesExportNamesEager).forEach(({filePath:n,pageFile:o,globValue:l})=>{var s;o=t[n]=(s=t[n])!==null&&s!==void 0?s:o;const _=l;a(h(_)),a(c(_,"exportNames","string[]"),o.filePath),o.exportNames=_.exportNames});const r=Object.values(t);return r.forEach(({filePath:n})=>{a(!n.includes("\\"))}),r}function O(e){const t=[];return Object.entries(e).forEach(([r,n])=>{a(Re.includes(r)),a(h(n)),Object.entries(n).forEach(([o,l])=>{const s=we(o);a(s.fileType===r),t.push({filePath:o,pageFile:s,globValue:l})})}),t}function D(e){a(R(e))}ke();let w,Le;function $o(e){w=Ie(e)}function Po(){a(!Le),a(w);const e=w,t=Ae(e);return{pageFilesAll:e,allPageIds:t}}function ke(){const e=Symbol(),t=J()?window:global;a(!t[e]),t[e]=!0}function Ae(e){const t=e.filter(({isDefaultPageFile:n})=>!n).map(({filePath:n})=>n).map(q);return xe(t)}function De(e,t){return Y(e,t,!0)}function To(e,t){return Y(e,t,!1)}function Y(e,t,r){const n=r?".page.client":".page.server",o=Ce(n,t),l=e.filter(u=>u.isRelevant(t)),s=u=>l.filter(p=>p.isRendererPageFile&&p.fileType===u).sort(o)[0],_=u=>{const p=l.filter(S=>S.pageId===t&&S.fileType===u);a(p.length<=1);const g=p[0];return a(g===void 0||!g.isDefaultPageFile),p[0]},i=l.filter(u=>u.isDefaultPageFile&&!u.isRendererPageFile&&(u.fileType===n||u.fileType===".page"));i.sort(o);const d=s(n),x=s(".page"),f=_(n),y=_(".page");return[f,y,...i,d,x].filter(je)}function Ce(e,t){return(l,s)=>{a(l.isDefaultPageFile&&s.isDefaultPageFile);{const _=l.isRendererPageFile,i=s.isRendererPageFile;if(!_&&i)return-1;if(!i&&_)return 1;a(_===i)}{const _=C(t,l.filePath),i=C(t,s.filePath);if(_<i)return-1;if(i<_)return 1;a(_===i)}{if(l.fileType===e&&s.fileType!==e)return-1;if(s.fileType===e&&l.fileType!==e)return 1}{if(l.fileType===".page"&&s.fileType!==".page")return 1;if(s.fileType===".page"&&l.fileType!==".page")return-1}return 0}}function C(e,t){m(e),m(t),a(e.startsWith("/")),a(t.startsWith("/"));let r=0;for(;r<e.length&&r<t.length&&e[r]===t[r];r++);const n=e.slice(r),o=t.slice(r),l=n.split("/").length,s=o.split("/").length;return l+s}function Ue(e,t){return De(e,t)}const Be="modulepreload",U={},Ge="/",zo=function(t,r){return!r||r.length===0?t():Promise.all(r.map(n=>{if(n=`${Ge}${n}`,n in U)return;U[n]=!0;const o=n.endsWith(".css"),l=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${l}`))return;const s=document.createElement("link");if(s.rel=o?"stylesheet":Be,o||(s.as="script",s.crossOrigin=""),s.href=n,document.head.appendChild(s),o)return new Promise((_,i)=>{s.addEventListener("load",_),s.addEventListener("error",()=>i(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>t())},He=["overrideDefaultPages"];var Mo=Object.freeze(Object.defineProperty({__proto__:null,exportNames:He},Symbol.toStringTag,{value:"Module"}));const Je=[];var wo=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Je},Symbol.toStringTag,{value:"Module"}));const Ve=[];var Eo=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Ve},Symbol.toStringTag,{value:"Module"}));const qe=[];var Wo=Object.freeze(Object.defineProperty({__proto__:null,exportNames:qe},Symbol.toStringTag,{value:"Module"}));const Ye=[];var Fo=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Ye},Symbol.toStringTag,{value:"Module"}));const Ke=["headings","default"];var Ro=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Ke},Symbol.toStringTag,{value:"Module"}));const Qe=["headings","default"];var Io=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Qe},Symbol.toStringTag,{value:"Module"}));const Xe=["headings","default"];var Lo=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Xe},Symbol.toStringTag,{value:"Module"}));const Ze=["headings","default"];var ko=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Ze},Symbol.toStringTag,{value:"Module"}));const et=["headings","default"];var Ao=Object.freeze(Object.defineProperty({__proto__:null,exportNames:et},Symbol.toStringTag,{value:"Module"}));const tt=["headings","default"];var Do=Object.freeze(Object.defineProperty({__proto__:null,exportNames:tt},Symbol.toStringTag,{value:"Module"}));const rt=["headings","default"];var Co=Object.freeze(Object.defineProperty({__proto__:null,exportNames:rt},Symbol.toStringTag,{value:"Module"}));const ot=["headings","default"];var Uo=Object.freeze(Object.defineProperty({__proto__:null,exportNames:ot},Symbol.toStringTag,{value:"Module"}));const nt=["headings","default"];var Bo=Object.freeze(Object.defineProperty({__proto__:null,exportNames:nt},Symbol.toStringTag,{value:"Module"}));const at=["headings","default"];var Go=Object.freeze(Object.defineProperty({__proto__:null,exportNames:at},Symbol.toStringTag,{value:"Module"}));const st=["headings","default"];var Ho=Object.freeze(Object.defineProperty({__proto__:null,exportNames:st},Symbol.toStringTag,{value:"Module"}));const lt=["headings","default"];var Jo=Object.freeze(Object.defineProperty({__proto__:null,exportNames:lt},Symbol.toStringTag,{value:"Module"}));const _t=["render","Page"];var Vo=Object.freeze(Object.defineProperty({__proto__:null,exportNames:_t},Symbol.toStringTag,{value:"Module"}));const it=["headings","default"];var qo=Object.freeze(Object.defineProperty({__proto__:null,exportNames:it},Symbol.toStringTag,{value:"Module"}));const ut=["headings","default"];var Yo=Object.freeze(Object.defineProperty({__proto__:null,exportNames:ut},Symbol.toStringTag,{value:"Module"}));const ct=["headings","default"];var Ko=Object.freeze(Object.defineProperty({__proto__:null,exportNames:ct},Symbol.toStringTag,{value:"Module"}));const dt=["headings","default"];var Qo=Object.freeze(Object.defineProperty({__proto__:null,exportNames:dt},Symbol.toStringTag,{value:"Module"}));const ft=["headings","default"];var Xo=Object.freeze(Object.defineProperty({__proto__:null,exportNames:ft},Symbol.toStringTag,{value:"Module"}));const gt=["headings","default"];var Zo=Object.freeze(Object.defineProperty({__proto__:null,exportNames:gt},Symbol.toStringTag,{value:"Module"}));const pt=["headings","default"];var en=Object.freeze(Object.defineProperty({__proto__:null,exportNames:pt},Symbol.toStringTag,{value:"Module"}));const bt=["headings","default"];var tn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:bt},Symbol.toStringTag,{value:"Module"}));const mt=["headings","default"];var rn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:mt},Symbol.toStringTag,{value:"Module"}));const vt=["headings","default"];var on=Object.freeze(Object.defineProperty({__proto__:null,exportNames:vt},Symbol.toStringTag,{value:"Module"}));const xt=["headings","default"];var nn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:xt},Symbol.toStringTag,{value:"Module"}));const yt=["headings","default"];var an=Object.freeze(Object.defineProperty({__proto__:null,exportNames:yt},Symbol.toStringTag,{value:"Module"}));const St=["headings","default"];var sn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:St},Symbol.toStringTag,{value:"Module"}));const ht=["headings","default"];var ln=Object.freeze(Object.defineProperty({__proto__:null,exportNames:ht},Symbol.toStringTag,{value:"Module"}));const jt=["headings","default"];var _n=Object.freeze(Object.defineProperty({__proto__:null,exportNames:jt},Symbol.toStringTag,{value:"Module"}));const Ot=["headings","default"];var un=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Ot},Symbol.toStringTag,{value:"Module"}));const Nt=["headings","default"];var cn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Nt},Symbol.toStringTag,{value:"Module"}));const $t=["headings","default"];var dn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:$t},Symbol.toStringTag,{value:"Module"}));const Pt=["headings","default"];var fn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Pt},Symbol.toStringTag,{value:"Module"}));const Tt=["headings","default"];var gn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Tt},Symbol.toStringTag,{value:"Module"}));const zt=["headings","default"];var pn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:zt},Symbol.toStringTag,{value:"Module"}));const Mt=["headings","default"];var bn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Mt},Symbol.toStringTag,{value:"Module"}));const wt=["headings","default"];var mn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:wt},Symbol.toStringTag,{value:"Module"}));const Et=["headings","default"];var vn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Et},Symbol.toStringTag,{value:"Module"}));const Wt=["headings","default"];var xn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Wt},Symbol.toStringTag,{value:"Module"}));const Ft=["headings","default"];var yn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Ft},Symbol.toStringTag,{value:"Module"}));const Rt=["headings","default"];var Sn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Rt},Symbol.toStringTag,{value:"Module"}));const It=["headings","default"];var hn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:It},Symbol.toStringTag,{value:"Module"}));const Lt=["headings","default"];var jn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Lt},Symbol.toStringTag,{value:"Module"}));const kt=["headings","default"];var On=Object.freeze(Object.defineProperty({__proto__:null,exportNames:kt},Symbol.toStringTag,{value:"Module"}));const At=["headings","default"];var Nn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:At},Symbol.toStringTag,{value:"Module"}));const Dt=["headings","default"];var $n=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Dt},Symbol.toStringTag,{value:"Module"}));const Ct=["headings","default"];var Pn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Ct},Symbol.toStringTag,{value:"Module"}));const Ut=["headings","default"];var Tn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Ut},Symbol.toStringTag,{value:"Module"}));const Bt=["headings","default"];var zn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Bt},Symbol.toStringTag,{value:"Module"}));const Gt=["headings","default"];var Mn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Gt},Symbol.toStringTag,{value:"Module"}));const Ht=["headings","default"];var wn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Ht},Symbol.toStringTag,{value:"Module"}));const Jt=["headings","default"];var En=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Jt},Symbol.toStringTag,{value:"Module"}));const Vt=["headings","default"];var Wn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Vt},Symbol.toStringTag,{value:"Module"}));const qt=["headings","default"];var Fn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:qt},Symbol.toStringTag,{value:"Module"}));const Yt=["headings","default"];var Rn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Yt},Symbol.toStringTag,{value:"Module"}));const Kt=["headings","default"];var In=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Kt},Symbol.toStringTag,{value:"Module"}));const Qt=["headings","default"];var Ln=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Qt},Symbol.toStringTag,{value:"Module"}));const Xt=["headings","default"];var kn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Xt},Symbol.toStringTag,{value:"Module"}));const Zt=["headings","default"];var An=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Zt},Symbol.toStringTag,{value:"Module"}));const er=["headings","default"];var Dn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:er},Symbol.toStringTag,{value:"Module"}));const tr=["headings","default"];var Cn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:tr},Symbol.toStringTag,{value:"Module"}));const rr=["headings","default"];var Un=Object.freeze(Object.defineProperty({__proto__:null,exportNames:rr},Symbol.toStringTag,{value:"Module"}));const or=["Page"];var Bn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:or},Symbol.toStringTag,{value:"Module"}));const nr=["headings","default"];var Gn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:nr},Symbol.toStringTag,{value:"Module"}));const ar=["headings","default"];var Hn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:ar},Symbol.toStringTag,{value:"Module"}));const sr=["headings","default"];var Jn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:sr},Symbol.toStringTag,{value:"Module"}));const lr=["headings","default"];var Vn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:lr},Symbol.toStringTag,{value:"Module"}));const _r=["headings","default"];var qn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:_r},Symbol.toStringTag,{value:"Module"}));const ir=["headings","default"];var Yn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:ir},Symbol.toStringTag,{value:"Module"}));const ur=["headings","default"];var Kn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:ur},Symbol.toStringTag,{value:"Module"}));const cr=["headings","default"];var Qn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:cr},Symbol.toStringTag,{value:"Module"}));const dr=["headings","default"];var Xn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:dr},Symbol.toStringTag,{value:"Module"}));const fr=["headings","default"];var Zn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:fr},Symbol.toStringTag,{value:"Module"}));const gr=["headings","default"];var ea=Object.freeze(Object.defineProperty({__proto__:null,exportNames:gr},Symbol.toStringTag,{value:"Module"}));const pr=["headings","default"];var ta=Object.freeze(Object.defineProperty({__proto__:null,exportNames:pr},Symbol.toStringTag,{value:"Module"}));const br=["headings","default"];var ra=Object.freeze(Object.defineProperty({__proto__:null,exportNames:br},Symbol.toStringTag,{value:"Module"}));const mr=["headings","default"];var oa=Object.freeze(Object.defineProperty({__proto__:null,exportNames:mr},Symbol.toStringTag,{value:"Module"}));const vr=["headings","default"];var na=Object.freeze(Object.defineProperty({__proto__:null,exportNames:vr},Symbol.toStringTag,{value:"Module"}));const xr=["headings","default"];var aa=Object.freeze(Object.defineProperty({__proto__:null,exportNames:xr},Symbol.toStringTag,{value:"Module"}));const yr=["headings","default"];var sa=Object.freeze(Object.defineProperty({__proto__:null,exportNames:yr},Symbol.toStringTag,{value:"Module"}));const Sr=["headings","default"];var la=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Sr},Symbol.toStringTag,{value:"Module"}));const hr=["headings","default"];var _a=Object.freeze(Object.defineProperty({__proto__:null,exportNames:hr},Symbol.toStringTag,{value:"Module"}));const jr=["headings","default"];var ia=Object.freeze(Object.defineProperty({__proto__:null,exportNames:jr},Symbol.toStringTag,{value:"Module"}));const Or=["headings","default"];var ua=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Or},Symbol.toStringTag,{value:"Module"}));const Nr=["headings","default"];var ca=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Nr},Symbol.toStringTag,{value:"Module"}));const $r=["headings","default"];var da=Object.freeze(Object.defineProperty({__proto__:null,exportNames:$r},Symbol.toStringTag,{value:"Module"}));const Pr=["headings","default"];var fa=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Pr},Symbol.toStringTag,{value:"Module"}));const Tr=["headings","default"];var ga=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Tr},Symbol.toStringTag,{value:"Module"}));const zr=["headings","default"];var pa=Object.freeze(Object.defineProperty({__proto__:null,exportNames:zr},Symbol.toStringTag,{value:"Module"}));const Mr=["headings","default"];var ba=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Mr},Symbol.toStringTag,{value:"Module"}));const wr=["headings","default"];var ma=Object.freeze(Object.defineProperty({__proto__:null,exportNames:wr},Symbol.toStringTag,{value:"Module"}));const Er=["headings","default"];var va=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Er},Symbol.toStringTag,{value:"Module"}));const Wr=["headings","default"];var xa=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Wr},Symbol.toStringTag,{value:"Module"}));const Fr=["headings","default"];var ya=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Fr},Symbol.toStringTag,{value:"Module"}));const Rr=["headings","default"];var Sa=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Rr},Symbol.toStringTag,{value:"Module"}));const Ir=["headings","default"];var ha=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Ir},Symbol.toStringTag,{value:"Module"}));const Lr=["headings","default"];var ja=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Lr},Symbol.toStringTag,{value:"Module"}));const kr=["headings","default"];var Oa=Object.freeze(Object.defineProperty({__proto__:null,exportNames:kr},Symbol.toStringTag,{value:"Module"}));const Ar=["headings","default"];var Na=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Ar},Symbol.toStringTag,{value:"Module"}));const Dr=["headings","default"];var $a=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Dr},Symbol.toStringTag,{value:"Module"}));const Cr=["headings","default"];var Pa=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Cr},Symbol.toStringTag,{value:"Module"}));const Ur=["headings","default"];var Ta=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Ur},Symbol.toStringTag,{value:"Module"}));const Br=["headings","default"];var za=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Br},Symbol.toStringTag,{value:"Module"}));const Gr=["headings","default"];var Ma=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Gr},Symbol.toStringTag,{value:"Module"}));const Hr=["headings","default"];var wa=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Hr},Symbol.toStringTag,{value:"Module"}));const Jr=["headings","default"];var Ea=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Jr},Symbol.toStringTag,{value:"Module"}));const Vr=["headings","default"];var Wa=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Vr},Symbol.toStringTag,{value:"Module"}));const qr=["headings","default"];var Fa=Object.freeze(Object.defineProperty({__proto__:null,exportNames:qr},Symbol.toStringTag,{value:"Module"}));const Yr=["headings","default"];var Ra=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Yr},Symbol.toStringTag,{value:"Module"}));const Kr=["headings","default"];var Ia=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Kr},Symbol.toStringTag,{value:"Module"}));const Qr=["headings","default"];var La=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Qr},Symbol.toStringTag,{value:"Module"}));const Xr=["headings","default"];var ka=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Xr},Symbol.toStringTag,{value:"Module"}));const Zr=["headings","default"];var Aa=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Zr},Symbol.toStringTag,{value:"Module"}));const eo=["headings","default"];var Da=Object.freeze(Object.defineProperty({__proto__:null,exportNames:eo},Symbol.toStringTag,{value:"Module"}));const to=["headings","default"];var Ca=Object.freeze(Object.defineProperty({__proto__:null,exportNames:to},Symbol.toStringTag,{value:"Module"}));const ro=["headings","default"];var Ua=Object.freeze(Object.defineProperty({__proto__:null,exportNames:ro},Symbol.toStringTag,{value:"Module"}));const oo=["headings","default"];var Ba=Object.freeze(Object.defineProperty({__proto__:null,exportNames:oo},Symbol.toStringTag,{value:"Module"}));const no=["headings","default"];var Ga=Object.freeze(Object.defineProperty({__proto__:null,exportNames:no},Symbol.toStringTag,{value:"Module"}));const ao=["headings","default"];var Ha=Object.freeze(Object.defineProperty({__proto__:null,exportNames:ao},Symbol.toStringTag,{value:"Module"}));const so=["headings","default"];var Ja=Object.freeze(Object.defineProperty({__proto__:null,exportNames:so},Symbol.toStringTag,{value:"Module"}));const lo=["headings","default"];var Va=Object.freeze(Object.defineProperty({__proto__:null,exportNames:lo},Symbol.toStringTag,{value:"Module"}));const _o=["headings","default"];var qa=Object.freeze(Object.defineProperty({__proto__:null,exportNames:_o},Symbol.toStringTag,{value:"Module"}));const io=["headings","default"];var Ya=Object.freeze(Object.defineProperty({__proto__:null,exportNames:io},Symbol.toStringTag,{value:"Module"}));const uo=["headings","default"];var Ka=Object.freeze(Object.defineProperty({__proto__:null,exportNames:uo},Symbol.toStringTag,{value:"Module"}));const co=["render"];var Qa=Object.freeze(Object.defineProperty({__proto__:null,exportNames:co},Symbol.toStringTag,{value:"Module"}));const{projectVersion:E}=b,B="__vite_plugin_ssr_version",G=globalThis[B]=globalThis[B]=E;v(G===E,`Multiple versions \`vite-pluging-ssr@${G}\` and \`vite-pluging-ssr@${E}\` loaded. Make sure to load the same version.`);function Xa(e){const t=window.location.href,{origin:r,searchOriginal:n,hashOriginal:o,pathnameOriginal:l}=fe(t,"/");let s;if(e!=null&&e.withoutHash){s=`${l}${n||""}`;const _=`${r||""}${s}${o||""}`;a(t===_,{url:t,urlRecreated:_})}else{s=`${l}${n||""}${o||""}`;const _=`${r||""}${s}`;a(t===_,{url:t,urlRecreated:_})}return s}const fo=[{is:e=>e===void 0,match:e=>e==="!undefined",serialize:()=>"!undefined",deserialize:()=>{}},{is:e=>e===1/0,match:e=>e==="!Infinity",serialize:()=>"!Infinity",deserialize:()=>1/0},{is:e=>e===-1/0,match:e=>e==="!-Infinity",serialize:()=>"!-Infinity",deserialize:()=>-1/0},{is:e=>typeof e=="number"&&isNaN(e),match:e=>e==="!NaN",serialize:()=>"!NaN",deserialize:()=>NaN},{is:e=>e instanceof Date,match:e=>e.startsWith("!Date:"),serialize:e=>"!Date:"+e.toISOString(),deserialize:e=>new Date(e.slice(6))},{is:e=>typeof e=="bigint",match:e=>e.startsWith("!BigInt:"),serialize:e=>"!BigInt:"+e.toString(),deserialize:e=>{if(typeof BigInt=="undefined")throw new Error("Your JavaScript environement does not support BigInt. Consider adding a polyfill.");return BigInt(e.slice(8))}},{is:e=>e instanceof RegExp,match:e=>e.startsWith("!RegExp:"),serialize:e=>"!RegExp:"+e.toString(),deserialize:e=>{e=e.slice(8);const t=e.match(/\/(.*)\/(.*)?/),r=t[1],n=t[2];return new RegExp(r,n)}},{is:e=>e instanceof Map,match:e=>e.startsWith("!Map:"),serialize:(e,t)=>"!Map:"+t(Array.from(e.entries())),deserialize:(e,t)=>new Map(t(e.slice(5)))},{is:e=>e instanceof Set,match:e=>e.startsWith("!Set:"),serialize:(e,t)=>"!Set:"+t(Array.from(e.values())),deserialize:(e,t)=>new Set(t(e.slice(5)))},{is:e=>typeof e=="string"&&e.startsWith("!"),match:e=>e.startsWith("!"),serialize:e=>"!"+e,deserialize:e=>e.slice(1)}];function K(e){const t=JSON.parse(e);return Q(t)}function Q(e){return typeof e=="string"?go(e):(typeof e=="object"&&e!==null&&Object.entries(e).forEach(([t,r])=>{e[t]=Q(r)}),e)}function go(e){for(const{match:t,deserialize:r}of fo)if(t(e))return r(e,K);return e}function Za(){var e;const t=(e=document.getElementById("vite-plugin-ssr_pageContext"))===null||e===void 0?void 0:e.textContent;a(t);const r=K(t);a(c(r,"pageContext","object"));const{pageContext:n}=r;if(a(c(n,"_pageId","string")),"_serverSideErrorWhileStreaming"in n)throw ue("An error occurred on the server while rendering/streaming to HTML. Check your server logs.");return H(n,{_pageContextRetrievedFromServer:k({},n),_comesDirectlyFromServer:!0}),n}function po(e,t){if(!(t in e.exports))return null;const r=e.exports[t],n=e.exportsAll[t][0];a(n.exportValue===r);const o=n._filePath;return a(o),a(!t.endsWith(")")),v(R(r),`\`export { ${t} }\` of ${o} should be a function`),{hook:r,filePath:o}}function bo(e,t){po(e,t)}function mo(e){const t=Object.entries(e);for(const r in e)delete e[r];t.sort(([r],[n])=>he(r,n)).forEach(([r,n])=>{e[r]=n})}function es(e){a("exports"in e),a("pageExports"in e),a(h(e.pageExports)),a([!0,!1].includes(e.isHydration));const t=e.exports.Page;return H(e,{Page:t}),ho(e),mo(e),a([!0,!1].includes(e._comesDirectlyFromServer)),e._comesDirectlyFromServer?yo(e):e}const vo=["then","toJSON"],xo=["_pageId","_serverSideErrorWhileStreaming"];let N=!1;function yo(e){return new Proxy(e,{get:r});function t(n){return!(n in e||vo.includes(n)||typeof n=="symbol"||typeof n!="string"||n.startsWith("__v_"))}function r(n,o){return N!==!1&&N!==o&&So(e._pageContextRetrievedFromServer,o,t(o)),N=o,window.setTimeout(()=>{N=!1},0),e[o]}}function So(e,t,r){if(!r||e===null)return;const n=Object.keys(e).filter(o=>!xo.includes(o));v(!1,[`\`pageContext.${t}\` is not available in the browser.`,`Make sure that \`passToClient.includes('${t}')\`.`,`(Currently \`passToClient\` is \`[${n.map(o=>`'${o}'`).join(", ")}]\`.)`,"More infos at https://vite-plugin-ssr.com/passToClient"].join(" "))}function ho(e){Object.entries(e).forEach(([t,r])=>{delete e[t],e[t]=r})}async function ts(e,t){const r=Ue(e,t);try{await Promise.all(r.map(s=>{var _;return(_=s.loadFile)===null||_===void 0?void 0:_.call(s)}))}catch(s){return{errorFetchingStaticAssets:!0,err:s}}const{exports:n,exportsAll:o,pageExports:l}=Ne(r);return{pageContextAddendum:{exports:n,exportsAll:o,pageExports:l,pageFilesLoaded:r}}}function rs(e){var t;if(c(e.exports,"render"))bo(e,"render");else{const r=e._pageFilesLoaded.filter(o=>o.fileType===".page.client");let n;if(r.length===0){const o=(t=e.url)!==null&&t!==void 0?t:window.location.href;n="No file `*.page.client.*` found for URL "+o}else n="One of the following files should export a `render()` hook: "+r.map(o=>o.filePath).join(" ");v(!1,n)}}export{mn as $,Go as A,Ho as B,Jo as C,Vo as D,qo as E,Yo as F,Ko as G,Qo as H,Xo as I,Zo as J,en as K,tn as L,rn as M,on as N,nn as O,an as P,sn as Q,ln as R,_n as S,un as T,cn as U,dn as V,fn as W,gn as X,pn as Y,bn as Z,zo as _,a,Pa as a$,vn as a0,xn as a1,yn as a2,Sn as a3,hn as a4,jn as a5,On as a6,Nn as a7,$n as a8,Pn as a9,ea as aA,ta as aB,ra as aC,oa as aD,na as aE,aa as aF,sa as aG,la as aH,_a as aI,ia as aJ,ua as aK,ca as aL,da as aM,fa as aN,ga as aO,pa as aP,ba as aQ,ma as aR,va as aS,xa as aT,ya as aU,Sa as aV,ha as aW,ja as aX,Oa as aY,Na as aZ,$a as a_,Tn as aa,zn as ab,Mn as ac,wn as ad,En as ae,Wn as af,Fn as ag,Rn as ah,In as ai,Ln as aj,kn as ak,An as al,Dn as am,Cn as an,Un as ao,Bn as ap,Gn as aq,Hn as ar,Jn as as,Vn as at,qn as au,Yn as av,Kn as aw,Qn as ax,Xn as ay,Zn as az,ce as b,Ta as b0,za as b1,Ma as b2,wa as b3,Ea as b4,Wa as b5,Fa as b6,Ra as b7,Ia as b8,La as b9,de as bA,Oo as bB,rs as bC,bo as bD,ka as ba,Aa as bb,Da as bc,Ca as bd,Ua as be,Ba as bf,Ga as bg,Ha as bh,Ja as bi,Va as bj,qa as bk,Ya as bl,Ka as bm,Qa as bn,$o as bo,Xa as bp,To as bq,Za as br,ts as bs,po as bt,es as bu,K as bv,ue as bw,be as bx,Po as by,Ue as bz,v as c,No as d,h as e,Me as f,Mo as g,c as h,R as i,wo as j,Eo as k,Wo as l,ye as m,Fo as n,H as o,fe as p,Ro as q,Io as r,P as s,Lo as t,ko as u,Ao as v,Do as w,Co as x,Uo as y,Bo as z};
