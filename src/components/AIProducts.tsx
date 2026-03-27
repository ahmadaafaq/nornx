import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, TorusKnot, Box } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import { useState, useRef, Suspense } from 'react';
import { motion } from 'motion/react';
import { Mic, Users, BookOpen, Megaphone, Globe, Target } from 'lucide-react';

const products = [
  { name: 'Vani', desc: 'AI Voice Agent for Inbound and Outbound Calling', icon: <Mic className="w-6 h-6" /> },
  { name: 'Niyukti', desc: 'AI Interview Platform', icon: <Users className="w-6 h-6" /> },
  { name: 'Tutorr.ai', desc: 'AI based Learning', icon: <BookOpen className="w-6 h-6" /> },
  { name: 'Astranyx.ai', desc: 'AI powered Marketing Agent', icon: <Megaphone className="w-6 h-6" /> },
  { name: 'ShakTranslate', desc: 'Real time Translation', icon: <Globe className="w-6 h-6" /> },
  { name: 'Nurturr.ai', desc: 'AI powered Lead Management', icon: <Target className="w-6 h-6" /> },
];

function Starfield(props: any) {
  const ref = useRef<any>(null);
  const [sphere] = useState(() => random.inSphere(new Float32Array(3000), { radius: 2 }));

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 20;
      ref.current.rotation.y -= delta / 30;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
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

function TechTorusKnot(props: any) {
  const ref = useRef<any>(null);
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.1;
      ref.current.rotation.y += delta * 0.15;
    }
  });
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <TorusKnot ref={ref} args={[1.2, 0.4, 64, 16]} {...props}>
        <meshBasicMaterial color="#00b38f" wireframe transparent opacity={0.6} />
      </TorusKnot>
    </group>
  );
}

export function AIProducts({ isDark }: { isDark?: boolean }) {
  return (
    <section id="products" className="py-16 md:py-24 bg-background relative overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 z-0 opacity-30">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Suspense fallback={null}>
            {isDark !== false ? <Starfield /> : <LightModeProcessEffect />}
          </Suspense>
        </Canvas>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-sm font-mono text-primary mb-4 tracking-widest uppercase">Our AI Products</h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6">
            Next-Generation <span className="text-gradient">AI Solutions.</span>
          </h3>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Purpose-built artificial intelligence platforms designed to automate, optimize, and scale your business operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 md:p-8 border border-foreground/10 bg-background/60 backdrop-blur-sm rounded-sm hover:bg-foreground/5 transition-all hover:-translate-y-1 group"
            >
              <div className="mb-4 md:mb-6 p-3 md:p-4 bg-foreground/5 inline-block rounded-sm border border-foreground/5 group-hover:border-primary/30 transition-colors text-primary">
                {product.icon}
              </div>
              <h4 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 tracking-tight">{product.name}</h4>
              <p className="text-sm md:text-base text-muted leading-relaxed">
                {product.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
