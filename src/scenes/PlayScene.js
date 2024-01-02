import BaseScene from "../abstraction/BaseScene";
import GameManager from "../game/manager/GameManager";
import AppManager from "../managers/AppManager";

// Graphics
// const BALL_DRAW_ORIGIN_X = 900; // Ball start animation position.
// const TUBE_START_X = 132; // Tube start display position.
// const VISIBLE_BALLS = 5; // Visible balls count.
// const BLUR_ARMOUNT = 0.2; // Ball blur amount.
// const BALL_WIDTH = 80; // Ball width.
// const BALL_HEIGHT = 80; // Ball height.
// const BALL_Y_OFFSET = 0.015; // Ball y offset.
// const NUMBER_OFFSET_X = 0.2; // Number x offset.
// const NUMBER_OFFSET_Y = 0.15; // Number y offset.
// const NUMBER_WIDTH = 45; // Number width.
// const NUMBER_HEIGHT = 60; // Number height.

/**
 * GameTest sets up the basic PIXI Application for the new game developer coding task
 * @author	Logispin
 * @version	1.1
 */

// Define a class named PlayScene that extends BaseScene
class PlayScene extends BaseScene {
  // Constructor function for the PlayScene class
  constructor() {
    // Call the constructor of the parent class (BaseScene) with the scene key "PlayScene"
    super("PlayScene");
  }

  // Initialization method for the PlayScene class
  init() {
    // Create the game using the GameManager, passing the current scene instance (this)
    GameManager.createGame(this);

    // Call the updateGame method
    this.updateGame();
  }

  // Method to update the game
  updateGame() {
    // Add a function to the Pixi.js ticker using AppManager
    AppManager.addToTicker((delta) => {
      // Call the gameUpdater method of the GameManager
      GameManager.gameUpdater(delta);
    });
  }
}

// Export a new instance of the PlayScene class as the default export
export default new PlayScene();
