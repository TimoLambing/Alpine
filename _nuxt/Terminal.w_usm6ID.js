import{u as m}from"./index.zY9gj4FV.js";import{d as v,r as h,I as y,b as s,c as o,M as i,f as p,e,F as f,Z as C,p as k,i as g,t as I,l as S}from"./entry.wcn_adKj.js";const n=t=>(k("data-v-8e962ee4"),t=t(),g(),t),b={key:0,class:"copied"},w=n(()=>e("div",{class:"scrim"},null,-1)),x=n(()=>e("div",{class:"content"}," Copied! ",-1)),B=[w,x],T=n(()=>e("div",{class:"header"},[e("div",{class:"controls"},[e("div"),e("div"),e("div")]),e("div",{class:"title"}," Bash ")],-1)),F={class:"window"},N=n(()=>e("span",{class:"sign"},"$",-1)),V={class:"content"},j={key:1,class:"prompt"},q=v({__name:"Terminal",props:{content:{type:[Array,String],required:!0}},setup(t){const a=t,{copy:l}=m(),c=h("init"),r=y(()=>typeof a.content=="string"?[a.content]:a.content),_=u=>{l(r.value.join(`
`)).then(()=>{c.value="copied",setTimeout(()=>{c.value="init"},1e3)}).catch(()=>{console.warn("Couldn't copy to clipboard!")})};return(u,A)=>(s(),o("div",{class:"terminal",onClick:_},[i(c)==="copied"?(s(),o("div",b,B)):p("",!0),T,e("div",F,[(s(!0),o(f,null,C(i(r),d=>(s(),o("span",{key:d,class:"line"},[N,e("span",V,I(d),1)]))),128))]),i(c)!=="copied"?(s(),o("div",j," Click to copy ")):p("",!0)]))}}),L=S(q,[["__scopeId","data-v-8e962ee4"]]);export{L as default};
