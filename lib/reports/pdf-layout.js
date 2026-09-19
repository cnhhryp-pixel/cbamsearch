export function getCBAMPDFLayout(report={}){
 return {
  title:'CBAM Compliance Assessment Report',
  sections:[
   {
    title:'Executive Summary',
    fields:[
     ['Report ID',report.reportId || '-'],
     ['Generated Date',new Date().toISOString().slice(0,10)]
    ]
   },
   {
    title:'Product Information',
    fields:[
     ['Product',report.product || '-'],
     ['CN Code',report.cnCode || '-'],
     ['Country of Origin',report.origin || '-'],
     ['Sector',report.sector || '-']
    ]
   },
   {
    title:'CBAM Assessment Summary',
    fields:[
     ['Emission Factor',report.emissionFactor || '-'],
     ['Calculation Result',report.calculation || '-']
    ]
   },
   {
    title:'Disclaimer',
    content:'This assessment is prepared based on the information provided by the customer and should be reviewed with official EU CBAM requirements.'
   }
  ]
 };
}
