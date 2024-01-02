export default class SceneStorage {
  // Static property to store scenes using a Map data structure
  static scenes = new Map();

  // Static method to add a scene to the storage
  static addScene(scene) {
    // Retrieve the unique key associated with the scene
    const key = scene.sceneKey;

    // Add the scene to the scenes Map using its key
    this.scenes.set(key, scene);
  }

  // Static method to get a scene from the storage based on its key
  static getScene(key) {
    return this.scenes.get(key);
  }

  // Static getter method to retrieve all scenes stored in the storage
  static get getScenes() {
    return this.scenes;
  }

  // Static method to delete a scene from the storage based on its key
  static deleteScene(key) {
    this.scenes.delete(key);
  }
}
