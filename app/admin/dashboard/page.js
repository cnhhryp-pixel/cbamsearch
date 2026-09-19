"use client";
import {useEffect,useState} from 'react';

export default function AdminDashboard(){
 const [stats,setStats]=useState({leads:0,newLeads:0,paidReports:0,revenue:0});
 const [status,setStatus]=useState('Loading dashboard...');

 useEffect(()=>{
  async function load(){
   const res=await fetch('/api/admin/leads');
   const data=await res.json();
   if(data.success){
    const leads=data.leads||[];
    setStats({
     leads:leads.length,
     newLeads:leads.filter(x=>!x.lead_status||x.lead_status==='new').length,
     paidReports:leads.filter(x=>x.lead_status==='paid'||x.lead_status==='customer').length,
     revenue:leads.filter(x=>x.lead_status==='paid'||x.lead_status==='customer').length*49
    });
    setStatus('Dashboard ready.');
   }else setStatus('Unable to load dashboard');
  }
  load();
 },[]);

 return <main className="section"><div className="wrap"><div className="eyebrow">ADMIN</div><h1>CBAM Business Dashboard</h1><p className="lead">Overview of leads, reports and sales activity.</p><div className="grid"><div className="card"><h2>Total Leads</h2><p>{stats.leads}</p></div><div className="card"><h2>New Leads</h2><p>{stats.newLeads}</p></div><div className="card"><h2>Paid Reports</h2><p>{stats.paidReports}</p></div><div className="card"><h2>Revenue</h2><p>€{stats.revenue}</p></div></div><div className="notice"><p>{status}</p></div></div></main>
}
