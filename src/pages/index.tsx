import React from 'react';
import AppLayout from '@/layouts/AppLayout';
import { useSiteMeta } from '@/hooks';

const IndexPage = () => {
  const IndexPageStyle = ``;

  const meta = useSiteMeta({
    title: '홈',
    url: '/',
  });

  return (
    <>
      <AppLayout meta={meta}>
        <div id='index-page' className={IndexPageStyle}>메인</div>
      </AppLayout>
    </>
  );
};

export default IndexPage;
