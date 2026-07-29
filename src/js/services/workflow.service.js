import {supabase} from "../config/supabase.config.js";

class WorkflowService{
    async getStatuses(){
        const {data,error}=await supabase
            .from("workflow_statuses")
            .select("*")
            .order("sort_order");
        if(error){
            console.error(error);
            return [];
        }
        return data??[];
    }
}

export default new WorkflowService();
