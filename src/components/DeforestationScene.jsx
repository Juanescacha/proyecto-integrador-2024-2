
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function DeforestationScene(props) {
  const { nodes, materials } = useGLTF("/models/EscenaDeforestacion1PI.glb")
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bush.geometry}
        material={materials.Bush}
        position={[-3.836, 3.419, -4.605]}
        scale={0.459}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bush1.geometry}
        material={materials.Bush}
        position={[-3.408, 3.293, -4.854]}
        scale={0.249}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bush2.geometry}
        material={materials.Bush}
        position={[-3.57, 3.317, -5.21]}
        scale={[0.361, 0.404, 0.361]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bush3.geometry}
        material={materials.Bush}
        position={[1.996, 3.46, -9.939]}
        rotation={[0, -0.976, 0]}
        scale={0.715}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bush4.geometry}
        material={materials.Bush}
        position={[2.691, 3.263, -9.605]}
        rotation={[0, -0.976, 0]}
        scale={0.388}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bush5.geometry}
        material={materials.Bush}
        position={[3.01, 3.3, -10.125]}
        rotation={[0, -0.976, 0]}
        scale={[0.562, 0.63, 0.562]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bush6.geometry}
        material={materials.Bush}
        position={[10.222, 3.46, 2.967]}
        rotation={[0, -0.368, 0]}
        scale={0.715}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bush7.geometry}
        material={materials.Bush}
        position={[10.983, 3.263, 2.845]}
        rotation={[0, -0.368, 0]}
        scale={0.388}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bush8.geometry}
        material={materials.Bush}
        position={[10.948, 3.3, 2.236]}
        rotation={[0, -0.368, 0]}
        scale={[0.562, 0.63, 0.562]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bush9.geometry}
        material={materials.Bush}
        position={[-3.885, 3.485, 8.36]}
        rotation={[0, -1.509, 0]}
        scale={0.861}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bush10.geometry}
        material={materials.Bush}
        position={[-3.368, 3.248, 9.131]}
        rotation={[0, -1.509, 0]}
        scale={0.467}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bush11.geometry}
        material={materials.Bush}
        position={[-2.72, 3.292, 8.787]}
        rotation={[0, -1.509, 0]}
        scale={[0.677, 0.758, 0.677]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bush12.geometry}
        material={materials.Bush}
        position={[-5.315, 3.485, 4.07]}
        rotation={[0, -1.509, 0]}
        scale={0.861}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bush13.geometry}
        material={materials.Bush}
        position={[-1.902, 3.248, 4.812]}
        rotation={[0, -1.509, 0]}
        scale={0.467}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bush14.geometry}
        material={materials.Bush}
        position={[-4.959, 3.292, 5.013]}
        rotation={[0, -1.509, 0]}
        scale={[0.677, 0.758, 0.677]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bush15.geometry}
        material={materials.Bush}
        position={[-13.427, 3.485, -9.27]}
        rotation={[Math.PI, -0.558, Math.PI]}
        scale={0.861}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bush16.geometry}
        material={materials.Bush}
        position={[-12.456, 3.248, -5.915]}
        rotation={[Math.PI, -0.558, Math.PI]}
        scale={0.467}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bush17.geometry}
        material={materials.Bush}
        position={[-14.087, 3.292, -8.508]}
        rotation={[Math.PI, -0.558, Math.PI]}
        scale={[0.677, 0.758, 0.677]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bush18.geometry}
        material={materials.Bush}
        position={[17.426, 3.485, 0.051]}
        rotation={[0, 1.058, 0]}
        scale={0.861}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bush19.geometry}
        material={materials.Bush}
        position={[14.966, 3.248, -2.428]}
        rotation={[0, 1.058, 0]}
        scale={0.467}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bush20.geometry}
        material={materials.Bush}
        position={[17.64, 3.292, -0.934]}
        rotation={[0, 1.058, 0]}
        scale={[0.677, 0.758, 0.677]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bush21.geometry}
        material={materials.Bush}
        position={[16.823, 3.628, 15.282]}
        rotation={[-Math.PI, 0.683, -Math.PI]}
        scale={1.721}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bush22.geometry}
        material={materials.Bush}
        position={[11.106, 3.154, 19.291]}
        rotation={[-Math.PI, 0.683, -Math.PI]}
        scale={0.933}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bush23.geometry}
        material={materials.Bush}
        position={[14.955, 3.243, 14.528]}
        rotation={[-Math.PI, 0.683, -Math.PI]}
        scale={[1.353, 1.516, 1.353]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.treeRed9.geometry}
        material={materials.rock2}
        position={[-1.29, 3.174, -6.608]}
        rotation={[-0.335, 1.232, -1.824]}
        scale={[0.606, 0.589, 0.68]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.treeRed10.geometry}
        material={materials.rock2}
        position={[7.506, 3.065, -3.061]}
        rotation={[-2.214, 0.575, 1.535]}
        scale={1.066}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.treeRed11.geometry}
        material={materials.TreeRed}
        position={[-8.338, 2.694, -35.428]}
        rotation={[-Math.PI, 0.225, -Math.PI]}
        scale={[0.856, 1.04, 0.856]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.treeRed12.geometry}
        material={materials.TreeRed}
        position={[36.028, 2.294, -24.165]}
        rotation={[0, 1.476, 0]}
        scale={0.796}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.treeRed13.geometry}
        material={materials.TreeRed}
        position={[-35.004, 2.421, 17.491]}
        rotation={[Math.PI, -0.99, Math.PI]}
        scale={[0.894, 1.23, 0.894]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.treeRed14.geometry}
        material={materials.TreeRed}
        position={[-37.678, 2.54, 7.736]}
        rotation={[Math.PI, -0.99, Math.PI]}
        scale={1.273}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.treeRed15.geometry}
        material={materials.TreeRed}
        position={[32.47, 2.866, 30.461]}
        rotation={[0, -1.412, 0]}
        scale={0.796}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.treeRed16.geometry}
        material={materials.TreeRed}
        position={[-28.53, 2.938, -35.861]}
        rotation={[0, 0.86, 0]}
        scale={0.796}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.treeRed17.geometry}
        material={materials.TreeRed}
        position={[-20.16, 2.907, -36.07]}
        rotation={[0, 0.86, 0]}
        scale={1.177}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.treeRed18.geometry}
        material={materials.TreeRed}
        position={[45.209, 3.023, -2.73]}
        rotation={[Math.PI, -0.858, Math.PI]}
        scale={[0.556, 0.629, 0.556]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.treeRed19.geometry}
        material={materials.TreeRed}
        position={[-10.077, 2.479, 40.164]}
        rotation={[-Math.PI, 1.271, -Math.PI]}
        scale={[0.796, 0.96, 0.796]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.treeRed20.geometry}
        material={materials.TreeRed}
        position={[47.273, 2.9, 29.615]}
        rotation={[-Math.PI, 1.323, -Math.PI]}
        scale={1.177}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.treeRed11001.geometry}
        material={materials.TreeRed}
        position={[-23.387, 2.694, 34.037]}
        rotation={[0, -1.269, 0]}
        scale={[0.856, 1.04, 0.856]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.treeRed12001.geometry}
        material={materials.TreeRed}
        position={[17.844, 2.294, -39.741]}
        rotation={[-Math.PI, 1.004, -Math.PI]}
        scale={0.796}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.treeRed13001.geometry}
        material={materials.TreeRed}
        position={[39.533, 2.421, -8.134]}
        rotation={[0, 0.519, 0]}
        scale={[0.894, 1.23, 0.894]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.treeRed14001.geometry}
        material={materials.TreeRed}
        position={[37.485, 2.54, 1.773]}
        rotation={[0, 0.519, 0]}
        scale={1.273}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.treeRed15001.geometry}
        material={materials.TreeRed}
        position={[45.283, 2.866, -16.054]}
        rotation={[0, -0.282, 0]}
        scale={0.796}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.treeRed16001.geometry}
        material={materials.TreeRed}
        position={[-13.615, 2.938, 51.712]}
        rotation={[-Math.PI, 0.184, -Math.PI]}
        scale={0.796}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.treeRed17001.geometry}
        material={materials.TreeRed}
        position={[-18.001, 2.907, 44.581]}
        rotation={[-Math.PI, 0.184, -Math.PI]}
        scale={1.177}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.treeRed18001.geometry}
        material={materials.TreeRed}
        position={[-50.381, 3.023, -16.35]}
        rotation={[0, 0.387, 0]}
        scale={[0.556, 0.629, 0.556]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.treeRed19001.geometry}
        material={materials.TreeRed}
        position={[12.795, 2.479, -44.594]}
        rotation={[Math.PI, -1.4, Math.PI]}
        scale={[0.796, 0.96, 0.796]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.treeRed20001.geometry}
        material={materials.TreeRed}
        position={[53.314, 2.9, -25.347]}
        rotation={[-Math.PI, 0.274, -Math.PI]}
        scale={1.177}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.treeYellow6.geometry}
        material={materials.TreeYellow}
        position={[-34.759, 2.799, -19.151]}
        rotation={[0, 0.294, 0]}
        scale={0.796}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.treeYellow7.geometry}
        material={materials.TreeYellow}
        position={[-4.232, 3.358, -39.085]}
        rotation={[-Math.PI, 0.225, -Math.PI]}
        scale={0.556}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.treeYellow8.geometry}
        material={materials.TreeYellow}
        position={[27.926, 2.659, -29.432]}
        rotation={[0, 1.476, 0]}
        scale={[0.65, 0.782, 0.65]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.treeYellow9.geometry}
        material={materials.TreeYellow}
        position={[-21.067, 2.235, 22.705]}
        rotation={[0, 1.308, 0]}
        scale={[1.134, 1.327, 1.134]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.treeYellow10.geometry}
        material={materials.TreeYellow}
        position={[27.231, 3.001, 36.992]}
        rotation={[0, -1.412, 0]}
        scale={1.177}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.treeYellow11.geometry}
        material={materials.TreeYellow}
        position={[46.517, 3.126, 2.611]}
        rotation={[Math.PI, -0.858, Math.PI]}
        scale={[0.796, 0.986, 0.796]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.treeYellow6001.geometry}
        material={materials.TreeYellow}
        position={[3.962, 2.799, 48.7]}
        rotation={[-Math.PI, 0.75, -Math.PI]}
        scale={0.796}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.treeYellow7001.geometry}
        material={materials.TreeYellow}
        position={[-28.612, 3.358, 32.325]}
        rotation={[0, -1.269, 0]}
        scale={0.556}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.treeYellow8001.geometry}
        material={materials.TreeYellow}
        position={[8.216, 2.659, -38.917]}
        rotation={[-Math.PI, 1.004, -Math.PI]}
        scale={[0.65, 0.782, 0.65]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.treeYellow9001.geometry}
        material={materials.TreeYellow}
        position={[29.483, 2.235, -19.107]}
        rotation={[Math.PI, -0.837, Math.PI]}
        scale={[1.134, 1.327, 1.134]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.treeYellow10001.geometry}
        material={materials.TreeYellow}
        position={[48.953, 3.001, -8.529]}
        rotation={[0, -0.282, 0]}
        scale={1.177}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.treeYellow11001.geometry}
        material={materials.TreeYellow}
        position={[-49.121, 3.126, -21.703]}
        rotation={[0, 0.387, 0]}
        scale={[0.796, 0.986, 0.796]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.treeGreen12.geometry}
        material={materials.TreeGreen}
        position={[-37.836, 3.175, -13.537]}
        rotation={[0, 0.294, 0]}
        scale={0.556}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.treeGreen16.geometry}
        material={materials.TreeGreen}
        position={[-12.429, 2.982, -42.733]}
        rotation={[-Math.PI, 0.225, -Math.PI]}
        scale={1.177}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.treeGreen17.geometry}
        material={materials.TreeGreen}
        position={[40.186, 2.428, -20.567]}
        rotation={[0, 1.476, 0]}
        scale={0.556}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.treeGreen19.geometry}
        material={materials.TreeGreen}
        position={[2.156, 2.565, -48.534]}
        rotation={[0, 1.476, 0]}
        scale={0.796}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.treeGreen20.geometry}
        material={materials.TreeGreen}
        position={[-30.816, 3.352, 2.389]}
        rotation={[0, -0.581, 0]}
        scale={0.796}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.treeGreen21.geometry}
        material={materials.TreeGreen}
        position={[40.411, 2.817, 12.755]}
        rotation={[-Math.PI, 1.198, -Math.PI]}
        scale={1.177}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.treeGreen22.geometry}
        material={materials.TreeGreen}
        position={[-4.854, 3.251, 41.882]}
        rotation={[-Math.PI, 1.271, -Math.PI]}
        scale={0.556}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.treeGreen188.geometry}
        material={materials.TreeGreen}
        position={[42.743, 2.416, -29.167]}
        rotation={[0, 1.476, 0]}
        scale={1.177}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.treeGreen12001.geometry}
        material={materials.TreeGreen}
        position={[10.362, 3.175, 48.539]}
        rotation={[-Math.PI, 0.75, -Math.PI]}
        scale={0.556}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.treeGreen16001.geometry}
        material={materials.TreeGreen}
        position={[-27.647, 2.982, 41.245]}
        rotation={[0, -1.269, 0]}
        scale={1.177}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.treeGreen17001.geometry}
        material={materials.TreeGreen}
        position={[23.335, 2.428, -39.457]}
        rotation={[-Math.PI, 1.004, -Math.PI]}
        scale={0.556}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.treeGreen19001.geometry}
        material={materials.TreeGreen}
        position={[-39.992, 2.565, 31.55]}
        rotation={[Math.PI, -0.431, Math.PI]}
        scale={0.796}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.treeGreen20001.geometry}
        material={materials.TreeGreen}
        position={[28.943, 3.352, 3.42]}
        rotation={[-Math.PI, 1.052, -Math.PI]}
        scale={0.796}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.treeGreen21001.geometry}
        material={materials.TreeGreen}
        position={[-39.075, 2.817, -27.968]}
        rotation={[Math.PI, -1.472, Math.PI]}
        scale={1.177}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.treeGreen22001.geometry}
        material={materials.TreeGreen}
        position={[8.921, 3.251, -48.497]}
        rotation={[Math.PI, -1.4, Math.PI]}
        scale={0.556}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.treeGreen188001.geometry}
        material={materials.TreeGreen}
        position={[20.067, 2.416, -47.813]}
        rotation={[-Math.PI, 1.004, -Math.PI]}
        scale={1.177}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rock.geometry}
        material={materials.rock2}
        position={[7.565, 3.109, 2.642]}
        scale={0.313}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rock001.geometry}
        material={materials.rock2}
        position={[-7.944, 3.524, 3.068]}
        rotation={[-1.265, -0.789, -2.132]}
        scale={1.066}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rock002.geometry}
        material={materials.Rock}
        position={[3.961, 3.536, -9.19]}
        rotation={[-0.11, 0.029, -2.138]}
        scale={[0.986, 0.683, 0.683]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rock003.geometry}
        material={materials.rock2}
        position={[-8.223, 3.936, -6.476]}
        scale={1.169}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rock004.geometry}
        material={materials.Rock}
        position={[-6.777, 3.683, -6.783]}
        rotation={[-3.033, 0.192, -0.646]}
        scale={[0.63, 0.52, 1.306]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rock005.geometry}
        material={materials.Rock}
        position={[-7.415, 3.415, -5.718]}
        rotation={[2.412, 1.114, -0.894]}
        scale={0.434}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rock006.geometry}
        material={materials.rock2}
        position={[16.147, 3.319, 6.888]}
        rotation={[-Math.PI, 0.247, -Math.PI]}
        scale={[1.446, 1.169, 1.174]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rock007.geometry}
        material={materials.Rock}
        position={[14.358, 3.067, 6.71]}
        rotation={[-0.117, -0.437, 2.466]}
        scale={[0.732, 0.567, 1.308]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rock008.geometry}
        material={materials.Rock}
        position={[15.185, 3.111, 7.774]}
        rotation={[1.244, -1.255, 2.8]}
        scale={[0.442, 0.458, 0.511]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rock009.geometry}
        material={materials.rock2}
        position={[5.107, 3.365, -8.868]}
        rotation={[-1.794, -0.202, 0.498]}
        scale={[0.622, 0.431, 0.431]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rock010.geometry}
        material={materials.Rock}
        position={[-7.823, 3.385, 2.055]}
        rotation={[-2.257, 0.718, -1.768]}
        scale={[0.429, 0.358, 0.45]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rock011.geometry}
        material={materials.rock2}
        position={[-1.168, 3.452, 4.828]}
        rotation={[-0.8, -0.331, 2.187]}
        scale={[0.622, 0.431, 0.431]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rock012.geometry}
        material={materials.Rock}
        position={[-6.791, 3.375, 3.378]}
        rotation={[-1.209, 0.678, 2.248]}
        scale={[0.429, 0.358, 0.45]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rock013.geometry}
        material={materials.Rock}
        position={[8.047, 3.522, -17.123]}
        rotation={[Math.PI, -1.118, Math.PI]}
        scale={[1.446, 1.169, 1.174]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rock014.geometry}
        material={materials.rock2}
        position={[8.718, 3.448, -16]}
        rotation={[0.3, -0.097, 1.601]}
        scale={[0.442, 0.458, 0.511]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rock015.geometry}
        material={materials.Rock}
        position={[-10.779, 3.319, -19.628]}
        rotation={[-Math.PI, 0.247, -Math.PI]}
        scale={[1.446, 1.169, 1.174]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rock016.geometry}
        material={materials.Rock}
        position={[-12.568, 3.067, -19.806]}
        rotation={[-0.117, -0.437, 2.466]}
        scale={[0.732, 0.567, 1.308]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rock017.geometry}
        material={materials.rock2}
        position={[-11.741, 3.111, -18.742]}
        rotation={[1.244, -1.255, 2.8]}
        scale={[0.442, 0.458, 0.511]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rock018.geometry}
        material={materials.Rock}
        position={[-0.402, 3.109, -6.709]}
        scale={0.313}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rock019.geometry}
        material={materials.Rock}
        position={[-5.145, 3.312, -1.109]}
        rotation={[-0.8, -0.331, 2.187]}
        scale={[0.622, 0.431, 0.431]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rock020.geometry}
        material={materials.Rock}
        position={[6.744, 3.335, -3.879]}
        rotation={[-2.04, -0.469, -1.419]}
        scale={[0.429, 0.358, 0.45]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rock021.geometry}
        material={materials.rock2}
        position={[28.18, 2.595, -18.611]}
        rotation={[0, 1.308, 0]}
        scale={1.077}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rock022.geometry}
        material={materials.rock2}
        position={[15.733, 4.024, 33.332]}
        rotation={[-0.737, 0.02, -0.961]}
        scale={3.669}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rock023.geometry}
        material={materials.Rock}
        position={[-23.248, 4.066, -20.775]}
        rotation={[-0.444, 1.314, -1.71]}
        scale={[3.394, 2.352, 2.352]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rock024.geometry}
        material={materials.rock2}
        position={[-16.247, 5.44, 25.726]}
        rotation={[0, 1.308, 0]}
        scale={4.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rock025.geometry}
        material={materials.Rock}
        position={[-15.973, 4.572, 20.645]}
        rotation={[-2.904, -1.104, -0.412]}
        scale={[2.17, 1.791, 4.496]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rock026.geometry}
        material={materials.Rock}
        position={[-13.002, 3.647, 23.717]}
        rotation={[2.842, -0.085, -1.596]}
        scale={1.494}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rock027.geometry}
        material={materials.rock2}
        position={[49.964, 3.319, -43.344]}
        rotation={[Math.PI, -1.061, Math.PI]}
        scale={[4.978, 4.026, 4.043]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rock028.geometry}
        material={materials.Rock}
        position={[47.774, 2.451, -37.556]}
        rotation={[-0.164, 0.862, 2.641]}
        scale={[2.519, 1.952, 4.502]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rock029.geometry}
        material={materials.Rock}
        position={[52.051, 2.602, -39.354]}
        rotation={[0.302, -0.151, 1.618]}
        scale={[1.522, 1.576, 1.76]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rock030.geometry}
        material={materials.rock2}
        position={[-21.153, 3.476, -24.295]}
        rotation={[-1.428, -0.265, 1.848]}
        scale={[2.141, 1.484, 1.484]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rock031.geometry}
        material={materials.rock2}
        position={[27.639, 3.775, 12.377]}
        rotation={[-0.95, 0.584, -3.116]}
        scale={[2.141, 1.484, 1.484]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rock032.geometry}
        material={materials.Rock}
        position={[17.794, 3.51, 29.776]}
        rotation={[-2.203, 0.444, -2.451]}
        scale={[1.477, 1.233, 1.549]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rock033.geometry}
        material={materials.Rock}
        position={[-37.099, 4.017, -37.881]}
        rotation={[0, -0.716, 0]}
        scale={[4.978, 4.026, 4.043]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rock034.geometry}
        material={materials.rock2}
        position={[-32.766, 3.76, -39.107]}
        rotation={[0.713, 1.104, 0.914]}
        scale={[1.522, 1.576, 1.76]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rock035.geometry}
        material={materials.Rock}
        position={[-48.727, 3.319, 14.794]}
        rotation={[Math.PI, -1.061, Math.PI]}
        scale={[4.978, 4.026, 4.043]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rock036.geometry}
        material={materials.Rock}
        position={[-50.917, 2.451, 20.583]}
        rotation={[-0.164, 0.862, 2.641]}
        scale={[2.519, 1.952, 4.502]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rock037.geometry}
        material={materials.Rock}
        position={[-10.029, 3.233, -0.484]}
        rotation={[0, 1.308, 0]}
        scale={1.077}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rock039.geometry}
        material={materials.Rock}
        position={[4.346, 3.295, 20.29]}
        rotation={[-0.95, 0.584, -3.116]}
        scale={[2.141, 1.484, 1.484]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rock040.geometry}
        material={materials.rock2}
        position={[13.926, 2.442, -27.298]}
        rotation={[-2.344, -0.352, 2.502]}
        scale={3.669}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rock041.geometry}
        material={materials.Rock}
        position={[10.525, 3.374, -25.496]}
        rotation={[-1.176, -0.531, 0.111]}
        scale={[1.477, 1.233, 1.549]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rock042.geometry}
        material={materials.Rock}
        position={[12.473, 3.543, 32.022]}
        rotation={[-2.487, -0.294, -0.872]}
        scale={[1.477, 1.233, 1.549]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rock038.geometry}
        material={materials.rock2}
        position={[-17.634, 2.817, 4.17]}
        rotation={[-3.011, 0.58, 0.928]}
        scale={[2.085, 2.029, 2.34]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Floor.geometry}
        material={materials.grass}
        position={[1.064, 2.509, -1.748]}
        scale={[21.191, 4.078, 21.191]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.logs.geometry}
        material={materials.MaderaOscura}
        position={[-16.257, 3.775, -12.867]}
        rotation={[0.103, -1.146, -1.455]}
        scale={0.565}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.logs001.geometry}
        material={materials.MaderaOscura}
        position={[-9.979, 3.775, -22.536]}
        rotation={[-0.006, 0.081, -1.523]}
        scale={0.468}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.logs002.geometry}
        material={materials.MaderaOscura}
        position={[-21.839, 3.775, -16.352]}
        rotation={[-0.061, 0.884, -1.496]}
        scale={0.468}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.logs003.geometry}
        material={materials.MaderaOscura}
        position={[10.471, 3.775, -21.081]}
        rotation={[3.097, -0.306, 1.579]}
        scale={0.468}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.logs004.geometry}
        material={materials.MaderaOscura}
        position={[1.229, 3.841, 14.565]}
        rotation={[0.141, -1.249, -1.42]}
        scale={0.468}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.logs005.geometry}
        material={materials.MaderaOscura}
        position={[22.777, 4.08, -9.345]}
        rotation={[-2.964, -1.535, 1.796]}
        scale={0.773}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.logs006.geometry}
        material={materials.MaderaOscura}
        position={[-23.285, 3.775, -4.672]}
        rotation={[0.123, -1.208, -1.436]}
        scale={0.468}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.logs007.geometry}
        material={materials.MaderaOscura}
        position={[18.017, 3.775, -23.555]}
        rotation={[-0.055, -0.802, -1.582]}
        scale={0.468}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.logs008.geometry}
        material={materials.MaderaOscura}
        position={[-16.6, 3.481, -4.221]}
        rotation={[3.079, -0.775, 1.545]}
        scale={0.468}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.logs009.geometry}
        material={materials.MaderaOscura}
        position={[-26.772, 3.775, -5.141]}
        rotation={[-0.167, 1.287, -1.4]}
        scale={0.468}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.logs010.geometry}
        material={materials.MaderaOscura}
        position={[1.108, 3.775, -23.473]}
        rotation={[3.028, 1.178, 1.695]}
        scale={0.611}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.logs011.geometry}
        material={materials.MaderaOscura}
        position={[-7.591, 3.775, -8.193]}
        rotation={[-0.109, 1.149, -1.454]}
        scale={0.468}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.logs012.geometry}
        material={materials.MaderaOscura}
        position={[-5.795, 4.061, 20.159]}
        rotation={[-3.064, 0.93, 1.52]}
        scale={0.776}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.logs013.geometry}
        material={materials.MaderaOscura}
        position={[18.163, 3.775, -15.012]}
        rotation={[-0.021, 0.378, -1.52]}
        scale={0.468}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.logs014.geometry}
        material={materials.MaderaOscura}
        position={[7.457, 3.775, -29.76]}
        rotation={[-0.05, -0.396, -1.58]}
        scale={0.468}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.logs015.geometry}
        material={materials.MaderaOscura}
        position={[25.449, 3.313, 10.918]}
        rotation={[-0.088, 1.061, -1.473]}
        scale={0.468}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.logs016.geometry}
        material={materials.MaderaOscura}
        position={[8.253, 3.775, -10.353]}
        rotation={[-0.052, -0.536, -1.58]}
        scale={0.468}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.logs017.geometry}
        material={materials.MaderaOscura}
        position={[-15.164, 3.775, 9.209]}
        rotation={[-0.05, -0.411, -1.58]}
        scale={0.468}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.logs018.geometry}
        material={materials.MaderaOscura}
        position={[12.026, 3.508, 16.019]}
        rotation={[-0.077, -1.309, -1.602]}
        scale={0.468}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.logs019.geometry}
        material={materials.MaderaOscura}
        position={[-14.576, 3.775, 20.235]}
        rotation={[-0.053, -0.624, -1.581]}
        scale={0.468}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.logs020.geometry}
        material={materials.CutedTree}
        position={[-16.636, 4.576, 21.846]}
        rotation={[0, -0.698, 0]}
        scale={0.777}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.logs021.geometry}
        material={materials.CutedTree}
        position={[-7.998, 4.809, 48.17]}
        rotation={[Math.PI, -0.238, Math.PI]}
        scale={0.739}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.logs022.geometry}
        material={materials.CutedTree}
        position={[-12.357, 4.576, 4.723]}
        rotation={[Math.PI, -1.071, Math.PI]}
        scale={0.562}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.logs023.geometry}
        material={materials.CutedTree}
        position={[25.718, 4.887, 31.795]}
        rotation={[0, -0.299, 0]}
        scale={1.186}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.logs024.geometry}
        material={materials.CutedTree}
        position={[34.829, 4.236, 7.866]}
        rotation={[0, -0.916, 0]}
        scale={0.731}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.logs025.geometry}
        material={materials.CutedTree}
        position={[17.804, 4.448, 4.147]}
        rotation={[-Math.PI, 1.167, -Math.PI]}
        scale={[1.006, 1.25, 1.006]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.logs026.geometry}
        material={materials.CutedTree}
        position={[-41.811, 5.491, -7.92]}
        rotation={[-Math.PI, 1.515, -Math.PI]}
        scale={1.505}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.logs027.geometry}
        material={materials.CutedTree}
        position={[-18.163, 4.576, -1.719]}
        rotation={[0, 0.055, 0]}
        scale={1.069}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.logs028.geometry}
        material={materials.CutedTree}
        position={[26.351, 5.529, -37.668]}
        rotation={[0, 0.809, 0]}
        scale={0.905}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.logs029.geometry}
        material={materials.CutedTree}
        position={[-35.261, 6.411, 39.512]}
        rotation={[0, -0.567, 0]}
        scale={1.492}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.logs030.geometry}
        material={materials.CutedTree}
        position={[7.782, 4.576, -44.215]}
        rotation={[Math.PI, -0.802, Math.PI]}
        scale={0.529}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.logs031.geometry}
        material={materials.CutedTree}
        position={[-34.315, 5.406, 30.652]}
        rotation={[0, 0.463, 0]}
        scale={0.794}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.logs032.geometry}
        material={materials.CutedTree}
        position={[-25.788, 4.576, 2.706]}
        rotation={[0, 0.328, 0]}
        scale={1.066}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.logs033.geometry}
        material={materials.CutedTree}
        position={[32.035, 5.471, -23.948]}
        rotation={[Math.PI, -1.081, Math.PI]}
        scale={0.946}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.logs034.geometry}
        material={materials.CutedTree}
        position={[-27.53, 5.819, 15.349]}
        rotation={[Math.PI, -1.329, Math.PI]}
        scale={1.198}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.logs035.geometry}
        material={materials.CutedTree}
        position={[35.696, 4.685, -17.254]}
        rotation={[0, -0.926, 0]}
        scale={0.77}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.logs036.geometry}
        material={materials.CutedTree}
        position={[40.581, 4.515, 16.654]}
        rotation={[Math.PI, -0.238, Math.PI]}
        scale={0.878}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.logs037.geometry}
        material={materials.CutedTree}
        position={[-5.552, 5.281, -2.976]}
        rotation={[0, 0.286, 0]}
        scale={1.215}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.logs038.geometry}
        material={materials.CutedTree}
        position={[41.584, 4.576, -28.824]}
        rotation={[-Math.PI, 1.474, -Math.PI]}
        scale={0.401}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.logs039.geometry}
        material={materials.CutedTree}
        position={[12.488, 4.876, -38.554]}
        rotation={[0, -0.162, 0]}
        scale={0.764}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.logs040.geometry}
        material={materials.CutedTree}
        position={[26.412, 4.448, 0.541]}
        rotation={[Math.PI, -0.264, Math.PI]}
        scale={[1.134, 1.409, 1.134]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.logs041.geometry}
        material={materials.CutedTree}
        position={[-1.226, 5.153, 47.287]}
        rotation={[-Math.PI, 0.456, -Math.PI]}
        scale={1.045}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.logs042.geometry}
        material={materials.CutedTree}
        position={[8.873, 4.576, 32.487]}
        rotation={[-Math.PI, 0.103, -Math.PI]}
        scale={1.298}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.logs043.geometry}
        material={materials.CutedTree}
        position={[-28.567, 4.576, -17.192]}
        rotation={[-Math.PI, 0.86, -Math.PI]}
        scale={1.177}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.logs044.geometry}
        material={materials.CutedTree}
        position={[-50.31, 4.576, -17.408]}
        rotation={[0, 1.099, 0]}
        scale={0.495}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.logs045.geometry}
        material={materials.CutedTree}
        position={[6.346, 5.593, 7.108]}
        rotation={[-Math.PI, 0.14, -Math.PI]}
        scale={1.4}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.logs046.geometry}
        material={materials.CutedTree}
        position={[-5.929, 4.576, -21.395]}
        rotation={[0, 1.4, 0]}
        scale={0.932}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.logs047.geometry}
        material={materials.CutedTree}
        position={[24.053, 5.104, -16.961]}
        rotation={[Math.PI, -0.289, Math.PI]}
        scale={0.987}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.logs048.geometry}
        material={materials.CutedTree}
        position={[-7.486, 5.408, 31.708]}
        rotation={[Math.PI, -1.51, Math.PI]}
        scale={1.045}
      />
    </group>
  )
}

useGLTF.preload("/models/EscenaDeforestacion1PI.glb")

export default DeforestationScene
