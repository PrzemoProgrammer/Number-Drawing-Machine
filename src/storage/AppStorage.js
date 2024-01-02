import { APP_CONFIG } from "../config/config";
import { Application } from "pixi.js";

//A class that holds the application instance
export default class AppStorage {
  static app = new Application(APP_CONFIG);

  //method shortening an instance of a class
  static get app() {
    return this.app;
  }
}
