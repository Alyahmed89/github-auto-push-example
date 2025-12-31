import React from 'react';


interface HeaderProps {
  children?: React.ReactNode;
}

export function Header({ 
  children,
  
  ...props 
}: HeaderProps) {
  
  
  
  
  const className = `bg-white shadow-sm border-b border-gray-200 px-6 py-4 ${props.className || ''}`.trim();
  
  return (
    <header className={className} {...props}>
      
      
      <undefined />
      <undefined />
      {children}
    </header>
  );
}
