(this["webpackJsonpcontact-manager"]=this["webpackJsonpcontact-manager"]||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(6),s=n.n(r),i=(n(12),n(7)),o=n(4),u=n(0);var d=function(e){var t=Object(c.useState)(""),n=Object(o.a)(t,2),a=n[0],r=n[1];return Object(u.jsxs)("form",{className:"container mb-2 md:flex md:items-center md:justify-center",onSubmit:function(t){e.handleSubmit(a),r(""),t.preventDefault()},children:[Object(u.jsx)("input",{className:"px-3 py-3 mr-2 outline-none rounded focus:ring-2 focus:ring-green-500",type:"text",placeholder:"Add contact person",onChange:function(e){r(e.target.value)},value:a}),Object(u.jsx)("button",{className:"bg-green-500 hover:bg-green-600 px-3 py-3 rounded text-white font-normal",type:"submit",children:"Add Person"})]})};var l=function(e){var t=e.data.map((function(e,t){return Object(u.jsx)("li",{className:"w-80 px-3 py-3 bg-green-500 text-white rounded mb-2 break-words",children:e},t)}));return Object(u.jsx)("ul",{className:"container mb-2 md:flex md:flex-col md:items-center md:justify-center",children:t})};var m=function(e){var t=Object(c.useState)(e.data),n=Object(o.a)(t,2),a=n[0],r=n[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)(d,{handleSubmit:function(e){r([].concat(Object(i.a)(a),[e]))}}),Object(u.jsx)(l,{data:a})]})},b=["Rafsan","Ratul","Imam","Ahad"];var j=function(){return Object(u.jsxs)("div",{className:"bg-gray-200 min-h-screen container p-5",children:[Object(u.jsx)("h1",{className:"text-2xl text-center m-5",children:"Contact Manager"}),Object(u.jsx)(m,{data:b})]})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(j,{})}),document.getElementById("root")),x()}},[[14,1,2]]]);
//# sourceMappingURL=main.8ccda049.chunk.js.map