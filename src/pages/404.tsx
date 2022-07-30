import React from 'react';
import { useSiteMeta } from '@/hooks';
import AppLayout from '@/layouts/AppLayout';

const NotPound404 = () => {
  const NotPound404Style = ``;

  const meta = useSiteMeta({
    title: '에러 404',
    url: '/404',
  });

  return (
    <>
      <AppLayout meta={meta}>
        <div id='404-page' className={NotPound404Style}>페이지를 찾을 수 없습니다.</div>
      </AppLayout>
    </>
  );
};

export default NotPound404;
