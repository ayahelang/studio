import {supabase} from "../config/supabase.config.js";

class DashboardService{

    async getStatistics(){

        const [
            profiles,
            teams,
            playlists,
            episodes,
            uploads
        ]=await Promise.all([
            supabase.from("profiles").select("*",{count:"exact",head:true}),
            supabase.from("teams").select("*",{count:"exact",head:true}),
            supabase.from("playlists").select("*",{count:"exact",head:true}),
            supabase.from("episodes").select("*",{count:"exact",head:true}),
            supabase.from("uploads").select("*",{count:"exact",head:true})
        ]);

        return{
            users:profiles.count??0,
            teams:teams.count??0,
            playlists:playlists.count??0,
            episodes:episodes.count??0,
            uploads:uploads.count??0
        };

    }

}

export default new DashboardService();
