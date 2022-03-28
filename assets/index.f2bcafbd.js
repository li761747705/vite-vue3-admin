var F=Object.defineProperty,C=Object.defineProperties;var S=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var d=(e,u,l)=>u in e?F(e,u,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[u]=l,n=(e,u)=>{for(var l in u||(u={}))P.call(u,l)&&d(e,l,u[l]);if(i)for(var l of i(u))w.call(u,l)&&d(e,l,u[l]);return e},c=(e,u)=>C(e,S(u));import{y as k,d as g,J as p,z as x,B as A,c as o,Y as t,N as B,F as r,G as y,H as N,Z as s,a9 as D}from"./index.6ee6dd82.js";import{A as E}from"./index.defcf1b7.js";import{u as T}from"./useForm.b5f9636c.js";import"./schema-form.35be2fee.js";import"./index.042397f8.js";const W=[{field:"field1",component:"Input",label:"\u5B57\u6BB51",colProps:{span:8},vShow:({formModel:e})=>!!e.field5},{field:"field2",component:"Input",label:"\u5B57\u6BB52",colProps:{span:8},vShow:({formModel:e})=>!!e.field6},{field:"field3",component:"DatePicker",label:"\u5B57\u6BB53",colProps:{span:8},dynamicDisabled:({formModel:e})=>!!e.field7},{field:"field4",component:"Select",label:"\u5B57\u6BB54",colProps:{span:8},dynamicRules:({formModel:e})=>e.field8?[{required:!0,message:"\u5B57\u6BB54\u5FC5\u586B"}]:[],componentProps:{options:[{label:"\u9009\u98791",value:"1",key:"1"},{label:"\u9009\u98792",value:"2",key:"2"}]}},{field:"field11",component:"DatePicker",label:"\u5B57\u6BB511",colProps:{span:8}},{field:"field5",component:"Switch",label:"\u662F\u5426\u663E\u793A\u5B57\u6BB51(css\u63A7\u5236)",colProps:{span:8},labelWidth:200},{field:"field6",component:"Switch",label:"\u662F\u5426\u663E\u793A\u5B57\u6BB52(dom\u63A7\u5236)",colProps:{span:8},labelWidth:200},{field:"field7",component:"Switch",label:"\u662F\u5426\u7981\u7528\u5B57\u6BB53",colProps:{span:8},labelWidth:200},{field:"field8",component:"Switch",label:"\u5B57\u6BB54\u662F\u5426\u5FC5\u586B",colProps:{span:8},componentProps:({formInstance:e})=>({onChange(u){requestIdleCallback(()=>{u?e==null||e.validateFields():e==null||e.clearValidate()})}}),labelWidth:200}];const Y=e=>(y("data-v-1c5d09ed"),e=e(),N(),e),V=Y(()=>r("a",{class:"text-blue-500",target:"_blank",href:"https://github.com/buqiyuan/vite-vue3-admin/blob/main/src/views/demos/form/use-form/index.vue"}," \u67E5\u770B\u6E90\u7801 ",-1)),q={class:"mb-4"},M=s(" \u66F4\u6539\u5B57\u6BB53label "),L=s(" \u540C\u65F6\u66F4\u6539\u5B57\u6BB53,4label "),z=s(" \u5F80\u5B57\u6BB53\u540E\u9762\u63D2\u5165\u5B57\u6BB510 "),G=s(" \u5220\u9664\u5B57\u6BB511 "),H={name:"DemosFormDynamicForm"},J=g(c(n({},H),{setup(e){const[u,l]=T({labelWidth:120,schemas:W,actionColOptions:{span:24},fieldMapToTime:[["fieldTime",["startTime","endTime"],"YYYY-MM"]]});function _(){l.validate().then(()=>D.success("\u9A8C\u8BC1\u901A\u8FC7\uFF01"))}function m(){l==null||l.updateSchema({field:"field3",label:"\u5B57\u6BB53 New"})}function f(){l==null||l.updateSchema([{field:"field3",label:"\u5B57\u6BB53 New++"},{field:"field4",label:"\u5B57\u6BB54 New++"}])}function b(){l==null||l.appendSchemaByField({field:"field10",label:"\u5B57\u6BB510",component:"Input",colProps:{span:8}},"field3")}function h(){l==null||l.removeSchemaByFiled("field11")}return(O,Z)=>{const a=p("a-button"),v=p("a-card");return x(),A("div",null,[o(B(E),{message:"useForm\u793A\u4F8B",type:"info","show-icon":"",style:{"margin-bottom":"12px"}},{description:t(()=>[V]),_:1}),r("div",q,[o(a,{class:"mr-2",onClick:m},{default:t(()=>[M]),_:1}),o(a,{class:"mr-2",onClick:f},{default:t(()=>[L]),_:1}),o(a,{class:"mr-2",onClick:b},{default:t(()=>[z]),_:1}),o(a,{class:"mr-2",onClick:h},{default:t(()=>[G]),_:1})]),o(v,null,{default:t(()=>[o(B(u),{onSubmit:_})]),_:1})])}}}));var I=k(J,[["__scopeId","data-v-1c5d09ed"]]);export{I as default};
