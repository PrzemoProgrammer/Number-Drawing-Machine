import AppManager from "./managers/AppManager";
import PlayScene from "./scenes/PlayScene";
import PreloadScene from "./scenes/PreloadScene";
import SceneManager from "./managers/SceneManager";
import ScreenUtils from "./utility/screen/ScreenUtils";

// Retrieve the PIXI.js application instance from the AppManager
const app = AppManager.app;

// Append the PIXI.js application's view to the document body
document.body.appendChild(app.view);

// Resize the application screen using ScreenUtils
ScreenUtils.screenResize(app);

// Add an event listener for the "resize" event to handle screen resizing
window.addEventListener("resize", () => ScreenUtils.screenResize(app));

// Resize the application screen again after setting up the event listener
ScreenUtils.screenResize(app);

// Add the PreloadScene and PlayScene to the SceneManager
SceneManager.addScene([PreloadScene, PlayScene]);

// Automatically start the first scene managed by SceneManager
SceneManager.autoStartFirstScene();

//Its need for Pixi extension
globalThis.__PIXI_APP__ = app;
