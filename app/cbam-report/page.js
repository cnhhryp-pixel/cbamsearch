"use client";
import {useState} from 'react';
import {createClient} from '@supabase/supabase-js';

export default function Page(){
 const [form,setForm]=useState({product:'',cn:'',country:'',sector:'',quantity:'',emissions:''});
 const [message,setMessage]=useState('');
 const update=(k,v)=>setForm({...form,[k]:v});
 async function saveAssessment(){
  const url=process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key=process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if(!url||!key){setMessage('System configuration required.');return;}
  const supabase=createClient(url,key);
  const {data:{user}}=await supabase.auth.getUser();
  if(!user){setMessage('Please login before creating an assessment.');return;}
  const {error}=await supabase.from('projects').insert({user_id:user.id,product_name:form.product,cn_code:form.cn,country_origin:form.country,sector:form.sector,quantity:form.quantity,status:'draft'});
  if(error){setMessage(error.message);return;}
  setMessage('Assessment created successfully. Continue to professional report.');
 }
 const Field=({name,placeholder})=><input value={form[name]} placeholder={placeholder} onChange={e=>update(name,e.target.value)}/>;
 return <main className="section"><div className="wrap"><div className="eyebrow">CBAM REPORT GENERATOR</div><h1>Create Your CBAM Compliance Assessment</h1><p className="lead">Analyze your imported products, CN codes and CBAM reporting requirements.</p><div className="steps"><div>01 Product</div><div>02 Import Data</div><div>03 Report</div></div><div className="card"><h2>Product Information</h2><div className="grid"><Field name="product" placeholder="Product name"/><Field name="cn" placeholder="CN Code (Example: 7318.15)"/><Field name="country" placeholder="Country of origin"/></div></div><div className="card"><h2>CBAM Assessment Details</h2><div className="grid"><Field name="sector" placeholder="Sector (Steel / Aluminium)"/><Field name="quantity" placeholder="Annual quantity"/><Field name="emissions" placeholder="Emission data availability"/></div></div><button onClick={saveAssessment}>Generate Free Assessment</button><p>{message}</p><div className="card premium"><h2>Professional CBAM Report</h2><p>Get a detailed PDF compliance report with CN code review, CBAM analysis and report history.</p><strong>Starting from €49</strong><br/><a href="/pricing">Upgrade to Professional Report</a></div></div></main>
}
