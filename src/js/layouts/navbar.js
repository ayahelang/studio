import AuthService from "../services/auth.service.js";

export default async function renderNavbar(){
    const user=await AuthService.getUser();
    return `
<header class="navbar">
    <div class="navbar-left">
        <h2>Silverhawk Studio</h2>
    </div>
    <div class="navbar-right">
        <img class="avatar" src="${user.user_metadata.avatar_url}">
        <div class="userinfo">
            <strong>${user.user_metadata.full_name}</strong>
            <small>${user.email}</small>
        </div>
    </div>
</header>`;
}
