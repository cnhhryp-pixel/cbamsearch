import {NextResponse} from 'next/server';
import {paypalConfig,isPayPalConfigured} from '@/lib/paypal/config';

export async function POST(request){
 try{
  const body=await request.json();

  const order={
   intent:'CAPTURE',
   purchase_units:[{
    amount:{
     currency_code:paypalConfig.currency,
     value:'49.00'
    },
    description:'CBAM Compliance Assessment Report'
   }],
   report_id:body.report_id || null
  };

  return NextResponse.json({
   success:true,
   configured:isPayPalConfigured(),
   order,
   message:isPayPalConfigured()?'Ready for PayPal API order creation.':'Configure PayPal credentials first.'
  });
 }catch(error){
  return NextResponse.json({success:false,error:'Invalid request'},{status:400});
 }
}
