import { useGLTF, useAnimations } from '@react-three/drei'
import { useRef, useEffect, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const Jueguito2 = (props) => {
    const jueguitoRef = useRef()
    const sensorRef = useRef()
    const { nodes, materials, animations } = useGLTF("/models/Jueguito2.glb")
    const { actions } = useAnimations(animations, jueguitoRef)
    const [animationTriggered, setAnimationTriggered] = useState(false)

    useEffect(() => {
        if (animationTriggered) {
            const action = actions["JueguitoAction.001"]
            if (action) {
                action.reset() // Reiniciar la animación si ya había sido ejecutada
                action.setLoop(THREE.LoopOnce) // Configurar para ejecutarse una vez
                action.clampWhenFinished = true // Detenerse al final de la animación
                action.play() // Iniciar la animación
            }
        }
    }, [animationTriggered, actions])

    useFrame(({ camera }) => {
        if (sensorRef.current) {
            const sensorBox = new THREE.Box3().setFromObject(sensorRef.current)
            const cameraPosition = new THREE.Vector3().setFromMatrixPosition(camera.matrixWorld)

            if (sensorBox.containsPoint(cameraPosition)) {
                setAnimationTriggered(true)
            }
        }
    })

    return (
        <group ref={jueguitoRef} {...props} dispose={null}>
            <group name="Scene">
                {/* Sensor transparente */}
                <mesh ref={sensorRef} position={[0, 0.5, 0]} visible={true} scale={[10, 10, 10]}>
                    <boxGeometry args={[1, 1, 1]} /> {/* Tamaño de la caja */}
                    <meshBasicMaterial color="red" transparent opacity={0.5} />
                </mesh>
                
                <group
                    name="Jueguito"
                    position={[0, 0.215, 0.012]}
                    rotation={[0, Math.PI / 2, 0]}
                    scale={[0.189, 0.057, 0.189]}>
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
                </group>
            </group>
        </group>
    )
}

useGLTF.preload("/models/Jueguito2.glb")
export default Jueguito2