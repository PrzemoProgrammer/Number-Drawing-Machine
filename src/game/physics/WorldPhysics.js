import MathUtils from "../../utility/mathUtils";
import physicsConfig from "../physics/config/physicsConfig";

export default class WorldPhysics {
  // Array to store physics bodies
  static _bodies = [];

  // Gravity value for the physics simulation
  static _gravity = 1;

  // Flag to indicate whether physics simulation is enabled
  static _enabledPhysics = false;

  // Initialization method
  static init() {
    // Destructuring values from physicsConfig object
    const {
      y: { max: maxY, min: minY },
      x: { max: maxX, min: minX },
    } = physicsConfig;

    // Assigning values to class properties
    this.maxWorldX = maxX;
    this.minWorldX = minX;
    this.maxWorldY = maxY;
    this.minWorldY = minY;
  }

  // Setter method to enable/disable physics simulation
  static set enablePhysics(value) {
    this._enabledPhysics = value;
  }

  // Method to generate a random sign (+1 or -1)
  static getRandomSign() {
    return Math.random() < 0.5 ? 1 : -1;
  }

  // Method to add physics properties to a body
  static addBodyProperties(body) {
    const {
      offsetX,
      velocityX,
      velocityY,
      accelerationX,
      accelerationY,
      rotatingSpeed,
      enablePhysics,
    } = physicsConfig.targetBody;
    const bodyOffsetX = offsetX;
    body.velocityY = velocityY;
    body.accelerationY = accelerationY;
    body.velocityX = velocityX * this.getRandomSign();
    body.accelerationX = accelerationX;
    body.rotatingSpeed = rotatingSpeed * this.getRandomSign();
    body.maxWorldX = this.maxWorldX - bodyOffsetX;
    body.minWorldX = this.minWorldX + bodyOffsetX;
    body.maxWorldY = this.maxWorldY - bodyOffsetX;
    body.enablePhysics = enablePhysics;
  }

  // Setter method to set physics bodies
  static enablePhysicsOnBodies(_bodies) {
    this._bodies.push(..._bodies);

    this._bodies.forEach((body) => {
      this.addBodyProperties(body);
    });
  }

  // Helper method to check if body Y coordinate is greater than the world limit
  static isBodyYGreaterThanMaxPhysicsWorldY(body) {
    return body.y >= body.maxWorldY;
  }

  // Helper method to check if body X coordinate is greater or less than the world limits
  // Adding the value 1 so that the ball does not get stuck in the wall
  static isBodyXGreaterOrLessThanMaxPhysicsWorldX(body) {
    const { x, minWorldX, maxWorldX } = body;
    body.x =
      x >= maxWorldX ? maxWorldX - 1 : x <= minWorldX ? minWorldX + 1 : x;
    return x >= maxWorldX || x <= minWorldX;
  }

  // Methods to update body properties during the physics simulation
  static updateBodyY(body, delta) {
    // Updating Y position based on velocity and acceleration
    body.velocityY += body.accelerationY + this._gravity * delta;
    body.y += body.velocityY * delta; // Multiplying the value by delta to equalize the game speed regardless of the device speed
  }

  static updateBodyX(body, delta) {
    // Updating X position based on velocity and acceleration
    body.velocityX += body.accelerationX;
    body.x += body.velocityX * delta; // Multiplying the value by delta to equalize the game speed regardless of the device speed
  }

  static updateBodyAngle(body, delta) {
    // Updating body angle based on rotating speed
    body.numberSpriteAngle =
      body.numberSpriteAngle + body.rotatingSpeed * delta; // Multiplying the value by delta to equalize the game speed regardless of the device speed
  }

  static randomizeVelocityY(body) {
    // Updating Y velocity to simulate bouncing with different values
    body.velocityY = MathUtils.getRandomNumber(20, 33) * -1; // body.velocityY = MathUtils.getRandomNumber(15, 21) * -1;
  }

  static reverseVelocityX(body) {
    // Inverting X velocity to simulate bouncing off walls
    body.velocityX = -body.velocityX;
  }

  static reverseTargetRotation(body) {
    // Inverting rotating speed to change rotation direction
    body.rotatingSpeed = -body.rotatingSpeed;
  }

  // Main update method for the physics simulation
  static update(delta) {
    // Check if physics simulation is enabled
    if (!this._enabledPhysics) return;

    // Iterate through each body and update their properties
    //for loop for better performance
    for (let i = 0; i < this._bodies.length; i++) {
      const body = this._bodies[i];

      // Skip bodies that have physics disabled
      if (!body.enablePhysics) continue;

      // Update body properties
      this.updateBodyY(body, delta);
      this.updateBodyX(body, delta);
      this.updateBodyAngle(body, delta);

      // Check if body has reached the top boundary, apply bounce effects
      if (this.isBodyYGreaterThanMaxPhysicsWorldY(body)) {
        this.randomizeVelocityY(body);
        this.reverseTargetRotation(body);
      }

      // Check if body has reached horizontal boundaries, apply bounce effects
      if (this.isBodyXGreaterOrLessThanMaxPhysicsWorldX(body))
        this.reverseVelocityX(body);
    }
  }
}
