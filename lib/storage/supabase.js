import {createClient} from '@supabase/supabase-js';

export function getSupabaseClient(){
 const url=process.env.NEXT_PUBLIC_SUPABASE_URL;
 const key=process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
 if(!url||!key) return null;
 return createClient(url,key);
}

export async function uploadReportFile(path,file){
 const supabase=getSupabaseClient();
 if(!supabase) return {success:false,message:'Supabase is not configured'};

 const {data,error}=await supabase.storage
  .from('reports')
  .upload(path,file,{upsert:true});

 if(error) return {success:false,error:error.message};

 const {data:urlData}=supabase.storage
  .from('reports')
  .getPublicUrl(path);

 return {success:true,path:data.path,url:urlData.publicUrl};
}
