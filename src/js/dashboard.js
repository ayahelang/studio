import AuthService from "./services/auth.service.js";
import ProfileService from "./services/profile.service.js";
import renderSidebar from "./layouts/sidebar.js";
import renderNavbar from "./layouts/navbar.js";
import renderFooter from "./layouts/footer.js";
import {renderDashboard} from "./views/dashboard.view.js";

const user=await AuthService.getUser();

if(!user){
    location.href="../../index.html";
}

const profile=await ProfileService.me();

document.getElementById("sidebar").innerHTML=renderSidebar(profile);
document.getElementById("navbar").innerHTML=await renderNavbar();
document.getElementById("content").innerHTML=renderDashboard(profile);
document.body.insertAdjacentHTML("beforeend",renderFooter());

const logout=document.getElementById("logoutBtn");

logout.addEventListener("click",async e=>{
    e.preventDefault();
    await AuthService.logout();
});
