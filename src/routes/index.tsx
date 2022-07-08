import { Route, Routes } from 'react-router-dom';
import HomePage from 'pages/Home';
import GraphPage from 'pages/Graph';

const routes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="graph" element={<GraphPage />} />
    </Routes>
  );
};

export default routes;
