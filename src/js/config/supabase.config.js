import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

export const SUPABASE_URL = "https://srpvstearhkmslnqghqa.supabase.co";

export const SUPABASE_ANON_KEY = "sb_publishable_lORkZaujn2YcSI1G5lMtYA_VY4oipbX";

export const supabase = createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);
