import Input from 'components/Input';
import Button from 'components/Button';
import styles from './styles.module.css';

const SignInForm = () => {
  return (
    <div className={styles.signInForm}>
      <legend>Sign in</legend>
      <form>
        <Input placeholder="Username" />
        <Input placeholder="Password" type="password" />
        <span className={styles.errorMessage}></span>
        <Button>Sign in</Button>
      </form>
    </div>
  );
};

export default SignInForm;
