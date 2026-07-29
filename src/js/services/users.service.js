import {supabase} from "../config/supabase.config.js";

class UsersService{
    async getAll(){
        const {data,error}=await supabase
            .from("profiles")
            .select(`
                id,
                full_name,
                avatar_url,
                created_at,
                roles(name)
            `)
            .order("full_name",{ascending:true});
        if(error){
            console.error(error);
            return [];
        }
        return data??[];
    }
}

export default new UsersService();
