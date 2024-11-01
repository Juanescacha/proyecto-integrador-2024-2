import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Perf } from "r3f-perf"
import {
	GizmoHelper,
	GizmoViewport,
	Helper,
	OrbitControls,
	PerspectiveCamera,
	PivotControls,
} from "@react-three/drei"
import Forest from "@/components/Forest.jsx"
import { Leva, useControls } from "leva"
import { useNavigate } from "react-router-dom"
import Mountain from "@/components/Mountain"
import Deforestation from "@/components/Deforestation"
import Camp from "@/components/Camp"
import { CameraHelper, DirectionalLightHelper } from "three"
import { useEffect, useRef } from "react"

const Camera = () => {
	const { camera } = useThree()
	const ref = useRef()

	useEffect(() => {
		// window.addEventListener("keydown", (event) => {
		// 	console.log("pos: ", camera.position)
		// 	console.log("target: ", ref.current?.target)
		// })
	}, [])

	return <OrbitControls makeDefault ref={ref} target={[9.99, 9.68, 2.95]} />
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
			<Forest />
			<Mountain scale={200} position={[400, -50, -300]} />
			<Camp position={[10, 2.7, -15]} />
			<Deforestation
				position={[30, 2.5, 1]}
				rotation={[0, 4, 0]}
				scale={0.2}
			/>
			<Lights />
			{/*	Additional Debugging */}
			<PivotControls
				visible={true}
				annotations
				scale={1}
				anchor={[0, 0, 0]}
				depthTest={false}></PivotControls>
		</>
	)
}

const Scene = () => {
	return (
		<Canvas
			shadows
			camera={{
				position: [0.54, 10.06, 14.03],
			}}>
			<Camera />
			<Models />

			<GizmoHelper alignment="bottom-right" margin={[80, 80]}>
				<GizmoViewport
					axisColors={["#9d4b4b", "#2f7f4f", "#3b5b9d"]}
					labelColor="white"
				/>
			</GizmoHelper>
			<Perf position="top-left" />
		</Canvas>
	)
}

const Menu = () => {
	const navigate = useNavigate()

	return (
		<>
			<Leva hidden />
			<div className="absolute inset-0 -z-10 h-full w-full">
				<Scene />
			</div>
			<div className="hidden h-screen flex-col items-start justify-start overflow-hidden">
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
				<div className="mt-10 flex flex-col gap-10">
					<div className="rounded-r-full bg-[#102C3E] p-6 text-3xl uppercase text-white">
						selecciona la problemática
					</div>
				</div>
			</div>
		</>
	)
}
export default Menu
