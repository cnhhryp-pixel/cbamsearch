export function createCBAMReportDocument(data={}){
 const report={
  title:'CBAM Compliance Assessment Report',
  generated_by:'CBAMSearch',
  sections:[
   {
    title:'Customer Information',
    content:data.customer || 'N/A'
   },
   {
    title:'Product Information',
    content:data.product || 'N/A'
   },
   {
    title:'CN Code Classification',
    content:data.cn_code || 'N/A'
   },
   {
    title:'Country of Origin',
    content:data.origin || 'N/A'
   },
   {
    title:'CBAM Sector Analysis',
    content:data.sector || 'N/A'
   },
   {
    title:'Compliance Notes',
    content:'Assessment generated from CBAMSearch compliance workflow.'
   }
  ],
  created_at:new Date().toISOString()
 };

 return report;
}
