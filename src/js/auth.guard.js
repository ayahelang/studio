import { getSession } from "./utils/session.js";

const user=getSession();

if(!user){

    window.location.href="../pages/login.html";

}
