const assert = require('assert')
const dicomCodec = require('../src/index')
const fs = require('fs')
const path = require('path')
//const ion = require("ion-js");
const util = require('util')
/*
const loadIon = (path) => {
    const data = fs.readFileSync(path)
    return ion.load(data)
}

function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }   
*/
describe('index', async () => {

    before(async() => {
    })

    it('exports', async () => {
        // Arrange

        // Act

        // Assert
        assert.notStrictEqual(dicomCodec, undefined)
    })

    it('jpegls decode', async () => {
        // Arrange
        const compressedImageFrame = fs.readFileSync('extern/charls-js/test/fixtures/CT1.JLS')
        const imageInfo = {}

        // Act
        const result = await dicomCodec.decode(compressedImageFrame, '1.2.840.10008.1.2.4.80', imageInfo)
        //console.log(result)

        // Assert
        assert.strictEqual(result.imageFrame.length, 524288)
        assert.strictEqual(result.encodeOptions.nearLossless, 0)
        assert.strictEqual(result.encodeOptions.interleaveMode, 0)
        assert.strictEqual(result.encodeOptions.frameInfo.width, 512)
        assert.strictEqual(result.encodeOptions.frameInfo.height, 512)
        assert.strictEqual(result.encodeOptions.frameInfo.bitsPerSample, 16)
        assert.strictEqual(result.encodeOptions.frameInfo.componentCount, 1)
    })


})
