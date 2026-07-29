import { supabase } from "../config/supabase.config.js";

class UserService{

    async saveUser(user){

        const profile={

            id:user.id,

            email:user.email,

            full_name:user.user_metadata.full_name,

            avatar_url:user.user_metadata.avatar_url

        };

        const {error}=await supabase
            .from("users")
            .upsert(profile);

        if(error){

            console.error(error);

        }

    }

}

export default new UserService();
