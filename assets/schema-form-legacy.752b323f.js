System.register(["./index-legacy.e5fd366a.js","./index-legacy.2950e7ca.js"],(function(e){"use strict";var t,o,n,a,s,l,r,c,i,d,u,m,f,p,v,h,b,y,g,A,F,k,w,P,R,S,x,B,C,I,M,O,j,T,$,V,_,L,D,W,q,E,G,Y,z,K,N,J,X,Z,U,H,Q,ee,te,oe,ne,ae,se,le,re,ce,ie,de,ue,me,fe;return{setters:[function(e){t=e.bI,o=e.bJ,n=e.bK,a=e.j,s=e.N,l=e.bL,r=e.bM,c=e.m,i=e.p,d=e.d,u=e.bN,m=e.bO,f=e.bP,p=e.bm,v=e.bA,h=e.bQ,b=e.aK,y=e.c,g=e.Z,A=e.by,F=e.ac,k=e.bt,w=e.q,P=e.C,R=e.E,S=e.z,x=e.K,B=e.Y,C=e.bv,I=e.bC,M=e.a6,O=e.bR,j=e.ak,T=e.bS,$=e.az,V=e.bT,_=e.a3,L=e.a8,D=e.bU,W=e.a2,q=e.bo,E=e.bV,G=e.y,Y=e.bW,z=e.D,K=e.F,N=e.$,J=e.ag,X=e.r,Z=e.ae,U=e.bX,H=e.bY,Q=e.bZ,ee=e.b_,te=e.b$,oe=e.c0,ne=e.c1,ae=e.n,se=e.c2,le=e.c3,re=e.c4,ce=e.B,ie=e.bD,de=e.c5,ue=e.c6,me=e.c7},function(e){fe=e.d}],execute:function(){const pe=n;function ve(e,t=""){const{t:o}=r();return e.includes("Input")||e.includes("Complete")?`${o("common.inputText")}${t}`:e.includes("Picker")||["Select","Cascader","Checkbox","CheckboxGroup","Switch","TreeSelect"].includes(e)?`${o("common.chooseText")}${t}`:""}const he=["DatePicker","MonthPicker","WeekPicker","TimePicker","RangePicker"],be=Symbol("schema-form");function ye(){return c(be)}var ge=d({name:"SchemaFormItem",props:{formModel:{type:Object,default:()=>({})},schema:{type:Object,default:()=>({})},setFormModel:{type:Function,default:null},tableInstance:{type:Object},setItemRef:{type:Function,default:()=>({})}},emits:["update:formModel"],setup(e,{emit:t}){const o=e,n=ye(),{formPropsRef:c}=n,i=u(o,"formModel",t),{t:d}=r(),{schema:G}=m(o),Y=function(e,t){return a((()=>{const o=s(e),{labelCol:n={},wrapperCol:a={}}=o.formItemProps||{},{labelWidth:r,disabledLabelWidth:c}=o,{labelWidth:i,labelCol:d,wrapperCol:u}=s(t);if(!i&&!r&&!d||c)return n.style={textAlign:"left"},{labelCol:n,wrapperCol:a};let m=r||i;const f={...d,...n},p={...u,...a};return m&&(m=l(m)?`${m}px`:m),{labelCol:{style:{width:m},...f},wrapperCol:{style:{width:`calc(100% - ${m})`},...p}}}))}(G,c),z=a((()=>{const{component:e,componentProps:t}=G.value;return!f(t)&&null!=t&&t.vModelKey?t.vModelKey:p(e)&&["Switch","Checkbox"].includes(e)?"checked":"value"})),K=a((()=>{const{formModel:e,schema:t,tableInstance:a}=o,{mergeDynamicData:l}=s(c);return{field:t.field,formInstance:n,tableInstance:a,formModel:e,values:{...l,...e},schema:t}})),N=a((()=>{const{vShow:e,vIf:t,isAdvanced:o=!1}=s(G),{showAdvancedButton:n}=s(c),a=!n||!v(o)||o;let l=!0,r=!0;return v(e)&&(l=e),v(t)&&(r=t),f(e)&&(l=e(s(K))),f(t)&&(r=t(s(K))),l=l&&a,{isShow:l,isIfShow:r}})),J=a((()=>{const{disabled:e}=s(c),{dynamicDisabled:t}=o.schema,{disabled:n=!1}=s(H);let a=!!e||n;return v(t)&&(a=t),f(t)&&(a=t(s(K))),a})),X=(e,t=s(K))=>{if(p(e))return y(W,null,[e]);if(b(e))return e;if(f(e))return X(e(t));if(q(e)){const t=Object.keys(e);return t.some((e=>e.startsWith("_")||["setup","render"].includes(e)))?e:t.reduce(((t,o)=>(t[o]=(...t)=>X(e[o],t),t)),{})}return e},Z=a((()=>{var e;const t=o.schema.component;return p(t)&&null!==(e=h[t])&&void 0!==e?e:X(t)})),U=a((()=>{var e;const t=null!==(e=o.schema.componentSlots)&&void 0!==e?e:{};return p(t)||b(t)?{default:(...e)=>X(t,e)}:X(t)})),H=a((()=>{const{schema:e}=o;let{componentProps:t={},component:n,label:a=""}=e;var l,r,c;return f(t)&&(t=null!==(l=t(s(K)))&&void 0!==l?l:{}),"RangePicker"!==n&&p(n)&&(null!==(c=(r=t).placeholder)&&void 0!==c||(r.placeholder=ve(n,a))),"Divider"===e.component&&(t=Object.assign({type:"horizontal"},t,{orientation:"left",plain:!0})),"field35"===e.field&&console.log("componentProps",t),t})),Q=a((()=>{var e;const t=(null===(e=o.schema)||void 0===e?void 0:e.componentProps)||{};return Object.keys(t).reduce(((e,o)=>(/on([A-Z])/.test(o)&&(e[o.replace(/on([A-Z])/,"$1").toLocaleLowerCase()]=t[o]),e)),{})})),ee=a((()=>{const{label:e,helpMessage:t,helpComponentProps:n,subLabel:a}=o.schema,l=a?y("span",null,[e,g(" "),y("span",{class:"text-secondary"},[a])]):X(e),r=f(t)?t(s(K)):t;return!r||Array.isArray(r)&&0===r.length?l:y("span",null,[l,y(A,F({placement:"top",class:"mx-1",text:r},n),null)])})),te=a((()=>{const{rules:e=[],component:t,rulesMessageJoinLabel:n,label:a,dynamicRules:l,required:r}=o.schema;if(f(l))return l(s(K));let i=k(e);const{rulesMessageJoinLabel:u}=s(c),m=Reflect.has(s(c),"rulesMessageJoinLabel")?n:u,v=p(t)?`${ve(t,a)}${m?a:""}`:void 0,h=f(r)?r(s(K)):r;i&&0!==i.length||!h||(i=[{required:h,validator:function(e,t){const o=e.message||v;return void 0===t||E(t)||Array.isArray(t)&&0===t.length||"string"==typeof t&&""===t.trim()||"object"==typeof t&&Reflect.has(t,"checked")&&Reflect.has(t,"halfChecked")&&Array.isArray(t.checked)&&Array.isArray(t.halfChecked)&&0===t.checked.length&&0===t.halfChecked.length?Promise.reject(o):Promise.resolve()}}]);const b=i.findIndex((e=>Reflect.has(e,"required")&&!Reflect.has(e,"validator")));if(-1!==b){const e=i[b];var y;if(t&&p(t))Reflect.has(e,"type")||(e.type="InputNumber"===t?"number":"string"),e.message=e.message||v,(t.includes("Input")||t.includes("Textarea"))&&(e.whitespace=!0),function(e,t,o){["DatePicker","MonthPicker","WeekPicker","TimePicker"].includes(t)?e.type=o?"string":"object":["RangePicker","Upload","CheckboxGroup","TimePicker"].includes(t)?e.type="array":["InputNumber"].includes(t)&&(e.type="number")}(e,t,null===(y=s(H))||void 0===y?void 0:y.valueFormat)}const g=i.findIndex((e=>e.max));return-1===g||i[g].validator||(i[g].message=i[g].message||d("component.form.maxTip",[i[g].max])),i}));return w((async()=>{var e;if(null!==(e=H.value)&&void 0!==e&&e.request){const e=H.value,{componentProps:o,component:n}=G.value;G.value.loading=!0,"field35"===G.value.field&&console.log("compProps",e,c.value);try{var t;const a=await(null===(t=H.value)||void 0===t?void 0:t.request(s(K)));["Select","RadioGroup","CheckBoxGroup"].some((e=>e===n))?e.options=a:["TreeSelect","Tree"].some((e=>e===n))&&(e.treeData=a),o&&(o.requestResult=a)}finally{G.value.loading=!1}}})),(t,o)=>s(N).isIfShow?P((S(),x(s(D),I(F({key:0},s(G).colProps)),{default:B((()=>["Divider"===s(G).component?(S(),x(s(C),I(F({key:0},s(H))),{default:B((()=>[(S(),x(M(s(ee))))])),_:1},16)):(S(),x(s(O).Item,F({key:1},{...s(G).formItemProps},{label:s(ee),name:s(G).field,"label-col":s(Y).labelCol,"wrapper-col":s(Y).wrapperCol,rules:s(te)}),{default:B((()=>[s(G).slot?j(t.$slots,s(G).slot,I(F({key:0},s(K)))):s(Z)?(S(),x(M(s(Z)),F({key:1,ref:e.setItemRef,key:s(G).field},s(H),{[s(z)]:s(i)[s(G).field],["onUpdate:"+s(z)]:o[0]||(o[0]=e=>s(i)[s(G).field]=e),"allow-clear":!0,disabled:s(J)},T(s(Q))),$({_:2},[Object.is(s(G).loading,!0)?{name:"notFoundContent",fn:B((()=>[y(s(V),{size:"small"})]))}:void 0,_(s(U),((e,t)=>({name:t,fn:B((o=>{var n;return[(S(),x(M(null!==(n=null==e?void 0:e({...s(K),slotData:o}))&&void 0!==n?n:e),{key:t}))]}))})))]),1040,["disabled"])):L("",!0)])),_:3},16,["label","name","label-col","wrapper-col","rules"]))])),_:3},16)),[[R,s(N).isShow]]):L("",!0)}});const Ae=d({props:{expand:{type:Boolean}},setup(e){const t=e;Y((e=>({"3cc09834":s(o)})));const o=a((()=>(t.expand?0:.5)+"turn"));return(e,t)=>(S(),x(s(z),{class:"collapse-icon"}))}});var Fe=G(Ae,[["__scopeId","data-v-623bf38a"]]);const ke=d({name:"FormAction",inheritAttrs:!1,props:{showActionButtonGroup:{type:Boolean,default:!0},showResetButton:{type:Boolean,default:!0},showSubmitButton:{type:Boolean,default:!0},showAdvancedButton:{type:Boolean,default:!0},resetButtonOptions:{type:Object,default:()=>({})},submitButtonOptions:{type:Object,default:()=>({})},actionColOptions:{type:Object,default:()=>({})},actionSpan:{type:Number,default:6},isAdvanced:Boolean,hideAdvanceBtn:Boolean},emits:["toggle-advanced"],setup(e,{emit:t}){const o=e,{t:n}=r(),{resetFields:l,submit:c}=ye(),i=a((()=>{const{showAdvancedButton:e,actionSpan:t,actionColOptions:n}=o,a=24-t;return{style:{textAlign:"right"},span:e?6:4,...e?{span:a<6?24:a}:{},...n}})),d=a((()=>Object.assign({text:n("common.resetText")},o.resetButtonOptions))),u=a((()=>Object.assign({text:n("common.queryText")},o.submitButtonOptions)));function m(){t("toggle-advanced",o.isAdvanced)}return(t,o)=>e.showActionButtonGroup?(S(),x(s(D),I(F({key:0},s(i))),{default:B((()=>[K("div",{style:J([{width:"100%"},{textAlign:s(i).style.textAlign}])},[y(s(O).Item,null,{default:B((()=>[j(t.$slots,"resetBefore"),e.showResetButton?(S(),x(s(pe),F({key:0,type:"default",class:"mr-2"},s(d),{onClick:s(l)}),{default:B((()=>[g(N(s(d).text),1)])),_:1},16,["onClick"])):L("",!0),j(t.$slots,"submitBefore"),e.showSubmitButton?(S(),x(s(pe),F({key:1,type:"primary",class:"mr-2"},s(u),{onClick:s(c)}),{default:B((()=>[g(N(s(u).text),1)])),_:1},16,["onClick"])):L("",!0),j(t.$slots,"advanceBefore"),e.showAdvancedButton&&!e.hideAdvanceBtn?(S(),x(s(pe),{key:2,type:"link",size:"small",onClick:m},{default:B((()=>[g(N(e.isAdvanced?s(n)("component.form.putAway"):s(n)("component.form.unfold"))+" ",1),y(s(Fe),{class:"ml-1",expand:!e.isAdvanced},null,8,["expand"])])),_:1})):L("",!0),j(t.$slots,"advanceAfter")])),_:3})],4)])),_:3},16)):L("",!0)}});function we(e){const{emit:n,formPropsRef:a,formSchemasRef:r,formModel:c,cacheFormModel:i,getFormProps:d,schemaFormRef:u,defaultFormValues:m,handleFormValues:f}=e;async function v(e){var t;return null===(t=u.value)||void 0===t?void 0:t.validateFields(e)}async function h(e){var t;return await(null===(t=u.value)||void 0===t?void 0:t.validate(e))}async function b(e){var t;await(null===(t=u.value)||void 0===t?void 0:t.clearValidate(e))}async function y(e){e&&e.preventDefault();const{submitFunc:t}=s(d);if(t&&Q(t))await t();else if(s(u))try{const e=await h(),t=f(e);n("submit",t)}catch(o){return Promise.reject(o)}}return{submit:y,clearValidate:b,validate:h,validateFields:v,getFieldsValue:function(){return s(u)?f(U(s(c))):{}},updateSchema:async function(e){let n=[];if(q(e)&&n.push(e),ee(e)&&(n=[...e]),!n.every((e=>"Divider"===e.component||Reflect.has(e,"field")&&e.field)))return void console.error("All children of the form Schema array that need to be updated must contain the `field` field");const l=[];var c,i;n.forEach((e=>{s(r).forEach((t=>{if(t.field===e.field){const o=fe(t,e);l.push(o)}else l.push(t)}))})),s(a).schemas=(i="field",(c=l)&&c.length?t(c,o(i)):[])},resetSchema:async function(e){let t=[];q(e)&&t.push(e),ee(e)&&(t=[...e]),s(a).schemas=t},appendSchemaByField:async function(e,t,o=!1){const n=k(s(r)),l=n.findIndex((e=>e.field===t));if(!t||-1===l||o)return o?n.unshift(e):n.push(e),c[e.field]=e.defaultValue,void(a.value.schemas=n);-1!==l&&n.splice(l+1,0,e),c[e.field]=e.defaultValue,a.value.schemas=n},removeSchemaByFiled:async function(e){const t=k(s(r));if(!e)return;let o=p(e)?[e]:e;p(e)&&(o=[e]);for(const n of o)if(p(n)){const e=t.findIndex((e=>e.field===n));-1!==e&&(Reflect.deleteProperty(c,n),t.splice(e,1))}a.value.schemas=t},resetFields:async function(){const{resetFunc:e,submitOnReset:t}=s(d);e&&Q(e)&&await e(),Object.keys(c).forEach((e=>{c[e]=m[e]})),n("reset",c),t&&y(),setTimeout(b)},setFieldsValue:async function(e){const t=s(r),o=t.map((e=>e.field)).filter(Boolean);Object.assign(i,e);const n=[];Object.keys(e).forEach((r=>{const i=t.find((e=>e.field===r));let d=e[r];const u=Reflect.has(e,r);var m,f;if(p(null==i?void 0:i.component)&&(m=null==i?void 0:i.component,f=d,d=m&&["Input","InputPassword","InputSearch","InputTextArea"].includes(m)&&f&&l(f)?`${f}`:f),u&&o.includes(r)){if(function(e){var t;return null===(t=s(a).schemas)||void 0===t?void 0:t.some((t=>!(t.field!==e||!p(t.component))&&he.includes(t.component)))}(r))if(Array.isArray(d)){const e=[];for(const t of d)e.push(t?H(t):null);c[r]=e}else{var v;const{componentProps:e}=i||{};let t=e;Q(e)&&(t=t({formPropsRef:a,formModel:c})),c[r]=d?null!==(v=t)&&void 0!==v&&v.valueFormat?d:H(d):null}else c[r]=d;n.push(r)}})),v(n)},scrollToField:async function(e,t){var o;await(null===(o=u.value)||void 0===o?void 0:o.scrollToField(e,t))}}}const Pe=e("d",H),Re=e=>{const{compRefs:t,formModel:o,formPropsRef:n,cacheFormModel:a,defaultFormValues:l,schemaFormRef:r,getFormProps:c}=e;return{setItemRef:e=>o=>{o&&(t[e.field]=o)},initFormValues:()=>{var e;null===(e=s(n).schemas)||void 0===e||e.forEach((e=>{const{defaultValue:t}=e;oe(t)||(o[e.field]=t,l[e.field]=t,a[e.field]=t)}))},setFormModel:(e,t)=>{o[e]=t,a[e]=t;const{validateTrigger:n}=s(c);var l;n&&"change"!==n||null===(l=r.value)||void 0===l||l.validateFields([e])},setSchemaFormProps:e=>{n.value=fe(s(n)||{},e)},handleFormValues:function(e){if(!q(e))return{};const t={};for(const a of Object.entries(e)){var o,n;let[,e]=a;const[l]=a;if(!l||ee(e)&&0===e.length||Q(e))continue;const r=s(c).transformDateFunc;q(e)&&(e=null==r?void 0:r(e)),ee(e)&&null!==(o=e[0])&&void 0!==o&&o.format&&null!==(n=e[1])&&void 0!==n&&n.format&&(e=e.map((e=>null==r?void 0:r(e)))),p(e)&&(e=e.trim()),te(t,l,e)}return function(e){const t=s(c).fieldMapToTime;if(!t||!Array.isArray(t))return e;for(const[o,[n,a],s="YYYY-MM-DD"]of t){if(!(o&&n&&a&&e[o]))continue;const[t,l]=e[o];e[n]=Pe(t).format(s),e[a]=Pe(l).format(s),Reflect.deleteProperty(e,o)}return e}(t)}}};function Se(){return{screenRef:a((()=>s(void 0))),widthRef:void 0,screenEnum:ne,realWidthRef:void 0}}const xe=24,Be=({instance:e,emit:t})=>{const{realWidthRef:o,screenEnum:n,screenRef:r}=Se(),{advanceState:c,getFormProps:i,formSchemasRef:d,formModel:u,defaultFormValues:m}=e,f=a((()=>{if(!c.isAdvanced)return 0;const e=s(i).emptySpan||0;if(l(e))return e;if(q(e)){const{span:t=0}=e;return e[s(r).toLowerCase()]||t||0}return 0}));function p(e,t=0,a=!1){const l=s(o),r=parseInt(e.md)||parseInt(e.xs)||parseInt(e.sm)||e.span||xe,d=parseInt(e.lg)||r,u=parseInt(e.xl)||d,m=parseInt(e.xxl)||u;return l<=n.LG?t+=r:l<n.XL?t+=d:l<n.XXL?t+=u:t+=m,a?(c.hideAdvanceBtn=!1,t<=48?(c.hideAdvanceBtn=!0,c.isAdvanced=!0):t>48&&t<=xe*(s(i).autoAdvancedLine||3)?c.hideAdvanceBtn=!1:c.isLoad||(c.isLoad=!0,c.isAdvanced=!c.isAdvanced),{isAdvanced:c.isAdvanced,itemColSum:t}):t>xe*(s(i).alwaysShowLines||1)?{isAdvanced:c.isAdvanced,itemColSum:t}:{isAdvanced:!0,itemColSum:t}}return ae([()=>s(d),()=>c.isAdvanced,()=>s(o)],(()=>{const{showAdvancedButton:o}=s(i);o&&function(){let o=0,n=0;const{baseColProps:a={}}=s(i);for(const t of s(d)){const{vShow:l,colProps:r}=t;let c=!0;if(v(l)&&(c=l),Q(l)&&(c=l({schema:t,formModel:u,field:t.field,formInstance:e,values:{...s(m),...u}})),c&&(r||a)){const{itemColSum:e,isAdvanced:s}=p({...a,...r},o);o=e||0,s&&(n=o),t.isAdvanced=s}}c.actionSpan=n%xe+s(f),p(s(i).actionColOptions||{span:xe},o,!0),t("advanced-change")}()}),{immediate:!0}),{handleToggleAdvanced:function(){c.isAdvanced=!c.isAdvanced}}};e("_",d({name:"SchemaForm",props:se,emits:le,setup(e,{expose:t,emit:o}){const n=e,l=re(),r=(({props:e,attrs:t})=>{const o=X(k(e)),n=Z({...e.initialValues}),l=Z({...e.initialValues}),r=X(),c={...e.initialValues},i=Z({isAdvanced:!0,hideAdvanceBtn:!1,isLoad:!1,actionSpan:6}),d=a((()=>({...t,...o.value}))),u=a((()=>{const{baseRowStyle:e={},rowProps:t}=s(d);return{style:e,...t}})),m=a((()=>({...d.value,...i})));return{formModel:n,defaultFormValues:l,schemaFormRef:r,formPropsRef:o,cacheFormModel:c,compRefs:{},getFormProps:d,advanceState:i,getRowConfig:u,getFormActionBindProps:m,formSchemasRef:a((()=>s(o).schemas||[]))}})({props:n,attrs:l}),{formModel:c,getRowConfig:d,schemaFormRef:u,getFormProps:m,getFormActionBindProps:f,formSchemasRef:p}=r,v=Re({...r}),{initFormValues:h,handleFormValues:b,setFormModel:g,setItemRef:A,setSchemaFormProps:w}=v;h();const P=we({...r,emit:o,handleFormValues:b});ae(n,(()=>w(n)),{deep:!0,immediate:!0});const R={...r,...P,...v},{handleToggleAdvanced:C}=Be({instance:R,emit:o});return o("register",R),async function(e){i(be,e)}(R),t(R),(e,t)=>(S(),x(s(O),F({ref_key:"schemaFormRef",ref:u},s(ue)(s(m),s(me)),{model:s(c)}),{default:B((()=>[y(s(de),I(ie(s(d))),{default:B((()=>[j(e.$slots,"formHeader"),(S(!0),ce(W,null,_(s(p),(t=>(S(),x(ge,{key:t.field,schema:t,"set-form-model":s(g),"form-model":s(c),"table-instance":e.tableInstance,"set-item-ref":s(A)(t)},$({_:2},[_(Object.keys(e.$slots),(t=>({name:t,fn:B((o=>[j(e.$slots,t,I(ie(o||{})))]))})))]),1032,["schema","set-form-model","form-model","table-instance","set-item-ref"])))),128)),e.showActionButtonGroup?(S(),x(ke,F({key:0},s(f),{onToggleAdvanced:s(C)}),$({_:2},[_(["resetBefore","submitBefore","advanceBefore","advanceAfter"],(t=>({name:t,fn:B((o=>[j(e.$slots,t,I(ie(o||{})))]))})))]),1040,["onToggleAdvanced"])):L("",!0),j(e.$slots,"formFooter")])),_:3},16)])),_:3},16,["model"]))}}))}}}));
