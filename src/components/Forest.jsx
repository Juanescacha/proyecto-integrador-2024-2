import { useGLTF } from "@react-three/drei"

const Forest = (props) => {
	const { nodes, materials } = useGLTF("/models/forest.glb")

	return (
		<group {...props} dispose={null}>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Bush.geometry}
				material={materials.Bush}
				position={[-17.111, 3.18, -9.974]}
				scale={1.602}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Bush1.geometry}
				material={materials.Bush}
				position={[-15.619, 2.739, -10.845]}
				scale={0.869}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Bush2.geometry}
				material={materials.Bush}
				position={[-16.182, 2.821, -12.089]}
				scale={[1.259, 1.411, 1.259]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Bush3.geometry}
				material={materials.Bush}
				position={[3.252, 3.323, -28.601]}
				rotation={[0, -0.976, 0]}
				scale={2.496}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Bush4.geometry}
				material={materials.Bush}
				position={[5.679, 2.635, -27.435]}
				rotation={[0, -0.976, 0]}
				scale={1.353}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Bush5.geometry}
				material={materials.Bush}
				position={[6.792, 2.764, -29.248]}
				rotation={[0, -0.976, 0]}
				scale={[1.962, 2.198, 1.962]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Bush6.geometry}
				material={materials.Bush}
				position={[31.975, 3.323, 16.466]}
				rotation={[0, -0.368, 0]}
				scale={2.496}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Bush7.geometry}
				material={materials.Bush}
				position={[34.634, 2.635, 16.038]}
				rotation={[0, -0.368, 0]}
				scale={1.353}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Bush8.geometry}
				material={materials.Bush}
				position={[34.513, 2.764, 13.914]}
				rotation={[0, -0.368, 0]}
				scale={[1.962, 2.198, 1.962]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Bush9.geometry}
				material={materials.Bush}
				position={[-17.284, 3.407, 35.294]}
				rotation={[0, -1.509, 0]}
				scale={3.006}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Bush10.geometry}
				material={materials.Bush}
				position={[-15.479, 2.58, 37.988]}
				rotation={[0, -1.509, 0]}
				scale={1.63}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Bush11.geometry}
				material={materials.Bush}
				position={[-13.215, 2.735, 36.788]}
				rotation={[0, -1.509, 0]}
				scale={[2.363, 2.648, 2.363]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Bush12.geometry}
				material={materials.Bush}
				position={[-22.276, 3.407, 20.317]}
				rotation={[0, -1.509, 0]}
				scale={3.006}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Bush13.geometry}
				material={materials.Bush}
				position={[-10.359, 2.58, 22.908]}
				rotation={[0, -1.509, 0]}
				scale={1.63}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Bush14.geometry}
				material={materials.Bush}
				position={[-21.032, 2.735, 23.608]}
				rotation={[0, -1.509, 0]}
				scale={[2.363, 2.648, 2.363]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Bush15.geometry}
				material={materials.Bush}
				position={[-50.603, 3.407, -26.265]}
				rotation={[Math.PI, -0.558, Math.PI]}
				scale={3.006}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Bush16.geometry}
				material={materials.Bush}
				position={[-47.212, 2.58, -14.551]}
				rotation={[Math.PI, -0.558, Math.PI]}
				scale={1.63}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Bush17.geometry}
				material={materials.Bush}
				position={[-52.906, 2.735, -23.604]}
				rotation={[Math.PI, -0.558, Math.PI]}
				scale={[2.363, 2.648, 2.363]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Bush18.geometry}
				material={materials.Bush}
				position={[57.131, 3.407, 6.283]}
				rotation={[0, 1.058, 0]}
				scale={3.006}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Bush19.geometry}
				material={materials.Bush}
				position={[48.54, 2.58, -2.374]}
				rotation={[0, 1.058, 0]}
				scale={1.63}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Bush20.geometry}
				material={materials.Bush}
				position={[57.877, 2.735, 2.844]}
				rotation={[0, 1.058, 0]}
				scale={[2.363, 2.648, 2.363]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Bush21.geometry}
				material={materials.Bush}
				position={[55.025, 3.907, 59.467]}
				rotation={[-Math.PI, 0.683, -Math.PI]}
				scale={6.009}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Bush22.geometry}
				material={materials.Bush}
				position={[35.064, 2.252, 73.466]}
				rotation={[-Math.PI, 0.683, -Math.PI]}
				scale={3.258}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Bush23.geometry}
				material={materials.Bush}
				position={[48.502, 2.563, 56.834]}
				rotation={[-Math.PI, 0.683, -Math.PI]}
				scale={[4.723, 5.293, 4.723]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.treeRed.geometry}
				material={materials.TreeRed}
				position={[29.554, 2.196, -24.869]}
				rotation={[-Math.PI, 1.533, -Math.PI]}
				scale={[0.868, 1.055, 0.868]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.treeRed1.geometry}
				material={materials.TreeRed}
				position={[30.207, 1.791, 21.555]}
				rotation={[0, 0.167, 0]}
				scale={0.808}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.treeRed2.geometry}
				material={materials.TreeRed}
				position={[-29.303, 1.92, -37.051]}
				rotation={[-Math.PI, 0.318, -Math.PI]}
				scale={[0.907, 1.248, 0.907]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.treeRed3.geometry}
				material={materials.TreeRed}
				position={[-20.452, 2.041, -42.239]}
				rotation={[-Math.PI, 0.318, -Math.PI]}
				scale={1.291}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.treeRed4.geometry}
				material={materials.TreeRed}
				position={[-24.237, 3.774, 32.456]}
				rotation={[Math.PI, -0.422, Math.PI]}
				scale={0.808}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.treeRed5.geometry}
				material={materials.TreeRed}
				position={[24.661, 6.401, -44.761]}
				rotation={[0, -0.448, 0]}
				scale={0.808}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.treeRed6.geometry}
				material={materials.TreeRed}
				position={[27.07, 2.413, -36.618]}
				rotation={[0, -0.448, 0]}
				scale={1.194}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.treeRed7.geometry}
				material={materials.TreeRed}
				position={[-44.946, 1.978, -6.664]}
				rotation={[0, 0.563, 0]}
				scale={[0.808, 0.974, 0.808]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.treeRed8.geometry}
				material={materials.TreeRed}
				position={[-19.509, 3.063, 46.733]}
				rotation={[0, 0.51, 0]}
				scale={1.194}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.treeRed9.geometry}
				material={materials.rock2}
				position={[-8.222, 2.322, -16.971]}
				rotation={[-0.335, 1.232, -1.824]}
				scale={[2.115, 2.058, 2.373]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.treeRed10.geometry}
				material={materials.rock2}
				position={[22.493, 1.941, -4.584]}
				rotation={[-2.214, 0.575, 1.535]}
				scale={3.721}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.treeRed11.geometry}
				material={materials.TreeRed}
				position={[-32.833, 0.645, -117.602]}
				rotation={[-Math.PI, 0.225, -Math.PI]}
				scale={[2.988, 3.631, 2.988]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.treeRed12.geometry}
				material={materials.TreeRed}
				position={[122.086, -0.749, -78.276]}
				rotation={[0, 1.476, 0]}
				scale={2.781}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.treeRed13.geometry}
				material={materials.TreeRed}
				position={[-125.944, -0.306, 67.181]}
				rotation={[Math.PI, -0.99, Math.PI]}
				scale={[3.123, 4.295, 3.123]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.treeRed14.geometry}
				material={materials.TreeRed}
				position={[-135.281, 0.11, 33.116]}
				rotation={[Math.PI, -0.99, Math.PI]}
				scale={4.444}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.treeRed15.geometry}
				material={materials.TreeRed}
				position={[109.662, 1.249, 112.469]}
				rotation={[0, -1.412, 0]}
				scale={2.781}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.treeRed16.geometry}
				material={materials.TreeRed}
				position={[-103.338, 1.499, -119.114]}
				rotation={[0, 0.86, 0]}
				scale={2.781}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.treeRed17.geometry}
				material={materials.TreeRed}
				position={[-74.113, 1.392, -119.844]}
				rotation={[0, 0.86, 0]}
				scale={4.109}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.treeRed18.geometry}
				material={materials.TreeRed}
				position={[154.144, 1.794, -3.427]}
				rotation={[Math.PI, -0.858, Math.PI]}
				scale={[1.94, 2.196, 1.94]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.treeRed19.geometry}
				material={materials.TreeRed}
				position={[-38.904, -0.105, 146.348]}
				rotation={[-Math.PI, 1.271, -Math.PI]}
				scale={[2.781, 3.352, 2.781]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.treeRed20.geometry}
				material={materials.TreeRed}
				position={[161.351, 1.366, 109.514]}
				rotation={[-Math.PI, 1.323, -Math.PI]}
				scale={4.109}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.treeRed21.geometry}
				material={materials.TreeRed}
				position={[11.629, 2.53, 36.193]}
				rotation={[-Math.PI, 0.45, -Math.PI]}
				scale={[0.564, 0.638, 0.564]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.treeYellow.geometry}
				material={materials.TreeYellow}
				position={[6.653, 2.304, -46.461]}
				rotation={[0, -1.014, 0]}
				scale={0.808}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.treeYellow1.geometry}
				material={materials.TreeYellow}
				position={[34.218, 6.306, -21.81]}
				rotation={[-Math.PI, 1.533, -Math.PI]}
				scale={0.564}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.treeYellow2.geometry}
				material={materials.TreeYellow}
				position={[33.232, 2.161, 12.232]}
				rotation={[0, 0.167, 0]}
				scale={[0.66, 0.793, 0.66]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.treeYellow3.geometry}
				material={materials.TreeYellow}
				position={[-30.739, 1.732, -22.026]}
				scale={[1.15, 1.346, 1.15]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.treeYellow4.geometry}
				material={materials.TreeYellow}
				position={[-32.013, 3.774, 29.045]}
				rotation={[Math.PI, -0.422, Math.PI]}
				scale={1.194}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.treeYellow5.geometry}
				material={materials.TreeYellow}
				position={[6.742, 2.635, 38.881]}
				rotation={[-Math.PI, 0.45, -Math.PI]}
				scale={[0.808, 1, 0.808]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.treeYellow6.geometry}
				material={materials.TreeYellow}
				position={[-125.088, 1.015, -60.767]}
				rotation={[0, 0.294, 0]}
				scale={2.781}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.treeYellow7.geometry}
				material={materials.TreeYellow}
				position={[-18.495, 2.965, -130.373]}
				rotation={[-Math.PI, 0.225, -Math.PI]}
				scale={1.94}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.treeYellow8.geometry}
				material={materials.TreeYellow}
				position={[93.796, 0.525, -96.665]}
				rotation={[0, 1.476, 0]}
				scale={[2.271, 2.729, 2.271]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.treeYellow9.geometry}
				material={materials.TreeYellow}
				position={[-77.279, -0.955, 85.385]}
				rotation={[0, 1.308, 0]}
				scale={[3.958, 4.633, 3.958]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.treeYellow10.geometry}
				material={materials.TreeYellow}
				position={[91.368, 1.72, 135.273]}
				rotation={[0, -1.412, 0]}
				scale={4.109}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.treeYellow11.geometry}
				material={materials.TreeYellow}
				position={[158.71, 2.155, 15.223]}
				rotation={[Math.PI, -0.858, Math.PI]}
				scale={[2.781, 3.441, 2.781]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.treeGreen.geometry}
				material={materials.TreeGreen}
				position={[0.344, 2.684, -47.996]}
				rotation={[0, -1.014, 0]}
				scale={0.564}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.treeGreen1.geometry}
				material={materials.TreeGreen}
				position={[35.632, 2.489, -30.8]}
				rotation={[-Math.PI, 1.533, -Math.PI]}
				scale={1.194}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.treeGreen2.geometry}
				material={materials.TreeGreen}
				position={[27.778, 1.926, 26.575]}
				rotation={[0, 0.167, 0]}
				scale={0.564}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.treeGreen3.geometry}
				material={materials.TreeGreen}
				position={[36.875, 1.915, 26.815]}
				rotation={[0, 0.167, 0]}
				scale={1.194}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.treeGreen4.geometry}
				material={materials.TreeGreen}
				position={[45.157, 2.066, -18.041]}
				rotation={[0, 0.167, 0]}
				scale={0.808}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.treeGreen5.geometry}
				material={materials.TreeGreen}
				position={[-13.407, 2.864, -36.926]}
				rotation={[Math.PI, -1.253, Math.PI]}
				scale={0.808}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.treeGreen6.geometry}
				material={materials.TreeGreen}
				position={[-4.802, 2.86, 35.572]}
				rotation={[0, 0.635, 0]}
				scale={1.194}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.treeGreen7.geometry}
				material={materials.TreeGreen}
				position={[-45.254, 2.762, -1.095]}
				rotation={[0, 0.563, 0]}
				scale={0.564}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.treeGreen12.geometry}
				material={materials.TreeGreen}
				position={[-135.831, 2.325, -41.165]}
				rotation={[0, 0.294, 0]}
				scale={1.94}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.treeGreen16.geometry}
				material={materials.TreeGreen}
				position={[-47.117, 1.653, -143.11]}
				rotation={[-Math.PI, 0.225, -Math.PI]}
				scale={4.109}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.treeGreen17.geometry}
				material={materials.TreeGreen}
				position={[136.604, -0.284, -65.71]}
				rotation={[0, 1.476, 0]}
				scale={1.94}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.treeGreen19.geometry}
				material={materials.TreeGreen}
				position={[3.813, 0.196, -163.368]}
				rotation={[0, 1.476, 0]}
				scale={2.781}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.treeGreen20.geometry}
				material={materials.TreeGreen}
				position={[-111.318, 2.945, 14.445]}
				rotation={[0, -0.581, 0]}
				scale={2.781}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.treeGreen21.geometry}
				material={materials.TreeGreen}
				position={[137.391, 1.078, 50.643]}
				rotation={[-Math.PI, 1.198, -Math.PI]}
				scale={4.109}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.treeGreen22.geometry}
				material={materials.TreeGreen}
				position={[-20.665, 2.594, 152.348]}
				rotation={[-Math.PI, 1.271, -Math.PI]}
				scale={1.94}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.treeGreen188.geometry}
				material={materials.TreeGreen}
				position={[145.532, -0.325, -95.74]}
				rotation={[0, 1.476, 0]}
				scale={4.109}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Rock.geometry}
				material={materials.rock2}
				position={[22.7, 2.096, 15.33]}
				scale={1.092}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Rock1.geometry}
				material={materials.rock2}
				position={[-31.457, 3.545, 16.819]}
				rotation={[-1.265, -0.789, -2.132]}
				scale={3.721}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Rock2.geometry}
				material={materials.Rock}
				position={[10.114, 3.589, -25.986]}
				rotation={[-0.11, 0.029, -2.138]}
				scale={[3.443, 2.386, 2.386]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Rock3.geometry}
				material={materials.rock2}
				position={[-32.429, 4.982, -16.509]}
				scale={4.083}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Rock4.geometry}
				material={materials.Rock}
				position={[-27.38, 4.102, -17.579]}
				rotation={[-3.033, 0.192, -0.646]}
				scale={[2.201, 1.817, 4.561]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Rock5.geometry}
				material={materials.Rock}
				position={[-29.607, 3.163, -13.86]}
				rotation={[2.412, 1.114, -0.894]}
				scale={1.516}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Rock6.geometry}
				material={materials.rock2}
				position={[52.664, 2.831, 30.154]}
				rotation={[-Math.PI, 0.247, -Math.PI]}
				scale={[5.049, 4.083, 4.1]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Rock7.geometry}
				material={materials.Rock}
				position={[46.417, 1.95, 29.533]}
				rotation={[-0.117, -0.437, 2.466]}
				scale={[2.555, 1.98, 4.566]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Rock8.geometry}
				material={materials.Rock}
				position={[49.305, 2.104, 33.249]}
				rotation={[1.244, -1.255, 2.8]}
				scale={[1.543, 1.599, 1.785]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Rock9.geometry}
				material={materials.rock2}
				position={[14.114, 2.99, -24.861]}
				rotation={[-1.794, -0.202, 0.498]}
				scale={[2.172, 1.505, 1.505]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Rock10.geometry}
				material={materials.Rock}
				position={[-31.032, 3.058, 13.281]}
				rotation={[-2.257, 0.718, -1.768]}
				scale={[1.498, 1.25, 1.571]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Rock11.geometry}
				material={materials.rock2}
				position={[-7.795, 3.293, 22.961]}
				rotation={[-0.8, -0.331, 2.187]}
				scale={[2.172, 1.505, 1.505]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Rock12.geometry}
				material={materials.Rock}
				position={[-27.431, 3.024, 17.9]}
				rotation={[-1.209, 0.678, 2.248]}
				scale={[1.498, 1.25, 1.571]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Rock13.geometry}
				material={materials.Rock}
				position={[24.382, 3.539, -53.686]}
				rotation={[Math.PI, -1.118, Math.PI]}
				scale={[5.049, 4.083, 4.1]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Rock14.geometry}
				material={materials.rock2}
				position={[26.724, 3.278, -49.765]}
				rotation={[0.3, -0.097, 1.601]}
				scale={[1.543, 1.599, 1.785]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Rock15.geometry}
				material={materials.Rock}
				position={[-41.356, 2.831, -62.434]}
				rotation={[-Math.PI, 0.247, -Math.PI]}
				scale={[5.049, 4.083, 4.1]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Rock16.geometry}
				material={materials.Rock}
				position={[-47.602, 1.95, -63.056]}
				rotation={[-0.117, -0.437, 2.466]}
				scale={[2.555, 1.98, 4.566]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Rock17.geometry}
				material={materials.rock2}
				position={[-44.714, 2.104, -59.339]}
				rotation={[1.244, -1.255, 2.8]}
				scale={[1.543, 1.599, 1.785]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Rock18.geometry}
				material={materials.Rock}
				position={[-5.119, 2.096, -17.321]}
				scale={1.092}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Rock19.geometry}
				material={materials.Rock}
				position={[-21.681, 2.807, 2.231]}
				rotation={[-0.8, -0.331, 2.187]}
				scale={[2.172, 1.505, 1.505]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Rock20.geometry}
				material={materials.Rock}
				position={[19.833, 2.887, -7.44]}
				rotation={[-2.04, -0.469, -1.419]}
				scale={[1.498, 1.25, 1.571]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Rock21.geometry}
				material={materials.rock2}
				position={[94.681, 0.3, -58.882]}
				rotation={[0, 1.308, 0]}
				scale={3.76}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Rock22.geometry}
				material={materials.rock2}
				position={[51.221, 5.29, 122.494]}
				rotation={[-0.737, 0.02, -0.961]}
				scale={12.81}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Rock23.geometry}
				material={materials.Rock}
				position={[-84.895, 5.439, -66.436]}
				rotation={[-0.444, 1.314, -1.71]}
				scale={[11.853, 8.213, 8.213]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Rock24.geometry}
				material={materials.rock2}
				position={[-60.447, 10.236, 95.934]}
				rotation={[0, 1.308, 0]}
				scale={14.058}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Rock25.geometry}
				material={materials.Rock}
				position={[-59.49, 7.205, 78.193]}
				rotation={[-2.904, -1.104, -0.412]}
				scale={[7.578, 6.255, 15.7]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Rock26.geometry}
				material={materials.Rock}
				position={[-49.118, 3.974, 88.919]}
				rotation={[2.842, -0.085, -1.596]}
				scale={5.218}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Rock27.geometry}
				material={materials.rock2}
				position={[170.749, 2.829, -145.245]}
				rotation={[Math.PI, -1.061, Math.PI]}
				scale={[17.381, 14.058, 14.116]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Rock28.geometry}
				material={materials.Rock}
				position={[163.099, -0.201, -125.034]}
				rotation={[-0.164, 0.862, 2.641]}
				scale={[8.797, 6.815, 15.72]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Rock29.geometry}
				material={materials.Rock}
				position={[178.035, 0.326, -131.312]}
				rotation={[0.302, -0.151, 1.618]}
				scale={[5.313, 5.504, 6.146]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Rock30.geometry}
				material={materials.rock2}
				position={[-77.578, 3.377, -78.728]}
				rotation={[-1.428, -0.265, 1.848]}
				scale={[7.478, 5.181, 5.181]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Rock31.geometry}
				material={materials.rock2}
				position={[92.792, 4.422, 49.322]}
				rotation={[-0.95, 0.584, -3.116]}
				scale={[7.478, 5.181, 5.181]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Rock32.geometry}
				material={materials.Rock}
				position={[58.415, 3.496, 110.075]}
				rotation={[-2.203, 0.444, -2.451]}
				scale={[5.158, 4.304, 5.407]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Rock33.geometry}
				material={materials.Rock}
				position={[-133.258, 5.268, -126.167]}
				rotation={[0, -0.716, 0]}
				scale={[17.381, 14.058, 14.116]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Rock34.geometry}
				material={materials.rock2}
				position={[-118.129, 4.37, -130.448]}
				rotation={[0.713, 1.104, 0.914]}
				scale={[5.313, 5.504, 6.146]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Rock35.geometry}
				material={materials.Rock}
				position={[-173.86, 2.829, 57.763]}
				rotation={[Math.PI, -1.061, Math.PI]}
				scale={[17.381, 14.058, 14.116]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Rock36.geometry}
				material={materials.Rock}
				position={[-181.51, -0.201, 77.975]}
				rotation={[-0.164, 0.862, 2.641]}
				scale={[8.797, 6.815, 15.72]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Rock37.geometry}
				material={materials.rock2}
				position={[-166.573, 0.326, 71.696]}
				rotation={[0.302, -0.151, 1.618]}
				scale={[5.313, 5.504, 6.146]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Rock54.geometry}
				material={materials.Rock}
				position={[-38.735, 2.528, 4.416]}
				rotation={[0, 1.308, 0]}
				scale={3.76}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Rock57.geometry}
				material={materials.Rock}
				position={[11.46, 2.747, 76.955]}
				rotation={[-0.95, 0.584, -3.116]}
				scale={[7.478, 5.181, 5.181]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Rock58.geometry}
				material={materials.rock2}
				position={[44.908, -0.234, -89.214]}
				rotation={[-2.344, -0.352, 2.502]}
				scale={12.81}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Rock59.geometry}
				material={materials.Rock}
				position={[33.036, 3.023, -82.922]}
				rotation={[-1.176, -0.531, 0.111]}
				scale={[5.158, 4.304, 5.407]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Rock60.geometry}
				material={materials.Rock}
				position={[39.838, 3.613, 117.919]}
				rotation={[-2.487, -0.294, -0.872]}
				scale={[5.158, 4.304, 5.407]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Rock55.geometry}
				material={materials.rock2}
				position={[-65.29, 1.078, 20.665]}
				rotation={[-3.011, 0.58, 0.928]}
				scale={[7.282, 7.085, 8.17]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Floor.geometry}
				material={materials.grass}
				scale={[73.996, 14.239, 73.996]}
			/>
		</group>
	)
}
useGLTF.preload("/models/forest.glb")

export default Forest
