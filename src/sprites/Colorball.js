import Ball from './Ball'

export default class extends Ball {
  constructor({ game, x, y, asset, color }) {
    super({ game, x, y, asset })
    this.tint = color
  }

}
