import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Container, Content, Header, Sidebar } from 'rsuite';

function getElement(fn: Parameters<typeof React.lazy>[0]) {
  const Page = React.lazy(fn);
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Page />
    </React.Suspense>
  );
}

function AppRoute() {
  return (
    <HashRouter>
      <Container className="h-full">
        <Sidebar>Sidebar</Sidebar>
        <Container>
          <Header>Header</Header>
          <Content>
            <Routes>
              <Route
                path="/"
                element={getElement(() => import('@/pages/Home'))}
              />
            </Routes>
          </Content>
        </Container>
      </Container>
    </HashRouter>
  );
}

export default React.memo(AppRoute);
