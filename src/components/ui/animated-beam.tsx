"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface AnimatedBeamProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
  fromRef: React.RefObject<HTMLDivElement | null>;
  toRef: React.RefObject<HTMLDivElement | null>;
  curvature?: number;
  startYOffset?: number;
  endYOffset?: number;
  reverse?: boolean;
  color?: string;
  duration?: number;
  delay?: number;
}

export function AnimatedBeam({
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  startYOffset = 0,
  endYOffset = 0,
  reverse = false,
  color = "rgba(148, 163, 184, 0.1)",
  duration = 1.5,
  delay = 0,
}: AnimatedBeamProps) {
  const [path, setPath] = useState<string>("");
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [positions, setPositions] = useState<{
    x1: number;
    y1: number;
    x2: number;
    y2: number;
  }>({
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 0,
  });

  useEffect(() => {
    if (!containerRef.current || !fromRef.current || !toRef.current) return;

    const updatePath = () => {
      const containerRect = containerRef.current!.getBoundingClientRect();
      const fromRect = fromRef.current!.getBoundingClientRect();
      const toRect = toRef.current!.getBoundingClientRect();

      const fromCenterX = fromRect.left + fromRect.width / 2 - containerRect.left;
      const fromCenterY = fromRect.top + fromRect.height / 2 - containerRect.top + startYOffset;

      const toCenterX = toRect.left + toRect.width / 2 - containerRect.left;
      const toCenterY = toRect.top + toRect.height / 2 - containerRect.top + endYOffset;

      const x1 = reverse ? toCenterX : fromCenterX;
      const y1 = reverse ? toCenterY : fromCenterY;
      const x2 = reverse ? fromCenterX : toCenterX;
      const y2 = reverse ? fromCenterY : toCenterY;

      setPositions({ x1, y1, x2, y2 });

      const controlX = (x1 + x2) / 2 + curvature;
      const controlY = (y1 + y2) / 2;

      setPath(`M${x1},${y1} Q${controlX},${controlY} ${x2},${y2}`);
      setWidth(containerRect.width);
      setHeight(containerRect.height);
    };

    updatePath();
    window.addEventListener("resize", updatePath);
    return () => window.removeEventListener("resize", updatePath);
  }, [
    containerRef,
    fromRef,
    toRef,
    curvature,
    startYOffset,
    endYOffset,
    reverse,
  ]);

  return (
    <svg
      width={width}
      height={height}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      <motion.path
        d={path}
        fill="transparent"
        stroke={color}
        strokeWidth={2}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          pathLength: { duration, delay, ease: "easeInOut" },
          opacity: { duration: 0.2, delay },
        }}
      />
      <motion.circle
        cx={positions.x2}
        cy={positions.y2}
        r={4}
        fill={color}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.4,
          delay: delay + duration * 0.8,
          ease: "easeOut",
        }}
      />
    </svg>
  );
}
