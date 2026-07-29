export function setProgress(id,value){

    const bar=document.getElementById(id);

    if(!bar){
        return;
    }

    bar.style.width=value+"%";

}
