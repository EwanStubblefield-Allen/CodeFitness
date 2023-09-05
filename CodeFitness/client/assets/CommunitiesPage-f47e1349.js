import{_ as R,y as E,r as N,w as f,a as P,A as s,h as l,i as g,G as p,x as d,H as M,R as O,j as u,b as r,c as m,l as B,e as C,d as e,t as h,F as v,q as T,k as y,m as w,C as L,D as A,I as G,s as U,J as x}from"./index-e8785f0c.js";const V={setup(){const i=E(),o=N({});f(()=>{_(i.params.communityId),t(i.params.communityId),b(i.params.communityId)}),f(()=>{s.activeComment&&(o.value={...s.activeComment})}),P(()=>{document.documentElement.scrollTop=0,s.comments=[]});async function _(a){try{await x.getCommunityProfiles(a)}catch(c){d.error(c.message,"[GETTING COMMUNITY PROFILES]")}}async function t(a){try{await x.getCommunityRoutinesByCommunity(a)}catch(c){d.error(c.message,"[GETTING COMMUNITY ROUTINES BY COMMUNITY]")}}async function b(a){try{await p.getComments(a)}catch(c){d.error(c.message)}}return{editable:o,route:i,account:l(()=>s.account),profiles:l(()=>s.communityProfiles.sort((a,c)=>c.points-a.points)),communityRoutines:l(()=>s.communityRoutines),comments:l(()=>s.comments),wantsTour:l(()=>s.wantsTour),steps:[{target:".v-step-11",header:{title:"Leaderboard"},content:"See the top earners of each community!",params:{enableScrolling:!1,placement:"bottom"}},{target:".v-step-12",content:"Add pre-made routines from each community!",params:{enableScrolling:!0,placement:"bottom"}},{target:".v-step-13",header:{title:"Chat with members of your community!"},content:"NOTE: You can only chat with your community members but view the chat of other communities.",params:{enableScrolling:!1,placement:"top"}}],callbacks:{onFinish:()=>{s.wantsTour=!1,g.updateAccount({needsTour:!1})},onSkip:()=>{s.wantsTour=!1,g.updateAccount({needsTour:!1})}},handleSubmit(){o.value.id?this.editComment():this.createComment(),o.value={}},async createComment(){try{o.value.community=i.params.communityId,await p.createComment(o.value),document.documentElement.scrollTop=document.documentElement.scrollHeight}catch(a){d.error(a.message)}},async editComment(){try{await p.editComment(o.value)}catch(a){d.error(a.message,"[EDITING COMMENT]")}}}},components:{CommentComponent:M,RoutineComponent:O}},Y={class:"col-12 col-md-10 offset-md-2"},D={class:"accordion py-3",id:"accordionExample"},F={class:"accordion-item"},H=e("h2",{class:"accordion-header v-step-11"},[e("button",{class:"accordion-button collapsed bg-neutral-light",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"false","aria-controls":"collapseOne"}," Leaderboard ")],-1),j={id:"collapseOne",class:"accordion-collapse collapse","data-bs-parent":"#accordionExample"},q={class:"accordion-body"},J={class:"text-center"},z=["src","alt"],K={class:"text-break"},Q={class:"text-light"},W={class:"accordion-item"},X=e("h2",{class:"accordion-header v-step-12"},[e("button",{class:"accordion-button collapsed bg-neutral-light",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo"}," Suggested Routines ")],-1),Z={id:"collapseTwo",class:"accordion-collapse collapse","data-bs-parent":"#accordionExample"},$={class:"accordion-body"},ee={class:"row pt-2"},te=e("h2",null,"Community Chat",-1),oe={class:"row sticky-bottom p-3 v-step-13"},ae={class:"form-group"},ne=e("label",{for:"comment"},"Comment",-1);function se(i,o,_,t,b,a){const c=u("Tour"),k=u("RouterLink"),S=u("RoutineComponent"),I=u("CommentComponent");return r(),m("div",Y,[t.wantsTour==!0||t.account.needsTour==!0?(r(),B(c,{key:0,steps:t.steps,callbacks:t.callbacks},null,8,["steps","callbacks"])):C("",!0),e("section",D,[e("div",F,[H,e("div",j,[e("div",q,[e("h2",J,h(t.profiles.length)+" Active Community Members",1),(r(!0),m(v,null,T(t.profiles,n=>(r(),m("div",{key:n.id,class:"card elevation-5 my-3 bg-neutral"},[y(k,{to:{name:"Profile",params:{profileId:n.id}},class:"card-body d-flex align-items-center"},{default:w(()=>[e("img",{class:"profile-pic m-2",src:n.picture,alt:n.name},null,8,z),e("div",null,[e("p",K,h(n.name),1),e("small",Q,"Points: "+h(n.points),1)])]),_:2},1032,["to"])]))),128))])])]),e("div",W,[X,e("div",Z,[e("div",$,[y(S,{routinesProp:t.communityRoutines},{default:w(()=>[U(" Suggested Routines ")]),_:1},8,["routinesProp"])])])])]),e("section",ee,[te,(r(!0),m(v,null,T(t.comments,n=>(r(),m("div",{key:n.id,class:"py-2"},[y(I,{commentProp:n},null,8,["commentProp"])]))),128))]),e("section",oe,[t.account.community==t.route.params.communityId?(r(),m("form",{key:0,onSubmit:o[1]||(o[1]=L(n=>t.handleSubmit(),["prevent"])),class:"bg-neutral-light p-3 rounded elevation-5"},[e("div",ae,[ne,A(e("input",{"onUpdate:modelValue":o[0]||(o[0]=n=>t.editable.body=n),id:"comment",class:"form-control",type:"text",minlength:"2",maxlength:"100",placeholder:"Leave your comment..."},null,512),[[G,t.editable.body]])])],32)):C("",!0)])])}const re=R(V,[["render",se]]);export{re as default};
