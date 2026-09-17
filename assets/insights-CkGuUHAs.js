const r={error:0,warn:1,info:2};function t(s){return s.map((i,n)=>({insight:i,i:n})).sort((i,n)=>r[i.insight.level]-r[n.insight.level]||i.i-n.i).map(({insight:i})=>i)}export{t as s};
