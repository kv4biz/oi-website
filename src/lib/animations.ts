import { Variants } from "framer-motion";

// Base animation config
const duration = 1.0;
const ease = [0.25, 0.1, 0.25, 1] as const; // Smooth easing

// Fade In
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration, ease },
  },
};

// Fade In Up (for headings, descriptions)
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration, ease },
  },
};

// Fade In Down (for navbar, dropdowns)
export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration, ease },
  },
};

// Fade In Left (for cards odd, text blocks)
export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration, ease },
  },
};

// Fade In Right (for cards even, images)
export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration, ease },
  },
};

// Scale In (for buttons, badges)
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease },
  },
};

// Stagger Container (parent for staggered children)
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

// Stagger Item (child item with delay)
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease },
  },
};

// Viewport settings for scroll-triggered animations
export const viewportConfig = {
  once: true,
  margin: "-100px",
};

// Helper to create delayed variants
export const withDelay = (variants: Variants, delay: number): Variants => ({
  hidden: variants.hidden,
  visible: {
    ...variants.visible,
    transition: {
      ...(variants.visible as { transition?: object }).transition,
      delay,
    },
  },
});
