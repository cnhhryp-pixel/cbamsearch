import {NextResponse} from 'next/server';
import {createClient} from '@supabase/supabase-js';
import {getLeadFollowUpEmail} from '@/lib/email/followup';
import {sendEmail} from '@/lib/email/send';

export async function GET(){
 try{
  const url=process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key=process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if(!url||!key){
   return NextResponse.json({success:false,message:'Supabase not configured'});
  }

  const supabase=createClient(url,key);
  const {data:leads,error}=await supabase
   .from('leads')
   .select('*')
   .eq('lead_status','new');

  if(error){
   return NextResponse.json({success:false,error:error.message});
  }

  const results=[];

  for(const lead of leads || []){
   const created=new Date(lead.created_at);
   const days=Math.floor((Date.now()-created.getTime())/86400000);
   let step=null;

   if(days>=7) step='day7';
   else if(days>=3) step='day3';
   else if(days>=0) step='day0';

   if(step && lead.email){
    const email=await sendEmail({
     to:lead.email,
     ...getLeadFollowUpEmail(step,lead)
    });
    results.push({lead:lead.id,step,email});
   }
  }

  return NextResponse.json({success:true,results});
 }catch(error){
  return NextResponse.json({success:false,error:error.message},{status:500});
 }
}
