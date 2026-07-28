import {users} from "../data/users.js";

import {projects} from "../data/projects.js";

import {episodes} from "../data/episodes.js";

export function renderTeamGrid(){

const grid=document.querySelector("#teamGrid");

if(!grid)return;

grid.innerHTML="";

users.forEach(user=>{

const totalProject=projects.filter(

p=>p.ownerId===user.id

).length;

const totalEpisode=episodes.filter(

e=>e.editor===user.name

).length;

const roleClass=

user.role==="Owner"

?"role-owner"

:"role-member";

grid.innerHTML+=`

<div class="member-card">

<div class="member-top">

<div class="member-avatar">

<img src="${user.avatar}">

</div>

<div>

<div class="member-name">

${user.name}

</div>

<div class="${roleClass}">

${user.role}

</div>

</div>

</div>

<div class="member-stats">

<div>

<b>${user.point}</b>

Point

</div>

<div>

<b>${totalProject}</b>

Project

</div>

<div>

<b>${totalEpisode}</b>

Episode

</div>

</div>

<div class="member-footer">

<div>

⭐ ${user.point}

</div>

<a

href="#"

class="member-button"

data-user="${user.id}">

Detail

</a>

</div>

</div>

`;

});

}
