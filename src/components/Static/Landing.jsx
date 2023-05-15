import { useRef, useLayoutEffect } from "react";
import BookDemo from "./BookDemo";
import { gsap } from "gsap";
import LandingWarehouse from "../../svgs/LandingWarehouse";
import { useViewport } from "../../hooks/useViewport";

const Landing = () => {
  const { width } = useViewport();
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
        const paras = [...children[0].children].splice(1, 2);
        const form = [...children[0].children].splice(3, 1)[0];

        gsap
          .timeline()
          .from(header, {
            autoAlpha: 0,
            duration: 0.5,
            y: isMobile ? 20 : 0,
            scale: isDesktop ? 0 : 1,
          })
          .from(paras, {
            autoAlpha: 0,
            duration: 0.5,
            y: isMobile ? 20 : 0,
            stagger: 0.5,
            scale: isDesktop ? 0 : 1,
          })
          .from(form.children, {
            autoAlpha: 0,
            duration: 0.5,
            y: isMobile ? 20 : 0,
            width: isDesktop ? 0 : "100%",

            stagger: 0.5,
          });
      }
    );

    return () => mm.revert();
  }, []);

  return (
    <section className="landing" id="landing">
      <div className="container d-flex" ref={scopeRef}>
        <div>
          <h1>
            <span>Complete</span> Inventory Management <span>System</span>
          </h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi impedit corporis,
            consequatur, doloribus accusamus voluptates mollitia voluptatibus exercitationem nam
            expedita eaque cum et distinctio atque perferendis fuga enim. Ad, nulla!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi impedit corporis,
            consequatur, doloribus accusamus voluptates mollitia voluptatibus exercitationem nam
            expedita eaque cum et distinctio atque perferendis fuga enim. Ad, nulla!
          </p>
          <BookDemo />
        </div>
        {width > 992 && <LandingWarehouse />}
      </div>
    </section>
  );
};

export default Landing;
