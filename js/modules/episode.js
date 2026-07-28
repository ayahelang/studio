import {episodes}
from "../data/episodes.js";

function statusClass(status){

switch(status){

case "Idea":

return "idea";

case "Recording":

return "recording";

case "Editing":

return "editing";

case "Review":

return "review";

case "Published":

return "published";

default:

return "";

}

}

export function renderEpisodeTable(){

const table=document.querySelector("#episodeTable");

if(!table)return;

table.innerHTML=`

<div class="episode-table">

<div class="episode-header">

<div>Kode</div>

<div>Judul</div>

<div>Editor</div>

<div>Status</div>

<div>Durasi</div>

<div>Aksi</div>

</div>

</div>

`;

const body=table.querySelector(".episode-table");

episodes.forEach(ep=>{

body.innerHTML+=`

<div class="episode-row">

<div>

${ep.episode}

</div>

<div>

<strong>${ep.title}</strong>

</div>

<div>

${ep.editor}

</div>

<div>

<span class="status ${statusClass(ep.status)}">

${ep.status}

</span>

</div>

<div>

${ep.duration}

</div>

<div>

<a

href="#"

class="open-btn"

data-id="${ep.id}">

Open

</a>

</div>

</div>

`;

});

}
