import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../../redux/mySlice';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const login = useSelector(state => state.user.login);
  return (
    <>
      {login} <button onClick={() => dispatch(logOut())}>Log out</button>
    </>
  );
};
