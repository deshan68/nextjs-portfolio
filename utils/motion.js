export const ulVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};
export const liVariants = {
  hidden: {
    opacity: 0,
    y: "-100%",
  },
  show: {
    opacity: 1,
    y: "0%",
    transition: {
      duration: 0.5,
    },
  },
};
export const toggleVariant = {
  hidden: {
    y: "-100%",
  },
  show: {
    y: "0%",
    transition: {
      duration: 1,
      type: "spring",
      bounce: "0.5",
      ease: "easeOut",
    },
  },
};

// header variant
const bounceAndDamping = [50, 7];

export const topBoxVariant = {
  hidden: {
    x: "-100%",
    opacity: 0,
  },
  show: {
    x: "0%",
    opacity: 1,
    transition: {
      type: "spring",
      bounce: bounceAndDamping[0],
      damping: bounceAndDamping[1],
    },
  },
};

export const bottomBoxVariant = {
  hidden: {
    x: "100%",
    opacity: 0,
  },
  show: {
    x: "0%",
    opacity: 1,
    transition: {
      type: "spring",
      bounce: bounceAndDamping[0],
      damping: bounceAndDamping[1],
    },
  },
};

export const centerCircleVariant = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: bounceAndDamping[0],
      damping: bounceAndDamping[1],
    },
  },
};

export const floatingIconVariant = {
  hidden: {
    y: "-100%",
    opacity: 0,
    scale: 0,
  },
  show: {
    y: "0%",
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      bounce: bounceAndDamping[0],
      damping: bounceAndDamping[1],
    },
  },
};

//social icons
export const socialIconParentVariant = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 1,
      staggerChildren: 0.1,
    },
  },
};
export const socialIconVariant = {
  hidden: {
    opacity: 0,
    y: "-100%",
  },
  show: {
    opacity: 1,
    y: "0%",
    transition: {
      duration: 0.5,
    },
  },
};
