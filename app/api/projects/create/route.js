import {NextResponse} from 'next/server';
import {createClient} from '@supabase/supabase-js';

export async function POST(request){
  try{
    const body=await request.json();

    const project={
      user_id: body.user_id || null,
      product_name: body.product_name || '',
      cn_code: body.cn_code || '',
      country_origin: body.country_origin || '',
      sector: body.sector || '',
      quantity: body.quantity || '',
      status:'draft'
    };

    const url=process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key=process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if(!url || !key){
      return NextResponse.json({success:true,project,message:'Project prepared. Add Supabase environment variables to enable database saving.'});
    }

    const supabase=createClient(url,key);
    const {data,error}=await supabase.from('projects').insert(project).select().single();

    if(error){
      return NextResponse.json({success:false,error:error.message},{status:500});
    }

    return NextResponse.json({success:true,project:data});
  }catch(error){
    return NextResponse.json({success:false,error:'Invalid request'},{status:400});
  }
}
