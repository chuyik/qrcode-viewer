(this["webpackJsonpqrcode-viewer"]=this["webpackJsonpqrcode-viewer"]||[]).push([[0],{19:function(e,t,n){},20:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(13),r=n.n(s),o=(n(19),n(5)),i=(n(20),n(14)),l=n.n(i),u=n(0);function d(){var e,t=(null===(e=(document.location.search||"").match(/[?&]text=([^&]+)/))||void 0===e?void 0:e[1])||"http://www.wesingapp.com";return{text:decodeURIComponent(t)}}function j(e){var t=e.value,n=e.onChange,a=Object(c.useState)(t),s=Object(o.a)(a,2),r=s[0],i=s[1],l=Object(c.useRef)(),d=Object(c.useRef)();Object(c.useEffect)((function(){d.current&&l.current&&(l.current.style.width="".concat(d.current.offsetWidth,"px"))}),[t]);var j=Object(c.useCallback)((function(e){console.log("val::",e.target.value),i(e.target.value),n(e.target.value)}),[]);return Object(u.jsxs)(c.Fragment,{children:[Object(u.jsx)("input",{className:"input",text:r,onChange:j,ref:l,defaultValue:r}),Object(u.jsx)("span",{className:"input",style:{position:"absolute",height:0,overflow:"hidden",whiteSpace:"pre",opacity:0,pointerEvents:"none",zIndex:-1},ref:d,children:r})]})}var b=function(){var e=Object(c.useMemo)(d,[]),t=Object(c.useState)(e.text),n=Object(o.a)(t,2),a=n[0],s=n[1],r=Object(c.useState)(!1),i=Object(o.a)(r,2),b=i[0],h=i[1],f=Object(c.useRef)();return Object(c.useEffect)((function(){a&&(console.log("canvasRef.current",f.current),l.a.toCanvas(f.current,a,{margin:2,scale:8},(function(e){if(e)return console.error("err:",e),void alert("Error: "+(e.message||"unknown render error"));console.log("success!")})))}),[a]),Object(u.jsxs)("div",{className:"App",onClick:function(){b&&h(!1)},children:[Object(u.jsxs)("header",{className:"App-header",children:[Object(u.jsx)("canvas",{ref:f}),Object(u.jsx)(j,{value:a,onChange:s})]}),Object(u.jsxs)("div",{className:"usage-block",children:[b&&Object(u.jsx)("div",{className:"usage-modal",onClick:function(){return h(!1)},children:Object(u.jsxs)("div",{className:"usage-modal-body",children:[Object(u.jsx)("p",{className:"question",children:"How to set initial QRCode value on page load?"}),Object(u.jsxs)("p",{className:"answer",children:["Append `text` params to url, eg:"," ",Object(u.jsx)("span",{style:{borderBottom:"1px dashed #9c9c9c"},children:document.location.pathname+'?text="hello world"'})]})]})}),Object(u.jsx)("div",{className:"usage-btn",onClick:function(){return h(!0)},children:"Usage"})]}),Object(u.jsxs)("footer",{children:[" Copyright \xa9 2020 - ",(new Date).getFullYear()," Chuyik"]})]})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,48)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};r.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(b,{})}),document.getElementById("root")),h()}},[[47,1,2]]]);
//# sourceMappingURL=main.3a5b34c3.chunk.js.map