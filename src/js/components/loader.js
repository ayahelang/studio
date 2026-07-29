let loader=null;

export function showLoader(message="Loading..."){
    if(loader){
        return;
    }
    loader=document.createElement("div");
    loader.className="loader-overlay";
    loader.innerHTML=`
<div class="loader-box">
    <div class="loader-spinner"></div>
    <div class="loader-text">${message}</div>
</div>`;
    document.body.appendChild(loader);
}

export function hideLoader(){
    loader?.remove();
    loader=null;
}
