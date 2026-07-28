export function renderSettings(){

const save=document.querySelector("#saveSettings");

if(!save)return;

save.addEventListener("click",()=>{

const data={

workspace:

document.querySelector("#workspaceName").value,

channel:

document.querySelector("#channelName").value,

language:

document.querySelector("#language").value

};

localStorage.setItem(

"silvertube-settings",

JSON.stringify(data)

);

alert("Settings berhasil disimpan.");

});

const cache=

localStorage.getItem(

"silvertube-settings"

);

if(cache){

const data=JSON.parse(cache);

document.querySelector("#workspaceName").value=data.workspace;

document.querySelector("#channelName").value=data.channel;

document.querySelector("#language").value=data.language;

}

}
