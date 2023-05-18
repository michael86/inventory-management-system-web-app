import { useRef, useLayoutEffect } from "react";

import { gsap } from "gsap";

import Typewriter from "typewriter-effect";
const Landing = () => {
  const scopeRef = useRef();

  useLayoutEffect(() => {
    if (!scopeRef.current) return;

    const mm = gsap.matchMedia(scopeRef);

    mm.add(
      {
        isMobile: `(max-width: 992px)`,
        isDesktop: `(min-width: 993px)`,
        reduceMotion: "(prefers-reduced-motion: reduce)",
      },
      (context) => {
        const children = scopeRef.current.children;
        const { isMobile, isDesktop, reduceMotion } = context.conditions;
        if (reduceMotion) return;

        const header = children[0].children[0];
        const tag = children[0].children[1];
        const typewriter = children[0].children[2];
        const image = children[1];

        gsap
          .timeline()
          .from(header, {
            autoAlpha: 0,
            duration: 0.5,
            y: isMobile ? 20 : 0,
            scale: isDesktop ? 0 : 1,
          })
          .from(tag, {
            autoAlpha: 0,
            duration: 1,
            y: isMobile ? 20 : 0,
            scale: isDesktop ? 0 : 1,
          })
          .from(typewriter, {
            autoAlpha: 0,
            duration: 1,
            autoAlpha: 0,
          })
          .from(image, {
            autoAlpha: 0,
            duration: 0.5,
            scale: 0,
          });
      }
    );

    return () => mm.revert();
  }, []);

  return (
    <section
      className="landing d-flex align-items-center justify-content-center flex-column flex-md-row text-center"
      id="landing"
      ref={scopeRef}
    >
      <div className="d-md-flex justify-content-center flex-column">
        <h1>All you inventory needs in one place</h1>
        <p>Cims provides everything you need to manage your stock in a streamline fashion</p>
        <Typewriter
          options={{
            strings: [
              "Set custom stock alerts",
              "Generate pdf invoices",
              "Historical data since the dawn of time",
              "Register multiple users with different roles",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
      <img src="/images/cims-logo.png" alt="" className="landing-image mt-2 mt-md-0" />
    </section>
  );
};

export default Landing;
