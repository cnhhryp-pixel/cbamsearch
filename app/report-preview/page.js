import Link from 'next/link';

export const metadata={
 title:'CBAM Professional Report Sample',
 description:'Preview the structure of a CBAMSearch Professional Assessment Report before purchase.',
 alternates:{canonical:'/report-preview/'},
 robots:{index:true,follow:true}
};

export default function ReportPreview(){return <main>
 <section className="detailHero"><div className="wrap"><div className="eyebrow">SAMPLE REPORT</div><h1>Preview the CBAM Professional Assessment Report.</h1><p className="lead">See the structure, data sections and compliance-preparation content included in the €49 Professional Report before you purchase.</p><div className="heroActions"><Link className="btn" href="/cbam-report/?plan=professional">Create Professional Report</Link><Link className="btn secondaryBtn" href="/pricing/">View pricing</Link></div></div></section>
 <section className="section"><div className="wrap sampleReportGrid">
  <div className="sampleReportPage">
   <div className="sampleReportBrand">CBAMSearch</div><span>PROFESSIONAL ASSESSMENT REPORT</span><h2>CBAM Professional Assessment Report</h2>
   <div className="sampleMeta"><div><small>REPORT ID</small><b>CBS-2026-00123456</b></div><div><small>GENERATED</small><b>25 Sep 2026</b></div></div>
   <div className="sampleSummary"><div><small>PRODUCT</small><b>Aluminium profile</b></div><div><small>CN CODE</small><b>7604</b></div><div><small>ORIGIN</small><b>China</b></div><div><small>SECTOR</small><b>Aluminium</b></div></div>
   <div className="sampleSection"><h3>Assessment interpretation</h3><p>The report organizes classification, scope, supplier and embedded-emissions information into one structured review document.</p></div>
   <div className="sampleSection"><h3>Supplier & installation data</h3><div className="sampleRows"><span>Supplier information</span><b>Included</b><span>Installation / plant</span><b>Included</b><span>Production route</span><b>Included</b></div></div>
   <div className="sampleSection"><h3>Embedded emissions worksheet</h3><div className="sampleRows"><span>Direct emissions</span><b>Working field</b><span>Indirect emissions</span><b>Working field</b><span>Verification status</span><b>Tracked</b></div></div>
   <div className="sampleSection"><h3>Compliance preparation checklist</h3><ul><li>CN classification confirmation</li><li>Supplier and installation evidence</li><li>Emissions data preparation</li><li>Supporting documentation review</li></ul></div>
   <p className="sampleDisclaimer">Sample only. CBAMSearch is an independent preparation tool and does not replace official EU filings, customs decisions or professional legal advice.</p>
  </div>
  <aside className="sampleAside"><div className="asideCard"><span className="sideKicker">€49 ONE-TIME</span><h3>Professional Report</h3><p>Prepare the report first, review the order, then continue securely to PayPal.</p><ul><li>Clean PDF without free watermark</li><li>Supplier data section</li><li>Embedded emissions worksheet</li><li>Compliance evidence checklist</li></ul><Link className="btn" href="/cbam-report/?plan=professional">Create Professional Report</Link></div></aside>
 </div></section>
 </main>}