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
  {question:'What is CBAM?',answer:'CBAM (Carbon Border Adjustment Mechanism) is the European Union mechanism designed to address carbon emissions associated with certain imported goods. It requires reporting of embedded emissions for covered products and links carbon costs to the EU carbon pricing system.'},
  {question:'Which products are covered by CBAM?',answer:'CBAM currently covers selected carbon-intensive sectors including iron and steel, aluminium, cement, fertilisers, hydrogen and electricity. Product coverage depends on the applicable CN code classification.'},
  {question:'How can I check if my product is covered by CBAM?',answer:'The first step is identifying the correct CN code. CBAMSearch helps users search by CN code, HS code or product description and review related CBAM scope information.'},
  {question:'How is CBAM cost calculated?',answer:'A simplified CBAM cost estimate is based on embedded emissions multiplied by the applicable carbon price. Actual results depend on product quantity, emissions data and the relevant CBAM calculation rules.'},
  {question:'What information is needed for CBAM reporting?',answer:'Companies may need product details, CN codes, imported quantities, production methods, embedded emissions data and supplier information to support CBAM reporting.'},
  {question:'Do suppliers outside the EU need to provide CBAM data?',answer:'Although CBAM obligations apply to EU importers, suppliers outside the EU often need to provide production and emissions information to support their customers.'},
  {question:'What happens if emission data is unavailable?',answer:'When supplier-specific emissions data is unavailable, alternative calculation methods may be required according to applicable CBAM rules. Companies should improve data collection and supplier communication.'},
  {question:'Why should companies prepare for CBAM early?',answer:'Early preparation helps companies understand potential carbon exposure, improve supply chain transparency and prepare the information needed for future EU trade requirements.'},
  {question:'Can CBAMSearch calculate my CBAM exposure?',answer:'Yes. CBAMSearch helps users estimate potential CBAM exposure using product information, CN codes, emissions inputs and carbon price assumptions.'},
  {question:'Who should use CBAMSearch?',answer:'CBAMSearch is designed for EU importers, exporters, manufacturers, trading companies and compliance professionals who need to understand CBAM requirements.'}
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