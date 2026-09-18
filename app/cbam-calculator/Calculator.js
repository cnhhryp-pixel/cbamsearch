'use client';
import{useMemo,useState}from'react';
import{certificatePrices}from'../../data/certificate-prices';
import{countries}from'../../data/countries';
import{calculateCBAMCost}from'../../lib/cbam-calculator-engine';

const published=certificatePrices.filter(x=>x.price!==null);

export default function Calculator(){
 const[cnCode,setCnCode]=useState('7306');
 const[country,setCountry]=useState(countries[0]?.name||'China');
 const[qty,setQty]=useState(10);
 const[em,setEm]=useState(2);
 const[period,setPeriod]=useState(published.at(-1)?.period||'');
 const[foreign,setForeign]=useState(0);
 const result=useMemo(()=>calculateCBAMCost({cnCode,country,quantity:qty,embeddedEmissions:em,period,carbonPriceCredit:foreign}),[cnCode,country,qty,em,period,foreign]);
 const money=v=>Number(v||0).toLocaleString(undefined,{maximumFractionDigits:2});
 const scopeLabel={covered:'Covered record',potential:'Potential CBAM scope',excluded:'Excluded by listed exception','needs-detail':'More CN detail needed',unknown:'Scope not confirmed'}[result.scope?.status]||'Check classification';

 return <div className="calc">
  <div className="calcInputs">
   <label>CN code<input value={cnCode} inputMode="numeric" placeholder="e.g. 7306" onChange={e=>setCnCode(e.target.value)}/></label>
   <label>Origin country<select value={country} onChange={e=>setCountry(e.target.value)}>{countries.map(x=><option value={x.name} key={x.slug}>{x.name}</option>)}</select></label>
   <label>Imported quantity (tonnes)<input type="number" min="0" step="0.01" value={qty} onChange={e=>setQty(e.target.value)}/></label>
   <label>Embedded emissions (tCO₂e / tonne)<input type="number" min="0" step="0.01" value={em} onChange={e=>setEm(e.target.value)} placeholder="Enter verified value"/></label>
   <label>Certificate price period<select value={period} onChange={e=>setPeriod(e.target.value)}>{published.map(x=><option value={x.period} key={x.period}>{x.period} — €{x.price.toFixed(2)}</option>)}</select></label>
   <label>Eligible carbon price already paid (€ total)<input type="number" min="0" step="0.01" value={foreign} onChange={e=>setForeign(e.target.value)}/></label>
  </div>
  <div className="calcResult">
   <span>CBAM assessment</span><h3>{scopeLabel}</h3>
   {result.scope?.record&&<p>{result.scope.record.display} · {result.scope.record.name}<br/>{result.scope.record.sector}</p>}
   {result.status==='estimated'?<><span>Indicative gross exposure</span><strong>€{money(result.gross)}</strong><p>{money(result.totalEmissions)} tCO₂e × €{result.price.record.price.toFixed(2)} ({result.price.record.period})</p><hr/><span>Less entered carbon-price credit</span><b>− €{money(result.credit)}</b><h3>Simple net estimate: €{money(result.net)}</h3></>:<div className="calcMessage"><b>Estimate not calculated</b><p>{result.status==='excluded'?'This code matches a listed exclusion in the current scope dataset.':result.status==='classification-needed'?'The current dataset cannot confirm this CN classification. Check the full CN code before estimating cost.':result.status==='emissions-needed'?'No validated default emission value is loaded for this combination. Enter verified embedded emissions manually.':'A published certificate price is required for the selected period.'}</p></div>}
   <p className="small">Planning estimate only. Scope, emissions data, carbon-price deductions and definitive adjustments must be checked against the applicable CBAM rules and source data.</p>
  </div>
 </div>
}