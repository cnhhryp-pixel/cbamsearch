import { cbamCodes } from '../data/cbam-codes';
import { sectors } from '../data/sectors';
import { countries } from '../data/countries';
import { countryProductPages } from '../data/country-product-pages';
import { indexableCountryCodePages } from '../data/country-code-pages';

const SITE='https://cbamsearch.com';
const UPDATED='2026-09-18';
const entry=(path,priority=.7,changeFrequency='monthly',lastModified=UPDATED)=>({url:SITE+path,lastModified:new Date(lastModified),changeFrequency,priority});

export default function sitemap(){
 const base=[
  entry('/',1,'weekly'),entry('/cbam-checker/',.9,'weekly'),entry('/cbam-calculator/',.9,'weekly'),
  entry('/cn-code/',.9,'weekly'),entry('/hs-code/',.75,'monthly'),entry('/products/',.8,'monthly'),
  entry('/countries/',.8,'monthly'),entry('/default-values/',.85,'weekly'),entry('/cbam-certificate-price/',.85,'weekly'),
  entry('/deadlines/',.8,'weekly'),entry('/guides/',.75,'monthly'),entry('/guides/importer-requirements/',.75,'monthly'),entry('/about/',.5,'yearly')
 ];
 const codes=cbamCodes.filter(x=>x.level==='CN'||x.level==='Subheading').map(x=>entry('/cn-code/'+x.code+'/',.7));
 const sectorPages=sectors.map(x=>entry('/products/'+x.slug+'/',.8));
 const countryPages=countries.map(x=>entry('/countries/'+x.slug+'/',.7));
 const countrySectorPages=countryProductPages.map(x=>entry('/countries/'+x.country+'/'+x.sector+'/',.75));
 const countryCodes=indexableCountryCodePages.map(x=>entry('/countries/'+x.country+'/'+x.sector+'/'+x.code+'/',.7));
 const all=[...base,...sectorPages,...countryPages,...countrySectorPages,...countryCodes,...codes];
 return [...new Map(all.map(x=>[x.url,x])).values()];
}
