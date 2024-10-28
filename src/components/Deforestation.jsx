import { useGLTF } from "@react-three/drei"

const Deforestation = (props) => {
	const { nodes, materials } = useGLTF("/models/deforestation.glb")

	return (
		<group {...props} dispose={null}>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.treeGreen188.geometry}
				material={materials.TreeGreen}
				position={[-27.395, -0.321, -6.227]}
				rotation={[0, 1.476, 0]}
				scale={2.227}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.treeGreen188001.geometry}
				material={materials.TreeGreen}
				position={[-8.526, -0.321, -22.103]}
				rotation={[0, 1.476, 0]}
				scale={2.515}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.treeGreen188002.geometry}
				material={materials.TreeNear}
				position={[-50.884, -0.321, 3.269]}
				rotation={[0, 0.093, 0]}
				scale={[2.515, 2.934, 2.515]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.treeGreen188003.geometry}
				material={materials.TreeGreen}
				position={[-27.713, -0.321, 12.782]}
				rotation={[0, 0.093, 0]}
				scale={2.298}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.treeGreen188004.geometry}
				material={materials.TreeGreen}
				position={[-28.826, -0.321, -24.995]}
				rotation={[0, 0.592, 0]}
				scale={[2.515, 3.142, 2.515]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.treeGreen188005.geometry}
				material={materials.TreeNear}
				position={[-52.105, -0.321, -39.625]}
				rotation={[0, -0.79, 0]}
				scale={3.496}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.treeGreen188006.geometry}
				material={materials.TreeNear}
				position={[-66.734, -0.321, -13.561]}
				rotation={[0, -0.79, 0]}
				scale={3.921}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.treeGreen188007.geometry}
				material={materials.TreeGreen}
				position={[3.02, -0.321, -88.506]}
				rotation={[-Math.PI, 0.257, -Math.PI]}
				scale={2.515}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.treeGreen188008.geometry}
				material={materials.TreeNear}
				position={[-24.774, -0.321, -123.974]}
				rotation={[-Math.PI, 0.257, -Math.PI]}
				scale={2.515}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.treeGreen188009.geometry}
				material={materials.TreeGreen}
				position={[-1.589, -0.321, -68.188]}
				rotation={[0, 1.502, 0]}
				scale={2.515}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.treeGreen188010.geometry}
				material={materials.TreeGreen}
				position={[16.863, -0.321, -74.665]}
				rotation={[0, 1.502, 0]}
				scale={[2.515, 2.143, 2.515]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.treeGreen188011.geometry}
				material={materials.TreeGreen}
				position={[-11.044, -0.321, -102.882]}
				rotation={[-Math.PI, 1.14, -Math.PI]}
				scale={2.515}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.treeGreen188012.geometry}
				material={materials.TreeGreen}
				position={[-24.696, -0.321, -50.857]}
				rotation={[0, 0.619, 0]}
				scale={[3.146, 3.266, 3.146]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.treeGreen188013.geometry}
				material={materials.TreeGreen}
				position={[-3.055, -0.321, -48.183]}
				rotation={[0, 0.619, 0]}
				scale={2.515}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.treeGreen188014.geometry}
				material={materials.TreeFar}
				position={[-77.362, -0.321, -122.435]}
				rotation={[0, -1.205, 0]}
				scale={3.496}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.treeGreen188015.geometry}
				material={materials["TreeMedium-Far"]}
				position={[-51.888, -0.321, -117.929]}
				rotation={[Math.PI, -0.554, Math.PI]}
				scale={[2.818, 4.125, 2.818]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.treeGreen188016.geometry}
				material={materials["TreeMedium-Far"]}
				position={[-60.324, -0.321, -87.545]}
				rotation={[Math.PI, -1.053, Math.PI]}
				scale={4.556}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.treeGreen188017.geometry}
				material={materials.TreeNear}
				position={[-15.011, -0.321, -82.023]}
				rotation={[-Math.PI, 0.329, -Math.PI]}
				scale={[2.856, 2.98, 2.856]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.treeGreen188018.geometry}
				material={materials.TreeNear}
				position={[-31.711, -0.321, -99.273]}
				rotation={[-Math.PI, 0.329, -Math.PI]}
				scale={3.026}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.treeGreen188019.geometry}
				material={materials["TreeMedium-Far"]}
				position={[-85.768, -0.321, -37.029]}
				rotation={[0, -1.179, 0]}
				scale={[3.762, 5.507, 3.762]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.treeGreen188020.geometry}
				material={materials["TreeMedium-Far"]}
				position={[-95.199, -0.321, -8.385]}
				rotation={[0, -1.179, 0]}
				scale={[3.333, 4.879, 3.333]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.treeGreen188021.geometry}
				material={materials.TreeNear}
				position={[-40.101, -0.321, -68.833]}
				rotation={[Math.PI, -1.08, Math.PI]}
				scale={[2.818, 4.125, 2.818]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.treeGreen188022.geometry}
				material={materials["TreeMedium-Far"]}
				position={[-72.068, -0.321, -61.866]}
				rotation={[Math.PI, -1.08, Math.PI]}
				scale={[3.518, 5.15, 3.518]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.treeGreen188023.geometry}
				material={materials.TreeFar}
				position={[-92.446, -0.321, -89.037]}
				rotation={[0, -1.205, 0]}
				scale={4.576}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.treeGreen188024.geometry}
				material={materials.TreeFar}
				position={[-98.371, -0.321, -58.332]}
				rotation={[0, -1.205, 0]}
				scale={[3.81, 4.924, 3.81]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.treeGreen188025.geometry}
				material={materials.TreeFar}
				position={[-116.148, -0.321, -34.091]}
				rotation={[0, -1.205, 0]}
				scale={[4.727, 5.182, 4.727]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.treeGreen188026.geometry}
				material={materials.TreeNear}
				position={[-94.664, -0.321, 15.14]}
				rotation={[0, 0.371, 0]}
				scale={[3.196, 3.451, 3.196]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.treeGreen188028.geometry}
				material={materials.TreeFar}
				position={[-123.694, -0.321, 7.223]}
				rotation={[0, -1.012, 0]}
				scale={[4.631, 5.031, 4.631]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.treeGreen188029.geometry}
				material={materials.TreeGreen}
				position={[-72.144, -0.321, 17.436]}
				rotation={[0, -0.512, 0]}
				scale={[2.627, 2.863, 2.627]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.treeGreen188027.geometry}
				material={materials.TreeGreen}
				position={[-48.183, -0.321, 26.249]}
				rotation={[0, 0.093, 0]}
				scale={2.298}
			/>
		</group>
	)
}

useGLTF.preload("/models/deforestation.glb")

export default Deforestation
