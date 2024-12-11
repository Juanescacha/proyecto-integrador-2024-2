import { Canvas, useFrame, useThree } from "@react-three/fiber"
import Staging from "@/components/staging/Staging.jsx"
import { useEffect, useRef, useState } from "react"
import {
	Billboard,
	Html,
	OrbitControls,
	Scroll,
	ScrollControls,
	useScroll,
} from "@react-three/drei"
import BiodiversityScene from "@/components/BiodiversityScene.jsx"
import { useNavigate } from "react-router-dom"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { lerp } from "three/src/math/MathUtils"
import Jueguito2 from "@/components/Jueguito2.jsx"
import PostProcessing from "@/components/PostProcessing.jsx"

gsap.registerPlugin(ScrollTrigger)

const Camera = () => {
	const { camera } = useThree()
	const ref = useRef(null)
	const scroll = useScroll()

	const cameraPoints = [
		{
			position: [68.69, 7.97, -42.15],
			target: [-9.71, 7.71, 2.12],
		},
		{
			position: [-47.48, 4.67, -53.52],
			target: [-24.27, 5.24, -1.73],
		},
		{
			position: [10.98, 8.63, 25.89],
			target: [11.22, -7.49, 1.85],
		},
	]

	const snapPoints = [0, 0.5, 1]

	const handleKeyDown = (event) => {
		console.log("pos: ", camera.position)
		console.log("target: ", ref.current?.target)

		if (event.key === "ArrowRight") {
			scroll.el.scrollTop += scroll.el.scrollHeight * 0.375
		}
		if (event.key === "ArrowLeft") {
			scroll.el.scrollTop -= scroll.el.scrollHeight * 0.375
		}
	}

	useEffect(() => {
		window.addEventListener("keydown", handleKeyDown)

		return () => {
			window.removeEventListener("keydown", handleKeyDown)
		}
	}, [])

	useFrame(() => {
		// Normaliza el offset entre 0 y 2 para cubrir los 3 puntos
		const offset = scroll.offset * 2

		// Selecciona los puntos de interpolación
		let startIndex = Math.floor(offset)
		let endIndex = Math.min(startIndex + 1, cameraPoints.length - 1)

		// Calcula el progreso de interpolación dentro de ese segmento
		const progress = offset % 1

		// Interpolación de posición
		const lerpedPosition = cameraPoints.map((_, i) =>
			lerp(
				cameraPoints[startIndex].position[i],
				cameraPoints[endIndex].position[i],
				progress,
			),
		)

		// Interpolación de target (lookAt)
		const lerpedTarget = cameraPoints.map((_, i) =>
			lerp(
				cameraPoints[startIndex].target[i],
				cameraPoints[endIndex].target[i],
				progress,
			),
		)

		// Actualiza posición de cámara
		camera.position.set(...lerpedPosition)
		camera.lookAt(...lerpedTarget)
	})

	// return <OrbitControls ref={ref} />
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
			<BiodiversityScene />
			<Jueguito2 position={[9, 5, 21]} rotation={[Math.PI / 4, 0, 0]} />
			<Lights />
		</>
	)
}

const Scene = () => {
	return (
		<Canvas shadows>
			<ScrollControls pages={3}>
				<Camera />
				<PostProcessing />
				<Models />
				<Scroll html>
					<h1 className="absolute left-[5rem] top-[30vh] flex w-[500px] flex-col gap-4 rounded-lg bg-[#102C3E] p-6 text-white">
						<span className="text-3xl font-semibold">
							Que es la biodiversidad?
						</span>
						<p>
							La biodiversidad es la variedad de animales y
							plantas que viven en nuestro planeta. Pero cuando
							algunas especies desaparecen, ese equilibrio se
							rompe. Esto se llama pérdida de biodiversidad, y
							sucede por cosas como la destrucción de bosques, la
							contaminación, y la caza furtiva
						</p>
					</h1>
					<h1 className="absolute left-[70rem] top-[140vh] flex w-[500px] flex-col gap-4 rounded-lg bg-[#102C3E] p-6 text-white">
						<span className="text-3xl font-semibold">
							Perdida de la biodiversidad
						</span>
						<p>
							Los animales viven libres en sus hábitats, y cada
							uno tiene un papel importante para que la Tierra
							funcione bien. Pero hay un problema: algunas
							personas los cazan de manera ilegal. Esto se llama
							caza furtiva, y hace mucho daño.
						</p>
					</h1>
					<h1 className="absolute left-[75rem] top-[240vh] flex w-[500px] flex-col gap-4 rounded-lg bg-[#102C3E] p-6 text-white">
						<h1 className="text-5xl font-bold">QUIZ</h1>
						<span className="text-3xl font-semibold">
							cómo podemos protegerlos?
						</span>
						<p>
							Aprende sobre los animales y habla con otros sobre
							por qué es importante cuidarlos. evita comprar cosas
							que estén hechas con partes de animales en peligro
							apoya las reservas naturales y organizaciones que
							trabajan para proteger a los animales.
						</p>
						<p>
							Ayuda al mono a evitar los cazadores y devuelvelo
							con su familia. Recoge las bananas para acumular
							puntos y obtener una recompensa.
						</p>
					</h1>
				</Scroll>
			</ScrollControls>
			<Staging />
		</Canvas>
	)
}

const Biodiversity = () => {
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
						Biodiversidad
					</div>
				</div>
			</div>
		</>
	)
}
export default Biodiversity
