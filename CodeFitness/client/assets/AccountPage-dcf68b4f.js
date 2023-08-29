import{_ as x,a as T,w,h as i,A as n,i as m,P as A,R as P,j as p,b as t,c as r,k as S,l as f,m as E,e as _,d as e,t as d,F as h,q as g,s as I,n as B,u as C,p as R,g as D,v as N,x as U}from"./index-27fe3ae8.js";const V={setup(){async function l(){try{await N.getAchievementsByUserId()}catch(a){U.error(a.message,"[GETTING ACHIEVEMENTS BY USER ID]")}}return T(()=>{document.documentElement.scrollTop=0}),w(()=>{n.account.id&&l()}),{account:i(()=>n.account),picture:i(()=>`url(${n.account.picture})`),achievements:i(()=>n.activeAchievements),wantsTour:i(()=>n.wantsTour),routines:i(()=>n.routines.sort((a,u)=>u.updatedAt-a.updatedAt)),completed:i(()=>{let a=0;return n.activeAchievements.forEach(u=>{a+=u.tier}),a}),steps:[{target:".v-step-7",content:"Unlock Badges by doing Routines!",params:{enableScrolling:!0,placement:"top"}}],callbacks:{onFinish:()=>{n.wantsTour=!1,m.updateAccount({needsTour:!1})},onSkip:()=>{n.wantsTour=!1,m.updateAccount({needsTour:!1})}}}},components:{ProfileDetails:A,RoutineComponent:P}},v=l=>(R("data-v-c612c70c"),l=l(),D(),l),j={class:"col-12 col-md-10 offset-md-2"},F={class:"row"},q=v(()=>e("div",{class:"col-12 bg-neutral-light text-center fs-1 py-3"}," Badges ",-1)),z={class:"col-12 bg-secondary"},G={class:"row pt-5"},H={class:"v-step-7"},Y={class:"row text-light"},L=["src","title"],M={key:0,class:"d-flex flex-column justify-content-between"},J={key:0,class:"progress bg-dark rounded-0 m-2 border border-light",role:"progressbar"},K={key:1,class:"d-flex flex-column justify-content-center"},O=v(()=>e("h3",null," -HIDDEN- ",-1)),Q=[O];function W(l,a,u,o,X,Z){const y=p("ProfileDetails"),k=p("RoutineComponent"),b=p("Tour");return t(),r("div",j,[S(y,{profileProp:o.account},null,8,["profileProp"]),o.routines.length?(t(),f(k,{key:0,routinesProp:o.routines},{default:E(()=>[I(" Your Recent Routines: ")]),_:1},8,["routinesProp"])):_("",!0),e("section",F,[q,e("div",z,[e("section",G,[o.wantsTour==!0||o.account.needsTour==!0?(t(),f(b,{key:0,steps:o.steps,callbacks:o.callbacks},null,8,["steps","callbacks"])):_("",!0),e("h1",H," Completed "+d(o.completed)+" out of 16 ",1),(t(!0),r(h,null,g(o.achievements,s=>(t(),r("div",{key:s.id,class:"d-flex flex-column py-1"},[e("h2",null,d(s.name)+" Progress: "+d(s.progress),1),e("div",Y,[(t(!0),r(h,null,g(s.achievementTier,c=>(t(),r("div",{key:c._id,class:"col-12 col-md-6 col-xl-3 d-flex achievement-card border border-light"},[e("img",{class:B(["img-fluid",s.tier>=c.tier?"unlocked":"locked"]),src:c.picture,alt:"",title:c.name},null,10,L),s.tier>=c.tier-1?(t(),r("div",M,[e("h3",null,d(c.name),1),e("p",null,d(c.description),1),s.tier==c.tier-1?(t(),r("div",J,[e("div",{class:"progress-bar bg-success",style:C({width:s.progress/s.requirement[c.tier-1]*100+"%"})},null,4)])):_("",!0)])):(t(),r("div",K,Q))]))),128))])]))),128))])])])])}const ee=x(V,[["render",W],["__scopeId","data-v-c612c70c"]]);export{ee as default};