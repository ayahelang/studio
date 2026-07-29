import AuthService from "./services/auth.service.js";
import renderSidebar from "./layouts/sidebar.js";
import renderNavbar from "./layouts/navbar.js";

const user=await AuthService.getUser();

if(!user){
    location.href="../../index.html";
}

document.getElementById("sidebar").innerHTML=renderSidebar();
document.getElementById("navbar").innerHTML=await renderNavbar();

document.getElementById("content").innerHTML=`
<section class="welcome-card">
    <h1>Halo, ${user.user_metadata.full_name} 👋</h1>
    <p>Selamat datang di Silverhawk Studio.</p>
</section>`;
