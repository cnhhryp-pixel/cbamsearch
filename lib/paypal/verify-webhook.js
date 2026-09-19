export async function verifyPayPalWebhook(headers, eventBody){
 const clientId=process.env.PAYPAL_CLIENT_ID;
 const secret=process.env.PAYPAL_CLIENT_SECRET;
 const webhookId=process.env.PAYPAL_WEBHOOK_ID;

 if(!clientId || !secret || !webhookId){
  return {verified:false,message:'PayPal credentials missing'};
 }

 // Placeholder verification layer.
 // Production should request OAuth token and call
 // /v1/notifications/verify-webhook-signature
 // with PayPal transmission headers and webhook_id.

 return {
  verified:true,
  webhookId,
  event:eventBody.event_type
 };
}
