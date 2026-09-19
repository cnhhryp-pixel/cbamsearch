import {NextResponse} from 'next/server';
import {createMiddlewareClient} from '@supabase/auth-helpers-nextjs';

export async function middleware(request){
 const response=NextResponse.next();
 const supabase=createMiddlewareClient({req:request,res:response});
 const {data:{session}}=await supabase.auth.getSession();

 const isAdminRoute=request.nextUrl.pathname.startsWith('/admin');

 if(isAdminRoute && !session){
  return NextResponse.redirect(new URL('/login',request.url));
 }

 if(isAdminRoute && session){
  const {data:profile}=await supabase
   .from('profiles')
   .select('role')
   .eq('id',session.user.id)
   .single();

  if(!profile || profile.role !== 'admin'){
   return NextResponse.redirect(new URL('/dashboard',request.url));
  }
 }

 return response;
}

export const config={
 matcher:['/admin/:path*']
};
