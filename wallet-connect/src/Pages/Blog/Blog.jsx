import React, { Suspense, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Robot from '../../models/Robot';
import Rhea from '../../models/Rhea';
import Milo from '../../models/Milo';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import './Blog.css';

const Blog = () => {
  const [animationIndex, setAnimationIndex] = useState(0);

  const animations = [
    "Idle Animation", 
    "Sit (Static)", 
    "Pose (Static)", 
    "Stretch (Static)", 
    "animation.lael.idlemain",
    "animation.lael.idle",
    "animation.lael.idle_jump_main"
  ]; // Replace with your animation names

  const handlePartClick = (index) => {
    setAnimationIndex(index);
  };

  return (
    <>
      <svg style={{ display: 'none' }}>
        <defs>
          <clipPath id="clip-path-ellipse">
            <ellipse cx="50%" cy="50%" rx="80%" ry="70%" />
          </clipPath>
          <clipPath id="clip-path-polygon">
            <polygon points="0,10 10,0 90,0 100,10 100,90 90,100 10,100 0,90" />
          </clipPath>
        </defs>
      </svg>

      <div className="blog-container">
        <Navbar />
        <Canvas shadows camera={{ position: [0, 0, 10] }}>
          <ambientLight intensity={0.5} />
          <directionalLight 
            position={[5, 10, 5]} 
            intensity={5} 
            castShadow 
            shadow-mapSize-width={1024} 
            shadow-mapSize-height={1024} 
            shadow-camera-near={0.5} 
            shadow-camera-far={50} 
            shadow-camera-left={-10} 
            shadow-camera-right={10} 
            shadow-camera-top={10} 
            shadow-camera-bottom={-10} 
          />
          <Suspense fallback={null}>
            <Robot 
              position={[0, -4, 0]} 
              rotation={[0.2, 0, 0]} 
              scale={[4, 4, 4]} 
              castShadow 
              receiveShadow
              animation={animations[animationIndex]} 
              onClickPart={handlePartClick} 
              onUpdate={(self) => {
                self.scale.set(4, 4, 4);
              }}
            />
            <mesh 
              position={[0, -3, 0]} 
              rotation={[-Math.PI / 2, 0, 0]} 
              receiveShadow
            >
              <planeGeometry args={[50, 50]} />
              <shadowMaterial opacity={0.5} />
            </mesh>
          </Suspense>
         
        </Canvas>
      </div>

      <div className="blog-container">
        <Navbar />
        <Canvas shadows camera={{ position: [0, 0, 10] }}>
          <ambientLight intensity={0.5} />
          <directionalLight 
            position={[5, 10, 5]} 
            intensity={5} 
            castShadow 
            shadow-mapSize-width={1024} 
            shadow-mapSize-height={1024} 
            shadow-camera-near={0.5} 
            shadow-camera-far={50} 
            shadow-camera-left={-10} 
            shadow-camera-right={10} 
            shadow-camera-top={10} 
            shadow-camera-bottom={-10} 
          />
          <Suspense fallback={null}>
            <Rhea 
              position={[9, -5, 1]} 
              rotation={[0, -0.8, 0]} 
              scale={[5, 5, 5]} 
              castShadow 
              receiveShadow
              animation={animations[4]} 
              onClickPart={handlePartClick} 
              onUpdate={(self) => {
                self.scale.set(5, 5, 5);
              }}
            />
            <mesh 
              position={[0, -3.5, 0]} 
              rotation={[-Math.PI / 2, 0, 0]} 
              receiveShadow
            >
              <planeGeometry args={[50, 50]} />
              <shadowMaterial opacity={0.5} />
            </mesh>
          </Suspense>
        
        </Canvas>
      </div>

      <div className="blog-container">
        <Navbar />
        <Canvas shadows camera={{ position: [0, 0, 10] }}>
          <ambientLight intensity={0.5} />
          <directionalLight 
            position={[5, 10, 5]} 
            intensity={5} 
            castShadow 
            shadow-mapSize-width={1024} 
            shadow-mapSize-height={1024} 
            shadow-camera-near={0.5} 
            shadow-camera-far={50} 
            shadow-camera-left={-10} 
            shadow-camera-right={10} 
            shadow-camera-top={10} 
            shadow-camera-bottom={-10} 
          />
          <Suspense fallback={null}>
            <Milo 
              position={[-8, -5, 1]} 
              rotation={[0, 0.8, 0]} 
              scale={[5, 5, 5]} 
              castShadow 
              receiveShadow
              animation={animations[6]} 
              onClickPart={handlePartClick} 
              onUpdate={(self) => {
                self.scale.set(5, 5, 5);
              }}
            />
            <mesh 
              position={[0, -3.5, 0]} 
              rotation={[-Math.PI / 2, 0, 0]} 
              receiveShadow
            >
              <planeGeometry args={[50, 50]} />
              <shadowMaterial opacity={0.5} />
            </mesh>
          </Suspense>

        </Canvas>
      </div>
    </>
  );
};

export default Blog;
