import React from 'react';
import { ISiteMeta, SiteMeta } from '@/components';
import {
  FooterBlock, HeaderBlock, MainBlock, NavBlock
} from '@/components/Layout';

interface IAppLayoutProps {
  children: React.ReactNode;
  meta: ISiteMeta;
}

const AppLayout = ({ children, meta, }: IAppLayoutProps) => {
  return (
    <>
      <SiteMeta meta={meta} />
      <HeaderBlock />
      <NavBlock />

      <MainBlock>
        {children}
      </MainBlock>

      <FooterBlock />
    </>
  );
};

export default AppLayout;
