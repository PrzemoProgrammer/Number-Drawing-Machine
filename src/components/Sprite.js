import * as PIXI from "pixi.js";
import ImageManager from "../managers/ImageManager";
import { SPRITESHEET_NAME } from "../config/config";

// Define a class named Sprite that extends PIXI.Sprite
export default class Sprite extends PIXI.Sprite {
  // Constructor function that takes a configuration object as a parameter
  constructor(config) {
    // Destructure properties from the configuration object with default values
    const {
      textureKey,
      x = 0,
      y = 0,
      anchorX = 0.5,
      anchorY = 0.5,
      visible = true,
      scaleX = 1,
      scaleY = 1,
      angle = 0,
      isStatic = true,
    } = config;

    // Get the texture for the specified textureKey from the ImageManager
    const imageTexture =
      ImageManager.getImage(SPRITESHEET_NAME).textures[textureKey];

    // Call the constructor of the PIXI.Sprite class with the obtained texture
    super(imageTexture);

    // Set various properties of the sprite based on the configuration
    this.anchor.set(anchorX, anchorY);
    this.position.set(x, y);
    this.scale.set(scaleX, scaleY);
    this.angle = angle;
    this.visible = visible;

    // Set additional properties for better performance
    this.filters = null;
    this.interactiveChildren = false;
    this.cacheAsBitmap = isStatic; //better performance for static elements
  }

  // Static method to create a PIXI.Texture from a given textureKey
  static createTexture(textureKey) {
    const spritePath = ImageManager.getImage(textureKey);
    return new PIXI.Texture(spritePath);
  }

  // Method to get the texture for a specific textureKey
  getTexture(textureKey) {
    return ImageManager.getImage(SPRITESHEET_NAME).textures[textureKey];
  }

  // Method to update the sprite's texture to a new textureKey
  updateTexture(newTexture) {
    const texture = this.getTexture(newTexture);
    this.texture = texture;
  }
}
