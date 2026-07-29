import StudentDashboardService from "../services/student-dashboard.service.js";
import ProfileService from "../services/profile.service.js";
import {renderStudentDashboard} from "../views/student-dashboard.view.js";

const content=document.getElementById("content");

async function init(){

    const me=await ProfileService.me();

    if(!me){

        return;

    }

    const tasks=await StudentDashboardService.getAssignments(me.id);

    content.innerHTML=renderStudentDashboard(tasks);

}

init();
