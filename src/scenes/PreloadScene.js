import { Assets } from "pixi.js";
import sceneManager from "../managers/SceneManager";
import BaseScene from "../abstraction/BaseScene";
import ImageManager from "../managers/ImageManager";
import { SPRITESHEET_NAME } from "../config/config";

// Define a class named PreloadScene that extends the BaseScene class.
class PreloadScene extends BaseScene {
  // Constructor for the PreloadScene class.
  constructor() {
    // Call the constructor of the parent class (BaseScene) with the scene key name "PreloadScene".
    super("PreloadScene");
  }

  // Initialization method for the PreloadScene class.
  async init() {
    // Asynchronously call the loadSpritesheet method and wait for it to complete.
    await this.loadAtlas();

    // Call the handleStartNextScene method.
    this.handleStartNextScene();
  }

  // Asynchronous method to load a spritesheet using the Assets object.
  async loadAtlas() {
    // Asynchronously load the spritesheet JSON file using the Assets object.
    // The spritesheet file is assumed to be located in the "assets" folder with the name specified in SPRITESHEET_NAME.
    let source = await Assets.load(`assets/${SPRITESHEET_NAME}.json`);

    // Add the loaded spritesheet to the ImageManager using the SPRITESHEET_NAME as the key.
    ImageManager.addImage(SPRITESHEET_NAME, source);
  }

  // Method to handle starting the next scene using the sceneManager.
  handleStartNextScene() {
    // Use the sceneManager to start the "PlayScene".
    sceneManager.startScene("PlayScene");
  }
}

// Export an instance of the PreloadScene class as the default export.
export default new PreloadScene();
