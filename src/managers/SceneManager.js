import AppManager from "./AppManager";
import SceneStorage from "../storage/SceneStorage";

export default class SceneManager {
  // Method to add one or more scenes to the scene manager
  static addScene(scene) {
    scene.forEach((scene) => {
      // Add the scene to SceneStorage
      SceneStorage.addScene(scene);
      // Add the scene to AppManager as a child
      AppManager.addChild(scene);
    });
  }

  // Method to automatically start the first scene in the scene manager
  static autoStartFirstScene() {
    // Get all scenes from SceneStorage
    const scenesMap = SceneStorage.getScenes;
    // Get an array of scene keys
    const scenesKeys = Array.from(scenesMap.keys());
    // Get the key of the first scene
    const firstScene = scenesKeys[0];
    // Start the first scene
    this.startScene(firstScene);
  }

  // Method to start a specific scene given its key
  static startScene(key) {
    // Get the scene instance from SceneStorage using the key
    const scene = SceneStorage.getScene(key);
    // Initialize the scene
    scene.init();
  }

  // Method to remove a scene from the scene manager given its key
  static removeScene(key) {
    // Get the scene instance using the key
    const sceneInstance = this.getScene(key);
    // Remove the scene from AppManager
    AppManager.removeChild(sceneInstance);
  }

  // Method to get a scene instance given its key
  static getScene(key) {
    // Return the scene instance from SceneStorage using the key
    return SceneStorage.getScene(key);
  }

  // Method to delete a scene from the scene manager and SceneStorage given its key
  static deleteScene(key) {
    // Remove the scene from AppManager
    this.removeScene(key);
    // Delete the scene from SceneStorage
    SceneStorage.deleteScene(key);
  }
}
