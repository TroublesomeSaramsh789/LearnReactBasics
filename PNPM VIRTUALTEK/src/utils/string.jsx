export const getImageNameFromURI = (uri) => uri.slice(uri.lastIndexOf('/') + 1);

export const getImageAbsoluteURL = (relativeURL) => `${process.env.REACT_APP_IMAGE_URL}${relativeURL}`

