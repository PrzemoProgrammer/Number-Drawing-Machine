# Project structure:

```
Pixi Code Test 2
├─ package-lock.json
├─ package.json
├─ public
│  ├─ css
│  │  └─ styles.css
│  └─ index.html
├─ src
│  ├─ abstraction
│  │  └─ BaseScene.js
│  ├─ assets
│  │  ├─ spritesheet.json
│  │  └─ spritesheet.png
│  ├─ components
│  │  ├─ Button.js
│  │  ├─ Container.js
│  │  └─ Sprite.js
│  ├─ config
│  │  └─ config.js
│  ├─ css
│  │  └─ styles.css
│  ├─ game
│  │  ├─ balls
│  │  │  ├─ ball
│  │  │  │  ├─ Ball.js
│  │  │  │  ├─ config
│  │  │  │  │  ├─ ballConfig.js
│  │  │  │  │  └─ moveBallInTubeAnimConfig.js
│  │  │  │  └─ view
│  │  │  │     └─ BallView.js
│  │  │  ├─ config
│  │  │  ├─ manager
│  │  │  │  └─ BallsManager.js
│  │  │  └─ storage
│  │  │     └─ BallsStorage.js
│  │  ├─ config
│  │  │  ├─ addBallToTubeScheduleAnimConfig.js
│  │  │  └─ gameConfig.js
│  │  ├─ drawBall
│  │  │  ├─ config
│  │  │  │  ├─ drawBallAnimConfig.js
│  │  │  │  └─ drawBallConfig.js
│  │  │  ├─ DrawBall.js
│  │  │  ├─ manager
│  │  │  │  └─ DrawBallManager.js
│  │  │  └─ view
│  │  │     └─ DrawBallView.js
│  │  ├─ manager
│  │  │  └─ GameManager.js
│  │  └─ physics
│  │     ├─ config
│  │     │  └─ physicsConfig.js
│  │     └─ WorldPhysics.js
│  ├─ index.html
│  ├─ index.js
│  ├─ managers
│  │  ├─ AppManager.js
│  │  ├─ ImageManager.js
│  │  └─ SceneManager.js
│  ├─ scenes
│  │  ├─ PlayScene.js
│  │  └─ PreloadScene.js
│  ├─ storage
│  │  ├─ AppStorage.js
│  │  ├─ ImageStorage.js
│  │  └─ SceneStorage.js
│  ├─ UI
│  │  └─ tube
│  │     ├─ balls
│  │     │  └─ TubeBallsContainer.js
│  │     ├─ config
│  │     │  └─ tubeConfig.js
│  │     ├─ controller
│  │     │  └─ TubeController.js
│  │     ├─ manager
│  │     │  └─ TubeManager.js
│  │     └─ view
│  │        └─ TubeView.js
│  └─ utility
│     ├─ mathUtils.js
│     └─ screen
│        └─ ScreenUtils.js
└─ webpack.config.js

```
