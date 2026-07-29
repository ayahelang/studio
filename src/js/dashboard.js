import AuthService from "./services/auth.service.js";

const session = await AuthService.getSession();

if (!session) {

    location.href = "../../index.html";

}

const user = await AuthService.getUser();

document.getElementById("content").innerHTML = `

<h1>Halo ${user.user_metadata.full_name}</h1>

<p>${user.email}</p>

<img
src="${user.user_metadata.avatar_url}"
width="80"
style="border-radius:50%;">

`;
