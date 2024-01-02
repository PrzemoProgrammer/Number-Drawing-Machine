import DrawBall from "../DrawBall";
import drawBallConfig from "../config/drawBallConfig";
import drawBallAnimConfig from "../config/drawBallAnimConfig";
import gsap from "gsap";

export default class DrawBallManager {
  // Method to create a DrawBall instance and add it to the specified scene
  // Draw ball is the ball that is animated when a ball is drawn
  static createDrawBall(scene) {
    this.drawBall = new DrawBall(drawBallConfig);

    //Scale the container to 0 on startup
    this.drawBall.scale = drawBallAnimConfig.scaleOnStart;

    //Add to scene/container . In this case, to the PlayScene.
    scene.addChild(this.drawBall);
  }

  // Method to update the texture of the DrawBall
  static updateBallTexture(textureKey) {
    this.drawBall.updateBallTexture(textureKey);
  }

  // Asynchronous method to start the drawing animation of the ball using gsap
  static async startDrawAnim() {
    //Reference to the draw ball container
    const drawBall = this.drawBall;
    //Reference to the image of the number on the ball
    const numberSprite = drawBall.ballView.numberSprite;

    //Get config for gsap animation
    const {
      scaleOnStart,
      startX,
      startY,
      defaultDelay,
      tweenUpdatingTime,
      moveIn,
      scaleOnIn,
      moveOut,
      moveOutDelay,
      scaleOnOut,
      scaleOnOutDelay,
    } = drawBallAnimConfig;

    // Set initial scale, x, and y properties of the drawBall
    drawBall.scale = scaleOnStart;
    drawBall.setPosition(startX, startY);

    // Use gsap timeline to orchestrate the animation sequence
    await gsap
      .timeline() //use timeline for better performance
      .to(
        //gsap initialization to the duration of the entire animation of the drawn ball
        {},
        {
          duration: tweenUpdatingTime, //duration of the entire ball drawing animation
          onUpdate: () => this.updateNumberSpritePosition(numberSprite), // Updating method to set the position of the numberSprite during the animation
        },
        defaultDelay //default delay is 0 which means that gsap is invoked immediately without delay
      )
      .to(drawBall.scale, scaleOnIn, defaultDelay) //animation of increasing scaling as the ball arrives
      .to(drawBall, moveIn, defaultDelay) //animation of the movement of the ball arriving at the center of the screen
      .to(drawBall, moveOut, moveOutDelay) //animation of the movement of the ball into the tube
      .to(drawBall.scale, scaleOnOut, scaleOnOutDelay); //ball scaling down animation
  }

  // Method to update the position of the numberSprite during the animation
  //This animation is intended to reflect the spin of the ball.
  //It works by superimposing the inscription on the ball with a mask reflecting the shape of the ball.
  //The image of the ball number has its x and y position constantly updated, and when the image goes beyond the ball,
  //its position is moved back to the beginning, which, when the position is continuously updated, gives the impression that the ball is spinning.
  static updateNumberSpritePosition(sprite) {
    const {
      spinXSpeed,
      spinYSpeed,
      moveXLimit,
      addedResetSpinPositionX,
      addedResetSpinPositionY,
    } = drawBallAnimConfig.ballSpin;

    // Check if sprite has reached the moveXLimit and adjust its position accordingly
    if (sprite.x >= moveXLimit) {
      sprite.x -= addedResetSpinPositionX;
      sprite.y -= addedResetSpinPositionY;
    } else {
      // Move the sprite according to spin speeds
      sprite.x += spinXSpeed;
      sprite.y += spinYSpeed;
    }
  }
}
