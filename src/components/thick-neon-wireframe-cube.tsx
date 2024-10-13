import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { EdgesGeometry,BoxGeometry, Color } from 'three';
import * as THREE from "three"

type MeshRef = React.MutableRefObject<THREE.Mesh | null>;

function ThickNeonWireframeCube() {
  const meshRef = useRef<THREE.Mesh | null>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5;
      meshRef.current.rotation.y += delta * 0.5;
    }
  });

  const shinyPurple = new Color(0xA500D0);

  return (
    <mesh ref={meshRef} position={[1.5, 0, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      <lineSegments>
        <edgesGeometry attach="geometry" args={[new EdgesGeometry(new BoxGeometry(3.5, 3.5, 3.5))]} />
        <lineBasicMaterial color={shinyPurple} linewidth={10} />
      </lineSegments>
      <meshBasicMaterial color="grey" wireframe />
    </mesh>
  );
}

export default function RotatingThickNeonCube() {
  return (
    <div className="h-[550px] w-[720px]"> {/* Increased canvas size */}
      <Canvas camera={{ position: [0, 0, 6], fov: 75 }}>
        <ThickNeonWireframeCube />
      </Canvas>
    </div>
  );
}
