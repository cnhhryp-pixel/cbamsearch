"use client";
import {useEffect,useMemo,useState} from 'react';
import Link from 'next/link';
import {searchCbam,getScopeMatch,normalizeCode} from '../../data/cbam-codes';

export default function Page(){
 const [plan,setPlan]=useState('free');
 const [form,setForm]=useState({product:'',cn:'',country:'',quantity:''});
 const [result,setResult]=useState(null);
 useEffect(()=>{setPlan(new URLSearchParams(window.location.search).get('plan')||'free')},[]);
 const update=(k,v)=>setForm(f=>({...f,[k]:v}));
 const matches=useMemo(()=>searchCbam(form.cn||form.product).slice(0,5),[form.cn,form.product]);
 function assess(){
   const code=normalizeCode(form.cn);
   const scope=code?getScopeMatch(code):null;
   const fallback=matches[0]||null;
   setResult({status:scope?.status||(fallback?'match':'unknown'),record:scope?.record||fallback,exclusion:scope?.exclusion||null});
 }
 return <main className="reportBuilder">
  <section className="reportHero"><div className="wrap">
   <div className="eyebrow">{plan==='professional'?'PROFESSIONAL REPORT':'FREE ASSESSMENT'}</div>
   <h1>CBAM Product Assessment</h1>
   <p className="lead">Check your product against our CBAM classification data and generate a clear assessment directly in your browser.</p>
   <div className="reportTrust"><span>✓ No account required</span><span>✓ Browser-based</span><span>✓ Free to print</span></div>
  </div></section>
  <section className="section reportSection"><div className="wrap reportLayout">
   <div>
    <div className="formCard reportFormCard">
     <div className="stepHead"><span>01</span><div><h2>Product information</h2><p>Enter the basic details for the product you want to assess.</p></div></div>
     <div className="reportFields">
      <label className="wide"><span>Product name</span><input placeholder="e.g. Aluminium profile" value={form.product} onChange={e=>update('product',e.target.value)}/></label>
      <label><span>CN code</span><input placeholder="e.g. 7604" value={form.cn} onChange={e=>update('cn',e.target.value)}/><small>4–8 digit EU CN code</small></label>
      <label><span>Country of origin</span><input placeholder="e.g. China" value={form.country} onChange={e=>update('country',e.target.value)}/></label>
      <label className="wide"><span>Annual quantity <em>Optional</em></span><input placeholder="e.g. 10,000 kg" value={form.quantity} onChange={e=>update('quantity',e.target.value)}/></label>
     </div>
     <button className="primaryAction reportRun" onClick={assess}>Run CBAM Assessment <b>→</b></button>
     <p className="formNote">Preliminary classification support only. Verify regulatory decisions against current official EU sources.</p>
    </div>
    {result&&<div className={"assessmentResult "+result.status}>
     <div className="stepHead"><span>02</span><div><h2>Assessment result</h2><p>Preliminary result based on the information entered above.</p></div></div>
     <div className="resultStatus"><span>ASSESSMENT STATUS</span><strong>{String(result.status).replaceAll('-',' ').toUpperCase()}</strong></div>
     <div className="resultGrid reportResultGrid">
      <div><span>Classification</span><b>{result.record?.display||'No matching CN code found'}</b></div>
      <div><span>Sector</span><b>{result.record?.sector||'Requires verification'}</b></div>
      <div><span>Gas category</span><b>{result.record?.gas||'Requires verification'}</b></div>
      <div><span>Origin</span><b>{form.country||'Not provided'}</b></div>
     </div>
     <div className="reportActions"><button className="btn" onClick={()=>window.print()}>Print Report — Free</button><Link className="btn secondaryBtn" href="/pricing/">Download PDF — Upgrade</Link></div>
     <div className="downloadNote"><b>Free printing stays available.</b><span> PDF download is part of the paid report option.</span></div>
    </div>}
   </div>
   <aside className="reportAside">
    <div className="asideCard"><span className="sideKicker">WHAT YOU GET</span><h3>Preliminary CBAM assessment</h3><p>Use the result to organize your next compliance checks.</p><ul><li>CN classification match</li><li>CBAM sector indication</li><li>Gas category reference</li><li>Printable assessment</li></ul></div>
    <div className="asideCard reportUpgrade"><span className="planBadge">PDF REPORT</span><h3>Need a downloadable copy?</h3><p>Upgrade when you need a saved PDF for your files, supplier follow-up or internal review.</p><Link href="/pricing/">View report options →</Link></div>
   </aside>
  </div></section>
 </main>
}