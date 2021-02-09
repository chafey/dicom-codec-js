const openjph = require('../extern/openjphjs/dist/openjphjs.js')

let resolveIt
let rejectIt

const openjphInitialized = new Promise((resolve, reject) => {
    resolveIt = resolve
    rejectIt = reject
})

openjph.onRuntimeInitialized = async _ => {
    // Now you can use it
    console.log('openjph initialized')
    resolveIt()
}


const decode = async (compressedImageFrame, imageInfo) => {
    await openjphInitialized
    
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