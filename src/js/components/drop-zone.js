export default function dropZone(id="dropZone"){
    return `
<div id="${id}" class="drop-zone">
    <div class="drop-zone-icon">🎬</div>
    <h3>Drag & Drop Video</h3>
    <p>atau klik untuk memilih file</p>
    <input type="file" accept="video/*" multiple hidden>
</div>`;
}
