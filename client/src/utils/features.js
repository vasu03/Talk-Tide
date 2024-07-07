// Feature to get the format of file from its url
const fileFormat = (url="") => {
    // Create a arr by popping only last idx elem from split
    const fileExtension = url.split(".").pop();

    // Based on extenstion return the file format
    if(fileExtension === "mp4" || fileExtension === "webm" || fileExtension === "ogg"){
        return "video";
    }

    if(fileExtension === "mp3" || fileExtension === "wav"){
        return "audio";
    }

    if(fileExtension === "png" || fileExtension === "jpeg" || fileExtension === "svg" || fileExtension === "jpg" || fileExtension === "gif"){
        return "image";
    }

    // Otherwise we assume it as a default file
    return "file";
};

// Feature to transform the image from given url
const transformImg = (url="", width=100) => {
    return url;
}

// Exporting all features
export { fileFormat, transformImg };
