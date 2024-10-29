import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from "@/pages/Login"
import Introduction from "@/pages/Introduction.jsx"
import Menu from "@/pages/Menu.jsx"

const router = createBrowserRouter([
	{
		path: "/",
		element: <Login />,
	},
	{
		path: "/intro",
		element: <Introduction />,
	},
	{
		path: "/menu",
		element: <Menu />,
	},
])

const App = () => {
	return <RouterProvider router={router} />
}
export default App
