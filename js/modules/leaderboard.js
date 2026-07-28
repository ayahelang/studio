import {users} from "../data/users.js";

import {episodes} from "../data/episodes.js";

export function renderLeaderboard(){

const table=document.querySelector("#leaderboardTable");

if(!table)return;

const ranking=[...users].sort(

(a,b)=>b.point-a.point

);

table.innerHTML=`

<div class="rank-table">

<div class="rank-header">

<div>#</div>

<div>Nama</div>

<div>Role</div>

<div>Episode</div>

<div>Poin</div>

</div>

</div>

`;

const body=table.querySelector(".rank-table");

ranking.forEach((user,index)=>{

const totalEpisode=

episodes.filter(

e=>e.editor===user.name

).length;

let medal="";

if(index===0)medal="gold";
else if(index===1)medal="silver";
else if(index===2)medal="bronze";

body.innerHTML+=`

<div class="rank-row">

<div class="rank ${medal}">

${index+1}

</div>

<div>

<strong>${user.name}</strong>

</div>

<div>

${user.role}

</div>

<div>

${totalEpisode}

</div>

<div class="score">

${user.point}

</div>

</div>

`;

});

}
