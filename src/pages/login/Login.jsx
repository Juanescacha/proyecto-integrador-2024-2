import { useCallback, useEffect } from "react"
import useAuthStore from "@/stores/use-auth-store"
import UserDAO from "@/daos/UserDAO"
import { useNavigate } from "react-router-dom"
import "./Login.css"

const Login = () => {
	const { user, loginGoogleWithPopup, logout, observeAuthState, loading } =
		useAuthStore()

	const navigate = useNavigate()

	useEffect(() => {
		observeAuthState()
	}, [observeAuthState])

	useEffect(() => {
		const registerUser = async () => {
			if (user) {
				const newUser = {
					email: user.email,
					name: user.displayName,
					photo: user.photoURL,
				}
				const { success: userExists } = await UserDAO.getUserByEmail(
					newUser.email,
				)
				if (!userExists) {
					await UserDAO.createUser(newUser)
				}
			}
		}

		registerUser()
	}, [user, navigate])

	const handleLogin = useCallback(() => {
		loginGoogleWithPopup()
	}, [loginGoogleWithPopup])

	const handleLogout = useCallback(() => {
		logout()
	}, [logout])

	if (loading) {
		return <p className="loading-text">Cargando...</p>
	}

	return (
		<div className="container-login">
			{user ? (
				<>
					<p className="welcome-text">
						Bienvenido, {user.displayName}
					</p>
					<button onClick={() => navigate("/world")}>Mundo 3D</button>
					<button className="logout-button" onClick={handleLogout}>
						Cerrar sesión
					</button>
				</>
			) : (
				<button onClick={handleLogin}>Iniciar sesión</button>
			)}
		</div>
	)
}

export default Login
