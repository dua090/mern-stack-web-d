import {Canvas, useFrame} from "@react-three/fiber" 
import {OrbitControls, Sparkles} from "@react-three/drei" 
import {useRef} from "react"

/**
 * A component that renders a rotating cylinder mesh using react-three-fiber.
 * The mesh rotates continuously on the x and y axes.
 * It includes sparkles for visual effect.
 */

const RoatatingCube=()=>{
  const meshRef = useRef();
  useFrame(() => {
    if (meshRef.current) {  
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });
  return(
    <mesh ref={meshRef}>
      <cylinderGeometry/>
      <meshLambertMaterial color={0x468585} emissive={0x468585}/>
      <Sparkles count={100} scale={1} size={2} speed={0.002} noise={0.2} color="orange"/>
    </mesh>
  )
}

const App=()=>{
  return(
    <Canvas style={{height:"100vh",width:"100vw",display:'flex',justifyContent:'center',alignItems:'center'}}>
      <OrbitControls enableZoom enablePan enableRotate/>

      <directionalLight position={[1,1,1]} intensity={10} color={0x9CDBA6}/>
      <color attach={"background"} args={["#F0F0F0"]} />
      <RoatatingCube/>
      
    </Canvas>
  )
}

export default App