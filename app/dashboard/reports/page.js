import Link from 'next/link';

export default function ReportsPage(){
 return <main className="section"><div className="wrap"><div className="eyebrow">REPORTS</div><h1>CBAM Reports</h1><p className="lead">Reports are generated directly in your browser in the static CBAMSearch workflow.</p><div className="card"><h2>Create a new report</h2><p>No login or Supabase connection is required. Generate your assessment, review the report and print it for free.</p><Link className="btn" href="/cbam-report/?plan=free">Create CBAM report</Link></div></div></main>
}