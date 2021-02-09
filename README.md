# dicom-codec-js
DICOM Codecs for JavaScript

# Building

This project uses git submodules for external dependencies.  You must do the following first:

```
git submodule init
```

# API

## decode

Parameters:
- compressedImageFrame - Uint8Array with the compressed image frame bytes
- sourceTransferSyntaxUID - string with the transfer syntax uid of the compressed image frame

Returns:
- Object
    - imageFrame - Uint8Array with the uncompressed image frame bytes
    - imageInfo - Object
        - rows - Number with the image rows/height
        - columns - Number with the image columns/width
        - bitsPerPixel - Number with bits per pixel
        - componentsPerPixel - Number with number of components per pixel. 
        - signed - true if pixel data is signed, false if unsigned

## encode

Parameters:
- imageFrame - Uint8Array with the uncompressed image frame bytes
- targetTransferSyntaxUID - string with the transfer syntax uid to encode the image frame as
- imageInfo - Object
    - rows - Number with the image rows/height
    - columns - Number with the image columns/width
    - bitsPerPixel - Number with bits per pixel
    - componentsPerPixel - Number with number of components per pixel. 
    - signed - true if pixel data is signed, false if unsigned
- encodeOptions - Object - contents specific to each codec

Returns:
- Uint8Array with the compressed image frame bytes

## transcode

Parameters:
- compressedImageFrame - Uint8Array with the compressed image frame bytes
- sourceTransferSyntaxUID - string with the transfer syntax uid of the compressed image frame
- imageInfo - Object
    - rows - Number with the image rows/height
    - columns - Number with the image columns/width
    - bitsPerPixel - Number with bits per pixel
    - componentsPerPixel - Number with number of components per pixel. 
    - signed - true if pixel data is signed, false if unsigned
- targetTransferSyntaxUID - string with the transfer syntax uid to encode the image frame as
- encodeOptions - Object - contents specific to each codec

Returns:
- Object
    - imageFrame - Uint8Array with the uncompressed image frame bytes
    - imageInfo - Object
        - rows - Number with the image rows/height
        - columns - Number with the image columns/width
        - bitsPerPixel - Number with bits per pixel
        - componentsPerPixel - Number with number of components per pixel. 
        - signed - true if pixel data is signed, false if unsigned
