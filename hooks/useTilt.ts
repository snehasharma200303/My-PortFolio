"use client";

import { useRef } from "react";
import { useMotionValue, useSpring, useTransform } from "framer-motion";

/**
 * useTilt — 3D perspective tilt that follows the mouse cursor.
 * Matches the mouse-tracking rotateX/rotateY effect (up to `strength` degrees).
 */
export function useTilt(strength = 10) {
  const ref = useRef<HTMLDivElement>(null);

  const rawX = useMotionValue(0);  // normalised -0.5 → 0.5
  const rawY = useMotionValue(0);

  const springX = useSpring(rawX, { stiffness: 150, damping: 20, restDelta: 0.001 });
  const springY = useSpring(rawY, { stiffness: 150, damping: 20, restDelta: 0.001 });

  // Map cursor position → rotation angles
  const rotateY = useTransform(springX, [-0.5, 0.5], [-strength, strength]);
  const rotateX = useTransform(springY, [-0.5, 0.5], [strength, -strength]);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    rawX.set((e.clientX - left) / width - 0.5);
    rawY.set((e.clientY - top)  / height - 0.5);
  };

  const onMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return { ref, rotateX, rotateY, onMouseMove, onMouseLeave };
}
