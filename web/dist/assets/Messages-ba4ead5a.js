import{d as b,a3 as A,o as t,c as a,V as n,a1 as o,a as y,a2 as w,e as p,M as m,Q as z,O as r,_ as c,L as D,a4 as N,F as O,r as f,j as G}from"./@vue-e0e89260.js";import{u as H,b as L}from"./vue-router-b8e3382f.js";import{G as P,H as T,I as U,_ as F,J as E}from"./index-3c28566e.js";import{a as J}from"./formatTime-cdf4e6f1.js";import{q as Q,r as K,s as q,t as W}from"./@vicons-d502290a.js";import{o as X,l as Y,j as Z,S as x,M as ee,U as se,F as ne,G as te,I as ae,H as oe}from"./naive-ui-62663ad7.js";import{_ as re}from"./main-nav.vue_vue_type_style_index_0_lang-6cf23d92.js";import{u as ie}from"./vuex-473b3783.js";import"./axios-4a70c6fc.js";/* empty css               */import"./seemly-76b7b838.js";import"./vueuc-59ca65c3.js";import"./evtd-b614532e.js";import"./@css-render-580d83ec.js";import"./vooks-a50491fd.js";import"./vdirs-b0483831.js";import"./@juggle-41516555.js";import"./css-render-6a5c5852.js";import"./@emotion-8a8e73f6.js";import"./lodash-es-8412e618.js";import"./treemate-25c27bff.js";import"./async-validator-dee29e8b.js";import"./date-fns-975a2d8f.js";import"./moment-2ab8298d.js";const _e={class:"sender-wrap"},le={key:0,class:"nickname"},pe={class:"username"},ue={key:1,class:"nickname"},ce={class:"timestamp"},de={class:"timestamp-txt"},me={key:0,class:"brief-content"},ge={key:1,class:"whisper-content-wrap"},ve={key:2,class:"requesting-friend-wrap"},fe={key:2,class:"status-info"},ye={key:3,class:"status-info"},ke="https://assets.paopao.info/public/avatar/default/admin.png",he=b({__name:"message-item",props:{message:{}},setup(I){const g=H(),k=e=>{_(e),(e.type===1||e.type===2||e.type===3)&&(e.post&&e.post.id>0?g.push({name:"post",query:{id:e.post_id}}):window.$message.error("该动态已被删除"))},i=e=>{_(e),P({user_id:e.sender_user_id}).then(s=>{e.reply_id=2,window.$message.success("已同意添加好友")}).catch(s=>{console.log(s)})},u=e=>{_(e),T({user_id:e.sender_user_id}).then(s=>{e.reply_id=3,window.$message.success("已拒绝添加好友")}).catch(s=>{console.log(s)})},_=e=>{e.is_read===0&&U({id:e.id}).then(s=>{e.is_read=1}).catch(s=>{console.log(s)})};return(e,s)=>{const h=X,$=A("router-link"),l=Y,d=Z,C=x,M=ee;return t(),a("div",{class:D(["message-item",{unread:e.message.is_read===0}]),onClick:s[4]||(s[4]=v=>_(e.message))},[n(M,{"content-indented":""},{avatar:o(()=>[n(h,{round:"",size:30,src:e.message.sender_user.id>0?e.message.sender_user.avatar:ke},null,8,["src"])]),header:o(()=>[y("div",_e,[e.message.sender_user.id>0?(t(),a("span",le,[n($,{onClick:s[0]||(s[0]=w(()=>{},["stop"])),class:"username-link",to:{name:"user",query:{username:e.message.sender_user.username}}},{default:o(()=>[p(m(e.message.sender_user.nickname),1)]),_:1},8,["to"]),y("span",pe," @"+m(e.message.sender_user.username),1)])):(t(),a("span",ue," 系统 "))])]),"header-extra":o(()=>[y("span",ce,[e.message.is_read===0?(t(),z(l,{key:0,dot:"",processing:""})):r("",!0),y("span",de,m(c(J)(e.message.created_on)),1)])]),description:o(()=>[n(C,{"show-icon":!1,class:"brief-wrap",type:e.message.is_read>0?"default":"success"},{default:o(()=>[e.message.type!=4?(t(),a("div",me,[p(m(e.message.brief)+" ",1),e.message.type===1||e.message.type===2||e.message.type===3?(t(),a("span",{key:0,onClick:s[1]||(s[1]=w(v=>k(e.message),["stop"])),class:"hash-link view-link"},[n(d,null,{default:o(()=>[n(c(Q))]),_:1}),p(" 查看详情 ")])):r("",!0)])):r("",!0),e.message.type===4?(t(),a("div",ge,m(e.message.content),1)):r("",!0),e.message.type===5?(t(),a("div",ve,[p(m(e.message.content)+" ",1),e.message.reply_id===1?(t(),a("span",{key:0,onClick:s[2]||(s[2]=w(v=>i(e.message),["stop"])),class:"hash-link view-link"},[n(d,null,{default:o(()=>[n(c(K))]),_:1}),p(" 同意 ")])):r("",!0),e.message.reply_id===1?(t(),a("span",{key:1,onClick:s[3]||(s[3]=w(v=>u(e.message),["stop"])),class:"hash-link view-link"},[n(d,null,{default:o(()=>[n(c(q))]),_:1}),p(" 拒绝 ")])):r("",!0),e.message.reply_id===2?(t(),a("span",fe,[n(d,null,{default:o(()=>[n(c(W))]),_:1}),p(" 已同意 ")])):r("",!0),e.message.reply_id===3?(t(),a("span",ye,[n(d,null,{default:o(()=>[n(c(q))]),_:1}),p(" 已拒绝 ")])):r("",!0)])):r("",!0)]),_:1},8,["type"])]),_:1})],2)}}});const we=F(he,[["__scopeId","data-v-4a0e27fa"]]),$e={class:"content"},Ce=b({__name:"message-skeleton",props:{num:{default:1}},setup(I){return(g,k)=>{const i=se;return t(!0),a(O,null,N(new Array(g.num),u=>(t(),a("div",{class:"skeleton-item",key:u},[y("div",$e,[n(i,{text:"",repeat:2}),n(i,{text:"",style:{width:"60%"}})])]))),128)}}});const Me=F(Ce,[["__scopeId","data-v-01d2e871"]]),be={key:0,class:"skeleton-wrap"},Fe={key:1},Ie={key:0,class:"empty-wrap"},Se={key:0,class:"pagination-wrap"},qe=b({__name:"Messages",setup(I){const g=L(),k=ie(),i=f(!1),u=f(+g.query.p||1),_=f(10),e=f(0),s=f([]),h=()=>{i.value=!0,E({page:u.value,page_size:_.value}).then(l=>{i.value=!1,s.value=l.list,e.value=Math.ceil(l.pager.total_rows/_.value)}).catch(l=>{i.value=!1})},$=l=>{u.value=l,h()};return G(()=>{h()}),(l,d)=>{const C=re,M=Me,v=ae,R=we,V=oe,j=ne,B=te;return t(),a("div",null,[n(C,{title:"消息"}),n(j,{class:"main-content-wrap messages-wrap",bordered:""},{default:o(()=>[i.value?(t(),a("div",be,[n(M,{num:_.value},null,8,["num"])])):(t(),a("div",Fe,[s.value.length===0?(t(),a("div",Ie,[n(v,{size:"large",description:"暂无数据"})])):r("",!0),(t(!0),a(O,null,N(s.value,S=>(t(),z(V,{key:S.id},{default:o(()=>[n(R,{message:S},null,8,["message"])]),_:2},1024))),128))]))]),_:1}),e.value>0?(t(),a("div",Se,[n(B,{page:u.value,"onUpdate:page":$,"page-slot":c(k).state.collapsedRight?5:8,"page-count":e.value},null,8,["page","page-slot","page-count"])])):r("",!0)])}}});const es=F(qe,[["__scopeId","data-v-4e7b1342"]]);export{es as default};