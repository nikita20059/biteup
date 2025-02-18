import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";

const BoxModel = () => {
  const gltf = useLoader(GLTFLoader, "/model.glb"); // Load the .glb model

  return <primitive object={gltf.scene} scale={4} />;
};

const BoxModelViewer = () => {
  return (
    <Canvas
      camera={{ position: [0, 2, 5], fov: 50 }}
      style={{ width: "100vw", height: "50vh" }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} />
      <BoxModel />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default BoxModelViewer;
