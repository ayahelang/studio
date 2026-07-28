export function formatDuration(duration){

if(!duration)return "-";

return duration;

}

export function formatStatus(status){

return status.charAt(0).toUpperCase()+

status.slice(1).toLowerCase();

}

export function truncate(text,length=80){

if(!text)return "";

if(text.length<=length)return text;

return text.substring(0,length)+"...";

}

export function initials(name){

if(!name)return "";

return name

.split(" ")

.map(x=>x[0])

.join("");

}
