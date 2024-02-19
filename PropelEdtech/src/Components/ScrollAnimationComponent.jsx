import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import astro2 from "../assets/images/astro2.png";

/*
 * Read the blog post here:
 * https://letsbuildui.dev/series/scroll-animations-with-framer-motion/scroll-linked-content-reveal-animation
 */
export const ScrollAnimationComponent = ({name,direction2}) => {
    
    console.log({direction2})
    console.log({name})
    
    
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const bottomShadowValue = useTransform(
    scrollYProgress,
    [0, 1],
    ["-100%", "0%"]
  );
  const imageValue = useTransform(scrollYProgress, [0, 1], [direction2, "0%"]);
  const imageValue2 = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);
  const topShadowValue = useTransform(
    scrollYProgress,
    [0, 1],
    ["-25%", "100%"]
  );

  return (
    <>
    <section className="scroll-container"  ref={containerRef}>
      <motion.div className="copy" style={{ translateY: imageValue2 }}>
        <h2>{name}</h2>
        <p>sadg setryd etrys r tyu</p>
      </motion.div>
      <div className="img-container">
        <motion.div className="img-inner" style={{ translateX: imageValue }}>
          <motion.div
            className="bottom-shadow"
            style={{ translateX: bottomShadowValue }}
          />
          <img src={astro2} alt="a green plant" />
          <motion.div
            className="top-shadow"
            style={{ translateX: topShadowValue }}
          />
        </motion.div>
      </div>
    </section>
    
    </>
  );
};

export default ScrollAnimationComponent;
