"use client";
import { motion } from "framer-motion";
import { FC, PropsWithChildren, useState } from "react";
import classNames from "classnames";

const variantsTop = {
  hover: {
    y: -50,
  },
  initial: {
    y: 0,
  },
};
const variantsBottom = {
  hover: {
    y: 50,
  },
  initial: {
    y: 0,
  },
};
const AnimationButton: FC<PropsWithChildren<{ className?: string }>> = (
  props
) => {
  const { children, className } = props;
  const [isHovered, setIsHovered] = useState(false);
  function handleMouseEnter() {
    setIsHovered(true);
  }

  function handleMouseLeave() {
    setIsHovered(false);
  }

  return (
    <div
      className={classNames(
        className,
        "overflow-hidden relative flex items-center justify-center"
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        variants={variantsTop}
        animate={isHovered ? "hover" : "initial"}
        className="left-0 top-0 right-0 bottom-0 w-full h-full flex items-center justify-center  absolute"
      >
        {children}
      </motion.div>
      <motion.div
        variants={variantsBottom}
        animate={isHovered ? "initial" : "hover"}
        className="left-0 top-0 right-0 bottom-0 w-full h-full flex items-center justify-center  absolute"
      >
        {children}
      </motion.div>
      <div className="invisible w-full h-full flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};
export default AnimationButton;
