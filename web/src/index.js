import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/HomePage";
import "./index.css";
import SuccessPage from "./components/SuccessPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomePage />,
	},
	{
		path: "/success",
		element: <SuccessPage />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<RouterProvider router={router} />
);
