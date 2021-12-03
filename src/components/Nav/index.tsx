import React, { useCallback } from 'react';
import './index.css';

type Config = {
  path: string;

  title: string;
};

type NavProps = {
  config: Config[];

  onSelect?: (path: string) => void;

  active?: string;
};

type NavItemProps = {
  config: Config;

  onSelect?: (path: string) => void;

  active: boolean;
};

const NavItem: React.FC<NavItemProps> = React.memo(function NavItem({
  config: { path, title },
  onSelect,
  active,
}) {
  const onClick = useCallback(() => {
    onSelect?.(path);
  }, [path, onSelect]);
  return <span onClick={onClick}>{title}</span>;
});

function Nav({ config, onSelect, active }: NavProps) {
  return (
    <nav className="nav">
      {config.map(it => (
        <NavItem
          key={it.path}
          config={it}
          active={active === it.path}
          onSelect={onSelect}
        />
      ))}
    </nav>
  );
}

export default React.memo(Nav);
