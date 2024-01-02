import addBallToTubeAnimConfig from "../ball/config/moveBallInTubeAnimConfig";
import MathUtils from "../../../utility/mathUtils";
import ballConfig from "../ball/config/ballConfig";
import BallsStorage from "../storage/BallsStorage";
import { GAME_WIDTH } from "../../../config/config";
import Ball from "../ball/Ball";
import {
  MAX_BALLS_COUNT,
  BALL_TEXTURES,
  NUMBER_TEXTURE_KEY,
  BALL_OFFSET,
  BALL_MAX_ANGLE,
} from "../../config/gameConfig";
import gsap from "gsap";

// Defining the BallsManager class
export default class BallsManager {
  // Method to create and return a set of balls
  static createBalls() {
    const config = { ...ballConfig };
    // Calculation of the ball's distance from the right edge of the screen
    const ballScreenOffsetX = GAME_WIDTH - BALL_OFFSET;

    // Loop to create balls based on MAX_BALLS_COUNT.(Balls that are in the pool for drawing)
    for (let ballCount = 0; ballCount < MAX_BALLS_COUNT; ballCount++) {
      //Calculating the index to choose the color of the ball every third time
      const textureIndex = ballCount % BALL_TEXTURES.length;
      //Selecting a texture of the color of the ball with a specific index
      const ballTexture = BALL_TEXTURES[textureIndex];

      // Set the x position of the ball within the game screen boundaries
      config.x = MathUtils.getRandomNumberFloor(BALL_OFFSET, ballScreenOffsetX);

      //Assigning a ball texture to the ball config
      config.ball.textureKey = ballTexture;
      //Assigning a ball number texture to the ball config. (One is added because the loop starts at 0 and the first number graphic starts at 1)
      config.number.textureKey = NUMBER_TEXTURE_KEY + (ballCount + 1);
      //Assigning a number sprite random angle to the ball config
      config.number.angle = MathUtils.getRandomNumberFloor(0, BALL_MAX_ANGLE);

      // Create a new Ball instance with the given configuration and add it to BallsStorage
      const ball = new Ball(config);
      //Adding ball to the balls stage/container
      BallsStorage.addChild(ball);
    }

    // Return the BallsStorage container with the created balls
    return BallsStorage;
  }

  // Method to remove a ball element from the balls container
  static removeElementFromContainer(ball) {
    BallsStorage.removeChild(ball);
  }

  // Getter method to retrieve all balls in the container
  static get balls() {
    return BallsStorage.children;
  }

  // Method to enable or disable physics for a specific ball
  static enablePhysics(index, value) {
    const ballsArray = BallsStorage.children;
    const ball = ballsArray[index];
    ball.enablePhysics = value;
    return ball;
  }

  // Getter method to get a random ball and its index from the balls container
  static get randomBallAndIndex() {
    const ballsArray = BallsStorage.children;
    const index = MathUtils.getRandomNumberFloor(0, ballsArray.length - 1);
    const ball = ballsArray.splice(index, 1)[0];
    return { ball, index };
  }

  // Method to start the animation of moving a ball in tube
  static startMoveBallInTubeAnim(ball, offsetX) {
    const {
      angleOnStart,
      angleOnEnd,
      firstBallPositionX,
      duration,
      ease,
      positionOnStart: { x, y },
    } = addBallToTubeAnimConfig;

    // Set initial properties for the ball and its number sprite
    ball.ballView.numberSprite.angle = angleOnStart;
    ball.setPosition(x, y);

    // Use GSAP timeline to animate the ball and its numberSprite. Used timeline for better performance
    gsap
      .timeline()
      .to(ball, {
        //Animation for the whole ball container
        x: firstBallPositionX + offsetX, //Calculating the x position for each subsequent ball so that they are next to each other
        duration: duration, //Animation duration
        ease: ease, //Animation ease
      })
      .to(
        ball.ballView.numberSprite, //Animation for the numberSprite this all ball container
        {
          ease: ease, //Animation ease
          angle: angleOnEnd, //Angle setting for the impression of the ball rolling
          duration: duration, //Animation duration
        },
        0
      );
  }
}
