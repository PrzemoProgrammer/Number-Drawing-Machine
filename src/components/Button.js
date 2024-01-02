import Sprite from "../components/Sprite";

// Create a Button class that extends the Sprite class
export default class Button extends Sprite {
  // Constructor function that takes a configuration object as a parameter
  constructor(config) {
    // Extract sprite configuration from the passed config object
    const spriteConfig = config.sprite;

    // Call the constructor of the parent Sprite class with the spriteConfig
    super(spriteConfig);

    // Save the entire config object as an instance variable
    this.config = config;

    // Initialize the blocked property to false
    this.blocked = false;

    // Save different textures for button states from the config object
    this.defaultTexture = this.config.texture.default;
    this.pressTexture = this.config.texture.press;
    this.hoverTexture = this.config.texture.hover;

    // Save the event mode from the config object
    this.eventMode = this.config.eventMode;
  }

  // Method to set up a click event handler with a callback function
  onClick(cb) {
    // Add a pointerdown event listener to the button
    this.on("pointerdown", () => {
      // Check if the button is blocked; if so, return without executing the callback
      if (this.blocked) return;

      // Update the texture to the pressed state
      this.updateTexture(this.pressTexture);

      // Call the provided callback function
      cb();
    });

    // Add a mouseover event listener to the button
    this.on("mouseover", () => {
      // Check if the button is blocked; if so, return without changing the texture
      if (this.blocked) return;

      // Update the texture to the hover state
      this.updateTexture(this.hoverTexture);
    });

    // Add a pointerout event listener to the button
    this.on("pointerout", () => {
      // Check if the button is blocked; if so, return without changing the texture
      if (this.blocked) return;

      // Update the texture to the default state
      this.updateTexture(this.defaultTexture);
    });
  }

  // Method to reset the button to its default state
  resetButton() {
    // Update the texture to the default state
    this.updateTexture(this.defaultTexture);

    // Set the blocked property to false
    this.blocked = false;
  }
}
