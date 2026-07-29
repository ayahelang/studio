import YouTubeService from "./youtube.service.js";

class YouTubePlaylistService{
    async getAll(){
        const response=await YouTubeService.request("playlists",{
            part:"snippet,contentDetails,status",
            mine:"true",
            maxResults:50
        });
        return response.items??[];
    }

    async create(title,description,privacyStatus="private"){
        return await YouTubeService.request("playlists",{
            part:"snippet,status"
        },{
            method:"POST",
            body:{
                snippet:{
                    title,
                    description
                },
                status:{
                    privacyStatus
                }
            }
        });
    }
}

export default new YouTubePlaylistService();
