import { Link } from 'react-router-dom';
import { useAppSelector } from 'store';
import { selectUsername } from 'store/userSlice/selectors';
import Chart from './Chart';
import graphData from 'mocks/graphData.json';

const GraphPage = () => {
  const username = useAppSelector(selectUsername);

  return (
    <div>
      <Link to="/">To home page</Link>
      <h1>{username}</h1>
      <Chart data={graphData} label="Patients 2022" />
    </div>
  );
};

export default GraphPage;
