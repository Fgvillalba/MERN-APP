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

const AppRouter = () => {
	return (
		<div>
			<Router>
				<Routes>
					<Route exact path="/" element={<HomePage />} />
					<Route
						exact
						path="/login"
						element={<LoginPage />}
					/>
					<Route
						exact
						path="/register"
						element={<RegisterPage />}
					/>
					<Route
						exact
						path="/account"
						element={<AccountPage />}
					/>
					<Route
						exact
						path="/projects"
						element={<ProjectsPage />}
					/>
					<Route
						exact
						path="/project/:projectId"
						element={<ProjectPage />}
					/>
					<Route
						exact
						path="/admin/users"
						element={<UsersPage />}
					/>
					<Route
						exact
						path="*"
						element={<NotFoundPage />}
					/>
				</Routes>
			</Router>
		</div>
	);
};

export default AppRouter;