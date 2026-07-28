export function Sidebar(active="dashboard"){

return `

<aside class="sidebar">

<div class="brand">

<div class="logo">

🎬

</div>

<div>

<h2>SilverTube</h2>

<span>Studio v1</span>

</div>

</div>

<nav class="menu">

<a href="dashboard.html" class="${active==="dashboard"?"active":""}">

🏠 Dashboard

</a>

<a href="project.html" class="${active==="project"?"active":""}">

🎬 Projects

</a>

<a href="episode.html" class="${active==="episode"?"active":""}">

📺 Episodes

</a>

<a href="playlist.html" class="${active==="playlist"?"active":""}">

📁 Playlists

</a>

<a href="team.html" class="${active==="team"?"active":""}">

👥 Team

</a>

<a href="leaderboard.html" class="${active==="leaderboard"?"active":""}">

🏆 Leaderboard

</a>

<a href="calendar.html" class="${active==="calendar"?"active":""}">

📅 Calendar

</a>

<a href="analytics.html" class="${active==="analytics"?"active":""}">

📈 Analytics

</a>

<a href="settings.html" class="${active==="settings"?"active":""}">

⚙ Settings

</a>

</nav>

<div class="sidebar-footer">

<div class="version">

SilverTube Studio

Version 1.0

</div>

</div>

</aside>

`;

}
