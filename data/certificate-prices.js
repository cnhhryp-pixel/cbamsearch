export const certificatePrices=[
{period:'Q1 2026',start:'2026-01-01',end:'2026-03-31',published:'2026-04-07',price:75.36,status:'published'},
{period:'Q2 2026',start:'2026-04-01',end:'2026-06-30',published:'2026-07-06',price:75.28,status:'published'},
{period:'Q3 2026',start:'2026-07-01',end:'2026-09-30',published:'2026-10-05',price:null,status:'scheduled'},
{period:'Q4 2026',start:'2026-10-01',end:'2026-12-31',published:'2027-01-04',price:null,status:'scheduled'}
];export const latestPublished=certificatePrices.filter(x=>x.price!==null).at(-1);