(this.webpackJsonpgooglekeep=this.webpackJsonpgooglekeep||[]).push([[0],{24:function(e,t,n){e.exports=n.p+"static/media/logo.c6182a4a.png"},31:function(e,t,n){e.exports=n(42)},36:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),c=n(9),r=n.n(c),o=(n(36),n(28)),u=n(19),i=n(24),m=n.n(i),s=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"header"},l.a.createElement("img",{src:m.a,alt:"logo",width:"70",height:"50"})))},E=function(){var e=(new Date).getFullYear();return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"footer"},l.a.createElement("p",null,"Copyright \xa9 ",e," by",l.a.createElement("a",{href:"https://www.facebook.com/varun.kumar9811"}," Varun kumar"))))},f=n(17),g=n(21),p=n(57),d=n(26),h=n.n(d),b=function(e){var t=Object(a.useState)({title:"",content:""}),n=Object(u.a)(t,2),c=n[0],r=n[1],o=function(e){var t=e.target,n=t.name,a=t.value;r((function(e){return Object(g.a)(Object(g.a)({},e),{},Object(f.a)({},n,a))}))};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"main_note"},l.a.createElement("form",null,l.a.createElement("input",{type:"text",name:"title",value:c.title,onChange:o,placeholder:"Title",autoComplete:"off"}),l.a.createElement("br",null),l.a.createElement("textarea",{rows:"",column:"",name:"content",value:c.content,onChange:o,placeholder:"Write a note"}),l.a.createElement("br",null),l.a.createElement(p.a,{onClick:function(){e.passNote(c),r({title:"",content:""})}},l.a.createElement(h.a,{className:"plus_sign"})))))},v=n(27),w=n.n(v),k=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"note"},l.a.createElement("h1",null,e.title),l.a.createElement("br",null),l.a.createElement("p",null,e.content),l.a.createElement("button",{className:"btn",onClick:function(){e.deleteItem(e.id)}},l.a.createElement(w.a,{className:"deleteIcon"}))))},N=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],r=function(e){c((function(t){t.filter((function(t,n){return n!==e}))}))};return l.a.createElement(l.a.Fragment,null,l.a.createElement(s,null),l.a.createElement(b,{passNote:function(e){c((function(t){return[].concat(Object(o.a)(t),[e])}))}}),n.map((function(e,t){return l.a.createElement(k,{key:t,id:t,title:e.title,content:e.content,deleteItem:r})})),l.a.createElement(E,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.290b588b.chunk.js.map