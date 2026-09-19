"use client";
import {useState} from 'react';

export default function RequestReport(){
 const [status,setStatus]=useState('');
 const [form,setForm]=useState({});
 function change(e){setForm({...form,[e.target.name]:e.target.value});}
 async function submit(e){
  e.preventDefault();
  const res=await fetch('/api/leads/create',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(form)});
  const data=await res.json();
  setStatus(data.success?'Thank you. Your CBAM assessment request has been received.':'Submission failed.');
 }
 return <main className="section"><div className="wrap"><div className="eyebrow">REQUEST REPORT</div><h1>Request a CBAM Assessment</h1><p className="lead">Leave your product details and we will help prepare a CBAM compliance assessment.</p><form className="card" onSubmit={submit}><input name="name" onChange={change} placeholder="Name"/><input name="email" onChange={change} placeholder="Company Email"/><input name="company" onChange={change} placeholder="Company"/><input name="product" onChange={change} placeholder="Product Name"/><input name="cn_code" onChange={change} placeholder="CN Code (optional)"/><input name="country" onChange={change} placeholder="Country of Origin"/><button type="submit">Request Assessment</button><p>{status}</p></form></div></main>
}
