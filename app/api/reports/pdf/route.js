import {NextResponse} from 'next/server';
import {uploadReportFile} from '@/lib/storage/supabase';
import {renderCBAMReport} from '@/lib/pdf/render';

export async function POST(request){
 try{
  const body=await request.json();

  const fileName=`CBAM-Report-${body.report_id || 'draft'}.pdf`;
  const filePath=`reports/${body.report_id || 'draft'}/${fileName}`;

  const pdfBuffer=renderCBAMReport({
   customer:body.customer,
   product:body.product,
   cn_code:body.cn_code,
   origin:body.origin,
   sector:body.sector
  });

  const upload=await uploadReportFile(filePath,pdfBuffer);

  return NextResponse.json({
   success:true,
   pdf:{
    file_name:fileName,
    report_id:body.report_id || null,
    status:'generated'
   },
   storage:upload
  });
 }catch(error){
  return NextResponse.json({success:false,error:error.message},{status:400});
 }
}
