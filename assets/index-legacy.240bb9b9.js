System.register(["./index-legacy.e5fd366a.js","./dynamic-table-legacy.d27c5afc.js","./index-legacy.46226793.js","./VerticalRightOutlined-legacy.5945ff06.js","./schema-form-legacy.752b323f.js","./index-legacy.2950e7ca.js"],(function(e){"use strict";var t,n,a,i,c,r,d,l;return{setters:[function(e){t=e.d,n=e.z,a=e.K,i=e.N,c=e.c,r=e.aJ},function(e){d=e.u},function(e){l=e.g},function(){},function(){},function(){}],execute:function(){e("default",t({name:"SystemMonitorReqLog",setup(e){const[t]=d(),s=[{title:"请求IP",dataIndex:"ip",width:150,align:"center"},{title:"操作人ID",dataIndex:"userId",align:"center",width:100},{title:"请求方式",dataIndex:"method",align:"center",bodyCell:({record:e})=>c(r,{color:"processing"},{default:()=>[e.method]})},{title:"请求参数",dataIndex:"params",align:"center",ellipsis:!0,width:150},{title:"请求地址",dataIndex:"action",align:"center"},{title:"响应状态",dataIndex:"status",align:"center",width:120,bodyCell:({record:e})=>{return c(r,{color:(t=e.status,t>=200&&t<300?"success":t>=300&&t<400?"default":t>=400&&t<500?"warning":t>=500?"error":"default")},{default:()=>[e.status]});var t}},{title:"耗时",dataIndex:"consumeTime",align:"center",width:120,bodyCell:({record:e})=>{return c(r,{color:(t=e.consumeTime,t<=20?"success":t<=40?"warning":"error")},{default:()=>[`${e.consumeTime}ms`]});var t}},{title:"操作时间",dataIndex:"createTime",align:"center",width:220}];return(e,c)=>(n(),a(i(t),{"header-title":"请求日志","title-tooltip":"这是mock数据","data-request":i(l),columns:s},null,8,["data-request"]))}}))}}}));
