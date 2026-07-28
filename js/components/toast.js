export function toast(message,type="success"){

let box=document.querySelector("#toast");

if(!box){

box=document.createElement("div");

box.id="toast";

box.className="toast";

document.body.appendChild(box);

}

box.className="toast "+type;

box.innerHTML=message;

box.style.display="block";

setTimeout(()=>{

box.style.display="none";

},3000);

}
