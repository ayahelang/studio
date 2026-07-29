export default function pagination(page,total){
    let html=`<div class="pagination">`;
    for(let i=1;i<=total;i++){
        html+=`
<button class="page-btn ${i===page?"active":""}" data-page="${i}">
    ${i}
</button>`;
    }
    html+="</div>";
    return html;
}
