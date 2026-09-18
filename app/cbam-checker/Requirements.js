import { definitiveRequirements } from '../../data/requirements';

export default function Requirements() {
  return (
    <section className="requirements">
      <div className="eyebrow">If your goods are covered</div>
      <h2>What you need to do next</h2>
      <div className="grid">
        {definitiveRequirements.slice(0, 3).map((x, i) => (
          <a className="card" href={x.href} key={x.title}>
            <span className="stepNo">0{i + 1}</span>
            <b>{x.title} →</b>
            <p>{x.text}</p>
          </a>
        ))}
      </div>
      <p>
        <a href="/guides/importer-requirements/">View the full importer checklist →</a>
      </p>
    </section>
  );
}
