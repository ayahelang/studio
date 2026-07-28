import {projects} from "../data/projects.js";
import {episodes} from "../data/episodes.js";

export function renderProjectList(){

const container=document.querySelector("#projectList");

if(!container)return;

container.innerHTML="";

projects.forEach(project=>{

const projectEpisodes=episodes.filter(e=>e.projectId===project.id);

const totalEpisode=projectEpisodes.length;

const publishedEpisode=projectEpisodes.filter(
e=>e.status==="Published"
).length;

const progress=
totalEpisode===0
?0
:Math.round((publishedEpisode/totalEpisode)*100);

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

<b>${project.playlist}</b>

</div>

<div>

Owner

<br>

<b>${project.owner}</b>

</div>

</div>

<div class="progress-bar">

<div class="progress-fill"

style="width:${progress}%;">

</div>

</div>

<div class="project-footer">

<span>

${publishedEpisode}/${totalEpisode}

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
