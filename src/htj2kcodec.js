const decode = (compressedImageFrame) => {
    const imageFrame = new Uint8Array(0)
    const imageInfo = {}
    const encodeOptions = {}

    return {
        imageFrame,
        imageInfo,
        encodeOptions
    }
}

const encode = (imageFrame, imageInfo, encodeOptions) => {
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