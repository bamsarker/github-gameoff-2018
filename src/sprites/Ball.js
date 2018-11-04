import Phaser from 'phaser'

export default class extends Phaser.Sprite {
  constructor({ game, x, y, asset }) {
    super(game, x, y, asset)
    game.physics.box2d.enable(this);
    this.body.collideWorldBounds = true;
    this.body.allowGravity = false;

    this.drag = 0.99;

    this.body.linearDamping = 0.6;
    this.body.friction = 0;

    this.body.setCircle(12);
    this.anchor.setTo(0.5)
    this.scale.setTo(0.2)
    this.game = game
  }

  update() {
    if (Math.abs(this.body.velocity.x + this.body.velocity.y) < 2) {
      this.body.velocity.x = 0;
      this.body.velocity.y = 0;
    }
  }
}
