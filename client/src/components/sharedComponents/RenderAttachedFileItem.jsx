// Importing required modules
import React from "react";

// Importing react icons
import { BiFile } from "react-icons/bi";

// Importing custom util features
import { transformImg } from "../../utils/features";


// Creating the component
const RenderAttachedFileItem = (file, url) => {
    // JSX to render component
    switch (file) {
        case "video":
            return <video src={url} preload="none" width={"200px"} controls />

        case "audio":
            return <audio src={url} preload="none" controls />

        case "image":
            return <img src={transformImg(url, 200)} alt="Image" width={"100px"} height={"100px"} className="object-contain rounded-md" />

        case "file":
            return <BiFile className="text-5xl" />

        default:
            break;
    }
};

// Exporting the component
export default RenderAttachedFileItem;