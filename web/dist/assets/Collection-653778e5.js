import{_ as M,a as N}from"./post-item.vue_vue_type_style_index_0_lang-f7f6062b.js";import{_ as S}from"./post-skeleton-3fdfd3d1.js";import{_ as $}from"./main-nav.vue_vue_type_style_index_0_lang-6c037963.js";import{u as I}from"./vuex-613b371d.js";import{b as R}from"./vue-router-8af5a3a6.js";import{K as U,_ as V}from"./index-43cab287.js";import{d as j,r as s,j as q,c as o,U as e,a0 as c,Z as g,N as v,o as t,F as f,a3 as h,P as k}from"./@vue-b8d06722.js";import{F as E,G,I as H,H as K}from"./naive-ui-374a973f.js";import"./content-bfe7958f.js";import"./@vicons-7ee3dafd.js";import"./paopao-video-player-b4739fc7.js";import"./formatTime-000dbebb.js";import"./moment-b7869f98.js";import"./copy-to-clipboard-1dd3075d.js";import"./toggle-selection-93f4ad84.js";import"./vooks-423a5f30.js";import"./evtd-b614532e.js";import"./axios-4a70c6fc.js";/* empty css               */import"./seemly-76b7b838.js";import"./vueuc-556279b6.js";import"./@css-render-4f82e6dd.js";import"./vdirs-b0483831.js";import"./@juggle-41516555.js";import"./css-render-6a5c5852.js";import"./@emotion-8a8e73f6.js";import"./lodash-es-8412e618.js";import"./treemate-25c27bff.js";import"./async-validator-dee29e8b.js";import"./date-fns-975a2d8f.js";const L={key:0,class:"skeleton-wrap"},T={key:1},Z={key:0,class:"empty-wrap"},A={key:1},D={key:2},J={key:0,class:"pagination-wrap"},O=j({__name:"Collection",setup(Q){const m=I(),y=R(),_=s(!1),i=s([]),p=s(+y.query.p||1),l=s(20),r=s(0),u=()=>{_.value=!0,U({page:p.value,page_size:l.value}).then(n=>{_.value=!1,i.value=n.list,r.value=Math.ceil(n.pager.total_rows/l.value),window.scrollTo(0,0)}).catch(n=>{_.value=!1})},w=n=>{p.value=n,u()};return q(()=>{u()}),(n,W)=>{const C=$,b=S,x=H,P=M,d=K,z=N,B=E,F=G;return t(),o("div",null,[e(C,{title:"收藏"}),e(B,{class:"main-content-wrap",bordered:""},{default:c(()=>[_.value?(t(),o("div",L,[e(b,{num:l.value},null,8,["num"])])):(t(),o("div",T,[i.value.length===0?(t(),o("div",Z,[e(x,{size:"large",description:"暂无数据"})])):v("",!0),g(m).state.desktopModelShow?(t(),o("div",A,[(t(!0),o(f,null,h(i.value,a=>(t(),k(d,{key:a.id},{default:c(()=>[e(P,{post:a},null,8,["post"])]),_:2},1024))),128))])):(t(),o("div",D,[(t(!0),o(f,null,h(i.value,a=>(t(),k(d,{key:a.id},{default:c(()=>[e(z,{post:a},null,8,["post"])]),_:2},1024))),128))]))]))]),_:1}),r.value>0?(t(),o("div",J,[e(F,{page:p.value,"onUpdate:page":w,"page-slot":g(m).state.collapsedRight?5:8,"page-count":r.value},null,8,["page","page-slot","page-count"])])):v("",!0)])}}});const Ft=V(O,[["__scopeId","data-v-a5302c9b"]]);export{Ft as default};