import { MIPMAP_MODES } from "pixi.js";

export const GAME_WIDTH = 1024; // Aplicatiom /game width
export const GAME_HEIGHT = 768; // Aplicatiom /game height
export const SPRITESHEET_NAME = "spritesheet"; //Image assets sprite name
export const APP_CONFIG = {
  // Width of the Pixi.js application, using a constant value GAME_WIDTH
  width: GAME_WIDTH,

  // Height of the Pixi.js application, using a constant value GAME_HEIGHT
  height: GAME_HEIGHT,

  // Setting antialias to false for smoother rendering (may improve performance)
  antialias: false,

  // Setting the resolution to the device pixel ratio or defaulting to 1
  resolution: window.devicePixelRatio || 1,

  // Enabling legacy features for compatibility with older versions of Pixi.js
  legacy: true,

  // Setting transparency to false, indicating the canvas background is not transparent
  transparent: false,

  // Clearing the canvas before rendering each frame
  clearBeforeRender: true,

  // Disabling the preservation of the drawing buffer (may improve performance)
  preserveDrawingBuffer: false,

  // Rounding pixel values for rendering, ensuring crisp graphics
  roundPixels: true,

  // Forcing the use of the WebGL renderer instead of the Canvas renderer
  forceCanvas: false,
  //enables mip mapping
  MIPMAP_TEXTURES: MIPMAP_MODES.POW2,
}; //Config for PIXI Aplication
