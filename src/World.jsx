/* eslint-disable react/no-unknown-property */
import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"


const settingsCamera = { position: [2, 0, 5], fov: 75 };

const World = () => {
  return (
    <>
      <h1 className="title">pablito clavo un clavito</h1>
      <Canvas camera={settingsCamera}>
        <OrbitControls enablePan={false} />
        <ambientLight intensity={1.7} />
        <directionalLight position={[0, 10, 0]} />
        <Cube/>
      </Canvas>
    </>
  );
};

export default World;