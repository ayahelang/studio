export function toast(message,type="success"){
    const div=document.createElement("div");
    div.className=`toast ${type}`;
    div.textContent=message;
    document.body.appendChild(div);
    setTimeout(()=>{
        div.classList.add("show");
    },20);
    setTimeout(()=>{
        div.remove();
    },3200);
}
