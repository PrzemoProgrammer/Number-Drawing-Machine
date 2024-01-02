import TubeView from "../view/TubeView";
//A class for downloading variables with graphics from the TubeView class
export default class TubeController {
  constructor() {
    // Initialize the tubeView property to null
    this.tubeView = null;
  }

  // Method to create a new TubeView instance and set it to tubeView property
  createView() {
    // Create a new TubeView instance and assign it to the tubeView property
    return (this.tubeView = new TubeView());
  }

  // Getter method for retrieving the playButton property from the tubeView instance
  get getPlayButton() {
    // Return the playButton property of the tubeView instance
    return this.tubeView.playButton;
  }

  // Getter method for retrieving the ballsContainer property from the tubeView instance
  get getBallsContainer() {
    // Return the ballsContainer property of the tubeView instance
    return this.tubeView.ballsContainer;
  }

  // Getter method for retrieving the tubeMask property from the tubeView instance
  get getTubeMask() {
    // Return the tubeMask property of the tubeView instance
    return this.tubeView.tubeMask;
  }
}
