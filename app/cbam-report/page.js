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
 function assess(){const code=normalizeCode(form.cn);const scope=code?getScopeMatch(code):null;const fallback=matches[0]||null;setResult({status:scope?.status||(fallback?'match':'unknown'),record:scope?.record||fallback,exclusion:scope?.exclusion||null})}
 async function printReport(){window.print()}
 async function downloadPreview(){const bytes=await generateReportPdf({...form,status:result?.status,classification:result?.record?.display,sector:result?.record?.sector,gas:result?.record?.gas});const blob=new Blob([bytes],{type:'application/pdf'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='cbam-assessment-preview.pdf';a.click();URL.revokeObjectURL(url);setPdfState('PDF created in browser.');}
 return <main><section className="section"><div className="wrap"><div className="eyebrow">{plan==='professional'?'PROFESSIONAL REPORT':'FREE ASSESSMENT'}</div><h1>CBAM Product Assessment</h1><p className="lead">Generate your assessment directly in your browser. No server PDF service required.</p><div className="formCard"><input placeholder="Product" value={form.product} onChange={e=>update('product',e.target.value)}/><input placeholder="CN code" value={form.cn} onChange={e=>update('cn',e.target.value)}/><input placeholder="Country" value={form.country} onChange={e=>update('country',e.target.value)}/><button className="primaryAction" onClick={assess}>Get assessment</button></div>{result&&<div className="assessmentResult"><h2>Assessment Result</h2><p>Status: {result.status}</p><p>{result.record?.display}</p><button className="btn" onClick={printReport}>Print report</button><button className="btn secondaryBtn" onClick={downloadPreview}>Generate PDF preview</button>{plan==='professional'&&<p>Full downloadable professional report will be unlocked after payment.</p>}{pdfState&&<p>{pdfState}</p>}</div>}</div></section></main>
}
