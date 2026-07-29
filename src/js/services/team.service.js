import {supabase} from "../config/supabase.config.js";

class TeamService{
    async getAll(){
        const {data,error}=await supabase
            .from("teams")
            .select("*")
            .order("name",{ascending:true});
        if(error){
            console.error(error);
            return [];
        }
        return data??[];
    }

    async create(team){
        const {error}=await supabase
            .from("teams")
            .insert(team);
        if(error){
            throw error;
        }
    }

    async update(id,data){
        const {error}=await supabase
            .from("teams")
            .update(data)
            .eq("id",id);
        if(error){
            throw error;
        }
    }

    async remove(id){
        const {error}=await supabase
            .from("teams")
            .delete()
            .eq("id",id);
        if(error){
            throw error;
        }
    }
}

export default new TeamService();
