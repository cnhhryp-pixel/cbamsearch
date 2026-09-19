"use client";
import {useEffect,useState} from 'react';
import {createClient} from '@supabase/supabase-js';

export default function ReportsPage(){
 const [reports,setReports]=useState([]);
 const [status,setStatus]=useState('Loading reports...');
 useEffect(()=>{async function load(){const url=process.env.NEXT_PUBLIC_SUPABASE_URL;const key=process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;if(!url||!key){setStatus('Supabase connection required.');return;}const supabase=createClient(url,key);const {data:{user}}=await supabase.auth.getUser();if(!user){setStatus('Please login first.');return;}const {data,error}=await supabase.from('reports').select('*').eq('user_id',user.id).order('created_at',{ascending:false});if(error){setStatus(error.message);return;}setReports(data||[]);setStatus('Reports ready.');}load();},[]);
 return <main className="section"><div className="wrap"><div className="eyebrow">REPORTS</div><h1>My CBAM Reports</h1><p className="lead">View generated CBAM compliance reports and payment status.</p><div className="notice"><p>{status}</p></div>{reports.length===0?<div className="card"><p>No reports created yet.</p></div>:reports.map((r,i)=><div className="card" key={i}><h2>CBAM Assessment Report</h2><p>Status: {r.status}</p><p>Payment: {r.payment_status}</p><p>Price: €{r.price}</p></div>)}</div></main>
}
