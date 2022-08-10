// import './App.module.css';

// import LogInForm from './LogInForm/LogInForm';

import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import LogInPage from './LoginPage/LoginPage';
import DashBoard from './DashBoard/Dashboard';

export const App = () => {
  return (
    <section>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="login" element={<LogInPage />} />
          <Route path="dashboard" element={<DashBoard />} />
        </Route>
      </Routes>
    </section>
  );
};
