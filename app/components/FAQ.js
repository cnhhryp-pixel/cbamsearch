export default function FAQ({items}){
 const json={"@context":"https://schema.org","@type":"FAQPage",mainEntity:items.map(x=>({"@type":"Question",name:x.question||x.q,acceptedAnswer:{"@type":"Answer",text:x.answer||x.a}}))};
 return <section className="faq"><div className="eyebrow">Common questions</div><h2>CBAM FAQ</h2>{items.map(x=><details key={x.question||x.q}><summary>{x.question||x.q}</summary><p>{x.answer||x.a}</p></details>)}<script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(json)}}/></section>
}