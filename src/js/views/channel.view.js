export function renderChannel(channel){
    if(!channel){
        return `
<div class="card">
    <h2>Channel YouTube</h2>
    <p>Belum terhubung.</p>
</div>`;
    }

    return `
<div class="card">
    <h2>${channel.snippet.title}</h2>
    <img src="${channel.snippet.thumbnails.medium.url}" class="channel-thumb">
    <p>${channel.statistics.subscriberCount} subscribers</p>
</div>`;
}
