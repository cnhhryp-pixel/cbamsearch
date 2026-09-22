import SearchHero from './SearchHero';
import ToolLinks from './components/ToolLinks';
import FAQ from './components/FAQ';
import { sectors } from '../data/sectors';

export const metadata={
 title:'CBAMSearch — EU CBAM Search, Calculator & Compliance Reports',
 description:'Search CN codes, check EU CBAM scope, estimate carbon exposure and create structured CBAM compliance assessments.',
 alternates:{canonical:'/'}
};

export default function Home(){
 const faq=[
  {question:'What is CBAM?',answer:'CBAM is the European Union carbon border mechanism for selected imported goods. Product coverage depends on classification and the applicable rules.'},
  {question:'How can I check my product?',answer:'Start with the CN code or product description, review the scope result, then verify the classification and emissions data against current official sources.'},
  {question:'Can I estimate CBAM exposure?',answer:'Yes. The calculator combines quantity, embedded-emissions inputs and a certificate-price period to support planning estimates.'},
  {question:'Can I create a CBAM assessment report?',answer:'Yes. Start a free assessment, save your product scenario and upgrade to a structured professional report when needed.'}
 ];
 return <main>
  <section className="hero heroPro"><div className="wrap">
   <div className="eyebrow">EU CBAM COMPLIANCE WORKSPACE</div>
   <h1>Search. Calculate. Prepare for EU CBAM.</h1>
   <p className="lead">One workspace for CN code research, scope checks, carbon-cost estimates and structured compliance assessments.</p>
   <div className="heroActions"><a className="btn" href="/cbam-report/">Start Free Assessment</a><a className="btn secondaryBtn" href="/cbam-calculator/">Open Calculator</a></div>
   <div className="trustRow"><span>CN code search</span><span>Scope checker</span><span>Cost estimates</span><span>Professional reports</span></div>
   <div className="searchPanel"><div><b>Already know the product or code?</b><p>Search the CBAM database directly.</p></div><SearchHero/></div>
  </div></section>

  <section className="section"><div className="wrap">
   <div className="sectionHead"><div><div className="eyebrow">CORE WORKFLOW</div><h2>From product classification to a usable assessment</h2></div><p>Use the free research tools first, then create a saved assessment when the scenario is worth tracking.</p></div>
   <div className="grid featureGrid">
    <a className="card featureCard" href="/cn-code/"><span className="stepNo">01</span><h3>Find the CN code</h3><p>Search by code, HS prefix or product description and review related classification records.</p><b>Search CN codes →</b></a>
    <a className="card featureCard" href="/cbam-checker/"><span className="stepNo">02</span><h3>Check CBAM scope</h3><p>Review recorded scope, exclusions and the next verification step before calculating exposure.</p><b>Check scope →</b></a>
    <a className="card featureCard" href="/cbam-calculator/"><span className="stepNo">03</span><h3>Estimate exposure</h3><p>Model quantity, embedded emissions and certificate-price assumptions in one calculation flow.</p><b>Calculate exposure →</b></a>
   </div>
  </div></section>

  <section className="section softSection"><div className="wrap">
   <div className="sectionHead"><div><div className="eyebrow">CBAM SECTORS</div><h2>Research the major covered product groups</h2></div><a href="/products/">View all sectors →</a></div>
   <div className="sectorGrid">{sectors.map(x=><a className="sectorCard" href={'/products/'+x.slug+'/'} key={x.slug}><span>{x.name}</span><small>Codes, scope & guidance →</small></a>)}</div>
  </div></section>

  <section className="section"><div className="wrap reportCta">
   <div><div className="eyebrow lightEyebrow">PROFESSIONAL REPORTS</div><h2>Turn your research into a structured CBAM assessment.</h2><p>Save product information, origin, classification and assessment details in one workspace, with professional report options for business use.</p></div>
   <div className="reportCtaBox"><span>Professional report</span><strong>From €49</strong><a className="btn lightBtn" href="/cbam-report/">Create an assessment</a><a href="/pricing/">See pricing</a></div>
  </div></section>

  <section className="section"><div className="wrap"><div className="eyebrow">RESEARCH TOOLS</div><h2>Continue your CBAM research</h2><ToolLinks/></div></section>
  <section className="section faqSection"><div className="wrap"><FAQ items={faq}/></div></section>
  <section className="section"><div className="wrap notice"><h2>Independent tools, primary-source mindset</h2><p>CBAMSearch is an independent information and workflow tool. Important compliance decisions should be checked against current official EU sources and professional advice where appropriate.</p><a className="btn lightBtn" href="/guides/">Explore CBAM guides</a></div></section>
 </main>
}