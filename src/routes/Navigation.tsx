import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Navigate,
} from 'react-router-dom';
import FormikPage from '../03-forms/pages/FormikPage';
import RegisterPage from '../03-forms/pages/RegisterPage';
import logo from '../logo.svg';

const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React logo" />

          <ul>
            <li>
              <NavLink
                to="/register"
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Register
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik"
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Formik
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/formik" element={<FormikPage />} />
          <Route path="/*" element={<Navigate to="/formik" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Navigation;
