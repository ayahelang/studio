import {projects} from "../data/projects.js";

export function renderProjectDetail(id){

const project=projects.find(p=>p.id==id);

const div=document.querySelector("#projectDetail");

if(!project)return;

div.innerHTML=`

<div class="project-header">

<div>

<h1>${project.title}</h1>

<p>${project.playlist}</p>

</div>

<button>

+ Episode Baru

</button>

</div>

<div class="tabbar">

<button class="active">Overview</button>

<button>Episodes</button>

<button>Team</button>

<button>Assets</button>

<button>Analytics</button>

<button>Discussion</button>

</div>

<div class="overview-grid">

<div class="card">

<h3>Total Episode</h3>

<h1>${project.episodes}</h1>

</div>

<div class="card">

<h3>Published</h3>

<h1>${project.published}</h1>

</div>

<div class="card">

<h3>Progress</h3>

<h1>${Math.round(project.published/project.episodes*100)}%</h1>

</div>

<div class="card">

<h3>Team</h3>

<h1>${project.team}</h1>

</div>

</div>

<div id="episodeList">

</div>

`;

}
