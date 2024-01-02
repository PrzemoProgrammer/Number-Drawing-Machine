import { Container } from "pixi.js";
import Sprite from "../../../components/Sprite";
import Button from "../../../components/Button";
import BallsContainer from "../balls/TubeBallsContainer";
import tubeConfig from "../config/tubeConfig";

export default class TubeView extends Container {
  constructor() {
    super();

    // Set the configuration object for the tube view
    this.config = tubeConfig;

    // Set the initial position of the tube view
    this.x = this.config.x;
    this.y = this.config.y;

    // Create the tube sprite and add it to the container
    this.tube = this.createTube();

    // Create the tube mask sprite and add it to the container
    this.tubeMask = this.createTubeMask();

    // Create the container for holding balls and add it to the container
    this.ballsContainer = this.createBallsContainer();

    // Create sprites for the glass shine effect and peek shine effect, and add them to the container
    this.tubeGlassShine = this.createTubeGlassShine();
    this.tubePeekShine = this.createTubePeekShine();

    // Create a play button using the specified configuration and add it to the container
    this.playButton = this.createPlayButton();

    // Set the mask for the balls container to be the tube mask
    this.ballsContainer.mask = this.tubeMask;
  }

  // Function to create and return the tube sprite
  createTube() {
    const config = this.config.tube;
    const sprite = new Sprite(config);
    this.addChild(sprite); // Add the sprite to the container
    return sprite; // Return the created sprite
  }

  // Function to create and return the tube mask sprite
  createTubeMask() {
    const config = this.config.mask;
    const sprite = new Sprite(config);
    this.addChild(sprite); // Add the sprite to the container
    return sprite; // Return the created sprite
  }

  // Function to create and return the glass shine sprite
  createTubeGlassShine() {
    const config = this.config.shine.glassShine;
    const sprite = new Sprite(config);
    this.addChild(sprite); // Add the sprite to the container
    return sprite; // Return the created sprite
  }

  // Function to create and return the peek shine sprite
  createTubePeekShine() {
    const config = this.config.shine.peekShine;
    const sprite = new Sprite(config);
    this.addChild(sprite); // Add the sprite to the container
    return sprite; // Return the created sprite
  }

  // Function to create and return the play button
  createPlayButton() {
    const config = this.config.playButton;
    const button = new Button(config);
    this.addChild(button); // Add the button to the container
    return button; // Return the created button
  }

  // Function to create and return the container for holding balls
  createBallsContainer() {
    const container = new BallsContainer();
    this.addChild(container); // Adding a container with balls to this container
    return container; // Return the created container
  }
}
