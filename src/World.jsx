/* eslint-disable react/no-unknown-property */
import { TrackballControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import Cube from "@/Cube"

const World = () => {
	const cameraSettings = { position: [2, 0, 5], fov: 75 }

	return (
		<>
			<Canvas camera={cameraSettings}>
				<TrackballControls />
				<ambientLight intensity={0.2} />
				<directionalLight
					color="red"
					intensity={30}
					position={[0, 10, 10]}
				/>
				<Cube />
			</Canvas>
		</>
	)
}

export default World
