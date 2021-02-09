const decode = (compressedImageFrame, sourceTransferSyntaxUID) => {

    const imageFrame = new Uint8Array(0)
    const imageInfo = {}
    const encodeOptions = {}

    return {
        imageFrame,
        imageInfo,
        encodeOptions
    }
}

const encode = (imageFrame, targetTransferSyntaxUID, imageInfo, encodeOptions) => {
    const encodedImageFrame = new Uint8Array(0)

    return {
        encodedImageFrame,
        imageInfo,
        encodeOptions
    }
}

const transcode = (compressedImageFrame, sourceTransferSyntaxUID, imageInfo, targetTransferSyntaxUID, encodeOptions) => {

    const encodedImageFrame = new Uint8Array(0)

    return {
        encodedImageFrame,
        imageInfo,
        encodeOptions
    }
}

const dicomCodec = {
    decode,
    encode,
    transcode
}

module.exports = dicomCodec