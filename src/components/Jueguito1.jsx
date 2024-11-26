import { useGLTF, useAnimations } from '@react-three/drei'
import { useRef, useEffect } from 'react'

const Jueguito1 = (props) => {
    const jueguitoRef = useRef()
  const { nodes, materials, animations } = useGLTF("/models/Jueguito1.glb")
  const { actions } = useAnimations(animations, jueguitoRef)

  useEffect(() => {
    actions["Cube.001Action"].play();
    return () => actions["Cube.001Action"].stop();
  }, [actions]);



  console.log(actions)
  return (
    <group ref={jueguitoRef} {...props} dispose={null}>
      <group name="Scene">
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
      </group>
    </group>
  )
}

useGLTF.preload("/models/Jueguito1.glb");
export default Jueguito1;