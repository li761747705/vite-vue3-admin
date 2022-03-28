var ee=Object.defineProperty,ne=Object.defineProperties;var ie=Object.getOwnPropertyDescriptors;var N=Object.getOwnPropertySymbols;var ce=Object.prototype.hasOwnProperty,ae=Object.prototype.propertyIsEnumerable;var T=(e,n,c)=>n in e?ee(e,n,{enumerable:!0,configurable:!0,writable:!0,value:c}):e[n]=c,P=(e,n)=>{for(var c in n||(n={}))ce.call(n,c)&&T(e,c,n[c]);if(N)for(var c of N(n))ae.call(n,c)&&T(e,c,n[c]);return e},E=(e,n)=>ne(e,ie(n));var w=(e,n,c)=>new Promise((u,t)=>{var d=m=>{try{h(c.next(m))}catch(a){t(a)}},v=m=>{try{h(c.throw(m))}catch(a){t(a)}},h=m=>m.done?u(m.value):Promise.resolve(m.value).then(d,v);h((c=c.apply(e,n)).next())});import{c as b,J as F,a2 as z,y as B,d as q,r as j,j as U,n as G,z as y,B as k,F as C,a3 as $,N as f,br as oe,$ as K,K as I,R as de,a8 as D,bN as J,c8 as V,bR as ue,Y as x,az as W,aJ as le,a1 as A,Z as Y,b0 as se,c9 as te,bw as Z,bu as _e,ab as R,bq as me,ca as fe,bt as L}from"./index.6ee6dd82.js";import{u as re}from"./dynamic-table.ca72cbb8.js";import{g as he,u as pe,c as ge,d as ye}from"./index.479b4071.js";import{u as be}from"./useFormModal.e5998828.js";import{b as O}from"./utils.1ab06744.js";import"./VerticalRightOutlined.6a5c275f.js";import"./schema-form.35be2fee.js";import"./index.042397f8.js";const ve=e=>{switch(e){case 0:return"\u76EE\u5F55";case 1:return"\u83DC\u5355";case 2:return"\u6743\u9650";default:return""}},xe=[{title:"\u540D\u79F0",dataIndex:"name"},{title:"\u56FE\u6807",width:80,dataIndex:"icon",align:"center",bodyCell:({record:e})=>b(z,null,[e.icon&&b(F("icon-font"),{type:e.icon,size:"22"},null)])},{title:"\u7C7B\u578B",width:80,align:"center",dataIndex:"type",bodyCell:({record:e})=>b(z,null,[ve(e.type)])},{title:"\u8282\u70B9\u8DEF\u7531",dataIndex:"router",align:"center",width:240},{title:"\u8DEF\u7531\u7F13\u5B58",dataIndex:"keepalive",align:"center",width:80},{title:"\u6587\u4EF6\u8DEF\u5F84",width:280,align:"center",dataIndex:"viewPath"},{title:"\u6743\u9650",width:300,align:"center",dataIndex:"perms"},{title:"\u6392\u5E8F\u53F7",width:80,align:"center",dataIndex:"orderNum"},{title:"\u66F4\u65B0\u65F6\u95F4",width:180,align:"center",dataIndex:"updatedAt"}],H=e=>{const n=e==null?void 0:e.children,c=n==null?void 0:n.length,u=!!c&&!n.some(d=>!d.checked),t=!!c&&n.some(d=>d.checked||d.indeterminate);e.checked=u,e.indeterminate=u?!1:t,e.parent&&H(e.parent)},Q=(e,n)=>{e==null||e.forEach(c=>{var u;c.checked=n,c.indeterminate=!1,(u=c.children)!=null&&u.length&&Q(c.children,n)})},X=(e,n)=>{var c;n.checked=e,n.indeterminate=!1,Array.isArray(n.children)&&((c=n.children)==null?void 0:c.length)&&Q(n.children,e),n.parent&&H(n.parent)};const je={class:"flex"},ke={class:"ant-cascader-menu min-w-150px"},we=["onClick"],Ce={class:"label"},ze=q({props:{options:{type:Array,default:()=>[]}},setup(e,{expose:n}){const c=e,u=j(),t=j([]),d=j(),v=()=>{var i,l;return(l=(i=c.options)==null?void 0:i.find(s=>s.value===d.value))==null?void 0:l.children},h=U(v);G(h,i=>{i||(t.value=[])});const m=(i=[],l)=>{t.value=i,d.value=l},a=(i,l)=>{const s=i.target.checked;X(s,l)};return n({clearCheck:()=>{var i;t.value.forEach(l=>{l.checked=!1,l.indeterminate=!1}),t.value.length&&setTimeout(()=>{t.value=v()||[]}),(i=u.value)==null||i.clearCheck()}}),(i,l)=>{var p;const s=F("node-panel",!0);return y(),k("div",je,[C("div",ke,[(y(!0),k(z,null,$(e.options,o=>{var _;return y(),k("div",{key:o.value,class:"check-row ant-cascader-menu-item ant-cascader-menu-item-expand",onClick:g=>m(o.children,o.value)},[C("div",null,[b(f(oe),{checked:o.checked,"onUpdate:checked":g=>o.checked=g,indeterminate:o.indeterminate,onChange:g=>a(g,o)},null,8,["checked","onUpdate:checked","indeterminate","onChange"]),C("span",Ce,K(o.label),1)]),(_=o.children)!=null&&_.length?(y(),I(f(de),{key:0,class:"arrow"})):D("",!0)],8,we)}),128))]),((p=t.value)==null?void 0:p.length)&&f(h)?(y(),I(s,{key:0,ref_key:"nodePanelRef",ref:u,options:t.value},null,8,["options"])):D("",!0)])}}});var Ie=B(ze,[["__scopeId","data-v-3a76ba97"]]);const Fe={class:"input-box"},qe=q({props:{value:{type:Array,default:()=>[],isRequired:!0}},emits:["update:value"],setup(e,{emit:n}){const u=J(e,"value",n),t=j(),d=j(V()),v=ue.useInjectFormItemContext(),h=(s,p=[])=>s.reduce((o,_)=>{var g,r;return!((g=_.children)!=null&&g.length)&&_.checked&&_.value&&o.push({label:_.value,value:_.value,node:_}),(r=_.children)!=null&&r.length&&h(_.children,o),o},p),m=s=>{const p=_=>_.some(g=>{var r;return u.value.includes(g.value)?!0:(r=g.children)!=null&&r.length?p(g.children):!1}),o=(_,g=null)=>{_==null||_.forEach(r=>{var S,M;(S=r.children)!=null&&S.length&&o(r.children,r),r.parent=g,r.indeterminate=!1,r.checked=u.value.includes(r.value),(M=r.children)!=null&&M.length&&(r.indeterminate=p(r.children))})};o(s)};m(d.value);const a=s=>{X(!1,s.node)},i=()=>{u.value=[],setTimeout(()=>{var s;d.value=V(),m(d.value),(s=t.value)==null||s.clearCheck()})},l=U(()=>h(d.value));return G(()=>l.value,s=>{u.value=s.map(p=>p.value),v.onFieldChange()}),(s,p)=>(y(),I(f(Z),{placement:"bottomLeft",trigger:"click"},{content:x(()=>[b(Ie,{ref_key:"nodePanelRef",ref:t,options:d.value},null,8,["options"])]),default:x(()=>[C("div",Fe,[b(f(te),{placeholder:"\u8BF7\u9009\u62E9"},W({_:2},[f(l).length?{name:"prefix",fn:x(()=>[(y(!0),k(z,null,$(f(l),o=>(y(),I(f(le),{key:o.value,class:"tag-item",closable:"",onClose:A(_=>a(o),["prevent"])},{default:x(()=>[Y(K(o.label),1)]),_:2},1032,["onClose"]))),128)),b(f(se),{class:"clear-icon",onClick:A(i,["prevent"])},null,8,["onClick"])])}:void 0]),1024)])]),_:1}))}});var Pe=B(qe,[["__scopeId","data-v-991f5b04"]]);const Ee="2184398",Be="vue3-antd",$e="iconfont",Se="icon-",Me="",Ne=[{icon_id:"1059047",name:"\u8BFB\u53D6\u6570\u636E\u5E93",font_class:"duqushujuku",unicode:"e67f",unicode_decimal:59007},{icon_id:"4347599",name:"icon_\u4F7F\u7528\u6587\u6863",font_class:"icon_shiyongwendang",unicode:"eb91",unicode_decimal:60305},{icon_id:"7239613",name:"ant-design",font_class:"ant-design",unicode:"e74d",unicode_decimal:59213},{icon_id:"10166326",name:"guide",font_class:"guide",unicode:"e630",unicode_decimal:58928},{icon_id:"12717509",name:"\u5B9A\u65F6\u4EFB\u52A1\u7BA1\u7406",font_class:"dingshirenwuguanli",unicode:"e611",unicode_decimal:58897},{icon_id:"11371039",name:"\u76D1\u63A7",font_class:"jiankong1",unicode:"e74c",unicode_decimal:59212},{icon_id:"17426976",name:"\u5728\u7EBF\u7528\u6237\u76D1\u63A7",font_class:"zaixianyonghujiankong",unicode:"e60a",unicode_decimal:58890},{icon_id:"20104510",name:"\u65E5\u5FD7",font_class:"rizhi1",unicode:"e617",unicode_decimal:58903},{icon_id:"8605740",name:"\u89D2\u8272\u6743\u9650",font_class:"jiaosequanxian",unicode:"e666",unicode_decimal:58982},{icon_id:"15992243",name:"\u94FE\u63A5",font_class:"externa-link",unicode:"e620",unicode_decimal:58912},{icon_id:"17606379",name:"\u67F1\u72B6\u56FE",font_class:"zhuzhuangtu",unicode:"e6f5",unicode_decimal:59125},{icon_id:"17606380",name:"\u70DB\u578B\u56FE",font_class:"zhuxingtu",unicode:"e6f6",unicode_decimal:59126},{icon_id:"17606381",name:"BUG",font_class:"BUG",unicode:"e6f7",unicode_decimal:59127},{icon_id:"17606382",name:"\u684C\u9762",font_class:"zhuomian",unicode:"e6f8",unicode_decimal:59128},{icon_id:"17606383",name:"\u7EC4\u4EF6\u4F7F\u7528",font_class:"zujianshiyong",unicode:"e6f9",unicode_decimal:59129},{icon_id:"17606384",name:"\u8D44\u6E90",font_class:"ziyuan",unicode:"e6fa",unicode_decimal:59130},{icon_id:"17606385",name:"\u5B57\u6BB5\u7BA1\u7406",font_class:"ziduanguanli",unicode:"e6fb",unicode_decimal:59131},{icon_id:"17606386",name:"\u4E91",font_class:"yun",unicode:"e6fc",unicode_decimal:59132},{icon_id:"17606395",name:"\u5206\u4EAB",font_class:"fenxiang",unicode:"e6fd",unicode_decimal:59133},{icon_id:"17606397",name:"\u8BA1\u7B97",font_class:"jisuan",unicode:"e6fe",unicode_decimal:59134},{icon_id:"17606398",name:"\u5BA2\u6237\u7BA1\u7406",font_class:"kehuguanli",unicode:"e6ff",unicode_decimal:59135},{icon_id:"17606399",name:"\u51B3\u7B56\u5F15\u64CE",font_class:"jueceyinqing",unicode:"e700",unicode_decimal:59136},{icon_id:"17606400",name:"\u6D41\u7A0B",font_class:"liucheng1",unicode:"e701",unicode_decimal:59137},{icon_id:"17606401",name:"\u811A\u672C",font_class:"jiaoben",unicode:"e702",unicode_decimal:59138},{icon_id:"17606402",name:"\u5DE5\u7A0B",font_class:"gongcheng",unicode:"e703",unicode_decimal:59139},{icon_id:"17606403",name:"\u5237\u5B50-2",font_class:"shuazi-2",unicode:"e704",unicode_decimal:59140},{icon_id:"17606404",name:"\u6743\u9650",font_class:"quanxian",unicode:"e705",unicode_decimal:59141},{icon_id:"17606405",name:"\u5237\u5B50-1",font_class:"shuazi-1",unicode:"e706",unicode_decimal:59142},{icon_id:"17606406",name:"\u6587\u4EF6",font_class:"wenjian",unicode:"e707",unicode_decimal:59143},{icon_id:"17606407",name:"\u6587\u4EF6-\u589E",font_class:"wenjian-zeng",unicode:"e708",unicode_decimal:59144},{icon_id:"17606408",name:"\u6587\u4EF6-\u5C55\u5F00",font_class:"wenjian-zhankai",unicode:"e709",unicode_decimal:59145},{icon_id:"17606409",name:"\u63A8\u9001",font_class:"tuisong",unicode:"e70a",unicode_decimal:59146},{icon_id:"17606410",name:"\u7EB8\u7BB1",font_class:"zhixiang",unicode:"e70b",unicode_decimal:59147},{icon_id:"17606411",name:"\u8FD0\u7EF4",font_class:"yunwei",unicode:"e70c",unicode_decimal:59148},{icon_id:"17606412",name:"\u6570\u636E\u5E93",font_class:"shujuku1",unicode:"e70d",unicode_decimal:59149},{icon_id:"17606413",name:"\u6587\u4EF6-\u5C55\u73B0",font_class:"wenjian-zhanxian",unicode:"e70e",unicode_decimal:59150},{icon_id:"17606415",name:"\u6587\u6863",font_class:"wendang",unicode:"e70f",unicode_decimal:59151},{icon_id:"17606797",name:"\u590D\u5236",font_class:"fuzhi",unicode:"e710",unicode_decimal:59152},{icon_id:"17606798",name:"\u7528\u6237",font_class:"yonghu1",unicode:"e711",unicode_decimal:59153},{icon_id:"17606799",name:"\u653E\u5927",font_class:"fangda",unicode:"e712",unicode_decimal:59154},{icon_id:"17606800",name:"\u51CF\u5C11",font_class:"jianshao",unicode:"e713",unicode_decimal:59155},{icon_id:"17606801",name:"\u7F16\u8F91",font_class:"bianji",unicode:"e714",unicode_decimal:59156},{icon_id:"17606802",name:"\u7F29\u5C0F",font_class:"suoxiao",unicode:"e715",unicode_decimal:59157},{icon_id:"17606803",name:"\u5220\u9664",font_class:"shanchu",unicode:"e716",unicode_decimal:59158},{icon_id:"17606881",name:"\u77E9\u5F62-\u9519\u8BEF",font_class:"juxing-cuowu",unicode:"e717",unicode_decimal:59159},{icon_id:"17606882",name:"\u77E9\u5F62-\u51CF",font_class:"juxing-jian",unicode:"e718",unicode_decimal:59160},{icon_id:"17606883",name:"\u77E9\u5F62-\u66F4\u591A",font_class:"juxing-gengduo",unicode:"e719",unicode_decimal:59161},{icon_id:"17606884",name:"\u77E9\u5F62-\u589E",font_class:"juxing-zeng",unicode:"e71a",unicode_decimal:59162},{icon_id:"17606885",name:"\u77E9\u5F62-\u53F3",font_class:"juxing-you",unicode:"e71b",unicode_decimal:59163},{icon_id:"17606886",name:"\u77E9\u5F62-\u6587\u672C",font_class:"juxing-wenben",unicode:"e71c",unicode_decimal:59164},{icon_id:"17606887",name:"\u77E9\u5F62-\u901A\u8FC7",font_class:"juxing-tongguo",unicode:"e71d",unicode_decimal:59165},{icon_id:"17606888",name:"\u5706\u73AF-\u66F4\u591A",font_class:"yuanhuan-gengduo",unicode:"e71e",unicode_decimal:59166},{icon_id:"17606889",name:"\u5706\u73AF-\u786E\u8BA4",font_class:"yuanhuan-queren",unicode:"e71f",unicode_decimal:59167},{icon_id:"17606890",name:"\u5706\u73AF-\u5173\u95ED",font_class:"yuanhuan-guanbi",unicode:"e720",unicode_decimal:59168},{icon_id:"17606891",name:"\u5706\u73AF-\u51CF",font_class:"yuanhuan-jian",unicode:"e721",unicode_decimal:59169},{icon_id:"17606892",name:"\u5706\u73AF-\u6D88\u606F",font_class:"yuanhuan-xiaoxi",unicode:"e722",unicode_decimal:59170},{icon_id:"17606893",name:"\u5706\u73AF-\u589E",font_class:"yuanhuan-zeng",unicode:"e723",unicode_decimal:59171},{icon_id:"17606894",name:"\u5706\u73AF-\u6682\u505C",font_class:"yuanhuan-zanting",unicode:"e724",unicode_decimal:59172},{icon_id:"17606895",name:"\u5706\u73AF-\u5DE6",font_class:"yuanhuan-zuo",unicode:"e725",unicode_decimal:59173},{icon_id:"17606896",name:"\u77E9\u5F62-\u5DE6",font_class:"juxing-zuo",unicode:"e726",unicode_decimal:59174},{icon_id:"17606897",name:"\u5706\u73AF-\u65F6\u95F4",font_class:"yuanhuan-shijian",unicode:"e727",unicode_decimal:59175},{icon_id:"17606898",name:"\u5706\u73AF-\u7591\u95EE",font_class:"yuanhuan-yiwen",unicode:"e728",unicode_decimal:59176},{icon_id:"17606899",name:"\u5706\u73AF-\u53F3",font_class:"yuanhuan-you",unicode:"e729",unicode_decimal:59177},{icon_id:"17606931",name:"\u5706\u73AF-\u51CF",font_class:"yuanhuan-jian1",unicode:"e72a",unicode_decimal:59178},{icon_id:"17606932",name:"\u77E9\u5F62-\u53F3",font_class:"juxing-you1",unicode:"e72b",unicode_decimal:59179},{icon_id:"17606933",name:"\u77E9\u5F62-\u901A\u8FC7",font_class:"juxing-tongguo1",unicode:"e72c",unicode_decimal:59180},{icon_id:"17606934",name:"\u77E9\u5F62-\u9519\u8BEF",font_class:"juxing-cuowu1",unicode:"e72d",unicode_decimal:59181},{icon_id:"17606935",name:"\u77E9\u5F62-\u51CF",font_class:"juxing-jian1",unicode:"e72e",unicode_decimal:59182},{icon_id:"17606936",name:"\u77E9\u5F62-\u589E",font_class:"juxing-zeng1",unicode:"e72f",unicode_decimal:59183},{icon_id:"17606937",name:"\u5706\u73AF-\u589E",font_class:"yuanhuan-zeng1",unicode:"e730",unicode_decimal:59184},{icon_id:"17606938",name:"\u5706\u73AF-\u5DE6",font_class:"yuanhuan-zuo1",unicode:"e731",unicode_decimal:59185},{icon_id:"17606939",name:"\u5706\u73AF-\u53F3",font_class:"yuanhuan-you1",unicode:"e732",unicode_decimal:59186},{icon_id:"17606940",name:"\u5706\u73AF-\u5173\u95ED",font_class:"yuanhuan-guanbi1",unicode:"e733",unicode_decimal:59187},{icon_id:"17606941",name:"\u77E9\u5F62-\u5DE6",font_class:"juxing-zuo1",unicode:"e734",unicode_decimal:59188},{icon_id:"17606942",name:"\u5706\u73AF-\u786E\u8BA4",font_class:"yuanhuan-queren1",unicode:"e735",unicode_decimal:59189},{icon_id:"17606943",name:"\u5706\u73AF-\u6682\u505C",font_class:"yuanhuan-zanting1",unicode:"e736",unicode_decimal:59190},{icon_id:"17606972",name:"\u540E\u9000",font_class:"houtui",unicode:"e737",unicode_decimal:59191},{icon_id:"17606973",name:"\u65B9\u5411\u4E0A",font_class:"fangxiangshang",unicode:"e738",unicode_decimal:59192},{icon_id:"17606974",name:"\u65B9\u5411\u53F3",font_class:"fangxiangyou",unicode:"e739",unicode_decimal:59193},{icon_id:"17606975",name:"\u65B9\u5411\u4E0B",font_class:"fangxiangxia",unicode:"e73a",unicode_decimal:59194},{icon_id:"17606976",name:"\u83DC\u5355\u5DE6",font_class:"caidanzuo",unicode:"e73b",unicode_decimal:59195},{icon_id:"17606977",name:"\u5FEB\u8FDB",font_class:"kuaijin",unicode:"e73c",unicode_decimal:59196},{icon_id:"17606978",name:"\u4E0A\u4F20",font_class:"shangchuan1",unicode:"e73d",unicode_decimal:59197},{icon_id:"17606979",name:"\u4E0B\u8F7D",font_class:"xiazai1",unicode:"e73e",unicode_decimal:59198},{icon_id:"17606980",name:"\u66FF\u6362",font_class:"tihuan",unicode:"e73f",unicode_decimal:59199},{icon_id:"17606981",name:"\u65B9\u5411\u5DE6",font_class:"fangxiangzuo",unicode:"e740",unicode_decimal:59200},{icon_id:"17606982",name:"\u6536\u7F29",font_class:"shousuo",unicode:"e741",unicode_decimal:59201},{icon_id:"17606983",name:"\u83DC\u5355\u53F3",font_class:"caidanyou",unicode:"e742",unicode_decimal:59202},{icon_id:"17606984",name:"\u5C55\u5F00",font_class:"zhankai",unicode:"e743",unicode_decimal:59203},{icon_id:"17607037",name:"\u8B66\u544A",font_class:"jinggao",unicode:"e744",unicode_decimal:59204},{icon_id:"17607038",name:"\u63D0\u9192-\u8B66\u544A",font_class:"tixing-jinggao",unicode:"e745",unicode_decimal:59205},{icon_id:"17607039",name:"\u9519\u8BEF",font_class:"cuowu",unicode:"e746",unicode_decimal:59206},{icon_id:"17607040",name:"\u5BF9\u8BDD-\u8B66\u544A",font_class:"duihua-jinggao",unicode:"e747",unicode_decimal:59207},{icon_id:"17607506",name:"\u540C\u76FE",font_class:"tongdun",unicode:"e748",unicode_decimal:59208},{icon_id:"17613521",name:"\u8C03\u7528",font_class:"tiaoyong",unicode:"e749",unicode_decimal:59209},{icon_id:"17651395",name:"\u65E5\u5FD7",font_class:"rizhi",unicode:"e74a",unicode_decimal:59210},{icon_id:"17651396",name:"\u65E5\u5FD7-2",font_class:"rizhi-2",unicode:"e74b",unicode_decimal:59211},{icon_id:"17606294",name:"\u997C\u56FE",font_class:"bingtu",unicode:"e6a2",unicode_decimal:59042},{icon_id:"17606295",name:"\u6848\u4EF6\u7BA1\u7406",font_class:"anjianguanli",unicode:"e6a3",unicode_decimal:59043},{icon_id:"17606296",name:"\u5E03\u5C40",font_class:"buju",unicode:"e6a4",unicode_decimal:59044},{icon_id:"17606297",name:"\u4FDD\u5B58",font_class:"baocun",unicode:"e6a5",unicode_decimal:59045},{icon_id:"17606298",name:"\u5B9A\u4F4D",font_class:"dingwei",unicode:"e6a6",unicode_decimal:59046},{icon_id:"17606299",name:"\u706F\u6CE1",font_class:"dengpao",unicode:"e6a7",unicode_decimal:59047},{icon_id:"17606300",name:"\u77ED\u4FE1\u4FDD\u62A4",font_class:"duanxinbaohu",unicode:"e6a8",unicode_decimal:59048},{icon_id:"17606301",name:"\u5BFC\u51FA",font_class:"daochu",unicode:"e6a9",unicode_decimal:59049},{icon_id:"17606302",name:"\u5B89\u5168",font_class:"anquan",unicode:"e6aa",unicode_decimal:59050},{icon_id:"17606303",name:"\u5206\u7EC4",font_class:"fenzu",unicode:"e6ab",unicode_decimal:59051},{icon_id:"17606304",name:"\u8D2D\u7269",font_class:"gouwu",unicode:"e6ac",unicode_decimal:59052},{icon_id:"17606305",name:"\u8868\u683C",font_class:"biaoge",unicode:"e6ad",unicode_decimal:59053},{icon_id:"17606306",name:"\u5BFC\u5165",font_class:"daoru",unicode:"e6ae",unicode_decimal:59054},{icon_id:"17606307",name:"\u516C\u544A",font_class:"gonggao",unicode:"e6af",unicode_decimal:59055},{icon_id:"17606308",name:"\u5BF9\u8BDD-2",font_class:"duihua-2",unicode:"e6b0",unicode_decimal:59056},{icon_id:"17606309",name:"\u5173\u7CFB\u56FE",font_class:"guanxitu",unicode:"e6b1",unicode_decimal:59057},{icon_id:"17606310",name:"\u5BF9\u8BDD",font_class:"duihua",unicode:"e6b2",unicode_decimal:59058},{icon_id:"17606311",name:"\u670D\u52A1\u5668",font_class:"fuwuqi",unicode:"e6b3",unicode_decimal:59059},{icon_id:"17606312",name:"\u590D\u6742\u7F51\u7EDC",font_class:"fuzawangluo",unicode:"e6b4",unicode_decimal:59060},{icon_id:"17606313",name:"\u6807\u7B7E",font_class:"biaoqian",unicode:"e6b5",unicode_decimal:59061},{icon_id:"17606314",name:"\u5DE5\u5177",font_class:"gongju",unicode:"e6b6",unicode_decimal:59062},{icon_id:"17606315",name:"\u5EFA\u6A21-\u51CF",font_class:"jianmo-jian",unicode:"e6b7",unicode_decimal:59063},{icon_id:"17606316",name:"\u76D1\u63A7",font_class:"jiankong",unicode:"e6b8",unicode_decimal:59064},{icon_id:"17606317",name:"\u89E3\u9501",font_class:"jiesuo",unicode:"e6b9",unicode_decimal:59065},{icon_id:"17606318",name:"\u5EFA\u6A21",font_class:"jianmo",unicode:"e6ba",unicode_decimal:59066},{icon_id:"17606319",name:"\u7F13\u5B58",font_class:"huancun",unicode:"e6bb",unicode_decimal:59067},{icon_id:"17606320",name:"\u5C3D\u8C03\u7CBE\u7075",font_class:"jintiaojingling",unicode:"e6bc",unicode_decimal:59068},{icon_id:"17606321",name:"\u5EFA\u6A21-\u589E",font_class:"jianmo-zeng",unicode:"e6bd",unicode_decimal:59069},{icon_id:"17606322",name:"\u5361\u7247",font_class:"kapian",unicode:"e6be",unicode_decimal:59070},{icon_id:"17606323",name:"\u8B66\u62A5-2",font_class:"jingbao-2",unicode:"e6bf",unicode_decimal:59071},{icon_id:"17606324",name:"\u6D41\u7A0B",font_class:"liucheng",unicode:"e6c0",unicode_decimal:59072},{icon_id:"17606325",name:"\u8BA1\u8D39\u7BA1\u7406",font_class:"jifeiguanli",unicode:"e6c1",unicode_decimal:59073},{icon_id:"17606326",name:"\u94FE\u63A5",font_class:"lianjie",unicode:"e6c2",unicode_decimal:59074},{icon_id:"17606327",name:"\u63A5\u5165\u7BA1\u7406",font_class:"jieruguanli",unicode:"e6c3",unicode_decimal:59075},{icon_id:"17606328",name:"\u8B66\u62A5",font_class:"jingbao",unicode:"e6c4",unicode_decimal:59076},{icon_id:"17606329",name:"\u5F55\u97F3",font_class:"luyin",unicode:"e6c5",unicode_decimal:59077},{icon_id:"17606330",name:"\u96F7\u8FBE\u56FE",font_class:"leidatu",unicode:"e6c6",unicode_decimal:59078},{icon_id:"17606331",name:"\u5BC6\u7801",font_class:"mima",unicode:"e6c7",unicode_decimal:59079},{icon_id:"17606332",name:"\u6D41\u91CF",font_class:"liuliang",unicode:"e6c8",unicode_decimal:59080},{icon_id:"17606333",name:"\u5012\u8BA1\u65F6",font_class:"daojishi",unicode:"e6c9",unicode_decimal:59081},{icon_id:"17606334",name:"\u56DE\u6536",font_class:"huishou",unicode:"e6ca",unicode_decimal:59082},{icon_id:"17606335",name:"\u4EFB\u52A1",font_class:"renwu",unicode:"e6cb",unicode_decimal:59083},{icon_id:"17606336",name:"\u65E5\u5386",font_class:"rili",unicode:"e6cc",unicode_decimal:59084},{icon_id:"17606338",name:"\u6563\u70B9\u56FE",font_class:"sandiantu",unicode:"e6cd",unicode_decimal:59085},{icon_id:"17606340",name:"\u5185\u5BB9\u5B89\u5168",font_class:"neironganquan",unicode:"e6ce",unicode_decimal:59086},{icon_id:"17606341",name:"\u6F0F\u6597\u56FE",font_class:"loudoutu",unicode:"e6cf",unicode_decimal:59087},{icon_id:"17606342",name:"\u60C5\u62A5\u76D1\u63A7",font_class:"qingbaojiankong",unicode:"e6d0",unicode_decimal:59088},{icon_id:"17606343",name:"\u6A21\u578B\u7BA1\u7406",font_class:"moxingguanli",unicode:"e6d1",unicode_decimal:59089},{icon_id:"17606344",name:"\u4F01\u667A\u67E5",font_class:"qizhicha",unicode:"e6d2",unicode_decimal:59090},{icon_id:"17606345",name:"\u4E0A\u4F20",font_class:"shangchuan",unicode:"e6d3",unicode_decimal:59091},{icon_id:"17606346",name:"\u4E66\u7B7E",font_class:"shuqian",unicode:"e6d4",unicode_decimal:59092},{icon_id:"17606347",name:"\u6570\u636E",font_class:"shuju",unicode:"e6d5",unicode_decimal:59093},{icon_id:"17606348",name:"\u6536\u85CF",font_class:"shoucang",unicode:"e6d6",unicode_decimal:59094},{icon_id:"17606349",name:"\u8BBE\u7F6E",font_class:"shezhi",unicode:"e6d7",unicode_decimal:59095},{icon_id:"17606350",name:"\u89C6\u89C9\u5173\u95ED",font_class:"shijueguanbi",unicode:"e6d8",unicode_decimal:59096},{icon_id:"17606351",name:"\u89C6\u89C9\u663E\u793A",font_class:"shijuexianshi",unicode:"e6d9",unicode_decimal:59097},{icon_id:"17606352",name:"\u9996\u9875",font_class:"shouye",unicode:"e6da",unicode_decimal:59098},{icon_id:"17606353",name:"\u63D0\u9192",font_class:"tixing",unicode:"e6db",unicode_decimal:59099},{icon_id:"17606354",name:"\u5237\u65B0-2",font_class:"shuaxin-2",unicode:"e6dc",unicode_decimal:59100},{icon_id:"17606355",name:"\u641C\u7D22",font_class:"sousuo",unicode:"e6dd",unicode_decimal:59101},{icon_id:"17606356",name:"\u901A\u9053",font_class:"tongdao",unicode:"e6de",unicode_decimal:59102},{icon_id:"17606357",name:"\u6761\u5F62\u56FE",font_class:"tiaoxingtu",unicode:"e6df",unicode_decimal:59103},{icon_id:"17606358",name:"\u5237\u65B0",font_class:"shuaxin",unicode:"e6e0",unicode_decimal:59104},{icon_id:"17606359",name:"\u6570\u636E\u5E93",font_class:"shujuku",unicode:"e6e1",unicode_decimal:59105},{icon_id:"17606360",name:"\u56FE\u50CF",font_class:"tuxiang",unicode:"e6e2",unicode_decimal:59106},{icon_id:"17606361",name:"\u6587\u4EF6\u540C\u6B65",font_class:"wenjiantongbu",unicode:"e6e3",unicode_decimal:59107},{icon_id:"17606362",name:"\u76F8\u673A",font_class:"xiangji",unicode:"e6e4",unicode_decimal:59108},{icon_id:"17606363",name:"\u7BB1\u578B\u56FE",font_class:"xiangxingtu",unicode:"e6e5",unicode_decimal:59109},{icon_id:"17606364",name:"\u6587\u4EF6\u641C\u7D22",font_class:"wenjiansousuo",unicode:"e6e6",unicode_decimal:59110},{icon_id:"17606365",name:"\u7EDF\u8BA1",font_class:"tongji",unicode:"e6e7",unicode_decimal:59111},{icon_id:"17606366",name:"\u9879\u76EE",font_class:"xiangmu",unicode:"e6e8",unicode_decimal:59112},{icon_id:"17606367",name:"\u9A8C\u8BC1\u7801",font_class:"yanzhengma",unicode:"e6e9",unicode_decimal:59113},{icon_id:"17606368",name:"\u4FE1\u606F\u6821\u9A8C",font_class:"xinxixiaoyan",unicode:"e6ea",unicode_decimal:59114},{icon_id:"17606369",name:"\u4E0B\u8F7D",font_class:"xiazai",unicode:"e6eb",unicode_decimal:59115},{icon_id:"17606370",name:"\u79FB\u52A8\u7AEF",font_class:"yidongduan",unicode:"e6ec",unicode_decimal:59116},{icon_id:"17606371",name:"\u4FE1\u8D37\u670D\u52A1",font_class:"xindaifuwu",unicode:"e6ed",unicode_decimal:59117},{icon_id:"17606372",name:"\u90AE\u4EF6",font_class:"youjian",unicode:"e6ee",unicode_decimal:59118},{icon_id:"17606373",name:"\u4E1A\u52A1\u6307\u6807",font_class:"yewuzhibiao",unicode:"e6ef",unicode_decimal:59119},{icon_id:"17606374",name:"\u7528\u6237",font_class:"yonghu",unicode:"e6f0",unicode_decimal:59120},{icon_id:"17606375",name:"\u4EEA\u8868\u76D8",font_class:"yibiaopan",unicode:"e6f1",unicode_decimal:59121},{icon_id:"17606376",name:"\u5E94\u7528\u4E2D\u5FC3",font_class:"yingyongzhongxin",unicode:"e6f2",unicode_decimal:59122},{icon_id:"17606377",name:"\u8D26\u6237\u5B89\u5168",font_class:"zhanghuanquan",unicode:"e6f3",unicode_decimal:59123},{icon_id:"17606378",name:"\u6298\u7EBF\u56FE",font_class:"zhexiantu",unicode:"e6f4",unicode_decimal:59124}];var Te={id:Ee,name:Be,font_family:$e,css_prefix_text:Se,description:Me,glyphs:Ne};const De={class:"select-box"},Ve=["title","onClick"],Ae=q({props:{value:{default:""},placeholder:{default:"\u8BF7\u9009\u62E9"}},emits:["update:value"],setup(e,{emit:n}){const c=e,{glyphs:u}=Te,t=j(!1),d=J(c,"value",n),v=h=>{d.value=h.font_class,t.value=!1};return(h,m)=>{const a=F("a-input");return y(),I(f(Z),{visible:t.value,"onUpdate:visible":m[1]||(m[1]=i=>t.value=i),placement:"bottomLeft",trigger:"focus"},{content:x(()=>[C("div",De,[(y(!0),k(z,null,$(f(u),i=>{var l;return y(),k("div",{key:i.font_class,title:i.name,class:_e(["select-box-item",{active:((l=f(d))==null?void 0:l.replace("icon-",""))==i.font_class}]),onClick:s=>v(i)},[b(f(R),{type:i.font_class,size:"20"},null,8,["type"])],10,Ve)}),128))])]),default:x(()=>[b(a,{value:f(d),"onUpdate:value":m[0]||(m[0]=i=>me(d)?d.value=i:null),placeholder:e.placeholder},W({_:2},[f(d)?{name:"prefix",fn:x(()=>[b(f(R),{type:f(d),size:"22"},null,8,["type"])])}:void 0]),1032,["value","placeholder"])]),_:1},8,["visible"])}}});var Re=B(Ae,[["__scopeId","data-v-634ebbfa"]]);const Le=[{field:"type",component:"RadioGroup",label:"\u83DC\u5355\u7C7B\u578B",defaultValue:0,rules:[{required:!0,type:"number"}],componentProps:{options:[{label:"\u76EE\u5F55",value:0},{label:"\u83DC\u5355",value:1},{label:"\u6743\u9650",value:2}]}},{field:"name",component:"Input",label:"\u8282\u70B9\u540D\u79F0",rules:[{required:!0,type:"string"}]},{field:"parentId",component:"TreeSelect",label:"\u4E0A\u7EA7\u8282\u70B9",componentProps:{fieldNames:{label:"name",value:"id"},getPopupContainer:()=>document.body},rules:[{required:!0,type:"number"}]},{field:"router",component:"Input",label:"\u8282\u70B9\u8DEF\u7531",vIf:({formModel:e})=>e.type!==2,rules:[{required:!0,type:"string"}]},{field:"perms",component:()=>Pe,label:"\u6743\u9650",vIf:({formModel:e})=>e.type===2,rules:[{required:!0,type:"array",message:"\u8BF7\u9009\u62E9\u6743\u9650"}]},{field:"viewPath",component:"Select",label:"\u6587\u4EF6\u8DEF\u5F84",vIf:({formModel:e})=>e.type===1,componentProps:{options:Object.keys(fe).map(e=>({label:e,value:e}))},rules:[{required:!0,type:"string"}]},{field:"icon",component:()=>Re,label:"\u8282\u70B9\u56FE\u6807",vIf:({formModel:e})=>e.type!==2},{field:"keepalive",component:"Switch",label:"\u662F\u5426\u7F13\u5B58",defaultValue:!0,vIf:({formModel:e})=>e.type===1},{field:"isShow",component:"Switch",label:"\u662F\u5426\u663E\u793A",defaultValue:!0,vIf:({formModel:e})=>e.type!==2},{field:"orderNum",component:"InputNumber",label:"\u6392\u5E8F\u53F7",defaultValue:255,componentProps:{style:{width:"100%"}}}],Oe=Y(" \u65B0\u589E "),Ue={name:"SysMenu"};var en=q(E(P({},Ue),{setup(e){const n=j([]),[c,u]=re({search:!1,pagination:!1,size:"small"}),[t]=be(),d=()=>w(this,null,function*(){const a=yield he();return n.value=O(L(a).filter(i=>i.type!==2),null),{list:O(L(a),null)}}),v=a=>w(this,null,function*(){var l,s,p;const[i]=yield t({modalProps:{title:`${a.id?"\u7F16\u8F91":"\u65B0\u589E"}\u83DC\u5355`,width:700,onFinish:o=>w(this,null,function*(){var _;o.menuId=a.id,o.perms=(_=o.perms)==null?void 0:_.join(","),yield(a.id?pe:ge)(o),u==null||u.reload()})},formProps:{labelWidth:100,schemas:Le}});i==null||i.updateSchema([{field:"parentId",componentProps:{treeDefaultExpandedKeys:[-1].concat((a==null?void 0:a.keyPath)||[]),treeData:j([{id:-1,name:"\u4E00\u7EA7\u83DC\u5355",children:n.value}])}}]),i==null||i.setFieldsValue(E(P({},a),{icon:(l=a.icon)!=null?l:"",perms:(s=a.perms)==null?void 0:s.split(","),parentId:(p=a.parentId)!=null?p:-1}))}),h=a=>w(this,null,function*(){yield ye({menuId:a.id}),u==null||u.reload()}),m=[...xe,{title:"\u64CD\u4F5C",width:160,dataIndex:"$action",hideInSearch:!0,align:"center",fixed:"right",actions:({record:a})=>[{label:"\u7F16\u8F91",auth:{perm:"sys.menu.update",effect:"disable"},onClick:()=>v(a)},{label:"\u5220\u9664",auth:"sys.menu.delete",popConfirm:{title:"\u4F60\u786E\u5B9A\u8981\u5220\u9664\u5417\uFF1F",onConfirm:()=>h(a)}}]}];return(a,i)=>{const l=F("a-button");return y(),k("div",null,[b(f(c),{"row-key":"id","header-title":"\u83DC\u5355\u7BA1\u7406","data-request":d,columns:m,bordered:"",scroll:{x:2e3}},{toolbar:x(()=>[b(l,{type:"primary",disabled:!a.$auth("sys.menu.add"),onClick:i[0]||(i[0]=s=>v({}))},{default:x(()=>[Oe]),_:1},8,["disabled"])]),_:1})])}}}));export{en as default};
