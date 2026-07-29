import {supabase} from "../config/supabase.config.js";

class UploadService{
    async upload(file,path){
        const {data,error}=await supabase.storage
            .from("videos")
            .upload(path,file,{
                upsert:true
            });

        if(error){
            throw error;
        }

        return data;
    }

    async remove(path){
        const {error}=await supabase.storage
            .from("videos")
            .remove([path]);

        if(error){
            throw error;
        }
    }
}

export default new UploadService();
