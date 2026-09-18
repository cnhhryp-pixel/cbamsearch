import SearchHero from './SearchHero';
import ToolLinks from './components/ToolLinks';
import FAQ from './components/FAQ';
import { sectors } from '../data/sectors';

export const metadata={
 title:'CBAM Search — CN Code Checker & Calculator',
 description:'Search EU CBAM by CN code, HS code or product name. Check scope, browse sector and country pages, review emissions inputs and estimate CBAM exposure.',
 alternates:{canonical:'/'}
};

export default function Home(){
 const faq=[
  {question:'How do I check if a product is covered by CBAM?',answer:'Start with the exact CN classification used for the imported goods. Search the code or product name, then review the matching scope record and any recorded exclusions.'},
  {question:'Can I search CBAM by HS code or product name?',answer:'Yes. CBAMSearch accepts code and product-name searches. For a compliance decision, confirm the exact EU CN classification used for the goods.'},
  {question:'What does the CBAM calculator estimate?',answer:'The calculator combines entered embedded-emissions data with the selected certificate-price period to produce a planning estimate. Classification and input data should be checked first.'}
 ];
 return <main>
  <section className="hero"><div className="wrap"><div className="eyebrow">EU Carbon Border Adjustment Mechanism tools</div><h1>EU CBAM Search & Calculator</h1><p className="lead">Search by CN code, HS code or product name to check CBAM coverage, classification, emissions inputs and estimated carbon exposure.</p><SearchHero/><div className="chips">{sectors.map(x=><a className="chip" href={'/products/'+x.slug+'/'} key={x.slug}>{x.name}</a>)}</div></div></section>
  <section className="section"><div className="wrap"><div className="eyebrow">Start with a task</div><h2>Search, check and calculate CBAM</h2><div className="grid"><a className="card" href="/cbam-checker/"><b>CBAM Scope Checker →</b><p>Check a product or CN code against the current scope dataset and recorded exclusions.</p></a><a className="card" href="/cbam-calculator/"><b>CBAM Calculator →</b><p>Estimate exposure after confirming classification and the applicable embedded-emissions input.</p></a><a className="card" href="/cn-code/"><b>CBAM CN Code Search →</b><p>Search classification records by CN code, HS prefix or product description.</p></a></div></div></section>
  <section className="section"><div className="wrap"><div className="eyebrow">Browse by CBAM sector</div><h2>CBAM products and CN code references</h2><div className="grid">{sectors.map(x=><a className="card" href={'/products/'+x.slug+'/'} key={x.slug}><b>{x.name} CBAM →</b><p>{x.summary}</p></a>)}</div></div></section>
  <section className="section"><div className="wrap"><div className="eyebrow">Research workflow</div><h2>From product classification to a cost estimate</h2><div className="grid"><div className="card"><span>01</span><b>Find the CN code</b><p>Search the imported product and confirm the most specific applicable classification.</p></div><div className="card"><span>02</span><b>Check scope and emissions</b><p>Review the scope record, exclusions and the emissions-data path for the goods.</p></div><div className="card"><span>03</span><b>Estimate exposure</b><p>Use the relevant emissions input and certificate-price period in the calculator.</p></div></div><ToolLinks/></div></section>
  <section className="section"><div className="wrap"><FAQ items={faq}/></div></section>
  <section className="section"><div className="wrap notice"><h2>Built around primary EU sources</h2><p>CBAMSearch is designed to show source, methodology and last-updated information alongside regulatory data. It is an independent information tool and not legal, customs or tax advice.</p><a className="btn" href="/guides/">Explore CBAM guides</a></div></section>
 </main>
}