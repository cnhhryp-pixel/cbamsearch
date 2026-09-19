import {NextResponse} from 'next/server';
import {paypalConfig,isPayPalConfigured} from '@/lib/paypal/config';
import {getPayPalAccessToken,getPayPalBaseUrl} from '@/lib/paypal/client';

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

  const response=await fetch(`${getPayPalBaseUrl()}/v2/checkout/orders`,{
   method:'POST',
   headers:{
    'Content-Type':'application/json',
    'Authorization':`Bearer ${token}`
   },
   body:JSON.stringify({
    intent:'CAPTURE',
    purchase_units:[{
     amount:{currency_code:paypalConfig.currency,value:'49.00'},
     description:'CBAM Compliance Assessment Report'
    }]
   })
  });

  const data=await response.json();
  return NextResponse.json({success:response.ok,order:data,report_id:body.report_id||null});
 }catch(error){
  return NextResponse.json({success:false,error:error.message},{status:500});
 }
}
