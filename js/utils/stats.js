import {episodes} from "../data/episodes.js";

export function getEpisodeCount(projectId){

return episodes.filter(
e=>e.projectId===projectId
).length;

}

export function getPublishedCount(projectId){

return episodes.filter(
e=>e.projectId===projectId &&
e.status==="Published"
).length;

}

export function getProgress(projectId){

const total=getEpisodeCount(projectId);

if(total===0)return 0;

return Math.round(
(getPublishedCount(projectId)/total)*100
);

}
