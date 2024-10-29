import React, { useRef } from "react"
import { useGLTF } from "@react-three/drei"

export function Camp(props) {
	const { nodes, materials } = useGLTF("/models/camp.glb")
	return (
		<group {...props} dispose={null}>
			<group rotation={[-Math.PI / 2, 0, 0]} scale={0.584}>
				<group rotation={[Math.PI / 2, 0, 0]}>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.pSphere1_lambert1_0.geometry}
						material={materials.lambert1}
						position={[3.316, 0, 6.532]}
						scale={1.256}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.pSphere1_lambert4_0.geometry}
						material={materials.lambert4}
						position={[3.316, 0, 6.532]}
						scale={1.256}
					/>
				</group>
			</group>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube.geometry}
				material={materials.Metal}
				position={[-10.083, 0, 0.877]}
				scale={[2.4, 0.2, 4]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube001.geometry}
				material={materials.Metal}
				position={[-10.083, 4, 0.877]}
				scale={[2.4, 0.2, 4]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube002.geometry}
				material={materials.Metal}
				position={[-10.083, 2, 0.877]}
				scale={[2.314, 0.193, 3.857]}
			/>
			<group scale={0.01}>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.BL_Stick_wood_0.geometry}
					material={materials.Stick_wood}
					position={[-180, 253.977, -780]}
					rotation={[-Math.PI / 2, 0.611, 0]}
					scale={[20.192, 20.192, 264.243]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.BR_Stick_wood_0.geometry}
					material={materials.Stick_wood}
					position={[183.774, 253.977, -780]}
					rotation={[-Math.PI / 2, -0.611, -Math.PI]}
					scale={[20.192, 20.192, 264.243]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.FL_Stick_wood_0.geometry}
					material={materials.Stick_wood}
					position={[-180, 253.977, 0]}
					rotation={[-Math.PI / 2, 0.611, 0]}
					scale={[20.192, 20.192, 264.243]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.FR_Stick_wood_0.geometry}
					material={materials.Stick_wood}
					position={[183.774, 253.977, 0]}
					rotation={[-Math.PI / 2, -0.611, -Math.PI]}
					scale={[20.192, 20.192, 264.243]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.T_Stick_wood_0.geometry}
					material={materials.Stick_wood}
					position={[4.266, 516.091, -427.171]}
					rotation={[-0.057, 0, -Math.PI / 2]}
					scale={[25.112, 25.097, 326.401]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.TL_TENT_MAT_0.geometry}
					material={materials.TENT_MAT}
					position={[-189.165, 253.977, -394.556]}
					rotation={[-Math.PI / 2, 0.673, 0]}
					scale={[6.641, 400.063, 286.879]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.TR_TENT_MAT_0.geometry}
					material={materials.TENT_MAT}
					position={[195.97, 253.977, -394.556]}
					rotation={[-Math.PI / 2, -0.673, -Math.PI]}
					scale={[6.641, 400.074, 286.879]}
				/>
			</group>
		</group>
	)
}

useGLTF.preload("/models/camp.glb")

export default Camp
