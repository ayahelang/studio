export function createCard(title,value,icon=""){
    return `
<div class="card">
    <div class="card-icon">${icon}</div>
    <div class="card-content">
        <div class="card-title">${title}</div>
        <div class="card-value">${value}</div>
    </div>
</div>`;
}
