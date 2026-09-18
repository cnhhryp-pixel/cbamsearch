// Seed dataset for the CBAMSearch MVP.
// Scope references: Regulation (EU) 2023/956 Annex I. Production data will be versioned against current consolidated EU law.
export const cbamCodes=[
{code:'25070080',display:'2507 00 80',name:'Other kaolinic clays',sector:'Cement',gas:'CO₂',level:'CN',keywords:['kaolinic clay','kaolin clay','other kaolinic clays']},
{code:'25231000',display:'2523 10 00',name:'Cement clinkers',sector:'Cement',gas:'CO₂',level:'CN',keywords:['cement clinker','clinker']},
{code:'25232100',display:'2523 21 00',name:'White Portland cement',sector:'Cement',gas:'CO₂',level:'CN',keywords:['white cement','portland cement']},
{code:'25232900',display:'2523 29 00',name:'Other Portland cement',sector:'Cement',gas:'CO₂',level:'CN',keywords:['cement','portland cement']},
{code:'25233000',display:'2523 30 00',name:'Aluminous cement',sector:'Cement',gas:'CO₂',level:'CN',keywords:['aluminous cement']},
{code:'25239000',display:'2523 90 00',name:'Other hydraulic cements',sector:'Cement',gas:'CO₂',level:'CN',keywords:['hydraulic cement']},
{code:'27160000',display:'2716 00 00',name:'Electrical energy',sector:'Electricity',gas:'CO₂',level:'CN',keywords:['electricity','electrical energy']},
{code:'28041000',display:'2804 10 00',name:'Hydrogen',sector:'Hydrogen',gas:'CO₂',level:'CN',keywords:['hydrogen']},
{code:'28080000',display:'2808 00 00',name:'Nitric acid; sulphonitric acids',sector:'Fertilisers',gas:'CO₂, N₂O',level:'CN',keywords:['nitric acid','sulphonitric acid']},
{code:'2814',display:'2814',name:'Ammonia, anhydrous or in aqueous solution',sector:'Fertilisers',gas:'CO₂',level:'Heading',keywords:['ammonia']},
{code:'28342100',display:'2834 21 00',name:'Nitrates of potassium',sector:'Fertilisers',gas:'CO₂, N₂O',level:'CN',keywords:['potassium nitrate','nitrate']},
{code:'3102',display:'3102',name:'Mineral or chemical fertilisers, nitrogenous',sector:'Fertilisers',gas:'CO₂, N₂O',level:'Heading',keywords:['fertiliser','fertilizer','nitrogenous fertilizer']},
{code:'72',display:'72',name:'Iron and steel (with Annex I exceptions)',sector:'Iron & steel',gas:'CO₂',level:'Chapter',keywords:['iron','steel']},
{code:'7301',display:'7301',name:'Sheet piling and welded angles, shapes and sections of iron or steel',sector:'Iron & steel',gas:'CO₂',level:'Heading',keywords:['sheet piling','steel sections']},
{code:'7302',display:'7302',name:'Railway or tramway track construction material of iron or steel',sector:'Iron & steel',gas:'CO₂',level:'Heading',keywords:['railway steel','rail','track material']},
{code:'7601',display:'7601',name:'Unwrought aluminium',sector:'Aluminium',gas:'CO₂, PFCs',level:'Heading',keywords:['aluminum','aluminium','unwrought aluminium']},
{code:'7603',display:'7603',name:'Aluminium powders and flakes',sector:'Aluminium',gas:'CO₂, PFCs',level:'Heading',keywords:['aluminium powder','aluminum powder']},
{code:'7604',display:'7604',name:'Aluminium bars, rods and profiles',sector:'Aluminium',gas:'CO₂, PFCs',level:'Heading',keywords:['aluminium profile','aluminum profile','aluminium bar','aluminium rod']},
{code:'7605',display:'7605',name:'Aluminium wire',sector:'Aluminium',gas:'CO₂, PFCs',level:'Heading',keywords:['aluminium wire','aluminum wire']},
{code:'7606',display:'7606',name:'Aluminium plates, sheets and strip, thickness exceeding 0.2 mm',sector:'Aluminium',gas:'CO₂, PFCs',level:'Heading',keywords:['aluminium sheet','aluminum plate']},
{code:'7607',display:'7607',name:'Aluminium foil',sector:'Aluminium',gas:'CO₂, PFCs',level:'Heading',keywords:['aluminium foil','aluminum foil']},
{code:'7608',display:'7608',name:'Aluminium tubes and pipes',sector:'Aluminium',gas:'CO₂, PFCs',level:'Heading',keywords:['aluminium tube','aluminum pipe']},
{code:'76090000',display:'7609 00 00',name:'Aluminium tube or pipe fittings',sector:'Aluminium',gas:'CO₂, PFCs',level:'CN',keywords:['aluminium fitting','pipe fitting']},
{code:'7610',display:'7610',name:'Aluminium structures and parts of structures',sector:'Aluminium',gas:'CO₂, PFCs',level:'Heading',keywords:['aluminium structure','aluminum structure']},
{code:'76110000',display:'7611 00 00',name:'Aluminium reservoirs, tanks, vats and similar containers over 300 litres',sector:'Aluminium',gas:'CO₂, PFCs',level:'CN',keywords:['aluminium tank','aluminum reservoir']},
{code:'7612',display:'7612',name:'Aluminium casks, drums, cans, boxes and similar containers',sector:'Aluminium',gas:'CO₂, PFCs',level:'Heading',keywords:['aluminium can','aluminum container']},
{code:'76130000',display:'7613 00 00',name:'Aluminium containers for compressed or liquefied gas',sector:'Aluminium',gas:'CO₂, PFCs',level:'CN',keywords:['gas container','aluminium cylinder']},
{code:'7614',display:'7614',name:'Stranded wire, cables and the like, of aluminium',sector:'Aluminium',gas:'CO₂, PFCs',level:'Heading',keywords:['aluminium cable','aluminum cable']},
{code:'7616',display:'7616',name:'Other articles of aluminium',sector:'Aluminium',gas:'CO₂, PFCs',level:'Heading',keywords:['aluminium article','aluminum article']}
];

cbamCodes.push(
{code:'26011200',display:'2601 12 00',name:'Agglomerated iron ores and concentrates, other than roasted iron pyrites',sector:'Iron & steel',gas:'CO₂',level:'CN',keywords:['iron ore','agglomerated iron ore']},
{code:'730300',display:'7303 00',name:'Tubes, pipes and hollow profiles, of cast iron',sector:'Iron & steel',gas:'CO₂',level:'Subheading',keywords:['cast iron pipe','cast iron tube']},
{code:'7304',display:'7304',name:'Seamless tubes, pipes and hollow profiles, of iron or steel',sector:'Iron & steel',gas:'CO₂',level:'Heading',keywords:['seamless steel pipe','seamless tube']},
{code:'7305',display:'7305',name:'Other iron or steel tubes and pipes, circular cross-section, external diameter over 406.4 mm',sector:'Iron & steel',gas:'CO₂',level:'Heading',keywords:['large steel pipe','welded steel pipe']},
{code:'7306',display:'7306',name:'Other tubes, pipes and hollow profiles, of iron or steel',sector:'Iron & steel',gas:'CO₂',level:'Heading',keywords:['steel tube','steel pipe','hollow profile']},
{code:'7307',display:'7307',name:'Tube or pipe fittings, of iron or steel',sector:'Iron & steel',gas:'CO₂',level:'Heading',keywords:['pipe fittings','steel fittings','elbow','coupling']},
{code:'7308',display:'7308',name:'Structures and parts of structures, of iron or steel',sector:'Iron & steel',gas:'CO₂',level:'Heading',keywords:['steel structure','steel construction']},
{code:'730900',display:'7309 00',name:'Iron or steel reservoirs, tanks, vats and similar containers over 300 litres',sector:'Iron & steel',gas:'CO₂',level:'Subheading',keywords:['steel tank','steel reservoir']},
{code:'7310',display:'7310',name:'Iron or steel tanks, casks, drums, cans, boxes and similar containers up to 300 litres',sector:'Iron & steel',gas:'CO₂',level:'Heading',keywords:['steel drum','steel can','steel container']},
{code:'731100',display:'7311 00',name:'Containers for compressed or liquefied gas, of iron or steel',sector:'Iron & steel',gas:'CO₂',level:'Subheading',keywords:['gas cylinder','steel gas container']},
{code:'7318',display:'7318',name:'Screws, bolts, nuts, rivets, washers and similar articles, of iron or steel',sector:'Iron & steel',gas:'CO₂',level:'Heading',keywords:['screws','bolts','nuts','washers','fasteners']},
{code:'7326',display:'7326',name:'Other articles of iron or steel',sector:'Iron & steel',gas:'CO₂',level:'Heading',keywords:['iron articles','steel articles']}
);


cbamCodes.push(
  {code:'3105',display:'3105',name:'Mineral or chemical fertilisers containing two or three fertilising elements; other fertilisers',sector:'Fertilisers',gas:'CO₂, N₂O',level:'Heading',keywords:['compound fertiliser','npk fertiliser','npk fertilizer','chemical fertiliser','chemical fertilizer'],excludedCodes:['31056000']},
  {code:'7319',display:'7319',name:'Sewing needles, knitting needles, bodkins, crochet hooks and similar articles of iron or steel',sector:'Iron & steel',gas:'CO₂',level:'Heading',keywords:['steel needle','knitting needle','crochet hook']},
  {code:'7320',display:'7320',name:'Springs and leaves for springs, of iron or steel',sector:'Iron & steel',gas:'CO₂',level:'Heading',keywords:['steel spring','iron spring','leaf spring']},
  {code:'7322',display:'7322',name:'Radiators for central heating and non-electric air heaters, and parts, of iron or steel',sector:'Iron & steel',gas:'CO₂',level:'Heading',keywords:['steel radiator','central heating radiator','air heater']}
);

export const normalizeCode = v => (v || '').replace(/\D/g, '');

const aliases = {
  aluminum: 'aluminium',
  fertilizer: 'fertiliser',
  fertilizers: 'fertilisers',
  tubing: 'tube',
  pipes: 'pipe',
  fastener: 'fasteners',
  screw: 'screws',
  bolt: 'bolts',
  washer: 'washers',
  nut: 'nuts'
};

const normalizeText = value =>
  (value || '')
    .toLowerCase()
    .replace(/[-_/]/g, ' ')
    .replace(/[^a-z0-9 ]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .split(' ')
    .map(word => aliases[word] || word)
    .join(' ');

const searchableText = item =>
  normalizeText([item.name, item.sector, ...(item.keywords || [])].join(' '));

export function searchCbam(q) {
  const raw = (q || '').trim();
  const n = normalizeCode(raw);
  const text = normalizeText(raw);
  if (!raw) return [];

  return cbamCodes
    .map(item => {
      const haystack = searchableText(item);
      let score = 0;

      if (n && item.code === n) score += 100;
      else if (n && item.code.startsWith(n)) score += 80;
      else if (n && n.startsWith(item.code)) score += 70;

      if (text) {
        const name = normalizeText(item.name);
        const sector = normalizeText(item.sector);
        const keywords = (item.keywords || []).map(normalizeText);

        if (name === text) score += 60;
        if (keywords.includes(text)) score += 55;
        if (name.startsWith(text)) score += 45;
        if (keywords.some(k => k.startsWith(text))) score += 40;
        if (haystack.includes(text)) score += 30;

        const tokens = text.split(' ').filter(Boolean);
        if (tokens.length > 1 && tokens.every(token => haystack.includes(token))) score += 20;
      }

      return { item, score };
    })
    .filter(result => result.score > 0)
    .sort((a, b) => b.score - a.score || a.item.code.localeCompare(b.item.code))
    .slice(0, 30)
    .map(result => result.item);
}

export const CBAM_SCOPE_SOURCE = {
  title: 'Regulation (EU) 2023/956 — Annex I (consolidated)',
  url: 'https://eur-lex.europa.eu/eli/reg/2023/956/2025-10-20/eng',
  checked: '2026-09-19'
};

export function getScopeMatch(code) {
  const n = normalizeCode(code);
  if (!n) return { status: 'unknown', record: null, exclusion: null };

  const parents = cbamCodes
    .filter(item => n === item.code || n.startsWith(item.code))
    .sort((a,b) => b.code.length - a.code.length);

  for (const record of parents) {
    const exclusion = (record.excludedCodes || []).find(prefix => n.startsWith(prefix));
    if (exclusion) return { status: 'excluded', record, exclusion };
  }

  if (parents.length) {
    const record = parents[0];
    const exact = n === record.code;
    const broad = ['Chapter','Heading','Subheading'].includes(record.level) && !exact;
    return { status: broad ? 'potential' : 'covered', record, exclusion: null };
  }

  const children = cbamCodes.filter(item => item.code.startsWith(n));
  if (children.length) return { status: 'needs-detail', record: children[0], exclusion: null };
  return { status: 'unknown', record: null, exclusion: null };
}
