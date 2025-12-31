
import React from 'react';

import { header } from '~/components/header';
import { footer } from '~/components/footer';



export default function aboutPage() {
  
  return (
    <>
      <div className="about-page">
        <h1>About - GitHub Auto-Push Demo</h1>
      <header />
      <footer />
      </div>
    </>
  );
}

export function meta() {
  return [
    { title: 'About - GitHub Auto-Push Demo' },
    { name: 'description', content: '' },
  ];
}
