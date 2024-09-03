import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';

function Cube() {
  const meshRef = useRef();
  const [time, setTime] = useState(0);

  useFrame(({ clock }) => {
    
    setTime(clock.getElapsedTime());
    if (meshRef.current) {
      meshRef.current.position.x = Math.cos(time) * 2; // Movimiento cosenoidal en el eje X
    }
    const t = clock.getElapsedTime()*1;
    const x1 = Math.sin(t)*3;
    const y1 = Math.cos(3*t)*1;
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="royalblue" />
    </mesh>
  );
}

export default Cube;