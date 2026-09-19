import {NextResponse} from 'next/server';
import {getSupabaseClient} from '@/lib/storage/supabase';

export async function POST(request){
 try{
  const body=await request.json();

  if(!body.report_id){
   return NextResponse.json({success:false,message:'Missing report id.'},{status:400});
  }

  const supabase=getSupabaseClient();
  if(!supabase){
   return NextResponse.json({success:false,message:'Storage is not configured.'},{status:500});
  }

  const filePath=`reports/${body.report_id}/CBAM-Report-${body.report_id}.pdf`;

  const {data}=supabase.storage
   .from('reports')
   .getPublicUrl(filePath);

  return NextResponse.json({
   success:true,
   file_name:`CBAM-Report-${body.report_id}.pdf`,
   download_url:data.publicUrl
  });

 }catch(error){
  return NextResponse.json({success:false,error:error.message},{status:500});
 }
}
