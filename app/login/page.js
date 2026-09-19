"use client";
import {useState} from 'react';
import {createClient} from '@supabase/supabase-js';
import {useRouter} from 'next/navigation';

export default function Page(){const [email,setEmail]=useState('');const [password,setPassword]=useState('');const [message,setMessage]=useState('');const router=useRouter();
async function login(){const url=process.env.NEXT_PUBLIC_SUPABASE_URL;const key=process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;if(!url||!key){setMessage('Supabase environment variables are required.');return;}const supabase=createClient(url,key);const {error}=await supabase.auth.signInWithPassword({email,password});if(error){setMessage(error.message);return;}setMessage('Login successful.');router.push('/dashboard');}
return <main className="section"><div className="wrap"><div className="eyebrow">ACCOUNT</div><h1>Login to CBAMSearch</h1><p className="lead">Access your CBAM assessments, reports and compliance workspace.</p><div className="card"><label>Email</label><input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Business email"/><label>Password</label><input value={password} onChange={e=>setPassword(e.target.value)} type="password" placeholder="Password"/><button onClick={login}>Login</button><p>{message}</p></div></div></main>}