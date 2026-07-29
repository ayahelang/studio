export default function activityItem(item){

    return`

<div class="activity-item">

    <div class="activity-title">

        ${item.action}

    </div>

    <div class="activity-time">

        ${new Date(item.created_at).toLocaleString("id-ID")}

    </div>

</div>`;

}
