export async function verifyPayPalWebhook({headers,body}){
 const clientId=process.env.PAYPAL_CLIENT_ID;
 const secret=process.env.PAYPAL_CLIENT_SECRET;
 const webhookId=process.env.PAYPAL_WEBHOOK_ID;

 if(!clientId || !secret || !webhookId){
  return {verified:false,message:'PayPal verification config missing'};
 }

 // Verification request placeholder.
 // Production should call PayPal /v1/notifications/verify-webhook-signature
 // with transmission headers and webhook event body.

 return {
  verified:true,
  webhookId
 };
}
