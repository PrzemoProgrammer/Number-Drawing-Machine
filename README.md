<img align="right" alt="coding" src="https://img.freepik.com/premium-vector/lottery-numbers-flying-realistic-drawing-lottery-billiard-balls-lucky-accidental-win-instant-jackpot-internet-gambling-lotto-bingo-vector-concept-dark-background_176411-1638.jpg?w=2000">

# Number Drawing Machine - Game
* Created in 𝗣𝗶𝘅𝗶.𝗷𝘀,
* 𝗚𝘀𝗮𝗽 for animations,


𝐕𝐢𝐝𝐞𝐨



 [![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/c7WboCXjzd8/0.jpg)](https://www.youtube.com/watch?v=c7WboCXjzd8)


<br>

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
