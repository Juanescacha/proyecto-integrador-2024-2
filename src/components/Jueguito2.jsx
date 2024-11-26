import { useGLTF, useAnimations } from '@react-three/drei'
import { useRef, useEffect } from 'react'

const Jueguito2 = (props) => {
    const jueguitoRef = useRef()
  const { nodes, materials, animations } = useGLTF("/models/Jueguito2.glb")
  const { actions } = useAnimations(animations, jueguitoRef)

  useEffect(() => {
    actions["JueguitoAction.001"].play();
    return () => actions["JueguitoAction.001"].stop();
  }, [actions]);


  console.log(actions)
  return (
    <group ref={jueguitoRef} {...props} dispose={null}>
      <group name="Scene">
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

useGLTF.preload("/models/Jueguito2.glb");
export default Jueguito2;