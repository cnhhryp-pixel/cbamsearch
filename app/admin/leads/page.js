"use client";
import {useEffect,useState} from 'react';

export default function LeadsPage(){
 const [leads,setLeads]=useState([]);
 const [status,setStatus]=useState('Loading leads...');
 useEffect(()=>{
  fetch('/api/admin/leads').then(r=>r.json()).then(data=>{
   if(data.success){setLeads(data.leads);setStatus('Leads ready.');}
   else setStatus(data.message||'Error');
  });
 },[]);
 return <main className="section"><div className="wrap"><div className="eyebrow">CRM</div><h1>Lead Dashboard</h1><p>{status}</p><div className="card">{leads.length===0?<p>No leads yet.</p>:leads.map((lead,i)=><div key={i}><h3>{lead.company||lead.name}</h3><p>{lead.email}</p><p>{lead.product} · {lead.country}</p><small>{lead.created_at}</small></div>)}</div></div></main>
}
