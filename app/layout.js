import './globals.css';
import SiteSchema from './components/SiteSchema';

export const metadata={metadataBase:new URL('https://cbamsearch.com'),title:{default:'CBAM Search — EU CBAM CN Code Checker & Calculator',template:'%s | CBAM Search'},description:'Search CN and HS codes, check EU CBAM scope, explore sectors, certificate prices and compliance deadlines.',alternates:{canonical:'/'},openGraph:{title:'CBAM Search — EU CBAM CN Code Checker & Calculator',description:'Search EU CBAM by CN code, HS code or product name, then check scope and estimate exposure.',url:'https://cbamsearch.com',siteName:'CBAM Search',type:'website',locale:'en_US',images:[{url:'/opengraph-image',width:1200,height:630,alt:'CBAM Search — EU CBAM search and calculator'}]},twitter:{card:'summary_large_image',title:'CBAM Search — EU CBAM CN Code Checker & Calculator',description:'Search EU CBAM by CN code, HS code or product name, then check scope and estimate exposure.',images:['/opengraph-image']},icons:{icon:'/icon.svg'},manifest:'/manifest.webmanifest'};

export default function RootLayout({children}){return <html lang="en"><body><SiteSchema/>
<header className="siteHeader"><a className="brand" href="/">CBAM<span>Search</span></a><nav aria-label="Primary navigation"><a href="/cn-code/">Search</a><a href="/cbam-checker/">Scope</a><a href="/cbam-calculator/">Calculator</a><a href="/products/">Sectors</a><a href="/guides/">Resources</a><a href="/pricing/">Pricing</a></nav><a className="headerCta" href="/cbam-report/">Start Free</a></header>
{children}
<footer>
 <div><b>CBAMSearch.com</b><p>Independent EU CBAM search, classification, calculation and assessment tools.</p></div>
 <div><b>Tools</b><p><a href="/cn-code/">CN Code Search</a> · <a href="/cbam-checker/">Scope Checker</a> · <a href="/cbam-calculator/">Calculator</a> · <a href="/default-values/">Default Values</a></p></div>
 <div><b>Research</b><p><a href="/products/">Sectors</a> · <a href="/countries/">Countries</a> · <a href="/deadlines/">Deadlines</a> · <a href="/guides/">Guides</a></p></div>
 <div><b>Business</b><p><a href="/pricing/">Pricing</a> · <a href="/cbam-report/">Assessment</a> · <a href="/dashboard/">Dashboard</a></p></div>
</footer></body></html>}