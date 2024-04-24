import { FC } from 'react';
import Nav from '../Nav/Nav';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <main className="main">
      <div className="container">
        <Nav />
        {children}
      </div>
    </main>
  );
};

export default Layout;
