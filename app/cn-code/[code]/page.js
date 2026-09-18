import { cbamCodes } from '../../../data/cbam-codes';
import { notFound } from 'next/navigation';
import Breadcrumbs from '../../components/Breadcrumbs';
import ToolLinks from '../../components/ToolLinks';

export function generateStaticParams(){return cbamCodes.map(x=>({code:x.code}))}
export function generateMetadata({params}){const x=cbamCodes.find(i=>i.code===params.code);return x?{title:`${x.display} — ${x.name} | CBAM CN Code`,description:`Check EU CBAM scope information for ${x.display}, ${x.name}. Sector: ${x.sector}.`,alternates:{canonical:`/cn-code/${x.code}/`}}:{}}

export default function Page({params}){
  const x=cbamCodes.find(i=>i.code===params.code);if(!x)notFound();
  const exclusions=(x.excludedCodes||[]).map(code=>code.replace(/\s/g,''));
  const isBroad=['Chapter','Heading','Subheading'].includes(x.level);
  return <main className="section"><div className="wrap">
    <Breadcrumbs items={[{name:'CN Code',href:'/cn-code/'},{name:x.display,href:`/cn-code/${x.code}/`}]} />
    <div className="eyebrow">{x.sector} · {x.level}</div><h1>{x.display}</h1><p className="lead">{x.name}</p>
    <div className="grid">
      <div className="card"><span>CBAM scope</span><div className="metric">{isBroad?'Listed scope':'Covered record'}</div><p>{isBroad?'This broader classification is represented in the Annex I dataset. A more specific CN code may be required for a final classification.':'This record maps to a code listed in the current CBAM scope dataset.'}</p></div>
      <div className="card"><span>Sector</span><div className="metric smallmetric">{x.sector}</div><p>CBAM sector associated with this classification.</p></div>
      <div className="card"><span>Greenhouse gas</span><div className="metric smallmetric">{x.gas}</div><p>Gas category stored for this scope record.</p></div>
    </div>
    {exclusions.length>0&&<section className="sourcebox"><b>Important exclusions under this parent classification</b><p>Do not treat every product under {x.display} as automatically covered. The dataset records these excluded code prefixes:</p><p><strong>{exclusions.join(' · ')}</strong></p><p>Use the exact CN code in the Scope Checker before relying on the parent heading.</p><a href="/cbam-checker/">Check an exact CN code →</a></section>}
    <ToolLinks />
    <div className="sourcebox"><b>Source & methodology</b><p>Primary scope reference: Regulation (EU) 2023/956, Annex I. This page is informational; exact customs classification and current scope should be verified using current EU legislation and customs classification sources.</p><p><b>Dataset updated:</b> 18 September 2026 · <b>Method:</b> exact-code, prefix and recorded-exclusion mapping.</p><a href="https://eur-lex.europa.eu/eli/reg/2023/956/oj">View primary legislation →</a></div>
  </div></main>
}