"use client";
import {useEffect,useState} from 'react';
import Link from 'next/link';

const PAYPAL='https://www.paypal.com/ncp/payment/GYR9ZKGJRGSZY';

export default function Checkout(){
 const [draft,setDraft]=useState(null);
 useEffect(()=>{try{const raw=localStorage.getItem('cbam-professional-draft')||sessionStorage.getItem('cbam-professional-draft');if(raw)setDraft(JSON.parse(raw));}catch{}},[]);
 const reportId=draft?.reportMeta?.id||'Will be generated from your report';
 const product=draft?.form?.product||'CBAM Professional Assessment Report';
 const cn=draft?.form?.cn||'Not provided';
 return <main>
  <section className="checkoutHero"><div className="wrap">
   <div className="eyebrow">SECURE CHECKOUT</div>
   <h1>Review your order before payment.</h1>
   <p className="lead">Confirm the report details below, then continue to PayPal for the €49 EUR one-time payment.</p>
  </div></section>
  <section className="section"><div className="wrap checkoutGrid">
   <div className="checkoutCard">
    <div className="checkoutHead"><div><span>PROFESSIONAL REPORT</span><h2>CBAM Professional Assessment Report</h2></div><strong>€49 EUR</strong></div>
    <div className="checkoutSummary">
     <div><span>Report ID</span><b>{reportId}</b></div>
     <div><span>Product</span><b>{product}</b></div>
     <div><span>CN Code</span><b>{cn}</b></div>
     <div><span>Quantity</span><b>1 report</b></div>
    </div>
    <div className="checkoutIncludes"><h3>Included</h3><ul><li>Clean PDF without free watermark</li><li>Expanded assessment interpretation</li><li>Supplier and emissions data summary</li><li>Compliance evidence checklist</li><li>Professional report layout</li></ul></div>
    <a className="btn checkoutPay" href={PAYPAL}>Continue to PayPal — €49 EUR</a>
    <p className="checkoutFine">Payment is processed securely by PayPal. CBAMSearch does not receive or store your PayPal password or card details.</p>
    <div className="checkoutHelp"><b>Checkout not loading?</b><span>If PayPal shows an error, sign in to PayPal and retry, or open the checkout in another browser/private window.</span></div>
   </div>
   <aside className="checkoutAside">
    <div className="asideCard"><span className="sideKicker">BEFORE YOU PAY</span><h3>Your draft is saved</h3><p>Your Professional Report draft is stored in this browser so you can return after PayPal without re-entering the report details.</p><Link href="/cbam-report/?plan=professional">Review report details →</Link></div>
    <div className="asideCard"><span className="sideKicker">DELIVERY</span><h3>After payment</h3><p>Keep your PayPal Transaction ID and CBAM Report ID. Use the report-delivery page to send the details for payment verification and clean PDF delivery.</p><Link href="/payment-success/">Report delivery instructions →</Link></div>
   </aside>
  </div></section>
 </main>;
}