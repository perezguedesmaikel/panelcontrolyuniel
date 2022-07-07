
import {createClient} from "@supabase/supabase-js";
const supabasekey=process.env.React_APP_SUPABASE_KEY;
const supabaseurl=process.env.React_APP_SUPABASE_URL;
export const supabase=createClient(supabaseurl,supabasekey);