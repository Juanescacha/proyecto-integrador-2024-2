import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import { Physics, RigidBody, CuboidCollider } from '@react-three/rapier'; // Asegúrate de importar Physics y RigidBody
import * as THREE from 'three';

const Jueguito2 = (props) => {
    const jueguitoRef = useRef();
    const sensorRef = useRef();
    const { nodes, materials } = useGLTF("/models/Jueguito2.glb");

    return (
        <Physics gravity={[0, -9.8, 0]} debug>
            <group ref={jueguitoRef} {...props} dispose={null}>
                <group name="Scene">
                    {/* Sensor transparente */}
                    <mesh ref={sensorRef} position={[0, 0.5, 0]} visible={false} scale={[10, 10, 10]}>
                        <boxGeometry args={[1, 1, 1]} /> {/* Tamaño de la caja */}
                        <meshBasicMaterial color="red" transparent opacity={0.5} />
                    </mesh>

                    <group
                        name="Jueguito"
                        position={[0, 0.215, 0.012]}
                        rotation={[0, Math.PI / 2, 0]}
                        scale={[0.189, 0.057, 0.189]}>

                        {/* Caja física que limita la bola */}
                        <RigidBody type="fixed">
                            {/* Creamos un CuboidCollider alrededor de Cube006_1 */}
                            <CuboidCollider args={[16, 2, 16]} position={[0, 0, 0]} />
                        </RigidBody>

                        <mesh
                            name="Cube006"
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube006.geometry}
                            material={materials.banana}
                        />
                        <mesh
                            name="Cube006_1"
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube006_1.geometry}
                            material={materials.Madera}
                        />
                        <mesh
                            name="Cube006_2"
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube006_2.geometry}
                            material={materials.hunter}
                        />
                        <mesh
                            name="Cube006_3"
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube006_3.geometry}
                            material={materials.monkey}
                        />
                        <FallingBalls2 />
                    </group>
                </group>
            </group>
        </Physics>
    );
};

const FallingBalls2 = () => {
  const positions = [
    [8, 5, 20]
  ];

  return (
      <>
          {positions.map((position, index) => (
              <RigidBody key={index} colliders="ball" position={position} type="dynamic"> {/* Bola dinámica */}
                  <mesh castShadow>
                      <sphereGeometry args={[0.3, 32, 32]} />
                      <meshPhysicalMaterial 
                          color={"red"}
                          transparent={true}
                          opacity={0.7}
                          roughness={0.2}
                          reflectivity={0.1}
                          transmission={1}
                          thickness={0.3}
                          envMapIntensity={1}
                      />
                  </mesh>
              </RigidBody>
          ))}
      </>
  );
};

useGLTF.preload("/models/Jueguito2.glb");
export default Jueguito2;
