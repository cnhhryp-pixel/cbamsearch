"use client";
import {useEffect,useState} from 'react';
import {createClient} from '@supabase/supabase-js';
import Link from 'next/link';

export default function Page(){
const [status,setStatus]=useState('Checking account session...');
const [projects,setProjects]=useState([]);

useEffect(()=>{
async function load(){
 const url=process.env.NEXT_PUBLIC_SUPABASE_URL;
 const key=process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
 if(!url||!key){setStatus('Supabase connection required.');return;}
 const supabase=createClient(url,key);
 const {data:{user}}=await supabase.auth.getUser();
 if(!user){setStatus('Please login to view your workspace.');return;}
 const {data,error}=await supabase.from('projects').select('*').eq('user_id',user.id).order('created_at',{ascending:false});
 if(error){setStatus(error.message);return;}
 setProjects(data||[]);
 setStatus('Workspace ready.');
}
load();
},[]);

return <main className="section"><div className="wrap"><div className="eyebrow">CBAM WORKSPACE</div><h1>CBAM Dashboard</h1><p className="lead">Manage your CBAM assessments, reports and compliance projects in one workspace.</p><div className="notice"><p>{status}</p></div><div className="grid"><div className="card"><h2>Projects</h2><p>Manage product assessments and CBAM review projects.</p><Link href="/cbam-report">+ New Assessment</Link></div><div className="card"><h2>Reports</h2><p>View generated CBAM assessment reports and payment status.</p><Link href="/dashboard/reports">Open Reports</Link></div><div className="card"><h2>Account Plan</h2><p>Current plan: Free</p><p>Upgrade to Professional Report: €49</p><Link href="/pricing">View Upgrade Options</Link></div></div><section className="section"><div className="notice"><h2>My Assessments</h2>{projects.length===0?<p>No assessments created yet.</p>:projects.map((p,i)=><div key={i}><b>{p.product_name}</b><p>{p.cn_code} · {p.country_origin}</p><small>{p.status}</small></div>)}</div></section></div></main>}
