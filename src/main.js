import Router from "./router/router.js";
import AuthService from "./services/auth.service.js";

window.addEventListener("DOMContentLoaded",async()=>{

await AuthService.restoreSession();

Router.start();

});
