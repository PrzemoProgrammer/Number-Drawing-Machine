import { GAME_WIDTH } from "../../../config/config";
import MathUtils from "../../../utility/mathUtils";

export default {
  y: {
    max: 660, //maximum Y value from world physics
    min: 0, //minimum Y value from world physics
  },
  x: {
    max: GAME_WIDTH, //maximum X value from world physics
    min: 0, //minimum X value from world physics
  },
  velocity: {
    x: {
      max: 20,
      min: 15,
    },
    y: {
      max: 0,
      min: 0,
    },
  },
  acceleration: {
    x: {
      max: 0.3,
      min: 0.7,
    },
    y: {
      max: 0.6,
      min: 0.9,
    },
  },
  targetBody: {
    offsetX: 37,
    velocityX: 20,
    velocityY: 0,
    accelerationX: 0,
    accelerationY: 0,
    rotatingSpeed: MathUtils.getRandomNumberFloor(3, 6),
    enablePhysics: true,
  },
};
