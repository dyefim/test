import { Route, Routes } from 'react-router-dom';
import HomePage from 'pages/Home';
import GraphPage from 'pages/Graph';
import PrivateRoute from './PrivateRoute';

const routes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="graph" element={<PrivateRoute component={GraphPage} />} />
    </Routes>
  );
};

export default routes;
