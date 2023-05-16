import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const AccordionQuestion = ({ entry }) => {
  const [shown, setShown] = useState(false);
  const scopeRef = useRef();
  const tl = useRef();

  useLayoutEffect(() => {
    if (!scopeRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(scopeRef.current.children[0], {
        scrollTrigger: {
          trigger: scopeRef.current,
        },
        y: 100,
        autoAlpha: 0,
      });
    }, [scopeRef]);

    const question = scopeRef.current.children[0];
    const answer = scopeRef.current.children[1];
    const chevlon = scopeRef.current.children[0].children[1];

    tl.current = gsap
      .timeline({ paused: true })
      .to(question, { boxShadow: "0px 10px 18px -8px rgba(0, 0, 0, 1)" }, 0)
      .to(answer, { height: 100 }, 0)
      .to(chevlon, { rotate: 180, ease: "bounce" }, 0);

    return () => ctx.revert();
  }, []);

  const onClick = () => {
    setShown(!shown);
    if (!tl.current || !tl.current.play) return;

    !shown ? tl.current.play() : tl.current.reverse();
  };

  return (
    <div className="dropdown" ref={scopeRef}>
      <div className={`question ${shown ? "active" : ""}`} onClick={onClick}>
        <p>{entry.question}</p>
        <FontAwesomeIcon icon={faChevronUp} />
      </div>
      <div className={`answer ${shown ? "active" : ""}`}>
        <p>{entry.answer}</p>
      </div>
    </div>
  );
};

export default AccordionQuestion;
