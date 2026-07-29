import {supabase} from "../config/supabase.config.js";

class DashboardService{
    async count(table){
        const {count,error}=await supabase
            .from(table)
            .select("*",{count:"exact",head:true});
        if(error){
            console.error(error);
            return 0;
        }
        return count??0;
    }
    async getStatistics(){
        const [
            users,
            playlists,
            projects,
            episodes,
            uploads
        ]=await Promise.all([
            this.count("profiles"),
            this.count("playlists"),
            this.count("projects"),
            this.count("episodes"),
            this.count("uploads")
        ]);
        return{
            users,
            playlists,
            projects,
            episodes,
            uploads,
            published:0
        };
    }
}

export default new DashboardService();
