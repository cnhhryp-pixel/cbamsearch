"use client";
import {useState} from 'react';
import {supabaseConfig} from '../../lib/supabase';

export default function Page(){const [form,setForm]=useState({name:'',company:'',email:'',password:''});const [message,setMessage]=useState('');
function update(key,value){setForm({...form,[key]:value})}
async function register(){if(!supabaseConfig.url||!supabaseConfig.anonKey){setMessage('Supabase environment variables are required.');return;}setMessage('Registration connection ready.');}
return <main className="section"><div className="wrap"><div className="eyebrow">CREATE ACCOUNT</div><h1>Create your CBAMSearch account</h1><p className="lead">Save assessments, manage reports and organize your CBAM compliance projects.</p><div className="card"><label>Name</label><input value={form.name} onChange={e=>update('name',e.target.value)} placeholder="Your name"/><label>Company</label><input value={form.company} onChange={e=>update('company',e.target.value)} placeholder="Company name"/><label>Email</label><input value={form.email} onChange={e=>update('email',e.target.value)} placeholder="Business email"/><label>Password</label><input value={form.password} onChange={e=>update('password',e.target.value)} type="password" placeholder="Password"/><button onClick={register}>Create Account</button><p>{message}</p></div></div></main>}