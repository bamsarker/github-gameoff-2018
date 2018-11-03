import Phaser from 'phaser'

export default class extends Phaser.Sprite {
  constructor({ game, x, y, asset }) {
    super(game, x, y, asset)
    game.physics.arcade.enable(this);
    this.body.collideWorldBounds = true;
    this.body.allowGravity = false;

    this.bounce = 0.85;

    this.body.bounce.x = this.bounce;
    this.body.bounce.y = this.bounce;

    this.drag = 0.99;

    this.body.setCircle(55);
    this.anchor.setTo(0.5)
    this.scale.setTo(0.2)
    this.game = game
    this.hitModifier = 5
  }

  hit(pos) {
    this.body.velocity.x = pos.x * this.hitModifier;
    this.body.velocity.y = pos.y * this.hitModifier;
  }

  isMoving() { return Math.abs(this.body.velocity.x + this.body.velocity.y) > 0 }

  update() {
    if (Math.abs(this.body.velocity.x + this.body.velocity.y) > 2) {
      this.body.velocity.x *= this.drag;
      this.body.velocity.y *= this.drag;
    } else {
      this.body.velocity.x = 0;
      this.body.velocity.y = 0;
    }
  }
}
