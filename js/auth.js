import {APP} from "./config.js";

let currentUser=null;

export function login(user){

currentUser=user;

sessionStorage.setItem(

APP.storage.user,

JSON.stringify(user)

);

}

export function logout(){

sessionStorage.removeItem(

APP.storage.user

);

location.href="index.html";

}

export function getCurrentUser(){

if(currentUser)return currentUser;

const cache=sessionStorage.getItem(

APP.storage.user

);

if(!cache)return null;

currentUser=JSON.parse(cache);

return currentUser;

}

export function isLoggedIn(){

return getCurrentUser()!=null;

}

export function requireLogin(){

if(!isLoggedIn()){

location.href="index.html";

}

}
