export function saveSession(user){

    localStorage.setItem(
        "silverhawk_user",
        JSON.stringify(user)
    );

}

export function getSession(){

    const data=localStorage.getItem(
        "silverhawk_user"
    );

    if(!data) return null;

    return JSON.parse(data);

}

export function clearSession(){

    localStorage.removeItem(
        "silverhawk_user"
    );

}
