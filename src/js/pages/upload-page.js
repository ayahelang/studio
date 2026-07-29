import dropZone from "../components/drop-zone.js";
import uploadCard from "../components/upload-card.js";

const app=document.getElementById("content");

app.innerHTML=`
<h1>Upload Episode</h1>
${dropZone()}
<div id="uploadList"></div>
`;

const zone=document.getElementById("dropZone");
const input=zone.querySelector("input");
const list=document.getElementById("uploadList");

zone.onclick=()=>{
    input.click();
};

input.onchange=()=>{
    render(input.files);
};

zone.ondragover=e=>{
    e.preventDefault();
    zone.classList.add("dragover");
};

zone.ondragleave=()=>{
    zone.classList.remove("dragover");
};

zone.ondrop=e=>{
    e.preventDefault();
    zone.classList.remove("dragover");
    render(e.dataTransfer.files);
};

import {getVideoInfo} from "../utils/video-info.js";
import videoCard from "../components/video-card.js";

async function render(files){

    for(const file of files){

        const info=await getVideoInfo(file);

        list.insertAdjacentHTML(

            "beforeend",

            videoCard(info)

        );

    }

}
