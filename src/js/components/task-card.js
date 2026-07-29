export default function taskCard(task){

    return `
<div class="task-card">

    <div class="task-title">

        Episode ${task.episodes?.episode_number??"-"}

    </div>

    <div class="task-name">

        ${task.episodes?.title??"-"}

    </div>

    <div class="task-status">

        ${task.status}

    </div>

</div>`;

}
