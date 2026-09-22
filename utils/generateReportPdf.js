import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';

export async function generateReportPdf(data) {
  const pdf = await PDFDocument.create();
  const page = pdf.addPage([595, 842]);
  const font = await pdf.embedFont(StandardFonts.Helvetica);
  const bold = await pdf.embedFont(StandardFonts.HelveticaBold);
  let y = 790;
  const draw = (text, size = 11, isBold = false) => {
    page.drawText(String(text || ''), { x: 50, y, size, font: isBold ? bold : font, color: rgb(0.05,0.15,0.12) });
    y -= size + 12;
  };
  draw('CBAMSearch Assessment Report', 22, true);
  draw(`Product: ${data.product}`);
  draw(`CN Code: ${data.cn}`);
  draw(`Country: ${data.country}`);
  draw(`Scope status: ${data.status}`);
  draw(`Classification: ${data.classification}`);
  draw(`Sector: ${data.sector}`);
  draw(`Gas: ${data.gas}`);
  draw('This report is a research aid. Verify current CBAM requirements with official sources.');
  return pdf.save();
}
