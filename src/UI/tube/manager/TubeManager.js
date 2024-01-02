import TubeAdapter from "../controller/TubeController";

// A class designed to manage a tube
export default class TubeManager {
  // Create a static property tubeAdapter and initialize it with a new instance of TubeAdapter
  static tubeAdapter = new TubeAdapter();

  // Define a static method createTube that takes a 'scene' parameter
  static createTube(scene) {
    // Create a bettingView using the tubeAdapter and add it to the specified scene
    const bettingView = this.tubeAdapter.createView();
    scene.addChild(bettingView);
  }

  // Define a static method setPlayButtonListener that takes a 'callback' parameter
  static setPlayButtonListener(callback) {
    // Retrieve the playButton from the tubeAdapter and set its onClick event handler to the provided callback
    //(The button doesn't belong in this class but it's a makeshift project so I created it here)
    const playButton = this.tubeAdapter.getPlayButton;
    playButton.onClick(callback);
  }

  // Define a static setter playButtonState that takes a 'value' parameter
  static set playButtonState(value) {
    // Retrieve the playButton from the tubeAdapter and set its 'blocked' property to the provided value
    const playButton = this.tubeAdapter.getPlayButton;
    playButton.blocked = value;
  }

  // Define a static method addBallToContainer that takes a 'ball' parameter
  static addBallToContainer(ball) {
    // Retrieve the ballsContainer from the tubeAdapter and add the specified ball to it
    const ballsContainer = this.tubeAdapter.getBallsContainer;
    ballsContainer.addBall(ball);
  }

  // Define a static getter ballsContainerLength
  static get ballsContainerLength() {
    // Return the length of the 'balls' array within the ballsContainer obtained from the tubeAdapter
    return this.tubeAdapter.getBallsContainer.balls.length;
  }
}
