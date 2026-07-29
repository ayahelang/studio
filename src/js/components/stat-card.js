export default function statCard(title,value,icon,color="var(--primary)"){
    return`
<div class="stat-card">
    <div class="stat-icon" style="background:${color}">
        ${icon}
    </div>
    <div class="stat-info">
        <div class="stat-title">${title}</div>
        <div class="stat-value">${value}</div>
    </div>
</div>`;
}
