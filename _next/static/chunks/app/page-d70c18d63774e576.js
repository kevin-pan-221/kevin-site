(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{7688:(e,t,n)=>{Promise.resolve().then(n.bind(n,3699))},3699:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>D});var r=n(5155),o=n(2115),i=n(5565),a=n(8998),c=n(8412),s=n(810),l=n(3463),p=n(7365),u=n(2611),d=n(7123),f=n(8120),m=n(2567),x=n(5761);let g=o.createContext();var h=n(1045),b=n(7157);function v(e){return(0,b.Ay)("MuiGrid",e)}let w=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],k=(0,h.A)("MuiGrid",["root","container","item","zeroMinWidth",...[0,1,2,3,4,5,6,7,8,9,10].map(e=>"spacing-xs-".concat(e)),...["column-reverse","column","row-reverse","row"].map(e=>"direction-xs-".concat(e)),...["nowrap","wrap-reverse","wrap"].map(e=>"wrap-xs-".concat(e)),...w.map(e=>"grid-xs-".concat(e)),...w.map(e=>"grid-sm-".concat(e)),...w.map(e=>"grid-md-".concat(e)),...w.map(e=>"grid-lg-".concat(e)),...w.map(e=>"grid-xl-".concat(e))]);function j(e){let{breakpoints:t,values:n}=e,r="";Object.keys(n).forEach(e=>{""===r&&0!==n[e]&&(r=e)});let o=Object.keys(t).sort((e,n)=>t[e]-t[n]);return o.slice(0,o.indexOf(r))}let y=(0,f.Ay)("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e,{container:r,direction:o,item:i,spacing:a,wrap:c,zeroMinWidth:s,breakpoints:l}=n,p=[];r&&(p=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!e||e<=0)return[];if("string"==typeof e&&!Number.isNaN(Number(e))||"number"==typeof e)return[n["spacing-xs-".concat(String(e))]];let r=[];return t.forEach(t=>{let o=e[t];Number(o)>0&&r.push(n["spacing-".concat(t,"-").concat(String(o))])}),r}(a,l,t));let u=[];return l.forEach(e=>{let r=n[e];r&&u.push(t["grid-".concat(e,"-").concat(String(r))])}),[t.root,r&&t.container,i&&t.item,s&&t.zeroMinWidth,...p,"row"!==o&&t["direction-xs-".concat(String(o))],"wrap"!==c&&t["wrap-xs-".concat(String(c))],...u]}})(e=>{let{ownerState:t}=e;return{boxSizing:"border-box",...t.container&&{display:"flex",flexWrap:"wrap",width:"100%"},...t.item&&{margin:0},...t.zeroMinWidth&&{minWidth:0},..."wrap"!==t.wrap&&{flexWrap:t.wrap}}},function(e){let{theme:t,ownerState:n}=e,r=(0,p.kW)({values:n.direction,breakpoints:t.breakpoints.values});return(0,p.NI)({theme:t},r,e=>{let t={flexDirection:e};return e.startsWith("column")&&(t["& > .".concat(k.item)]={maxWidth:"none"}),t})},function(e){let{theme:t,ownerState:n}=e,{container:r,rowSpacing:o}=n,i={};if(r&&0!==o){let e;let n=(0,p.kW)({values:o,breakpoints:t.breakpoints.values});"object"==typeof n&&(e=j({breakpoints:t.breakpoints.values,values:n})),i=(0,p.NI)({theme:t},n,(n,r)=>{let o=t.spacing(n);return"0px"!==o?{marginTop:"calc(-1 * ".concat(o,")"),["& > .".concat(k.item)]:{paddingTop:o}}:(null==e?void 0:e.includes(r))?{}:{marginTop:0,["& > .".concat(k.item)]:{paddingTop:0}}})}return i},function(e){let{theme:t,ownerState:n}=e,{container:r,columnSpacing:o}=n,i={};if(r&&0!==o){let e;let n=(0,p.kW)({values:o,breakpoints:t.breakpoints.values});"object"==typeof n&&(e=j({breakpoints:t.breakpoints.values,values:n})),i=(0,p.NI)({theme:t},n,(n,r)=>{let o=t.spacing(n);return"0px"!==o?{width:"calc(100% + ".concat(o,")"),marginLeft:"calc(-1 * ".concat(o,")"),["& > .".concat(k.item)]:{paddingLeft:o}}:(null==e?void 0:e.includes(r))?{}:{width:"100%",marginLeft:0,["& > .".concat(k.item)]:{paddingLeft:0}}})}return i},function(e){let t,{theme:n,ownerState:r}=e;return n.breakpoints.keys.reduce((e,o)=>{let i={};if(r[o]&&(t=r[o]),!t)return e;if(!0===t)i={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===t)i={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{let a=(0,p.kW)({values:r.columns,breakpoints:n.breakpoints.values}),c="object"==typeof a?a[o]:a;if(null==c)return e;let s="".concat(Math.round(t/c*1e8)/1e6,"%"),l={};if(r.container&&r.item&&0!==r.columnSpacing){let e=n.spacing(r.columnSpacing);if("0px"!==e){let t="calc(".concat(s," + ").concat(e,")");l={flexBasis:t,maxWidth:t}}}i={flexBasis:s,flexGrow:0,maxWidth:s,...l}}return 0===n.breakpoints.values[o]?Object.assign(e,i):e[n.breakpoints.up(o)]=i,e},{})}),A=e=>{let{classes:t,container:n,direction:r,item:o,spacing:i,wrap:a,zeroMinWidth:c,breakpoints:s}=e,l=[];n&&(l=function(e,t){if(!e||e<=0)return[];if("string"==typeof e&&!Number.isNaN(Number(e))||"number"==typeof e)return["spacing-xs-".concat(String(e))];let n=[];return t.forEach(t=>{let r=e[t];if(Number(r)>0){let e="spacing-".concat(t,"-").concat(String(r));n.push(e)}}),n}(i,s));let p=[];s.forEach(t=>{let n=e[t];n&&p.push("grid-".concat(t,"-").concat(String(n)))});let u={root:["root",n&&"container",o&&"item",c&&"zeroMinWidth",...l,"row"!==r&&"direction-xs-".concat(String(r)),"wrap"!==a&&"wrap-xs-".concat(String(a)),...p]};return(0,d.A)(u,v,t)},S=o.forwardRef(function(e,t){let n=(0,m.b)({props:e,name:"MuiGrid"}),{breakpoints:i}=(0,x.A)(),a=(0,u.A)(n),{className:c,columns:s,columnSpacing:p,component:d="div",container:f=!1,direction:h="row",item:b=!1,rowSpacing:v,spacing:w=0,wrap:k="wrap",zeroMinWidth:j=!1,...S}=a,C=o.useContext(g),N=f?s||12:C,W={},M={...S};i.keys.forEach(e=>{null!=S[e]&&(W[e]=S[e],delete M[e])});let R={...a,columns:N,container:f,direction:h,item:b,rowSpacing:v||w,columnSpacing:p||w,wrap:k,zeroMinWidth:j,spacing:w,...W,breakpoints:i.keys},E=A(R);return(0,r.jsx)(g.Provider,{value:N,children:(0,r.jsx)(y,{ownerState:R,className:(0,l.A)(E.root,c),as:d,ref:t,...M})})});var C=n(8562);function N(e){return(0,b.Ay)("MuiCard",e)}(0,h.A)("MuiCard",["root"]);let W=e=>{let{classes:t}=e;return(0,d.A)({root:["root"]},N,t)},M=(0,f.Ay)(C.A,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})({overflow:"hidden"}),R=o.forwardRef(function(e,t){let n=(0,m.b)({props:e,name:"MuiCard"}),{className:o,raised:i=!1,...a}=n,c={...n,raised:i},s=W(c);return(0,r.jsx)(M,{className:(0,l.A)(s.root,o),elevation:i?8:void 0,ref:t,ownerState:c,...a})});function E(e){return(0,b.Ay)("MuiCardContent",e)}(0,h.A)("MuiCardContent",["root"]);let _=e=>{let{classes:t}=e;return(0,d.A)({root:["root"]},E,t)},G=(0,f.Ay)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})({padding:16,"&:last-child":{paddingBottom:24}}),B=o.forwardRef(function(e,t){let n=(0,m.b)({props:e,name:"MuiCardContent"}),{className:o,component:i="div",...a}=n,c={...n,component:i},s=_(c);return(0,r.jsx)(G,{as:i,className:(0,l.A)(s.root,o),ownerState:c,ref:t,...a})});var O=n(8173),T=n.n(O);let z="/kevin-site",I=[{title:"about me",description:"interests contact info and stuff",image:"/images/project1.jpg",link:"".concat(z,"/about")},{title:"projects",description:"cool things ive worked on",image:"/images/project2.jpg",link:"".concat(z,"/projects")},{title:"random",description:"anything else",image:"/images/project2.jpg",link:"".concat(z,"/random")}];function D(){return(0,r.jsx)(a.A,{sx:{backgroundColor:"#F0F0F0",minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",padding:4},children:(0,r.jsx)(c.A,{maxWidth:"lg",children:(0,r.jsxs)(a.A,{sx:{display:"flex",flexDirection:{xs:"column",md:"row"},alignItems:"center",justifyContent:"space-between",textAlign:"left",gap:4},children:[(0,r.jsxs)(a.A,{sx:{flex:1},children:[(0,r.jsxs)(s.A,{variant:"h1",gutterBottom:!0,sx:{whiteSpace:"pre-line"},children:["hi i'm kevin! freshman studying ","\n","comp sci and econ at brown"]}),(0,r.jsx)(S,{container:!0,spacing:4,justifyContent:"flex-start",sx:{marginTop:4},children:I.map((e,t)=>(0,r.jsx)(S,{item:!0,xs:12,sm:6,md:4,children:(0,r.jsx)(T(),{href:e.link,passHref:!0,style:{textDecoration:"none"},children:(0,r.jsx)(R,{sx:{borderRadius:"32px",boxShadow:"0 8px 20px rgba(0, 0, 0, 0.1)",transition:"transform 0.2s, box-shadow 0.2s",backgroundColor:"background.paper",height:"200px","&:hover":{transform:"scale(1.05)",boxShadow:"0 8px 30px rgba(0, 0, 0, 0.4)"}},children:(0,r.jsxs)(B,{children:[(0,r.jsx)(s.A,{variant:"h5",component:"div",sx:{fontWeight:"bold"},children:e.title}),(0,r.jsx)(s.A,{variant:"body2",color:"text.secondary",sx:{marginTop:"8px"},children:e.description})]})})})},t))})]}),(0,r.jsx)(a.A,{sx:{flex:"0 0 auto"},children:(0,r.jsx)(i.default,{src:"".concat(z,"/images/kevin_pfp_2.jpg"),alt:"Profile picture",width:300,height:300,style:{borderRadius:"16px",objectFit:"cover"}})})]})})})}}},e=>{var t=t=>e(e.s=t);e.O(0,[769,102,72,441,517,358],()=>t(7688)),_N_E=e.O()}]);