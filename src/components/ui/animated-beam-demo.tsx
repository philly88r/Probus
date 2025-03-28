"use client";

import React, { forwardRef } from "react";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/ui/animated-beam";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className,
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function AnimatedBeamDemo() {
  const containerRef = React.createRef<HTMLDivElement>();
  const div1Ref = React.createRef<HTMLDivElement>();
  const div2Ref = React.createRef<HTMLDivElement>();
  const div3Ref = React.createRef<HTMLDivElement>();
  const div4Ref = React.createRef<HTMLDivElement>();
  const div5Ref = React.createRef<HTMLDivElement>();
  const div6Ref = React.createRef<HTMLDivElement>();
  const div7Ref = React.createRef<HTMLDivElement>();

  return (
    <div
      className="relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-10 md:shadow-xl"
      ref={containerRef}
    >
      <div className="flex size-full flex-col max-w-lg max-h-[200px] items-stretch justify-between gap-10">
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div1Ref}>
            <Icons.liveIcon />
          </Circle>
          <Circle ref={div5Ref}>
            <Icons.registerIcon />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div2Ref}>
            <Icons.revealIcon />
          </Circle>
          <Circle ref={div4Ref} className="size-16">
            <Icons.probusIcon />
          </Circle>
          <Circle ref={div6Ref}>
            <Icons.educateIcon />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div3Ref}>
            <Icons.gpsIcon />
          </Circle>
          <Circle ref={div7Ref}>
            <Icons.calendarIcon />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div4Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div4Ref}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
        reverse
      />
    </div>
  );
}

const Icons = {
  liveIcon: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 10L19.553 7.724C19.8356 7.58319 20.1543 7.52616 20.4708 7.56351C20.7872 7.60086 21.0864 7.73077 21.3295 7.93556C21.5726 8.14035 21.7499 8.41051 21.8389 8.71345C21.9278 9.01639 21.9244 9.33861 21.829 9.639L19.553 16.276C19.4538 16.5897 19.2609 16.8657 19.0001 17.0667C18.7393 17.2677 18.4229 17.3839 18.093 17.4C17.7632 17.4161 17.4362 17.3311 17.1559 17.1558C16.8756 16.9805 16.6558 16.7232 16.526 16.42L15 12L5 18"
        stroke="#4F46E5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 18C3.34315 18 2 16.6569 2 15C2 13.3431 3.34315 12 5 12C6.65685 12 8 13.3431 8 15C8 16.6569 6.65685 18 5 18Z"
        stroke="#4F46E5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 9C14.2091 9 16 7.20914 16 5C16 2.79086 14.2091 1 12 1C9.79086 1 8 2.79086 8 5C8 7.20914 9.79086 9 12 9Z"
        stroke="#4F46E5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  probusIcon: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
        fill="#4F46E5"
      />
      <path
        d="M12 17L17 12L12 7L7 12L12 17Z"
        fill="#4F46E5"
      />
    </svg>
  ),
  registerIcon: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
        stroke="#0EA5E9"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  revealIcon: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.5 8.5L19 10L7 22L3 18L5 16M14 5L16.5 7.5M18.5 9.5L21 12M8.5 11.5L11 14M10 7L12.5 9.5"
        stroke="#10B981"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.5 8.5C5.5 6.5 9 3 12 2C14 2.5 15.5 3 17 5"
        stroke="#10B981"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  gpsIcon: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z"
        stroke="#F59E0B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
        stroke="#F59E0B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  educateIcon: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 14L3 9L12 4L21 9L12 14Z"
        stroke="#8B5CF6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 9V14"
        stroke="#8B5CF6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 11.5V16.5L12 19L17 16.5V11.5"
        stroke="#8B5CF6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  calendarIcon: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 2V6M16 2V6M3 10H21M5 4H19C20.1046 4 21 4.89543 21 6V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V6C3 4.89543 3.89543 4 5 4Z"
        stroke="#EC4899"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 14H8.01M12 14H12.01M16 14H16.01M8 18H8.01M12 18H12.01M16 18H16.01"
        stroke="#EC4899"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};
