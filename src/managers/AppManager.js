import AppStorage from "../storage/AppStorage";

//a class used to manage the application
export default class AppManager {
  //method shortening an instance of a class
  static get app() {
    return AppStorage.app;
  }
  //method used to add a container to the application container. In this case we add scenes
  static addChild(instance) {
    this.app.stage.addChild(instance);
  }
  //method used to remove a container from the application container. In this case we delete the scene
  static removeChild(instance) {
    this.app.stage.removeChild(instance);
  }
  //method is used to add functions that will be called on each frame of the animation. The updateFunction parameter is expected to be a function that you want to be called on each tick of the animation.
  static addToTicker(updateFunction) {
    this.app.ticker.add(updateFunction);
  }
}
