import Link from 'next/link';

export default function Page(){
 return <main className="section"><div className="wrap"><div className="eyebrow">ACCOUNT</div><h1>No login required</h1><p className="lead">CBAMSearch has moved to a static browser-based workflow.</p><div className="card"><p>You can use the CBAM tools and generate a report without creating an account.</p><Link className="btn" href="/cbam-report/?plan=free">Create free report</Link></div></div></main>
}