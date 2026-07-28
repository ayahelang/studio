export function $(selector){

return document.querySelector(selector);

}

export function $all(selector){

return document.querySelectorAll(selector);

}

export function create(tag,className=""){

const el=document.createElement(tag);

if(className)el.className=className;

return el;

}

export function uuid(){

return crypto.randomUUID();

}

export function randomColor(){

const colors=[

"#ef4444",

"#3b82f6",

"#22c55e",

"#f59e0b",

"#8b5cf6",

"#ec4899",

"#06b6d4"

];

return colors[Math.floor(Math.random()*colors.length)];

}
