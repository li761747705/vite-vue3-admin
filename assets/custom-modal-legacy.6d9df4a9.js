System.register(["./index-legacy.e5fd366a.js","./index-legacy.286e0181.js"],(function(e){"use strict";var t,i,n,l,s,o,a,u,c,d,r,p,b,m;return{setters:[function(e){t=e.d,i=e.bH,n=e.ae,l=e.J,s=e.z,o=e.B,a=e.c,u=e.Y,c=e.N,d=e.aA,r=e.an,p=e.Z,b=e.F},function(e){m=e.A}],execute:function(){const v=p(" 对ant-design-vue的modal进行二次封装，自定义一个可拖拽、可调整大小的模态框， "),f=b("span",{class:"text-red-500"}," Tips: 如果你的弹窗依赖于App上下文（provide/inject），你应该使用`useModal组件方式` ",-1),y=b("a",{class:"text-blue-500",target:"_blank",href:"https://github.com/buqiyuan/vue3-antd-admin/blob/main/src/views/demos/custom-modal.vue"}," 查看源码 ",-1),h=p("普通组件方式"),g=p("useModal组件方式"),k=p("hook纯函数式");e("default",t({name:"CustomModal",setup(e){const[t]=i(),[p]=i(),b=n({visible:!1}),_=()=>{t.show({title:"我是hook纯函数式模态框",content:"hello"})},x=()=>{p.show({title:"我是UseModalComp",content:"嘿嘿嘿"})},C=()=>{b.visible=!1};return(e,t)=>{const i=l("a-button"),n=l("a-card");return s(),o("div",null,[a(c(m),{message:"自定义模态框",type:"info","show-icon":"",style:{"margin-bottom":"12px"}},{description:u((()=>[v,f,y])),_:1}),a(n,null,{default:u((()=>[a(c(d),null,{default:u((()=>[a(i,{type:"primary",onClick:t[0]||(t[0]=e=>c(b).visible=!0)},{default:u((()=>[h])),_:1}),a(i,{type:"primary",onClick:x},{default:u((()=>[g])),_:1}),a(i,{type:"primary",onClick:_},{default:u((()=>[k])),_:1})])),_:1})])),_:1}),a(c(r),{visible:c(b).visible,"onUpdate:visible":t[1]||(t[1]=e=>c(b).visible=e),onOk:C},null,8,["visible"]),a(c(p))])}}}))}}}));
