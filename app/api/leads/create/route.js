import {NextResponse} from 'next/server';
import {createClient} from '@supabase/supabase-js';
import {buildLeadCustomerEmail,buildLeadAdminEmail} from '@/lib/email/lead';
import {sendEmail} from '@/lib/email/send';

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

  const lead=data?.[0] || body;
  const customerEmail=lead.email ? await sendEmail({
   to:lead.email,
   ...buildLeadCustomerEmail(lead)
  }) : null;

  const adminEmail=process.env.ADMIN_EMAIL ? await sendEmail({
   to:process.env.ADMIN_EMAIL,
   ...buildLeadAdminEmail(lead)
  }) : null;

  return NextResponse.json({success:true,lead,notifications:{customerEmail,adminEmail}});
 }catch(error){
  return NextResponse.json({success:false,error:error.message},{status:500});
 }
}
