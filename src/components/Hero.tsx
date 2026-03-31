import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, OrbitControls, Icosahedron } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import { useState, useRef, Suspense } from 'react';
import { motion } from 'motion/react';

function ParticleNetwork(props: any) {
  const ref = useRef<any>(null);
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }));

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#00ffcc"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

function TechIcosahedron(props: any) {
  const ref = useRef<any>(null);
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.1;
      ref.current.rotation.y += delta * 0.15;
    }
  });
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Icosahedron ref={ref} args={[1.5, 2]} {...props}>
        <meshBasicMaterial color="#00b38f" wireframe transparent opacity={0.8} />
      </Icosahedron>
    </group>
  );
}

export function Hero({ isDark }: { isDark?: boolean }) {
  return (
    <section className="relative min-h-screen pt-28 pb-12 md:pt-32 md:pb-16 w-full flex items-center justify-center overflow-hidden bg-background transition-colors duration-300">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Suspense fallback={null}>
            {isDark !== false ? <ParticleNetwork /> : <TechIcosahedron />}
          </Suspense>
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center flex flex-col items-center mt-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-mono mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          SYSTEMS ENGINEERING FOR MODERN BUSINESS
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.1] mb-6"
        >
          We Build <br className="hidden md:block" />
          <span className="text-gradient-primary">Operating Systems</span> <br />
          for Modern Businesses
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-lg md:text-xl text-muted max-w-2xl mb-10"
        >
          Nornx Technologies designs AI-powered systems, automation workflows, and scalable tech infrastructure that transform how your business operates.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a href="mailto:support@nornx.com" className="px-5 py-3 md:px-6 md:py-3.5 bg-primary text-background font-bold rounded-sm hover:bg-primary-dark transition-colors font-mono tracking-tight text-center text-sm">
            BOOK A STRATEGY CALL
          </a>
          <a href="mailto:support@nornx.com?subject=Build My Business OS" className="px-5 py-3 md:px-6 md:py-3.5 bg-foreground/5 border border-foreground/10 text-foreground font-bold rounded-sm hover:bg-foreground/10 transition-colors font-mono tracking-tight text-center text-sm">
            BUILD YOUR SYSTEM
          </a>
        </motion.div>
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-grid-pattern opacity-20" />
      <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-t from-background via-transparent to-transparent" />
    </section>
  );
}
