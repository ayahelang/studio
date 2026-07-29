export async function getVideoInfo(file){

    return new Promise(resolve=>{

        const video=document.createElement("video");

        video.preload="metadata";

        video.onloadedmetadata=()=>{

            const info={

                width:video.videoWidth,

                height:video.videoHeight,

                duration:Math.round(video.duration),

                size:file.size,

                type:file.type,

                name:file.name

            };

            URL.revokeObjectURL(video.src);

            resolve(info);

        };

        video.src=URL.createObjectURL(file);

    });

}
