'use client';
import { useMemo, useState } from 'react';
import { searchCbam, normalizeCode, getScopeMatch } from '../../data/cbam-codes';

function classifyCode(query) {
  const code = normalizeCode(query);
  if (!code) return null;
  return getScopeMatch(code);
}

export default function ScopeChecker() {
  const [q,setQ]=useState('');
  const results=useMemo(()=>q.trim()?searchCbam(q):[],[q]);
  const classification=useMemo(()=>classifyCode(q),[q]);
  const status=!q.trim()?'idle':classification?.status==='excluded'?'excluded':classification?.status==='covered'?'covered':classification?.status==='potential'?'potential':classification?.status==='needs-detail'?'detail':results.length?'covered':'unknown';

  const copy={
    excluded:['Explicit Annex I exclusion','This code falls under a broader CBAM heading but matches an exclusion recorded from Annex I. Confirm the full 8-digit CN classification before relying on the result.'],
    covered:['Covered record in the CBAM scope dataset','The exact code matches a record in the current Annex I scope dataset. Confirm the customs classification and applicable rules before relying on the result.'],
    potential:['Potentially covered by CBAM','This code falls under a broader Chapter, Heading or Subheading listed in Annex I. Confirm the full CN classification before relying on the result.'],
    detail:['More CN-code detail needed','This prefix contains CBAM records, but a more specific CN classification is needed to determine scope.'],
    unknown:['Not confirmed by this dataset','This is not a definitive “not covered” result. Verify the exact CN code against Annex I and current EU customs classification.']
  };

  return <div>
    <div className="search"><input value={q} onChange={e=>setQ(e.target.value)} placeholder="Enter CN/HS code or product — e.g. 7318 or steel bolts"/><button type="button">Check scope</button></div>
    {status!=='idle'&&<div className={'scopeStatus '+status}>
      <div className="eyebrow">{status==='excluded'?'Exclusion detected':status==='covered'?'Exact scope record':status==='potential'?'Parent scope match':'Classification check'}</div>
      <h2>{copy[status][0]}</h2><p>{copy[status][1]}</p>
      {classification?.exclusion&&<div className="card"><b>Excluded code: {classification.exclusion}</b><p>Parent heading: {classification.record.display} · {classification.record.sector}</p></div>}
    </div>}
    {status!=='excluded'&&results.length>0&&<div className="results">{results.slice(0,8).map(x=><a className="result" href={'/cn-code/'+x.code+'/'} key={x.code}><div><b>{x.display}</b><h3>{x.name}</h3></div><span className="chip">{x.sector}</span></a>)}</div>}
  </div>;
}
