import React from 'react';
import '../styles/Loader.css';

export function Loader() {
  return (
    <div className="Loader">
      <section className="loaderItem">
        <span></span>
        <div></div>
      </section>
      <section className="loaderItem">
        <span></span>
        <div></div>
      </section>
      <section className="loaderItem">
        <span></span>
        <div></div>
      </section>
    </div>
  );
}
