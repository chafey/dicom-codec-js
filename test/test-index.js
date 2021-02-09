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
})
