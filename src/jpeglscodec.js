const charls = require('../extern/charls-js/dist/charlsjs.js')

let resolveIt
let rejectIt

const charlsInitialized = new Promise((resolve, reject) => {
    resolveIt = resolve
    rejectIt = reject
})

charls.onRuntimeInitialized = async _ => {
    // Now you can use it
    console.log('charls initialized')
    resolveIt()
}

const decode = async (compressedImageFrame, imageInfo) => {
    await charlsInitialized

    const imageFrame = new Uint8Array(0)
    const encodeOptions = {}

    return {
        imageFrame,
        imageInfo,
        encodeOptions
    }
}

const encode = async (imageFrame, imageInfo, encodeOptions) => {
    const encodedImageFrame = new Uint8Array(0)

    return {
        encodedImageFrame,
        imageInfo,
        encodeOptions
    }
}

module.exports = {
    encode,
    decode
}