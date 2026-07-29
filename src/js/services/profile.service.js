import {supabase} from "../config/supabase.config.js";

class ProfileService{
    async me(){
        const {data:{user}}=await supabase.auth.getUser();
        if(!user){
            return null;
        }
        const {data,error}=await supabase
            .from("profiles")
            .select(`
                id,
                full_name,
                avatar_url,
                email,
                role_id,
                is_active,
                last_login,
                created_at,
                roles(name)
            `)
            .eq("id",user.id)
            .single();
        if(error){
            console.error(error);
            return null;
        }
        return data;
    }

    async update(data){
        const {data:{user}}=await supabase.auth.getUser();
        if(!user){
            return false;
        }
        const {error}=await supabase
            .from("profiles")
            .update(data)
            .eq("id",user.id);
        if(error){
            console.error(error);
            return false;
        }
        return true;
    }
}

export default new ProfileService();
