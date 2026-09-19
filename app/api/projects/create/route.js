import {NextResponse} from 'next/server';

export async function POST(request){
  try{
    const body=await request.json();
    const project={
      product_name: body.product_name || '',
      cn_code: body.cn_code || '',
      country_origin: body.country_origin || '',
      sector: body.sector || '',
      quantity: body.quantity || '',
      status:'draft'
    };
    return NextResponse.json({success:true,project,message:'Project API foundation ready.'});
  }catch(error){
    return NextResponse.json({success:false,error:'Invalid request'},{status:400});
  }
}
