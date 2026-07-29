import {supabase} from "../config/supabase.config.js";

class StudentDashboardService{

    async getAssignments(userId){

        const {data,error}=await supabase
            .from("assignments")
            .select(`
                *,
                episodes(
                    id,
                    title,
                    episode_number
                )
            `)
            .eq("assignee_id",userId)
            .order("created_at",{ascending:false});

        if(error){
            console.error(error);
            return [];
        }

        return data??[];

    }

}

export default new StudentDashboardService();
