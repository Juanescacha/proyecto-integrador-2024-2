import { Canvas, useFrame, useThree } from "@react-three/fiber"
import Staging from "@/components/staging/Staging.jsx"
import { useEffect, useRef } from "react"
import {
	Html,
	OrbitControls,
	Scroll,
	ScrollControls,
	useScroll,
} from "@react-three/drei"
import DeforestationScene from "@/components/DeforestationScene.jsx"
import { useNavigate } from "react-router-dom"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { lerp } from "three/src/math/MathUtils"
import Jueguito1 from "@/components/Jueguito1.jsx"

gsap.registerPlugin(ScrollTrigger)

const Camera = () => {
	const { camera } = useThree()
	const ref = useRef()
	const scroll = useScroll()

	const cameraPoints = [
		{
			position: [4.59, 5.14, 15.06],
			target: [18.89, 11.11, -13.25],
		},
		{
			position: [16.27, 6.06, -4.67],
			target: [6.0, 6.85, -14.47],
		},
		{
			position: [60.52, 8.16, -58.12],
			target: [3.06, 12.03, -18.9],
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

	// return <OrbitControls />
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
			<Jueguito1 position={[5, 6, -13]} />
			<Lights />
		</>
	)
}

const Scene = () => {
	return (
		<Canvas shadows>
			<ScrollControls pages={3}>
				<Camera />
				<Models />
				{/*<Html position={[5, 10, 0]}>*/}
				{/*	<div className="flex w-56 flex-col gap-4 rounded-xl bg-blue-950 p-4 text-white">*/}
				{/*		<p>Que es la deforestacion?</p>*/}
				{/*		<p>*/}
				{/*			Lorem ipsum dolor sit amet, consectetur adipiscing*/}
				{/*			elit. Curabitur interdum, ante id vulputate blandit,*/}
				{/*			nisi libero dapibus nisl, quis bibendum ipsum nulla*/}
				{/*			in purus. Nullam volutpat.*/}
				{/*		</p>*/}
				{/*	</div>*/}
				{/*</Html>*/}
				<Staging />
				<Scroll html>
					<h1 className="absolute left-[75rem] top-[40vh] flex w-[500px] flex-col gap-4 rounded-lg bg-[#102C3E] p-6 text-white">
						<span className="text-3xl font-semibold">
							Que es la deforestación?
						</span>
						<p>
							La deforestación es cuando las personas cortan
							muchos árboles en un bosque o selva, y no vuelven a
							plantar nuevos. Los árboles son como los pulmones
							del planeta, porque nos ayudan a tener aire limpio
							para respirar. También son el hogar de muchos
							animales, como pájaros, monos y ardillas.
						</p>
					</h1>
					<h1 className="absolute left-[75rem] top-[130vh] flex w-[500px] flex-col gap-4 rounded-lg bg-[#102C3E] p-6 text-white">
						<span className="text-3xl font-semibold">
							¿Sabías que los árboles cuidan nuestra tierra?
						</span>
						<p>
							Los árboles no solo limpian el aire y son hogar de
							animales, ¡también son súper importantes para cuidar
							la tierra! Sus raíces son como manos gigantes que
							agarran el suelo y lo mantienen en su lugar.
						</p>
						<p>
							Cuando llueve mucho, si no hay árboles, el agua
							puede llevarse la tierra, y eso se llama deslave.
							Los deslaves pueden ser peligrosos porque arrastran
							piedras, lodo y hasta pueden dañar casas o caminos.
						</p>
						<p>
							Pero si hay muchos árboles, las raíces ayudan a que
							el suelo no se mueva, ¡y todo está más seguro! Por
							eso, plantar y cuidar árboles es cuidar la
							naturaleza y a nosotros mismos.
						</p>
					</h1>
					<h1 className="absolute left-[80rem] top-[220vh] flex w-[500px] flex-col gap-4 rounded-lg bg-[#102C3E] p-6 text-white">
						<span className="text-3xl font-semibold">
							Soluciones para la deforestacion
						</span>

						<p>
							Por suerte, hay cosas que podemos hacer para ayudar.
							Una de las más importantes es plantar más árboles,
							para que los bosques puedan crecer de nuevo. También
							podemos usar menos papel y reciclar, porque así
							evitamos que se talen tantos árboles.
						</p>
						<p>
							Además, es fundamental apoyar leyes y proyectos que
							protejan los bosques existentes, asegurándonos de
							que las empresas cumplan con prácticas sostenibles.
							Informarnos y educar a otros sobre el impacto de la
							deforestación puede generar conciencia y motivar a
							más personas a actuar en defensa de nuestro planeta.
						</p>
					</h1>
				</Scroll>
			</ScrollControls>
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
