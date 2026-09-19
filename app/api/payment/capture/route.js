import {NextResponse} from 'next/server';

export async function POST(request){
 try{
  const body=await request.json();

  const result={
   order_id:body.order_id || null,
   report_id:body.report_id || null,
   payment_status:'paid',
   report_status:'completed',
   message:'Payment capture workflow foundation ready.'
  };

  return NextResponse.json({success:true,result});
 }catch(error){
  return NextResponse.json({success:false,error:'Invalid request'},{status:400});
 }
}
