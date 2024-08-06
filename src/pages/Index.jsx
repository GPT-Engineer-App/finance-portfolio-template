import { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import Header from '../components/Header';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-900 text-white">
      <Canvas className="fixed inset-0 z-0">
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
        <Stars radius={300} depth={60} count={20000} factor={7} saturation={0} fade />
      </Canvas>
      <div className="relative z-10">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
      </div>
    </div>
  );
};

export default Index;
