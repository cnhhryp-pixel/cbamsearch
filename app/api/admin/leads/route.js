import {NextResponse} from 'next/server';
import {createClient} from '@supabase/supabase-js';

export async function GET(){
 try{
  const url=process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key=process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if(!url||!key) return NextResponse.json({success:false,message:'Supabase not configured'});

  const supabase=createClient(url,key);
  const {data,error}=await supabase
   .from('leads')
   .select('*')
   .order('created_at',{ascending:false});

  if(error) return NextResponse.json({success:false,error:error.message});

  return NextResponse.json({success:true,leads:data||[]});
 }catch(error){
  return NextResponse.json({success:false,error:error.message},{status:500});
 }
}
