import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logIn } from '../../redux/mySlice';

export const LogInForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = e => {
    const form = e.currentTarget;
    e.preventDefault();
    console.log(form.elements.login.value);
    dispatch(logIn(form.elements.login.value));
    e.currentTarget.reset();
    navigate('/dashboard', { replace: true });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="login" />
        <button type="submit">Log in</button>
      </form>
    </>
  );
};

// export default LogInForm;
