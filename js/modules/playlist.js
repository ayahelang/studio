import {playlists} from "../data/playlists.js";

import {projects} from "../data/projects.js";

import {episodes} from "../data/episodes.js";

export function renderPlaylistGrid(){

const grid=document.querySelector("#playlistGrid");

if(!grid)return;

grid.innerHTML="";

playlists.forEach(item=>{

const totalProject=

projects.filter(

p=>p.playlistId===item.id

);

let totalEpisode=0;

totalProject.forEach(project=>{

totalEpisode+=episodes.filter(

e=>e.projectId===project.id

).length;

});

grid.innerHTML+=`

<div class="playlist-card">

<div class="playlist-banner">

📂

</div>

<div class="playlist-title">

${item.title}

</div>

<div class="playlist-description">

${item.description}

</div>

<div class="playlist-footer">

<div>

<b>${totalProject.length}</b>

Project

<br>

<b>${totalEpisode}</b>

Episode

</div>

<div>

<span class="playlist-badge">

${item.privacy}

</span>

</div>

</div>

</div>

`;

});

}
