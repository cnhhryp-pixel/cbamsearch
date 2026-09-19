export function buildCBAMReportTemplate(report={}){
 return {
  title:'CBAM Compliance Assessment Report',
  sections:[
   {
    title:'Product Information',
    fields:{
     company:report.company || '-',
     product:report.product || '-',
     cnCode:report.cn_code || '-',
     origin:report.country_origin || '-'
    }
   },
   {
    title:'CBAM Assessment Summary',
    fields:{
     sector:report.sector || '-',
     emissionFactor:report.emission_factor || '-',
     calculation:report.calculation || '-'
    }
   },
   {
    title:'Report Information',
    fields:{
     reportId:report.id || '-',
     version:report.version || '1',
     generatedAt:new Date().toISOString()
    }
   }
  ]
 };
}
