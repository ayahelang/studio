export default function notificationBadge(total){

    if(total===0){

        return "";

    }

    return `
<span class="notification-badge">

    ${total}

</span>`;

}
