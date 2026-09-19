import {NextResponse} from 'next/server';
import {uploadReportFile} from '@/lib/storage/supabase';
import {renderCBAMReport} from '@/lib/pdf/render';
import {buildCBAMReportTemplate} from '@/lib/reports/pdf-template';
import {createClient} from '@supabase/supabase-js';

export async function POST(request){
 try{
  const body=await request.json();

  const fileName=`CBAM-Report-${body.report_id || 'draft'}.pdf`;
  const filePath=`reports/${body.report_id || 'draft'}/${fileName}`;

  const template=buildCBAMReportTemplate({
   reportId:body.report_id,
   product:body.product,
   cnCode:body.cn_code,
   origin:body.origin,
   sector:body.sector
  });

  const pdfBuffer=renderCBAMReport(template);
  const upload=await uploadReportFile(filePath,pdfBuffer);

  if(body.report_id){
   const supabase=createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
   );

   await supabase.from('reports').update({
    version:1,
    file_url:upload?.url || null,
    status:'generated',
    updated_at:new Date().toISOString()
   }).eq('id',body.report_id);
  }

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
