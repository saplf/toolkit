import React from 'react';

type RouteConfig = {
  path: string;

  element: React.ReactElement;

  title: string;
};

function getElement(fn: Parameters<typeof React.lazy>[0]) {
  const Page = React.lazy(fn);
  return (
    <React.Suspense fallback={<div className="h-full w-full">加载中...</div>}>
      <Page />
    </React.Suspense>
  );
}

const routes: RouteConfig[] = [
  {
    path: '',
    element: getElement(() => import('@/pages/Home')),
    title: '首页',
  },
  {
    path: 'pdf',
    element: getElement(() => import('@/pages/Pdf')),
    title: 'PDF',
  },
];

export default routes;
