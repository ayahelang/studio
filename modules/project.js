import {projects} from "../data/projects.js";

export function renderProjects(){

const container=document.querySelector("#projectGrid");

if(!container)return;

container.innerHTML="";

projects.forEach(project=>{

const progress=Math.round(project.published/project.episodes*100);

container.innerHTML+=`

<div class="project-card">

<div class="project-top">

<div class="project-icon" style="background:${project.color}">

${project.code}

</div>

<div>

<h3>${project.title}</h3>

<p>${project.playlist}</p>

</div>

</div>

<div class="project-info">

<span>${project.episodes} Episode</span>

<span>${project.team}</span>

</div>

<div class="progress">

<div class="fill"

style="width:${progress}%;background:${project.color}">

</div>

</div>

<div class="project-bottom">

<span>${project.published}/${project.episodes} Publish</span>

<button data-id="${project.id}">

Open

</button>

</div>

</div>

`;

});

}
