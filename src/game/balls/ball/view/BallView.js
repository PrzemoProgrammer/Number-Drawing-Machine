// import Container from "../../../../components/Container";
// Import BulgePinchFilter and BlurFilter from the respective Pixi.js packages
import { BulgePinchFilter } from "@pixi/filter-bulge-pinch";
import { BlurFilter } from "@pixi/filter-blur";
import Sprite from "../../../../components/Sprite";

// Define and export the BallView class
export default class BallView {
  // Constructor function taking 'scene' and 'config' as parameters
  constructor(scene, config) {
    // Assign 'config' and 'scene' to class properties
    this.config = config;
    this.scene = scene;

    // Call 'createBallSprite' and 'createNumberSprite' methods to initialize sprite objects
    this.ballSprite = this.createBallSprite();
    this.numberSprite = this.createNumberSprite();

    // Uncommented code below is currently inactive (commented out), used for ball rotating testing
    // this.ballSpriteMask = this.createBallSpriteMask();

    // Uncommented code below initializes filters (BulgePinchFilter, BevelFilter, BlurFilter) and applies them to sprites
    // const bulgePinchFilter = new BulgePinchFilter();
    // bulgePinchFilter.radius = 20;
    // bulgePinchFilter.strength = 0.2;
    // const bevelFilter = new BevelFilter({
    //   rotation: 45,
    //   thickness: 4,
    //   lightColor: 0xffffff,
    //   shadowColor: 0x000000,
    //   lightAlpha: 0.7,
    //   shadowAlpha: 0.5,
    // });
    // const bluer = new BlurFilter();
    // bluer.quality = 5;
    // bluer.blur = 3;

    // Uncommented code below sets filters for sprites
    // this.filters = [bulgePinchFilter];
    // this.ballSprite.filters = [bulgePinchFilter];
    // this.numberSprite.filters = [bulgePinchFilter];

    // Uncommented code below sets multiple filters for sprites
    // this.filters = [bulgePinchFilter, bevelFilter];

    // Uncommented code below sets a mask for the 'numberSprite', used for ball rotating testing
    // this.numberSprite.mask = this.ballSpriteMask;

    //README
    //Using filters on multiple created containers with moving sprites inside puts a heavy load on performance.
    //It's better to modify the sprites to make them more realistic.
    //I tried to create the effect of spinning the ball but it is not very efficient. It's better to provide the ball spinning animation graphics
  }

  // Method to create a ball sprite using the provided configuration
  createBallSprite() {
    const config = this.config.ball;
    const sprite = new Sprite(config);
    // Add the sprite to the scene
    this.scene.addChild(sprite);
    // Return the created sprite
    return sprite;
  }

  // Method to create a number sprite using the provided configuration
  createNumberSprite() {
    const config = this.config.number;
    const sprite = new Sprite(config);
    // Add the sprite to the scene
    this.scene.addChild(sprite);
    // Return the created sprite
    return sprite;
  }

  // Method that may have been used for creating a ball sprite mask (currently commented out), used for ball rotating testing
  // createBallSpriteMask() {
  //   const config = this.config.ball;
  //   const sprite = new Sprite(config);
  //   this.scene.addChild(sprite);
  //   return sprite;
  // }
}
