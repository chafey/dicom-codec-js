const openjph = require('../extern/openjphjs/dist/openjphjs.js')

let resolveIt
let rejectIt

const openjphInitialized = new Promise((resolve, reject) => {
    resolveIt = resolve
    rejectIt = reject
})

openjph.onRuntimeInitialized = async _ => {
    // Now you can use it
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

const encode = async (uncompressedImageFrame, imageInfo, encodeOptions) => {
    await openjphInitialized

    const htj2kImageInfo = {
        width: imageInfo.columns,
        height: imageInfo.rows,
        bitsPerSample: imageInfo.bitsPerPixel,
        isSigned: imageInfo.signed, 
        componentCount: imageInfo.componentsPerPixel
    }

    const encoder = new openjph.HTJ2KEncoder();
    const decodedBytes = encoder.getDecodedBuffer(htj2kImageInfo);
    decodedBytes.set(uncompressedImageFrame);
    //encoder.setQuality(false, 0.001);
  
    encoder.encode();
    
    // print out information about the encode
    const encodedBytes = encoder.getEncodedBuffer();
    const encodedImageFrame = new Uint8Array(encodedBytes.length)
    encodedImageFrame.set(encodedBytes)

    // cleanup allocated memory
    encoder.delete();

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