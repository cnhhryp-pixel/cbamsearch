"use client";
import {useState} from 'react';
import {createClient} from '@supabase/supabase-js';

export default function Page(){
 const [form,setForm]=useState({product:'',cn:'',country:'',sector:'',quantity:'',emissions:''});
 const [message,setMessage]=useState('');
 const update=(k,v)=>setForm({...form,[k]:v});
 async function saveAssessment(){
  const url=process.env.NEXT_PUBLIC_SUPABASE_URL,key=process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if(!url||!key){setMessage('Assessment saving is being configured. You can still use the free research tools.');return;}
  const supabase=createClient(url,key);
  const {data:{user}}=await supabase.auth.getUser();
  if(!user){setMessage('Please sign in before saving this assessment.');return;}
  const {error}=await supabase.from('projects').insert({user_id:user.id,product_name:form.product,cn_code:form.cn,country_origin:form.country,sector:form.sector,quantity:form.quantity,status:'draft'});
  setMessage(error?error.message:'Assessment saved. You can now continue to your professional report.');
 }
 return <main className="assessmentPage"><section className="assessmentHero"><div className="wrap assessmentHeroGrid"><div><div className="eyebrow">CBAM ASSESSMENT</div><h1>Build a clearer CBAM picture for your product.</h1><p className="lead">Capture the classification, origin and import scenario in a structured workspace before moving to detailed emissions and reporting work.</p><div className="trustRow"><span>Free to start</span><span>Save scenarios</span><span>Professional report option</span></div></div><div className="assessmentSummary"><span>Assessment flow</span><b>Product → Import → Emissions → Report</b><p>Start with the information you already have. Missing data can be completed later.</p></div></div></section>
 <section className="section"><div className="wrap assessmentLayout"><div>
  <div className="formProgress"><span className="active">1 Product</span><span>2 Import data</span><span>3 Emissions</span><span>4 Report</span></div>
  <div className="formCard"><div className="formCardHead"><span>01</span><div><h2>Product & classification</h2><p>Identify the goods and the classification you currently use.</p></div></div><div className="formGrid"><label>Product name<input value={form.product} onChange={e=>update('product',e.target.value)} placeholder="e.g. Aluminium foil"/></label><label>CN code<input value={form.cn} onChange={e=>update('cn',e.target.value)} placeholder="e.g. 7607"/></label><label>Country of origin<input value={form.country} onChange={e=>update('country',e.target.value)} placeholder="e.g. China"/></label></div></div>
  <div className="formCard"><div className="formCardHead"><span>02</span><div><h2>Import & emissions data</h2><p>Add the commercial and emissions information available today.</p></div></div><div className="formGrid"><label>CBAM sector<input value={form.sector} onChange={e=>update('sector',e.target.value)} placeholder="e.g. Aluminium"/></label><label>Annual quantity<input value={form.quantity} onChange={e=>update('quantity',e.target.value)} placeholder="e.g. 100 tonnes"/></label><label>Emissions data<input value={form.emissions} onChange={e=>update('emissions',e.target.value)} placeholder="Available / Not available"/></label></div></div>
  <button className="primaryAction" onClick={saveAssessment}>Save Free Assessment →</button>{message&&<div className="formMessage">{message}</div>}
 </div><aside className="assessmentAside"><div className="asideCard"><div className="eyebrow">WHAT YOU GET</div><h3>Free assessment workspace</h3><ul><li>Product scenario record</li><li>CN code and origin details</li><li>CBAM sector context</li><li>Path to calculation tools</li></ul><a href="/cbam-calculator/">Open calculator →</a></div><div className="asideCard premiumAside"><span className="planBadge">PROFESSIONAL</span><h3>Need a client-ready report?</h3><p>Upgrade a completed scenario to a structured professional CBAM assessment.</p><strong>From €49</strong><a className="btn lightBtn" href="/pricing/">View report options</a></div></aside></div></section></main>
}