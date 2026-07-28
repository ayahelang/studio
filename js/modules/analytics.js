import {projects} from "../data/projects.js";
import {episodes} from "../data/episodes.js";
import {users} from "../data/users.js";
import {playlists} from "../data/playlists.js";

export function renderAnalytics(){

document.querySelector("#projectSummary").innerHTML=`

<div class="summary-item">

<span>Total Playlist</span>

<b>${playlists.length}</b>

</div>

<div class="summary-item">

<span>Total Project</span>

<b>${projects.length}</b>

</div>

`;

document.querySelector("#episodeSummary").innerHTML=`

<div class="big-number">

${episodes.length}

</div>

<div>Total Episode</div>

`;

const top=[...users].sort(

(a,b)=>b.point-a.point

)[0];

document.querySelector("#topMember").innerHTML=`

<div class="big-number">

${top.name}

</div>

<div>

${top.point} Point

</div>

`;

const published=

episodes.filter(

e=>e.status==="Published"

).length;

const percent=Math.round(

published/

episodes.length

*100

);

document.querySelector("#productionProgress").innerHTML=`

<div class="big-number">

${percent}%

</div>

<div>

Published Episode

</div>

`;

}
