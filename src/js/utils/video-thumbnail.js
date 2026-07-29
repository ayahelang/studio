export async function captureThumbnail(file){

    return new Promise(resolve=>{

        const video=document.createElement("video");

        const canvas=document.createElement("canvas");

        video.preload="metadata";

        video.onloadeddata=()=>{

            canvas.width=video.videoWidth;

            canvas.height=video.videoHeight;

            const ctx=canvas.getContext("2d");

            ctx.drawImage(video,0,0);

            resolve(canvas.toDataURL("image/jpeg",0.85));

        };

        video.src=URL.createObjectURL(file);

    });

}
