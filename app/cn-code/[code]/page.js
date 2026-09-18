import { cbamCodes } from '../../../data/cbam-codes';
import { notFound } from 'next/navigation';
import Breadcrumbs from '../../components/Breadcrumbs';
import ToolLinks from '../../components/ToolLinks';
import FAQ from '../../components/FAQ';

export function generateStaticParams(){return cbamCodes.map(x=>({code:x.code}))}
export function generateMetadata({params}){const x=cbamCodes.find(i=>i.code===params.code);return x?{title:`CN Code ${x.display} CBAM — ${x.name} Scope & Calculator`,description:`Check whether CN code ${x.display} (${x.name}) is in the EU CBAM scope. Review sector, classification guidance, exclusions and continue to the CBAM calculator.`,alternates:{canonical:`/cn-code/${x.code}/`},robots:{index:x.level==='CN'||x.level==='Subheading',follow:true}}:{}}

export default function Page({params}){
  const x=cbamCodes.find(i=>i.code===params.code);if(!x)notFound();
  const exclusions=(x.excludedCodes||[]).map(code=>code.replace(/\s/g,''));
  const isBroad=['Chapter','Heading','Subheading'].includes(x.level);
  const faqs=[
    {question:`Is CN code ${x.display} covered by CBAM?`,answer:isBroad?`${x.display} is represented as a broader classification in the CBAMSearch scope dataset. Check the exact CN code because narrower inclusions or exclusions may apply.`:`${x.display} is recorded in the CBAMSearch Annex I scope dataset under the ${x.sector} sector. Confirm the exact customs classification before relying on the result.`},
    {question:`Which CBAM sector is ${x.display} in?`,answer:`This record is classified under ${x.sector} in the CBAMSearch dataset.`},
    {question:'Can I calculate CBAM cost from the CN code alone?',answer:'No. The CN code is used to establish product scope and classification. A cost estimate also needs applicable embedded-emissions inputs, the relevant certificate price period and other applicable adjustments.'},
    {question:'What should I do if my product only matches a broad heading?',answer:'Determine the more specific CN classification used for the imported goods and check it against the applicable scope and exclusions before using the result for compliance planning.'}
  ];
  const related=cbamCodes.filter(i=>i.code!==x.code&&i.sector===x.sector).sort((a,b)=>{const ap=a.code.startsWith(x.code)||x.code.startsWith(a.code)?0:1;const bp=b.code.startsWith(x.code)||x.code.startsWith(b.code)?0:1;return ap-bp||a.code.localeCompare(b.code)}).slice(0,6);
  return <main className="section"><div className="wrap">
    <Breadcrumbs items={[{name:'CN Code',href:'/cn-code/'},{name:x.display,href:`/cn-code/${x.code}/`}]} />
    <div className="eyebrow">{x.sector} · {x.level}</div><h1>CN Code {x.display} — {x.name}</h1><p className="lead">Check the CBAM scope record, classification level, relevant exclusions and the next steps for estimating CBAM exposure for CN {x.display}.</p>
    <div className="grid">
      <div className="card"><span>CBAM scope</span><div className="metric">{isBroad?'Listed scope':'Covered record'}</div><p>{isBroad?'This broader classification is represented in the Annex I dataset. A more specific CN code may be required for a final classification.':'This record maps to a code listed in the current CBAM scope dataset.'}</p></div>
      <div className="card"><span>Sector</span><div className="metric smallmetric">{x.sector}</div><p>CBAM sector associated with this classification.</p></div>
      <div className="card"><span>Greenhouse gas</span><div className="metric smallmetric">{x.gas}</div><p>Gas category stored for this scope record.</p></div>
    </div>
    {exclusions.length>0&&<section className="sourcebox"><b>Important exclusions under this parent classification</b><p>Do not treat every product under {x.display} as automatically covered. The dataset records these excluded code prefixes:</p><p><strong>{exclusions.join(' · ')}</strong></p><p>Use the exact CN code in the Scope Checker before relying on the parent heading.</p><a href="/cbam-checker/">Check an exact CN code →</a></section>}
    <section>
      <div className="eyebrow">Classification guidance</div>
      <h2>How to use this CN code for CBAM</h2>
      <div className="grid">
        <div className="card"><b>1. Confirm the exact classification</b><p>Use the full CN classification used for the imported goods. Broader headings are useful for discovery but may contain narrower inclusions or exclusions.</p></div>
        <div className="card"><b>2. Check embedded emissions</b><p>Once scope is confirmed, determine the applicable embedded-emissions data path before estimating certificate exposure.</p></div>
        <div className="card"><b>3. Estimate the CBAM amount</b><p>Use the calculator only after classification and emissions inputs have been checked. Keep the source and period of each input.</p></div>
      </div>
    </section>
    {related.length>0&&<section><div className="eyebrow">Explore the same sector</div><h2>Related {x.sector} CN codes</h2><div className="results">{related.map(i=><a className="result" href={`/cn-code/${i.code}/`} key={i.code}><div><b>{i.display}</b><h3>{i.name}</h3></div><span className="chip">{i.level}</span></a>)}</div></section>}
    <FAQ items={faqs} />
    <ToolLinks />
    <div className="sourcebox"><b>Source & methodology</b><p>Primary scope reference: Regulation (EU) 2023/956, Annex I. This page is informational; exact customs classification and current scope should be verified using current EU legislation and customs classification sources.</p><p><b>Dataset updated:</b> 18 September 2026 · <b>Method:</b> exact-code, prefix and recorded-exclusion mapping.</p><a href="https://eur-lex.europa.eu/eli/reg/2023/956/oj">View primary legislation →</a></div>
  </div></main>
}