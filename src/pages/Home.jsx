import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import {  Loader } from "../components";

import { Island } from "../models/Island";

const Home = () => {

  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;
     if (window.innerWidth < 768) {
      screenScale = [0.9,  0.9, 0.9];
      screenPosition = [0,-6.5, -43.4]
     }
     else {
      screenScale = [1, 1, 1];
      screenPosition = [0, -6.5, -43.4]
     }
  }

  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 items-center justify-center flex">
        POPUP
      </div>
      <Canvas
        className= "w-full h-screen bg-transparent"
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
         < directionalLight />
         <ambientLight/>
         <pointLight />
         <spotLight />
         <hemisphereLight />

        </Suspense>
      </Canvas>
    </section>
  )
}

export default Home