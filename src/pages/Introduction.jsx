import { Canvas } from "@react-three/fiber"
import {
	Environment,
	GizmoHelper,
	GizmoViewport,
	OrbitControls,
	PerspectiveCamera,
	PivotControls,
} from "@react-three/drei"
import Scene1 from "@/components/Scene1"
import KingRacoon from "@/components/KingRacoon"
import { Leva, useControls } from "leva"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Background from "@/components/Background.jsx"
import Staging from "../components/staging/Staging"

const Tutorial = () => {
	const navigate = useNavigate()

	const handleNext = () => {
		navigate("/menu")
	}

	return (
		<>
			<div className="max-w-5xl rounded-[48px] bg-[#00101E] px-12 py-8 text-xl text-white">
				<h1 className="mb-8 text-3xl uppercase">tutorial</h1>
				<div className="flex items-center justify-between">
					Usa la rueda del mouse para avanzar o retroceder
					<img
						src="/assets/tutorial0.jpg"
						alt="mouse controls"
						className="w-[305px] rounded-[40px]"
					/>
				</div>
				<div className="mt-5 flex items-center justify-between">
					Puedes seleccionar objetos con el mouse cuando se iluminan
					como en el ejemplo:
					<div className="flex w-96 flex-col items-start">
						<img src="/assets/tutorial1.png" alt="mouse controls" />
						<img
							src="/assets/tutorial2.png"
							className="pr-20"
							alt="mouse controls"
						/>
					</div>
				</div>
			</div>
			<button
				onClick={handleNext}
				type="button"
				className="flex items-center gap-6 text-3xl uppercase text-white">
				entendido
				<img
					src="/assets/icons/right.svg"
					alt="right"
					className="h-6"
				/>
			</button>
		</>
	)
}

const Intro = ({ next }) => {
	return (
		<>
			<div className="max-w-5xl rounded-[48px] bg-[#00101E] px-12 py-8 text-xl text-white">
				<h1 className="mb-8 text-3xl uppercase">
					rey mapache del bosque
				</h1>
				¡Hola! Soy el rey mapache del bosque. Nuestro hermoso bosque
				necesita de tu ayuda: los árboles están desapareciendo, y los
				cazadores están acabando con sus animalitos. Ven conmigo en este
				recorrido para aprender sobre la problemática.
			</div>
			<button
				onClick={next}
				type="button"
				className="flex items-center gap-6 text-3xl uppercase text-white">
				siguiente
				<img
					src="/assets/icons/right.svg"
					className="h-6"
					alt="right"
				/>
			</button>
		</>
	)
}

const Introduction = () => {
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
					<Staging/>
					<PerspectiveCamera
						makeDefault
						position={camera.position}
						rotation={camera.rotation}
					/>
					{/*<OrbitControls makeDefault position={[10, 10, 10]} />*/}
					<Scene1 />
					<Background scale={200} position={[400, -50, -300]} />
					{/*<PivotControls*/}
					{/*	visible={true}*/}
					{/*	annotations*/}
					{/*	scale={1}*/}
					{/*	anchor={[0, 0, 0]}*/}
					{/*	depthTest={false}*/}
					{/*	disableSliders>*/}
					{/*</PivotControls>*/}
					<KingRacoon position={[0, 2.5, 0]} />
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
			<div className="flex h-screen flex-col items-end justify-start overflow-hidden">
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
				<div className="m-20 flex flex-col gap-10">
					{step ? <Tutorial /> : <Intro next={handleNext} />}
				</div>
			</div>
		</>
	)
}
export default Introduction
