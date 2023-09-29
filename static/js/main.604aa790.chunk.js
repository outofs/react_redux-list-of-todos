(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{28:function(e,t,c){},29:function(e,t,c){"use strict";c.r(t);var n=c(10),a=c.n(n),s=c(9),r=c(17),i=c(7),l=c(15),o=c(16),d=function(e){return{type:"currentTodo/SET",payload:e}},u=function(){return{type:"currentTodo/REMOVE"}},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"currentTodo/SET":return t.payload;case"currentTodo/REMOVE":return null;default:return e}},b=c(4),h=function(){return{type:"filter/REMOVE_QUERY"}},f=function(e){return{type:"filter/SET_QUERY",payload:e}},m=function(e){return{type:"filter/SET_STATUS",payload:e}},O={query:"",status:"all"},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"filter/REMOVE_QUERY":return Object(b.a)(Object(b.a)({},e),{},{query:""});case"filter/SET_QUERY":return Object(b.a)(Object(b.a)({},e),{},{query:t.payload});case"filter/SET_STATUS":return Object(b.a)(Object(b.a)({},e),{},{status:t.payload});default:return e}},p=c(11),v=function(e){return{type:"todo/SET",payload:e}},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"todo/SET"===t.type?Object(p.a)(t.payload):e},N=Object(i.combineReducers)({currentTodo:j,filter:x,todos:y}),g=Object(i.createStore)(N,Object(l.composeWithDevTools)(Object(i.applyMiddleware)(o.a))),T=c(3),E=c(0),S=(c(25),c(26),c(6)),k=c.n(S),w=s.b,_=s.c;function R(e){return e.toLowerCase().trim()}var C=c(1),U=function(e){var t=e.todos,c=_((function(e){return e.currentTodo})),n=_((function(e){return e.filter})),a=w(),s=Object(E.useMemo)((function(){return function(e,t){var c=t.query,n=t.status,a=Object(p.a)(e);if(c){var s=R(c);a=a.filter((function(e){return R(e.title).includes(s)}))}return"all"!==n&&(a=a.filter((function(e){switch(n){case"active":return!e.completed;case"completed":return e.completed;default:return e}}))),a}(t,n)}),[t,n]);return Object(C.jsx)(C.Fragment,{children:s.length?Object(C.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(C.jsx)("thead",{children:Object(C.jsxs)("tr",{children:[Object(C.jsx)("th",{children:"#"}),Object(C.jsx)("th",{children:Object(C.jsx)("span",{className:"icon",children:Object(C.jsx)("i",{className:"fas fa-check"})})}),Object(C.jsx)("th",{children:"Title"}),Object(C.jsx)("th",{children:" "})]})}),Object(C.jsx)("tbody",{children:s.map((function(e){return Object(C.jsxs)("tr",{"data-cy":"todo",className:k()({"has-background-info-light":(null===c||void 0===c?void 0:c.id)===e.id}),children:[Object(C.jsx)("td",{className:"is-vcentered",children:e.id}),Object(C.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(C.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(C.jsx)("i",{className:"fas fa-check"})})}),Object(C.jsx)("td",{className:"is-vcentered is-expanded",children:Object(C.jsx)("p",{className:k()({"has-text-danger":!e.completed,"has-text-success":e.completed}),children:e.title})}),Object(C.jsx)("td",{className:"has-text-right is-vcentered",children:Object(C.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return a(d(e))},children:Object(C.jsx)("span",{className:"icon",children:Object(C.jsx)("i",{className:k()("far",{"fa-eye-slash":(null===c||void 0===c?void 0:c.id)===e.id,"fa-eye":(null===c||void 0===c?void 0:c.id)!==e.id})})})})})]})}))})]}):Object(C.jsx)("p",{className:"notification is-warning",children:"There are no todos matching current filter criteria"})})},q=["all","active","completed"],M=function(){var e=_((function(e){return e.filter})),t=w();return Object(C.jsxs)("form",{className:"field has-addons",onSubmit:function(e){return e.preventDefault()},children:[Object(C.jsx)("p",{className:"control",children:Object(C.jsx)("span",{className:"select",children:Object(C.jsx)("select",{"data-cy":"statusSelect",value:e.status,onChange:function(e){return t(m(e.target.value))},children:q.map((function(e){return Object(C.jsx)("option",{value:e,children:e[0].toUpperCase()+e.slice(1)},e)}))})})}),Object(C.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(C.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:e.query,onChange:function(e){t(f(e.target.value))}}),Object(C.jsx)("span",{className:"icon is-left",children:Object(C.jsx)("i",{className:"fas fa-magnifying-glass"})}),e.query&&Object(C.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(C.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return t(h())}})})]})]})},Q=(c(28),function(){return Object(C.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(C.jsx)("div",{className:"Loader__content"})})});function V(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var Y=function(){var e=Object(E.useState)(null),t=Object(T.a)(e,2),c=t[0],n=t[1],a=Object(E.useState)(!1),s=Object(T.a)(a,2),r=s[0],i=s[1],l=_((function(e){return e.currentTodo})),o=w();return Object(E.useEffect)((function(){var e;i(!0),l&&(e=l.userId,V("/users/".concat(e))).then(n).finally((function(){return i(!1)}))}),[]),Object(C.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(C.jsx)("div",{className:"modal-background"}),r?Object(C.jsx)(Q,{}):Object(C.jsxs)("div",{className:"modal-card",children:[Object(C.jsxs)("header",{className:"modal-card-head",children:[Object(C.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(null===l||void 0===l?void 0:l.id)}),Object(C.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return o(u())}})]}),Object(C.jsxs)("div",{className:"modal-card-body",children:[Object(C.jsx)("p",{className:"block","data-cy":"modal-title",children:null===l||void 0===l?void 0:l.title}),Object(C.jsxs)("p",{className:"block","data-cy":"modal-user",children:[Object(C.jsx)("strong",{className:k()({"has-text-danger":!(null!==l&&void 0!==l&&l.completed),"has-text-success":null===l||void 0===l?void 0:l.completed}),children:null!==l&&void 0!==l&&l.completed?"Done":"Planned"})," by ",c&&Object(C.jsx)("a",{href:"mailto:".concat(c.email),children:c.name})]})]})]})]})},B=function(){var e=Object(E.useState)(!1),t=Object(T.a)(e,2),c=t[0],n=t[1],a=_((function(e){return e.currentTodo})),s=_((function(e){return e.todos})),r=w();return Object(E.useEffect)((function(){n(!0),V("/todos").then((function(e){return r(v(e))})).finally((function(){return n(!1)}))}),[]),Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("div",{className:"section",children:Object(C.jsx)("div",{className:"container",children:Object(C.jsx)("div",{className:"box",children:c?Object(C.jsx)(Q,{}):Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("h1",{className:"title",children:"Todos:"}),Object(C.jsx)("div",{className:"block",children:Object(C.jsx)(M,{})}),Object(C.jsx)("div",{className:"block",children:Object(C.jsx)(U,{todos:s})})]})})})}),a&&Object(C.jsx)(Y,{})]})},D=function(){return Object(C.jsx)(s.a,{store:g,children:Object(C.jsx)(r.a,{children:Object(C.jsx)(B,{})})})};a.a.render(Object(C.jsx)(D,{}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.604aa790.chunk.js.map