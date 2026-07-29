export function avatar(url,name=""){
    if(url){
        return `<img class="avatar" src="${url}" alt="${name}">`;
    }
    const letter=(name||"?").trim().charAt(0).toUpperCase();
    return `<div class="avatar avatar-fallback">${letter}</div>`;
}
