export async function renderPDFDocument(document){
 // Adapter layer for PDF library integration.
 // Replace implementation with PDFKit or React PDF renderer.
 // Keeps report generation independent from the PDF engine.

 const payload={
  metadata:document.metadata,
  header:document.header,
  footer:document.footer,
  sections:document.sections
 };

 return Buffer.from(JSON.stringify(payload,null,2));
}
