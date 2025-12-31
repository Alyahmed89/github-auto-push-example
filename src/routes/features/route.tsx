
import React from 'react';

import { header } from '~/components/header';
import { features } from '~/components/features';
import { footer } from '~/components/footer';



export default function featuresPage() {
  
  return (
    <>
      <div className="features-page">
        <h1>Features - GitHub Auto-Push Demo</h1>
      <header />
      <features />
      <footer />
      </div>
    </>
  );
}

export function meta() {
  return [
    { title: 'Features - GitHub Auto-Push Demo' },
    { name: 'description', content: '' },
  ];
}
