"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1424],{1424:function(t,e,a){a.d(e,{A:function(){return h},x:function(){return b}});var r=a(2265),o=a(4887);!function(t,{insertAt:e}={}){if(!t||"undefined"==typeof document)return;let a=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===e&&a.firstChild?a.insertBefore(r,a.firstChild):a.appendChild(r),r.styleSheet?r.styleSheet.cssText=t:r.appendChild(document.createTextNode(t))}(`html[dir=ltr],[data-sonner-toaster][dir=ltr]{--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}html[dir=rtl],[data-sonner-toaster][dir=rtl]{--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999}[data-sonner-toaster][data-x-position=right]{right:max(var(--offset),env(safe-area-inset-right))}[data-sonner-toaster][data-x-position=left]{left:max(var(--offset),env(safe-area-inset-left))}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translate(-50%)}[data-sonner-toaster][data-y-position=top]{top:max(var(--offset),env(safe-area-inset-top))}[data-sonner-toaster][data-y-position=bottom]{bottom:max(var(--offset),env(safe-area-inset-bottom))}[data-sonner-toast]{--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;will-change:transform,opacity,height;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}[data-sonner-toast][data-y-position=top]{top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}[data-sonner-toast] [data-description]{font-weight:400;line-height:1.4;color:inherit}[data-sonner-toast] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast] [data-icon]>*{flex-shrink:0}[data-sonner-toast] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast] [data-button]:focus-visible{box-shadow:0 0 0 2px #0006}[data-sonner-toast] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toast][data-theme=dark] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;background:var(--gray1);color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]:focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}[data-sonner-toast] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]:before{content:"";position:absolute;left:0;right:0;height:100%}[data-sonner-toast][data-y-position=top][data-swiping=true]:before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]:before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]:before{content:"";position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast]:after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y: translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y: translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]:before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount, 0px));transition:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{0%{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;--mobile-offset: 16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - 32px)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-rich-colors=true] [data-sonner-toast][data-type=success],[data-rich-colors=true] [data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true] [data-sonner-toast][data-type=info],[data-rich-colors=true] [data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true] [data-sonner-toast][data-type=warning],[data-rich-colors=true] [data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true] [data-sonner-toast][data-type=error],[data-rich-colors=true] [data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);var n=t=>{switch(t){case"success":return l;case"info":return c;case"warning":return d;case"error":return u;default:return null}},s=Array(12).fill(0),i=({visible:t})=>r.createElement("div",{className:"sonner-loading-wrapper","data-visible":t},r.createElement("div",{className:"sonner-spinner"},s.map((t,e)=>r.createElement("div",{className:"sonner-loading-bar",key:`spinner-bar-${e}`})))),l=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},r.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})),d=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",height:"20",width:"20"},r.createElement("path",{fillRule:"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"})),c=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},r.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",clipRule:"evenodd"})),u=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},r.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})),m=1,f=new class{constructor(){this.subscribe=t=>(this.subscribers.push(t),()=>{let e=this.subscribers.indexOf(t);this.subscribers.splice(e,1)}),this.publish=t=>{this.subscribers.forEach(e=>e(t))},this.addToast=t=>{this.publish(t),this.toasts=[...this.toasts,t]},this.create=t=>{var e;let{message:a,...r}=t,o="number"==typeof(null==t?void 0:t.id)||(null==(e=t.id)?void 0:e.length)>0?t.id:m++,n=this.toasts.find(t=>t.id===o),s=void 0===t.dismissible||t.dismissible;return n?this.toasts=this.toasts.map(e=>e.id===o?(this.publish({...e,...t,id:o,title:a}),{...e,...t,id:o,dismissible:s,title:a}):e):this.addToast({title:a,...r,dismissible:s,id:o}),o},this.dismiss=t=>(t||this.toasts.forEach(t=>{this.subscribers.forEach(e=>e({id:t.id,dismiss:!0}))}),this.subscribers.forEach(e=>e({id:t,dismiss:!0})),t),this.message=(t,e)=>this.create({...e,message:t}),this.error=(t,e)=>this.create({...e,message:t,type:"error"}),this.success=(t,e)=>this.create({...e,type:"success",message:t}),this.info=(t,e)=>this.create({...e,type:"info",message:t}),this.warning=(t,e)=>this.create({...e,type:"warning",message:t}),this.loading=(t,e)=>this.create({...e,type:"loading",message:t}),this.promise=(t,e)=>{let a;if(!e)return;void 0!==e.loading&&(a=this.create({...e,promise:t,type:"loading",message:e.loading}));let r=t instanceof Promise?t:t(),o=void 0!==a;return r.then(t=>{if(t&&"boolean"==typeof t.ok&&!t.ok){o=!1;let r="function"==typeof e.error?e.error(`HTTP error! status: ${t.status}`):e.error;this.create({id:a,type:"error",message:r})}else if(void 0!==e.success){o=!1;let r="function"==typeof e.success?e.success(t):e.success;this.create({id:a,type:"success",message:r})}}).catch(t=>{if(void 0!==e.error){o=!1;let r="function"==typeof e.error?e.error(t):e.error;this.create({id:a,type:"error",message:r})}}).finally(()=>{var t;o&&(this.dismiss(a),a=void 0),null==(t=e.finally)||t.call(e)}),a},this.custom=(t,e)=>{let a=(null==e?void 0:e.id)||m++;return this.create({jsx:t(a),id:a,...e}),a},this.subscribers=[],this.toasts=[]}},h=Object.assign((t,e)=>{let a=(null==e?void 0:e.id)||m++;return f.addToast({title:t,...e,id:a}),a},{success:f.success,info:f.info,warning:f.warning,error:f.error,custom:f.custom,message:f.message,promise:f.promise,dismiss:f.dismiss,loading:f.loading});function p(...t){return t.filter(Boolean).join(" ")}var g=t=>{var e,a,o,s,l,d,c;let{invert:u,toast:m,unstyled:f,interacting:h,setHeights:g,visibleToasts:v,heights:b,index:y,toasts:x,expanded:w,removeToast:E,closeButton:k,style:N,cancelButtonStyle:B,actionButtonStyle:C,className:S="",descriptionClassName:T="",duration:M,position:z,gap:R=14,loadingIcon:I,expandByDefault:Y,classNames:j,closeButtonAriaLabel:A="Close toast"}=t,[D,L]=r.useState(!1),[P,H]=r.useState(!1),[$,U]=r.useState(!1),[O,_]=r.useState(!1),[F,K]=r.useState(0),[V,X]=r.useState(0),W=r.useRef(null),q=r.useRef(null),G=0===y,J=y+1<=v,Q=m.type,Z=!1!==m.dismissible,tt=m.className||"",te=m.descriptionClassName||"",ta=r.useMemo(()=>b.findIndex(t=>t.toastId===m.id)||0,[b,m.id]),tr=r.useMemo(()=>m.duration||M||4e3,[m.duration,M]),to=r.useRef(0),tn=r.useRef(0),ts=(r.useRef(tr),r.useRef(0)),ti=r.useRef(null),[tl,td]=z.split("-"),tc=r.useMemo(()=>b.reduce((t,e,a)=>a>=ta?t:t+e.height,0),[b,ta]),tu=m.invert||u,tm="loading"===Q;tn.current=r.useMemo(()=>ta*R+tc,[ta,tc]),r.useEffect(()=>{L(!0)},[]),r.useLayoutEffect(()=>{if(!D)return;let t=q.current,e=t.style.height;t.style.height="auto";let a=t.getBoundingClientRect().height;t.style.height=e,X(a),g(t=>t.find(t=>t.toastId===m.id)?t.map(t=>t.toastId===m.id?{...t,height:a}:t):[{toastId:m.id,height:a},...t])},[D,m.title,m.description,g,m.id]);let tf=r.useCallback(()=>{H(!0),K(tn.current),g(t=>t.filter(t=>t.toastId!==m.id)),setTimeout(()=>{E(m)},200)},[m,E,g,tn]);return r.useEffect(()=>{if(m.promise&&"loading"===Q||m.duration===1/0)return;let t,e=tr;return w||h?(()=>{if(ts.current<to.current){let t=new Date().getTime()-to.current;e-=t}ts.current=new Date().getTime()})():(to.current=new Date().getTime(),t=setTimeout(()=>{var t;null==(t=m.onAutoClose)||t.call(m,m),tf()},e)),()=>clearTimeout(t)},[w,h,Y,m,tr,tf,m.promise,Q]),r.useEffect(()=>{let t=q.current;if(t){let e=t.getBoundingClientRect().height;return X(e),g(t=>[{toastId:m.id,height:e},...t]),()=>g(t=>t.filter(t=>t.toastId!==m.id))}},[g,m.id]),r.useEffect(()=>{m.delete&&tf()},[tf,m.delete]),r.createElement("li",{"aria-live":m.important?"assertive":"polite","aria-atomic":"true",role:"status",tabIndex:0,ref:q,className:p(S,tt,null==j?void 0:j.toast,null==(e=null==m?void 0:m.classNames)?void 0:e.toast,null==j?void 0:j[Q],null==(a=null==m?void 0:m.classNames)?void 0:a[Q]),"data-sonner-toast":"","data-styled":!(m.jsx||m.unstyled||f),"data-mounted":D,"data-promise":!!m.promise,"data-removed":P,"data-visible":J,"data-y-position":tl,"data-x-position":td,"data-index":y,"data-front":G,"data-swiping":$,"data-dismissible":Z,"data-type":Q,"data-invert":tu,"data-swipe-out":O,"data-expanded":!!(w||Y&&D),style:{"--index":y,"--toasts-before":y,"--z-index":x.length-y,"--offset":`${P?F:tn.current}px`,"--initial-height":Y?"auto":`${V}px`,...N,...m.style},onPointerDown:t=>{tm||!Z||(W.current=new Date,K(tn.current),t.target.setPointerCapture(t.pointerId),"BUTTON"!==t.target.tagName&&(U(!0),ti.current={x:t.clientX,y:t.clientY}))},onPointerUp:()=>{var t,e,a,r;if(O||!Z)return;ti.current=null;let o=Number((null==(t=q.current)?void 0:t.style.getPropertyValue("--swipe-amount").replace("px",""))||0),n=new Date().getTime()-(null==(e=W.current)?void 0:e.getTime());if(Math.abs(o)>=20||Math.abs(o)/n>.11){K(tn.current),null==(a=m.onDismiss)||a.call(m,m),tf(),_(!0);return}null==(r=q.current)||r.style.setProperty("--swipe-amount","0px"),U(!1)},onPointerMove:t=>{var e;if(!ti.current||!Z)return;let a=t.clientY-ti.current.y,r=t.clientX-ti.current.x,o=("top"===tl?Math.min:Math.max)(0,a),n="touch"===t.pointerType?10:2;Math.abs(o)>n?null==(e=q.current)||e.style.setProperty("--swipe-amount",`${a}px`):Math.abs(r)>n&&(ti.current=null)}},k&&!m.jsx?r.createElement("button",{"aria-label":A,"data-disabled":tm,"data-close-button":!0,onClick:tm||!Z?()=>{}:()=>{var t;tf(),null==(t=m.onDismiss)||t.call(m,m)},className:p(null==j?void 0:j.closeButton,null==(o=null==m?void 0:m.classNames)?void 0:o.closeButton)},r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},r.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),r.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"}))):null,m.jsx||r.isValidElement(m.title)?m.jsx||m.title:r.createElement(r.Fragment,null,Q||m.icon||m.promise?r.createElement("div",{"data-icon":""},(m.promise||"loading"===m.type)&&!m.icon?I?r.createElement("div",{className:"loader","data-visible":"loading"===Q},I):r.createElement(i,{visible:"loading"===Q}):null,m.icon||n(Q)):null,r.createElement("div",{"data-content":""},r.createElement("div",{"data-title":"",className:p(null==j?void 0:j.title,null==(s=null==m?void 0:m.classNames)?void 0:s.title)},m.title),m.description?r.createElement("div",{"data-description":"",className:p(T,te,null==j?void 0:j.description,null==(l=null==m?void 0:m.classNames)?void 0:l.description)},m.description):null),m.cancel?r.createElement("button",{"data-button":!0,"data-cancel":!0,style:m.cancelButtonStyle||B,onClick:()=>{var t;Z&&(tf(),null!=(t=m.cancel)&&t.onClick&&m.cancel.onClick())},className:p(null==j?void 0:j.cancelButton,null==(d=null==m?void 0:m.classNames)?void 0:d.cancelButton)},m.cancel.label):null,m.action?r.createElement("button",{"data-button":"",style:m.actionButtonStyle||C,onClick:t=>{var e;null==(e=m.action)||e.onClick(t),t.defaultPrevented||tf()},className:p(null==j?void 0:j.actionButton,null==(c=null==m?void 0:m.classNames)?void 0:c.actionButton)},m.action.label):null))};function v(){if("undefined"==typeof window||"undefined"==typeof document)return"ltr";let t=document.documentElement.getAttribute("dir");return"auto"!==t&&t?t:window.getComputedStyle(document.documentElement).direction}var b=t=>{let{invert:e,position:a="bottom-right",hotkey:n=["altKey","KeyT"],expand:s,closeButton:i,className:l,offset:d,theme:c="light",richColors:u,duration:m,style:h,visibleToasts:p=3,toastOptions:b,dir:y=v(),gap:x,loadingIcon:w,containerAriaLabel:E="Notifications"}=t,[k,N]=r.useState([]),B=r.useMemo(()=>Array.from(new Set([a].concat(k.filter(t=>t.position).map(t=>t.position)))),[k,a]),[C,S]=r.useState([]),[T,M]=r.useState(!1),[z,R]=r.useState(!1),[I,Y]=r.useState("system"!==c?c:"undefined"!=typeof window&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),j=r.useRef(null),A=n.join("+").replace(/Key/g,"").replace(/Digit/g,""),D=r.useRef(null),L=r.useRef(!1),P=r.useCallback(t=>N(e=>e.filter(({id:e})=>e!==t.id)),[]);return r.useEffect(()=>f.subscribe(t=>{if(t.dismiss){N(e=>e.map(e=>e.id===t.id?{...e,delete:!0}:e));return}setTimeout(()=>{o.flushSync(()=>{N(e=>{let a=e.findIndex(e=>e.id===t.id);return -1!==a?[...e.slice(0,a),{...e[a],...t},...e.slice(a+1)]:[t,...e]})})})}),[]),r.useEffect(()=>{if("system"!==c){Y(c);return}"system"===c&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?Y("dark"):Y("light")),"undefined"!=typeof window&&window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",({matches:t})=>{Y(t?"dark":"light")})},[c]),r.useEffect(()=>{k.length<=1&&M(!1)},[k]),r.useEffect(()=>{let t=t=>{var e,a;n.every(e=>t[e]||t.code===e)&&(M(!0),null==(e=j.current)||e.focus()),"Escape"===t.code&&(document.activeElement===j.current||null!=(a=j.current)&&a.contains(document.activeElement))&&M(!1)};return document.addEventListener("keydown",t),()=>document.removeEventListener("keydown",t)},[n]),r.useEffect(()=>{if(j.current)return()=>{D.current&&(D.current.focus({preventScroll:!0}),D.current=null,L.current=!1)}},[j.current]),k.length?r.createElement("section",{"aria-label":`${E} ${A}`,tabIndex:-1},B.map((t,a)=>{var o;let[n,c]=t.split("-");return r.createElement("ol",{key:t,dir:"auto"===y?v():y,tabIndex:-1,ref:j,className:l,"data-sonner-toaster":!0,"data-theme":I,"data-rich-colors":u,"data-y-position":n,"data-x-position":c,style:{"--front-toast-height":`${null==(o=C[0])?void 0:o.height}px`,"--offset":"number"==typeof d?`${d}px`:d||"32px","--width":"356px","--gap":"14px",...h},onBlur:t=>{L.current&&!t.currentTarget.contains(t.relatedTarget)&&(L.current=!1,D.current&&(D.current.focus({preventScroll:!0}),D.current=null))},onFocus:t=>{t.target instanceof HTMLElement&&"false"===t.target.dataset.dismissible||L.current||(L.current=!0,D.current=t.relatedTarget)},onMouseEnter:()=>M(!0),onMouseMove:()=>M(!0),onMouseLeave:()=>{z||M(!1)},onPointerDown:t=>{t.target instanceof HTMLElement&&"false"===t.target.dataset.dismissible||R(!0)},onPointerUp:()=>R(!1)},k.filter(e=>!e.position&&0===a||e.position===t).map((a,o)=>{var n;return r.createElement(g,{key:a.id,index:o,toast:a,duration:null!=(n=null==b?void 0:b.duration)?n:m,className:null==b?void 0:b.className,descriptionClassName:null==b?void 0:b.descriptionClassName,invert:e,visibleToasts:p,closeButton:i,interacting:z,position:t,style:null==b?void 0:b.style,unstyled:null==b?void 0:b.unstyled,classNames:null==b?void 0:b.classNames,cancelButtonStyle:null==b?void 0:b.cancelButtonStyle,actionButtonStyle:null==b?void 0:b.actionButtonStyle,removeToast:P,toasts:k,heights:C,setHeights:S,expandByDefault:s,gap:x,loadingIcon:w,expanded:T})}))})):null}}}]);