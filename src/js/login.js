import AuthService from "./services/auth.service.js";

document
.getElementById("googleLogin")
.addEventListener("click",()=>{

AuthService.loginGoogle();

});
