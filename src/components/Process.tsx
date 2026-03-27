import { motion } from 'motion/react';
import { Search, PenTool, Hammer, Link, TrendingUp } from 'lucide-react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Box, OrbitControls } from '@react-three/drei';
import { useState, useRef, Suspense } from 'react';

const steps = [
  {
    icon: <Search className="w-6 h-6" />,
    title: "Audit",
    description: "Audit current workflows and bottlenecks."
  },
  {
    icon: <PenTool className="w-6 h-6" />,
    title: "Architect",
    description: "Architect a custom operating system."
  },
  {
    icon: <Hammer className="w-6 h-6" />,
    title: "Build",
    description: "Build and deploy solutions."
  },
  {
    icon: <Link className="w-6 h-6" />,
    title: "Integrate",
    description: "Integrate across tools and teams."
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Scale",
    description: "Continuously optimize and scale."
  }
];

function DarkModeProcessEffect(props: any) {
  const ref = useRef<any>(null);
  const [positions] = useState(() => {
    const pts = new Float32Array(3000 * 3);
    for (let i = 0; i < 3000; i++) {
      const u = Math.random() * Math.PI * 2;
      const v = Math.random() * Math.PI * 2;
      const R = 1.5;
      const r = 0.3 + Math.random() * 0.2;
      const x = (R + r * Math.cos(v)) * Math.cos(u);
      const y = (R + r * Math.cos(v)) * Math.sin(u);
      const z = r * Math.sin(v);
      pts[i * 3] = x;
      pts[i * 3 + 1] = y;
      pts[i * 3 + 2] = z;
    }
    return pts;
  });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta / 10;
      ref.current.rotation.y += delta / 15;
    }
  });

  return (
    <group rotation={[Math.PI / 4, 0, 0]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false} {...props}>
        <PointMaterial transparent color="#00ffcc" size={0.005} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  );
}

function LightModeProcessEffect(props: any) {
  const ref = useRef<any>(null);
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.1;
      ref.current.rotation.y += delta * 0.15;
    }
  });
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Box ref={ref} args={[2, 2, 2, 4, 4, 4]} {...props}>
        <meshBasicMaterial color="#00b38f" wireframe transparent opacity={0.6} />
      </Box>
    </group>
  );
}

export function Process({ isDark }: { isDark?: boolean }) {
  return (
    <section id="process" className="py-16 md:py-24 bg-background relative transition-colors duration-300 overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 opacity-30">
        <Canvas camera={{ position: [0, 0, 2.5] }}>
          <Suspense fallback={null}>
            {isDark !== false ? <DarkModeProcessEffect /> : <LightModeProcessEffect />}
          </Suspense>
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-sm font-mono text-primary mb-4 tracking-widest uppercase">Methodology</h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4 md:mb-6">
            The Nornx <span className="text-gradient">Process.</span>
          </h3>
          <p className="text-base md:text-lg text-muted max-w-2xl mx-auto">
            A systematic approach to transforming how your business operates.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-[40px] left-0 w-full h-px bg-foreground/10" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative bg-background p-6 border border-foreground/10 rounded-sm hover:border-primary/50 transition-all hover:-translate-y-2 group flex flex-col items-center text-center lg:items-start lg:text-left"
              >
                <div className="w-12 h-12 bg-foreground/5 rounded-full flex items-center justify-center mb-4 md:mb-6 border border-foreground/10 group-hover:bg-primary group-hover:text-background group-hover:border-primary transition-all relative z-10">
                  {step.icon}
                </div>
                <h4 className="text-lg md:text-xl font-bold mb-2 md:mb-3 tracking-tight">{step.title}</h4>
                <p className="text-muted text-sm leading-relaxed">
                  {step.description}
                </p>
                
                {/* Number indicator */}
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-background border border-foreground/10 rounded-full flex items-center justify-center font-mono text-xs text-muted group-hover:text-primary group-hover:border-primary/50 transition-colors">
                  0{index + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
