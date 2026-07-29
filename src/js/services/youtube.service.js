class YouTubeService{
    constructor(){
        this.accessToken=null;
    }

    setAccessToken(token){
        this.accessToken=token;
    }

    async request(path,params={}){
        if(!this.accessToken){
            throw new Error("YouTube access token belum tersedia.");
        }

        const url=new URL(`https://www.googleapis.com/youtube/v3/${path}`);

        Object.entries(params).forEach(([key,value])=>{
            url.searchParams.set(key,value);
        });

        const response=await fetch(url,{
            headers:{
                Authorization:`Bearer ${this.accessToken}`
            }
        });

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
