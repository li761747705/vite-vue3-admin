System.register(["./index-legacy.e5fd366a.js","./dynamic-table-legacy.d27c5afc.js","./index-legacy.46226793.js","./VerticalRightOutlined-legacy.5945ff06.js","./schema-form-legacy.752b323f.js","./index-legacy.2950e7ca.js"],(function(e){"use strict";var t,a,n,c,l,r,d,i,s,u,o;return{setters:[function(e){t=e.d,a=e.z,n=e.K,c=e.N,l=e.c,r=e.a2,d=e.Z,i=e.aJ,s=e.aK},function(e){u=e.u},function(e){o=e.b},function(){},function(){},function(){}],execute:function(){e("default",t({name:"SystemScheduleTaskLog",setup(e){const[t]=u(),f=e=>{switch(e){case 0:return"danger";case 1:return"success"}},g=[{title:"#",dataIndex:"id",width:80,align:"center",hideInSearch:!0},{title:"任务编号",dataIndex:"taskId",align:"center"},{title:"任务名称",dataIndex:"name",align:"center"},{title:"异常信息",dataIndex:"detail",align:"center",bodyCell:({record:e})=>{var t;return l(r,null,[null!==(t=e.detail)&&void 0!==t?t:"无"])}},{title:"耗时",dataIndex:"consumeTime",align:"center",bodyCell:({record:e})=>l(i,null,{default:()=>[e.consumeTime,d("ms")]})},{title:"状态",dataIndex:"status",align:"center",bodyCell:({record:e})=>{let t;return l(i,{color:f(e.status)},"function"==typeof(a=t=(e=>{switch(e){case 0:return"失败";case 1:return"成功"}})(e.status))||"[object Object]"===Object.prototype.toString.call(a)&&!s(a)?t:{default:()=>[t]});var a}},{title:"执行时间",dataIndex:"createdAt",align:"center"}];return(e,l)=>(a(),n(c(t),{"header-title":"任务日志","data-request":c(o),search:!1,columns:g},null,8,["data-request"]))}}))}}}));
