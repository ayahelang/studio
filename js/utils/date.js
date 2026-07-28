export function today(){

return new Date();

}

export function formatDate(date){

return new Intl.DateTimeFormat(

"id-ID",

{

day:"2-digit",

month:"long",

year:"numeric"

}

).format(new Date(date));

}

export function formatDateTime(date){

return new Intl.DateTimeFormat(

"id-ID",

{

day:"2-digit",

month:"short",

year:"numeric",

hour:"2-digit",

minute:"2-digit"

}

).format(new Date(date));

}

export function daysBetween(a,b){

const one=1000*60*60*24;

return Math.floor(

(Math.abs(new Date(a)-new Date(b)))/one

);

}
