/* eslint-disable react/no-unknown-property */
import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"

const World = () => {
	const cameraSettings = { position: [2, 0, 5] }

	return (
		<>
			<Canvas camera={cameraSettings}>
				<OrbitControls />
				<ambientLight intensity={1.5} />
				<directionalLight position={[0, 10, 10]} />
			</Canvas>
		</>
	)
}

export default World
