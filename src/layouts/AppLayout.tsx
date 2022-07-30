import React from 'react';
import { SiteMeta } from '@/components';
import { ISiteMetaProps } from '@/types';
import {
  FooterBlock, HeaderBlock, MainBlock, NavBlock
} from '@/components/Layout';

const AppLayout = ({ children, meta, }: ISiteMetaProps) => {
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
