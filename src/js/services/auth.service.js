import {SUPABASE_CONFIG}
from "../config/supabase.config.js";

import {createClient}
from
"https://esm.sh/@supabase/supabase-js@2";

const supabase=createClient(

SUPABASE_CONFIG.url,

SUPABASE_CONFIG.anonKey

);

class AuthService{

async loginGoogle(){

const{

error

}=await supabase.auth.signInWithOAuth({

provider:"google",

options:{

redirectTo:

window.location.origin+

"/src/pages/dashboard.html"

}

});

if(error){

console.error(error);

}

}

async restoreSession(){

const{

data

}=await supabase.auth.getSession();

return data.session;

}

async logout(){

await supabase.auth.signOut();

location.href="/";

}

async currentUser(){

const{

data

}=await supabase.auth.getUser();

return data.user;

}

}

export default new AuthService();
