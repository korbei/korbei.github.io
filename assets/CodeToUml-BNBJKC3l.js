import{r as o,b as f,S as c,s as S,w as M,j as e}from"./app-KexPkcqf.js";import{M as d}from"./MonacoPane-aeLSN-lS.js";import{T as j}from"./ToolShell-DfGw7AD-.js";import{S as v}from"./Select-CTc6Oba8.js";import{H as L}from"./HandoffSource-C3ikR9iJ.js";import{S as h}from"./SendToMenu-BhfcEoFV.js";import{N as C}from"./NextStep-CIef10Qp.js";import{M as A}from"./MermaidDiagram-WE72bD5F.js";import"./EditorToolbarButton-BdrbS9Xq.js";import"./JsonTree-D_vpJ-XT.js";const E=`export interface Named {
  name: string;
}

export abstract class Animal implements Named {
  name: string;
  private age: number;

  makeSound(): void {}
  protected calcAge(birthYear: number): number {
    return 2026 - birthYear;
  }
}

export class Dog extends Animal {
  breed: string;
  fetch(item: string): boolean {
    return true;
  }
}
`,N=c.map(t=>({value:t.value,label:t.label})),u=[{slug:"uml-to-code",label:"UML to Code"}];function P(){var m;const[t,g]=o.useState("typescript"),[s,n]=o.useState(E),[l,i]=o.useState(null);o.useEffect(()=>{const a=f();(a==null?void 0:a.kind)==="text"&&(n(a.text),i(a.from))},[]);const p=((m=c.find(a=>a.value===t))==null?void 0:m.editorLanguage)??"plaintext",r=o.useMemo(()=>S(M(s,t)),[s,t]),x=e.jsxs(e.Fragment,{children:[e.jsx(v,{label:"Source language",value:t,onChange:a=>g(a.target.value),options:N}),e.jsx(h,{from:"code-to-uml",text:r,targets:u})]}),b=[{title:"Code",node:e.jsx(d,{title:"Source code",value:s,onChange:a=>{n(a),i(null)},language:p,ariaLabel:"Source code input",copyable:!0,uploadable:!0})},{title:"Mermaid",node:e.jsx(d,{title:"Mermaid class diagram",value:r,readOnly:!0,language:"plaintext",ariaLabel:"Generated Mermaid class diagram",copyable:!0,download:{filename:"diagram.mmd"}})}];return e.jsxs(j,{ariaLabel:"Code to UML editors",controls:x,panels:b,above:l?e.jsx(L,{slug:l}):void 0,children:[e.jsx(C,{from:"code-to-uml",text:r,targets:u}),e.jsxs("div",{className:"rounded-md border border-border bg-surface p-4",children:[e.jsx("h2",{className:"mb-3 text-sm font-semibold text-fg",children:"Live diagram"}),e.jsx(A,{code:r})]})]})}export{P as default};
