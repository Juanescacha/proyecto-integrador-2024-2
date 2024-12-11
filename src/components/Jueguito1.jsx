import { useGLTF, useAnimations } from '@react-three/drei';
import { useRef, useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Physics, RigidBody } from '@react-three/rapier'; // Importamos RigidBody para físicas

const Jueguito1 = (props) => {
    const jueguitoRef = useRef();
    const sensorRef = useRef();
    const troncosRef = useRef(); // Referencia a los troncos
    const { nodes, materials, animations } = useGLTF("/models/Jueguito1.glb");
    const { actions } = useAnimations(animations, jueguitoRef);
    const [animationTriggered, setAnimationTriggered] = useState(false);
    const [animationFinished, setAnimationFinished] = useState(false); // Estado para saber si la animación ha terminado
    const [ballsDynamic, setBallsDynamic] = useState(false); // Estado para cambiar las bolas a dinámico

    useEffect(() => {
        if (animationTriggered) {
            const action = actions["Cube.001Action"];
            if (action) {
                action.reset(); // Reiniciar la animación
                action.setLoop(THREE.LoopOnce); // Configurar para ejecutarse una vez
                action.clampWhenFinished = true; // Detenerse al final de la animación
                action.play(); // Iniciar la animación

                // Revisar el estado de la animación
                action.setEffectiveTimeScale(1);
                action.time = 0;
                setAnimationFinished(false); // Reseteamos el estado para asegurarnos que la animación se marca como no terminada inicialmente

                // Cuando la animación se termine, marcamos que ha finalizado
                action.onLoop = () => {
                    setAnimationFinished(true); // Marcar que la animación terminó
                };
            }
            setBallsDynamic(true); // Activar las bolas para que caigan
        }
    }, [animationTriggered, actions]);

    useFrame(({ camera }) => {
        if (sensorRef.current) {
            const sensorBox = new THREE.Box3().setFromObject(sensorRef.current);
            const cameraPosition = new THREE.Vector3().setFromMatrixPosition(camera.matrixWorld);

            if (sensorBox.containsPoint(cameraPosition)) {
                setAnimationTriggered(true);
            }
        }

        // Solo actualizar los troncos cuando la animación haya terminado
        if (animationFinished && troncosRef.current && nodes.Troncos) {
            // Obtener la matriz mundial del nodo animado
            const worldMatrix = nodes.Troncos.matrixWorld;
            const position = new THREE.Vector3();
            const quaternion = new THREE.Quaternion();
            const scale = new THREE.Vector3();

            worldMatrix.decompose(position, quaternion, scale);

            // Aplicar posición y rotación al collider del tronco
            troncosRef.current.api.setTranslation(position, true);
            troncosRef.current.api.setRotation(quaternion, true);

            // Resetear la bandera de animación para evitar actualizaciones innecesarias
            setAnimationFinished(false);
        }
    });

    return (
        <Physics gravity={[0, -1, 0]}>
            <group ref={jueguitoRef} {...props} dispose={null}>
                <group name="Scene">
                    {/* Sensor transparente */}
                    <mesh ref={sensorRef} position={[0, 0.5, 0]} visible={false} scale={[30, 10, 25]}>
                        <boxGeometry args={[1, 1, 1]} /> {/* Tamaño de la caja */}
                        <meshBasicMaterial color="blue" transparent opacity={0.5} />
                    </mesh>

                    {/* Modelo principal con físicas */}
                    <RigidBody type="fixed" colliders="trimesh"> {/* Base como objeto fijo */}
                        <mesh
                            name="Base"
                            castShadow
                            receiveShadow
                            geometry={nodes.Base.geometry}
                            material={materials.Wood}
                            position={[-0.116, 0.124, 0]}
                            rotation={[0, 0, -0.47]}
                            scale={[4.4, 0.2, 1.3]}
                        />
                    </RigidBody>
                    <RigidBody type="fixed" colliders="trimesh"> {/* Troncos como objeto fijo */}
                        <mesh
                            name="Troncos"
                            castShadow
                            receiveShadow
                            geometry={nodes.Troncos.geometry}
                            material={materials.Wood}
                            position={[-0.178, -0.718, 0]}
                            rotation={[0, 0, -0.469]}
                            scale={[0.2, 0.887, 0.2]}
                        />
                    </RigidBody>

                    {/* Hileras de bolas que caen con físicas */}
                    <FallingBalls />
                </group>
            </group>
        </Physics>
    );
};

const FallingBalls = () => {
    const positions = [
        [-4, 20, 1],
        [-3, 20, 1],
        [-2, 20, 1],
        [-1, 20, 1],
        [-4, 20, -1],
        [-3, 20, -1],
        [-2, 25,-1],
        [-1, 25, 0],
        [-4, 25, 0],
        [-3, 25, 0],
        [-2, 25, 0],
        [-1, 25, 0],
        [0, 25, 0]
    ];

    return (
        <>
            {positions.map((position, index) => (
                <RigidBody key={index} colliders="ball" position={position} type="dynamic"> {/* Bola dinámica */}
                    <mesh castShadow>
                        <sphereGeometry args={[0.3, 32, 32]} />
                        <meshPhysicalMaterial 
                            color={"cyan"}
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

useGLTF.preload("/models/Jueguito1.glb");
export default Jueguito1;