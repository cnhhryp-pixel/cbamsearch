"use client";
import {useState} from 'react';
import {supabaseConfig} from '../../lib/supabase';

export default function Page(){const [email,setEmail]=useState('');const [password,setPassword]=useState('');const [message,setMessage]=useState('');
async function login(){if(!supabaseConfig.url||!supabaseConfig.anonKey){setMessage('Supabase environment variables are required.');return;}setMessage('Authentication connection ready.');}
return <main className="section"><div className="wrap"><div className="eyebrow">ACCOUNT</div><h1>Login to CBAMSearch</h1><p className="lead">Access your CBAM assessments, reports and compliance workspace.</p><div className="card"><label>Email</label><input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Business email"/><label>Password</label><input value={password} onChange={e=>setPassword(e.target.value)} type="password" placeholder="Password"/><button onClick={login}>Login</button><p>{message}</p></div></div></main>}