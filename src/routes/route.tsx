
import React from 'react';

import { header } from '~/components/header';
import { hero } from '~/components/hero';
import { features } from '~/components/features';
import { footer } from '~/components/footer';



export default function homePage() {
  
  return (
    <>
      <div className="home-page">
        <h1>Home - GitHub Auto-Push Demo</h1>
      <header />
      <hero />
      <features />
      <footer />
      </div>
    </>
  );
}

export function meta() {
  return [
    { title: 'Home - GitHub Auto-Push Demo' },
    { name: 'description', content: '' },
  ];
}
