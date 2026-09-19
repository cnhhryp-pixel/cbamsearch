export async function sendEmail({to,subject,text}){
 const apiKey=process.env.RESEND_API_KEY;
 const from=process.env.EMAIL_FROM || 'CBAMSearch <noreply@cbamsearch.com>';

 if(!apiKey){
  return {
   success:false,
   message:'RESEND_API_KEY is not configured.'
  };
 }

 const response=await fetch('https://api.resend.com/emails',{
  method:'POST',
  headers:{
   'Authorization':`Bearer ${apiKey}`,
   'Content-Type':'application/json'
  },
  body:JSON.stringify({
   from,
   to,
   subject,
   text
  })
 });

 const data=await response.json();

 return {
  success:response.ok,
  data
 };
}
