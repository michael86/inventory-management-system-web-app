import { gsap } from "gsap";
import { useRef } from "react";
import { useLayoutEffect } from "react";
import { useViewport } from "../hooks/useViewport";

const LandingWarehouse = () => {
  const scopeRef = useRef();
  const { width } = useViewport();

  useLayoutEffect(() => {
    if (!scopeRef.current) return;

    const ctx = gsap.context(() => {
      const children = scopeRef.current.children;
      const rects = [...children].slice(0, 3);
      const paths = [...children].slice(3);

      gsap
        .timeline()
        .from(paths[2], { autoAlpha: 0, duration: 0.5, y: 20 })
        .from(paths[1], { autoAlpha: 0, duration: 0.5 })
        .from(paths[0], { autoAlpha: 0, x: 20, duration: 0.5 })
        .from(rects, { autoAlpha: 0, duration: 0.5, stagger: 0.5 });
    }, [scopeRef]);

    return () => ctx.revert();
  }, []);

  return (
    <svg id="Capa_1" viewBox="0 0 307.503 327.503" className="landing-image mt-3 mt-md-5 pt-md-3">
      <g id="XMLID_35_">
        <g ref={scopeRef}>
          <rect x="93.406" y="221.893" style={{ fill: "#A38671" }} width="45.46" height="55.59" />

          <rect x="158.636" y="221.893" style={{ fill: "#E67E22" }} width="45.46" height="55.59" />
          <rect x="126.016" y="156.663" style={{ fill: "#FFA800" }} width="45.47" height="45.46" />
          <path
            style={{ fill: "#F0DEB4" }}
            d="M236.716,124.043v153.44h-12.85v-65.48c0-5.45-4.43-9.88-9.89-9.88h-22.73v-55.35
			c0-5.45-4.42-9.88-9.88-9.88h-65.23c-5.46,0-9.89,4.43-9.89,9.88v55.35h-22.73c-5.46,0-9.88,4.43-9.88,9.88v65.48h-12.85v-153.44
			H236.716z"
          />
          <path
            style={{ fill: "#8E725E" }}
            d="M269.326,81.473v196.01h-12.85v-163.32c0-5.46-4.42-9.89-9.88-9.89H50.906
			c-5.46,0-9.89,4.43-9.89,9.89v163.32h-12.85V81.473l120.58-60.29L269.326,81.473z"
          />
          <path
            d="M289.096,75.372v212c0,5.45-4.43,9.88-9.88,9.88H18.286c-5.46,0-9.88-4.43-9.88-9.88v-212c0-3.75,2.11-7.17,5.46-8.84
			l130.46-65.24c2.79-1.39,6.06-1.39,8.84,0l130.46,65.24C286.976,68.202,289.096,71.622,289.096,75.372z M269.326,277.483V81.473
			l-120.58-60.29l-120.58,60.29v196.01h12.85v-163.32c0-5.46,4.43-9.89,9.89-9.89h195.69c5.46,0,9.88,4.43,9.88,9.89v163.32H269.326
			z M236.716,277.483v-153.44H60.786v153.44h12.85v-65.48c0-5.45,4.42-9.88,9.88-9.88h22.73v-55.35c0-5.45,4.43-9.88,9.89-9.88
			h65.23c5.46,0,9.88,4.43,9.88,9.88v55.35h22.73c5.46,0,9.89,4.43,9.89,9.88v65.48H236.716z M204.096,277.483v-55.59h-45.46v55.59
			H204.096z M171.486,202.122v-45.46h-45.47v45.46H171.486z M138.866,277.483v-55.59h-45.46v55.59H138.866z"
          />
        </g>
        <g></g>
      </g>
    </svg>
  );
};

export default LandingWarehouse;
