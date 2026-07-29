export async function getVideoDuration(file){
    return new Promise(resolve=>{
        const video=document.createElement("video");
        video.preload="metadata";
        video.onloadedmetadata=()=>{
            URL.revokeObjectURL(video.src);
            resolve(Math.round(video.duration));
        };
        video.src=URL.createObjectURL(file);
    });
}
