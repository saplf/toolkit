import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import AppLayout from '@/layouts/App';
import routes from '@/config/routes';

function AppRoute() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          {routes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default React.memo(AppRoute);
