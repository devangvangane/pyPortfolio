import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function Cursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const x = useSpring(mouseX, {
    stiffness: 500,
    damping: 30,
  });

  const y = useSpring(mouseY, {
    stiffness: 500,
    damping: 30,
  });

  const [hover, setHover] = useState(false);

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX - (hover ? 45 : 20));
      mouseY.set(e.clientY - (hover ? 45 : 20));
    };

    const over = (e) => {
      const target = e.target;

      if (
        target.closest(
          "a, button, input, textarea, img, h1, h2, h3, h4, h5, h6, p"
        )
      ) {
        setHover(true);
      } else {
        setHover(false);
      }
    };

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", over);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", over);
    };
  }, []);

 return (
  <motion.div
        style={{ x, y }}
        animate={{
        width: hover ? 90 : 40,
        height: hover ? 90 : 40,
        }}
        transition={{
        type: "spring",
        stiffness: 400,
        damping: 25,
        }}
        className="pointer-events-none fixed left-0 top-0 z-9999"
    >
        {/* Blurred glowing border */}
        <div className="absolute inset-0 rounded-full border border-white/30 blur-sm" />

        {/* Glass body */}
        <div className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-md" />
    </motion.div>
    );
}