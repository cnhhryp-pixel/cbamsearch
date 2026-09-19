"use client";
import {useEffect,useState} from 'react';
import {createClient} from '@supabase/supabase-js';

export default function ReportsPage(){
 const [reports,setReports]=useState([]);
 const [status,setStatus]=useState('Loading reports...');

 useEffect(()=>{
  async function load(){
   const url=process.env.NEXT_PUBLIC_SUPABASE_URL;
   const key=process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
   if(!url||!key){setStatus('Supabase connection required.');return;}
   const supabase=createClient(url,key);
   const {data:{user}}=await supabase.auth.getUser();
   if(!user){setStatus('Please login first.');return;}
   const {data,error}=await supabase.from('reports').select('*').eq('user_id',user.id).order('created_at',{ascending:false});
   if(error){setStatus(error.message);return;}
   setReports(data||[]);
   setStatus('Reports ready.');
  }
  load();
 },[]);

 return <main className="section"><div className="wrap"><div className="eyebrow">REPORTS</div><h1>My CBAM Reports</h1><p className="lead">Access your CBAM compliance reports.</p><div className="notice"><p>{status}</p></div>{reports.length===0?<div className="card"><p>No reports created yet.</p></div>:reports.map(report=><div className="card" key={report.id}><h2>{report.product_name||'CBAM Assessment Report'}</h2><p>CN Code: {report.cn_code||'-'}</p><p>Status: {report.status}</p><p>Version: {report.version||1}</p>{report.status==='paid'&&<a href={`/api/reports/download?id=${report.id}`}>Download PDF</a>}</div>)}</div></main>
}
