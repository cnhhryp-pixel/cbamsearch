import{defaultValueSources}from'../../data/default-values-meta';

export const metadata={
 title:'CBAM Default Values — 2026 Definitive Regime',
 description:'Understand the EU CBAM default-value framework for 2026, including goods, indirect emissions, electricity and precursor rules.',
 alternates:{canonical:'/default-values/'}
};

export default function Page(){return <main>
 <section className="detailHero"><div className="wrap"><div className="eyebrow">2026 DEFINITIVE REGIME</div><h1>CBAM default values: source structure and current legal basis.</h1><p className="lead">Use the official default-value framework when the applicable CBAM rules permit default values instead of actual emissions data. Always match the product, country or territory, production route and reporting year to the current annex.</p><div className="detailActions"><a className="btn" href="/cbam-calculator/">Open calculator</a><a className="btn secondaryBtn" href="/guides/cbam-emissions-data/">Emissions data guide</a></div></div></section>
 <section className="section"><div className="wrap">
  <div className="detailStats"><div><span>Base regulation</span><strong>EU 2025/2621</strong></div><div><span>2026 amendment</span><strong>EU 2026/1740</strong></div><div><span>Use from</span><strong>1 Jan 2026</strong></div></div>
  <div className="warningBox"><b>Use the amended annexes</b><p>Implementing Regulation (EU) 2026/1740 replaced Annex I and Annex IV of Regulation (EU) 2025/2621 after corrections to selected default values. Do not rely on an older copied table without checking the current legal text.</p><span>CBAMSearch does not invent or fill missing legal values.</span></div>
  <div className="sectionLabel">DEFAULT-VALUE STRUCTURE</div><h2>Which annex applies?</h2>
  <div className="grid">{defaultValueSources.map(x=><div className="card" key={x.annex}><span className="chip">{x.annex}</span><h3>{x.title}</h3><p>{x.use}</p></div>)}</div>
  <div className="detailSection"><div className="sectionLabel">HOW TO USE DEFAULT VALUES</div><div className="countryWorkflow threeSteps"><div><span>01</span><h3>Confirm classification</h3><p>Identify the exact CN code and applicable CBAM sector before selecting a value.</p></div><div><span>02</span><h3>Match the legal row</h3><p>Check country or territory, production route, direct/indirect emissions and the applicable year or mark-up.</p></div><div><span>03</span><h3>Keep the source</h3><p>Record the regulation, annex, row and effective period used in your assessment.</p></div></div></div>
  <div className="sourceStrip"><div><b>Current legal references</b><p>Commission Implementing Regulation (EU) 2025/2621 establishes the default-value framework. Regulation (EU) 2026/1740 amended the annexes and applies from 1 January 2026.</p></div><div><a href="https://eur-lex.europa.eu/eli/reg_impl/2026/1740/oj/eng">2026 amendment →</a><a href="https://eur-lex.europa.eu/eli/reg_impl/2025/2621/oj/eng">Base regulation →</a></div></div>
 </div></section>
 </main>}