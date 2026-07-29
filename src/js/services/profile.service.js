import {supabase} from "../config/supabase.config.js";

class ProfileService{
    async me(){
        const {data:{user}}=await supabase.auth.getUser();
        if(!user){
            return null;
        }
        const {data,error}=await supabase
            .from("profiles")
            .select("*,roles(name)")
            .eq("id",user.id)
            .single();
        if(error){
            console.error(error);
            return null;
        }
        return data;
    }
}

export default new ProfileService();
