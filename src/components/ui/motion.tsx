"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import {
  fadeIn,
  fadeInUp,
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  staggerContainer,
  staggerItem,
  viewportConfig,
} from "@/lib/animations";

type MotionDivProps = HTMLMotionProps<"div">;

// Fade In
export const FadeIn = ({ children, className, ...props }: MotionDivProps) => (
  <motion.div
    variants={fadeIn}
    initial="hidden"
    whileInView="visible"
    viewport={viewportConfig}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

// Fade In Up (headings, descriptions)
export const FadeInUp = ({ children, className, ...props }: MotionDivProps) => (
  <motion.div
    variants={fadeInUp}
    initial="hidden"
    whileInView="visible"
    viewport={viewportConfig}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

// Fade In Down (navbar, dropdowns)
export const FadeInDown = ({ children, className, ...props }: MotionDivProps) => (
  <motion.div
    variants={fadeInDown}
    initial="hidden"
    whileInView="visible"
    viewport={viewportConfig}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

// Fade In Left (cards odd, text blocks)
export const FadeInLeft = ({ children, className, ...props }: MotionDivProps) => (
  <motion.div
    variants={fadeInLeft}
    initial="hidden"
    whileInView="visible"
    viewport={viewportConfig}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

// Fade In Right (cards even, images)
export const FadeInRight = ({ children, className, ...props }: MotionDivProps) => (
  <motion.div
    variants={fadeInRight}
    initial="hidden"
    whileInView="visible"
    viewport={viewportConfig}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

// Scale In (buttons, badges)
export const ScaleIn = ({ children, className, ...props }: MotionDivProps) => (
  <motion.div
    variants={scaleIn}
    initial="hidden"
    whileInView="visible"
    viewport={viewportConfig}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

// Stagger Container (parent for staggered children)
export const StaggerContainer = ({ children, className, ...props }: MotionDivProps) => (
  <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="visible"
    viewport={viewportConfig}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

// Stagger Item (child item with delay)
export const StaggerItem = ({ children, className, ...props }: MotionDivProps) => (
  <motion.div variants={staggerItem} className={className} {...props}>
    {children}
  </motion.div>
);

// Re-export motion for custom usage
export { motion };
