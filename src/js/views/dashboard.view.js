import {createCard} from "../components/card.js";

export function renderDashboard(){
    return `
<section class="dashboard-grid">
    ${createCard("Project","0","📁")}
    ${createCard("Playlist","0","🎬")}
    ${createCard("Episode","0","🎥")}
    ${createCard("Member","0","👥")}
</section>
<section class="dashboard-panel">
    <h2>Activity</h2>
    <p>Belum ada aktivitas.</p>
</section>`;
}
