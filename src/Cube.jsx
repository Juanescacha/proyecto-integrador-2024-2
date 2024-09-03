import { useRef } from "react"
import { useFrame } from "@react-three/fiber"

const Cube = () => {
	const meshRef = useRef()

	useFrame(({ clock }) => {
		if (meshRef.current) {
			const t = clock.getElapsedTime()
			meshRef.current.position.x = Math.sin(t) * 3
			meshRef.current.position.y = Math.cos(3 * t) * 1

			meshRef.current.rotation.x = t * 0.5
			meshRef.current.rotation.y = t * 0.3
		}
	})

	return (
		<mesh ref={meshRef}>
			<boxGeometry args={[1, 1, 1]} />
			<meshStandardMaterial color="royalblue" />
		</mesh>
	)
}

export default Cube
