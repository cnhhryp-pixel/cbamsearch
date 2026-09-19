import {createClient} from '@supabase/supabase-js';

export async function uploadReportPDF({fileName,fileBuffer}){
 const supabase=createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
 );

 const bucket=process.env.REPORTS_BUCKET || 'reports';

 const {data,error}=await supabase.storage
  .from(bucket)
  .upload(fileName,fileBuffer,{
   contentType:'application/pdf',
   upsert:true
  });

 if(error){
  return {
   success:false,
   error:error.message
  };
 }

 const {data:urlData}=supabase.storage
  .from(bucket)
  .getPublicUrl(data.path);

 return {
  success:true,
  path:data.path,
  url:urlData.publicUrl
 };
}
