"use client";
import {useEffect,useState} from 'react';
import {createClient} from '@supabase/supabase-js';
import Link from 'next/link';

export default function Page(){
 const [status,setStatus]=useState('Checking account session...');
 const [projects,setProjects]=useState([]);

 useEffect(()=>{
 async function load(){
  const supabase=createClient(process.env.NEXT_PUBLIC_SUPABASE_URL,process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
  const {data:{user}}=await supabase.auth.getUser();
  if(!user){setStatus('Please login to view your workspace.');return;}
  const {data,error}=await supabase.from('projects').select('*').eq('user_id',user.id).order('created_at',{ascending:false});
  if(error){setStatus(error.message);return;}
  setProjects(data||[]);
  setStatus('Workspace ready.');
 }
 load();
 },[]);

 return <main className="section"><div className="wrap">
 <div className="eyebrow">CBAM WORKSPACE</div>
 <h1>Compliance Management Dashboard</h1>
 <p className="lead">Manage assessments, purchased reports and EU CBAM compliance documents.</p>
 <div className="grid">
  <div className="card"><h2>New Assessment</h2><p>Create a CBAM product assessment.</p><Link href="/cbam-report">Start Assessment</Link></div>
  <div className="card"><h2>My Reports</h2><p>Access purchased compliance reports.</p><Link href="/dashboard/reports">View Reports</Link></div>
  <div className="card"><h2>Professional Report</h2><p>Generate detailed CBAM documentation.</p><Link href="/pricing">Upgrade €49</Link></div>
 </div>
 <div className="notice"><p>{status}</p><h2>Recent Assessments</h2>{projects.length===0?<p>No assessments created yet.</p>:projects.map((p,i)=><div key={i}><b>{p.product_name}</b><p>{p.cn_code} · {p.country_origin}</p></div>)}</div>
 </div></main>
}
