import React from 'react';
import { IHaveChildren } from '@/types';

export const MainBlock = ({ children, }: IHaveChildren) => {
  const MainBlockStyle = ``;

  return (
    <>
      <main className={MainBlockStyle}>
        {children}
      </main>
    </>
  );
};
