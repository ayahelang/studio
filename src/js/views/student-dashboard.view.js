import taskCard from "../components/task-card.js";

export function renderStudentDashboard(tasks){

    return `

<h1>Dashboard Siswa</h1>

${tasks.map(taskCard).join("")}

`;

}
