import YouTubeService from "./youtube.service.js";

class YouTubePlaylistService{

    async getAll(){
        const result=await YouTubeService.request("playlists",{
            query:{
                part:"snippet,contentDetails,status",
                mine:true,
                maxResults:50
            }
        });

        return result.items??[];
    }

    async create(title,description,privacyStatus="private"){
        return await YouTubeService.request("playlists",{
            method:"POST",
            query:{
                part:"snippet,status"
            },
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

    async update(id,title,description){
        return await YouTubeService.request("playlists",{
            method:"PUT",
            query:{
                part:"snippet"
            },
            body:{
                id,
                snippet:{
                    title,
                    description
                }
            }
        });
    }

}

export default new YouTubePlaylistService();
