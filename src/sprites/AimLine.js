import Phaser from 'phaser'

export default class extends Phaser.Graphics {
  constructor({ game, ball, pointer }) {
    super(game, 0, 0)
    this.game = game
    this.ball = ball
    this.pointer = pointer
  }

  drawLine(from, to) {
    this.lineStyle(5, 0xffffff, 0.25)
    this.beginFill(0xffffff)
    this.moveTo(from.x, from.y)
    this.lineTo(to.x, to.y)
    this.endFill()
  }

  update() {

  }
}
