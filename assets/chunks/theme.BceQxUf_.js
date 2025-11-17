import{d as f,c,r as u,n as M,o as i,a as K,t as T,b,w as m,T as cn,e as g,_ as y,u as $n,i as Un,f as Jn,g as un,h as S,j as p,k as s,l as $,m as Mn,p as N,q as Wn,s as pn,v as Bn,x as w,y as Y,z as F,A as mn,B as gn,C as G,D as Z,E as Cn,F as Hn,G as R,H as D,I as U,J as h,K as V,L as Dn,M as j,N as nn,O as fn,P as Gn,Q as zn,R as hn,S as _n,U as Qn,V as En,W as Ln,X as Xn,Y as Yn,Z as Zn,$ as Vn,a0 as nt,a1 as tt,a2 as et,a3 as ot,a4 as Tn}from"./framework.L9hZw9cv.js";const rt=f({__name:"VPBadge",props:{text:{},type:{default:"tip"}},setup(n){return(t,e)=>(i(),c("span",{class:M(["VPBadge",n.type])},[u(t.$slots,"default",{},()=>[K(T(n.text),1)])],2))}}),it={key:0,class:"VPBackdrop"},lt=f({__name:"VPBackdrop",props:{show:{type:Boolean}},setup(n){return(t,e)=>(i(),b(cn,{name:"fade"},{default:m(()=>[n.show?(i(),c("div",it)):g("",!0)]),_:1}))}}),st=y(lt,[["__scopeId","data-v-54a304ca"]]),k=$n;function at(n,t){let e,o=!1;return()=>{e&&clearTimeout(e),o?e=setTimeout(n,t):(n(),(o=!0)&&setTimeout(()=>o=!1,t))}}function rn(n){return n.startsWith("/")?n:`/${n}`}function bn(n){const{pathname:t,search:e,hash:o,protocol:r}=new URL(n,"http://a.com");if(Un(n)||n.startsWith("#")||!r.startsWith("http")||!Jn(t))return n;const{site:l}=k(),d=t.endsWith("/")||t.endsWith(".html")?n:n.replace(/(?:(^\.+)\/)?.*$/,`$1${t.replace(/(\.md)?$/,l.value.cleanUrls?"":".html")}${e}${o}`);return un(d)}function z({correspondingLink:n=!1}={}){const{site:t,localeIndex:e,page:o,theme:r,hash:l}=k(),d=S(()=>({label:t.value.locales[e.value]?.label,link:t.value.locales[e.value]?.link||(e.value==="root"?"/":`/${e.value}/`)}));return{localeLinks:S(()=>Object.entries(t.value.locales).flatMap(([v,P])=>d.value.label===P.label?[]:{text:P.label,link:dt(P.link||(v==="root"?"/":`/${v}/`),r.value.i18nRouting!==!1&&n,o.value.relativePath.slice(d.value.link.length-1),!t.value.cleanUrls)+l.value})),currentLang:d}}function dt(n,t,e,o){return t?n.replace(/\/$/,"")+rn(e.replace(/(^|\/)index\.md$/,"$1").replace(/\.md$/,o?".html":"")):n}const ct={class:"NotFound"},ut={class:"code"},pt={class:"title"},mt={class:"quote"},gt={class:"action"},ft=["href","aria-label"],ht=f({__name:"NotFound",setup(n){const{theme:t}=k(),{currentLang:e}=z();return(o,r)=>(i(),c("div",ct,[p("p",ut,T(s(t).notFound?.code??"404"),1),p("h1",pt,T(s(t).notFound?.title??"PAGE NOT FOUND"),1),r[0]||(r[0]=p("div",{class:"divider"},null,-1)),p("blockquote",mt,T(s(t).notFound?.quote??"But if you don't change your direction, and if you keep looking, you may end up where you are heading."),1),p("div",gt,[p("a",{class:"link",href:s(un)(s(t).notFound?.link??s(e).link),"aria-label":s(t).notFound?.linkLabel??"go to home"},T(s(t).notFound?.linkText??"Take me home"),9,ft)])]))}}),bt=y(ht,[["__scopeId","data-v-b0126292"]]);function An(n,t){if(Array.isArray(n))return Q(n);if(n==null)return[];t=rn(t);const e=Object.keys(n).sort((r,l)=>l.split("/").length-r.split("/").length).find(r=>t.startsWith(rn(r))),o=e?n[e]:[];return Array.isArray(o)?Q(o):Q(o.items,o.base)}function vt(n){const t=[];let e=0;for(const o in n){const r=n[o];if(r.items){e=t.push(r);continue}t[e]||t.push({items:[]}),t[e].items.push(r)}return t}function yt(n){const t=[];function e(o){for(const r of o)r.text&&r.link&&t.push({text:r.text,link:r.link,docFooterText:r.docFooterText}),r.items&&e(r.items)}return e(n),t}function ln(n,t){return Array.isArray(t)?t.some(e=>ln(n,e)):$(n,t.link)?!0:t.items?ln(n,t.items):!1}function Q(n,t){return[...n].map(e=>{const o={...e},r=o.base||t;return r&&o.link&&(o.link=r+o.link.replace(/^\//,r.endsWith("/")?"":"/")),o.items&&(o.items=Q(o.items,r)),o})}function St(){const{hasSidebar:n}=q(),t=Mn("(min-width: 960px)"),e=Mn("(min-width: 1280px)");return{isAsideEnabled:S(()=>!e.value&&!t.value?!1:n.value?e.value:t.value)}}const kt=/\b(?:VPBadge|header-anchor|footnote-ref|ignore-header)\b/,sn=[];function Fn(n){return typeof n.outline=="object"&&!Array.isArray(n.outline)&&n.outline.label||n.outlineTitle||"On this page"}function wt(n){const t=[...document.querySelectorAll(".VPDoc :where(h1,h2,h3,h4,h5,h6)")].filter(e=>e.id&&e.hasChildNodes()).map(e=>{const o=Number(e.tagName[1]);return{element:e,title:Pt(e),link:"#"+e.id,level:o}});return Mt(t,n)}function Pt(n){let t="";for(const e of n.childNodes)if(e.nodeType===1){if(kt.test(e.className))continue;t+=e.textContent}else e.nodeType===3&&(t+=e.textContent);return t.trim()}function Mt(n,t){if(t===!1)return[];const e=(typeof t=="object"&&!Array.isArray(t)?t.level:t)||2,[o,r]=typeof e=="number"?[e,e]:e==="deep"?[2,6]:e;return xt(n,o,r)}function Ct(n,t){const{isAsideEnabled:e}=St(),o=at(l,100);let r=null;N(()=>{requestAnimationFrame(l),window.addEventListener("scroll",o)}),Wn(()=>{d(location.hash)}),pn(()=>{window.removeEventListener("scroll",o)});function l(){if(!e.value)return;const a=window.scrollY,v=window.innerHeight,P=document.body.offsetHeight,C=Math.abs(a+v-P)<1,x=sn.map(({element:_,link:I})=>({link:I,top:Tt(_)})).filter(({top:_})=>!Number.isNaN(_)).sort((_,I)=>_.top-I.top);if(!x.length){d(null);return}if(a<1){d(null);return}if(C){d(x[x.length-1].link);return}let H=null;for(const{link:_,top:I}of x){if(I>a+Bn()+4)break;H=_}d(H)}function d(a){r&&r.classList.remove("active"),a==null?r=null:r=n.value.querySelector(`a[href="${decodeURIComponent(a)}"]`);const v=r;v?(v.classList.add("active"),t.value.style.top=v.offsetTop+39+"px",t.value.style.opacity="1"):(t.value.style.top="33px",t.value.style.opacity="0")}}function Tt(n){let t=0;for(;n!==document.body;){if(n===null)return NaN;t+=n.offsetTop,n=n.offsetParent}return t}function xt(n,t,e){sn.length=0;const o=[],r=[];return n.forEach(l=>{const d={...l,children:[]};let a=r[r.length-1];for(;a&&a.level>=d.level;)r.pop(),a=r[r.length-1];if(d.element.classList.contains("ignore-header")||a&&"shouldIgnore"in a){r.push({level:d.level,shouldIgnore:!0});return}d.level>e||d.level<t||(sn.push({element:d.element,link:d.link}),a?a.children.push(d):o.push(d),r.push(d))}),o}const J=w(!1);function Rt(n){let t;Y(()=>{t=J.value?document.activeElement:void 0}),N(()=>{window.addEventListener("keyup",e)}),pn(()=>{window.removeEventListener("keyup",e)});function e(o){o.key==="Escape"&&J.value&&(n(),t?.focus())}}function It(){function n(){J.value=!0}function t(){J.value=!1}function e(){J.value?t():n()}return{isOpen:J,open:n,close:t,toggle:e}}function Ht(n){const{page:t,hash:e}=k(),o=w(!1),r=S(()=>n.value.collapsed!=null),l=S(()=>!!n.value.link),d=w(!1),a=()=>{d.value=$(t.value.relativePath,n.value.link)};F([t,n,e],a),N(a);const v=S(()=>d.value?!0:n.value.items?ln(t.value.relativePath,n.value.items):!1),P=S(()=>!!(n.value.items&&n.value.items.length));Y(()=>{o.value=!!(r.value&&n.value.collapsed)}),mn(()=>{(d.value||v.value)&&(o.value=!1)});function C(){r.value&&(o.value=!o.value)}return{collapsed:o,collapsible:r,isLink:l,isActiveLink:d,hasActiveLink:v,hasChildren:P,toggle:C}}const an=gn([]),B=gn([]),dn=gn(!1);function q(){const{frontmatter:n,theme:t}=k(),e=S(()=>!!(n.value.isHome??n.value.layout==="home")),o=S(()=>n.value.sidebar!==!1&&B.value.length>0&&!e.value),r=S(()=>o.value&&dn.value),l=S(()=>o.value?vt(B.value):[]),d=S(()=>e.value?!1:n.value.aside!=null?!!n.value.aside:t.value.aside!==!1),a=S(()=>d.value?n.value.aside==null?t.value.aside==="left":n.value.aside==="left":!1),v=S(()=>an.value.length>0);return{isHome:e,sidebar:Cn(B),sidebarGroups:l,hasSidebar:o,isSidebarEnabled:r,hasAside:d,leftAside:a,headers:Cn(an),hasLocalNav:v}}function Dt({closeSidebar:n}){const{frontmatter:t,page:e,theme:o}=k();F(()=>[e.value.relativePath,o.value.sidebar],([l,d])=>{const a=d?An(d,l):[];JSON.stringify(a)!==JSON.stringify(B.value)&&(B.value=a)},{immediate:!0,deep:!0,flush:"sync"}),Hn(()=>{an.value=wt(t.value.outline??o.value.outline)}),G&&(dn.value=window.innerWidth>=960,window.addEventListener("resize",()=>{dn.value=window.innerWidth>=960},{passive:!0}));const r=Z();F(()=>r.path,n),Rt(n)}const On=Symbol("layout-info"),_t=["href","title"],Et=f({__name:"VPDocOutlineItem",props:{headers:{},root:{type:Boolean}},setup(n){function t({target:e}){const o=e.href.split("#")[1];document.getElementById(decodeURIComponent(o))?.focus({preventScroll:!0})}return(e,o)=>{const r=U("VPDocOutlineItem",!0);return i(),c("ul",{class:M(["VPDocOutlineItem",n.root?"root":"nested"])},[(i(!0),c(R,null,D(n.headers,({children:l,link:d,title:a})=>(i(),c("li",null,[p("a",{class:"outline-link",href:d,onClick:t,title:a},T(a),9,_t),l?.length?(i(),b(r,{key:0,headers:l},null,8,["headers"])):g("",!0)]))),256))],2)}}}),qn=y(Et,[["__scopeId","data-v-b7d7ef80"]]),Lt={class:"content"},Vt={"aria-level":"2",class:"outline-title",id:"doc-outline-aria-label",role:"heading"},At=f({__name:"VPDocAsideOutline",setup(n){const{theme:t}=k(),e=w(),o=w(),{headers:r,hasLocalNav:l}=q();return Ct(e,o),(d,a)=>(i(),c("nav",{"aria-labelledby":"doc-outline-aria-label",class:M(["VPDocAsideOutline",{"has-outline":s(l)}]),ref_key:"container",ref:e},[p("div",Lt,[p("div",{class:"outline-marker",ref_key:"marker",ref:o},null,512),p("div",Vt,T(s(Fn)(s(t))),1),h(qn,{headers:s(r),root:!0},null,8,["headers"])])],2))}}),Ft=y(At,[["__scopeId","data-v-c8b19031"]]),Ot={class:"VPDocAsideCarbonAds"},qt=f({__name:"VPDocAsideCarbonAds",props:{carbonAds:{}},setup(n){const t=()=>null;return(e,o)=>(i(),c("div",Ot,[h(s(t),{"carbon-ads":n.carbonAds},null,8,["carbon-ads"])]))}}),jt={class:"VPDocAside"},Kt=f({__name:"VPDocAside",setup(n){const{theme:t}=k();return(e,o)=>(i(),c("div",jt,[u(e.$slots,"aside-top",{},void 0,!0),u(e.$slots,"aside-outline-before",{},void 0,!0),h(Ft),u(e.$slots,"aside-outline-after",{},void 0,!0),o[0]||(o[0]=p("div",{class:"spacer"},null,-1)),u(e.$slots,"aside-ads-before",{},void 0,!0),s(t).carbonAds?(i(),b(qt,{key:0,"carbon-ads":s(t).carbonAds},null,8,["carbon-ads"])):g("",!0),u(e.$slots,"aside-ads-after",{},void 0,!0),u(e.$slots,"aside-bottom",{},void 0,!0)]))}}),Nt=y(Kt,[["__scopeId","data-v-cb998dce"]]);function $t(){const{theme:n,page:t}=k();return S(()=>{const{text:e="Edit this page",pattern:o=""}=n.value.editLink||{};let r;return typeof o=="function"?r=o(t.value):r=o.replace(/:path/g,t.value.filePath),{url:r,text:e}})}function Ut(){const{page:n,theme:t,frontmatter:e}=k();return S(()=>{const o=An(t.value.sidebar,n.value.relativePath),r=yt(o),l=Jt(r,P=>P.link.replace(/[?#].*$/,"")),d=l.findIndex(P=>$(n.value.relativePath,P.link)),a=t.value.docFooter?.prev===!1&&!e.value.prev||e.value.prev===!1,v=t.value.docFooter?.next===!1&&!e.value.next||e.value.next===!1;return{prev:a?void 0:{text:(typeof e.value.prev=="string"?e.value.prev:typeof e.value.prev=="object"?e.value.prev.text:void 0)??l[d-1]?.docFooterText??l[d-1]?.text,link:(typeof e.value.prev=="object"?e.value.prev.link:void 0)??l[d-1]?.link},next:v?void 0:{text:(typeof e.value.next=="string"?e.value.next:typeof e.value.next=="object"?e.value.next.text:void 0)??l[d+1]?.docFooterText??l[d+1]?.text,link:(typeof e.value.next=="object"?e.value.next.link:void 0)??l[d+1]?.link}}})}function Jt(n,t){const e=new Set;return n.filter(o=>{const r=t(o);return e.has(r)?!1:e.add(r)})}const A=f({__name:"VPLink",props:{tag:{},href:{},noIcon:{type:Boolean},target:{},rel:{}},setup(n){const t=n,e=S(()=>t.tag??(t.href?"a":"span")),o=S(()=>t.href&&Dn.test(t.href)||t.target==="_blank");return(r,l)=>(i(),b(V(e.value),{class:M(["VPLink",{link:n.href,"vp-external-link-icon":o.value,"no-icon":n.noIcon}]),href:n.href?s(bn)(n.href):void 0,target:n.target??(o.value?"_blank":void 0),rel:n.rel??(o.value?"noreferrer":void 0)},{default:m(()=>[u(r.$slots,"default")]),_:3},8,["class","href","target","rel"]))}}),Wt={class:"VPLastUpdated"},Bt=["datetime"],Gt=f({__name:"VPDocFooterLastUpdated",setup(n){const{theme:t,page:e,lang:o}=k(),r=S(()=>new Date(e.value.lastUpdated)),l=S(()=>r.value.toISOString()),d=w("");return N(()=>{Y(()=>{d.value=new Intl.DateTimeFormat(t.value.lastUpdated?.formatOptions?.forceLocale?o.value:void 0,t.value.lastUpdated?.formatOptions??{dateStyle:"short",timeStyle:"short"}).format(r.value)})}),(a,v)=>(i(),c("p",Wt,[K(T(s(t).lastUpdated?.text||s(t).lastUpdatedText||"Last updated")+": ",1),p("time",{datetime:l.value},T(d.value),9,Bt)]))}}),zt=y(Gt,[["__scopeId","data-v-1bb0c8a8"]]),Qt={key:0,class:"VPDocFooter"},Xt={key:0,class:"edit-info"},Yt={key:0,class:"edit-link"},Zt={key:1,class:"last-updated"},ne={key:1,class:"prev-next","aria-labelledby":"doc-footer-aria-label"},te={class:"pager"},ee=["innerHTML"],oe=["innerHTML"],re={class:"pager"},ie=["innerHTML"],le=["innerHTML"],se=f({__name:"VPDocFooter",setup(n){const{theme:t,page:e,frontmatter:o}=k(),r=$t(),l=Ut(),d=S(()=>t.value.editLink&&o.value.editLink!==!1),a=S(()=>e.value.lastUpdated),v=S(()=>d.value||a.value||l.value.prev||l.value.next);return(P,C)=>v.value?(i(),c("footer",Qt,[u(P.$slots,"doc-footer-before",{},void 0,!0),d.value||a.value?(i(),c("div",Xt,[d.value?(i(),c("div",Yt,[h(A,{class:"edit-link-button",href:s(r).url,"no-icon":!0},{default:m(()=>[C[0]||(C[0]=p("span",{class:"vpi-square-pen edit-link-icon"},null,-1)),K(" "+T(s(r).text),1)]),_:1},8,["href"])])):g("",!0),a.value?(i(),c("div",Zt,[h(zt)])):g("",!0)])):g("",!0),s(l).prev?.link||s(l).next?.link?(i(),c("nav",ne,[C[1]||(C[1]=p("span",{class:"visually-hidden",id:"doc-footer-aria-label"},"Pager",-1)),p("div",te,[s(l).prev?.link?(i(),b(A,{key:0,class:"pager-link prev",href:s(l).prev.link},{default:m(()=>[p("span",{class:"desc",innerHTML:s(t).docFooter?.prev||"Previous page"},null,8,ee),p("span",{class:"title",innerHTML:s(l).prev.text},null,8,oe)]),_:1},8,["href"])):g("",!0)]),p("div",re,[s(l).next?.link?(i(),b(A,{key:0,class:"pager-link next",href:s(l).next.link},{default:m(()=>[p("span",{class:"desc",innerHTML:s(t).docFooter?.next||"Next page"},null,8,ie),p("span",{class:"title",innerHTML:s(l).next.text},null,8,le)]),_:1},8,["href"])):g("",!0)])])):g("",!0)])):g("",!0)}}),ae=y(se,[["__scopeId","data-v-1bcd8184"]]),de={class:"container"},ce={class:"aside-container"},ue={class:"aside-content"},pe={class:"content"},me={class:"content-container"},ge={class:"main"},fe=f({__name:"VPDoc",setup(n){const{theme:t}=k(),e=Z(),{hasSidebar:o,hasAside:r,leftAside:l}=q(),d=S(()=>e.path.replace(/[./]+/g,"_").replace(/_html$/,""));return(a,v)=>{const P=U("Content");return i(),c("div",{class:M(["VPDoc",{"has-sidebar":s(o),"has-aside":s(r)}])},[u(a.$slots,"doc-top",{},void 0,!0),p("div",de,[s(r)?(i(),c("div",{key:0,class:M(["aside",{"left-aside":s(l)}])},[v[0]||(v[0]=p("div",{class:"aside-curtain"},null,-1)),p("div",ce,[p("div",ue,[h(Nt,null,{"aside-top":m(()=>[u(a.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":m(()=>[u(a.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":m(()=>[u(a.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":m(()=>[u(a.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":m(()=>[u(a.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":m(()=>[u(a.$slots,"aside-ads-after",{},void 0,!0)]),_:3})])])],2)):g("",!0),p("div",pe,[p("div",me,[u(a.$slots,"doc-before",{},void 0,!0),p("main",ge,[h(P,{class:M(["vp-doc",[d.value,s(t).externalLinkIcon&&"external-link-icon-enabled"]])},null,8,["class"])]),h(ae,null,{"doc-footer-before":m(()=>[u(a.$slots,"doc-footer-before",{},void 0,!0)]),_:3}),u(a.$slots,"doc-after",{},void 0,!0)])])]),u(a.$slots,"doc-bottom",{},void 0,!0)],2)}}}),he=y(fe,[["__scopeId","data-v-d668f7cc"]]),be=f({__name:"VPButton",props:{tag:{},size:{default:"medium"},theme:{default:"brand"},text:{},href:{},target:{},rel:{}},setup(n){const t=n,e=S(()=>t.href&&Dn.test(t.href)),o=S(()=>t.tag||(t.href?"a":"button"));return(r,l)=>(i(),b(V(o.value),{class:M(["VPButton",[n.size,n.theme]]),href:n.href?s(bn)(n.href):void 0,target:t.target??(e.value?"_blank":void 0),rel:t.rel??(e.value?"noreferrer":void 0)},{default:m(()=>[u(r.$slots,"default",{},()=>[K(T(n.text),1)],!0)]),_:3},8,["class","href","target","rel"]))}}),ve=y(be,[["__scopeId","data-v-58d3b43b"]]),ye=["src","alt"],Se=f({inheritAttrs:!1,__name:"VPImage",props:{image:{},alt:{}},setup(n){return(t,e)=>{const o=U("VPImage",!0);return n.image?(i(),c(R,{key:0},[typeof n.image=="string"||"src"in n.image?(i(),c("img",j({key:0,class:"VPImage"},typeof n.image=="string"?t.$attrs:{...n.image,...t.$attrs},{src:s(un)(typeof n.image=="string"?n.image:n.image.src),alt:n.alt??(typeof n.image=="string"?"":n.image.alt||"")}),null,16,ye)):(i(),c(R,{key:1},[h(o,j({class:"dark",image:n.image.dark,alt:n.image.alt},t.$attrs),null,16,["image","alt"]),h(o,j({class:"light",image:n.image.light,alt:n.image.alt},t.$attrs),null,16,["image","alt"])],64))],64)):g("",!0)}}}),X=y(Se,[["__scopeId","data-v-ab19afbb"]]),ke={class:"container"},we={class:"main"},Pe={class:"heading"},Me=["innerHTML"],Ce=["innerHTML"],Te=["innerHTML"],xe={key:0,class:"actions"},Re={key:0,class:"image"},Ie={class:"image-container"},He=f({__name:"VPHero",props:{name:{},text:{},tagline:{},image:{},actions:{}},setup(n){const{heroImageSlotExists:t}=nn(On);return(e,o)=>(i(),c("div",{class:M(["VPHero",{"has-image":n.image||s(t)}])},[p("div",ke,[p("div",we,[u(e.$slots,"home-hero-info-before",{},void 0,!0),u(e.$slots,"home-hero-info",{},()=>[p("h1",Pe,[n.name?(i(),c("span",{key:0,innerHTML:n.name,class:"name clip"},null,8,Me)):g("",!0),n.text?(i(),c("span",{key:1,innerHTML:n.text,class:"text"},null,8,Ce)):g("",!0)]),n.tagline?(i(),c("p",{key:0,innerHTML:n.tagline,class:"tagline"},null,8,Te)):g("",!0)],!0),u(e.$slots,"home-hero-info-after",{},void 0,!0),n.actions?(i(),c("div",xe,[(i(!0),c(R,null,D(n.actions,r=>(i(),c("div",{key:r.link,class:"action"},[h(ve,{tag:"a",size:"medium",theme:r.theme,text:r.text,href:r.link,target:r.target,rel:r.rel},null,8,["theme","text","href","target","rel"])]))),128))])):g("",!0),u(e.$slots,"home-hero-actions-after",{},void 0,!0)]),n.image||s(t)?(i(),c("div",Re,[p("div",Ie,[o[0]||(o[0]=p("div",{class:"image-bg"},null,-1)),u(e.$slots,"home-hero-image",{},()=>[n.image?(i(),b(X,{key:0,class:"image-src",image:n.image},null,8,["image"])):g("",!0)],!0)])])):g("",!0)])],2))}}),De=y(He,[["__scopeId","data-v-a4190d00"]]),_e=f({__name:"VPHomeHero",setup(n){const{frontmatter:t}=k();return(e,o)=>s(t).hero?(i(),b(De,{key:0,class:"VPHomeHero",name:s(t).hero.name,text:s(t).hero.text,tagline:s(t).hero.tagline,image:s(t).hero.image,actions:s(t).hero.actions},{"home-hero-info-before":m(()=>[u(e.$slots,"home-hero-info-before")]),"home-hero-info":m(()=>[u(e.$slots,"home-hero-info")]),"home-hero-info-after":m(()=>[u(e.$slots,"home-hero-info-after")]),"home-hero-actions-after":m(()=>[u(e.$slots,"home-hero-actions-after")]),"home-hero-image":m(()=>[u(e.$slots,"home-hero-image")]),_:3},8,["name","text","tagline","image","actions"])):g("",!0)}}),Ee={class:"box"},Le={key:0,class:"icon"},Ve=["innerHTML"],Ae=["innerHTML"],Fe=["innerHTML"],Oe={key:4,class:"link-text"},qe={class:"link-text-value"},je=f({__name:"VPFeature",props:{icon:{},title:{},details:{},link:{},linkText:{},rel:{},target:{}},setup(n){return(t,e)=>(i(),b(A,{class:"VPFeature",href:n.link,rel:n.rel,target:n.target,"no-icon":!0,tag:n.link?"a":"div"},{default:m(()=>[p("article",Ee,[typeof n.icon=="object"&&n.icon.wrap?(i(),c("div",Le,[h(X,{image:n.icon,alt:n.icon.alt,height:n.icon.height||48,width:n.icon.width||48},null,8,["image","alt","height","width"])])):typeof n.icon=="object"?(i(),b(X,{key:1,image:n.icon,alt:n.icon.alt,height:n.icon.height||48,width:n.icon.width||48},null,8,["image","alt","height","width"])):n.icon?(i(),c("div",{key:2,class:"icon",innerHTML:n.icon},null,8,Ve)):g("",!0),p("h2",{class:"title",innerHTML:n.title},null,8,Ae),n.details?(i(),c("p",{key:3,class:"details",innerHTML:n.details},null,8,Fe)):g("",!0),n.linkText?(i(),c("div",Oe,[p("p",qe,[K(T(n.linkText)+" ",1),e[0]||(e[0]=p("span",{class:"vpi-arrow-right link-text-icon"},null,-1))])])):g("",!0)])]),_:1},8,["href","rel","target","tag"]))}}),Ke=y(je,[["__scopeId","data-v-02d1074d"]]),Ne={key:0,class:"VPFeatures"},$e={class:"container"},Ue={class:"items"},Je=f({__name:"VPFeatures",props:{features:{}},setup(n){const t=n,e=S(()=>{const o=t.features.length;if(o){if(o===2)return"grid-2";if(o===3)return"grid-3";if(o%3===0)return"grid-6";if(o>3)return"grid-4"}else return});return(o,r)=>n.features?(i(),c("div",Ne,[p("div",$e,[p("div",Ue,[(i(!0),c(R,null,D(n.features,l=>(i(),c("div",{key:l.title,class:M(["item",[e.value]])},[h(Ke,{icon:l.icon,title:l.title,details:l.details,link:l.link,"link-text":l.linkText,rel:l.rel,target:l.target},null,8,["icon","title","details","link","link-text","rel","target"])],2))),128))])])])):g("",!0)}}),We=y(Je,[["__scopeId","data-v-b1eea84a"]]),Be=f({__name:"VPHomeFeatures",setup(n){const{frontmatter:t}=k();return(e,o)=>s(t).features?(i(),b(We,{key:0,class:"VPHomeFeatures",features:s(t).features},null,8,["features"])):g("",!0)}}),Ge=f({__name:"VPHomeContent",setup(n){const{width:t}=Gn({initialWidth:0,includeScrollbar:!1});return(e,o)=>(i(),c("div",{class:"vp-doc container",style:fn(s(t)?{"--vp-offset":`calc(50% - ${s(t)/2}px)`}:{})},[u(e.$slots,"default",{},void 0,!0)],4))}}),ze=y(Ge,[["__scopeId","data-v-c141a4bd"]]),Qe=f({__name:"VPHome",setup(n){const{frontmatter:t,theme:e}=k();return(o,r)=>{const l=U("Content");return i(),c("div",{class:M(["VPHome",{"external-link-icon-enabled":s(e).externalLinkIcon}])},[u(o.$slots,"home-hero-before",{},void 0,!0),h(_e,null,{"home-hero-info-before":m(()=>[u(o.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":m(()=>[u(o.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":m(()=>[u(o.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":m(()=>[u(o.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":m(()=>[u(o.$slots,"home-hero-image",{},void 0,!0)]),_:3}),u(o.$slots,"home-hero-after",{},void 0,!0),u(o.$slots,"home-features-before",{},void 0,!0),h(Be),u(o.$slots,"home-features-after",{},void 0,!0),s(t).markdownStyles!==!1?(i(),b(ze,{key:0},{default:m(()=>[h(l)]),_:1})):(i(),b(l,{key:1}))],2)}}}),Xe=y(Qe,[["__scopeId","data-v-e07eaea7"]]),Ye={},Ze={class:"VPPage"};function no(n,t){const e=U("Content");return i(),c("div",Ze,[u(n.$slots,"page-top"),h(e),u(n.$slots,"page-bottom")])}const to=y(Ye,[["render",no]]),eo=f({__name:"VPContent",setup(n){const{page:t,frontmatter:e}=k(),{isHome:o,hasSidebar:r}=q();return(l,d)=>(i(),c("div",{class:M(["VPContent",{"has-sidebar":s(r),"is-home":s(o)}]),id:"VPContent"},[s(t).isNotFound?u(l.$slots,"not-found",{key:0},()=>[h(bt)],!0):s(e).layout==="page"?(i(),b(to,{key:1},{"page-top":m(()=>[u(l.$slots,"page-top",{},void 0,!0)]),"page-bottom":m(()=>[u(l.$slots,"page-bottom",{},void 0,!0)]),_:3})):s(e).layout==="home"?(i(),b(Xe,{key:2},{"home-hero-before":m(()=>[u(l.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":m(()=>[u(l.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":m(()=>[u(l.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":m(()=>[u(l.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":m(()=>[u(l.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":m(()=>[u(l.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":m(()=>[u(l.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":m(()=>[u(l.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":m(()=>[u(l.$slots,"home-features-after",{},void 0,!0)]),_:3})):s(e).layout&&s(e).layout!=="doc"?(i(),b(V(s(e).layout),{key:3})):(i(),b(he,{key:4},{"doc-top":m(()=>[u(l.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":m(()=>[u(l.$slots,"doc-bottom",{},void 0,!0)]),"doc-footer-before":m(()=>[u(l.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":m(()=>[u(l.$slots,"doc-before",{},void 0,!0)]),"doc-after":m(()=>[u(l.$slots,"doc-after",{},void 0,!0)]),"aside-top":m(()=>[u(l.$slots,"aside-top",{},void 0,!0)]),"aside-outline-before":m(()=>[u(l.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":m(()=>[u(l.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":m(()=>[u(l.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":m(()=>[u(l.$slots,"aside-ads-after",{},void 0,!0)]),"aside-bottom":m(()=>[u(l.$slots,"aside-bottom",{},void 0,!0)]),_:3}))],2))}}),oo=y(eo,[["__scopeId","data-v-2652e39a"]]),ro={class:"container"},io=["innerHTML"],lo=["innerHTML"],so=f({__name:"VPFooter",setup(n){const{theme:t,frontmatter:e}=k(),{hasSidebar:o}=q();return(r,l)=>s(t).footer&&s(e).footer!==!1?(i(),c("footer",{key:0,class:M(["VPFooter",{"has-sidebar":s(o)}])},[p("div",ro,[s(t).footer.message?(i(),c("p",{key:0,class:"message",innerHTML:s(t).footer.message},null,8,io)):g("",!0),s(t).footer.copyright?(i(),c("p",{key:1,class:"copyright",innerHTML:s(t).footer.copyright},null,8,lo)):g("",!0)])],2)):g("",!0)}}),ao=y(so,[["__scopeId","data-v-5b9946f5"]]),co={class:"menu-text"},uo={class:"header"},po={class:"outline"},mo=f({__name:"VPLocalNavOutlineDropdown",props:{headers:{},navHeight:{}},setup(n){const t=n,{theme:e}=k(),o=w(!1),r=w(0),l=w(),d=w();function a(x){l.value?.contains(x.target)||(o.value=!1)}F(o,x=>{if(x){document.addEventListener("click",a);return}document.removeEventListener("click",a)}),zn("Escape",()=>{o.value=!1}),Hn(()=>{o.value=!1});function v(){o.value=!o.value,r.value=window.innerHeight+Math.min(window.scrollY-t.navHeight,0)}function P(x){x.target.classList.contains("outline-link")&&(d.value&&(d.value.style.transition="none"),hn(()=>{o.value=!1}))}function C(){o.value=!1,window.scrollTo({top:0,left:0,behavior:"smooth"})}return(x,H)=>(i(),c("div",{class:"VPLocalNavOutlineDropdown",style:fn({"--vp-vh":r.value+"px"}),ref_key:"main",ref:l},[n.headers.length>0?(i(),c("button",{key:0,onClick:v,class:M({open:o.value})},[p("span",co,T(s(Fn)(s(e))),1),H[0]||(H[0]=p("span",{class:"vpi-chevron-right icon"},null,-1))],2)):(i(),c("button",{key:1,onClick:C},T(s(e).returnToTopLabel||"Return to top"),1)),h(cn,{name:"flyout"},{default:m(()=>[o.value?(i(),c("div",{key:0,ref_key:"items",ref:d,class:"items",onClick:P},[p("div",uo,[p("a",{class:"top-link",href:"#",onClick:C},T(s(e).returnToTopLabel||"Return to top"),1)]),p("div",po,[h(qn,{headers:n.headers},null,8,["headers"])])],512)):g("",!0)]),_:1})],4))}}),go=y(mo,[["__scopeId","data-v-e28a51a6"]]),fo={class:"container"},ho=["aria-expanded"],bo={class:"menu-text"},vo=f({__name:"VPLocalNav",props:{open:{type:Boolean}},emits:["open-menu"],setup(n){const{theme:t}=k(),{isHome:e,hasSidebar:o,headers:r,hasLocalNav:l}=q(),{y:d}=_n(),a=w(0);N(()=>{a.value=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--vp-nav-height"))});const v=S(()=>({VPLocalNav:!0,"has-sidebar":o.value,empty:!l.value,fixed:!l.value&&!o.value}));return(P,C)=>!s(e)&&(s(l)||s(o)||s(d)>=a.value)?(i(),c("div",{key:0,class:M(v.value)},[p("div",fo,[s(o)?(i(),c("button",{key:0,class:"menu","aria-expanded":n.open,"aria-controls":"VPSidebarNav",onClick:C[0]||(C[0]=x=>P.$emit("open-menu"))},[C[1]||(C[1]=p("span",{class:"vpi-align-left menu-icon"},null,-1)),p("span",bo,T(s(t).sidebarMenuLabel||"Menu"),1)],8,ho)):g("",!0),h(go,{headers:s(r),navHeight:a.value},null,8,["headers","navHeight"])])],2)):g("",!0)}}),yo=y(vo,[["__scopeId","data-v-5ae341c6"]]);function So(){const n=w(!1);function t(){n.value=!0,window.addEventListener("resize",r)}function e(){n.value=!1,window.removeEventListener("resize",r)}function o(){n.value?e():t()}function r(){window.outerWidth>=768&&e()}const l=Z();return F(()=>l.path,e),{isScreenOpen:n,openScreen:t,closeScreen:e,toggleScreen:o}}const vn=Symbol("nav"),ko={},wo={class:"VPSwitch",type:"button",role:"switch"},Po={class:"check"},Mo={key:0,class:"icon"};function Co(n,t){return i(),c("button",wo,[p("span",Po,[n.$slots.default?(i(),c("span",Mo,[u(n.$slots,"default",{},void 0,!0)])):g("",!0)])])}const To=y(ko,[["render",Co],["__scopeId","data-v-b4ccac88"]]),xo=f({__name:"VPSwitchAppearance",setup(n){const{isDark:t,theme:e}=k(),o=nn("toggle-appearance",()=>{t.value=!t.value}),r=w("");return mn(()=>{r.value=t.value?e.value.lightModeSwitchTitle||"Switch to light theme":e.value.darkModeSwitchTitle||"Switch to dark theme"}),(l,d)=>(i(),b(To,{title:r.value,class:"VPSwitchAppearance","aria-checked":s(t),onClick:s(o)},{default:m(()=>[...d[0]||(d[0]=[p("span",{class:"vpi-sun sun"},null,-1),p("span",{class:"vpi-moon moon"},null,-1)])]),_:1},8,["title","aria-checked","onClick"]))}}),yn=y(xo,[["__scopeId","data-v-be9742d9"]]),Ro={key:0,class:"VPNavBarAppearance"},Io=f({__name:"VPNavBarAppearance",setup(n){const{site:t}=k();return(e,o)=>s(t).appearance&&s(t).appearance!=="force-dark"&&s(t).appearance!=="force-auto"?(i(),c("div",Ro,[h(yn)])):g("",!0)}}),Ho=y(Io,[["__scopeId","data-v-3f90c1a5"]]),Sn=w();let jn=!1,en=0;function Do(n){const t=w(!1);if(G){!jn&&_o(),en++;const e=F(Sn,o=>{o===n.el.value||n.el.value?.contains(o)?(t.value=!0,n.onFocus?.()):(t.value=!1,n.onBlur?.())});pn(()=>{e(),en--,en||Eo()})}return Qn(t)}function _o(){document.addEventListener("focusin",Kn),jn=!0,Sn.value=document.activeElement}function Eo(){document.removeEventListener("focusin",Kn)}function Kn(){Sn.value=document.activeElement}const Lo={class:"VPMenuLink"},Vo=["innerHTML"],Ao=f({__name:"VPMenuLink",props:{item:{}},setup(n){const{page:t}=k();return(e,o)=>(i(),c("div",Lo,[h(A,{class:M({active:s($)(s(t).relativePath,n.item.activeMatch||n.item.link,!!n.item.activeMatch)}),href:n.item.link,target:n.item.target,rel:n.item.rel,"no-icon":n.item.noIcon},{default:m(()=>[p("span",{innerHTML:n.item.text},null,8,Vo)]),_:1},8,["class","href","target","rel","no-icon"])]))}}),tn=y(Ao,[["__scopeId","data-v-f2aefde6"]]),Fo={class:"VPMenuGroup"},Oo={key:0,class:"title"},qo=f({__name:"VPMenuGroup",props:{text:{},items:{}},setup(n){return(t,e)=>(i(),c("div",Fo,[n.text?(i(),c("p",Oo,T(n.text),1)):g("",!0),(i(!0),c(R,null,D(n.items,o=>(i(),c(R,{key:JSON.stringify(o)},["link"in o?(i(),b(tn,{key:0,item:o},null,8,["item"])):g("",!0)],64))),128))]))}}),jo=y(qo,[["__scopeId","data-v-5474bd6a"]]),Ko={class:"VPMenu"},No={key:0,class:"items"},$o=f({__name:"VPMenu",props:{items:{}},setup(n){return(t,e)=>(i(),c("div",Ko,[n.items?(i(),c("div",No,[(i(!0),c(R,null,D(n.items,o=>(i(),c(R,{key:JSON.stringify(o)},["link"in o?(i(),b(tn,{key:0,item:o},null,8,["item"])):"component"in o?(i(),b(V(o.component),j({key:1,ref_for:!0},o.props),null,16)):(i(),b(jo,{key:2,text:o.text,items:o.items},null,8,["text","items"]))],64))),128))])):g("",!0),u(t.$slots,"default",{},void 0,!0)]))}}),Uo=y($o,[["__scopeId","data-v-fcd1d7a8"]]),Jo=["aria-expanded","aria-label"],Wo={key:0,class:"text"},Bo=["innerHTML"],Go={key:1,class:"vpi-more-horizontal icon"},zo={class:"menu"},Qo=f({__name:"VPFlyout",props:{icon:{},button:{},label:{},items:{}},setup(n){const t=w(!1),e=w();Do({el:e,onBlur:o});function o(){t.value=!1}return(r,l)=>(i(),c("div",{class:"VPFlyout",ref_key:"el",ref:e,onMouseenter:l[1]||(l[1]=d=>t.value=!0),onMouseleave:l[2]||(l[2]=d=>t.value=!1)},[p("button",{type:"button",class:"button","aria-haspopup":"true","aria-expanded":t.value,"aria-label":n.label,onClick:l[0]||(l[0]=d=>t.value=!t.value)},[n.button||n.icon?(i(),c("span",Wo,[n.icon?(i(),c("span",{key:0,class:M([n.icon,"option-icon"])},null,2)):g("",!0),n.button?(i(),c("span",{key:1,innerHTML:n.button},null,8,Bo)):g("",!0),l[3]||(l[3]=p("span",{class:"vpi-chevron-down text-icon"},null,-1))])):(i(),c("span",Go))],8,Jo),p("div",zo,[h(Uo,{items:n.items},{default:m(()=>[u(r.$slots,"default",{},void 0,!0)]),_:3},8,["items"])])],544))}}),kn=y(Qo,[["__scopeId","data-v-d8fae6e2"]]),Xo=["href","aria-label","rel","innerHTML"],Yo=f({__name:"VPSocialLink",props:{icon:{},link:{},ariaLabel:{},me:{type:Boolean}},setup(n){const t=n,e=w();N(async()=>{await hn();const r=e.value?.children[0];r instanceof HTMLElement&&r.className.startsWith("vpi-social-")&&(getComputedStyle(r).maskImage||getComputedStyle(r).webkitMaskImage)==="none"&&r.style.setProperty("--icon",`url('https://api.iconify.design/simple-icons/${t.icon}.svg')`)});const o=S(()=>typeof t.icon=="object"?t.icon.svg:`<span class="vpi-social-${t.icon}"></span>`);return(r,l)=>(i(),c("a",{ref_key:"el",ref:e,class:"VPSocialLink no-icon",href:n.link,"aria-label":n.ariaLabel??(typeof n.icon=="string"?n.icon:""),target:"_blank",rel:n.me?"me noopener":"noopener",innerHTML:o.value},null,8,Xo))}}),Zo=y(Yo,[["__scopeId","data-v-32d78712"]]),nr={class:"VPSocialLinks"},tr=f({__name:"VPSocialLinks",props:{links:{},me:{type:Boolean,default:!0}},setup(n){return(t,e)=>(i(),c("div",nr,[(i(!0),c(R,null,D(n.links,({link:o,icon:r,ariaLabel:l})=>(i(),b(Zo,{key:o,icon:r,link:o,ariaLabel:l,me:n.me},null,8,["icon","link","ariaLabel","me"]))),128))]))}}),wn=y(tr,[["__scopeId","data-v-a1a7286e"]]),er={key:0,class:"group translations"},or={class:"trans-title"},rr={key:1,class:"group"},ir={class:"item appearance"},lr={class:"label"},sr={class:"appearance-action"},ar={key:2,class:"group"},dr={class:"item social-links"},cr=f({__name:"VPNavBarExtra",setup(n){const{site:t,theme:e}=k(),{localeLinks:o,currentLang:r}=z({correspondingLink:!0}),l=S(()=>o.value.length&&r.value.label||t.value.appearance||e.value.socialLinks);return(d,a)=>l.value?(i(),b(kn,{key:0,class:"VPNavBarExtra",label:"extra navigation"},{default:m(()=>[s(o).length&&s(r).label?(i(),c("div",er,[p("p",or,T(s(r).label),1),(i(!0),c(R,null,D(s(o),v=>(i(),b(tn,{key:v.link,item:v},null,8,["item"]))),128))])):g("",!0),s(t).appearance&&s(t).appearance!=="force-dark"&&s(t).appearance!=="force-auto"?(i(),c("div",rr,[p("div",ir,[p("p",lr,T(s(e).darkModeSwitchLabel||"Appearance"),1),p("div",sr,[h(yn)])])])):g("",!0),s(e).socialLinks?(i(),c("div",ar,[p("div",dr,[h(wn,{class:"social-links-list",links:s(e).socialLinks},null,8,["links"])])])):g("",!0)]),_:1})):g("",!0)}}),ur=y(cr,[["__scopeId","data-v-f953d92f"]]),pr=["aria-expanded"],mr=f({__name:"VPNavBarHamburger",props:{active:{type:Boolean}},emits:["click"],setup(n){return(t,e)=>(i(),c("button",{type:"button",class:M(["VPNavBarHamburger",{active:n.active}]),"aria-label":"mobile navigation","aria-expanded":n.active,"aria-controls":"VPNavScreen",onClick:e[0]||(e[0]=o=>t.$emit("click"))},[...e[1]||(e[1]=[p("span",{class:"container"},[p("span",{class:"top"}),p("span",{class:"middle"}),p("span",{class:"bottom"})],-1)])],10,pr))}}),gr=y(mr,[["__scopeId","data-v-6bee1efd"]]),fr=["innerHTML"],hr=f({__name:"VPNavBarMenuLink",props:{item:{}},setup(n){const{page:t}=k();return(e,o)=>(i(),b(A,{class:M({VPNavBarMenuLink:!0,active:s($)(s(t).relativePath,n.item.activeMatch||n.item.link,!!n.item.activeMatch)}),href:n.item.link,target:n.item.target,rel:n.item.rel,"no-icon":n.item.noIcon,tabindex:"0"},{default:m(()=>[p("span",{innerHTML:n.item.text},null,8,fr)]),_:1},8,["class","href","target","rel","no-icon"]))}}),br=y(hr,[["__scopeId","data-v-815115f5"]]),vr=f({__name:"VPNavBarMenuGroup",props:{item:{}},setup(n){const t=n,{page:e}=k(),o=l=>"component"in l?!1:"link"in l?$(e.value.relativePath,l.link,!!t.item.activeMatch):l.items.some(o),r=S(()=>o(t.item));return(l,d)=>(i(),b(kn,{class:M({VPNavBarMenuGroup:!0,active:s($)(s(e).relativePath,n.item.activeMatch,!!n.item.activeMatch)||r.value}),button:n.item.text,items:n.item.items},null,8,["class","button","items"]))}}),yr={key:0,"aria-labelledby":"main-nav-aria-label",class:"VPNavBarMenu"},Sr=f({__name:"VPNavBarMenu",setup(n){const{theme:t}=k();return(e,o)=>s(t).nav?(i(),c("nav",yr,[o[0]||(o[0]=p("span",{id:"main-nav-aria-label",class:"visually-hidden"}," Main Navigation ",-1)),(i(!0),c(R,null,D(s(t).nav,r=>(i(),c(R,{key:JSON.stringify(r)},["link"in r?(i(),b(br,{key:0,item:r},null,8,["item"])):"component"in r?(i(),b(V(r.component),j({key:1,ref_for:!0},r.props),null,16)):(i(),b(vr,{key:2,item:r},null,8,["item"]))],64))),128))])):g("",!0)}}),kr=y(Sr,[["__scopeId","data-v-020be4db"]]);function wr(n){const{localeIndex:t,theme:e}=k();function o(r){const l=r.split("."),d=e.value.search?.options,a=d&&typeof d=="object",v=a&&d.locales?.[t.value]?.translations||null,P=a&&d.translations||null;let C=v,x=P,H=n;const _=l.pop();for(const I of l){let E=null;const O=H?.[I];O&&(E=H=O);const L=x?.[I];L&&(E=x=L);const W=C?.[I];W&&(E=C=W),O||(H=E),L||(x=E),W||(C=E)}return C?.[_]??x?.[_]??H?.[_]??""}return o}const Pr=["aria-label"],Mr={class:"DocSearch-Button-Container"},Cr={class:"DocSearch-Button-Placeholder"},xn=f({__name:"VPNavBarSearchButton",setup(n){const e=wr({button:{buttonText:"Search",buttonAriaLabel:"Search"}});return(o,r)=>(i(),c("button",{type:"button","aria-label":s(e)("button.buttonAriaLabel"),"aria-keyshortcuts":"/ control+k meta+k",class:"DocSearch DocSearch-Button"},[p("span",Mr,[r[0]||(r[0]=p("span",{class:"vpi-search DocSearch-Search-Icon"},null,-1)),p("span",Cr,T(s(e)("button.buttonText")),1)]),r[1]||(r[1]=p("span",{class:"DocSearch-Button-Keys"},[p("kbd",{class:"DocSearch-Button-Key"}),p("kbd",{class:"DocSearch-Button-Key"})],-1))],8,Pr))}}),Tr={class:"VPNavBarSearch"},xr={id:"local-search"},Rr={key:1,id:"docsearch"},Ir=f({__name:"VPNavBarSearch",setup(n){const t=()=>null,e=()=>null,{theme:o}=k(),r=w(!1),l=w(!1);N(()=>{});function d(){r.value||(r.value=!0,setTimeout(a,16))}function a(){const C=new Event("keydown");C.key="k",C.metaKey=!0,window.dispatchEvent(C),setTimeout(()=>{document.querySelector(".DocSearch-Modal")||a()},16)}const v=w(!1),P="";return(C,x)=>(i(),c("div",Tr,[s(P)==="local"?(i(),c(R,{key:0},[v.value?(i(),b(s(t),{key:0,onClose:x[0]||(x[0]=H=>v.value=!1)})):g("",!0),p("div",xr,[h(xn,{onClick:x[1]||(x[1]=H=>v.value=!0)})])],64)):s(P)==="algolia"?(i(),c(R,{key:1},[r.value?(i(),b(s(e),{key:0,algolia:s(o).search?.options??s(o).algolia,onVnodeBeforeMount:x[2]||(x[2]=H=>l.value=!0)},null,8,["algolia"])):g("",!0),l.value?g("",!0):(i(),c("div",Rr,[h(xn,{onClick:d})]))],64)):g("",!0)]))}}),Hr=f({__name:"VPNavBarSocialLinks",setup(n){const{theme:t}=k();return(e,o)=>s(t).socialLinks?(i(),b(wn,{key:0,class:"VPNavBarSocialLinks",links:s(t).socialLinks},null,8,["links"])):g("",!0)}}),Dr=y(Hr,[["__scopeId","data-v-ef6192dc"]]),_r=["href","rel","target"],Er=["innerHTML"],Lr={key:2},Vr=f({__name:"VPNavBarTitle",setup(n){const{site:t,theme:e}=k(),{hasSidebar:o}=q(),{currentLang:r}=z(),l=S(()=>typeof e.value.logoLink=="string"?e.value.logoLink:e.value.logoLink?.link),d=S(()=>typeof e.value.logoLink=="string"?void 0:e.value.logoLink?.rel),a=S(()=>typeof e.value.logoLink=="string"?void 0:e.value.logoLink?.target);return(v,P)=>(i(),c("div",{class:M(["VPNavBarTitle",{"has-sidebar":s(o)}])},[p("a",{class:"title",href:l.value??s(bn)(s(r).link),rel:d.value,target:a.value},[u(v.$slots,"nav-bar-title-before",{},void 0,!0),s(e).logo?(i(),b(X,{key:0,class:"logo",image:s(e).logo},null,8,["image"])):g("",!0),s(e).siteTitle?(i(),c("span",{key:1,innerHTML:s(e).siteTitle},null,8,Er)):s(e).siteTitle===void 0?(i(),c("span",Lr,T(s(t).title),1)):g("",!0),u(v.$slots,"nav-bar-title-after",{},void 0,!0)],8,_r)],2))}}),Ar=y(Vr,[["__scopeId","data-v-d4488dd0"]]),Fr={class:"items"},Or={class:"title"},qr=f({__name:"VPNavBarTranslations",setup(n){const{theme:t}=k(),{localeLinks:e,currentLang:o}=z({correspondingLink:!0});return(r,l)=>s(e).length&&s(o).label?(i(),b(kn,{key:0,class:"VPNavBarTranslations",icon:"vpi-languages",label:s(t).langMenuLabel||"Change language"},{default:m(()=>[p("div",Fr,[p("p",Or,T(s(o).label),1),(i(!0),c(R,null,D(s(e),d=>(i(),b(tn,{key:d.link,item:d},null,8,["item"]))),128))])]),_:1},8,["label"])):g("",!0)}}),jr=y(qr,[["__scopeId","data-v-acee064b"]]),Kr={class:"wrapper"},Nr={class:"container"},$r={class:"title"},Ur={class:"content"},Jr={class:"content-body"},Wr=f({__name:"VPNavBar",props:{isScreenOpen:{type:Boolean}},emits:["toggle-screen"],setup(n){const t=n,{y:e}=_n(),{isHome:o,hasSidebar:r}=q(),l=w({});return mn(()=>{l.value={"has-sidebar":r.value,home:o.value,top:e.value===0,"screen-open":t.isScreenOpen}}),(d,a)=>(i(),c("div",{class:M(["VPNavBar",l.value])},[p("div",Kr,[p("div",Nr,[p("div",$r,[h(Ar,null,{"nav-bar-title-before":m(()=>[u(d.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":m(()=>[u(d.$slots,"nav-bar-title-after",{},void 0,!0)]),_:3})]),p("div",Ur,[p("div",Jr,[u(d.$slots,"nav-bar-content-before",{},void 0,!0),h(Ir,{class:"search"}),h(kr,{class:"menu"}),h(jr,{class:"translations"}),h(Ho,{class:"appearance"}),h(Dr,{class:"social-links"}),h(ur,{class:"extra"}),u(d.$slots,"nav-bar-content-after",{},void 0,!0),h(gr,{class:"hamburger",active:n.isScreenOpen,onClick:a[0]||(a[0]=v=>d.$emit("toggle-screen"))},null,8,["active"])])])])]),a[1]||(a[1]=p("div",{class:"divider"},[p("div",{class:"divider-line"})],-1))],2))}}),Br=y(Wr,[["__scopeId","data-v-8eab0e6d"]]),Gr={key:0,class:"VPNavScreenAppearance"},zr={class:"text"},Qr=f({__name:"VPNavScreenAppearance",setup(n){const{site:t,theme:e}=k();return(o,r)=>s(t).appearance&&s(t).appearance!=="force-dark"&&s(t).appearance!=="force-auto"?(i(),c("div",Gr,[p("p",zr,T(s(e).darkModeSwitchLabel||"Appearance"),1),h(yn)])):g("",!0)}}),Xr=y(Qr,[["__scopeId","data-v-a3e2920d"]]),Yr=["innerHTML"],Zr=f({__name:"VPNavScreenMenuLink",props:{item:{}},setup(n){const{closeScreen:t}=nn(vn);return(e,o)=>(i(),b(A,{class:"VPNavScreenMenuLink",href:n.item.link,target:n.item.target,rel:n.item.rel,"no-icon":n.item.noIcon,onClick:s(t)},{default:m(()=>[p("span",{innerHTML:n.item.text},null,8,Yr)]),_:1},8,["href","target","rel","no-icon","onClick"]))}}),ni=y(Zr,[["__scopeId","data-v-0c441e57"]]),ti=["innerHTML"],ei=f({__name:"VPNavScreenMenuGroupLink",props:{item:{}},setup(n){const{closeScreen:t}=nn(vn);return(e,o)=>(i(),b(A,{class:"VPNavScreenMenuGroupLink",href:n.item.link,target:n.item.target,rel:n.item.rel,"no-icon":n.item.noIcon,onClick:s(t)},{default:m(()=>[p("span",{innerHTML:n.item.text},null,8,ti)]),_:1},8,["href","target","rel","no-icon","onClick"]))}}),Nn=y(ei,[["__scopeId","data-v-37ed8a9a"]]),oi={class:"VPNavScreenMenuGroupSection"},ri={key:0,class:"title"},ii=f({__name:"VPNavScreenMenuGroupSection",props:{text:{},items:{}},setup(n){return(t,e)=>(i(),c("div",oi,[n.text?(i(),c("p",ri,T(n.text),1)):g("",!0),(i(!0),c(R,null,D(n.items,o=>(i(),b(Nn,{key:o.text,item:o},null,8,["item"]))),128))]))}}),li=y(ii,[["__scopeId","data-v-7dfe209c"]]),si=["aria-controls","aria-expanded"],ai=["innerHTML"],di=["id"],ci={key:0,class:"item"},ui={key:1,class:"item"},pi={key:2,class:"group"},mi=f({__name:"VPNavScreenMenuGroup",props:{text:{},items:{}},setup(n){const t=n,e=w(!1),o=S(()=>`NavScreenGroup-${t.text.replace(" ","-").toLowerCase()}`);function r(){e.value=!e.value}return(l,d)=>(i(),c("div",{class:M(["VPNavScreenMenuGroup",{open:e.value}])},[p("button",{class:"button","aria-controls":o.value,"aria-expanded":e.value,onClick:r},[p("span",{class:"button-text",innerHTML:n.text},null,8,ai),d[0]||(d[0]=p("span",{class:"vpi-plus button-icon"},null,-1))],8,si),p("div",{id:o.value,class:"items"},[(i(!0),c(R,null,D(n.items,a=>(i(),c(R,{key:JSON.stringify(a)},["link"in a?(i(),c("div",ci,[h(Nn,{item:a},null,8,["item"])])):"component"in a?(i(),c("div",ui,[(i(),b(V(a.component),j({ref_for:!0},a.props,{"screen-menu":""}),null,16))])):(i(),c("div",pi,[h(li,{text:a.text,items:a.items},null,8,["text","items"])]))],64))),128))],8,di)],2))}}),gi=y(mi,[["__scopeId","data-v-d3547da8"]]),fi={key:0,class:"VPNavScreenMenu"},hi=f({__name:"VPNavScreenMenu",setup(n){const{theme:t}=k();return(e,o)=>s(t).nav?(i(),c("nav",fi,[(i(!0),c(R,null,D(s(t).nav,r=>(i(),c(R,{key:JSON.stringify(r)},["link"in r?(i(),b(ni,{key:0,item:r},null,8,["item"])):"component"in r?(i(),b(V(r.component),j({key:1,ref_for:!0},r.props,{"screen-menu":""}),null,16)):(i(),b(gi,{key:2,text:r.text||"",items:r.items},null,8,["text","items"]))],64))),128))])):g("",!0)}}),bi=f({__name:"VPNavScreenSocialLinks",setup(n){const{theme:t}=k();return(e,o)=>s(t).socialLinks?(i(),b(wn,{key:0,class:"VPNavScreenSocialLinks",links:s(t).socialLinks},null,8,["links"])):g("",!0)}}),vi={class:"list"},yi=f({__name:"VPNavScreenTranslations",setup(n){const{localeLinks:t,currentLang:e}=z({correspondingLink:!0}),o=w(!1);function r(){o.value=!o.value}return(l,d)=>s(t).length&&s(e).label?(i(),c("div",{key:0,class:M(["VPNavScreenTranslations",{open:o.value}])},[p("button",{class:"title",onClick:r},[d[0]||(d[0]=p("span",{class:"vpi-languages icon lang"},null,-1)),K(" "+T(s(e).label)+" ",1),d[1]||(d[1]=p("span",{class:"vpi-chevron-down icon chevron"},null,-1))]),p("ul",vi,[(i(!0),c(R,null,D(s(t),a=>(i(),c("li",{key:a.link,class:"item"},[h(A,{class:"link",href:a.link},{default:m(()=>[K(T(a.text),1)]),_:2},1032,["href"])]))),128))])],2)):g("",!0)}}),Si=y(yi,[["__scopeId","data-v-516e4bc3"]]),ki={class:"container"},wi=f({__name:"VPNavScreen",props:{open:{type:Boolean}},setup(n){const t=w(null),e=En(G?document.body:null);return(o,r)=>(i(),b(cn,{name:"fade",onEnter:r[0]||(r[0]=l=>e.value=!0),onAfterLeave:r[1]||(r[1]=l=>e.value=!1)},{default:m(()=>[n.open?(i(),c("div",{key:0,class:"VPNavScreen",ref_key:"screen",ref:t,id:"VPNavScreen"},[p("div",ki,[u(o.$slots,"nav-screen-content-before",{},void 0,!0),h(hi,{class:"menu"}),h(Si,{class:"translations"}),h(Xr,{class:"appearance"}),h(bi,{class:"social-links"}),u(o.$slots,"nav-screen-content-after",{},void 0,!0)])],512)):g("",!0)]),_:3}))}}),Pi=y(wi,[["__scopeId","data-v-2dd6d0c7"]]),Mi={key:0,class:"VPNav"},Ci=f({__name:"VPNav",setup(n){const{isScreenOpen:t,closeScreen:e,toggleScreen:o}=So(),{frontmatter:r}=k(),l=S(()=>r.value.navbar!==!1);return Ln(vn,{closeScreen:e}),Y(()=>{G&&document.documentElement.classList.toggle("hide-nav",!l.value)}),(d,a)=>l.value?(i(),c("header",Mi,[h(Br,{"is-screen-open":s(t),onToggleScreen:s(o)},{"nav-bar-title-before":m(()=>[u(d.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":m(()=>[u(d.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":m(()=>[u(d.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":m(()=>[u(d.$slots,"nav-bar-content-after",{},void 0,!0)]),_:3},8,["is-screen-open","onToggleScreen"]),h(Pi,{open:s(t)},{"nav-screen-content-before":m(()=>[u(d.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":m(()=>[u(d.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3},8,["open"])])):g("",!0)}}),Ti=y(Ci,[["__scopeId","data-v-d5bf7c8e"]]),xi=["role","tabindex"],Ri={key:1,class:"items"},Ii=f({__name:"VPSidebarItem",props:{item:{},depth:{}},setup(n){const t=n,{collapsed:e,collapsible:o,isLink:r,isActiveLink:l,hasActiveLink:d,hasChildren:a,toggle:v}=Ht(S(()=>t.item)),P=S(()=>a.value?"section":"div"),C=S(()=>r.value?"a":"div"),x=S(()=>a.value?t.depth+2===7?"p":`h${t.depth+2}`:"p"),H=S(()=>r.value?void 0:"button"),_=S(()=>[[`level-${t.depth}`],{collapsible:o.value},{collapsed:e.value},{"is-link":r.value},{"is-active":l.value},{"has-active":d.value}]);function I(O){"key"in O&&O.key!=="Enter"||!t.item.link&&v()}function E(){t.item.link&&v()}return(O,L)=>{const W=U("VPSidebarItem",!0);return i(),b(V(P.value),{class:M(["VPSidebarItem",_.value])},{default:m(()=>[n.item.text?(i(),c("div",j({key:0,class:"item",role:H.value},Xn(n.item.items?{click:I,keydown:I}:{},!0),{tabindex:n.item.items&&0}),[L[1]||(L[1]=p("div",{class:"indicator"},null,-1)),n.item.link?(i(),b(A,{key:0,tag:C.value,class:"link",href:n.item.link,rel:n.item.rel,target:n.item.target},{default:m(()=>[(i(),b(V(x.value),{class:"text",innerHTML:n.item.text},null,8,["innerHTML"]))]),_:1},8,["tag","href","rel","target"])):(i(),b(V(x.value),{key:1,class:"text",innerHTML:n.item.text},null,8,["innerHTML"])),n.item.collapsed!=null&&n.item.items&&n.item.items.length?(i(),c("div",{key:2,class:"caret",role:"button","aria-label":"toggle section",onClick:E,onKeydown:Yn(E,["enter"]),tabindex:"0"},[...L[0]||(L[0]=[p("span",{class:"vpi-chevron-right caret-icon"},null,-1)])],32)):g("",!0)],16,xi)):g("",!0),n.item.items&&n.item.items.length?(i(),c("div",Ri,[n.depth<5?(i(!0),c(R,{key:0},D(n.item.items,Pn=>(i(),b(W,{key:Pn.text,item:Pn,depth:n.depth+1},null,8,["item","depth"]))),128)):g("",!0)])):g("",!0)]),_:1},8,["class"])}}}),Hi=y(Ii,[["__scopeId","data-v-6b36a2fd"]]),Di=f({__name:"VPSidebarGroup",props:{items:{}},setup(n){const t=w(!0);let e=null;return N(()=>{e=setTimeout(()=>{e=null,t.value=!1},300)}),Zn(()=>{e!=null&&(clearTimeout(e),e=null)}),(o,r)=>(i(!0),c(R,null,D(n.items,l=>(i(),c("div",{key:l.text,class:M(["group",{"no-transition":t.value}])},[h(Hi,{item:l,depth:0},null,8,["item"])],2))),128))}}),_i=y(Di,[["__scopeId","data-v-a84b7c21"]]),Ei={class:"nav",id:"VPSidebarNav","aria-labelledby":"sidebar-aria-label",tabindex:"-1"},Li=f({__name:"VPSidebar",props:{open:{type:Boolean}},setup(n){const{sidebarGroups:t,hasSidebar:e}=q(),o=n,r=w(null),l=En(G?document.body:null);F([o,r],()=>{o.open?(l.value=!0,r.value?.focus()):l.value=!1},{immediate:!0,flush:"post"});const d=w(0);return F(t,()=>{d.value+=1},{deep:!0}),(a,v)=>s(e)?(i(),c("aside",{key:0,class:M(["VPSidebar",{open:n.open}]),ref_key:"navEl",ref:r,onClick:v[0]||(v[0]=Vn(()=>{},["stop"]))},[v[2]||(v[2]=p("div",{class:"curtain"},null,-1)),p("nav",Ei,[v[1]||(v[1]=p("span",{class:"visually-hidden",id:"sidebar-aria-label"}," Sidebar Navigation ",-1)),u(a.$slots,"sidebar-nav-before",{},void 0,!0),(i(),b(_i,{items:s(t),key:d.value},null,8,["items"])),u(a.$slots,"sidebar-nav-after",{},void 0,!0)])],2)):g("",!0)}}),Vi=y(Li,[["__scopeId","data-v-e0eef791"]]),Ai=f({__name:"VPSkipLink",setup(n){const{theme:t}=k(),e=Z(),o=w();F(()=>e.path,()=>o.value.focus());function r({target:l}){const d=document.getElementById(decodeURIComponent(l.hash).slice(1));if(d){const a=()=>{d.removeAttribute("tabindex"),d.removeEventListener("blur",a)};d.setAttribute("tabindex","-1"),d.addEventListener("blur",a),d.focus(),window.scrollTo(0,0)}}return(l,d)=>(i(),c(R,null,[p("span",{ref_key:"backToTop",ref:o,tabindex:"-1"},null,512),p("a",{href:"#VPContent",class:"VPSkipLink visually-hidden",onClick:r},T(s(t).skipToContentLabel||"Skip to content"),1)],64))}}),Fi=y(Ai,[["__scopeId","data-v-fcbfc0e0"]]),Oi=f({__name:"Layout",setup(n){const{isOpen:t,open:e,close:o}=It();Dt({closeSidebar:o});const{frontmatter:r}=k(),l=nt(),d=S(()=>!!l["home-hero-image"]);return Ln(On,{heroImageSlotExists:d}),(a,v)=>{const P=U("Content");return s(r).layout!==!1?(i(),c("div",{key:0,class:M(["Layout",s(r).pageClass])},[u(a.$slots,"layout-top",{},void 0,!0),h(Fi),h(st,{class:"backdrop",show:s(t),onClick:s(o)},null,8,["show","onClick"]),h(Ti,null,{"nav-bar-title-before":m(()=>[u(a.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":m(()=>[u(a.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":m(()=>[u(a.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":m(()=>[u(a.$slots,"nav-bar-content-after",{},void 0,!0)]),"nav-screen-content-before":m(()=>[u(a.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":m(()=>[u(a.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3}),h(yo,{open:s(t),onOpenMenu:s(e)},null,8,["open","onOpenMenu"]),h(Vi,{open:s(t)},{"sidebar-nav-before":m(()=>[u(a.$slots,"sidebar-nav-before",{},void 0,!0)]),"sidebar-nav-after":m(()=>[u(a.$slots,"sidebar-nav-after",{},void 0,!0)]),_:3},8,["open"]),h(oo,null,{"page-top":m(()=>[u(a.$slots,"page-top",{},void 0,!0)]),"page-bottom":m(()=>[u(a.$slots,"page-bottom",{},void 0,!0)]),"not-found":m(()=>[u(a.$slots,"not-found",{},void 0,!0)]),"home-hero-before":m(()=>[u(a.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":m(()=>[u(a.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":m(()=>[u(a.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":m(()=>[u(a.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":m(()=>[u(a.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":m(()=>[u(a.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":m(()=>[u(a.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":m(()=>[u(a.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":m(()=>[u(a.$slots,"home-features-after",{},void 0,!0)]),"doc-footer-before":m(()=>[u(a.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":m(()=>[u(a.$slots,"doc-before",{},void 0,!0)]),"doc-after":m(()=>[u(a.$slots,"doc-after",{},void 0,!0)]),"doc-top":m(()=>[u(a.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":m(()=>[u(a.$slots,"doc-bottom",{},void 0,!0)]),"aside-top":m(()=>[u(a.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":m(()=>[u(a.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":m(()=>[u(a.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":m(()=>[u(a.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":m(()=>[u(a.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":m(()=>[u(a.$slots,"aside-ads-after",{},void 0,!0)]),_:3}),h(ao),u(a.$slots,"layout-bottom",{},void 0,!0)],2)):(i(),b(P,{key:1}))}}}),qi=y(Oi,[["__scopeId","data-v-304c8b69"]]),Rn={Layout:qi,enhanceApp:({app:n})=>{n.component("Badge",rt)}},ji={class:"vp-collapse"},Ki=f({__name:"Collapse",setup(n){const t=w(!1),e=w(null),o=w({});function r(){t.value=!t.value}return F(t,async l=>{await hn();const d=e.value;if(d)if(l){const a=d.scrollHeight;o.value={height:"0px",overflow:"hidden"},d.offsetHeight,o.value={height:a+"px",overflow:"hidden"},setTimeout(()=>{t.value&&(o.value={height:"auto"})},300)}else{const a=d.clientHeight;o.value={height:a+"px",overflow:"hidden"},d.offsetHeight,o.value={height:"0px",overflow:"hidden"}}}),(l,d)=>(i(),c("div",ji,[p("div",{class:M(["vp-collapse__summary",{"vp-collapse__summary--open":t.value}]),onClick:r},[u(l.$slots,"summary",{},()=>[K(T(t.value?"▼":"►")+" "+T(t.value?"折叠":"展开"),1)],!0)],2),tt(p("div",{class:"vp-collapse__content",ref_key:"contentRef",ref:e,style:fn(o.value)},[u(l.$slots,"default",{},void 0,!0)],4),[[et,t.value]])]))}}),Ni=y(Ki,[["__scopeId","data-v-4585a904"]]),on=[{id:1,question:"AI Agent  是啥?",answer:["AI Agent（智能代理） 是一个能够 **感知环境、做决策、执行动作** 的系统。是能够感知环境、做决策并执行动作的智能系统，其复杂度从简单规则反应型到学习型智能体不等。","AI Agent 的代码生成、辅助编程工具和提示工程 (Prompt Engineering) 工具","AI Agent 是能够感知环境、基于目标和策略做决策并执行动作的智能系统，现代应用多结合 LLM，实现自动化任务、多步推理和上下文增强。"],answerHtml:["<p>AI Agent（智能代理） 是一个能够 <strong>感知环境、做决策、执行动作</strong> 的系统。是能够感知环境、做决策并执行动作的智能系统，其复杂度从简单规则反应型到学习型智能体不等。</p>","<p>AI Agent 的代码生成、辅助编程工具和提示工程 (Prompt Engineering) 工具</p>","<p>AI Agent 是能够感知环境、基于目标和策略做决策并执行动作的智能系统，现代应用多结合 LLM，实现自动化任务、多步推理和上下文增强。</p>"],reference:"/myKMS/ai/index#_1-ai-agent-是啥",source:"/myKMS/ai/index"},{id:2,question:"MCP 是啥",answer:[`ai mcp 是啥: 
  传统的大语言模型通常只能访问其训练时的数据，无法获取实时信息或与外部系统交互。MCP 的引入，解决了这一限制，使 AI 助手能够：
  - 访问实时数据：如数据库查询、网页抓取、API 调用等。
  - 执行操作：如文件管理、任务调度、系统控制等。
  - 增强上下文理解：通过标准化的协议，提供更丰富的上下文信息，提高回答的准确性和相关性。`],answerHtml:[`<p>ai mcp 是啥:
传统的大语言模型通常只能访问其训练时的数据，无法获取实时信息或与外部系统交互。MCP 的引入，解决了这一限制，使 AI 助手能够：</p>
<ul>
<li>访问实时数据：如数据库查询、网页抓取、API 调用等。</li>
<li>执行操作：如文件管理、任务调度、系统控制等。</li>
<li>增强上下文理解：通过标准化的协议，提供更丰富的上下文信息，提高回答的准确性和相关性。</li>
</ul>`],reference:"/myKMS/ai/index#_2-mcp-是啥",source:"/myKMS/ai/index"},{id:3,question:"ai mcp 与 agent 区别和相同是啥",answer:[`| 对比维度         | **AI MCP（Model Context Protocol）**       | **Agent（智能体）**                                    |
| ------------ | ---------------------------------------- | ------------------------------------------------- |
| **核心定义**     | 一种开放协议，用于让 AI 模型与外部工具、数据源、安全系统进行交互的标准化接口 | 一个具备感知、决策、行动能力的 AI 实体，能自主执行任务                     |
| **目标**       | 让 AI 模型具备“安全、受控地访问外部能力”的标准化方式            | 模拟人类行为与决策，实现自动化任务执行                               |
| **本质定位**     | 通信协议 / 桥梁层（模型与外部世界之间的 API 桥）             | 智能执行体 / 上层应用（基于协议或框架实现行为）                         |
| **是否具备决策逻辑** | ❌ 无（仅负责传递与规范化上下文与调用）                     | ✅ 有（根据上下文、记忆、目标做出决策）                              |
| **是否依赖模型**   | ✅ 是，为模型服务的协议层                            | ✅ 是，通常内嵌或依赖大模型                                    |
| **数据交互方式**   | 定义好的接口和上下文传递机制（如：tools、files、memory等）    | 主动感知 + 调用外部 API 或协议（可使用 MCP）                      |
| **典型实现者**    | OpenAI MCP、Anthropic MCP 等               | AutoGPT、LangChain Agent、OpenDevin、ChatGPT Agent 等 |
| **可扩展性**     | 高，通过定义新的 MCP 服务器或工具接口扩展模型能力              | 高，可通过插件、工具链、MCP 等方式增强行为                           |
| **安全控制**     | 强，强调“模型可见范围”与“安全沙箱”                      | 弱到中等，取决于实现（可能越权或误操作）                              |
| **运行层级**     | 模型与外部系统之间的“中间层”                          | 应用层（运行在用户逻辑上层）                                    |
| **示例场景**     | 模型通过 MCP 协议安全访问数据库、文件系统、内部 API           | Agent 使用 MCP 工具自动检索文档、编写代码、执行命令                   |
| **关系总结**     | 提供 Agent 可用的“统一外部接口标准”                   | 利用 MCP 作为工具访问协议来实现自主任务执行                          |`,"简单总结：",`MCP 是“协议层” → 定义模型如何安全访问世界。
Agent 是“智能层” → 定义模型如何使用这些能力执行任务。`,`换句话说：
  MCP ≈ 插座标准，
  Agent ≈ 插在插座上运行的设备。`],answerHtml:[`<table tabindex="0">
<thead>
<tr>
<th>对比维度</th>
<th><strong>AI MCP（Model Context Protocol）</strong></th>
<th><strong>Agent（智能体）</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>核心定义</strong></td>
<td>一种开放协议，用于让 AI 模型与外部工具、数据源、安全系统进行交互的标准化接口</td>
<td>一个具备感知、决策、行动能力的 AI 实体，能自主执行任务</td>
</tr>
<tr>
<td><strong>目标</strong></td>
<td>让 AI 模型具备“安全、受控地访问外部能力”的标准化方式</td>
<td>模拟人类行为与决策，实现自动化任务执行</td>
</tr>
<tr>
<td><strong>本质定位</strong></td>
<td>通信协议 / 桥梁层（模型与外部世界之间的 API 桥）</td>
<td>智能执行体 / 上层应用（基于协议或框架实现行为）</td>
</tr>
<tr>
<td><strong>是否具备决策逻辑</strong></td>
<td>❌ 无（仅负责传递与规范化上下文与调用）</td>
<td>✅ 有（根据上下文、记忆、目标做出决策）</td>
</tr>
<tr>
<td><strong>是否依赖模型</strong></td>
<td>✅ 是，为模型服务的协议层</td>
<td>✅ 是，通常内嵌或依赖大模型</td>
</tr>
<tr>
<td><strong>数据交互方式</strong></td>
<td>定义好的接口和上下文传递机制（如：tools、files、memory等）</td>
<td>主动感知 + 调用外部 API 或协议（可使用 MCP）</td>
</tr>
<tr>
<td><strong>典型实现者</strong></td>
<td>OpenAI MCP、Anthropic MCP 等</td>
<td>AutoGPT、LangChain Agent、OpenDevin、ChatGPT Agent 等</td>
</tr>
<tr>
<td><strong>可扩展性</strong></td>
<td>高，通过定义新的 MCP 服务器或工具接口扩展模型能力</td>
<td>高，可通过插件、工具链、MCP 等方式增强行为</td>
</tr>
<tr>
<td><strong>安全控制</strong></td>
<td>强，强调“模型可见范围”与“安全沙箱”</td>
<td>弱到中等，取决于实现（可能越权或误操作）</td>
</tr>
<tr>
<td><strong>运行层级</strong></td>
<td>模型与外部系统之间的“中间层”</td>
<td>应用层（运行在用户逻辑上层）</td>
</tr>
<tr>
<td><strong>示例场景</strong></td>
<td>模型通过 MCP 协议安全访问数据库、文件系统、内部 API</td>
<td>Agent 使用 MCP 工具自动检索文档、编写代码、执行命令</td>
</tr>
<tr>
<td><strong>关系总结</strong></td>
<td>提供 Agent 可用的“统一外部接口标准”</td>
<td>利用 MCP 作为工具访问协议来实现自主任务执行</td>
</tr>
</tbody>
</table>`,"<p>简单总结：</p>",`<p>MCP 是“协议层” → 定义模型如何安全访问世界。
Agent 是“智能层” → 定义模型如何使用这些能力执行任务。</p>`,`<p>换句话说：
MCP ≈ 插座标准，
Agent ≈ 插在插座上运行的设备。</p>`],reference:"/myKMS/ai/index#_3-ai-mcp-与-agent-区别和相同是啥",source:"/myKMS/ai/index"},{id:4,question:"Prompt 工程",answer:[`- Prompt 工程就是精心设计、优化和管理输入给大语言模型的提示，以最大化输出质量和准确性的技术。
- Prompt 工程 = 设计和优化输入给 LLM 的提示（Prompt）以获得最准确、最有效输出的技术和方法
- Prompt 工程的目标是 **用最小代价让模型输出最期望的结果。**`],answerHtml:[`<ul>
<li>Prompt 工程就是精心设计、优化和管理输入给大语言模型的提示，以最大化输出质量和准确性的技术。</li>
<li>Prompt 工程 = 设计和优化输入给 LLM 的提示（Prompt）以获得最准确、最有效输出的技术和方法</li>
<li>Prompt 工程的目标是 <strong>用最小代价让模型输出最期望的结果。</strong></li>
</ul>`],reference:"/myKMS/ai/index#_4-prompt-工程",source:"/myKMS/ai/index"},{id:5,question:"AI Coding 的个人最佳实践",answer:[`- 选助手: chatgpt codex 和 github copilot
- 高质量提示词（Prompt）模板
  - 把“上下文先行 + 验收先行”写死在提示里，减少反复。
  -  定身份 + 限制
- 质量护栏（个人级“红线”） 
  - 一次只改一件事：让 AI 聚焦在 1–3 个文件，减少回滚成本。
  - 看 diff 不看 demo：合并前逐行审阅关键点：状态共享、边界条件、异常路径、内存/性能热路径。
  - 强制四件套：代码 + 测试 + 示例 + 说明，缺一不收。
- 调试与修复闭环
- 仓库最小“AI 上下文包”
  - Chat/对话里加一句：规范见 /ai_context/STYLE.md, TECH_STACK.md, DO_NOTS.md，必须遵守
  - 在仓库根放 /ai_context/
    - STYLE.md（命名/目录/commit 规范）
    - TECH_STACK.md（框架版本、状态管理、UI/HTTP/路由选型）
    - API_SPEC.md（关键接口契约与错误码）
    - DO_NOTS.md（黑名单：禁用 API/反模式/易踩坑）
    - 之后提示词直接引用这些文档，减少来回解释。`,`-  把 AI 当“代码生成器 + 搜索引擎 + 重构器”
- 界定 → 生成 → 验证 → 固化`],answerHtml:[`<ul>
<li>选助手: chatgpt codex 和 github copilot</li>
<li>高质量提示词（Prompt）模板
<ul>
<li>把“上下文先行 + 验收先行”写死在提示里，减少反复。</li>
<li>定身份 + 限制</li>
</ul>
</li>
<li>质量护栏（个人级“红线”）
<ul>
<li>一次只改一件事：让 AI 聚焦在 1–3 个文件，减少回滚成本。</li>
<li>看 diff 不看 demo：合并前逐行审阅关键点：状态共享、边界条件、异常路径、内存/性能热路径。</li>
<li>强制四件套：代码 + 测试 + 示例 + 说明，缺一不收。</li>
</ul>
</li>
<li>调试与修复闭环</li>
<li>仓库最小“AI 上下文包”
<ul>
<li>Chat/对话里加一句：规范见 /ai_context/STYLE.md, TECH_STACK.md, DO_NOTS.md，必须遵守</li>
<li>在仓库根放 /ai_context/
<ul>
<li>STYLE.md（命名/目录/commit 规范）</li>
<li>TECH_STACK.md（框架版本、状态管理、UI/HTTP/路由选型）</li>
<li>API_SPEC.md（关键接口契约与错误码）</li>
<li>DO_NOTS.md（黑名单：禁用 API/反模式/易踩坑）</li>
<li>之后提示词直接引用这些文档，减少来回解释。</li>
</ul>
</li>
</ul>
</li>
</ul>`,`<ul>
<li>把 AI 当“代码生成器 + 搜索引擎 + 重构器”</li>
<li>界定 → 生成 → 验证 → 固化</li>
</ul>`],reference:"/myKMS/ai/index#_5-ai-coding-的个人最佳实践",source:"/myKMS/ai/index"},{id:6,question:"对于 AI IDE 中 Agent 的理解",answer:["**AI IDE 中 Agent 它不只是聊天补全，而是能读—想—改—验的一套自动化执行体。**",`- 定义:**一个具备工具调用能力、可多轮执行的自动化体（planner + executor），在 IDE 里对代码仓库做计划→生成→编辑→验证→提交的闭环。**
- 本质差异（vs. 普通 Chat/补全）
  - Chat：只给建议，改不动仓库；上下文短。
  - 补全：跟光标走，单文件/局部。
  - Agent：可跨文件/多步骤，调用代码搜索、测试、构建、git、包管理、格式化/静态检查等工具，并返回可审阅的 patch。`,"AI IDE 中的 Agent = 具备工具调用与多轮自校验的“自动化协作者”。它的价值不在“能写多少代码”，而在把规则化的、可验证的仓库级改动交给机器完成；你的工作是设置清晰边界与硬性的质量闸门，让它安全高效地跑完“计划→编辑→验证→提交”的闭环。"],answerHtml:["<p><strong>AI IDE 中 Agent 它不只是聊天补全，而是能读—想—改—验的一套自动化执行体。</strong></p>",`<ul>
<li>定义:<strong>一个具备工具调用能力、可多轮执行的自动化体（planner + executor），在 IDE 里对代码仓库做计划→生成→编辑→验证→提交的闭环。</strong></li>
<li>本质差异（vs. 普通 Chat/补全）
<ul>
<li>Chat：只给建议，改不动仓库；上下文短。</li>
<li>补全：跟光标走，单文件/局部。</li>
<li>Agent：可跨文件/多步骤，调用代码搜索、测试、构建、git、包管理、格式化/静态检查等工具，并返回可审阅的 patch。</li>
</ul>
</li>
</ul>`,"<p>AI IDE 中的 Agent = 具备工具调用与多轮自校验的“自动化协作者”。它的价值不在“能写多少代码”，而在把规则化的、可验证的仓库级改动交给机器完成；你的工作是设置清晰边界与硬性的质量闸门，让它安全高效地跑完“计划→编辑→验证→提交”的闭环。</p>"],reference:"/myKMS/ai/index#_6-对于-ai-ide-中-agent-的理解",source:"/myKMS/ai/index"},{id:7,question:"对于 AI IDE 中 MCP 的理解",answer:["它是把 IDE/Agent 和外部工具、数据源“标准化接驳”的一套开放协议——更像给 AI 装了一个 “USB-C 接口”：一处实现，处处连用。","mcp:","定义：由 Anthropic 发起的开源协议，用来把 AI 应用/代理（Agent）与“工具 + 数据 + 工作流”做双向、安全、可发现的连接。一次实现协议，便可复用整套生态的集成。","生态位置：面向 IDE/桌面助手/云端代理等“客户端”（Client），以及暴露工具/数据能力的“服务器”（Server）。客户端发现可用工具，调用并拿回结构化结果。","MCP = 给 AI IDE/Agent 的通用“工具与数据总线”。它把“发现—调用—返回”的语义标准化，让 Agent 能在 IDE 里安全、可复用地连接到文件系统、构建/测试、企业 API 等能力，进而把“计划→编辑→验证→提交”的工程闭环跑起来。"],answerHtml:["<p>它是把 IDE/Agent 和外部工具、数据源“标准化接驳”的一套开放协议——更像给 AI 装了一个 “USB-C 接口”：一处实现，处处连用。</p>","<p>mcp:</p>","<p>定义：由 Anthropic 发起的开源协议，用来把 AI 应用/代理（Agent）与“工具 + 数据 + 工作流”做双向、安全、可发现的连接。一次实现协议，便可复用整套生态的集成。</p>","<p>生态位置：面向 IDE/桌面助手/云端代理等“客户端”（Client），以及暴露工具/数据能力的“服务器”（Server）。客户端发现可用工具，调用并拿回结构化结果。</p>","<p>MCP = 给 AI IDE/Agent 的通用“工具与数据总线”。它把“发现—调用—返回”的语义标准化，让 Agent 能在 IDE 里安全、可复用地连接到文件系统、构建/测试、企业 API 等能力，进而把“计划→编辑→验证→提交”的工程闭环跑起来。</p>"],reference:"/myKMS/ai/index#_7-对于-ai-ide-中-mcp-的理解",source:"/myKMS/ai/index"},{id:8,question:"AI IDE 中 Tab 补全模型及其原理",answer:["**是一条从上下文收集 → 语言模型推断 → 候选生成与重排 → 约束与安全 → 呈现与学习的工程流水线**",`\`\`\`swift
键入 → 触发条件命中
   → 上下文构建（prefix+suffix+符号/RAG+工程规则）
     → 模型解码（FIM/自回归，KV cache，限长/停用符）
       → 生成多候选（不同温度/窗口）
         → 重排（可编性/风格/相似度/历史采纳）
           → 约束&安全过滤（语法/lint/secret）
             → 呈现（渐进式，短→长）
               → 反馈学习（接受/编辑/拒绝→排序器/提示适配）

\`\`\``],answerHtml:["<p><strong>是一条从上下文收集 → 语言模型推断 → 候选生成与重排 → 约束与安全 → 呈现与学习的工程流水线</strong></p>",`<div class="language-swift"><button title="Copy Code" class="copy"></button><span class="lang">swift</span><pre><!--::markdown-it-async::evibjkiqudg9xe1z4qkjfb::--><code>键入 → 触发条件命中
   → 上下文构建（prefix+suffix+符号/RAG+工程规则）
     → 模型解码（FIM/自回归，KV cache，限长/停用符）
       → 生成多候选（不同温度/窗口）
         → 重排（可编性/风格/相似度/历史采纳）
           → 约束&amp;安全过滤（语法/lint/secret）
             → 呈现（渐进式，短→长）
               → 反馈学习（接受/编辑/拒绝→排序器/提示适配）
</code></pre>
</div>`],reference:"/myKMS/ai/index#_8-ai-ide-中-tab-补全模型及其原理",source:"/myKMS/ai/index"},{id:9,question:"排序算法",answer:["排序算法分类:",`| 分类         | 特点               | 示例                 |
| ---------- | ---------------- | ------------------ |
| **比较类排序**  | 通过比较元素大小确定顺序     | 冒泡、选择、插入、归并、快速、堆排序 |
| **非比较类排序** | 不通过比较，而是利用桶或计数思想 | 计数排序、桶排序、基数排序      |`,"常见排序算法:","- 冒泡排序: 相邻元素两两比较，较大的向后“冒泡”",`\`\`\`

function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

\`\`\``,"时间复杂度：O(n²)","空间复杂度：O(1)","稳定：✅","- 选择排序: 每轮选择最小（或最大）值放到前面",`\`\`\`
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) min = j;
    }
    [arr[i], arr[min]] = [arr[min], arr[i]];
  }
  return arr;
}

\`\`\``,"时间复杂度：O(n²)","空间复杂度：O(1)","稳定：❌（因为交换可能打乱相等元素顺序）","- 插入排序: 将未排序的元素插入到已排序部分的合适位置",`\`\`\`
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}


\`\`\``,"时间复杂度：O(n²)，但几乎有序时效率极高","空间复杂度：O(1)","稳定：✅","- 快速排序: 分治思想，选一个“基准”pivot，小的放左，大的放右，然后递归。",`\`\`\`
function quickSort(arr) {
  if (arr.length <= 1) return arr;
  const pivot = arr[arr.length >> 1];
  const left = arr.filter(x => x < pivot);
  const mid = arr.filter(x => x === pivot);
  const right = arr.filter(x => x > pivot);
  return [...quickSort(left), ...mid, ...quickSort(right)];
}

\`\`\``,"平均复杂度：O(n log n)","最坏复杂度：O(n²)（当数组几乎有序时）","稳定：❌","- 归并排序: 分治思想，将数组不断二分排序后再合并",`\`\`\`

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

function merge(left, right) {
  const res = [];
  while (left.length && right.length) {
    res.push(left[0] <= right[0] ? left.shift() : right.shift());
  }
  return [...res, ...left, ...right];
}


\`\`\``,"时间复杂度：O(n log n)","空间复杂度：O(n)","稳定：✅","- 计数排序: 非比较类排序，统计每个元素出现次数",`\`\`\`
function countingSort(arr, maxValue) {
  const count = new Array(maxValue + 1).fill(0);
  arr.forEach(v => count[v]++);
  const res = [];
  count.forEach((v, i) => { while (v--) res.push(i); });
  return res;
}

\`\`\``,"时间复杂度：O(n + k)","空间复杂度：O(k)","稳定：✅","缺点：仅适合整数或离散值范围小的场景",`| 场景          | 推荐算法      | 理由       |
| ----------- | --------- | -------- |
| 少量数据（<1000） | 插入 / 冒泡   | 简单实现     |
| 一般排序（常规数组）  | 快速排序      | 平均性能最好   |
| 大量数据、稳定性要求  | 归并排序      | 稳定且复杂度稳定 |
| 数据范围有限、整数   | 计数 / 基数排序 | 非比较类性能高  |
| 实时排序、流式数据   | 插入排序      | 动态插入效率高  |`],answerHtml:["<p>排序算法分类:</p>",`<table tabindex="0">
<thead>
<tr>
<th>分类</th>
<th>特点</th>
<th>示例</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>比较类排序</strong></td>
<td>通过比较元素大小确定顺序</td>
<td>冒泡、选择、插入、归并、快速、堆排序</td>
</tr>
<tr>
<td><strong>非比较类排序</strong></td>
<td>不通过比较，而是利用桶或计数思想</td>
<td>计数排序、桶排序、基数排序</td>
</tr>
</tbody>
</table>`,"<p>常见排序算法:</p>",`<ul>
<li>冒泡排序: 相邻元素两两比较，较大的向后“冒泡”</li>
</ul>`,`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><!--::markdown-it-async::6gduvvzp73ab1mb1hv2iq::--><code>
function bubbleSort(arr) {
  for (let i = 0; i &lt; arr.length - 1; i++) {
    for (let j = 0; j &lt; arr.length - 1 - i; j++) {
      if (arr[j] &gt; arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
</code></pre>
</div>`,"<p>时间复杂度：O(n²)</p>","<p>空间复杂度：O(1)</p>","<p>稳定：✅</p>",`<ul>
<li>选择排序: 每轮选择最小（或最大）值放到前面</li>
</ul>`,`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><!--::markdown-it-async::jd8v61wx837j8ue24ram::--><code>function selectionSort(arr) {
  for (let i = 0; i &lt; arr.length; i++) {
    let min = i;
    for (let j = i + 1; j &lt; arr.length; j++) {
      if (arr[j] &lt; arr[min]) min = j;
    }
    [arr[i], arr[min]] = [arr[min], arr[i]];
  }
  return arr;
}
</code></pre>
</div>`,"<p>时间复杂度：O(n²)</p>","<p>空间复杂度：O(1)</p>","<p>稳定：❌（因为交换可能打乱相等元素顺序）</p>",`<ul>
<li>插入排序: 将未排序的元素插入到已排序部分的合适位置</li>
</ul>`,`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><!--::markdown-it-async::54nx9x5scnhvicb2beadkg::--><code>function insertionSort(arr) {
  for (let i = 1; i &lt; arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j &gt;= 0 &amp;&amp; arr[j] &gt; key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}

</code></pre>
</div>`,"<p>时间复杂度：O(n²)，但几乎有序时效率极高</p>","<p>空间复杂度：O(1)</p>","<p>稳定：✅</p>",`<ul>
<li>快速排序: 分治思想，选一个“基准”pivot，小的放左，大的放右，然后递归。</li>
</ul>`,`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><!--::markdown-it-async::ncqa71zps28gviqo14aa::--><code>function quickSort(arr) {
  if (arr.length &lt;= 1) return arr;
  const pivot = arr[arr.length &gt;&gt; 1];
  const left = arr.filter(x =&gt; x &lt; pivot);
  const mid = arr.filter(x =&gt; x === pivot);
  const right = arr.filter(x =&gt; x &gt; pivot);
  return [...quickSort(left), ...mid, ...quickSort(right)];
}
</code></pre>
</div>`,"<p>平均复杂度：O(n log n)</p>","<p>最坏复杂度：O(n²)（当数组几乎有序时）</p>","<p>稳定：❌</p>",`<ul>
<li>归并排序: 分治思想，将数组不断二分排序后再合并</li>
</ul>`,`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><!--::markdown-it-async::lbqyun8u91c4vak4zfahc::--><code>
function mergeSort(arr) {
  if (arr.length &lt;= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

function merge(left, right) {
  const res = [];
  while (left.length &amp;&amp; right.length) {
    res.push(left[0] &lt;= right[0] ? left.shift() : right.shift());
  }
  return [...res, ...left, ...right];
}

</code></pre>
</div>`,"<p>时间复杂度：O(n log n)</p>","<p>空间复杂度：O(n)</p>","<p>稳定：✅</p>",`<ul>
<li>计数排序: 非比较类排序，统计每个元素出现次数</li>
</ul>`,`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><!--::markdown-it-async::v9pmyw8cdybcdeo7592dik::--><code>function countingSort(arr, maxValue) {
  const count = new Array(maxValue + 1).fill(0);
  arr.forEach(v =&gt; count[v]++);
  const res = [];
  count.forEach((v, i) =&gt; { while (v--) res.push(i); });
  return res;
}
</code></pre>
</div>`,"<p>时间复杂度：O(n + k)</p>","<p>空间复杂度：O(k)</p>","<p>稳定：✅</p>","<p>缺点：仅适合整数或离散值范围小的场景</p>",`<table tabindex="0">
<thead>
<tr>
<th>场景</th>
<th>推荐算法</th>
<th>理由</th>
</tr>
</thead>
<tbody>
<tr>
<td>少量数据（&lt;1000）</td>
<td>插入 / 冒泡</td>
<td>简单实现</td>
</tr>
<tr>
<td>一般排序（常规数组）</td>
<td>快速排序</td>
<td>平均性能最好</td>
</tr>
<tr>
<td>大量数据、稳定性要求</td>
<td>归并排序</td>
<td>稳定且复杂度稳定</td>
</tr>
<tr>
<td>数据范围有限、整数</td>
<td>计数 / 基数排序</td>
<td>非比较类性能高</td>
</tr>
<tr>
<td>实时排序、流式数据</td>
<td>插入排序</td>
<td>动态插入效率高</td>
</tr>
</tbody>
</table>`],reference:"/myKMS/algorithm/index#_2-排序算法",source:"/myKMS/algorithm/index"},{id:10,question:"洗牌算法",answer:[`\`\`\`
function shuffle(array) {
  let arr = array.slice(); // 拷贝一份，不修改原数组
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // 随机索引 [0, i]
    [arr[i], arr[j]] = [arr[j], arr[i]]; // 交换
  }
  return arr;
}

\`\`\``],answerHtml:[`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><!--::markdown-it-async::27dh4mfw47ksq9pc4l8mvm::--><code>function shuffle(array) {
  let arr = array.slice(); // 拷贝一份，不修改原数组
  for (let i = arr.length - 1; i &gt; 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // 随机索引 [0, i]
    [arr[i], arr[j]] = [arr[j], arr[i]]; // 交换
  }
  return arr;
}
</code></pre>
</div>`],reference:"/myKMS/algorithm/index#_3-洗牌算法",source:"/myKMS/algorithm/index"},{id:11,question:"字符串出现的不重复最长长度",answer:["我们可以用 双指针（left、right）+ 哈希表（Set 或 Map） 实现：","- 用一个窗口 [left, right) 表示当前不重复子串；","- 向右移动 right 扩大窗口；","- 若遇到重复字符，则移动 left 收缩窗口；","- 过程中记录窗口最大长度。",`\`\`\`js
function lengthOfLongestSubstring(s) {
  let set = new Set();
  let left = 0, maxLen = 0;

  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[right]);
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}

\`\`\``],answerHtml:["<p>我们可以用 双指针（left、right）+ 哈希表（Set 或 Map） 实现：</p>",`<ul>
<li>用一个窗口 [left, right) 表示当前不重复子串；</li>
</ul>`,`<ul>
<li>向右移动 right 扩大窗口；</li>
</ul>`,`<ul>
<li>若遇到重复字符，则移动 left 收缩窗口；</li>
</ul>`,`<ul>
<li>过程中记录窗口最大长度。</li>
</ul>`,`<div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><!--::markdown-it-async::8b05uvtfqdpq7oua1d3rb9::--><code>function lengthOfLongestSubstring(s) {
  let set = new Set();
  let left = 0, maxLen = 0;

  for (let right = 0; right &lt; s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[right]);
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}
</code></pre>
</div>`],reference:"/myKMS/algorithm/index#_4-字符串出现的不重复最长长度",source:"/myKMS/algorithm/index"},{id:12,question:"react vue 有什么区别和相似",answer:["对比:","- vue 编译+运行时框架, react 运行时, 所以vue 再编译时能够做很多优化(如静态标记和动态提升), react 更注重运行时, react 19 也有 React Compiler 编译优化. (svelte 纯编译 )",`- React：UI 库（Library），专注于 视图层，其它路由/状态管理等靠社区生态（React Router、Redux）。
    Vue：渐进式框架（Framework），提供了从视图到路由、状态管理（Vue Router、Pinia/Vuex）的完整解决方案。`,`- 语法与编程范式:
  - React：以 JavaScript/TypeScript 为核心，用 JSX 描述 UI。
                更偏向函数式编程，鼓励用 Hooks 管理状态、副作用。
  - Vue：提供 单文件组件 (SFC)，分为 \`<template> + <script> + <style>\`。
                更接近声明式和模板式编程，容易上手`,`- 数据绑定
  - React：单向数据流，props → 子组件，更新需要 setState 或 useState。
  - Vue：双向数据绑定 (v-model)，适合表单场景，逻辑简洁。`,`- 性能优化
  - React：依靠 shouldComponentUpdate / React.memo / useMemo / useCallback。
  - Vue：通过 响应式系统（Proxy + Effect 追踪依赖），自动追踪更新；还可以用 v-once、computed 优化`,`- 状态管理
  - React：依赖外部库（Redux、MobX、Zustand、Recoil 等），灵活但碎片化。
  - Vue：官方提供 Vuex（Vue2）/ Pinia（Vue3），统一、集成度高`,"- 底层区别:","1.核心思想",`- React
     1. 核心是函数式 + 状态驱动 UI：UI = f(state)。
     2. 关注数据不可变和纯函数更新。
     3. React 本身是渲染库，路由/状态管理等能力由社区提供。
- Vue
     1. 核心是响应式系统 + 模板编译：通过响应式追踪 + 渲染函数驱动更新。
     2. 偏向声明式与命令式相结合，易上手。
     3. Vue 是一个完整的框架，提供更多开箱即用的能力。`,`2. 响应式机制
   - React: 没有内置响应式，靠 useState/useReducer 触发组件更新。每次 setState 会触发组件重新渲染，然后通过虚拟 DOM diff 决定哪些节点需要更新。数据变化 → 全量渲染 → Diff → 最小化 DOM 更新。
   - Vue: Vue 2 使用 Object.defineProperty，Vue 3 使用 Proxy；通过精确的依赖追踪，只有用到字段的组件或计算属性会订阅该字段。数据变化 → 精确找到依赖它的组件/模板 → 只更新必要部分。`,`3. 虚拟 DOM & 渲染
   - React: 使用 Fiber 架构（从 v16 开始）。每个组件对应一个 Fiber 节点，支持异步可中断渲染（time slicing、并发模式），强调调度与优先级，确保 UI 流畅。
   - Vue: Vue 3 借助编译期优化和 Block Tree（静态提升 + 动态节点追踪）。模板在编译时划分为“静态节点 + 动态节点”，更新时只 diff 动态部分。Vue 3.6 引入的 Vapor Mode 甚至尝试跳过虚拟 DOM，生成更精确的更新代码。`,`4. 调度机制
   - React：有完整的 Scheduler，支持优先级队列（用户交互优先、网络渲染延后）和并发渲染（Concurrent Mode）。
   - Vue：内置异步队列 + nextTick，保证数据更新合并（批量刷新），调度相对简单，不区分复杂优先级。`,`5. 渲染层抽象
   - React: ReactDOM 是一个渲染器，底层渲染器可替换（React Native、Ink、three-fiber），通过 Reconciler + Renderer 解耦。
   - Vue: Vue 3 同样有 Renderer 抽象（runtime-core + runtime-dom），官方维护 DOM 渲染器及其它平台的渲染器，但 React 在多端渲染生态上更成熟。`,`6. 生态设计
   - React：小核 + 强社区，灵活且可扩展（例如 React Native、Next.js、Remix 等）。
   - Vue：整体框架理念，内置响应式和编译器，适合小团队和中台项目，使用体验更统一。`,"相似性",`- 都是 UI 层框架，专注视图
- 都基于 数据驱动视图
- 都通过 虚拟 DOM 进行高效 DOM 更新
- 都是 组件化开发，支持递归组合
- 父 → 子（props）单向数据流 保证数据可预测性
- 都有 生命周期钩子
- 都支持 SSR / SSG / CSR 混合渲染
- 都在追求 更细粒度更新和并发渲染
- 都支持跨平台渲染`],answerHtml:["<p>对比:</p>",`<ul>
<li>vue 编译+运行时框架, react 运行时, 所以vue 再编译时能够做很多优化(如静态标记和动态提升), react 更注重运行时, react 19 也有 React Compiler 编译优化. (svelte 纯编译 )</li>
</ul>`,`<ul>
<li>React：UI 库（Library），专注于 视图层，其它路由/状态管理等靠社区生态（React Router、Redux）。
Vue：渐进式框架（Framework），提供了从视图到路由、状态管理（Vue Router、Pinia/Vuex）的完整解决方案。</li>
</ul>`,`<ul>
<li>语法与编程范式:
<ul>
<li>React：以 JavaScript/TypeScript 为核心，用 JSX 描述 UI。
更偏向函数式编程，鼓励用 Hooks 管理状态、副作用。</li>
<li>Vue：提供 单文件组件 (SFC)，分为 <code>&lt;template&gt; + &lt;script&gt; + &lt;style&gt;</code>。
更接近声明式和模板式编程，容易上手</li>
</ul>
</li>
</ul>`,`<ul>
<li>数据绑定
<ul>
<li>React：单向数据流，props → 子组件，更新需要 setState 或 useState。</li>
<li>Vue：双向数据绑定 (v-model)，适合表单场景，逻辑简洁。</li>
</ul>
</li>
</ul>`,`<ul>
<li>性能优化
<ul>
<li>React：依靠 shouldComponentUpdate / React.memo / useMemo / useCallback。</li>
<li>Vue：通过 响应式系统（Proxy + Effect 追踪依赖），自动追踪更新；还可以用 v-once、computed 优化</li>
</ul>
</li>
</ul>`,`<ul>
<li>状态管理
<ul>
<li>React：依赖外部库（Redux、MobX、Zustand、Recoil 等），灵活但碎片化。</li>
<li>Vue：官方提供 Vuex（Vue2）/ Pinia（Vue3），统一、集成度高</li>
</ul>
</li>
</ul>`,`<ul>
<li>底层区别:</li>
</ul>`,"<p>1.核心思想</p>",`<ul>
<li>React
<ol>
<li>核心是函数式 + 状态驱动 UI：UI = f(state)。</li>
<li>关注数据不可变和纯函数更新。</li>
<li>React 本身是渲染库，路由/状态管理等能力由社区提供。</li>
</ol>
</li>
<li>Vue
<ol>
<li>核心是响应式系统 + 模板编译：通过响应式追踪 + 渲染函数驱动更新。</li>
<li>偏向声明式与命令式相结合，易上手。</li>
<li>Vue 是一个完整的框架，提供更多开箱即用的能力。</li>
</ol>
</li>
</ul>`,`<ol start="2">
<li>响应式机制
<ul>
<li>React: 没有内置响应式，靠 useState/useReducer 触发组件更新。每次 setState 会触发组件重新渲染，然后通过虚拟 DOM diff 决定哪些节点需要更新。数据变化 → 全量渲染 → Diff → 最小化 DOM 更新。</li>
<li>Vue: Vue 2 使用 Object.defineProperty，Vue 3 使用 Proxy；通过精确的依赖追踪，只有用到字段的组件或计算属性会订阅该字段。数据变化 → 精确找到依赖它的组件/模板 → 只更新必要部分。</li>
</ul>
</li>
</ol>`,`<ol start="3">
<li>虚拟 DOM &amp; 渲染
<ul>
<li>React: 使用 Fiber 架构（从 v16 开始）。每个组件对应一个 Fiber 节点，支持异步可中断渲染（time slicing、并发模式），强调调度与优先级，确保 UI 流畅。</li>
<li>Vue: Vue 3 借助编译期优化和 Block Tree（静态提升 + 动态节点追踪）。模板在编译时划分为“静态节点 + 动态节点”，更新时只 diff 动态部分。Vue 3.6 引入的 Vapor Mode 甚至尝试跳过虚拟 DOM，生成更精确的更新代码。</li>
</ul>
</li>
</ol>`,`<ol start="4">
<li>调度机制
<ul>
<li>React：有完整的 Scheduler，支持优先级队列（用户交互优先、网络渲染延后）和并发渲染（Concurrent Mode）。</li>
<li>Vue：内置异步队列 + nextTick，保证数据更新合并（批量刷新），调度相对简单，不区分复杂优先级。</li>
</ul>
</li>
</ol>`,`<ol start="5">
<li>渲染层抽象
<ul>
<li>React: ReactDOM 是一个渲染器，底层渲染器可替换（React Native、Ink、three-fiber），通过 Reconciler + Renderer 解耦。</li>
<li>Vue: Vue 3 同样有 Renderer 抽象（runtime-core + runtime-dom），官方维护 DOM 渲染器及其它平台的渲染器，但 React 在多端渲染生态上更成熟。</li>
</ul>
</li>
</ol>`,`<ol start="6">
<li>生态设计
<ul>
<li>React：小核 + 强社区，灵活且可扩展（例如 React Native、Next.js、Remix 等）。</li>
<li>Vue：整体框架理念，内置响应式和编译器，适合小团队和中台项目，使用体验更统一。</li>
</ul>
</li>
</ol>`,"<p>相似性</p>",`<ul>
<li>都是 UI 层框架，专注视图</li>
<li>都基于 数据驱动视图</li>
<li>都通过 虚拟 DOM 进行高效 DOM 更新</li>
<li>都是 组件化开发，支持递归组合</li>
<li>父 → 子（props）单向数据流 保证数据可预测性</li>
<li>都有 生命周期钩子</li>
<li>都支持 SSR / SSG / CSR 混合渲染</li>
<li>都在追求 更细粒度更新和并发渲染</li>
<li>都支持跨平台渲染</li>
</ul>`],reference:"/myKMS/interview/2025#_1-react-vue-有什么区别和相似",source:"/myKMS/interview/2025"},{id:13,question:"qiankun",answer:[`- js 隔离:
    1.SnapshotSandbox（快照沙箱）: 在应用切换前，把 window     的状态做一份快照。子应用运行时，修改的全局变量只保存在自己的快照里。卸载子应用时，还原 window。缺点：只能同时激活一个子应用（适合单实例场景）。`,`2.ProxySandbox（代理沙箱）
      基于 ES6 Proxy 拦截子应用对全局对象的读写。每个子应用有一个独立的代理对象作为 window，实际访问 window.xxx 时，会优先读写子应用自己的代理上下文。多个子应用可并行运行，互不影响。`,"qiankun 默认在支持 Proxy 的浏览器下使用这个方案",`\`\`\`
const fakeWindow = {};
const proxy = new Proxy(window, {
        get(target, key) {
        return key in fakeWindow ? fakeWindow[key] : target[key];
},
set(target, key, value) {
        fakeWindow[key] = value;
        return true;
      }
});
\`\`\``,"- 样式隔离:",`1. 严格样式隔离: Shadow DOM 兼容性不好
  2. 实验性样式隔离（样式前缀）:通过 ScopedCSS 插件，在运行时动态给子应用 CSS 加上前缀（比如 [data-qiankun="xxx"]）。确保样式只影响当前子应用的 DOM。原理类似 Vue 的 scoped 样式，但是在运行时做。
  3. css BEM, PostCSS 插件`],answerHtml:[`<ul>
<li>js 隔离:
1.SnapshotSandbox（快照沙箱）: 在应用切换前，把 window     的状态做一份快照。子应用运行时，修改的全局变量只保存在自己的快照里。卸载子应用时，还原 window。缺点：只能同时激活一个子应用（适合单实例场景）。</li>
</ul>`,`<p>2.ProxySandbox（代理沙箱）
基于 ES6 Proxy 拦截子应用对全局对象的读写。每个子应用有一个独立的代理对象作为 window，实际访问 window.xxx 时，会优先读写子应用自己的代理上下文。多个子应用可并行运行，互不影响。</p>`,"<p>qiankun 默认在支持 Proxy 的浏览器下使用这个方案</p>",`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><!--::markdown-it-async::fj2zewovfnt9morocvsgfm::--><code>const fakeWindow = {};
const proxy = new Proxy(window, {
        get(target, key) {
        return key in fakeWindow ? fakeWindow[key] : target[key];
},
set(target, key, value) {
        fakeWindow[key] = value;
        return true;
      }
});</code></pre>
</div>`,`<ul>
<li>样式隔离:</li>
</ul>`,`<ol>
<li>严格样式隔离: Shadow DOM 兼容性不好</li>
<li>实验性样式隔离（样式前缀）:通过 ScopedCSS 插件，在运行时动态给子应用 CSS 加上前缀（比如 [data-qiankun=&quot;xxx&quot;]）。确保样式只影响当前子应用的 DOM。原理类似 Vue 的 scoped 样式，但是在运行时做。</li>
<li>css BEM, PostCSS 插件</li>
</ol>`],reference:"/myKMS/interview/2025#_2-qiankun",source:"/myKMS/interview/2025"},{id:14,question:"vite 插件",answer:[`\`\`\`
import type { Plugin } from 'vite';

function myPlugin(options?): Plugin {
  return {
    name: 'my-plugin',  // **必须**有 name，方便调试
    // enforce: 'pre' 或 'post'（可选），指定此插件执行顺序
    config(config, { command }) {
      // 修改 Vite / Rollup 配置（可选）
    },
    configResolved(resolvedConfig) {
      // 当最终 config 确定后执行
    },
    resolveId(source, importer) {
      // 自定义模块解析逻辑
    },
    load(id) {
      // 如果你要“自己加载一个模块”，返回内容
      // 否则返回 null 让后续钩子 /默认流程处理
    },
    transform(code, id) {
      // 转换模块源代码，返回 { code, map } 或 string
    },
    handleHotUpdate(ctx) {
      // 在开发服务下，处理 HMR 热更新逻辑
    },
    // 构建阶段钩子
    buildStart() { },
    generateBundle(options, bundle, isWrite) { },
    writeBundle() { },
    closeBundle() { },
  };
}
\`\`\``,"// 替换模板的一个字",`\`\`\`
export default function replaceTextPlugin(options = { search: 'FOO', replace: 'BAR' }) {
  return {
    name: 'vite-plugin-replace-text',
    enforce: 'pre',
    transform(code, id) {
      if (/\\.(js|ts|jsx|tsx)$/.test(id)) {
        return code.replace(new RegExp(options.search, 'g'), options.replace);
      }
      return null;
    }
  };
}
\`\`\``,"// 统计TODO",`\`\`\`
import fs from 'fs';
import path from 'path';

export function vitePluginTodo() {
  const todos = [];

  function scanFile(filePath) {
    const code = fs.readFileSync(filePath, 'utf-8');
    const lines = code.split('\\n');

    lines.forEach((line, index) => {
      const todoMatch = line.match(/\\/\\/\\s*TODO\\s*:(.*)/i) 
                     || line.match(/\\/\\*\\s*TODO\\s*:(.*)\\*\\//i);

      if (todoMatch) {
        todos.push({
          file: path.relative(process.cwd(), filePath),
          line: index + 1,
          content: todoMatch[1].trim(),
        });
      }
    });
  }

  function scanDir(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        if (entry.name === 'node_modules' || entry.name.startsWith('.')) continue;
        scanDir(fullPath);
      } else if (/\\.(ts|js|tsx|jsx|vue)$/.test(entry.name)) {
        scanFile(fullPath);
      }
    }
  }

  console.log('vite-plugin-todo');
  return {
    name: 'vite-plugin-todo',
    apply: 'build',
    buildStart() {
      console.log('vite-plugin-todo buildStart');
      todos.length = 0;
      scanDir(process.cwd());
    },
    closeBundle() {
      if (todos.length > 0) {
        console.log('\\n💡 TODO List:');
        todos.forEach(todo => {
          console.log(\`\${todo.file}:\${todo.line} - \${todo.content}\`);
        });
      } else {
        console.log('\\n✅ No TODO found.');
      }
    }
  };
}

\`\`\``],answerHtml:[`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><!--::markdown-it-async::thlwdnzwz7i9o3qzzsgp::--><code>import type { Plugin } from &#039;vite&#039;;

function myPlugin(options?): Plugin {
  return {
    name: &#039;my-plugin&#039;,  // **必须**有 name，方便调试
    // enforce: &#039;pre&#039; 或 &#039;post&#039;（可选），指定此插件执行顺序
    config(config, { command }) {
      // 修改 Vite / Rollup 配置（可选）
    },
    configResolved(resolvedConfig) {
      // 当最终 config 确定后执行
    },
    resolveId(source, importer) {
      // 自定义模块解析逻辑
    },
    load(id) {
      // 如果你要“自己加载一个模块”，返回内容
      // 否则返回 null 让后续钩子 /默认流程处理
    },
    transform(code, id) {
      // 转换模块源代码，返回 { code, map } 或 string
    },
    handleHotUpdate(ctx) {
      // 在开发服务下，处理 HMR 热更新逻辑
    },
    // 构建阶段钩子
    buildStart() { },
    generateBundle(options, bundle, isWrite) { },
    writeBundle() { },
    closeBundle() { },
  };
}</code></pre>
</div>`,"<p>// 替换模板的一个字</p>",`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><!--::markdown-it-async::g3kdztuuisalub2g6w5gme::--><code>export default function replaceTextPlugin(options = { search: &#039;FOO&#039;, replace: &#039;BAR&#039; }) {
  return {
    name: &#039;vite-plugin-replace-text&#039;,
    enforce: &#039;pre&#039;,
    transform(code, id) {
      if (/\\.(js|ts|jsx|tsx)$/.test(id)) {
        return code.replace(new RegExp(options.search, &#039;g&#039;), options.replace);
      }
      return null;
    }
  };
}</code></pre>
</div>`,"<p>// 统计TODO</p>",`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><!--::markdown-it-async::w5d8kg3lx7mdikov507vos::--><code>import fs from &#039;fs&#039;;
import path from &#039;path&#039;;

export function vitePluginTodo() {
  const todos = [];

  function scanFile(filePath) {
    const code = fs.readFileSync(filePath, &#039;utf-8&#039;);
    const lines = code.split(&#039;\\n&#039;);

    lines.forEach((line, index) =&gt; {
      const todoMatch = line.match(/\\/\\/\\s*TODO\\s*:(.*)/i) 
                     || line.match(/\\/\\*\\s*TODO\\s*:(.*)\\*\\//i);

      if (todoMatch) {
        todos.push({
          file: path.relative(process.cwd(), filePath),
          line: index + 1,
          content: todoMatch[1].trim(),
        });
      }
    });
  }

  function scanDir(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        if (entry.name === &#039;node_modules&#039; || entry.name.startsWith(&#039;.&#039;)) continue;
        scanDir(fullPath);
      } else if (/\\.(ts|js|tsx|jsx|vue)$/.test(entry.name)) {
        scanFile(fullPath);
      }
    }
  }

  console.log(&#039;vite-plugin-todo&#039;);
  return {
    name: &#039;vite-plugin-todo&#039;,
    apply: &#039;build&#039;,
    buildStart() {
      console.log(&#039;vite-plugin-todo buildStart&#039;);
      todos.length = 0;
      scanDir(process.cwd());
    },
    closeBundle() {
      if (todos.length &gt; 0) {
        console.log(&#039;\\n💡 TODO List:&#039;);
        todos.forEach(todo =&gt; {
          console.log(\`\${todo.file}:\${todo.line} - \${todo.content}\`);
        });
      } else {
        console.log(&#039;\\n✅ No TODO found.&#039;);
      }
    }
  };
}
</code></pre>
</div>`],reference:"/myKMS/interview/2025#_4-vite-插件",source:"/myKMS/interview/2025"},{id:15,question:"webpack 和 vite 的区别",answer:[`1. Webpack：老牌的 打包器，把所有依赖打包成一个或多个 bundle。
2. Vite：新一代 前端构建工具，开发环境利用浏览器的 原生 ES 模块 (ESM)，生产环境用 Rollup 打包。`,`1.开发模式
        Webpack：
            启动时必须 先打包整个项目，再启动 dev server。
            启动速度和项目体积成正比。
        Vite：
            启动时 不打包业务代码，依赖用 esbuild 预构建，源码按需编译。
                启动速度几乎和项目体积无关，大型项目也能秒开。`,"👉 一句话：Webpack = 打包后再跑，Vite = 边跑边编译。",`2. 热更新（HMR）
      webpack：基于打包产物 diff，大型项目热更新会卡顿。
      Vite：直接基于 ESM 精确替换模块，更新速度更快。`,`3. 生产构建
        Webpack：开发和生产都用自家打包逻辑。
        Vite：开发用 esbuild + ESM，生产用 Rollup 打包（Tree-shaking 更强，但生态不如 Webpack 丰富）。`,`4. 配置与生态
        Webpack：配置复杂但灵活。loader + plugin 生态极其成熟。
        Vite：开箱即用，配置简单。插件体系基于 Rollup，生态在快速增长。`,"Webpack 是基于打包的老牌全能工具，功能强大但启动和热更新慢；Vite 利用 ESM 和 esbuild，开发体验好、速度快，生产打包用 Rollup。"],answerHtml:[`<ol>
<li>Webpack：老牌的 打包器，把所有依赖打包成一个或多个 bundle。</li>
<li>Vite：新一代 前端构建工具，开发环境利用浏览器的 原生 ES 模块 (ESM)，生产环境用 Rollup 打包。</li>
</ol>`,`<p>1.开发模式
Webpack：
启动时必须 先打包整个项目，再启动 dev server。
启动速度和项目体积成正比。
Vite：
启动时 不打包业务代码，依赖用 esbuild 预构建，源码按需编译。
启动速度几乎和项目体积无关，大型项目也能秒开。</p>`,"<p>👉 一句话：Webpack = 打包后再跑，Vite = 边跑边编译。</p>",`<ol start="2">
<li>热更新（HMR）
webpack：基于打包产物 diff，大型项目热更新会卡顿。
Vite：直接基于 ESM 精确替换模块，更新速度更快。</li>
</ol>`,`<ol start="3">
<li>生产构建
Webpack：开发和生产都用自家打包逻辑。
Vite：开发用 esbuild + ESM，生产用 Rollup 打包（Tree-shaking 更强，但生态不如 Webpack 丰富）。</li>
</ol>`,`<ol start="4">
<li>配置与生态
Webpack：配置复杂但灵活。loader + plugin 生态极其成熟。
Vite：开箱即用，配置简单。插件体系基于 Rollup，生态在快速增长。</li>
</ol>`,"<p>Webpack 是基于打包的老牌全能工具，功能强大但启动和热更新慢；Vite 利用 ESM 和 esbuild，开发体验好、速度快，生产打包用 Rollup。</p>"],reference:"/myKMS/interview/2025#_5-webpack-和-vite-的区别",source:"/myKMS/interview/2025"},{id:16,question:"React Fiber 架构",answer:["Fiber 是 React 对 虚拟 DOM 渲染机制的重写，它的核心目标是：**支持可中断的渲染和任务优先级调度**，从而改善大型应用的渲染性能和用户体验。简单理解就是：把更新任务拆成可中断的小单元，按优先级调度执行。","Fiber 的数据结构: Fiber 是一个链表/树形结构，每个 Fiber 节点对应一个 React 元素或组件。","双阶段渲染（两阶段 Reconciliation）:Fiber 实现了 可中断渲染，把渲染分为两个阶段：",`- Render 阶段（Reconciliation, 构建 Fiber 树，比较新旧 Fiber 树，生成 effect list（要更新的副作用列表）。可以中断、按优先级切分任务。不直接修改 DOM。
- Commit 阶段:遍历 effect list，将副作用应用到真实 DOM。是同步执行的，一旦开始就不能中断。包括挂载、更新、删除 DOM.`,"调度与优先级:Fiber 内置 任务调度器，任务分为不同优先级：同步任务（高优先级，如点击事件);动画任务异步任务（低优先级，如网络请求完成后的渲染）通过分片（time slicing）和 requestIdleCallback / messChannel / setTimeout，保证 UI 不被阻塞",`- Fiber 为什么要出现？
  - 为了解决 React 15 的同步渲染阻塞问题，支持可中断渲染和任务优先级。`,"- Fiber 树 vs 虚拟 DOM 树区别？",`- 虚拟 DOM 树只表示 UI 元素结构。
  - Fiber 树表示元素 + 组件 + 更新状态 + 优先级 + 副作用列表，更复杂。`,`- Render 阶段和 Commit 阶段有什么区别？
  - Render 阶段：可中断、生成 effect list，不触碰 DOM。
  - Commit 阶段：同步执行、应用 effect，修改真实 DOM`],answerHtml:["<p>Fiber 是 React 对 虚拟 DOM 渲染机制的重写，它的核心目标是：<strong>支持可中断的渲染和任务优先级调度</strong>，从而改善大型应用的渲染性能和用户体验。简单理解就是：把更新任务拆成可中断的小单元，按优先级调度执行。</p>","<p>Fiber 的数据结构: Fiber 是一个链表/树形结构，每个 Fiber 节点对应一个 React 元素或组件。</p>","<p>双阶段渲染（两阶段 Reconciliation）:Fiber 实现了 可中断渲染，把渲染分为两个阶段：</p>",`<ul>
<li>Render 阶段（Reconciliation, 构建 Fiber 树，比较新旧 Fiber 树，生成 effect list（要更新的副作用列表）。可以中断、按优先级切分任务。不直接修改 DOM。</li>
<li>Commit 阶段:遍历 effect list，将副作用应用到真实 DOM。是同步执行的，一旦开始就不能中断。包括挂载、更新、删除 DOM.</li>
</ul>`,"<p>调度与优先级:Fiber 内置 任务调度器，任务分为不同优先级：同步任务（高优先级，如点击事件);动画任务异步任务（低优先级，如网络请求完成后的渲染）通过分片（time slicing）和 requestIdleCallback / messChannel / setTimeout，保证 UI 不被阻塞</p>",`<ul>
<li>Fiber 为什么要出现？
<ul>
<li>为了解决 React 15 的同步渲染阻塞问题，支持可中断渲染和任务优先级。</li>
</ul>
</li>
</ul>`,`<ul>
<li>Fiber 树 vs 虚拟 DOM 树区别？</li>
</ul>`,`<ul>
<li>虚拟 DOM 树只表示 UI 元素结构。
<ul>
<li>Fiber 树表示元素 + 组件 + 更新状态 + 优先级 + 副作用列表，更复杂。</li>
</ul>
</li>
</ul>`,`<ul>
<li>Render 阶段和 Commit 阶段有什么区别？
<ul>
<li>Render 阶段：可中断、生成 effect list，不触碰 DOM。</li>
<li>Commit 阶段：同步执行、应用 effect，修改真实 DOM</li>
</ul>
</li>
</ul>`],reference:"/myKMS/interview/2025#_6-react-fiber-架构",source:"/myKMS/interview/2025"},{id:17,question:"单点登录",answer:["用户在一个系统上登录后，就能无感知地访问其他关联系统，无需再次登录。",`- 统一身份认证中心（Identity Provider, IdP）
  - 用户只在认证中心登录一次。
  - 认证中心负责验证用户名/密码、签发令牌（如 JWT、SAML、OAuth2 Token）。`,`- 业务系统（Service Provider, SP）
  - 用户访问业务系统时，业务系统会跳转到认证中心校验。
  - 认证成功后，认证中心返回一个「登录凭证」（Token / Ticket）。
  - 业务系统验证凭证后，允许用户访问。`,`- Cookie + Session（早期）
  - 依赖共享 Cookie（要求同域或二级域名一致）。
  - 局限性大，不适合跨域。`,`- Token（JWT / OAuth2 / OpenID Connect）（主流）
  - 用户认证成功后，认证中心签发 Token。
  - 各系统通过 Token 识别用户，支持跨域、跨平台。`],answerHtml:["<p>用户在一个系统上登录后，就能无感知地访问其他关联系统，无需再次登录。</p>",`<ul>
<li>统一身份认证中心（Identity Provider, IdP）
<ul>
<li>用户只在认证中心登录一次。</li>
<li>认证中心负责验证用户名/密码、签发令牌（如 JWT、SAML、OAuth2 Token）。</li>
</ul>
</li>
</ul>`,`<ul>
<li>业务系统（Service Provider, SP）
<ul>
<li>用户访问业务系统时，业务系统会跳转到认证中心校验。</li>
<li>认证成功后，认证中心返回一个「登录凭证」（Token / Ticket）。</li>
<li>业务系统验证凭证后，允许用户访问。</li>
</ul>
</li>
</ul>`,`<ul>
<li>Cookie + Session（早期）
<ul>
<li>依赖共享 Cookie（要求同域或二级域名一致）。</li>
<li>局限性大，不适合跨域。</li>
</ul>
</li>
</ul>`,`<ul>
<li>Token（JWT / OAuth2 / OpenID Connect）（主流）
<ul>
<li>用户认证成功后，认证中心签发 Token。</li>
<li>各系统通过 Token 识别用户，支持跨域、跨平台。</li>
</ul>
</li>
</ul>`],reference:"/myKMS/interview/2025#_7-单点登录",source:"/myKMS/interview/2025"},{id:18,question:"状态管理redux mobx pinna 设计模式是啥？区别是啥",answer:[`| 维度          | Redux               | MobX                         | Pinia                       |
| ----------- | ------------------- | ---------------------------- | --------------------------- |
| 状态更新方式      | 不可变 + reducer       | 可变 + observable              | 可变 + reactive               |
| 阅读 /可预测性    | 高（统一入口）             | 较低（更新处散落）                    | 较中等 /接近 Vue 响应式方式           |
| 异步 /副作用管理   | 通过中间件（thunk / saga） | action / reaction / autorun  | 普通 action + 插件 /订阅          |
| 模块化         | 使用 reducer 组合拆分     | 多 store / classes            | 天生模块 store                  |
| 学习成本        | 较高                  | 较低                           | 中等（依赖 Vue 响应式理解）            |
| 调试工具 / 时间旅行 | 强支持（Redux DevTools） | 有 MobX DevTools、reaction 日志等 | Pinia Devtools /插件支持        |
| 适合场景        | 大型复杂状态，团队协作         | 快速开发、响应性重 UI                 | Vue 应用 / Composition API 生态 |`,`| 库     | 核心模式                           | 特点                                 |
| ------ | ---------------------------------- | ------------------------------------ |
| Redux  | 发布-订阅 + 单例模式 + 函数式编程    | 可预测、严格、样板代码多              |
| MobX   | 观察者模式 + 响应式 + 面向对象(OOP) | 简洁直观、自动追踪依赖、灵活          |
| Pinia  | 观察者模式 + 依赖注入 + 组合模式     | 结合 Vue3 响应式系统，轻量优雅        |`,"观察者模式 与 发布-订阅模式（格式化）",`| 模式               | 是否有中介 | 耦合度   | 典型场景                     |
| ------------------ | ---------- | -------- | ---------------------------- |
| 观察者模式 (Observer)    | ❌ 没有中介  | 相对紧耦合 | UI 响应数据变化（如 Vue2）        |
| 发布-订阅模式 (Pub/Sub)  | ✅ 有中介    | 松耦合     | 事件总线、跨模块通信、消息队列    |`,"概念要点：",`- 观察者模式（Observer）
  - 结构：有一个目标对象（Subject），维护观察者列表；状态变化时主动通知所有观察者。
  - 特点：点对点通知，被观察者需要知道其观察者；适合一对多、紧密协作场景。`,`- 发布-订阅模式（Publish‑Subscribe）
  - 结构：引入消息中间件/事件中心，发布者发布事件到中间件，订阅者从中间件订阅事件。
  - 特点：发布者与订阅者解耦，扩展性强，适合多对多和跨模块通信。`,"对比总结：",`- 耦合：Observer 更紧耦合（Subject 知道 observers）；Pub/Sub 更松耦合（通过中介解耦）。
- 可扩展性：Pub/Sub 更易扩展和复用；Observer 更简单、直接，适合 UI 内部数据驱动场景。`,`观察者模式（简要结构示例）
- Subject: 维护 observers 列表，提供 register / unregister / notify 方法。
- Observer: 实现 update 接口，接收通知并更新自身。`,`发布-订阅模式（简要结构示例）
- EventBus（中介）: on / off / emit。
- 发布者: emit(event, payload)。
- 订阅者: on(event, handler)。`],answerHtml:[`<table tabindex="0">
<thead>
<tr>
<th>维度</th>
<th>Redux</th>
<th>MobX</th>
<th>Pinia</th>
</tr>
</thead>
<tbody>
<tr>
<td>状态更新方式</td>
<td>不可变 + reducer</td>
<td>可变 + observable</td>
<td>可变 + reactive</td>
</tr>
<tr>
<td>阅读 /可预测性</td>
<td>高（统一入口）</td>
<td>较低（更新处散落）</td>
<td>较中等 /接近 Vue 响应式方式</td>
</tr>
<tr>
<td>异步 /副作用管理</td>
<td>通过中间件（thunk / saga）</td>
<td>action / reaction / autorun</td>
<td>普通 action + 插件 /订阅</td>
</tr>
<tr>
<td>模块化</td>
<td>使用 reducer 组合拆分</td>
<td>多 store / classes</td>
<td>天生模块 store</td>
</tr>
<tr>
<td>学习成本</td>
<td>较高</td>
<td>较低</td>
<td>中等（依赖 Vue 响应式理解）</td>
</tr>
<tr>
<td>调试工具 / 时间旅行</td>
<td>强支持（Redux DevTools）</td>
<td>有 MobX DevTools、reaction 日志等</td>
<td>Pinia Devtools /插件支持</td>
</tr>
<tr>
<td>适合场景</td>
<td>大型复杂状态，团队协作</td>
<td>快速开发、响应性重 UI</td>
<td>Vue 应用 / Composition API 生态</td>
</tr>
</tbody>
</table>`,`<table tabindex="0">
<thead>
<tr>
<th>库</th>
<th>核心模式</th>
<th>特点</th>
</tr>
</thead>
<tbody>
<tr>
<td>Redux</td>
<td>发布-订阅 + 单例模式 + 函数式编程</td>
<td>可预测、严格、样板代码多</td>
</tr>
<tr>
<td>MobX</td>
<td>观察者模式 + 响应式 + 面向对象(OOP)</td>
<td>简洁直观、自动追踪依赖、灵活</td>
</tr>
<tr>
<td>Pinia</td>
<td>观察者模式 + 依赖注入 + 组合模式</td>
<td>结合 Vue3 响应式系统，轻量优雅</td>
</tr>
</tbody>
</table>`,"<p>观察者模式 与 发布-订阅模式（格式化）</p>",`<table tabindex="0">
<thead>
<tr>
<th>模式</th>
<th>是否有中介</th>
<th>耦合度</th>
<th>典型场景</th>
</tr>
</thead>
<tbody>
<tr>
<td>观察者模式 (Observer)</td>
<td>❌ 没有中介</td>
<td>相对紧耦合</td>
<td>UI 响应数据变化（如 Vue2）</td>
</tr>
<tr>
<td>发布-订阅模式 (Pub/Sub)</td>
<td>✅ 有中介</td>
<td>松耦合</td>
<td>事件总线、跨模块通信、消息队列</td>
</tr>
</tbody>
</table>`,"<p>概念要点：</p>",`<ul>
<li>观察者模式（Observer）
<ul>
<li>结构：有一个目标对象（Subject），维护观察者列表；状态变化时主动通知所有观察者。</li>
<li>特点：点对点通知，被观察者需要知道其观察者；适合一对多、紧密协作场景。</li>
</ul>
</li>
</ul>`,`<ul>
<li>发布-订阅模式（Publish‑Subscribe）
<ul>
<li>结构：引入消息中间件/事件中心，发布者发布事件到中间件，订阅者从中间件订阅事件。</li>
<li>特点：发布者与订阅者解耦，扩展性强，适合多对多和跨模块通信。</li>
</ul>
</li>
</ul>`,"<p>对比总结：</p>",`<ul>
<li>耦合：Observer 更紧耦合（Subject 知道 observers）；Pub/Sub 更松耦合（通过中介解耦）。</li>
<li>可扩展性：Pub/Sub 更易扩展和复用；Observer 更简单、直接，适合 UI 内部数据驱动场景。</li>
</ul>`,`<p>观察者模式（简要结构示例）</p>
<ul>
<li>Subject: 维护 observers 列表，提供 register / unregister / notify 方法。</li>
<li>Observer: 实现 update 接口，接收通知并更新自身。</li>
</ul>`,`<p>发布-订阅模式（简要结构示例）</p>
<ul>
<li>EventBus（中介）: on / off / emit。</li>
<li>发布者: emit(event, payload)。</li>
<li>订阅者: on(event, handler)。</li>
</ul>`],reference:"/myKMS/interview/2025#_8-状态管理redux-mobx-pinna-设计模式是啥-区别是啥",source:"/myKMS/interview/2025"},{id:19,question:"如果一个项目 使用了antd 组件库, 又使用了antd 2次开发组件库 会不会有问题",answer:[`1. 样式冲突, 可以通过修改命名前缀区分
2. ConfigProvider 全局化配置也可能会冲突`],answerHtml:[`<ol>
<li>样式冲突, 可以通过修改命名前缀区分</li>
<li>ConfigProvider 全局化配置也可能会冲突</li>
</ol>`],reference:"/myKMS/interview/2025#_9-如果一个项目-使用了antd-组件库-又使用了antd-2次开发组件库-会不会有问题",source:"/myKMS/interview/2025"},{id:20,question:"页面卡顿，内存泄露排查",answer:[`| 现象                   | 原因可能性                                       |
| -------------------- | ------------------------------------------- |
| 页面卡顿 / 帧率低 /响应迟钝     | JS 执行时间过长、频繁重绘/重排、布局触发、事件处理阻塞、定时器或循环、垃圾回收暂停 |
| 内存持续上涨不降 /长时间运行后越来越慢 | 内存泄漏：一些对象、DOM、回调、事件监听器、定时器等未被释放仍被引用         |`,`| 阶段            | 目标           | 使用工具                                       | 主要操作                             | 关键观察点                                 | 可能问题 /风险          |
| ------------- | ------------ | ------------------------------------------ | -------------------------------- | ------------------------------------- | ----------------- |
| **1️⃣ 确认问题**  | 复现卡顿或内存异常的场景 | 浏览器、用户日志、监控平台                              | 收集用户反馈、复现路径、操作步骤                 | 卡顿是否规律出现 / 内存是否持续上涨                   | 确认是性能问题而非业务阻塞     |
| **2️⃣ 初步检测**  | 判断是卡顿还是内存泄漏  | Chrome DevTools → **Performance Monitor**  | 观察 FPS、CPU、JS Heap、DOM Node 数量变化 | Heap、Node 数持续上升                       | 存在潜在泄漏或渲染过频       |
| **3️⃣ 拍快照分析** | 捕获堆内对象状态     | DevTools → **Memory → Heap Snapshot**      | 操作前 / 操作后各拍一份快照                  | Retained Size / Detached DOM Trees    | 未被释放的 DOM / 对象被引用 |
| **4️⃣ 对比快照**  | 找出泄漏源头       | Memory → **Comparison 视图**                 | 比较两份快照差异                         | 哪些对象 / 节点数量持续增加                       | 确认泄漏对象及增长趋势       |
| **5️⃣ 引用链分析** | 找出被谁持有       | Memory → **Retainers / Object References** | 追踪泄漏对象的引用路径                      | 闭包、全局变量、事件监听、定时器                      | 典型 JS 引用未释放       |
| **6️⃣ 修复验证**  | 移除引用 / 优化逻辑  | 代码修改 + 重测                                  | 清理事件、取消定时器、销毁监听、优化响应式            | 重新运行监控，确认 Heap 稳定                     | 内存回收正常、卡顿消失       |
| **7️⃣ 性能优化**  | 防止再次发生       | Performance 面板 + Lighthouse                | 分析长任务（>50ms）和渲染瓶颈                | Recalculate Style / Layout / Paint 频率 | 渲染层优化、减少阻塞 JS     |
| **8️⃣ 持续监控**  | 监控上线表现       | 性能监控 SDK（如 Sentry、WebVitals）               | 采集 FPS / Heap / 页面耗时数据           | 长时间运行后趋势                              | 提前发现潜在泄漏          |`],answerHtml:[`<table tabindex="0">
<thead>
<tr>
<th>现象</th>
<th>原因可能性</th>
</tr>
</thead>
<tbody>
<tr>
<td>页面卡顿 / 帧率低 /响应迟钝</td>
<td>JS 执行时间过长、频繁重绘/重排、布局触发、事件处理阻塞、定时器或循环、垃圾回收暂停</td>
</tr>
<tr>
<td>内存持续上涨不降 /长时间运行后越来越慢</td>
<td>内存泄漏：一些对象、DOM、回调、事件监听器、定时器等未被释放仍被引用</td>
</tr>
</tbody>
</table>`,`<table tabindex="0">
<thead>
<tr>
<th>阶段</th>
<th>目标</th>
<th>使用工具</th>
<th>主要操作</th>
<th>关键观察点</th>
<th>可能问题 /风险</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>1️⃣ 确认问题</strong></td>
<td>复现卡顿或内存异常的场景</td>
<td>浏览器、用户日志、监控平台</td>
<td>收集用户反馈、复现路径、操作步骤</td>
<td>卡顿是否规律出现 / 内存是否持续上涨</td>
<td>确认是性能问题而非业务阻塞</td>
</tr>
<tr>
<td><strong>2️⃣ 初步检测</strong></td>
<td>判断是卡顿还是内存泄漏</td>
<td>Chrome DevTools → <strong>Performance Monitor</strong></td>
<td>观察 FPS、CPU、JS Heap、DOM Node 数量变化</td>
<td>Heap、Node 数持续上升</td>
<td>存在潜在泄漏或渲染过频</td>
</tr>
<tr>
<td><strong>3️⃣ 拍快照分析</strong></td>
<td>捕获堆内对象状态</td>
<td>DevTools → <strong>Memory → Heap Snapshot</strong></td>
<td>操作前 / 操作后各拍一份快照</td>
<td>Retained Size / Detached DOM Trees</td>
<td>未被释放的 DOM / 对象被引用</td>
</tr>
<tr>
<td><strong>4️⃣ 对比快照</strong></td>
<td>找出泄漏源头</td>
<td>Memory → <strong>Comparison 视图</strong></td>
<td>比较两份快照差异</td>
<td>哪些对象 / 节点数量持续增加</td>
<td>确认泄漏对象及增长趋势</td>
</tr>
<tr>
<td><strong>5️⃣ 引用链分析</strong></td>
<td>找出被谁持有</td>
<td>Memory → <strong>Retainers / Object References</strong></td>
<td>追踪泄漏对象的引用路径</td>
<td>闭包、全局变量、事件监听、定时器</td>
<td>典型 JS 引用未释放</td>
</tr>
<tr>
<td><strong>6️⃣ 修复验证</strong></td>
<td>移除引用 / 优化逻辑</td>
<td>代码修改 + 重测</td>
<td>清理事件、取消定时器、销毁监听、优化响应式</td>
<td>重新运行监控，确认 Heap 稳定</td>
<td>内存回收正常、卡顿消失</td>
</tr>
<tr>
<td><strong>7️⃣ 性能优化</strong></td>
<td>防止再次发生</td>
<td>Performance 面板 + Lighthouse</td>
<td>分析长任务（&gt;50ms）和渲染瓶颈</td>
<td>Recalculate Style / Layout / Paint 频率</td>
<td>渲染层优化、减少阻塞 JS</td>
</tr>
<tr>
<td><strong>8️⃣ 持续监控</strong></td>
<td>监控上线表现</td>
<td>性能监控 SDK（如 Sentry、WebVitals）</td>
<td>采集 FPS / Heap / 页面耗时数据</td>
<td>长时间运行后趋势</td>
<td>提前发现潜在泄漏</td>
</tr>
</tbody>
</table>`],reference:"/myKMS/interview/2025#_10-页面卡顿-内存泄露排查",source:"/myKMS/interview/2025"},{id:21,question:"定位白屏的常见原因",answer:[`- 1.JavaScript 错误导致渲染中断
    - 症状：控制台报错，页面无法正常渲染。
    -  也可能接口返回异常数据或前端未兼容数据
- 2.关键资源加载失败
    - 症状：页面依赖的 CSS、JS、图片等资源未加载，导致页面样式或功能缺失。
- 3.页面渲染逻辑异常
     - 症状：页面结构正常，但内容未渲染。
     - 排查方法：
        - 检查 JavaScript 渲染逻辑，确认数据是否正确传递和处理。
        - 使用断点调试，逐步执行代码，查看变量值和执行流程。
- 4.浏览器兼容性问题
    - 症状：特定浏览器或版本下页面白屏。
    - 排查方法：
    - 使用 Can I Use 等工具，检查所用特性在目标浏览器中的支持情况。
    - 添加适当的 Polyfill，确保功能在旧版浏览器中可用`,`- 5. 网络环境或权限问题
    - 症状：在特定网络环境下（如公司内网）页面白屏。
    - 排查方法：
      - 检查 Content Security Policy（CSP）设置，确保没有阻止资源加载。
      - 确认没有被防火墙或安全软件拦截`,`- 6.白屏检测方案
    - 方案一：检测根节点是否渲染：通过检查根节点是否有内容，判断页面是否白屏。
    - 方案二：Mutation Observer 监听 DOM 变化：监听页面 DOM 变化，判断页面是否渲染。
    - 方案三：页面截图检测：对比页面截图与纯白图片，判断页面是否白屏。
    - 方案四：采样对比：在页面中采样多个点，判断是否有元素渲染。`,`- 步骤：
      - 1.生成随机坐标点：在页面的宽度和高度范围内生成多个随机坐标点。
      - 2.检查坐标点处的元素：使用 document.elementFromPoint(x, y) 方法获取指定坐标点处的最上层元素。
      - 3.判断元素是否可见：检查获取到的元素是否存在且可见。`,`\`\`\`
function isElementRendered(sampleCount = 10) {
    let visibleCount = 0;
    for (let i = 0; i < sampleCount; i++) {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        const element = document.elementFromPoint(x, y);

        if (element && element.offsetParent !== null) {
            visibleCount++;
        }
    }

    return visibleCount / sampleCount > 0.5; // 如果超过一半的采样点有可见元素，认为页面已渲染
}
\`\`\``],answerHtml:[`<ul>
<li>1.JavaScript 错误导致渲染中断
<ul>
<li>症状：控制台报错，页面无法正常渲染。</li>
<li>也可能接口返回异常数据或前端未兼容数据</li>
</ul>
</li>
<li>2.关键资源加载失败
<ul>
<li>症状：页面依赖的 CSS、JS、图片等资源未加载，导致页面样式或功能缺失。</li>
</ul>
</li>
<li>3.页面渲染逻辑异常
<ul>
<li>症状：页面结构正常，但内容未渲染。</li>
<li>排查方法：
<ul>
<li>检查 JavaScript 渲染逻辑，确认数据是否正确传递和处理。</li>
<li>使用断点调试，逐步执行代码，查看变量值和执行流程。</li>
</ul>
</li>
</ul>
</li>
<li>4.浏览器兼容性问题
<ul>
<li>症状：特定浏览器或版本下页面白屏。</li>
<li>排查方法：</li>
<li>使用 Can I Use 等工具，检查所用特性在目标浏览器中的支持情况。</li>
<li>添加适当的 Polyfill，确保功能在旧版浏览器中可用</li>
</ul>
</li>
</ul>`,`<ul>
<li>
<ol start="5">
<li>网络环境或权限问题</li>
</ol>
<ul>
<li>症状：在特定网络环境下（如公司内网）页面白屏。</li>
<li>排查方法：
<ul>
<li>检查 Content Security Policy（CSP）设置，确保没有阻止资源加载。</li>
<li>确认没有被防火墙或安全软件拦截</li>
</ul>
</li>
</ul>
</li>
</ul>`,`<ul>
<li>6.白屏检测方案
<ul>
<li>方案一：检测根节点是否渲染：通过检查根节点是否有内容，判断页面是否白屏。</li>
<li>方案二：Mutation Observer 监听 DOM 变化：监听页面 DOM 变化，判断页面是否渲染。</li>
<li>方案三：页面截图检测：对比页面截图与纯白图片，判断页面是否白屏。</li>
<li>方案四：采样对比：在页面中采样多个点，判断是否有元素渲染。</li>
</ul>
</li>
</ul>`,`<ul>
<li>步骤：
- 1.生成随机坐标点：在页面的宽度和高度范围内生成多个随机坐标点。
- 2.检查坐标点处的元素：使用 document.elementFromPoint(x, y) 方法获取指定坐标点处的最上层元素。
- 3.判断元素是否可见：检查获取到的元素是否存在且可见。</li>
</ul>`,`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><!--::markdown-it-async::n3oq4j44fjhashbree4w9::--><code>function isElementRendered(sampleCount = 10) {
    let visibleCount = 0;
    for (let i = 0; i &lt; sampleCount; i++) {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        const element = document.elementFromPoint(x, y);

        if (element &amp;&amp; element.offsetParent !== null) {
            visibleCount++;
        }
    }

    return visibleCount / sampleCount &gt; 0.5; // 如果超过一半的采样点有可见元素，认为页面已渲染
}</code></pre>
</div>`],reference:"/myKMS/interview/2025#_11-定位白屏的常见原因",source:"/myKMS/interview/2025"},{id:22,question:"浏览器事件循环，网络请求是宏任务吗？",answer:["是的，浏览器中的网络请求（如使用 fetch 或 XMLHttpRequest）属于宏任务（macrotask）。",`调用栈（Call Stack）：执行同步代码。
    - 宏任务队列（Macrotask Queue）：存放宏任务的回调函数，例如 setTimeout、setInterval、DOM 事件、网络请求, UI 渲染等。
    - 微任务队列（Microtask Queue）：存放微任务的回调函数，例如 Promise.then、MutationObserver 等。`,`事件循环的执行顺序如下：
  - 执行调用栈中的同步代码。
  - 执行微任务队列中的所有任务，直到队列为空。
  - 更新渲染（如果需要）。
  - 从宏任务队列中取出一个任务执行。
  - 重复上述步骤`,"宏任务 → 微任务 → ✅ 渲染 → 下一个宏任务",`\`\`\`
┌────────────────────────────┐
│       1. 取一个宏任务       │ (如 script, I/O, setTimeout 回调)
├────────────────────────────┤
│       2. 执行所有微任务     │ (Promise.then, MutationObserver)
├────────────────────────────┤
│       3. 执行渲染前钩子     │ (requestAnimationFrame)
├────────────────────────────┤
│       4. 执行渲染 / 绘制    │ (样式计算, 布局, 合成, 绘制)
├────────────────────────────┤
│       5. requestIdleCallback │ (如果有空闲)
├────────────────────────────┤
│       6. 下一个宏任务循环    │
└────────────────────────────┘

\`\`\``,"**宏任务 → 微任务 → rAF → 渲染 → idle → 下一宏任务**"],answerHtml:["<p>是的，浏览器中的网络请求（如使用 fetch 或 XMLHttpRequest）属于宏任务（macrotask）。</p>",`<p>调用栈（Call Stack）：执行同步代码。
- 宏任务队列（Macrotask Queue）：存放宏任务的回调函数，例如 setTimeout、setInterval、DOM 事件、网络请求, UI 渲染等。
- 微任务队列（Microtask Queue）：存放微任务的回调函数，例如 Promise.then、MutationObserver 等。</p>`,`<p>事件循环的执行顺序如下：</p>
<ul>
<li>执行调用栈中的同步代码。</li>
<li>执行微任务队列中的所有任务，直到队列为空。</li>
<li>更新渲染（如果需要）。</li>
<li>从宏任务队列中取出一个任务执行。</li>
<li>重复上述步骤</li>
</ul>`,"<p>宏任务 → 微任务 → ✅ 渲染 → 下一个宏任务</p>",`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><!--::markdown-it-async::10ppniygq46arxf6kaw702s::--><code>┌────────────────────────────┐
│       1. 取一个宏任务       │ (如 script, I/O, setTimeout 回调)
├────────────────────────────┤
│       2. 执行所有微任务     │ (Promise.then, MutationObserver)
├────────────────────────────┤
│       3. 执行渲染前钩子     │ (requestAnimationFrame)
├────────────────────────────┤
│       4. 执行渲染 / 绘制    │ (样式计算, 布局, 合成, 绘制)
├────────────────────────────┤
│       5. requestIdleCallback │ (如果有空闲)
├────────────────────────────┤
│       6. 下一个宏任务循环    │
└────────────────────────────┘
</code></pre>
</div>`,"<p><strong>宏任务 → 微任务 → rAF → 渲染 → idle → 下一宏任务</strong></p>"],reference:"/myKMS/interview/2025#_12-浏览器事件循环-网络请求是宏任务吗",source:"/myKMS/interview/2025"},{id:23,question:"页面的线程",answer:[`| 线程名称                               | 职责                                      | 是否并行  | 示例说明                    |
| ---------------------------------- | --------------------------------------- | ----- | ----------------------- |
| **主线程（Main Thread）**               | 执行 JS、解析 HTML、计算样式、布局（layout）、绘制（paint） | ❌ 单线程 | JS 运行、DOM 操作、重排、重绘都在此执行 |
| **渲染线程 / 合成线程（Compositor Thread）** | 接收绘制指令，合成图层生成最终画面                       | ✅ 可并行 | 负责 GPU 合成层的渲染，保证流畅动画    |
| **光栅化线程（Raster Thread）**           | 把图层位图栅格化（交给 GPU 绘制）                     | ✅ 多线程 | 将合成层绘制成像素输出             |
| **网络线程（Network Thread）**           | 处理网络请求（HTTP、WebSocket、fetch）            | ✅ 独立  | 不受主线程阻塞，可同时并发多个请求       |
| **IO 线程（Browser Process）**         | 管理文件、Cookie、缓存、输入输出等                    | ✅ 独立  | 负责硬盘 / 系统层交互            |
| **定时器线程（Timer Thread）**            | 管理定时器（setTimeout / setInterval）         | ✅ 独立  | 到期后把回调放回主线程事件队列执行       |
| **Web Worker 线程**                  | 执行耗时 JS 计算（不操作 DOM）                     | ✅ 多线程 | 后台计算、大文件处理、AI、解析任务      |
| **Service Worker 线程**              | 拦截请求、缓存资源、推送等                           | ✅ 独立  | PWA 核心线程，生命周期独立于页面      |
| **GPU 线程（GPU Process）**            | 负责页面绘制、图像合成、3D 渲染                       | ✅ 独立  | 合成层最终交由 GPU 渲染输出        |`,"**JS、DOM、CSSOM、Layout、Paint、事件响应、垃圾回收（GC）都在主线程中执行。**","因此：当 JS 执行时间过长时（例如死循环 / 大量同步逻辑），会阻塞渲染 → 页面卡顿。当频繁修改 DOM、触发布局重排（Reflow）、重绘（Repaint）时，主线程负载增加 → FPS 下降。","✅ 这就是为什么浏览器看似“多线程”，但 JS 执行仍是单线程的根本原因：JS 与渲染共用主线程，为了避免线程竞争 DOM。"],answerHtml:[`<table tabindex="0">
<thead>
<tr>
<th>线程名称</th>
<th>职责</th>
<th>是否并行</th>
<th>示例说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>主线程（Main Thread）</strong></td>
<td>执行 JS、解析 HTML、计算样式、布局（layout）、绘制（paint）</td>
<td>❌ 单线程</td>
<td>JS 运行、DOM 操作、重排、重绘都在此执行</td>
</tr>
<tr>
<td><strong>渲染线程 / 合成线程（Compositor Thread）</strong></td>
<td>接收绘制指令，合成图层生成最终画面</td>
<td>✅ 可并行</td>
<td>负责 GPU 合成层的渲染，保证流畅动画</td>
</tr>
<tr>
<td><strong>光栅化线程（Raster Thread）</strong></td>
<td>把图层位图栅格化（交给 GPU 绘制）</td>
<td>✅ 多线程</td>
<td>将合成层绘制成像素输出</td>
</tr>
<tr>
<td><strong>网络线程（Network Thread）</strong></td>
<td>处理网络请求（HTTP、WebSocket、fetch）</td>
<td>✅ 独立</td>
<td>不受主线程阻塞，可同时并发多个请求</td>
</tr>
<tr>
<td><strong>IO 线程（Browser Process）</strong></td>
<td>管理文件、Cookie、缓存、输入输出等</td>
<td>✅ 独立</td>
<td>负责硬盘 / 系统层交互</td>
</tr>
<tr>
<td><strong>定时器线程（Timer Thread）</strong></td>
<td>管理定时器（setTimeout / setInterval）</td>
<td>✅ 独立</td>
<td>到期后把回调放回主线程事件队列执行</td>
</tr>
<tr>
<td><strong>Web Worker 线程</strong></td>
<td>执行耗时 JS 计算（不操作 DOM）</td>
<td>✅ 多线程</td>
<td>后台计算、大文件处理、AI、解析任务</td>
</tr>
<tr>
<td><strong>Service Worker 线程</strong></td>
<td>拦截请求、缓存资源、推送等</td>
<td>✅ 独立</td>
<td>PWA 核心线程，生命周期独立于页面</td>
</tr>
<tr>
<td><strong>GPU 线程（GPU Process）</strong></td>
<td>负责页面绘制、图像合成、3D 渲染</td>
<td>✅ 独立</td>
<td>合成层最终交由 GPU 渲染输出</td>
</tr>
</tbody>
</table>`,"<p><strong>JS、DOM、CSSOM、Layout、Paint、事件响应、垃圾回收（GC）都在主线程中执行。</strong></p>","<p>因此：当 JS 执行时间过长时（例如死循环 / 大量同步逻辑），会阻塞渲染 → 页面卡顿。当频繁修改 DOM、触发布局重排（Reflow）、重绘（Repaint）时，主线程负载增加 → FPS 下降。</p>","<p>✅ 这就是为什么浏览器看似“多线程”，但 JS 执行仍是单线程的根本原因：JS 与渲染共用主线程，为了避免线程竞争 DOM。</p>"],reference:"/myKMS/interview/2025#_13-页面的线程",source:"/myKMS/interview/2025"},{id:24,question:"ts type interface",answer:["- interface：适用于定义对象的结构，支持声明合并和扩展，便于面向对象编程。(推荐interface)","- type：适用于定义联合类型、交叉类型、元组等复杂类型，提供更强的表达能力","| 对比维度           | `interface`                 | `type`                  |\n| -------------- | --------------------------- | ----------------------- |\n| **语义**         | 描述“对象的结构”或“类的契约”            | 可定义任意类型（对象、联合、交叉、原始类型等） |\n| **扩展方式**       | 通过 `extends` 继承             | 通过 `&`（交叉类型）组合          |\n| **可合并性（声明合并）** | ✅ 可以多次定义同名接口，自动合并           | ❌ 不可重复声明同名 type         |\n| **能定义的类型范围**   | 仅限对象、函数、类结构                 | ✅ 可定义联合类型、交叉类型、条件类型、元组等 |\n| **实现关系**       | 类（class）可实现（`implements`）接口 | 类不能直接实现 `type`          |\n| **复杂类型表达**     | 不支持直接定义联合、映射等复杂类型           | ✅ 支持高级类型语法（联合、条件、映射等）   |\n| **兼容性**        | 更适合定义公共 API（库、类）            | 更灵活，适合组合与函数类型           |\n| **编译后表现**      | 不会生成 JS 代码，仅用于类型检查          | 同样仅存在于类型层               |","| 场景           | 推荐类型        | 理由           |\n| ------------ | ----------- | ------------ |\n| 定义对象结构 / 类契约 | `interface` | 语义更清晰、支持声明合并 |\n| 定义联合、交叉、映射类型 | `type`      | 表达力更强        |\n| 在公共库、类型声明文件中 | `interface` | 更好扩展性        |\n| 内部工具类型、组合类型  | `type`      | 更灵活简洁        |"],answerHtml:[`<ul>
<li>interface：适用于定义对象的结构，支持声明合并和扩展，便于面向对象编程。(推荐interface)</li>
</ul>`,`<ul>
<li>type：适用于定义联合类型、交叉类型、元组等复杂类型，提供更强的表达能力</li>
</ul>`,`<table tabindex="0">
<thead>
<tr>
<th>对比维度</th>
<th><code>interface</code></th>
<th><code>type</code></th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>语义</strong></td>
<td>描述“对象的结构”或“类的契约”</td>
<td>可定义任意类型（对象、联合、交叉、原始类型等）</td>
</tr>
<tr>
<td><strong>扩展方式</strong></td>
<td>通过 <code>extends</code> 继承</td>
<td>通过 <code>&amp;</code>（交叉类型）组合</td>
</tr>
<tr>
<td><strong>可合并性（声明合并）</strong></td>
<td>✅ 可以多次定义同名接口，自动合并</td>
<td>❌ 不可重复声明同名 type</td>
</tr>
<tr>
<td><strong>能定义的类型范围</strong></td>
<td>仅限对象、函数、类结构</td>
<td>✅ 可定义联合类型、交叉类型、条件类型、元组等</td>
</tr>
<tr>
<td><strong>实现关系</strong></td>
<td>类（class）可实现（<code>implements</code>）接口</td>
<td>类不能直接实现 <code>type</code></td>
</tr>
<tr>
<td><strong>复杂类型表达</strong></td>
<td>不支持直接定义联合、映射等复杂类型</td>
<td>✅ 支持高级类型语法（联合、条件、映射等）</td>
</tr>
<tr>
<td><strong>兼容性</strong></td>
<td>更适合定义公共 API（库、类）</td>
<td>更灵活，适合组合与函数类型</td>
</tr>
<tr>
<td><strong>编译后表现</strong></td>
<td>不会生成 JS 代码，仅用于类型检查</td>
<td>同样仅存在于类型层</td>
</tr>
</tbody>
</table>`,`<table tabindex="0">
<thead>
<tr>
<th>场景</th>
<th>推荐类型</th>
<th>理由</th>
</tr>
</thead>
<tbody>
<tr>
<td>定义对象结构 / 类契约</td>
<td><code>interface</code></td>
<td>语义更清晰、支持声明合并</td>
</tr>
<tr>
<td>定义联合、交叉、映射类型</td>
<td><code>type</code></td>
<td>表达力更强</td>
</tr>
<tr>
<td>在公共库、类型声明文件中</td>
<td><code>interface</code></td>
<td>更好扩展性</td>
</tr>
<tr>
<td>内部工具类型、组合类型</td>
<td><code>type</code></td>
<td>更灵活简洁</td>
</tr>
</tbody>
</table>`],reference:"/myKMS/interview/2025#_14-ts-type-interface",source:"/myKMS/interview/2025"},{id:25,question:"ts 泛型",answer:[`泛型（Generics） 是一种强大的特性，允许在定义函数、接口或类时不预先指定具体的类型，而在使用时再指定类型，从而实现类型的复用和灵活性。
泛型使得代码在处理不同类型的数据时，仍能保持类型安全。`,`泛型的优势
  - 类型安全：在编译时进行类型检查，避免运行时错误。
  - 代码复用：编写与特定类型无关的通用代码，提高代码的复用性。
  - 灵活性：根据实际需要指定类型，适应不同的数据类型和数据结构。`,`- 高级: 泛型约束, 默认泛型类型, 泛型与联合类型,
- **函数重载: 所谓函数重载就是同一个函数，根据传递的参数不同，会有不同的表现形式**
- never是其它类型(null undefined)的子类型，代表不会出现的值`],answerHtml:[`<p>泛型（Generics） 是一种强大的特性，允许在定义函数、接口或类时不预先指定具体的类型，而在使用时再指定类型，从而实现类型的复用和灵活性。
泛型使得代码在处理不同类型的数据时，仍能保持类型安全。</p>`,`<p>泛型的优势</p>
<ul>
<li>类型安全：在编译时进行类型检查，避免运行时错误。</li>
<li>代码复用：编写与特定类型无关的通用代码，提高代码的复用性。</li>
<li>灵活性：根据实际需要指定类型，适应不同的数据类型和数据结构。</li>
</ul>`,`<ul>
<li>高级: 泛型约束, 默认泛型类型, 泛型与联合类型,</li>
<li><strong>函数重载: 所谓函数重载就是同一个函数，根据传递的参数不同，会有不同的表现形式</strong></li>
<li>never是其它类型(null undefined)的子类型，代表不会出现的值</li>
</ul>`],reference:"/myKMS/interview/2025#_15-ts-泛型",source:"/myKMS/interview/2025"},{id:26,question:"从输入 URL 到页面渲染的完整流程, 说出自己的理解",answer:["当用户输入一个 URL 并回车，整个过程可以拆成 五个阶段：",`| 阶段        | 描述                                                        | 涉及层次  |
| --------- | --------------------------------------------------------- | ----- |
| 1️⃣ 地址解析  | URL 解析、缓存检查、DNS 查询、协议判断（HTTP/HTTPS）                       | 网络层   |
| 2️⃣ 建立连接  | TCP 三次握手、TLS 握手（HTTPS）                                    | 传输层   |
| 3️⃣ 发送请求  | HTTP 请求报文构造与发送                                            | 应用层   |
| 4️⃣ 服务器响应 | 服务端处理并返回 HTML/CSS/JS/图片等资源                                | 服务端   |
| 5️⃣ 浏览器渲染 | 构建 DOM / CSSOM / Render Tree / Layout / Paint / Composite | 浏览器内核 |`,"1. URL 解析与 DNS 查询","流程：",`- 浏览器解析输入内容（判断是搜索词还是 URL）；
- 检查本地缓存（DNS 缓存、hosts 文件）；
- 若无缓存，向本地 DNS 服务器递归/迭代查询；
- 得到目标 IP。`,"可以优化的点",`| 优化项                                                          | 说明               |
| ------------------------------------------------------------ | ---------------- |
| ✅ 使用 CDN                                                     | 缩短 DNS 路径与物理距离   |
| ✅ DNS 预解析 (\`<link rel="dns-prefetch" href="//example.com">\`) | 提前解析域名           |
| ✅ 减少跨域请求                                                     | 减少不同域名下的资源请求数    |
| ✅ 服务端启用 HTTP/2                                               | 复用连接，减少 DNS 解析次数 |`,"2. 建立 TCP / TLS 连接",`流程：
- TCP 三次握手；
- 若 HTTPS：还需 TLS 握手（证书验证、密钥协商）；
- 建立安全连接。`,"可以优化的点:",`| 优化项                   | 说明          |
| --------------------- | ----------- |
| ✅ 开启 HTTP/2 or HTTP/3 | 多路复用，减少握手消耗 |
| ✅ 复用连接（Keep-Alive）    | 减少新连接建立的开销  |
| ✅ TLS 1.3             | 减少握手 RTT 次数 |
| ✅ 使用 CDN 边缘节点         | 减少物理延迟      |`,"3. 发送 HTTP 请求",`流程：
- 浏览器构造请求头；
- 附带 cookie / token；
- 发送到服务器。`,`可以优化的点:
| 优化项                             | 说明           |
| ------------------------------- | ------------ |
| ✅ 压缩请求头（HTTP/2）                 | 减少 header 体积 |
| ✅ 合理使用缓存头（ETag / Cache-Control） | 减少重复请求       |
| ✅ 精简 Cookie                     | 减少请求体积       |
| ✅ 使用 POST/GET 正确语义              | 避免误用         |`,"4. 服务器响应阶段",`流程：
- 服务器解析请求；
- 调用后端逻辑 / 查询数据库；
- 渲染模板（SSR 或返回静态文件）；
- 返回响应体（HTML、CSS、JS、图片等）`,`可以优化的点:
| 优化项                                 | 说明        |
| ----------------------------------- | --------- |
| ✅ 静态化 / CDN 缓存                      | HTML/资源分发 |
| ✅ SSR / SSG                         | 加快首屏渲染    |
| ✅ 接口聚合 / GraphQL                    | 减少多次请求    |
| ✅ 压缩响应（Gzip/Brotli）                 | 减小传输体积    |
| ✅ 分片传输 (Transfer-Encoding: chunked) | 边传输边渲染    |`,"5. 浏览器渲染阶段","5.1 构建 DOM","- 解析 HTML → 生成 DOM 树；\n  - `<script>` 会阻塞解析（除非 async 或 defer）。",`优化：
  - defer / async 加载 JS；
  - HTML 压缩；
  - 优化首屏 HTML 结构（避免过多嵌套）；
  - 将不关键的脚本延迟加载。`,"5.2 构建 CSSOM",`- 下载并解析 CSS；
  - 与 DOM 合并成 Render Tree。`,"优化：",`- 减少外链 CSS；
  - 使用关键路径渲染优化（Critical CSS）；
  - 避免复杂选择器；
  - 使用 <link rel="preload"> 预加载关键 CSS。`,"5.3 Render Tree → Layout → Paint → Composite",`- Layout：计算每个节点的几何位置；
  - Paint：绘制像素；
  - Composite：合成层，GPU 加速渲染。`,`| 优化项                       | 原理                                   |
| ------------------------- | ------------------------------------ |
| ✅ 减少重排重绘                  | 避免频繁修改 layout 属性（如 \`width\`、\`height\`） |
| ✅ 使用 transform/opacity 动画 | 利用 GPU 合成层                           |
| ✅ 合理使用 will-change        | 告诉浏览器提前优化渲染层                         |
| ✅ 懒加载图片与组件                | 降低首屏压力                               |
| ✅ 使用虚拟列表                  | 优化长列表性能                              |`,`整体性能优化策略总结: 
| 阶段 | 关键优化方向                            |
| -- | --------------------------------- |
| 网络 | DNS 缓存、HTTP/2、CDN、Keep-Alive      |
| 请求 | 缓存策略、资源合并与压缩                      |
| 传输 | Gzip/Brotli 压缩、分片传输               |
| 渲染 | 异步加载、懒加载、Critical CSS、DOM 优化      |
| 交互 | Debounce/Throttle、GPU 动画、虚拟滚动     |
| 构建 | Tree-shaking、Code Splitting、懒加载模块 |`,`可量化的指标（Web Vitals）
| 指标                                 | 说明       | 理想值     |
| ---------------------------------- | -------- | ------- |
| **LCP** (Largest Contentful Paint) | 最大内容渲染时间 | < 2.5s  |
| **FID** (First Input Delay)        | 首次交互延迟   | < 100ms |
| **CLS** (Cumulative Layout Shift)  | 页面布局稳定性  | < 0.1   |
| **TTFB** (Time to First Byte)      | 首字节时间    | < 0.8s  |
| **FCP** (First Contentful Paint)   | 首次内容绘制   | < 1.8s  |`],answerHtml:["<p>当用户输入一个 URL 并回车，整个过程可以拆成 五个阶段：</p>",`<table tabindex="0">
<thead>
<tr>
<th>阶段</th>
<th>描述</th>
<th>涉及层次</th>
</tr>
</thead>
<tbody>
<tr>
<td>1️⃣ 地址解析</td>
<td>URL 解析、缓存检查、DNS 查询、协议判断（HTTP/HTTPS）</td>
<td>网络层</td>
</tr>
<tr>
<td>2️⃣ 建立连接</td>
<td>TCP 三次握手、TLS 握手（HTTPS）</td>
<td>传输层</td>
</tr>
<tr>
<td>3️⃣ 发送请求</td>
<td>HTTP 请求报文构造与发送</td>
<td>应用层</td>
</tr>
<tr>
<td>4️⃣ 服务器响应</td>
<td>服务端处理并返回 HTML/CSS/JS/图片等资源</td>
<td>服务端</td>
</tr>
<tr>
<td>5️⃣ 浏览器渲染</td>
<td>构建 DOM / CSSOM / Render Tree / Layout / Paint / Composite</td>
<td>浏览器内核</td>
</tr>
</tbody>
</table>`,`<ol>
<li>URL 解析与 DNS 查询</li>
</ol>`,"<p>流程：</p>",`<ul>
<li>浏览器解析输入内容（判断是搜索词还是 URL）；</li>
<li>检查本地缓存（DNS 缓存、hosts 文件）；</li>
<li>若无缓存，向本地 DNS 服务器递归/迭代查询；</li>
<li>得到目标 IP。</li>
</ul>`,"<p>可以优化的点</p>",`<table tabindex="0">
<thead>
<tr>
<th>优化项</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>✅ 使用 CDN</td>
<td>缩短 DNS 路径与物理距离</td>
</tr>
<tr>
<td>✅ DNS 预解析 (<code>&lt;link rel=&quot;dns-prefetch&quot; href=&quot;//example.com&quot;&gt;</code>)</td>
<td>提前解析域名</td>
</tr>
<tr>
<td>✅ 减少跨域请求</td>
<td>减少不同域名下的资源请求数</td>
</tr>
<tr>
<td>✅ 服务端启用 HTTP/2</td>
<td>复用连接，减少 DNS 解析次数</td>
</tr>
</tbody>
</table>`,`<ol start="2">
<li>建立 TCP / TLS 连接</li>
</ol>`,`<p>流程：</p>
<ul>
<li>TCP 三次握手；</li>
<li>若 HTTPS：还需 TLS 握手（证书验证、密钥协商）；</li>
<li>建立安全连接。</li>
</ul>`,"<p>可以优化的点:</p>",`<table tabindex="0">
<thead>
<tr>
<th>优化项</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>✅ 开启 HTTP/2 or HTTP/3</td>
<td>多路复用，减少握手消耗</td>
</tr>
<tr>
<td>✅ 复用连接（Keep-Alive）</td>
<td>减少新连接建立的开销</td>
</tr>
<tr>
<td>✅ TLS 1.3</td>
<td>减少握手 RTT 次数</td>
</tr>
<tr>
<td>✅ 使用 CDN 边缘节点</td>
<td>减少物理延迟</td>
</tr>
</tbody>
</table>`,`<ol start="3">
<li>发送 HTTP 请求</li>
</ol>`,`<p>流程：</p>
<ul>
<li>浏览器构造请求头；</li>
<li>附带 cookie / token；</li>
<li>发送到服务器。</li>
</ul>`,`<p>可以优化的点:</p>
<table tabindex="0">
<thead>
<tr>
<th>优化项</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>✅ 压缩请求头（HTTP/2）</td>
<td>减少 header 体积</td>
</tr>
<tr>
<td>✅ 合理使用缓存头（ETag / Cache-Control）</td>
<td>减少重复请求</td>
</tr>
<tr>
<td>✅ 精简 Cookie</td>
<td>减少请求体积</td>
</tr>
<tr>
<td>✅ 使用 POST/GET 正确语义</td>
<td>避免误用</td>
</tr>
</tbody>
</table>`,`<ol start="4">
<li>服务器响应阶段</li>
</ol>`,`<p>流程：</p>
<ul>
<li>服务器解析请求；</li>
<li>调用后端逻辑 / 查询数据库；</li>
<li>渲染模板（SSR 或返回静态文件）；</li>
<li>返回响应体（HTML、CSS、JS、图片等）</li>
</ul>`,`<p>可以优化的点:</p>
<table tabindex="0">
<thead>
<tr>
<th>优化项</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>✅ 静态化 / CDN 缓存</td>
<td>HTML/资源分发</td>
</tr>
<tr>
<td>✅ SSR / SSG</td>
<td>加快首屏渲染</td>
</tr>
<tr>
<td>✅ 接口聚合 / GraphQL</td>
<td>减少多次请求</td>
</tr>
<tr>
<td>✅ 压缩响应（Gzip/Brotli）</td>
<td>减小传输体积</td>
</tr>
<tr>
<td>✅ 分片传输 (Transfer-Encoding: chunked)</td>
<td>边传输边渲染</td>
</tr>
</tbody>
</table>`,`<ol start="5">
<li>浏览器渲染阶段</li>
</ol>`,"<p>5.1 构建 DOM</p>",`<ul>
<li>解析 HTML → 生成 DOM 树；
<ul>
<li><code>&lt;script&gt;</code> 会阻塞解析（除非 async 或 defer）。</li>
</ul>
</li>
</ul>`,`<p>优化：</p>
<ul>
<li>defer / async 加载 JS；</li>
<li>HTML 压缩；</li>
<li>优化首屏 HTML 结构（避免过多嵌套）；</li>
<li>将不关键的脚本延迟加载。</li>
</ul>`,"<p>5.2 构建 CSSOM</p>",`<ul>
<li>下载并解析 CSS；
<ul>
<li>与 DOM 合并成 Render Tree。</li>
</ul>
</li>
</ul>`,"<p>优化：</p>",`<ul>
<li>减少外链 CSS；
<ul>
<li>使用关键路径渲染优化（Critical CSS）；</li>
<li>避免复杂选择器；</li>
<li>使用 <link rel="preload"> 预加载关键 CSS。</li>
</ul>
</li>
</ul>`,"<p>5.3 Render Tree → Layout → Paint → Composite</p>",`<ul>
<li>Layout：计算每个节点的几何位置；
<ul>
<li>Paint：绘制像素；</li>
<li>Composite：合成层，GPU 加速渲染。</li>
</ul>
</li>
</ul>`,`<table tabindex="0">
<thead>
<tr>
<th>优化项</th>
<th>原理</th>
</tr>
</thead>
<tbody>
<tr>
<td>✅ 减少重排重绘</td>
<td>避免频繁修改 layout 属性（如 <code>width</code>、<code>height</code>）</td>
</tr>
<tr>
<td>✅ 使用 transform/opacity 动画</td>
<td>利用 GPU 合成层</td>
</tr>
<tr>
<td>✅ 合理使用 will-change</td>
<td>告诉浏览器提前优化渲染层</td>
</tr>
<tr>
<td>✅ 懒加载图片与组件</td>
<td>降低首屏压力</td>
</tr>
<tr>
<td>✅ 使用虚拟列表</td>
<td>优化长列表性能</td>
</tr>
</tbody>
</table>`,`<p>整体性能优化策略总结:</p>
<table tabindex="0">
<thead>
<tr>
<th>阶段</th>
<th>关键优化方向</th>
</tr>
</thead>
<tbody>
<tr>
<td>网络</td>
<td>DNS 缓存、HTTP/2、CDN、Keep-Alive</td>
</tr>
<tr>
<td>请求</td>
<td>缓存策略、资源合并与压缩</td>
</tr>
<tr>
<td>传输</td>
<td>Gzip/Brotli 压缩、分片传输</td>
</tr>
<tr>
<td>渲染</td>
<td>异步加载、懒加载、Critical CSS、DOM 优化</td>
</tr>
<tr>
<td>交互</td>
<td>Debounce/Throttle、GPU 动画、虚拟滚动</td>
</tr>
<tr>
<td>构建</td>
<td>Tree-shaking、Code Splitting、懒加载模块</td>
</tr>
</tbody>
</table>`,`<p>可量化的指标（Web Vitals）</p>
<table tabindex="0">
<thead>
<tr>
<th>指标</th>
<th>说明</th>
<th>理想值</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>LCP</strong> (Largest Contentful Paint)</td>
<td>最大内容渲染时间</td>
<td>&lt; 2.5s</td>
</tr>
<tr>
<td><strong>FID</strong> (First Input Delay)</td>
<td>首次交互延迟</td>
<td>&lt; 100ms</td>
</tr>
<tr>
<td><strong>CLS</strong> (Cumulative Layout Shift)</td>
<td>页面布局稳定性</td>
<td>&lt; 0.1</td>
</tr>
<tr>
<td><strong>TTFB</strong> (Time to First Byte)</td>
<td>首字节时间</td>
<td>&lt; 0.8s</td>
</tr>
<tr>
<td><strong>FCP</strong> (First Contentful Paint)</td>
<td>首次内容绘制</td>
<td>&lt; 1.8s</td>
</tr>
</tbody>
</table>`],reference:"/myKMS/interview/2025#_16-从输入-url-到页面渲染的完整流程-说出自己的理解",source:"/myKMS/interview/2025"},{id:27,question:"缓存",answer:["浏览器 / 缓存层（代理、CDN）会将服务器响应保存起来，当下次请求相同资源时可直接从缓存中返回，而不必到服务器取。这样可以减少网络延迟和服务器负荷。","- 新鲜度判断（Freshness） vs 验证（Validation）",`- 新鲜（Fresh）：在有效期内，缓存可直接返回给客户端。
  - 陈旧（Stale）：资源已过有效期，需要验证是否更新（例如通过 ETag / Last-Modified）或强制重新下载。`,"验证机制：客户端发送条件请求（If-None-Match, If-Modified-Since），服务器如资源未变返回 304 Not Modified 让客户端继续用缓存。","- 缓存作用域","- 私有缓存（Private Cache）：如浏览器本地缓存，仅对单个用户可见。","- 共享缓存（Shared Cache / Proxy / CDN）：CDN / 代理服务器等中间缓存，可被多个用户共享。对于涉及用户隐私或基于 cookie 的响应，要限制这类缓存",`- no-cache ≠ “不缓存” —— 它允许缓存储存，但使用前必须验证。
- no-store 是“不储存”的真正指令，但不会清除已经缓存的旧数据。
- Expires 比较老旧，现代多数场景用 cache-control 的 max-age。
- 实践中: 一般index.html 都是 no-store no-cache 的, 其他静态资源都是设置长缓存的.`],answerHtml:["<p>浏览器 / 缓存层（代理、CDN）会将服务器响应保存起来，当下次请求相同资源时可直接从缓存中返回，而不必到服务器取。这样可以减少网络延迟和服务器负荷。</p>",`<ul>
<li>新鲜度判断（Freshness） vs 验证（Validation）</li>
</ul>`,`<ul>
<li>新鲜（Fresh）：在有效期内，缓存可直接返回给客户端。
<ul>
<li>陈旧（Stale）：资源已过有效期，需要验证是否更新（例如通过 ETag / Last-Modified）或强制重新下载。</li>
</ul>
</li>
</ul>`,"<p>验证机制：客户端发送条件请求（If-None-Match, If-Modified-Since），服务器如资源未变返回 304 Not Modified 让客户端继续用缓存。</p>",`<ul>
<li>缓存作用域</li>
</ul>`,`<ul>
<li>私有缓存（Private Cache）：如浏览器本地缓存，仅对单个用户可见。</li>
</ul>`,`<ul>
<li>共享缓存（Shared Cache / Proxy / CDN）：CDN / 代理服务器等中间缓存，可被多个用户共享。对于涉及用户隐私或基于 cookie 的响应，要限制这类缓存</li>
</ul>`,`<ul>
<li>no-cache ≠ “不缓存” —— 它允许缓存储存，但使用前必须验证。</li>
<li>no-store 是“不储存”的真正指令，但不会清除已经缓存的旧数据。</li>
<li>Expires 比较老旧，现代多数场景用 cache-control 的 max-age。</li>
<li>实践中: 一般index.html 都是 no-store no-cache 的, 其他静态资源都是设置长缓存的.</li>
</ul>`],reference:"/myKMS/interview/2025#_19-缓存",source:"/myKMS/interview/2025"},{id:28,question:"组件 key 改变和 props 改变有什么区别",answer:["| 变化类型                 | 对组件实例的影响                      | 生命周期                                                                                             | state 是否保留        | 主要使用场景                              |\n| ------------------------ | ------------------------------------- | ---------------------------------------------------------------------------------------------------- | --------------------- | ----------------------------------------- |\n| **key 改变**             | **卸载旧组件 → 挂载新组件**（实例被销毁并重建） | 先触发旧组件的 `componentWillUnmount` / `useEffect` 的 cleanup，再触发新组件的 `constructor` → `render` → `useEffect` | **不会保留**（因为是全新实例） | 当需要强制重新初始化组件（比如重置表单、重新加载数据） |\n| **props 改变（key 不变）** | **复用原组件实例**                     | 触发 `shouldComponentUpdate`（如有）/ `render` / 更新后的 `useEffect`                                  | **会保留**（除非代码主动重置） | 正常的属性更新：列表内容变化、UI 随数据更新 |","#### 核心思想",`- key 是身份标签：一变就换人（卸载 + 重建）。
- props 是输入数据：只变数据，不换人（实例保留）。`,"##### 一句话总结",`- 需要强制重新初始化组件（如清空表单、重新加载动画）时，用 key；
- 仅需更新组件展示的数据时，修改 props 即可。`,"#### 深入: props 引用没变 vs 引用改变",`- props 引用没变
  - 父组件重新渲染，但 data 对象引用没变。
  - React 认为 props 没有变化，子组件如果是 React.memo，不会重新渲染。
  - state 保留，useEffect 依赖不会触发（如果依赖该 prop）。`,`- props 引用改变
  - 每次父组件渲染都会生成新对象。
  - 即使内容相同，引用改变 → React 认为 props 改变。
  - React.memo 会触发重新渲染。
  - useEffect 依赖该 prop 也会重新执行。`],answerHtml:[`<table tabindex="0">
<thead>
<tr>
<th>变化类型</th>
<th>对组件实例的影响</th>
<th>生命周期</th>
<th>state 是否保留</th>
<th>主要使用场景</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>key 改变</strong></td>
<td><strong>卸载旧组件 → 挂载新组件</strong>（实例被销毁并重建）</td>
<td>先触发旧组件的 <code>componentWillUnmount</code> / <code>useEffect</code> 的 cleanup，再触发新组件的 <code>constructor</code> → <code>render</code> → <code>useEffect</code></td>
<td><strong>不会保留</strong>（因为是全新实例）</td>
<td>当需要强制重新初始化组件（比如重置表单、重新加载数据）</td>
</tr>
<tr>
<td><strong>props 改变（key 不变）</strong></td>
<td><strong>复用原组件实例</strong></td>
<td>触发 <code>shouldComponentUpdate</code>（如有）/ <code>render</code> / 更新后的 <code>useEffect</code></td>
<td><strong>会保留</strong>（除非代码主动重置）</td>
<td>正常的属性更新：列表内容变化、UI 随数据更新</td>
</tr>
</tbody>
</table>`,'<h4 id="核心思想" tabindex="-1">核心思想 <a class="header-anchor" href="#核心思想" aria-label="Permalink to “核心思想”">&#8203;</a></h4>',`<ul>
<li>key 是身份标签：一变就换人（卸载 + 重建）。</li>
<li>props 是输入数据：只变数据，不换人（实例保留）。</li>
</ul>`,'<h5 id="一句话总结" tabindex="-1">一句话总结 <a class="header-anchor" href="#一句话总结" aria-label="Permalink to “一句话总结”">&#8203;</a></h5>',`<ul>
<li>需要强制重新初始化组件（如清空表单、重新加载动画）时，用 key；</li>
<li>仅需更新组件展示的数据时，修改 props 即可。</li>
</ul>`,'<h4 id="深入-props-引用没变-vs-引用改变" tabindex="-1">深入: props 引用没变 vs 引用改变 <a class="header-anchor" href="#深入-props-引用没变-vs-引用改变" aria-label="Permalink to “深入: props 引用没变 vs 引用改变”">&#8203;</a></h4>',`<ul>
<li>props 引用没变
<ul>
<li>父组件重新渲染，但 data 对象引用没变。</li>
<li>React 认为 props 没有变化，子组件如果是 React.memo，不会重新渲染。</li>
<li>state 保留，useEffect 依赖不会触发（如果依赖该 prop）。</li>
</ul>
</li>
</ul>`,`<ul>
<li>props 引用改变
<ul>
<li>每次父组件渲染都会生成新对象。</li>
<li>即使内容相同，引用改变 → React 认为 props 改变。</li>
<li>React.memo 会触发重新渲染。</li>
<li>useEffect 依赖该 prop 也会重新执行。</li>
</ul>
</li>
</ul>`],reference:"/myKMS/interview/2025#_20-组件-key-改变和-props-改变有什么区别",source:"/myKMS/interview/2025"},{id:29,question:"react form 里面非受控组件 如何对应上值的改变",answer:["| 方式    | 数据存放        | 值变化的响应                       | 外部值改变时                             |\n| ----- | ----------- | ---------------------------- | ---------------------------------- |\n| 受控组件  | React state | `onChange` → setState → 重新渲染 | 直接受 state 驱动，值自动更新                 |\n| 非受控组件 | DOM 元素内部    | 通过 `ref` 读取                  | 需要用 `ref.current.value = ...` 手动更新 |","总结",`- 非受控组件默认不会随着 props 变化而更新。
- 如果想同步外部变化：
  - 用 ref + useEffect 直接赋值给 DOM。
  - 或者通过改变 key 来强制重建。
  - 如果频繁需要同步外部数据，最好改用 受控组件`],answerHtml:[`<table tabindex="0">
<thead>
<tr>
<th>方式</th>
<th>数据存放</th>
<th>值变化的响应</th>
<th>外部值改变时</th>
</tr>
</thead>
<tbody>
<tr>
<td>受控组件</td>
<td>React state</td>
<td><code>onChange</code> → setState → 重新渲染</td>
<td>直接受 state 驱动，值自动更新</td>
</tr>
<tr>
<td>非受控组件</td>
<td>DOM 元素内部</td>
<td>通过 <code>ref</code> 读取</td>
<td>需要用 <code>ref.current.value = ...</code> 手动更新</td>
</tr>
</tbody>
</table>`,"<p>总结</p>",`<ul>
<li>非受控组件默认不会随着 props 变化而更新。</li>
<li>如果想同步外部变化：
<ul>
<li>用 ref + useEffect 直接赋值给 DOM。</li>
<li>或者通过改变 key 来强制重建。</li>
<li>如果频繁需要同步外部数据，最好改用 受控组件</li>
</ul>
</li>
</ul>`],reference:"/myKMS/interview/2025#_26-react-form-里面非受控组件-如何对应上值的改变",source:"/myKMS/interview/2025"},{id:30,question:"antd form是如何控制内部组件的value的",answer:["基于 v4+ 分析","##### 总体设计思路","Antd Form 并不是简单地把 `<Form.Item>` 里的 `<Input>` 当作受控组件包一层，而是自己实现了一套 “表单状态管理 + 受控注入” 机制。\n核心：",`- Form 内部维护一个 FormStore（字段名 → 值 的状态）。
- 每个 \`<Form.Item>\` 都会通过 Context 注册到 FormStore。
- FormStore 变化后，通过 Context + forceUpdate 通知对应 Form.Item 重新渲染。
- Form.Item 渲染时，会把 value 和 onChange 注入到子组件，实现受控。`,"典型用法:",`\`\`\`jsx
<Form form={form} initialValues={{ username: 'Tom' }}>
  <Form.Item name="username">
    <Input />
  </Form.Item>
</Form>
\`\`\``,"对应关系：",`\`\`\`js
<Form>           —— 维护 FormStore（字段状态）
   │
   └─<FormContext.Provider>  —— 提供 Store 和订阅方法
        │
        └─<Form.Item name="username"> —— 注册字段
              │
              └─ cloneElement(<Input>, {value, onChange})
\`\`\``,"1. 流程详解",`- 1. FormStore
  - Form 创建时，内部有一个 store = {} 保存所有字段的值。
  - 提供方法：
    - getFieldValue(name) / getFieldsValue()
    - setFieldValue(name, value)
    - subscribe(callback) 订阅字段变化
    - Form.useForm() 返回的就是对这个 Store 的引用`,'- 2.Form.Item 注册字段\n  - `<Form.Item name="username">` 渲染时，会通过 Context 把 name 注册到 Store。\n  - 它会订阅对应字段，当该字段值变化时触发 forceUpdate() 来重新渲染该 Item。',"- 3. 克隆子节点注入受控属性\n  - 渲染时，Form.Item 会用 React.cloneElement 给子组件（如 `<Input />`）注入：",`\`\`\`js
    {
    value: store[name],
    onChange: (e) => {
      const newValue = e && e.target ? e.target.value : e;
      store.setFieldValue(name, newValue);
    }
  }
  \`\`\``,`- 这样，子组件（比如 antd Input）变成了 FormStore 受控的受控组件。
  - ***自定义组件支持接收value,onChange属性即可***
  - 如果原本子组件自己也传了 value 和 onChange，Form.Item 会合并，但以 Form 为主。
  - 因此，用 antd Form 时，不需要再手动写 value 和 onChange。`,`- 4. 触发更新
  - 用户在 Input 中输入：
    - 1. Input 调用 onChange → store.setFieldValue(name, newValue)
    - 2. Store 更新值后通知所有订阅者（相关 Form.Item）
    - 3. 对应 Form.Item forceUpdate()，重新渲染，给 Input 新的 value
    - 从而保证 Input 的显示值始终与 FormStore 中的值同步。
- 5.特殊场景
  - initialValues：初始渲染时写入 Store，Form.Item 会读取。
  - setFieldsValue / resetFields：调用这些 API 时直接改 Store → 通知订阅 → 触发 Form.Item 更新。
  - dependencies：依赖项变化时重新渲染 Form.Item。
  - shouldUpdate：控制 Form.Item 是否重新渲染。`,"受控与非受控的对比",`| 特性   | 普通非受控表单              | antd Form 内部机制                     |
| ---- | -------------------- | ---------------------------------- |
| 值存放  | DOM（通过 defaultValue） | FormStore（JS 对象）                   |
| 组件更新 | 用户输入不会触发 React 重新渲染  | 每次输入都更新 Store 并触发 Form.Item 重渲染    |
| 外部控制 | 需要 ref 手动更新 DOM      | 用 \`form.setFieldsValue()\` 即可更新所有字段 |`,`👉 可以认为：
  **Antd Form 把所有字段都变成了受控组件，并用集中式 Store 管理。**`,"**总结**",`- 核心机制：**集中式 FormStore 管理所有字段。**
- 关键手段：Form.Item 通过 Context 注册并订阅字段变化。
- 数据流：
  - 外部调用 setFieldsValue 或用户输入 → 更新 Store → 通知 Form.Item → 渲染子组件 → 子组件显示最新值。
- 因此，antd Form 里的 Input、Select、Checkbox 等都是受控的，值完全由 FormStore 决定。`],answerHtml:["<p>基于 v4+ 分析</p>",'<h5 id="总体设计思路" tabindex="-1">总体设计思路 <a class="header-anchor" href="#总体设计思路" aria-label="Permalink to “总体设计思路”">&#8203;</a></h5>',`<p>Antd Form 并不是简单地把 <code>&lt;Form.Item&gt;</code> 里的 <code>&lt;Input&gt;</code> 当作受控组件包一层，而是自己实现了一套 “表单状态管理 + 受控注入” 机制。
核心：</p>`,`<ul>
<li>Form 内部维护一个 FormStore（字段名 → 值 的状态）。</li>
<li>每个 <code>&lt;Form.Item&gt;</code> 都会通过 Context 注册到 FormStore。</li>
<li>FormStore 变化后，通过 Context + forceUpdate 通知对应 Form.Item 重新渲染。</li>
<li>Form.Item 渲染时，会把 value 和 onChange 注入到子组件，实现受控。</li>
</ul>`,"<p>典型用法:</p>",`<div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre><!--::markdown-it-async::l15a7imeq4ljq8kjsdju7::--><code>&lt;Form form={form} initialValues={{ username: &#039;Tom&#039; }}&gt;
  &lt;Form.Item name=&quot;username&quot;&gt;
    &lt;Input /&gt;
  &lt;/Form.Item&gt;
&lt;/Form&gt;</code></pre>
</div>`,"<p>对应关系：</p>",`<div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><!--::markdown-it-async::eebnjqih5yfpr013grzn2::--><code>&lt;Form&gt;           —— 维护 FormStore（字段状态）
   │
   └─&lt;FormContext.Provider&gt;  —— 提供 Store 和订阅方法
        │
        └─&lt;Form.Item name=&quot;username&quot;&gt; —— 注册字段
              │
              └─ cloneElement(&lt;Input&gt;, {value, onChange})</code></pre>
</div>`,`<ol>
<li>流程详解</li>
</ol>`,`<ul>
<li>
<ol>
<li>FormStore</li>
</ol>
<ul>
<li>Form 创建时，内部有一个 store = {} 保存所有字段的值。</li>
<li>提供方法：
<ul>
<li>getFieldValue(name) / getFieldsValue()</li>
<li>setFieldValue(name, value)</li>
<li>subscribe(callback) 订阅字段变化</li>
<li>Form.useForm() 返回的就是对这个 Store 的引用</li>
</ul>
</li>
</ul>
</li>
</ul>`,`<ul>
<li>2.Form.Item 注册字段
<ul>
<li><code>&lt;Form.Item name=&quot;username&quot;&gt;</code> 渲染时，会通过 Context 把 name 注册到 Store。</li>
<li>它会订阅对应字段，当该字段值变化时触发 forceUpdate() 来重新渲染该 Item。</li>
</ul>
</li>
</ul>`,`<ul>
<li>
<ol start="3">
<li>克隆子节点注入受控属性</li>
</ol>
<ul>
<li>渲染时，Form.Item 会用 React.cloneElement 给子组件（如 <code>&lt;Input /&gt;</code>）注入：</li>
</ul>
</li>
</ul>`,`<div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><!--::markdown-it-async::f4pzs53mw3tgc1goqyhevw::--><code>    {
    value: store[name],
    onChange: (e) =&gt; {
      const newValue = e &amp;&amp; e.target ? e.target.value : e;
      store.setFieldValue(name, newValue);
    }
  }</code></pre>
</div>`,`<ul>
<li>这样，子组件（比如 antd Input）变成了 FormStore 受控的受控组件。
<ul>
<li><em><strong>自定义组件支持接收value,onChange属性即可</strong></em></li>
<li>如果原本子组件自己也传了 value 和 onChange，Form.Item 会合并，但以 Form 为主。</li>
<li>因此，用 antd Form 时，不需要再手动写 value 和 onChange。</li>
</ul>
</li>
</ul>`,`<ul>
<li>
<ol start="4">
<li>触发更新</li>
</ol>
<ul>
<li>用户在 Input 中输入：
<ul>
<li>
<ol>
<li>Input 调用 onChange → store.setFieldValue(name, newValue)</li>
</ol>
</li>
<li>
<ol start="2">
<li>Store 更新值后通知所有订阅者（相关 Form.Item）</li>
</ol>
</li>
<li>
<ol start="3">
<li>对应 Form.Item forceUpdate()，重新渲染，给 Input 新的 value</li>
</ol>
</li>
<li>从而保证 Input 的显示值始终与 FormStore 中的值同步。</li>
</ul>
</li>
</ul>
</li>
<li>5.特殊场景
<ul>
<li>initialValues：初始渲染时写入 Store，Form.Item 会读取。</li>
<li>setFieldsValue / resetFields：调用这些 API 时直接改 Store → 通知订阅 → 触发 Form.Item 更新。</li>
<li>dependencies：依赖项变化时重新渲染 Form.Item。</li>
<li>shouldUpdate：控制 Form.Item 是否重新渲染。</li>
</ul>
</li>
</ul>`,"<p>受控与非受控的对比</p>",`<table tabindex="0">
<thead>
<tr>
<th>特性</th>
<th>普通非受控表单</th>
<th>antd Form 内部机制</th>
</tr>
</thead>
<tbody>
<tr>
<td>值存放</td>
<td>DOM（通过 defaultValue）</td>
<td>FormStore（JS 对象）</td>
</tr>
<tr>
<td>组件更新</td>
<td>用户输入不会触发 React 重新渲染</td>
<td>每次输入都更新 Store 并触发 Form.Item 重渲染</td>
</tr>
<tr>
<td>外部控制</td>
<td>需要 ref 手动更新 DOM</td>
<td>用 <code>form.setFieldsValue()</code> 即可更新所有字段</td>
</tr>
</tbody>
</table>`,`<p>👉 可以认为：
<strong>Antd Form 把所有字段都变成了受控组件，并用集中式 Store 管理。</strong></p>`,"<p><strong>总结</strong></p>",`<ul>
<li>核心机制：<strong>集中式 FormStore 管理所有字段。</strong></li>
<li>关键手段：Form.Item 通过 Context 注册并订阅字段变化。</li>
<li>数据流：
<ul>
<li>外部调用 setFieldsValue 或用户输入 → 更新 Store → 通知 Form.Item → 渲染子组件 → 子组件显示最新值。</li>
</ul>
</li>
<li>因此，antd Form 里的 Input、Select、Checkbox 等都是受控的，值完全由 FormStore 决定。</li>
</ul>`],reference:"/myKMS/interview/2025#_27-antd-form是如何控制内部组件的value的",source:"/myKMS/interview/2025"},{id:31,question:"链式调用的任务调度器",answer:[`\`\`\`js
function arrange(name) {
  const queue = []

  const obj = {
    do(task) {
      queue.push({ first: false, fn: () => console.log(\`Start to \${task}\`) })
      return obj
    },
    wait(sec) {
      queue.push({ first: false, fn: () => new Promise(r => {
        console.log(\`等待 \${sec} 秒\`)
        setTimeout(r, sec * 1000)
      })})
      return obj
    },
    waitFirst(sec) {
      queue.push({ first: true, fn: () => new Promise(r => {
        console.log(\`等待 \${sec} 秒\`)
        setTimeout(r, sec * 1000)
      })})
      return obj
    },
    async execute() {
      // 先执行所有 waitFirst
      for (const t of queue.filter(t => t.first)) await t.fn()
      // 打印通知
      console.log(\`\${name} is notified\`)
      // 执行剩下的普通任务
      for (const t of queue.filter(t => !t.first)) {
        const res = t.fn()
        if (res instanceof Promise) await res
      }
    }
  }

  return obj
}
\`\`\``],answerHtml:[`<div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><!--::markdown-it-async::79xzix0x4msxby2xgkztyl::--><code>function arrange(name) {
  const queue = []

  const obj = {
    do(task) {
      queue.push({ first: false, fn: () =&gt; console.log(\`Start to \${task}\`) })
      return obj
    },
    wait(sec) {
      queue.push({ first: false, fn: () =&gt; new Promise(r =&gt; {
        console.log(\`等待 \${sec} 秒\`)
        setTimeout(r, sec * 1000)
      })})
      return obj
    },
    waitFirst(sec) {
      queue.push({ first: true, fn: () =&gt; new Promise(r =&gt; {
        console.log(\`等待 \${sec} 秒\`)
        setTimeout(r, sec * 1000)
      })})
      return obj
    },
    async execute() {
      // 先执行所有 waitFirst
      for (const t of queue.filter(t =&gt; t.first)) await t.fn()
      // 打印通知
      console.log(\`\${name} is notified\`)
      // 执行剩下的普通任务
      for (const t of queue.filter(t =&gt; !t.first)) {
        const res = t.fn()
        if (res instanceof Promise) await res
      }
    }
  }

  return obj
}</code></pre>
</div>`],reference:"/myKMS/interview/code#_2-链式调用的任务调度器",source:"/myKMS/interview/code"},{id:32,question:"从0到1新建一个React前端工程，并写一个页面，实现下面功能：上面有个2分钟的倒计时,倒计时下，有2个按钮，一个按钮可以暂停/恢复倒计时，另一个按钮可以减10秒倒计时,然后倒计时到0之后，出现一个秒杀新按钮. 进阶增加重新开始功能",answer:[`\`\`\`jsx
// 代码由github copilot 生成

import { useCallback, useEffect, useRef, useState } from "react";

const INITIAL = 120;

const Demo = () => {
  const [time, setTime] = useState(INITIAL);
  const [isStop, setStop] = useState(false);
  const t = useRef(null);

  // 提取清理函数，统一调用
  const clearTimer = useCallback(() => {
    if (t.current) {
      clearInterval(t.current);
      t.current = null;
    }
  }, []);

  useEffect(() => {
    // 如果暂停，清理定时器并返回
    if (isStop) {
      clearTimer();
      return;
    }

    // 已有定时器则不重复创建
    if (t.current) return;

    t.current = setInterval(() => {
      setTime((prev) => {
        if (prev <= 1) {
          // 到 0 时清理定时器并返回 0
          clearTimer();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // 卸载时清理
    return () => {
      clearTimer();
    };
  }, [isStop, clearTimer]);

  // 卸载时再确保清理（保险）
  useEffect(() => {
    return () => {
      clearTimer();
    };
  }, [clearTimer]);

  const stopAc = useCallback(() => {
    setStop((v) => !v);
  }, []);

  const down = useCallback(() => {
    setTime((t) => (t - 10 > 0 ? t - 10 : 0));
  }, []);

  // 重新开始：清理旧定时器、重置时间并立即启动新定时器
  const restart = useCallback(() => {
    clearTimer();
    setTime(INITIAL);
    setStop(false);

    // 立即启动新的定时器（与 useEffect 中逻辑一致）
    if (!t.current) {
      t.current = setInterval(() => {
        setTime((prev) => {
          if (prev <= 1) {
            clearTimer();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
  }, [clearTimer]);

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60)
      .toString()
      .padStart(2, "0");
    const s = (secs % 60).toString().padStart(2, "0");
    return \`\${m}:\${s}\`;
  };

  return (
    <>
      <div aria-live="polite" style={{ fontSize: 32, marginBottom: 12 }}>
        {formatTime(time)}
      </div>
      <button onClick={stopAc} aria-pressed={isStop}>
        {isStop ? "恢复" : "暂停"}
      </button>
      <button onClick={down} disabled={time === 0} aria-disabled={time === 0}>
        减10秒倒计时
      </button>
      <button onClick={restart} style={{ marginLeft: 8 }}>
        重新开始
      </button>
      {time === 0 ? <button aria-label="秒杀按钮">秒杀</button> : null}
    </>
  );
};

export default Demo;

\`\`\``],answerHtml:[`<div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre><!--::markdown-it-async::30mdqg4gdw7qc47p537ah::--><code>// 代码由github copilot 生成

import { useCallback, useEffect, useRef, useState } from &quot;react&quot;;

const INITIAL = 120;

const Demo = () =&gt; {
  const [time, setTime] = useState(INITIAL);
  const [isStop, setStop] = useState(false);
  const t = useRef(null);

  // 提取清理函数，统一调用
  const clearTimer = useCallback(() =&gt; {
    if (t.current) {
      clearInterval(t.current);
      t.current = null;
    }
  }, []);

  useEffect(() =&gt; {
    // 如果暂停，清理定时器并返回
    if (isStop) {
      clearTimer();
      return;
    }

    // 已有定时器则不重复创建
    if (t.current) return;

    t.current = setInterval(() =&gt; {
      setTime((prev) =&gt; {
        if (prev &lt;= 1) {
          // 到 0 时清理定时器并返回 0
          clearTimer();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // 卸载时清理
    return () =&gt; {
      clearTimer();
    };
  }, [isStop, clearTimer]);

  // 卸载时再确保清理（保险）
  useEffect(() =&gt; {
    return () =&gt; {
      clearTimer();
    };
  }, [clearTimer]);

  const stopAc = useCallback(() =&gt; {
    setStop((v) =&gt; !v);
  }, []);

  const down = useCallback(() =&gt; {
    setTime((t) =&gt; (t - 10 &gt; 0 ? t - 10 : 0));
  }, []);

  // 重新开始：清理旧定时器、重置时间并立即启动新定时器
  const restart = useCallback(() =&gt; {
    clearTimer();
    setTime(INITIAL);
    setStop(false);

    // 立即启动新的定时器（与 useEffect 中逻辑一致）
    if (!t.current) {
      t.current = setInterval(() =&gt; {
        setTime((prev) =&gt; {
          if (prev &lt;= 1) {
            clearTimer();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
  }, [clearTimer]);

  const formatTime = (secs) =&gt; {
    const m = Math.floor(secs / 60)
      .toString()
      .padStart(2, &quot;0&quot;);
    const s = (secs % 60).toString().padStart(2, &quot;0&quot;);
    return \`\${m}:\${s}\`;
  };

  return (
    &lt;&gt;
      &lt;div aria-live=&quot;polite&quot; style={{ fontSize: 32, marginBottom: 12 }}&gt;
        {formatTime(time)}
      &lt;/div&gt;
      &lt;button onClick={stopAc} aria-pressed={isStop}&gt;
        {isStop ? &quot;恢复&quot; : &quot;暂停&quot;}
      &lt;/button&gt;
      &lt;button onClick={down} disabled={time === 0} aria-disabled={time === 0}&gt;
        减10秒倒计时
      &lt;/button&gt;
      &lt;button onClick={restart} style={{ marginLeft: 8 }}&gt;
        重新开始
      &lt;/button&gt;
      {time === 0 ? &lt;button aria-label=&quot;秒杀按钮&quot;&gt;秒杀&lt;/button&gt; : null}
    &lt;/&gt;
  );
};

export default Demo;
</code></pre>
</div>`],reference:"/myKMS/interview/code#_3-从0到1新建一个react前端工程-并写一个页面-实现下面功能-上面有个2分钟的倒计时-倒计时下-有2个按钮-一个按钮可以暂停-恢复倒计时-另一个按钮可以减10秒倒计时-然后倒计时到0之后-出现一个秒杀新按钮-进阶增加重新开始功能",source:"/myKMS/interview/code"},{id:33,question:"防抖（debounce）",answer:[`\`\`\`js

function debounce(fn, wait = 300) {
  let timer = null;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, wait);
  };
}

\`\`\``],answerHtml:[`<div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><!--::markdown-it-async::tbsthekk3mpomc092ovq::--><code>
function debounce(fn, wait = 300) {
  let timer = null;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() =&gt; {
      fn.apply(this, args);
    }, wait);
  };
}
</code></pre>
</div>`],reference:"/myKMS/interview/code#_4-防抖-debounce",source:"/myKMS/interview/code"},{id:34,question:"节流（throttle）",answer:[`\`\`\`js

function throttle_timestamp(fn, wait) {
  let last = 0; // 上次执行时间（ms）

  return function (...args) {
    const now = Date.now();
    if (now - last >= wait) {
      last = now;
      fn.apply(this, args);
    }
  };
}


\`\`\``],answerHtml:[`<div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><!--::markdown-it-async::ovpo99a119zek8v1b06ye::--><code>
function throttle_timestamp(fn, wait) {
  let last = 0; // 上次执行时间（ms）

  return function (...args) {
    const now = Date.now();
    if (now - last &gt;= wait) {
      last = now;
      fn.apply(this, args);
    }
  };
}

</code></pre>
</div>`],reference:"/myKMS/interview/code#_5-节流-throttle",source:"/myKMS/interview/code"},{id:35,question:"手写 Promise",answer:[`\`\`\`js
class MyPromise {
        static PENDING = "pending";
        static RESOLVED = "resolved";
        static REJECTED = "rejected";
        constructor(executor) {
          this.status = MyPromise.PENDING;
          // resolve 的值
          this.value = null;
          // reject 的值
          this.reason = null;
          // then 成功回调
          this.onFulfilledQueues = [];
          // then 失败回调
          this.onRejectedQueues = [];

          // 执行成功回掉
          let resolve = (value) => {
            if (this.status === MyPromise.PENDING) {
              this.status = MyPromise.RESOLVED;
              this.value = value;
              // console.log("this.onFulfilledQueues", this.onFulfilledQueues);
              this.onFulfilledQueues.forEach((item) => {
                try {
                  item(value);
                } catch (err) {
                  reject(err);
                }
              });
            }
          };

          // 执行失败回掉
          let reject = (reason) => {
            if (this.status === MyPromise.PENDING) {
              this.status = MyPromise.REJECTED;
              this.reason = reason;
              this.onRejectedQueues.forEach((item) => {
                try {
                  item(value);
                } catch (err) {
                  reject(err);
                }
              });
            }
          };

          try {
            executor(resolve, reject);
          } catch (err) {
            reject(err);
          }
        }

        then(onFulfilled, onRejected) {
          onFulfilled =
            typeof onFulfilled === "function" ? onFulfilled : (value) => value;
          onRejected =
            typeof onRejected === "function"
              ? onRejected
              : (reason) => {
                  throw reason;
                };

          const promise = new MyPromise((res, rej) => {
            if (this.status === MyPromise.PENDING) {
              this.onFulfilledQueues.push((v) => res(onFulfilled(v)));
              this.onRejectedQueues.push((v) => rej(onRejected(v)));
            }
            // 状态是成功态，直接就调用 onFulfilled 函数
            if (this.status === MyPromise.RESOLVED) {
              res(onFulfilled(this.value));
            }

            // 状态是成功态，直接就调用 onRejected 函数
            if (this.status === MyPromise.REJECTED) {
              rej(onRejected(this.reason));
            }
          });

          return promise;
        }

        // 将多个 Promise 并行等待：所有都成功则返回按原数组顺序的结果数组，
        // 只要有一个失败则立即 reject（行为类似原生 Promise.all）
        // 参数：arr - Promise 实例数组
        // 返回：MyPromise，resolve(valueArray) / reject(firstError)
        static all(arr) {
          return new MyPromise((res, rej) => {
            let result = [];
            let count = 0;
            for (let i = 0; i < arr.length; i++) {
              arr[i].then(
                (d) => {
                  result[i] = d;
                  if (++count === arr.length) {
                    res(result);
                  }
                },
                (err) => {
                  rej(err);
                }
              );
            }
          });
        }
        // 竞速：返回第一个完成（resolve 或 reject）的结果（类似原生 Promise.race）
        // 参数：arr - Promise 实例数组
        // 返回：MyPromise，resolve(firstResolved) 或 reject(firstRejected)
      
        static race(arr) {
          return new MyPromise((res, rej) => {
            for (let i = 0; i < arr.length; i++) {
              arr[i].then(res, rej);
            }
          });
        }
        
        // allSettled：等待所有 Promise 都 settle（不论成功或失败）后返回结果集合
        // 参数：promises - Promise 实例数组
        // 返回：MyPromise，resolve(resultArray)
        // 说明：本实现将每个 Promise 的 finally 视作“完成”的回调点并把返回值放到结果数组，
        //       意味着结果数组项的结构取决于 finally 回调传入的值 —— 与原生 Promise.allSettled 返回
        //       的 {status, value/reason} 结构有所不同。调整以匹配原生行为可在 finally/then 中
        //       分别处理 fulfilled/rejected 情况。

        static allSettled(promises) {
          return new MyPromise((resolve) => {
            let result = [];
            let count = 0;
            for (let i = 0; i < promises.length; i++) {
              promises[i].finally((res) => {
                result[i] = res;
                if (++count == promises.length) {
                  resolve(result);
                }
              });
            }
          });
        }

        // any：只要有一个 Promise 成功就 resolve（值为第一个成功的结果），
        //      若全部失败则 reject，返回所有错误组成的数组（行为类似原生 Promise.any，
        //      但原生 Promise.any 在全部失败时会返回 AggregateError）
        // 参数：arr - Promise 实例数组
        // 返回：MyPromise，resolve(firstSuccess) 或 reject(errorArray)
 
        static any(arr) {
          return new MyPromise((res, rej) => {
            let result = [];
            let count = 0;
            for (let i = 0; i < arr.length; i++) {
              arr[i].then(
                (d) => {
                  res(d);
                },
                (err) => {
                  result[i] = err;
                  if (++count === arr.length) {
                    rej(result);
                  }
                }
              );
            }
          });
        }

        catch(rej) {
          return this.then(null, rej);
        }

        finally(res) {
          return this.then(res, res);
        }

        // map：限制并发数的 Promise 执行器
        // 参数：
        //   promises - Promise 实例数组（或返回 Promise 的函数数组，视使用场景）
        //   concurrency - 最大并发数（同时运行的 Promise 数量上限）
        // 返回：MyPromise，resolve(resultArray) 在所有 Promise 完成后触发
        // 算法要点：
        //  - 使用 nextIndex 指向下一个待启动的 Promise，下发任务时递增 nextIndex
        //  - 初始启动 concurrency 个任务；每当一个任务完成后（finally 回调），
        //    记录结果并启动下一个待办任务，从而始终保持并发数量不超过 concurrency
        //  - 通过 count 统计已完成任务数，全部完成后 resolve 最终结果数组
        // 注意：
        //  - 这里通过 promises[i].finally(...) 作为“完成”判定点，因此无论成功或失败都
        //    会触发后续调度；若需区分成功/失败并保留状态信息，需要在 finally/then 中
        //    对 result 数组项存储更丰富的对象（如 { status, value/reason }）

        static map(promises, concurrency) {
          // 返回一个新的 MyPromise
          return new MyPromise((resolve) => {
            let result = []; // 用于保存每个 Promise 的结果
            let count = 0; // 已完成的 Promise 数量
            let nextIndex = 0; // 下一个要启动的 Promise 下标

            // 并发执行的函数
            function run() {
              // 如果所有 Promise 都已启动，则直接返回
              if (nextIndex >= promises.length) return;
              const current = nextIndex; // 当前要启动的 Promise 下标
              nextIndex++; // 下一个要启动的下标
              // 启动当前 Promise，并在其 finally 后处理结果
              promises[current].finally((res) => {
                result[current] = res; // 保存结果到对应位置
                count++; // 完成数量加一
                if (count === promises.length) {
                  // 所有 Promise 都完成后，resolve 最终结果
                  resolve(result);
                } else {
                  // 启动下一个 Promise
                  run();
                }
              });
            }

            // 一开始并发启动 concurrency 个 Promise
            for (let i = 0; i < concurrency && i < promises.length; i++) {
              run();
            }
          });
        }
      }

      let p1 = new MyPromise((resolve, reject) => {
        setTimeout(() => {
          console.log("ok");
          resolve("成功了");
        }, 1000);
      });

      p1.then(
        (data) => {
          console.log("then1 resolve", data);
          return 111;
        },
        (err) => {
          console.log("then1 reject", err);
        }
      )
        .then(
          (data) => {
            console.log("then2 resolve", data);
          },
          (err) => {
            console.log("then2 reject", err);
          }
        )
        .then(
          (data) => {
            console.log("then3 resolve", data);
          },
          (err) => {
            console.log("then3 reject", err);
          }
        );

      let Promise1 = new MyPromise((resolve, reject) => {
        setTimeout(() => {
          resolve("Promise1");
        }, 5000);
        resolve("Promise2");
      });

      let Promise2 = new MyPromise((resolve, reject) => {
        resolve("Promise2");
      });

      let Promise3 = new MyPromise((resolve, reject) => {
        resolve("Promise3");
      });

      let Promise4 = new MyPromise((resolve, reject) => {
        resolve("Promise4");
      });
      let Promise5 = new MyPromise((resolve, reject) => {
        reject("Promise5");
      });
      let Promise6 = new MyPromise((resolve, reject) => {
        reject("Promise6");
      });

      let p = MyPromise.all([Promise1, Promise2, Promise3, Promise4]);

      p.then(
        (res) => {
          // 三个都成功则成功
          console.log("all ---成功了", res);
        },
        (err) => {
          console.log("all ---失败了", err);
        }
      ).catch((error) => {
        // 只要有失败，则失败
        console.log("all ---失败了", err);
      });

      MyPromise.any([Promise4, Promise5, Promise6])
        .then(
          (res) => {
            // 三个都成功则成功
            console.log("any 成功了", res);
          },
          (err) => {
            console.log("any 失败了", err);
          }
        )
        .catch((error) => {
          // 只要有失败，则失败
          console.log("any 失败了", err);
        });

      Promise.race([Promise1, Promise2, Promise3]).then(
        (res) => {
          console.log("race resolve", res);
        },
        (rej) => {
          console.log("race reject", rej);
        }
      );

      let pAll = MyPromise.allSettled([Promise1, Promise2, Promise3, Promise4]);

      pAll.then(
        (res) => {
          // 三个都成功则成功
          console.log("---成功了 allSettled", res);
        },
        (err) => {
          // 只要有失败，则失败
          console.log("---失败了 allSettled", err);
        }
      );

      // 2s 后输出：---成功了 (4) ["Promise1", "Promise2", "Promise3", "Promise4"]

      // 直接输出：---失败了 Promise4


\`\`\``],answerHtml:[`<div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><!--::markdown-it-async::eqy2xehgkgek4ujyc8j4cq::--><code>class MyPromise {
        static PENDING = &quot;pending&quot;;
        static RESOLVED = &quot;resolved&quot;;
        static REJECTED = &quot;rejected&quot;;
        constructor(executor) {
          this.status = MyPromise.PENDING;
          // resolve 的值
          this.value = null;
          // reject 的值
          this.reason = null;
          // then 成功回调
          this.onFulfilledQueues = [];
          // then 失败回调
          this.onRejectedQueues = [];

          // 执行成功回掉
          let resolve = (value) =&gt; {
            if (this.status === MyPromise.PENDING) {
              this.status = MyPromise.RESOLVED;
              this.value = value;
              // console.log(&quot;this.onFulfilledQueues&quot;, this.onFulfilledQueues);
              this.onFulfilledQueues.forEach((item) =&gt; {
                try {
                  item(value);
                } catch (err) {
                  reject(err);
                }
              });
            }
          };

          // 执行失败回掉
          let reject = (reason) =&gt; {
            if (this.status === MyPromise.PENDING) {
              this.status = MyPromise.REJECTED;
              this.reason = reason;
              this.onRejectedQueues.forEach((item) =&gt; {
                try {
                  item(value);
                } catch (err) {
                  reject(err);
                }
              });
            }
          };

          try {
            executor(resolve, reject);
          } catch (err) {
            reject(err);
          }
        }

        then(onFulfilled, onRejected) {
          onFulfilled =
            typeof onFulfilled === &quot;function&quot; ? onFulfilled : (value) =&gt; value;
          onRejected =
            typeof onRejected === &quot;function&quot;
              ? onRejected
              : (reason) =&gt; {
                  throw reason;
                };

          const promise = new MyPromise((res, rej) =&gt; {
            if (this.status === MyPromise.PENDING) {
              this.onFulfilledQueues.push((v) =&gt; res(onFulfilled(v)));
              this.onRejectedQueues.push((v) =&gt; rej(onRejected(v)));
            }
            // 状态是成功态，直接就调用 onFulfilled 函数
            if (this.status === MyPromise.RESOLVED) {
              res(onFulfilled(this.value));
            }

            // 状态是成功态，直接就调用 onRejected 函数
            if (this.status === MyPromise.REJECTED) {
              rej(onRejected(this.reason));
            }
          });

          return promise;
        }

        // 将多个 Promise 并行等待：所有都成功则返回按原数组顺序的结果数组，
        // 只要有一个失败则立即 reject（行为类似原生 Promise.all）
        // 参数：arr - Promise 实例数组
        // 返回：MyPromise，resolve(valueArray) / reject(firstError)
        static all(arr) {
          return new MyPromise((res, rej) =&gt; {
            let result = [];
            let count = 0;
            for (let i = 0; i &lt; arr.length; i++) {
              arr[i].then(
                (d) =&gt; {
                  result[i] = d;
                  if (++count === arr.length) {
                    res(result);
                  }
                },
                (err) =&gt; {
                  rej(err);
                }
              );
            }
          });
        }
        // 竞速：返回第一个完成（resolve 或 reject）的结果（类似原生 Promise.race）
        // 参数：arr - Promise 实例数组
        // 返回：MyPromise，resolve(firstResolved) 或 reject(firstRejected)
      
        static race(arr) {
          return new MyPromise((res, rej) =&gt; {
            for (let i = 0; i &lt; arr.length; i++) {
              arr[i].then(res, rej);
            }
          });
        }
        
        // allSettled：等待所有 Promise 都 settle（不论成功或失败）后返回结果集合
        // 参数：promises - Promise 实例数组
        // 返回：MyPromise，resolve(resultArray)
        // 说明：本实现将每个 Promise 的 finally 视作“完成”的回调点并把返回值放到结果数组，
        //       意味着结果数组项的结构取决于 finally 回调传入的值 —— 与原生 Promise.allSettled 返回
        //       的 {status, value/reason} 结构有所不同。调整以匹配原生行为可在 finally/then 中
        //       分别处理 fulfilled/rejected 情况。

        static allSettled(promises) {
          return new MyPromise((resolve) =&gt; {
            let result = [];
            let count = 0;
            for (let i = 0; i &lt; promises.length; i++) {
              promises[i].finally((res) =&gt; {
                result[i] = res;
                if (++count == promises.length) {
                  resolve(result);
                }
              });
            }
          });
        }

        // any：只要有一个 Promise 成功就 resolve（值为第一个成功的结果），
        //      若全部失败则 reject，返回所有错误组成的数组（行为类似原生 Promise.any，
        //      但原生 Promise.any 在全部失败时会返回 AggregateError）
        // 参数：arr - Promise 实例数组
        // 返回：MyPromise，resolve(firstSuccess) 或 reject(errorArray)
 
        static any(arr) {
          return new MyPromise((res, rej) =&gt; {
            let result = [];
            let count = 0;
            for (let i = 0; i &lt; arr.length; i++) {
              arr[i].then(
                (d) =&gt; {
                  res(d);
                },
                (err) =&gt; {
                  result[i] = err;
                  if (++count === arr.length) {
                    rej(result);
                  }
                }
              );
            }
          });
        }

        catch(rej) {
          return this.then(null, rej);
        }

        finally(res) {
          return this.then(res, res);
        }

        // map：限制并发数的 Promise 执行器
        // 参数：
        //   promises - Promise 实例数组（或返回 Promise 的函数数组，视使用场景）
        //   concurrency - 最大并发数（同时运行的 Promise 数量上限）
        // 返回：MyPromise，resolve(resultArray) 在所有 Promise 完成后触发
        // 算法要点：
        //  - 使用 nextIndex 指向下一个待启动的 Promise，下发任务时递增 nextIndex
        //  - 初始启动 concurrency 个任务；每当一个任务完成后（finally 回调），
        //    记录结果并启动下一个待办任务，从而始终保持并发数量不超过 concurrency
        //  - 通过 count 统计已完成任务数，全部完成后 resolve 最终结果数组
        // 注意：
        //  - 这里通过 promises[i].finally(...) 作为“完成”判定点，因此无论成功或失败都
        //    会触发后续调度；若需区分成功/失败并保留状态信息，需要在 finally/then 中
        //    对 result 数组项存储更丰富的对象（如 { status, value/reason }）

        static map(promises, concurrency) {
          // 返回一个新的 MyPromise
          return new MyPromise((resolve) =&gt; {
            let result = []; // 用于保存每个 Promise 的结果
            let count = 0; // 已完成的 Promise 数量
            let nextIndex = 0; // 下一个要启动的 Promise 下标

            // 并发执行的函数
            function run() {
              // 如果所有 Promise 都已启动，则直接返回
              if (nextIndex &gt;= promises.length) return;
              const current = nextIndex; // 当前要启动的 Promise 下标
              nextIndex++; // 下一个要启动的下标
              // 启动当前 Promise，并在其 finally 后处理结果
              promises[current].finally((res) =&gt; {
                result[current] = res; // 保存结果到对应位置
                count++; // 完成数量加一
                if (count === promises.length) {
                  // 所有 Promise 都完成后，resolve 最终结果
                  resolve(result);
                } else {
                  // 启动下一个 Promise
                  run();
                }
              });
            }

            // 一开始并发启动 concurrency 个 Promise
            for (let i = 0; i &lt; concurrency &amp;&amp; i &lt; promises.length; i++) {
              run();
            }
          });
        }
      }

      let p1 = new MyPromise((resolve, reject) =&gt; {
        setTimeout(() =&gt; {
          console.log(&quot;ok&quot;);
          resolve(&quot;成功了&quot;);
        }, 1000);
      });

      p1.then(
        (data) =&gt; {
          console.log(&quot;then1 resolve&quot;, data);
          return 111;
        },
        (err) =&gt; {
          console.log(&quot;then1 reject&quot;, err);
        }
      )
        .then(
          (data) =&gt; {
            console.log(&quot;then2 resolve&quot;, data);
          },
          (err) =&gt; {
            console.log(&quot;then2 reject&quot;, err);
          }
        )
        .then(
          (data) =&gt; {
            console.log(&quot;then3 resolve&quot;, data);
          },
          (err) =&gt; {
            console.log(&quot;then3 reject&quot;, err);
          }
        );

      let Promise1 = new MyPromise((resolve, reject) =&gt; {
        setTimeout(() =&gt; {
          resolve(&quot;Promise1&quot;);
        }, 5000);
        resolve(&quot;Promise2&quot;);
      });

      let Promise2 = new MyPromise((resolve, reject) =&gt; {
        resolve(&quot;Promise2&quot;);
      });

      let Promise3 = new MyPromise((resolve, reject) =&gt; {
        resolve(&quot;Promise3&quot;);
      });

      let Promise4 = new MyPromise((resolve, reject) =&gt; {
        resolve(&quot;Promise4&quot;);
      });
      let Promise5 = new MyPromise((resolve, reject) =&gt; {
        reject(&quot;Promise5&quot;);
      });
      let Promise6 = new MyPromise((resolve, reject) =&gt; {
        reject(&quot;Promise6&quot;);
      });

      let p = MyPromise.all([Promise1, Promise2, Promise3, Promise4]);

      p.then(
        (res) =&gt; {
          // 三个都成功则成功
          console.log(&quot;all ---成功了&quot;, res);
        },
        (err) =&gt; {
          console.log(&quot;all ---失败了&quot;, err);
        }
      ).catch((error) =&gt; {
        // 只要有失败，则失败
        console.log(&quot;all ---失败了&quot;, err);
      });

      MyPromise.any([Promise4, Promise5, Promise6])
        .then(
          (res) =&gt; {
            // 三个都成功则成功
            console.log(&quot;any 成功了&quot;, res);
          },
          (err) =&gt; {
            console.log(&quot;any 失败了&quot;, err);
          }
        )
        .catch((error) =&gt; {
          // 只要有失败，则失败
          console.log(&quot;any 失败了&quot;, err);
        });

      Promise.race([Promise1, Promise2, Promise3]).then(
        (res) =&gt; {
          console.log(&quot;race resolve&quot;, res);
        },
        (rej) =&gt; {
          console.log(&quot;race reject&quot;, rej);
        }
      );

      let pAll = MyPromise.allSettled([Promise1, Promise2, Promise3, Promise4]);

      pAll.then(
        (res) =&gt; {
          // 三个都成功则成功
          console.log(&quot;---成功了 allSettled&quot;, res);
        },
        (err) =&gt; {
          // 只要有失败，则失败
          console.log(&quot;---失败了 allSettled&quot;, err);
        }
      );

      // 2s 后输出：---成功了 (4) [&quot;Promise1&quot;, &quot;Promise2&quot;, &quot;Promise3&quot;, &quot;Promise4&quot;]

      // 直接输出：---失败了 Promise4

</code></pre>
</div>`],reference:"/myKMS/interview/code#_5-手写-promise",source:"/myKMS/interview/code"},{id:36,question:"js bind 实现机制？手写一个 bind 方法？",answer:["bind的 作用: **返回一个新的函数，这个新函数在被调用时，其内部的 this 会永久绑定为你指定的对象。**","bind 做了三件事：",`- 绑定 this：返回一个新的函数，内部的 this 固定为传入的对象；
- 支持参数预置：可以提前绑定部分参数；
- 兼容 new 调用：如果用 new 调用 bind 生成的函数，this 绑定失效，应该指向新实例。`,`\`\`\`js
// 简单版
Function.prototype.myBind = function (context) {
  const fn = this; // 保存原函数
  return function () {
    return fn.apply(context);
  };
};

// 支持参数传递（柯里化）
Function.prototype.myBind = function (context, ...args) {
  const fn = this;
  return function (...innerArgs) {
    return fn.apply(context, [...args, ...innerArgs]);
  };
};


// 考虑 new 构造调用
Function.prototype.myBind = function (context, ...args) {
  const fn = this;

  function boundFn(...innerArgs) {
    // 如果作为构造函数被调用
    const isNew = this instanceof boundFn;
    return fn.apply(isNew ? this : context, [...args, ...innerArgs]);
  }

  // 继承原函数原型
  boundFn.prototype = Object.create(fn.prototype);

  return boundFn;
};

\`\`\``,`bind、call、apply: 
| 特点    | 描述                  |
| ----- | ------------------- |
| 功能目标  | 改变函数执行时的 \`this\` 指向  |
| 调用对象  | 必须是函数（Function 的实例） |
| 第一个参数 | 都是要绑定的 \`this\` 对象    |
| 后续参数  | 都是函数的参数（但传法不同）      |`,"| 方法                                | 是否立即执行  | 参数传递方式  | 返回值             |\n| --------------------------------- | ------- | ------- | --------------- |\n| **`call(thisArg, ...args)`**      | ✅ 立即执行  | 按参数依次传入 | 函数执行结果          |\n| **`apply(thisArg, [argsArray])`** | ✅ 立即执行  | 数组形式传参  | 函数执行结果          |\n| **`bind(thisArg, ...args)`**      | ❌ 不立即执行 | 按参数依次传入 | **返回新函数**（延迟执行） |",`\`\`\`js
function greet(g1, g2) {
  console.log(this.name, g1, g2);
}

const obj = { name: "Alice" };

greet.call(obj, "Hello", "World");   // Alice Hello World
greet.apply(obj, ["Hi", "JS"]);      // Alice Hi JS
const bound = greet.bind(obj, "Hey");
bound("React");                      // Alice Hey React

\`\`\``,`| 特性        | \`call\` | \`apply\` | \`bind\`      |
| --------- | ------ | ------- | ----------- |
| 是否立即执行    | ✅ 是    | ✅ 是     | ❌ 否         |
| 参数形式      | 单个、多个  | 数组      | 单个、多个       |
| 返回值       | 执行结果   | 执行结果    | 新函数         |
| 是否可用作构造函数 | ❌ 否    | ❌ 否     | ✅ 可（支持 new） |
| 是否能预置参数   | ❌ 否    | ❌ 否     | ✅ 可         |
| 是否影响原函数   | ❌ 否    | ❌ 否     | ❌ 否         |`,"应用场景: \n| 场景           | 使用方法                                             |\n| ------------ | ------------------------------------------------ |\n| 借用其他对象方法     | `Array.prototype.slice.call(arguments)`          |\n| 动态传参         | `fn.apply(obj, [1, 2, 3])`                       |\n| 函数柯里化 / 预置参数 | `fn.bind(obj, 1, 2)`                             |\n| 定时器中固定 this  | `setTimeout(fn.bind(this), 1000)`                |\n| React 组件事件绑定 | `this.handleClick = this.handleClick.bind(this)` |","- **call：立刻执行，参数依次传。**","- **apply：立刻执行，参数打包传。**","- **bind：返回函数，稍后执行。**"],answerHtml:["<p>bind的 作用: <strong>返回一个新的函数，这个新函数在被调用时，其内部的 this 会永久绑定为你指定的对象。</strong></p>","<p>bind 做了三件事：</p>",`<ul>
<li>绑定 this：返回一个新的函数，内部的 this 固定为传入的对象；</li>
<li>支持参数预置：可以提前绑定部分参数；</li>
<li>兼容 new 调用：如果用 new 调用 bind 生成的函数，this 绑定失效，应该指向新实例。</li>
</ul>`,`<div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><!--::markdown-it-async::r0e80b6hgkntmnpos6uy3l::--><code>// 简单版
Function.prototype.myBind = function (context) {
  const fn = this; // 保存原函数
  return function () {
    return fn.apply(context);
  };
};

// 支持参数传递（柯里化）
Function.prototype.myBind = function (context, ...args) {
  const fn = this;
  return function (...innerArgs) {
    return fn.apply(context, [...args, ...innerArgs]);
  };
};


// 考虑 new 构造调用
Function.prototype.myBind = function (context, ...args) {
  const fn = this;

  function boundFn(...innerArgs) {
    // 如果作为构造函数被调用
    const isNew = this instanceof boundFn;
    return fn.apply(isNew ? this : context, [...args, ...innerArgs]);
  }

  // 继承原函数原型
  boundFn.prototype = Object.create(fn.prototype);

  return boundFn;
};
</code></pre>
</div>`,`<p>bind、call、apply:</p>
<table tabindex="0">
<thead>
<tr>
<th>特点</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>功能目标</td>
<td>改变函数执行时的 <code>this</code> 指向</td>
</tr>
<tr>
<td>调用对象</td>
<td>必须是函数（Function 的实例）</td>
</tr>
<tr>
<td>第一个参数</td>
<td>都是要绑定的 <code>this</code> 对象</td>
</tr>
<tr>
<td>后续参数</td>
<td>都是函数的参数（但传法不同）</td>
</tr>
</tbody>
</table>`,`<table tabindex="0">
<thead>
<tr>
<th>方法</th>
<th>是否立即执行</th>
<th>参数传递方式</th>
<th>返回值</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong><code>call(thisArg, ...args)</code></strong></td>
<td>✅ 立即执行</td>
<td>按参数依次传入</td>
<td>函数执行结果</td>
</tr>
<tr>
<td><strong><code>apply(thisArg, [argsArray])</code></strong></td>
<td>✅ 立即执行</td>
<td>数组形式传参</td>
<td>函数执行结果</td>
</tr>
<tr>
<td><strong><code>bind(thisArg, ...args)</code></strong></td>
<td>❌ 不立即执行</td>
<td>按参数依次传入</td>
<td><strong>返回新函数</strong>（延迟执行）</td>
</tr>
</tbody>
</table>`,`<div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><!--::markdown-it-async::l8l7bqapvdjopdr7ui85z::--><code>function greet(g1, g2) {
  console.log(this.name, g1, g2);
}

const obj = { name: &quot;Alice&quot; };

greet.call(obj, &quot;Hello&quot;, &quot;World&quot;);   // Alice Hello World
greet.apply(obj, [&quot;Hi&quot;, &quot;JS&quot;]);      // Alice Hi JS
const bound = greet.bind(obj, &quot;Hey&quot;);
bound(&quot;React&quot;);                      // Alice Hey React
</code></pre>
</div>`,`<table tabindex="0">
<thead>
<tr>
<th>特性</th>
<th><code>call</code></th>
<th><code>apply</code></th>
<th><code>bind</code></th>
</tr>
</thead>
<tbody>
<tr>
<td>是否立即执行</td>
<td>✅ 是</td>
<td>✅ 是</td>
<td>❌ 否</td>
</tr>
<tr>
<td>参数形式</td>
<td>单个、多个</td>
<td>数组</td>
<td>单个、多个</td>
</tr>
<tr>
<td>返回值</td>
<td>执行结果</td>
<td>执行结果</td>
<td>新函数</td>
</tr>
<tr>
<td>是否可用作构造函数</td>
<td>❌ 否</td>
<td>❌ 否</td>
<td>✅ 可（支持 new）</td>
</tr>
<tr>
<td>是否能预置参数</td>
<td>❌ 否</td>
<td>❌ 否</td>
<td>✅ 可</td>
</tr>
<tr>
<td>是否影响原函数</td>
<td>❌ 否</td>
<td>❌ 否</td>
<td>❌ 否</td>
</tr>
</tbody>
</table>`,`<p>应用场景:</p>
<table tabindex="0">
<thead>
<tr>
<th>场景</th>
<th>使用方法</th>
</tr>
</thead>
<tbody>
<tr>
<td>借用其他对象方法</td>
<td><code>Array.prototype.slice.call(arguments)</code></td>
</tr>
<tr>
<td>动态传参</td>
<td><code>fn.apply(obj, [1, 2, 3])</code></td>
</tr>
<tr>
<td>函数柯里化 / 预置参数</td>
<td><code>fn.bind(obj, 1, 2)</code></td>
</tr>
<tr>
<td>定时器中固定 this</td>
<td><code>setTimeout(fn.bind(this), 1000)</code></td>
</tr>
<tr>
<td>React 组件事件绑定</td>
<td><code>this.handleClick = this.handleClick.bind(this)</code></td>
</tr>
</tbody>
</table>`,`<ul>
<li><strong>call：立刻执行，参数依次传。</strong></li>
</ul>`,`<ul>
<li><strong>apply：立刻执行，参数打包传。</strong></li>
</ul>`,`<ul>
<li><strong>bind：返回函数，稍后执行。</strong></li>
</ul>`],reference:"/myKMS/interview/code#_6-js-bind-实现机制-手写一个-bind-方法",source:"/myKMS/interview/code"},{id:37,question:"图片查看器",answer:[`| 层级     | 功能模块                      | 描述          |
| ------ | ------------------------- | ----------- |
| 🧱 基础层 | **加载、显示、缩放、平移、旋转**        | 图片展示的最小功能集合 |
| 🧭 导航层 | **缩略图 / 小地图 / 缩放滑块**      | 帮助用户快速定位和缩放 |
| 🧰 工具层 | **标注、测量、取色、截图、对比**        | 用户交互功能      |
| 💾 数据层 | **多图层、多通道、切片加载、缓存**       | 支撑大图和多维数据展示 |
| 🧠 智能层 | **懒加载、GPU 渲染、离屏渲染、预加载预测** | 性能优化和体验提升   |
| 🧩 扩展层 | **插件体系 / 事件系统 / 定制UI**    | 框架化、工程化能力   |`],answerHtml:[`<table tabindex="0">
<thead>
<tr>
<th>层级</th>
<th>功能模块</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>🧱 基础层</td>
<td><strong>加载、显示、缩放、平移、旋转</strong></td>
<td>图片展示的最小功能集合</td>
</tr>
<tr>
<td>🧭 导航层</td>
<td><strong>缩略图 / 小地图 / 缩放滑块</strong></td>
<td>帮助用户快速定位和缩放</td>
</tr>
<tr>
<td>🧰 工具层</td>
<td><strong>标注、测量、取色、截图、对比</strong></td>
<td>用户交互功能</td>
</tr>
<tr>
<td>💾 数据层</td>
<td><strong>多图层、多通道、切片加载、缓存</strong></td>
<td>支撑大图和多维数据展示</td>
</tr>
<tr>
<td>🧠 智能层</td>
<td><strong>懒加载、GPU 渲染、离屏渲染、预加载预测</strong></td>
<td>性能优化和体验提升</td>
</tr>
<tr>
<td>🧩 扩展层</td>
<td><strong>插件体系 / 事件系统 / 定制UI</strong></td>
<td>框架化、工程化能力</td>
</tr>
</tbody>
</table>`],reference:"/myKMS/interview/code#_7-图片查看器",source:"/myKMS/interview/code"},{id:38,question:"手写 instanceof 方法",answer:["instanceof 运算符用于判断构造函数的 prototype 属性是否出现在对象的原型链中的任何位置。",`实现步骤：
- 首先获取类型的原型
- 然后获得对象的原型
- 然后一直循环判断对象的原型是否等于类型的原型，直到对象原型为 null，因为原型链最终为 null`,`\`\`\`js
function myInstanceof(left, right) {
  let proto = Object.getPrototypeOf(left), // 获取对象的原型
      prototype = right.prototype; // 获取构造函数的 prototype 对象

  // 判断构造函数的 prototype 对象是否在对象的原型链上
  while (true) {
    if (!proto) return false;
    if (proto === prototype) return true;

    proto = Object.getPrototypeOf(proto);
  }
}
\`\`\``],answerHtml:["<p>instanceof 运算符用于判断构造函数的 prototype 属性是否出现在对象的原型链中的任何位置。</p>",`<p>实现步骤：</p>
<ul>
<li>首先获取类型的原型</li>
<li>然后获得对象的原型</li>
<li>然后一直循环判断对象的原型是否等于类型的原型，直到对象原型为 null，因为原型链最终为 null</li>
</ul>`,`<div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><!--::markdown-it-async::m85o55jgnp6zcwf1a27lp::--><code>function myInstanceof(left, right) {
  let proto = Object.getPrototypeOf(left), // 获取对象的原型
      prototype = right.prototype; // 获取构造函数的 prototype 对象

  // 判断构造函数的 prototype 对象是否在对象的原型链上
  while (true) {
    if (!proto) return false;
    if (proto === prototype) return true;

    proto = Object.getPrototypeOf(proto);
  }
}</code></pre>
</div>`],reference:"/myKMS/interview/code#_8-手写-instanceof-方法",source:"/myKMS/interview/code"},{id:39,question:"手写 new 操作符",answer:["在调用 new 的过程中会发生以上四件事情：","（1）首先创建了一个新的空对象","（2）设置原型，将对象的原型设置为函数的 prototype 对象。","（3）让函数的 this 指向这个对象，执行构造函数的代码（为这个新对象添加属性）","（4）判断函数的返回值类型，如果是值类型，返回创建的对象。如果是引用类型，就返回这个引用类型的对象。",`\`\`\`js

function myNew(constructor, ...args) {
  if (typeof constructor !== "function") return
  let obj = {}
  obj.prototype = Object.create(constructor.prototype)
  const res = constructor.apply(obj, args)
  if (res && (typeof res !== "object" || typeof res === "function")) return res
  return obj
}
function Fn(obj) {
  this.obj =obj
}
let obj =myNew(Fn,'222')
console.log(obj);

\`\`\``],answerHtml:["<p>在调用 new 的过程中会发生以上四件事情：</p>","<p>（1）首先创建了一个新的空对象</p>","<p>（2）设置原型，将对象的原型设置为函数的 prototype 对象。</p>","<p>（3）让函数的 this 指向这个对象，执行构造函数的代码（为这个新对象添加属性）</p>","<p>（4）判断函数的返回值类型，如果是值类型，返回创建的对象。如果是引用类型，就返回这个引用类型的对象。</p>",`<div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><!--::markdown-it-async::60fdgmhl2dyolz6uz2i6lk::--><code>
function myNew(constructor, ...args) {
  if (typeof constructor !== &quot;function&quot;) return
  let obj = {}
  obj.prototype = Object.create(constructor.prototype)
  const res = constructor.apply(obj, args)
  if (res &amp;&amp; (typeof res !== &quot;object&quot; || typeof res === &quot;function&quot;)) return res
  return obj
}
function Fn(obj) {
  this.obj =obj
}
let obj =myNew(Fn,&#039;222&#039;)
console.log(obj);
</code></pre>
</div>`],reference:"/myKMS/interview/code#_9-手写-new-操作符",source:"/myKMS/interview/code"},{id:40,question:"函数柯里化",answer:["柯里化（Currying） 是把一个接受多个参数的函数，转换成一系列每次只接收一个参数的函数。","类比: “一次性买 3 个苹果”，变成 “一次买 1 个，买 3 次，最后结算”。",`\`\`\`
function add(a, b, c) {
  return a + b + c;
}

add(1, 2, 3)  →  curry(add)(1)(2)(3)

curry(add)(1)  // 返回一个函数，等待第二个参数


\`\`\``,`好处:
- ✅ 参数复用（延迟调用）`,"- ✅ 提高函数复用性、组合性","- ✅ 实现函数“预设参数”（偏函数）","- ✅ 提升代码可读性和函数式风格",`\`\`\`js

function curry(fn) {
  const curried = (...args) => {
    // 如果参数足够就执行，否则返回新函数继续收集
    return args.length >= fn.length
      ? fn(...args)
      : (...next) => curried(...args, ...next);
  };
  return curried;
}

\`\`\``],answerHtml:["<p>柯里化（Currying） 是把一个接受多个参数的函数，转换成一系列每次只接收一个参数的函数。</p>","<p>类比: “一次性买 3 个苹果”，变成 “一次买 1 个，买 3 次，最后结算”。</p>",`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><!--::markdown-it-async::xn2r0b9rd7dvc44bk4cfs::--><code>function add(a, b, c) {
  return a + b + c;
}

add(1, 2, 3)  →  curry(add)(1)(2)(3)

curry(add)(1)  // 返回一个函数，等待第二个参数

</code></pre>
</div>`,`<p>好处:</p>
<ul>
<li>✅ 参数复用（延迟调用）</li>
</ul>`,`<ul>
<li>✅ 提高函数复用性、组合性</li>
</ul>`,`<ul>
<li>✅ 实现函数“预设参数”（偏函数）</li>
</ul>`,`<ul>
<li>✅ 提升代码可读性和函数式风格</li>
</ul>`,`<div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><!--::markdown-it-async::o7rwmdx1gkpqi9uus3ooe::--><code>
function curry(fn) {
  const curried = (...args) =&gt; {
    // 如果参数足够就执行，否则返回新函数继续收集
    return args.length &gt;= fn.length
      ? fn(...args)
      : (...next) =&gt; curried(...args, ...next);
  };
  return curried;
}
</code></pre>
</div>`],reference:"/myKMS/interview/code#_10-函数柯里化",source:"/myKMS/interview/code"},{id:41,question:"如何判断用户是否离开当前页面?",answer:["一、页面可见性 Page Visibility API","判断用户标签页是否可见（切换到后台/最小化浏览器）",`\`\`\`
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    console.log('用户离开页面（切换标签页或最小化）');
  } else {
    console.log('用户回到页面');
  }
});

\`\`\``,"二、窗口焦点（Focus / Blur）","检测窗口或 iframe 是否获得焦点",`\`\`\`
window.addEventListener('blur', () => {
  console.log('用户离开了当前窗口/标签页');
});

window.addEventListener('focus', () => {
  console.log('用户回到当前窗口/标签页');
});

\`\`\``,"三、用户离开页面 / 卸载（beforeunload / unload）","检测用户关闭页面、刷新或跳转。",`\`\`\`
window.addEventListener('beforeunload', (e) => {
  console.log('用户可能离开页面');
  // 阻止默认提示（可选）
  e.preventDefault();
  e.returnValue = '';
});

\`\`\``,"四、鼠标 / 用户交互检测","当用户长时间没有交互（鼠标、键盘、触屏），可推测用户离开",`\`\`\`
let idleTimer;
function resetIdle() {
  clearTimeout(idleTimer);
  idleTimer = setTimeout(() => {
    console.log('用户可能离开或无操作');
  }, 30000); // 30秒无操作
}

// 监听用户操作
['mousemove','keydown','click','scroll','touchstart'].forEach(ev =>
  document.addEventListener(ev, resetIdle)
);
resetIdle();

\`\`\``,"可以检测“用户不活跃”，用于自动登出、心跳等.",`\`\`\`
let idleTimer;
function onUserIdle() { console.log('用户离开页面或长时间不操作'); }
function resetIdle() {
  clearTimeout(idleTimer);
  idleTimer = setTimeout(onUserIdle, 30000);
}
['mousemove','keydown','click','scroll','touchstart'].forEach(ev => 
  document.addEventListener(ev, resetIdle)
);
resetIdle();

document.addEventListener('visibilitychange', () => {
  if (document.hidden) onUserIdle();
});
window.addEventListener('blur', onUserIdle);
window.addEventListener('focus', resetIdle);

\`\`\``],answerHtml:["<p>一、页面可见性 Page Visibility API</p>","<p>判断用户标签页是否可见（切换到后台/最小化浏览器）</p>",`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><!--::markdown-it-async::51kiney32zeyg1a9qlz3m::--><code>document.addEventListener(&#039;visibilitychange&#039;, () =&gt; {
  if (document.hidden) {
    console.log(&#039;用户离开页面（切换标签页或最小化）&#039;);
  } else {
    console.log(&#039;用户回到页面&#039;);
  }
});
</code></pre>
</div>`,"<p>二、窗口焦点（Focus / Blur）</p>","<p>检测窗口或 iframe 是否获得焦点</p>",`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><!--::markdown-it-async::615stu7qftcy12pl3xdq::--><code>window.addEventListener(&#039;blur&#039;, () =&gt; {
  console.log(&#039;用户离开了当前窗口/标签页&#039;);
});

window.addEventListener(&#039;focus&#039;, () =&gt; {
  console.log(&#039;用户回到当前窗口/标签页&#039;);
});
</code></pre>
</div>`,"<p>三、用户离开页面 / 卸载（beforeunload / unload）</p>","<p>检测用户关闭页面、刷新或跳转。</p>",`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><!--::markdown-it-async::imck22bkwyfdgi0439zlq::--><code>window.addEventListener(&#039;beforeunload&#039;, (e) =&gt; {
  console.log(&#039;用户可能离开页面&#039;);
  // 阻止默认提示（可选）
  e.preventDefault();
  e.returnValue = &#039;&#039;;
});
</code></pre>
</div>`,"<p>四、鼠标 / 用户交互检测</p>","<p>当用户长时间没有交互（鼠标、键盘、触屏），可推测用户离开</p>",`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><!--::markdown-it-async::op2xhiapwadigx37yz3gu::--><code>let idleTimer;
function resetIdle() {
  clearTimeout(idleTimer);
  idleTimer = setTimeout(() =&gt; {
    console.log(&#039;用户可能离开或无操作&#039;);
  }, 30000); // 30秒无操作
}

// 监听用户操作
[&#039;mousemove&#039;,&#039;keydown&#039;,&#039;click&#039;,&#039;scroll&#039;,&#039;touchstart&#039;].forEach(ev =&gt;
  document.addEventListener(ev, resetIdle)
);
resetIdle();
</code></pre>
</div>`,"<p>可以检测“用户不活跃”，用于自动登出、心跳等.</p>",`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><!--::markdown-it-async::5jr77403tlfrncaslzzq4::--><code>let idleTimer;
function onUserIdle() { console.log(&#039;用户离开页面或长时间不操作&#039;); }
function resetIdle() {
  clearTimeout(idleTimer);
  idleTimer = setTimeout(onUserIdle, 30000);
}
[&#039;mousemove&#039;,&#039;keydown&#039;,&#039;click&#039;,&#039;scroll&#039;,&#039;touchstart&#039;].forEach(ev =&gt; 
  document.addEventListener(ev, resetIdle)
);
resetIdle();

document.addEventListener(&#039;visibilitychange&#039;, () =&gt; {
  if (document.hidden) onUserIdle();
});
window.addEventListener(&#039;blur&#039;, onUserIdle);
window.addEventListener(&#039;focus&#039;, resetIdle);
</code></pre>
</div>`],reference:"/myKMS/interview/index#_1-如何判断用户是否离开当前页面",source:"/myKMS/interview/index"},{id:42,question:"前端如何预览pdf?",answer:["一、直接使用浏览器内置 PDF 渲染\n    - `<iframe>` 嵌入\n    - `<embed>` 标签\n    - 新开标签页","二、使用 PDF.js\n    - PDF.js 是最常用的前端 PDF 渲染库，可以在 `<canvas>` 上渲染 PDF 页面。"],answerHtml:[`<p>一、直接使用浏览器内置 PDF 渲染
- <code>&lt;iframe&gt;</code> 嵌入
- <code>&lt;embed&gt;</code> 标签
- 新开标签页</p>`,`<p>二、使用 PDF.js
- PDF.js 是最常用的前端 PDF 渲染库，可以在 <code>&lt;canvas&gt;</code> 上渲染 PDF 页面。</p>`],reference:"/myKMS/interview/index#_2-前端如何预览pdf",source:"/myKMS/interview/index"},{id:43,question:"前端批量请求失败Toast重复弹窗怎么解决？",answer:[`- 全局标志拦截: 无论多少错误只弹出一个错误 
- Toast 自身防抖, 短时间内只弹一次
- 错误聚合：在拦截器层面，收集短时间内的所有错误，然后合并成一条 Toast 显示
  - 在拦截器中不立即弹窗，而是将错误“收集”起来，用一个 debounce 函数在短时间后统一处理
  - 错误分类队列和分类处理
- 业务层处理
  - 在发起请求时，告知拦截器“不要弹 Toast”，然后在业务代码中用 Promise.allSettled 手动处理所有结果
- 还可以加上重试机制和错误上报`],answerHtml:[`<ul>
<li>全局标志拦截: 无论多少错误只弹出一个错误</li>
<li>Toast 自身防抖, 短时间内只弹一次</li>
<li>错误聚合：在拦截器层面，收集短时间内的所有错误，然后合并成一条 Toast 显示
<ul>
<li>在拦截器中不立即弹窗，而是将错误“收集”起来，用一个 debounce 函数在短时间后统一处理</li>
<li>错误分类队列和分类处理</li>
</ul>
</li>
<li>业务层处理
<ul>
<li>在发起请求时，告知拦截器“不要弹 Toast”，然后在业务代码中用 Promise.allSettled 手动处理所有结果</li>
</ul>
</li>
<li>还可以加上重试机制和错误上报</li>
</ul>`],reference:"/myKMS/interview/index#_3-前端批量请求失败toast重复弹窗怎么解决",source:"/myKMS/interview/index"},{id:44,question:"如何解决页面接口请求大规模并发问题",answer:[`- 请求去重（防抖 + 节流 + 队列）
   - 核心思想：同一资源、同一参数，不重复发请求。`,`- 请求合并
  - 把多个相似请求合并为一个。`,`- 并发限制
   - 控制同时发出的请求数，超过的进入队列。`,`- 缓存
- 优化请求时机`],answerHtml:[`<ul>
<li>请求去重（防抖 + 节流 + 队列）
<ul>
<li>核心思想：同一资源、同一参数，不重复发请求。</li>
</ul>
</li>
</ul>`,`<ul>
<li>请求合并
<ul>
<li>把多个相似请求合并为一个。</li>
</ul>
</li>
</ul>`,`<ul>
<li>并发限制
<ul>
<li>控制同时发出的请求数，超过的进入队列。</li>
</ul>
</li>
</ul>`,`<ul>
<li>缓存</li>
<li>优化请求时机</li>
</ul>`],reference:"/myKMS/interview/index#_4-如何解决页面接口请求大规模并发问题",source:"/myKMS/interview/index"},{id:45,question:"渲染元素很多, 如何保证页面不卡顿?",answer:["核心思想是 **只渲染用户可见的部分**","解决思路：**减少一次性渲染的 DOM 数量 + 批量更新 + GPU 加速 + 异步渲染**",`- 虚拟列表（Virtual List）
- 时间分片（Time Slicing）/分批渲染
- 数据加载优化
  - 分页
  - 无限滚动
- DOM 操作批量化
- 避免复杂的 CSS 样式
- 减少重排与重绘
  - 合并 DOM 操作 
  - 避免频繁修改 layout 属性
  - 使用 transform / opacity 做动画，配合 will-change 提前优化
- CSS GPU 加速
- 虚拟 DOM / diff 优化
- 异步计算
  - 对大量计算操作使用 Web Worker
  - 主线程只负责渲染，避免 JS 阻塞
- 框架优化`],answerHtml:["<p>核心思想是 <strong>只渲染用户可见的部分</strong></p>","<p>解决思路：<strong>减少一次性渲染的 DOM 数量 + 批量更新 + GPU 加速 + 异步渲染</strong></p>",`<ul>
<li>虚拟列表（Virtual List）</li>
<li>时间分片（Time Slicing）/分批渲染</li>
<li>数据加载优化
<ul>
<li>分页</li>
<li>无限滚动</li>
</ul>
</li>
<li>DOM 操作批量化</li>
<li>避免复杂的 CSS 样式</li>
<li>减少重排与重绘
<ul>
<li>合并 DOM 操作</li>
<li>避免频繁修改 layout 属性</li>
<li>使用 transform / opacity 做动画，配合 will-change 提前优化</li>
</ul>
</li>
<li>CSS GPU 加速</li>
<li>虚拟 DOM / diff 优化</li>
<li>异步计算
<ul>
<li>对大量计算操作使用 Web Worker</li>
<li>主线程只负责渲染，避免 JS 阻塞</li>
</ul>
</li>
<li>框架优化</li>
</ul>`],reference:"/myKMS/interview/index#_5-渲染元素很多-如何保证页面不卡顿",source:"/myKMS/interview/index"},{id:46,question:"前端低代码平台表单联动如何实现",answer:[`1. 解析依赖关系
2. 构建观察者 / 订阅机制
3. 动态执行规则`,`\`\`\`
formFields = [
  { field: 'province', type: 'select' },
  { field: 'city', type: 'select', dependsOn: 'province', compute: (state) => cities[state.province] }
]

// 生成依赖图
depMap = {
  province: ['city']
}

// 字段值变化时触发依赖
function onChange(field, value) {
  formState[field] = value;
  (depMap[field] || []).forEach(depField => {
    const compute = formFields.find(f => f.field === depField).compute;
    if(compute) formState[depField] = compute(formState);
  });
}

\`\`\``],answerHtml:[`<ol>
<li>解析依赖关系</li>
<li>构建观察者 / 订阅机制</li>
<li>动态执行规则</li>
</ol>`,`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><!--::markdown-it-async::aa2x3ap9u9r7blluuizt5s::--><code>formFields = [
  { field: &#039;province&#039;, type: &#039;select&#039; },
  { field: &#039;city&#039;, type: &#039;select&#039;, dependsOn: &#039;province&#039;, compute: (state) =&gt; cities[state.province] }
]

// 生成依赖图
depMap = {
  province: [&#039;city&#039;]
}

// 字段值变化时触发依赖
function onChange(field, value) {
  formState[field] = value;
  (depMap[field] || []).forEach(depField =&gt; {
    const compute = formFields.find(f =&gt; f.field === depField).compute;
    if(compute) formState[depField] = compute(formState);
  });
}
</code></pre>
</div>`],reference:"/myKMS/interview/index#_6-前端低代码平台表单联动如何实现",source:"/myKMS/interview/index"},{id:47,question:"想象一下，如果项目上线前一天，测试团队发现一个严重bug，但修复可能导致发布延期，你会如何处理？",answer:[`第一步：冷静评估 —— 判断问题的性质与影响范围
- 影响范围
- 复现条件
- 修复风险`,"输出：问题严重程度报告（Critical / High / Medium / Low）+ 修复复杂度评估（简单 / 中等 / 高风险",`第二步：权衡方案 —— 快速制定应急策略
- 高风险 + 高影响（核心功能挂）
   - 坚决延期上线
- 低风险 + 高影响（可临时绕过）
  - 上线但添加临时兜底方案
- 高风险 + 低影响（边缘功能有隐患）
  - 修复放入下个小版本或灰度`,`- 沟通与协作策略
  - 要让决策透明，团队共识明确
- 上线后风控
  - 快速回滚脚本
  -  实时监控`],answerHtml:[`<p>第一步：冷静评估 —— 判断问题的性质与影响范围</p>
<ul>
<li>影响范围</li>
<li>复现条件</li>
<li>修复风险</li>
</ul>`,"<p>输出：问题严重程度报告（Critical / High / Medium / Low）+ 修复复杂度评估（简单 / 中等 / 高风险</p>",`<p>第二步：权衡方案 —— 快速制定应急策略</p>
<ul>
<li>高风险 + 高影响（核心功能挂）
<ul>
<li>坚决延期上线</li>
</ul>
</li>
<li>低风险 + 高影响（可临时绕过）
<ul>
<li>上线但添加临时兜底方案</li>
</ul>
</li>
<li>高风险 + 低影响（边缘功能有隐患）
<ul>
<li>修复放入下个小版本或灰度</li>
</ul>
</li>
</ul>`,`<ul>
<li>沟通与协作策略
<ul>
<li>要让决策透明，团队共识明确</li>
</ul>
</li>
<li>上线后风控
<ul>
<li>快速回滚脚本</li>
<li>实时监控</li>
</ul>
</li>
</ul>`],reference:"/myKMS/interview/index#_8-想象一下-如果项目上线前一天-测试团队发现一个严重bug-但修复可能导致发布延期-你会如何处理",source:"/myKMS/interview/index"},{id:48,question:"请分享一个你通过优化前端性能提升用户体验的案例，具体用了哪些技术手段",answer:[`- 路由级 按需加载
- 使用 Preload / Prefetch 提前请求关键资源
- gzip 压缩
- Tree Shaking
- loading
- 合并接口/减少接口
- 渲染分级
- 骨架屏 + 异步渲染`,"比如: 旧项目 webpackChunkName 设置不和导致code slipt 基本没效果, 根据项目实际重新配置 webpackChunkName"],answerHtml:[`<ul>
<li>路由级 按需加载</li>
<li>使用 Preload / Prefetch 提前请求关键资源</li>
<li>gzip 压缩</li>
<li>Tree Shaking</li>
<li>loading</li>
<li>合并接口/减少接口</li>
<li>渲染分级</li>
<li>骨架屏 + 异步渲染</li>
</ul>`,"<p>比如: 旧项目 webpackChunkName 设置不和导致code slipt 基本没效果, 根据项目实际重新配置 webpackChunkName</p>"],reference:"/myKMS/interview/index#_9-请分享一个你通过优化前端性能提升用户体验的案例-具体用了哪些技术手段",source:"/myKMS/interview/index"},{id:49,question:"想象一下，如果你的团队在开发过程中遇到第三方库的严重漏洞，你会如何处理",answer:[`1️⃣ 立即评估风险
- 确认漏洞影响范围
- 确定漏洞严重性`,`2️⃣ 暂时缓解方案
如果漏洞立即可被利用：
- 临时回退/锁定依赖版本：回退到无漏洞的历史版本；
- 增加防护：例如在后端增加校验、限制敏感接口调用、关闭受影响功能；
- 升级依赖库：如果官方已经修复，尽快升级并回归测试。`,"关键点：**先保护生产环境，保证业务安全**",`3️⃣ 团队协作与信息通报
- 通知相关团队：产品、测试、运维和安全团队；
- 记录漏洞事件：漏洞类型、影响范围、临时处理方案；
- 同步上线计划：判断是否需要紧急发布补丁，或在下次发布中修复。`,`4️⃣ 长期解决方案
- 建立依赖管理策略
- 替换或隔离高风险库
- 增强 CI/CD 安全管控`],answerHtml:[`<p>1️⃣ 立即评估风险</p>
<ul>
<li>确认漏洞影响范围</li>
<li>确定漏洞严重性</li>
</ul>`,`<p>2️⃣ 暂时缓解方案
如果漏洞立即可被利用：</p>
<ul>
<li>临时回退/锁定依赖版本：回退到无漏洞的历史版本；</li>
<li>增加防护：例如在后端增加校验、限制敏感接口调用、关闭受影响功能；</li>
<li>升级依赖库：如果官方已经修复，尽快升级并回归测试。</li>
</ul>`,"<p>关键点：<strong>先保护生产环境，保证业务安全</strong></p>",`<p>3️⃣ 团队协作与信息通报</p>
<ul>
<li>通知相关团队：产品、测试、运维和安全团队；</li>
<li>记录漏洞事件：漏洞类型、影响范围、临时处理方案；</li>
<li>同步上线计划：判断是否需要紧急发布补丁，或在下次发布中修复。</li>
</ul>`,`<p>4️⃣ 长期解决方案</p>
<ul>
<li>建立依赖管理策略</li>
<li>替换或隔离高风险库</li>
<li>增强 CI/CD 安全管控</li>
</ul>`],reference:"/myKMS/interview/index#_10-想象一下-如果你的团队在开发过程中遇到第三方库的严重漏洞-你会如何处理",source:"/myKMS/interview/index"},{id:50,question:"请求竞态如何处理?",answer:["竞态往往导致了 UI 显示错误的旧数据",`1. 请求标识（requestId + 比对）
- 每个请求都有唯一 ID，只保留最后一次发出的响应结果。
  react 可以使用 ref 包裹 lastRequestId`,`\`\`\`
let lastRequestId = 0;

async function fetchData(query) {
  const requestId = ++lastRequestId; // 每次请求自增
  const res = await fetch(\`/api/search?q=\${query}\`);
  const data = await res.json();

  if (requestId === lastRequestId) {
    setData(data); // 只有最新请求才能更新UI
  }
}

\`\`\``,`2. AbortController（中断旧请求）
- 在发新请求前，主动“中止”旧请求。`,"3. 使用 useEffect + cleanup",`\`\`\`
useEffect(() => {
  let canceled = false;

  (async () => {
    const res = await fetch(\`/api/data?id=\${id}\`);
    const data = await res.json();
    if (!canceled) setData(data);
  })();

  return () => (canceled = true); // 清理逻辑
}, [id]);

\`\`\``,"4. 使用 SWR / React Query 等数据层库","请求竞态的本质是异步返回的先后顺序失序。",`解决方案的核心思想就是：
- 要么 中止旧请求；
- 要么 忽略旧响应；
- 或者 让库帮你管理一致性。`],answerHtml:["<p>竞态往往导致了 UI 显示错误的旧数据</p>",`<ol>
<li>请求标识（requestId + 比对）</li>
</ol>
<ul>
<li>每个请求都有唯一 ID，只保留最后一次发出的响应结果。
react 可以使用 ref 包裹 lastRequestId</li>
</ul>`,`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><!--::markdown-it-async::j43tmc068qrsfq2p9u9dsm::--><code>let lastRequestId = 0;

async function fetchData(query) {
  const requestId = ++lastRequestId; // 每次请求自增
  const res = await fetch(\`/api/search?q=\${query}\`);
  const data = await res.json();

  if (requestId === lastRequestId) {
    setData(data); // 只有最新请求才能更新UI
  }
}
</code></pre>
</div>`,`<ol start="2">
<li>AbortController（中断旧请求）</li>
</ol>
<ul>
<li>在发新请求前，主动“中止”旧请求。</li>
</ul>`,`<ol start="3">
<li>使用 useEffect + cleanup</li>
</ol>`,`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><!--::markdown-it-async::l45qint3cgqo8x1cu0gh1n::--><code>useEffect(() =&gt; {
  let canceled = false;

  (async () =&gt; {
    const res = await fetch(\`/api/data?id=\${id}\`);
    const data = await res.json();
    if (!canceled) setData(data);
  })();

  return () =&gt; (canceled = true); // 清理逻辑
}, [id]);
</code></pre>
</div>`,`<ol start="4">
<li>使用 SWR / React Query 等数据层库</li>
</ol>`,"<p>请求竞态的本质是异步返回的先后顺序失序。</p>",`<p>解决方案的核心思想就是：</p>
<ul>
<li>要么 中止旧请求；</li>
<li>要么 忽略旧响应；</li>
<li>或者 让库帮你管理一致性。</li>
</ul>`],reference:"/myKMS/interview/index#_11-请求竞态如何处理",source:"/myKMS/interview/index"},{id:51,question:"实现 从详情页返回列表页保存上次加载的数据和自动还原上次的浏览位置。",answer:[`| 方案                | 实现原理                                                | 适用场景       |
| ----------------- | --------------------------------------------------- | ---------- |
| **方案 1：状态提升到全局**  | 把列表数据与滚动位置存入全局状态（Context、Redux、Recoil、Zustand等）     | ✅ 通用、推荐    |
| **方案 2：缓存整个列表组件** | 使用 \`<KeepAlive>\` 或路由缓存（React Router + custom cache） | ✅ 简单但侵入性较高 |`,"Vue 3 自带了` <KeepAlive>` 组件","react 实现 keep-alive",`\`\`\`
// KeepAlive.jsx 
import { useRef } from 'react';
import { useLocation } from 'react-router-dom';

export default function KeepAlive({ children }) {
  const location = useLocation();
  const cacheRef = useRef({});
  const path = location.pathname;

  Object.keys(cacheRef.current).forEach((key) => {
    cacheRef.current[key].style.display = key === path ? 'block' : 'none';
  });

  if (!cacheRef.current[path]) {
    const div = document.createElement('div');
    div.style.display = 'block';
    cacheRef.current[path] = div;
  }

  return (
    <>
      {Object.entries(cacheRef.current).map(([key, container]) => (
        <div
          key={key}
          style={{ display: key === path ? 'block' : 'none' }}
        >
          {key === path ? children : null}
        </div>
      ))}
    </>
  );
}

\`\`\``],answerHtml:[`<table tabindex="0">
<thead>
<tr>
<th>方案</th>
<th>实现原理</th>
<th>适用场景</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>方案 1：状态提升到全局</strong></td>
<td>把列表数据与滚动位置存入全局状态（Context、Redux、Recoil、Zustand等）</td>
<td>✅ 通用、推荐</td>
</tr>
<tr>
<td><strong>方案 2：缓存整个列表组件</strong></td>
<td>使用 <code>&lt;KeepAlive&gt;</code> 或路由缓存（React Router + custom cache）</td>
<td>✅ 简单但侵入性较高</td>
</tr>
</tbody>
</table>`,"<p>Vue 3 自带了<code> &lt;KeepAlive&gt;</code> 组件</p>","<p>react 实现 keep-alive</p>",`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><!--::markdown-it-async::3r3h3lrqsri22f7j2ac0h6::--><code>// KeepAlive.jsx 
import { useRef } from &#039;react&#039;;
import { useLocation } from &#039;react-router-dom&#039;;

export default function KeepAlive({ children }) {
  const location = useLocation();
  const cacheRef = useRef({});
  const path = location.pathname;

  Object.keys(cacheRef.current).forEach((key) =&gt; {
    cacheRef.current[key].style.display = key === path ? &#039;block&#039; : &#039;none&#039;;
  });

  if (!cacheRef.current[path]) {
    const div = document.createElement(&#039;div&#039;);
    div.style.display = &#039;block&#039;;
    cacheRef.current[path] = div;
  }

  return (
    &lt;&gt;
      {Object.entries(cacheRef.current).map(([key, container]) =&gt; (
        &lt;div
          key={key}
          style={{ display: key === path ? &#039;block&#039; : &#039;none&#039; }}
        &gt;
          {key === path ? children : null}
        &lt;/div&gt;
      ))}
    &lt;/&gt;
  );
}
</code></pre>
</div>`],reference:"/myKMS/interview/index#_12-实现-从详情页返回列表页保存上次加载的数据和自动还原上次的浏览位置。",source:"/myKMS/interview/index"},{id:52,question:"设计一套全站页面加载耗时统计工具",answer:[`- 实时/离线监控页面加载体验（首屏、交互、资源、网络等）。
- 支持 SPA + MPA、移动端与桌面端。
- 能按 URL、用户群、地理/运营维度切分（例如：p50/p90/p95）。
- 支持异常告警（例如：p95 突增、LCP 超阈值）。
- 低埋点侵入、低成本存储、可扩展分析与可视化。`,"指标（What to collect）",`- 分为「关键体验指标（Web Vitals）」与「补充指标」：
  - 核心（必须）
    - LCP（Largest Contentful Paint）
    - FCP（First Contentful Paint）
    - TTFB（Time To First Byte）
    - DOMContentLoaded（DCL）
    - Load Event（onload）
    - CLS（Cumulative Layout Shift）
    - FID / INP（First Input Delay / Interaction to Next Paint）
    - JS/Vue/React 渲染耗时（自定义埋点）
    - 页面总体耗时：导航开始到 onload、以及自定的“首交互完成”时间`,`- 资源类（可选）
  - Resource timing（各静态资源的加载耗时：dns, connect, ssl, request, response, duration）
  - 图片/字体/第三方脚本的失败率与耗时`,"网络/环境上下文（必须）",`- URL / route（路由名）
  - Referrer / entry type（navigate, reload, back_forward）
  - UserAgent / 浏览器、版本、操作系统
  - 网络信息：effectiveType、downlink、rtt（若可用）
  - 地点（可选：基于 IP 反查或前端传入地区）
  - Client timestamp / server timestamp（用于校准）`,"错误上下文（可选）","- JS 错误（message, stack, filename, lineno）以便关联慢页面与错误。","采样与频率",`- 生产环境：默认采样率 1% - 10%（视流量与预算），关键页面或实验中 100% 采集。
  - 支持动态下发采样策略（CDN / 配置中心）。`,"前端采集 SDK（关键实现要点 + 代码示例）","要点：",`- 仅在 document.visibilityState === 'visible' 时采集（避免 background 干扰）
- 优先用 PerformanceObserver 捕获 LCP / FID / CLS / Paint
- 收集 performance.getEntriesByType('resource')（资源耗时，限量采样）
- 批量上报：合并短时间内的多条事件，阈值（条数/时长）触发上报
- 在 pagehide/unload 用 navigator.sendBeacon 发送最后一条数据
- 控制上报体积：每次上报限制 10KB 左右，过大时只上报关键字段或采样`,"js sdk",`\`\`\`
// perf-sdk.js (浏览器端核心逻辑, 精简示例)
(function (window) {
  const APP = {};
  const SEND_URL = '/beacon/perf';
  const BATCH_MAX = 20;
  const BATCH_INTERVAL = 5000; // ms
  let queue = [];

  function now() { return Math.round(performance.now()); }

  // 收集 web vitals
  function installVitals() {
    // LCP
    try {
      const po = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const last = entries[entries.length - 1];
        if (last) push({ k: 'lcp', v: Math.round(last.startTime) });
      });
      po.observe({ type: 'largest-contentful-paint', buffered: true });
    } catch (e) {}

    // CLS
    try {
      let clsValue = 0;
      const po2 = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) clsValue += entry.value;
        }
      });
      po2.observe({ type: 'layout-shift', buffered: true });
      window.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'hidden') push({ k: 'cls', v: clsValue });
      });
    } catch (e) {}

    // FCP
    try {
      const po3 = new PerformanceObserver((list) => {
        const fcp = list.getEntries()[0];
        if (fcp) push({ k: 'fcp', v: Math.round(fcp.startTime) });
      });
      po3.observe({ type: 'paint', buffered: true });
    } catch (e) {}
  }

  function captureNavigation() {
    const nav = performance.getEntriesByType('navigation')[0];
    if (nav) {
      push({ k: 'ttfb', v: Math.round(nav.responseStart) });
      push({ k: 'domcontentloaded', v: Math.round(nav.domContentLoadedEventEnd) });
      push({ k: 'load', v: Math.round(nav.loadEventEnd) });
    } else if (performance.timing) {
      const t = performance.timing;
      push({ k: 'ttfb', v: t.responseStart - t.requestStart });
    }
  }

  function push(event) {
    const payload = {
      ts: Date.now(),
      url: location.pathname + location.search,
      ua: navigator.userAgent,
      navType: performance.getEntriesByType('navigation')[0]?.type || 'navigate',
      ...event
    };
    queue.push(payload);
    if (queue.length >= BATCH_MAX) flush();
  }

  function flush() {
    if (queue.length === 0) return;
    const body = JSON.stringify(queue.splice(0, BATCH_MAX));
    // prefer sendBeacon
    if (navigator.sendBeacon) {
      navigator.sendBeacon(SEND_URL, body);
    } else {
      fetch(SEND_URL, { method: 'POST', keepalive: true, headers: { 'Content-Type': 'application/json' }, body }).catch(()=>{});
    }
  }

  // 定时发送
  setInterval(flush, BATCH_INTERVAL);

  // 在卸载页面时发送
  window.addEventListener('pagehide', flush);

  // init
  installVitals();
  captureNavigation();
  APP.flush = flush;
  window.__PerfSDK = APP;
})(window);


\`\`\``],answerHtml:[`<ul>
<li>实时/离线监控页面加载体验（首屏、交互、资源、网络等）。</li>
<li>支持 SPA + MPA、移动端与桌面端。</li>
<li>能按 URL、用户群、地理/运营维度切分（例如：p50/p90/p95）。</li>
<li>支持异常告警（例如：p95 突增、LCP 超阈值）。</li>
<li>低埋点侵入、低成本存储、可扩展分析与可视化。</li>
</ul>`,"<p>指标（What to collect）</p>",`<ul>
<li>分为「关键体验指标（Web Vitals）」与「补充指标」：
<ul>
<li>核心（必须）
<ul>
<li>LCP（Largest Contentful Paint）</li>
<li>FCP（First Contentful Paint）</li>
<li>TTFB（Time To First Byte）</li>
<li>DOMContentLoaded（DCL）</li>
<li>Load Event（onload）</li>
<li>CLS（Cumulative Layout Shift）</li>
<li>FID / INP（First Input Delay / Interaction to Next Paint）</li>
<li>JS/Vue/React 渲染耗时（自定义埋点）</li>
<li>页面总体耗时：导航开始到 onload、以及自定的“首交互完成”时间</li>
</ul>
</li>
</ul>
</li>
</ul>`,`<ul>
<li>资源类（可选）
<ul>
<li>Resource timing（各静态资源的加载耗时：dns, connect, ssl, request, response, duration）</li>
<li>图片/字体/第三方脚本的失败率与耗时</li>
</ul>
</li>
</ul>`,"<p>网络/环境上下文（必须）</p>",`<ul>
<li>URL / route（路由名）
<ul>
<li>Referrer / entry type（navigate, reload, back_forward）</li>
<li>UserAgent / 浏览器、版本、操作系统</li>
<li>网络信息：effectiveType、downlink、rtt（若可用）</li>
<li>地点（可选：基于 IP 反查或前端传入地区）</li>
<li>Client timestamp / server timestamp（用于校准）</li>
</ul>
</li>
</ul>`,"<p>错误上下文（可选）</p>",`<ul>
<li>JS 错误（message, stack, filename, lineno）以便关联慢页面与错误。</li>
</ul>`,"<p>采样与频率</p>",`<ul>
<li>生产环境：默认采样率 1% - 10%（视流量与预算），关键页面或实验中 100% 采集。
<ul>
<li>支持动态下发采样策略（CDN / 配置中心）。</li>
</ul>
</li>
</ul>`,"<p>前端采集 SDK（关键实现要点 + 代码示例）</p>","<p>要点：</p>",`<ul>
<li>仅在 document.visibilityState === 'visible' 时采集（避免 background 干扰）</li>
<li>优先用 PerformanceObserver 捕获 LCP / FID / CLS / Paint</li>
<li>收集 performance.getEntriesByType('resource')（资源耗时，限量采样）</li>
<li>批量上报：合并短时间内的多条事件，阈值（条数/时长）触发上报</li>
<li>在 pagehide/unload 用 navigator.sendBeacon 发送最后一条数据</li>
<li>控制上报体积：每次上报限制 10KB 左右，过大时只上报关键字段或采样</li>
</ul>`,"<p>js sdk</p>",`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><!--::markdown-it-async::gfce9djsjtwxxmdl5oraw::--><code>// perf-sdk.js (浏览器端核心逻辑, 精简示例)
(function (window) {
  const APP = {};
  const SEND_URL = &#039;/beacon/perf&#039;;
  const BATCH_MAX = 20;
  const BATCH_INTERVAL = 5000; // ms
  let queue = [];

  function now() { return Math.round(performance.now()); }

  // 收集 web vitals
  function installVitals() {
    // LCP
    try {
      const po = new PerformanceObserver((list) =&gt; {
        const entries = list.getEntries();
        const last = entries[entries.length - 1];
        if (last) push({ k: &#039;lcp&#039;, v: Math.round(last.startTime) });
      });
      po.observe({ type: &#039;largest-contentful-paint&#039;, buffered: true });
    } catch (e) {}

    // CLS
    try {
      let clsValue = 0;
      const po2 = new PerformanceObserver((list) =&gt; {
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) clsValue += entry.value;
        }
      });
      po2.observe({ type: &#039;layout-shift&#039;, buffered: true });
      window.addEventListener(&#039;visibilitychange&#039;, () =&gt; {
        if (document.visibilityState === &#039;hidden&#039;) push({ k: &#039;cls&#039;, v: clsValue });
      });
    } catch (e) {}

    // FCP
    try {
      const po3 = new PerformanceObserver((list) =&gt; {
        const fcp = list.getEntries()[0];
        if (fcp) push({ k: &#039;fcp&#039;, v: Math.round(fcp.startTime) });
      });
      po3.observe({ type: &#039;paint&#039;, buffered: true });
    } catch (e) {}
  }

  function captureNavigation() {
    const nav = performance.getEntriesByType(&#039;navigation&#039;)[0];
    if (nav) {
      push({ k: &#039;ttfb&#039;, v: Math.round(nav.responseStart) });
      push({ k: &#039;domcontentloaded&#039;, v: Math.round(nav.domContentLoadedEventEnd) });
      push({ k: &#039;load&#039;, v: Math.round(nav.loadEventEnd) });
    } else if (performance.timing) {
      const t = performance.timing;
      push({ k: &#039;ttfb&#039;, v: t.responseStart - t.requestStart });
    }
  }

  function push(event) {
    const payload = {
      ts: Date.now(),
      url: location.pathname + location.search,
      ua: navigator.userAgent,
      navType: performance.getEntriesByType(&#039;navigation&#039;)[0]?.type || &#039;navigate&#039;,
      ...event
    };
    queue.push(payload);
    if (queue.length &gt;= BATCH_MAX) flush();
  }

  function flush() {
    if (queue.length === 0) return;
    const body = JSON.stringify(queue.splice(0, BATCH_MAX));
    // prefer sendBeacon
    if (navigator.sendBeacon) {
      navigator.sendBeacon(SEND_URL, body);
    } else {
      fetch(SEND_URL, { method: &#039;POST&#039;, keepalive: true, headers: { &#039;Content-Type&#039;: &#039;application/json&#039; }, body }).catch(()=&gt;{});
    }
  }

  // 定时发送
  setInterval(flush, BATCH_INTERVAL);

  // 在卸载页面时发送
  window.addEventListener(&#039;pagehide&#039;, flush);

  // init
  installVitals();
  captureNavigation();
  APP.flush = flush;
  window.__PerfSDK = APP;
})(window);

</code></pre>
</div>`],reference:"/myKMS/interview/index#_13-设计一套全站页面加载耗时统计工具",source:"/myKMS/interview/index"},{id:53,question:"H5 如何解决移动端适配问题",answer:["HTML`<meta viewport>`标签告诉浏览器页面的“逻辑宽度”和缩放比例。",'`<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">`',"- `width=device-width`：逻辑宽度等于设备宽度；","- `initial-scale=1.0`：不缩放；","- 禁止用户缩放，避免布局错乱。","- 使用 rem 适配 ;","- 使用  vw/vh 适配"],answerHtml:["<p>HTML<code>&lt;meta viewport&gt;</code>标签告诉浏览器页面的“逻辑宽度”和缩放比例。</p>","<p><code>&lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no&quot;&gt;</code></p>",`<ul>
<li><code>width=device-width</code>：逻辑宽度等于设备宽度；</li>
</ul>`,`<ul>
<li><code>initial-scale=1.0</code>：不缩放；</li>
</ul>`,`<ul>
<li>禁止用户缩放，避免布局错乱。</li>
</ul>`,`<ul>
<li>使用 rem 适配 ;</li>
</ul>`,`<ul>
<li>使用  vw/vh 适配</li>
</ul>`],reference:"/myKMS/interview/index#_14-h5-如何解决移动端适配问题",source:"/myKMS/interview/index"},{id:54,question:"函数式编程",answer:["函数式编程是一种编程范式，它强调使用函数进行计算，尽量避免可变状态和副作用。",`- **函数是一等公民：函数可以像变量一样传递、返回、赋值。**
- **避免共享状态：数据不可变，改变数据会产生新副本。**
- **组合函数：通过小函数组合形成大函数。**`,"| 概念                              | 说明                    | 示例（JS）                                                            |\n| ------------------------------- | --------------------- | ----------------------------------------------------------------- |\n| **纯函数（Pure Function）**          | 相同输入，永远得到相同输出，不修改外部状态 | `const add = (a,b) => a+b;`                                       |\n| **不可变数据（Immutable）**            | 数据不被修改，每次操作返回新对象/数组   | `const newArr = [...arr, 4];`                                     |\n| **高阶函数（Higher-Order Function）** | 函数作为参数或返回值            | `arr.map(x => x*2)`                                               |\n| **函数组合（Function Composition）**  | 小函数组合形成复杂逻辑           | `const f = x => x+1; const g = x => x*2; const h = x => g(f(x));` |\n| **递归（Recursion）**               | FP 常用代替循环             | `const factorial = n => n<=1?1:n*factorial(n-1);`                 |\n| **不可变状态与副作用控制**                 | 避免修改全局变量              | 使用 `map`, `filter`, `reduce`                                      |"],answerHtml:["<p>函数式编程是一种编程范式，它强调使用函数进行计算，尽量避免可变状态和副作用。</p>",`<ul>
<li><strong>函数是一等公民：函数可以像变量一样传递、返回、赋值。</strong></li>
<li><strong>避免共享状态：数据不可变，改变数据会产生新副本。</strong></li>
<li><strong>组合函数：通过小函数组合形成大函数。</strong></li>
</ul>`,`<table tabindex="0">
<thead>
<tr>
<th>概念</th>
<th>说明</th>
<th>示例（JS）</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>纯函数（Pure Function）</strong></td>
<td>相同输入，永远得到相同输出，不修改外部状态</td>
<td><code>const add = (a,b) =&gt; a+b;</code></td>
</tr>
<tr>
<td><strong>不可变数据（Immutable）</strong></td>
<td>数据不被修改，每次操作返回新对象/数组</td>
<td><code>const newArr = [...arr, 4];</code></td>
</tr>
<tr>
<td><strong>高阶函数（Higher-Order Function）</strong></td>
<td>函数作为参数或返回值</td>
<td><code>arr.map(x =&gt; x*2)</code></td>
</tr>
<tr>
<td><strong>函数组合（Function Composition）</strong></td>
<td>小函数组合形成复杂逻辑</td>
<td><code>const f = x =&gt; x+1; const g = x =&gt; x*2; const h = x =&gt; g(f(x));</code></td>
</tr>
<tr>
<td><strong>递归（Recursion）</strong></td>
<td>FP 常用代替循环</td>
<td><code>const factorial = n =&gt; n&lt;=1?1:n*factorial(n-1);</code></td>
</tr>
<tr>
<td><strong>不可变状态与副作用控制</strong></td>
<td>避免修改全局变量</td>
<td>使用 <code>map</code>, <code>filter</code>, <code>reduce</code></td>
</tr>
</tbody>
</table>`],reference:"/myKMS/interview/index#_15-函数式编程",source:"/myKMS/interview/index"},{id:55,question:"js如何统计长任务时间、长任务执行次数",answer:["**当主线程（Main Thread）执行某个任务超过 50ms**，它就被标记为一个 “Long Task”。",'浏览器提供了 PerformanceObserver 接口，监听类型为 "longtask" 的性能条目。',`\`\`\`

let longTaskCount = 0;
let totalLongTaskTime = 0;

if ('PerformanceObserver' in window) {
  const observer = new PerformanceObserver((list) => {
    list.getEntries().forEach(entry => {
      // 每个 entry 表示一个长任务
      longTaskCount++;
      totalLongTaskTime += entry.duration;

      console.log(\`[LongTask] \${entry.name} 耗时 \${entry.duration.toFixed(2)}ms\`);
      console.log('来源：', item.name, '类型：', item.entryType, 'URL：', item.containerSrc);
    });
  });

  observer.observe({ entryTypes: ['longtask'] });
}


\`\`\``],answerHtml:["<p><strong>当主线程（Main Thread）执行某个任务超过 50ms</strong>，它就被标记为一个 “Long Task”。</p>","<p>浏览器提供了 PerformanceObserver 接口，监听类型为 &quot;longtask&quot; 的性能条目。</p>",`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><!--::markdown-it-async::7m2oyoez9upx3tg3c6ow::--><code>
let longTaskCount = 0;
let totalLongTaskTime = 0;

if (&#039;PerformanceObserver&#039; in window) {
  const observer = new PerformanceObserver((list) =&gt; {
    list.getEntries().forEach(entry =&gt; {
      // 每个 entry 表示一个长任务
      longTaskCount++;
      totalLongTaskTime += entry.duration;

      console.log(\`[LongTask] \${entry.name} 耗时 \${entry.duration.toFixed(2)}ms\`);
      console.log(&#039;来源：&#039;, item.name, &#039;类型：&#039;, item.entryType, &#039;URL：&#039;, item.containerSrc);
    });
  });

  observer.observe({ entryTypes: [&#039;longtask&#039;] });
}

</code></pre>
</div>`],reference:"/myKMS/interview/index#_16-js如何统计长任务时间、长任务执行次数",source:"/myKMS/interview/index"},{id:56,question:"如何禁止别人调试自己的前端页面代码?",answer:["- 代码混淆 & 压缩 (obfuscation / minification)","- 不提供／禁用 source-map 在生产环境",`- 检测 DevTools 或控制台开启并做限制
  - 无限 debugger, 定时器内无限 debugger, 打卡DevTools 就会无限DevTools
  - 无限 debugger 代码 加密 混淆, 用 eval 执行
  - 判断宽高变化`,"- 将核心逻辑或敏感信息放到服务端执行","- 限制 API／资源访问，通过认证、授权、接口防滥用"],answerHtml:[`<ul>
<li>代码混淆 &amp; 压缩 (obfuscation / minification)</li>
</ul>`,`<ul>
<li>不提供／禁用 source-map 在生产环境</li>
</ul>`,`<ul>
<li>检测 DevTools 或控制台开启并做限制
<ul>
<li>无限 debugger, 定时器内无限 debugger, 打卡DevTools 就会无限DevTools</li>
<li>无限 debugger 代码 加密 混淆, 用 eval 执行</li>
<li>判断宽高变化</li>
</ul>
</li>
</ul>`,`<ul>
<li>将核心逻辑或敏感信息放到服务端执行</li>
</ul>`,`<ul>
<li>限制 API／资源访问，通过认证、授权、接口防滥用</li>
</ul>`],reference:"/myKMS/interview/index#_18-如何禁止别人调试自己的前端页面代码",source:"/myKMS/interview/index"},{id:57,question:"web 系统里面， 如何对图片进行优化？",answer:[`总体目标: **以 最小的文件体积、最快的加载速度、最好的视觉质量 呈现图片。**
图片优化是提升用户体验、提高网站性能、减少流量消耗和增加搜索引擎曝光度的关键因素。`,`| 优化方向          | 关键手段                    | 说明            |
| ------------- | ----------------------- | ------------- |
| 1️⃣ 格式优化      | WebP / AVIF / SVG 等新格式  | 减少体积，兼容回退     |
| 2️⃣ 压缩优化      | 无损 / 有损压缩               | 使用工具或 CI 自动处理 |
| 3️⃣ 尺寸优化      | 响应式图片（\`srcset\`）         | 按设备分发合适大小     |
| 4️⃣ 缓存优化      | HTTP 缓存 + CDN 缓存        | 减少重复加载        |
| 5️⃣ 加载优化      | 懒加载 / 占位图               | 减少首屏压力        |
| 6️⃣ 传输优化      | CDN 加速 + Brotli/Gzip 压缩 | 优化网络传输层       |
| 7️⃣ 渲染优化      | 使用 CSS / SVG 替代位图       | 减少渲染消耗        |
| 8️⃣ 预加载与优先级控制 | preload / fetchpriority | 优化关键资源加载顺序    |`,"格式优化：选对图片格式",`| 类型              | 适用场景    | 优点             | 缺点           |
| --------------- | ------- | -------------- | ------------ |
| **JPEG**        | 照片、复杂色彩 | 体积小            | 有损压缩         |
| **PNG**         | 图标、透明图  | 无损             | 体积大          |
| **SVG**         | 矢量图、图标  | 无限放大不失真        | 不适合照片        |
| **WebP**        | 通用      | 小体积 + 透明 + 动图  | 旧浏览器兼容性较差    |
| **AVIF**        | 下一代格式   | 比 WebP 再小 20%+ | 解码慢，部分浏览器不支持 |
| **GIF → video** | 动图替换    | 用 MP4 / WebM   | 体积更小，流畅度高    |
**使用 WebP**`,"性能监控与指标追踪","| 指标                                 | 说明          | 监控方式                  |\n| ---------------------------------- | ----------- | --------------------- |\n| **LCP (Largest Contentful Paint)** | 首屏最大图片加载时间  | `PerformanceObserver` |\n| **CLS (Cumulative Layout Shift)**  | 图片未占位导致布局抖动 | 预设宽高可避免               |\n| **Image Decode Time**              | 解码耗时        | `PerformanceEntry`    |","**“新格式、小体积、延迟加载、缓存稳、动态转。”** 即：WebP/AVIF + 压缩 + LazyLoad + CDN + 缓存。"],answerHtml:[`<p>总体目标: <strong>以 最小的文件体积、最快的加载速度、最好的视觉质量 呈现图片。</strong>
图片优化是提升用户体验、提高网站性能、减少流量消耗和增加搜索引擎曝光度的关键因素。</p>`,`<table tabindex="0">
<thead>
<tr>
<th>优化方向</th>
<th>关键手段</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>1️⃣ 格式优化</td>
<td>WebP / AVIF / SVG 等新格式</td>
<td>减少体积，兼容回退</td>
</tr>
<tr>
<td>2️⃣ 压缩优化</td>
<td>无损 / 有损压缩</td>
<td>使用工具或 CI 自动处理</td>
</tr>
<tr>
<td>3️⃣ 尺寸优化</td>
<td>响应式图片（<code>srcset</code>）</td>
<td>按设备分发合适大小</td>
</tr>
<tr>
<td>4️⃣ 缓存优化</td>
<td>HTTP 缓存 + CDN 缓存</td>
<td>减少重复加载</td>
</tr>
<tr>
<td>5️⃣ 加载优化</td>
<td>懒加载 / 占位图</td>
<td>减少首屏压力</td>
</tr>
<tr>
<td>6️⃣ 传输优化</td>
<td>CDN 加速 + Brotli/Gzip 压缩</td>
<td>优化网络传输层</td>
</tr>
<tr>
<td>7️⃣ 渲染优化</td>
<td>使用 CSS / SVG 替代位图</td>
<td>减少渲染消耗</td>
</tr>
<tr>
<td>8️⃣ 预加载与优先级控制</td>
<td>preload / fetchpriority</td>
<td>优化关键资源加载顺序</td>
</tr>
</tbody>
</table>`,"<p>格式优化：选对图片格式</p>",`<table tabindex="0">
<thead>
<tr>
<th>类型</th>
<th>适用场景</th>
<th>优点</th>
<th>缺点</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>JPEG</strong></td>
<td>照片、复杂色彩</td>
<td>体积小</td>
<td>有损压缩</td>
</tr>
<tr>
<td><strong>PNG</strong></td>
<td>图标、透明图</td>
<td>无损</td>
<td>体积大</td>
</tr>
<tr>
<td><strong>SVG</strong></td>
<td>矢量图、图标</td>
<td>无限放大不失真</td>
<td>不适合照片</td>
</tr>
<tr>
<td><strong>WebP</strong></td>
<td>通用</td>
<td>小体积 + 透明 + 动图</td>
<td>旧浏览器兼容性较差</td>
</tr>
<tr>
<td><strong>AVIF</strong></td>
<td>下一代格式</td>
<td>比 WebP 再小 20%+</td>
<td>解码慢，部分浏览器不支持</td>
</tr>
<tr>
<td><strong>GIF → video</strong></td>
<td>动图替换</td>
<td>用 MP4 / WebM</td>
<td>体积更小，流畅度高</td>
</tr>
<tr>
<td><strong>使用 WebP</strong></td>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>`,"<p>性能监控与指标追踪</p>",`<table tabindex="0">
<thead>
<tr>
<th>指标</th>
<th>说明</th>
<th>监控方式</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>LCP (Largest Contentful Paint)</strong></td>
<td>首屏最大图片加载时间</td>
<td><code>PerformanceObserver</code></td>
</tr>
<tr>
<td><strong>CLS (Cumulative Layout Shift)</strong></td>
<td>图片未占位导致布局抖动</td>
<td>预设宽高可避免</td>
</tr>
<tr>
<td><strong>Image Decode Time</strong></td>
<td>解码耗时</td>
<td><code>PerformanceEntry</code></td>
</tr>
</tbody>
</table>`,"<p><strong>“新格式、小体积、延迟加载、缓存稳、动态转。”</strong> 即：WebP/AVIF + 压缩 + LazyLoad + CDN + 缓存。</p>"],reference:"/myKMS/interview/index#_19-web-系统里面-如何对图片进行优化",source:"/myKMS/interview/index"},{id:58,question:"后端一次性返回树形结构数据，数据量非常大, 前端该如何处理？",answer:["**“只渲染用户当前可见的部分 + 按需加载或异步展开 + 高效数据结构存取”**",`| 目标       | 核心思路         | 实现方式                                |
| -------- | ------------ | ----------------------------------- |
| 降低初始渲染压力 | 懒加载、虚拟化      | 按需展开、按需渲染                           |
| 优化渲染性能   | 虚拟滚动、diff 优化 | react-window / vue-virtual-scroller |
| 优化数据结构   | 扁平化存储        | Map + parent/children 索引            |
| 提升交互性能   | 异步渲染 / 分片渲染  | requestIdleCallback + 分批渲染          |
| 资源分块     | 分页 / 分层加载    | 后端分页返回子节点                           |`,`- 后端按需返回
  - 前端仅请求需要展开的节点子树
- 虚拟滚动
  - 即使数据全在内存中，也只渲染可视范围内的节点
- 数据扁平化 + Map 索引结构
  - 将嵌套树结构转成扁平表结构，快速查找与局部更新。
- 分片渲染（Chunk Rendering）
  -  当必须一次性渲染大量节点时，用时间分片让主线程喘口气 😮
- Worker 分线程解析数据
  - 在后台线程中解析 / 扁平化树，主线程只负责渲染`,"**“懒加载、虚拟化、扁平存、分片渲、后台解。”**"],answerHtml:["<p><strong>“只渲染用户当前可见的部分 + 按需加载或异步展开 + 高效数据结构存取”</strong></p>",`<table tabindex="0">
<thead>
<tr>
<th>目标</th>
<th>核心思路</th>
<th>实现方式</th>
</tr>
</thead>
<tbody>
<tr>
<td>降低初始渲染压力</td>
<td>懒加载、虚拟化</td>
<td>按需展开、按需渲染</td>
</tr>
<tr>
<td>优化渲染性能</td>
<td>虚拟滚动、diff 优化</td>
<td>react-window / vue-virtual-scroller</td>
</tr>
<tr>
<td>优化数据结构</td>
<td>扁平化存储</td>
<td>Map + parent/children 索引</td>
</tr>
<tr>
<td>提升交互性能</td>
<td>异步渲染 / 分片渲染</td>
<td>requestIdleCallback + 分批渲染</td>
</tr>
<tr>
<td>资源分块</td>
<td>分页 / 分层加载</td>
<td>后端分页返回子节点</td>
</tr>
</tbody>
</table>`,`<ul>
<li>后端按需返回
<ul>
<li>前端仅请求需要展开的节点子树</li>
</ul>
</li>
<li>虚拟滚动
<ul>
<li>即使数据全在内存中，也只渲染可视范围内的节点</li>
</ul>
</li>
<li>数据扁平化 + Map 索引结构
<ul>
<li>将嵌套树结构转成扁平表结构，快速查找与局部更新。</li>
</ul>
</li>
<li>分片渲染（Chunk Rendering）
<ul>
<li>当必须一次性渲染大量节点时，用时间分片让主线程喘口气 😮</li>
</ul>
</li>
<li>Worker 分线程解析数据
<ul>
<li>在后台线程中解析 / 扁平化树，主线程只负责渲染</li>
</ul>
</li>
</ul>`,"<p><strong>“懒加载、虚拟化、扁平存、分片渲、后台解。”</strong></p>"],reference:"/myKMS/interview/index#_20-后端一次性返回树形结构数据-数据量非常大-前端该如何处理",source:"/myKMS/interview/index"},{id:59,question:"你认为组件封装的一些基本准则是什么？",answer:[`组件封装的一些基本准则包括：
1. 单一职责原则：一个组件应该具有单一的功能，并且只负责完成该功能，避免组件过于庞大和复
杂。
2. 高内聚低耦合：组件内部的各个部分之间应该紧密相关，组件与其他组件之间应该尽量解耦，减少
对外部的依赖。
3. 易用性：组件应该易于使用，提供清晰的接口和文档，使用户能够方便地使用组件。
4. 可扩展性：组件应该具有良好的扩展性，能够方便地添加新的功能或进行修改，同时不影响已有的
功能。
5. 可重用性：组件应该是可重用的，能够在多个项目中使用，减少重复开发的工作量。
6. 高效性：组件应该具有高性能和低资源消耗的特点，不会成为整个系统的性能瓶颈。
7. 安全性：组件应该具有安全性，能够防止恶意使用或攻击。
8. 可测试性：组件应该容易进行单元测试和集成测试，以保证组件的质量和稳定性`],answerHtml:[`<p>组件封装的一些基本准则包括：</p>
<ol>
<li>单一职责原则：一个组件应该具有单一的功能，并且只负责完成该功能，避免组件过于庞大和复
杂。</li>
<li>高内聚低耦合：组件内部的各个部分之间应该紧密相关，组件与其他组件之间应该尽量解耦，减少
对外部的依赖。</li>
<li>易用性：组件应该易于使用，提供清晰的接口和文档，使用户能够方便地使用组件。</li>
<li>可扩展性：组件应该具有良好的扩展性，能够方便地添加新的功能或进行修改，同时不影响已有的
功能。</li>
<li>可重用性：组件应该是可重用的，能够在多个项目中使用，减少重复开发的工作量。</li>
<li>高效性：组件应该具有高性能和低资源消耗的特点，不会成为整个系统的性能瓶颈。</li>
<li>安全性：组件应该具有安全性，能够防止恶意使用或攻击。</li>
<li>可测试性：组件应该容易进行单元测试和集成测试，以保证组件的质量和稳定性</li>
</ol>`],reference:"/myKMS/interview/index#_21-你认为组件封装的一些基本准则是什么",source:"/myKMS/interview/index"},{id:60,question:"组件升级怎么让使用这个组件的人都知道。",answer:[`- 语义化版本, 安装依赖自动升级
- 对接机器人, 群通知, 邮件通知
- 组件库加入运行时代码, 进行可版本检测, 不是最新时通知
- 文档更新
- 当面通知`],answerHtml:[`<ul>
<li>语义化版本, 安装依赖自动升级</li>
<li>对接机器人, 群通知, 邮件通知</li>
<li>组件库加入运行时代码, 进行可版本检测, 不是最新时通知</li>
<li>文档更新</li>
<li>当面通知</li>
</ul>`],reference:"/myKMS/interview/index#_22-组件升级怎么让使用这个组件的人都知道。",source:"/myKMS/interview/index"},{id:61,question:"如果让你设计项目自动设计组件升级，并且安全，你会怎么去设计",answer:[`\`\`\`

组件库发布
   │
   ├─ 生成 CHANGELOG
   ├─ 更新远程版本记录
   │
项目启动 / 构建
   │
   ├─ 自动检测组件版本
   │
   ├─ 判断安全性（PATCH / MINOR / MAJOR）
   │
   ├─ 控制台 / UI 提醒开发者
   │
   └─ 开发者选择：
        ├─ 自动升级（安全）
        └─ 手动升级（MAJOR）
   │
升级完成 → 自动记录版本 → 支持回滚

\`\`\``],answerHtml:[`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><!--::markdown-it-async::vbfbgb1g0kxoqo06f3b2::--><code>
组件库发布
   │
   ├─ 生成 CHANGELOG
   ├─ 更新远程版本记录
   │
项目启动 / 构建
   │
   ├─ 自动检测组件版本
   │
   ├─ 判断安全性（PATCH / MINOR / MAJOR）
   │
   ├─ 控制台 / UI 提醒开发者
   │
   └─ 开发者选择：
        ├─ 自动升级（安全）
        └─ 手动升级（MAJOR）
   │
升级完成 → 自动记录版本 → 支持回滚
</code></pre>
</div>`],reference:"/myKMS/interview/index#_23-如果让你设计项目自动设计组件升级-并且安全-你会怎么去设计",source:"/myKMS/interview/index"},{id:62,question:"前端 sourcemap原理",answer:["在现代前端构建后变成浏览器可执行的 压缩/混淆后的 JS、CSS 文件,如果出错，根本找不到源文件对应的行。于是引入 Source Map（源码映射文件） 来解决这个问题。","Source Map: **它本质上是一个 JSON 文件，记录了编译后代码和原始源码之间的 映射关系。**",`| 字段名                | 含义                         |
| ------------------ | -------------------------- |
| **version**        | Source Map 规范版本，目前是 3      |
| **file**           | 生成的文件名（编译后的）               |
| **sources**        | 源文件路径列表（相对路径或绝对路径）         |
| **sourcesContent** | 源文件内容（可选，便于调试）             |
| **names**          | 所有符号名（变量、函数名）              |
| **mappings**       | 最关键的部分！记录了 “编译后 → 源代码” 的映射 |`,"mappings 字段的核心 —— VLQ 编码",'mappings 是一串非常长的字符串（例如 "AAAAA,QAAQC,IAAI,CAAC"），它是使用 Base64 VLQ（Variable Length Quantity） 编码的。',"这一串编码可以还原出：",`- 目标文件的行、列；
- 对应的源文件 index；
- 源文件的行、列；
- 对应符号的 index（在 names 中）。`,"浏览器调试原理",`当你打开 DevTools 并加载一个带有 //# sourceMappingURL 的文件时：
- 浏览器读取 .map 文件；
- 根据 mappings 表恢复出源文件与压缩文件之间的映射；
- 如果 sourcesContent 存在，则直接显示源码；
- 否则请求原始 .ts/.jsx 文件；
- 当断点或错误发生时，浏览器通过映射表将位置还原到源代码行列。`],answerHtml:["<p>在现代前端构建后变成浏览器可执行的 压缩/混淆后的 JS、CSS 文件,如果出错，根本找不到源文件对应的行。于是引入 Source Map（源码映射文件） 来解决这个问题。</p>","<p>Source Map: <strong>它本质上是一个 JSON 文件，记录了编译后代码和原始源码之间的 映射关系。</strong></p>",`<table tabindex="0">
<thead>
<tr>
<th>字段名</th>
<th>含义</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>version</strong></td>
<td>Source Map 规范版本，目前是 3</td>
</tr>
<tr>
<td><strong>file</strong></td>
<td>生成的文件名（编译后的）</td>
</tr>
<tr>
<td><strong>sources</strong></td>
<td>源文件路径列表（相对路径或绝对路径）</td>
</tr>
<tr>
<td><strong>sourcesContent</strong></td>
<td>源文件内容（可选，便于调试）</td>
</tr>
<tr>
<td><strong>names</strong></td>
<td>所有符号名（变量、函数名）</td>
</tr>
<tr>
<td><strong>mappings</strong></td>
<td>最关键的部分！记录了 “编译后 → 源代码” 的映射</td>
</tr>
</tbody>
</table>`,"<p>mappings 字段的核心 —— VLQ 编码</p>","<p>mappings 是一串非常长的字符串（例如 &quot;AAAAA,QAAQC,IAAI,CAAC&quot;），它是使用 Base64 VLQ（Variable Length Quantity） 编码的。</p>","<p>这一串编码可以还原出：</p>",`<ul>
<li>目标文件的行、列；</li>
<li>对应的源文件 index；</li>
<li>源文件的行、列；</li>
<li>对应符号的 index（在 names 中）。</li>
</ul>`,"<p>浏览器调试原理</p>",`<p>当你打开 DevTools 并加载一个带有 //# sourceMappingURL 的文件时：</p>
<ul>
<li>浏览器读取 .map 文件；</li>
<li>根据 mappings 表恢复出源文件与压缩文件之间的映射；</li>
<li>如果 sourcesContent 存在，则直接显示源码；</li>
<li>否则请求原始 .ts/.jsx 文件；</li>
<li>当断点或错误发生时，浏览器通过映射表将位置还原到源代码行列。</li>
</ul>`],reference:"/myKMS/interview/index#_24-前端-sourcemap原理",source:"/myKMS/interview/index"},{id:63,question:"摘要和加密?",answer:[`| 概念                 | 功能                     | 可逆性       |
| ------------------ | ---------------------- | --------- |
| **摘要（Hash）**       | 把任意长度数据映射为固定长度“指纹”     | ❌ 不可逆     |
| **加密（Encryption）** | 保护数据机密性，转换成只有授权方能还原的密文 | ✅ 可逆（需密钥） |`,`摘要算法（Hash Function）是指一种 单向函数：把输入（任意长度）转成一个固定长度的输出（摘要）。
- 原文 → 哈希函数 → 摘要`,`特点：
- 同样输入 → 永远同样输出；
- 不同输入 → 几乎不可能得到相同输出；
- 不能从输出反推出输入（单向不可逆）。`,"常见算法：MD5（已不安全）;SHA-1（不安全）;SHA-256、SHA-512;BLAKE3（新一代高性能)","加密算法 是可逆的，用来保证数据机密性。",`- 明文 + 密钥 → 加密算法 → 密文
- 密文 + 密钥 → 解密算法 → 明文`,`特点：
- 可逆（只要有密钥）；
- 主要目标是保密；
- 输入和输出都是数据；
- 对称/非对称两类。`,`| 类比       | 摘要（Hash）                 | 加密（Encryption） |
| -------- | ------------------------ | -------------- |
| 📄 功能    | 生成数据指纹                   | 隐藏数据内容         |
| 🔁 可逆性   | 不可逆                      | 可逆（需密钥）        |
| 🔑 是否用密钥 | 否                        | 是              |
| 📏 输出长度  | 固定                       | 可变             |
| 🧱 典型算法  | SHA256, MD5              | AES, RSA       |
| 🎯 应用场景  | 密码校验、完整性验证               | 安全通信、存储加密      |
| 🧮 举例    | 登录验证：\`hash(password)\` 对比 | HTTPS 加密传输     |`,`| 类别                                | 是否使用相同密钥         | 示例                        |
| --------------------------------- | ---------------- | ------------------------- |
| **对称加密 (Symmetric Encryption)**   | 加密和解密使用同一个密钥     | AES、DES、3DES、RC4、ChaCha20 |
| **非对称加密 (Asymmetric Encryption)** | 使用一对密钥：公钥加密、私钥解密 | RSA、ECC、ElGamal           |`,`对称加密算法: 
- 加密与解密都用 同一把密钥；
- 加密速度快、效率高；
- 适合大量数据加密（如文件、数据库、通信内容）；
- 缺点：密钥分发困难（如何安全地给对方密钥？）。`,`非对称加密算法:
- 使用 一对密钥：
  - 公钥 (Public Key)：可公开，用于加密；
  - 私钥 (Private Key)：仅持有人拥有，用于解密。
- 不需要共享密钥；
- 运算复杂、速度慢；
- 常用于：密钥交换、数字签名、身份验证。`,`| 场景         | 使用算法                      | 说明          |
| ---------- | ------------------------- | ----------- |
| HTTPS      | RSA/ECC + AES-GCM         | 密钥交换 + 传输加密 |
| JWT 签名     | HMAC-SHA256 / RSA / ECDSA | 防伪造         |
| 文件加密       | AES-256-CBC               | 高效安全        |
| 数据库加密      | AES / ChaCha20            | 保密性         |
| 区块链地址生成    | ECC (secp256k1)           | 公私钥体系       |
| SSH、Git 签名 | RSA / Ed25519             | 身份认证        |
| 数字签名       | RSA-SHA256 / ECDSA        | 不可否认性       |`],answerHtml:[`<table tabindex="0">
<thead>
<tr>
<th>概念</th>
<th>功能</th>
<th>可逆性</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>摘要（Hash）</strong></td>
<td>把任意长度数据映射为固定长度“指纹”</td>
<td>❌ 不可逆</td>
</tr>
<tr>
<td><strong>加密（Encryption）</strong></td>
<td>保护数据机密性，转换成只有授权方能还原的密文</td>
<td>✅ 可逆（需密钥）</td>
</tr>
</tbody>
</table>`,`<p>摘要算法（Hash Function）是指一种 单向函数：把输入（任意长度）转成一个固定长度的输出（摘要）。</p>
<ul>
<li>原文 → 哈希函数 → 摘要</li>
</ul>`,`<p>特点：</p>
<ul>
<li>同样输入 → 永远同样输出；</li>
<li>不同输入 → 几乎不可能得到相同输出；</li>
<li>不能从输出反推出输入（单向不可逆）。</li>
</ul>`,"<p>常见算法：MD5（已不安全）;SHA-1（不安全）;SHA-256、SHA-512;BLAKE3（新一代高性能)</p>","<p>加密算法 是可逆的，用来保证数据机密性。</p>",`<ul>
<li>明文 + 密钥 → 加密算法 → 密文</li>
<li>密文 + 密钥 → 解密算法 → 明文</li>
</ul>`,`<p>特点：</p>
<ul>
<li>可逆（只要有密钥）；</li>
<li>主要目标是保密；</li>
<li>输入和输出都是数据；</li>
<li>对称/非对称两类。</li>
</ul>`,`<table tabindex="0">
<thead>
<tr>
<th>类比</th>
<th>摘要（Hash）</th>
<th>加密（Encryption）</th>
</tr>
</thead>
<tbody>
<tr>
<td>📄 功能</td>
<td>生成数据指纹</td>
<td>隐藏数据内容</td>
</tr>
<tr>
<td>🔁 可逆性</td>
<td>不可逆</td>
<td>可逆（需密钥）</td>
</tr>
<tr>
<td>🔑 是否用密钥</td>
<td>否</td>
<td>是</td>
</tr>
<tr>
<td>📏 输出长度</td>
<td>固定</td>
<td>可变</td>
</tr>
<tr>
<td>🧱 典型算法</td>
<td>SHA256, MD5</td>
<td>AES, RSA</td>
</tr>
<tr>
<td>🎯 应用场景</td>
<td>密码校验、完整性验证</td>
<td>安全通信、存储加密</td>
</tr>
<tr>
<td>🧮 举例</td>
<td>登录验证：<code>hash(password)</code> 对比</td>
<td>HTTPS 加密传输</td>
</tr>
</tbody>
</table>`,`<table tabindex="0">
<thead>
<tr>
<th>类别</th>
<th>是否使用相同密钥</th>
<th>示例</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>对称加密 (Symmetric Encryption)</strong></td>
<td>加密和解密使用同一个密钥</td>
<td>AES、DES、3DES、RC4、ChaCha20</td>
</tr>
<tr>
<td><strong>非对称加密 (Asymmetric Encryption)</strong></td>
<td>使用一对密钥：公钥加密、私钥解密</td>
<td>RSA、ECC、ElGamal</td>
</tr>
</tbody>
</table>`,`<p>对称加密算法:</p>
<ul>
<li>加密与解密都用 同一把密钥；</li>
<li>加密速度快、效率高；</li>
<li>适合大量数据加密（如文件、数据库、通信内容）；</li>
<li>缺点：密钥分发困难（如何安全地给对方密钥？）。</li>
</ul>`,`<p>非对称加密算法:</p>
<ul>
<li>使用 一对密钥：
<ul>
<li>公钥 (Public Key)：可公开，用于加密；</li>
<li>私钥 (Private Key)：仅持有人拥有，用于解密。</li>
</ul>
</li>
<li>不需要共享密钥；</li>
<li>运算复杂、速度慢；</li>
<li>常用于：密钥交换、数字签名、身份验证。</li>
</ul>`,`<table tabindex="0">
<thead>
<tr>
<th>场景</th>
<th>使用算法</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>HTTPS</td>
<td>RSA/ECC + AES-GCM</td>
<td>密钥交换 + 传输加密</td>
</tr>
<tr>
<td>JWT 签名</td>
<td>HMAC-SHA256 / RSA / ECDSA</td>
<td>防伪造</td>
</tr>
<tr>
<td>文件加密</td>
<td>AES-256-CBC</td>
<td>高效安全</td>
</tr>
<tr>
<td>数据库加密</td>
<td>AES / ChaCha20</td>
<td>保密性</td>
</tr>
<tr>
<td>区块链地址生成</td>
<td>ECC (secp256k1)</td>
<td>公私钥体系</td>
</tr>
<tr>
<td>SSH、Git 签名</td>
<td>RSA / Ed25519</td>
<td>身份认证</td>
</tr>
<tr>
<td>数字签名</td>
<td>RSA-SHA256 / ECDSA</td>
<td>不可否认性</td>
</tr>
</tbody>
</table>`],reference:"/myKMS/interview/index#_25-摘要和加密",source:"/myKMS/interview/index"},{id:64,question:"Web 无障碍性",answer:["Web 无障碍性（Accessibility） 指的是：让所有用户（包括视障、听障、行动不便者等）都能平等访问网站内容和功能。",`就是：
- 屏幕阅读器（Screen Reader）能正确朗读网页；
- 键盘用户能操作交互；
- 色盲或低视力用户也能识别视觉信息`,"ARIA（Accessible Rich Internet Applications） 是一组 HTML 属性，用于让无障碍工具（如屏幕阅读器）能理解网页中的“语义”和“状态”。",'| 类型                | 示例                      | 说明                  |\n| ----------------- | ----------------------- | ------------------- |\n| **role**          | `role="button"`         | 定义元素角色（告诉屏幕阅读器这是什么） |\n| **aria-label**    | `aria-label="关闭窗口"`     | 给无文本元素提供可读名称        |\n| **aria-hidden**   | `aria-hidden="true"`    | 告诉辅助设备忽略此元素         |\n| **aria-disabled** | `aria-disabled="true"`  | 表示该元素被禁用            |\n| **aria-expanded** | `aria-expanded="true"`  | 表示菜单或折叠面板是否展开       |\n| **aria-checked**  | `aria-checked="true"`   | 复选框、单选框当前选中状态       |\n| **aria-controls** | `aria-controls="menu1"` | 指定当前元素控制的另一个元素      |\n| **aria-live**     | `aria-live="polite"`    | 告诉屏幕阅读器动态区域更新方式     |',"**Web 无障碍性（a11y） = 语义化 HTML + 正确的 ARIA 属性 + 键盘支持 + 可感知状态。**"],answerHtml:["<p>Web 无障碍性（Accessibility） 指的是：让所有用户（包括视障、听障、行动不便者等）都能平等访问网站内容和功能。</p>",`<p>就是：</p>
<ul>
<li>屏幕阅读器（Screen Reader）能正确朗读网页；</li>
<li>键盘用户能操作交互；</li>
<li>色盲或低视力用户也能识别视觉信息</li>
</ul>`,"<p>ARIA（Accessible Rich Internet Applications） 是一组 HTML 属性，用于让无障碍工具（如屏幕阅读器）能理解网页中的“语义”和“状态”。</p>",`<table tabindex="0">
<thead>
<tr>
<th>类型</th>
<th>示例</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>role</strong></td>
<td><code>role=&quot;button&quot;</code></td>
<td>定义元素角色（告诉屏幕阅读器这是什么）</td>
</tr>
<tr>
<td><strong>aria-label</strong></td>
<td><code>aria-label=&quot;关闭窗口&quot;</code></td>
<td>给无文本元素提供可读名称</td>
</tr>
<tr>
<td><strong>aria-hidden</strong></td>
<td><code>aria-hidden=&quot;true&quot;</code></td>
<td>告诉辅助设备忽略此元素</td>
</tr>
<tr>
<td><strong>aria-disabled</strong></td>
<td><code>aria-disabled=&quot;true&quot;</code></td>
<td>表示该元素被禁用</td>
</tr>
<tr>
<td><strong>aria-expanded</strong></td>
<td><code>aria-expanded=&quot;true&quot;</code></td>
<td>表示菜单或折叠面板是否展开</td>
</tr>
<tr>
<td><strong>aria-checked</strong></td>
<td><code>aria-checked=&quot;true&quot;</code></td>
<td>复选框、单选框当前选中状态</td>
</tr>
<tr>
<td><strong>aria-controls</strong></td>
<td><code>aria-controls=&quot;menu1&quot;</code></td>
<td>指定当前元素控制的另一个元素</td>
</tr>
<tr>
<td><strong>aria-live</strong></td>
<td><code>aria-live=&quot;polite&quot;</code></td>
<td>告诉屏幕阅读器动态区域更新方式</td>
</tr>
</tbody>
</table>`,"<p><strong>Web 无障碍性（a11y） = 语义化 HTML + 正确的 ARIA 属性 + 键盘支持 + 可感知状态。</strong></p>"],reference:"/myKMS/interview/index#_26-web-无障碍性",source:"/myKMS/interview/index"},{id:65,question:"如何实现一个模块加载器？请描述其基本原理。",answer:["“模块加载器”是 JavaScript 模块化体系的核心基础之一。无论是 CommonJS (Node.js)、AMD (RequireJS)、ESM (import/export)，它们的本质都是在做同一件事：**按需加载模块、解析依赖、执行模块代码、缓存结果。**",`模块加载器的目标:
| 问题             | 说明                                      |
| -------------- | --------------------------------------- |
| **1. 模块定义**    | 支持定义模块（如 \`define(name, deps, factory)\`） |
| **2. 模块加载**    | 能加载依赖模块（可能是异步或同步）                       |
| **3. 模块执行与缓存** | 执行模块代码、导出结果，并缓存避免重复执行                   |`,`\`\`\`js
// 模块表（缓存）
const modules = {};      // 模块名 -> 导出对象
const factories = {};    // 模块名 -> 模块定义函数
const loading = {};      // 模块名 -> 是否正在加载中

// 定义模块
function define(name, deps, factory) {
  factories[name] = { deps, factory };
}

define('math', [], function() {
  return {
    add(a, b) { return a + b; }
  };
});


// 加载模块
function require(name) {
  // 已加载则直接返回
  if (modules[name]) return modules[name];
  if (!factories[name]) throw new Error(\`\${name} not found\`);

  const { deps, factory } = factories[name];

  // 加载依赖
  const args = deps.map(require);

  // 执行工厂函数
  const moduleExports = factory.apply(null, args);

  // 缓存结果
  modules[name] = moduleExports;

  return moduleExports;
}


define('main', ['math'], function(math) {
  console.log(math.add(1, 2)); // 3
});
// 使用
require('main');

\`\`\``,`\`\`\`scss
require('main')
   │
   ├─▶ 检查缓存
   │
   ├─▶ 找到定义 (factory)
   │
   ├─▶ 加载依赖 ['math']
   │        │
   │        └─▶ 递归 require('math')
   │
   ├─▶ 执行 factory 函数
   │
   └─▶ 缓存并返回 exports

\`\`\``,"浏览器和 Node.js 都有内建的模块加载器：ESM 的核心是 静态依赖图（在编译阶段就能分析依赖），而不是像 CommonJS 那样运行时动态解析。","内部流程：","- 解析 import/export，建立依赖图","- 递归加载依赖模块","- 创建 Module Record（记录导出值）","- 执行模块初始化代码","- 缓存结果供其他模块共享","模块加载器的核心思想就是：","**依赖解析 → 执行工厂函数 → 导出缓存 → 共享结果。**"],answerHtml:["<p>“模块加载器”是 JavaScript 模块化体系的核心基础之一。无论是 CommonJS (Node.js)、AMD (RequireJS)、ESM (import/export)，它们的本质都是在做同一件事：<strong>按需加载模块、解析依赖、执行模块代码、缓存结果。</strong></p>",`<p>模块加载器的目标:</p>
<table tabindex="0">
<thead>
<tr>
<th>问题</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>1. 模块定义</strong></td>
<td>支持定义模块（如 <code>define(name, deps, factory)</code>）</td>
</tr>
<tr>
<td><strong>2. 模块加载</strong></td>
<td>能加载依赖模块（可能是异步或同步）</td>
</tr>
<tr>
<td><strong>3. 模块执行与缓存</strong></td>
<td>执行模块代码、导出结果，并缓存避免重复执行</td>
</tr>
</tbody>
</table>`,`<div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><!--::markdown-it-async::ajrxmhpe55h2uycmni1gyl::--><code>// 模块表（缓存）
const modules = {};      // 模块名 -&gt; 导出对象
const factories = {};    // 模块名 -&gt; 模块定义函数
const loading = {};      // 模块名 -&gt; 是否正在加载中

// 定义模块
function define(name, deps, factory) {
  factories[name] = { deps, factory };
}

define(&#039;math&#039;, [], function() {
  return {
    add(a, b) { return a + b; }
  };
});


// 加载模块
function require(name) {
  // 已加载则直接返回
  if (modules[name]) return modules[name];
  if (!factories[name]) throw new Error(\`\${name} not found\`);

  const { deps, factory } = factories[name];

  // 加载依赖
  const args = deps.map(require);

  // 执行工厂函数
  const moduleExports = factory.apply(null, args);

  // 缓存结果
  modules[name] = moduleExports;

  return moduleExports;
}


define(&#039;main&#039;, [&#039;math&#039;], function(math) {
  console.log(math.add(1, 2)); // 3
});
// 使用
require(&#039;main&#039;);
</code></pre>
</div>`,`<div class="language-scss"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre><!--::markdown-it-async::6uhwssltlrg7pyrxanocs3::--><code>require(&#039;main&#039;)
   │
   ├─▶ 检查缓存
   │
   ├─▶ 找到定义 (factory)
   │
   ├─▶ 加载依赖 [&#039;math&#039;]
   │        │
   │        └─▶ 递归 require(&#039;math&#039;)
   │
   ├─▶ 执行 factory 函数
   │
   └─▶ 缓存并返回 exports
</code></pre>
</div>`,"<p>浏览器和 Node.js 都有内建的模块加载器：ESM 的核心是 静态依赖图（在编译阶段就能分析依赖），而不是像 CommonJS 那样运行时动态解析。</p>","<p>内部流程：</p>",`<ul>
<li>解析 import/export，建立依赖图</li>
</ul>`,`<ul>
<li>递归加载依赖模块</li>
</ul>`,`<ul>
<li>创建 Module Record（记录导出值）</li>
</ul>`,`<ul>
<li>执行模块初始化代码</li>
</ul>`,`<ul>
<li>缓存结果供其他模块共享</li>
</ul>`,"<p>模块加载器的核心思想就是：</p>","<p><strong>依赖解析 → 执行工厂函数 → 导出缓存 → 共享结果。</strong></p>"],reference:"/myKMS/interview/index#_27-如何实现一个模块加载器-请描述其基本原理。",source:"/myKMS/interview/index"},{id:66,question:"前端架构和前端工程化有什么区别",answer:["前端架构和前端工程化是两个不同的概念，但它们之间有一些相互关联的特点。","前端架构是指在前端开发中，对整个前端应用程序的组织结构、模块划分、框架选择等方面的设计和规划。前端架构的目标是为了提高代码的可维护性、可扩展性和可重用性，以及优化前端应用程序的性能和用户体验。常见的前端架构包括MVC（Model-View-Controller）、MVVM（Model-View-ViewModel）等。","前端工程化是指使用各种工具、技术和流程对前端开发过程进行管理和优化，以提高开发效率、代码质量和团队协作能力。前端工程化的目标是通过规范化和自动化的方式，解决前端开发中的重复劳动、低效率、代码质量不稳定等问题。前端工程化包括代码管理、代码规范、模块化开发、构建工具、自动化测试、持续集成和部署、性能优化、文档和知识管理等方面。","虽然前端架构和前端工程化是两个不同的概念，但它们之间存在一些相似的目标和方法。前端架构关注的是前端应用程序的结构和设计，而前端工程化关注的是前端开发的流程和工具的使用。前端架构可以通过前端工程化的方式实现，而前端工程化可以提供支持和保障，以实现良好的前端架构。"],answerHtml:["<p>前端架构和前端工程化是两个不同的概念，但它们之间有一些相互关联的特点。</p>","<p>前端架构是指在前端开发中，对整个前端应用程序的组织结构、模块划分、框架选择等方面的设计和规划。前端架构的目标是为了提高代码的可维护性、可扩展性和可重用性，以及优化前端应用程序的性能和用户体验。常见的前端架构包括MVC（Model-View-Controller）、MVVM（Model-View-ViewModel）等。</p>","<p>前端工程化是指使用各种工具、技术和流程对前端开发过程进行管理和优化，以提高开发效率、代码质量和团队协作能力。前端工程化的目标是通过规范化和自动化的方式，解决前端开发中的重复劳动、低效率、代码质量不稳定等问题。前端工程化包括代码管理、代码规范、模块化开发、构建工具、自动化测试、持续集成和部署、性能优化、文档和知识管理等方面。</p>","<p>虽然前端架构和前端工程化是两个不同的概念，但它们之间存在一些相似的目标和方法。前端架构关注的是前端应用程序的结构和设计，而前端工程化关注的是前端开发的流程和工具的使用。前端架构可以通过前端工程化的方式实现，而前端工程化可以提供支持和保障，以实现良好的前端架构。</p>"],reference:"/myKMS/interview/index#_28-前端架构和前端工程化有什么区别",source:"/myKMS/interview/index"},{id:67,question:"monorepo",answer:["Monorepo（Mono Repository） 指的是 将多个项目（模块、包、服务）放在同一个代码仓库中进行管理，而不是每个项目单独一个仓库（Polyrepo）。","核心理念：**一个仓库管理多个相关或不相关项目，统一版本控制和依赖管理。**",`| 优点          | 说明                        |
| ----------- | ------------------------- |
| **统一依赖管理**  | 所有项目共享依赖，避免重复安装、版本冲突      |
| **跨项目协作方便** | 修改一个底层库时，可以同步更新依赖它的其他模块   |
| **统一构建和测试** | 可以通过 CI/CD 一次性构建或测试多个模块   |
| **代码复用**    | 公共模块直接引用，不必发布到 npm/私有包管理器 |
| **版本管理统一**  | 可以统一发布版本策略，例如所有模块同时升级     |`,`| 缺点         | 说明                   |
| ---------- | -------------------- |
| **仓库体积大**  | 随着项目增多，克隆和拉取时间增长     |
| **构建复杂**   | 需要按需构建，避免每次都构建所有项目   |
| **权限管理复杂** | 有些模块可能需要不同团队权限       |
| **工具要求高**  | 需要工具支持依赖分析、构建优化、版本控制 |`,"lerna:","核心功能是帮助你在一个仓库里管理多个 npm 包，实现：",`- 依赖安装自动化
- 包版本管理
- 跨包引用管理
- 发布流程自动化`,"Lerna 有两种主要模式：","- Fixed/Locked Mode（固定版本模式）",`- 所有包使用统一版本号
  - 发布时，所有包版本同时更新
  - 适合 tightly coupled 的包集合`,"- Independent Mode（独立版本模式）",`- 每个包可以独立版本
  - 修改哪个包就只发布那个包
  - 适合 loosely coupled 的包集合`,"Lerna 的主要功能:",`| 功能            | 描述                                            |
| ------------- | --------------------------------------------- |
| **Bootstrap** | 自动安装包依赖，并建立跨包链接（link）                         |
| **Publish**   | 发布包到 npm（支持固定或独立模式）                           |
| **Version**   | 管理版本号更新（支持语义化版本 SemVer）                       |
| **Exec**      | 在所有包里执行命令，例如 \`npm test\`                       |
| **Run**       | 在指定包中运行脚本，例如 \`lerna run build --scope ui-lib\` |
| **Diff**      | 显示自上次发布以来修改过的包                                |`],answerHtml:["<p>Monorepo（Mono Repository） 指的是 将多个项目（模块、包、服务）放在同一个代码仓库中进行管理，而不是每个项目单独一个仓库（Polyrepo）。</p>","<p>核心理念：<strong>一个仓库管理多个相关或不相关项目，统一版本控制和依赖管理。</strong></p>",`<table tabindex="0">
<thead>
<tr>
<th>优点</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>统一依赖管理</strong></td>
<td>所有项目共享依赖，避免重复安装、版本冲突</td>
</tr>
<tr>
<td><strong>跨项目协作方便</strong></td>
<td>修改一个底层库时，可以同步更新依赖它的其他模块</td>
</tr>
<tr>
<td><strong>统一构建和测试</strong></td>
<td>可以通过 CI/CD 一次性构建或测试多个模块</td>
</tr>
<tr>
<td><strong>代码复用</strong></td>
<td>公共模块直接引用，不必发布到 npm/私有包管理器</td>
</tr>
<tr>
<td><strong>版本管理统一</strong></td>
<td>可以统一发布版本策略，例如所有模块同时升级</td>
</tr>
</tbody>
</table>`,`<table tabindex="0">
<thead>
<tr>
<th>缺点</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>仓库体积大</strong></td>
<td>随着项目增多，克隆和拉取时间增长</td>
</tr>
<tr>
<td><strong>构建复杂</strong></td>
<td>需要按需构建，避免每次都构建所有项目</td>
</tr>
<tr>
<td><strong>权限管理复杂</strong></td>
<td>有些模块可能需要不同团队权限</td>
</tr>
<tr>
<td><strong>工具要求高</strong></td>
<td>需要工具支持依赖分析、构建优化、版本控制</td>
</tr>
</tbody>
</table>`,"<p>lerna:</p>","<p>核心功能是帮助你在一个仓库里管理多个 npm 包，实现：</p>",`<ul>
<li>依赖安装自动化</li>
<li>包版本管理</li>
<li>跨包引用管理</li>
<li>发布流程自动化</li>
</ul>`,"<p>Lerna 有两种主要模式：</p>",`<ul>
<li>Fixed/Locked Mode（固定版本模式）</li>
</ul>`,`<ul>
<li>所有包使用统一版本号
<ul>
<li>发布时，所有包版本同时更新</li>
<li>适合 tightly coupled 的包集合</li>
</ul>
</li>
</ul>`,`<ul>
<li>Independent Mode（独立版本模式）</li>
</ul>`,`<ul>
<li>每个包可以独立版本
<ul>
<li>修改哪个包就只发布那个包</li>
<li>适合 loosely coupled 的包集合</li>
</ul>
</li>
</ul>`,"<p>Lerna 的主要功能:</p>",`<table tabindex="0">
<thead>
<tr>
<th>功能</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Bootstrap</strong></td>
<td>自动安装包依赖，并建立跨包链接（link）</td>
</tr>
<tr>
<td><strong>Publish</strong></td>
<td>发布包到 npm（支持固定或独立模式）</td>
</tr>
<tr>
<td><strong>Version</strong></td>
<td>管理版本号更新（支持语义化版本 SemVer）</td>
</tr>
<tr>
<td><strong>Exec</strong></td>
<td>在所有包里执行命令，例如 <code>npm test</code></td>
</tr>
<tr>
<td><strong>Run</strong></td>
<td>在指定包中运行脚本，例如 <code>lerna run build --scope ui-lib</code></td>
</tr>
<tr>
<td><strong>Diff</strong></td>
<td>显示自上次发布以来修改过的包</td>
</tr>
</tbody>
</table>`],reference:"/myKMS/interview/index#_29-monorepo",source:"/myKMS/interview/index"},{id:68,question:"很多web前端框架里面会有约定式路由， 他们是如何实现的",answer:["约定式路由（Convention over Configuration，CoC）是现代前端框架（如 Next.js、Nuxt.js、VitePress 等）广泛采用的路由实现方式，其核心思想是**根据文件目录结构自动生成路由配置，无需手动编写冗长的路由表**。",`核心原理:
约定式路由通过以下步骤工作：`,`- 文件系统扫描：框架在构建或运行时遍历指定目录（如pages/），获取所有文件和文件夹结构。
- 路径映射规则：将文件路径转换为路由路径，例如：
  - pages/index.js → /
  - pages/posts/[id].js → /posts/:id（动态路由）
- 路由配置生成：根据映射规则生成路由配置对象（如 React Router 或 Vue Router 所需的格式）。
- 运行时匹配：在用户访问时，根据 URL 匹配对应的组件。`],answerHtml:["<p>约定式路由（Convention over Configuration，CoC）是现代前端框架（如 Next.js、Nuxt.js、VitePress 等）广泛采用的路由实现方式，其核心思想是<strong>根据文件目录结构自动生成路由配置，无需手动编写冗长的路由表</strong>。</p>",`<p>核心原理:
约定式路由通过以下步骤工作：</p>`,`<ul>
<li>文件系统扫描：框架在构建或运行时遍历指定目录（如pages/），获取所有文件和文件夹结构。</li>
<li>路径映射规则：将文件路径转换为路由路径，例如：
<ul>
<li>pages/index.js → /</li>
<li>pages/posts/[id].js → /posts/:id（动态路由）</li>
</ul>
</li>
<li>路由配置生成：根据映射规则生成路由配置对象（如 React Router 或 Vue Router 所需的格式）。</li>
<li>运行时匹配：在用户访问时，根据 URL 匹配对应的组件。</li>
</ul>`],reference:"/myKMS/interview/index#_30-很多web前端框架里面会有约定式路由-他们是如何实现的",source:"/myKMS/interview/index"},{id:69,question:"前端代码中有太多的if 如何处理?",answer:[`- 使用 映射表（对象字典）
  - 用对象代替多层 if/else，让类型和行为解耦。`,`- 使用 策略模式（Strategy Pattern）
  - 当每种类型逻辑复杂，不仅仅是组件时，就可以用策略模式。`,`- 多态（Class继承）+ 工厂模式
  - 当类型之间有共性逻辑时，使用继承比 if 更优雅。`,`- 状态机（State Machine）
   - 如果 if 是基于“状态流转”的, 可以改为状态机`],answerHtml:[`<ul>
<li>使用 映射表（对象字典）
<ul>
<li>用对象代替多层 if/else，让类型和行为解耦。</li>
</ul>
</li>
</ul>`,`<ul>
<li>使用 策略模式（Strategy Pattern）
<ul>
<li>当每种类型逻辑复杂，不仅仅是组件时，就可以用策略模式。</li>
</ul>
</li>
</ul>`,`<ul>
<li>多态（Class继承）+ 工厂模式
<ul>
<li>当类型之间有共性逻辑时，使用继承比 if 更优雅。</li>
</ul>
</li>
</ul>`,`<ul>
<li>状态机（State Machine）
<ul>
<li>如果 if 是基于“状态流转”的, 可以改为状态机</li>
</ul>
</li>
</ul>`],reference:"/myKMS/interview/index#_31-前端代码中有太多的if-如何处理",source:"/myKMS/interview/index"},{id:70,question:"大图片瓦片机制",answer:["「大图片瓦片机制」（Image Tiling System）是前端中处理 超高分辨率图片（例如病理切片、卫星地图、天文影像、艺术画高清扫描）的关键技术。","直接加载一张图片会网络过大,内存不够,渲染慢,体验查","瓦片机制的目标：**“只加载并渲染当前视口内需要的部分图像。”**","核心思想：把超大图片预处理成**分层（多分辨率）+ 分块（瓦片）**的小图像块。浏览器只按需加载这些小块（tile），在画布上拼接显示。","核心原理：金字塔多分辨率结构（Image Pyramid）和地图瓦片完全一样，只是坐标不再是经纬度，而是像素坐标。","假设原始图片是 16384 × 16384：每层都是一个缩放版本的图片，每层都切割成若干瓦片（tile）。",`| 层级 | 缩放比例 | 尺寸            | 瓦片数 (256px 一块) |
| -- | ---- | ------------- | -------------- |
| L0 | 1/16 | 1024 × 1024   | 4×4            |
| L1 | 1/8  | 2048 × 2048   | 8×8            |
| L2 | 1/4  | 4096 × 4096   | 16×16          |
| L3 | 1/2  | 8192 × 8192   | 32×32          |
| L4 | 1    | 16384 × 16384 | 64×64          |`,"瓦片命名与存储规则:`/tiles/{level}/{row}_{col}.jpg`\n如: `/tiles/4/12_22.jpg` 表示：第 4 层（最高分辨率）;第 12 行、第 22 列 的瓦片。","前端加载逻辑（核心算法）",`- 1. 根据缩放层级选择图层
  - 根据当前 zoom（或 scale）选择最合适的分辨率层级。zoom 越大 → 层级越高 → 图片越清晰。`,`- 2. 根据视窗范围计算需要的瓦片索引
  -`,"- 异步加载 + 合成渲染",`- 缩放/平移/旋转处理
  - img 渲染再 canvas 上, 结合矩阵变换实现平滑交互`,`| 优化方向 | 技术点                             |
| ---- | ------------------------------- |
| 网络优化 | 延迟加载 + LRU 缓存 + 并发控制            |
| 渲染优化 | OffscreenCanvas 或 WebGL 纹理合成    |
| 内存控制 | 限制在屏瓦片数量（例如 9×9 可见区域）           |
| 模糊预览 | 先加载低分辨率层，再加载高分辨率瓦片              |
| 分帧渲染 | 使用 \`requestAnimationFrame\` 批次绘制 |
| 旋转优化 | 旋转矩阵缓存，避免全图重绘                   |`,"实践中采用 OpenSeadragon 库",`\`\`\`
 ┌─────────────────────────────┐
 │         大图瓦片浏览器         │
 │                             │
 │  ┌──────────────┐            │
 │  │视窗视口(Viewport)│  ← 仅渲染屏幕内的瓦片 │
 │  └──────┬──────┘            │
 │         │计算可见区域           │
 │         ▼                     │
 │  ┌────────────────────┐       │
 │  │   瓦片管理器(TileManager)│← 负责加载/缓存 |
 │  └──────┬────────────┘       │
 │         │网络请求             │
 │         ▼                     │
 │  ┌────────────────────┐       │
 │  │   瓦片缓存(TileCache) │← LRU 缓存机制 |
 │  └────────────────────┘       │
 └─────────────────────────────┘

\`\`\``],answerHtml:["<p>「大图片瓦片机制」（Image Tiling System）是前端中处理 超高分辨率图片（例如病理切片、卫星地图、天文影像、艺术画高清扫描）的关键技术。</p>","<p>直接加载一张图片会网络过大,内存不够,渲染慢,体验查</p>","<p>瓦片机制的目标：<strong>“只加载并渲染当前视口内需要的部分图像。”</strong></p>","<p>核心思想：把超大图片预处理成<strong>分层（多分辨率）+ 分块（瓦片）</strong>的小图像块。浏览器只按需加载这些小块（tile），在画布上拼接显示。</p>","<p>核心原理：金字塔多分辨率结构（Image Pyramid）和地图瓦片完全一样，只是坐标不再是经纬度，而是像素坐标。</p>","<p>假设原始图片是 16384 × 16384：每层都是一个缩放版本的图片，每层都切割成若干瓦片（tile）。</p>",`<table tabindex="0">
<thead>
<tr>
<th>层级</th>
<th>缩放比例</th>
<th>尺寸</th>
<th>瓦片数 (256px 一块)</th>
</tr>
</thead>
<tbody>
<tr>
<td>L0</td>
<td>1/16</td>
<td>1024 × 1024</td>
<td>4×4</td>
</tr>
<tr>
<td>L1</td>
<td>1/8</td>
<td>2048 × 2048</td>
<td>8×8</td>
</tr>
<tr>
<td>L2</td>
<td>1/4</td>
<td>4096 × 4096</td>
<td>16×16</td>
</tr>
<tr>
<td>L3</td>
<td>1/2</td>
<td>8192 × 8192</td>
<td>32×32</td>
</tr>
<tr>
<td>L4</td>
<td>1</td>
<td>16384 × 16384</td>
<td>64×64</td>
</tr>
</tbody>
</table>`,`<p>瓦片命名与存储规则:<code>/tiles/{level}/{row}_{col}.jpg</code>
如: <code>/tiles/4/12_22.jpg</code> 表示：第 4 层（最高分辨率）;第 12 行、第 22 列 的瓦片。</p>`,"<p>前端加载逻辑（核心算法）</p>",`<ul>
<li>
<ol>
<li>根据缩放层级选择图层</li>
</ol>
<ul>
<li>根据当前 zoom（或 scale）选择最合适的分辨率层级。zoom 越大 → 层级越高 → 图片越清晰。</li>
</ul>
</li>
</ul>`,`<ul>
<li>
<ol start="2">
<li>根据视窗范围计算需要的瓦片索引</li>
</ol>
<ul>
<li></li>
</ul>
</li>
</ul>`,`<ul>
<li>异步加载 + 合成渲染</li>
</ul>`,`<ul>
<li>缩放/平移/旋转处理
<ul>
<li>img 渲染再 canvas 上, 结合矩阵变换实现平滑交互</li>
</ul>
</li>
</ul>`,`<table tabindex="0">
<thead>
<tr>
<th>优化方向</th>
<th>技术点</th>
</tr>
</thead>
<tbody>
<tr>
<td>网络优化</td>
<td>延迟加载 + LRU 缓存 + 并发控制</td>
</tr>
<tr>
<td>渲染优化</td>
<td>OffscreenCanvas 或 WebGL 纹理合成</td>
</tr>
<tr>
<td>内存控制</td>
<td>限制在屏瓦片数量（例如 9×9 可见区域）</td>
</tr>
<tr>
<td>模糊预览</td>
<td>先加载低分辨率层，再加载高分辨率瓦片</td>
</tr>
<tr>
<td>分帧渲染</td>
<td>使用 <code>requestAnimationFrame</code> 批次绘制</td>
</tr>
<tr>
<td>旋转优化</td>
<td>旋转矩阵缓存，避免全图重绘</td>
</tr>
</tbody>
</table>`,"<p>实践中采用 OpenSeadragon 库</p>",`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><!--::markdown-it-async::o5evs5muidbmuuuud7u3nq::--><code> ┌─────────────────────────────┐
 │         大图瓦片浏览器         │
 │                             │
 │  ┌──────────────┐            │
 │  │视窗视口(Viewport)│  ← 仅渲染屏幕内的瓦片 │
 │  └──────┬──────┘            │
 │         │计算可见区域           │
 │         ▼                     │
 │  ┌────────────────────┐       │
 │  │   瓦片管理器(TileManager)│← 负责加载/缓存 |
 │  └──────┬────────────┘       │
 │         │网络请求             │
 │         ▼                     │
 │  ┌────────────────────┐       │
 │  │   瓦片缓存(TileCache) │← LRU 缓存机制 |
 │  └────────────────────┘       │
 └─────────────────────────────┘
</code></pre>
</div>`],reference:"/myKMS/interview/index#_32-大图片瓦片机制",source:"/myKMS/interview/index"},{id:71,question:"vue 编译到小程序等原理",answer:["Vue 本身是一个 前端框架，它的运行环境是浏览器，依赖 DOM API。小程序环境（如微信小程序）是 非浏览器环境，没有 DOM，取而代之的是 小程序的组件体系（如 view, text, image 等）和 小程序 JS 运行环境（WXML + WXSS + JS）。","核心原理:",`1. 模板编译
- Vue 的模板（\`<template>\`）最终会被编译成 渲染函数。
- 在小程序环境下：
    - Vue 模板会被转换成 小程序的 WXML。
    - Vue 的指令（v-if, v-for, v-bind 等）会被转换成对应的小程序指令：
        - v-for → wx:for
        - v-if → wx:if
        - v-bind:xxx → 对应绑定写法
- 这个过程就是 模板转换器（template compiler）`,"2. 组件映射","- Vue 组件 → 小程序自定义组件","- 需要做的事情：",`- 生成 JSON 配置文件（小程序每个组件/页面需要 component.json 或 page.json）
  - 生成 WXML 模板
  - 生成 JS 逻辑文件，小程序的 JS 运行环境有限，所以需要把 Vue 的响应式、事件等改写成小程序的方式。`,"3. 响应式系统适配","- Vue 通过 Proxy/Observer 做响应式，渲染到 DOM。","- 小程序没有 DOM，需要手动触发更新。",`- 所以 Vue-to-mini-program 框架通常会：
  - 在数据变动时调用 setData（小程序的状态更新 API）
  - setData 是小程序的核心，更新 WXML
  - Vue 响应式的数据变动 → 自动映射到 setData 调用`,"注意：setData 有性能限制（不要更新太大对象），所以很多框架会 做脏检查或数据扁平化。","4. 生命周期映射","编译流程概览:",`1. 解析 SFC（Single File Component）
  - template → AST
  - script → JS
  - style → CSS / WXSS`,`2. 模板编译
  - AST → WXML
  - 指令和事件转换（v-on → bindtap）`,`3. 逻辑处理
  - Vue 响应式系统 → 小程序 data + setData
  - 方法 → 小程序 JS 方法绑定`,`4. 样式转换
  - CSS → WXSS
  - Scoping / 样式命名空间处理`,"5. 输出小程序目录",`- page.js, page.wxml, page.wxss, page.json
  - component.js, component.wxml, component.wxss, component.json`,"6. 打包",`- 工具（webpack / vite / cli）打包 JS
  - 输出小程序可识别的目录结构`,`| 框架        | 原理与特点                                        |
| --------- | -------------------------------------------- |
| mpvue     | Vue 2 → 小程序，用 Vue 的 render + setData         |
| uni-app   | 支持 Vue 2/3，跨端输出（小程序、H5、App），模板和指令转换 + API 封装 |
| Taro      | React 风格 → 多端小程序，核心是抽象组件 + 生命周期 + API 适配     |
| Vue3-mini | Vue3 composition API + 响应式 → setData         |`,"核心就是三件事：","- 模板编译 → Vue template → WXML","- 响应式适配 → Vue 响应式 → 小程序 setData","-生命周期和 API 映射 → Vue 生命周期 +事件 → 小程序生命周期+事件","⚡ 核心瓶颈：","- setData 性能","- 样式隔离","- 组件递归 / 动态组件"],answerHtml:["<p>Vue 本身是一个 前端框架，它的运行环境是浏览器，依赖 DOM API。小程序环境（如微信小程序）是 非浏览器环境，没有 DOM，取而代之的是 小程序的组件体系（如 view, text, image 等）和 小程序 JS 运行环境（WXML + WXSS + JS）。</p>","<p>核心原理:</p>",`<ol>
<li>模板编译</li>
</ol>
<ul>
<li>Vue 的模板（<code>&lt;template&gt;</code>）最终会被编译成 渲染函数。</li>
<li>在小程序环境下：
<ul>
<li>Vue 模板会被转换成 小程序的 WXML。</li>
<li>Vue 的指令（v-if, v-for, v-bind 等）会被转换成对应的小程序指令：
<ul>
<li>v-for → wx:for</li>
<li>v-if → wx:if</li>
<li>v-bind:xxx → 对应绑定写法</li>
</ul>
</li>
</ul>
</li>
<li>这个过程就是 模板转换器（template compiler）</li>
</ul>`,`<ol start="2">
<li>组件映射</li>
</ol>`,`<ul>
<li>Vue 组件 → 小程序自定义组件</li>
</ul>`,`<ul>
<li>需要做的事情：</li>
</ul>`,`<ul>
<li>生成 JSON 配置文件（小程序每个组件/页面需要 component.json 或 page.json）
<ul>
<li>生成 WXML 模板</li>
<li>生成 JS 逻辑文件，小程序的 JS 运行环境有限，所以需要把 Vue 的响应式、事件等改写成小程序的方式。</li>
</ul>
</li>
</ul>`,`<ol start="3">
<li>响应式系统适配</li>
</ol>`,`<ul>
<li>Vue 通过 Proxy/Observer 做响应式，渲染到 DOM。</li>
</ul>`,`<ul>
<li>小程序没有 DOM，需要手动触发更新。</li>
</ul>`,`<ul>
<li>所以 Vue-to-mini-program 框架通常会：
<ul>
<li>在数据变动时调用 setData（小程序的状态更新 API）</li>
<li>setData 是小程序的核心，更新 WXML</li>
<li>Vue 响应式的数据变动 → 自动映射到 setData 调用</li>
</ul>
</li>
</ul>`,"<p>注意：setData 有性能限制（不要更新太大对象），所以很多框架会 做脏检查或数据扁平化。</p>",`<ol start="4">
<li>生命周期映射</li>
</ol>`,"<p>编译流程概览:</p>",`<ol>
<li>解析 SFC（Single File Component）</li>
</ol>
<ul>
<li>template → AST</li>
<li>script → JS</li>
<li>style → CSS / WXSS</li>
</ul>`,`<ol start="2">
<li>模板编译</li>
</ol>
<ul>
<li>AST → WXML</li>
<li>指令和事件转换（v-on → bindtap）</li>
</ul>`,`<ol start="3">
<li>逻辑处理</li>
</ol>
<ul>
<li>Vue 响应式系统 → 小程序 data + setData</li>
<li>方法 → 小程序 JS 方法绑定</li>
</ul>`,`<ol start="4">
<li>样式转换</li>
</ol>
<ul>
<li>CSS → WXSS</li>
<li>Scoping / 样式命名空间处理</li>
</ul>`,`<ol start="5">
<li>输出小程序目录</li>
</ol>`,`<ul>
<li>page.js, page.wxml, page.wxss, page.json
<ul>
<li>component.js, component.wxml, component.wxss, component.json</li>
</ul>
</li>
</ul>`,`<ol start="6">
<li>打包</li>
</ol>`,`<ul>
<li>工具（webpack / vite / cli）打包 JS
<ul>
<li>输出小程序可识别的目录结构</li>
</ul>
</li>
</ul>`,`<table tabindex="0">
<thead>
<tr>
<th>框架</th>
<th>原理与特点</th>
</tr>
</thead>
<tbody>
<tr>
<td>mpvue</td>
<td>Vue 2 → 小程序，用 Vue 的 render + setData</td>
</tr>
<tr>
<td>uni-app</td>
<td>支持 Vue 2/3，跨端输出（小程序、H5、App），模板和指令转换 + API 封装</td>
</tr>
<tr>
<td>Taro</td>
<td>React 风格 → 多端小程序，核心是抽象组件 + 生命周期 + API 适配</td>
</tr>
<tr>
<td>Vue3-mini</td>
<td>Vue3 composition API + 响应式 → setData</td>
</tr>
</tbody>
</table>`,"<p>核心就是三件事：</p>",`<ul>
<li>模板编译 → Vue template → WXML</li>
</ul>`,`<ul>
<li>响应式适配 → Vue 响应式 → 小程序 setData</li>
</ul>`,"<p>-生命周期和 API 映射 → Vue 生命周期 +事件 → 小程序生命周期+事件</p>","<p>⚡ 核心瓶颈：</p>",`<ul>
<li>setData 性能</li>
</ul>`,`<ul>
<li>样式隔离</li>
</ul>`,`<ul>
<li>组件递归 / 动态组件</li>
</ul>`],reference:"/myKMS/knowledge/base/app#_1-vue-编译到小程序等原理",source:"/myKMS/knowledge/base/app"},{id:72,question:"CSS怎么隐藏一个元素，对回流和重绘的隐藏，对事件响应机制的影响",answer:["| 隐藏方式                                | 是否占位 | 回流 | 重绘 | 事件响应    | 性能特点         | 推荐使用场景             |\n| ----------------------------------- | ---- | -- | -- | ------- | ------------ | ------------------ |\n| `display: none`  元素彻底从渲染树中移除。                       | ❌    | ✅  | ✅  | ❌       | 删除渲染树节点，性能稍重 | 元素彻底移除（如 Tab 切换）   |\n| `visibility: hidden`    元素依然在文档流中，只是视觉上“不可见”。              | ✅    | ❌  | ✅  | ❌       | 保留布局结构       | 占位但不可见（如占位动画）      |\n| `opacity: 0`  仅透明度为 0，但仍在渲染树中。                      | ✅    | ❌  | ✅  | ✅       | 仅重绘          | 视觉隐藏但仍可交互（如淡入淡出动画） |\n| `position: absolute; left: -9999px` 通过把元素移出可视区域达到隐藏效果。 | ❌    | ✅  | ✅  | ❌       | 性能中等         | 屏幕外隐藏（SEO / 辅助阅读）  |\n| `pointer-events: none`              | ✅    | ❌  | ❌  | ❌       | 无重绘          | 禁用交互，常与 opacity 结合 |\n| `transform: scale(0)`     图形级裁剪或缩放。            | ✅    | ❌  | ✅  | ⚠️ 可能响应 | GPU 加速       | 动画过渡中隐藏            |"],answerHtml:[`<table tabindex="0">
<thead>
<tr>
<th>隐藏方式</th>
<th>是否占位</th>
<th>回流</th>
<th>重绘</th>
<th>事件响应</th>
<th>性能特点</th>
<th>推荐使用场景</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>display: none</code>  元素彻底从渲染树中移除。</td>
<td>❌</td>
<td>✅</td>
<td>✅</td>
<td>❌</td>
<td>删除渲染树节点，性能稍重</td>
<td>元素彻底移除（如 Tab 切换）</td>
</tr>
<tr>
<td><code>visibility: hidden</code>    元素依然在文档流中，只是视觉上“不可见”。</td>
<td>✅</td>
<td>❌</td>
<td>✅</td>
<td>❌</td>
<td>保留布局结构</td>
<td>占位但不可见（如占位动画）</td>
</tr>
<tr>
<td><code>opacity: 0</code>  仅透明度为 0，但仍在渲染树中。</td>
<td>✅</td>
<td>❌</td>
<td>✅</td>
<td>✅</td>
<td>仅重绘</td>
<td>视觉隐藏但仍可交互（如淡入淡出动画）</td>
</tr>
<tr>
<td><code>position: absolute; left: -9999px</code> 通过把元素移出可视区域达到隐藏效果。</td>
<td>❌</td>
<td>✅</td>
<td>✅</td>
<td>❌</td>
<td>性能中等</td>
<td>屏幕外隐藏（SEO / 辅助阅读）</td>
</tr>
<tr>
<td><code>pointer-events: none</code></td>
<td>✅</td>
<td>❌</td>
<td>❌</td>
<td>❌</td>
<td>无重绘</td>
<td>禁用交互，常与 opacity 结合</td>
</tr>
<tr>
<td><code>transform: scale(0)</code>     图形级裁剪或缩放。</td>
<td>✅</td>
<td>❌</td>
<td>✅</td>
<td>⚠️ 可能响应</td>
<td>GPU 加速</td>
<td>动画过渡中隐藏</td>
</tr>
</tbody>
</table>`],reference:"/myKMS/knowledge/base/css#_5-css怎么隐藏一个元素-对回流和重绘的隐藏-对事件响应机制的影响",source:"/myKMS/knowledge/base/css"},{id:73,question:"href 和 src",answer:['| 维度       | href                                   | src                                               |\n| -------- | -------------------------------------- | ------------------------------------------------- |\n| **核心作用** | 表示资源的“引用”或目标地址                         | 表示资源的“来源”，立即下载和渲染                                 |\n| **立即加载** | 不会立即加载资源（除非 `<link rel="stylesheet">`） | 浏览器会立即请求资源                                        |\n| **典型元素** | `<a>`、`<link>`、`<area>`                | `<img>`、`<script>`、`<iframe>`、`<audio>`、`<video>` |\n| **渲染阻塞** | 不阻塞页面渲染（普通 `<a>`）                      | `<script>` 会阻塞渲染（同步）                              |\n| **导航作用** | 用于跳转或引用外部文档                            | 用于插入资源，页面不跳转                                      |\n| **事件触发** | 点击 `<a>` 才触发请求                         | 插入 DOM 元素时就触发请求                                   |\n| **可重用性** | 可用于预加载（如 `<link rel="preload">`）       | 每个 `src` 元素只用于一个资源                                |'],answerHtml:[`<table tabindex="0">
<thead>
<tr>
<th>维度</th>
<th>href</th>
<th>src</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>核心作用</strong></td>
<td>表示资源的“引用”或目标地址</td>
<td>表示资源的“来源”，立即下载和渲染</td>
</tr>
<tr>
<td><strong>立即加载</strong></td>
<td>不会立即加载资源（除非 <code>&lt;link rel=&quot;stylesheet&quot;&gt;</code>）</td>
<td>浏览器会立即请求资源</td>
</tr>
<tr>
<td><strong>典型元素</strong></td>
<td><code>&lt;a&gt;</code>、<code>&lt;link&gt;</code>、<code>&lt;area&gt;</code></td>
<td><code>&lt;img&gt;</code>、<code>&lt;script&gt;</code>、<code>&lt;iframe&gt;</code>、<code>&lt;audio&gt;</code>、<code>&lt;video&gt;</code></td>
</tr>
<tr>
<td><strong>渲染阻塞</strong></td>
<td>不阻塞页面渲染（普通 <code>&lt;a&gt;</code>）</td>
<td><code>&lt;script&gt;</code> 会阻塞渲染（同步）</td>
</tr>
<tr>
<td><strong>导航作用</strong></td>
<td>用于跳转或引用外部文档</td>
<td>用于插入资源，页面不跳转</td>
</tr>
<tr>
<td><strong>事件触发</strong></td>
<td>点击 <code>&lt;a&gt;</code> 才触发请求</td>
<td>插入 DOM 元素时就触发请求</td>
</tr>
<tr>
<td><strong>可重用性</strong></td>
<td>可用于预加载（如 <code>&lt;link rel=&quot;preload&quot;&gt;</code>）</td>
<td>每个 <code>src</code> 元素只用于一个资源</td>
</tr>
</tbody>
</table>`],reference:"/myKMS/knowledge/base/css#_6-href-和-src",source:"/myKMS/knowledge/base/css"},{id:74,question:"JS 闭包，如何理解",answer:[`什么是闭包？
**闭包是指一个函数能够记住并访问其词法作用域中的变量，即使该函数在其词法作用域之外执行。**`,"简单来说：**当一个函数内部定义了另一个函数，并且内部函数引用了外部函数的变量，就创建了一个闭包。**","闭包的实际应用",`- 创建私有变量
- 在循环中使用闭包(解决引用问题)
- 模块模式`,`闭包的工作原理
JavaScript 的作用域链机制使得闭包成为可能：`,`- 每个函数在创建时都会保存对其词法环境的引用
- 当函数执行时，它会沿着作用域链查找变量
- 即使外部函数执行完毕，只要内部函数仍然存在，外部函数的变量就不会被垃圾回收`,"闭包风险",`- 内存泄漏风险 ( 在不需要时手动解除引用)
- 性能考虑 过度使用闭包可能会影响性能，因为：需要维护额外的作用域链;变量查找时间可能增加;`,"闭包本质上是：**函数 + 其定义时的词法作用域（作用域链的引用）**"],answerHtml:[`<p>什么是闭包？
<strong>闭包是指一个函数能够记住并访问其词法作用域中的变量，即使该函数在其词法作用域之外执行。</strong></p>`,"<p>简单来说：<strong>当一个函数内部定义了另一个函数，并且内部函数引用了外部函数的变量，就创建了一个闭包。</strong></p>","<p>闭包的实际应用</p>",`<ul>
<li>创建私有变量</li>
<li>在循环中使用闭包(解决引用问题)</li>
<li>模块模式</li>
</ul>`,`<p>闭包的工作原理
JavaScript 的作用域链机制使得闭包成为可能：</p>`,`<ul>
<li>每个函数在创建时都会保存对其词法环境的引用</li>
<li>当函数执行时，它会沿着作用域链查找变量</li>
<li>即使外部函数执行完毕，只要内部函数仍然存在，外部函数的变量就不会被垃圾回收</li>
</ul>`,"<p>闭包风险</p>",`<ul>
<li>内存泄漏风险 ( 在不需要时手动解除引用)</li>
<li>性能考虑 过度使用闭包可能会影响性能，因为：需要维护额外的作用域链;变量查找时间可能增加;</li>
</ul>`,"<p>闭包本质上是：<strong>函数 + 其定义时的词法作用域（作用域链的引用）</strong></p>"],reference:"/myKMS/knowledge/base/js#_1-js-闭包-如何理解",source:"/myKMS/knowledge/base/js"},{id:75,question:"描述 Event Loop 运行机制",answer:[`1. 背景
JavaScript 是 单线程 的：同一时刻只能执行一个任务。但浏览器/Node 需要同时处理用户输入、网络请求、定时器、渲染等。
👉 为了解决“同时处理多任务”的需求，JS 引入了 事件循环（Event Loop） 机制。`,"Event Loop（事件循环）是 JavaScript 处理 异步操作 的核心机制。它允许 JavaScript 以 非阻塞 的方式执行代码，即使遇到 I/O 操作（如网络请求、定时器），也不会影响主线程继续执行其他任务。","三个核心关键概念",`- Call Stack（调用栈）
  JS 引擎执行代码时，按照函数调用的嵌套关系入栈/出栈。同步代码按顺序直接在栈中运行。
- Task Queue（任务队列）
  异步任务完成后，将回调放入队列，等待主线程空闲时取出执行。
- Event Loop（事件循环）
  事件循环不断检查调用栈是否为空，如果为空，就从队列取出一个任务放入栈中执行。这个过程周而复始。`,"JS 中的任务按优先级分为 宏任务（Macrotask） 和 微任务（Microtask）。",`- 宏任务（Macrotask）
  - 整体脚本 script
  - setTimeout / setInterval
  - setImmediate（Node）
  - I/O 回调
  - UI 渲染
  - JS 中用户输入（如 click、input、keydown 等 DOM 事件的回调）`,`- 微任务（Microtask）
  - Promise.then / catch / finally
  - queueMicrotask
  - MutationObserver（浏览器）
  - process.nextTick（Node）`,`规则：
每轮事件循环：`,`- 执行一个宏任务
- 执行所有微任务（直到清空微任务队列）
- 渲染（浏览器）
- 开始下一轮循环`,"**同步先执行，异步分队列；先宏后微，再渲染。**","Node.js：","- **process.nextTick 优先级高于 Promise 微任务**","```\n[宏任务/事件] → [微任务] → [rAF 回调] → [样式计算/布局/合成/绘制] → [空闲回调/下一轮]\n```","在 rAF 中写样式/改 DOM，浏览器会在同一帧随后进行样式计算与绘制。"],answerHtml:[`<ol>
<li>背景
JavaScript 是 单线程 的：同一时刻只能执行一个任务。但浏览器/Node 需要同时处理用户输入、网络请求、定时器、渲染等。
👉 为了解决“同时处理多任务”的需求，JS 引入了 事件循环（Event Loop） 机制。</li>
</ol>`,"<p>Event Loop（事件循环）是 JavaScript 处理 异步操作 的核心机制。它允许 JavaScript 以 非阻塞 的方式执行代码，即使遇到 I/O 操作（如网络请求、定时器），也不会影响主线程继续执行其他任务。</p>","<p>三个核心关键概念</p>",`<ul>
<li>Call Stack（调用栈）
JS 引擎执行代码时，按照函数调用的嵌套关系入栈/出栈。同步代码按顺序直接在栈中运行。</li>
<li>Task Queue（任务队列）
异步任务完成后，将回调放入队列，等待主线程空闲时取出执行。</li>
<li>Event Loop（事件循环）
事件循环不断检查调用栈是否为空，如果为空，就从队列取出一个任务放入栈中执行。这个过程周而复始。</li>
</ul>`,"<p>JS 中的任务按优先级分为 宏任务（Macrotask） 和 微任务（Microtask）。</p>",`<ul>
<li>宏任务（Macrotask）
<ul>
<li>整体脚本 script</li>
<li>setTimeout / setInterval</li>
<li>setImmediate（Node）</li>
<li>I/O 回调</li>
<li>UI 渲染</li>
<li>JS 中用户输入（如 click、input、keydown 等 DOM 事件的回调）</li>
</ul>
</li>
</ul>`,`<ul>
<li>微任务（Microtask）
<ul>
<li>Promise.then / catch / finally</li>
<li>queueMicrotask</li>
<li>MutationObserver（浏览器）</li>
<li>process.nextTick（Node）</li>
</ul>
</li>
</ul>`,`<p>规则：
每轮事件循环：</p>`,`<ul>
<li>执行一个宏任务</li>
<li>执行所有微任务（直到清空微任务队列）</li>
<li>渲染（浏览器）</li>
<li>开始下一轮循环</li>
</ul>`,"<p><strong>同步先执行，异步分队列；先宏后微，再渲染。</strong></p>","<p>Node.js：</p>",`<ul>
<li><strong>process.nextTick 优先级高于 Promise 微任务</strong></li>
</ul>`,`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><!--::markdown-it-async::8btl3hytxpkm8yk6wor9h::--><code>[宏任务/事件] → [微任务] → [rAF 回调] → [样式计算/布局/合成/绘制] → [空闲回调/下一轮]</code></pre>
</div>`,"<p>在 rAF 中写样式/改 DOM，浏览器会在同一帧随后进行样式计算与绘制。</p>"],reference:"/myKMS/knowledge/base/js#_2-描述-event-loop-运行机制",source:"/myKMS/knowledge/base/js"},{id:76,question:"网页多标签页之间如何通讯？和 iframe 如何通讯？",answer:["| 特性        | `BroadcastChannel` | `localStorage` + `storage` 事件 | `postMessage` + iframe / worker |\n| --------- | ------------------ | ----------------------------- | ------------------------------- |\n| 是否需要刷新    | 否                  | 否                             | 否                               |\n| 是否支持多 Tab | ✅                  | ✅                             | 部分（需要 iframe/worker）            |\n| 是否易用      | ✅（直接发送消息）          | 中等（需要 JSON 序列化）               | 较复杂（需建立通道）                      |\n| 是否跨域      | ❌（只能同源）            | ❌                             | 可跨域（需正确设置 targetOrigin）         |\n| 性能        | 较好                 | 一般（依赖 storage 事件）             | 较好                              |"],answerHtml:[`<table tabindex="0">
<thead>
<tr>
<th>特性</th>
<th><code>BroadcastChannel</code></th>
<th><code>localStorage</code> + <code>storage</code> 事件</th>
<th><code>postMessage</code> + iframe / worker</th>
</tr>
</thead>
<tbody>
<tr>
<td>是否需要刷新</td>
<td>否</td>
<td>否</td>
<td>否</td>
</tr>
<tr>
<td>是否支持多 Tab</td>
<td>✅</td>
<td>✅</td>
<td>部分（需要 iframe/worker）</td>
</tr>
<tr>
<td>是否易用</td>
<td>✅（直接发送消息）</td>
<td>中等（需要 JSON 序列化）</td>
<td>较复杂（需建立通道）</td>
</tr>
<tr>
<td>是否跨域</td>
<td>❌（只能同源）</td>
<td>❌</td>
<td>可跨域（需正确设置 targetOrigin）</td>
</tr>
<tr>
<td>性能</td>
<td>较好</td>
<td>一般（依赖 storage 事件）</td>
<td>较好</td>
</tr>
</tbody>
</table>`],reference:"/myKMS/knowledge/base/js#_3-网页多标签页之间如何通讯-和-iframe-如何通讯",source:"/myKMS/knowledge/base/js"},{id:77,question:"前端常见的设计模式有哪些？以及应用场景",answer:[`| 模式类型     | 设计模式              | 定义 / 核心思想                | 前端典型应用场景                               |
| -------- | ----------------- | ------------------------ | -------------------------------------- |
| **创建型**  | 工厂模式（Factory）     | 用一个工厂方法创建对象，解耦对象创建和使用    | 组件库动态创建组件（ButtonFactory）、Axios 不同配置实例  |
|          | 单例模式（Singleton）   | 保证类只有一个实例，并提供全局访问        | 全局 Store（Redux/Pinia）、全局弹窗/通知、全局缓存     |
| **结构型**  | 装饰器模式（Decorator）  | 不改变对象本身，动态给对象添加功能        | React 高阶组件（HOC）、TS 装饰器、函数增强（日志、权限）     |
|          | 代理模式（Proxy）       | 通过代理对象控制对目标对象访问          | Vue3 响应式、请求缓存、防抖/节流、懒加载                |
|          | 适配器模式（Adapter）    | 将不兼容接口转换为可用接口            | 封装第三方 SDK、统一后端接口格式、浏览器 API 兼容          |
| **行为型**  | 观察者模式（Observer）   | 对象状态改变时通知所有订阅者           | DOM 事件监听、Vue2 响应式依赖收集                  |
|          | 发布订阅模式（Pub/Sub）   | 将事件和回调解耦，发布者触发事件，订阅者响应事件 | Redux / Vuex 的状态更新订阅、EventBus、跨组件通信/pinia    |
|          | 策略模式（Strategy）    | 封装一系列算法，可互换              | 表单验证策略、支付方式选择、动画策略                     |
|          | 命令模式（Command）     | 将请求封装为对象，便于参数化和管理        | 富文本编辑器命令、Undo/Redo、Canvas 绘图命令         |
| **前端特有** | 组合模式（Composition） | 通过组合而非继承实现功能复用           | React children、Vue 插槽（Slot）、Hooks 组合逻辑 |
|          | MVVM / 单向数据流      | 数据驱动视图，状态单向流动            | Vue / Angular MVVM、React + Redux       |`],answerHtml:[`<table tabindex="0">
<thead>
<tr>
<th>模式类型</th>
<th>设计模式</th>
<th>定义 / 核心思想</th>
<th>前端典型应用场景</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>创建型</strong></td>
<td>工厂模式（Factory）</td>
<td>用一个工厂方法创建对象，解耦对象创建和使用</td>
<td>组件库动态创建组件（ButtonFactory）、Axios 不同配置实例</td>
</tr>
<tr>
<td></td>
<td>单例模式（Singleton）</td>
<td>保证类只有一个实例，并提供全局访问</td>
<td>全局 Store（Redux/Pinia）、全局弹窗/通知、全局缓存</td>
</tr>
<tr>
<td><strong>结构型</strong></td>
<td>装饰器模式（Decorator）</td>
<td>不改变对象本身，动态给对象添加功能</td>
<td>React 高阶组件（HOC）、TS 装饰器、函数增强（日志、权限）</td>
</tr>
<tr>
<td></td>
<td>代理模式（Proxy）</td>
<td>通过代理对象控制对目标对象访问</td>
<td>Vue3 响应式、请求缓存、防抖/节流、懒加载</td>
</tr>
<tr>
<td></td>
<td>适配器模式（Adapter）</td>
<td>将不兼容接口转换为可用接口</td>
<td>封装第三方 SDK、统一后端接口格式、浏览器 API 兼容</td>
</tr>
<tr>
<td><strong>行为型</strong></td>
<td>观察者模式（Observer）</td>
<td>对象状态改变时通知所有订阅者</td>
<td>DOM 事件监听、Vue2 响应式依赖收集</td>
</tr>
<tr>
<td></td>
<td>发布订阅模式（Pub/Sub）</td>
<td>将事件和回调解耦，发布者触发事件，订阅者响应事件</td>
<td>Redux / Vuex 的状态更新订阅、EventBus、跨组件通信/pinia</td>
</tr>
<tr>
<td></td>
<td>策略模式（Strategy）</td>
<td>封装一系列算法，可互换</td>
<td>表单验证策略、支付方式选择、动画策略</td>
</tr>
<tr>
<td></td>
<td>命令模式（Command）</td>
<td>将请求封装为对象，便于参数化和管理</td>
<td>富文本编辑器命令、Undo/Redo、Canvas 绘图命令</td>
</tr>
<tr>
<td><strong>前端特有</strong></td>
<td>组合模式（Composition）</td>
<td>通过组合而非继承实现功能复用</td>
<td>React children、Vue 插槽（Slot）、Hooks 组合逻辑</td>
</tr>
<tr>
<td></td>
<td>MVVM / 单向数据流</td>
<td>数据驱动视图，状态单向流动</td>
<td>Vue / Angular MVVM、React + Redux</td>
</tr>
</tbody>
</table>`],reference:"/myKMS/knowledge/base/js#_4-前端常见的设计模式有哪些-以及应用场景",source:"/myKMS/knowledge/base/js"},{id:78,question:"从 0 搭建一个前端项目，需要考虑哪些方面",answer:["主要是框架/库, 工具链 和cicd 选择",`- 技术选型：框架、状态管理、工具链、UI 组件库
- 项目架构：目录结构、模块化、路由、状态管理、接口管理
- 开发与运维：构建优化、测试、性能、安全、CI/CD`],answerHtml:["<p>主要是框架/库, 工具链 和cicd 选择</p>",`<ul>
<li>技术选型：框架、状态管理、工具链、UI 组件库</li>
<li>项目架构：目录结构、模块化、路由、状态管理、接口管理</li>
<li>开发与运维：构建优化、测试、性能、安全、CI/CD</li>
</ul>`],reference:"/myKMS/knowledge/base/js#_6-从-0-搭建一个前端项目-需要考虑哪些方面",source:"/myKMS/knowledge/base/js"},{id:79,question:"ajax 并发请求控制",answer:[`\`\`\`
async function batchRequestAllSettled(tasks, batchSize = 5) {
  const results = []

  for (let i = 0; i < tasks.length; i += batchSize) {
    const batch = tasks.slice(i, i + batchSize).map(fn => fn())
    // 等待当前批次所有请求完成（成功或失败）
    const batchResults = await Promise.allSettled(batch)
    results.push(...batchResults)
  }

  return results
}

// 使用示例
const urls = Array.from({ length: 30 }, (_, i) => \`https://api.example.com/data/\${i}\`)
const tasks = urls.map(url => () => fetch(url).then(res => res.json()))

batchRequestAllSettled(tasks, 5).then(results => {
  results.forEach((res, idx) => {
    if (res.status === 'fulfilled') console.log(\`任务 \${idx} 成功\`, res.value)
    else console.log(\`任务 \${idx} 失败\`, res.reason)
  })
})

\`\`\``],answerHtml:[`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><!--::markdown-it-async::u4uk1lh77yeavuno23z25::--><code>async function batchRequestAllSettled(tasks, batchSize = 5) {
  const results = []

  for (let i = 0; i &lt; tasks.length; i += batchSize) {
    const batch = tasks.slice(i, i + batchSize).map(fn =&gt; fn())
    // 等待当前批次所有请求完成（成功或失败）
    const batchResults = await Promise.allSettled(batch)
    results.push(...batchResults)
  }

  return results
}

// 使用示例
const urls = Array.from({ length: 30 }, (_, i) =&gt; \`https://api.example.com/data/\${i}\`)
const tasks = urls.map(url =&gt; () =&gt; fetch(url).then(res =&gt; res.json()))

batchRequestAllSettled(tasks, 5).then(results =&gt; {
  results.forEach((res, idx) =&gt; {
    if (res.status === &#039;fulfilled&#039;) console.log(\`任务 \${idx} 成功\`, res.value)
    else console.log(\`任务 \${idx} 失败\`, res.reason)
  })
})
</code></pre>
</div>`],reference:"/myKMS/knowledge/base/js#_7-ajax-并发请求控制",source:"/myKMS/knowledge/base/js"},{id:80,question:"线上出了严重 bug 你该如何解决？",answer:["**先止损 → 再排查 → 然后修复 → 最后复盘防再发**",`- 第一要务: **回滚，及时止损**
- 通知项目组成员，看谁最近有过上线—— 线上 bug 一般是最近一次上线导致的
- 在本地或测试环境浮现 bug，查找原因
- 修复，测试，重新上线
- 开**复盘会议**，以后如何规避此类问题 —— 总结经验教训`],answerHtml:["<p><strong>先止损 → 再排查 → 然后修复 → 最后复盘防再发</strong></p>",`<ul>
<li>第一要务: <strong>回滚，及时止损</strong></li>
<li>通知项目组成员，看谁最近有过上线—— 线上 bug 一般是最近一次上线导致的</li>
<li>在本地或测试环境浮现 bug，查找原因</li>
<li>修复，测试，重新上线</li>
<li>开<strong>复盘会议</strong>，以后如何规避此类问题 —— 总结经验教训</li>
</ul>`],reference:"/myKMS/knowledge/base/js#_8-线上出了严重-bug-你该如何解决",source:"/myKMS/knowledge/base/js"},{id:81,question:"你如何保障代码质量？",answer:[`- 配置统一的 eslint 和 prettier 规则，规范代码格式
- 尽量组织 code review
- 使用 Sentry 等平台进行线上错误报警，并及时修复问题`],answerHtml:[`<ul>
<li>配置统一的 eslint 和 prettier 规则，规范代码格式</li>
<li>尽量组织 code review</li>
<li>使用 Sentry 等平台进行线上错误报警，并及时修复问题</li>
</ul>`],reference:"/myKMS/knowledge/base/js#_9-你如何保障代码质量",source:"/myKMS/knowledge/base/js"},{id:82,question:"esm 与 CommonJS 的循环引用",answer:[`- CommonJS 模块规范在遇到循环引用时,Node 会返回当前已执行部分的 exports 对象.(Node 通过 require.cache 缓存机制避免了无限递归)
- ES Module（ESM）在循环引用时有“实时绑定（live binding）”机制, (静态分析 esm编译阶段就确定依赖关系，不是在运行时动态执行; 单例缓存：同一个模块只会被执行一次，并缓存结果; 实时绑定 (live binding)：import 的变量不是值拷贝，而是一个引用，对应 export 的内存位置。所以即使 export 后续被修改，import 端也能拿到最新的值。)`],answerHtml:[`<ul>
<li>CommonJS 模块规范在遇到循环引用时,Node 会返回当前已执行部分的 exports 对象.(Node 通过 require.cache 缓存机制避免了无限递归)</li>
<li>ES Module（ESM）在循环引用时有“实时绑定（live binding）”机制, (静态分析 esm编译阶段就确定依赖关系，不是在运行时动态执行; 单例缓存：同一个模块只会被执行一次，并缓存结果; 实时绑定 (live binding)：import 的变量不是值拷贝，而是一个引用，对应 export 的内存位置。所以即使 export 后续被修改，import 端也能拿到最新的值。)</li>
</ul>`],reference:"/myKMS/knowledge/base/js#_10-esm-与-commonjs-的循环引用",source:"/myKMS/knowledge/base/js"},{id:83,question:"esm 中 import 会发生什么?",answer:["ES Module (ESM) 的 import 是编译期就确定依赖关系;ESM 默认是 严格模式，并且是 异步加载",`**解析阶段（Parsing）=> 加载阶段 => 实例化阶段 => 执行阶段 => 缓存**    
- 为每个模块创建 模块环境记录（Module Environment Record），里面存放变量绑定, 实时绑定:如果 export 的值后来被修改，
- import 端也能感知。ESM 的缓存机制是基于 URL/路径唯一性，并且在 异步上下文中生效。
- esm缓存生效场景: 同一个模块被多次 import; 循环依赖(缓存的“半成品”也会存起来，这样可以避免死循环);动态 import 多次;`,"import 导入的变量是 活引用（live binding），不是拷贝。",`\`\`\`js
// counter.js
export let count = 0;
export function inc() { count++; }

// main.js
import { count, inc } from './counter.js';
console.log(count); // 0
inc();
console.log(count); // 1  ✅ 值会实时变化

\`\`\``],answerHtml:["<p>ES Module (ESM) 的 import 是编译期就确定依赖关系;ESM 默认是 严格模式，并且是 异步加载</p>",`<p><strong>解析阶段（Parsing）=&gt; 加载阶段 =&gt; 实例化阶段 =&gt; 执行阶段 =&gt; 缓存</strong></p>
<ul>
<li>为每个模块创建 模块环境记录（Module Environment Record），里面存放变量绑定, 实时绑定:如果 export 的值后来被修改，</li>
<li>import 端也能感知。ESM 的缓存机制是基于 URL/路径唯一性，并且在 异步上下文中生效。</li>
<li>esm缓存生效场景: 同一个模块被多次 import; 循环依赖(缓存的“半成品”也会存起来，这样可以避免死循环);动态 import 多次;</li>
</ul>`,"<p>import 导入的变量是 活引用（live binding），不是拷贝。</p>",`<div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><!--::markdown-it-async::gz1eqcsontyqn22v4ggj::--><code>// counter.js
export let count = 0;
export function inc() { count++; }

// main.js
import { count, inc } from &#039;./counter.js&#039;;
console.log(count); // 0
inc();
console.log(count); // 1  ✅ 值会实时变化
</code></pre>
</div>`],reference:"/myKMS/knowledge/base/js#_11-esm-中-import-会发生什么",source:"/myKMS/knowledge/base/js"},{id:84,question:"在 JS 代码中避免内存泄漏的方法?",answer:[`1. 释放不再需要的引用(把对象置 null 或者移除属性，就能让 GC 正常回收。)
2. 避免全局变量
3. 小心闭包(闭包会一直保持引用,导致无法回收对象)
4. 定时器 / 事件监听要清理
5. 使用 WeakMap / WeakSet 存放临时对象
6. 避免 JSON.stringify 大对象
7. 复用对象 / 数组
8. 按需加载数据
9. 及时释放 DOM 引用`],answerHtml:[`<ol>
<li>释放不再需要的引用(把对象置 null 或者移除属性，就能让 GC 正常回收。)</li>
<li>避免全局变量</li>
<li>小心闭包(闭包会一直保持引用,导致无法回收对象)</li>
<li>定时器 / 事件监听要清理</li>
<li>使用 WeakMap / WeakSet 存放临时对象</li>
<li>避免 JSON.stringify 大对象</li>
<li>复用对象 / 数组</li>
<li>按需加载数据</li>
<li>及时释放 DOM 引用</li>
</ol>`],reference:"/myKMS/knowledge/base/js#_12-在-js-代码中避免内存泄漏的方法",source:"/myKMS/knowledge/base/js"},{id:85,question:"es6 “继承在前，实例在后”?",answer:[`- new 子类发生什么: 创建子类实例对象 => 设置原型 => 父类构造函数执行  => 调用子类构造函数 => 子类构造函数继续执行
- 先创建空实例 → 调用子类 constructor → super() 调用父类 constructor → 父类属性挂载 → 回到子类挂载属性 → 实例返回。
- ES6 的 class extends 就是对寄生组合继承的语法封装`],answerHtml:[`<ul>
<li>new 子类发生什么: 创建子类实例对象 =&gt; 设置原型 =&gt; 父类构造函数执行  =&gt; 调用子类构造函数 =&gt; 子类构造函数继续执行</li>
<li>先创建空实例 → 调用子类 constructor → super() 调用父类 constructor → 父类属性挂载 → 回到子类挂载属性 → 实例返回。</li>
<li>ES6 的 class extends 就是对寄生组合继承的语法封装</li>
</ul>`],reference:"/myKMS/knowledge/base/js#_13-es6-继承在前-实例在后",source:"/myKMS/knowledge/base/js"},{id:86,question:'script type="module" 是什么效果?',answer:['- `<script type="module">` 会 异步下载和解析，等 HTML 解析完成后执行，按依赖顺序执行模块代码，类似加了 defer 的普通脚本，但支持模块化特性。\n- `<script type="module" async>` 异步,下载完成立即执行,不保证顺序 (适合独立模块，不依赖 DOM，也不依赖其他模块执行顺序，比如统计脚本或广告脚本。)'],answerHtml:[`<ul>
<li><code>&lt;script type=&quot;module&quot;&gt;</code> 会 异步下载和解析，等 HTML 解析完成后执行，按依赖顺序执行模块代码，类似加了 defer 的普通脚本，但支持模块化特性。</li>
<li><code>&lt;script type=&quot;module&quot; async&gt;</code> 异步,下载完成立即执行,不保证顺序 (适合独立模块，不依赖 DOM，也不依赖其他模块执行顺序，比如统计脚本或广告脚本。)</li>
</ul>`],reference:"/myKMS/knowledge/base/js#_14-script-type-module-是什么效果",source:"/myKMS/knowledge/base/js"},{id:87,question:"文件的软链接与硬链接?",answer:[`- 硬链接 = 同一份文件的不同名字, 删除源文件,不影响数据，数据依然可访问,
- 软链接 = 指向另一个文件路径的快捷方式, 删除源文件,软链接链接失效`,"文件系统中使用一个叫做 inode（索引节点） 的结构来记录文件的真实内容。",`- 硬链接: 多个文件名共享同一个 inode。
- 软链接: 一个独立的文件，里面保存着目标文件的路径。(更像是 Windows 的快捷方式)`],answerHtml:[`<ul>
<li>硬链接 = 同一份文件的不同名字, 删除源文件,不影响数据，数据依然可访问,</li>
<li>软链接 = 指向另一个文件路径的快捷方式, 删除源文件,软链接链接失效</li>
</ul>`,"<p>文件系统中使用一个叫做 inode（索引节点） 的结构来记录文件的真实内容。</p>",`<ul>
<li>硬链接: 多个文件名共享同一个 inode。</li>
<li>软链接: 一个独立的文件，里面保存着目标文件的路径。(更像是 Windows 的快捷方式)</li>
</ul>`],reference:"/myKMS/knowledge/base/js#_15-文件的软链接与硬链接",source:"/myKMS/knowledge/base/js"},{id:88,question:"js 原型链, 作用是什么?",answer:[`- 原型链？
  在 JavaScript 里，每个对象都有一个隐藏属性 [[Prototype]]（通常通过 __proto__ 访问）。当我们访问一个对象的属性/方法时，如果对象本身没有，JS 引擎就会顺着 [[Prototype]] 向上找。这条由 [[Prototype]] 串起来的链路，就叫 原型链。`,`- 原型链的作用
  - 核心作用就是实现继承和共享属性/方法。
    - 继承机制：子对象可以通过原型链继承父对象的方法/属性。
    - 方法复用：所有实例共享同一个方法定义，避免每次 new 都复制一份。
    - 动态扩展：可以在运行时给 prototype 添加方法，所有实例立刻可用`,"原型链是 JS 实现继承的机制，通过逐层查找 [[Prototype]] 来实现属性/方法共享和复用。"],answerHtml:[`<ul>
<li>原型链？
在 JavaScript 里，每个对象都有一个隐藏属性 [[Prototype]]（通常通过 <strong>proto</strong> 访问）。当我们访问一个对象的属性/方法时，如果对象本身没有，JS 引擎就会顺着 [[Prototype]] 向上找。这条由 [[Prototype]] 串起来的链路，就叫 原型链。</li>
</ul>`,`<ul>
<li>原型链的作用
<ul>
<li>核心作用就是实现继承和共享属性/方法。
<ul>
<li>继承机制：子对象可以通过原型链继承父对象的方法/属性。</li>
<li>方法复用：所有实例共享同一个方法定义，避免每次 new 都复制一份。</li>
<li>动态扩展：可以在运行时给 prototype 添加方法，所有实例立刻可用</li>
</ul>
</li>
</ul>
</li>
</ul>`,"<p>原型链是 JS 实现继承的机制，通过逐层查找 [[Prototype]] 来实现属性/方法共享和复用。</p>"],reference:"/myKMS/knowledge/base/js#_16-js-原型链-作用是什么",source:"/myKMS/knowledge/base/js"},{id:89,question:"web components",answer:[`Web Components 是一套 浏览器原生的前端组件技术标准，让开发者能创建可复用、封装、独立于框架的组件
   - Custom Elements;Shadow DOM;HTML Templates;
   - 继承 HTMLElement , 使用 customElements`,`- 生命周期
  - constructor → 元素实例化
  - connectedCallback → 添加到 DOM
  - disconnectedCallback → 从 DOM 移除
  - attributeChangedCallback → 被观察属性变化`,`- 属性
  - HTML 属性与 JS 属性双向绑定
  - 使用 observedAttributes + attributeChangedCallback
  - 可以通过 getter/setter 做同步映射`,`- 自定义事件
  - 使用 dispatchEvent(new CustomEvent(...))
  - 穿透 Shadow DOM → composed: true
  - 冒泡 → bubbles: true
  - 建议只传小对象或数据引用`,'- 插槽\n  - 提供组件可插入自定义内容的能力\n  - `<slot>` 默认内容，外部可用 slot="name" 覆盖',`- 属性/事件/插槽封装模式（常用技巧）
  - formatProps → 统一解析属性
  - emit → 封装 dispatchEvent，像 Vue emit
  - BaseComponent → 封装生命周期、属性监听、事件分发、props 解析`,`- 优点:
  - 原生支持;真正的封装;可复用性;互操作性;长期可用性
- 缺点: 
  - 生态和工具链;样式主题化困难;基础功能;SEO;`,`- 优化:
  - 使用 requestAnimationFrame 节流渲染
  - 维护虚拟 DOM / shadow DOM patch
  - 避免深度 DOM 查询，每次 render 只更新变化部分`],answerHtml:[`<p>Web Components 是一套 浏览器原生的前端组件技术标准，让开发者能创建可复用、封装、独立于框架的组件</p>
<ul>
<li>Custom Elements;Shadow DOM;HTML Templates;</li>
<li>继承 HTMLElement , 使用 customElements</li>
</ul>`,`<ul>
<li>生命周期
<ul>
<li>constructor → 元素实例化</li>
<li>connectedCallback → 添加到 DOM</li>
<li>disconnectedCallback → 从 DOM 移除</li>
<li>attributeChangedCallback → 被观察属性变化</li>
</ul>
</li>
</ul>`,`<ul>
<li>属性
<ul>
<li>HTML 属性与 JS 属性双向绑定</li>
<li>使用 observedAttributes + attributeChangedCallback</li>
<li>可以通过 getter/setter 做同步映射</li>
</ul>
</li>
</ul>`,`<ul>
<li>自定义事件
<ul>
<li>使用 dispatchEvent(new CustomEvent(...))</li>
<li>穿透 Shadow DOM → composed: true</li>
<li>冒泡 → bubbles: true</li>
<li>建议只传小对象或数据引用</li>
</ul>
</li>
</ul>`,`<ul>
<li>插槽
<ul>
<li>提供组件可插入自定义内容的能力</li>
<li><code>&lt;slot&gt;</code> 默认内容，外部可用 slot=&quot;name&quot; 覆盖</li>
</ul>
</li>
</ul>`,`<ul>
<li>属性/事件/插槽封装模式（常用技巧）
<ul>
<li>formatProps → 统一解析属性</li>
<li>emit → 封装 dispatchEvent，像 Vue emit</li>
<li>BaseComponent → 封装生命周期、属性监听、事件分发、props 解析</li>
</ul>
</li>
</ul>`,`<ul>
<li>优点:
<ul>
<li>原生支持;真正的封装;可复用性;互操作性;长期可用性</li>
</ul>
</li>
<li>缺点:
<ul>
<li>生态和工具链;样式主题化困难;基础功能;SEO;</li>
</ul>
</li>
</ul>`,`<ul>
<li>优化:
<ul>
<li>使用 requestAnimationFrame 节流渲染</li>
<li>维护虚拟 DOM / shadow DOM patch</li>
<li>避免深度 DOM 查询，每次 render 只更新变化部分</li>
</ul>
</li>
</ul>`],reference:"/myKMS/knowledge/base/js#_17-web-components",source:"/myKMS/knowledge/base/js"},{id:90,question:"ts 类型推断原理？",answer:["类型推断（Type Inference）指的是 —— 当开发者没有显式标注类型时，TypeScript 编译器自动根据上下文推导变量、参数、函数返回值的类型",`TypeScript 在编译阶段会：
- 扫描变量声明、赋值、函数签名、返回值；
- 根据上下文建立一个“类型约束图”（constraint graph）；
- 利用**控制流分析（Control Flow Analysis）**更新类型的可变性；
- 最终在不声明类型的情况下，自动推导出最合理的类型`,`- 当函数使用泛型时，TS 会从调用时的实参反向推导类型参数：
- TS 类型系统支持从上下文反推表达式的类型，即“类型从左到右流动”：
- TS 会在 if、switch、typeof、in、instanceof 等控制流语句中自动缩小类型：`,`ts 适合:
- 大型多人协作项目
- SDK、组件库、Hooks 封装
- 安全重构 / 版本演进
- 智能提示和自文档化`],answerHtml:["<p>类型推断（Type Inference）指的是 —— 当开发者没有显式标注类型时，TypeScript 编译器自动根据上下文推导变量、参数、函数返回值的类型</p>",`<p>TypeScript 在编译阶段会：</p>
<ul>
<li>扫描变量声明、赋值、函数签名、返回值；</li>
<li>根据上下文建立一个“类型约束图”（constraint graph）；</li>
<li>利用<strong>控制流分析（Control Flow Analysis）</strong>更新类型的可变性；</li>
<li>最终在不声明类型的情况下，自动推导出最合理的类型</li>
</ul>`,`<ul>
<li>当函数使用泛型时，TS 会从调用时的实参反向推导类型参数：</li>
<li>TS 类型系统支持从上下文反推表达式的类型，即“类型从左到右流动”：</li>
<li>TS 会在 if、switch、typeof、in、instanceof 等控制流语句中自动缩小类型：</li>
</ul>`,`<p>ts 适合:</p>
<ul>
<li>大型多人协作项目</li>
<li>SDK、组件库、Hooks 封装</li>
<li>安全重构 / 版本演进</li>
<li>智能提示和自文档化</li>
</ul>`],reference:"/myKMS/knowledge/base/js#_18-ts-类型推断原理",source:"/myKMS/knowledge/base/js"},{id:91,question:"Canvas 与 SVG",answer:[`| 特性         | Canvas                                        | SVG                                 |
| ---------- | --------------------------------------------- | ----------------------------------- |
| **渲染方式**   | 位图（Bitmap），直接绘制到画布像素上                         | 矢量图形（Vector），每个元素是 DOM 节点           |
| **核心原理**   | JS 调用 Canvas API 绘制，结果写入画布缓冲区；渲染完成后无法直接操作已画元素 | XML 描述图形，浏览器解析为 DOM 节点；元素可直接操作和绑定事件 |
| **交互性**    | 需要手动管理元素状态和事件，复杂                              | 高，可直接绑定事件、样式和动画                     |
| **性能**     | 高性能，适合大量元素和频繁重绘                               | 元素数量多时性能下降，不适合上万级节点                 |
| **缩放**     | 放大可能模糊，需要重绘                                   | 矢量缩放无损失                             |
| **典型应用场景** | 游戏、实时数据图表、粒子动画、图像处理                           | 数据可视化中等规模图表、流程图、拓扑图、矢量图标、地图         |
| **优点**     | 高性能、适合实时渲染和复杂动画                               | 高可交互性、开发简单、支持矢量缩放                   |
| **缺点**     | 不可直接操作已绘制元素、事件管理复杂                            | 渲染大量元素性能下降、不适合高频更新                  |`],answerHtml:[`<table tabindex="0">
<thead>
<tr>
<th>特性</th>
<th>Canvas</th>
<th>SVG</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>渲染方式</strong></td>
<td>位图（Bitmap），直接绘制到画布像素上</td>
<td>矢量图形（Vector），每个元素是 DOM 节点</td>
</tr>
<tr>
<td><strong>核心原理</strong></td>
<td>JS 调用 Canvas API 绘制，结果写入画布缓冲区；渲染完成后无法直接操作已画元素</td>
<td>XML 描述图形，浏览器解析为 DOM 节点；元素可直接操作和绑定事件</td>
</tr>
<tr>
<td><strong>交互性</strong></td>
<td>需要手动管理元素状态和事件，复杂</td>
<td>高，可直接绑定事件、样式和动画</td>
</tr>
<tr>
<td><strong>性能</strong></td>
<td>高性能，适合大量元素和频繁重绘</td>
<td>元素数量多时性能下降，不适合上万级节点</td>
</tr>
<tr>
<td><strong>缩放</strong></td>
<td>放大可能模糊，需要重绘</td>
<td>矢量缩放无损失</td>
</tr>
<tr>
<td><strong>典型应用场景</strong></td>
<td>游戏、实时数据图表、粒子动画、图像处理</td>
<td>数据可视化中等规模图表、流程图、拓扑图、矢量图标、地图</td>
</tr>
<tr>
<td><strong>优点</strong></td>
<td>高性能、适合实时渲染和复杂动画</td>
<td>高可交互性、开发简单、支持矢量缩放</td>
</tr>
<tr>
<td><strong>缺点</strong></td>
<td>不可直接操作已绘制元素、事件管理复杂</td>
<td>渲染大量元素性能下降、不适合高频更新</td>
</tr>
</tbody>
</table>`],reference:"/myKMS/knowledge/base/js#_19-canvas-与-svg",source:"/myKMS/knowledge/base/js"},{id:92,question:"git pull 与 git fetch",answer:["| 对比项            | `git fetch`                                          | `git pull`                           |\n| -------------- | ---------------------------------------------------- | ------------------------------------ |\n| **作用**         | 只从远程仓库拉取最新的提交记录和分支信息，不合并                             | 从远程仓库拉取后，自动与本地分支进行合并（或 rebase）       |\n| **是否修改本地代码**   | ❌ 不会修改当前工作区或本地分支                                     | ✅ 会修改当前分支（触发 merge 或 rebase）         |\n| **是否更新远程追踪分支** | ✅ 更新（如 `origin/main`）                                | ✅ 更新（并合并到当前分支）                       |\n| **安全性**        | ✅ 安全（不会改变当前代码）                                       | ⚠️ 有风险（可能产生冲突）                       |\n| **命令形式**       | `git fetch [remote] [branch]`                        | `git pull [remote] [branch]`         |\n| **实际等价操作**     | —                                                    | `git fetch` + `git merge FETCH_HEAD` |\n| **适用场景**       | 想先查看远程更新，不立即合并；或用于手动合并策略                             | 想直接更新到最新版本（自动合并）                     |\n| **可见效果**       | 更新 `.git` 内部的远程分支信息                                  | 同时更新远程信息并更新工作区                       |\n| **是否可能冲突**     | ❌ 不会冲突                                               | ⚠️ 可能发生合并冲突                          |\n| **常用组合命令**     | `git fetch origin main && git log HEAD..origin/main` | `git pull origin main`               |"],answerHtml:[`<table tabindex="0">
<thead>
<tr>
<th>对比项</th>
<th><code>git fetch</code></th>
<th><code>git pull</code></th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>作用</strong></td>
<td>只从远程仓库拉取最新的提交记录和分支信息，不合并</td>
<td>从远程仓库拉取后，自动与本地分支进行合并（或 rebase）</td>
</tr>
<tr>
<td><strong>是否修改本地代码</strong></td>
<td>❌ 不会修改当前工作区或本地分支</td>
<td>✅ 会修改当前分支（触发 merge 或 rebase）</td>
</tr>
<tr>
<td><strong>是否更新远程追踪分支</strong></td>
<td>✅ 更新（如 <code>origin/main</code>）</td>
<td>✅ 更新（并合并到当前分支）</td>
</tr>
<tr>
<td><strong>安全性</strong></td>
<td>✅ 安全（不会改变当前代码）</td>
<td>⚠️ 有风险（可能产生冲突）</td>
</tr>
<tr>
<td><strong>命令形式</strong></td>
<td><code>git fetch [remote] [branch]</code></td>
<td><code>git pull [remote] [branch]</code></td>
</tr>
<tr>
<td><strong>实际等价操作</strong></td>
<td>—</td>
<td><code>git fetch</code> + <code>git merge FETCH_HEAD</code></td>
</tr>
<tr>
<td><strong>适用场景</strong></td>
<td>想先查看远程更新，不立即合并；或用于手动合并策略</td>
<td>想直接更新到最新版本（自动合并）</td>
</tr>
<tr>
<td><strong>可见效果</strong></td>
<td>更新 <code>.git</code> 内部的远程分支信息</td>
<td>同时更新远程信息并更新工作区</td>
</tr>
<tr>
<td><strong>是否可能冲突</strong></td>
<td>❌ 不会冲突</td>
<td>⚠️ 可能发生合并冲突</td>
</tr>
<tr>
<td><strong>常用组合命令</strong></td>
<td><code>git fetch origin main &amp;&amp; git log HEAD..origin/main</code></td>
<td><code>git pull origin main</code></td>
</tr>
</tbody>
</table>`],reference:"/myKMS/knowledge/base/js#_20-git-pull-与-git-fetch",source:"/myKMS/knowledge/base/js"},{id:93,question:"git merge 与 git rebase",answer:[`| 对比项          | \`git merge\`              | \`git rebase\`                  |
| ------------ | ------------------------ | ----------------------------- |
| **主要作用**     | 合并两个分支的历史记录，生成一个新的“合并提交” | 将一个分支的提交重新“嫁接”到另一个分支上         |
| **历史结构**     | 保留分叉历史（产生合并节点）           | 线性化历史（重写提交）                   |
| **是否生成新提交**  | ✅ 会生成一个新的 *merge commit* | ⚠️ 重新生成一批新的提交（commit hash 改变） |
| **提交历史结果**   | 历史复杂，但真实反映开发过程           | 历史干净，像一条直线                    |
| **是否修改提交哈希** | ❌ 不会改变已有提交的哈希            | ✅ 所有 rebase 的提交哈希都会改变         |
| **是否易冲突**    | ⚠️ 可能在合并时冲突一次            | ⚠️ 每个提交应用时都可能冲突               |
| **安全性**      | ✅ 安全（不会重写历史）             | ⚠️ 可能破坏共享历史（不建议在公共分支上用）       |
| **适用场景**     | 保留真实开发分支结构（例如多人合作）       | 自己分支上整理历史，让日志更清晰              |
| **常见命令**     | \`git merge feature\`      | \`git rebase main\`             |
| **结果历史示意**   | 分叉 + 合并节点 🪵             | 一条直线 🚀                       |
| **是否影响他人**   | ❌ 不会（提交哈希不变）             | ⚠️ 若已推送，会影响他人分支同步             |`],answerHtml:[`<table tabindex="0">
<thead>
<tr>
<th>对比项</th>
<th><code>git merge</code></th>
<th><code>git rebase</code></th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>主要作用</strong></td>
<td>合并两个分支的历史记录，生成一个新的“合并提交”</td>
<td>将一个分支的提交重新“嫁接”到另一个分支上</td>
</tr>
<tr>
<td><strong>历史结构</strong></td>
<td>保留分叉历史（产生合并节点）</td>
<td>线性化历史（重写提交）</td>
</tr>
<tr>
<td><strong>是否生成新提交</strong></td>
<td>✅ 会生成一个新的 <em>merge commit</em></td>
<td>⚠️ 重新生成一批新的提交（commit hash 改变）</td>
</tr>
<tr>
<td><strong>提交历史结果</strong></td>
<td>历史复杂，但真实反映开发过程</td>
<td>历史干净，像一条直线</td>
</tr>
<tr>
<td><strong>是否修改提交哈希</strong></td>
<td>❌ 不会改变已有提交的哈希</td>
<td>✅ 所有 rebase 的提交哈希都会改变</td>
</tr>
<tr>
<td><strong>是否易冲突</strong></td>
<td>⚠️ 可能在合并时冲突一次</td>
<td>⚠️ 每个提交应用时都可能冲突</td>
</tr>
<tr>
<td><strong>安全性</strong></td>
<td>✅ 安全（不会重写历史）</td>
<td>⚠️ 可能破坏共享历史（不建议在公共分支上用）</td>
</tr>
<tr>
<td><strong>适用场景</strong></td>
<td>保留真实开发分支结构（例如多人合作）</td>
<td>自己分支上整理历史，让日志更清晰</td>
</tr>
<tr>
<td><strong>常见命令</strong></td>
<td><code>git merge feature</code></td>
<td><code>git rebase main</code></td>
</tr>
<tr>
<td><strong>结果历史示意</strong></td>
<td>分叉 + 合并节点 🪵</td>
<td>一条直线 🚀</td>
</tr>
<tr>
<td><strong>是否影响他人</strong></td>
<td>❌ 不会（提交哈希不变）</td>
<td>⚠️ 若已推送，会影响他人分支同步</td>
</tr>
</tbody>
</table>`],reference:"/myKMS/knowledge/base/js#_21-git-merge-与-git-rebase",source:"/myKMS/knowledge/base/js"},{id:94,question:"Node 中 require 时发生了什么?",answer:["路径解析 => 缓存检查 => 创建模块对象 => 读取与编译 => 执行模块代码 => 标记完成并返回",`require() 缓存检查顺序：
   - 1. 检查原生模块缓存; 
   - 2. 检查 require.cache（路径解析后的绝对路径作为 key）。
   - 3. 如果缓存未命中 → 走模块解析; 
   - 4. 执行模块，填充 require.cache，返回 module.exports。`],answerHtml:["<p>路径解析 =&gt; 缓存检查 =&gt; 创建模块对象 =&gt; 读取与编译 =&gt; 执行模块代码 =&gt; 标记完成并返回</p>",`<p>require() 缓存检查顺序：</p>
<ul>
<li>
<ol>
<li>检查原生模块缓存;</li>
</ol>
</li>
<li>
<ol start="2">
<li>检查 require.cache（路径解析后的绝对路径作为 key）。</li>
</ol>
</li>
<li>
<ol start="3">
<li>如果缓存未命中 → 走模块解析;</li>
</ol>
</li>
<li>
<ol start="4">
<li>执行模块，填充 require.cache，返回 module.exports。</li>
</ol>
</li>
</ul>`],reference:"/myKMS/knowledge/base/nodejs#_1-node-中-require-时发生了什么",source:"/myKMS/knowledge/base/nodejs"},{id:95,question:"Node.js 事件循环机制",answer:[`六个阶段: 
1. Timers（计时器阶段）执行 setTimeout() 和 setInterval() 的回调
2. Pending callbacks（待定回调阶段）执行系统操作的回调，如 TCP 错误
3. Idle, prepare（闲置准备阶段）内部使用阶段
4. Poll（轮询阶段） - 最重要的阶段 检索新的 I/O 事件，执行 I/O 相关回调
5. Check（检查阶段）执行 setImmediate() 的回调
6. Close callbacks（关闭回调阶段）执行关闭事件的回调，如 socket.on('close', ...)`,"```\n每个阶段的宏任务执行完 →\n    执行所有 nextTick 回调 →\n    执行所有微任务 (Promise)\n→ 进入下一个阶段\n```","注意: 滥用 process.nextTick：会阻塞后续阶段（饿死循环）。",`**优先级关系**
**process.nextTick() > Promise.then() > setTimeout() > setImmediate()**`,`- Node 的事件循环由 libuv 实现，循环有 timers → pending → poll → check → close 等阶段。
- 微任务： process.nextTick（最高优先）→ Promise.then（微任务）。
- setImmediate 与 setTimeout(0) 的先后取决于上下文（在 I/O 回调中 setImmediate 会优先）。
- 线程池 用于无法立即非阻塞完成的工作（默认线程数 ≈4，可通过 UV_THREADPOOL_SIZE 设置）。
- 不要阻塞 主线程，必要时用 worker_threads 或外部服务/进程。`],answerHtml:[`<p>六个阶段:</p>
<ol>
<li>Timers（计时器阶段）执行 setTimeout() 和 setInterval() 的回调</li>
<li>Pending callbacks（待定回调阶段）执行系统操作的回调，如 TCP 错误</li>
<li>Idle, prepare（闲置准备阶段）内部使用阶段</li>
<li>Poll（轮询阶段） - 最重要的阶段 检索新的 I/O 事件，执行 I/O 相关回调</li>
<li>Check（检查阶段）执行 setImmediate() 的回调</li>
<li>Close callbacks（关闭回调阶段）执行关闭事件的回调，如 socket.on('close', ...)</li>
</ol>`,`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><!--::markdown-it-async::4lyx51mmssm7zjs3tckf8q::--><code>每个阶段的宏任务执行完 →
    执行所有 nextTick 回调 →
    执行所有微任务 (Promise)
→ 进入下一个阶段</code></pre>
</div>`,"<p>注意: 滥用 process.nextTick：会阻塞后续阶段（饿死循环）。</p>",`<p><strong>优先级关系</strong>
<strong>process.nextTick() &gt; Promise.then() &gt; setTimeout() &gt; setImmediate()</strong></p>`,`<ul>
<li>Node 的事件循环由 libuv 实现，循环有 timers → pending → poll → check → close 等阶段。</li>
<li>微任务： process.nextTick（最高优先）→ Promise.then（微任务）。</li>
<li>setImmediate 与 setTimeout(0) 的先后取决于上下文（在 I/O 回调中 setImmediate 会优先）。</li>
<li>线程池 用于无法立即非阻塞完成的工作（默认线程数 ≈4，可通过 UV_THREADPOOL_SIZE 设置）。</li>
<li>不要阻塞 主线程，必要时用 worker_threads 或外部服务/进程。</li>
</ul>`],reference:"/myKMS/knowledge/base/nodejs#_2-node-js-事件循环机制",source:"/myKMS/knowledge/base/nodejs"},{id:96,question:"process.nextTick 与 setTimeout 的区别",answer:[`- process.nextTick 在当前事件循环结束时执行
- setTimeout(fn, 0) 在下一个事件循环开始时执行
- nextTick 优先级更高`],answerHtml:[`<ul>
<li>process.nextTick 在当前事件循环结束时执行</li>
<li>setTimeout(fn, 0) 在下一个事件循环开始时执行</li>
<li>nextTick 优先级更高</li>
</ul>`],reference:"/myKMS/knowledge/base/nodejs#_3-process-nexttick-与-settimeout-的区别",source:"/myKMS/knowledge/base/nodejs"},{id:97,question:"Koa 与 Express 的区别",answer:["1. 中间件机制",`- Express：单向流动，中间件通过 next() 线性执行，一旦响应结束就不能修改
- Koa：洋葱模型，中间件既可以处理请求也可以处理响应，支持统一的错误处理`,"2. 异步处理",`- Express：基于回调函数，容易陷入回调地狱，异步错误处理相对复杂
- Koa：基于 Promise 和 async/await，代码更简洁，异步流程控制更直观`,"3. 上下文对象",`- Express：req 和 res 是分离的对象，功能相对分散
- Koa：ctx 统一上下文，封装了 request 和 response，API 设计更简洁优雅`,"4. 功能内置",`- Express：内置了很多中间件，功能齐全，开箱即用
- Koa：核心功能精简，需要通过第三方中间件扩展，更加灵活`,"5. 路由系统",`- Express：内置了强大的路由系统，支持链式调用
- Koa：路由需要通过第三方中间件实现（如 koa-router）`,"6.社区生态",`- Express：历史更悠久，社区更成熟，资源更丰富
- Koa：较新但发展迅速，设计更现代，适合新项目`,"7. 错误处理",`- Express：通过特殊的错误处理中间件，需要手动传递错误
- Koa：通过 try/catch 优雅地处理错误，统一的错误处理更方便`,"8. 适用场景",`- Express：适合快速开发，现有项目迁移，团队熟悉度高
- Koa：适合追求优雅代码，需要更好的异步流程控制的场景`],answerHtml:[`<ol>
<li>中间件机制</li>
</ol>`,`<ul>
<li>Express：单向流动，中间件通过 next() 线性执行，一旦响应结束就不能修改</li>
<li>Koa：洋葱模型，中间件既可以处理请求也可以处理响应，支持统一的错误处理</li>
</ul>`,`<ol start="2">
<li>异步处理</li>
</ol>`,`<ul>
<li>Express：基于回调函数，容易陷入回调地狱，异步错误处理相对复杂</li>
<li>Koa：基于 Promise 和 async/await，代码更简洁，异步流程控制更直观</li>
</ul>`,`<ol start="3">
<li>上下文对象</li>
</ol>`,`<ul>
<li>Express：req 和 res 是分离的对象，功能相对分散</li>
<li>Koa：ctx 统一上下文，封装了 request 和 response，API 设计更简洁优雅</li>
</ul>`,`<ol start="4">
<li>功能内置</li>
</ol>`,`<ul>
<li>Express：内置了很多中间件，功能齐全，开箱即用</li>
<li>Koa：核心功能精简，需要通过第三方中间件扩展，更加灵活</li>
</ul>`,`<ol start="5">
<li>路由系统</li>
</ol>`,`<ul>
<li>Express：内置了强大的路由系统，支持链式调用</li>
<li>Koa：路由需要通过第三方中间件实现（如 koa-router）</li>
</ul>`,"<p>6.社区生态</p>",`<ul>
<li>Express：历史更悠久，社区更成熟，资源更丰富</li>
<li>Koa：较新但发展迅速，设计更现代，适合新项目</li>
</ul>`,`<ol start="7">
<li>错误处理</li>
</ol>`,`<ul>
<li>Express：通过特殊的错误处理中间件，需要手动传递错误</li>
<li>Koa：通过 try/catch 优雅地处理错误，统一的错误处理更方便</li>
</ul>`,`<ol start="8">
<li>适用场景</li>
</ol>`,`<ul>
<li>Express：适合快速开发，现有项目迁移，团队熟悉度高</li>
<li>Koa：适合追求优雅代码，需要更好的异步流程控制的场景</li>
</ul>`],reference:"/myKMS/knowledge/base/nodejs#_4-koa-与-express-的区别",source:"/myKMS/knowledge/base/nodejs"},{id:98,question:"JWT 如何自动更新 token",answer:[`采用JWT 双 Token 模式：Access Token + Refresh Token
| 类型                | 作用                  | 有效期          | 存储位置                          |
| ----------------- | ------------------- | ------------ | ----------------------------- |
| **Access Token**  | 每次请求携带，用于认证用户身份     | 短（几分钟 ~ 几小时） | 浏览器内存 / localStorage / cookie |
| **Refresh Token** | 用于申请新的 Access Token | 长（几天 ~ 几周）   | 安全 Cookie / HttpOnly 存储       |`,"当前端收到 401 且检测到是 “Access Token 过期”时, 用Refresh Token 获取新的Access Token","前端思路:",`- 封装请求拦截器；
- 如果请求返回 401，且不是刷新请求；
- 尝试调用 /auth/refresh；
- 刷新成功 → 重试原请求；
- 刷新失败 → 跳转登录。`,`1. 滑动过期（Sliding Expiration）
    - 每次用户请求时，如果 Access Token 快过期，自动签发新 Token(playload 可以加过期时间)`,`2. 令牌版本号机制
    - 每个用户在数据库中维护一个 tokenVersion；当刷新或登出时，更新版本号；旧的 Refresh Token 因版本号不匹配立即失效。`,`3. JWT 自动续期时的“并发刷新冲突问题”
    - 同一时间只允许一次刷新操作,其他请求等待刷新完成后再继续。
        -  请求队列 + 刷新锁
        - 当第一个请求检测到 token 过期时：
            - 标记一个全局变量 isRefreshing = true
            - 发起 /auth/refresh 请求
            - 其他同时失败的请求 不要立即刷新，而是放进一个队列 pendingRequests
        - 刷新成功后：
            - 更新新的 token；
            - 依次重放（retry）队列中的请求；
            - 清空队列；
            - 重置 isRefreshing = false。
    - 刷新令牌幂等化
        - 若在短时间内多次使用同一个 refresh token,后端可以检测并返回同一个新 token（或最新有效 token），而不是直接报错“refresh token 已被使用”。
    - 刷新限流
        - 对同一个用户的刷新操作设置时间间隔限制（例如 5 秒内只允许一次刷新）`],answerHtml:[`<p>采用JWT 双 Token 模式：Access Token + Refresh Token</p>
<table tabindex="0">
<thead>
<tr>
<th>类型</th>
<th>作用</th>
<th>有效期</th>
<th>存储位置</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Access Token</strong></td>
<td>每次请求携带，用于认证用户身份</td>
<td>短（几分钟 ~ 几小时）</td>
<td>浏览器内存 / localStorage / cookie</td>
</tr>
<tr>
<td><strong>Refresh Token</strong></td>
<td>用于申请新的 Access Token</td>
<td>长（几天 ~ 几周）</td>
<td>安全 Cookie / HttpOnly 存储</td>
</tr>
</tbody>
</table>`,"<p>当前端收到 401 且检测到是 “Access Token 过期”时, 用Refresh Token 获取新的Access Token</p>","<p>前端思路:</p>",`<ul>
<li>封装请求拦截器；</li>
<li>如果请求返回 401，且不是刷新请求；</li>
<li>尝试调用 /auth/refresh；</li>
<li>刷新成功 → 重试原请求；</li>
<li>刷新失败 → 跳转登录。</li>
</ul>`,`<ol>
<li>滑动过期（Sliding Expiration）
<ul>
<li>每次用户请求时，如果 Access Token 快过期，自动签发新 Token(playload 可以加过期时间)</li>
</ul>
</li>
</ol>`,`<ol start="2">
<li>令牌版本号机制
<ul>
<li>每个用户在数据库中维护一个 tokenVersion；当刷新或登出时，更新版本号；旧的 Refresh Token 因版本号不匹配立即失效。</li>
</ul>
</li>
</ol>`,`<ol start="3">
<li>JWT 自动续期时的“并发刷新冲突问题”
<ul>
<li>同一时间只允许一次刷新操作,其他请求等待刷新完成后再继续。
<ul>
<li>请求队列 + 刷新锁</li>
<li>当第一个请求检测到 token 过期时：
<ul>
<li>标记一个全局变量 isRefreshing = true</li>
<li>发起 /auth/refresh 请求</li>
<li>其他同时失败的请求 不要立即刷新，而是放进一个队列 pendingRequests</li>
</ul>
</li>
<li>刷新成功后：
<ul>
<li>更新新的 token；</li>
<li>依次重放（retry）队列中的请求；</li>
<li>清空队列；</li>
<li>重置 isRefreshing = false。</li>
</ul>
</li>
</ul>
</li>
<li>刷新令牌幂等化
<ul>
<li>若在短时间内多次使用同一个 refresh token,后端可以检测并返回同一个新 token（或最新有效 token），而不是直接报错“refresh token 已被使用”。</li>
</ul>
</li>
<li>刷新限流
<ul>
<li>对同一个用户的刷新操作设置时间间隔限制（例如 5 秒内只允许一次刷新）</li>
</ul>
</li>
</ul>
</li>
</ol>`],reference:"/myKMS/knowledge/base/nodejs#_5-jwt-如何自动更新-token",source:"/myKMS/knowledge/base/nodejs"},{id:99,question:"扫描登录如何实现?",answer:["PC浏览器 <———> 服务器 <———> 手机App",`- 浏览器打开登录页
    - 前端请求后端生成一个 唯一的登录二维码
    - 二维码内容通常是一个 临时 login_token（或UUID）
    - 二维码展示给用户`,`- 用户用手机App扫码
    - App 扫描二维码，得到 login_token
    - App 发请求到服务器，验证该二维码是否合法
    - 如果合法，App 显示提示「是否允许登录该网页？」`,`- 用户在手机上点击「确认登录」
    - App 带着登录状态的用户信息，调用后端接口
    - 服务端保存：该 login_token 对应的登录状态`,`- 网页端轮询或WebSocket等待登录结果
    - 网页端每隔1-2秒查询登录结果
    - 如果发现 login_token 已被确认绑定用户，则返回成功状态 + 用户信息`,`- 浏览器登录成功
    - 前端拿到 token（如JWT），存入 Cookie / LocalStorage
    - 重定向到首页，登录完成`],answerHtml:["<p>PC浏览器 &lt;———&gt; 服务器 &lt;———&gt; 手机App</p>",`<ul>
<li>浏览器打开登录页
<ul>
<li>前端请求后端生成一个 唯一的登录二维码</li>
<li>二维码内容通常是一个 临时 login_token（或UUID）</li>
<li>二维码展示给用户</li>
</ul>
</li>
</ul>`,`<ul>
<li>用户用手机App扫码
<ul>
<li>App 扫描二维码，得到 login_token</li>
<li>App 发请求到服务器，验证该二维码是否合法</li>
<li>如果合法，App 显示提示「是否允许登录该网页？」</li>
</ul>
</li>
</ul>`,`<ul>
<li>用户在手机上点击「确认登录」
<ul>
<li>App 带着登录状态的用户信息，调用后端接口</li>
<li>服务端保存：该 login_token 对应的登录状态</li>
</ul>
</li>
</ul>`,`<ul>
<li>网页端轮询或WebSocket等待登录结果
<ul>
<li>网页端每隔1-2秒查询登录结果</li>
<li>如果发现 login_token 已被确认绑定用户，则返回成功状态 + 用户信息</li>
</ul>
</li>
</ul>`,`<ul>
<li>浏览器登录成功
<ul>
<li>前端拿到 token（如JWT），存入 Cookie / LocalStorage</li>
<li>重定向到首页，登录完成</li>
</ul>
</li>
</ul>`],reference:"/myKMS/knowledge/base/nodejs#_6-扫描登录如何实现",source:"/myKMS/knowledge/base/nodejs"},{id:100,question:"http2的首部压缩",answer:[`- 为什么要压缩首部？
  - HTTP/1.1 的每个请求都会携带大量重复的首部. 这些头部在同一个连接中 几乎每次都一样，比如 User-Agent、Cookie、Accept。HTTP/2 引入 首部压缩（Header Compression） 来减少这种重复，提高传输效率。`,"- HTTP/2 首部压缩机制：HPACK","| 机制                          | 说明                                                   |\n| --------------------------- | ---------------------------------------------------- |\n| **静态表（Static Table）**       | 内置常见头部字段，如 `:method`, `:path`, `:status` 等；用索引代替字符串。 |\n| **动态表（Dynamic Table）**      | 在连接中缓存已发送的头部；后续请求只需引用索引。                             |\n| **霍夫曼编码（Huffman Encoding）** | 对字符串部分再进行霍夫曼编码，进一步压缩体积。                              |","- HPACK 的压缩原理图",`| 步骤 | 动作     | 效果                               |
| -- | ------ | -------------------------------- |
| 1  | 查静态表   | 常用字段直接用编号（如 \`:method: GET\` = #2） |
| 2  | 查动态表   | 最近请求过的头字段从表中引用                   |
| 3  | 发送差异数据 | 只发送新字段或变化部分                      |
| 4  | 霍夫曼编码  | 对字符串再压缩                          |
| ✅  | 结果     | 头部数据量可减少 60–90%                  |`,"**HTTP/2 的首部压缩机制（HPACK）通过静态表、动态表和霍夫曼编码三种方式，实现头部字段的高效压缩与重用，大幅减少网络传输开销。**",'HTTP/2 是一个二进制协议。在 HTTP/1.1 版中，报文的头信息必须是文本（ASCII 编码），数据体可以是文本，也可以是二进制。HTTP/2 则是一个彻底的二进制协议，头信息和数据体都是二进制，并且统称为"帧"，可以分为头信息帧和数据帧。 帧的概念是它实现多路复用的基础。'],answerHtml:[`<ul>
<li>为什么要压缩首部？
<ul>
<li>HTTP/1.1 的每个请求都会携带大量重复的首部. 这些头部在同一个连接中 几乎每次都一样，比如 User-Agent、Cookie、Accept。HTTP/2 引入 首部压缩（Header Compression） 来减少这种重复，提高传输效率。</li>
</ul>
</li>
</ul>`,`<ul>
<li>HTTP/2 首部压缩机制：HPACK</li>
</ul>`,`<table tabindex="0">
<thead>
<tr>
<th>机制</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>静态表（Static Table）</strong></td>
<td>内置常见头部字段，如 <code>:method</code>, <code>:path</code>, <code>:status</code> 等；用索引代替字符串。</td>
</tr>
<tr>
<td><strong>动态表（Dynamic Table）</strong></td>
<td>在连接中缓存已发送的头部；后续请求只需引用索引。</td>
</tr>
<tr>
<td><strong>霍夫曼编码（Huffman Encoding）</strong></td>
<td>对字符串部分再进行霍夫曼编码，进一步压缩体积。</td>
</tr>
</tbody>
</table>`,`<ul>
<li>HPACK 的压缩原理图</li>
</ul>`,`<table tabindex="0">
<thead>
<tr>
<th>步骤</th>
<th>动作</th>
<th>效果</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>查静态表</td>
<td>常用字段直接用编号（如 <code>:method: GET</code> = #2）</td>
</tr>
<tr>
<td>2</td>
<td>查动态表</td>
<td>最近请求过的头字段从表中引用</td>
</tr>
<tr>
<td>3</td>
<td>发送差异数据</td>
<td>只发送新字段或变化部分</td>
</tr>
<tr>
<td>4</td>
<td>霍夫曼编码</td>
<td>对字符串再压缩</td>
</tr>
<tr>
<td>✅</td>
<td>结果</td>
<td>头部数据量可减少 60–90%</td>
</tr>
</tbody>
</table>`,"<p><strong>HTTP/2 的首部压缩机制（HPACK）通过静态表、动态表和霍夫曼编码三种方式，实现头部字段的高效压缩与重用，大幅减少网络传输开销。</strong></p>","<p>HTTP/2 是一个二进制协议。在 HTTP/1.1 版中，报文的头信息必须是文本（ASCII 编码），数据体可以是文本，也可以是二进制。HTTP/2 则是一个彻底的二进制协议，头信息和数据体都是二进制，并且统称为&quot;帧&quot;，可以分为头信息帧和数据帧。 帧的概念是它实现多路复用的基础。</p>"],reference:"/myKMS/knowledge/browser/http#_1-http2的首部压缩",source:"/myKMS/knowledge/browser/http"},{id:101,question:"tcp 断开4次挥手",answer:["TCP 是全双工的. 全双工（Full-duplex）：",`- 即双方可以同时发送和接收数据。
- 所以连接断开时，双方都要单独关闭各自的发送方向。`,"假设：客户端（主动关闭连接）服务器（被动关闭连接）","通信结束时，断开过程如下：","| 步骤 | 方向        | 报文标志位   | 说明                   |\n| -- | --------- | ------- | -------------------- |\n| ①  | 客户端 → 服务器 | `FIN=1` | 客户端请求关闭发送通道          |\n| ②  | 服务器 → 客户端 | `ACK=1` | 服务器确认接收              |\n| ③  | 服务器 → 客户端 | `FIN=1` | 服务器也关闭发送通道           |\n| ④  | 客户端 → 服务器 | `ACK=1` | 客户端确认接收，进入 TIME_WAIT |",`\`\`\`
客户端 (Client)                             服务器 (Server)
------------------                          ------------------

   ESTABLISHED                                  ESTABLISHED
        |                                              |
        | ① FIN=1, seq=u                              |
        |--------------------------------------------->|
        |                                              |
        |                           收到 FIN, 发 ACK=1, ack=u+1
        | ②                                            |
        |<---------------------------------------------|
        |                                              |
        |                           服务器继续处理剩余数据
        |                                              |
        |                           ③ FIN=1, seq=v    |
        |<---------------------------------------------|
        | ④ ACK=1, ack=v+1                             |
        |--------------------------------------------->|
        |                                              |
   TIME_WAIT(等待2MSL)                          CLOSED
        |
   连接彻底关闭
\`\`\``,"客户端最后要 等待 2×MSL（Maximum Segment Lifetime） 时间，约几十秒。","作用：",`- 确保服务器收到最终 ACK
  - 若 ACK 丢失，服务器会重发 FIN。
  - 客户端在 TIME_WAIT 状态还能重发 ACK。`,`- 防止旧连接残余报文影响新连接
  - 等待 MSL 确保网络中旧包都过期。`,`1. 为什么关闭要四次，而不是三次？
因为 TCP 是全双工：`,`- 一方关闭发送，不代表另一方也关闭；
- 必须双方都各自发送 FIN，确认关闭。`,"2. 为什么客户端要 TIME_WAIT？",`防止最后的 ACK 丢失，确保连接彻底关闭。
另外，避免旧连接的数据干扰新连接。`,"3. 为什么是 “2MSL”？",`因为：
一个 MSL 是一个报文在网络中能存活的最长时间；
等 2×MSL，确保往返的所有旧报文都消失。`,"4. 如果服务器先关闭会怎样？",`流程相同，只是角色对调。
谁主动关闭，谁就经历 TIME_WAIT。`],answerHtml:["<p>TCP 是全双工的. 全双工（Full-duplex）：</p>",`<ul>
<li>即双方可以同时发送和接收数据。</li>
<li>所以连接断开时，双方都要单独关闭各自的发送方向。</li>
</ul>`,"<p>假设：客户端（主动关闭连接）服务器（被动关闭连接）</p>","<p>通信结束时，断开过程如下：</p>",`<table tabindex="0">
<thead>
<tr>
<th>步骤</th>
<th>方向</th>
<th>报文标志位</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>①</td>
<td>客户端 → 服务器</td>
<td><code>FIN=1</code></td>
<td>客户端请求关闭发送通道</td>
</tr>
<tr>
<td>②</td>
<td>服务器 → 客户端</td>
<td><code>ACK=1</code></td>
<td>服务器确认接收</td>
</tr>
<tr>
<td>③</td>
<td>服务器 → 客户端</td>
<td><code>FIN=1</code></td>
<td>服务器也关闭发送通道</td>
</tr>
<tr>
<td>④</td>
<td>客户端 → 服务器</td>
<td><code>ACK=1</code></td>
<td>客户端确认接收，进入 TIME_WAIT</td>
</tr>
</tbody>
</table>`,`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><!--::markdown-it-async::q9ufw9yfe2c25410yw090q::--><code>客户端 (Client)                             服务器 (Server)
------------------                          ------------------

   ESTABLISHED                                  ESTABLISHED
        |                                              |
        | ① FIN=1, seq=u                              |
        |---------------------------------------------&gt;|
        |                                              |
        |                           收到 FIN, 发 ACK=1, ack=u+1
        | ②                                            |
        |&lt;---------------------------------------------|
        |                                              |
        |                           服务器继续处理剩余数据
        |                                              |
        |                           ③ FIN=1, seq=v    |
        |&lt;---------------------------------------------|
        | ④ ACK=1, ack=v+1                             |
        |---------------------------------------------&gt;|
        |                                              |
   TIME_WAIT(等待2MSL)                          CLOSED
        |
   连接彻底关闭</code></pre>
</div>`,"<p>客户端最后要 等待 2×MSL（Maximum Segment Lifetime） 时间，约几十秒。</p>","<p>作用：</p>",`<ul>
<li>确保服务器收到最终 ACK
<ul>
<li>若 ACK 丢失，服务器会重发 FIN。</li>
<li>客户端在 TIME_WAIT 状态还能重发 ACK。</li>
</ul>
</li>
</ul>`,`<ul>
<li>防止旧连接残余报文影响新连接
<ul>
<li>等待 MSL 确保网络中旧包都过期。</li>
</ul>
</li>
</ul>`,`<ol>
<li>为什么关闭要四次，而不是三次？
因为 TCP 是全双工：</li>
</ol>`,`<ul>
<li>一方关闭发送，不代表另一方也关闭；</li>
<li>必须双方都各自发送 FIN，确认关闭。</li>
</ul>`,`<ol start="2">
<li>为什么客户端要 TIME_WAIT？</li>
</ol>`,`<p>防止最后的 ACK 丢失，确保连接彻底关闭。
另外，避免旧连接的数据干扰新连接。</p>`,`<ol start="3">
<li>为什么是 “2MSL”？</li>
</ol>`,`<p>因为：
一个 MSL 是一个报文在网络中能存活的最长时间；
等 2×MSL，确保往返的所有旧报文都消失。</p>`,`<ol start="4">
<li>如果服务器先关闭会怎样？</li>
</ol>`,`<p>流程相同，只是角色对调。
谁主动关闭，谁就经历 TIME_WAIT。</p>`],reference:"/myKMS/knowledge/browser/http#_2-tcp-断开4次挥手",source:"/myKMS/knowledge/browser/http"},{id:102,question:"什么是队头阻塞",answer:["队头阻塞就是“队列第一个请求卡住，后面全被拖延”。HTTP/3 通过 QUIC 彻底缓解了这个问题。"],answerHtml:["<p>队头阻塞就是“队列第一个请求卡住，后面全被拖延”。HTTP/3 通过 QUIC 彻底缓解了这个问题。</p>"],reference:"/myKMS/knowledge/browser/http#_3-什么是队头阻塞",source:"/myKMS/knowledge/browser/http"},{id:103,question:"http 2 多路复用",answer:["HTTP/1.1 每个请求都必须建立在一个 TCP 连接上。虽然它支持“Keep-Alive”长连接，但仍然有两个性能瓶颈：",`- 队头阻塞（Head-of-Line Blocking）: 一个连接中，请求是串行执行的。前一个响应没回来，后面的请求必须等。
- 多连接并发受限: 浏览器为同一域名通常只能同时开 6 个 TCP 连接，多了也被限制。
- 📦 头部重复传输: 每次请求都要携带大量相同的 Header（如 cookie、user-agent）。`,"在一个 TCP 连接上，同时并发多个 HTTP 请求与响应。","工作方式：",`1. 所有请求和响应都被拆分成小块（frame）。
2. 每个请求分配一个唯一的 Stream ID。
3. 这些 frame 被交错（交织）发送，在同一个 TCP 连接中同时传输。
4. 接收端再根据 Stream ID 把它们拼回原样。`,`举个例子：
假设浏览器要加载三个资源：`,"```\nindex.html\nstyle.css\nmain.js\n\n```","HTTP/1.1：",`- 3 个请求需要占用 3 个 TCP 连接；
- 或者 1 个连接按顺序：html → css → js；
- 前面的慢了，后面的全卡住（队头阻塞）。`,"HTTP/2：",`- 所有请求共用 1 个 TCP 连接；
- 三个请求的 frame 被交错发送；
- 谁先返回数据就先解析，完全并行。`,"多路复用消除了 HTTP 层阻塞，但 TCP 层仍可能受丢包影响。","**HTTP/2 多路复用 = 一个连接里同时传多条请求流，互不阻塞，性能飞升。**"],answerHtml:["<p>HTTP/1.1 每个请求都必须建立在一个 TCP 连接上。虽然它支持“Keep-Alive”长连接，但仍然有两个性能瓶颈：</p>",`<ul>
<li>队头阻塞（Head-of-Line Blocking）: 一个连接中，请求是串行执行的。前一个响应没回来，后面的请求必须等。</li>
<li>多连接并发受限: 浏览器为同一域名通常只能同时开 6 个 TCP 连接，多了也被限制。</li>
<li>📦 头部重复传输: 每次请求都要携带大量相同的 Header（如 cookie、user-agent）。</li>
</ul>`,"<p>在一个 TCP 连接上，同时并发多个 HTTP 请求与响应。</p>","<p>工作方式：</p>",`<ol>
<li>所有请求和响应都被拆分成小块（frame）。</li>
<li>每个请求分配一个唯一的 Stream ID。</li>
<li>这些 frame 被交错（交织）发送，在同一个 TCP 连接中同时传输。</li>
<li>接收端再根据 Stream ID 把它们拼回原样。</li>
</ol>`,`<p>举个例子：
假设浏览器要加载三个资源：</p>`,`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><!--::markdown-it-async::0o7jxcui0d7pq6ej2ruiiha::--><code>index.html
style.css
main.js
</code></pre>
</div>`,"<p>HTTP/1.1：</p>",`<ul>
<li>3 个请求需要占用 3 个 TCP 连接；</li>
<li>或者 1 个连接按顺序：html → css → js；</li>
<li>前面的慢了，后面的全卡住（队头阻塞）。</li>
</ul>`,"<p>HTTP/2：</p>",`<ul>
<li>所有请求共用 1 个 TCP 连接；</li>
<li>三个请求的 frame 被交错发送；</li>
<li>谁先返回数据就先解析，完全并行。</li>
</ul>`,"<p>多路复用消除了 HTTP 层阻塞，但 TCP 层仍可能受丢包影响。</p>","<p><strong>HTTP/2 多路复用 = 一个连接里同时传多条请求流，互不阻塞，性能飞升。</strong></p>"],reference:"/myKMS/knowledge/browser/http#_4-http-2-多路复用",source:"/myKMS/knowledge/browser/http"},{id:104,question:"DNS 协议",answer:["DNS（Domain Name System） 是一个将 域名 ↔ IP 地址 相互映射的分布式系统。","因为：用户容易记住 www.example.com;计算机只能识别 93.184.216.34;DNS 让我们可以使用域名访问网站，系统自动帮你找到正确的 IP。","DNS 解析的完整流程:",`- 浏览器缓存: 先查本地 DNS 缓存（比如上次访问过)
- 操作系统缓存: 如果浏览器里没有，就问操作系统的 DNS 缓存。
- hosts 文件: 操作系统先查 hosts 文件，看看是否有手动配置。
- 本地 DNS 服务器（递归解析器）: 一般由 ISP（网络运营商）提供，比如 8.8.8.8（Google）、114.114.114.114（中国电信）。
- 递归查询（DNS 服务器帮你查到底）`,"DNS 通常使用 UDP 53 端口（查询），TCP 用于传输大数据量（如区域传送）。","每条 DNS 记录都有一个 TTL（Time To Live） 值，比如 300 秒。"],answerHtml:["<p>DNS（Domain Name System） 是一个将 域名 ↔ IP 地址 相互映射的分布式系统。</p>","<p>因为：用户容易记住 www.example.com;计算机只能识别 93.184.216.34;DNS 让我们可以使用域名访问网站，系统自动帮你找到正确的 IP。</p>","<p>DNS 解析的完整流程:</p>",`<ul>
<li>浏览器缓存: 先查本地 DNS 缓存（比如上次访问过)</li>
<li>操作系统缓存: 如果浏览器里没有，就问操作系统的 DNS 缓存。</li>
<li>hosts 文件: 操作系统先查 hosts 文件，看看是否有手动配置。</li>
<li>本地 DNS 服务器（递归解析器）: 一般由 ISP（网络运营商）提供，比如 8.8.8.8（Google）、114.114.114.114（中国电信）。</li>
<li>递归查询（DNS 服务器帮你查到底）</li>
</ul>`,"<p>DNS 通常使用 UDP 53 端口（查询），TCP 用于传输大数据量（如区域传送）。</p>","<p>每条 DNS 记录都有一个 TTL（Time To Live） 值，比如 300 秒。</p>"],reference:"/myKMS/knowledge/browser/http#_5-dns-协议",source:"/myKMS/knowledge/browser/http"},{id:105,question:"html script defer 与async",answer:[`| 特性             | \`<script async> \`                                          | \`<script defer>\`                                                    |
| ---------------- | -------------------------------------------------------- | ------------------------------------------------------------------ |
| 加载时机 (Loading) | 立即加载（与 HTML 解析并行）                                | 立即加载（与 HTML 解析并行）                                         |
| 执行时机 (Execution) | 文件下载完成后立即执行                                      | 等待整个 HTML 文档解析完成后再执行                                    |
| 执行顺序          | 不保证顺序。哪个文件先下载完，哪个先执行。                     | 保证顺序。按在文档中出现的顺序依次执行。                               |
| 是否阻塞 HTML     | 会。文件执行时会暂停 HTML 解析。                              | 不会。保证在 HTML 解析完成后才执行。                                   |
| 适用场景          | 适用于独立脚本，不依赖 DOM，也不被其他脚本依赖（如统计脚本）。      | 适用于依赖 DOM 或被其他 defer 脚本依赖的脚本（如应用主逻辑脚本）。         |`],answerHtml:[`<table tabindex="0">
<thead>
<tr>
<th>特性</th>
<th><code>&lt;script async&gt; </code></th>
<th><code>&lt;script defer&gt;</code></th>
</tr>
</thead>
<tbody>
<tr>
<td>加载时机 (Loading)</td>
<td>立即加载（与 HTML 解析并行）</td>
<td>立即加载（与 HTML 解析并行）</td>
</tr>
<tr>
<td>执行时机 (Execution)</td>
<td>文件下载完成后立即执行</td>
<td>等待整个 HTML 文档解析完成后再执行</td>
</tr>
<tr>
<td>执行顺序</td>
<td>不保证顺序。哪个文件先下载完，哪个先执行。</td>
<td>保证顺序。按在文档中出现的顺序依次执行。</td>
</tr>
<tr>
<td>是否阻塞 HTML</td>
<td>会。文件执行时会暂停 HTML 解析。</td>
<td>不会。保证在 HTML 解析完成后才执行。</td>
</tr>
<tr>
<td>适用场景</td>
<td>适用于独立脚本，不依赖 DOM，也不被其他脚本依赖（如统计脚本）。</td>
<td>适用于依赖 DOM 或被其他 defer 脚本依赖的脚本（如应用主逻辑脚本）。</td>
</tr>
</tbody>
</table>`],reference:"/myKMS/knowledge/browser/http#_6-html-script-defer-与async",source:"/myKMS/knowledge/browser/http"},{id:106,question:"HTTP/3",answer:["**HTTP/3 = HTTP/2 + QUIC(UDP)**","HTTP/3 是继 HTTP/2 之后的下一代超文本传输协议。它的核心变化是：**不再基于 TCP，而是基于 QUIC（UDP 之上的新协议）。**",`| 协议           | 传输层           | 特点            | 存在问题           |
| ------------ | ------------- | ------------- | -------------- |
| **HTTP/1.1** | TCP           | 简单、可靠         | 多连接、阻塞严重       |
| **HTTP/2**   | TCP           | 多路复用、头部压缩     | TCP 队头阻塞无法彻底解决 |
| **HTTP/3**   | **UDP（QUIC）** | 多路复用、内置加密、低延迟 | 部分老设备不兼容 UDP   |`,"QUIC（UDP）的优势",`QUIC 直接运行在 UDP 之上，自己实现可靠传输 + 拥塞控制 + 加密：
- 消除队头阻塞：每个流独立传输，不互相影响
- 1-RTT 握手（甚至 0-RTT）
- 连接可迁移（基于 Connection ID）
- 内置 TLS 1.3 加密（强制 HTTPS）`,`\`\`\`
// HTTP/2
HTTP/2
  ↓
  TLS
  ↓
  TCP
  ↓
  IP

// HTTP/3
HTTP/3
  ↓
  QUIC (内含TLS 1.3 + 可靠传输)
  ↓
  UDP
  ↓
  IP

\`\`\``],answerHtml:["<p><strong>HTTP/3 = HTTP/2 + QUIC(UDP)</strong></p>","<p>HTTP/3 是继 HTTP/2 之后的下一代超文本传输协议。它的核心变化是：<strong>不再基于 TCP，而是基于 QUIC（UDP 之上的新协议）。</strong></p>",`<table tabindex="0">
<thead>
<tr>
<th>协议</th>
<th>传输层</th>
<th>特点</th>
<th>存在问题</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>HTTP/1.1</strong></td>
<td>TCP</td>
<td>简单、可靠</td>
<td>多连接、阻塞严重</td>
</tr>
<tr>
<td><strong>HTTP/2</strong></td>
<td>TCP</td>
<td>多路复用、头部压缩</td>
<td>TCP 队头阻塞无法彻底解决</td>
</tr>
<tr>
<td><strong>HTTP/3</strong></td>
<td><strong>UDP（QUIC）</strong></td>
<td>多路复用、内置加密、低延迟</td>
<td>部分老设备不兼容 UDP</td>
</tr>
</tbody>
</table>`,"<p>QUIC（UDP）的优势</p>",`<p>QUIC 直接运行在 UDP 之上，自己实现可靠传输 + 拥塞控制 + 加密：</p>
<ul>
<li>消除队头阻塞：每个流独立传输，不互相影响</li>
<li>1-RTT 握手（甚至 0-RTT）</li>
<li>连接可迁移（基于 Connection ID）</li>
<li>内置 TLS 1.3 加密（强制 HTTPS）</li>
</ul>`,`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><!--::markdown-it-async::fqdp9aa70qt6pd5lttxd54::--><code>// HTTP/2
HTTP/2
  ↓
  TLS
  ↓
  TCP
  ↓
  IP

// HTTP/3
HTTP/3
  ↓
  QUIC (内含TLS 1.3 + 可靠传输)
  ↓
  UDP
  ↓
  IP
</code></pre>
</div>`],reference:"/myKMS/knowledge/browser/http#_7-http-3",source:"/myKMS/knowledge/browser/http"},{id:107,question:"nginx proxy_pass 与location 结尾加不加 / 对路径的影响",answer:["**尾斜杠“决定路径拼接规则”** ,location 和 proxy_pass 的结尾 是否带 /，直接决定了 Nginx 如何拼接请求路径。","proxy_pass 加不加 /:",`- 不加 /：location 匹配的路径会被完整拼接到 proxy_pass 地址后（适合后端接口路径与前端请求路径完全一致的场景）。
- 加 /：location 匹配的路径会被替换为 /，仅将剩余路径拼接到 proxy_pass 地址后（适合需要简化后端接口路径的场景）。`,"参考: \n|  情形 | `location` 配置 | `proxy_pass` 配置        | 请求示例       | 转发给上游的路径                 | 说明                          |\n| :-: | :------------ | :--------------------- | :--------- | :----------------------- | :-------------------------- |\n|  1  | `/api`（不带斜杠）  | `http://backend`（不带斜杠） | `/api/foo` | `http://backend/api/foo` | 保留原始路径 `/api/foo`。          |\n|  2  | `/api`（不带斜杠）  | `http://backend/`（带斜杠） | `/api/foo` | `http://backend//foo`    | 去除 `/api` 前缀后拼接，产生双斜杠。      |\n|  3  | `/api/`（带斜杠）  | `http://backend`（不带斜杠） | `/api/foo` | `http://backend/api/foo` | 保留 `/api/` 前缀。              |\n|  4  | `/api/`（带斜杠）  | `http://backend/`（带斜杠） | `/api/foo` | `http://backend/foo`     | 去除 `/api/` 前缀后拼接，结果 `/foo`。 |"],answerHtml:["<p><strong>尾斜杠“决定路径拼接规则”</strong> ,location 和 proxy_pass 的结尾 是否带 /，直接决定了 Nginx 如何拼接请求路径。</p>","<p>proxy_pass 加不加 /:</p>",`<ul>
<li>不加 /：location 匹配的路径会被完整拼接到 proxy_pass 地址后（适合后端接口路径与前端请求路径完全一致的场景）。</li>
<li>加 /：location 匹配的路径会被替换为 /，仅将剩余路径拼接到 proxy_pass 地址后（适合需要简化后端接口路径的场景）。</li>
</ul>`,`<p>参考:</p>
<table tabindex="0">
<thead>
<tr>
<th style="text-align:center">情形</th>
<th style="text-align:left"><code>location</code> 配置</th>
<th style="text-align:left"><code>proxy_pass</code> 配置</th>
<th style="text-align:left">请求示例</th>
<th style="text-align:left">转发给上游的路径</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">1</td>
<td style="text-align:left"><code>/api</code>（不带斜杠）</td>
<td style="text-align:left"><code>http://backend</code>（不带斜杠）</td>
<td style="text-align:left"><code>/api/foo</code></td>
<td style="text-align:left"><code>http://backend/api/foo</code></td>
<td style="text-align:left">保留原始路径 <code>/api/foo</code>。</td>
</tr>
<tr>
<td style="text-align:center">2</td>
<td style="text-align:left"><code>/api</code>（不带斜杠）</td>
<td style="text-align:left"><code>http://backend/</code>（带斜杠）</td>
<td style="text-align:left"><code>/api/foo</code></td>
<td style="text-align:left"><code>http://backend//foo</code></td>
<td style="text-align:left">去除 <code>/api</code> 前缀后拼接，产生双斜杠。</td>
</tr>
<tr>
<td style="text-align:center">3</td>
<td style="text-align:left"><code>/api/</code>（带斜杠）</td>
<td style="text-align:left"><code>http://backend</code>（不带斜杠）</td>
<td style="text-align:left"><code>/api/foo</code></td>
<td style="text-align:left"><code>http://backend/api/foo</code></td>
<td style="text-align:left">保留 <code>/api/</code> 前缀。</td>
</tr>
<tr>
<td style="text-align:center">4</td>
<td style="text-align:left"><code>/api/</code>（带斜杠）</td>
<td style="text-align:left"><code>http://backend/</code>（带斜杠）</td>
<td style="text-align:left"><code>/api/foo</code></td>
<td style="text-align:left"><code>http://backend/foo</code></td>
<td style="text-align:left">去除 <code>/api/</code> 前缀后拼接，结果 <code>/foo</code>。</td>
</tr>
</tbody>
</table>`],reference:"/myKMS/knowledge/browser/http#_8-nginx-proxy-pass-与location-结尾加不加-对路径的影响",source:"/myKMS/knowledge/browser/http"},{id:108,question:"nginx多域名隔离, 同域名不同路径映射",answer:["Nginx 可以通过 include 指令或虚拟主机（vhost）实现前端多环境（如开发、测试、生产）的隔离部署，同时针对同域名不同路径的映射场景，需要处理路径重写和资源引用问题",`多环境隔离的核心是为不同环境（如 dev、test、prod）配置独立的 Nginx 规则，避免互相干扰。
1. 基于 include 指令的多环境配置（推荐）
  - 适合单服务器部署多个环境，通过拆分配置文件实现隔离，便于维护。
  - 也适合单服务部署多域名环境`,"2. 基于虚拟主机（vhost）的多环境配置",`\`\`\`nginx
http {
    # 开发环境（域名区分）
    server {
        listen 80;
        server_name dev.example.com;  # 开发环境域名
        root /path/to/frontend/dev;
        # ... 其他配置（路由、代理等）
    }

    # 测试环境（端口区分）
    server {
        listen 8081;  # 测试环境端口
        server_name localhost;
        root /path/to/frontend/test;
        # ... 其他配置
    }

    # 生产环境（HTTPS）
    server {
        listen 443 ssl;
        server_name example.com;  # 生产环境域名
        root /path/to/frontend/prod;
        # ... SSL 配置和其他生产环境特有的规则
    }
}
\`\`\``,"同域名不同路径映射的重写问题及解决方案","当多个前端应用部署在同一域名的不同路径下（如 example.com/app1、example.com/app2），需要解决路径映射和资源引用的问题。",`\`\`\`nginx
server {
    listen 80;
    server_name example.com;
    root /var/www;  # 父目录

    # 应用 A：匹配 /app1 路径
    location /app1 {
        # 实际文件目录为 /var/www/app1
        alias /var/www/app1;  # 注意：这里用 alias 而非 root（关键区别）
        index index.html;

        # 解决 History 路由刷新 404
        try_files $uri $uri/ /app1/index.html;
    }

    # 应用 B：匹配 /app2 路径
    location /app2 {
        alias /var/www/app2;
        index index.html;
        try_files $uri $uri/ /app2/index.html;
    }
}
\`\`\``,"关键区别：alias vs root",`root /var/www：请求 /app1/static/css.css 会映射到 /var/www/app1/static/css.css（拼接完整路径）。
alias /var/www/app1：请求 /app1/static/css.css 会直接映射到 /var/www/app1/static/css.css（替换 /app1 为实际目录），更适合子路径部署。`],answerHtml:["<p>Nginx 可以通过 include 指令或虚拟主机（vhost）实现前端多环境（如开发、测试、生产）的隔离部署，同时针对同域名不同路径的映射场景，需要处理路径重写和资源引用问题</p>",`<p>多环境隔离的核心是为不同环境（如 dev、test、prod）配置独立的 Nginx 规则，避免互相干扰。</p>
<ol>
<li>基于 include 指令的多环境配置（推荐）</li>
</ol>
<ul>
<li>适合单服务器部署多个环境，通过拆分配置文件实现隔离，便于维护。</li>
<li>也适合单服务部署多域名环境</li>
</ul>`,`<ol start="2">
<li>基于虚拟主机（vhost）的多环境配置</li>
</ol>`,`<div class="language-nginx"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre><!--::markdown-it-async::vl6r6o0a0q998kz21tbsoh::--><code>http {
    # 开发环境（域名区分）
    server {
        listen 80;
        server_name dev.example.com;  # 开发环境域名
        root /path/to/frontend/dev;
        # ... 其他配置（路由、代理等）
    }

    # 测试环境（端口区分）
    server {
        listen 8081;  # 测试环境端口
        server_name localhost;
        root /path/to/frontend/test;
        # ... 其他配置
    }

    # 生产环境（HTTPS）
    server {
        listen 443 ssl;
        server_name example.com;  # 生产环境域名
        root /path/to/frontend/prod;
        # ... SSL 配置和其他生产环境特有的规则
    }
}</code></pre>
</div>`,"<p>同域名不同路径映射的重写问题及解决方案</p>","<p>当多个前端应用部署在同一域名的不同路径下（如 example.com/app1、example.com/app2），需要解决路径映射和资源引用的问题。</p>",`<div class="language-nginx"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre><!--::markdown-it-async::x42iqnzj0xj064pgblbro::--><code>server {
    listen 80;
    server_name example.com;
    root /var/www;  # 父目录

    # 应用 A：匹配 /app1 路径
    location /app1 {
        # 实际文件目录为 /var/www/app1
        alias /var/www/app1;  # 注意：这里用 alias 而非 root（关键区别）
        index index.html;

        # 解决 History 路由刷新 404
        try_files $uri $uri/ /app1/index.html;
    }

    # 应用 B：匹配 /app2 路径
    location /app2 {
        alias /var/www/app2;
        index index.html;
        try_files $uri $uri/ /app2/index.html;
    }
}</code></pre>
</div>`,"<p>关键区别：alias vs root</p>",`<p>root /var/www：请求 /app1/static/css.css 会映射到 /var/www/app1/static/css.css（拼接完整路径）。
alias /var/www/app1：请求 /app1/static/css.css 会直接映射到 /var/www/app1/static/css.css（替换 /app1 为实际目录），更适合子路径部署。</p>`],reference:"/myKMS/knowledge/browser/http#_9-nginx多域名隔离-同域名不同路径映射",source:"/myKMS/knowledge/browser/http"},{id:109,question:"WebSocket",answer:["WebSocket是HTML5提供的一种浏览器与服务器进行全双工通讯的网络技术，属于应用层协议。它基于TCP传输协议，并复用HTTP的握手通道。浏览器和服务器只需要完成一次握手，两者之间就直接可以创建持久性的连接， 并进行双向数据传输。","WebSocket 的出现就解决了半双工通信的弊端。它最大的特点是：**服务器可以向客户端主动推动消息，客户端也可以主动向服务器推送消息。**","WebSocket 特点的如下：",`- 支持双向通信，实时性更强
- 可以发送文本，也可以发送二进制数据‘’
- 建立在TCP协议之上，服务端的实现比较容易
- 数据格式比较轻量，性能开销小，通信高效
- 没有同源限制，客户端可以与任意服务器通信
- 协议标识符是ws（如果加密，则为wss），服务器网址就是 URL
- 与 HTTP 协议有着良好的兼容性。默认端口也是80和443，并且握手阶段采用 HTTP 协议，因此握手时不容易屏蔽，能通过各种 HTTP 代理服务器。
- 连接通过 HTTP Upgrade 握手升级而来。`],answerHtml:["<p>WebSocket是HTML5提供的一种浏览器与服务器进行全双工通讯的网络技术，属于应用层协议。它基于TCP传输协议，并复用HTTP的握手通道。浏览器和服务器只需要完成一次握手，两者之间就直接可以创建持久性的连接， 并进行双向数据传输。</p>","<p>WebSocket 的出现就解决了半双工通信的弊端。它最大的特点是：<strong>服务器可以向客户端主动推动消息，客户端也可以主动向服务器推送消息。</strong></p>","<p>WebSocket 特点的如下：</p>",`<ul>
<li>支持双向通信，实时性更强</li>
<li>可以发送文本，也可以发送二进制数据‘’</li>
<li>建立在TCP协议之上，服务端的实现比较容易</li>
<li>数据格式比较轻量，性能开销小，通信高效</li>
<li>没有同源限制，客户端可以与任意服务器通信</li>
<li>协议标识符是ws（如果加密，则为wss），服务器网址就是 URL</li>
<li>与 HTTP 协议有着良好的兼容性。默认端口也是80和443，并且握手阶段采用 HTTP 协议，因此握手时不容易屏蔽，能通过各种 HTTP 代理服务器。</li>
<li>连接通过 HTTP Upgrade 握手升级而来。</li>
</ul>`],reference:"/myKMS/knowledge/browser/http#_10-websocket",source:"/myKMS/knowledge/browser/http"},{id:110,question:"短轮询、长轮询、SSE 和 WebSocket",answer:[`| 特性   | 短轮询    | 长轮询      | SSE                     | WebSocket        |
| ---- | ------ | -------- | ----------------------- | ---------------- |
| 协议   | HTTP   | HTTP     | HTTP（text/event-stream） | 专用 WS 协议（基于 TCP） |
| 实时性  | ⏱ 延迟高  | ⚡ 中等     | ⚡ 高                     | 🚀 最高            |
| 方向   | 客户端拉取  | 客户端拉取    | 服务端推送                   | 双向               |
| 兼容性  | ✅ 最好   | ✅ 好      | ⚠️ IE 不支持               | ⚠️ 需服务器支持        |
| 连接数量 | 多      | 多（长时间挂起） | 少（单连接）                  | 少（持久连接）          |
| 复杂度  | ⭐ 简单   | ⭐⭐ 中等    | ⭐⭐ 中等                   | ⭐⭐⭐ 高            |
| 常见场景 | 定时刷新数据 | 即时消息、通知  | 日志推送、股票行情               | 聊天、游戏、协同编辑       |`,`| 场景         | 推荐方式      | 理由        |
| ---------- | --------- | --------- |
| 定时刷新、后台任务  | 短轮询       | 简单可靠      |
| 实时通知、消息提醒  | 长轮询 / SSE | 实时性高，易于部署 |
| 实时图表、日志流   | SSE       | 单向推送、易实现  |
| 聊天、多人协作、游戏, 消息 | WebSocket | 双向实时通信能力强 |`,`- 短轮询: 每隔短时间询问服务器
- 长轮询: 浏览器发送请求后，服务器不立即返回，而是等到有新数据再响应，或者超时（例如 30s）。浏览器收到响应后立即发起下一次请求，保持“几乎实时”。
- SSE: 服务器通过 HTTP 长连接 向浏览器“持续推送”数据（单向）。('Content-Type': 'text/event-stream')
- WebSocket 是 全双工通信协议，一旦连接建立，客户端和服务器都可以主动发送消息。`],answerHtml:[`<table tabindex="0">
<thead>
<tr>
<th>特性</th>
<th>短轮询</th>
<th>长轮询</th>
<th>SSE</th>
<th>WebSocket</th>
</tr>
</thead>
<tbody>
<tr>
<td>协议</td>
<td>HTTP</td>
<td>HTTP</td>
<td>HTTP（text/event-stream）</td>
<td>专用 WS 协议（基于 TCP）</td>
</tr>
<tr>
<td>实时性</td>
<td>⏱ 延迟高</td>
<td>⚡ 中等</td>
<td>⚡ 高</td>
<td>🚀 最高</td>
</tr>
<tr>
<td>方向</td>
<td>客户端拉取</td>
<td>客户端拉取</td>
<td>服务端推送</td>
<td>双向</td>
</tr>
<tr>
<td>兼容性</td>
<td>✅ 最好</td>
<td>✅ 好</td>
<td>⚠️ IE 不支持</td>
<td>⚠️ 需服务器支持</td>
</tr>
<tr>
<td>连接数量</td>
<td>多</td>
<td>多（长时间挂起）</td>
<td>少（单连接）</td>
<td>少（持久连接）</td>
</tr>
<tr>
<td>复杂度</td>
<td>⭐ 简单</td>
<td>⭐⭐ 中等</td>
<td>⭐⭐ 中等</td>
<td>⭐⭐⭐ 高</td>
</tr>
<tr>
<td>常见场景</td>
<td>定时刷新数据</td>
<td>即时消息、通知</td>
<td>日志推送、股票行情</td>
<td>聊天、游戏、协同编辑</td>
</tr>
</tbody>
</table>`,`<table tabindex="0">
<thead>
<tr>
<th>场景</th>
<th>推荐方式</th>
<th>理由</th>
</tr>
</thead>
<tbody>
<tr>
<td>定时刷新、后台任务</td>
<td>短轮询</td>
<td>简单可靠</td>
</tr>
<tr>
<td>实时通知、消息提醒</td>
<td>长轮询 / SSE</td>
<td>实时性高，易于部署</td>
</tr>
<tr>
<td>实时图表、日志流</td>
<td>SSE</td>
<td>单向推送、易实现</td>
</tr>
<tr>
<td>聊天、多人协作、游戏, 消息</td>
<td>WebSocket</td>
<td>双向实时通信能力强</td>
</tr>
</tbody>
</table>`,`<ul>
<li>短轮询: 每隔短时间询问服务器</li>
<li>长轮询: 浏览器发送请求后，服务器不立即返回，而是等到有新数据再响应，或者超时（例如 30s）。浏览器收到响应后立即发起下一次请求，保持“几乎实时”。</li>
<li>SSE: 服务器通过 HTTP 长连接 向浏览器“持续推送”数据（单向）。('Content-Type': 'text/event-stream')</li>
<li>WebSocket 是 全双工通信协议，一旦连接建立，客户端和服务器都可以主动发送消息。</li>
</ul>`],reference:"/myKMS/knowledge/browser/http#_11-短轮询、长轮询、sse-和-websocket",source:"/myKMS/knowledge/browser/http"},{id:111,question:"TCP 和 UDP",answer:[`| 维度          | **TCP**                             | **UDP**                                 |
| ----------- | ----------------------------------- | --------------------------------------- |
| 连接          | 面向连接（3 次握手、4 次挥手）                   | 无连接                                     |
| 可靠性         | 可靠传输：确认、重传、顺序保证，流量/拥塞控制             | 尽力而为：无确认、无重传、可能乱序/丢包                    |
| 有序性         | 严格有序                                | 可能乱序                                    |
| 头部开销（不含 IP） | ≥ 20 字节（可选项更多）                      | 固定 8 字节                                 |
| 传输单位        | 流（byte stream），无消息边界                | 报文（datagram），保留应用层消息边界                  |
| 拥塞/流控       | 有（拥塞控制、滑动窗口等）                       | 无（需要应用层自管）                              |
| 速度/时延       | 建连成本高，稳态吞吐好                         | 首包快、时延低，适合短小消息与实时                       |
| 广播/组播       | 不支持                                 | 支持（常见于局域网广播、IP 组播）                      |
| 常见场景        | Web(HTTP/1.1/2)、数据库、文件传输、邮件、SSH、TLS | 实时音视频、游戏状态同步、DNS、DHCP、IoT、QUIC(底层用 UDP) |
| 典型端口示例      | 80/443(HTTP/HTTPS)、22(SSH)          | 53(DNS)、123(NTP)、3478(STUN)             |`,"优先 TCP：需要可靠、有序、简单开发的场景（Web、文件、DB、RPC 等）。","考虑 UDP：对时延敏感或丢少量包可接受、且希望自己掌控重传/拥塞策略的场景（音视频直播、实时互动、网游、物联网心跳/遥测、服务发现）。","跨公网实时 & 传文件：优先 QUIC/HTTP3 或专业传输协议（兼顾低时延与可靠）","MTU/分片：UDP 单包上限理论 65,507 字节（IPv4），但易被分片丢弃；公网建议**≤ 1200~1400 字节**负载/包。","Nagle 与小包：TCP 默认可能启用 Nagle 算法，导致小包合并带来额外时延；可视场景 TCP_NODELAY。","粘包/拆包：TCP 是字节流，应用层必须自行定义消息边界（长度前缀/分隔符/帧协议）。UDP 天然有边界。","乱序/丢包补偿（UDP）：应用层可加序号、时间戳、FEC 或仅重传关键帧。","NAT 穿透：UDP 常配合 STUN/TURN/ICE；TCP 穿透更难。","组播/广播：局域网内服务发现（mDNS/SSDP）多用 UDP；公网路由对组播支持有限。"],answerHtml:[`<table tabindex="0">
<thead>
<tr>
<th>维度</th>
<th><strong>TCP</strong></th>
<th><strong>UDP</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>连接</td>
<td>面向连接（3 次握手、4 次挥手）</td>
<td>无连接</td>
</tr>
<tr>
<td>可靠性</td>
<td>可靠传输：确认、重传、顺序保证，流量/拥塞控制</td>
<td>尽力而为：无确认、无重传、可能乱序/丢包</td>
</tr>
<tr>
<td>有序性</td>
<td>严格有序</td>
<td>可能乱序</td>
</tr>
<tr>
<td>头部开销（不含 IP）</td>
<td>≥ 20 字节（可选项更多）</td>
<td>固定 8 字节</td>
</tr>
<tr>
<td>传输单位</td>
<td>流（byte stream），无消息边界</td>
<td>报文（datagram），保留应用层消息边界</td>
</tr>
<tr>
<td>拥塞/流控</td>
<td>有（拥塞控制、滑动窗口等）</td>
<td>无（需要应用层自管）</td>
</tr>
<tr>
<td>速度/时延</td>
<td>建连成本高，稳态吞吐好</td>
<td>首包快、时延低，适合短小消息与实时</td>
</tr>
<tr>
<td>广播/组播</td>
<td>不支持</td>
<td>支持（常见于局域网广播、IP 组播）</td>
</tr>
<tr>
<td>常见场景</td>
<td>Web(HTTP/1.1/2)、数据库、文件传输、邮件、SSH、TLS</td>
<td>实时音视频、游戏状态同步、DNS、DHCP、IoT、QUIC(底层用 UDP)</td>
</tr>
<tr>
<td>典型端口示例</td>
<td>80/443(HTTP/HTTPS)、22(SSH)</td>
<td>53(DNS)、123(NTP)、3478(STUN)</td>
</tr>
</tbody>
</table>`,"<p>优先 TCP：需要可靠、有序、简单开发的场景（Web、文件、DB、RPC 等）。</p>","<p>考虑 UDP：对时延敏感或丢少量包可接受、且希望自己掌控重传/拥塞策略的场景（音视频直播、实时互动、网游、物联网心跳/遥测、服务发现）。</p>","<p>跨公网实时 &amp; 传文件：优先 QUIC/HTTP3 或专业传输协议（兼顾低时延与可靠）</p>","<p>MTU/分片：UDP 单包上限理论 65,507 字节（IPv4），但易被分片丢弃；公网建议<strong>≤ 1200~1400 字节</strong>负载/包。</p>","<p>Nagle 与小包：TCP 默认可能启用 Nagle 算法，导致小包合并带来额外时延；可视场景 TCP_NODELAY。</p>","<p>粘包/拆包：TCP 是字节流，应用层必须自行定义消息边界（长度前缀/分隔符/帧协议）。UDP 天然有边界。</p>","<p>乱序/丢包补偿（UDP）：应用层可加序号、时间戳、FEC 或仅重传关键帧。</p>","<p>NAT 穿透：UDP 常配合 STUN/TURN/ICE；TCP 穿透更难。</p>","<p>组播/广播：局域网内服务发现（mDNS/SSDP）多用 UDP；公网路由对组播支持有限。</p>"],reference:"/myKMS/knowledge/browser/http#_11-tcp-和-udp",source:"/myKMS/knowledge/browser/http"},{id:112,question:"OSI 七层模型 TCP/IP 四层模型",answer:["OSI 七层模型总览:",`| 层号 | 层名（中文/英文）        | 典型协议/技术                                   | 常见设备          | 数据单元(PDU)      | 主要职责              |
| -- | ---------------- | ----------------------------------------- | ------------- | -------------- | ----------------- |
| 7  | 应用层 Application  | **HTTP/HTTPS、DNS、SMTP、FTP、SSH、DHCP、SNMP** | 应用服务器、DNS 服务器 | 数据(Data)       | 面向用户与应用，提供网络服务接口  |
| 6  | 表示层 Presentation | TLS/SSL、MIME、JPEG/MP3/JSON 编解码            | —             | 数据(Data)       | 数据表示、加解密、压缩       |
| 5  | 会话层 Session      | RPC、NetBIOS、gRPC 会话                       | —             | 数据(Data)       | 会话建立/维护/终止，状态管理   |
| 4  | 传输层 Transport    | **TCP、UDP**, QUIC（更接近4/7之间，实践常视为传输）       | 四层负载均衡器       | 段(Segment)/报文段 | 端到端可靠/不可靠传输，端口寻址  |
| 3  | 网络层 Network      | **IP、ICMP、ARP***、IGMP、OSPF、BGP            | **路由器**、三层交换机 | 包(Packet)      | 逻辑寻址与路由转发         |
| 2  | 数据链路层 Data Link  | **Ethernet(IEEE 802.3)、PPP、802.11 Wi-Fi** | **交换机**、网卡    | 帧(Frame)       | 物理寻址(MAC)、成帧、差错检测 |
| 1  | 物理层 Physical     | 双绞线/光纤、USB、RJ-45、光模块                      | **中继器、集线器**   | 比特(Bit)        | 比特传输、电气/光学规范      |`,"TCP/IP 四层模型:",`| 层号 | 层名（中文/英文）                 | 典型协议/技术                                        | 常见设备           | 数据单元(PDU) | 主要职责       |
| -- | ------------------------- | ---------------------------------------------- | -------------- | --------- | ---------- |
| 4  | 应用层 Application           | **HTTP/HTTPS、DNS、SMTP、FTP、SSH、DHCP、SNMP、gRPC** | 应用/反向代理、七层负载均衡 | 数据(Data)  | 应用服务与语义    |
| 3  | 传输层 Transport             | **TCP、UDP、QUIC**                               | 四层负载均衡         | 段/报文段     | 端到端传输与端口寻址 |
| 2  | 网际层 Internet              | **IP、ICMP、IGMP**                               | **路由器**        | 包(Packet) | 逻辑寻址与路由    |
| 1  | 网络接口层 Link/Network Access | **Ethernet、PPP、Wi-Fi、ARP**                     | **交换机、网卡**     | 帧/比特      | 物理传输与链路接入  |`,"OSI ↔ TCP/IP 对照（HTTP 所在层）:",`| OSI     | TCP/IP  | 示例协议                    | 说明              |
| ------- | ------- | ----------------------- | --------------- |
| 7 应用层   | 4 应用层   | **HTTP/HTTPS、DNS、SMTP** | HTTP 属于应用层      |
| 6 表示层   | 4 应用层   | TLS/SSL、编码格式            | 在 TCP/IP 中并入应用层 |
| 5 会话层   | 4 应用层   | 会话/状态                   | 在 TCP/IP 中并入应用层 |
| 4 传输层   | 3 传输层   | **TCP、UDP、QUIC**        | 端到端传输           |
| 3 网络层   | 2 网际层   | **IP、ICMP**             | 路由与寻址           |
| 2 数据链路层 | 1 网络接口层 | Ethernet、Wi-Fi、ARP      | 局域网/链路接入        |
| 1 物理层   | 1 网络接口层 | 物理介质                    | 比特流传输           |`],answerHtml:["<p>OSI 七层模型总览:</p>",`<table tabindex="0">
<thead>
<tr>
<th>层号</th>
<th>层名（中文/英文）</th>
<th>典型协议/技术</th>
<th>常见设备</th>
<th>数据单元(PDU)</th>
<th>主要职责</th>
</tr>
</thead>
<tbody>
<tr>
<td>7</td>
<td>应用层 Application</td>
<td><strong>HTTP/HTTPS、DNS、SMTP、FTP、SSH、DHCP、SNMP</strong></td>
<td>应用服务器、DNS 服务器</td>
<td>数据(Data)</td>
<td>面向用户与应用，提供网络服务接口</td>
</tr>
<tr>
<td>6</td>
<td>表示层 Presentation</td>
<td>TLS/SSL、MIME、JPEG/MP3/JSON 编解码</td>
<td>—</td>
<td>数据(Data)</td>
<td>数据表示、加解密、压缩</td>
</tr>
<tr>
<td>5</td>
<td>会话层 Session</td>
<td>RPC、NetBIOS、gRPC 会话</td>
<td>—</td>
<td>数据(Data)</td>
<td>会话建立/维护/终止，状态管理</td>
</tr>
<tr>
<td>4</td>
<td>传输层 Transport</td>
<td><strong>TCP、UDP</strong>, QUIC（更接近4/7之间，实践常视为传输）</td>
<td>四层负载均衡器</td>
<td>段(Segment)/报文段</td>
<td>端到端可靠/不可靠传输，端口寻址</td>
</tr>
<tr>
<td>3</td>
<td>网络层 Network</td>
<td><strong>IP、ICMP、ARP</strong>*、IGMP、OSPF、BGP</td>
<td><strong>路由器</strong>、三层交换机</td>
<td>包(Packet)</td>
<td>逻辑寻址与路由转发</td>
</tr>
<tr>
<td>2</td>
<td>数据链路层 Data Link</td>
<td><strong>Ethernet(IEEE 802.3)、PPP、802.11 Wi-Fi</strong></td>
<td><strong>交换机</strong>、网卡</td>
<td>帧(Frame)</td>
<td>物理寻址(MAC)、成帧、差错检测</td>
</tr>
<tr>
<td>1</td>
<td>物理层 Physical</td>
<td>双绞线/光纤、USB、RJ-45、光模块</td>
<td><strong>中继器、集线器</strong></td>
<td>比特(Bit)</td>
<td>比特传输、电气/光学规范</td>
</tr>
</tbody>
</table>`,"<p>TCP/IP 四层模型:</p>",`<table tabindex="0">
<thead>
<tr>
<th>层号</th>
<th>层名（中文/英文）</th>
<th>典型协议/技术</th>
<th>常见设备</th>
<th>数据单元(PDU)</th>
<th>主要职责</th>
</tr>
</thead>
<tbody>
<tr>
<td>4</td>
<td>应用层 Application</td>
<td><strong>HTTP/HTTPS、DNS、SMTP、FTP、SSH、DHCP、SNMP、gRPC</strong></td>
<td>应用/反向代理、七层负载均衡</td>
<td>数据(Data)</td>
<td>应用服务与语义</td>
</tr>
<tr>
<td>3</td>
<td>传输层 Transport</td>
<td><strong>TCP、UDP、QUIC</strong></td>
<td>四层负载均衡</td>
<td>段/报文段</td>
<td>端到端传输与端口寻址</td>
</tr>
<tr>
<td>2</td>
<td>网际层 Internet</td>
<td><strong>IP、ICMP、IGMP</strong></td>
<td><strong>路由器</strong></td>
<td>包(Packet)</td>
<td>逻辑寻址与路由</td>
</tr>
<tr>
<td>1</td>
<td>网络接口层 Link/Network Access</td>
<td><strong>Ethernet、PPP、Wi-Fi、ARP</strong></td>
<td><strong>交换机、网卡</strong></td>
<td>帧/比特</td>
<td>物理传输与链路接入</td>
</tr>
</tbody>
</table>`,"<p>OSI ↔ TCP/IP 对照（HTTP 所在层）:</p>",`<table tabindex="0">
<thead>
<tr>
<th>OSI</th>
<th>TCP/IP</th>
<th>示例协议</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>7 应用层</td>
<td>4 应用层</td>
<td><strong>HTTP/HTTPS、DNS、SMTP</strong></td>
<td>HTTP 属于应用层</td>
</tr>
<tr>
<td>6 表示层</td>
<td>4 应用层</td>
<td>TLS/SSL、编码格式</td>
<td>在 TCP/IP 中并入应用层</td>
</tr>
<tr>
<td>5 会话层</td>
<td>4 应用层</td>
<td>会话/状态</td>
<td>在 TCP/IP 中并入应用层</td>
</tr>
<tr>
<td>4 传输层</td>
<td>3 传输层</td>
<td><strong>TCP、UDP、QUIC</strong></td>
<td>端到端传输</td>
</tr>
<tr>
<td>3 网络层</td>
<td>2 网际层</td>
<td><strong>IP、ICMP</strong></td>
<td>路由与寻址</td>
</tr>
<tr>
<td>2 数据链路层</td>
<td>1 网络接口层</td>
<td>Ethernet、Wi-Fi、ARP</td>
<td>局域网/链路接入</td>
</tr>
<tr>
<td>1 物理层</td>
<td>1 网络接口层</td>
<td>物理介质</td>
<td>比特流传输</td>
</tr>
</tbody>
</table>`],reference:"/myKMS/knowledge/browser/http#_12-osi-七层模型-tcp-ip-四层模型",source:"/myKMS/knowledge/browser/http"},{id:113,question:"常见的性能指标",answer:["Performance API 是浏览器提供的内置接口，用于测量网页的加载时间、资源性能和用户体验。","常见性能指标",`- FP (First Paint)首次绘制 ，指用户第一次看到页面内容时的时间点（通常是背景颜色）。
- FCP (First Contentful Paint)首次内容绘制 ，页面中首个内容（如文字、图片）被绘制的时间点。 优化思路 ：减少 CSS 阻塞、优化首屏加载内容。
- LCP (Largest Contentful Paint)最大内容绘制 ，页面中最大内容元素（如主标题、图片）绘制完成的时间点。 优化思路 ：使用延迟加载策略、优化图像加载。
- CLS (Cumulative Layout Shift)累积布局偏移 ，页面加载过程中视觉内容意外变化的总量。 优化思路 ：设置明确的宽高，避免懒加载导致布局移动。
- FID (First Input Delay)首次输入延迟 ，用户第一次交互（如点击按钮）与浏览器响应之间的时间间隔。 优化思路 ：减少主线程阻塞。
- TTI (Time to Interactive)可交互时间 ，页面完成加载并能够快速响应用户交互的时间`],answerHtml:["<p>Performance API 是浏览器提供的内置接口，用于测量网页的加载时间、资源性能和用户体验。</p>","<p>常见性能指标</p>",`<ul>
<li>FP (First Paint)首次绘制 ，指用户第一次看到页面内容时的时间点（通常是背景颜色）。</li>
<li>FCP (First Contentful Paint)首次内容绘制 ，页面中首个内容（如文字、图片）被绘制的时间点。 优化思路 ：减少 CSS 阻塞、优化首屏加载内容。</li>
<li>LCP (Largest Contentful Paint)最大内容绘制 ，页面中最大内容元素（如主标题、图片）绘制完成的时间点。 优化思路 ：使用延迟加载策略、优化图像加载。</li>
<li>CLS (Cumulative Layout Shift)累积布局偏移 ，页面加载过程中视觉内容意外变化的总量。 优化思路 ：设置明确的宽高，避免懒加载导致布局移动。</li>
<li>FID (First Input Delay)首次输入延迟 ，用户第一次交互（如点击按钮）与浏览器响应之间的时间间隔。 优化思路 ：减少主线程阻塞。</li>
<li>TTI (Time to Interactive)可交互时间 ，页面完成加载并能够快速响应用户交互的时间</li>
</ul>`],reference:"/myKMS/knowledge/browser/index#_1-常见的性能指标",source:"/myKMS/knowledge/browser/index"},{id:114,question:"sourcemap 有何作用",answer:["Source Map 是一种将压缩、混淆后的代码映射回源代码的文件，用于调试和定位错误。它的主要作用如下：",`- 调试优化 ：在开发者工具中看到源代码而非压缩后的代码。
- 错误定位 ：在生产环境中准确定位代码错误。
- 性能分析 ：配合性能工具对源代码进行优化分析。`],answerHtml:["<p>Source Map 是一种将压缩、混淆后的代码映射回源代码的文件，用于调试和定位错误。它的主要作用如下：</p>",`<ul>
<li>调试优化 ：在开发者工具中看到源代码而非压缩后的代码。</li>
<li>错误定位 ：在生产环境中准确定位代码错误。</li>
<li>性能分析 ：配合性能工具对源代码进行优化分析。</li>
</ul>`],reference:"/myKMS/knowledge/browser/index#_2-sourcemap-有何作用",source:"/myKMS/knowledge/browser/index"},{id:115,question:"什么是 HTTPS 中间人攻击，如何预防",answer:["中间人攻击（MITM, Man-In-The-Middle） 是指攻击者拦截客户端与服务器之间的通信，获取敏感信息或篡改数据。","攻击原理","攻击者通过伪造证书或劫持网络流量，冒充服务器或客户端，使通信双方无法察觉中间人的存在。","常见攻击手段",`| 攻击方式                  | 描述                          |
| --------------------- | --------------------------- |
| **伪造 CA 证书**          | 诱导用户安装恶意根证书，使浏览器信任攻击者签发的假证书 |
| **DNS 劫持**            | 篡改 DNS 解析，将域名指向攻击者的服务器      |
| **ARP 欺骗 / Wi-Fi 劫持** | 局域网或公共 Wi-Fi 中间人篡改流量        |
| **SSL Strip（降级攻击）**   | 强制将 HTTPS 降级为 HTTP，窃取明文数据   |`,`预防措施
- 1. 启用 HTTPS 和强证书验证
   - 配置 TLS 并购买可信的 SSL 证书。
   - 使用 HSTS（HTTP Strict Transport Security）强制 HTTPS 访问。
- 2. 证书固定（Certificate Pinning） 确保客户端只接受特定 CA 签发的证书。
- 3. 开启 CORS 配置 配置严格的跨域策略，减少不必要的网络暴露。
- 4. 安全头部配置
  - 设置 Content-Security-Policy 防止资源篡改。
  - 设置 Strict-Transport-Security 强制使用 HTTPS。
- 5. 客户端验证 通过双向 TLS（Mutual TLS）验证客户端身份。`],answerHtml:["<p>中间人攻击（MITM, Man-In-The-Middle） 是指攻击者拦截客户端与服务器之间的通信，获取敏感信息或篡改数据。</p>","<p>攻击原理</p>","<p>攻击者通过伪造证书或劫持网络流量，冒充服务器或客户端，使通信双方无法察觉中间人的存在。</p>","<p>常见攻击手段</p>",`<table tabindex="0">
<thead>
<tr>
<th>攻击方式</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>伪造 CA 证书</strong></td>
<td>诱导用户安装恶意根证书，使浏览器信任攻击者签发的假证书</td>
</tr>
<tr>
<td><strong>DNS 劫持</strong></td>
<td>篡改 DNS 解析，将域名指向攻击者的服务器</td>
</tr>
<tr>
<td><strong>ARP 欺骗 / Wi-Fi 劫持</strong></td>
<td>局域网或公共 Wi-Fi 中间人篡改流量</td>
</tr>
<tr>
<td><strong>SSL Strip（降级攻击）</strong></td>
<td>强制将 HTTPS 降级为 HTTP，窃取明文数据</td>
</tr>
</tbody>
</table>`,`<p>预防措施</p>
<ul>
<li>
<ol>
<li>启用 HTTPS 和强证书验证</li>
</ol>
<ul>
<li>配置 TLS 并购买可信的 SSL 证书。</li>
<li>使用 HSTS（HTTP Strict Transport Security）强制 HTTPS 访问。</li>
</ul>
</li>
<li>
<ol start="2">
<li>证书固定（Certificate Pinning） 确保客户端只接受特定 CA 签发的证书。</li>
</ol>
</li>
<li>
<ol start="3">
<li>开启 CORS 配置 配置严格的跨域策略，减少不必要的网络暴露。</li>
</ol>
</li>
<li>
<ol start="4">
<li>安全头部配置</li>
</ol>
<ul>
<li>设置 Content-Security-Policy 防止资源篡改。</li>
<li>设置 Strict-Transport-Security 强制使用 HTTPS。</li>
</ul>
</li>
<li>
<ol start="5">
<li>客户端验证 通过双向 TLS（Mutual TLS）验证客户端身份。</li>
</ol>
</li>
</ul>`],reference:"/myKMS/knowledge/browser/index#_3-什么是-https-中间人攻击-如何预防",source:"/myKMS/knowledge/browser/index"},{id:116,question:"CSP 是什么",answer:["CSP 内容安全策略(白名单制度) 告诉浏览器：哪些资源可以加载和执行，哪些不允许,用来 防御 XSS、点击劫持、数据注入 等攻击. HTTP 响应头: Content-Security-Policy","CSP 就像是网站的“白名单防火墙” 明确允许的脚本、样式、图片、字体等来源，其他一律拒绝。","CSP 常用指令\n| 指令                            | 控制的内容               | 示例                                      |\n| ----------------------------- | ------------------- | --------------------------------------- |\n| **default-src**               | 默认资源加载策略            | `'self'`、`https:`                       |\n| **script-src**                | JavaScript 来源       | `'self'`、`https://cdn.example.com`      |\n| **style-src**                 | CSS 样式来源            | `'self'` `'unsafe-inline'`              |\n| **img-src**                   | 图片来源                | `data:`、`https://images.example.com`    |\n| **font-src**                  | 字体来源                | `'self'`、`https://fonts.googleapis.com` |\n| **connect-src**               | AJAX / WebSocket 来源 | `'self'`、`https://api.example.com`      |\n| **frame-src**                 | `<iframe>` 来源       | `'self'`、`https://youtube.com`          |\n| **object-src**                | Flash / 插件来源        | `'none'`（推荐禁用）                          |\n| **report-uri**                | 报告 CSP 违规           | `/csp-violation-report-endpoint/`       |\n| **upgrade-insecure-requests** | 自动将 HTTP 升级为 HTTPS  | 无值                                      |"],answerHtml:["<p>CSP 内容安全策略(白名单制度) 告诉浏览器：哪些资源可以加载和执行，哪些不允许,用来 防御 XSS、点击劫持、数据注入 等攻击. HTTP 响应头: Content-Security-Policy</p>","<p>CSP 就像是网站的“白名单防火墙” 明确允许的脚本、样式、图片、字体等来源，其他一律拒绝。</p>",`<p>CSP 常用指令</p>
<table tabindex="0">
<thead>
<tr>
<th>指令</th>
<th>控制的内容</th>
<th>示例</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>default-src</strong></td>
<td>默认资源加载策略</td>
<td><code>'self'</code>、<code>https:</code></td>
</tr>
<tr>
<td><strong>script-src</strong></td>
<td>JavaScript 来源</td>
<td><code>'self'</code>、<code>https://cdn.example.com</code></td>
</tr>
<tr>
<td><strong>style-src</strong></td>
<td>CSS 样式来源</td>
<td><code>'self'</code> <code>'unsafe-inline'</code></td>
</tr>
<tr>
<td><strong>img-src</strong></td>
<td>图片来源</td>
<td><code>data:</code>、<code>https://images.example.com</code></td>
</tr>
<tr>
<td><strong>font-src</strong></td>
<td>字体来源</td>
<td><code>'self'</code>、<code>https://fonts.googleapis.com</code></td>
</tr>
<tr>
<td><strong>connect-src</strong></td>
<td>AJAX / WebSocket 来源</td>
<td><code>'self'</code>、<code>https://api.example.com</code></td>
</tr>
<tr>
<td><strong>frame-src</strong></td>
<td><code>&lt;iframe&gt;</code> 来源</td>
<td><code>'self'</code>、<code>https://youtube.com</code></td>
</tr>
<tr>
<td><strong>object-src</strong></td>
<td>Flash / 插件来源</td>
<td><code>'none'</code>（推荐禁用）</td>
</tr>
<tr>
<td><strong>report-uri</strong></td>
<td>报告 CSP 违规</td>
<td><code>/csp-violation-report-endpoint/</code></td>
</tr>
<tr>
<td><strong>upgrade-insecure-requests</strong></td>
<td>自动将 HTTP 升级为 HTTPS</td>
<td>无值</td>
</tr>
</tbody>
</table>`],reference:"/myKMS/knowledge/browser/index#_4-csp-是什么",source:"/myKMS/knowledge/browser/index"},{id:117,question:"webworker 可以调用 sessionStorage localStorage吗??",answer:["**不可以**","Web Worker 的运行环境","- **Web Worker 是在 独立线程（Worker thread）中运行的。**","- **没有 DOM、没有 window 对象。**","- 只有少数全局对象可用","```self, postMessage, importScripts, fetch, XMLHttpRequest, IndexedDB, caches, crypto, setTimeout/setInterval, ...```\n\nwindow.localStorage / window.sessionStorage 是 DOM API，属于主线程对象，因此 Worker 里不可访问。"],answerHtml:["<p><strong>不可以</strong></p>","<p>Web Worker 的运行环境</p>",`<ul>
<li><strong>Web Worker 是在 独立线程（Worker thread）中运行的。</strong></li>
</ul>`,`<ul>
<li><strong>没有 DOM、没有 window 对象。</strong></li>
</ul>`,`<ul>
<li>只有少数全局对象可用</li>
</ul>`,`<p><code>self, postMessage, importScripts, fetch, XMLHttpRequest, IndexedDB, caches, crypto, setTimeout/setInterval, ...</code></p>
<p>window.localStorage / window.sessionStorage 是 DOM API，属于主线程对象，因此 Worker 里不可访问。</p>`],reference:"/myKMS/knowledge/browser/index#_5-webworker-可以调用-sessionstorage-localstorage吗",source:"/myKMS/knowledge/browser/index"},{id:118,question:"IndexedDB 可以存什么类型的数据",answer:["IndexedDB 是一个“小型对象数据库”,它不像传统数据库那样只能存文本或 JSON，它可以直接存放 复杂 JS 对象、二进制资源、文件流。",`| 类别     | 支持 | 示例                                  |
| ------ | -- | ----------------------------------- |
| 基础类型   | ✅  | Number, String, Boolean, null       |
| 对象     | ✅  | Object, Array                       |
| 日期     | ✅  | Date                                |
| 正则     | ✅  | /abc/                               |
| 二进制    | ✅  | Blob, File, ArrayBuffer, TypedArray |
| 集合     | ✅  | Map, Set                            |
| 函数     | ❌  | function(){}                        |
| DOM 节点 | ❌  | document.body                       |
| Symbol | ❌  | Symbol("x")                         |`,"cookies, sessionStorage, localStorage, 只能存字符串"],answerHtml:["<p>IndexedDB 是一个“小型对象数据库”,它不像传统数据库那样只能存文本或 JSON，它可以直接存放 复杂 JS 对象、二进制资源、文件流。</p>",`<table tabindex="0">
<thead>
<tr>
<th>类别</th>
<th>支持</th>
<th>示例</th>
</tr>
</thead>
<tbody>
<tr>
<td>基础类型</td>
<td>✅</td>
<td>Number, String, Boolean, null</td>
</tr>
<tr>
<td>对象</td>
<td>✅</td>
<td>Object, Array</td>
</tr>
<tr>
<td>日期</td>
<td>✅</td>
<td>Date</td>
</tr>
<tr>
<td>正则</td>
<td>✅</td>
<td>/abc/</td>
</tr>
<tr>
<td>二进制</td>
<td>✅</td>
<td>Blob, File, ArrayBuffer, TypedArray</td>
</tr>
<tr>
<td>集合</td>
<td>✅</td>
<td>Map, Set</td>
</tr>
<tr>
<td>函数</td>
<td>❌</td>
<td>function(){}</td>
</tr>
<tr>
<td>DOM 节点</td>
<td>❌</td>
<td>document.body</td>
</tr>
<tr>
<td>Symbol</td>
<td>❌</td>
<td>Symbol(&quot;x&quot;)</td>
</tr>
</tbody>
</table>`,"<p>cookies, sessionStorage, localStorage, 只能存字符串</p>"],reference:"/myKMS/knowledge/browser/index#_6-indexeddb-可以存什么类型的数据",source:"/myKMS/knowledge/browser/index"},{id:119,question:"常见的图片格式 和特点",answer:[`| 类型                      | 定义                                   |
| ----------------------- | ------------------------------------ |
| **位图（Bitmap / Raster）** | 图像由 **像素（Pixel）** 构成，每个像素有颜色信息。      |
| **矢量（Vector）**          | 图像由 **数学公式描述的几何形状** 构成，如线条、曲线、圆、多边形。 |`,`| 格式              | 类型 | 压缩       | 透明度    | 动图    | 主要用途         | 特点             |
| --------------- | -- | -------- | ------ | ----- | ------------ | -------------- |
| **JPEG / JPG**  | 位图 | 有损       | ❌ 不支持  | ❌     | 照片类图片        | 体积小、色彩丰富、模糊边缘  |
| **PNG**         | 位图 | 无损       | ✅ 支持   | ❌     | 图标、Logo、UI元素 | 支持透明、清晰但体积大    |
| **GIF**         | 位图 | 无损（256色） | ✅ 简单透明 | ✅     | 简单动图、表情包     | 仅256色、支持动画     |
| **WebP**        | 位图 | 有损 / 无损  | ✅ 支持   | ✅     | Web图片优化      | 压缩高效、现代浏览器支持   |
| **SVG**         | 矢量 | 无损       | ✅ 支持   | ✅（有限） | 图标、Logo、图形   | 矢量可缩放、不失真、代码形式 |
| **AVIF**        | 位图 | 有损 / 无损  | ✅ 支持   | ✅     | 高清图像、Web优化   | 压缩更优于 WebP     |
| **HEIF / HEIC** | 位图 | 有损       | ✅ 支持   | ✅     | 手机拍摄图像（iOS）  | 高效压缩、兼容性差      |
| **BMP**         | 位图 | 无压缩      | ❌ 不支持  | ❌     | 老旧格式、仅限特定系统  | 文件大、几乎不用       |
| **TIFF**        | 位图 | 无损       | ✅ 支持   | ✅（多页） | 专业印刷、扫描、医学图像 | 高质量、大体积        |`,`医学常用图片格式
| 格式                      | 类型       | 特点                                                    | 场景                            |
| ----------------------- | -------- | ----------------------------------------------------- | ----------------------------- |
| **DICOM (.dcm)**        | 专业医学格式   | - 图像 + 元数据（患者信息、扫描参数）<br>- 支持多维图像（CT/MRI序列）<br>- 支持压缩 | CT、MRI、超声、放射影像                |
| **TIFF (.tif / .tiff)** | 位图       | 高精度无损，支持多页                                            | 病理切片扫描、显微镜图像                  |
| **PNG**                 | 位图       | 无损、支持灰度和透明                                            | 简单病理图像、病灶标注                   |
| **JPEG / JPEG2000**     | 位图       | 有损/无损压缩，高压缩比                                          | PACS 存储病理切片（JPEG2000 优于 JPEG） |
| **SVS / NDPI**          | 专用病理切片格式 | 多分辨率金字塔图像                                             | 数字病理全切片扫描                     |`],answerHtml:[`<table tabindex="0">
<thead>
<tr>
<th>类型</th>
<th>定义</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>位图（Bitmap / Raster）</strong></td>
<td>图像由 <strong>像素（Pixel）</strong> 构成，每个像素有颜色信息。</td>
</tr>
<tr>
<td><strong>矢量（Vector）</strong></td>
<td>图像由 <strong>数学公式描述的几何形状</strong> 构成，如线条、曲线、圆、多边形。</td>
</tr>
</tbody>
</table>`,`<table tabindex="0">
<thead>
<tr>
<th>格式</th>
<th>类型</th>
<th>压缩</th>
<th>透明度</th>
<th>动图</th>
<th>主要用途</th>
<th>特点</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>JPEG / JPG</strong></td>
<td>位图</td>
<td>有损</td>
<td>❌ 不支持</td>
<td>❌</td>
<td>照片类图片</td>
<td>体积小、色彩丰富、模糊边缘</td>
</tr>
<tr>
<td><strong>PNG</strong></td>
<td>位图</td>
<td>无损</td>
<td>✅ 支持</td>
<td>❌</td>
<td>图标、Logo、UI元素</td>
<td>支持透明、清晰但体积大</td>
</tr>
<tr>
<td><strong>GIF</strong></td>
<td>位图</td>
<td>无损（256色）</td>
<td>✅ 简单透明</td>
<td>✅</td>
<td>简单动图、表情包</td>
<td>仅256色、支持动画</td>
</tr>
<tr>
<td><strong>WebP</strong></td>
<td>位图</td>
<td>有损 / 无损</td>
<td>✅ 支持</td>
<td>✅</td>
<td>Web图片优化</td>
<td>压缩高效、现代浏览器支持</td>
</tr>
<tr>
<td><strong>SVG</strong></td>
<td>矢量</td>
<td>无损</td>
<td>✅ 支持</td>
<td>✅（有限）</td>
<td>图标、Logo、图形</td>
<td>矢量可缩放、不失真、代码形式</td>
</tr>
<tr>
<td><strong>AVIF</strong></td>
<td>位图</td>
<td>有损 / 无损</td>
<td>✅ 支持</td>
<td>✅</td>
<td>高清图像、Web优化</td>
<td>压缩更优于 WebP</td>
</tr>
<tr>
<td><strong>HEIF / HEIC</strong></td>
<td>位图</td>
<td>有损</td>
<td>✅ 支持</td>
<td>✅</td>
<td>手机拍摄图像（iOS）</td>
<td>高效压缩、兼容性差</td>
</tr>
<tr>
<td><strong>BMP</strong></td>
<td>位图</td>
<td>无压缩</td>
<td>❌ 不支持</td>
<td>❌</td>
<td>老旧格式、仅限特定系统</td>
<td>文件大、几乎不用</td>
</tr>
<tr>
<td><strong>TIFF</strong></td>
<td>位图</td>
<td>无损</td>
<td>✅ 支持</td>
<td>✅（多页）</td>
<td>专业印刷、扫描、医学图像</td>
<td>高质量、大体积</td>
</tr>
</tbody>
</table>`,`<p>医学常用图片格式</p>
<table tabindex="0">
<thead>
<tr>
<th>格式</th>
<th>类型</th>
<th>特点</th>
<th>场景</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>DICOM (.dcm)</strong></td>
<td>专业医学格式</td>
<td>- 图像 + 元数据（患者信息、扫描参数）<br>- 支持多维图像（CT/MRI序列）<br>- 支持压缩</td>
<td>CT、MRI、超声、放射影像</td>
</tr>
<tr>
<td><strong>TIFF (.tif / .tiff)</strong></td>
<td>位图</td>
<td>高精度无损，支持多页</td>
<td>病理切片扫描、显微镜图像</td>
</tr>
<tr>
<td><strong>PNG</strong></td>
<td>位图</td>
<td>无损、支持灰度和透明</td>
<td>简单病理图像、病灶标注</td>
</tr>
<tr>
<td><strong>JPEG / JPEG2000</strong></td>
<td>位图</td>
<td>有损/无损压缩，高压缩比</td>
<td>PACS 存储病理切片（JPEG2000 优于 JPEG）</td>
</tr>
<tr>
<td><strong>SVS / NDPI</strong></td>
<td>专用病理切片格式</td>
<td>多分辨率金字塔图像</td>
<td>数字病理全切片扫描</td>
</tr>
</tbody>
</table>`],reference:"/myKMS/knowledge/browser/index#_7-常见的图片格式-和特点",source:"/myKMS/knowledge/browser/index"},{id:120,question:"文件上传漏洞",answer:[`文件上传漏洞会导致: 
- 远程代码执行（RCE）：上传可执行脚本（.php/.jsp/.asp/.jspx/.aspx）并触发执行。
- 任意文件覆盖 / 覆盖重要文件：上传的文件覆盖现有文件导致服务异常或后门。
- 敏感数据泄露：上传包含敏感信息或把上传目录暴露到外网。
- 恶意文件分发 / 恶意二进制：传播木马、挖矿程序、恶意图片等给其他用户。
- 存储耗尽 / DoS：大量大文件上传耗尽磁盘或带宽。
- 安全绕过（MIME/扩展绕过）`,`常见攻击向量（列举）:
- 上传 .php 并通过 /uploads/shell.php 访问 -> RCE。
- 上传 .jpg 文件但实际是 PHP（混淆扩展或双扩展 like shell.jpg.php）并被服务器当作脚本执行。
- 在 filename 中使用 ../ 路径穿越覆盖关键文件（若服务端未规范化路径）。
- 通过大文件或并发上传耗尽磁盘 / 触发资源耗尽。
- 利用上传的 SVG（包含 JS）进行 XSS。
- 上传带有恶意 EXIF 的图片或特殊格式触发后端解析库漏洞。`,`防御原则:
- 最小信任：客户端输入（文件名、MIME、大小、扩展）均不可信。
- 白名单策略：只允许明确需要的一小部分扩展与 MIME（优于黑名单）。
- 多层检测：扩展名 + MIME 类型 + 文件头/魔数（magic bytes） + 内容扫描（AV/沙箱） + 元数据检查。
- 隔离存储：上传存储在不可执行、非 web 根目录的位置，或使用对象存储（S3）并通过后端签名/代理访问。
- 最小权限与不可执行：上传目录不可执行（noexec），文件系统权限最小化。
- 签名/校验与短期 URL：采用 signed URLs / presigned upload + 后端审核或触发异步扫描。
- 流式处理 + 限制：限制最大文件大小、文件类型、并发上传数、速率。
- 后续处理：异步病毒扫描、图像重编码（重新生成缩略图），移除可执行元数据。
- 日志与告警：所有上传活动审计、异常触发报警。`],answerHtml:[`<p>文件上传漏洞会导致:</p>
<ul>
<li>远程代码执行（RCE）：上传可执行脚本（.php/.jsp/.asp/.jspx/.aspx）并触发执行。</li>
<li>任意文件覆盖 / 覆盖重要文件：上传的文件覆盖现有文件导致服务异常或后门。</li>
<li>敏感数据泄露：上传包含敏感信息或把上传目录暴露到外网。</li>
<li>恶意文件分发 / 恶意二进制：传播木马、挖矿程序、恶意图片等给其他用户。</li>
<li>存储耗尽 / DoS：大量大文件上传耗尽磁盘或带宽。</li>
<li>安全绕过（MIME/扩展绕过）</li>
</ul>`,`<p>常见攻击向量（列举）:</p>
<ul>
<li>上传 .php 并通过 /uploads/shell.php 访问 -&gt; RCE。</li>
<li>上传 .jpg 文件但实际是 PHP（混淆扩展或双扩展 like shell.jpg.php）并被服务器当作脚本执行。</li>
<li>在 filename 中使用 ../ 路径穿越覆盖关键文件（若服务端未规范化路径）。</li>
<li>通过大文件或并发上传耗尽磁盘 / 触发资源耗尽。</li>
<li>利用上传的 SVG（包含 JS）进行 XSS。</li>
<li>上传带有恶意 EXIF 的图片或特殊格式触发后端解析库漏洞。</li>
</ul>`,`<p>防御原则:</p>
<ul>
<li>最小信任：客户端输入（文件名、MIME、大小、扩展）均不可信。</li>
<li>白名单策略：只允许明确需要的一小部分扩展与 MIME（优于黑名单）。</li>
<li>多层检测：扩展名 + MIME 类型 + 文件头/魔数（magic bytes） + 内容扫描（AV/沙箱） + 元数据检查。</li>
<li>隔离存储：上传存储在不可执行、非 web 根目录的位置，或使用对象存储（S3）并通过后端签名/代理访问。</li>
<li>最小权限与不可执行：上传目录不可执行（noexec），文件系统权限最小化。</li>
<li>签名/校验与短期 URL：采用 signed URLs / presigned upload + 后端审核或触发异步扫描。</li>
<li>流式处理 + 限制：限制最大文件大小、文件类型、并发上传数、速率。</li>
<li>后续处理：异步病毒扫描、图像重编码（重新生成缩略图），移除可执行元数据。</li>
<li>日志与告警：所有上传活动审计、异常触发报警。</li>
</ul>`],reference:"/myKMS/knowledge/browser/webSecurity#_7-文件上传漏洞",source:"/myKMS/knowledge/browser/webSecurity"},{id:121,question:"中间人攻击",answer:["定义：攻击者在通信双方之间拦截、篡改或监听网络流量，使双方以为是在直接通信，但实际上流量被中间人读取或修改。","危害：窃取凭证、会话劫持、注入恶意脚本/内容、篡改数据、绕过认证、下发恶意资源等。",`常见的中间人攻击( MITM 变种)
- 被动监听
- 主动中间人
- ARP Spoofing / L2 欺骗
- DNS 欺骗 / 劫持
- SSL/TLS 中间人（伪造证书 / 不安全降级)
- 恶意代理 / 透明代理 / 企业中间人
- 边缘 CDN / 插件污染`,`防御与缓解措施:
- 始终使用 HTTPS（TLS）
- 启用 TLS1.3，关闭过时协议/算法
- HSTS（HTTP Strict Transport Security）
- 启用 HTTP/2 或 HTTP/3（QUIC）
- Content Security Policy (CSP) — 防止被注入的脚本执行
- 安全 Cookie 配置
- 禁止混合内容（Mixed Content） — 所有资源必须通过 HTTPS 加载
- 减少在客户端存储敏感信息`],answerHtml:["<p>定义：攻击者在通信双方之间拦截、篡改或监听网络流量，使双方以为是在直接通信，但实际上流量被中间人读取或修改。</p>","<p>危害：窃取凭证、会话劫持、注入恶意脚本/内容、篡改数据、绕过认证、下发恶意资源等。</p>",`<p>常见的中间人攻击( MITM 变种)</p>
<ul>
<li>被动监听</li>
<li>主动中间人</li>
<li>ARP Spoofing / L2 欺骗</li>
<li>DNS 欺骗 / 劫持</li>
<li>SSL/TLS 中间人（伪造证书 / 不安全降级)</li>
<li>恶意代理 / 透明代理 / 企业中间人</li>
<li>边缘 CDN / 插件污染</li>
</ul>`,`<p>防御与缓解措施:</p>
<ul>
<li>始终使用 HTTPS（TLS）</li>
<li>启用 TLS1.3，关闭过时协议/算法</li>
<li>HSTS（HTTP Strict Transport Security）</li>
<li>启用 HTTP/2 或 HTTP/3（QUIC）</li>
<li>Content Security Policy (CSP) — 防止被注入的脚本执行</li>
<li>安全 Cookie 配置</li>
<li>禁止混合内容（Mixed Content） — 所有资源必须通过 HTTPS 加载</li>
<li>减少在客户端存储敏感信息</li>
</ul>`],reference:"/myKMS/knowledge/browser/webSecurity#_8-中间人攻击",source:"/myKMS/knowledge/browser/webSecurity"},{id:122,question:"react尽量不要再内部定义组件",answer:[`\`\`\`jsx
function App() {
  const [count, setCount] = useState(0);

  const Child = () => {
    useEffect(() => {
      console.log('Child mounted');
    }, []);
    return <div>child</div>;
  };
  const Child2 = useCallback(() => {
    useEffect(() => {
      console.log("Child mounted");
    }, []);
    return <div>child2</div>;
  }, []);

  return (
    <>
      <button onClick={() => setCount(c => c + 1)}>+</button>
      <Child />
      <Child2 />
    </>
  );
}

\`\`\``,"🔴 每次点击按钮，Child 都会重新挂载，副作用也会重新执行。","当父组件内部定义子组件时，每次父组件 render 都会创建一个新的函数对象。React 看到“类型变了”，认为它是一个全新的组件。结果：子组件每次都会被卸载并重新挂载。**可以使用 useCallback 优化**",`- 什么时候可以在内部定义组件?
  - 组件依赖父组件的闭包变量
  - 性能无关的小组件
  - 需要动态生成组件类型`],answerHtml:[`<div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre><!--::markdown-it-async::jnv9aiirf1393kdzuvl3e::--><code>function App() {
  const [count, setCount] = useState(0);

  const Child = () =&gt; {
    useEffect(() =&gt; {
      console.log(&#039;Child mounted&#039;);
    }, []);
    return &lt;div&gt;child&lt;/div&gt;;
  };
  const Child2 = useCallback(() =&gt; {
    useEffect(() =&gt; {
      console.log(&quot;Child mounted&quot;);
    }, []);
    return &lt;div&gt;child2&lt;/div&gt;;
  }, []);

  return (
    &lt;&gt;
      &lt;button onClick={() =&gt; setCount(c =&gt; c + 1)}&gt;+&lt;/button&gt;
      &lt;Child /&gt;
      &lt;Child2 /&gt;
    &lt;/&gt;
  );
}
</code></pre>
</div>`,"<p>🔴 每次点击按钮，Child 都会重新挂载，副作用也会重新执行。</p>","<p>当父组件内部定义子组件时，每次父组件 render 都会创建一个新的函数对象。React 看到“类型变了”，认为它是一个全新的组件。结果：子组件每次都会被卸载并重新挂载。<strong>可以使用 useCallback 优化</strong></p>",`<ul>
<li>什么时候可以在内部定义组件?
<ul>
<li>组件依赖父组件的闭包变量</li>
<li>性能无关的小组件</li>
<li>需要动态生成组件类型</li>
</ul>
</li>
</ul>`],reference:"/myKMS/knowledge/framework/react#_1-react尽量不要再内部定义组件",source:"/myKMS/knowledge/framework/react"},{id:123,question:"为什么修改 Context 后, 只有useContext 的组件才会重新渲染",answer:["**React 内部是 精确追踪哪些 Fiber 消费了 Context。**","**React 的 Context 依赖 Fiber 树 + 依赖收集机制：**\n1. Provider 提供 value。\n2. useContext / Consumer 注册依赖。当一个组件调用 `useContext(MyContext)` 时：React 在 Fiber 构建阶段找到最近的 Provider，读取当前 Context value，同时把这个 Fiber 注册到 Context 的依赖列表，标记它依赖这个 Context。\n3. Provider value 更新：React 调用 `scheduleUpdateOnFiber(providerFiber)` 更新 Provider，遍历 Fiber 树，只更新依赖该 Context 的 Fiber；没有调用 `useContext` / `Consumer` 的组件不会在依赖列表里 → 不触发重新渲染。","扩展",`- 如果 Context value 对象每次都创建新引用, 即使 count 没变化，所有依赖 useContext 的组件也会渲染，因为对象引用变化。(优化使用 useMemo 缓存)
- 拆分 Context,将不同状态拆分成多个 Context，减少不必要更新。`,"再拓展: react Context 的原理","React Context 用于跨组件共享数据，避免多层嵌套的 props 传递。","**React Context 核心依赖 Fiber 树 和 依赖收集机制：**","React Context 的原理核心是 发布-订阅模式，它通过 createContext 创建通信频道，Provider 负责发布数据，Consumer 或 useContext 负责订阅数据。其更新机制绕过父组件的渲染优化，直接通知所有订阅者。",`React Context 用于跨组件共享数据，避免 props 层层传递。其底层依赖 Fiber 树和依赖收集：
创建 Context 后，Provider 会把 value 写入 Context 对象；组件调用 useContext 时，Fiber 会读取最近的 Provider 的值，并在 Fiber 上记录对该 Context 的依赖。当 Provider 的 value 变化时，React 会标记并调度所有依赖该 Context 的 Fiber 重新渲染，其它未使用 useContext 的组件不会更新。
这种机制保证了 按需更新：只重渲染真正消费 Context 的组件，提高性能。在并发模式下，React 还为每个渲染器维护独立的 currentValue，确保多根树或并发渲染时 Context 值一致。为了避免无效更新，应尽量拆分 Context、用 useMemo 缓存 value，并让消费组件保持细粒度。`],answerHtml:["<p><strong>React 内部是 精确追踪哪些 Fiber 消费了 Context。</strong></p>",`<p><strong>React 的 Context 依赖 Fiber 树 + 依赖收集机制：</strong></p>
<ol>
<li>Provider 提供 value。</li>
<li>useContext / Consumer 注册依赖。当一个组件调用 <code>useContext(MyContext)</code> 时：React 在 Fiber 构建阶段找到最近的 Provider，读取当前 Context value，同时把这个 Fiber 注册到 Context 的依赖列表，标记它依赖这个 Context。</li>
<li>Provider value 更新：React 调用 <code>scheduleUpdateOnFiber(providerFiber)</code> 更新 Provider，遍历 Fiber 树，只更新依赖该 Context 的 Fiber；没有调用 <code>useContext</code> / <code>Consumer</code> 的组件不会在依赖列表里 → 不触发重新渲染。</li>
</ol>`,"<p>扩展</p>",`<ul>
<li>如果 Context value 对象每次都创建新引用, 即使 count 没变化，所有依赖 useContext 的组件也会渲染，因为对象引用变化。(优化使用 useMemo 缓存)</li>
<li>拆分 Context,将不同状态拆分成多个 Context，减少不必要更新。</li>
</ul>`,"<p>再拓展: react Context 的原理</p>","<p>React Context 用于跨组件共享数据，避免多层嵌套的 props 传递。</p>","<p><strong>React Context 核心依赖 Fiber 树 和 依赖收集机制：</strong></p>","<p>React Context 的原理核心是 发布-订阅模式，它通过 createContext 创建通信频道，Provider 负责发布数据，Consumer 或 useContext 负责订阅数据。其更新机制绕过父组件的渲染优化，直接通知所有订阅者。</p>",`<p>React Context 用于跨组件共享数据，避免 props 层层传递。其底层依赖 Fiber 树和依赖收集：
创建 Context 后，Provider 会把 value 写入 Context 对象；组件调用 useContext 时，Fiber 会读取最近的 Provider 的值，并在 Fiber 上记录对该 Context 的依赖。当 Provider 的 value 变化时，React 会标记并调度所有依赖该 Context 的 Fiber 重新渲染，其它未使用 useContext 的组件不会更新。
这种机制保证了 按需更新：只重渲染真正消费 Context 的组件，提高性能。在并发模式下，React 还为每个渲染器维护独立的 currentValue，确保多根树或并发渲染时 Context 值一致。为了避免无效更新，应尽量拆分 Context、用 useMemo 缓存 value，并让消费组件保持细粒度。</p>`],reference:"/myKMS/knowledge/framework/react#_2-为什么修改-context-后-只有usecontext-的组件才会重新渲染",source:"/myKMS/knowledge/framework/react"},{id:124,question:"React.memo 原理是啥",answer:["**React.memo 是一个高阶组件（HOC），用于优化函数组件的渲染性能。它的核心原理是通过记忆（Memoization）组件的渲染结果，在 props 未变化时跳过重新渲染，直接返回上一次的渲染结果。**",`\`\`\`jsx
// React.memo 的简化实现逻辑
function memo(Component, arePropsEqual) {
  let lastProps = null;
  let lastResult = null;
  
  return function MemoizedComponent(nextProps) {
    // 使用默认的浅比较或自定义比较函数
    const propsEqual = arePropsEqual 
      ? arePropsEqual(lastProps, nextProps)
      : shallowEqual(lastProps, nextProps);
    
    if (propsEqual && lastResult !== null) {
      // props 未变化，返回缓存的结果
      return lastResult;
    }
    
    // props 变化了，重新渲染
    lastProps = nextProps;
    lastResult = Component(nextProps);
    return lastResult;
  };
}
\`\`\``,"React.memo 的核心原理是：",`- 记忆化渲染结果，缓存上一次的渲染输出
- 浅比较 props，通过 Object.is 比较每个 prop
- 跳过不必要的渲染，当 props 未变化时直接返回缓存结果
- 支持自定义比较，通过第二个参数实现更精细的控制`],answerHtml:["<p><strong>React.memo 是一个高阶组件（HOC），用于优化函数组件的渲染性能。它的核心原理是通过记忆（Memoization）组件的渲染结果，在 props 未变化时跳过重新渲染，直接返回上一次的渲染结果。</strong></p>",`<div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre><!--::markdown-it-async::xcwi2z4wuqcwii8sabypi::--><code>// React.memo 的简化实现逻辑
function memo(Component, arePropsEqual) {
  let lastProps = null;
  let lastResult = null;
  
  return function MemoizedComponent(nextProps) {
    // 使用默认的浅比较或自定义比较函数
    const propsEqual = arePropsEqual 
      ? arePropsEqual(lastProps, nextProps)
      : shallowEqual(lastProps, nextProps);
    
    if (propsEqual &amp;&amp; lastResult !== null) {
      // props 未变化，返回缓存的结果
      return lastResult;
    }
    
    // props 变化了，重新渲染
    lastProps = nextProps;
    lastResult = Component(nextProps);
    return lastResult;
  };
}</code></pre>
</div>`,"<p>React.memo 的核心原理是：</p>",`<ul>
<li>记忆化渲染结果，缓存上一次的渲染输出</li>
<li>浅比较 props，通过 Object.is 比较每个 prop</li>
<li>跳过不必要的渲染，当 props 未变化时直接返回缓存结果</li>
<li>支持自定义比较，通过第二个参数实现更精细的控制</li>
</ul>`],reference:"/myKMS/knowledge/framework/react#_3-react-memo-原理是啥",source:"/myKMS/knowledge/framework/react"},{id:125,question:"useMemo 原理是啥",answer:["**在 Fiber 上保存一份“上次计算的值和依赖项”，如果依赖没有变化，就直接返回上一次的值，而不是重新计算。**",`- 适合包裹 计算开销较大 或 返回稳定引用（如对象、回调函数）的情况。
- useMemo 不会阻止组件重渲染，它只是在渲染过程中复用上一次计算的结果。
- 如果依赖数组未变，返回的是上次缓存的引用（对象或函数也一样）。
- **如果依赖数组省略（即 []），计算只会在初次渲染时执行一次。**
- 缓存与组件生命周期绑定，自动清理
- **依赖项要准确填写，否则可能缓存了过期的值（产生 bug）**`],answerHtml:["<p><strong>在 Fiber 上保存一份“上次计算的值和依赖项”，如果依赖没有变化，就直接返回上一次的值，而不是重新计算。</strong></p>",`<ul>
<li>适合包裹 计算开销较大 或 返回稳定引用（如对象、回调函数）的情况。</li>
<li>useMemo 不会阻止组件重渲染，它只是在渲染过程中复用上一次计算的结果。</li>
<li>如果依赖数组未变，返回的是上次缓存的引用（对象或函数也一样）。</li>
<li><strong>如果依赖数组省略（即 []），计算只会在初次渲染时执行一次。</strong></li>
<li>缓存与组件生命周期绑定，自动清理</li>
<li><strong>依赖项要准确填写，否则可能缓存了过期的值（产生 bug）</strong></li>
</ul>`],reference:"/myKMS/knowledge/framework/react#_4-usememo-原理是啥",source:"/myKMS/knowledge/framework/react"},{id:126,question:"hook 缺少依赖, 会导致什么问题(React 闭包陷阱)",answer:["表现:缺少依赖导致过时闭包",`\`\`\`jsx
function Timer() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      // ❌ 问题：这里的 count 始终是 0（初始值）
      // 因为 useEffect 只在挂载时执行，闭包捕获了初始的 count
      setCount(count + 1);
      console.log('Count:', count); // 始终输出 0
    }, 1000);
    
    return () => clearInterval(interval);
  }, []); // ❌ 缺少 count 依赖
  
  return <div>计数: {count}</div>;
  // 组件首次渲染，count = 0
  // useEffect 执行，创建定时器，回调函数捕获了此时的 count = 0
  // 后续 count 更新，但 useEffect 不会重新执行（因为依赖数组为空）
  // 定时器回调中访问的 count 始终是最初捕获的 0
}
function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  
  const sendMessage = useCallback(() => {
    // ❌ 问题：这里的 messages 始终是初始的空数组
    // 因为 useCallback 在依赖不变时返回缓存的函数
    const newMessage = { text: input, timestamp: new Date() };
    setMessages([...messages, newMessage]); // messages 始终是 []
    setInput('');
  }, [input]); // ❌ 缺少 messages 依赖
  
  return (
    <div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={sendMessage}>发送</button>
    </div>
  );
}
\`\`\``,"缺少依赖的根本原因",`1. React 在每次 render 时都会创建新的函数作用域 **Hooks 每次渲染都是全新执行的函数**
2. 如果依赖数组缺少某个在回调或 effect 中使用的变量，React 不会重新运行 Hook 来“刷新”闭包
3. 因此，Hook 内部的函数始终使用旧的变量快照 → 产生 过时闭包`,"js 角度, 闭包陷阱的根本原因是 JavaScript 的闭包机制：",`- 当一个函数被定义时，它会捕获当前作用域中的变量。
- 如果这些变量是状态或 props，它们的值在函数定义时被“固定”下来。
- 当状态或 props 更新时，闭包中的值并不会自动更新。`,"最佳实践:",`- 依赖声明的黄金法则: 所有在回调中使用的值都应该在依赖数组中声明
- 启用 ESLint 规则自动检测
- 使用函数式更新避免依赖状态值`],answerHtml:["<p>表现:缺少依赖导致过时闭包</p>",`<div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre><!--::markdown-it-async::l6ncb23oiyclgiil6bvjv::--><code>function Timer() {
  const [count, setCount] = useState(0);
  
  useEffect(() =&gt; {
    const interval = setInterval(() =&gt; {
      // ❌ 问题：这里的 count 始终是 0（初始值）
      // 因为 useEffect 只在挂载时执行，闭包捕获了初始的 count
      setCount(count + 1);
      console.log(&#039;Count:&#039;, count); // 始终输出 0
    }, 1000);
    
    return () =&gt; clearInterval(interval);
  }, []); // ❌ 缺少 count 依赖
  
  return &lt;div&gt;计数: {count}&lt;/div&gt;;
  // 组件首次渲染，count = 0
  // useEffect 执行，创建定时器，回调函数捕获了此时的 count = 0
  // 后续 count 更新，但 useEffect 不会重新执行（因为依赖数组为空）
  // 定时器回调中访问的 count 始终是最初捕获的 0
}
function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState(&#039;&#039;);
  
  const sendMessage = useCallback(() =&gt; {
    // ❌ 问题：这里的 messages 始终是初始的空数组
    // 因为 useCallback 在依赖不变时返回缓存的函数
    const newMessage = { text: input, timestamp: new Date() };
    setMessages([...messages, newMessage]); // messages 始终是 []
    setInput(&#039;&#039;);
  }, [input]); // ❌ 缺少 messages 依赖
  
  return (
    &lt;div&gt;
      &lt;input value={input} onChange={(e) =&gt; setInput(e.target.value)} /&gt;
      &lt;button onClick={sendMessage}&gt;发送&lt;/button&gt;
    &lt;/div&gt;
  );
}</code></pre>
</div>`,"<p>缺少依赖的根本原因</p>",`<ol>
<li>React 在每次 render 时都会创建新的函数作用域 <strong>Hooks 每次渲染都是全新执行的函数</strong></li>
<li>如果依赖数组缺少某个在回调或 effect 中使用的变量，React 不会重新运行 Hook 来“刷新”闭包</li>
<li>因此，Hook 内部的函数始终使用旧的变量快照 → 产生 过时闭包</li>
</ol>`,"<p>js 角度, 闭包陷阱的根本原因是 JavaScript 的闭包机制：</p>",`<ul>
<li>当一个函数被定义时，它会捕获当前作用域中的变量。</li>
<li>如果这些变量是状态或 props，它们的值在函数定义时被“固定”下来。</li>
<li>当状态或 props 更新时，闭包中的值并不会自动更新。</li>
</ul>`,"<p>最佳实践:</p>",`<ul>
<li>依赖声明的黄金法则: 所有在回调中使用的值都应该在依赖数组中声明</li>
<li>启用 ESLint 规则自动检测</li>
<li>使用函数式更新避免依赖状态值</li>
</ul>`],reference:"/myKMS/knowledge/framework/react#_5-hook-缺少依赖-会导致什么问题-react-闭包陷阱",source:"/myKMS/knowledge/framework/react"},{id:127,question:"useEffect 和 useLayoutEffect 的区别",answer:["**调用时机不同** 会直接影响 UI 渲染顺序和性能","| Hook                  | 调用时机                | 执行特点               | 适用场景                          |\n| --------------------- | ------------------- | ------------------ | ----------------------------- |\n| **`useEffect`**       | 浏览器完成绘制（paint）后异步执行（异步，下一帧） | 不阻塞浏览器绘制           | 数据获取、订阅、日志、定时器等               |\n| **`useLayoutEffect`** | DOM 变更后、浏览器绘制前同步执行（同步，阻塞绘制）  | **阻塞绘制，先运行副作用，再渲染到屏幕** | 需要**测量 DOM 尺寸/位置** 或在绘制前做样式调整 |","总结",`- useEffect: **异步执行，不阻塞渲染**(在浏览器绘制后执行 → 性能友好)，适合大多数副作用操作。
- useLayoutEffect: **同步执行，阻塞渲染**(在绘制前执行 → 用于 DOM 测量和避免闪烁)，适合需要在绘制前同步完成的副作用操作。`,`仅在必要时用 useLayoutEffect
比如：读取 DOM 布局信息（测量元素大小）;需要在绘制前同步修改 DOM 样式（避免闪烁)`,`\`\`\`
Render 阶段（计算虚拟 DOM）
        ↓
DOM 更新（Commit 阶段）
        ↓
useLayoutEffect（同步执行） 👈 页面还没绘制
        ↓
浏览器绘制（Repaint）
        ↓
useEffect（异步执行） 👈 页面已经绘制
\`\`\``],answerHtml:["<p><strong>调用时机不同</strong> 会直接影响 UI 渲染顺序和性能</p>",`<table tabindex="0">
<thead>
<tr>
<th>Hook</th>
<th>调用时机</th>
<th>执行特点</th>
<th>适用场景</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong><code>useEffect</code></strong></td>
<td>浏览器完成绘制（paint）后异步执行（异步，下一帧）</td>
<td>不阻塞浏览器绘制</td>
<td>数据获取、订阅、日志、定时器等</td>
</tr>
<tr>
<td><strong><code>useLayoutEffect</code></strong></td>
<td>DOM 变更后、浏览器绘制前同步执行（同步，阻塞绘制）</td>
<td><strong>阻塞绘制，先运行副作用，再渲染到屏幕</strong></td>
<td>需要<strong>测量 DOM 尺寸/位置</strong> 或在绘制前做样式调整</td>
</tr>
</tbody>
</table>`,"<p>总结</p>",`<ul>
<li>useEffect: <strong>异步执行，不阻塞渲染</strong>(在浏览器绘制后执行 → 性能友好)，适合大多数副作用操作。</li>
<li>useLayoutEffect: <strong>同步执行，阻塞渲染</strong>(在绘制前执行 → 用于 DOM 测量和避免闪烁)，适合需要在绘制前同步完成的副作用操作。</li>
</ul>`,`<p>仅在必要时用 useLayoutEffect
比如：读取 DOM 布局信息（测量元素大小）;需要在绘制前同步修改 DOM 样式（避免闪烁)</p>`,`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><!--::markdown-it-async::81wesrbvqhr9vw3sqcjcae::--><code>Render 阶段（计算虚拟 DOM）
        ↓
DOM 更新（Commit 阶段）
        ↓
useLayoutEffect（同步执行） 👈 页面还没绘制
        ↓
浏览器绘制（Repaint）
        ↓
useEffect（异步执行） 👈 页面已经绘制</code></pre>
</div>`],reference:"/myKMS/knowledge/framework/react#_6-useeffect-和-uselayouteffect-的区别",source:"/myKMS/knowledge/framework/react"},{id:128,question:"为何 dev 模式下 useEffect 执行两次？",answer:["react 18后默认开启了 StrictMode, 使开发模式下，React 会刻意“多渲染一次”组件（mount → unmount → 再 mount），用来帮助我们发现不安全的副作用。","借助严格模式的目标是帮助开发者提前发现以下问题：",`- **不纯的渲染逻辑**：例如，依赖外部状态或直接修改 DOM。
- **未正确清理的副作用**：例如，未在 useEffect 的清理函数中取消订阅或清除定时器。
- **不稳定的组件行为**：例如，组件在多次挂载和卸载时表现不一致。
通过强制组件挂载和卸载两次，React 可以更好地暴露这些问题, “多跑一次是为了更早发现问题，不是 Bug。”`],answerHtml:["<p>react 18后默认开启了 StrictMode, 使开发模式下，React 会刻意“多渲染一次”组件（mount → unmount → 再 mount），用来帮助我们发现不安全的副作用。</p>","<p>借助严格模式的目标是帮助开发者提前发现以下问题：</p>",`<ul>
<li><strong>不纯的渲染逻辑</strong>：例如，依赖外部状态或直接修改 DOM。</li>
<li><strong>未正确清理的副作用</strong>：例如，未在 useEffect 的清理函数中取消订阅或清除定时器。</li>
<li><strong>不稳定的组件行为</strong>：例如，组件在多次挂载和卸载时表现不一致。
通过强制组件挂载和卸载两次，React 可以更好地暴露这些问题, “多跑一次是为了更早发现问题，不是 Bug。”</li>
</ul>`],reference:"/myKMS/knowledge/framework/react#_7-为何-dev-模式下-useeffect-执行两次",source:"/myKMS/knowledge/framework/react"},{id:129,question:"React state 不可变数据",answer:["**State（状态）必须保持不可变（immutable）**","不可变数据（Immutable Data）:指的是一旦创建就不能直接修改的对象或数组。如果要更新，必须创建一个新对象/数组。","React 为何需要不可变数据",`- 高效的重渲染判断, 性能好  
  - React 使用 浅比较（===） 判断 state 是否变化。
  - 只有引用变化（新对象/数组）才会认为状态更新。`,`- 避免副作用
  - 直接修改状态可能会导致意外的副作用，尤其是在异步操作或复杂组件中。
  - 不可变数据确保了状态的更新是纯函数式的，避免了副作用。
  - 不可变数据能保证“之前的渲染”不会被“之后的修改”影响。`,`- 可预测性
  - 不可变数据使得状态的变化更加可预测和可追踪。
  - 每次状态更新都会生成一个新的对象或数组，这样可以更容易地调试和追踪状态的变化历史`,"封装数据可以用 immer 库"],answerHtml:["<p><strong>State（状态）必须保持不可变（immutable）</strong></p>","<p>不可变数据（Immutable Data）:指的是一旦创建就不能直接修改的对象或数组。如果要更新，必须创建一个新对象/数组。</p>","<p>React 为何需要不可变数据</p>",`<ul>
<li>高效的重渲染判断, 性能好
<ul>
<li>React 使用 浅比较（===） 判断 state 是否变化。</li>
<li>只有引用变化（新对象/数组）才会认为状态更新。</li>
</ul>
</li>
</ul>`,`<ul>
<li>避免副作用
<ul>
<li>直接修改状态可能会导致意外的副作用，尤其是在异步操作或复杂组件中。</li>
<li>不可变数据确保了状态的更新是纯函数式的，避免了副作用。</li>
<li>不可变数据能保证“之前的渲染”不会被“之后的修改”影响。</li>
</ul>
</li>
</ul>`,`<ul>
<li>可预测性
<ul>
<li>不可变数据使得状态的变化更加可预测和可追踪。</li>
<li>每次状态更新都会生成一个新的对象或数组，这样可以更容易地调试和追踪状态的变化历史</li>
</ul>
</li>
</ul>`,"<p>封装数据可以用 immer 库</p>"],reference:"/myKMS/knowledge/framework/react#_8-react-state-不可变数据",source:"/myKMS/knowledge/framework/react"},{id:130,question:"React state 异步更新",answer:["setState 一般不是立即更新",`为什么是异步的?
React 把 state 更新设计为 异步的、批量的（batching），主要有两个原因：`,`- 性能优化
  - 多次 setState 调用会被合并成一次渲染，避免重复渲染。`,`- 保证一致性
  React 18 引入 Concurrent Rendering（并发渲染），允许 React 中断、重用、跳过渲染。如果 state 是立即更新的，可能出现“半更新”的 UI 状态。`,"👉 所以 React 会先记录更新请求，然后在合适的时机（如事件处理结束后或下一个渲染周期）再去批量执行。","如果你需要基于 上一次的 state 来更新，应该用函数式写法.","在哪些场景异步?",`- 在 React 控制的事件处理函数 中（如 onClick、onChange） → 异步批量更新
- 在 生命周期或 Effect 中 → 异步批量更新
- 在 异步回调（setTimeout、Promise.then）中 → React 18 之前是同步，18 开始默认也会批量更新`,"Automatic Batching","同步更新的场景:",`- 非 React 管理的环境中(例如直接在浏览器事件监听器里更新)
- React DOM API 中的 flushSync
  - React 提供 flushSync 来强制立即刷新 state
- React 18 之前的版本
  - 在 setTimeout、Promise.then 等异步回调中 setState 是同步执行的
  - React 18 改为了默认批量处理`,"**异步更新如何实现的?**","React 的 setState 不会立刻改变 state，而是：",`1. 先创建一个 更新对象（Update） 并加入到对应 Fiber 节点的更新队列中。
2. 调度器（Scheduler）决定何时进行 Render → Commit → Paint。
3. 在下一次渲染（Render Phase）时才根据队列计算新的 state。
4. 在 Commit Phase 把新的 state 应用到 DOM 并触发副作用（useEffect）。`,"因此我们看到的“异步”本质上是 **延迟应用 + 批量处理**。"],answerHtml:["<p>setState 一般不是立即更新</p>",`<p>为什么是异步的?
React 把 state 更新设计为 异步的、批量的（batching），主要有两个原因：</p>`,`<ul>
<li>性能优化
<ul>
<li>多次 setState 调用会被合并成一次渲染，避免重复渲染。</li>
</ul>
</li>
</ul>`,`<ul>
<li>保证一致性
React 18 引入 Concurrent Rendering（并发渲染），允许 React 中断、重用、跳过渲染。如果 state 是立即更新的，可能出现“半更新”的 UI 状态。</li>
</ul>`,"<p>👉 所以 React 会先记录更新请求，然后在合适的时机（如事件处理结束后或下一个渲染周期）再去批量执行。</p>","<p>如果你需要基于 上一次的 state 来更新，应该用函数式写法.</p>","<p>在哪些场景异步?</p>",`<ul>
<li>在 React 控制的事件处理函数 中（如 onClick、onChange） → 异步批量更新</li>
<li>在 生命周期或 Effect 中 → 异步批量更新</li>
<li>在 异步回调（setTimeout、Promise.then）中 → React 18 之前是同步，18 开始默认也会批量更新</li>
</ul>`,"<p>Automatic Batching</p>","<p>同步更新的场景:</p>",`<ul>
<li>非 React 管理的环境中(例如直接在浏览器事件监听器里更新)</li>
<li>React DOM API 中的 flushSync
<ul>
<li>React 提供 flushSync 来强制立即刷新 state</li>
</ul>
</li>
<li>React 18 之前的版本
<ul>
<li>在 setTimeout、Promise.then 等异步回调中 setState 是同步执行的</li>
<li>React 18 改为了默认批量处理</li>
</ul>
</li>
</ul>`,"<p><strong>异步更新如何实现的?</strong></p>","<p>React 的 setState 不会立刻改变 state，而是：</p>",`<ol>
<li>先创建一个 更新对象（Update） 并加入到对应 Fiber 节点的更新队列中。</li>
<li>调度器（Scheduler）决定何时进行 Render → Commit → Paint。</li>
<li>在下一次渲染（Render Phase）时才根据队列计算新的 state。</li>
<li>在 Commit Phase 把新的 state 应用到 DOM 并触发副作用（useEffect）。</li>
</ol>`,"<p>因此我们看到的“异步”本质上是 <strong>延迟应用 + 批量处理</strong>。</p>"],reference:"/myKMS/knowledge/framework/react#_9-react-state-异步更新",source:"/myKMS/knowledge/framework/react"},{id:131,question:"React 项目可做哪些性能优化？",answer:["**减少渲染次数、缩短渲染时间、降低资源体积、提升交互流畅度。**","渲染层优化:",`- 减少不必要的渲染
  - 组件拆分：让状态尽量下沉到最小必要范围，避免父组件变化导致大范围子组件重渲染。
  - React.memo：对函数组件进行浅比较，如果 props 没变化就跳过重渲染。
  - useMemo / useCallback：缓存计算结果或函数引用，避免因引用变化导致子组件更新。
  - 避免内联函数/对象：频繁生成新引用会触发子组件重新渲染。
  - Key 使用稳定且唯一的值：避免列表渲染时产生无意义的卸载/挂载
- 避免昂贵的计算
  - 昂贵计算用 useMemo 缓存
  - 对需要频繁更新的复杂计算结果（如过滤、排序）可用惰性计算或selector（如 Reselect）。
  - 使用webwork
- 合理使用 Context
  - Context 变化会触发所有消费它的组件重渲染。
  - 对大规模依赖全局数据的场景，可用：redux`,"资源, 首屏与网络优化",`- 代码拆分（Code Splitting）：用 React.lazy + Suspense 或 webpack dynamic import 按路由/组件拆分包
- Tree-shaking / Dead-code Elimination：减少未使用代码。
- 图片优化：压缩、懒加载（\`<img loading="lazy" />\`）。
- Gzip/Brotli 压缩、HTTP/2、多路复用。
- CDN 缓存静态资源。
- Server Components / SSR / SSG（Next.js）：减少客户端渲染压力，加快首屏时间。`,"列表与大数据优化",`- 虚拟列表（Windowing）：react-window、react-virtualized。
- 对非常大的列表，使用增量渲染或分页加载。`],answerHtml:["<p><strong>减少渲染次数、缩短渲染时间、降低资源体积、提升交互流畅度。</strong></p>","<p>渲染层优化:</p>",`<ul>
<li>减少不必要的渲染
<ul>
<li>组件拆分：让状态尽量下沉到最小必要范围，避免父组件变化导致大范围子组件重渲染。</li>
<li>React.memo：对函数组件进行浅比较，如果 props 没变化就跳过重渲染。</li>
<li>useMemo / useCallback：缓存计算结果或函数引用，避免因引用变化导致子组件更新。</li>
<li>避免内联函数/对象：频繁生成新引用会触发子组件重新渲染。</li>
<li>Key 使用稳定且唯一的值：避免列表渲染时产生无意义的卸载/挂载</li>
</ul>
</li>
<li>避免昂贵的计算
<ul>
<li>昂贵计算用 useMemo 缓存</li>
<li>对需要频繁更新的复杂计算结果（如过滤、排序）可用惰性计算或selector（如 Reselect）。</li>
<li>使用webwork</li>
</ul>
</li>
<li>合理使用 Context
<ul>
<li>Context 变化会触发所有消费它的组件重渲染。</li>
<li>对大规模依赖全局数据的场景，可用：redux</li>
</ul>
</li>
</ul>`,"<p>资源, 首屏与网络优化</p>",`<ul>
<li>代码拆分（Code Splitting）：用 React.lazy + Suspense 或 webpack dynamic import 按路由/组件拆分包</li>
<li>Tree-shaking / Dead-code Elimination：减少未使用代码。</li>
<li>图片优化：压缩、懒加载（<code>&lt;img loading=&quot;lazy&quot; /&gt;</code>）。</li>
<li>Gzip/Brotli 压缩、HTTP/2、多路复用。</li>
<li>CDN 缓存静态资源。</li>
<li>Server Components / SSR / SSG（Next.js）：减少客户端渲染压力，加快首屏时间。</li>
</ul>`,"<p>列表与大数据优化</p>",`<ul>
<li>虚拟列表（Windowing）：react-window、react-virtualized。</li>
<li>对非常大的列表，使用增量渲染或分页加载。</li>
</ul>`],reference:"/myKMS/knowledge/framework/react#_10-react-项目可做哪些性能优化",source:"/myKMS/knowledge/framework/react"},{id:132,question:"React项目中组件销毁有哪几种方式？",answer:[`1. 条件渲染（动态卸载）
2. 路由切换
3. 父组件卸载（连带子组件销毁）
4. useEffect 清理函数（资源释放）
5. 修改 key 强制重新挂载（重置组件）
6. 手动卸载（Portal 或第三方库）`],answerHtml:[`<ol>
<li>条件渲染（动态卸载）</li>
<li>路由切换</li>
<li>父组件卸载（连带子组件销毁）</li>
<li>useEffect 清理函数（资源释放）</li>
<li>修改 key 强制重新挂载（重置组件）</li>
<li>手动卸载（Portal 或第三方库）</li>
</ol>`],reference:"/myKMS/knowledge/framework/react#_11-react项目中组件销毁有哪几种方式",source:"/myKMS/knowledge/framework/react"},{id:133,question:"JSX 的本质是什么？",answer:["**JSX 本质上是 JavaScript 的语法糖，它会被编译为 React.createElement(...) 或 React17+ 的 jsx(...) 调用，最终生成普通的 JavaScript 对象（VNode / 虚拟 DOM）。**","| 阶段                    | JSX 扮演的角色                                  |\n| --------------------- | ------------------------------------------ |\n| 编译时（Babel）            | 把 JSX 转换成 `React.createElement` 或 `jsx` 调用 |\n| 运行时（React）            | 函数调用返回一个 JS 对象（虚拟 DOM）                     |\n| 渲染时（React Reconciler） | 根据虚拟 DOM 更新真实 DOM                          |"],answerHtml:["<p><strong>JSX 本质上是 JavaScript 的语法糖，它会被编译为 React.createElement(...) 或 React17+ 的 jsx(...) 调用，最终生成普通的 JavaScript 对象（VNode / 虚拟 DOM）。</strong></p>",`<table tabindex="0">
<thead>
<tr>
<th>阶段</th>
<th>JSX 扮演的角色</th>
</tr>
</thead>
<tbody>
<tr>
<td>编译时（Babel）</td>
<td>把 JSX 转换成 <code>React.createElement</code> 或 <code>jsx</code> 调用</td>
</tr>
<tr>
<td>运行时（React）</td>
<td>函数调用返回一个 JS 对象（虚拟 DOM）</td>
</tr>
<tr>
<td>渲染时（React Reconciler）</td>
<td>根据虚拟 DOM 更新真实 DOM</td>
</tr>
</tbody>
</table>`],reference:"/myKMS/knowledge/framework/react#_12-jsx-的本质是什么",source:"/myKMS/knowledge/framework/react"},{id:134,question:"如何理解 React Fiber 架构？",answer:["React Fiber 是 React16 引入的新架构，它解决了老版本 同步递归渲染 带来的卡顿问题，让 React 能够实现**可中断、可恢复的异步渲染**。","1. 为什么要有 Fiber",`1.1 老架构（Stack Reconciler）的问题
React15 及以前的 Reconciler 是基于 递归调用 的。当组件树很大时，递归更新是一口气（synchronous）完成的，中途不能暂停。
如果更新耗时几十毫秒甚至上百毫秒，浏览器就无法及时响应用户输入或动画，造成掉帧、卡顿。`,"👉 需要一种机制能：",`- 把更新拆分成小任务
    - 按优先级执行
    - 在必要时暂停渲染，先处理用户交互，再回来继续`,"2. Fiber 的核心思想",`Fiber 是对 React 更新过程的重构：
把原本递归的更新过程变成可中断的循环（迭代），并用一个 Fiber 数据结构 表示组件树中的每个节点。
每个 Fiber 节点本质上是一个 JS 对象.对应一个 React element.`,`\`\`\`jsx
type Fiber = {
  type: any,             // 组件类型（函数/类/DOM标签）
  stateNode: any,        // 对应的DOM实例或类组件实例
  child: Fiber | null,   // 第一个子Fiber
  sibling: Fiber | null, // 下一个兄弟Fiber
  return: Fiber | null,  // 父Fiber
  pendingProps: any,     // 新的props
  memoizedState: any,    // 上一次渲染的state
  alternate: Fiber | null, // 双缓存指针
  flags: number,          // 标记需要执行的副作用
  lanes: Lanes.HighPriority, // 任务优先级
  ...
}
\`\`\``,"双向链表树结构，包含以下关键信息：",`- 组件类型：函数组件、类组件或原生标签。
- 状态与副作用：Hooks 状态（如 useState）、生命周期标记（如 useEffect）。
- 调度信息：任务优先级（lane 模型）、到期时间（expirationTime）。
- 链表指针：child（子节点）、sibling（兄弟节点）、return（父节点）。`,"3. 双缓存（Double Buffering）","React 维护两棵 Fiber 树：",`- current 树：当前已显示在页面上的 Fiber 树
- workInProgress 树：正在计算更新的新 Fiber 树`,`更新流程：
在 workInProgress 树上逐个构建 Fiber 节点（可中断）
完成后用一次 commit 阶段把 workInProgress 树切换为 current 树，并更新 DOM
👉 类似“画布双缓冲”，能避免中途渲染不完整。`,"4. 渲染流程拆分","Fiber 把渲染拆分为两大阶段：","1. Render 阶段（可中断）",`- 也叫 “Reconciliation”(协调)
- 从根节点开始，按优先级遍历 Fiber 树
- 构建 workInProgress 树，标记需要更新的节点
- 如果浏览器需要打断（如用户输入、动画），可以中止，稍后继续`,"2. Commit 阶段（同步）",`- 把 workInProgress 树的变更一次性提交到真实 DOM
- 这个阶段必须是同步的，不能被打断（否则 DOM 会不一致）`,"5. 优先级调度",`React Fiber 引入了 优先级调度（Scheduler），在 React18 中与 Concurrent Mode 结合更强大。
React 通过 Lane 模型 管理任务优先级`,`\`\`\`
  // 优先级从高到低
ImmediatePriority（用户输入）
UserBlockingPriority（悬停、点击）
NormalPriority（数据请求）
LowPriority（分析日志）
IdlePriority（非必要任务）
\`\`\``,`调度策略：
  高优先级任务可抢占低优先级任务的执行权。
  过期任务（如 Suspense 回退）会被强制同步执行。`,`- 高优先级：用户输入、焦点、动画
- 低优先级：不紧急的列表渲染、后台数据加载
- Fiber 节点在被调度时会携带类似自己的 expirationTime（过期时间），React 根据优先级决定先处理谁。`,"**React Fiber = 用链表数据结构重写组件树 + 分片可中断渲染 + 双缓冲提交 + 优先级调度**",`- useTransition: Render 阶段可打断并延迟，Commit 阶段照常执行，但可能推迟到稍后。
      - 对 Render / Commit 的影响:Render 阶段：被标记为 transition 的更新，会放到低优先级队列里。高优先级（比如用户输入）会先 Render & Commit。低优先级 Render 可能会被 打断、延迟、重做。Commit 阶段：Commit 依旧是一次性、不可中断的。但由于 Render 被延迟，Commit 也可能推迟发生。用户可能先看到旧 UI（输入框响应快），再看到新 UI（列表刷新）`,`- useDeferredValue: Render 阶段被拆分成两批，Commit 阶段也可能分成多次。
    - 对 Render / Commit 的影响:Render 阶段：依赖 deferredValue 的组件渲染会延后。React 先 Render 其他部分 → Commit → UI 更新一部分。再 Render 依赖 deferredValue 的部分 → Commit → UI 补齐。Commit 阶段：可能出现 多次 Commit：先 Commit 高优先级的 UI（比如输入框内容）。再 Commit 低优先级的 UI（比如搜索结果）。`,`- Fiber 架构是机制，Concurrent Mode 是策略。
  - Fiber 提供了能力，并发模式利用了这些能力。
  - 具体来说：
    - Fiber 提供能力：
        - 将递归变成可中断的循环（time slicing）
        - 支持任务优先级和调度
        - 双 Fiber 树切换，支持渐进渲染
    - Concurrent Mode 使用这些能力：
        - 通过 useTransition 把某些更新标记为低优先级 → Fiber 可以延迟它们
        - 通过 Suspense 控制 UI 的显示顺序 → Fiber 可以中断和恢复渲染
        - 通过 startTransition、useDeferredValue 等 Hook → 利用 Fiber 的调度机制分配任务`,`- Fiber 是基础架构：解决了 React 渲染不可中断的问题。
  - Concurrent Mode 是应用层能力：利用 Fiber 提供的可中断渲染和任务调度，实现并发渲染、优先级管理和流畅的用户体验。
            没有 Fiber，就没有 Concurrent Mode。`],answerHtml:["<p>React Fiber 是 React16 引入的新架构，它解决了老版本 同步递归渲染 带来的卡顿问题，让 React 能够实现<strong>可中断、可恢复的异步渲染</strong>。</p>",`<ol>
<li>为什么要有 Fiber</li>
</ol>`,`<p>1.1 老架构（Stack Reconciler）的问题
React15 及以前的 Reconciler 是基于 递归调用 的。当组件树很大时，递归更新是一口气（synchronous）完成的，中途不能暂停。
如果更新耗时几十毫秒甚至上百毫秒，浏览器就无法及时响应用户输入或动画，造成掉帧、卡顿。</p>`,"<p>👉 需要一种机制能：</p>",`<ul>
<li>把更新拆分成小任务
<ul>
<li>按优先级执行</li>
<li>在必要时暂停渲染，先处理用户交互，再回来继续</li>
</ul>
</li>
</ul>`,`<ol start="2">
<li>Fiber 的核心思想</li>
</ol>`,`<p>Fiber 是对 React 更新过程的重构：
把原本递归的更新过程变成可中断的循环（迭代），并用一个 Fiber 数据结构 表示组件树中的每个节点。
每个 Fiber 节点本质上是一个 JS 对象.对应一个 React element.</p>`,`<div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre><!--::markdown-it-async::7btiowkzxg9z3somxjbjqr::--><code>type Fiber = {
  type: any,             // 组件类型（函数/类/DOM标签）
  stateNode: any,        // 对应的DOM实例或类组件实例
  child: Fiber | null,   // 第一个子Fiber
  sibling: Fiber | null, // 下一个兄弟Fiber
  return: Fiber | null,  // 父Fiber
  pendingProps: any,     // 新的props
  memoizedState: any,    // 上一次渲染的state
  alternate: Fiber | null, // 双缓存指针
  flags: number,          // 标记需要执行的副作用
  lanes: Lanes.HighPriority, // 任务优先级
  ...
}</code></pre>
</div>`,"<p>双向链表树结构，包含以下关键信息：</p>",`<ul>
<li>组件类型：函数组件、类组件或原生标签。</li>
<li>状态与副作用：Hooks 状态（如 useState）、生命周期标记（如 useEffect）。</li>
<li>调度信息：任务优先级（lane 模型）、到期时间（expirationTime）。</li>
<li>链表指针：child（子节点）、sibling（兄弟节点）、return（父节点）。</li>
</ul>`,`<ol start="3">
<li>双缓存（Double Buffering）</li>
</ol>`,"<p>React 维护两棵 Fiber 树：</p>",`<ul>
<li>current 树：当前已显示在页面上的 Fiber 树</li>
<li>workInProgress 树：正在计算更新的新 Fiber 树</li>
</ul>`,`<p>更新流程：
在 workInProgress 树上逐个构建 Fiber 节点（可中断）
完成后用一次 commit 阶段把 workInProgress 树切换为 current 树，并更新 DOM
👉 类似“画布双缓冲”，能避免中途渲染不完整。</p>`,`<ol start="4">
<li>渲染流程拆分</li>
</ol>`,"<p>Fiber 把渲染拆分为两大阶段：</p>",`<ol>
<li>Render 阶段（可中断）</li>
</ol>`,`<ul>
<li>也叫 “Reconciliation”(协调)</li>
<li>从根节点开始，按优先级遍历 Fiber 树</li>
<li>构建 workInProgress 树，标记需要更新的节点</li>
<li>如果浏览器需要打断（如用户输入、动画），可以中止，稍后继续</li>
</ul>`,`<ol start="2">
<li>Commit 阶段（同步）</li>
</ol>`,`<ul>
<li>把 workInProgress 树的变更一次性提交到真实 DOM</li>
<li>这个阶段必须是同步的，不能被打断（否则 DOM 会不一致）</li>
</ul>`,`<ol start="5">
<li>优先级调度</li>
</ol>`,`<p>React Fiber 引入了 优先级调度（Scheduler），在 React18 中与 Concurrent Mode 结合更强大。
React 通过 Lane 模型 管理任务优先级</p>`,`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><!--::markdown-it-async::b58de8dzw2f0468zvbql66z::--><code>  // 优先级从高到低
ImmediatePriority（用户输入）
UserBlockingPriority（悬停、点击）
NormalPriority（数据请求）
LowPriority（分析日志）
IdlePriority（非必要任务）</code></pre>
</div>`,`<p>调度策略：
高优先级任务可抢占低优先级任务的执行权。
过期任务（如 Suspense 回退）会被强制同步执行。</p>`,`<ul>
<li>高优先级：用户输入、焦点、动画</li>
<li>低优先级：不紧急的列表渲染、后台数据加载</li>
<li>Fiber 节点在被调度时会携带类似自己的 expirationTime（过期时间），React 根据优先级决定先处理谁。</li>
</ul>`,"<p><strong>React Fiber = 用链表数据结构重写组件树 + 分片可中断渲染 + 双缓冲提交 + 优先级调度</strong></p>",`<ul>
<li>useTransition: Render 阶段可打断并延迟，Commit 阶段照常执行，但可能推迟到稍后。
- 对 Render / Commit 的影响:Render 阶段：被标记为 transition 的更新，会放到低优先级队列里。高优先级（比如用户输入）会先 Render &amp; Commit。低优先级 Render 可能会被 打断、延迟、重做。Commit 阶段：Commit 依旧是一次性、不可中断的。但由于 Render 被延迟，Commit 也可能推迟发生。用户可能先看到旧 UI（输入框响应快），再看到新 UI（列表刷新）</li>
</ul>`,`<ul>
<li>useDeferredValue: Render 阶段被拆分成两批，Commit 阶段也可能分成多次。
<ul>
<li>对 Render / Commit 的影响:Render 阶段：依赖 deferredValue 的组件渲染会延后。React 先 Render 其他部分 → Commit → UI 更新一部分。再 Render 依赖 deferredValue 的部分 → Commit → UI 补齐。Commit 阶段：可能出现 多次 Commit：先 Commit 高优先级的 UI（比如输入框内容）。再 Commit 低优先级的 UI（比如搜索结果）。</li>
</ul>
</li>
</ul>`,`<ul>
<li>Fiber 架构是机制，Concurrent Mode 是策略。
<ul>
<li>Fiber 提供了能力，并发模式利用了这些能力。</li>
<li>具体来说：
<ul>
<li>Fiber 提供能力：
<ul>
<li>将递归变成可中断的循环（time slicing）</li>
<li>支持任务优先级和调度</li>
<li>双 Fiber 树切换，支持渐进渲染</li>
</ul>
</li>
<li>Concurrent Mode 使用这些能力：
<ul>
<li>通过 useTransition 把某些更新标记为低优先级 → Fiber 可以延迟它们</li>
<li>通过 Suspense 控制 UI 的显示顺序 → Fiber 可以中断和恢复渲染</li>
<li>通过 startTransition、useDeferredValue 等 Hook → 利用 Fiber 的调度机制分配任务</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>`,`<ul>
<li>Fiber 是基础架构：解决了 React 渲染不可中断的问题。
<ul>
<li>Concurrent Mode 是应用层能力：利用 Fiber 提供的可中断渲染和任务调度，实现并发渲染、优先级管理和流畅的用户体验。
没有 Fiber，就没有 Concurrent Mode。</li>
</ul>
</li>
</ul>`],reference:"/myKMS/knowledge/framework/react#_13-如何理解-react-fiber-架构",source:"/myKMS/knowledge/framework/react"},{id:135,question:"vue3 diff 算法 与react diff算法",answer:["共同点:",`| 特性                | Vue3 与 React 都有             |
| ----------------- | --------------------------- |
| **同层比较**          | 只比较同一层级节点，不考虑跨层级移动          |
| **类型判断复用**        | 节点类型相同则复用并继续比较子节点，不同则直接销毁重建 |
| **key 辅助列表 diff** | 通过 key 判断列表节点是否可复用、是否需要移动   |
| **复杂度 O(n)**      | 放弃最优解，追求可接受的线性时间复杂度         |`,"差异点:",`| 方面             | Vue 3                                                                                    | React                                                     |
| -------------- | ---------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| **整体架构**       | 运行时 + 编译时框架，编译器能在构建阶段分析模板，生成优化提示（PatchFlag）。<br>Diff 阶段根据这些标记跳过大部分无需更新的节点。               | 纯运行时框架，无法在编译期静态分析 JSX，只能在运行时比较新旧 VDOM。                    |
| **静态节点处理**     | **静态提升**：模板中完全静态的节点会在编译时提取出来，只创建一次，不参与 diff。<br>**PatchFlag** 精确标记动态绑定的属性或子节点，使得更新更有针对性。 | 没有静态提升，所有节点每次 render 都要重新比较。可以通过 \`memo\`、\`useMemo\` 等手动优化。  |
| **列表 diff 策略** | 使用 **双端指针算法（双指针 + 最长递增子序列 LIS）** 来计算最小移动次数。<br>即先比较两端相同节点，然后对中间乱序部分用 LIS 算法最小化 DOM 移动。   | 通过单向遍历 + key 映射来识别需要移动、插入、删除的节点，没有使用 LIS，只保证最小复用，不一定最少移动。 |
| **更新粒度**       | 模板编译后知道哪些部分是动态的，只 diff 有变化的部分 → 更新粒度细。                                                   | 组件 render 后得到新的 VDOM 树，需遍历整个子树 → 更新粒度较粗。                  |
| **组件更新策略**     | 有**响应式系统**（依赖收集 + effect），组件只会在依赖变化时重新渲染，减少 diff 次数。                                     | 没有内置响应式，组件 render 受父组件传入 props 或 state 改变驱动。              |
| **fiber 架构**   | Vue 3 仍是递归遍历 vnode，使用位运算优化，但没有 fiber 异步可中断更新。                                            | React 16+ 使用 Fiber，将 diff 拆分为可中断的单元，实现并发调度。               |`],answerHtml:["<p>共同点:</p>",`<table tabindex="0">
<thead>
<tr>
<th>特性</th>
<th>Vue3 与 React 都有</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>同层比较</strong></td>
<td>只比较同一层级节点，不考虑跨层级移动</td>
</tr>
<tr>
<td><strong>类型判断复用</strong></td>
<td>节点类型相同则复用并继续比较子节点，不同则直接销毁重建</td>
</tr>
<tr>
<td><strong>key 辅助列表 diff</strong></td>
<td>通过 key 判断列表节点是否可复用、是否需要移动</td>
</tr>
<tr>
<td><strong>复杂度 O(n)</strong></td>
<td>放弃最优解，追求可接受的线性时间复杂度</td>
</tr>
</tbody>
</table>`,"<p>差异点:</p>",`<table tabindex="0">
<thead>
<tr>
<th>方面</th>
<th>Vue 3</th>
<th>React</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>整体架构</strong></td>
<td>运行时 + 编译时框架，编译器能在构建阶段分析模板，生成优化提示（PatchFlag）。<br>Diff 阶段根据这些标记跳过大部分无需更新的节点。</td>
<td>纯运行时框架，无法在编译期静态分析 JSX，只能在运行时比较新旧 VDOM。</td>
</tr>
<tr>
<td><strong>静态节点处理</strong></td>
<td><strong>静态提升</strong>：模板中完全静态的节点会在编译时提取出来，只创建一次，不参与 diff。<br><strong>PatchFlag</strong> 精确标记动态绑定的属性或子节点，使得更新更有针对性。</td>
<td>没有静态提升，所有节点每次 render 都要重新比较。可以通过 <code>memo</code>、<code>useMemo</code> 等手动优化。</td>
</tr>
<tr>
<td><strong>列表 diff 策略</strong></td>
<td>使用 <strong>双端指针算法（双指针 + 最长递增子序列 LIS）</strong> 来计算最小移动次数。<br>即先比较两端相同节点，然后对中间乱序部分用 LIS 算法最小化 DOM 移动。</td>
<td>通过单向遍历 + key 映射来识别需要移动、插入、删除的节点，没有使用 LIS，只保证最小复用，不一定最少移动。</td>
</tr>
<tr>
<td><strong>更新粒度</strong></td>
<td>模板编译后知道哪些部分是动态的，只 diff 有变化的部分 → 更新粒度细。</td>
<td>组件 render 后得到新的 VDOM 树，需遍历整个子树 → 更新粒度较粗。</td>
</tr>
<tr>
<td><strong>组件更新策略</strong></td>
<td>有<strong>响应式系统</strong>（依赖收集 + effect），组件只会在依赖变化时重新渲染，减少 diff 次数。</td>
<td>没有内置响应式，组件 render 受父组件传入 props 或 state 改变驱动。</td>
</tr>
<tr>
<td><strong>fiber 架构</strong></td>
<td>Vue 3 仍是递归遍历 vnode，使用位运算优化，但没有 fiber 异步可中断更新。</td>
<td>React 16+ 使用 Fiber，将 diff 拆分为可中断的单元，实现并发调度。</td>
</tr>
</tbody>
</table>`],reference:"/myKMS/knowledge/framework/react#_14-vue3-diff-算法-与react-diff算法",source:"/myKMS/knowledge/framework/react"},{id:136,question:"React 事件",answer:[`React 事件系统是 React 为了实现 跨浏览器一致性、性能优化、与 Fiber 协调 而构建的一套合成事件机制（Synthetic Events）。
它不是直接把事件监听器绑定在 DOM 节点上，而是在内部做了一层封装。`,`- 跨浏览器兼容
- 性能优化（事件委托）
  - 直接给大量子节点绑定事件会消耗内存、频繁注册/销毁。
  - React 把事件委托到根容器上（React17 前是 document，React17+ 是组件挂载的根 DOM 节点）。
- 与 Fiber 更新配合
  - React 需要在 Reconciliation / Commit 阶段动态添加或删除事件，同时可以在事件回调中控制批量更新（batching）。`,`合成事件（SyntheticEvent）
React 在触发事件时，会把原生事件包装成一个合成事件对象，它：`,`- 提供与原生事件相同的属性（target、type、clientX…），保证跨浏览器一致。
- 对象来自 React 的事件池（event pool），性能优化：`,"React 渲染时不会直接给 button 注册原生 onclick，而是：",`- 在根容器上注册一次统一的 click 监听器。
- 保存 button 对应的回调到 Fiber 节点的 props 中。`,"用户点击 button 时：",`- 原生事件冒泡到根容器。
- React 根监听器捕获到事件，根据事件的 target 找到对应 Fiber 节点。
- 按虚拟 DOM 树的层级依次触发相关的合成事件回调。`,"👉 好处：减少原生事件绑定次数 + 跨浏览器统一行为。",`- React17 之前：统一把事件绑定到 document。
- React17 之后：事件绑定改为绑定在根容器 DOM 节点（如 root），避免多个 React 应用之间的事件冲突，更易与原生事件混用。
- React 在合成事件回调中会自动开启批处理（batching），把多次 setState 合并为一次渲染更新：`],answerHtml:[`<p>React 事件系统是 React 为了实现 跨浏览器一致性、性能优化、与 Fiber 协调 而构建的一套合成事件机制（Synthetic Events）。
它不是直接把事件监听器绑定在 DOM 节点上，而是在内部做了一层封装。</p>`,`<ul>
<li>跨浏览器兼容</li>
<li>性能优化（事件委托）
<ul>
<li>直接给大量子节点绑定事件会消耗内存、频繁注册/销毁。</li>
<li>React 把事件委托到根容器上（React17 前是 document，React17+ 是组件挂载的根 DOM 节点）。</li>
</ul>
</li>
<li>与 Fiber 更新配合
<ul>
<li>React 需要在 Reconciliation / Commit 阶段动态添加或删除事件，同时可以在事件回调中控制批量更新（batching）。</li>
</ul>
</li>
</ul>`,`<p>合成事件（SyntheticEvent）
React 在触发事件时，会把原生事件包装成一个合成事件对象，它：</p>`,`<ul>
<li>提供与原生事件相同的属性（target、type、clientX…），保证跨浏览器一致。</li>
<li>对象来自 React 的事件池（event pool），性能优化：</li>
</ul>`,"<p>React 渲染时不会直接给 button 注册原生 onclick，而是：</p>",`<ul>
<li>在根容器上注册一次统一的 click 监听器。</li>
<li>保存 button 对应的回调到 Fiber 节点的 props 中。</li>
</ul>`,"<p>用户点击 button 时：</p>",`<ul>
<li>原生事件冒泡到根容器。</li>
<li>React 根监听器捕获到事件，根据事件的 target 找到对应 Fiber 节点。</li>
<li>按虚拟 DOM 树的层级依次触发相关的合成事件回调。</li>
</ul>`,"<p>👉 好处：减少原生事件绑定次数 + 跨浏览器统一行为。</p>",`<ul>
<li>React17 之前：统一把事件绑定到 document。</li>
<li>React17 之后：事件绑定改为绑定在根容器 DOM 节点（如 root），避免多个 React 应用之间的事件冲突，更易与原生事件混用。</li>
<li>React 在合成事件回调中会自动开启批处理（batching），把多次 setState 合并为一次渲染更新：</li>
</ul>`],reference:"/myKMS/knowledge/framework/react#_15-react-事件",source:"/myKMS/knowledge/framework/react"},{id:137,question:"React batchUpdate 机制",answer:["React 的 batchUpdate（批处理更新）机制 是一种优化策略，旨在将多个状态更新合并为一次渲染，减少不必要的组件重新渲染次数，从而提高性能。","核心机制","1. 异步合并更新 当在 同一执行上下文（如同一个事件处理函数、生命周期方法或 React 合成事件）中多次调用状态更新（如 setState、useState 的 setter 函数），React 不会立即触发渲染，而是将多个更新收集到一个队列中，最终合并为一次更新，统一计算新状态并渲染。","2. 更新队列 React 内部维护一个更新队列。在触发更新的代码块中，所有状态变更会被暂存到队列，直到代码执行完毕，React 才会一次性处理队列中的所有更新，生成新的虚拟 DOM，并通过 Diff 算法高效更新真实 DOM。","触发批处理的场景",`- React 合成事件 如 onClick、onChange 等事件处理函数中的多次状态更新会自动批处理。
- React 生命周期函数
- React 18+ 的自动批处理增强 React 18 引入 createRoot 后，即使在异步操作（如 setTimeout、Promise、原生事件回调）中的更新也会自动批处理：`,"绕过批处理的场景:",`- React 17 及之前的异步代码 在 setTimeout、Promise 或原生事件回调中的更新默认不会批处理，每次 setState 触发一次渲染：
- 手动强制同步更新 使用 flushSync（React 18+）可强制立即更新，绕过批处理`,"设计目的","- 性能优化 避免频繁的 DOM 操作，减少浏览器重绘和回流，提升应用性能。","- 状态一致性 确保在同一个上下文中多次状态变更后，组件最终基于最新的状态值渲染，避免中间状态导致的 UI 不一致。"],answerHtml:["<p>React 的 batchUpdate（批处理更新）机制 是一种优化策略，旨在将多个状态更新合并为一次渲染，减少不必要的组件重新渲染次数，从而提高性能。</p>","<p>核心机制</p>",`<ol>
<li>异步合并更新 当在 同一执行上下文（如同一个事件处理函数、生命周期方法或 React 合成事件）中多次调用状态更新（如 setState、useState 的 setter 函数），React 不会立即触发渲染，而是将多个更新收集到一个队列中，最终合并为一次更新，统一计算新状态并渲染。</li>
</ol>`,`<ol start="2">
<li>更新队列 React 内部维护一个更新队列。在触发更新的代码块中，所有状态变更会被暂存到队列，直到代码执行完毕，React 才会一次性处理队列中的所有更新，生成新的虚拟 DOM，并通过 Diff 算法高效更新真实 DOM。</li>
</ol>`,"<p>触发批处理的场景</p>",`<ul>
<li>React 合成事件 如 onClick、onChange 等事件处理函数中的多次状态更新会自动批处理。</li>
<li>React 生命周期函数</li>
<li>React 18+ 的自动批处理增强 React 18 引入 createRoot 后，即使在异步操作（如 setTimeout、Promise、原生事件回调）中的更新也会自动批处理：</li>
</ul>`,"<p>绕过批处理的场景:</p>",`<ul>
<li>React 17 及之前的异步代码 在 setTimeout、Promise 或原生事件回调中的更新默认不会批处理，每次 setState 触发一次渲染：</li>
<li>手动强制同步更新 使用 flushSync（React 18+）可强制立即更新，绕过批处理</li>
</ul>`,"<p>设计目的</p>",`<ul>
<li>性能优化 避免频繁的 DOM 操作，减少浏览器重绘和回流，提升应用性能。</li>
</ul>`,`<ul>
<li>状态一致性 确保在同一个上下文中多次状态变更后，组件最终基于最新的状态值渲染，避免中间状态导致的 UI 不一致。</li>
</ul>`],reference:"/myKMS/knowledge/framework/react#_16-react-batchupdate-机制",source:"/myKMS/knowledge/framework/react"},{id:138,question:"React concurrency 并发机制是什么, 怎么体现的",answer:[`1. 背景：为什么需要并发机制
在 React16 之前（Stack Reconciler）：`,`- React 渲染是 同步阻塞式 的：
  - 一旦开始调和（reconcile），就会一路递归下去直到渲染完成。
  - 如果组件树很大，渲染会长时间占用主线程。
  - 期间浏览器不能响应用户输入、动画、滚动 → 卡顿（jank）。`,"在现代 Web 应用中：",`- 用户交互、网络响应、动画等都在争夺主线程。
- 我们希望 渲染是可中断、可调度、分优先级的。`,"👉 Concurrent Rendering（并发渲染） 就是 React Fiber 在 16 以后引入的核心能力，真正实现在 渲染过程中可以打断、暂停、恢复、丢弃。","旧:","```\nupdate → render → commit\n         (整棵树一次性调和)\n```","新:","```\nupdate → render(可被打断、分段) → commit(同步)\n```",`- render 阶段是可中断的：React Fiber 允许每次只渲染一小段，然后把控制权交回浏览器。
- commit 阶段是同步的：最终将变更应用到 DOM 的步骤必须是原子的。
👉 这样，长时间的渲染任务可以被拆分成多个“小工作单元”，在浏览器有空闲时再继续。`,"2. Fiber 是并发的基础","Fiber 是 React 16 引入的数据结构与调度模型：",`- 每个组件对应一个 Fiber 节点。
- 通过 Fiber 链表可以实现 增量渲染（incremental rendering）。
- 支持为不同更新分配 优先级（lanes）。`,"渲染调度大致流程：",`- 把更新放入任务队列（Fiber root）。
- 按优先级选择下一个任务。
- 每次工作单元渲染后检查是否需要让出主线程（shouldYield）。`,"如果需要，先交还浏览器，下次空闲时再继续。","3. 并发机制的工作原理：",`- **时间分片（Time Slicing）**： React 将渲染任务拆分为多个小片段，每个片段在主线程空闲时执行。这使得浏览器可以在渲染过程中处理用户输入和其他高优先级任务，避免长时间的渲染阻塞用户交互。
- **优先级调度（Priority Scheduling）**： React 为不同的更新分配不同的优先级。高优先级的更新（如用户输入）会被优先处理，而低优先级的更新（如数据预加载）可以在空闲时处理。
- **可中断渲染（Interruptible Rendering）**： 在并发模式下，React 可以中断当前的渲染任务，处理更高优先级的任务，然后再恢复之前的渲染。这确保了应用在长时间渲染过程中仍能保持响应性。`,"4. 并发机制的优势：",`- **提升响应性**： 通过优先处理高优先级任务，React 能够更快地响应用户输入，提升用户体验。
- **优化性能**： 将渲染任务拆分为小片段，避免长时间的渲染阻塞，提升应用的整体性能。
- **更好的资源利用**： 在主线程空闲时处理低优先级任务，充分利用系统资源。`,"Concurrency 的体现","React18 默认开启了并发特性（通过 createRoot）。","常见体现：",`- 可中断渲染
  - 当长列表渲染时：
    - 在同步模式下，渲染过程会一次性阻塞线程。
    - 在并发模式下，如果用户在渲染中点击了按钮，React 会暂停当前渲染，优先处理更高优先级的事件（如点击），然后再继续剩下的渲染
- startTransition
  有些更新是紧急的（urgent）（如输入框输入），有些是非紧急的（non-urgent）（如搜索结果列表更新）。
  - startTransition 把里面的更新标记为低优先级，可以被打断
- useDeferredValue
  - 延迟某些状态的更新，让界面先响应用户交互，再处理耗时渲染。
- Suspense
并发机制让 React 能够更好地协调数据请求和组件加载，例如：
  - 当异步数据尚未返回时，可以先显示 fallback，再在数据准备好后无缝渲染。
- React18 的 automatic batching
  - 在并发模式下，即便在 Promise 回调、setTimeout 中，也会自动批处理多次 setState，减少重复渲染。`,`**React Concurrency 是通过 Fiber 架构和调度器实现的一套可中断、可恢复、可优先级调度的渲染机制。**
它让 React 可以更好地响应用户交互，避免长时间阻塞主线程，并通过 startTransition、useDeferredValue、Suspense 等 API 显式利用这一能力。
并发机制不是“多线程”，而是让 React 的渲染任务能与浏览器任务“交替进行”，从而显著提升用户体验。`,"| 特性    | 同步模式（legacy）      | 并发模式（concurrent）                                           |\n| ----- | ----------------- | ---------------------------------------------------------- |\n| 渲染    | 一次性同步完成           | 可中断、可恢复、可丢弃                                                |\n| 优先级   | 不区分               | 有优先级，先处理紧急任务                                               |\n| 批处理   | 仅事件回调中            | 全局自动批处理                                                    |\n| 交互流畅度 | 易卡顿               | 更流畅，响应更及时                                                  |\n| API   | `ReactDOM.render` | `ReactDOM.createRoot`，`startTransition`，`useDeferredValue` |"],answerHtml:[`<ol>
<li>背景：为什么需要并发机制
在 React16 之前（Stack Reconciler）：</li>
</ol>`,`<ul>
<li>React 渲染是 同步阻塞式 的：
<ul>
<li>一旦开始调和（reconcile），就会一路递归下去直到渲染完成。</li>
<li>如果组件树很大，渲染会长时间占用主线程。</li>
<li>期间浏览器不能响应用户输入、动画、滚动 → 卡顿（jank）。</li>
</ul>
</li>
</ul>`,"<p>在现代 Web 应用中：</p>",`<ul>
<li>用户交互、网络响应、动画等都在争夺主线程。</li>
<li>我们希望 渲染是可中断、可调度、分优先级的。</li>
</ul>`,"<p>👉 Concurrent Rendering（并发渲染） 就是 React Fiber 在 16 以后引入的核心能力，真正实现在 渲染过程中可以打断、暂停、恢复、丢弃。</p>","<p>旧:</p>",`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><!--::markdown-it-async::9cag6r1i7k7o4jgyb3ioud::--><code>update → render → commit
         (整棵树一次性调和)</code></pre>
</div>`,"<p>新:</p>",`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><!--::markdown-it-async::10n359g854gm61i71ebip8g::--><code>update → render(可被打断、分段) → commit(同步)</code></pre>
</div>`,`<ul>
<li>render 阶段是可中断的：React Fiber 允许每次只渲染一小段，然后把控制权交回浏览器。</li>
<li>commit 阶段是同步的：最终将变更应用到 DOM 的步骤必须是原子的。
👉 这样，长时间的渲染任务可以被拆分成多个“小工作单元”，在浏览器有空闲时再继续。</li>
</ul>`,`<ol start="2">
<li>Fiber 是并发的基础</li>
</ol>`,"<p>Fiber 是 React 16 引入的数据结构与调度模型：</p>",`<ul>
<li>每个组件对应一个 Fiber 节点。</li>
<li>通过 Fiber 链表可以实现 增量渲染（incremental rendering）。</li>
<li>支持为不同更新分配 优先级（lanes）。</li>
</ul>`,"<p>渲染调度大致流程：</p>",`<ul>
<li>把更新放入任务队列（Fiber root）。</li>
<li>按优先级选择下一个任务。</li>
<li>每次工作单元渲染后检查是否需要让出主线程（shouldYield）。</li>
</ul>`,"<p>如果需要，先交还浏览器，下次空闲时再继续。</p>",`<ol start="3">
<li>并发机制的工作原理：</li>
</ol>`,`<ul>
<li><strong>时间分片（Time Slicing）</strong>： React 将渲染任务拆分为多个小片段，每个片段在主线程空闲时执行。这使得浏览器可以在渲染过程中处理用户输入和其他高优先级任务，避免长时间的渲染阻塞用户交互。</li>
<li><strong>优先级调度（Priority Scheduling）</strong>： React 为不同的更新分配不同的优先级。高优先级的更新（如用户输入）会被优先处理，而低优先级的更新（如数据预加载）可以在空闲时处理。</li>
<li><strong>可中断渲染（Interruptible Rendering）</strong>： 在并发模式下，React 可以中断当前的渲染任务，处理更高优先级的任务，然后再恢复之前的渲染。这确保了应用在长时间渲染过程中仍能保持响应性。</li>
</ul>`,`<ol start="4">
<li>并发机制的优势：</li>
</ol>`,`<ul>
<li><strong>提升响应性</strong>： 通过优先处理高优先级任务，React 能够更快地响应用户输入，提升用户体验。</li>
<li><strong>优化性能</strong>： 将渲染任务拆分为小片段，避免长时间的渲染阻塞，提升应用的整体性能。</li>
<li><strong>更好的资源利用</strong>： 在主线程空闲时处理低优先级任务，充分利用系统资源。</li>
</ul>`,"<p>Concurrency 的体现</p>","<p>React18 默认开启了并发特性（通过 createRoot）。</p>","<p>常见体现：</p>",`<ul>
<li>可中断渲染
<ul>
<li>当长列表渲染时：
<ul>
<li>在同步模式下，渲染过程会一次性阻塞线程。</li>
<li>在并发模式下，如果用户在渲染中点击了按钮，React 会暂停当前渲染，优先处理更高优先级的事件（如点击），然后再继续剩下的渲染</li>
</ul>
</li>
</ul>
</li>
<li>startTransition
有些更新是紧急的（urgent）（如输入框输入），有些是非紧急的（non-urgent）（如搜索结果列表更新）。
<ul>
<li>startTransition 把里面的更新标记为低优先级，可以被打断</li>
</ul>
</li>
<li>useDeferredValue
<ul>
<li>延迟某些状态的更新，让界面先响应用户交互，再处理耗时渲染。</li>
</ul>
</li>
<li>Suspense
并发机制让 React 能够更好地协调数据请求和组件加载，例如：
<ul>
<li>当异步数据尚未返回时，可以先显示 fallback，再在数据准备好后无缝渲染。</li>
</ul>
</li>
<li>React18 的 automatic batching
<ul>
<li>在并发模式下，即便在 Promise 回调、setTimeout 中，也会自动批处理多次 setState，减少重复渲染。</li>
</ul>
</li>
</ul>`,`<p><strong>React Concurrency 是通过 Fiber 架构和调度器实现的一套可中断、可恢复、可优先级调度的渲染机制。</strong>
它让 React 可以更好地响应用户交互，避免长时间阻塞主线程，并通过 startTransition、useDeferredValue、Suspense 等 API 显式利用这一能力。
并发机制不是“多线程”，而是让 React 的渲染任务能与浏览器任务“交替进行”，从而显著提升用户体验。</p>`,`<table tabindex="0">
<thead>
<tr>
<th>特性</th>
<th>同步模式（legacy）</th>
<th>并发模式（concurrent）</th>
</tr>
</thead>
<tbody>
<tr>
<td>渲染</td>
<td>一次性同步完成</td>
<td>可中断、可恢复、可丢弃</td>
</tr>
<tr>
<td>优先级</td>
<td>不区分</td>
<td>有优先级，先处理紧急任务</td>
</tr>
<tr>
<td>批处理</td>
<td>仅事件回调中</td>
<td>全局自动批处理</td>
</tr>
<tr>
<td>交互流畅度</td>
<td>易卡顿</td>
<td>更流畅，响应更及时</td>
</tr>
<tr>
<td>API</td>
<td><code>ReactDOM.render</code></td>
<td><code>ReactDOM.createRoot</code>，<code>startTransition</code>，<code>useDeferredValue</code></td>
</tr>
</tbody>
</table>`],reference:"/myKMS/knowledge/framework/react#_17-react-concurrency-并发机制是什么-怎么体现的",source:"/myKMS/knowledge/framework/react"},{id:139,question:"为何 Hooks 不能放在条件或循环之内？",answer:["一个组件中的 hook 会以链表的形式串起来， FiberNode 的 memoizedState 中保存了 Hooks 链表中的第一个 Hook。","在更新时，会复用之前的 Hook，如果通过了条件或循环语句，增加或者删除 hooks，在复用 hooks 过程中，会产生复用 hooks状态和当前 hooks 不一致的问题。",`Hooks 本质上是 函数组件的状态机 + 调度机制。
核心思想:
1. React 内部维护了一个 hooks 数组（链表），存放当前组件的所有 Hook 状态。
2. 每次渲染时，React 会按 调用顺序 执行 Hook。
3. useState、useEffect 等 Hook 本质上就是操作 hooks 数组对应的节点。`,"自定义 Hook：就是函数，里面可以用内置 Hook 来组合逻辑。"],answerHtml:["<p>一个组件中的 hook 会以链表的形式串起来， FiberNode 的 memoizedState 中保存了 Hooks 链表中的第一个 Hook。</p>","<p>在更新时，会复用之前的 Hook，如果通过了条件或循环语句，增加或者删除 hooks，在复用 hooks 过程中，会产生复用 hooks状态和当前 hooks 不一致的问题。</p>",`<p>Hooks 本质上是 函数组件的状态机 + 调度机制。
核心思想:</p>
<ol>
<li>React 内部维护了一个 hooks 数组（链表），存放当前组件的所有 Hook 状态。</li>
<li>每次渲染时，React 会按 调用顺序 执行 Hook。</li>
<li>useState、useEffect 等 Hook 本质上就是操作 hooks 数组对应的节点。</li>
</ol>`,"<p>自定义 Hook：就是函数，里面可以用内置 Hook 来组合逻辑。</p>"],reference:"/myKMS/knowledge/framework/react#_18-为何-hooks-不能放在条件或循环之内",source:"/myKMS/knowledge/framework/react"},{id:140,question:"useEffect 的底层是如何实现的",answer:["useEffect 的角色",`- useEffect 是一种 副作用 Hook，用来在 DOM 更新（commit）后 执行副作用逻辑，例如数据请求、订阅、手动操作 DOM 等。
- React 把副作用与渲染逻辑分离，保证渲染过程（render 阶段）是纯函数、可中断、可回溯的，而副作用统一推迟到 commit 阶段。`,"useEffect 依赖变化的处理",`- 依赖数组的比较使用 Object.is()，只有依赖变化时才重新执行 useEffect。
- 更新阶段，React 遍历旧 effect，并先执行清理函数，然后再执行新的 effect。`,"React 渲染更新分为两个阶段：",`| 阶段            | 说明                      | 是否允许副作用               |
| ------------- | ----------------------- | --------------------- |
| **Render 阶段** | 计算出新的 Fiber 树（可以被打断、重做） | ❌ 不允许（保持纯函数）          |
| **Commit 阶段** | 把变更提交到 DOM（同步）          | ✅ 执行副作用（包括 useEffect） |`,"所以：",`- useEffect 中注册的回调 不会在 render 阶段立即执行；
- 而是记录在 Fiber 节点上，等到 commit 阶段 DOM 更新完成后，浏览器完成绘制后（宏任务后）再异步调用。`,"在 Fiber 节点上，每个函数组件会维护一个 **Hook 链表**：",`\`\`\`
type Hook = {
  memoizedState: any,        // 保存副作用依赖数组
  next: Hook | null          // 指向下一个 Hook
}

type Effect = {
  create: () => (() => void) | void  // 副作用函数
  destroy: (() => void) | void       // 清理函数
  deps: any[] | null                 // 依赖数组
  tag: number                        // 副作用标记
  next: Effect | null                // 形成循环链表
}
\`\`\``,`- 每个 useEffect 会创建一个 Hook 节点。
- 在这个 Hook 上保存一个 Effect 对象。
- 所有 Effect 通过循环链表挂在 Fiber 节点的 updateQueue 上，方便 commit 阶段统一处理。`,`调用 useEffect 时发生了什么
当组件函数执行到 useEffect 时（位于 render 阶段）：`,`- 1. React 通过 mountEffect（首渲染）或 updateEffect（更新）来处理。
    它不会立刻调用副作用函数，而是：
  - 保存 { create, deps } 到 Hook 中；
  - 打上 Passive 副作用标记；
- 2. 如果依赖数组发生变化，还会记录需要销毁上一次副作用。
- 3. 继续执行后续 Hook，直到组件渲染完毕。
👉 Render 阶段结束后，React 已经知道哪些 Effect 需要执行或清理。`,`Commit 阶段执行流程
在 commit 阶段，React 主要做两件事：`,`1）DOM 更新
  完成 Fiber 树标记的增删改 DOM 操作。`,`2）副作用处理
  在 DOM 更新完成后：
    - React 会遍历所有带有 Passive 标记的 Fiber 节点。
    - 对每个 Effect：
      - 如果有上一次的 destroy 函数 → 先执行清理。
      - 调用当前 create 副作用函数 → 并把返回值保存为新的 destroy。
    - 这一过程默认使用 scheduler 异步调度（相当于 setTimeout），保证副作用不会阻塞浏览器绘制。`,"// seEffect 与 useLayoutEffect 区别","| Hook              | 执行时机                          | 常见用途                |\n| ----------------- | ----------------------------- | ------------------- |\n| `useLayoutEffect` | commit 阶段 DOM 变更后、浏览器绘制前，同步执行 | 需要读取或修改布局的操作（如测量尺寸） |\n| `useEffect`       | 浏览器绘制后异步执行                    | 数据请求、订阅、日志等不会影响首屏绘制 |","**总结**（面试要点）",`- useEffect 本质是 在 Fiber 上注册副作用对象。
- 副作用在 commit 阶段（DOM 更新后）按需异步执行。
- 通过依赖数组 deps 判断是否重新运行或跳过。
- React 通过链表管理所有 Hook 和 Effect，方便批量处理。
- useEffect 保证 render 阶段纯净，而副作用延迟到合适时机执行。`],answerHtml:["<p>useEffect 的角色</p>",`<ul>
<li>useEffect 是一种 副作用 Hook，用来在 DOM 更新（commit）后 执行副作用逻辑，例如数据请求、订阅、手动操作 DOM 等。</li>
<li>React 把副作用与渲染逻辑分离，保证渲染过程（render 阶段）是纯函数、可中断、可回溯的，而副作用统一推迟到 commit 阶段。</li>
</ul>`,"<p>useEffect 依赖变化的处理</p>",`<ul>
<li>依赖数组的比较使用 Object.is()，只有依赖变化时才重新执行 useEffect。</li>
<li>更新阶段，React 遍历旧 effect，并先执行清理函数，然后再执行新的 effect。</li>
</ul>`,"<p>React 渲染更新分为两个阶段：</p>",`<table tabindex="0">
<thead>
<tr>
<th>阶段</th>
<th>说明</th>
<th>是否允许副作用</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Render 阶段</strong></td>
<td>计算出新的 Fiber 树（可以被打断、重做）</td>
<td>❌ 不允许（保持纯函数）</td>
</tr>
<tr>
<td><strong>Commit 阶段</strong></td>
<td>把变更提交到 DOM（同步）</td>
<td>✅ 执行副作用（包括 useEffect）</td>
</tr>
</tbody>
</table>`,"<p>所以：</p>",`<ul>
<li>useEffect 中注册的回调 不会在 render 阶段立即执行；</li>
<li>而是记录在 Fiber 节点上，等到 commit 阶段 DOM 更新完成后，浏览器完成绘制后（宏任务后）再异步调用。</li>
</ul>`,"<p>在 Fiber 节点上，每个函数组件会维护一个 <strong>Hook 链表</strong>：</p>",`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><!--::markdown-it-async::j68h9l3p9mpqaasnhicnh9::--><code>type Hook = {
  memoizedState: any,        // 保存副作用依赖数组
  next: Hook | null          // 指向下一个 Hook
}

type Effect = {
  create: () =&gt; (() =&gt; void) | void  // 副作用函数
  destroy: (() =&gt; void) | void       // 清理函数
  deps: any[] | null                 // 依赖数组
  tag: number                        // 副作用标记
  next: Effect | null                // 形成循环链表
}</code></pre>
</div>`,`<ul>
<li>每个 useEffect 会创建一个 Hook 节点。</li>
<li>在这个 Hook 上保存一个 Effect 对象。</li>
<li>所有 Effect 通过循环链表挂在 Fiber 节点的 updateQueue 上，方便 commit 阶段统一处理。</li>
</ul>`,`<p>调用 useEffect 时发生了什么
当组件函数执行到 useEffect 时（位于 render 阶段）：</p>`,`<ul>
<li>
<ol>
<li>React 通过 mountEffect（首渲染）或 updateEffect（更新）来处理。
它不会立刻调用副作用函数，而是：</li>
</ol>
<ul>
<li>保存 { create, deps } 到 Hook 中；</li>
<li>打上 Passive 副作用标记；</li>
</ul>
</li>
<li>
<ol start="2">
<li>如果依赖数组发生变化，还会记录需要销毁上一次副作用。</li>
</ol>
</li>
<li>
<ol start="3">
<li>继续执行后续 Hook，直到组件渲染完毕。
👉 Render 阶段结束后，React 已经知道哪些 Effect 需要执行或清理。</li>
</ol>
</li>
</ul>`,`<p>Commit 阶段执行流程
在 commit 阶段，React 主要做两件事：</p>`,`<p>1）DOM 更新
完成 Fiber 树标记的增删改 DOM 操作。</p>`,`<p>2）副作用处理
在 DOM 更新完成后：
- React 会遍历所有带有 Passive 标记的 Fiber 节点。
- 对每个 Effect：
- 如果有上一次的 destroy 函数 → 先执行清理。
- 调用当前 create 副作用函数 → 并把返回值保存为新的 destroy。
- 这一过程默认使用 scheduler 异步调度（相当于 setTimeout），保证副作用不会阻塞浏览器绘制。</p>`,"<p>// seEffect 与 useLayoutEffect 区别</p>",`<table tabindex="0">
<thead>
<tr>
<th>Hook</th>
<th>执行时机</th>
<th>常见用途</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>useLayoutEffect</code></td>
<td>commit 阶段 DOM 变更后、浏览器绘制前，同步执行</td>
<td>需要读取或修改布局的操作（如测量尺寸）</td>
</tr>
<tr>
<td><code>useEffect</code></td>
<td>浏览器绘制后异步执行</td>
<td>数据请求、订阅、日志等不会影响首屏绘制</td>
</tr>
</tbody>
</table>`,"<p><strong>总结</strong>（面试要点）</p>",`<ul>
<li>useEffect 本质是 在 Fiber 上注册副作用对象。</li>
<li>副作用在 commit 阶段（DOM 更新后）按需异步执行。</li>
<li>通过依赖数组 deps 判断是否重新运行或跳过。</li>
<li>React 通过链表管理所有 Hook 和 Effect，方便批量处理。</li>
<li>useEffect 保证 render 阶段纯净，而副作用延迟到合适时机执行。</li>
</ul>`],reference:"/myKMS/knowledge/framework/react#_19-useeffect-的底层是如何实现的",source:"/myKMS/knowledge/framework/react"},{id:141,question:"React 组件渲染和更新的全过程",answer:[`React 组件的渲染和更新过程涉及多个阶段，包括 **初始化、渲染、协调、提交、清理** 等
以下是 React 组件渲染和更新的全过程，结合源码逻辑和关键步骤进行详细分析。`,"1. 整体流程概述 React 的渲染和更新过程可以分为以下几个阶段：",`- 初始化阶段：创建 Fiber 树和 Hooks 链表。
- 渲染阶段：生成新的虚拟 DOM（Fiber 树）。
- 协调阶段：对比新旧 Fiber 树，找出需要更新的部分。
- 提交阶段：将更新应用到真实 DOM。
- 清理阶段：重置全局变量，准备下一次更新。`,"2. 详细流程分析","（1）初始化阶段",`- 触发条件：组件首次渲染或状态/属性更新。
    - 关键函数：render、createRoot、scheduleUpdateOnFiber。
    - 逻辑：
      - 通过 ReactDOM.render 或 createRoot 初始化应用。
      - 创建根 Fiber 节点（HostRoot）。
      - 调用 scheduleUpdateOnFiber，将更新任务加入调度队列。`,"（2）渲染阶段",`- 触发条件：调度器开始执行任务。
    - 关键函数：performSyncWorkOnRoot、beginWork、renderWithHooks。
    - 逻辑：
      - 调用 performSyncWorkOnRoot，开始渲染任务。
      - 调用 beginWork，递归处理 Fiber 节点。
      - 对于函数组件，调用 renderWithHooks，执行组件函数并生成新的 Hooks 链表。
      - 对于类组件，调用 instance.render，生成新的虚拟 DOM。
      - 对于 Host 组件（如 div），生成对应的 DOM 节点。`,"（3）协调阶段",`- 触发条件：新的虚拟 DOM 生成后。
    - 关键函数：reconcileChildren、diff。
    - 逻辑：
      - 调用 reconcileChildren，对比新旧 Fiber 节点。
      - 根据 diff 算法，找出需要更新的节点。
      - 为需要更新的节点打上 Placement、Update、Deletion 等标记。`,"（4）提交阶段",`- 触发条件：协调阶段完成后。
    - 关键函数：commitRoot、commitWork。
    - 逻辑：
      - 调用 commitRoot，开始提交更新。
      - 调用 commitWork，递归处理 Fiber 节点。
      - 根据节点的标记，执行 DOM 操作（如插入、更新、删除）。
      - 调用生命周期钩子（如 componentDidMount、componentDidUpdate）。`,`（5）清理阶段
    - 触发条件：提交阶段完成后。
    - 关键函数：resetHooks、resetContext。
    - 逻辑：
        - 重置全局变量（如 currentlyRenderingFiber、currentHook）。
        - 清理上下文和副作用。
        - 准备下一次更新`,`React 渲染分为两阶段：Render 阶段负责根据 props 和 state 生成新的 Fiber 树，并进行 Diff；Commit 阶段把变更一次性应用到真实 DOM。
首次渲染是完整构建 Fiber 树并创建 DOM，更新时只计算需要变更的部分。
在 React18 并发模式下，Render 阶段可被打断以保证用户交互优先，Commit 阶段始终同步执行`],answerHtml:[`<p>React 组件的渲染和更新过程涉及多个阶段，包括 <strong>初始化、渲染、协调、提交、清理</strong> 等
以下是 React 组件渲染和更新的全过程，结合源码逻辑和关键步骤进行详细分析。</p>`,`<ol>
<li>整体流程概述 React 的渲染和更新过程可以分为以下几个阶段：</li>
</ol>`,`<ul>
<li>初始化阶段：创建 Fiber 树和 Hooks 链表。</li>
<li>渲染阶段：生成新的虚拟 DOM（Fiber 树）。</li>
<li>协调阶段：对比新旧 Fiber 树，找出需要更新的部分。</li>
<li>提交阶段：将更新应用到真实 DOM。</li>
<li>清理阶段：重置全局变量，准备下一次更新。</li>
</ul>`,`<ol start="2">
<li>详细流程分析</li>
</ol>`,"<p>（1）初始化阶段</p>",`<ul>
<li>触发条件：组件首次渲染或状态/属性更新。
<ul>
<li>关键函数：render、createRoot、scheduleUpdateOnFiber。</li>
<li>逻辑：
<ul>
<li>通过 ReactDOM.render 或 createRoot 初始化应用。</li>
<li>创建根 Fiber 节点（HostRoot）。</li>
<li>调用 scheduleUpdateOnFiber，将更新任务加入调度队列。</li>
</ul>
</li>
</ul>
</li>
</ul>`,"<p>（2）渲染阶段</p>",`<ul>
<li>触发条件：调度器开始执行任务。
<ul>
<li>关键函数：performSyncWorkOnRoot、beginWork、renderWithHooks。</li>
<li>逻辑：
<ul>
<li>调用 performSyncWorkOnRoot，开始渲染任务。</li>
<li>调用 beginWork，递归处理 Fiber 节点。</li>
<li>对于函数组件，调用 renderWithHooks，执行组件函数并生成新的 Hooks 链表。</li>
<li>对于类组件，调用 instance.render，生成新的虚拟 DOM。</li>
<li>对于 Host 组件（如 div），生成对应的 DOM 节点。</li>
</ul>
</li>
</ul>
</li>
</ul>`,"<p>（3）协调阶段</p>",`<ul>
<li>触发条件：新的虚拟 DOM 生成后。
<ul>
<li>关键函数：reconcileChildren、diff。</li>
<li>逻辑：
<ul>
<li>调用 reconcileChildren，对比新旧 Fiber 节点。</li>
<li>根据 diff 算法，找出需要更新的节点。</li>
<li>为需要更新的节点打上 Placement、Update、Deletion 等标记。</li>
</ul>
</li>
</ul>
</li>
</ul>`,"<p>（4）提交阶段</p>",`<ul>
<li>触发条件：协调阶段完成后。
<ul>
<li>关键函数：commitRoot、commitWork。</li>
<li>逻辑：
<ul>
<li>调用 commitRoot，开始提交更新。</li>
<li>调用 commitWork，递归处理 Fiber 节点。</li>
<li>根据节点的标记，执行 DOM 操作（如插入、更新、删除）。</li>
<li>调用生命周期钩子（如 componentDidMount、componentDidUpdate）。</li>
</ul>
</li>
</ul>
</li>
</ul>`,`<p>（5）清理阶段
- 触发条件：提交阶段完成后。
- 关键函数：resetHooks、resetContext。
- 逻辑：
- 重置全局变量（如 currentlyRenderingFiber、currentHook）。
- 清理上下文和副作用。
- 准备下一次更新</p>`,`<p>React 渲染分为两阶段：Render 阶段负责根据 props 和 state 生成新的 Fiber 树，并进行 Diff；Commit 阶段把变更一次性应用到真实 DOM。
首次渲染是完整构建 Fiber 树并创建 DOM，更新时只计算需要变更的部分。
在 React18 并发模式下，Render 阶段可被打断以保证用户交互优先，Commit 阶段始终同步执行</p>`],reference:"/myKMS/knowledge/framework/react#_20-react-组件渲染和更新的全过程",source:"/myKMS/knowledge/framework/react"},{id:142,question:"React 优化",answer:[`1. React.memo：对于函数组件，React.memo 可以避免不必要的重新渲染。当组件的 props 没有变化时，React 会跳过重新渲染过程。
2. 在 JSX 中创建匿名函数或内联函数会导致每次渲染时都重新创建函数，从而触发子组件的重新渲染。尽量避免这种做法。 使用useCallback包裹避免重复创建函数, 避免重复渲染.
3. 使用唯一且稳定的key, 确保列表渲染正常
4. 在 React 中，函数的重新创建和复杂计算会影响性能，尤其是在父组件频繁重新渲染时。useMemo 可以缓存计算结果，而 useCallback 则缓存函数的引用。
5. 虚拟化 react-virtualized
6. 懒加载(Lazy Loading) 按需加载(Code Splitting)
  使用 React 的 Suspense 和 lazy 实现懒加载, 配合import() 方法实现
7. 使用 webpack 的代码分割
8. webpack Tree shaking  基于 es6 ESM 是静态结构，能被编译阶段静态分析。 手动优化大型库的 Tree Shaking 如dayjs, lodash
9. webpack-bundle-analyzer
10. 服务器端渲染（SSR）与静态站点生成（SSG）
11. 图片懒加载`],answerHtml:[`<ol>
<li>React.memo：对于函数组件，React.memo 可以避免不必要的重新渲染。当组件的 props 没有变化时，React 会跳过重新渲染过程。</li>
<li>在 JSX 中创建匿名函数或内联函数会导致每次渲染时都重新创建函数，从而触发子组件的重新渲染。尽量避免这种做法。 使用useCallback包裹避免重复创建函数, 避免重复渲染.</li>
<li>使用唯一且稳定的key, 确保列表渲染正常</li>
<li>在 React 中，函数的重新创建和复杂计算会影响性能，尤其是在父组件频繁重新渲染时。useMemo 可以缓存计算结果，而 useCallback 则缓存函数的引用。</li>
<li>虚拟化 react-virtualized</li>
<li>懒加载(Lazy Loading) 按需加载(Code Splitting)
使用 React 的 Suspense 和 lazy 实现懒加载, 配合import() 方法实现</li>
<li>使用 webpack 的代码分割</li>
<li>webpack Tree shaking  基于 es6 ESM 是静态结构，能被编译阶段静态分析。 手动优化大型库的 Tree Shaking 如dayjs, lodash</li>
<li>webpack-bundle-analyzer</li>
<li>服务器端渲染（SSR）与静态站点生成（SSG）</li>
<li>图片懒加载</li>
</ol>`],reference:"/myKMS/knowledge/framework/react#_21-react-优化",source:"/myKMS/knowledge/framework/react"},{id:143,question:"在 React 应用中如何排查性能问题?",answer:[`1. 浏览器层面（渲染、网络、JS 执行)
  2. React 本身（组件渲染、状态管理、diff 算法） React DevTools Profiler
    常见问题: 不必要的 re-render(状态提升过多，导致全局刷新,props 传递引用类型（对象/数组）时，每次 render 都创建新引用,解决：React.memo、useCallback、useMemo、状态下沉); 大列表渲染卡顿(列表虚拟化);重复计算 / 重逻辑;昂贵的 DOM 操作;`],answerHtml:[`<ol>
<li>浏览器层面（渲染、网络、JS 执行)</li>
<li>React 本身（组件渲染、状态管理、diff 算法） React DevTools Profiler
常见问题: 不必要的 re-render(状态提升过多，导致全局刷新,props 传递引用类型（对象/数组）时，每次 render 都创建新引用,解决：React.memo、useCallback、useMemo、状态下沉); 大列表渲染卡顿(列表虚拟化);重复计算 / 重逻辑;昂贵的 DOM 操作;</li>
</ol>`],reference:"/myKMS/knowledge/framework/react#_23-在-react-应用中如何排查性能问题",source:"/myKMS/knowledge/framework/react"},{id:144,question:"useTransition useDeferredValue debounce 对比与原理",answer:[`| 特性            | \`useTransition\`                     | \`useDeferredValue\`            | 防抖（Debounce）             |
| ------------- | ----------------------------------- | ----------------------------- | ------------------------ |
| **React 内置**  | ✅ 是                                 | ✅ 是                           | ❌ 否（需自定义或使用第三方库）         |
| **控制粒度**      | 高：可控制更新的启动时机和优先级                    | 中：延迟值更新，适用于父组件传递的值            | 低：基于时间间隔控制更新频率           |
| **适用场景**      | 用户交互引发的状态更新，需控制更新优先级和反馈             | 父组件传递的频繁更新值，需避免子组件频繁渲染        | 输入框、搜索框等用户输入场景，减少频繁触发的操作 |
| **是否阻塞 UI**   | ❌ 否，更新被标记为低优先级，不会阻塞用户输入             | ❌ 否，延迟更新不会阻塞 UI，但可能导致 UI 延迟更新 | ❌ 否，延迟执行函数，避免频繁触发        |
| **是否可中断**     | ✅ 是，新的高优先级更新会中断当前低优先级更新             | ✅ 是，React 会根据当前任务的优先级处理更新     | ❌ 否，一旦设置时间间隔，无法中断        |
| **是否自动适应性能**  | ✅ 是，React 会根据设备性能自动调整更新策略           | ✅ 是，React 会根据设备性能自动调整延迟更新     | ❌ 否，固定的时间间隔不考虑设备性能       |
| **是否需要额外配置**  | ❌ 否，直接使用即可                          | ❌ 否，直接使用即可                    | ✅ 是，需要设置延迟时间和可能的取消机制     |
| **是否影响组件渲染**  | ✅ 是，可通过 \`isPending\` 状态判断更新是否完成，提供反馈 | ✅ 是，可通过比较原始值和延迟值判断是否需要更新 UI   | ✅ 是，延迟执行函数，减少不必要的渲染      |
| **是否适用于第三方库** | ❌ 否，需控制状态更新函数                       | ✅ 是，适用于无法控制状态更新的场景            | ✅ 是，适用于控制频繁触发的函数         |`],answerHtml:[`<table tabindex="0">
<thead>
<tr>
<th>特性</th>
<th><code>useTransition</code></th>
<th><code>useDeferredValue</code></th>
<th>防抖（Debounce）</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>React 内置</strong></td>
<td>✅ 是</td>
<td>✅ 是</td>
<td>❌ 否（需自定义或使用第三方库）</td>
</tr>
<tr>
<td><strong>控制粒度</strong></td>
<td>高：可控制更新的启动时机和优先级</td>
<td>中：延迟值更新，适用于父组件传递的值</td>
<td>低：基于时间间隔控制更新频率</td>
</tr>
<tr>
<td><strong>适用场景</strong></td>
<td>用户交互引发的状态更新，需控制更新优先级和反馈</td>
<td>父组件传递的频繁更新值，需避免子组件频繁渲染</td>
<td>输入框、搜索框等用户输入场景，减少频繁触发的操作</td>
</tr>
<tr>
<td><strong>是否阻塞 UI</strong></td>
<td>❌ 否，更新被标记为低优先级，不会阻塞用户输入</td>
<td>❌ 否，延迟更新不会阻塞 UI，但可能导致 UI 延迟更新</td>
<td>❌ 否，延迟执行函数，避免频繁触发</td>
</tr>
<tr>
<td><strong>是否可中断</strong></td>
<td>✅ 是，新的高优先级更新会中断当前低优先级更新</td>
<td>✅ 是，React 会根据当前任务的优先级处理更新</td>
<td>❌ 否，一旦设置时间间隔，无法中断</td>
</tr>
<tr>
<td><strong>是否自动适应性能</strong></td>
<td>✅ 是，React 会根据设备性能自动调整更新策略</td>
<td>✅ 是，React 会根据设备性能自动调整延迟更新</td>
<td>❌ 否，固定的时间间隔不考虑设备性能</td>
</tr>
<tr>
<td><strong>是否需要额外配置</strong></td>
<td>❌ 否，直接使用即可</td>
<td>❌ 否，直接使用即可</td>
<td>✅ 是，需要设置延迟时间和可能的取消机制</td>
</tr>
<tr>
<td><strong>是否影响组件渲染</strong></td>
<td>✅ 是，可通过 <code>isPending</code> 状态判断更新是否完成，提供反馈</td>
<td>✅ 是，可通过比较原始值和延迟值判断是否需要更新 UI</td>
<td>✅ 是，延迟执行函数，减少不必要的渲染</td>
</tr>
<tr>
<td><strong>是否适用于第三方库</strong></td>
<td>❌ 否，需控制状态更新函数</td>
<td>✅ 是，适用于无法控制状态更新的场景</td>
<td>✅ 是，适用于控制频繁触发的函数</td>
</tr>
</tbody>
</table>`],reference:"/myKMS/knowledge/framework/react#_24-usetransition-usedeferredvalue-debounce-对比与原理",source:"/myKMS/knowledge/framework/react"},{id:145,question:"react suspence 与 lazy() 底层实现原理是什么?",answer:["**React.lazy 的底层是让组件在未加载时 抛出一个 Promise，而 Suspense 则在 Fiber 渲染时捕获这个 Promise，挂起渲染并显示 fallback，等 Promise resolve 后恢复渲染。**","Suspense 作用:用于在子树中捕获“未就绪状态”，显示一个 fallback UI（比如 loading）。;与 ErrorBoundary 类似，只不过它捕获的是 **“Promise 挂起”。**","React.lazy 把动态加载的组件封装成一个“会在未加载时抛出 Promise”的特殊组件。","Suspense 作为“捕手”，在渲染子树时捕获这个 Promise，展示 fallback，并在 Promise resolve 后再重新渲染。","Suspense,底层原理:",`- 渲染子组件时，如果子组件内部调用 lazy 还没 resolve，就会抛出一个 Promise。
      - React Fiber 架构检测到渲染过程中抛出了 Promise，会暂停当前 Fiber 树的渲染。
      - React 将这个 Promise 挂到 Suspense 边界上，等 Promise resolve 后重新触发渲染。
      - 在等待期间，Suspense 显示 fallback。`],answerHtml:["<p><strong>React.lazy 的底层是让组件在未加载时 抛出一个 Promise，而 Suspense 则在 Fiber 渲染时捕获这个 Promise，挂起渲染并显示 fallback，等 Promise resolve 后恢复渲染。</strong></p>","<p>Suspense 作用:用于在子树中捕获“未就绪状态”，显示一个 fallback UI（比如 loading）。;与 ErrorBoundary 类似，只不过它捕获的是 <strong>“Promise 挂起”。</strong></p>","<p>React.lazy 把动态加载的组件封装成一个“会在未加载时抛出 Promise”的特殊组件。</p>","<p>Suspense 作为“捕手”，在渲染子树时捕获这个 Promise，展示 fallback，并在 Promise resolve 后再重新渲染。</p>","<p>Suspense,底层原理:</p>",`<ul>
<li>渲染子组件时，如果子组件内部调用 lazy 还没 resolve，就会抛出一个 Promise。
- React Fiber 架构检测到渲染过程中抛出了 Promise，会暂停当前 Fiber 树的渲染。
- React 将这个 Promise 挂到 Suspense 边界上，等 Promise resolve 后重新触发渲染。
- 在等待期间，Suspense 显示 fallback。</li>
</ul>`],reference:"/myKMS/knowledge/framework/react#_25-react-suspence-与-lazy-底层实现原理是什么",source:"/myKMS/knowledge/framework/react"},{id:146,question:"react 如何实现国际化",answer:["i18n 实现国际化","1. 动态语言切换 + 按需加载",`- 动态import+映射表,页面级组件在useEffect或路由加载时调用i18n.addResources(),减少初始打包体积，提高首屏加载速度, 使用缓存(localStorage / IndexedDB)
2. 日期/时间/数字/货币格式化`,`3. 自动提取翻译 Key & 多语言管理
  - i18next-scanner 扫描`,`4. i18n + 路由（多语言 URL）
  - :lang 作为路由参数, 配合effect, navigate loadLanguage实现`,`5. i18n 国际化对 React 组件性能的影响？如何优化？
    - react-i18next 会在语言切换时触发重新渲染依赖翻译的组件: 精准使用 useTranslation('namespace')(语言文件可以按 namespace 划分)，避免全局组件不必要渲染;
    - Trans 组件只包裹需要翻译的部分;
    - 使用 memoization (React.memo) 避免深层组件重复渲染, 避免重复 useTranslation, 子组件可通过 props 传递翻译后的文本,
react-i18next 使用 Context + Hook，组件通过 useTranslation() 获取翻译函数 t()`],answerHtml:["<p>i18n 实现国际化</p>",`<ol>
<li>动态语言切换 + 按需加载</li>
</ol>`,`<ul>
<li>动态import+映射表,页面级组件在useEffect或路由加载时调用i18n.addResources(),减少初始打包体积，提高首屏加载速度, 使用缓存(localStorage / IndexedDB)</li>
</ul>
<ol start="2">
<li>日期/时间/数字/货币格式化</li>
</ol>`,`<ol start="3">
<li>自动提取翻译 Key &amp; 多语言管理</li>
</ol>
<ul>
<li>i18next-scanner 扫描</li>
</ul>`,`<ol start="4">
<li>i18n + 路由（多语言 URL）</li>
</ol>
<ul>
<li>:lang 作为路由参数, 配合effect, navigate loadLanguage实现</li>
</ul>`,`<ol start="5">
<li>i18n 国际化对 React 组件性能的影响？如何优化？
<ul>
<li>react-i18next 会在语言切换时触发重新渲染依赖翻译的组件: 精准使用 useTranslation('namespace')(语言文件可以按 namespace 划分)，避免全局组件不必要渲染;</li>
<li>Trans 组件只包裹需要翻译的部分;</li>
<li>使用 memoization (React.memo) 避免深层组件重复渲染, 避免重复 useTranslation, 子组件可通过 props 传递翻译后的文本,
react-i18next 使用 Context + Hook，组件通过 useTranslation() 获取翻译函数 t()</li>
</ul>
</li>
</ol>`],reference:"/myKMS/knowledge/framework/react#_26-react-如何实现国际化",source:"/myKMS/knowledge/framework/react"},{id:147,question:"自己写的hooks",answer:[`- 简单的 useLocalStorage; 
   - 基于useRequest封装项目使用useDict 提供 dict 功能,支持单个, 批量获取dict 初始化, 缓存, 刷新, getLabel; - useFlatOrgTree 获取机构树, 后端是List 的结构, 转化成Tree 结构, 还有把Tree 结构转化成list机构; 
   - useModal 把弹窗状态和打开关闭方法封装成一个hook(open 是的把对象传入);
   - usePermission 判断权限, useRequset: 
   - 基于 vueuse的useAsyncState 封装的 useRequset, 返回state,isLoading,isReady,run, 支持配置showMessage,formatResult,initialState, immediate等; 
   - useSearchTable 将 table 操作封装再里面; 
   - useConfirm`],answerHtml:[`<ul>
<li>简单的 useLocalStorage;
<ul>
<li>基于useRequest封装项目使用useDict 提供 dict 功能,支持单个, 批量获取dict 初始化, 缓存, 刷新, getLabel; - useFlatOrgTree 获取机构树, 后端是List 的结构, 转化成Tree 结构, 还有把Tree 结构转化成list机构;</li>
<li>useModal 把弹窗状态和打开关闭方法封装成一个hook(open 是的把对象传入);</li>
<li>usePermission 判断权限, useRequset:</li>
<li>基于 vueuse的useAsyncState 封装的 useRequset, 返回state,isLoading,isReady,run, 支持配置showMessage,formatResult,initialState, immediate等;</li>
<li>useSearchTable 将 table 操作封装再里面;</li>
<li>useConfirm</li>
</ul>
</li>
</ul>`],reference:"/myKMS/knowledge/framework/react#_27-自己写的hooks",source:"/myKMS/knowledge/framework/react"},{id:148,question:"Redux Toolkit",answer:["1. createSlice 内部用 Immer，允许你写“可变写法”，但底层会生成不可变的新 state。",`2. createAsyncThunk 内部是如何工作的？
   - 生成一个 thunk action（函数），会在调用时触发一个 生命周期三段式：
      - pending → 异步任务开始
      - fulfilled → 异步任务成功
      - rejected → 异步任务失败
   - 内部用 dispatch 多次派发 action，而不是只派发一次。`,`3.Redux Toolkit 如何优化性能
  - 1.内置 Immer + useSelector 的 浅比较，减少无效渲染。
  - 2.createEntityAdapter 提供规范化数据结构（normalized state），避免深层次 diff。
  - 3. 配合 memo / useMemo / useCallback，只渲染必要组件。`,`4. 如果要在 Redux Toolkit 里实现一个 Undo/Redo 功能，怎么做？
  - 在 reducer 里维护一个 past[]、present、future[] 三段式结构。
  - 每次 dispatch：把当前 present 推入 pastpresent 替换为新 state
  - Undo → 从 past 弹出最后一个到 present，并把原先的 present 推入 future`],answerHtml:[`<ol>
<li>createSlice 内部用 Immer，允许你写“可变写法”，但底层会生成不可变的新 state。</li>
</ol>`,`<ol start="2">
<li>createAsyncThunk 内部是如何工作的？
<ul>
<li>生成一个 thunk action（函数），会在调用时触发一个 生命周期三段式：
<ul>
<li>pending → 异步任务开始</li>
<li>fulfilled → 异步任务成功</li>
<li>rejected → 异步任务失败</li>
</ul>
</li>
<li>内部用 dispatch 多次派发 action，而不是只派发一次。</li>
</ul>
</li>
</ol>`,`<p>3.Redux Toolkit 如何优化性能</p>
<ul>
<li>1.内置 Immer + useSelector 的 浅比较，减少无效渲染。</li>
<li>2.createEntityAdapter 提供规范化数据结构（normalized state），避免深层次 diff。</li>
<li>
<ol start="3">
<li>配合 memo / useMemo / useCallback，只渲染必要组件。</li>
</ol>
</li>
</ul>`,`<ol start="4">
<li>如果要在 Redux Toolkit 里实现一个 Undo/Redo 功能，怎么做？</li>
</ol>
<ul>
<li>在 reducer 里维护一个 past[]、present、future[] 三段式结构。</li>
<li>每次 dispatch：把当前 present 推入 pastpresent 替换为新 state</li>
<li>Undo → 从 past 弹出最后一个到 present，并把原先的 present 推入 future</li>
</ul>`],reference:"/myKMS/knowledge/framework/react#_28-redux-toolkit",source:"/myKMS/knowledge/framework/react"},{id:149,question:"react usestate usereducer useref useeffece 原理",answer:["环形队列就是：链表的最后一个节点的 next 指针 指向头节点，形成一个环。",`- useState 的原理
  - 原理可以拆解成三个部分：状态保存、状态更新 和 触发渲染。 useState 把状态保存在 Fiber 的 Hook 链表中，setState 通过更新队列记录变化，并触发 Fiber 的调度和重新渲染，最终在下一次执行组件时计算出新状态。
  -  React 为什么需要 useState: 在函数组件里，普通的局部变量在函数执行完后会被销毁。React 通过 useState 把状态存放在 Fiber 节点 上，这样每次函数组件重新执行时，状态不会丢失。
  - 状态保存原理: 每个组件对应一个 Fiber 节点。Fiber 上有一个 memoizedState 属性，存储链表结构，保存多个 Hook 的状态。
  - 状态更新原理: 调用 setState 时, 会创建一个 更新对象, 放到对应 Hook 的更新队列里, 然后 React 会调度一次 组件重新渲染
  - 触发渲染机制: setState 本质上调用了 React 的 调度器，会标记当前 Fiber 为需要更新，然后触发一次 Fiber 调度 → Diff → commit → 重新渲染 流程。`,`- usereducer原理
  - useState 的原理一样, 是把状态更新逻辑抽出来交给 reducer 函数. 其实 React 内部 useState 就是 useReducer 的语法糖。
  - useReducer 本质上和 useState 一样，状态保存在 Fiber Hook 链表里，更新通过环形队列记录；不同的是，它通过 reducer(state, action) 把更新逻辑交给用户，让状态更新更可控。`,"```\nfunction useState(initialState) {\n    return useReducer((state, action) => {\n        return typeof action === 'function' ? action(state) : action;\n    }, initialState);\n}\n```",`- useRef 原理
  - useRef 的作用就是：给你一个不会变的“盒子”来存放东西。
  - 和其他 Hooks 一样，useRef 也存放在 Fiber 的 Hook 链表里。 不同点在于：初次渲染时，React 会创建一个对象 { current: initialValue }，并保存到 memoizedState。之后的渲染，直接返回同一个对象。
  - 每次调用 useRef，拿到的都是同一个对象引用；修改 .current 不会触发渲染，因为 React 不会监听这个值的变化。`,`- useeffece 原理
  - React 提供 useEffect，把这些副作用挂到 Fiber 的副作用链表，在 DOM 更新提交之后 执行。(commit 阶段执行)
  - 可以分成三个阶段: 初次渲染, 提交阶段, 更新渲染
    - updateQueue（effect 链表）
    - layoutEffect（同步执行）：在 DOM 更新后，浏览器绘制之前执行（会阻塞渲染）。
    - effect（即 useEffect）（异步执行）：在浏览器完成绘制后执行，不会阻塞渲染
  - useEffect 的原理就是：在渲染时收集副作用，存到 Fiber 的effect链表；在commit阶段统一执行，并根据依赖数组判断是否需要重新运行，同时处理清理函数。`],answerHtml:["<p>环形队列就是：链表的最后一个节点的 next 指针 指向头节点，形成一个环。</p>",`<ul>
<li>useState 的原理
<ul>
<li>原理可以拆解成三个部分：状态保存、状态更新 和 触发渲染。 useState 把状态保存在 Fiber 的 Hook 链表中，setState 通过更新队列记录变化，并触发 Fiber 的调度和重新渲染，最终在下一次执行组件时计算出新状态。</li>
<li>React 为什么需要 useState: 在函数组件里，普通的局部变量在函数执行完后会被销毁。React 通过 useState 把状态存放在 Fiber 节点 上，这样每次函数组件重新执行时，状态不会丢失。</li>
<li>状态保存原理: 每个组件对应一个 Fiber 节点。Fiber 上有一个 memoizedState 属性，存储链表结构，保存多个 Hook 的状态。</li>
<li>状态更新原理: 调用 setState 时, 会创建一个 更新对象, 放到对应 Hook 的更新队列里, 然后 React 会调度一次 组件重新渲染</li>
<li>触发渲染机制: setState 本质上调用了 React 的 调度器，会标记当前 Fiber 为需要更新，然后触发一次 Fiber 调度 → Diff → commit → 重新渲染 流程。</li>
</ul>
</li>
</ul>`,`<ul>
<li>usereducer原理
<ul>
<li>useState 的原理一样, 是把状态更新逻辑抽出来交给 reducer 函数. 其实 React 内部 useState 就是 useReducer 的语法糖。</li>
<li>useReducer 本质上和 useState 一样，状态保存在 Fiber Hook 链表里，更新通过环形队列记录；不同的是，它通过 reducer(state, action) 把更新逻辑交给用户，让状态更新更可控。</li>
</ul>
</li>
</ul>`,`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><!--::markdown-it-async::ghm9rk1dqshuuqp0o72oki::--><code>function useState(initialState) {
    return useReducer((state, action) =&gt; {
        return typeof action === &#039;function&#039; ? action(state) : action;
    }, initialState);
}</code></pre>
</div>`,`<ul>
<li>useRef 原理
<ul>
<li>useRef 的作用就是：给你一个不会变的“盒子”来存放东西。</li>
<li>和其他 Hooks 一样，useRef 也存放在 Fiber 的 Hook 链表里。 不同点在于：初次渲染时，React 会创建一个对象 { current: initialValue }，并保存到 memoizedState。之后的渲染，直接返回同一个对象。</li>
<li>每次调用 useRef，拿到的都是同一个对象引用；修改 .current 不会触发渲染，因为 React 不会监听这个值的变化。</li>
</ul>
</li>
</ul>`,`<ul>
<li>useeffece 原理
<ul>
<li>React 提供 useEffect，把这些副作用挂到 Fiber 的副作用链表，在 DOM 更新提交之后 执行。(commit 阶段执行)</li>
<li>可以分成三个阶段: 初次渲染, 提交阶段, 更新渲染
<ul>
<li>updateQueue（effect 链表）</li>
<li>layoutEffect（同步执行）：在 DOM 更新后，浏览器绘制之前执行（会阻塞渲染）。</li>
<li>effect（即 useEffect）（异步执行）：在浏览器完成绘制后执行，不会阻塞渲染</li>
</ul>
</li>
<li>useEffect 的原理就是：在渲染时收集副作用，存到 Fiber 的effect链表；在commit阶段统一执行，并根据依赖数组判断是否需要重新运行，同时处理清理函数。</li>
</ul>
</li>
</ul>`],reference:"/myKMS/knowledge/framework/react#_29-react-usestate-usereducer-useref-useeffece-原理",source:"/myKMS/knowledge/framework/react"},{id:150,question:"react useEffect 依赖项为数据或者对象, 如何处理",answer:["当 useEffect 的依赖项是数组或对象时，你可能会遇到一个陷阱：useEffect 会在每次组件重新渲染时都执行，即使数组或对象的内容“看起来”没有变化.","React 组件每次重新渲染时，在函数体内部定义的对象或数组都会被重新创建一个新的实例。比较时Object.is 始终为false,因此 effect 会重新执行",`方案一：解构原始值 (Destructuring Primitives)
  - 取只关心其中的某些原始值`,`方案二：使用 useMemo 稳定引用 (Memoization)
  - useMemo 会缓存这个对象/数组，只有当 useMemo 自己的依赖项改变时，它才会重新创建一个新的对象/数组。`,`方案三：序列化为字符串 (Stringification)
  - 把它们转换成一个 JSON 字符串，因为字符串是原始值。`,`方案四：使用自定义 Hook (Deep Compare)
  - 创建一个自定义 Hook（例如 useRef）来存储前一个值，并在 useEffect 内部手动进行“深度比较”。`],answerHtml:["<p>当 useEffect 的依赖项是数组或对象时，你可能会遇到一个陷阱：useEffect 会在每次组件重新渲染时都执行，即使数组或对象的内容“看起来”没有变化.</p>","<p>React 组件每次重新渲染时，在函数体内部定义的对象或数组都会被重新创建一个新的实例。比较时Object.is 始终为false,因此 effect 会重新执行</p>",`<p>方案一：解构原始值 (Destructuring Primitives)</p>
<ul>
<li>取只关心其中的某些原始值</li>
</ul>`,`<p>方案二：使用 useMemo 稳定引用 (Memoization)</p>
<ul>
<li>useMemo 会缓存这个对象/数组，只有当 useMemo 自己的依赖项改变时，它才会重新创建一个新的对象/数组。</li>
</ul>`,`<p>方案三：序列化为字符串 (Stringification)</p>
<ul>
<li>把它们转换成一个 JSON 字符串，因为字符串是原始值。</li>
</ul>`,`<p>方案四：使用自定义 Hook (Deep Compare)</p>
<ul>
<li>创建一个自定义 Hook（例如 useRef）来存储前一个值，并在 useEffect 内部手动进行“深度比较”。</li>
</ul>`],reference:"/myKMS/knowledge/framework/react#_30-react-useeffect-依赖项为数据或者对象-如何处理",source:"/myKMS/knowledge/framework/react"},{id:151,question:"jsx 为什么只允许有一个父节点",answer:["**因为 JSX 最终会被编译成 JavaScript 函数调用，而 JavaScript 的函数一次只能返回一个值。**","核心原理：JSX 是 React.createElement() 的语法糖.",`你写的 JSX 代码并不会直接在浏览器中运行。它需要一个转译器（最常见的是 Babel）将其转换为浏览器能理解的纯 JavaScript。
在 React 中，你写的每一段 JSX 标签都会被转译成一个 React.createElement(component, props, ...children) 函数调用
这个函数调用的返回值是一个 JavaScript 对象（用来描述你想要创建的 UI，也就是 React 元素或“虚拟 DOM”节点）`],answerHtml:["<p><strong>因为 JSX 最终会被编译成 JavaScript 函数调用，而 JavaScript 的函数一次只能返回一个值。</strong></p>","<p>核心原理：JSX 是 React.createElement() 的语法糖.</p>",`<p>你写的 JSX 代码并不会直接在浏览器中运行。它需要一个转译器（最常见的是 Babel）将其转换为浏览器能理解的纯 JavaScript。
在 React 中，你写的每一段 JSX 标签都会被转译成一个 React.createElement(component, props, ...children) 函数调用
这个函数调用的返回值是一个 JavaScript 对象（用来描述你想要创建的 UI，也就是 React 元素或“虚拟 DOM”节点）</p>`],reference:"/myKMS/knowledge/framework/react#_31-jsx-为什么只允许有一个父节点",source:"/myKMS/knowledge/framework/react"},{id:152,question:"Webpack 的工作流程",answer:["Webpack 的工作流程",`- 1. 入口（Entry）：从指定文件（如 index.js）开始分析依赖。
- 2. 依赖图（Dependency Graph）：递归构建模块间的依赖关系。
- 3. 加载器（Loaders）：转换非 JS 资源（如编译 Sass、处理图片）。
- 4. 插件（Plugins）：在构建生命周期中执行优化任务。
- 5. 输出（Output）：生成优化后的静态文件（如 bundle.js）。`],answerHtml:["<p>Webpack 的工作流程</p>",`<ul>
<li>
<ol>
<li>入口（Entry）：从指定文件（如 index.js）开始分析依赖。</li>
</ol>
</li>
<li>
<ol start="2">
<li>依赖图（Dependency Graph）：递归构建模块间的依赖关系。</li>
</ol>
</li>
<li>
<ol start="3">
<li>加载器（Loaders）：转换非 JS 资源（如编译 Sass、处理图片）。</li>
</ol>
</li>
<li>
<ol start="4">
<li>插件（Plugins）：在构建生命周期中执行优化任务。</li>
</ol>
</li>
<li>
<ol start="5">
<li>输出（Output）：生成优化后的静态文件（如 bundle.js）。</li>
</ol>
</li>
</ul>`],reference:"/myKMS/knowledge/framework/vite#_1-webpack-的工作流程",source:"/myKMS/knowledge/framework/vite"},{id:153,question:"Webpack 中的 Loaders 和 Plugins 有什么区别",answer:["| 对比项  | **Loader**                                 | **Plugin**                                                  |\n| :--- | :----------------------------------------- | :---------------------------------------------------------- |\n| 作用阶段 | 文件加载、转换阶段（打包前）                             | 编译、打包的整个生命周期                                                |\n| 操作对象 | 单个模块文件（JS、CSS、图片等）                         | 整个编译过程（模块、资源、chunk、输出）                                      |\n| 类型   | 转换器（Transformer）                           | 扩展器（Enhancer）                                               |\n| 常见用途 | 把非 JS 资源转成 JS 模块                           | 优化、注入、压缩、环境变量等                                              |\n| 调用方式 | `module.rules` 中配置 `use`                   | `plugins` 数组中配置                                             |\n| 工作机制 | 线性执行（从右到左）                                 | 基于 Tapable 的事件钩子机制                                          |\n| 示例   | `babel-loader`, `css-loader`, `url-loader` | `HtmlWebpackPlugin`, `DefinePlugin`, `MiniCssExtractPlugin` |","Loader 执行机制",`- 串行执行（从右到左）；
- 每个 loader 接收上一个 loader 的结果；
- 只能处理文件内容字符串；
- 是一个纯函数（无副作用）。`,"Plugin 执行机制",`- 通过 Webpack 的 Tapable 钩子系统；
- 插入到 Webpack 的编译生命周期中；
- 可以访问 compiler、compilation 对象；
- 可读可写资源、依赖、输出、日志等。`],answerHtml:[`<table tabindex="0">
<thead>
<tr>
<th style="text-align:left">对比项</th>
<th style="text-align:left"><strong>Loader</strong></th>
<th style="text-align:left"><strong>Plugin</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">作用阶段</td>
<td style="text-align:left">文件加载、转换阶段（打包前）</td>
<td style="text-align:left">编译、打包的整个生命周期</td>
</tr>
<tr>
<td style="text-align:left">操作对象</td>
<td style="text-align:left">单个模块文件（JS、CSS、图片等）</td>
<td style="text-align:left">整个编译过程（模块、资源、chunk、输出）</td>
</tr>
<tr>
<td style="text-align:left">类型</td>
<td style="text-align:left">转换器（Transformer）</td>
<td style="text-align:left">扩展器（Enhancer）</td>
</tr>
<tr>
<td style="text-align:left">常见用途</td>
<td style="text-align:left">把非 JS 资源转成 JS 模块</td>
<td style="text-align:left">优化、注入、压缩、环境变量等</td>
</tr>
<tr>
<td style="text-align:left">调用方式</td>
<td style="text-align:left"><code>module.rules</code> 中配置 <code>use</code></td>
<td style="text-align:left"><code>plugins</code> 数组中配置</td>
</tr>
<tr>
<td style="text-align:left">工作机制</td>
<td style="text-align:left">线性执行（从右到左）</td>
<td style="text-align:left">基于 Tapable 的事件钩子机制</td>
</tr>
<tr>
<td style="text-align:left">示例</td>
<td style="text-align:left"><code>babel-loader</code>, <code>css-loader</code>, <code>url-loader</code></td>
<td style="text-align:left"><code>HtmlWebpackPlugin</code>, <code>DefinePlugin</code>, <code>MiniCssExtractPlugin</code></td>
</tr>
</tbody>
</table>`,"<p>Loader 执行机制</p>",`<ul>
<li>串行执行（从右到左）；</li>
<li>每个 loader 接收上一个 loader 的结果；</li>
<li>只能处理文件内容字符串；</li>
<li>是一个纯函数（无副作用）。</li>
</ul>`,"<p>Plugin 执行机制</p>",`<ul>
<li>通过 Webpack 的 Tapable 钩子系统；</li>
<li>插入到 Webpack 的编译生命周期中；</li>
<li>可以访问 compiler、compilation 对象；</li>
<li>可读可写资源、依赖、输出、日志等。</li>
</ul>`],reference:"/myKMS/knowledge/framework/vite#_2-webpack-中的-loaders-和-plugins-有什么区别",source:"/myKMS/knowledge/framework/vite"},{id:154,question:"Tree Shaking",answer:["Tree Shaking = 静态分析 + dead code elimination",`- 去除未使用代码的技术, ESM 的 import/export 是静态分析的. 本质目标：减少打包体积，把代码中 未引用的函数、变量、类 剔除掉。
- 支持条件:
  - 必须使用 ES Module;
  - 导出必须是静态; 副作用(如果模块执行会有副作用（如修改全局变量），Tree Shaking 默认不会移除整个模块).  
  - 动态 import 可以按需加载，但静态分析更高效;
  - 类库打包方式影响 Tree Shaking(lodash/es → 支持 Tree Shaking,lodash → CommonJS，不支持)`,"1. 静态分析：树摇依赖于ES2015模块语法（即 import 和 export ），因为这些语法声明是静态的，使得构建工具在编译时就能确定哪些代码是没有被使用的。","2. 标记未使用的导出：构建工具会遍历所有的导出项，标记那些在工程中未被其他模块引用的导出。","3. 移除未引用代码：在最终的打包文件中移除那些未被引用的代码，这样做不仅减少了文件大小，还能提高应用的加载速度和性能。"],answerHtml:["<p>Tree Shaking = 静态分析 + dead code elimination</p>",`<ul>
<li>去除未使用代码的技术, ESM 的 import/export 是静态分析的. 本质目标：减少打包体积，把代码中 未引用的函数、变量、类 剔除掉。</li>
<li>支持条件:
<ul>
<li>必须使用 ES Module;</li>
<li>导出必须是静态; 副作用(如果模块执行会有副作用（如修改全局变量），Tree Shaking 默认不会移除整个模块).</li>
<li>动态 import 可以按需加载，但静态分析更高效;</li>
<li>类库打包方式影响 Tree Shaking(lodash/es → 支持 Tree Shaking,lodash → CommonJS，不支持)</li>
</ul>
</li>
</ul>`,`<ol>
<li>静态分析：树摇依赖于ES2015模块语法（即 import 和 export ），因为这些语法声明是静态的，使得构建工具在编译时就能确定哪些代码是没有被使用的。</li>
</ol>`,`<ol start="2">
<li>标记未使用的导出：构建工具会遍历所有的导出项，标记那些在工程中未被其他模块引用的导出。</li>
</ol>`,`<ol start="3">
<li>移除未引用代码：在最终的打包文件中移除那些未被引用的代码，这样做不仅减少了文件大小，还能提高应用的加载速度和性能。</li>
</ol>`],reference:"/myKMS/knowledge/framework/vite#_3-tree-shaking",source:"/myKMS/knowledge/framework/vite"},{id:155,question:"Tree Shaking 对 css 有效吗",answer:[`- 纯 CSS 文件
  - Tree Shaking 无法分析哪些 CSS 类使用或未使用
  - 所以 未使用的 CSS 默认不会被移除
- CSS-in-JS / CSS Module
  - CSS-in-JS（如 styled-components, emotion）生成的 JS 代码
  - 对未使用的 styled 组件，Webpack/Rollup 的 Tree Shaking 可以删除对应 JS，从而间接删除样式
  - 但这需要 样式写在 JS 里，纯 CSS 文件不适用`,`- tailwind / PostCSS / PurgeCSS
  - 对于类名型 CSS（如 Tailwind、Bootstrap）
  - 可以使用工具 扫描项目源码，删除未使用类
  - 原理类似 Tree Shaking，但实际上是 静态 CSS 去重，不依赖 JS Tree Shaking`],answerHtml:[`<ul>
<li>纯 CSS 文件
<ul>
<li>Tree Shaking 无法分析哪些 CSS 类使用或未使用</li>
<li>所以 未使用的 CSS 默认不会被移除</li>
</ul>
</li>
<li>CSS-in-JS / CSS Module
<ul>
<li>CSS-in-JS（如 styled-components, emotion）生成的 JS 代码</li>
<li>对未使用的 styled 组件，Webpack/Rollup 的 Tree Shaking 可以删除对应 JS，从而间接删除样式</li>
<li>但这需要 样式写在 JS 里，纯 CSS 文件不适用</li>
</ul>
</li>
</ul>`,`<ul>
<li>tailwind / PostCSS / PurgeCSS
<ul>
<li>对于类名型 CSS（如 Tailwind、Bootstrap）</li>
<li>可以使用工具 扫描项目源码，删除未使用类</li>
<li>原理类似 Tree Shaking，但实际上是 静态 CSS 去重，不依赖 JS Tree Shaking</li>
</ul>
</li>
</ul>`],reference:"/myKMS/knowledge/framework/vite#_4-tree-shaking-对-css-有效吗",source:"/myKMS/knowledge/framework/vite"},{id:156,question:"webpack runtime 是啥",answer:["**webpack runtime = 浏览器端的模块管理器 + 动态加载器 + 缓存器**","webpack 为了在浏览器执行模块打包后的代码而生成的一套加载、执行、管理模块的核心逻辑。","负责:",`- 加载模块 (**webpack_require**)
  - 核心加载器，用来执行模块函数并返回 exports
  - 每个模块在打包后都变成一个函数 \`(module, exports, **webpack_require**) => { … }\`
- 缓存模块
  - webpack 会把每个模块的执行结果缓存，避免重复执行：
- 支持动态 import / chunk 加载
  - JSONP 或 Module Federation  加载
  - chunk 加载状态表
- 处理热更新（HMR）
  - 监听更新的 chunk；
  - 动态替换模块内容，不刷新页面`],answerHtml:["<p><strong>webpack runtime = 浏览器端的模块管理器 + 动态加载器 + 缓存器</strong></p>","<p>webpack 为了在浏览器执行模块打包后的代码而生成的一套加载、执行、管理模块的核心逻辑。</p>","<p>负责:</p>",`<ul>
<li>加载模块 (<strong>webpack_require</strong>)
<ul>
<li>核心加载器，用来执行模块函数并返回 exports</li>
<li>每个模块在打包后都变成一个函数 <code>(module, exports, **webpack_require**) =&gt; { … }</code></li>
</ul>
</li>
<li>缓存模块
<ul>
<li>webpack 会把每个模块的执行结果缓存，避免重复执行：</li>
</ul>
</li>
<li>支持动态 import / chunk 加载
<ul>
<li>JSONP 或 Module Federation  加载</li>
<li>chunk 加载状态表</li>
</ul>
</li>
<li>处理热更新（HMR）
<ul>
<li>监听更新的 chunk；</li>
<li>动态替换模块内容，不刷新页面</li>
</ul>
</li>
</ul>`],reference:"/myKMS/knowledge/framework/vite#_5-webpack-runtime-是啥",source:"/myKMS/knowledge/framework/vite"},{id:157,question:"webpack  有哪些优化项目的手段？",answer:["围绕 webpack 做性能优化，分为两个方面： 构建时间优化 、 构建体积优化",`- 构建时间优化
  - 缩小范围
  - 文件后缀
  - 别名
  - 缓存
  - 并行构建(多核心)
  - 定向查找第三方模块`,`- 构建结果优化
  - 压缩 js
  - 压缩 css
  - 压缩 html
  - 压缩图片
  - 按需加载
  - prload、prefetch
  - 代码分割
  - tree shaking
  - gzip
  - 作用域提升`],answerHtml:["<p>围绕 webpack 做性能优化，分为两个方面： 构建时间优化 、 构建体积优化</p>",`<ul>
<li>构建时间优化
<ul>
<li>缩小范围</li>
<li>文件后缀</li>
<li>别名</li>
<li>缓存</li>
<li>并行构建(多核心)</li>
<li>定向查找第三方模块</li>
</ul>
</li>
</ul>`,`<ul>
<li>构建结果优化
<ul>
<li>压缩 js</li>
<li>压缩 css</li>
<li>压缩 html</li>
<li>压缩图片</li>
<li>按需加载</li>
<li>prload、prefetch</li>
<li>代码分割</li>
<li>tree shaking</li>
<li>gzip</li>
<li>作用域提升</li>
</ul>
</li>
</ul>`],reference:"/myKMS/knowledge/framework/vite#_6-webpack-有哪些优化项目的手段",source:"/myKMS/knowledge/framework/vite"},{id:158,question:"简述Vite的依赖预加载机制",answer:["**Vite 的依赖预构建机制通过在开发模式下提前处理常用依赖（如 Vue、React 等），将这些依赖转换为浏览器可以直接执行的格式。这避免了每次启动时重新编译这些依赖，显著提升了启动速度。** 预构建的依赖被缓存，并在后续启动时复用缓存，进一步加速了开发过程中的构建和启动时间。","具体来说，它的工作原理如下：",`1. 依赖识别和路径补全： Vite 会首先识别项目中需要的依赖，并对非绝对路径或相对路径的引用进行路径补全。比如，Vue 的加载路径会变为 node_modules/.vite/deps/Vue.js?v=1484ebe8，这一路径显示了 Vite 在 node_modules/.vite/deps 文件夹下存放了经过预处理的依赖文件。
2. 转换成 ES 模块： 一些第三方包（特别是遵循 CommonJS 规范的包）在浏览器中无法直接使用。为了应对这种情况，Vite 会使用 esbuild 工具将这些依赖转换为符合 ES 模块规范的代码。转换后的代码会被存放在 node_modules/.vite/deps 文件夹下，这样浏览器就能直接识别并加载这些依赖。
3. 统一集成 ES 模块： Vite 会对每个包的不同模块进行统一集成，将各个分散的模块（如不同的 ES 函数或组件）合并成一个或几个文件。这不仅减少了浏览器发起多个请求的次数，还能够加快页面加载速度`],answerHtml:["<p><strong>Vite 的依赖预构建机制通过在开发模式下提前处理常用依赖（如 Vue、React 等），将这些依赖转换为浏览器可以直接执行的格式。这避免了每次启动时重新编译这些依赖，显著提升了启动速度。</strong> 预构建的依赖被缓存，并在后续启动时复用缓存，进一步加速了开发过程中的构建和启动时间。</p>","<p>具体来说，它的工作原理如下：</p>",`<ol>
<li>依赖识别和路径补全： Vite 会首先识别项目中需要的依赖，并对非绝对路径或相对路径的引用进行路径补全。比如，Vue 的加载路径会变为 node_modules/.vite/deps/Vue.js?v=1484ebe8，这一路径显示了 Vite 在 node_modules/.vite/deps 文件夹下存放了经过预处理的依赖文件。</li>
<li>转换成 ES 模块： 一些第三方包（特别是遵循 CommonJS 规范的包）在浏览器中无法直接使用。为了应对这种情况，Vite 会使用 esbuild 工具将这些依赖转换为符合 ES 模块规范的代码。转换后的代码会被存放在 node_modules/.vite/deps 文件夹下，这样浏览器就能直接识别并加载这些依赖。</li>
<li>统一集成 ES 模块： Vite 会对每个包的不同模块进行统一集成，将各个分散的模块（如不同的 ES 函数或组件）合并成一个或几个文件。这不仅减少了浏览器发起多个请求的次数，还能够加快页面加载速度</li>
</ol>`],reference:"/myKMS/knowledge/framework/vite#_1-简述vite的依赖预加载机制",source:"/myKMS/knowledge/framework/vite"},{id:159,question:"vite HMR 模块热更新 (与webpack对比)",answer:["修改代码 → 浏览器自动更新 → 状态不丢失","基本工作原理",`1. 开发服务器启动时：Vite 会用 ES Module 的方式向浏览器提供源码。
2. 文件变动：Vite 通过 chokidar 监听文件改动。
3. HMR 通知：Vite Dev Server 用 WebSocket 通知浏览器“某个模块变了”。type:'update', updates 更新的文件内容
4. 模块替换：浏览器端的 Vite HMR 客户端会：尝试只替换改动的模块（比如 .vue 组件、.css 文件）。如i18n.json 文件修改, 会刷新页面
5. import.meta.hot 可以手动控制 HMR 行为
6. Vite 内部维护一份 模块依赖图,向上传播，找接受更新的模块, 如果无法安全替换（比如入口文件改了），就会触发 整页刷新。`,"Webpack HMR:基本原理一致, 开发时需要 打包，生成 bundle.js, 因为有打包过程，HMR 会比 Vite 慢","为什么 Vite 的 HMR 比 Webpack 快？",`1. **Vite 基于 原生 ESM，不用重新打整个 bundle。**
  2. **改动时只编译改动文件（按需编译）。**
  3. **Webpack 需要走完整的打包流程，依赖图越大更新越慢。**
  4. 所以在大项目里，Webpack 热更新可能要几秒，而 Vite 通常 <100ms。`,"Vite 如何实现 React/Vue 的状态保留热更新？",`1. React：通过 @vitejs/plugin-react 集成 react-refresh，在替换组件时保留 Hook 状态。
  2. Vue：通过 @vitejs/plugin-vue，在替换 .vue 组件时保留组件实例的响应式状态。
  3. 本质：框架层插件拦截 HMR 更新过程，执行“局部替换 + 状态迁移”。`,"Vite HMR 可能带来的问题？",`1. 内存泄漏：模块替换时没清理事件监听 / 定时器。
  2. 调试复杂度：和实际生产行为不一致（生产中没有 HMR）。
  3. 兼容性问题：某些第三方库没有 HMR 支持，只能整页刷新`],answerHtml:["<p>修改代码 → 浏览器自动更新 → 状态不丢失</p>","<p>基本工作原理</p>",`<ol>
<li>开发服务器启动时：Vite 会用 ES Module 的方式向浏览器提供源码。</li>
<li>文件变动：Vite 通过 chokidar 监听文件改动。</li>
<li>HMR 通知：Vite Dev Server 用 WebSocket 通知浏览器“某个模块变了”。type:'update', updates 更新的文件内容</li>
<li>模块替换：浏览器端的 Vite HMR 客户端会：尝试只替换改动的模块（比如 .vue 组件、.css 文件）。如i18n.json 文件修改, 会刷新页面</li>
<li>import.meta.hot 可以手动控制 HMR 行为</li>
<li>Vite 内部维护一份 模块依赖图,向上传播，找接受更新的模块, 如果无法安全替换（比如入口文件改了），就会触发 整页刷新。</li>
</ol>`,"<p>Webpack HMR:基本原理一致, 开发时需要 打包，生成 bundle.js, 因为有打包过程，HMR 会比 Vite 慢</p>","<p>为什么 Vite 的 HMR 比 Webpack 快？</p>",`<ol>
<li><strong>Vite 基于 原生 ESM，不用重新打整个 bundle。</strong></li>
<li><strong>改动时只编译改动文件（按需编译）。</strong></li>
<li><strong>Webpack 需要走完整的打包流程，依赖图越大更新越慢。</strong></li>
<li>所以在大项目里，Webpack 热更新可能要几秒，而 Vite 通常 &lt;100ms。</li>
</ol>`,"<p>Vite 如何实现 React/Vue 的状态保留热更新？</p>",`<ol>
<li>React：通过 @vitejs/plugin-react 集成 react-refresh，在替换组件时保留 Hook 状态。</li>
<li>Vue：通过 @vitejs/plugin-vue，在替换 .vue 组件时保留组件实例的响应式状态。</li>
<li>本质：框架层插件拦截 HMR 更新过程，执行“局部替换 + 状态迁移”。</li>
</ol>`,"<p>Vite HMR 可能带来的问题？</p>",`<ol>
<li>内存泄漏：模块替换时没清理事件监听 / 定时器。</li>
<li>调试复杂度：和实际生产行为不一致（生产中没有 HMR）。</li>
<li>兼容性问题：某些第三方库没有 HMR 支持，只能整页刷新</li>
</ol>`],reference:"/myKMS/knowledge/framework/vite#_2-vite-hmr-模块热更新-与webpack对比",source:"/myKMS/knowledge/framework/vite"},{id:160,question:"Webpack 与 Vite",answer:[`| 对比项              | **Webpack**                                     | **Vite**                                      |
| :--------------- | :---------------------------------------------- | :-------------------------------------------- |
| **核心思想**         | 一次性**打包所有文件**再启动开发服务器                           | **按需编译（ESM 原生支持）**，依赖与源码分离处理                  |
| **启动阶段**         | 需先打包整个项目（构建依赖图 → 打包输出）                          | 启动极快，仅分析依赖，不预打包源码                             |
| **开发模式 (dev)**   | 使用 webpack-dev-server：<br>所有模块打包成 bundle 后再提供服务 | 使用原生 ESM：<br>直接通过浏览器请求模块，Vite 拦截并按需编译返回       |
| **热更新 (HMR)**    | 修改文件后需重新打包相关 chunk，代价较高                         | 仅重新编译变动的模块源码（原生 ESM 热替换），非常快                  |
| **构建阶段 (build)** | 打包时用 loader + plugin 处理所有文件，输出 bundle           | 构建阶段由 **Rollup** 完成打包（利用 ESM 静态分析）            |
| **打包粒度**         | 依赖与源码一起打包成 bundle                               | 依赖单独预构建（esbuild），源码按需处理                       |
| **依赖处理**         | JS、CSS、图片等都需 loader 解析                          | 依赖模块（node_modules）由 **esbuild** 预构建，源码按请求动态编译 |
| **性能瓶颈**         | 打包体积大、编译速度慢（依赖 AST 分析）                          | 使用 **esbuild（Go 编写）**，依赖构建快 10-100 倍          |
| **构建结果**         | 输出多个 bundle 文件                                  | 输出原生 ESM 模块（经 Rollup 优化）                      |
| **适用场景**         | 大型复杂项目，生态成熟（如 React + Webpack5）                 | 快速开发、现代浏览器环境（Vue3、React18）                    |
| **插件机制**         | Tapable 构建的复杂插件系统                               | Rollup + Vite Hook，轻量、直观                      |
| **配置复杂度**        | 配置项繁多（entry、loader、plugin 等）                    | 默认开箱即用，配置极简（vite.config.js）                   |
| **首次启动速度**       | 慢：需先打完整包                                        | 快：直接启动服务器即可运行                                 |
| **生产打包速度**       | 中等（依赖 JS 解析打包）                                  | 快：esbuild + Rollup 组合优化                       |
| **调试体验**         | 源码被打包，调试路径复杂                                    | 源码即模块，调试路径清晰                                  |
| **静态资源处理**       | 需配置 loader（file-loader/url-loader）              | 内置资源处理机制，直接 import 即可                         |
| **依赖缓存**         | 可配置 cache-loader                                | 自动缓存依赖（esbuild 缓存 + HTTP 缓存）                  |`,"- webpack 的打包流程: 读取配置 → 创建 Compiler → 从入口构建依赖图 → Loader 转换模块 → Plugin 优化 → 生成 Chunk → 输出文件。","- vite 开发时走原生 ESM + 按需编译，而生产环境走 Rollup 打包。vite 打包流程: 配置解析 -> 调用 Rollup 构建 -> 优化处理 -> 产物生成"],answerHtml:[`<table tabindex="0">
<thead>
<tr>
<th style="text-align:left">对比项</th>
<th style="text-align:left"><strong>Webpack</strong></th>
<th style="text-align:left"><strong>Vite</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><strong>核心思想</strong></td>
<td style="text-align:left">一次性<strong>打包所有文件</strong>再启动开发服务器</td>
<td style="text-align:left"><strong>按需编译（ESM 原生支持）</strong>，依赖与源码分离处理</td>
</tr>
<tr>
<td style="text-align:left"><strong>启动阶段</strong></td>
<td style="text-align:left">需先打包整个项目（构建依赖图 → 打包输出）</td>
<td style="text-align:left">启动极快，仅分析依赖，不预打包源码</td>
</tr>
<tr>
<td style="text-align:left"><strong>开发模式 (dev)</strong></td>
<td style="text-align:left">使用 webpack-dev-server：<br>所有模块打包成 bundle 后再提供服务</td>
<td style="text-align:left">使用原生 ESM：<br>直接通过浏览器请求模块，Vite 拦截并按需编译返回</td>
</tr>
<tr>
<td style="text-align:left"><strong>热更新 (HMR)</strong></td>
<td style="text-align:left">修改文件后需重新打包相关 chunk，代价较高</td>
<td style="text-align:left">仅重新编译变动的模块源码（原生 ESM 热替换），非常快</td>
</tr>
<tr>
<td style="text-align:left"><strong>构建阶段 (build)</strong></td>
<td style="text-align:left">打包时用 loader + plugin 处理所有文件，输出 bundle</td>
<td style="text-align:left">构建阶段由 <strong>Rollup</strong> 完成打包（利用 ESM 静态分析）</td>
</tr>
<tr>
<td style="text-align:left"><strong>打包粒度</strong></td>
<td style="text-align:left">依赖与源码一起打包成 bundle</td>
<td style="text-align:left">依赖单独预构建（esbuild），源码按需处理</td>
</tr>
<tr>
<td style="text-align:left"><strong>依赖处理</strong></td>
<td style="text-align:left">JS、CSS、图片等都需 loader 解析</td>
<td style="text-align:left">依赖模块（node_modules）由 <strong>esbuild</strong> 预构建，源码按请求动态编译</td>
</tr>
<tr>
<td style="text-align:left"><strong>性能瓶颈</strong></td>
<td style="text-align:left">打包体积大、编译速度慢（依赖 AST 分析）</td>
<td style="text-align:left">使用 <strong>esbuild（Go 编写）</strong>，依赖构建快 10-100 倍</td>
</tr>
<tr>
<td style="text-align:left"><strong>构建结果</strong></td>
<td style="text-align:left">输出多个 bundle 文件</td>
<td style="text-align:left">输出原生 ESM 模块（经 Rollup 优化）</td>
</tr>
<tr>
<td style="text-align:left"><strong>适用场景</strong></td>
<td style="text-align:left">大型复杂项目，生态成熟（如 React + Webpack5）</td>
<td style="text-align:left">快速开发、现代浏览器环境（Vue3、React18）</td>
</tr>
<tr>
<td style="text-align:left"><strong>插件机制</strong></td>
<td style="text-align:left">Tapable 构建的复杂插件系统</td>
<td style="text-align:left">Rollup + Vite Hook，轻量、直观</td>
</tr>
<tr>
<td style="text-align:left"><strong>配置复杂度</strong></td>
<td style="text-align:left">配置项繁多（entry、loader、plugin 等）</td>
<td style="text-align:left">默认开箱即用，配置极简（vite.config.js）</td>
</tr>
<tr>
<td style="text-align:left"><strong>首次启动速度</strong></td>
<td style="text-align:left">慢：需先打完整包</td>
<td style="text-align:left">快：直接启动服务器即可运行</td>
</tr>
<tr>
<td style="text-align:left"><strong>生产打包速度</strong></td>
<td style="text-align:left">中等（依赖 JS 解析打包）</td>
<td style="text-align:left">快：esbuild + Rollup 组合优化</td>
</tr>
<tr>
<td style="text-align:left"><strong>调试体验</strong></td>
<td style="text-align:left">源码被打包，调试路径复杂</td>
<td style="text-align:left">源码即模块，调试路径清晰</td>
</tr>
<tr>
<td style="text-align:left"><strong>静态资源处理</strong></td>
<td style="text-align:left">需配置 loader（file-loader/url-loader）</td>
<td style="text-align:left">内置资源处理机制，直接 import 即可</td>
</tr>
<tr>
<td style="text-align:left"><strong>依赖缓存</strong></td>
<td style="text-align:left">可配置 cache-loader</td>
<td style="text-align:left">自动缓存依赖（esbuild 缓存 + HTTP 缓存）</td>
</tr>
</tbody>
</table>`,`<ul>
<li>webpack 的打包流程: 读取配置 → 创建 Compiler → 从入口构建依赖图 → Loader 转换模块 → Plugin 优化 → 生成 Chunk → 输出文件。</li>
</ul>`,`<ul>
<li>vite 开发时走原生 ESM + 按需编译，而生产环境走 Rollup 打包。vite 打包流程: 配置解析 -&gt; 调用 Rollup 构建 -&gt; 优化处理 -&gt; 产物生成</li>
</ul>`],reference:"/myKMS/knowledge/framework/vite#_3-webpack-与-vite",source:"/myKMS/knowledge/framework/vite"},{id:161,question:"ssr 是啥, 对比csr的优势和适用场景",answer:["SSR（Server-Side Rendering） 是指在服务器端生成 HTML 内容，再发送到浏览器渲染，而不是浏览器端通过 JS 生成 DOM。",`SSR 的核心实现原理:
SSR 的核心在于“同构（Isomorphic）”或“通用（Universal）”应用——即一套代码（通常是 React, Vue, Svelte 等）既能在服务器上运行，也能在客户端上运行。`,"核心实现流程如下：","1. 请求到达服务器","2. 服务器端路由与数据获取",`- 路由匹配: 服务器根据请求的 URL 匹配到对应的页面组件
- 数据预取: 服务器在渲染组件之前，会执行该页面组件定义的“服务器端数据获取函数”（例如 Next.js 中的 getServerSideProps）。它会去调用数据库或 API，获取 ID 为 123 的产品数据。`,"3. 服务器端渲染（Render to String）",`- 服务器使用框架提供的服务器端渲染 API（例如 React 的 ReactDOMServer.renderToString()）来“执行”组件。
- 由于在第 2 步已经获取了数据，组件会被填充完整的数据（产品名称、价格、描述等）。
- 这个执行过程的产物不是一个虚拟 DOM，而是一个完整的 HTML 字符串。`,"4. 响应与首次渲染",`- 服务器将这个完整的 HTML 字符串打包成一个 HTTP 响应，发送给浏览器。
- 浏览器接收到 HTML 后，立即解析并渲染。用户此时立刻就能看到页面的完整内容（这就是首屏加载极快的原因）。
- 注意：此时的页面只是“静态的”，没有任何交互（点击按钮没反应），因为它对应的 JavaScript 还没执行。`,`5. Hydration（注水/激活）
   - 在浏览器渲染 HTML 的同时，它会开始下载 CSR 模式下也需要的 JavaScript 包（例如 app.js）。
   - JS 下载并执行后，框架（如 React/Vue）会在客户端再次运行。
   - 但它不会粗暴地重新渲染并替换所有 DOM，而是执行一个称为 **"Hydration"（注水）**的过程。
   - Hydration 会**“接管”**服务器渲染的静态 DOM，遍历虚拟 DOM 和真实 DOM，将事件监听器（如 onClick）附加到现有的 HTML 元素上。
   - 这个过程完成后，页面就从“静态 HTML”变成了“可交互的单页应用（SPA）”。`,"核心流程图： **用户请求 → 服务器路由 → 服务器获取数据 → 服务器渲染 (生成HTML字符串) → 浏览器接收HTML并立即显示 → (并行)浏览器下载JS → JS执行 (Hydration) → 页面完全可交互**","SSR 相比 CSR 的不可替代优势:","CSR 最大的问题是“白屏时间长”和“SEO 灾难”。SSR 正是为解决这两个核心痛点而生，在以下场景具有不可替代的优势：",`- 搜索引擎优化 (SEO)
- 极致的“首屏加载速度”（FCP）`],answerHtml:["<p>SSR（Server-Side Rendering） 是指在服务器端生成 HTML 内容，再发送到浏览器渲染，而不是浏览器端通过 JS 生成 DOM。</p>",`<p>SSR 的核心实现原理:
SSR 的核心在于“同构（Isomorphic）”或“通用（Universal）”应用——即一套代码（通常是 React, Vue, Svelte 等）既能在服务器上运行，也能在客户端上运行。</p>`,"<p>核心实现流程如下：</p>",`<ol>
<li>请求到达服务器</li>
</ol>`,`<ol start="2">
<li>服务器端路由与数据获取</li>
</ol>`,`<ul>
<li>路由匹配: 服务器根据请求的 URL 匹配到对应的页面组件</li>
<li>数据预取: 服务器在渲染组件之前，会执行该页面组件定义的“服务器端数据获取函数”（例如 Next.js 中的 getServerSideProps）。它会去调用数据库或 API，获取 ID 为 123 的产品数据。</li>
</ul>`,`<ol start="3">
<li>服务器端渲染（Render to String）</li>
</ol>`,`<ul>
<li>服务器使用框架提供的服务器端渲染 API（例如 React 的 ReactDOMServer.renderToString()）来“执行”组件。</li>
<li>由于在第 2 步已经获取了数据，组件会被填充完整的数据（产品名称、价格、描述等）。</li>
<li>这个执行过程的产物不是一个虚拟 DOM，而是一个完整的 HTML 字符串。</li>
</ul>`,`<ol start="4">
<li>响应与首次渲染</li>
</ol>`,`<ul>
<li>服务器将这个完整的 HTML 字符串打包成一个 HTTP 响应，发送给浏览器。</li>
<li>浏览器接收到 HTML 后，立即解析并渲染。用户此时立刻就能看到页面的完整内容（这就是首屏加载极快的原因）。</li>
<li>注意：此时的页面只是“静态的”，没有任何交互（点击按钮没反应），因为它对应的 JavaScript 还没执行。</li>
</ul>`,`<ol start="5">
<li>Hydration（注水/激活）
<ul>
<li>在浏览器渲染 HTML 的同时，它会开始下载 CSR 模式下也需要的 JavaScript 包（例如 app.js）。</li>
<li>JS 下载并执行后，框架（如 React/Vue）会在客户端再次运行。</li>
<li>但它不会粗暴地重新渲染并替换所有 DOM，而是执行一个称为 <strong>&quot;Hydration&quot;（注水）</strong>的过程。</li>
<li>Hydration 会<strong>“接管”</strong>服务器渲染的静态 DOM，遍历虚拟 DOM 和真实 DOM，将事件监听器（如 onClick）附加到现有的 HTML 元素上。</li>
<li>这个过程完成后，页面就从“静态 HTML”变成了“可交互的单页应用（SPA）”。</li>
</ul>
</li>
</ol>`,"<p>核心流程图： <strong>用户请求 → 服务器路由 → 服务器获取数据 → 服务器渲染 (生成HTML字符串) → 浏览器接收HTML并立即显示 → (并行)浏览器下载JS → JS执行 (Hydration) → 页面完全可交互</strong></p>","<p>SSR 相比 CSR 的不可替代优势:</p>","<p>CSR 最大的问题是“白屏时间长”和“SEO 灾难”。SSR 正是为解决这两个核心痛点而生，在以下场景具有不可替代的优势：</p>",`<ul>
<li>搜索引擎优化 (SEO)</li>
<li>极致的“首屏加载速度”（FCP）</li>
</ul>`],reference:"/myKMS/knowledge/framework/vite#_4-ssr-是啥-对比csr的优势和适用场景",source:"/myKMS/knowledge/framework/vite"},{id:162,question:"微前端 / import-html-entry 场景下，子应用中存在路由懒加载（dynamic import）的情况，import-html-entry 会如何处理或者需要注意什么",answer:["import-html-entry 默认只处理 index.html 中的静态 script 和 link，所以懒加载模块不会被提前 fetch 或 exec。懒加载模块会在子应用自己的 webpack runtime 中正常 fetch（通过 publicPath 拼接 URL），然后动态加载。","- 懒加载的模块执行时会使用子应用的 runtime（webpackJsonp / webpackChunk），所以如果你在 import-html-entry 里用 sandbox proxy window，需要把 webpackJsonp / webpack_require 等 runtime 挂到 proxy 上，确保 chunk 加载执行正常。","- qiankun 会在 execScripts 中注入 sandbox proxy，保证动态 import 能访问 webpack runtime。"],answerHtml:["<p>import-html-entry 默认只处理 index.html 中的静态 script 和 link，所以懒加载模块不会被提前 fetch 或 exec。懒加载模块会在子应用自己的 webpack runtime 中正常 fetch（通过 publicPath 拼接 URL），然后动态加载。</p>",`<ul>
<li>懒加载的模块执行时会使用子应用的 runtime（webpackJsonp / webpackChunk），所以如果你在 import-html-entry 里用 sandbox proxy window，需要把 webpackJsonp / webpack_require 等 runtime 挂到 proxy 上，确保 chunk 加载执行正常。</li>
</ul>`,`<ul>
<li>qiankun 会在 execScripts 中注入 sandbox proxy，保证动态 import 能访问 webpack runtime。</li>
</ul>`],reference:"/myKMS/knowledge/framework/vite#_5-微前端-import-html-entry-场景下-子应用中存在路由懒加载-dynamic-import-的情况-import-html-entry-会如何处理或者需要注意什么",source:"/myKMS/knowledge/framework/vite"},{id:163,question:"CSS-in-JS  的优缺点",answer:[`| 优点                               | 说明                                     | 实际收益                        |
| -------------------------------- | -------------------------------------- | --------------------------- |
| **1️⃣ 样式作用域自动隔离**                | 每个组件的样式自动作用于自身，不会影响全局或其他组件             | 避免 CSS 命名冲突、全局污染            |
| **2️⃣ 动态样式支持（基于状态）**             | 可以直接使用 JS 变量、props、state 动态控制样式        | 让样式与逻辑无缝联动（例如根据主题、交互状态变化）   |
| **3️⃣ 真正的组件化开发体验**               | 样式与组件逻辑紧密绑定在一起（co-located）             | 提高可维护性与可读性，代码结构更清晰          |
| **4️⃣ 消除了全局命名问题**                | 自动生成唯一 className（hash）                 | 无需再手动设计命名规范（如 BEM / SMACSS） |
| **5️⃣ 支持服务端渲染（SSR）与关键路径 CSS 提取** | 框架（如 styled-components）可在 SSR 阶段注入 CSS | 提高首屏性能、避免闪烁（FOUC）           |
| **6️⃣ 更好的主题系统支持**                | 内置 ThemeProvider 概念，可动态切换主题            | 适合暗黑模式、品牌主题等需求              |
| **7️⃣ 死代码消除（Tree Shaking 友好）**   | 未使用组件的样式不会被打包                          | 打包体积更小、更干净                  |
| **8️⃣ 类型安全（TypeScript 集成）**      | 样式属性有类型提示与检查                           | 减少拼写错误与无效样式                 |
| **9️⃣ 样式动态计算能力**                 | 可以编写逻辑，如条件判断、循环、计算值                    | 复杂 UI 响应更灵活（如动态 grid、尺寸）    |
| **🔟 无需独立 CSS 构建管线**             | 不依赖 CSS Loader / PostCSS               | 前端构建配置更轻量（尤其在 Vite 等环境）     |`,`| 缺点         | 说明                                          |
| ---------- | ------------------------------------------- |
| **运行时开销**  | 一些库（如 styled-components）会在运行时动态生成样式，性能略低    |
| **构建体积稍大** | 比纯 CSS 稍重，需要额外 runtime                      |
| **调试难度**   | 虽然 devtools 支持不错，但不如传统 CSS 文件直观             |
| **学习成本**   | 对初学者来说，需要理解 styled-components 或 Emotion API |`,`| 场景                  | 是否推荐使用 CSS-in-JS |
| ------------------- | ---------------- |
| 设计系统 / UI 库（需要主题支持） | ✅ 强烈推荐           |
| React / Vue 组件化项目   | ✅ 推荐             |
| 静态网站（CSS 变化少）       | ⚙️ 可选            |
| 大型老项目（已用 SASS/BEM）  | ⚠️ 慎重迁移，成本较高     |`],answerHtml:[`<table tabindex="0">
<thead>
<tr>
<th>优点</th>
<th>说明</th>
<th>实际收益</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>1️⃣ 样式作用域自动隔离</strong></td>
<td>每个组件的样式自动作用于自身，不会影响全局或其他组件</td>
<td>避免 CSS 命名冲突、全局污染</td>
</tr>
<tr>
<td><strong>2️⃣ 动态样式支持（基于状态）</strong></td>
<td>可以直接使用 JS 变量、props、state 动态控制样式</td>
<td>让样式与逻辑无缝联动（例如根据主题、交互状态变化）</td>
</tr>
<tr>
<td><strong>3️⃣ 真正的组件化开发体验</strong></td>
<td>样式与组件逻辑紧密绑定在一起（co-located）</td>
<td>提高可维护性与可读性，代码结构更清晰</td>
</tr>
<tr>
<td><strong>4️⃣ 消除了全局命名问题</strong></td>
<td>自动生成唯一 className（hash）</td>
<td>无需再手动设计命名规范（如 BEM / SMACSS）</td>
</tr>
<tr>
<td><strong>5️⃣ 支持服务端渲染（SSR）与关键路径 CSS 提取</strong></td>
<td>框架（如 styled-components）可在 SSR 阶段注入 CSS</td>
<td>提高首屏性能、避免闪烁（FOUC）</td>
</tr>
<tr>
<td><strong>6️⃣ 更好的主题系统支持</strong></td>
<td>内置 ThemeProvider 概念，可动态切换主题</td>
<td>适合暗黑模式、品牌主题等需求</td>
</tr>
<tr>
<td><strong>7️⃣ 死代码消除（Tree Shaking 友好）</strong></td>
<td>未使用组件的样式不会被打包</td>
<td>打包体积更小、更干净</td>
</tr>
<tr>
<td><strong>8️⃣ 类型安全（TypeScript 集成）</strong></td>
<td>样式属性有类型提示与检查</td>
<td>减少拼写错误与无效样式</td>
</tr>
<tr>
<td><strong>9️⃣ 样式动态计算能力</strong></td>
<td>可以编写逻辑，如条件判断、循环、计算值</td>
<td>复杂 UI 响应更灵活（如动态 grid、尺寸）</td>
</tr>
<tr>
<td><strong>🔟 无需独立 CSS 构建管线</strong></td>
<td>不依赖 CSS Loader / PostCSS</td>
<td>前端构建配置更轻量（尤其在 Vite 等环境）</td>
</tr>
</tbody>
</table>`,`<table tabindex="0">
<thead>
<tr>
<th>缺点</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>运行时开销</strong></td>
<td>一些库（如 styled-components）会在运行时动态生成样式，性能略低</td>
</tr>
<tr>
<td><strong>构建体积稍大</strong></td>
<td>比纯 CSS 稍重，需要额外 runtime</td>
</tr>
<tr>
<td><strong>调试难度</strong></td>
<td>虽然 devtools 支持不错，但不如传统 CSS 文件直观</td>
</tr>
<tr>
<td><strong>学习成本</strong></td>
<td>对初学者来说，需要理解 styled-components 或 Emotion API</td>
</tr>
</tbody>
</table>`,`<table tabindex="0">
<thead>
<tr>
<th>场景</th>
<th>是否推荐使用 CSS-in-JS</th>
</tr>
</thead>
<tbody>
<tr>
<td>设计系统 / UI 库（需要主题支持）</td>
<td>✅ 强烈推荐</td>
</tr>
<tr>
<td>React / Vue 组件化项目</td>
<td>✅ 推荐</td>
</tr>
<tr>
<td>静态网站（CSS 变化少）</td>
<td>⚙️ 可选</td>
</tr>
<tr>
<td>大型老项目（已用 SASS/BEM）</td>
<td>⚠️ 慎重迁移，成本较高</td>
</tr>
</tbody>
</table>`],reference:"/myKMS/knowledge/framework/vite#_6-css-in-js-的优缺点",source:"/myKMS/knowledge/framework/vite"},{id:164,question:"monorepo 仓库如何控制权限",answer:["因为所有代码都在一个 Git 仓库里，如果不设计好，任何人都能改任何模块，会带来安全、合规和代码质量风险。",`| 层级                     | 工具 / 方式                     | 控制能力               | 适合规模     |
| ---------------------- | --------------------------- | ------------------ | -------- |
| 1️⃣ Git 层              | CODEOWNERS + 分支保护           | 控制谁能合并哪部分代码        | 小到中型团队   |
| 2️⃣ CI 层               | Path filter（路径过滤）           | CI 只跑/部署有权限的项目     | 中大型      |
| 3️⃣ 代码评审层              | Review rule + PR 模板         | 自动要求特定 reviewer 审核 | 中大型      |
| 4️⃣ Monorepo 管理层       | Nx/Turborepo + Access Rules | 可视化依赖图+权限边界        | 大型团队     |
| 5️⃣ 组织层（GitHub/GitLab） | Team / Group 权限配置           | 精确到团队目录            | 超大型（多部门） |`,"1. GitHub / GitLab CODEOWNERS 文件","```\n# CODEOWNERS\n/apps/web/*          @frontend-team\n/apps/admin/*        @admin-team\n/packages/utils/*    @core-lib-team\n/packages/api/*      @backend-team\n```","作用：","触发 PR 时自动要求指定团队审核；","没有通过指定 Reviewer 的批准不能 merge；","搭配 分支保护（Branch Protection Rules） 可强制执行。","✅ 适用：中小团队；简单易行；GitHub/GitLab 都支持。","2.Git 平台组织级权限","在 GitHub / GitLab 里：","每个项目路径对应一个 Team（如 frontend, backend, ops）；","给不同路径分配 读/写/审查 权限；","对外协作者仅开放特定子目录（GitLab 支持 Subgroup ACL 更细）。"],answerHtml:["<p>因为所有代码都在一个 Git 仓库里，如果不设计好，任何人都能改任何模块，会带来安全、合规和代码质量风险。</p>",`<table tabindex="0">
<thead>
<tr>
<th>层级</th>
<th>工具 / 方式</th>
<th>控制能力</th>
<th>适合规模</th>
</tr>
</thead>
<tbody>
<tr>
<td>1️⃣ Git 层</td>
<td>CODEOWNERS + 分支保护</td>
<td>控制谁能合并哪部分代码</td>
<td>小到中型团队</td>
</tr>
<tr>
<td>2️⃣ CI 层</td>
<td>Path filter（路径过滤）</td>
<td>CI 只跑/部署有权限的项目</td>
<td>中大型</td>
</tr>
<tr>
<td>3️⃣ 代码评审层</td>
<td>Review rule + PR 模板</td>
<td>自动要求特定 reviewer 审核</td>
<td>中大型</td>
</tr>
<tr>
<td>4️⃣ Monorepo 管理层</td>
<td>Nx/Turborepo + Access Rules</td>
<td>可视化依赖图+权限边界</td>
<td>大型团队</td>
</tr>
<tr>
<td>5️⃣ 组织层（GitHub/GitLab）</td>
<td>Team / Group 权限配置</td>
<td>精确到团队目录</td>
<td>超大型（多部门）</td>
</tr>
</tbody>
</table>`,`<ol>
<li>GitHub / GitLab CODEOWNERS 文件</li>
</ol>`,`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><!--::markdown-it-async::6my1rw1zd0h2x7oyw9xdmh::--><code># CODEOWNERS
/apps/web/*          @frontend-team
/apps/admin/*        @admin-team
/packages/utils/*    @core-lib-team
/packages/api/*      @backend-team</code></pre>
</div>`,"<p>作用：</p>","<p>触发 PR 时自动要求指定团队审核；</p>","<p>没有通过指定 Reviewer 的批准不能 merge；</p>","<p>搭配 分支保护（Branch Protection Rules） 可强制执行。</p>","<p>✅ 适用：中小团队；简单易行；GitHub/GitLab 都支持。</p>","<p>2.Git 平台组织级权限</p>","<p>在 GitHub / GitLab 里：</p>","<p>每个项目路径对应一个 Team（如 frontend, backend, ops）；</p>","<p>给不同路径分配 读/写/审查 权限；</p>","<p>对外协作者仅开放特定子目录（GitLab 支持 Subgroup ACL 更细）。</p>"],reference:"/myKMS/knowledge/framework/vite#_7-monorepo-仓库如何控制权限",source:"/myKMS/knowledge/framework/vite"},{id:165,question:"vue 动态渲染组件的原理是什么",answer:[`**本质是根据虚拟 DOM（VNode）的 type 动态切换组件**
动态组件就是根据 VNode 的 type 动态 patch，不同类型就卸载旧组件、挂载新组件。`,'-`Vue 模板编译 <component :is="currentComponent"> → createVNode(currentComponent)`',`- 当 currentComponent 变化：
  - 生成新的 VNode
  - 调用 patch(oldVNode, newVNode)
  - 对比 VNode 类型：
    - 类型相同 → 复用组件实例
    - 类型不同 → 卸载旧组件，挂载新组件`,`如果是字符串 → 查找全局组件注册表
如果是组件对象 → 返回组件本身`,"**Vue 动态组件就是 根据 reactive/ref 的值动态生成 VNode type，然后通过 patch 更新组件实例，keep-alive 则通过缓存实例优化挂载卸载。**"],answerHtml:[`<p><strong>本质是根据虚拟 DOM（VNode）的 type 动态切换组件</strong>
动态组件就是根据 VNode 的 type 动态 patch，不同类型就卸载旧组件、挂载新组件。</p>`,"<p>-<code>Vue 模板编译 &lt;component :is=&quot;currentComponent&quot;&gt; → createVNode(currentComponent)</code></p>",`<ul>
<li>当 currentComponent 变化：
<ul>
<li>生成新的 VNode</li>
<li>调用 patch(oldVNode, newVNode)</li>
<li>对比 VNode 类型：
<ul>
<li>类型相同 → 复用组件实例</li>
<li>类型不同 → 卸载旧组件，挂载新组件</li>
</ul>
</li>
</ul>
</li>
</ul>`,`<p>如果是字符串 → 查找全局组件注册表
如果是组件对象 → 返回组件本身</p>`,"<p><strong>Vue 动态组件就是 根据 reactive/ref 的值动态生成 VNode type，然后通过 patch 更新组件实例，keep-alive 则通过缓存实例优化挂载卸载。</strong></p>"],reference:"/myKMS/knowledge/framework/vue#_1-vue-动态渲染组件的原理是什么",source:"/myKMS/knowledge/framework/vue"},{id:166,question:"Vue 项目可做哪些性能优化",answer:[`- 减少不必要的响应式追踪
  - 用 markRaw() 包装不需要响应的对象
  - 使用 shallowReactive / shallowRef 避免深层递归依赖
- 使用 key 保证组件复用正确
- 合理的使用指令
  - 合理的使用 v-if 和 v-show 指令，避免不必要的渲染。
  - 使用 v-for 时，尽量提供唯一的 key ，避免重复渲染。
  - 使用 v-once 指令，只渲染一次，避免不必要的计算。
  - 使用 v-memo 指令，对使用v-for生成的列表进行渲染优化
- 组件优化
  - 合理使用 keep-alive 组件，缓存组件实例，避免重复渲染。
  - 合理划分组件，提升复用性和渲染性能。
- 响应式优化
  - watch的优化: 避免滥用深度监听，降低性能开销。对于频繁触发的响应式数据变化，可以通过防抖和节流优化监听逻辑。
- 异步组件懒加载
- 合理使用 Teleport 与 Suspense
- 减少模板内复杂计算
- 代码分割 & 按需加载
- Tree Shaking + 移除无用依赖
- 懒加载
- 渲染加 key
- 虚拟滚动
- ...`],answerHtml:[`<ul>
<li>减少不必要的响应式追踪
<ul>
<li>用 markRaw() 包装不需要响应的对象</li>
<li>使用 shallowReactive / shallowRef 避免深层递归依赖</li>
</ul>
</li>
<li>使用 key 保证组件复用正确</li>
<li>合理的使用指令
<ul>
<li>合理的使用 v-if 和 v-show 指令，避免不必要的渲染。</li>
<li>使用 v-for 时，尽量提供唯一的 key ，避免重复渲染。</li>
<li>使用 v-once 指令，只渲染一次，避免不必要的计算。</li>
<li>使用 v-memo 指令，对使用v-for生成的列表进行渲染优化</li>
</ul>
</li>
<li>组件优化
<ul>
<li>合理使用 keep-alive 组件，缓存组件实例，避免重复渲染。</li>
<li>合理划分组件，提升复用性和渲染性能。</li>
</ul>
</li>
<li>响应式优化
<ul>
<li>watch的优化: 避免滥用深度监听，降低性能开销。对于频繁触发的响应式数据变化，可以通过防抖和节流优化监听逻辑。</li>
</ul>
</li>
<li>异步组件懒加载</li>
<li>合理使用 Teleport 与 Suspense</li>
<li>减少模板内复杂计算</li>
<li>代码分割 &amp; 按需加载</li>
<li>Tree Shaking + 移除无用依赖</li>
<li>懒加载</li>
<li>渲染加 key</li>
<li>虚拟滚动</li>
<li>...</li>
</ul>`],reference:"/myKMS/knowledge/framework/vue#_2-vue-项目可做哪些性能优化",source:"/myKMS/knowledge/framework/vue"},{id:167,question:"nextTick 原理是什么",answer:["**nextTick在下次 DOM 更新循环结束后执行回调，确保我们能操作到最新的 DOM 状态。**","Vue 采用 异步批量更新策略：",`- 收集本轮所有的更新任务；
- 等当前“事件循环”结束后，一次性刷新 DOM；
- 保证更新最少、性能最好。`,"Vue 3 的 nextTick 实际上是封装了一个**微任务调度器（microtask scheduler）**。",`\`\`\`
// Vue3 内部核心实现伪代码
let pending = false
const queue = []

function queueFlush() {
  if (!pending) {
    pending = true
    Promise.resolve().then(flushJobs) // 微任务
  }
}

function flushJobs() {
  pending = false
  // 执行 watcher、渲染任务
  ...
  // 执行 nextTick 回调
  flushPostFlushCbs()
}

export function nextTick(cb) {
  return cb ? Promise.resolve().then(cb) : Promise.resolve()
}
\`\`\``,"Vue 内部维护了多个“任务队列”，它们依次执行：",`| 队列名                 | 作用                             | 举例                          |
| ------------------- | ------------------------------ | --------------------------- |
| **job queue**       | 收集响应式副作用更新（组件 render、watch 回调） | 数据变化后重新渲染组件                 |
| **postFlushCbs**    | DOM 更新后执行                      | nextTick 回调、watch post 回调   |
| **microtask queue** | 最底层调度机制                        | Promise.resolve().then(...) |`,"所以 nextTick() 实际是在 DOM 更新完（flushJobs 执行后）被触发的。","因此 nextTick() 实际上是一个微任务级别的等待；所以它总是保证在本轮 DOM 更新完成后执行。",`**nextTick 一定比 setTimeout 先执行。**
因为：`,`- nextTick 底层用的是 微任务（microtask）；
- setTimeout 属于 宏任务（macrotask）；
- 在一次事件循环中，微任务总是早于宏任务执行。`,"nextTick 回调 再dom 渲染之后, 宏任务执行之前."],answerHtml:["<p><strong>nextTick在下次 DOM 更新循环结束后执行回调，确保我们能操作到最新的 DOM 状态。</strong></p>","<p>Vue 采用 异步批量更新策略：</p>",`<ul>
<li>收集本轮所有的更新任务；</li>
<li>等当前“事件循环”结束后，一次性刷新 DOM；</li>
<li>保证更新最少、性能最好。</li>
</ul>`,"<p>Vue 3 的 nextTick 实际上是封装了一个<strong>微任务调度器（microtask scheduler）</strong>。</p>",`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><!--::markdown-it-async::2rfbyqvjsakyf4a8ukfmj::--><code>// Vue3 内部核心实现伪代码
let pending = false
const queue = []

function queueFlush() {
  if (!pending) {
    pending = true
    Promise.resolve().then(flushJobs) // 微任务
  }
}

function flushJobs() {
  pending = false
  // 执行 watcher、渲染任务
  ...
  // 执行 nextTick 回调
  flushPostFlushCbs()
}

export function nextTick(cb) {
  return cb ? Promise.resolve().then(cb) : Promise.resolve()
}</code></pre>
</div>`,"<p>Vue 内部维护了多个“任务队列”，它们依次执行：</p>",`<table tabindex="0">
<thead>
<tr>
<th>队列名</th>
<th>作用</th>
<th>举例</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>job queue</strong></td>
<td>收集响应式副作用更新（组件 render、watch 回调）</td>
<td>数据变化后重新渲染组件</td>
</tr>
<tr>
<td><strong>postFlushCbs</strong></td>
<td>DOM 更新后执行</td>
<td>nextTick 回调、watch post 回调</td>
</tr>
<tr>
<td><strong>microtask queue</strong></td>
<td>最底层调度机制</td>
<td>Promise.resolve().then(...)</td>
</tr>
</tbody>
</table>`,"<p>所以 nextTick() 实际是在 DOM 更新完（flushJobs 执行后）被触发的。</p>","<p>因此 nextTick() 实际上是一个微任务级别的等待；所以它总是保证在本轮 DOM 更新完成后执行。</p>",`<p><strong>nextTick 一定比 setTimeout 先执行。</strong>
因为：</p>`,`<ul>
<li>nextTick 底层用的是 微任务（microtask）；</li>
<li>setTimeout 属于 宏任务（macrotask）；</li>
<li>在一次事件循环中，微任务总是早于宏任务执行。</li>
</ul>`,"<p>nextTick 回调 再dom 渲染之后, 宏任务执行之前.</p>"],reference:"/myKMS/knowledge/framework/vue#_3-nexttick-原理是什么",source:"/myKMS/knowledge/framework/vue"},{id:168,question:"如何统一监听 Vue 组件报错",answer:["在 Vue 3 中，可以通过 全局错误处理器 （errorHandler） 和 生命周期钩子（例如 onErrorCaptured ）来统一监听和处理组件中的错误.",`- 通过全局错误处理器 app.config.errorHandler
- 局部错误捕获（onErrorCaptured）
- Vue 只能捕获「Vue 运行时错误」，但是有些错误是全局 JavaScript 运行时错误（例如异步请求、脚本加载失败）。需要配合浏览器原生错误监听`],answerHtml:["<p>在 Vue 3 中，可以通过 全局错误处理器 （errorHandler） 和 生命周期钩子（例如 onErrorCaptured ）来统一监听和处理组件中的错误.</p>",`<ul>
<li>通过全局错误处理器 app.config.errorHandler</li>
<li>局部错误捕获（onErrorCaptured）</li>
<li>Vue 只能捕获「Vue 运行时错误」，但是有些错误是全局 JavaScript 运行时错误（例如异步请求、脚本加载失败）。需要配合浏览器原生错误监听</li>
</ul>`],reference:"/myKMS/knowledge/framework/vue#_4-如何统一监听-vue-组件报错",source:"/myKMS/knowledge/framework/vue"},{id:169,question:"什么是 MVVM",answer:["MVVM（Model-View-ViewModel） 是一种用于构建用户界面的架构模式，用于现代的前端开发框架（Vue、Angular）。它通过 数据绑定 和 视图模型 提供了高效的 UI 更新和数据同步机制。","MVVM 模式主要由 Model （模型）、 View （视图）、 ViewModel （视图模型）三个部分组成。",`Model表示程序的核心数据和业务逻辑，它不关心用户界面，只负责数据的获取、存储和处理，并提供与外界交互的接口。
View负责展示数据和用户交互，简单来说他就是我们看到的UI 组件或 HTML 页面。
ViewModel是连接 View 和 Model 的桥梁，它不直接操作视图或模型，而是通过数据绑定将两者连接起来。`,"**MVVM：让数据和视图自动同步（双向绑定）**",`React 是一种 UI 声明式渲染的 View 层库，核心是 函数式 + 单向数据流。
Vue 是 MVVM 模型`,"| 对比项  | Vue (MVVM)     | React (View + State)       |\n| ---- | -------------- | -------------------------- |\n| 数据流  | 双向绑定           | 单向数据流                      |\n| 绑定方式 | `v-model` 自动同步 | 手动 `onChange` + `setState` |\n| 响应系统 | Proxy 响应式追踪    | 调用 `setState` 触发重新渲染       |\n| 哲学思想 | 声明式 + 响应式      | 函数式 + 纯 UI 渲染              |\n| 框架定位 | 完整 MVVM 框架     | UI 库（View 层）               |"],answerHtml:["<p>MVVM（Model-View-ViewModel） 是一种用于构建用户界面的架构模式，用于现代的前端开发框架（Vue、Angular）。它通过 数据绑定 和 视图模型 提供了高效的 UI 更新和数据同步机制。</p>","<p>MVVM 模式主要由 Model （模型）、 View （视图）、 ViewModel （视图模型）三个部分组成。</p>",`<p>Model表示程序的核心数据和业务逻辑，它不关心用户界面，只负责数据的获取、存储和处理，并提供与外界交互的接口。
View负责展示数据和用户交互，简单来说他就是我们看到的UI 组件或 HTML 页面。
ViewModel是连接 View 和 Model 的桥梁，它不直接操作视图或模型，而是通过数据绑定将两者连接起来。</p>`,"<p><strong>MVVM：让数据和视图自动同步（双向绑定）</strong></p>",`<p>React 是一种 UI 声明式渲染的 View 层库，核心是 函数式 + 单向数据流。
Vue 是 MVVM 模型</p>`,`<table tabindex="0">
<thead>
<tr>
<th>对比项</th>
<th>Vue (MVVM)</th>
<th>React (View + State)</th>
</tr>
</thead>
<tbody>
<tr>
<td>数据流</td>
<td>双向绑定</td>
<td>单向数据流</td>
</tr>
<tr>
<td>绑定方式</td>
<td><code>v-model</code> 自动同步</td>
<td>手动 <code>onChange</code> + <code>setState</code></td>
</tr>
<tr>
<td>响应系统</td>
<td>Proxy 响应式追踪</td>
<td>调用 <code>setState</code> 触发重新渲染</td>
</tr>
<tr>
<td>哲学思想</td>
<td>声明式 + 响应式</td>
<td>函数式 + 纯 UI 渲染</td>
</tr>
<tr>
<td>框架定位</td>
<td>完整 MVVM 框架</td>
<td>UI 库（View 层）</td>
</tr>
</tbody>
</table>`],reference:"/myKMS/knowledge/framework/vue#_5-什么是-mvvm",source:"/myKMS/knowledge/framework/vue"},{id:170,question:"Vue 组件初始化的各个阶段都做了什么？",answer:["从组件的创建到挂载到页面，再到组件的更新和销毁，每个阶段都有特定的任务和职责。","🎯 组件实例创建：当我们第一次访问页面时，Vue创建组件实例，解析props、data、methods等属性方法，在组合式API中，执行 setup()。","🎯 响应式系统建立：基于 Proxy 实现 reactive、ref，建立依赖收集和触发更新机制，props 传递时自动响应式处理。","🎯 模板编译与渲染：将 template 编译为渲染函数，Vue 3 通过 静态提升等方式优化性能，Vite 预编译 SFC（单文件组件）。","🎯 DOM 挂载：执行渲染函数生成 VNode，通过 Patch 算法 转换为真实 DOM 并插入页面，同时初始化子组件。mounted（Options API）或 onMounted（Composition API）触发，可进行 DOM 操作。","🎯 响应式更新：状态变更触发 Diff 算法 计算最小 DOM 更新，beforeUpdate、updated（Options API）或 onBeforeUpdate、onUpdated（Composition API）执行相应逻辑。","🎯 组件销毁：移除 DOM，清理副作用（解绑事件、销毁 watcher、清理 effect），递归卸载子组件，触发 beforeUnmount、unmounted（Options API）或 onBeforeUnmount、onUnmounted（Composition API）。"],answerHtml:["<p>从组件的创建到挂载到页面，再到组件的更新和销毁，每个阶段都有特定的任务和职责。</p>","<p>🎯 组件实例创建：当我们第一次访问页面时，Vue创建组件实例，解析props、data、methods等属性方法，在组合式API中，执行 setup()。</p>","<p>🎯 响应式系统建立：基于 Proxy 实现 reactive、ref，建立依赖收集和触发更新机制，props 传递时自动响应式处理。</p>","<p>🎯 模板编译与渲染：将 template 编译为渲染函数，Vue 3 通过 静态提升等方式优化性能，Vite 预编译 SFC（单文件组件）。</p>","<p>🎯 DOM 挂载：执行渲染函数生成 VNode，通过 Patch 算法 转换为真实 DOM 并插入页面，同时初始化子组件。mounted（Options API）或 onMounted（Composition API）触发，可进行 DOM 操作。</p>","<p>🎯 响应式更新：状态变更触发 Diff 算法 计算最小 DOM 更新，beforeUpdate、updated（Options API）或 onBeforeUpdate、onUpdated（Composition API）执行相应逻辑。</p>","<p>🎯 组件销毁：移除 DOM，清理副作用（解绑事件、销毁 watcher、清理 effect），递归卸载子组件，触发 beforeUnmount、unmounted（Options API）或 onBeforeUnmount、onUnmounted（Composition API）。</p>"],reference:"/myKMS/knowledge/framework/vue#_6-vue-组件初始化的各个阶段都做了什么",source:"/myKMS/knowledge/framework/vue"},{id:171,question:"Vue3 如何实现双向数据绑定",answer:["**Vue 实现双向数据绑定的核心是通过响应式系统的 数据劫持和 观察者模式来实现的。**",`Vue3 实现双向绑定的本质是这三层：
数据层（Model） ←→ 响应式系统（Reactivity） ←→ 视图层（View）`,"它主要依赖三个核心模块：",`- Proxy + Reflect —— 数据劫持（响应式追踪）
- 依赖收集与触发更新（effect + scheduler）
- 模板编译生成 getter/setter 更新逻辑`,`数据劫持：reactive() / ref()
  Proxy/Reflect
  get 时依赖收集, set 时触发更新`,`- track()：记录当前副作用（watchEffect、render 等）依赖了哪个数据；
- trigger()：数据变更时，重新运行依赖的副作用函数（更新视图）。`,"Vue3 的双向绑定本质是：",`- 通过 Proxy 劫持数据 实现响应式追踪；
- 通过 effect 依赖收集与触发机制 实现自动更新；
- 通过 v-model 语法糖 + 事件机制 实现视图 ↔ 数据同步。`,`Proxy 的缺点:
- 对数组的一些边界问题
  - 数组索引越界修改无效
  - 部分原生方法不触发更新
- 性能问题
  - 嵌套非常深的对象,依赖收集和触发依然有开销
- Proxy 不支持原始类型
   - ref 是封装value的对象`],answerHtml:["<p><strong>Vue 实现双向数据绑定的核心是通过响应式系统的 数据劫持和 观察者模式来实现的。</strong></p>",`<p>Vue3 实现双向绑定的本质是这三层：
数据层（Model） ←→ 响应式系统（Reactivity） ←→ 视图层（View）</p>`,"<p>它主要依赖三个核心模块：</p>",`<ul>
<li>Proxy + Reflect —— 数据劫持（响应式追踪）</li>
<li>依赖收集与触发更新（effect + scheduler）</li>
<li>模板编译生成 getter/setter 更新逻辑</li>
</ul>`,`<p>数据劫持：reactive() / ref()
Proxy/Reflect
get 时依赖收集, set 时触发更新</p>`,`<ul>
<li>track()：记录当前副作用（watchEffect、render 等）依赖了哪个数据；</li>
<li>trigger()：数据变更时，重新运行依赖的副作用函数（更新视图）。</li>
</ul>`,"<p>Vue3 的双向绑定本质是：</p>",`<ul>
<li>通过 Proxy 劫持数据 实现响应式追踪；</li>
<li>通过 effect 依赖收集与触发机制 实现自动更新；</li>
<li>通过 v-model 语法糖 + 事件机制 实现视图 ↔ 数据同步。</li>
</ul>`,`<p>Proxy 的缺点:</p>
<ul>
<li>对数组的一些边界问题
<ul>
<li>数组索引越界修改无效</li>
<li>部分原生方法不触发更新</li>
</ul>
</li>
<li>性能问题
<ul>
<li>嵌套非常深的对象,依赖收集和触发依然有开销</li>
</ul>
</li>
<li>Proxy 不支持原始类型
<ul>
<li>ref 是封装value的对象</li>
</ul>
</li>
</ul>`],reference:"/myKMS/knowledge/framework/vue#_7-vue3-如何实现双向数据绑定",source:"/myKMS/knowledge/framework/vue"},{id:172,question:"Vue 模板编译的过程",answer:["**模板解析、AST优化 和 代码生成**",`\`\`\`
模板字符串 (template)
       ↓
[1] 解析（Parse） → 生成 AST
       ↓
[2] 转换（Transform） → 优化、静态标记、指令处理
       ↓
[3] 生成（Generate） → 输出可执行的 render 函数

\`\`\``,`1. 模板解析: Vue 使用其解析器将 HTML 模板转换为 抽象语法树（AST）。在这个阶段，Vue 会分析模板中的标签、属性和指令，生成一颗树形结构。每个节点表示模板中的一个元素或属性。
2. AST优化: Vue 在生成渲染函数前，会对 AST 进行优化。优化的核心目标是标记 静态节点，在渲染时，Vue 可以跳过这些静态节点，提升性能。 还有动态标记.
3. 代码生成: 生成渲染函数是编译的最终阶段，这个阶段会将优化后的 AST 转换成 JavaScript 渲染函数。`],answerHtml:["<p><strong>模板解析、AST优化 和 代码生成</strong></p>",`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><!--::markdown-it-async::ntpfe7hdnjheow2z3ts77::--><code>模板字符串 (template)
       ↓
[1] 解析（Parse） → 生成 AST
       ↓
[2] 转换（Transform） → 优化、静态标记、指令处理
       ↓
[3] 生成（Generate） → 输出可执行的 render 函数
</code></pre>
</div>`,`<ol>
<li>模板解析: Vue 使用其解析器将 HTML 模板转换为 抽象语法树（AST）。在这个阶段，Vue 会分析模板中的标签、属性和指令，生成一颗树形结构。每个节点表示模板中的一个元素或属性。</li>
<li>AST优化: Vue 在生成渲染函数前，会对 AST 进行优化。优化的核心目标是标记 静态节点，在渲染时，Vue 可以跳过这些静态节点，提升性能。 还有动态标记.</li>
<li>代码生成: 生成渲染函数是编译的最终阶段，这个阶段会将优化后的 AST 转换成 JavaScript 渲染函数。</li>
</ol>`],reference:"/myKMS/knowledge/framework/vue#_8-vue-模板编译的过程",source:"/myKMS/knowledge/framework/vue"},{id:173,question:"vue 异步更新",answer:["Vue 会延迟更新 DOM，等同一轮事件循环中所有状态改动都完成后，再统一执行更新。",`目的：
✅ 避免频繁的 DOM 重绘（性能优化）
✅ 保证多次修改只渲染一次（批量更新）
✅ 数据一致性：确保在同一事件循环中的所有数据变更后，视图一次性更新到最终状态。`,`\`\`\`
数据变化（Proxy.set）
       ↓
触发依赖（trigger）
       ↓
派发更新任务（scheduler → queueJob）
       ↓
进入异步任务队列（微任务）
       ↓
批量执行更新（flushJobs）
       ↓
重新渲染组件（patch → diff → DOM 更新）
\`\`\``,"**响应式数据变化 → 触发依赖 effect → 将更新任务加入微任务队列 → 批量刷新渲染。**"],answerHtml:["<p>Vue 会延迟更新 DOM，等同一轮事件循环中所有状态改动都完成后，再统一执行更新。</p>",`<p>目的：
✅ 避免频繁的 DOM 重绘（性能优化）
✅ 保证多次修改只渲染一次（批量更新）
✅ 数据一致性：确保在同一事件循环中的所有数据变更后，视图一次性更新到最终状态。</p>`,`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><!--::markdown-it-async::juibhqbajylq2yvkv2q37h::--><code>数据变化（Proxy.set）
       ↓
触发依赖（trigger）
       ↓
派发更新任务（scheduler → queueJob）
       ↓
进入异步任务队列（微任务）
       ↓
批量执行更新（flushJobs）
       ↓
重新渲染组件（patch → diff → DOM 更新）</code></pre>
</div>`,"<p><strong>响应式数据变化 → 触发依赖 effect → 将更新任务加入微任务队列 → 批量刷新渲染。</strong></p>"],reference:"/myKMS/knowledge/framework/vue#_9-vue-异步更新",source:"/myKMS/knowledge/framework/vue"},{id:174,question:"vue watch computed 的区别",answer:["| 特性            | `computed`                                                | `watch`                                 |\n| ------------- | --------------------------------------------------------- | --------------------------------------- |\n| 目的 / 语义       | 用于声明式地 “从状态推导 / 派生” 一个响应式的新值                              | 用于监听状态变化，执行副作用逻辑（如 API 请求、日志、手动修改等）     |\n| 缓存 / 重算       | 有缓存机制，只有依赖变化时才重新计算                                        | 每次被监听的源变化时，回调都会执行（无缓存）                  |\n| 延迟 / 惰性       | 惰性求值 —— 只有在被访问时才计算                                        | 立即触发（可配置 `immediate: true`）             |\n| 副作用能力         | 不推荐在 computed 中写副作用（应保持纯函数）                               | 正是用来执行副作用的场景，如异步操作、状态同步、DOM 操作等         |\n| 输入 / 输出       | 通常是同步逻辑，返回值给模板或其他计算使用                                     | 回调可接收新值和旧值，执行任意复杂逻辑                     |\n| 依赖跟踪          | 自动追踪内部访问的响应式变量作为依赖                                        | 明确指定被监听的响应式源（ref / reactive / getter 等） |\n| 是否能监听深层对象 /数组 | 默认浅依赖；对于深层嵌套需要用 `computed(() => JSON.stringify(...))` 等技巧 | 可设置 `deep: true` 监听嵌套属性变化               |\n| 适合场景          | 计算属性、派生状态、模板绑定等                                           | 异步逻辑、数据拉取、条件触发、清理副作用、观察状态变化等            |",`原理:
- computed 底层是用 Vue 的响应式系统（effect + 依赖收集）包装的“缓存 getter”机制。只有其内部依赖发生变化时，才重新执行计算。`,"- watch 则是一个高阶封装，让你监听某个响应式源的变化，并在变化时执行回调。它不会缓存回调的结果，也不会阻止重复调用。"],answerHtml:[`<table tabindex="0">
<thead>
<tr>
<th>特性</th>
<th><code>computed</code></th>
<th><code>watch</code></th>
</tr>
</thead>
<tbody>
<tr>
<td>目的 / 语义</td>
<td>用于声明式地 “从状态推导 / 派生” 一个响应式的新值</td>
<td>用于监听状态变化，执行副作用逻辑（如 API 请求、日志、手动修改等）</td>
</tr>
<tr>
<td>缓存 / 重算</td>
<td>有缓存机制，只有依赖变化时才重新计算</td>
<td>每次被监听的源变化时，回调都会执行（无缓存）</td>
</tr>
<tr>
<td>延迟 / 惰性</td>
<td>惰性求值 —— 只有在被访问时才计算</td>
<td>立即触发（可配置 <code>immediate: true</code>）</td>
</tr>
<tr>
<td>副作用能力</td>
<td>不推荐在 computed 中写副作用（应保持纯函数）</td>
<td>正是用来执行副作用的场景，如异步操作、状态同步、DOM 操作等</td>
</tr>
<tr>
<td>输入 / 输出</td>
<td>通常是同步逻辑，返回值给模板或其他计算使用</td>
<td>回调可接收新值和旧值，执行任意复杂逻辑</td>
</tr>
<tr>
<td>依赖跟踪</td>
<td>自动追踪内部访问的响应式变量作为依赖</td>
<td>明确指定被监听的响应式源（ref / reactive / getter 等）</td>
</tr>
<tr>
<td>是否能监听深层对象 /数组</td>
<td>默认浅依赖；对于深层嵌套需要用 <code>computed(() =&gt; JSON.stringify(...))</code> 等技巧</td>
<td>可设置 <code>deep: true</code> 监听嵌套属性变化</td>
</tr>
<tr>
<td>适合场景</td>
<td>计算属性、派生状态、模板绑定等</td>
<td>异步逻辑、数据拉取、条件触发、清理副作用、观察状态变化等</td>
</tr>
</tbody>
</table>`,`<p>原理:</p>
<ul>
<li>computed 底层是用 Vue 的响应式系统（effect + 依赖收集）包装的“缓存 getter”机制。只有其内部依赖发生变化时，才重新执行计算。</li>
</ul>`,`<ul>
<li>watch 则是一个高阶封装，让你监听某个响应式源的变化，并在变化时执行回调。它不会缓存回调的结果，也不会阻止重复调用。</li>
</ul>`],reference:"/myKMS/knowledge/framework/vue#_10-vue-watch-computed-的区别",source:"/myKMS/knowledge/framework/vue"},{id:175,question:"vue3 lis",answer:[`LIS 在 Diff 中的作用：找出不需要移动的节点，最小化 DOM 操作
- 1. 将新节点映射到旧节点索引序列
- 2. 求最长递增子序列（LIS）
- 3. 非 LIS 节点移动或创建`,"能够降低时间复杂度;大型表格、树结构、虚拟列表和移动频繁但大部分节点不变的场景, 效果好."],answerHtml:[`<p>LIS 在 Diff 中的作用：找出不需要移动的节点，最小化 DOM 操作</p>
<ul>
<li>
<ol>
<li>将新节点映射到旧节点索引序列</li>
</ol>
</li>
<li>
<ol start="2">
<li>求最长递增子序列（LIS）</li>
</ol>
</li>
<li>
<ol start="3">
<li>非 LIS 节点移动或创建</li>
</ol>
</li>
</ul>`,"<p>能够降低时间复杂度;大型表格、树结构、虚拟列表和移动频繁但大部分节点不变的场景, 效果好.</p>"],reference:"/myKMS/knowledge/framework/vue#_11-vue3-lis",source:"/myKMS/knowledge/framework/vue"},{id:176,question:"vue3 类似react hooks的原理是什么?",answer:[`Composition API（组合式 API）。
虽然它们在目的（解决状态逻辑复用、组织代码）上非常相似，但它们的核心实现原理完全不同。`,`- React Hooks 的原理：基于“调用顺序”和“链表”
- Vue Composition API 的原理：基于“响应式系统”和“依赖追踪”`,`React Hooks 的核心原理: 
- 核心机制：基于“调用顺序”
- 运行方式： React 组件的函数体在每次渲染时都会重新执行。`,`React 在内部为每个组件实例维护了一个**特殊数据结构（可以想象成一个数组或链表）**来存储 Hooks 的状态。
这就是为什么 React Hooks 有严格的“规则”：
- 不能在条件（if）或循环（for）中调用 Hooks。
- 必须在函数顶层调用`,`Vue Composition API 的核心原理:
Vue 的原理则完全不同，它不依赖于“调用顺序”，因此没有 React Hooks 的那些限制。
- 核心机制：基于“响应式系统”（Reactivity System）
- 运行方式： setup() 函数在组件实例创建时只执行一次。`,"Vue 3 的响应式系统是独立于组件的。当你调用 ref 或 reactive 时，你创建的是一个独立的、可被追踪的响应式对象。",`setup() 只执行一次
这是与 React 的最大区别。
- React 的函数组件每次渲染都会重新执行，所以它需要“调用顺序”来找回状态。
- Vue 的 setup() 只在组件初始化时执行一次。`,"**ref 和 reactive 创建的状态只被创建一次，然后被闭包引用，它们在组件的整个生命周期中都是持久的。**",`| 特性       | React Hooks                                 | Vue Composition API                                 |
| ---------- | ------------------------------------------- | --------------------------------------------------- |
| 核心原理   | 调用顺序 (Call Order)                       | 依赖追踪 (Dependency Tracking)                      |
| 状态机制   | React 内部的链表/数组                       | 独立的响应式对象 (Proxy / Ref)                      |
| 函数执行   | 组件函数每次渲染都执行                      | setup() 只执行一次                                  |
| 使用限制   | 有（Rules of Hooks，不能在 if/for 中）       | 无（可以在 if/for 中，因为状态是独立的）           |
| 心智模型   | “每次渲染都是全新的”                        | “状态是持久的，当它变化时自动触发更新”             |`],answerHtml:[`<p>Composition API（组合式 API）。
虽然它们在目的（解决状态逻辑复用、组织代码）上非常相似，但它们的核心实现原理完全不同。</p>`,`<ul>
<li>React Hooks 的原理：基于“调用顺序”和“链表”</li>
<li>Vue Composition API 的原理：基于“响应式系统”和“依赖追踪”</li>
</ul>`,`<p>React Hooks 的核心原理:</p>
<ul>
<li>核心机制：基于“调用顺序”</li>
<li>运行方式： React 组件的函数体在每次渲染时都会重新执行。</li>
</ul>`,`<p>React 在内部为每个组件实例维护了一个<strong>特殊数据结构（可以想象成一个数组或链表）</strong>来存储 Hooks 的状态。
这就是为什么 React Hooks 有严格的“规则”：</p>
<ul>
<li>不能在条件（if）或循环（for）中调用 Hooks。</li>
<li>必须在函数顶层调用</li>
</ul>`,`<p>Vue Composition API 的核心原理:
Vue 的原理则完全不同，它不依赖于“调用顺序”，因此没有 React Hooks 的那些限制。</p>
<ul>
<li>核心机制：基于“响应式系统”（Reactivity System）</li>
<li>运行方式： setup() 函数在组件实例创建时只执行一次。</li>
</ul>`,"<p>Vue 3 的响应式系统是独立于组件的。当你调用 ref 或 reactive 时，你创建的是一个独立的、可被追踪的响应式对象。</p>",`<p>setup() 只执行一次
这是与 React 的最大区别。</p>
<ul>
<li>React 的函数组件每次渲染都会重新执行，所以它需要“调用顺序”来找回状态。</li>
<li>Vue 的 setup() 只在组件初始化时执行一次。</li>
</ul>`,"<p><strong>ref 和 reactive 创建的状态只被创建一次，然后被闭包引用，它们在组件的整个生命周期中都是持久的。</strong></p>",`<table tabindex="0">
<thead>
<tr>
<th>特性</th>
<th>React Hooks</th>
<th>Vue Composition API</th>
</tr>
</thead>
<tbody>
<tr>
<td>核心原理</td>
<td>调用顺序 (Call Order)</td>
<td>依赖追踪 (Dependency Tracking)</td>
</tr>
<tr>
<td>状态机制</td>
<td>React 内部的链表/数组</td>
<td>独立的响应式对象 (Proxy / Ref)</td>
</tr>
<tr>
<td>函数执行</td>
<td>组件函数每次渲染都执行</td>
<td>setup() 只执行一次</td>
</tr>
<tr>
<td>使用限制</td>
<td>有（Rules of Hooks，不能在 if/for 中）</td>
<td>无（可以在 if/for 中，因为状态是独立的）</td>
</tr>
<tr>
<td>心智模型</td>
<td>“每次渲染都是全新的”</td>
<td>“状态是持久的，当它变化时自动触发更新”</td>
</tr>
</tbody>
</table>`],reference:"/myKMS/knowledge/framework/vue#_12-vue3-类似react-hooks的原理是什么",source:"/myKMS/knowledge/framework/vue"},{id:177,question:"vue3 手写一个once修饰器",answer:[`\`\`\`

<template>
  <div>
    <h2 v-once-directive>{{ message }}</h2>
    <button @click="message = '更新后的消息'">修改 message</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const message = ref('初始内容')

// 注册自定义 once 指令
const vOnceDirective = {
  // 第一次挂载时（渲染一次）
  mounted(el, binding) {
    el._onceContent = el.innerHTML // 记录初次渲染内容
  },
  // 当数据变化时，会触发 updated 钩子
  updated(el, binding) {
    // 恢复初始内容，防止重新渲染
    el.innerHTML = el._onceContent
  }
}
<\/script>

<script>
export default {
  directives: {
    onceDirective: vOnceDirective
  }
}
<\/script>

\`\`\``,"事件",`\`\`\`

<template>
  <button v-once-click="handleClick">点击我一次</button>
</template>

<script setup>
const handleClick = () => {
  alert('只执行一次')
}

const vOnceClick = {
  mounted(el, binding) {
    const fn = (e) => {
      binding.value(e)
      el.removeEventListener('click', fn) // 移除监听
    }
    el.addEventListener('click', fn)
  }
}
<\/script>


\`\`\``,"自定义指令有很多钩子可以选择",`\`\`\`vue
const myDirective = {
  // 在绑定元素的 attribute 前
  // 或事件监听器应用前调用
  created(el, binding, vnode) {
    // 下面会介绍各个参数的细节
  },
  // 在元素被插入到 DOM 前调用
  beforeMount(el, binding, vnode) {},
  // 在绑定元素的父组件
  // 及他自己的所有子节点都挂载完成后调用
  mounted(el, binding, vnode) {},
  // 绑定元素的父组件更新前调用
  beforeUpdate(el, binding, vnode, prevVnode) {},
  // 在绑定元素的父组件
  // 及他自己的所有子节点都更新后调用
  updated(el, binding, vnode, prevVnode) {},
  // 绑定元素的父组件卸载前调用
  beforeUnmount(el, binding, vnode) {},
  // 绑定元素的父组件卸载后调用
  unmounted(el, binding, vnode) {}
}
\`\`\``],answerHtml:[`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><!--::markdown-it-async::ndj37b41qmuwlc282wb4m::--><code>
&lt;template&gt;
  &lt;div&gt;
    &lt;h2 v-once-directive&gt;{{ message }}&lt;/h2&gt;
    &lt;button @click=&quot;message = &#039;更新后的消息&#039;&quot;&gt;修改 message&lt;/button&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from &#039;vue&#039;

const message = ref(&#039;初始内容&#039;)

// 注册自定义 once 指令
const vOnceDirective = {
  // 第一次挂载时（渲染一次）
  mounted(el, binding) {
    el._onceContent = el.innerHTML // 记录初次渲染内容
  },
  // 当数据变化时，会触发 updated 钩子
  updated(el, binding) {
    // 恢复初始内容，防止重新渲染
    el.innerHTML = el._onceContent
  }
}
&lt;/script&gt;

&lt;script&gt;
export default {
  directives: {
    onceDirective: vOnceDirective
  }
}
&lt;/script&gt;
</code></pre>
</div>`,"<p>事件</p>",`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><!--::markdown-it-async::42nwuxdv04eg2wucr5kcs::--><code>
&lt;template&gt;
  &lt;button v-once-click=&quot;handleClick&quot;&gt;点击我一次&lt;/button&gt;
&lt;/template&gt;

&lt;script setup&gt;
const handleClick = () =&gt; {
  alert(&#039;只执行一次&#039;)
}

const vOnceClick = {
  mounted(el, binding) {
    const fn = (e) =&gt; {
      binding.value(e)
      el.removeEventListener(&#039;click&#039;, fn) // 移除监听
    }
    el.addEventListener(&#039;click&#039;, fn)
  }
}
&lt;/script&gt;

</code></pre>
</div>`,"<p>自定义指令有很多钩子可以选择</p>",`<div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre><!--::markdown-it-async::4ufxuj0hu4visv0r69s9w::--><code>const myDirective = {
  // 在绑定元素的 attribute 前
  // 或事件监听器应用前调用
  created(el, binding, vnode) {
    // 下面会介绍各个参数的细节
  },
  // 在元素被插入到 DOM 前调用
  beforeMount(el, binding, vnode) {},
  // 在绑定元素的父组件
  // 及他自己的所有子节点都挂载完成后调用
  mounted(el, binding, vnode) {},
  // 绑定元素的父组件更新前调用
  beforeUpdate(el, binding, vnode, prevVnode) {},
  // 在绑定元素的父组件
  // 及他自己的所有子节点都更新后调用
  updated(el, binding, vnode, prevVnode) {},
  // 绑定元素的父组件卸载前调用
  beforeUnmount(el, binding, vnode) {},
  // 绑定元素的父组件卸载后调用
  unmounted(el, binding, vnode) {}
}</code></pre>
</div>`],reference:"/myKMS/knowledge/framework/vue#_13-vue3-手写一个once修饰器",source:"/myKMS/knowledge/framework/vue"}],$i={class:"random-question__modal"},Ui={key:0,class:"random-question__body"},Ji={class:"random-question__question"},Wi={class:"random-question__answer-blocks"},Bi=["innerHTML"],Gi=["href"],zi=f({__name:"RandomQuestionModal",props:{variant:{}},setup(n){const t=n,e=w(!1),o=w(null),r=w(0),l=S(()=>t.variant??"home"),d=S(()=>["random-question",{"random-question--nav":l.value==="nav"}]),a=S(()=>["random-question__trigger",{"random-question__trigger--nav":l.value==="nav"}]),v=S(()=>o.value?.answerHtml??[]),P=()=>{if(!on.length)return null;const I=Math.floor(Math.random()*on.length);return on[I]},C=()=>{const I=P();I&&(o.value=I,r.value++,e.value=!0)},x=()=>{const I=P();I&&(o.value=I,r.value++)},H=()=>{e.value=!1},_=()=>{H()};return(I,E)=>(i(),c("div",{class:M(d.value)},[p("button",{type:"button",class:M(a.value),onClick:C}," 🎯 随机一题 ",2),(i(),b(ot,{to:"body"},[e.value?(i(),c("div",{key:0,class:"random-question__overlay",role:"dialog","aria-modal":"true",onClick:Vn(H,["self"])},[p("div",$i,[p("header",{class:"random-question__header"},[E[0]||(E[0]=p("div",null,[p("p",{class:"random-question__eyebrow"},"Interview Drill"),p("h3",null,"随机一题")],-1)),p("button",{type:"button",class:"random-question__icon-button","aria-label":"关闭弹窗",onClick:H}," ✕ ")]),o.value?(i(),c("section",Ui,[p("p",Ji,T(o.value.question),1),v.value.length?(i(),c("details",{class:"random-question__answer",key:r.value},[E[1]||(E[1]=p("summary",null,"展开答案",-1)),p("div",Wi,[(i(!0),c(R,null,D(v.value,(O,L)=>(i(),c("div",{key:L,class:"random-question__answer-block",innerHTML:O},null,8,Bi))),128))])])):g("",!0),o.value.reference?(i(),c("a",{key:1,class:"random-question__reference",href:o.value.reference,onClick:_}," 查看原文 ",8,Gi)):g("",!0)])):g("",!0),p("footer",{class:"random-question__footer"},[p("button",{type:"button",class:"random-question__next",onClick:x}," 换一题 ")])])])):g("",!0)]))],2))}}),In=y(zi,[["__scopeId","data-v-4e1b7e9a"]]),Xi={extends:Rn,Layout:()=>Tn(Rn.Layout,null,{"nav-bar-content-before":()=>Tn(In,{variant:"nav"})}),enhanceApp({app:n,router:t,siteData:e}){n.component("Collapse",Ni),n.component("RandomQuestionModal",In)}};export{Xi as R};
