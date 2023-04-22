import{w as x,x as S,y as z,z as I,_ as U}from"./index-261e6d3e.js";import{p as j}from"./@vicons-477062ff.js";import{d as F,r as _,n as $,j as q,_ as E,o as l,c as u,L as n,Y as a,K as T,e as A,M as w,O as m,U as r,w as D,a3 as K,F as Y,$ as G}from"./@vue-f70ab1bd.js";import{o as H,M as L,j as J,e as P,O as Q,L as R,F as W,f as X,g as Z,a as tt,k as et}from"./naive-ui-f5d716a8.js";import{_ as ot}from"./main-nav.vue_vue_type_style_index_0_lang-9066a191.js";import{u as nt}from"./vuex-cc1858c6.js";import"./vue-router-29025daf.js";import"./axios-707ed124.js";/* empty css               */import"./seemly-76b7b838.js";import"./vueuc-804c4158.js";import"./evtd-b614532e.js";import"./@css-render-66126308.js";import"./vooks-dfdd6eef.js";import"./vdirs-b0483831.js";import"./@juggle-41516555.js";import"./css-render-6a5c5852.js";import"./@emotion-8a8e73f6.js";import"./lodash-es-8412e618.js";import"./treemate-25c27bff.js";import"./async-validator-dee29e8b.js";import"./date-fns-975a2d8f.js";const st={key:0,class:"tag-item"},at={key:0,class:"tag-quote"},ct={key:1,class:"tag-quote tag-follow"},lt={key:0,class:"options"},it=F({__name:"tag-item",props:{tag:null,showAction:{type:Boolean},checkFollowing:{type:Boolean}},setup(s){const e=s,g=_(!1),d=$(()=>{let o=[];return e.tag.is_following===0?o.push({label:"关注",key:"follow"}):(e.tag.is_top===0?o.push({label:"置顶",key:"stick"}):o.push({label:"取消置顶",key:"unstick"}),o.push({label:"取消关注",key:"unfollow"})),o}),i=o=>{switch(o){case"follow":z({topic_id:e.tag.id}).then(t=>{e.tag.is_following=1,window.$message.success("关注成功")}).catch(t=>{console.log(t)});break;case"unfollow":S({topic_id:e.tag.id}).then(t=>{e.tag.is_following=0,window.$message.success("取消关注")}).catch(t=>{console.log(t)});break;case"stick":x({topic_id:e.tag.id}).then(t=>{e.tag.is_top=t.top_status,window.$message.success("置顶成功")}).catch(t=>{console.log(t)});break;case"unstick":x({topic_id:e.tag.id}).then(t=>{e.tag.is_top=t.top_status,window.$message.success("取消置顶")}).catch(t=>{console.log(t)});break}};return q(()=>{g.value=!1}),(o,t)=>{const k=E("router-link"),f=H,v=L,c=J,h=P,y=Q,p=R;return!s.checkFollowing||s.checkFollowing&&s.tag.is_following===1?(l(),u("div",st,[n(p,null,{header:a(()=>[(l(),T(v,{type:"success",size:"large",round:"",key:s.tag.id},{avatar:a(()=>[n(f,{src:s.tag.user.avatar},null,8,["src"])]),default:a(()=>[n(k,{class:"hash-link",to:{name:"home",query:{q:s.tag.tag,t:"tag"}}},{default:a(()=>[A(" #"+w(s.tag.tag),1)]),_:1},8,["to"]),s.showAction?m("",!0):(l(),u("span",at,"("+w(s.tag.quote_num)+")",1)),s.showAction?(l(),u("span",ct,"("+w(s.tag.quote_num)+")",1)):m("",!0)]),_:1}))]),"header-extra":a(()=>[s.showAction?(l(),u("div",lt,[n(y,{placement:"bottom-end",trigger:"click",size:"small",options:r(d),onSelect:i},{default:a(()=>[n(h,{type:"success",quaternary:"",circle:"",block:""},{icon:a(()=>[n(c,null,{default:a(()=>[n(r(j))]),_:1})]),_:1})]),_:1},8,["options"])])):m("",!0)]),_:1})])):m("",!0)}}});const _t=F({__name:"Topic",setup(s){const e=nt(),g=_([]),d=_("hot"),i=_(!1),o=_(!1),t=_(!1);D(o,()=>{o.value||(window.$message.success("保存成功"),e.commit("refreshTopicFollow"))});const k=$({get:()=>{let c="编辑";return o.value&&(c="保存"),c},set:c=>{}}),f=()=>{i.value=!0,I({type:d.value,num:50}).then(c=>{g.value=c.topics,i.value=!1}).catch(c=>{console.log(c),i.value=!1})},v=c=>{d.value=c,c=="follow"?t.value=!0:t.value=!1,f()};return q(()=>{f()}),(c,h)=>{const y=ot,p=X,B=L,C=Z,V=it,M=tt,N=et,O=W;return l(),u("div",null,[n(y,{title:"话题"}),n(O,{class:"main-content-wrap tags-wrap",bordered:""},{default:a(()=>[n(C,{type:"line",animated:"","onUpdate:value":v},K({default:a(()=>[n(p,{name:"hot",tab:"热门"}),n(p,{name:"new",tab:"最新"}),r(e).state.userLogined?(l(),T(p,{key:0,name:"follow",tab:"关注"})):m("",!0)]),_:2},[r(e).state.userLogined?{name:"suffix",fn:a(()=>[n(B,{checked:o.value,"onUpdate:checked":h[0]||(h[0]=b=>o.value=b),checkable:""},{default:a(()=>[A(w(r(k)),1)]),_:1},8,["checked"])]),key:"0"}:void 0]),1024),n(N,{show:i.value},{default:a(()=>[n(M,null,{default:a(()=>[(l(!0),u(Y,null,G(g.value,b=>(l(),T(V,{tag:b,showAction:r(e).state.userLogined&&o.value,checkFollowing:t.value},null,8,["tag","showAction","checkFollowing"]))),256))]),_:1})]),_:1},8,["show"])]),_:1})])}}});const Vt=U(_t,[["__scopeId","data-v-15794a53"]]);export{Vt as default};