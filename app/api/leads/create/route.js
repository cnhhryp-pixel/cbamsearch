import {NextResponse} from 'next/server';
import {createClient} from '@supabase/supabase-js';

export async function POST(request){
 try{
  const body=await request.json();
  const url=process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key=process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if(!url||!key){
   return NextResponse.json({success:false,message:'Supabase not configured'});
  }

  const supabase=createClient(url,key);
  const {data,error}=await supabase.from('leads').insert({
   name:body.name,
   email:body.email,
   company:body.company,
   product:body.product,
   cn_code:body.cn_code,
   country:body.country
  }).select();

  if(error){
   return NextResponse.json({success:false,error:error.message});
  }

  return NextResponse.json({success:true,lead:data?.[0]});
 }catch(error){
  return NextResponse.json({success:false,error:error.message},{status:500});
 }
}
