import { useCallback, useEffect } from "react"
import useAuthStore from "@/stores/use-auth-store.js"
import UserDAO from "@/daos/UserDAO.js"
import { useNavigate } from "react-router-dom"
import { Canvas } from "@react-three/fiber"
import { Center, Helper, OrbitControls } from "@react-three/drei"
import Forest from "@/components/Forest"
import { CameraHelper, DirectionalLightHelper } from "three"
import Staging from "@/components/staging/Staging.jsx"


const Scene = () => {
	return (
		<Canvas shadows camera={{ position: [100, 0, 3] }}>
			<OrbitControls
				enableZoom={false}
				autoRotate
				autoRotateSpeed={0.2}
			/>
			<Models />
			<Lights />
			<Staging />
		</Canvas>
	)
}

const Lights = () => {
	return (
		<>
			<directionalLight
				castShadow
				shadow-mapSize-width={2048}
				shadow-mapSize-height={2048}
				intensity={5}
				position={[-55, 40, 10]}
				// shadow-bias={-0.01}
				shadow-normalBias={0.5}>
				<orthographicCamera
					attach="shadow-camera"
					args={[-300, 300, 300, -300, -300, 300]}>
					{/*<Helper type={CameraHelper} />*/}
				</orthographicCamera>
				{/*<Helper type={DirectionalLightHelper} />*/}
			</directionalLight>
			<ambientLight intensity={0.7} />
		</>
	)
}

const Models = () => {
	return (
		<Center>
			<Forest />
		</Center>
	)
}

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
		// loginGoogleWithPopup().then(() => {
		// 	navigate("/intro")
		// })
		navigate("/intro")
	}, [loginGoogleWithPopup])

	const handleLogout = useCallback(() => {
		logout()
	}, [logout])

	if (loading) {
		return (
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
		)
	}

	return (
		<>
			<div className="absolute inset-0 -z-10 h-full w-full">
				<Scene />
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
