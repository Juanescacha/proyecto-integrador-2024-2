import { useGLTF } from "@react-three/drei"

const Background = (props) => {
	const { nodes, materials } = useGLTF("/models/mountain.glb")

	return (
		<group {...props} dispose={null}>
			<group scale={0.01}>
				<group position={[140, 0, -105.118]} scale={918.54}>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Mountain_A_0.geometry}
						material={materials.material}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Mountain_B_0.geometry}
						material={materials.material_1}
					/>
				</group>
			</group>
		</group>
	)
}

useGLTF.preload("/models/mountain.glb")

export default Background
