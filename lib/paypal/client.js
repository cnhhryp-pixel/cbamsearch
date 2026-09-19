import {paypalConfig} from './config';

export async function getPayPalAccessToken(){
 if(!paypalConfig.clientId || !paypalConfig.clientSecret){
  return null;
 }

 const base = paypalConfig.mode === 'live'
  ? 'https://api-m.paypal.com'
  : 'https://api-m.sandbox.paypal.com';

 const auth = Buffer.from(
  `${paypalConfig.clientId}:${paypalConfig.clientSecret}`
 ).toString('base64');

 const response = await fetch(`${base}/v1/oauth2/token`,{
  method:'POST',
  headers:{
   'Authorization':`Basic ${auth}`,
   'Content-Type':'application/x-www-form-urlencoded'
  },
  body:'grant_type=client_credentials'
 });

 if(!response.ok){
  return null;
 }

 const data = await response.json();
 return data.access_token;
}

export function getPayPalBaseUrl(){
 return paypalConfig.mode === 'live'
 ? 'https://api-m.paypal.com'
 : 'https://api-m.sandbox.paypal.com';
}
