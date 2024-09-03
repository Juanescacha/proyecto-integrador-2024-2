import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import World from "@/World.jsx"
import Login from "@/pages/login/Login.jsx"
import "@/index.css"

const router = createBrowserRouter([
	{
		path: "/",
		element: <Login />,
	},
	{
		path: "/world",
		element: <World />,
	},
])

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
		<World />
	</StrictMode>,
)
