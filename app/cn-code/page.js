import { Suspense } from 'react';
import SearchClient from './SearchClient';

export const metadata = {
  title: 'CBAM CN Code Lookup & Database',
  description: 'Search CBAM CN codes and product descriptions by code, sector or product name.',
  alternates: { canonical: '/cn-code/' }
};

export default function Page() {
  return (
    <main className="section">
      <div className="wrap">
        <div className="eyebrow">Classification database</div>
        <h1>CBAM CN Code Lookup</h1>
        <p className="lead">
          Search the Combined Nomenclature references used to identify goods in EU CBAM scope.
          The MVP starts with high-value sector records and will expand into a versioned database.
        </p>
        <Suspense fallback={<div className="card"><p>Loading CN code search…</p></div>}>
          <SearchClient />
        </Suspense>
        <div className="sourcebox">
          <b>Primary source</b>
          <p>
            Regulation (EU) 2023/956, Annex I. Scope can be amended; current consolidated
            legislation and TARIC should be checked for customs decisions.
          </p>
          <a href="https://eur-lex.europa.eu/eli/reg/2023/956/oj">Open EUR-Lex source →</a>
        </div>
      </div>
    </main>
  );
}
