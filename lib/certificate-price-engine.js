import{certificatePrices,latestPublished}from'../data/certificate-prices';

export function getCertificatePrice(period){
  const record=certificatePrices.find(x=>x.period===period)||latestPublished||null;
  if(!record||record.price==null)return{status:'not-available',record};
  return{status:'available',record};
}
