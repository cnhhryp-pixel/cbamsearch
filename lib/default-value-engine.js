import{defaultValues,DEFAULT_VALUE_DATASET}from'../data/default-values';

const norm=v=>(v||'').toString().toLowerCase().trim();
const code=v=>(v||'').toString().replace(/\D/g,'');

export function getDefaultValue({cnCode,country,sector,productionRoute}={}){
  const c=code(cnCode),co=norm(country),s=norm(sector),r=norm(productionRoute);
  const matches=defaultValues.filter(x=>{
    const codes=Array.isArray(x.cnCodes)?x.cnCodes:[x.cnCode].filter(Boolean);
    const codeMatch=codes.some(v=>c===code(v)||c.startsWith(code(v)));
    return codeMatch&&(!x.country||norm(x.country)===co)&&(!x.sector||norm(x.sector)===s)&&(!x.productionRoute||norm(x.productionRoute)===r);
  }).sort((a,b)=>(code(b.cnCode||b.cnCodes?.[0]).length-code(a.cnCode||a.cnCodes?.[0]).length));
  const record=matches[0]||null;
  if(!record||record.value==null)return{status:'not-available',record:null,dataset:DEFAULT_VALUE_DATASET};
  return{status:'available',record,dataset:DEFAULT_VALUE_DATASET};
}
