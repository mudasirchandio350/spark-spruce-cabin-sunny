import { i as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/gsap+gsap__react+react.mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as heroScroll } from "./routes-4t8EXFkM.mjs";
import { a as Object3D, i as Color, n as useFrame, t as Canvas } from "../_libs/@react-three/fiber+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/hero-field-BHiJqWhi.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function layoutField(inst, dummy, color, base, peak, count, t, px, py, scroll) {
	let i = 0;
	for (let x = 0; x < count; x++) for (let z = 0; z < count; z++) {
		const u = x / (count - 1) - .5;
		const v = z / (count - 1) - .5;
		const dist = Math.hypot(u - px * .28, v + py * .28);
		const wave = .55 + Math.sin(u * 9 + t * .55) * .22 + Math.cos(v * 8 + t * .4) * .18 + Math.exp(-dist * 5.5) * .85 + scroll * .35;
		const h = Math.max(.12, wave);
		dummy.position.set(u * 9.4, h / 2, v * 9.4);
		dummy.scale.set(.055, h, .055);
		dummy.updateMatrix();
		inst.setMatrixAt(i, dummy.matrix);
		color.copy(base).lerp(peak, Math.min(1, (h - .2) / 1.4));
		inst.setColorAt(i, color);
		i += 1;
	}
	inst.instanceMatrix.needsUpdate = true;
	if (inst.instanceColor) inst.instanceColor.needsUpdate = true;
}
function RodField({ count, animated }) {
	const mesh = (0, import_react.useRef)(null);
	const dummy = (0, import_react.useMemo)(() => new Object3D(), []);
	const color = (0, import_react.useMemo)(() => new Color(), []);
	const base = (0, import_react.useMemo)(() => new Color("#6b1426"), []);
	const peak = (0, import_react.useMemo)(() => new Color("#ff7575"), []);
	(0, import_react.useEffect)(() => {
		const inst = mesh.current;
		if (!inst) return;
		layoutField(inst, dummy, color, base, peak, count, .6, 0, 0, 0);
	}, [
		base,
		color,
		count,
		dummy,
		peak
	]);
	useFrame((state) => {
		const inst = mesh.current;
		if (!inst || !animated) return;
		layoutField(inst, dummy, color, base, peak, count, state.clock.elapsedTime, state.pointer.x, state.pointer.y, heroScroll.current);
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("instancedMesh", {
		ref: mesh,
		args: [
			void 0,
			void 0,
			count * count
		],
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
			1,
			1,
			1
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
			metalness: .78,
			roughness: .22
		})]
	});
}
function ParticleDust({ count = 48 }) {
	const points = (0, import_react.useRef)(null);
	const [positions] = (0, import_react.useState)(() => {
		const pos = new Float32Array(count * 3);
		for (let i = 0; i < count; i++) {
			pos[i * 3] = (Math.random() - .5) * 11;
			pos[i * 3 + 1] = Math.random() * 3.5 + .1;
			pos[i * 3 + 2] = (Math.random() - .5) * 11;
		}
		return pos;
	});
	useFrame((state) => {
		if (!points.current) return;
		points.current.rotation.y = state.clock.elapsedTime * .05;
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("points", {
		ref: points,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("bufferGeometry", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("bufferAttribute", {
			attach: "attributes-position",
			args: [positions, 3]
		}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pointsMaterial", {
			size: .055,
			color: "#ff8a8a",
			transparent: true,
			opacity: .6,
			blending: 2
		})]
	});
}
function Scene({ count, animated }) {
	const group = (0, import_react.useRef)(null);
	useFrame((state) => {
		if (!group.current) return;
		if (!animated) {
			group.current.rotation.y = .35;
			group.current.rotation.x = .2;
			return;
		}
		const t = state.clock.elapsedTime;
		const s = heroScroll.current;
		group.current.rotation.y = t * .08 + s * .55;
		group.current.rotation.x = .18 + Math.sin(t * .12) * .04 + s * .2;
		group.current.position.y = -.35 - s * .8;
		state.camera.position.z = 8.2 - s * 1.6;
		state.camera.position.y = 3.4 + s * .4;
		state.camera.lookAt(0, .4, 0);
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		ref: group,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RodField, {
				count,
				animated
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ParticleDust, { count: count > 20 ? 56 : 28 }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				rotation: [
					-Math.PI / 2,
					0,
					0
				],
				position: [
					0,
					.01,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ringGeometry", { args: [
					3.15,
					3.2,
					128
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", {
					color: "#ff6b6b",
					transparent: true,
					opacity: .42
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				rotation: [
					-Math.PI / 2,
					0,
					0
				],
				position: [
					0,
					.005,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ringGeometry", { args: [
					4.4,
					4.43,
					128
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", {
					color: "#ff6b6b",
					transparent: true,
					opacity: .2
				})]
			})
		]
	});
}
function HeroField() {
	const [inView, setInView] = (0, import_react.useState)(true);
	const wrap = (0, import_react.useRef)(null);
	const count = typeof window !== "undefined" && window.innerWidth < 640 ? 16 : 26;
	const animated = typeof window === "undefined" || !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
	(0, import_react.useEffect)(() => {
		const el = wrap.current;
		if (!el) return;
		const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: .05 });
		io.observe(el);
		return () => io.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: wrap,
		className: "absolute inset-0",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Canvas, {
			camera: {
				position: [
					0,
					3.4,
					8.2
				],
				fov: 38,
				near: .1,
				far: 40
			},
			dpr: [1, 1.6],
			gl: {
				antialias: true,
				alpha: true,
				powerPreference: "high-performance"
			},
			frameloop: inView ? "always" : "never",
			style: { background: "transparent" },
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("color", {
					attach: "background",
					args: ["#0c0d0c"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("fog", {
					attach: "fog",
					args: [
						"#0c0d0c",
						7,
						16
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ambientLight", { intensity: .25 }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("directionalLight", {
					position: [
						5,
						9,
						3
					],
					intensity: 1.1,
					color: "#edeae3"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("directionalLight", {
					position: [
						-6,
						2,
						-3
					],
					intensity: .65,
					color: "#ff7b7b"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("spotLight", {
					position: [
						0,
						10,
						2
					],
					intensity: .65,
					angle: .5,
					penumbra: .8,
					color: "#ff5252"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scene, {
					count,
					animated
				})
			]
		})
	});
}
//#endregion
export { HeroField };
