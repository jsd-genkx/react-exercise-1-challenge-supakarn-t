import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "./App.css";
import Layout from "./components/Layout.jsx";
import App from "./App.jsx";
import Page01 from "./components/1.2_pages/Page01.jsx";
import Page02 from "./components/1.2_pages/Page02.jsx";
import Page03 from "./components/1.2_pages/Page03.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "",
				element: <App />,
			},
		],
	},
	{
		path: "/page01",
		element: <Layout />,
		children: [
			{
				path: "",
				element: <Page01 />,
			},
		],
	},
	{
		path: "/page02",
		element: <Layout />,
		children: [
			{
				path: "",
				element: <Page02 />,
			},
		],
	},
	{
		path: "/page03",
		element: <Layout />,
		children: [
			{
				path: "",
				element: <Page03 />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
