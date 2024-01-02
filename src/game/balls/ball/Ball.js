import BallView from "./view/BallView";
import Container from "../../../components/Container";

// Define and export a class named Ball that extends the Container class
export default class Ball extends Container {
  // Constructor function that takes a config object as a parameter
  constructor(config) {
    // Call the constructor of the parent class (Container)
    super();

    // Store the config object as an instance variable
    this.config = config;

    // Set the initial x and y coordinates based on the config object
    this.x = this.config.x;
    this.y = this.config.y;

    // Create an instance of BallView by calling the createBallView method.
    this.ballView = this.createBallView();
  }

  // Method to create and return an instance of BallView
  createBallView() {
    return new BallView(this, this.config); // This is the class responsible for creating the graphics
  }

  // Getter method to retrieve the ballView property
  get getBallView() {
    return this.ballView;
  }

  // Getter method to retrieve the angle value of the numberSprite property in ballView
  get numberSpriteAngle() {
    return this.ballView.numberSprite.angle;
  }

  // Setter method to set the angle value of the numberSprite property in ballView
  set numberSpriteAngle(value) {
    this.ballView.numberSprite.angle = value;
  }

  // Method to set the position of the all ball container by updating its x and y coordinates
  setPosition(x, y) {
    this.x = x;
    this.y = y;
  }
}
