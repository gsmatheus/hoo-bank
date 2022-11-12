import { animate } from "framer-motion";
import React, { useEffect, useRef } from "react";

interface CounterProps {
  from: number;
  to: number;
  textBefore?: string;
  textAfter?: string;
}

function Counter({ from, to, textBefore, textAfter }: CounterProps) {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const controls = animate(from, to, {
      duration: 2,
      onUpdate(value) {
        if (ref.current) {
          ref.current.textContent = textBefore + value.toFixed(0) + textAfter;
        }
      },
    });
    return () => controls.stop();
  }, [from, to]);

  return <p ref={ref} />;
}

export default Counter;
