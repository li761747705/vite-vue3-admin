var M=Object.defineProperty,x=Object.defineProperties;var g=Object.getOwnPropertyDescriptors;var _=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var p=(o,e,t)=>e in o?M(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,u=(o,e)=>{for(var t in e||(e={}))w.call(e,t)&&p(o,t,e[t]);if(_)for(var t of _(e))A.call(e,t)&&p(o,t,e[t]);return o},m=(o,e)=>x(o,g(e));import{d as B,bH as b,ae as N,J as f,z as O,B as U,c as s,Y as n,N as a,aA as V,an as H,Z as d,F as v}from"./index.6ee6dd82.js";import{A as T}from"./index.defcf1b7.js";const $=d(" \u5BF9ant-design-vue\u7684modal\u8FDB\u884C\u4E8C\u6B21\u5C01\u88C5\uFF0C\u81EA\u5B9A\u4E49\u4E00\u4E2A\u53EF\u62D6\u62FD\u3001\u53EF\u8C03\u6574\u5927\u5C0F\u7684\u6A21\u6001\u6846\uFF0C "),j=v("span",{class:"text-red-500"}," Tips: \u5982\u679C\u4F60\u7684\u5F39\u7A97\u4F9D\u8D56\u4E8EApp\u4E0A\u4E0B\u6587\uFF08provide/inject\uFF09\uFF0C\u4F60\u5E94\u8BE5\u4F7F\u7528`useModal\u7EC4\u4EF6\u65B9\u5F0F` ",-1),q=v("a",{class:"text-blue-500",target:"_blank",href:"https://github.com/buqiyuan/vue3-antd-admin/blob/main/src/views/demos/custom-modal.vue"}," \u67E5\u770B\u6E90\u7801 ",-1),z=d("\u666E\u901A\u7EC4\u4EF6\u65B9\u5F0F"),E=d("useModal\u7EC4\u4EF6\u65B9\u5F0F"),F=d("hook\u7EAF\u51FD\u6570\u5F0F"),J={name:"CustomModal"};var G=B(m(u({},J),{setup(o){const[e]=b(),[t]=b(),l=N({visible:!1}),h=()=>{e.show({title:"\u6211\u662Fhook\u7EAF\u51FD\u6570\u5F0F\u6A21\u6001\u6846",content:"hello"})},k=()=>{t.show({title:"\u6211\u662FUseModalComp",content:"\u563F\u563F\u563F"})},y=()=>{l.visible=!1};return(S,i)=>{const c=f("a-button"),C=f("a-card");return O(),U("div",null,[s(a(T),{message:"\u81EA\u5B9A\u4E49\u6A21\u6001\u6846",type:"info","show-icon":"",style:{"margin-bottom":"12px"}},{description:n(()=>[$,j,q]),_:1}),s(C,null,{default:n(()=>[s(a(V),null,{default:n(()=>[s(c,{type:"primary",onClick:i[0]||(i[0]=r=>a(l).visible=!0)},{default:n(()=>[z]),_:1}),s(c,{type:"primary",onClick:k},{default:n(()=>[E]),_:1}),s(c,{type:"primary",onClick:h},{default:n(()=>[F]),_:1})]),_:1})]),_:1}),s(a(H),{visible:a(l).visible,"onUpdate:visible":i[1]||(i[1]=r=>a(l).visible=r),onOk:y},null,8,["visible"]),s(a(t))])}}}));export{G as default};
