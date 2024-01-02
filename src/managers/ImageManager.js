import ImageStorage from "../storage/ImageStorage";

export default class ImageManager {
  // Static method to add an image to the ImageStorage using a given key and source.
  static addImage(key, source) {
    // Delegating the task of adding the image to the ImageStorage class.
    ImageStorage.addImage(key, source);
  }

  // Static method to retrieve an image from the ImageStorage using a given key.
  static getImage(key) {
    // Returning the image by delegating the task to the ImageStorage class.
    return ImageStorage.getImage(key);
  }
}
