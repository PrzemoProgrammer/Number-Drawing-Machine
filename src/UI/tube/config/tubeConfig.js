import { GAME_HEIGHT } from "../../../config/config";

export default {
  x: 1, //x position of tube container
  y: GAME_HEIGHT + 10, //y position of tube container
  tube: {
    //tube graphics config
    textureKey: "tube",
    x: 0,
    y: 0,
    anchorX: 0,
    anchorY: 1,
  },
  mask: {
    // tube mask graphics config
    textureKey: "tube_mask",
    x: 465,
    y: -66,
  },
  shine: {
    //tube shine graphics config
    glassShine: {
      textureKey: "window_shine",
      x: 133,
      y: -60,
      anchorX: 0,
      anchorY: 1,
    },
    peekShine: {
      textureKey: "peek_shine",
      x: 718,
      y: -58,
      anchorX: 0,
      anchorY: 1,
    },
  },
  ballsContainer: {
    //balls container i tube config
    x: 0,
    y: 0,
  },
  playButton: {
    //play button config
    eventMode: "static", //the button is called only once, so the most optimal will be static
    texture: {
      //texture keys for use depending on button interaction
      default: "play_button_default", //texture for default position. The button is created with this texture
      press: "play_button_press", // texture for the position of the pressed button. The texture is used when the button is pressed
      hover: "play_button_hover", //texture when we move the mouse over the button
    },
    sprite: {
      //Button settings on startup when creating it
      textureKey: "play_button_default",
      isStatic: false, //
      x: 930,
      y: -60,
    },
  },
};
