System.register(["./index-legacy.e5fd366a.js","./dynamic-table-legacy.d27c5afc.js","./VerticalRightOutlined-legacy.5945ff06.js","./schema-form-legacy.752b323f.js","./index-legacy.2950e7ca.js"],(function(e){"use strict";var t,n,a,i,l,c,r,d,s,o,u,f,g,m,b;return{setters:[function(e){t=e.aM,n=e.cd,a=e.ce,i=e.n,l=e.q,c=e.t,r=e.d,d=e.z,s=e.K,o=e.N,u=e.c,f=e.aJ,g=e.Z,m=e.a2},function(e){b=e.u},function(){},function(){},function(){}],execute:function(){function y(){return t({url:n.list,method:"get"})}e("default",r({name:"SystemMonitorOnline",setup(e){const[r,h]=b();((e={})=>{const t=a().client,n=new Map,r=()=>{Object.keys(e).forEach((a=>{if(t){const i=e[a];n.set(a,i),t.subscribe(a,i)}}))};i((()=>t),r),l(r),c((()=>{Object.keys(e).forEach((e=>{t&&n.has(e)&&t.unsubscribe(e,n.get(e))}))}))})({connect(){null==h||h.reload()},online(){null==h||h.reload()},offline(){null==h||h.reload()}});const x=[{title:"#",dataIndex:"id",width:80,align:"center",hideInSearch:!0},{title:"用户名",dataIndex:"username",align:"center",bodyCell:({record:e})=>u(m,null,[u("span",{class:"pr-16px"},[e.username]),e.isCurrent&&u(f,{color:"red"},{default:()=>[g("当前")]})])},{title:"登录IP",dataIndex:"ip",width:140,align:"center"},{title:"登录时间",dataIndex:"time",align:"center"},{title:"操作系统",dataIndex:"os",align:"center"},{title:"浏览器",dataIndex:"browser",align:"center"},{title:"操作",dataIndex:"$action",align:"center",actions:({record:e})=>[{label:"下线",auth:"sys.online.kick",disabled:e.disable,popConfirm:{title:"确定下线该用户吗?",onConfirm:()=>p(e)}}]}],p=async e=>{var a;await(a={id:e.id},t({url:n.kick,method:"post",data:a}))};return(e,t)=>(d(),s(o(r),{ref:"dynamicTableRef","header-title":"在线用户","title-tooltip":"这是真实操作，请不要随意将其他用户踢下线。","data-request":o(y),columns:x},null,8,["data-request"]))}}))}}}));
