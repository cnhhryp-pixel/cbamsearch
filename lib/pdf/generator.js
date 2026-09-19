import {getCBAMPDFLayout} from '@/lib/reports/pdf-layout';

export async function generateCBAMPDF(report={}){
 const layout=getCBAMPDFLayout(report);

 return {
  format:'A4',
  title:'CBAM Compliance Assessment Report',
  layout,
  metadata:{
   author:'CBAMSearch',
   reportId:report.reportId || null,
   generatedAt:new Date().toISOString()
  }
 };
}

export function createCBAMReportDocument(data={}){
 return generateCBAMPDF({
  reportId:data.report_id,
  product:data.product,
  cnCode:data.cn_code,
  origin:data.origin,
  sector:data.sector,
  emissionFactor:data.emission_factor,
  calculation:data.calculation
 });
}
