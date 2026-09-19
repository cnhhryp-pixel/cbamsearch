"use client";
import {useState} from 'react';

export default function RequestReport(){
 const [status,setStatus]=useState('');
 async function submit(e){
  e.preventDefault();
  setStatus('Thank you. We will prepare your CBAM report request.');
 }
 return <main className="section"><div className="wrap"><div className="eyebrow">REQUEST REPORT</div><h1>Request a CBAM Assessment</h1><p className="lead">Leave your product details and we will help prepare a CBAM compliance assessment.</p><form className="card" onSubmit={submit}><input placeholder="Name"/><input placeholder="Company Email"/><input placeholder="Company"/><input placeholder="Product Name"/><input placeholder="CN Code (optional)"/><input placeholder="Country of Origin"/><button type="submit">Request Assessment</button><p>{status}</p></form></div></main>
}
