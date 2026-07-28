export function showModal(title,content){

let modal=document.querySelector("#modal");

if(!modal){

modal=document.createElement("div");

modal.id="modal";

modal.className="modal";

document.body.appendChild(modal);

}

modal.innerHTML=`

<div class="modal-box">

<div class="modal-header">

<h2>${title}</h2>

<button id="closeModal">✕</button>

</div>

<div class="modal-content">

${content}

</div>

</div>

`;

modal.style.display="flex";

document.querySelector("#closeModal").onclick=closeModal;

}

export function closeModal(){

const modal=document.querySelector("#modal");

if(modal){

modal.style.display="none";

}

}
