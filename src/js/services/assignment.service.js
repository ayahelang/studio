import {supabase} from "../config/supabase.config.js";

class AssignmentService{
    async getMyAssignments(userId){
        const {data,error}=await supabase
            .from("assignments")
            .select("*")
            .eq("assignee_id",userId)
            .order("created_at",{ascending:false});
        if(error){
            console.error(error);
            return [];
        }
        return data??[];
    }

    async create(payload){
        const {data,error}=await supabase
            .from("assignments")
            .insert(payload)
            .select()
            .single();
        if(error){
            throw error;
        }
        return data;
    }

    async updateStatus(id,status){
        const {error}=await supabase
            .from("assignments")
            .update({status})
            .eq("id",id);
        if(error){
            throw error;
        }
    }
}

export default new AssignmentService();
