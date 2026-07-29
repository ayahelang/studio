import AuthService from "./services/auth.service.js";
import ProfileService from "./services/profile.service.js";
import DashboardService from "./services/dashboard.service.js";
import renderSidebar from "./layouts/sidebar.js";
import renderNavbar from "./layouts/navbar.js";
import renderFooter from "./layouts/footer.js";
import {renderDashboard} from "./views/dashboard.view.js";

const user=await AuthService.getUser();

if(!user){
    location.href="../../index.html";
}

const profile=await ProfileService.me();
const stats=await DashboardService.getStatistics();

document.getElementById("sidebar").innerHTML=renderSidebar(profile);
document.getElementById("navbar").innerHTML=await renderNavbar(profile);
document.getElementById("content").innerHTML=renderDashboard(stats);
document.body.insertAdjacentHTML("beforeend",renderFooter());

const logout=document.getElementById("logoutBtn");

if(logout){
    logout.addEventListener("click",async e=>{
        e.preventDefault();
        await AuthService.logout();
    });
}
