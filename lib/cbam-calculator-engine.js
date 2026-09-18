import{getScopeMatch}from'../data/cbam-codes';
import{getDefaultValue}from'./default-value-engine';
import{getCertificatePrice}from'./certificate-price-engine';

export function calculateCBAMCost({cnCode,country,quantity,embeddedEmissions,period,carbonPriceCredit=0}={}){
  const scope=getScopeMatch(cnCode);
  if(scope.status==='excluded')return{status:'excluded',scope};
  if(scope.status==='unknown'||scope.status==='needs-detail')return{status:'classification-needed',scope};

  const defaultValue=getDefaultValue({cnCode,country,sector:scope.record?.sector});
  const manual=Number(embeddedEmissions);
  const factor=Number.isFinite(manual)&&manual>=0?manual:(defaultValue.status==='available'?Number(defaultValue.record.value):null);
  const price=getCertificatePrice(period);
  const qty=Math.max(0,Number(quantity)||0);

  if(factor==null)return{status:'emissions-needed',scope,defaultValue,price};
  if(price.status!=='available')return{status:'price-needed',scope,defaultValue,price};

  const totalEmissions=qty*factor;
  const gross=totalEmissions*price.record.price;
  const credit=Math.min(gross,Math.max(0,Number(carbonPriceCredit)||0));
  return{status:'estimated',scope,defaultValue,price,quantity:qty,factor,totalEmissions,gross,credit,net:Math.max(0,gross-credit),emissionSource:Number.isFinite(manual)&&manual>=0?'user-entered':'official-default'};
}
