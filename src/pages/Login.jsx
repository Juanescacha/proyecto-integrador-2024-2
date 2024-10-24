import { useCallback, useEffect } from "react"
import useAuthStore from "@/stores/use-auth-store.js"
import UserDAO from "@/daos/UserDAO.js"
import { useNavigate } from "react-router-dom"
import { Canvas } from "@react-three/fiber"
import { Center, OrbitControls, PerspectiveCamera } from "@react-three/drei"
import Background from "@/components/Background"

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
		return <p className="text-2xl text-white">Cargando...</p>
	}

	return (
		<>
			<div className="absolute inset-0 -z-10 h-full w-full">
				<Canvas camera={{ position: [0, 0, 3] }}>
					{/*<PerspectiveCamera makeDefault position={[0, -0.4, 4]} />*/}
					<OrbitControls
						enableZoom={false}
						autoRotate
						autoRotateSpeed={0.2}
					/>
					<Center>
						<Background />
					</Center>
					<ambientLight intensity={1} />
					<directionalLight intensity={0.5} position={[10, 10, 10]} />
				</Canvas>
			</div>
			<div className="flex h-screen items-center justify-center">
				<div className="flex flex-col items-center justify-center gap-5 rounded-3xl p-8">
					<img src="/assets/logo.png" alt="logo" className="w-96" />
					<span className="border-black text-4xl font-extrabold uppercase text-white">
						Terra Virtual
					</span>
					<button
						className="cursor-pointer rounded-xl border-none bg-blue-500 px-10 py-2.5 text-white hover:bg-blue-700"
						onClick={handleLogin}>
						Iniciar sesión con Google
					</button>
				</div>
			</div>
		</>
	)
}

export default Login
