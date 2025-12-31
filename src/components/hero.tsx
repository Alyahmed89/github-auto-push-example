import React from 'react';


interface HeroProps {
  children?: React.ReactNode;
}

export function Hero({ 
  children,
  
  ...props 
}: HeroProps) {
  
  
  
  
  const className = `bg-gradient-to-r from-primary to-secondary text-white py-20 px-6 ${props.className || ''}`.trim();
  
  return (
    <section className={className} {...props}>
      
      
      <undefined />
      <undefined />
      <undefined />
      {children}
    </section>
  );
}
