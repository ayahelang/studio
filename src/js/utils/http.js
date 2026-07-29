export async function get(url){
    const response=await fetch(url);
    if(!response.ok){
        throw new Error(response.statusText);
    }
    return await response.json();
}

export async function post(url,data){
    const response=await fetch(url,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    });
    if(!response.ok){
        throw new Error(response.statusText);
    }
    return await response.json();
}
