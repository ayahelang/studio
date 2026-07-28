export function showLoader(){

let loader=document.querySelector("#loader");

if(!loader){

loader=document.createElement("div");

loader.id="loader";

loader.innerHTML=`

<div class="loader-spinner"></div>

`;

document.body.appendChild(loader);

}

loader.style.display="flex";

}

export function hideLoader(){

const loader=document.querySelector("#loader");

if(loader){

loader.style.display="none";

}

}
