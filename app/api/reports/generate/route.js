import {NextResponse} from 'next/server';
import {uploadReportPDF} from '@/lib/storage/report-upload';
import {createCBAMReportDocument} from '@/lib/pdf/generator';

export async function POST(request){
 try{
  const data=await request.json();

  if(!data.report_id){
   return NextResponse.json({success:false,message:'Missing report id'},{status:400});
  }

  const report=createCBAMReportDocument(data);

  // PDF renderer will convert this document into a real PDF buffer.
  const pdfBuffer=Buffer.from(JSON.stringify(report));

  const upload=await uploadReportPDF({
   fileName:`cbam-report-${data.report_id}.pdf`,
   fileBuffer:pdfBuffer
  });

  if(!upload.success){
   return NextResponse.json(upload,{status:500});
  }

  return NextResponse.json({
   success:true,
   fileUrl:upload.url,
   report
  });
 }catch(error){
  return NextResponse.json({success:false,error:error.message},{status:500});
 }
}
