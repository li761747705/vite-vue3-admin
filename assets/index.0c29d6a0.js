var C=Object.defineProperty;var m=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var p=(e,o,t)=>o in e?C(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,h=(e,o)=>{for(var t in o||(o={}))P.call(o,t)&&p(e,t,o[t]);if(m)for(var t of m(o))_.call(o,t)&&p(e,t,o[t]);return e};var f=(e,o,t)=>new Promise((c,r)=>{var n=a=>{try{d(t.next(a))}catch(i){r(i)}},u=a=>{try{d(t.throw(a))}catch(i){r(i)}},d=a=>a.done?c(a.value):Promise.resolve(a.value).then(n,u);d((t=t.apply(e,o)).next())});import{c as l,a2 as g,Z as v,aJ as x,d as y,z as B,B as E,Y as b,N as s,ck as F}from"./index.6ee6dd82.js";import{A as S}from"./index.defcf1b7.js";import{u as w}from"./dynamic-table.ca72cbb8.js";import"./VerticalRightOutlined.6a5c275f.js";import"./schema-form.35be2fee.js";import"./index.042397f8.js";const A=["\u738B\u8DEF\u98DE","\u738B\u5927\u86C7","\u674E\u767D","\u523A\u5BA2\u4F0D\u516D\u4E03"],T=["\u897F\u88C5","\u9886\u5E26","\u88D9\u5B50","\u5305\u5305"],k=Array.from({length:30}).map((e,o)=>({id:o+1,date:new Date().toLocaleString(),name:A[~~(Math.random()*4)],clothes:T[~~(Math.random()*4)],price:~~(Math.random()*1e3),gender:~~(Math.random()*2),status:~~(Math.random()*2)})),D=e=>e===1?[{label:"\u897F\u88C5",value:1},{label:"\u9886\u5E26",value:0}]:e===0?[{label:"\u88D9\u5B50",value:1},{label:"\u5305\u5305",value:0}]:[],M=[{title:"\u59D3\u540D",align:"center",dataIndex:"name",formItemProps:{required:!0}},{title:"\u6027\u522B",align:"center",dataIndex:"gender",formItemProps:{component:"Select",componentProps:({formInstance:e,formModel:o,tableInstance:t})=>({options:[{label:"\u7537",value:1},{label:"\u5973",value:0}],onChange(){t==null||t.reload(),e==null||e.updateSchema({field:"clothes",componentProps:{options:D(o.gender)}}),o.clothes=void 0}})},bodyCell:({record:e})=>l(g,null,[["\u5973","\u7537"][e.gender]])},{title:"\u8863\u670D",align:"center",dataIndex:"clothes",formItemProps:{component:"Select"}},{title:"\u4EF7\u683C",align:"center",dataIndex:"price",formItemProps:{component:"Select"},bodyCell:({record:e})=>l(g,null,[[e.price],v("\u5143")])},{title:"\u72B6\u6001",align:"center",dataIndex:"status",formItemProps:{component:"Select",componentProps:{request:()=>new Promise(e=>{setTimeout(()=>{e([{label:"\u5DF2\u552E\u7F44",value:0},{label:"\u70ED\u5356\u4E2D",value:1}])},3e3)})}},bodyCell:({record:e})=>l(x,{color:e.status==1?"red":"default"},{default:()=>[["\u5DF2\u552E\u7F44","\u70ED\u5356\u4E2D"][e.status]]})}],q=v(" \u67E5\u8BE2\u8868\u683C-\u67E5\u8BE2\u8868\u5355\u4F7F\u7528\u793A\u4F8B "),Q=y({setup(e){const[o,t]=w(),c=r=>f(this,null,function*(){return new Promise(n=>{setTimeout(()=>{var u;n(h({list:k},r)),(u=t==null?void 0:t.getQueryFormRef())==null||u.updateSchema([{field:"price",componentProps:{options:[{label:"0-199",value:"0-199"},{label:"200-999",value:"200-999"}]}}])},500)})});return(r,n)=>(B(),E("div",null,[l(s(S),{message:"\u67E5\u8BE2\u8868\u683C",type:"info","show-icon":""},{description:b(()=>[q]),_:1}),l(s(F),{title:"\u67E5\u8BE2\u8868\u5355\u57FA\u672C\u4F7F\u7528\u793A\u4F8B",style:{"margin-top":"20px"}},{default:b(()=>[l(s(o),{size:"small",bordered:"","data-request":c,columns:s(M),"row-key":"heroid"},null,8,["columns"])]),_:1})]))}});export{Q as default};
