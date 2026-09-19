import {NextResponse} from 'next/server';
import {createClient} from '@supabase/supabase-js';
import {verifyPayPalWebhook} from '@/lib/paypal/verify-webhook';

export async function POST(request){
 try{
  const event=await request.json();
  const headers={
   transmissionId:request.headers.get('paypal-transmission-id'),
   transmissionTime:request.headers.get('paypal-transmission-time'),
   certUrl:request.headers.get('paypal-cert-url'),
   authAlgo:request.headers.get('paypal-auth-algo'),
   transmissionSig:request.headers.get('paypal-transmission-sig')
  };

  const verification=await verifyPayPalWebhook(headers,event);

  if(!verification.verified){
   return NextResponse.json({success:false,message:'Webhook verification failed'},{status:401});
  }

  if(event.event_type !== 'PAYMENT.CAPTURE.COMPLETED'){
   return NextResponse.json({success:true,message:'Event ignored'});
  }

  const orderId=event.resource?.supplementary_data?.related_ids?.order_id;

  if(!orderId){
   return NextResponse.json({success:false,message:'Missing order id'},{status:400});
  }

  const supabase=createClient(
   process.env.NEXT_PUBLIC_SUPABASE_URL,
   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );

  const {data:payment,error}=await supabase
   .from('payments')
   .update({status:'completed',updated_at:new Date().toISOString()})
   .eq('paypal_order_id',orderId)
   .select()
   .single();

  if(error){
   return NextResponse.json({success:false,error:error.message},{status:400});
  }

  if(payment?.report_id){
   await supabase
    .from('reports')
    .update({status:'paid'})
    .eq('id',payment.report_id);
  }

  return NextResponse.json({success:true,payment});
 }catch(error){
  return NextResponse.json({success:false,error:error.message},{status:500});
 }
}
