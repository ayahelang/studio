export function renderPlaylists(playlists){
    if(playlists.length===0){
        return `
<div class="card">
    <h2>YouTube Playlists</h2>
    <p>Belum ada playlist.</p>
</div>`;
    }

    return `
<div class="playlist-grid">
${playlists.map(item=>`
<div class="playlist-card">
    <img src="${item.snippet.thumbnails.medium.url}">
    <h3>${item.snippet.title}</h3>
    <p>${item.contentDetails.itemCount} video</p>
</div>
`).join("")}
</div>`;
}
