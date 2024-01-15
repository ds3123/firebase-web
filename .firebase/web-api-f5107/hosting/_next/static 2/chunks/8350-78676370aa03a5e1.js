"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8350],{3523:function(e,t,n){n.d(t,{Z:function(){return r}});/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,n(2898).Z)("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]])},3436:function(e,t,n){n.d(t,{VY:function(){return ew},aV:function(){return ed},ck:function(){return ef},fC:function(){return es},l_:function(){return eg},rU:function(){return em},xz:function(){return ev},z$:function(){return ep}});var r=n(3428),o=n(2265),a=n(4887),i=n(6989),u=n(5744),l=n(9381),c=n(3763),s=n(2210),d=n(5400),f=n(5606),v=n(966),m=n(7733),p=n(9249),w=n(5184),g=n(1030),E=n(6459),M=n(8281);let R="NavigationMenu",[C,h,b]=(0,m.B)(R),[T,_,y]=(0,m.B)(R),[N,k]=(0,i.b)(R,[b,y]),[P,D]=N(R),[x,I]=N(R),L=(0,o.forwardRef)((e,t)=>{let{__scopeNavigationMenu:n,value:a,onValueChange:i,defaultValue:u,delayDuration:f=200,skipDelayDuration:v=300,orientation:m="horizontal",dir:p,...w}=e,[g,E]=(0,o.useState)(null),M=(0,s.e)(t,e=>E(e)),R=(0,d.gm)(p),C=(0,o.useRef)(0),h=(0,o.useRef)(0),b=(0,o.useRef)(0),[T,_]=(0,o.useState)(!0),[y="",N]=(0,c.T)({prop:a,onChange:e=>{let t=v>0;""!==e?(window.clearTimeout(b.current),t&&_(!1)):(window.clearTimeout(b.current),b.current=window.setTimeout(()=>_(!0),v)),null==i||i(e)},defaultProp:u}),k=(0,o.useCallback)(()=>{window.clearTimeout(h.current),h.current=window.setTimeout(()=>N(""),150)},[N]),P=(0,o.useCallback)(e=>{window.clearTimeout(h.current),N(e)},[N]),D=(0,o.useCallback)(e=>{y===e?window.clearTimeout(h.current):C.current=window.setTimeout(()=>{window.clearTimeout(h.current),N(e)},f)},[y,N,f]);return(0,o.useEffect)(()=>()=>{window.clearTimeout(C.current),window.clearTimeout(h.current),window.clearTimeout(b.current)},[]),(0,o.createElement)(V,{scope:n,isRootMenu:!0,value:y,dir:R,orientation:m,rootNavigationMenu:g,onTriggerEnter:e=>{window.clearTimeout(C.current),T?D(e):P(e)},onTriggerLeave:()=>{window.clearTimeout(C.current),k()},onContentEnter:()=>window.clearTimeout(h.current),onContentLeave:k,onItemSelect:e=>{N(t=>t===e?"":e)},onItemDismiss:()=>N("")},(0,o.createElement)(l.WV.nav,(0,r.Z)({"aria-label":"Main","data-orientation":m,dir:R},w,{ref:M})))}),V=e=>{let{scope:t,isRootMenu:n,rootNavigationMenu:r,dir:a,orientation:i,children:u,value:l,onItemSelect:c,onItemDismiss:s,onTriggerEnter:d,onTriggerLeave:f,onContentEnter:m,onContentLeave:p}=e,[g,M]=(0,o.useState)(null),[R,h]=(0,o.useState)(new Map),[b,T]=(0,o.useState)(null);return(0,o.createElement)(P,{scope:t,isRootMenu:n,rootNavigationMenu:r,value:l,previousValue:(0,w.D)(l),baseId:(0,v.M)(),dir:a,orientation:i,viewport:g,onViewportChange:M,indicatorTrack:b,onIndicatorTrackChange:T,onTriggerEnter:(0,E.W)(d),onTriggerLeave:(0,E.W)(f),onContentEnter:(0,E.W)(m),onContentLeave:(0,E.W)(p),onItemSelect:(0,E.W)(c),onItemDismiss:(0,E.W)(s),onViewportContentChange:(0,o.useCallback)((e,t)=>{h(n=>(n.set(e,t),new Map(n)))},[]),onViewportContentRemove:(0,o.useCallback)(e=>{h(t=>t.has(e)?(t.delete(e),new Map(t)):t)},[])},(0,o.createElement)(C.Provider,{scope:t},(0,o.createElement)(x,{scope:t,items:R},u)))},F=(0,o.forwardRef)((e,t)=>{let{__scopeNavigationMenu:n,...a}=e,i=D("NavigationMenuList",n),u=(0,o.createElement)(l.WV.ul,(0,r.Z)({"data-orientation":i.orientation},a,{ref:t}));return(0,o.createElement)(l.WV.div,{style:{position:"relative"},ref:i.onIndicatorTrackChange},(0,o.createElement)(C.Slot,{scope:n},i.isRootMenu?(0,o.createElement)(ee,{asChild:!0},u):u))}),[S,W]=N("NavigationMenuItem"),A=(0,o.forwardRef)((e,t)=>{let{__scopeNavigationMenu:n,value:a,...i}=e,u=(0,v.M)(),c=(0,o.useRef)(null),s=(0,o.useRef)(null),d=(0,o.useRef)(null),f=(0,o.useRef)(()=>{}),m=(0,o.useRef)(!1),p=(0,o.useCallback)((e="start")=>{if(c.current){f.current();let t=er(c.current);t.length&&eo("start"===e?t:t.reverse())}},[]),w=(0,o.useCallback)(()=>{if(c.current){let e=er(c.current);e.length&&(f.current=(e.forEach(e=>{e.dataset.tabindex=e.getAttribute("tabindex")||"",e.setAttribute("tabindex","-1")}),()=>{e.forEach(e=>{let t=e.dataset.tabindex;e.setAttribute("tabindex",t)})}))}},[]);return(0,o.createElement)(S,{scope:n,value:a||u||"LEGACY_REACT_AUTO_VALUE",triggerRef:s,contentRef:c,focusProxyRef:d,wasEscapeCloseRef:m,onEntryKeyDown:p,onFocusProxyEnter:p,onRootContentClose:w,onContentFocusOutside:w},(0,o.createElement)(l.WV.li,(0,r.Z)({},i,{ref:t})))}),Z="NavigationMenuTrigger",K=(0,o.forwardRef)((e,t)=>{let{__scopeNavigationMenu:n,disabled:a,...i}=e,c=D(Z,e.__scopeNavigationMenu),d=W(Z,e.__scopeNavigationMenu),f=(0,o.useRef)(null),v=(0,s.e)(f,d.triggerRef,t),m=eu(c.baseId,d.value),p=el(c.baseId,d.value),w=(0,o.useRef)(!1),g=(0,o.useRef)(!1),E=d.value===c.value;return(0,o.createElement)(o.Fragment,null,(0,o.createElement)(C.ItemSlot,{scope:n,value:d.value},(0,o.createElement)(en,{asChild:!0},(0,o.createElement)(l.WV.button,(0,r.Z)({id:m,disabled:a,"data-disabled":a?"":void 0,"data-state":ei(E),"aria-expanded":E,"aria-controls":p},i,{ref:v,onPointerEnter:(0,u.M)(e.onPointerEnter,()=>{g.current=!1,d.wasEscapeCloseRef.current=!1}),onPointerMove:(0,u.M)(e.onPointerMove,ec(()=>{a||g.current||d.wasEscapeCloseRef.current||w.current||(c.onTriggerEnter(d.value),w.current=!0)})),onPointerLeave:(0,u.M)(e.onPointerLeave,ec(()=>{a||(c.onTriggerLeave(),w.current=!1)})),onClick:(0,u.M)(e.onClick,()=>{c.onItemSelect(d.value),g.current=E}),onKeyDown:(0,u.M)(e.onKeyDown,e=>{let t={horizontal:"ArrowDown",vertical:"rtl"===c.dir?"ArrowLeft":"ArrowRight"}[c.orientation];E&&e.key===t&&(d.onEntryKeyDown(),e.preventDefault())})})))),E&&(0,o.createElement)(o.Fragment,null,(0,o.createElement)(M.f,{"aria-hidden":!0,tabIndex:0,ref:d.focusProxyRef,onFocus:e=>{let t=d.contentRef.current,n=e.relatedTarget,r=n===f.current,o=null==t?void 0:t.contains(n);(r||!o)&&d.onFocusProxyEnter(r?"start":"end")}}),c.viewport&&(0,o.createElement)("span",{"aria-owns":p})))}),O="navigationMenu.linkSelect",z=(0,o.forwardRef)((e,t)=>{let{__scopeNavigationMenu:n,active:a,onSelect:i,...c}=e;return(0,o.createElement)(en,{asChild:!0},(0,o.createElement)(l.WV.a,(0,r.Z)({"data-active":a?"":void 0,"aria-current":a?"page":void 0},c,{ref:t,onClick:(0,u.M)(e.onClick,e=>{let t=e.target,n=new CustomEvent(O,{bubbles:!0,cancelable:!0});if(t.addEventListener(O,e=>null==i?void 0:i(e),{once:!0}),(0,l.jH)(t,n),!n.defaultPrevented&&!e.metaKey){let e=new CustomEvent(j,{bubbles:!0,cancelable:!0});(0,l.jH)(t,e)}},{checkForDefaultPrevented:!1})})))}),$="NavigationMenuIndicator",H=(0,o.forwardRef)((e,t)=>{let{forceMount:n,...i}=e,u=D($,e.__scopeNavigationMenu),l=!!u.value;return u.indicatorTrack?a.createPortal((0,o.createElement)(f.z,{present:n||l},(0,o.createElement)(U,(0,r.Z)({},i,{ref:t}))),u.indicatorTrack):null}),U=(0,o.forwardRef)((e,t)=>{let{__scopeNavigationMenu:n,...a}=e,i=D($,n),u=h(n),[c,s]=(0,o.useState)(null),[d,f]=(0,o.useState)(null),v="horizontal"===i.orientation,m=!!i.value;(0,o.useEffect)(()=>{var e;let t=null===(e=u().find(e=>e.value===i.value))||void 0===e?void 0:e.ref.current;t&&s(t)},[u,i.value]);let p=()=>{c&&f({size:v?c.offsetWidth:c.offsetHeight,offset:v?c.offsetLeft:c.offsetTop})};return ea(c,p),ea(i.indicatorTrack,p),d?(0,o.createElement)(l.WV.div,(0,r.Z)({"aria-hidden":!0,"data-state":m?"visible":"hidden","data-orientation":i.orientation},a,{ref:t,style:{position:"absolute",...v?{left:0,width:d.size+"px",transform:`translateX(${d.offset}px)`}:{top:0,height:d.size+"px",transform:`translateY(${d.offset}px)`},...a.style}})):null}),B="NavigationMenuContent",G=(0,o.forwardRef)((e,t)=>{let{forceMount:n,...a}=e,i=D(B,e.__scopeNavigationMenu),l=W(B,e.__scopeNavigationMenu),c=(0,s.e)(l.contentRef,t),d=l.value===i.value,v={value:l.value,triggerRef:l.triggerRef,focusProxyRef:l.focusProxyRef,wasEscapeCloseRef:l.wasEscapeCloseRef,onContentFocusOutside:l.onContentFocusOutside,onRootContentClose:l.onRootContentClose,...a};return i.viewport?(0,o.createElement)(Y,(0,r.Z)({forceMount:n},v,{ref:c})):(0,o.createElement)(f.z,{present:n||d},(0,o.createElement)(q,(0,r.Z)({"data-state":ei(d)},v,{ref:c,onPointerEnter:(0,u.M)(e.onPointerEnter,i.onContentEnter),onPointerLeave:(0,u.M)(e.onPointerLeave,ec(i.onContentLeave)),style:{pointerEvents:!d&&i.isRootMenu?"none":void 0,...v.style}})))}),Y=(0,o.forwardRef)((e,t)=>{let{onViewportContentChange:n,onViewportContentRemove:r}=D(B,e.__scopeNavigationMenu);return(0,g.b)(()=>{n(e.value,{ref:t,...e})},[e,t,n]),(0,g.b)(()=>()=>r(e.value),[e.value,r]),null}),j="navigationMenu.rootContentDismiss",q=(0,o.forwardRef)((e,t)=>{let{__scopeNavigationMenu:n,value:a,triggerRef:i,focusProxyRef:l,wasEscapeCloseRef:c,onRootContentClose:d,onContentFocusOutside:f,...v}=e,m=D(B,n),w=(0,o.useRef)(null),g=(0,s.e)(w,t),E=eu(m.baseId,a),M=el(m.baseId,a),R=h(n),C=(0,o.useRef)(null),{onItemDismiss:b}=m;(0,o.useEffect)(()=>{let e=w.current;if(m.isRootMenu&&e){let t=()=>{var t;b(),d(),e.contains(document.activeElement)&&(null===(t=i.current)||void 0===t||t.focus())};return e.addEventListener(j,t),()=>e.removeEventListener(j,t)}},[m.isRootMenu,e.value,i,b,d]);let T=(0,o.useMemo)(()=>{let e=R().map(e=>e.value);"rtl"===m.dir&&e.reverse();let t=e.indexOf(m.value),n=e.indexOf(m.previousValue),r=a===m.value,o=n===e.indexOf(a);if(!r&&!o)return C.current;let i=(()=>{if(t!==n){if(r&&-1!==n)return t>n?"from-end":"from-start";if(o&&-1!==t)return t>n?"to-start":"to-end"}return null})();return C.current=i,i},[m.previousValue,m.value,m.dir,R,a]);return(0,o.createElement)(ee,{asChild:!0},(0,o.createElement)(p.XB,(0,r.Z)({id:M,"aria-labelledby":E,"data-motion":T,"data-orientation":m.orientation},v,{ref:g,onDismiss:()=>{var e;let t=new Event(j,{bubbles:!0,cancelable:!0});null===(e=w.current)||void 0===e||e.dispatchEvent(t)},onFocusOutside:(0,u.M)(e.onFocusOutside,e=>{var t;f();let n=e.target;null!==(t=m.rootNavigationMenu)&&void 0!==t&&t.contains(n)&&e.preventDefault()}),onPointerDownOutside:(0,u.M)(e.onPointerDownOutside,e=>{var t;let n=e.target,r=R().some(e=>{var t;return null===(t=e.ref.current)||void 0===t?void 0:t.contains(n)}),o=m.isRootMenu&&(null===(t=m.viewport)||void 0===t?void 0:t.contains(n));(r||o||!m.isRootMenu)&&e.preventDefault()}),onKeyDown:(0,u.M)(e.onKeyDown,e=>{let t=e.altKey||e.ctrlKey||e.metaKey;if("Tab"===e.key&&!t){let t=er(e.currentTarget),r=document.activeElement,o=t.findIndex(e=>e===r);if(eo(e.shiftKey?t.slice(0,o).reverse():t.slice(o+1,t.length)))e.preventDefault();else{var n;null===(n=l.current)||void 0===n||n.focus()}}}),onEscapeKeyDown:(0,u.M)(e.onEscapeKeyDown,e=>{c.current=!0})})))}),X="NavigationMenuViewport",J=(0,o.forwardRef)((e,t)=>{let{forceMount:n,...a}=e,i=!!D(X,e.__scopeNavigationMenu).value;return(0,o.createElement)(f.z,{present:n||i},(0,o.createElement)(Q,(0,r.Z)({},a,{ref:t})))}),Q=(0,o.forwardRef)((e,t)=>{let{__scopeNavigationMenu:n,children:a,...i}=e,c=D(X,n),d=(0,s.e)(t,c.onViewportChange),v=I(B,e.__scopeNavigationMenu),[m,p]=(0,o.useState)(null),[w,g]=(0,o.useState)(null),E=m?(null==m?void 0:m.width)+"px":void 0,M=m?(null==m?void 0:m.height)+"px":void 0,R=!!c.value,C=R?c.value:c.previousValue;return ea(w,()=>{w&&p({width:w.offsetWidth,height:w.offsetHeight})}),(0,o.createElement)(l.WV.div,(0,r.Z)({"data-state":ei(R),"data-orientation":c.orientation},i,{ref:d,style:{pointerEvents:!R&&c.isRootMenu?"none":void 0,"--radix-navigation-menu-viewport-width":E,"--radix-navigation-menu-viewport-height":M,...i.style},onPointerEnter:(0,u.M)(e.onPointerEnter,c.onContentEnter),onPointerLeave:(0,u.M)(e.onPointerLeave,ec(c.onContentLeave))}),Array.from(v.items).map(([e,{ref:t,forceMount:n,...a}])=>{let i=C===e;return(0,o.createElement)(f.z,{key:e,present:n||i},(0,o.createElement)(q,(0,r.Z)({},a,{ref:(0,s.F)(t,e=>{i&&e&&g(e)})})))}))}),ee=(0,o.forwardRef)((e,t)=>{let{__scopeNavigationMenu:n,...a}=e,i=D("FocusGroup",n);return(0,o.createElement)(T.Provider,{scope:n},(0,o.createElement)(T.Slot,{scope:n},(0,o.createElement)(l.WV.div,(0,r.Z)({dir:i.dir},a,{ref:t}))))}),et=["ArrowRight","ArrowLeft","ArrowUp","ArrowDown"],en=(0,o.forwardRef)((e,t)=>{let{__scopeNavigationMenu:n,...a}=e,i=_(n),c=D("FocusGroupItem",n);return(0,o.createElement)(T.ItemSlot,{scope:n},(0,o.createElement)(l.WV.button,(0,r.Z)({},a,{ref:t,onKeyDown:(0,u.M)(e.onKeyDown,e=>{if(["Home","End",...et].includes(e.key)){let t=i().map(e=>e.ref.current);if(["rtl"===c.dir?"ArrowRight":"ArrowLeft","ArrowUp","End"].includes(e.key)&&t.reverse(),et.includes(e.key)){let n=t.indexOf(e.currentTarget);t=t.slice(n+1)}setTimeout(()=>eo(t)),e.preventDefault()}})})))});function er(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function eo(e){let t=document.activeElement;return e.some(e=>e===t||(e.focus(),document.activeElement!==t))}function ea(e,t){let n=(0,E.W)(t);(0,g.b)(()=>{let t=0;if(e){let r=new ResizeObserver(()=>{cancelAnimationFrame(t),t=window.requestAnimationFrame(n)});return r.observe(e),()=>{window.cancelAnimationFrame(t),r.unobserve(e)}}},[e,n])}function ei(e){return e?"open":"closed"}function eu(e,t){return`${e}-trigger-${t}`}function el(e,t){return`${e}-content-${t}`}function ec(e){return t=>"mouse"===t.pointerType?e(t):void 0}let es=L,ed=F,ef=A,ev=K,em=z,ep=H,ew=G,eg=J},5184:function(e,t,n){n.d(t,{D:function(){return o}});var r=n(2265);function o(e){let t=(0,r.useRef)({value:e,previous:e});return(0,r.useMemo)(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}},8281:function(e,t,n){n.d(t,{T:function(){return i},f:function(){return u}});var r=n(3428),o=n(2265),a=n(9381);let i=(0,o.forwardRef)((e,t)=>(0,o.createElement)(a.WV.span,(0,r.Z)({},e,{ref:t,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}))),u=i}}]);