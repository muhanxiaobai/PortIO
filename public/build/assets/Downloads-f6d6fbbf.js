import{i as u}from"./http-f4d6e1af.js";import{r as c,o as l,c as n,a as t,F as r,e as d,t as o}from"./app-dd51f5ed.js";const h=t("h3",null,"客户端下载",-1),_={class:"table table-bordered mt-3"},i=t("thead",null,[t("tr",null,[t("th",null,"名称"),t("th",null,"架构"),t("th",null,"下载")])],-1),m=["href"],B={name:"Downloads",setup(p){const a=c([]);return u.get("clients").then(s=>{a.value=s.data}),(s,f)=>(l(),n(r,null,[h,t("table",_,[i,t("tbody",null,[(l(!0),n(r,null,d(a.value,e=>(l(),n("tr",null,[t("td",null,o(e.name),1),t("td",null,o(e.arch),1),t("td",null,[t("a",{href:e.url},"下载",8,m)])]))),256))])])],64))}};export{B as default};
