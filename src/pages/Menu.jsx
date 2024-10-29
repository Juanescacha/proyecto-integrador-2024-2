import { Canvas } from "@react-three/fiber"
import {
	Environment,
	GizmoHelper,
	GizmoViewport,
	OrbitControls,
	PerspectiveCamera,
	PivotControls,
	SoftShadows,
} from "@react-three/drei"
import Scene1 from "@/components/Scene1"
import KingRacoon from "@/components/KingRacoon"
import { Leva, useControls } from "leva"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Background from "@/components/Background.jsx"
import Deforestation from "@/components/Deforestation.jsx"
import Camp from "@/components/Camp.jsx"

const Menu = () => {
	const [step, setStep] = useState(false)

	const navigate = useNavigate()

	const camera = useControls({
		position: [-1, 4.7, 6.9],
		rotation: [0, -0.7, 0],
	})

	const handleNext = () => {
		setStep(true)
	}

	return (
		<>
			<Leva hidden />
			<div className="absolute inset-0 -z-10 h-full w-full">
				<Canvas shadows>
					{/*<OrbitControls makeDefault />*/}
					<PerspectiveCamera
						makeDefault
						position={camera.position}
						rotation={camera.rotation}
					/>
					<Scene1 />
					<Background scale={200} position={[400, -50, -300]} />
					{/*<PivotControls*/}
					{/*	visible={true}*/}
					{/*	annotations*/}
					{/*	scale={1}*/}
					{/*	anchor={[0, 0, 0]}*/}
					{/*	depthTest={false}*/}
					{/*	disableSliders></PivotControls>*/}
					<Camp position={[10, 2.7, -15]} />

					<Deforestation
						position={[30, 2.5, 1]}
						rotation={[0, 4, 0]}
						scale={0.2}
					/>

					<GizmoHelper alignment="bottom-right" margin={[80, 80]}>
						<GizmoViewport
							axisColors={["#9d4b4b", "#2f7f4f", "#3b5b9d"]}
							labelColor="white"
						/>
					</GizmoHelper>
					<ambientLight intensity={1} />
					<directionalLight intensity={0.5} position={[10, 10, 10]} />
					{/*<Environment preset="warehouse" />*/}
				</Canvas>
			</div>
			<div className="flex h-screen flex-col items-start justify-start overflow-hidden">
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
						selecciona la problematica
					</div>
				</div>
			</div>
		</>
	)
}
export default Menu
