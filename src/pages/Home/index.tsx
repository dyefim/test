import SignInForm from 'components/SignInForm';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Home page</h1>
      <Link to="graph">To graph</Link>
      <SignInForm />
    </div>
  );
};

export default HomePage;
