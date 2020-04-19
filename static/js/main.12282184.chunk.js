(this["webpackJsonpcache-simulator"]=this["webpackJsonpcache-simulator"]||[]).push([[0],{32:function(e){e.exports=JSON.parse('["92","70","8C","FD","89","E2","40","C2","D","9A","D1","F8","43","7E","B7","75","FB","44","DD","F6","A6","43","11","17","98","88","8","6A","6D","B8","BC","12","A","F1","4C","45","63","2C","40","98","91","65","E","76","EE","5D","18","29","85","13","60","C5","56","F2","89","9E","6","E2","B","A2","B2","41","B1","7B"]')},59:function(e,a,t){e.exports=t(67)},67:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(9),i=t.n(l),c=t(30),o=t(97),m=t(68),s=t(101),u=Object(o.a)((function(e){return{header:{position:"sticky",top:0,backgroundColor:e.palette.background.default,zIndex:10,padding:e.spacing(1)},link:{color:e.palette.text.primary}}})),g=function(){var e=u();return r.a.createElement("header",{className:e.header},r.a.createElement(m.a,{variant:"h1"},"React Cache Simulator"),r.a.createElement(m.a,{variant:"caption"},"(c) 2020 Josiah R Lansford, "),r.a.createElement(s.a,{variant:"caption",className:e.link,href:"https://josiahlansford.com"},"josiahlansford.com"))},d=t(102),E=t(103),p=t(104),h=t(105),f=t(106),v=t(107),C=t(108),b=t(32),y=Object(o.a)((function(e){return{container:{width:"auto",margin:e.spacing(1),flexGrow:1}}})),S=function(){var e=y();return r.a.createElement(d.a,{className:e.container,component:E.a},r.a.createElement(m.a,{variant:"h2"},"Main Memory"),r.a.createElement(p.a,{className:e.table,size:"small"},r.a.createElement(h.a,null,r.a.createElement(f.a,null,r.a.createElement(v.a,{align:"right"},"Address"),r.a.createElement(v.a,{align:"right"},"Binary"),r.a.createElement(v.a,{align:"right"},"Hex"),r.a.createElement(v.a,{align:"right"},"Data"))),r.a.createElement(C.a,null,b.map((function(e,a){return r.a.createElement(f.a,{key:a},r.a.createElement(v.a,{align:"right"},a),r.a.createElement(v.a,{align:"right"},a.toString(2)),r.a.createElement(v.a,{align:"right"},a.toString(16).toUpperCase()),r.a.createElement(v.a,{align:"right"},e))})))))},N=Object(o.a)((function(e){return{container:{width:"auto",height:"auto",margin:e.spacing(1),flexGrow:1}}})),j=function(e){var a=e.setNum,t=e.data,n=void 0===t?[]:t,l=N();return r.a.createElement(d.a,{className:l.container,component:E.a},r.a.createElement(m.a,{variant:"h2"},"Cache Set ",a),r.a.createElement(p.a,{size:"small"},r.a.createElement(h.a,null,r.a.createElement(f.a,null,r.a.createElement(v.a,{align:"right"},"Set"),r.a.createElement(v.a,{align:"right"},"Tag"),r.a.createElement(v.a,{align:"right"},"Data"),r.a.createElement(v.a,{align:"right"},"#"))),r.a.createElement(C.a,null,n.map((function(e,a){return r.a.createElement(f.a,{key:a},r.a.createElement(v.a,{align:"right"},a),r.a.createElement(v.a,{align:"right"},e.tag&&e.tag.toString(16).toUpperCase()),r.a.createElement(v.a,{align:"right"},e.data&&e.data),r.a.createElement(v.a,{align:"right"},e.iteration&&e.iteration))})))))},k=t(109),x=t(117),O=t(115),w=t(119),A=t(118),B=t(112),D=Object(o.a)((function(e){return{app:{backgroundColor:e.background},flexContainer:{display:"flex",alignItems:"flex-start",flexFlow:"row wrap"},centerAlign:{display:"flex",flexFlow:"row wrap",alignItems:"stretch"},formControl:{margin:e.spacing(1),minWidth:120},headerLinkContainer:{padding:e.spacing(1),marginTop:e.spacing(2),backgroundColor:e.palette.primary.main,display:"inline-block"},headerLink:{fontSize:"1rem",color:e.palette.text.primary}}})),F=function(){var e=D(),a=[[{tag:null,data:null},{tag:null,data:null},{tag:null,data:null},{tag:null,data:null}],[{tag:null,data:null},{tag:null,data:null},{tag:null,data:null},{tag:null,data:null}]],t=Object(n.useState)(a),l=Object(c.a)(t,2),i=l[0],o=l[1],u=Object(n.useState)(1),d=Object(c.a)(u,2),E=d[0],p=d[1],h="Please enter an address to retrieve from memory:",f=Object(n.useState)(h),v=Object(c.a)(f,2),C=v[0],y=v[1],N=Object(n.useState)(10),F=Object(c.a)(N,2),I=F[0],z=F[1],L=Object(n.useState)(""),M=Object(c.a)(L,2),R=M[0],J=M[1];return r.a.createElement("div",{className:e.app},r.a.createElement("div",{className:e.headerLinkContainer},r.a.createElement(s.a,{className:e.headerLink,href:"https://josiahlansford.com/projects"},"\xab Back to Projects")),r.a.createElement(g,null),r.a.createElement("div",{className:e.flexContainer},r.a.createElement("div",{className:e.leftPane},r.a.createElement(m.a,{className:e.formControl,variant:"body1"},C),r.a.createElement("form",{className:e.centerAlign,onSubmit:function(e){if(e.preventDefault(),""!==R){var a=parseInt(R,I);if(a>=b.length)y("Invalid Address. Try Again.");else{var t=b[a],n=Math.floor(a/4),r=a%4,l=i,c=-1;i[0][r].tag===n?c=0:i[1][r].tag===n&&(c=1),c>=0?(y("Cache Hit (Set 1): ".concat(t)),l[c][r].iteration=E,o(l),p(E+1)):(l[c=null==i[1][r].iteration&&null!=i[0][r].iteration||i[0][r].iteration>i[1][r].iteration?1:0][r]={data:t,tag:n,iteration:E},o(l),y("Cache Miss: ".concat(t,". Storing in Set ").concat(c)),p(E+1))}}}},r.a.createElement(k.a,{variant:"filled",className:e.formControl},r.a.createElement(x.a,null,"Radix"),r.a.createElement(O.a,{value:I,onChange:function(e){""!==R&&J(parseInt(R,I).toString(e.target.value).toUpperCase()),z(e.target.value)}},r.a.createElement(w.a,{value:10},"Decimal"),r.a.createElement(w.a,{value:16},"Hex"),r.a.createElement(w.a,{value:2},"Binary"))),r.a.createElement(A.a,{className:e.formControl,label:"Address",variant:"filled",value:R,onChange:function(e){var a={10:/^[0-9\b]+$/,16:/^[0-9a-fA-F]+$/,2:/^[01]+$/}[I];(""===e.target.value||a.test(e.target.value))&&J(e.target.value)}}),r.a.createElement(B.a,{type:"submit",className:e.formControl,variant:"contained",color:"primary"},"Retrieve"),r.a.createElement(B.a,{className:e.formControl,variant:"contained",color:"secondary",onClick:function(){o(a),y(h),p(0),J("")}},"Reset")),r.a.createElement("div",{className:e.flexContainer},r.a.createElement(j,{setNum:0,data:i[0]}),r.a.createElement(j,{setNum:1,data:i[1]}))),r.a.createElement(S,null)))},I=t(52),z=t(113),L=t(114),M=Object(I.a)({palette:{type:"dark"},typography:{fontFamily:["Open Sans, sans-serif"],h1:{fontSize:"3rem"},h2:{fontSize:"2rem"}}});i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(z.a,{theme:M},r.a.createElement(L.a,null),r.a.createElement(F,null))),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.12282184.chunk.js.map