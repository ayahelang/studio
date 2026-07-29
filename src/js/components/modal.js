export function showModal(title,content){
    document.body.insertAdjacentHTML("beforeend",`
<div class="modal-overlay" id="modalOverlay">
    <div class="modal">
        <div class="modal-header">
            <h2>${title}</h2>
            <button id="closeModal">&times;</button>
        </div>
        <div class="modal-body">
            ${content}
        </div>
    </div>
</div>`);
    document.getElementById("closeModal").onclick=closeModal;
    document.getElementById("modalOverlay").onclick=e=>{
        if(e.target.id==="modalOverlay"){
            closeModal();
        }
    };
}

export function closeModal(){
    document.getElementById("modalOverlay")?.remove();
}
