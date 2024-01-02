import BallView from "../../balls/ball/view/BallView";
import Sprite from "../../../components/Sprite";

// Create a class named DrawBallView that extends the BallView class
export default class DrawBallView extends BallView {
  // Constructor function that takes 'scene' and 'config' as parameters
  constructor(scene, config) {
    // Call the constructor of the parent class (BallView) with 'scene' and 'config'
    super(scene, config);

    // Store the 'config' parameter as a property of the class
    this.config = config;

    // Store the 'scene' parameter as a property of the class
    this.scene = scene;

    // Create a sprite mask and assign it to the property 'numberSpriteMask'
    this.numberSpriteMask = this.createNumberSpriteMask();

    // Apply the created mask to the 'numberSprite' property of the parent class (BallView)
    this.numberSprite.mask = this.numberSpriteMask;
  }

  // Method to create a sprite mask based on the configuration in 'this.config.mask'
  createNumberSpriteMask() {
    // Extract the mask configuration from 'this.config.mask'
    const config = this.config.mask;

    // Create a new Sprite instance with the extracted configuration
    const sprite = new Sprite(config);

    // Add the created sprite to the scene
    this.scene.addChild(sprite);

    // Return the created sprite as the result of the method
    return sprite;
  }
}
