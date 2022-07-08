import { useAppDispatch, useAppSelector } from 'store';
import { selectUsername } from 'store/userSlice/selectors';
import Chart from './Chart';
import graphData from 'mocks/graphData.json';
import Button from 'components/Button';

import styles from './styles.module.css';
import { reset } from 'store/userSlice';

const GraphPage = () => {
  const dispatch = useAppDispatch();
  const username = useAppSelector(selectUsername);

  const signOut = () => {
    dispatch(reset());
  };

  return (
    <div className={styles.graphPage}>
      <h1>{username}</h1>
      <Chart data={graphData} label="Patients 2022" />
      <Button onClick={signOut}>Sign out</Button>
    </div>
  );
};

export default GraphPage;
