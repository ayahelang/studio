import {supabase} from "../config/supabase.config.js";

class RoleService{
    async all(){
        const {data,error}=await supabase
            .from("roles")
            .select("*")
            .order("id");
        if(error){
            console.error(error);
            return [];
        }
        return data;
    }
}

export default new RoleService();
