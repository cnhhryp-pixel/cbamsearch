"use client";
import {useEffect,useState} from 'react';

const statuses=['new','contacted','quoted','paid','customer'];

export default function LeadsPage(){
 const [leads,setLeads]=useState([]);
 const [message,setMessage]=useState('Loading leads...');

 async function load(){
  const res=await fetch('/api/admin/leads');
  const data=await res.json();
  if(data.success){setLeads(data.leads||[]);setMessage('Leads ready.');}
  else setMessage(data.error||'Unable to load leads');
 }

 async function save(lead){
  await fetch('/api/admin/leads/update',{
   method:'POST',
   headers:{'Content-Type':'application/json'},
   body:JSON.stringify({id:lead.id,lead_status:lead.lead_status,notes:lead.notes})
  });
  setMessage('Lead updated.');
 }

 useEffect(()=>{load()},[]);

 return <main className="section"><div className="wrap"><div className="eyebrow">CRM</div><h1>Lead Management</h1><p className="lead">Manage CBAM assessment requests and customer follow-up.</p><div className="notice"><p>{message}</p></div>{leads.map(lead=><div className="card" key={lead.id}><h2>{lead.company||lead.name||'New Lead'}</h2><p>Email: {lead.email}</p><p>Product: {lead.product}</p><p>Country: {lead.country}</p><select value={lead.lead_status||'new'} onChange={e=>setLeads(leads.map(x=>x.id===lead.id?{...x,lead_status:e.target.value}:x))}>{statuses.map(s=><option key={s}>{s}</option>)}</select><textarea value={lead.notes||''} onChange={e=>setLeads(leads.map(x=>x.id===lead.id?{...x,notes:e.target.value}:x))}/><button onClick={()=>save(lead)}>Save</button></div>)}</div></main>
}
