export default {
  gameWidth: 400,
  gameHeight: 800,
  localStorageName: 'phaseres6webpack',
  webfonts: ['Bangers'],
  backgroundColor: '#008f00',
  ballSize: 24,
  getInitialLayoutPos: function() {
    let ballsInRow = 1
    let curr = 0
    return function(i, total) {
      const x = curr
      curr++
      if (curr > ballsInRow) {
        ballsInRow++
        curr = 0
      }
      const y = ballsInRow - 1
      return {
        x: this.gameWidth / 2 + (x * this.ballSize) - (ballsInRow * this.ballSize / 2),
        y: this.gameHeight / 4 - (y * (this.ballSize - 1))
      }
    }
  }(),
  ballColors: [
    0x08BDBD,
    0xABFF4F,
    0xF21B3F,
    0x08BDBD,
    0xABFF4F,
    0xF21B3F,
    0x08BDBD,
    0xABFF4F,
    0xF21B3F,
    0x08BDBD,
    0xABFF4F,
    0xF21B3F,
    0x08BDBD,
    0xABFF4F,
    0xF21B3F,
    0x08BDBD,
    0xABFF4F,
    0xF21B3F,
    0x08BDBD,
    0xABFF4F,
    0xF21B3F,
    0x08BDBD,
    0xABFF4F,
    0xF21B3F,
    0x08BDBD,
    0xABFF4F,
    0xF21B3F,
    0x08BDBD,
    0xABFF4F,
    0xF21B3F,
    0x08BDBD,
    0xABFF4F,
    0xF21B3F,
  ]
}
