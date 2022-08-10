import { Outlet } from 'react-router-dom';

import { AppBar } from '../AppBar/AppBar';

const Layout = () => {
  return (
    <>
      <AppBar />
      <hr />
      <Outlet />
    </>
  );
};

export default Layout;
