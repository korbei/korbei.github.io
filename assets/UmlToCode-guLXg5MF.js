import{r as o,b as S,ad as h,ae as g,af as j,j as a}from"./app-KexPkcqf.js";import{M as c}from"./MonacoPane-aeLSN-lS.js";import{T as v}from"./ToolShell-DfGw7AD-.js";import{S as A}from"./Select-CTc6Oba8.js";import{A as M}from"./Alert-2PiOprW9.js";import{H as w}from"./HandoffSource-C3ikR9iJ.js";import{M as T}from"./MermaidDiagram-WE72bD5F.js";import"./EditorToolbarButton-BdrbS9Xq.js";import"./JsonTree-D_vpJ-XT.js";const L=`classDiagram
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
    Owner "1" --> "*" Animal : owns`,E=g.map(t=>({value:t.value,label:t.label})),N="typescript",u=3;function _(){const[t,l]=o.useState(L),[r,p]=o.useState(N),[i,d]=o.useState(null);o.useEffect(()=>{const e=S();(e==null?void 0:e.kind)==="text"&&(l(e.text),d(e.from))},[]);const s=o.useMemo(()=>h(t),[t]),n=g.find(e=>e.value===r),{code:f,error:m}=o.useMemo(()=>j(t,r,s),[t,r,s]),x=a.jsx(A,{label:"Target language",value:r,onChange:e=>p(e.target.value),options:E}),b=[{title:"Source",node:a.jsx(c,{title:"Mermaid class diagram",value:t,onChange:e=>{l(e),d(null)},language:"plaintext",ariaLabel:"Mermaid class diagram input",copyable:!0,uploadable:!0})},{title:"Code",node:a.jsx(c,{title:n.label,value:f,readOnly:!0,language:n.editorLanguage,ariaLabel:"Generated code",copyable:!0,download:{filename:`model.${n.ext}`}})}];return a.jsxs(v,{ariaLabel:"UML to code editors",controls:x,panels:b,above:i?a.jsx(w,{slug:i}):void 0,children:[m&&a.jsx(M,{children:m}),s.warnings.length>0&&a.jsxs("p",{className:"text-sm text-fg-muted",children:[s.warnings.length," line",s.warnings.length>1?"s":""," couldn’t be parsed and"," ","were skipped",": ",a.jsx("code",{className:"font-mono",children:s.warnings.slice(0,u).map(e=>e.replace(/^Could not parse: /,"")).join(" · ")}),s.warnings.length>u&&" …"]}),a.jsxs("div",{className:"rounded-md border border-border bg-surface p-4",children:[a.jsx("h2",{className:"mb-3 text-sm font-semibold text-fg",children:"Live diagram"}),a.jsx(T,{code:t})]})]})}export{_ as default};
