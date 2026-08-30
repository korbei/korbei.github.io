import{r as o,b as A,T as b,N as E,O as L,j as t}from"./app-BUBErD1I.js";import{M as g}from"./MonacoPane-n3dj8H6L.js";import{T as M}from"./ToolShell-BXuQsiYR.js";import{S as J}from"./Select-C9cyFBZJ.js";import{A as C}from"./Alert-Vs710nwI.js";import{H as R}from"./HandoffSource-Bd2ykZqW.js";import"./EditorToolbarButton-oY_xjfnI.js";import"./JsonTree-Ddai9RYu.js";import"./download-BLPDqiiX.js";const S=`{
  "id": 42,
  "name": "Ada Lovelace",
  "active": true,
  "roles": ["admin", "editor"],
  "address": { "city": "London", "zip": null },
  "posts": [
    { "title": "Notes", "views": 1200 },
    { "title": "On the engine" }
  ]
}`,k=`{
  "type": "object",
  "required": ["id", "name"],
  "properties": {
    "id": { "type": "integer" },
    "name": { "type": "string" },
    "email": { "type": ["string", "null"] },
    "roles": { "type": "array", "items": { "type": "string" } },
    "address": { "$ref": "#/$defs/Address" }
  },
  "$defs": {
    "Address": {
      "type": "object",
      "required": ["city"],
      "properties": {
        "city": { "type": "string" },
        "zip": { "type": "string" }
      }
    }
  }
}`,w=b.map(s=>({value:s.value,label:s.label})),x="Root",y={json:S,schema:k},$=s=>s.trim()===""||Object.values(y).some(r=>r.trim()===s.trim());function U(){const[s,r]=o.useState("json"),[n,l]=o.useState(S),[a,h]=o.useState("typescript"),[i,j]=o.useState(x),[m,u]=o.useState(null);o.useEffect(()=>{const e=A();(e==null?void 0:e.kind)==="text"&&(l(e.text),r("json"),u(e.from))},[]);function v(e){r(e),l(f=>$(f)?y[e]:f)}const c=b.find(e=>e.value===a),{code:N,error:d}=o.useMemo(()=>{const e=i.trim()||x;return s==="schema"?E(n,a,e):L(n,a,e)},[n,a,i,s]),p=s==="schema"?"JSON Schema":"JSON",O=t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"flex flex-col gap-1 text-sm",children:[t.jsx("span",{className:"font-medium text-fg",children:"Input"}),t.jsx("div",{className:"flex gap-1 rounded-md border border-border bg-surface p-1",children:["json","schema"].map(e=>t.jsx("button",{type:"button",onClick:()=>v(e),className:`rounded px-3 py-1 font-medium transition-colors ${s===e?"bg-surface-muted text-fg":"text-fg-muted hover:text-fg"}`,children:e==="json"?"JSON sample":"JSON Schema"},e))})]}),t.jsx(J,{stacked:!0,label:"Target",value:a,onChange:e=>h(e.target.value),options:w}),t.jsxs("label",{className:"flex flex-col gap-1 text-sm",children:[t.jsx("span",{className:"font-medium text-fg",children:"Root type name"}),t.jsx("input",{value:i,onChange:e=>j(e.target.value),spellCheck:!1,className:"w-48 rounded-md border border-border bg-bg px-2.5 py-1.5 font-mono text-sm text-fg focus-visible:outline-2 focus-visible:outline-offset-2"})]})]}),T=[{title:p,node:t.jsx(g,{title:p,value:n,onChange:e=>{l(e),u(null)},language:"json",treeView:!0,formattable:!0,ariaLabel:s==="schema"?"JSON Schema input":"JSON input",copyable:!0,uploadable:!0})},{title:"Output",node:t.jsx(g,{title:c.label,value:N,readOnly:!0,language:c.editorLanguage,ariaLabel:"Generated types",copyable:!0,download:{filename:`types.${c.ext}`}})}];return t.jsx(M,{ariaLabel:"JSON to types editors",controls:O,panels:T,above:m?t.jsx(R,{slug:m}):void 0,children:d&&t.jsx(C,{children:d})})}export{U as default};
