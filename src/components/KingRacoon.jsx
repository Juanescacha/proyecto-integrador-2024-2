import { useGLTF } from "@react-three/drei"

const KingRacoon = (props) => {
	const { nodes, materials } = useGLTF("/models/kingRacoon.glb")
	return (
		<group {...props} dispose={null}>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Raccoon_Mesh.geometry}
				material={materials.Raccoon_Mat}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.uploads_files_3490472_crown.geometry}
				material={materials.gold}
				position={[0, 2.832, 1.599]}
				rotation={[1.497, 0, 0]}
				scale={0.994}
			/>
		</group>
	)
}

useGLTF.preload("/models/kingRacoon.glb")

export default KingRacoon
