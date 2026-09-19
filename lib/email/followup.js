export function getLeadFollowUpEmail(step, lead={}){
 const name=lead.name || 'Customer';

 const emails={
  day0:{
   subject:'Thank you for your CBAM assessment request',
   text:`Hello ${name},\n\nThank you for contacting CBAMSearch. We have received your assessment request and will review your product information.`
  },
  day3:{
   subject:'Need help with your CBAM compliance assessment?',
   text:`Hello ${name},\n\nWe would like to follow up on your CBAM assessment request. Please let us know if you need assistance reviewing your product requirements.`
  },
  day7:{
   subject:'Complete your CBAM assessment report',
   text:`Hello ${name},\n\nIf you still need a CBAM compliance report, our team can help prepare a professional assessment based on your product information.`
  }
 };

 return emails[step] || emails.day0;
}
