"use client";
import {useState} from 'react';
import {createClient} from '@supabase/supabase-js';

export default function Page(){
 const [form,setForm]=useState({product:'',cn:'',country:'',sector:'',quantity:'',emissions:'',name:'',company:'',email:'',details:''});
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
  setMessage('Assessment saved. You can continue to purchase the professional report.');
 }
 return <main className="section"><div className="wrap"><div className="eyebrow">CBAM ASSESSMENT</div><h1>Start Your CBAM Compliance Assessment</h1><p className="lead">Evaluate products, CN codes and import scenarios before purchasing a detailed report.</p><div className="grid"><div className="card"><h2>Product Details</h2><input placeholder="Product name" onChange={e=>update('product',e.target.value)}/><input placeholder="CN Code" onChange={e=>update('cn',e.target.value)}/><input placeholder="Country of origin" onChange={e=>update('country',e.target.value)}/></div><div className="card"><h2>CBAM Data</h2><input placeholder="Sector" onChange={e=>update('sector',e.target.value)}/><input placeholder="Quantity" onChange={e=>update('quantity',e.target.value)}/><input placeholder="Emission data available?" onChange={e=>update('emissions',e.target.value)}/></div></div><button onClick={saveAssessment}>Create Assessment</button><p>{message}</p><div className="card"><h2>Professional CBAM Report</h2><p>Detailed compliance report from €49</p><a href="/pricing">View Report Options</a></div></div></main>
}
