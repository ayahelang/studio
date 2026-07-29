import activityItem from "../components/activity-item.js";

export function renderActivities(items){

    return`

<section class="card">

<h2>Aktivitas Terbaru</h2>

${items.map(activityItem).join("")}

</section>

`;

}
