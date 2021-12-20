import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import AccountPage from "../pages/AccountPage";
import ProjectsPage from "../pages/ProjectsPage";
import ProjectPage from "../pages/ProjectPage";
import UsersPage from "../pages/admin/UsersPage";
import NotFoundPage from "../pages/NotFoundPage";
import Layout from "../components/Layouts/Layout";
import PrivateRoute from "./PrivateRoute";

const AppRouter = () => {
	return (
		<div>
			<Router>
				<Layout>
					<Routes>
						<Route exact path="/" element={<HomePage />} />
						<Route exact path="/login" element={<LoginPage />} />
						<Route
							exact
							path="/register"
							element={<RegisterPage />}
						/>
						<Route
							exact
							path="/account"
							element={<PrivateRoute component={AccountPage} />}
						/>
						<Route
							exact
							path="/projects"
							element={<PrivateRoute component={ProjectsPage} />}
						/>
						<Route
							exact
							path="/project/:projectId"
							element={<PrivateRoute component={ProjectPage} />}
						/>
						<Route
							exact
							path="/admin/users"
							element={<PrivateRoute component={UsersPage} />}
						/>
						<Route exact path="*" element={<NotFoundPage />} />
					</Routes>
				</Layout>
			</Router>
		</div>
	);
};

export default AppRouter;
