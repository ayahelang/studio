import statusBadge from "../components/status-badge.js";
import {formatDate} from "../utils/date.js";

export function renderMyTasks(assignments){
    if(assignments.length===0){
        return `
<section class="card">
    <h2>My Tasks</h2>
    <p>Belum ada tugas yang diberikan.</p>
</section>`;
    }

    return `
<section class="card">
    <h2>My Tasks</h2>
    <table class="table">
        <thead>
            <tr>
                <th>Status</th>
                <th>Deadline</th>
            </tr>
        </thead>
        <tbody>
            ${assignments.map(item=>`
            <tr>
                <td>${statusBadge(item.status)}</td>
                <td>${item.due_date?formatDate(item.due_date):"-"}</td>
            </tr>`).join("")}
        </tbody>
    </table>
</section>`;
}
