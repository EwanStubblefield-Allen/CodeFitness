import{_ as I,y as R,r as E,o as N,a as M,A as s,w as P,G as f,x as m,H as p,h as l,i as g,I as O,R as B,j as d,b as c,c as i,l as L,e as C,d as e,t as h,F as v,q as T,k as y,m as w,C as A,D as G,J as U,s as V}from"./index-ef0c03d4.js";const Y={setup(){const r=R(),o=E({});N(()=>{_(),t(),b()}),M(()=>{document.documentElement.scrollTop=0,s.comments=[]}),P(()=>{s.activeComment&&(o.value={...s.activeComment})});async function _(){try{await f.getCommunityProfiles(r.params.communityId)}catch(a){m.error(a.message,"[GETTING COMMUNITY PROFILES]")}}async function t(){try{await f.getCommunityRoutinesByCommunity(r.params.communityId)}catch(a){m.error(a.message,"[GETTING COMMUNITY ROUTINES BY COMMUNITY]")}}async function b(){try{await p.getComments(r.params.communityId)}catch(a){m.error(a.message)}}return{editable:o,route:r,account:l(()=>s.account),profiles:l(()=>s.communityProfiles.sort((a,u)=>u.points-a.points)),communityRoutines:l(()=>s.communityRoutines),comments:l(()=>s.comments),wantsTour:l(()=>s.wantsTour),steps:[{target:".v-step-11",header:{title:"Leaderboard"},content:"See the top earners of each community!",params:{enableScrolling:!1,placement:"bottom"}},{target:".v-step-12",content:"Add pre-made routines from each community!",params:{enableScrolling:!0,placement:"bottom"}},{target:".v-step-13",header:{title:"Chat with members of your community!"},content:"NOTE: You can only chat with your community members but view the chat of other communities.",params:{enableScrolling:!1,placement:"top"}}],callbacks:{onFinish:()=>{s.wantsTour=!1,g.updateAccount({needsTour:!1})},onSkip:()=>{s.wantsTour=!1,g.updateAccount({needsTour:!1})}},handleSubmit(){o.value.id?this.editComment():this.createComment(),o.value={}},async createComment(){try{o.value.community=r.params.communityId,await p.createComment(o.value),document.documentElement.scrollTop=document.documentElement.scrollHeight}catch(a){m.error(a.message)}},async editComment(){try{await p.editComment(o.value)}catch(a){m.error(a.message,"[EDITING COMMENT]")}}}},components:{CommentComponent:O,RoutineComponent:B}},D={class:"col-12 col-md-10 offset-md-2"},F={class:"accordion py-3",id:"accordionExample"},H={class:"accordion-item"},j=e("h2",{class:"accordion-header v-step-11"},[e("button",{class:"accordion-button collapsed bg-neutral-light",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"false","aria-controls":"collapseOne"}," Leaderboard ")],-1),q={id:"collapseOne",class:"accordion-collapse collapse","data-bs-parent":"#accordionExample"},J={class:"accordion-body"},z={class:"text-center"},K=["src","alt"],Q={class:"text-break"},W={class:"text-light"},X={class:"accordion-item"},Z=e("h2",{class:"accordion-header v-step-12"},[e("button",{class:"accordion-button collapsed bg-neutral-light",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo"}," Suggested Routines ")],-1),$={id:"collapseTwo",class:"accordion-collapse collapse","data-bs-parent":"#accordionExample"},ee={class:"accordion-body"},te={class:"row pt-2"},oe=e("h2",null,"Community Chat",-1),ae={class:"row sticky-bottom p-3 v-step-13"},ne={class:"form-group"},se=e("label",{for:"comment"},"Comment",-1);function ce(r,o,_,t,b,a){const u=d("Tour"),x=d("RouterLink"),k=d("RoutineComponent"),S=d("CommentComponent");return c(),i("div",D,[t.wantsTour==!0||t.account.needsTour==!0?(c(),L(u,{key:0,steps:t.steps,callbacks:t.callbacks},null,8,["steps","callbacks"])):C("",!0),e("section",F,[e("div",H,[j,e("div",q,[e("div",J,[e("h2",z,h(t.profiles.length)+" Active Community Members",1),(c(!0),i(v,null,T(t.profiles,n=>(c(),i("div",{key:n.id,class:"card elevation-5 my-3 bg-neutral"},[y(x,{to:{name:"Profile",params:{profileId:n.id}},class:"card-body d-flex align-items-center"},{default:w(()=>[e("img",{class:"profile-pic m-2",src:n.picture,alt:n.name},null,8,K),e("div",null,[e("p",Q,h(n.name),1),e("small",W,"Points: "+h(n.points),1)])]),_:2},1032,["to"])]))),128))])])]),e("div",X,[Z,e("div",$,[e("div",ee,[y(k,{routinesProp:t.communityRoutines},{default:w(()=>[V(" Suggested Routines ")]),_:1},8,["routinesProp"])])])])]),e("section",te,[oe,(c(!0),i(v,null,T(t.comments,n=>(c(),i("div",{key:n.id,class:"py-2"},[y(S,{commentProp:n},null,8,["commentProp"])]))),128))]),e("section",ae,[t.account.community==t.route.params.communityId?(c(),i("form",{key:0,onSubmit:o[1]||(o[1]=A(n=>t.handleSubmit(),["prevent"])),class:"bg-neutral-light p-3 rounded elevation-5"},[e("div",ne,[se,G(e("input",{"onUpdate:modelValue":o[0]||(o[0]=n=>t.editable.body=n),id:"comment",class:"form-control",type:"text",minlength:"2",maxlength:"100",placeholder:"Leave your comment..."},null,512),[[U,t.editable.body]])])],32)):C("",!0)])])}const ie=I(Y,[["render",ce]]);export{ie as default};
