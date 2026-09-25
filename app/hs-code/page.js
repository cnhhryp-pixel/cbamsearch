export const metadata={
 title:'HS Code to CBAM Lookup — Find the EU CN Code',
 description:'Start with an HS code or product description, identify the EU CN classification and continue to a CBAM scope check.',
 alternates:{canonical:'/hs-code/'}
};
export default function Page(){return <main>
 <section className="toolHero"><div className="wrap toolHeroGrid"><div><div className="eyebrow">HS → EU CN CLASSIFICATION</div><h1>Use an HS code as the starting point for a CBAM check.</h1><p className="lead">CBAM scope is assessed using EU Combined Nomenclature classifications. If you only know a 4- or 6-digit HS code, use it to narrow the search and identify the more specific EU CN code that applies to the imported goods.</p><div className="heroActions"><a className="btn" href="/cn-code/">Search CN codes</a><a className="btn secondaryBtn" href="/cbam-checker/">Open scope checker</a></div></div><div className="toolFlow"><span>HS CODE STARTING POINT</span><b>HS narrows the search; CN supports the EU scope check.</b><p>Do not treat a broad HS heading as the final EU customs classification where a more specific CN code is required.</p></div></div></section>
 <section className="section"><div className="wrap">
  <div className="countryWorkflow threeSteps"><div><span>01</span><h3>Enter the HS prefix</h3><p>Search the 4- or 6-digit HS code, or use a clear product description if the code is uncertain.</p></div><div><span>02</span><h3>Identify the EU CN record</h3><p>Review the relevant EU CN classifications and choose the code that matches the actual imported goods.</p></div><div><span>03</span><h3>Check CBAM scope</h3><p>Use the specific CN code in the scope checker before moving to emissions and cost calculations.</p></div></div>
  <div className="detailConversion"><div><div className="eyebrow lightEyebrow">NEXT STEP</div><h2>Search the CBAM classification database.</h2><p>Use a code, prefix or product name and continue directly into scope checking.</p></div><a className="btn lightBtn" href="/cn-code/">Search CN database →</a></div>
 </div></section>
 </main>}