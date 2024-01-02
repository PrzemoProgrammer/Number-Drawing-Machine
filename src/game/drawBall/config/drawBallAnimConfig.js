export default {
  // Initial scale value when the animation starts
  scaleOnStart: 0,

  // Initial X and Y coordinates when the animation starts
  startX: 200,
  startY: 200,

  // Configuration for the spinning ball animation
  ballSpin: {
    spinXSpeed: 8, // Spin speed along the X-axis
    spinYSpeed: 8, // Spin speed along the Y-axis
    moveXLimit: 50, // The x value limit, when exceeded, the number sprite is rolled back
    addedResetSpinPositionX: 100, // Added value for resetting spin position along the X-axis
    addedResetSpinPositionY: 100, // Added value for resetting spin position along the Y-axis
  },

  // Default delay before starting the animation
  defaultDelay: 0,

  // Time taken to update the tween during all animation
  tweenUpdatingTime: 3,

  // Configuration for the "move in" animation
  moveIn: {
    x: 500, // Target X coordinate
    y: 350, // Target Y coordinate
    duration: 2, // Duration of the animation
    ease: "back.in(3)", // Easing function for the animation
  },

  // Configuration for scaling during the "move in" animation
  scaleOnIn: {
    x: 2.5, // Scale factor z
    y: 2.5, // Scale factor y
    duration: 2, // Duration of the scaling animation
    ease: "none", // Easing function for the scaling animation
  },

  // Configuration for the "move out" animation
  moveOut: {
    x: 900, // Target X coordinate
    y: 700, // Target Y coordinate
    duration: 1, // Duration of the animation
    ease: "expo.in", // Easing function for the animation
  },

  // Delay before starting the "move out" animation
  moveOutDelay: 2,

  // Configuration for scaling during the "move out" animation
  scaleOnOut: {
    x: 0.5, // Scale factor x
    y: 0.5, // Scale factor y
    duration: 1, // Duration of the scaling animation
    ease: "expo.in", // Easing function for the scaling animation
  },

  // Delay before starting the scaling during the "move out" animation
  scaleOnOutDelay: 2,
};
