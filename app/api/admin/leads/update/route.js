import {NextResponse} from 'next/server';
import {createClient} from '@supabase/supabase-js';

export async function POST(request){
 try{
  const body=await request.json();
  const url=process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key=process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if(!url||!key) return NextResponse.json({success:false});

  const supabase=createClient(url,key);
  const {data,error}=await supabase
   .from('leads')
   .update({
    lead_status:body.lead_status,
    notes:body.notes || null,
    follow_up_date:body.follow_up_date || null
   })
   .eq('id',body.id)
   .select();

  if(error) return NextResponse.json({success:false,error:error.message});

  return NextResponse.json({success:true,lead:data?.[0]});
 }catch(error){
  return NextResponse.json({success:false,error:error.message},{status:500});
 }
}
