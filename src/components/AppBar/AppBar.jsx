import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { UserMenu } from '../UserMenu/UserMenu';

export const AppBar = () => {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);
  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: 12,
      }}
    >
      <nav>
        {!isLoggedIn && <Link to="/login">Log in</Link>}
        {isLoggedIn && <Link to="/dashboard">Dashboard</Link>}
      </nav>
      {isLoggedIn && <UserMenu />}
    </header>
  );
};

/* <header style={{ padding: 8, borderBottom: '1px solid black', margin: 12 }}></header> */
