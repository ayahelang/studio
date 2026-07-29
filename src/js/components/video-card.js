import fileSize from "../utils/file-size.js";
import progressBar from "./progress-bar.js";

export default function videoCard(info){

    return `
<div class="video-card">

    <div class="video-title">${info.name}</div>

    <div class="video-meta">

        ${info.width}×${info.height}

        •

        ${info.duration}s

        •

        ${fileSize(info.size)}

    </div>

    ${progressBar(0,100)}

</div>`;

}
