export default function progressBar(value,max){
    const percent=max===0?0:Math.round((value/max)*100);

    return `
<div class="progress">
    <div class="progress-fill" style="width:${percent}%"></div>
</div>`;
}
