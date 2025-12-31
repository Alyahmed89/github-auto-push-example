import React from 'react';


interface FooterProps {
  children?: React.ReactNode;
}

export function Footer({ 
  children,
  
  ...props 
}: FooterProps) {
  
  
  
  
  const className = `bg-gray-900 text-white py-12 px-6 ${props.className || ''}`.trim();
  
  return (
    <footer className={className} {...props}>
      
      
      <undefined />
      {children}
    </footer>
  );
}
