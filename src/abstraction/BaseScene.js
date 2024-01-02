import Container from "../components/Container";
//creating an abstract scene as a template for scenes
export default class BaseScene extends Container {
  constructor(sceneKey) {
    super();
    this.sceneKey = sceneKey;
  }

  init() {}
}
