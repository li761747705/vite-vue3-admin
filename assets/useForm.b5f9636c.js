var w=Object.defineProperty;var h=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var l=(n,r,e)=>r in n?w(n,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[r]=e,c=(n,r)=>{for(var e in r||(r={}))F.call(r,e)&&l(n,e,r[e]);if(h)for(var e of h(r))R.call(r,e)&&l(n,e,r[e]);return n};var m=(n,r,e)=>new Promise((i,u)=>{var a=t=>{try{o(e.next(t))}catch(f){u(f)}},s=t=>{try{o(e.throw(t))}catch(f){u(f)}},o=t=>t.done?i(t.value):Promise.resolve(t.value).then(a,s);o((e=e.apply(n,r)).next())});import{_ as x}from"./schema-form.35be2fee.js";import{N as d,r as P,n as S,q as _,c as v,ac as y,ai as N,bi as b}from"./index.6ee6dd82.js";function I(n){const r=P({});function e(){return m(this,null,function*(){yield N();const a=d(r);return b(a)&&console.error("\u672A\u83B7\u53D6\u8868\u5355\u5B9E\u4F8B!"),a})}S(()=>n,()=>{n&&_(()=>m(this,null,function*(){var a;(a=yield e())==null||a.setSchemaFormProps(n)}))},{immediate:!0,deep:!0});const i=new Proxy(r,{get(a,s){return Reflect.has(a,s)?d(a):Reflect.has(a.value,s)?a.value[s]:(...o)=>m(this,null,function*(){const t=yield e();return t==null?void 0:t[s](...o)})}});return[(a,{attrs:s,slots:o})=>v(x,y({ref:r},c(c(c({},s),n),a)),o),d(i)]}export{I as u};
