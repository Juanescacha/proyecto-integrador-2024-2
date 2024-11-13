import { Canvas, useThree } from "@react-three/fiber"
import Staging from "@/components/staging/Staging.jsx"
import { useEffect, useRef } from "react"
import { OrbitControls } from "@react-three/drei"
import DeforestationScene from "@/components/DeforestationScene.jsx"
import KingRacoon from "@/components/KingRacoon.jsx"
import { useNavigate } from "react-router-dom"

const Camera = () => {
	const { camera } = useThree()
	const ref = useRef()

	useEffect(() => {
		window.addEventListener("keydown", (event) => {
			console.log("pos: ", camera.position)
			console.log("target: ", ref.current?.target)
		})
	}, [])

	return <OrbitControls makeDefault ref={ref} target={[11.82, 4.26, -4.4]} />
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
				shadow-bias={-0.0006}
				// shadow-normalBias={0.05}
			>
				<orthographicCamera
					attach="shadow-camera"
					args={[-50, 30, 50, -5, -5, 200]}>
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
		<>
			<DeforestationScene />
			<KingRacoon
				position={[-0.4, 5.7, 2]}
				rotation={[6.2, Math.PI * 2, 0]}
			/>
			<Lights />
		</>
	)
}

const Scene = () => {
	return (
		<Canvas
			shadows
			camera={{
				position: [-0.9, 9.24, 6.45],
			}}>
			<Camera />
			<Models />
			<Staging />
		</Canvas>
	)
}

const Deforestation = () => {
	const navigate = useNavigate()

	return (
		<>
			<div className="absolute inset-0 -z-10 h-full w-full">
				<Scene />
			</div>
			<div className="flex-col items-start justify-start overflow-hidden">
				<nav className="flex w-full items-center justify-between bg-[#5C5C5C] px-5 py-2">
					<button
						type="button"
						onClick={() => navigate("/")}
						className="flex items-center gap-4">
						<img
							src="/assets/logo.png"
							alt="logo"
							className="h-10"
						/>
						<span className="text-3xl uppercase text-white">
							Terra Virtual
						</span>
					</button>

					<div className="flex gap-4">
						<button type="button">
							<img
								src="/assets/icons/profile.svg"
								alt="profile"
								className="h-6"
							/>
						</button>
						<button type="button">
							<img
								src="/assets/icons/menu.svg"
								className="h-4"
								alt="menu"
							/>
						</button>
					</div>
				</nav>
				<div className="mt-10 flex flex-col items-start gap-10">
					<div className="rounded-r-full bg-[#102C3E] p-6 text-3xl uppercase text-white">
						deforestación
					</div>
				</div>
			</div>
		</>
	)
}
export default Deforestation
