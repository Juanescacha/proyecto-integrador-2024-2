/* eslint-disable react/no-unknown-property */
import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import Cube from "@/Cube"

const World = () => {
	const cameraSettings = { position: [2, 0, 5], fov: 75 }

	return (
		<>
			<Canvas camera={cameraSettings}>
				<OrbitControls enablePan={false} />
				<ambientLight intensity={1.7} />
				<directionalLight position={[0, 10, 0]} />
				<Cube />
			</Canvas>
		</>
	)
}

export default World
