export const metadata={
 title:'CBAM Guides & Resources | EU Carbon Border Adjustment Mechanism',
 description:'Learn about EU CBAM requirements, covered products, CN codes, emissions data and calculation methods with practical CBAM guides.',
 alternates:{canonical:'/guides/'}
};

const guides=[
 {title:'What Is CBAM? Complete Guide to EU Carbon Border Adjustment Mechanism',text:'Understand what CBAM is, why the EU introduced it, covered products and how importers and exporters can prepare.',href:'/guides/what-is-cbam/'},
 {title:'CBAM Products List: Covered Goods and CN Codes Explained',text:'Explore CBAM sectors including iron and steel, aluminium, cement, fertilisers, hydrogen and electricity.',href:'/guides/cbam-products-list/'},
 {title:'How Is CBAM Cost Calculated?',text:'Learn how embedded emissions, product quantities and carbon prices are used to estimate CBAM exposure.',href:'/guides/cbam-calculation/'},
 {title:'CBAM Guide for Exporters Outside the EU',text:'Understand supplier data requirements and how exporters can prepare for EU customer requests.',href:'/guides/cbam-for-exporters/'},
 {title:'CBAM Reporting Requirements Guide',text:'Understand product information, emissions data and preparation steps for CBAM reporting.',href:'/guides/cbam-reporting-requirements/'},
 {title:'CBAM CN Code Guide',text:'Learn why customs classification and CN codes are important when checking CBAM scope.',href:'/guides/cbam-cn-code-guide/'},
 {title:'CBAM Steel and Aluminium Guide',text:'Explore CBAM considerations for steel and aluminium products and supply chains.',href:'/guides/cbam-steel-and-aluminium/'},
 {title:'CBAM Guide for Manufacturers',text:'Preparation guidance for factories providing products and emissions information.',href:'/guides/cbam-for-manufacturers/'},
 {title:'CBAM Emissions Data Guide',text:'Understand embedded emissions data requirements and supplier information.',href:'/guides/cbam-emissions-data/'},
 {title:'CBAM Importer Guide',text:'Learn how EU importers can prepare product classification and compliance information.',href:'/guides/cbam-importer-guide/'},
 {title:'CBAM Certificate Price Guide',text:'Understand the role of CBAM certificates and carbon price information.',href:'/guides/cbam-certificate-price/'},
 {title:'CBAM Transition Period Guide',text:'Learn about CBAM transition arrangements and preparation steps.',href:'/guides/cbam-transition-period/'}
];

export default function Page(){return <main className="section"><div className="wrap"><div className="eyebrow">Knowledge base</div><h1>CBAM Guides & Resources</h1><p className="lead">Learn about EU CBAM requirements, CN codes, emissions data, calculations and compliance preparation with practical guides based on primary sources.</p><div className="grid">{guides.map(x=><a className="card" href={x.href} key={x.title}><b>{x.title}</b><p>{x.text}</p></a>)}</div><section className="section"><div className="notice"><h2>Use CBAMSearch Tools</h2><p>Check product classifications, review CBAM scope information and estimate potential carbon exposure.</p><p><a href="/cn-code/">CN Code Search →</a> · <a href="/cbam-checker/">Scope Checker →</a> · <a href="/cbam-calculator/">CBAM Calculator →</a></p></div></section></div></main>}