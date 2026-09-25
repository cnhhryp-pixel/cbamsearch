"use client";
import {useState} from 'react';

export default function RequestReport(){
 const [form,setForm]=useState({name:'',email:'',company:'',product:'',cn_code:'',country:''});
 const change=e=>setForm({...form,[e.target.name]:e.target.value});
 function submit(e){
  e.preventDefault();
  const subject=encodeURIComponent('CBAM Assessment Request — '+(form.company||form.name||'New enquiry'));
  const body=encodeURIComponent(
   'Name: '+form.name+'\n'+
   'Company: '+form.company+'\n'+
   'Email: '+form.email+'\n'+
   'Product: '+form.product+'\n'+
   'CN Code: '+form.cn_code+'\n'+
   'Country of Origin: '+form.country+'\n\n'+
   'Please reply with the next steps for this CBAM assessment.'
  );
  window.location.href='mailto:cnhhryp@gmail.com?subject='+subject+'&body='+body;
 }
 return <main><section className="detailHero"><div className="wrap"><div className="eyebrow">REQUEST ASSESSMENT</div><h1>Send a structured CBAM assessment request.</h1><p className="lead">Use this form when you prefer to send the product details directly instead of building the report yourself.</p></div></section><section className="section"><div className="wrap enterpriseLayout"><form className="formCard" onSubmit={submit}><div className="formCardHead"><span>01</span><div><h2>Product & company details</h2><p>Your email client will open with the request prepared. No server submission is required.</p></div></div><div className="enterpriseForm"><label>Your name<input required name="name" value={form.name} onChange={change}/></label><label>Business email<input required type="email" name="email" value={form.email} onChange={change}/></label><label>Company<input name="company" value={form.company} onChange={change}/></label><label>Product name<textarea required name="product" value={form.product} onChange={change}/></label><label>CN Code<input name="cn_code" value={form.cn_code} onChange={change} placeholder="Optional"/></label><label>Country of origin<input name="country" value={form.country} onChange={change}/></label></div><button className="primaryAction" type="submit">Prepare assessment email →</button></form><aside className="asideCard"><span className="sideKicker">SELF-SERVICE</span><h3>Prefer to build it now?</h3><p>The report builder lets you assess a product in the browser and continue to the Professional Report when needed.</p><a href="/cbam-report/?plan=free">Start free assessment →</a></aside></div></section></main>
}