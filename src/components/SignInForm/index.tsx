import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from 'components/Input';
import Button from 'components/Button';
import styles from './styles.module.css';
import { useAppDispatch, useAppSelector } from 'store';
import { reset, signIn } from 'store/userSlice';
import { selectErrorMessage } from 'store/userSlice/selectors';

const SignInForm = () => {
  let navigate = useNavigate();
  const dispatch = useAppDispatch();
  const errorMessage = useAppSelector(selectErrorMessage);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    if (errorMessage) {
      dispatch(reset());
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const credentials = { username, password };

    dispatch(signIn(credentials)).then(({ meta }) => {
      if (meta.requestStatus === 'fulfilled') {
        navigate('graph');
      }
      if (meta.requestStatus === 'rejected') {
        setPassword('');
      }
    });
  };

  return (
    <div className={styles.signInForm}>
      <legend>Sign in</legend>
      <form onSubmit={handleSubmit} onChange={handleFormChange}>
        <Input
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
        />
        <Input
          placeholder="Password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <span className={styles.errorMessage}>{errorMessage}</span>
        <Button>Sign in</Button>
      </form>
    </div>
  );
};

export default SignInForm;
