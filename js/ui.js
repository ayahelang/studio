import {Sidebar} from "../components/sidebar.js";

import {Navbar} from "../components/navbar.js";

export function renderLayout(page,title){

document.querySelector("#sidebar").innerHTML=Sidebar(page);

document.querySelector("#navbar").innerHTML=Navbar(title);

}
