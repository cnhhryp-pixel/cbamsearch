"use client";
import {useEffect,useMemo,useState} from 'react';
import Link from 'next/link';
import {searchCbam,getScopeMatch,normalizeCode} from '../../data/cbam-codes';

export default function Page(){
 const [plan,setPlan]=useState('free');
 const [form,setForm]=useState({product:'',cn:'',country:'',quantity:''});
 const [result,setResult]=useState(null);
 const [reportMeta,setReportMeta]=useState(null);
 const [previewOpen,setPreviewOpen]=useState(false);
 const [saved,setSaved]=useState(false);
 const [pro,setPro]=useState({importer:'',supplier:'',installation:'',reportingPeriod:'',productionRoute:'',directEmissions:'',indirectEmissions:'',precursorEmissions:'',specificEmissions:'',emissionsMethod:'',verificationStatus:'',notes:''});
 useEffect(()=>{const q=new URLSearchParams(window.location.search);setPlan(q.get('plan')||'free');try{const raw=sessionStorage.getItem('cbam-professional-draft');if(raw){const d=JSON.parse(raw);if(d.form)setForm(d.form);if(d.pro)setPro(d.pro);}}catch{}},[]);
 const update=(k,v)=>setForm(f=>({...f,[k]:v}));
 const updatePro=(k,v)=>setPro(x=>({...x,[k]:v}));
 const matches=useMemo(()=>searchCbam(form.cn||form.product).slice(0,5),[form.cn,form.product]);
 function saveDraft(){try{sessionStorage.setItem('cbam-professional-draft',JSON.stringify({form,pro,savedAt:Date.now()}));setSaved(true);setTimeout(()=>setSaved(false),1800);}catch{}}
 function goToCheckout(){saveDraft();window.location.href='/pricing/#professional';}
 function assess(){
   const code=normalizeCode(form.cn);
   const scope=code?getScopeMatch(code):null;
   const fallback=matches[0]||null;
   setResult({status:scope?.status||(fallback?'match':'unknown'),record:scope?.record||fallback,exclusion:scope?.exclusion||null});
   const now=new Date();
   setReportMeta({date:now.toLocaleDateString('en-GB',{day:'2-digit',month:'short',year:'numeric'}),id:'CBS-'+now.getFullYear()+'-'+String(now.getTime()).slice(-8)});
 }
 return <main className={"reportBuilder "+(plan==="free"?"freeReport":"paidReport")}><div className="printWatermark" aria-hidden="true"><b>CBAMSearch</b><span>FREE ASSESSMENT • PRELIMINARY</span></div>
  <section className="reportHero"><div className="wrap">
   <div className="eyebrow">{plan==='professional'?'PROFESSIONAL REPORT':'FREE ASSESSMENT'}</div>
   <h1>CBAM Product Assessment</h1>
   <p className="lead">Check your product against our CBAM classification data and generate a clear assessment directly in your browser.</p>
   <div className="reportTrust"><span>✓ No account required</span><span>✓ Browser-based</span><span>✓ Free watermarked print</span></div>
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
     <div className="printReportHeader"><div><b>CBAMSearch</b><span>CBAM Product Assessment Report</span></div><div><span>REPORT ID</span><b>{reportMeta?.id}</b><span>GENERATED</span><b>{reportMeta?.date}</b></div></div>
     <div className="printSummary"><div><span>PRODUCT</span><b>{form.product||'Not provided'}</b></div><div><span>CN CODE</span><b>{form.cn||'Not provided'}</b></div><div><span>ORIGIN</span><b>{form.country||'Not provided'}</b></div><div><span>QUANTITY</span><b>{form.quantity||'Not provided'}</b></div></div>
     <div className="stepHead"><span>02</span><div><h2>Assessment result</h2><p>Preliminary result based on the information entered above.</p></div></div>
     <div className="resultStatus"><span>ASSESSMENT STATUS</span><strong>{String(result.status).replaceAll('-',' ').toUpperCase()}</strong></div>
     <div className="resultGrid reportResultGrid">
      <div><span>Classification</span><b>{result.record?.display||'No matching CN code found'}</b></div>
      <div><span>Sector</span><b>{result.record?.sector||'Requires verification'}</b></div>
      <div><span>Gas category</span><b>{result.record?.gas||'Requires verification'}</b></div>
      <div><span>Origin</span><b>{form.country||'Not provided'}</b></div>
     </div>
     <div className="printInterpretation"><h3>Assessment interpretation</h3><p>This preliminary assessment indicates whether the entered product classification may fall within CBAM-related product scope. It is intended as a screening aid and does not replace official customs classification, verified emissions data, or legal/compliance advice.</p></div>
     <div className="printChecklist"><h3>Recommended next checks</h3><div><span>01</span><p><b>Confirm the CN code</b><br/>Verify the full CN classification used for EU customs purposes.</p></div><div><span>02</span><p><b>Confirm CBAM scope</b><br/>Check the current applicable EU CBAM product scope and any exclusions.</p></div><div><span>03</span><p><b>Prepare emissions data</b><br/>Collect installation and embedded-emissions information where required.</p></div></div>
     <div className="printDisclaimer"><b>Important notice</b><p>CBAMSearch provides informational screening tools. Regulations, classifications, default values and reporting requirements can change. Always verify material compliance decisions using current official European Union sources and qualified professional advice where appropriate.</p></div>
     {plan==='professional'&&<div className="proDataCard">
      <div className="stepHead"><span>03</span><div><h2>Professional report details</h2><p>Add business and supplier context to make the report more useful for internal review.</p></div></div>
      <div className="reportFields">
       <label><span>EU importer / company</span><input placeholder="Company name" value={pro.importer} onChange={e=>updatePro('importer',e.target.value)}/></label>
       <label><span>Supplier</span><input placeholder="Supplier name" value={pro.supplier} onChange={e=>updatePro('supplier',e.target.value)}/></label>
       <label><span>Installation / plant</span><input placeholder="Production installation" value={pro.installation} onChange={e=>updatePro('installation',e.target.value)}/></label>
       <label><span>Reporting period</span><input placeholder="e.g. 2026" value={pro.reportingPeriod} onChange={e=>updatePro('reportingPeriod',e.target.value)}/></label>
       <label className="wide"><span>Production route</span><input placeholder="e.g. primary aluminium extrusion" value={pro.productionRoute} onChange={e=>updatePro('productionRoute',e.target.value)}/></label>
       <label><span>Direct emissions <em>Optional</em></span><input placeholder="tCO₂e" inputMode="decimal" value={pro.directEmissions} onChange={e=>updatePro('directEmissions',e.target.value)}/></label>
       <label><span>Indirect emissions <em>Optional</em></span><input placeholder="tCO₂e" inputMode="decimal" value={pro.indirectEmissions} onChange={e=>updatePro('indirectEmissions',e.target.value)}/></label>
       <label><span>Precursor emissions <em>Optional</em></span><input placeholder="tCO₂e" inputMode="decimal" value={pro.precursorEmissions} onChange={e=>updatePro('precursorEmissions',e.target.value)}/></label>
       <label><span>Specific embedded emissions <em>Optional</em></span><input placeholder="tCO₂e / tonne of goods" inputMode="decimal" value={pro.specificEmissions} onChange={e=>updatePro('specificEmissions',e.target.value)}/></label>
       <label><span>Emissions data method</span><select value={pro.emissionsMethod} onChange={e=>updatePro('emissionsMethod',e.target.value)}><option value="">Select status</option><option>Actual installation data</option><option>Applicable default values</option><option>Mixed / requires review</option><option>Not available yet</option></select></label>
       <label><span>Verification status</span><select value={pro.verificationStatus} onChange={e=>updatePro('verificationStatus',e.target.value)}><option value="">Select status</option><option>Verified / evidence available</option><option>Supplier evidence received</option><option>Pending supplier evidence</option><option>Not verified</option></select></label>
       <label className="wide"><span>Internal notes <em>Optional</em></span><input placeholder="Reference, supplier follow-up or review note" value={pro.notes} onChange={e=>updatePro('notes',e.target.value)}/></label>
      </div>
      <div className="proDataSummary"><div><span>IMPORTER</span><b>{pro.importer||'Not provided'}</b></div><div><span>SUPPLIER</span><b>{pro.supplier||'Not provided'}</b></div><div><span>INSTALLATION</span><b>{pro.installation||'Not provided'}</b></div><div><span>REPORTING PERIOD</span><b>{pro.reportingPeriod||'Not provided'}</b></div><div><span>PRODUCTION ROUTE</span><b>{pro.productionRoute||'Not provided'}</b></div><div><span>INTERNAL NOTE</span><b>{pro.notes||'Not provided'}</b></div></div>
      <div className="emissionsSummary">
       <div className="emissionsTitle"><span>EMBEDDED EMISSIONS DATA</span><b>Professional data summary</b></div>
       <div className="emissionsGrid"><div><span>DIRECT</span><b>{pro.directEmissions||'Not provided'} {pro.directEmissions&&'tCO₂e'}</b></div><div><span>INDIRECT</span><b>{pro.indirectEmissions||'Not provided'} {pro.indirectEmissions&&'tCO₂e'}</b></div><div><span>PRECURSOR</span><b>{pro.precursorEmissions||'Not provided'} {pro.precursorEmissions&&'tCO₂e'}</b></div><div><span>SPECIFIC EMBEDDED</span><b>{pro.specificEmissions||'Not provided'} {pro.specificEmissions&&'tCO₂e/t'}</b></div><div><span>DATA METHOD</span><b>{pro.emissionsMethod||'Not provided'}</b></div><div><span>VERIFICATION</span><b>{pro.verificationStatus||'Not provided'}</b></div></div>
       <p className="emissionsCaution">Entered values are user-supplied working data and are not independently verified by CBAMSearch.</p>
      </div>
     </div>}
     {plan==='professional'&&<div className="professionalSections">
      <div className="proLabel">PROFESSIONAL REPORT CONTENT</div>
      <div className="proGrid">
       <section><h3>Compliance evidence checklist</h3><ul><li>Confirmed full CN classification</li><li>Country and installation identification</li><li>Production route / process information</li><li>Direct embedded emissions data</li><li>Indirect emissions data where applicable</li><li>Supporting methodology and source records</li></ul></section>
       <section><h3>Supplier data checklist</h3><ul><li>Supplier and installation details</li><li>Reporting period</li><li>Product quantity and unit</li><li>Relevant precursor information</li><li>Actual or applicable default emissions data</li><li>Verification/supporting documentation status</li></ul></section>
      </div>
      <div className="proGuidance"><h3>Professional review notes</h3><p>Use this section to organize the evidence needed after the initial scope screening. A complete CBAM submission can require additional product, installation, emissions, verification and importer-specific information depending on the applicable rules and reporting period.</p></div>
     </div>}
     {plan==='professional'&&!previewOpen&&<div className="proPaywall"><span>PROFESSIONAL PREVIEW</span><h3>Your report structure is ready.</h3><p>Review the assessment and entered data above. The clean final report is intentionally locked until payment is connected.</p><div className="proPaywallFeatures"><b>Clean PDF</b><b>No free watermark</b><b>Evidence checklist</b><b>Supplier & emissions data</b></div><button className="btn" onClick={()=>setPreviewOpen(true)}>Preview report layout</button></div>}
     {plan==='professional'&&previewOpen&&<div className="proPreviewNotice"><b>Preview mode</b><span>This preview is not the paid downloadable report. Payment will unlock the clean PDF.</span></div>}
     {plan==='professional'&&<div className="draftBar"><button onClick={saveDraft}>Save report draft</button><span>{saved?'Draft saved in this browser':'Your report data can be kept while you continue to checkout.'}</span></div>}
     <div className="reportActions">{plan==='free'?<><button className="btn" onClick={()=>window.print()}>Print Free — Watermarked</button><Link className="btn secondaryBtn" href="/pricing/">Download PDF — Upgrade</Link></>:<><button className="btn" onClick={()=>setPreviewOpen(true)}>Preview Professional Report</button><button className="btn secondaryBtn" onClick={goToCheckout}>Unlock Clean PDF — €49</button></>}</div>
     {plan==='free'&&<div className="downloadNote"><b>Free printing includes a CBAMSearch watermark.</b><span> Upgrade for a clean downloadable PDF without the free-version watermark.</span></div>}
    </div>}
   </div>
   <aside className="reportAside">
    <div className="asideCard"><span className="sideKicker">WHAT YOU GET</span><h3>Preliminary CBAM assessment</h3><p>Use the result to organize your next compliance checks.</p><ul><li>CN classification match</li><li>CBAM sector indication</li><li>Gas category reference</li><li>Watermarked free print</li></ul></div>
    <div className="asideCard reportUpgrade"><span className="planBadge">PDF REPORT</span><h3>Need a downloadable copy?</h3><p>Upgrade when you need a saved PDF for your files, supplier follow-up or internal review.</p><Link href="/pricing/">View report options →</Link></div>
   </aside>
  </div></section>
 </main>
}