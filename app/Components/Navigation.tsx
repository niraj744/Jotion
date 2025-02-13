"use client";

import React, { useRef } from "react";

const MINIMUM = 250;
const MAXIMUM = 400;

const Navigation = () => {
  const dragHandle = useRef<HTMLDivElement | null>(null);
  const navigation = useRef<HTMLDivElement | null>(null);

  const moveSidebar = (e: React.MouseEvent<HTMLDivElement>) => {
    if (
      !navigation ||
      !navigation.current ||
      !dragHandle ||
      !dragHandle.current
    )
      return;
    e.preventDefault();
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mousemove", handleMouseMove);
  };
  function handleMouseUp() {
    document.removeEventListener("mouseup", handleMouseUp);
    document.removeEventListener("mousemove", handleMouseMove);
  }
  function handleMouseMove(e: MouseEvent) {
    const x = e.clientX;
    if (x > MAXIMUM) {
      navigation.current!.style.width = `${MAXIMUM}px`;
    } else {
      if (x < MINIMUM) {
        navigation.current!.style.width = `${MINIMUM}px`;
      } else {
        navigation.current!.style.width = `${x}px`;
      }
    }
  }

  return (
    <>
      <aside
        className="bg-red-300 h-screen flex justify-between"
        ref={navigation}
        style={{
          width: `${MINIMUM}px`,
        }}
      >
        <ul>
          <li>hello</li>
          <li>hello</li>
          <li>hello</li>
          <li>hello</li>
          <li>hello</li>
          <li>hello</li>
          <li>hello</li>
          <li>hello</li>
        </ul>
        <div
          className="line w-2 h-full bg-purple-600 hover:cursor-w-resize"
          ref={dragHandle}
          onMouseDown={moveSidebar}
        />
      </aside>
    </>
  );
};

export default Navigation;
