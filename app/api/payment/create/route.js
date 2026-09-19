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
  return NextResponse.json({success:true,payment,message:'PayPal payment flow foundation ready.'});
 }catch(error){
  return NextResponse.json({success:false,error:'Invalid request'},{status:400});
 }
}
