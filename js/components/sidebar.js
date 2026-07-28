export function renderSidebar(){

const sidebar=document.querySelector("#sidebar");

if(!sidebar) return;

sidebar.innerHTML=`

<div class="sidebar-header">

<div class="logo-circle">

🎬

</div>

<div>

<h2>SilverTube</h2>

<p>Studio v1</p>

</div>

</div>

<nav class="sidebar-menu">

<a href="dashboard.html" class="active">

🏠 Dashboard

</a>

<a href="project.html">

🎬 Projects

</a>

<a href="episode.html">

📺 Episodes

</a>

<a href="playlist.html">

📂 Playlists

</a>

<a href="team.html">

👥 Team

</a>

<a href="leaderboard.html">

🏆 Leaderboard

</a>

<a href="analytics.html">

📈 Analytics

</a>

<a href="settings.html">

⚙ Settings

</a>

</nav>

<div class="sidebar-footer">

SilverTube Studio

<br>

Version 1.0

</div>

`;

}
