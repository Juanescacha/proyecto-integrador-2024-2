import { Environment } from "@react-three/drei"

const Staging = () => {
	return (
		<>
			<Environment
				ground={{
					height: 200,
					radius: 800,
					scale: 800,
				}}
				background
				files={"/hdri/hdriSky.hdr"}
			/>
		</>
	)
}

export default Staging
