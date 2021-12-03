import { memo, useCallback } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router';
import Nav from '@/components/Nav';
import routes from '@/config/routes';

function Background() {
  return <div className="absolute inset-0 -z-1"></div>;
}

function AppLayout() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="relative h-full">
      <Background />
      <aside>
        <Nav config={routes} onSelect={navigate} active={pathname} />
      </aside>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default memo(AppLayout);
