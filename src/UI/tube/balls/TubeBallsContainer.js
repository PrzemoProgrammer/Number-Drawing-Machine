import Container from "../../../components/Container";

//Class designed to store balls in a tube
export default class TubeBallsContainer extends Container {
  constructor() {
    super();
  }

  addBall(ball) {
    this.addChild(ball);
  }

  get balls() {
    return this.children;
  }
}
