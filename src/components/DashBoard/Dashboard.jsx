import { useLogOutRedirect } from '../../hooks/useLogOutRedirect';

// import { useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';
// import { useSelector } from 'react-redux';

// export const useLogOutRedirect = () => {
//   const navigate = useNavigate();
//   const isLoggedIn = useSelector(state => state.user.isLoggedIn);

const DashBoard = () => {
  useLogOutRedirect();
  return <>Dashboard page</>;
};
export default DashBoard;
