import DrawBallView from "../drawBall/view/DrawBallView";
import Ball from "../balls/ball/Ball";

// Defining and exporting the DrawBall class, which extends the Ball class
// This is the animated ball that appears on the screen after drawing a ball
export default class DrawBall extends Ball {
  // Constructor that takes a config object as a parameter
  constructor(config) {
    // Calling the constructor of the parent class (Ball) with the provided config
    super(config);
    // Assigning the config parameter to the instance property 'config'
    this.config = config;
    // Setting the initial x and y coordinates of the ball based on the config
    this.x = this.config.x;
    this.y = this.config.y;
  }

  // Method to create a new instance of DrawBallView, passing the current instance and config as parameters
  createBallView() {
    return new DrawBallView(this, this.config);
  }

  // Method to update the texture of the ball view with a new texture
  updateBallTexture(newTexture) {
    // Accessing the ballSprite property of the ballView property and calling its updateTexture method
    this.ballView.ballSprite.updateTexture(newTexture);
  }
}
