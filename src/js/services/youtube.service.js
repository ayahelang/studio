class YouTubeService{
    constructor(){
        this.accessToken=null;
    }

    setAccessToken(token){
        this.accessToken=token;
    }

    async request(path,{
    method="GET",
    query={},
    body=null
}={}){
    if(!this.accessToken){
        throw new Error("YouTube access token belum tersedia.");
    }

    const url=new URL(`${YOUTUBE_CONFIG.apiBase}/${path}`);

    Object.entries(query).forEach(([key,value])=>{
        if(value!==undefined&&value!==null){
            url.searchParams.set(key,value);
        }
    });

    const options={
        method,
        headers:{
            Authorization:`Bearer ${this.accessToken}`
        }
    };

    if(body){
        options.headers["Content-Type"]="application/json";
        options.body=JSON.stringify(body);
    }

    const response=await fetch(url,options);

    if(!response.ok){
        throw new Error(await response.text());
    }

    return await response.json();
}

    async getMyChannel(){
        return this.request("channels",{
            part:"snippet,statistics",
            mine:"true"
        });
    }
}

export default new YouTubeService();
