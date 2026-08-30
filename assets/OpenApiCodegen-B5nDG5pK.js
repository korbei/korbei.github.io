import{al as x,am as N,an as R,ao as k,ap as M,aq as U,ar as B,r as q,b as L,T as w,j as f,B as _}from"./app-BUBErD1I.js";import{M as I}from"./MonacoPane-n3dj8H6L.js";import{T as D}from"./ToolShell-BXuQsiYR.js";import{A as H}from"./Alert-Vs710nwI.js";import{S as J}from"./Select-C9cyFBZJ.js";import{H as G}from"./HandoffSource-Bd2ykZqW.js";import"./EditorToolbarButton-oY_xjfnI.js";import"./JsonTree-Ddai9RYu.js";import"./download-BLPDqiiX.js";const z=["get","put","post","delete","patch","options","head"],Z=/^[A-Za-z_$][A-Za-z0-9_$]*$/,F=["200","201","202","203","204","2XX","default"],K="204",C="application/json",u=e=>typeof e=="object"&&e!==null;function v(e,s){return u(e)?typeof e.$ref=="string"?U(e.$ref,s):e:null}function O(e){const s=R(e);return s.charAt(0).toLowerCase()+s.slice(1)}const X=e=>Z.test(e)?e:JSON.stringify(e);function T(e,s,t){return B(N(e,R(s),t.reg,t.spec,t.seen))}function Y(e,s,t){const n=[...Array.isArray(e.parameters)?e.parameters:[],...Array.isArray(s.parameters)?s.parameters:[]],o=new Map;for(const c of n){const r=v(c,t);!r||typeof r.name!="string"||typeof r.in!="string"||o.set(`${r.in}:${r.name}`,{name:r.name,in:r.in,required:r.in==="path"||r.required===!0,schema:r.schema??{}})}return[...o.values()]}function Q(e,s){const t=u(e.responses)?e.responses:{},n=F.find(r=>r in t)??Object.keys(t)[0];if(!n)return{schema:null,noContent:!0};const o=v(t[n],s),c=o&&u(o.content)&&u(o.content[C])?o.content[C].schema:null;return{schema:c,noContent:n===K||c==null}}function V(e,s){const t=v(e.requestBody,s);if(!t||!u(t.content))return null;const n=t.content[C];return!u(n)||n.schema==null?null:{schema:n.schema,required:t.required===!0}}function W(e,s,t,n){const o=t.replace(/[{}]/g,"").replace(/[^A-Za-z0-9]+/g," ").trim(),c=typeof e=="string"&&e.trim()?O(e):O(`${s} ${o}`);let r=c||`${s}Request`,p=2;for(;n.has(r);)r=`${c}${p++}`;return n.add(r),r}function ee(e,s,t,n,o,c){const r=W(t.operationId,e,s,c),p=Y(n,t,o.spec),a=p.filter(l=>l.in==="path"),y=p.filter(l=>l.in==="query"),h=V(t,o.spec),{schema:$,noContent:i}=Q(t,o.spec),b=i?"void":T($,`${r}Response`,o),A=new Map(a.map(l=>[l.name,O(l.name)])),E=s.replace(/{([^}]+)}/g,(l,g)=>`\${${A.get(g)??O(g)}}`),m=a.map(l=>`${O(l.name)}: ${T(l.schema,l.name,o)}`);if(h&&m.push(`body${h.required?"":"?"}: ${T(h.schema,`${r}Body`,o)}`),y.length>0){const l=y.map(g=>`${X(g.name)}${g.required?"":"?"}: ${T(g.schema,g.name,o)}`).join("; ");m.push(`query?: { ${l} }`)}m.push("options?: RequestOptions");const d=[];y.length>0&&d.push("query"),h&&d.push("body"),d.push("...options");const j=d.length>1||d[0]!=="...options"?`{ ${d.join(", ")} }`:"{ ...options }",S=typeof t.summary=="string"?t.summary:typeof t.description=="string"?t.description:"";return`${S?`/** ${S.replace(/\s+/g," ").trim()} */
`:""}export function ${r}(${m.join(", ")}): Promise<${b}> {
  return request<${b}>('${e.toUpperCase()}', \`${E}\`, ${j})
}`}const te=`export interface RequestOptions {
  /** Override the base URL for this call. */
  baseUrl?: string
  /** Extra headers merged into the request. */
  headers?: Record<string, string>
  signal?: AbortSignal
}

async function request<T>(
  method: string,
  path: string,
  opts: RequestOptions & { query?: Record<string, unknown>; body?: unknown } = {},
): Promise<T> {
  const { query, body, baseUrl = BASE_URL, headers, signal } = opts
  const qs = query
    ? Object.entries(query)
        .filter(([, v]) => v !== undefined && v !== null)
        .map(([k, v]) => \`\${encodeURIComponent(k)}=\${encodeURIComponent(String(v))}\`)
        .join('&')
    : ''
  const res = await fetch(\`\${baseUrl}\${path}\${qs ? \`?\${qs}\` : ''}\`, {
    method,
    headers: { ...(body !== undefined ? { 'Content-Type': 'application/json' } : {}), ...headers },
    body: body !== undefined ? JSON.stringify(body) : undefined,
    signal,
  })
  if (!res.ok) throw new Error(\`\${method} \${path} -> \${res.status} \${res.statusText}\`)
  return res.status === 204 ? (undefined as T) : ((await res.json()) as T)
}`;function ne(e,s="typescript"){if(e.trim()==="")return{code:"",error:null};let t;try{t=x("yaml",e)}catch(m){return{code:"",error:m instanceof Error?m.message:"Could not parse the spec."}}if(!u(t))return{code:"",error:"The spec must be a JSON/YAML object."};const n=t,o=u(n.components)?n.components:{},c=u(o.schemas)?o.schemas:{},r=u(n.paths)?n.paths:{};if(Object.keys(c).length===0&&Object.keys(r).length===0)return{code:"",error:'No "paths" or "components.schemas" found — is this an OpenAPI spec?'};const p={spec:n,reg:new Map,seen:new Set};for(const[m,d]of Object.entries(c))N(d,R(m),p.reg,n,p.seen);const a=u(n.info)?n.info:{},y=typeof a.title=="string"?a.title:"API",h=typeof a.version=="string"?` ${a.version}`:"";if(s!=="typescript")return{code:[`// ${y}${h} — generated models. A full client is generated for the TypeScript target.`,k(p.reg,s)].filter(Boolean).join(`

`)+`
`,error:null};const $=new Set,i=[];for(const[m,d]of Object.entries(r)){const j=v(d,n);if(j)for(const S of z){const P=j[S];u(P)&&i.push(ee(S,m,P,j,p,$))}}const b=Array.isArray(n.servers)&&u(n.servers[0])?n.servers[0].url:void 0,A=typeof b=="string"?b:"";return{code:[`// ${y}${h} — generated TypeScript client (types + fetch).`,M(p.reg),`const BASE_URL = ${JSON.stringify(A)}`,te,...i].filter(Boolean).join(`

`)+`
`,error:null}}const se=`openapi: 3.0.3
info:
  title: Pet Store
  version: 1.0.0
servers:
  - url: https://api.example.com/v1
paths:
  /pets:
    get:
      operationId: listPets
      summary: List all pets
      parameters:
        - name: limit
          in: query
          schema: { type: integer }
      responses:
        "200":
          content:
            application/json:
              schema:
                type: array
                items: { $ref: "#/components/schemas/Pet" }
    post:
      operationId: createPet
      summary: Create a pet
      requestBody:
        required: true
        content:
          application/json:
            schema: { $ref: "#/components/schemas/NewPet" }
      responses:
        "201":
          content:
            application/json:
              schema: { $ref: "#/components/schemas/Pet" }
  /pets/{petId}:
    get:
      operationId: getPet
      summary: Get a pet by id
      parameters:
        - name: petId
          in: path
          required: true
          schema: { type: integer }
      responses:
        "200":
          content:
            application/json:
              schema: { $ref: "#/components/schemas/Pet" }
    delete:
      operationId: deletePet
      summary: Delete a pet
      parameters:
        - name: petId
          in: path
          required: true
          schema: { type: integer }
      responses:
        "204": { description: Deleted }
components:
  schemas:
    Pet:
      type: object
      required: [id, name]
      properties:
        id: { type: integer }
        name: { type: string }
        tag: { type: string }
    NewPet:
      type: object
      required: [name]
      properties:
        name: { type: string }
        tag: { type: string }
`,re=w.map(e=>({value:e.value,label:e.label}));function fe(){const[e,s]=q.useState(se),[t,n]=q.useState("typescript"),[o,c]=q.useState(null);q.useEffect(()=>{const i=L();(i==null?void 0:i.kind)==="text"&&(s(i.text),c(i.from))},[]);const{code:r,error:p}=q.useMemo(()=>ne(e,t),[e,t]),a=w.find(i=>i.value===t),y=t==="typescript"?"client.ts":`models.${(a==null?void 0:a.ext)??"txt"}`,h=f.jsxs(f.Fragment,{children:[f.jsx(J,{label:"Target",value:t,onChange:i=>n(i.target.value),options:re}),f.jsx("span",{className:"pb-1.5 text-sm text-fg-muted",children:t==="typescript"?"Types + a typed fetch client":"Models from the schemas (fetch client is TypeScript-only)"}),f.jsx(_,{variant:"ghost",onClick:()=>s(""),disabled:!e,children:"Clear"})]}),$=[{title:"OpenAPI spec",node:f.jsx(I,{title:"OpenAPI spec",value:e,onChange:i=>{s(i),c(null)},language:"yaml",ariaLabel:"OpenAPI spec input",copyable:!0,uploadable:!0})},{title:(a==null?void 0:a.label)??"Output",node:f.jsx(I,{title:(a==null?void 0:a.label)??"Output",value:r,readOnly:!0,language:(a==null?void 0:a.editorLanguage)??"plaintext",ariaLabel:"Generated code",copyable:!0,download:{filename:y}})}];return f.jsx(D,{ariaLabel:"OpenAPI code generator editors",controls:h,panels:$,above:o?f.jsx(G,{slug:o}):void 0,children:p&&f.jsx(H,{children:p})})}export{fe as default};
