import DashboardService from "../services/dashboard.service.js";
import {renderDashboard} from "../views/dashboard.view.js";

const content=document.getElementById("content");

async function init(){

    const stat=await DashboardService.getStatistics();

    content.innerHTML=renderDashboard(stat);

}

init();
