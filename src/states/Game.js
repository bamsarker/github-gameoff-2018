/* globals __DEV__ */
import Phaser from 'phaser'
import Ball from '../sprites/Ball'
import Cueball from '../sprites/Cueball'
import AimLine from '../sprites/AimLine'
import lang from '../lang'
import Colorball from '../sprites/Colorball';
import config from '../config';

export default class extends Phaser.State {
  init() { }
  preload() { }

  create() {
    // const bannerText = lang.text('welcome')
    // let banner = this.add.text(this.world.centerX, this.game.height - 80, bannerText, {
    //   font: '40px Bangers',
    //   fill: '#77BFA3',
    //   smoothed: false
    // })

    // banner.padding.set(10, 16)
    // banner.anchor.setTo(0.5)

    this.game.physics.startSystem(Phaser.Physics.BOX2D);
    this.game.physics.box2d.setBoundsToWorld();
    this.game.physics.box2d.friction = 0;
    this.game.physics.box2d.restitution = 0.8;
    this.game.physics.box2d.velocityIterations = 4;
    // this.game.physics.box2d.velocityThreshold = 0;

    this.cueball = new Cueball({
      game: this.game,
      x: this.world.centerX,
      y: this.world.centerY,
      asset: 'ball'
    })

    this.colorBalls = config.ballColors.map((color, i) => {
      const pos = config.getInitialLayoutPos(i, config.ballColors.length)
      return new Colorball({
        game: this.game,
        x: pos.x,
        y: pos.y,
        asset: 'ball',
        color
      })
    })

    this.game.input.addPointer();
    this.game.input.addPointer();

    this.aimLine = new AimLine({
      game: this.game,
      ball: this.cueball,
      pointer: this.game.input.mousePointer
    })

    this.game.add.existing(this.cueball)
    this.game.add.existing(this.aimLine)
    this.colorBalls.map(ball => this.game.add.existing(ball))

  }

  checkForMatches(balls) {
    return balls.map(ball => ball.closeBallsOfTheSameColor(balls)).filter(group => group.length === 3)
  }

  update() {
    // this.colorBalls.map(ball => {
    //   this.game.physics.arcade.collide(ball, this.cueball)
    //   this.colorBalls.map(b => this.game.physics.arcade.collide(ball, b))
    // })

    // if (this.ballsAreStationary()) {
    //   const ballGroups = this.checkForMatches(this.colorBalls)

    //   if (ballGroups.length > 0) {
    //     ballGroups.forEach(group => group.forEach(ball => {
    //       ball.destroy()
    //       this.colorBalls = this.colorBalls.filter(b => b !== ball)
    //     }))
    //   }
    // }

    if (this.game.input.mousePointer.justReleased() && this.ballsAreStationary()) {
      this.cueball.hit({
        x: this.game.input.mousePointer.positionDown.x - this.game.input.mousePointer.x,
        y: this.game.input.mousePointer.positionDown.y - this.game.input.mousePointer.y
      })
    }
  }

  ballsAreStationary() {
    return this.colorBalls.concat(this.cueball).filter(ball => !ball.isMoving()).length === this.colorBalls.length + 1
  }

  render() {
    if (this.game.input.mousePointer.isDown && this.ballsAreStationary()) {
      this.aimLine.clear()
      this.aimLine.drawLine(this.cueball, {
        x: this.cueball.x + (this.game.input.mousePointer.positionDown.x - this.game.input.mousePointer.x),
        y: this.cueball.y + (this.game.input.mousePointer.positionDown.y - this.game.input.mousePointer.y)
      })
    } else {
      this.aimLine.clear()
    }
    // if (__DEV__) {

    // }
  }
}
