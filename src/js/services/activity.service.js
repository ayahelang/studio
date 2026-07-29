import {supabase} from "../config/supabase.config.js";

class ActivityService{

    async latest(limit=10){

        const {data}=await supabase

            .from("activity_logs")

            .select("*")

            .order("created_at",{ascending:false})

            .limit(limit);

        return data??[];

    }

}

export default new ActivityService();
