export function buildLeadCustomerEmail(lead={}){
 return {
  subject:'Your CBAM Assessment Request Received',
  text:`Hello ${lead.name || 'Customer'},\n\nThank you for your CBAM assessment request. Our team will review your product information and contact you shortly.\n\nCBAMSearch Team`
 };
}

export function buildLeadAdminEmail(lead={}){
 return {
  subject:'New CBAM Lead Received',
  text:`New lead:\nCompany: ${lead.company || ''}\nEmail: ${lead.email || ''}\nProduct: ${lead.product || ''}\nCountry: ${lead.country || ''}`
 };
}
