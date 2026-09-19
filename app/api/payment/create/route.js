import {NextResponse} from 'next/server';

export async function POST(request){
 try{
  const body=await request.json();

  const payment={
   report_id:body.report_id || null,
   amount:49,
   currency:'EUR',
   provider:'paypal',
   status:'pending'
  };

  const paypal={
   order_status:'CREATED',
   approval_url:null,
   message:'PayPal credentials required to create live checkout order.'
  };

  return NextResponse.json({success:true,payment,paypal});
 }catch(error){
  return NextResponse.json({success:false,error:'Invalid request'},{status:400});
 }
}
