export function renderDashboard(){

renderStats();

renderProjects();

renderActivity();

renderTarget();

renderLeaderboard();

}

function renderStats(){

const stats=document.querySelector("#stats");

stats.innerHTML=`

<div class="stat-card">

<div>Total Project</div>

<div class="stat-value">18</div>

</div>

<div class="stat-card">

<div>Total Episode</div>

<div class="stat-value">421</div>

</div>

<div class="stat-card">

<div>Published</div>

<div class="stat-value">198</div>

</div>

<div class="stat-card">

<div>Team Member</div>

<div class="stat-value">36</div>

</div>

`;

}

function renderProjects(){

const list=document.querySelector("#projectList");

list.innerHTML="";

const data=[

["Belajar HTML Dasar",82],

["AI Untuk Guru",63],

["Shorts Harian",91],

["Git & GitHub",48]

];

data.forEach(item=>{

list.innerHTML+=`

<div class="project-item">

<div>

<b>${item[0]}</b>

</div>

<div class="progress">

<div style="width:${item[1]}%"></div>

</div>

</div>

`;

});

}

function renderActivity(){

const feed=document.querySelector("#activityFeed");

const data=[

"Aldi menyelesaikan HTML-021",

"Putri upload thumbnail",

"Nabila publish Shorts",

"Budi review AI-004",

"Pak Teddy approve GitHub-008"

];

feed.innerHTML="";

data.forEach(x=>{

feed.innerHTML+=`<div class="feed-item">${x}</div>`;

});

}

function renderTarget(){

const target=document.querySelector("#todayTarget");

target.innerHTML=`

<div class="target-item">

<label>Upload</label>

<div class="progress">

<div style="width:60%"></div>

</div>

</div>

<div class="target-item">

<label>Review</label>

<div class="progress">

<div style="width:35%"></div>

</div>

</div>

<div class="target-item">

<label>Thumbnail</label>

<div class="progress">

<div style="width:80%"></div>

</div>

</div>

`;

}

function renderLeaderboard(){

const board=document.querySelector("#leaderboardMini");

board.innerHTML=`

🥇 Aldi - 840 poin<br><br>

🥈 Putri - 810 poin<br><br>

🥉 Nabila - 790 poin<br><br>

4️⃣ Budi - 760 poin

`;

}
