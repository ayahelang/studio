import AuthService from "./services/auth.service.js";

const btn = document.getElementById("googleLogin");

btn.addEventListener("click", async () => {

    btn.disabled = true;

    btn.textContent = "Menghubungkan...";

    await AuthService.loginGoogle();

});
