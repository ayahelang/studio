import DashboardService from "../services/dashboard.service.js";
import ActivityService from "../services/activity.service.js";
import {renderDashboard} from "../views/dashboard.view.js";
import {renderActivities} from "../views/activity.view.js";

const content=document.getElementById("content");

async function init(){

    const [stat,activities]=await Promise.all([
        DashboardService.getStatistics(),
        ActivityService.latest()
    ]);

    content.innerHTML=
        renderDashboard(stat)+
        renderActivities(activities);

}

init();
