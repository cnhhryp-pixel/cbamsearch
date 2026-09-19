import {NextResponse} from 'next/server';
import {createClient} from '@supabase/supabase-js';

export async function POST(request){
 try{
  const body=await request.json();
  const url=process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key=process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const report={
    project_id:body.project_id || null,
    user_id:body.user_id || null,
    report_type:'cbam-assessment',
    status:'processing',
    payment_status:'pending',
    price:49
  };
  if(!url||!key){
   return NextResponse.json({success:true,report,message:'Report prepared. Add Supabase environment variables to save.'});
  }
  const supabase=createClient(url,key);
  const {data,error}=await supabase.from('reports').insert(report).select().single();
  if(error){return NextResponse.json({success:false,error:error.message},{status:500});}
  return NextResponse.json({success:true,report:data});
 }catch(error){
  return NextResponse.json({success:false,error:'Invalid request'},{status:400});
 }
}
