const decode = (compressedImageFrame, sourceTransferSyntaxUID) => {
    
}

const encode = (imageFrame, targetTransferSyntaxUID) => {
    
}

const transcode = (compressedImageFrame, sourceTransferSyntaxUID, targetTransferSyntaxUID) => {

}

const dicomCodec = {
    decode,
    encode,
    transcode
}

module.exports = dicomCodec