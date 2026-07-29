class Router{

start(){

const user=sessionStorage.getItem("user");

if(user){

location.href="src/pages/dashboard.html";

}else{

location.href="src/pages/login.html";

}

}

}

export default new Router();
