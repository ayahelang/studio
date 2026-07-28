export function renderNavbar(title){

const nav=document.querySelector("#navbar");

if(!nav) return;

const today=new Date();

const date=today.toLocaleDateString("id-ID",{

weekday:"long",

day:"numeric",

month:"long",

year:"numeric"

});

nav.innerHTML=`

<div class="navbar">

<div>

<h1>${title}</h1>

<p>${date}</p>

</div>

<div class="navbar-right">

<div class="notification">

🔔

<span class="badge">

5

</span>

</div>

<div class="user">

<img src="assets/avatar.png">

<div>

<b>Teddy Mulyana</b>

<small>

Owner

</small>

</div>

</div>

</div>

</div>

`;

}
