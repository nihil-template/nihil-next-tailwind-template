import React from 'react';

interface IMainBlockProps {
  children: React.ReactNode;
}

export const MainBlock = ({ children, }: IMainBlockProps) => {
  const MainBlockStyle = ``;

  return (
    <>
      <main className={MainBlockStyle}>
        {children}
      </main>
    </>
  );
};
