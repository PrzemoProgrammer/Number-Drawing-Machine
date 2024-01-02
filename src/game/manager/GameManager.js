import TubeManager from "../../UI/tube/manager/TubeManager";
import BallsManager from "../balls/manager/BallsManager";
import WorldPhysics from "../../game/physics/WorldPhysics";
import addBallToTubeScheduleAnimConfig from "../config/addBallToTubeScheduleAnimConfig";
import MathUtils from "../../utility/mathUtils";
import addBallToTubeAnimConfig from "../balls/ball/config/moveBallInTubeAnimConfig";
import DrawBallManager from "../drawBall/manager/DrawBallManager";
import Sprite from "../../components/Sprite";
import gsap from "gsap";

export default class GameManager {
  // Define a static method to update the game
  static gameUpdater(delta) {
    WorldPhysics.update(delta);
  }

  // Define a static method to create the game
  static createGame(scene) {
    // Create the game background
    this.createBackground(scene);

    // Create and add the container for balls to the scene
    const ballsContainer = BallsManager.createBalls();
    scene.addChild(ballsContainer);

    // Create and add the drawing ball manager to the scene
    DrawBallManager.createDrawBall(scene);

    // Create and add the tube to the scene
    TubeManager.createTube(scene);

    // Set up the play button event listener
    this.setPlayButtonEvent();

    // Initialize world physics
    WorldPhysics.init();

    // Set the bodies for physics to the children of the balls container
    WorldPhysics.enablePhysicsOnBodies(ballsContainer.children);
  }

  // Define a static method to set up the play button event
  static setPlayButtonEvent() {
    // Set up a listener for the play button
    TubeManager.setPlayButtonListener(() => {
      // Disable the play button and enable physics
      TubeManager.playButtonState = true;
      WorldPhysics.enablePhysics = true;

      // Start drawing balls and adding them to the tube
      this.startDrawBallsAndAddToTube();
    });
  }

  // Define a static method to start drawing balls and adding them to the tube
  static startDrawBallsAndAddToTube() {
    // Get the maximum number of balls and delay between animations
    const { maxBallsCount, delayBetweenAnims } =
      addBallToTubeScheduleAnimConfig;

    // Loop through each ball and schedule the draw and add to tube animation
    for (let i = 1; i < maxBallsCount + 1; i++) {
      gsap.delayedCall(i * delayBetweenAnims, () => {
        this.drawBallAndAddToTube();
      });
    }
  }

  // Define a static method to create the game background
  static createBackground(scene) {
    // Define the configuration for the background sprite
    const config = {
      textureKey: "background",
      x: 0,
      y: 0,
      anchorX: 0,
      anchorY: 0,
    };

    // Create a new Sprite with the specified configuration
    const background = new Sprite(config);

    // Set the transform of the background
    background.setTransform(0, 0, 21, 12);

    // Add the background to the scene
    scene.addChild(background);
  }

  // Define an asynchronous static method to draw a ball and add it to the tube
  static async drawBallAndAddToTube() {
    // Get the offset for every animation
    const { offsetXEveryAnim } = addBallToTubeAnimConfig;

    // Get the length of the balls
    const ballsElementsLength = BallsManager.balls.length;

    // Get the length of the tube balls
    const tubeBallsLength = TubeManager.ballsContainerLength;

    // Calculate the offsetX for the ball in the tube
    const ballTubeOffsetX = offsetXEveryAnim * tubeBallsLength;

    // Get a random index for selecting a ball
    const randomIndex = MathUtils.getRandomNumberFloor(
      0,
      ballsElementsLength - 1
    );

    // Disable physics for the selected ball
    const ball = BallsManager.enablePhysics(randomIndex, false);

    // Update the ball texture in the drawing ball manager
    DrawBallManager.updateBallTexture(
      ball.ballView.ballSprite.texture.textureCacheIds[0]
    );

    // Remove the ball from the balls container
    BallsManager.removeElementFromContainer(ball);

    // Add the ball to the tube container
    TubeManager.addBallToContainer(ball);

    // Start the drawing animation for the drawn ball
    await DrawBallManager.startDrawAnim();

    // Start the movement animation for the ball in the tube
    BallsManager.startMoveBallInTubeAnim(ball, ballTubeOffsetX);
  }
}
