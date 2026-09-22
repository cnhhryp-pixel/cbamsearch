"use client";
import {useMemo,useState} from 'react';
import {searchCbam,getScopeMatch,normalizeCode} from '../../data/cbam-codes';
import {generateReportPdf} from '../../utils/generateReportPdf';

export default function Page(){
 const [plan,setPlan]=useState('free');
 const [form,setForm]=useState({product:'',cn:'',country:'',quantity:'',emissions:''});
 const [result,setResult]=useState(null);
 const [pdfState,setPdfState]=useState('');
 useMemo(()=>{if(typeof window!=='undefined')setPlan(new URLSearchParams(window.location.search).get('plan')||'free')},[]);
 const update=(k,v)=>setForm({...form,[k]:v});
 const matches=useMemo(()=>searchCbam(form.cn||form.product).slice(0,5),[form.cn,form.product]);
 function assess(){
   const code=normalizeCode(form.cn);
   const scope=code?getScopeMatch(code):null;
   const fallback=matches[0]||null;
   setResult({status:scope?.status||(fallback?'match':'unknown'),record:scope?.record||fallback,exclusion:scope?.exclusion||null});
 }
 async function printReport(){window.print()}
 async function downloadPreview(){
   const bytes=await generateReportPdf({...form,status:result?.status,classification:result?.record?.display,sector:result?.record?.sector,gas:result?.record?.gas});
   const blob=new Blob([bytes],{type:'application/pdf'});
   const url=URL.createObjectURL(blob);
   const a=document.createElement('a');a.href=url;a.download='cbam-assessment-preview.pdf';a.click();URL.revokeObjectURL(url);
   setPdfState('Your browser created the PDF preview successfully.');
 }
 return <main>
 <section className="section">
 <div className="wrap">
  <div className="eyebrow">{plan==='professional'?'PROFESSIONAL REPORT':'FREE CBAM CHECKER'}</div>
  <h1>CBAM Product Assessment Report</h1>
  <p className="lead">Check whether your product may fall under CBAM scope and create a preliminary assessment report directly in your browser.</p>

  <div className="formCard">
   <h2>1. Product information</h2>
   <input placeholder="Product name (e.g. aluminium profile)" value={form.product} onChange={e=>update('product',e.target.value)}/>
   <input placeholder="CN code (e.g. 7604)" value={form.cn} onChange={e=>update('cn',e.target.value)}/>
   <input placeholder="Country of origin" value={form.country} onChange={e=>update('country',e.target.value)}/>
   <input placeholder="Annual quantity (optional)" value={form.quantity} onChange={e=>update('quantity',e.target.value)}/>
   <button className="primaryAction" onClick={assess}>Run CBAM Assessment →</button>
  </div>

  {result&&<div className="assessmentResult">
   <h2>2. Assessment Result</h2>
   <div className="resultGrid">
    <p><b>Status</b><br/>{result.status}</p>
    <p><b>Classification</b><br/>{result.record?.display||'No matching CN code found'}</p>
    <p><b>Sector</b><br/>{result.record?.sector||'Unknown'}</p>
    <p><b>Gas category</b><br/>{result.record?.gas||'Unknown'}</p>
   </div>
   <div className="reportActions">
    <button className="btn" onClick={printReport}>Print Free Report</button>
    <button className="btn secondaryBtn" onClick={downloadPreview}>Create PDF Preview</button>
   </div>
   {plan==='free'&&<div className="upgradeBox"><b>Need a professional CBAM report?</b><p>Unlock detailed methodology, evidence checklist and downloadable PDF.</p><a className="btn" href="/pricing/">Upgrade Professional Report</a></div>}
   {plan==='professional'&&<div className="upgradeBox"><b>Professional version</b><p>Full downloadable report access will be unlocked after payment confirmation.</p></div>}
   {pdfState&&<p>{pdfState}</p>}
  </div>}
 </div>
 </section>
 </main>
}
