import { useGLTF, useTexture } from "@react-three/drei"
import { useMemo } from "react";

const KingRacoon = (props) => {
	const { nodes, materials } = useGLTF("/models/kingRacoon.glb")

	const PATH = useMemo(() => "materials/gold/Poliigon_MetalGoldPaint_7253_", []);

  	const racoonTexture = useTexture({
    	metallicMap: PATH + "Metallic.jpg",
    	normalMap: PATH + "Normal.png",
    	roughnessMap: PATH + "Roughness.jpg",
    	ambientOcclusionMap: PATH + "AmbientOcclusion.jpg"
  })
  //Object.keys(racoonTexture).map((key)=>{
    //racoonTexture[key].wrapS = racoonTexture[key].wrapT = RepeatWrapping
    //racoonTexture[key].repeat.set(4,4);
  //})
	return (
		<group {...props} dispose={null}>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Raccoon_Mesh.geometry}
				material={materials.Raccoon_Mat}
				
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.uploads_files_3490472_crown.geometry}
				material={materials.gold}
				position={[0, 2.832, 1.599]}
				rotation={[1.497, 0, 0]}
				{...materials.gold}
          		metalic={racoonTexture.metalnessMap}
          		normal={racoonTexture.normalMap}
         		roughness={racoonTexture.roughnessMap}
          		ao={racoonTexture.aoMap}
          		metalicfactor={1} // Ajusta el metalness si es necesario
          		roughnessFactor={0.5} // Ajusta la roughness si es necesario

			/>
		</group>
	)
}

useGLTF.preload("/models/kingRacoon.glb")

export default KingRacoon
