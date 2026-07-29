export default function statCard(title,value,icon){

    return `
<div class="stat-card">

    <div class="stat-icon">

        ${icon}

    </div>

    <div class="stat-info">

        <div class="stat-value">

            ${value}

        </div>

        <div class="stat-title">

            ${title}

        </div>

    </div>

</div>`;

}
