import './globals.css';
import SiteSchema from './components/SiteSchema';

export const metadata={metadataBase:new URL('https://cbamsearch.com'),title:{default:'CBAM Search — EU CBAM CN Code Checker & Calculator',template:'%s | CBAM Search'},description:'Search CN and HS codes, check EU CBAM scope, explore sectors, certificate prices and compliance deadlines.',alternates:{canonical:'/'},openGraph:{title:'CBAM Search',description:'EU CBAM search, CN code checker and calculator.',url:'https://cbamsearch.com',siteName:'CBAM Search',type:'website'}};

export default function RootLayout({children}){return <html lang="en"><body><SiteSchema/>
<header><a className="brand" href="/">CBAM<span>Search</span></a><nav aria-label="Primary navigation"><a href="/cn-code/">CN Code Search</a><a href="/cbam-checker/">Scope Checker</a><a href="/cbam-calculator/">Calculator</a><a href="/products/">Sectors</a><a href="/countries/">Countries</a><a href="/guides/">Guides</a></nav></header>
{children}
<footer>
 <div><b>CBAMSearch.com</b><p>Independent EU CBAM search, classification and calculation tools. Verify compliance decisions against current official sources.</p></div>
 <div><b>Tools</b><p><a href="/cn-code/">CN Code Search</a> · <a href="/cbam-checker/">Scope Checker</a> · <a href="/cbam-calculator/">Calculator</a> · <a href="/default-values/">Default Values</a> · <a href="/cbam-certificate-price/">Certificate Price</a></p></div>
 <div><b>Research</b><p><a href="/products/">CBAM Sectors</a> · <a href="/countries/">Countries</a> · <a href="/deadlines/">Deadlines</a> · <a href="/guides/">Guides</a> · <a href="/about/">About</a></p></div>
 <div><b>Official source</b><p><a href="https://taxation-customs.ec.europa.eu/carbon-border-adjustment-mechanism_en">European Commission CBAM →</a></p></div>
</footer></body></html>}