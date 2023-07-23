import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import "./index.css";
import LoginCallbackPage from "./components/LoginCallbackPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomePage />,
	},
	{
		path: "/result",
		element: <LoginCallbackPage />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<RouterProvider router={router} />
);
