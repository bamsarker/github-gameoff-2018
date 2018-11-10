import Ball from './Ball'

export default class extends Ball {
  constructor({ game, x, y, asset }) {
    super({ game, x, y, asset })
    this.hitModifier = 5
  }

  hit(pos) {
    this.body.velocity.x = pos.x * this.hitModifier;
    this.body.velocity.y = pos.y * this.hitModifier;
  }

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
