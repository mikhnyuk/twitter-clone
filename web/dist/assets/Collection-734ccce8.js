import{_ as P,a as S}from"./post-item.vue_vue_type_style_index_0_lang-e2c8dabf.js";import{_ as V}from"./post-skeleton-ffa76165.js";import{_ as $}from"./main-nav.vue_vue_type_style_index_0_lang-be35896a.js";import{u as I}from"./vuex-473b3783.js";import{b as L}from"./vue-router-b8e3382f.js";import{L as N,_ as R}from"./index-347d1d96.js";import{d as j,r as s,j as q,c as o,V as e,a1 as c,_ as g,O as v,o as t,F as f,a4 as h,Q as k}from"./@vue-e0e89260.js";import{F as E,G,I as H,H as O}from"./naive-ui-62663ad7.js";import"./content-72d615e5.js";import"./@vicons-8f91201d.js";import"./paopao-video-player-aa5e8b3f.js";import"./formatTime-cdf4e6f1.js";import"./moment-2ab8298d.js";import"./copy-to-clipboard-1dd3075d.js";import"./toggle-selection-93f4ad84.js";import"./vooks-a50491fd.js";import"./evtd-b614532e.js";import"./axios-4a70c6fc.js";/* empty css               */import"./seemly-76b7b838.js";import"./vueuc-59ca65c3.js";import"./@css-render-580d83ec.js";import"./vdirs-b0483831.js";import"./@juggle-41516555.js";import"./css-render-6a5c5852.js";import"./@emotion-8a8e73f6.js";import"./lodash-es-8412e618.js";import"./treemate-25c27bff.js";import"./async-validator-dee29e8b.js";import"./date-fns-975a2d8f.js";const Q={key:0,class:"skeleton-wrap"},T={key:1},U={key:0,class:"empty-wrap"},A={key:1},D={key:2},J={key:0,class:"pagination-wrap"},K=j({__name:"Collection",setup(W){const m=I(),y=L(),_=s(!1),i=s([]),p=s(+y.query.p||1),l=s(20),r=s(0),u=()=>{_.value=!0,N({page:p.value,page_size:l.value}).then(n=>{_.value=!1,i.value=n.list,r.value=Math.ceil(n.pager.total_rows/l.value),window.scrollTo(0,0)}).catch(n=>{_.value=!1})},w=n=>{p.value=n,u()};return q(()=>{u()}),(n,X)=>{const C=$,b=V,x=H,z=P,d=O,B=S,F=E,M=G;return t(),o("div",null,[e(C,{title:"收藏"}),e(F,{class:"main-content-wrap",bordered:""},{default:c(()=>[_.value?(t(),o("div",Q,[e(b,{num:l.value},null,8,["num"])])):(t(),o("div",T,[i.value.length===0?(t(),o("div",U,[e(x,{size:"large",description:"暂无数据"})])):v("",!0),g(m).state.desktopModelShow?(t(),o("div",A,[(t(!0),o(f,null,h(i.value,a=>(t(),k(d,{key:a.id},{default:c(()=>[e(z,{post:a},null,8,["post"])]),_:2},1024))),128))])):(t(),o("div",D,[(t(!0),o(f,null,h(i.value,a=>(t(),k(d,{key:a.id},{default:c(()=>[e(B,{post:a},null,8,["post"])]),_:2},1024))),128))]))]))]),_:1}),r.value>0?(t(),o("div",J,[e(M,{page:p.value,"onUpdate:page":w,"page-slot":g(m).state.collapsedRight?5:8,"page-count":r.value},null,8,["page","page-slot","page-count"])])):v("",!0)])}}});const Mt=R(K,[["__scopeId","data-v-a5302c9b"]]);export{Mt as default};