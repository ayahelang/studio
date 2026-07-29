import YouTubeService from "./youtube.service.js";

class ChannelService{
    async current(){
        const result=await YouTubeService.getMyChannel();

        if(!result.items?.length){
            return null;
        }

        return result.items[0];
    }
}

export default new ChannelService();
