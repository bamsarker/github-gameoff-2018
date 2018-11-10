export default {
  gameWidth: 400,
  gameHeight: 800,
  localStorageName: 'phaseres6webpack',
  webfonts: ['Bangers'],
  backgroundColor: '#008f00',
  ballSize: 24,
  getInitialLayoutPos: function(i, total) {
    const x = i % 3
    const y = Math.floor((i * 4) / total)
    return {
      x: this.gameWidth / 2 + (x * this.ballSize) - this.ballSize,
      y: this.gameHeight / 4 + (y * this.ballSize) - this.ballSize * 2
    }
  },
  ballColors: [
    0x08BDBD,
    0xF21B3F,
    0xFF9914,
    0xABFF4F,
    0x08BDBD,
    0xF21B3F,
    0xFF9914,
    0xABFF4F,
    0x08BDBD,
    0xF21B3F,
    0xFF9914,
    0xABFF4F
  ]
}
