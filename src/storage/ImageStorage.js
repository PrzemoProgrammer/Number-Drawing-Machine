export default class ImageStorage {
  // Static property that holds a Map to store key-value pairs of images
  static images = new Map();

  // Static method to add an image to the images Map
  static addImage(key, source) {
    // Set the key-value pair in the Map, where key is the identifier and source is the image source
    this.images.set(key, source);
  }

  // Static method to retrieve an image from the images Map based on its key
  static getImage(key) {
    // Get and return the image source associated with the specified key
    return this.images.get(key);
  }
}
