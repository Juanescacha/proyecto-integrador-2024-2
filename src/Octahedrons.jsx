const Cube = () => {

    
        const meshRef = useRef();
        const [time, setTime] = useState(0);
      
        useFrame(({ clock }) => {
          
          setTime(clock.getElapsedTime());
          if (meshRef.current) {
            meshRef.current.position.x = Math.cos(time) * 2; // Movimiento cosenoidal en el eje X
          }
        });
      
        return (
          <mesh ref={meshRef}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="royalblue" />
          </mesh>
        );
      }
      


    return (
        <mesh>
        <octahedronGeometry args={[1]}/>
        <mesh color={"blue"}/>
    </mesh>
    );

export default Cube