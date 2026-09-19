export const paypalConfig = {
  clientId: process.env.PAYPAL_CLIENT_ID || '',
  clientSecret: process.env.PAYPAL_CLIENT_SECRET || '',
  mode: process.env.PAYPAL_MODE || 'sandbox',
  currency: 'EUR'
};

export function isPayPalConfigured(){
  return Boolean(paypalConfig.clientId && paypalConfig.clientSecret);
}
