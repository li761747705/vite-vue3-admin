var _=Object.defineProperty,b=Object.defineProperties;var w=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var p=(n,t,e)=>t in n?_(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,f=(n,t)=>{for(var e in t||(t={}))C.call(t,e)&&p(n,e,t[e]);if(d)for(var e of d(t))S.call(t,e)&&p(n,e,t[e]);return n},m=(n,t)=>b(n,w(t));var g=(n,t,e)=>new Promise((s,i)=>{var a=r=>{try{l(e.next(r))}catch(c){i(c)}},o=r=>{try{l(e.throw(r))}catch(c){i(c)}},l=r=>r.done?s(r.value):Promise.resolve(r.value).then(a,o);l((e=e.apply(n,t)).next())});import{aM as k,cd as x,ce as M,n as O,q,t as y,d as E,z as I,K as v,N as h,c as u,aJ as B,Z as F,a2 as N}from"./index.6ee6dd82.js";import{u as j}from"./dynamic-table.ca72cbb8.js";import"./VerticalRightOutlined.6a5c275f.js";import"./schema-form.35be2fee.js";import"./index.042397f8.js";function D(){return k({url:x.list,method:"get"})}function K(n){return k({url:x.kick,method:"post",data:n})}const U=(n={})=>{const t=M().client,e=new Map,s=()=>{Object.keys(n).forEach(a=>{if(t){const o=n[a];e.set(a,o),t.subscribe(a,o)}})},i=()=>{Object.keys(n).forEach(a=>{t&&e.has(a)&&t.unsubscribe(a,e.get(a))})};O(()=>t,s),q(s),y(i)},V={name:"SystemMonitorOnline"};var Z=E(m(f({},V),{setup(n){const[t,e]=j();U({connect(){e==null||e.reload()},online(){e==null||e.reload()},offline(){e==null||e.reload()}});const s=[{title:"#",dataIndex:"id",width:80,align:"center",hideInSearch:!0},{title:"\u7528\u6237\u540D",dataIndex:"username",align:"center",bodyCell:({record:a})=>u(N,null,[u("span",{class:"pr-16px"},[a.username]),a.isCurrent&&u(B,{color:"red"},{default:()=>[F("\u5F53\u524D")]})])},{title:"\u767B\u5F55IP",dataIndex:"ip",width:140,align:"center"},{title:"\u767B\u5F55\u65F6\u95F4",dataIndex:"time",align:"center"},{title:"\u64CD\u4F5C\u7CFB\u7EDF",dataIndex:"os",align:"center"},{title:"\u6D4F\u89C8\u5668",dataIndex:"browser",align:"center"},{title:"\u64CD\u4F5C",dataIndex:"$action",align:"center",actions:({record:a})=>[{label:"\u4E0B\u7EBF",auth:"sys.online.kick",disabled:a.disable,popConfirm:{title:"\u786E\u5B9A\u4E0B\u7EBF\u8BE5\u7528\u6237\u5417?",onConfirm:()=>i(a)}}]}],i=a=>g(this,null,function*(){yield K({id:a.id})});return(a,o)=>(I(),v(h(t),{ref:"dynamicTableRef","header-title":"\u5728\u7EBF\u7528\u6237","title-tooltip":"\u8FD9\u662F\u771F\u5B9E\u64CD\u4F5C\uFF0C\u8BF7\u4E0D\u8981\u968F\u610F\u5C06\u5176\u4ED6\u7528\u6237\u8E22\u4E0B\u7EBF\u3002","data-request":h(D),columns:s},null,8,["data-request"]))}}));export{Z as default};
