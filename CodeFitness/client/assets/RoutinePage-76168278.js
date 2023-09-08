import{_ as S,y as E,z as D,r as k,a as N,w as B,h as p,A as r,i as x,N as f,O as V,x as u,B as R,j as b,b as i,c as n,d as t,t as d,l as j,e as m,k as A,m as L,F as G,q as O,Q as q,s as z,D as M,I as P,p as U,g as F}from"./index-7be36172.js";const g={setup(){const c=E(),l=D(),h=k(""),e=k("");N(()=>{document.documentElement.scrollTop=0}),B(()=>{w(c.params.routineId)});async function w(s){try{await R.getRoutineById(s)}catch(a){u.error(a.message,"[GETTING ROUTINE BY ID]")}}return{editable:h,edit:e,activeRoutine:p(()=>r.activeRoutine),routineBackground:p(()=>{var s;return`url(${(s=r.activeRoutine)==null?void 0:s.picture})`}),account:p(()=>r.account),wantsTour:p(()=>r.wantsTour),points:p(()=>{let s=0;return r.activeRoutine.activities.forEach(a=>s+=a.level),r.activeRoutine.completeCount-s}),steps:[{target:"#v-step-3",header:{title:"Get Started"},content:"Add activities to your routine! ",params:{placement:"bottom-start",enableScrolling:!1}},{target:".v-step-4",content:"Level up your activities and increase their reps and point value!",params:{placement:"top-start",enableScrolling:!1}},{target:'[data-v-step="5"]',content:"After you have activities in your routine press the play button to start the routine! Get levels and points upon completion!",params:{placement:"bottom-end",enableScrolling:!1}}],callbacks:{onFinish:()=>{r.wantsTour=!1,x.updateAccount({needsTour:!1})},onSkip:()=>{r.wantsTour=!1,x.updateAccount({needsTour:!1})}},isEditing(){r.isEditing=!0},async setActiveActivity(s){try{await f.setActiveActivity(s),V.getOrCreateInstance("#activeActivity").show()}catch(a){u.error(a.message,"[SETTING ACTIVE ACTIVITY]")}},async updateActivity(s,a){try{a?s.level+=a:s.sets=h.value,await f.updateActivity(s)}catch(y){u.error(y.message,"[UPDATING ACTIVITY]")}},async removeActivity(s){try{if(!await u.confirm(`Are you sure you want to remove ${s.name} from this routine?`))return;await f.removeActivity(s.id)}catch(a){u.error(a.message,"[DELETING ACTIVITY]")}},async removeRoutine(){try{if(!await u.confirm(`Are you sure you want to delete ${r.activeRoutine.title}?`))return;await R.removeRoutine(c.params.routineId),l.push("/")}catch(s){u.error(s.message,"[DELETING ROUTINE]")}}}}},T=()=>{q(c=>({"83b5dd1a":c.routineBackground}))},I=g.setup;g.setup=I?(c,l)=>(T(),I(c,l)):T;const _=c=>(U("data-v-ff63ad8a"),c=c(),F(),c),Y={class:"col-12 col-md-10 offset-md-2 d-flex flex-column"},Q={key:0,class:"row text-center bg-neutral-dark text-light p-3 bg-img"},H={class:"col-12 d-flex justify-content-between align-items-center dropdown z-1"},J={class:"row justify-content-between align-items-center flex-grow-1 p-2 bg-title"},K={class:"col-3 text-start fs-5"},W={class:"col-6"},X={class:"fs-1 text-break"},Z={class:"col-3 text-end"},$={key:0,"data-v-step":"5",type:"button",class:"btn selectable no-select mdi mdi-play fs-3 text-action",title:"Start Routine"},tt=_(()=>t("button",{type:"button",class:"btn text-light selectable no-select mdi mdi-dots-horizontal fs-3","data-bs-toggle":"dropdown","aria-expanded":"false",title:"More Options"},null,-1)),et={class:"dropdown-menu dropdown-menu-end p-0","aria-labelledby":"authDropdown"},ot={class:"list-group text-center"},st=_(()=>t("p",{class:"mdi mdi-pencil"},"Edit Routine",-1)),it=[st],nt=_(()=>t("p",{class:"mdi mdi-trash-can"},"Delete Routine",-1)),at=[nt],ct={class:"col-12 text-break"},lt={key:0,class:"col-12 d-flex overflow-auto p-0"},rt={class:"card card-size text-center fw-bold elevation-5"},dt={class:"d-flex flex-column card-body"},ut={class:"card-title"},_t={class:"d-flex flex-column justify-content-between flex-grow-1 card-text"},vt={class:"d-flex justify-content-center align-items-center"},pt={key:0,class:"v-step-4"},mt=["onClick"],ht={class:"d-flex justify-content-between p-2"},yt={key:0},ft={key:1},bt=["max"],gt={key:2},wt={key:3},kt={key:0,class:"p-2"},xt=_(()=>t("h4",null,"Equipment:",-1)),Rt={class:"d-flex justify-content-between"},At=["onClick"],Tt={key:0,type:"button",class:"btn selectable no-select mdi mdi-dots-horizontal fs-3","data-bs-toggle":"dropdown","aria-expanded":"false",title:"More Options"},It=["onClick"],Ct={class:"dropdown-menu dropdown-menu-end p-0","aria-labelledby":"authDropdown"},St={class:"list-group text-center"},Et=["onClick"],Dt=_(()=>t("p",{class:"mdi mdi-pencil"},"Edit Sets",-1)),Nt=[Dt],Bt=["onClick"],Vt=_(()=>t("p",{class:"mdi mdi-trash-can"},"Delete Activity",-1)),jt=[Vt],Lt={key:1,class:"bg-title mt-3"},Gt=_(()=>t("h1",null,"Please Select Activities Below",-1)),Ot=[Gt],qt={id:"v-step-3",class:"row m-3 justify-content-center"};function zt(c,l,h,e,w,s){const a=b("Tour"),y=b("RouterLink"),C=b("ActivitySearch");return i(),n("div",Y,[e.activeRoutine?(i(),n("section",Q,[t("div",H,[t("section",J,[t("p",K,"Available Levels: "+d(e.points),1),t("div",W,[t("p",X,d(e.activeRoutine.title),1),e.wantsTour==!0||e.account.needsTour==!0?(i(),j(a,{key:0,steps:e.steps,callbacks:e.callbacks},null,8,["steps","callbacks"])):m("",!0)]),t("div",Z,[A(y,{to:{name:"ActiveRoutine",params:{routineId:e.activeRoutine.id}}},{default:L(()=>[e.activeRoutine.activities.length?(i(),n("button",$)):m("",!0)]),_:1},8,["to"]),tt,t("div",et,[t("div",ot,[t("div",{onClick:l[0]||(l[0]=o=>e.isEditing()),class:"list-group-item dropdown-item list-group-item-action selectable","data-bs-toggle":"modal","data-bs-target":"#routineForm"},it),t("div",{onClick:l[1]||(l[1]=o=>e.removeRoutine()),class:"list-group-item dropdown-item list-group-item-action text-danger selectable"},at)])])]),t("p",ct,d(e.activeRoutine.description),1)])]),e.activeRoutine.activities.length?(i(),n("div",lt,[(i(!0),n(G,null,O(e.activeRoutine.activities,o=>(i(),n("div",{key:o.id,class:"d-flex justify-content-center p-3"},[t("div",rt,[t("div",dt,[t("h2",ut,d(o.name),1),t("div",_t,[t("div",null,[t("div",vt,[e.points?(i(),n("button",{key:1,onClick:v=>e.updateActivity(o,1),class:"btn btn-action fs-4 v-step-4",type:"button"}," Level: "+d(o.level)+" + ",9,mt)):(i(),n("h3",pt,"Level: "+d(o.level),1))]),t("div",ht,[e.edit!=o.id?(i(),n("h4",yt,"Sets: "+d(o.sets),1)):(i(),n("h4",ft,[z("Sets: "),M(t("input",{"onUpdate:modelValue":l[2]||(l[2]=v=>e.editable=v),type:"number",class:"form-control",min:"1",max:o.reps,required:""},null,8,bt),[[P,e.editable]])])),o.type=="Cardio"?(i(),n("h4",gt,"Duration: "+d(o.reps),1)):(i(),n("h4",wt,"Reps: "+d(Math.ceil(o.reps/o.sets)),1))]),o.equipment?(i(),n("div",kt,[xt,t("h4",null,d(o.equipment),1)])):m("",!0)]),t("div",Rt,[t("button",{onClick:v=>e.setActiveActivity(o),class:"fs-6 btn btn-action"},"Activity Details",8,At),e.edit!=o.id?(i(),n("button",Tt)):(i(),n("button",{key:1,onClick:v=>(e.updateActivity(o,0),e.edit=""),type:"button",class:"btn btn-action selectable no-select fs-6","data-bs-toggle":"dropdown"},"Save",8,It)),t("div",Ct,[t("div",St,[t("div",{onClick:v=>e.edit=o.id,class:"list-group-item dropdown-item list-group-item-action selectable"},Nt,8,Et),t("div",{onClick:v=>e.removeActivity(o),class:"list-group-item dropdown-item list-group-item-action text-danger selectable"},jt,8,Bt)])])])])])])]))),128))])):(i(),n("div",Lt,Ot))])):m("",!0),t("section",qt,[A(C)])])}const Pt=S(g,[["render",zt],["__scopeId","data-v-ff63ad8a"]]);export{Pt as default};
