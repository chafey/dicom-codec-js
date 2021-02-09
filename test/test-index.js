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
        const uncompressedImageFrame = new Uint8Array(fs.readFileSync('extern/charls-js/test/fixtures/CT2.RAW').buffer)
        const compressedImageFrame = new Uint8Array(fs.readFileSync('extern/charls-js/test/fixtures/CT2.JLS').buffer)
        const imageInfo = {
            columns: 512,
            rows: 512,
            bitsPerPixel: 16,
            signed: true, 
            componentsPerPixel: 1
        }

        // Act
        const result = await dicomCodec.decode(compressedImageFrame, '1.2.840.10008.1.2.4.80', imageInfo)

        // Assert
        assert.strictEqual(result.imageFrame.length, 524288)
        assert.notStrictEqual(result.imageFrame, uncompressedImageFrame)
        assert.strictEqual(result.imageInfo.rows, 512)
        assert.strictEqual(result.imageInfo.columns, 512)
        assert.strictEqual(result.imageInfo.bitsPerPixel, 16)
        assert.strictEqual(result.imageInfo.signed, true)
        assert.strictEqual(result.imageInfo.componentsPerPixel, 1)
        assert.strictEqual(result.encodeOptions.nearLossless, 0)
        assert.strictEqual(result.encodeOptions.interleaveMode, 0)
        assert.strictEqual(result.encodeOptions.frameInfo.width, 512)
        assert.strictEqual(result.encodeOptions.frameInfo.height, 512)
        assert.strictEqual(result.encodeOptions.frameInfo.bitsPerSample, 16)
        assert.strictEqual(result.encodeOptions.frameInfo.componentCount, 1)
    })

    it('htj2k encode', async () => {
        // Arrange
        const uncompressedImageFrame = fs.readFileSync('extern/openjphjs/test/fixtures/raw/CT2.RAW')
        const compressedImageFrame = new Uint8Array(fs.readFileSync('extern/openjphjs/test/fixtures/j2c/CT2.j2c').buffer)
        const imageInfo = {
            columns: 512,
            rows: 512,
            bitsPerPixel: 16,
            signed: true, 
            componentsPerPixel: 1
        }
        const encodeOptions = {}

        // Act
        const result = await dicomCodec.encode(uncompressedImageFrame, 'htj2k', imageInfo, encodeOptions)

        // Assert
        assert.strictEqual(result.encodedImageFrame.length, compressedImageFrame.length) // 128717
        assert.notStrictEqual(result.encodedImageFrame, compressedImageFrame)
        assert.strictEqual(result.imageInfo.rows, 512)
        assert.strictEqual(result.imageInfo.columns, 512)
        assert.strictEqual(result.imageInfo.bitsPerPixel, 16)
        assert.strictEqual(result.imageInfo.signed, true)
        assert.strictEqual(result.imageInfo.componentsPerPixel, 1)

    })

    it('jpeg-ls->htj2k transcode', async () => {
        // Arrange
        const jpegLSCompressedImageFrame = new Uint8Array(fs.readFileSync('extern/charls-js/test/fixtures/CT2.JLS').buffer)
        const htj2kCompressedImageFrame = new Uint8Array(fs.readFileSync('extern/openjphjs/test/fixtures/j2c/CT2.j2c').buffer)
        const imageInfo = {
            columns: 512,
            rows: 512,
            bitsPerPixel: 16,
            signed: true, 
            componentsPerPixel: 1
        }
        const encodeOptions = {}

        // Act
        const result = await dicomCodec.transcode(jpegLSCompressedImageFrame,
            '1.2.840.10008.1.2.4.80',
             imageInfo,
             'htj2k', 
             encodeOptions)

        // Assert
        assert.strictEqual(result.encodedImageFrame.length, htj2kCompressedImageFrame.length)
        assert.notStrictEqual(result.encodedImageFrame, htj2kCompressedImageFrame)
    })
})
