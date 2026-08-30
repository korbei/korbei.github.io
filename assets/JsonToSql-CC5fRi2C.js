import{r as s,b as A,I as O,K as C,j as t,M as J}from"./app-BUBErD1I.js";import{M as b}from"./MonacoPane-n3dj8H6L.js";import{T as M}from"./ToolShell-BXuQsiYR.js";import{S as q}from"./Select-C9cyFBZJ.js";import{A as w}from"./Alert-Vs710nwI.js";import{H as P}from"./HandoffSource-Bd2ykZqW.js";import"./EditorToolbarButton-oY_xjfnI.js";import"./JsonTree-Ddai9RYu.js";import"./download-BLPDqiiX.js";const h=`[
  { "id": 1, "name": "Ada Lovelace", "email": "ada@example.com", "active": true, "score": 9.5, "joined": "2026-01-15", "meta": { "role": "admin" } },
  { "id": 2, "name": "Bob", "email": null, "active": false, "score": 8 }
]`,_=`{
  "type": "object",
  "required": ["id", "name"],
  "properties": {
    "id": { "type": "integer" },
    "name": { "type": "string", "maxLength": 120 },
    "email": { "type": ["string", "null"], "format": "email" },
    "created": { "type": "string", "format": "date-time" },
    "address": {
      "type": "object",
      "properties": {
        "city": { "type": "string" },
        "zip": { "type": "string", "maxLength": 10 }
      }
    },
    "orders": {
      "type": "array",
      "items": {
        "type": "object",
        "required": ["sku"],
        "properties": {
          "sku": { "type": "string" },
          "quantity": { "type": "integer" }
        }
      }
    }
  }
}`,D=J.map(a=>({value:a.value,label:a.label})),g="my_table",S={sample:h,schema:_},H=a=>a.trim()===""||Object.values(S).some(n=>n.trim()===a.trim());function U(){const[a,n]=s.useState("sample"),[r,c]=s.useState(h),[i,j]=s.useState("postgres"),[l,y]=s.useState(g),[o,N]=s.useState(!1),[m,v]=s.useState(!0),[d,p]=s.useState(null);s.useEffect(()=>{const e=A();(e==null?void 0:e.kind)==="text"&&(c(e.text),n("sample"),p(e.from))},[]);function L(e){n(e),c(f=>H(f)?S[e]:f)}const{sql:k,error:u}=s.useMemo(()=>{const e={relational:o,prefixNested:m};return a==="schema"?O(r,l,i,e):C(r,l,i,e)},[a,r,l,i,o,m]),x=a==="schema"?"JSON Schema":"JSON",E=t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"flex flex-col gap-1 text-sm",children:[t.jsx("span",{className:"font-medium text-fg",children:"Input"}),t.jsx("div",{className:"flex gap-1 rounded-md border border-border bg-surface p-1",children:["sample","schema"].map(e=>t.jsx("button",{type:"button",onClick:()=>L(e),className:`rounded px-3 py-1 font-medium transition-colors ${a===e?"bg-surface-muted text-fg":"text-fg-muted hover:text-fg"}`,children:e==="sample"?"JSON sample":"JSON Schema"},e))})]}),t.jsx(q,{stacked:!0,label:"Dialect",value:i,onChange:e=>j(e.target.value),options:D}),t.jsxs("label",{className:"flex flex-col gap-1 text-sm",children:[t.jsx("span",{className:"font-medium text-fg",children:"Table name"}),t.jsx("input",{value:l,onChange:e=>y(e.target.value),spellCheck:!1,className:"w-56 rounded-md border border-border bg-bg px-2.5 py-1.5 font-mono text-sm text-fg focus-visible:outline-2 focus-visible:outline-offset-2"})]}),t.jsxs("div",{className:"flex flex-col gap-1",children:[t.jsxs("label",{className:"flex items-center gap-2 text-sm text-fg-muted",title:"Split nested objects and arrays of objects into separate child tables linked by foreign keys",children:[t.jsx("input",{type:"checkbox",checked:o,onChange:e=>N(e.target.checked),className:"accent-[var(--accent)]"}),t.jsx("span",{children:"Split nested into related tables"})]}),t.jsxs("label",{className:`flex items-center gap-2 text-sm text-fg-muted ${o?"":"opacity-50"}`,title:"Name child tables like parent_child (on) or just child (off)",children:[t.jsx("input",{type:"checkbox",checked:m,disabled:!o,onChange:e=>v(e.target.checked),className:"accent-[var(--accent)] disabled:cursor-not-allowed"}),t.jsx("span",{children:"Prefix child tables with parent name"})]})]})]}),T=[{title:x,node:t.jsx(b,{title:x,value:r,onChange:e=>{c(e),p(null)},language:"json",treeView:!0,formattable:!0,ariaLabel:a==="schema"?"JSON Schema input":"JSON input",copyable:!0,uploadable:!0})},{title:"SQL",node:t.jsx(b,{title:"CREATE TABLE",value:k,readOnly:!0,language:"sql",ariaLabel:"Generated SQL",copyable:!0,download:{filename:`${l.trim()||g}.sql`}})}];return t.jsx(M,{ariaLabel:"JSON to SQL editors",controls:E,panels:T,above:d?t.jsx(P,{slug:d}):void 0,children:u&&t.jsx(w,{children:u})})}export{U as default};
