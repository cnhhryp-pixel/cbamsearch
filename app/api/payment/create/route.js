import {NextResponse} from 'next/server';
import {paypalConfig,isPayPalConfigured} from '@/lib/paypal/config';

export async function POST(request){
 try{
  const body=await request.json();

  const payment={
   report_id:body.report_id || null,
   amount:49,
   currency:paypalConfig.currency,
   provider:'paypal',
   status:'pending'
  };

  const paypal={
   order_status:'CREATED',
   approval_url:null,
   configured:isPayPalConfigured(),
   message:isPayPalConfigured() ? 'PayPal checkout ready for API connection.' : 'Add PayPal credentials in Vercel environment variables.'
  };

  return NextResponse.json({success:true,payment,paypal});
 }catch(error){
  return NextResponse.json({success:false,error:'Invalid request'},{status:400});
 }
}
