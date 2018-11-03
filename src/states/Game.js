/* globals __DEV__ */
import Phaser from 'phaser'
import Ball from '../sprites/Ball'
import AimLine from '../sprites/AimLine'
import lang from '../lang'

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

    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    this.ball = new Ball({
      game: this.game,
      x: this.world.centerX,
      y: this.world.centerY,
      asset: 'ball'
    })

    this.game.input.addPointer();
    this.game.input.addPointer();

    this.aimLine = new AimLine({
      game: this.game,
      ball: this.ball,
      pointer: this.game.input.mousePointer
    })

    this.game.add.existing(this.ball)
    this.game.add.existing(this.aimLine)


  }

  update() {
    if (this.game.input.mousePointer.justReleased() && !this.ball.isMoving()) {
      this.ball.hit({
        x: this.game.input.mousePointer.positionDown.x - this.game.input.mousePointer.x,
        y: this.game.input.mousePointer.positionDown.y - this.game.input.mousePointer.y
      })
    }
  }

  render() {
    if (this.game.input.mousePointer.isDown) {
      this.aimLine.clear()
      this.aimLine.drawLine(this.ball, {
        x: this.ball.x + (this.game.input.mousePointer.positionDown.x - this.game.input.mousePointer.x),
        y: this.ball.y + (this.game.input.mousePointer.positionDown.y - this.game.input.mousePointer.y)
      })
    } else {
      this.aimLine.clear()
    }

    // if (__DEV__) {

    // }
  }
}
