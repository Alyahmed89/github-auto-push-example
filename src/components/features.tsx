import React from 'react';


interface FeaturesProps {
  children?: React.ReactNode;
}

export function Features({ 
  children,
  
  ...props 
}: FeaturesProps) {
  
  
  
  
  const className = `py-16 px-6 bg-background ${props.className || ''}`.trim();
  
  return (
    <section className={className} {...props}>
      
      
      <undefined />
      <undefined />
      {children}
    </section>
  );
}
