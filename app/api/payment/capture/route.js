import {NextResponse} from 'next/server';
import {getPayPalAccessToken,getPayPalBaseUrl} from '@/lib/paypal/client';
import {isPayPalConfigured} from '@/lib/paypal/config';

export async function POST(request){
 try{
  const body=await request.json();

  if(!isPayPalConfigured()){
   return NextResponse.json({success:false,message:'PayPal credentials are not configured.'});
  }

  const token=await getPayPalAccessToken();
  if(!token){
   return NextResponse.json({success:false,message:'Unable to get PayPal access token.'});
  }

  if(!body.order_id){
   return NextResponse.json({success:false,message:'Missing PayPal order id.'});
  }

  const response=await fetch(`${getPayPalBaseUrl()}/v2/checkout/orders/${body.order_id}/capture`,{
   method:'POST',
   headers:{
    'Content-Type':'application/json',
    'Authorization':`Bearer ${token}`
   }
  });

  const data=await response.json();
  const paid=response.ok && data.status==='COMPLETED';

  return NextResponse.json({
   success:response.ok,
   payment:data,
   report_id:body.report_id || null,
   sync:{
    payment_status:paid?'paid':'pending',
    report_status:paid?'completed':'pending'
   }
  });

 }catch(error){
  return NextResponse.json({success:false,error:error.message},{status:500});
 }
}
