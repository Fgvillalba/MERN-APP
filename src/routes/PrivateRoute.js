import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ component: RouteComponent }) => {
	const user = null;

	if (!user) return <Navigate to="/login" />;

	return <RouteComponent />;
};

export default PrivateRoute;
