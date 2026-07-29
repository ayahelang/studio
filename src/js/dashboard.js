import AuthService
from "./services/auth.service.js";

import AuthStore
from "./stores/auth.store.js";

const user=

await AuthService.currentUser();

if(!user){

location.href="/";

}

AuthStore.setUser(user);

document.querySelector(

"#content"

).innerHTML=`

<h1>

Halo ${user.user_metadata.full_name}

👋

</h1>

<p>

${user.email}

</p>

`;
