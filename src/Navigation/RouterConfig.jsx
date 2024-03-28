/** @format */

import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./Routes/ProtectedRoute.jsx";
import PublicRoute from "./Routes/PublicRoute";
import WEB_PAGES from "../pages";
import PATH from "../utils/path";

function RouterConfig() {
  return (
    <Routes>
      {/* AUTH ROUTES START */}
      <Route
        path={PATH.LOGIN}
        element={<PublicRoute element={<WEB_PAGES.LOGIN />} />}
      />
      <Route
        path={PATH.LANDING_PAGE}
        element={<PublicRoute element={<WEB_PAGES.LANDING_PAGE />} />}
      />
      <Route
        path={PATH.STATS}
        element={<ProtectedRoute element={<WEB_PAGES.STATS />} />}
      />
      <Route
        path={PATH.REGISTER_STEP_ONE}
        element={<PublicRoute element={<WEB_PAGES.REGISTER_STEP_ONE />} />}
      />
      <Route
        path={PATH.REGISTER}
        element={<PublicRoute element={<WEB_PAGES.REGISTER />} />}
      />
      <Route
        path={PATH.SUBMIT_REGISTRATION}
        element={<PublicRoute element={<WEB_PAGES.SUBMIT_REGISTRATION />} />}
      />
      <Route
        path={PATH.USERS_LIST}
        element={<ProtectedRoute element={<WEB_PAGES.USERS_LIST />} />}
      />
      <Route
        path={PATH.APPLICANT_DETAILS}
        element={<ProtectedRoute element={<WEB_PAGES.APPLICANT_DETAILS />} />}
      />
      <Route
        path={PATH.NOC}
        element={<PublicRoute element={<WEB_PAGES.NOC />} />}
      />

      {/* NO PAGE FOUND */}
      <Route path={PATH.NOPAGE} element={<WEB_PAGES.NO_PAGE_FOUND />} />
    </Routes>
  );
}

export default RouterConfig;
