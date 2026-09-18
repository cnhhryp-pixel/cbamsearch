import { countryProductPages } from './country-product-pages';
import { cbamCodes } from './cbam-codes';

export const countryCodePages = countryProductPages.flatMap(p =>
  cbamCodes
    .filter(c =>
      c.sector === p.sectorName &&
      p.examples.some(e => c.code.startsWith(e.replace(/\D/g,'')) || e.replace(/\D/g,'').startsWith(c.code))
    )
    .map(c => ({
      country:p.country,
      countryName:p.countryName,
      sector:p.sector,
      sectorName:p.sectorName,
      code:c.code,
      indexable: c.level === 'CN' || c.level === 'Subheading',
      quality: c.level === 'CN' ? 'high' : c.level === 'Subheading' ? 'medium' : 'discovery'
    }))
);

export const indexableCountryCodePages = countryCodePages.filter(p => p.indexable);
