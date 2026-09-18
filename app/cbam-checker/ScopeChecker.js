'use client';
import { useMemo, useState } from 'react';
import { searchCbam, normalizeCode, cbamCodes } from '../../data/cbam-codes';

function classifyCode(query) {
  const code = normalizeCode(query);
  if (!code) return null;
  const parents = cbamCodes.filter(x => code.startsWith(x.code)).sort((a,b) => b.code.length-a.code.length);
  for (const item of parents) {
    const hit = (item.excludedCodes || []).find(ex => code.startsWith(normalizeCode(ex)));
    if (hit) return { status:'excluded', item, excludedBy: normalizeCode(hit) };
  }
  if (parents.length) return { status:'covered', item:parents[0] };
  if (cbamCodes.some(x => x.code.startsWith(code))) return { status:'detail' };
  return null;
}

export default function ScopeChecker() {
  const [q,setQ]=useState('');
  const results=useMemo(()=>q.trim()?searchCbam(q):[],[q]);
  const classification=useMemo(()=>classifyCode(q),[q]);
  const status=!q.trim()?'idle':classification?.status==='excluded'?'excluded':results.length?'covered':classification?.status==='detail'?'detail':'unknown';

  const copy={
    excluded:['Explicit Annex I exclusion','This code falls under a broader CBAM heading but matches an exclusion recorded from Annex I. Confirm the full 8-digit CN classification before relying on the result.'],
    covered:['Potentially covered by CBAM','The query matches the current Annex I scope dataset. Confirm the exact 8-digit CN classification before relying on the result.'],
    detail:['More CN-code detail needed','This prefix contains CBAM records, but a more specific CN classification is needed to determine scope.'],
    unknown:['Not confirmed by this dataset','This is not a definitive “not covered” result. Verify the exact CN code against Annex I and current EU customs classification.']
  };

  return <div>
    <div className="search"><input value={q} onChange={e=>setQ(e.target.value)} placeholder="Enter CN/HS code or product — e.g. 7318 or steel bolts"/><button type="button">Check scope</button></div>
    {status!=='idle'&&<div className={'scopeStatus '+status}>
      <div className="eyebrow">{status==='excluded'?'Exclusion detected':status==='covered'?'Match found':'Classification check'}</div>
      <h2>{copy[status][0]}</h2><p>{copy[status][1]}</p>
      {classification?.excludedBy&&<div className="card"><b>Excluded code: {classification.excludedBy}</b><p>Parent heading: {classification.item.display} · {classification.item.sector}</p></div>}
    </div>}
    {status!=='excluded'&&results.length>0&&<div className="results">{results.slice(0,8).map(x=><a className="result" href={'/cn-code/'+x.code+'/'} key={x.code}><div><b>{x.display}</b><h3>{x.name}</h3></div><span className="chip">{x.sector}</span></a>)}</div>}
  </div>;
}
