(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(8),c=n.n(a),s=(n(14),n(5)),l=n(2),i=n(1),r=n(9),j=(n(15),n(0)),u=function(e){var t="0%";return e.maxValue>0&&(t=Math.round(e.value/e.maxValue*100)+"%"),Object(j.jsxs)("div",{className:"chart-bar",children:[Object(j.jsx)("div",{className:"chart-bar__inner",children:Object(j.jsx)("div",{className:"chart-bar__fill",style:{height:t}})}),Object(j.jsx)("div",{className:"chart-bar__label",children:e.label})]})},o=(n(17),function(e){var t=e.dataPoints.map((function(e){return e.value})),n=Math.max.apply(Math,Object(s.a)(t));return Object(j.jsx)("div",{className:"chart",children:e.dataPoints.map((function(e){return Object(j.jsx)(u,{value:e.value,maxValue:n,label:e.label},e.label)}))})}),d=function(e){var t,n=[{label:"Jan",value:0},{label:"Feb",value:0},{label:"Mar",value:0},{label:"Apr",value:0},{label:"May",value:0},{label:"Jun",value:0},{label:"Jul",value:0},{label:"Aug",value:0},{label:"Sept",value:0},{label:"Oct",value:0},{label:"Nov",value:0},{label:"Dec",value:0}],a=Object(r.a)(e.expense);try{for(a.s();!(t=a.n()).done;){var c=t.value;n[c.date.getMonth()].value+=c.amount}}catch(s){a.e(s)}finally{a.f()}return Object(j.jsx)(o,{dataPoints:n})},b=(n(18),function(e){var t="card "+e.className;return Object(j.jsx)("div",{className:t,children:e.children})}),x=(n(19),n(20),function(e){return Object(j.jsx)("div",{className:"expenses-filter",children:Object(j.jsxs)("div",{className:"expenses-filter__control",children:[Object(j.jsx)("label",{children:"Filter By Year"}),Object(j.jsxs)("select",{value:e.selected,onChange:function(t){e.onFilterChange(t.target.value)},children:[Object(j.jsx)("option",{value:"2024",children:"2024"}),Object(j.jsx)("option",{value:"2023",children:"2023"}),Object(j.jsx)("option",{value:"2022",children:"2022"}),Object(j.jsx)("option",{value:"2021",children:"2021"})]})]})})}),O=(n(21),n(22),function(e){var t=e.date.toLocaleString("en-US",{month:"long"}),n=e.date.toLocaleString("en-US",{day:"2-digit"}),a=e.date.getFullYear();return Object(j.jsxs)("div",{className:"expense-date",children:[Object(j.jsx)("div",{className:"expense-date__month",children:t}),Object(j.jsx)("div",{className:"expense-date__year",children:a}),Object(j.jsx)("div",{className:"expense-date__day",children:n})]})}),v=function(e){return Object(j.jsx)("li",{children:Object(j.jsxs)(b,{className:"expense-item",children:[Object(j.jsx)(O,{date:e.date}),Object(j.jsx)("div",{className:"expense-item__description",children:Object(j.jsx)("h2",{children:e.title})}),Object(j.jsxs)("div",{className:"expense-item__price",children:["$",e.amount]})]})})},h=(n(23),function(e){return 0===e.items.length?Object(j.jsx)("h2",{className:"expenses-list__fallback",children:"Found no Expenses"}):Object(j.jsx)("ul",{className:"expenses-list",children:e.items.map((function(e){return Object(j.jsx)(v,{title:e.title,amount:e.amount,date:e.date},e.id)}))})}),m=function(e){var t=Object(i.useState)("2022"),n=Object(l.a)(t,2),a=n[0],c=n[1],s=e.items.filter((function(e){return e.date.getFullYear().toString()===a}));return e.onPersistExpense(e.items),Object(j.jsx)("div",{children:Object(j.jsxs)(b,{className:"expenses",children:[Object(j.jsx)(x,{selected:a,onFilterChange:function(e){c(e)}}),Object(j.jsx)(d,{expense:s}),Object(j.jsx)(h,{items:s})]})})},p=n(7),f=(n(24),function(e){var t=Object(i.useState)(""),n=Object(l.a)(t,2),a=n[0],c=n[1],s=Object(i.useState)(""),r=Object(l.a)(s,2),u=r[0],o=r[1],d=Object(i.useState)(""),b=Object(l.a)(d,2),x=b[0],O=b[1];return Object(j.jsx)("div",{children:Object(j.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={title:a,amount:+u,date:new Date(x)};e.onSaveExpenseData(n),c(""),o(""),O("")},children:[Object(j.jsxs)("div",{className:"new-expense__controls",children:[Object(j.jsxs)("div",{className:"new-expense__control",children:[Object(j.jsx)("label",{children:"Title"}),Object(j.jsx)("input",{type:"text",value:a,onChange:function(e){c(e.target.value)}})]}),Object(j.jsxs)("div",{className:"new-expense__control",children:[Object(j.jsx)("label",{children:"Amount"}),Object(j.jsx)("input",{type:"number",min:"0.01",step:"0.01",value:u,onChange:function(e){o(e.target.value)}})]}),Object(j.jsxs)("div",{className:"new-expense__control",children:[Object(j.jsx)("label",{children:"Date"}),Object(j.jsx)("input",{type:"date",min:"2012-01-01",max:"2024-01-01",value:x,onChange:function(e){O(e.target.value)}})]})]}),Object(j.jsxs)("div",{className:"new-expense__actions",children:[Object(j.jsx)("button",{type:"button",onClick:e.onCancel,children:"Cancel"}),Object(j.jsx)("button",{type:"submit",children:"Add Expense"})]})]})})}),_=(n(25),function(e){var t=Object(i.useState)(!1),n=Object(l.a)(t,2),a=n[0],c=n[1];return Object(j.jsxs)("div",{className:"new-expense",children:[!a&&Object(j.jsx)("button",{onClick:function(){c(!0)},children:"Add Expense"}),a&&Object(j.jsx)(f,{onSaveExpenseData:function(t){var n=Object(p.a)(Object(p.a)({},t),{},{id:Math.random().toString()});e.onAddExpenseData(n)},onCancel:function(){c(!1)}})]})}),g=[],N=localStorage.getItem("expense");N&&(g=JSON.parse(N)),g.map((function(e){return e.date=new Date(e.date)}));var S=function(){var e=Object(i.useState)(g),t=Object(l.a)(e,2),n=t[0],a=t[1];return Object(j.jsxs)("div",{children:[Object(j.jsx)(_,{onAddExpenseData:function(e){a((function(t){return[e].concat(Object(s.a)(t))}))}}),Object(j.jsx)(m,{items:n,onPersistExpense:function(e){localStorage.setItem("expense",JSON.stringify(e))}})]})};c.a.render(Object(j.jsx)(S,{}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.20d3a87f.chunk.js.map