import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { ProjectDetailPage } from '../pages/ProjectDetailPage';
import { ROUTES } from '../../lib/routes';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route path={ROUTES.PROJECTS.DETAIL_PATTERN} element={<ProjectDetailPage />} />
    </Routes>
  );
};
