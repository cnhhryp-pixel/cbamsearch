import { sectors } from '../../../data/sectors';
import { cbamCodes } from '../../../data/cbam-codes';
import { countryProductPages } from '../../../data/country-product-pages';
import { notFound } from 'next/navigation';
import Breadcrumbs from '../../components/Breadcrumbs';
import FAQ from '../../components/FAQ';
import ToolLinks from '../../components/ToolLinks';

export function generateStaticParams(){return sectors.map(x=>({sector:x.slug}))}
export function generateMetadata({params}){const s=sectors.find(x=>x.slug===params.sector);return s?{title:`${s.name} CBAM — CN Codes, Scope & Calculator`,description:`Check EU CBAM for ${s.name.toLowerCase()}: search relevant CN codes, review classification and emissions inputs, and continue to the CBAM calculator.`,alternates:{canonical:`/products/${s.slug}/`}}:{}}

export default function Page({params}){
 const s=sectors.find(x=>x.slug===params.sector);if(!s)notFound();
 const records=cbamCodes.filter(x=>x.sector===s.name);
 const tradePages=countryProductPages.filter(x=>x.sector===s.slug);
 const notes={steel:'Iron and steel scope can combine broad material classifications with selected downstream products, so the exact CN code is important.',aluminium:'Aluminium classification can cover primary metal, semi-finished forms and listed downstream articles. Confirm the specific CN code used for the goods.',cement:'Cement research should distinguish clinker, Portland cement and other listed cement classifications.',fertilisers:'Fertiliser classification should distinguish the relevant chemical or fertiliser heading and any recorded exclusions.',electricity:'Electricity has a specific CN classification and a different trade-flow profile from physical industrial goods.',hydrogen:'Hydrogen has a specific CN classification; classification is only the first step before emissions and calculation inputs are considered.'};
 const faq=[
  {question:`How do I check whether a ${s.name.toLowerCase()} product is covered by CBAM?`,answer:'Start with the exact CN classification used for the imported goods and compare it with the applicable CBAM scope. Broad product names alone are not enough for a final classification.'},
  {question:`Can I estimate CBAM cost for ${s.name.toLowerCase()}?`,answer:'Yes, after the product classification and applicable embedded-emissions input have been established. The calculator can then be used for a planning estimate.'},
  {question:'Why does the exact CN code matter?',answer:'CBAM product scope is classification-based. A broad heading may contain more specific records or exclusions, so use the most specific applicable classification available.'}
 ];
 return <main className="section"><div className="wrap">
  <Breadcrumbs items={[{name:'Products',href:'/products/'},{name:s.name,href:`/products/${s.slug}/`}]} />
  <div className="eyebrow">CBAM sector</div><h1>{s.name} CBAM — Scope, CN Codes & Calculator</h1><p className="lead">{s.summary}</p>
  <div className="sourcebox"><b>Classification note</b><p>{notes[s.slug]}</p></div>
  <div className="grid"><div className="card"><b>Greenhouse gases</b><div className="metric smallmetric">{s.gas}</div></div><div className="card"><b>Searchable records</b><div className="metric">{records.length}</div></div><div className="card"><b>Scope reference</b><div className="metric smallmetric">Annex I</div></div></div>
  <h2>{s.name} CN code references</h2><div className="results">{records.map(x=><a className="result" href={'/cn-code/'+x.code+'/'} key={x.code}><div><b>{x.display}</b><h3>{x.name}</h3></div><span className="chip">{x.level}</span></a>)}</div>
  {tradePages.length>0&&<section><div className="eyebrow">Trade-flow research</div><h2>{s.name} CBAM by origin country</h2><div className="results">{tradePages.map(x=><a className="result" href={`/countries/${x.country}/${x.sector}/`} key={x.country}><div><b>{x.countryName}</b><h3>{s.name} imports from {x.countryName}</h3></div><span className="chip">Open →</span></a>)}</div></section>}
  <ToolLinks/><FAQ items={faq}/>
  <div className="sourcebox"><b>Primary source</b><p>Primary scope reference: Regulation (EU) 2023/956, Annex I. Verify current legislation and customs classification before making a compliance decision.</p><a href="https://eur-lex.europa.eu/eli/reg/2023/956/oj">View CBAM Regulation →</a></div>
 </div></main>
}