import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { heroScroll } from "@/lib/hero-scroll";

function layoutField(
  inst: THREE.InstancedMesh,
  dummy: THREE.Object3D,
  color: THREE.Color,
  base: THREE.Color,
  peak: THREE.Color,
  count: number,
  t: number,
  px: number,
  py: number,
  scroll: number,
) {
  let i = 0;
  for (let x = 0; x < count; x++) {
    for (let z = 0; z < count; z++) {
      const u = x / (count - 1) - 0.5;
      const v = z / (count - 1) - 0.5;
      const dist = Math.hypot(u - px * 0.28, v + py * 0.28);
      const wave =
        0.55 +
        Math.sin(u * 9 + t * 0.55) * 0.22 +
        Math.cos(v * 8 + t * 0.4) * 0.18 +
        Math.exp(-dist * 5.5) * 0.85 +
        scroll * 0.35;
      const h = Math.max(0.12, wave);
      dummy.position.set(u * 9.4, h / 2, v * 9.4);
      dummy.scale.set(0.055, h, 0.055);
      dummy.updateMatrix();
      inst.setMatrixAt(i, dummy.matrix);
      color.copy(base).lerp(peak, Math.min(1, (h - 0.2) / 1.4));
      inst.setColorAt(i, color);
      i += 1;
    }
  }
  inst.instanceMatrix.needsUpdate = true;
  if (inst.instanceColor) inst.instanceColor.needsUpdate = true;
}

function RodField({ count, animated }: { count: number; animated: boolean }) {
  const mesh = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const color = useMemo(() => new THREE.Color(), []);
  const base = useMemo(() => new THREE.Color("#6b1426"), []);
  const peak = useMemo(() => new THREE.Color("#ff7575"), []);

  useEffect(() => {
    const inst = mesh.current;
    if (!inst) return;
    layoutField(inst, dummy, color, base, peak, count, 0.6, 0, 0, 0);
  }, [base, color, count, dummy, peak]);

  useFrame((state) => {
    const inst = mesh.current;
    if (!inst || !animated) return;
    layoutField(
      inst,
      dummy,
      color,
      base,
      peak,
      count,
      state.clock.elapsedTime,
      state.pointer.x,
      state.pointer.y,
      heroScroll.current,
    );
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count * count]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial metalness={0.78} roughness={0.22} />
    </instancedMesh>
  );
}

function ParticleDust({ count = 48 }: { count?: number }) {
  const points = useRef<THREE.Points>(null);
  const [positions] = useState(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 11;
      pos[i * 3 + 1] = Math.random() * 3.5 + 0.1;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 11;
    }
    return pos;
  });

  useFrame((state) => {
    if (!points.current) return;
    points.current.rotation.y = state.clock.elapsedTime * 0.05;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.055}
        color="#ff8a8a"
        transparent
        opacity={0.6}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function Scene({ count, animated }: { count: number; animated: boolean }) {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    if (!animated) {
      group.current.rotation.y = 0.35;
      group.current.rotation.x = 0.2;
      return;
    }
    const t = state.clock.elapsedTime;
    const s = heroScroll.current;
    group.current.rotation.y = t * 0.08 + s * 0.55;
    group.current.rotation.x = 0.18 + Math.sin(t * 0.12) * 0.04 + s * 0.2;
    group.current.position.y = -0.35 - s * 0.8;
    state.camera.position.z = 8.2 - s * 1.6;
    state.camera.position.y = 3.4 + s * 0.4;
    state.camera.lookAt(0, 0.4, 0);
  });

  return (
    <group ref={group}>
      <RodField count={count} animated={animated} />
      <ParticleDust count={count > 20 ? 56 : 28} />
      {/* Primary inner orbital ring */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 0]}>
        <ringGeometry args={[3.15, 3.2, 128]} />
        <meshBasicMaterial color="#ff6b6b" transparent opacity={0.42} />
      </mesh>
      {/* Subtle outer harmonic ring */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.005, 0]}>
        <ringGeometry args={[4.4, 4.43, 128]} />
        <meshBasicMaterial color="#ff6b6b" transparent opacity={0.2} />
      </mesh>
    </group>
  );
}

export function HeroField() {
  const [inView, setInView] = useState(true);
  const wrap = useRef<HTMLDivElement>(null);
  const count = typeof window !== "undefined" && window.innerWidth < 640 ? 16 : 26;
  const animated =
    typeof window === "undefined" ||
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      threshold: 0.05,
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={wrap} className="absolute inset-0">
      <Canvas
        camera={{ position: [0, 3.4, 8.2], fov: 38, near: 0.1, far: 40 }}
        dpr={[1, 1.6]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        frameloop={inView ? "always" : "never"}
        style={{ background: "transparent" }}
      >
        <color attach="background" args={["#0c0d0c"]} />
        <fog attach="fog" args={["#0c0d0c", 7, 16]} />
        <ambientLight intensity={0.25} />
        <directionalLight position={[5, 9, 3]} intensity={1.1} color="#edeae3" />
        <directionalLight position={[-6, 2, -3]} intensity={0.65} color="#ff7b7b" />
        <spotLight position={[0, 10, 2]} intensity={0.65} angle={0.5} penumbra={0.8} color="#ff5252" />
        <Scene count={count} animated={animated} />
      </Canvas>
    </div>
  );
}
