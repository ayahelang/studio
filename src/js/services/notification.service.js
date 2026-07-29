import {supabase} from "../config/supabase.config.js";

class NotificationService{

    async unread(userId){

        const {data}=await supabase
            .from("notifications")
            .select("*")
            .eq("profile_id",userId)
            .eq("is_read",false)
            .order("created_at",{ascending:false});

        return data??[];

    }

}

export default new NotificationService();
