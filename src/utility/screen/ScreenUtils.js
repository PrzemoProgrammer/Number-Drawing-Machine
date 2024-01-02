import { GAME_HEIGHT, GAME_WIDTH } from "../../config/config";

export default class ScreenUtils {
  // Static method to calculate the scale factor based on the window dimensions and game dimensions
  static calculateScaleFactor() {
    // Calculating the minimum scale factor to fit the game within the window
    const scaleFactor = Math.min(
      window.innerWidth / GAME_WIDTH,
      window.innerHeight / GAME_HEIGHT
    );
    // Returning the calculated scale factor
    return scaleFactor;
  }

  // Static method to handle screen resizing for the game
  static screenResize(game) {
    // Calling the calculateScaleFactor method to get the current scale factor
    const scaleFactor = this.calculateScaleFactor();

    // Resizing the renderer of the game to match the scaled dimensions
    game.renderer.resize(GAME_WIDTH * scaleFactor, GAME_HEIGHT * scaleFactor);

    // Scaling the game stage based on the calculated scale factor
    game.stage.scale.set(scaleFactor);
  }
}
