import statCard from "../components/stat-card.js";

export function renderDashboard(stat){

    return`

<section class="stat-grid">

${statCard("Users",stat.users,"👤")}

${statCard("Teams",stat.teams,"👥")}

${statCard("Playlists",stat.playlists,"📂")}

${statCard("Episodes",stat.episodes,"🎬")}

${statCard("Uploads",stat.uploads,"☁️")}

</section>

<div id="dashboardCharts"></div>

`;

}
