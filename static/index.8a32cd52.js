import{_ as n,b as a,o as e,a as s,v as r,r as t,f as i,g as o}from"./index.ec4f8160.js";const d={class:"app-container"};const c=n({},[["render",function(n,s){return e(),a("div",d,"Admin 权限可见")}]]),u={class:"app-container"};const l=n({},[["render",function(n,s){return e(),a("div",u,"Editor 权限可见")}]]),m=s({__name:"index",setup(n){const a=r(),s=t("admin");return a.roles.includes("admin")||(s.value="editor"),(n,a)=>(e(),i(o("admin"===s.value?c:l)))}});export{m as default};