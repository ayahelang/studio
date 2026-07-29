import { supabase } from "../config/supabase.config.js";

class AuthService {

    async loginGoogle() {

        const { error } = await supabase.auth.signInWithOAuth({

            provider: "google",

            options: {

                redirectTo:
                    window.location.origin +
                    "/src/pages/dashboard.html"

            }

        });

        if (error) {

            console.error(error.message);

            alert(error.message);

        }

    }

    async getSession() {

        const { data } = await supabase.auth.getSession();

        return data.session;

    }

    async getUser() {

        const { data } = await supabase.auth.getUser();

        return data.user;

    }

    async logout() {

        await supabase.auth.signOut();

        location.href = "../../index.html";

    }

}

export default new AuthService();
