import{aq as e,b as s,f as n,h as a,j as t,k as o,i as r,E as c,o as l,A as i}from"./index-3feacc66.js";const u={lock:!0,text:"加载中..."},d=(s,n={})=>{let a;return async(...t)=>{try{return a=e.service({...u,...n}),await s(...t)}finally{null==a||a.close()}}},f={code:0,data:{},message:"获取成功"};function g(){return new Promise((e=>{setTimeout((()=>{e(f)}),1e3)}))}function m(){return new Promise(((e,s)=>{setTimeout((()=>{s(new Error("发生错误"))}),1e3)}))}const h={class:"app-container"},k=r("h4",null,"该示例是演示：通过将要执行的函数传递给 hook，让 hook 自动开启全屏 loading，函数执行结束后自动关闭 loading",-1),p=s({__name:"use-fullscreen-loading",setup(e){const s={text:"即将发生错误...",background:"#F56C6C20",svg:'\n  <path class="path" d="\n    M 30 15\n    L 28 17\n    M 25.61 25.61\n    A 15 15, 0, 0, 1, 15 30\n    A 15 15, 0, 1, 1, 27.99 7.5\n    L 15 15\n  " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>\n',svgViewBox:"-10, -10, 50, 50"},r=async()=>{const e=await d(g)();c.success(e.message)},u=async()=>{try{await d(m,s)()}catch(e){c.error(e.message)}};return(e,s)=>{const c=n("el-button");return l(),a("div",h,[k,t(c,{onClick:r},{default:o((()=>[i("查询成功")])),_:1}),t(c,{onClick:u},{default:o((()=>[i("查询失败")])),_:1})])}}});export{p as default};