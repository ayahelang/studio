import statCard from "../components/stat-card.js";

export function renderDashboard(stats){
    return`
<div class="stat-grid">
    ${statCard("Users",stats.users,"👥","#2563eb")}
    ${statCard("Playlists",stats.playlists,"🎬","#9333ea")}
    ${statCard("Projects",stats.projects,"📁","#16a34a")}
    ${statCard("Episodes",stats.episodes,"🎥","#ea580c")}
    ${statCard("Uploads",stats.uploads,"📤","#0891b2")}
    ${statCard("Published",stats.published,"📺","#dc2626")}
</div>`;
}
