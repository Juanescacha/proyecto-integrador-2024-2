/* eslint-disable react/no-unknown-property */
import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import Cube from "./App";


const settingsCamera = { position: [2, 0, 5], fov: 75 };

const World = () => {
  return (
    <>
      <h1 className="title">Tarea 1</h1>
      <Canvas camera={settingsCamera}>
        <OrbitControls enablePan={false} />
        <ambientLight intensity={1.7} />
        <directionalLight position={[0, 10, 0]} />
        <animatedObject/>
      </Canvas>
    </>
  );
};

export default World;