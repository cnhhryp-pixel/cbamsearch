import Link from 'next/link';

export default function Page(){
 return <main className="section"><div className="wrap"><div className="eyebrow">GET STARTED</div><h1>Start without an account</h1><p className="lead">Account registration is not required for the static CBAMSearch workflow.</p><div className="card"><p>Go directly to the CBAM report builder. Generate and print your report in the browser.</p><Link className="btn" href="/cbam-report/?plan=free">Start free assessment</Link></div></div></main>
}