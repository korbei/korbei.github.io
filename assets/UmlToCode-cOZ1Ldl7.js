import{r as s,b as S,a4 as h,a5 as g,a6 as j,j as a}from"./app-BUBErD1I.js";import{M as c}from"./MonacoPane-n3dj8H6L.js";import{T as v}from"./ToolShell-BXuQsiYR.js";import{S as A}from"./Select-C9cyFBZJ.js";import{A as M}from"./Alert-Vs710nwI.js";import{H as w}from"./HandoffSource-Bd2ykZqW.js";import{M as T}from"./MermaidDiagram-4tpvX2LF.js";import"./EditorToolbarButton-oY_xjfnI.js";import"./JsonTree-Ddai9RYu.js";import"./download-BLPDqiiX.js";const L=`classDiagram
    class Animal {
        +String name
        +int age
        +makeSound() void
    }
    class Dog {
        +String breed
        +fetch() void
    }
    class Owner {
        +String name
    }
    Animal <|-- Dog
    Owner "1" --> "*" Animal : owns`,E=g.map(t=>({value:t.value,label:t.label})),N="typescript",u=3;function P(){const[t,l]=s.useState(L),[r,p]=s.useState(N),[i,m]=s.useState(null);s.useEffect(()=>{const e=S();(e==null?void 0:e.kind)==="text"&&(l(e.text),m(e.from))},[]);const o=s.useMemo(()=>h(t),[t]),n=g.find(e=>e.value===r),{code:f,error:d}=s.useMemo(()=>j(t,r,o),[t,r,o]),x=a.jsx(A,{label:"Target language",value:r,onChange:e=>p(e.target.value),options:E}),b=[{title:"Source",node:a.jsx(c,{title:"Mermaid class diagram",value:t,onChange:e=>{l(e),m(null)},language:"plaintext",ariaLabel:"Mermaid class diagram input",copyable:!0,uploadable:!0})},{title:"Code",node:a.jsx(c,{title:n.label,value:f,readOnly:!0,language:n.editorLanguage,ariaLabel:"Generated code",copyable:!0,download:{filename:`model.${n.ext}`}})}];return a.jsxs(v,{ariaLabel:"UML to code editors",controls:x,panels:b,above:i?a.jsx(w,{slug:i}):void 0,children:[d&&a.jsx(M,{children:d}),o.warnings.length>0&&a.jsxs("p",{className:"text-sm text-fg-muted",children:[o.warnings.length," line",o.warnings.length>1?"s":""," couldn’t be parsed and"," ","were skipped",": ",a.jsx("code",{className:"font-mono",children:o.warnings.slice(0,u).map(e=>e.replace(/^Could not parse: /,"")).join(" · ")}),o.warnings.length>u&&" …"]}),a.jsxs("div",{className:"rounded-md border border-border bg-surface p-4",children:[a.jsx("h2",{className:"mb-3 text-sm font-semibold text-fg",children:"Live diagram"}),a.jsx(T,{code:t})]})]})}export{P as default};
