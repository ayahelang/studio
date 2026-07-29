export default function uploadCard(file){
    return `
<div class="upload-card">
    <div class="upload-name">${file.name}</div>
    <div class="upload-size">${Math.round(file.size/1024/1024)} MB</div>
    <div class="upload-progress"></div>
</div>`;
}
