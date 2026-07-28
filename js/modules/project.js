import {projects} from "../data/projects.js";
import {playlists} from "../data/playlists.js";
import {users} from "../data/users.js";

import {

getEpisodeCount,
getPublishedCount,
getProgress

} from "../utils/stats.js";

export function renderProjectList(){

const container=document.querySelector("#projectList");

if(!container) return;

container.innerHTML="";

projects.forEach(project=>{

const playlist=playlists.find(
p=>p.id===project.playlistId
);

const owner=users.find(
u=>u.id===project.ownerId
);

container.innerHTML+=`

<div class="project-card">

<div class="project-header">

<div class="project-icon"

style="background:${project.color};">

${project.code}

</div>

<div>

<h3>${project.title}</h3>

<p>${project.description}</p>

</div>

</div>

<div class="project-info">

<div>

Playlist

<br>

<b>${playlist.title}</b>

</div>

<div>

Owner

<br>

<b>${owner.name}</b>

</div>

</div>

<div class="progress-bar">

<div

class="progress-fill"

style="width:${getProgress(project.id)}%;">

</div>

</div>

<div class="project-footer">

<span>

${getPublishedCount(project.id)}

/

${getEpisodeCount(project.id)}

Published

</span>

<a

href="episode.html?project=${project.id}"

class="btn-open">

Open

</a>

</div>

</div>

`;

});

}
