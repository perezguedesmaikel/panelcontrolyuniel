
import {createClient} from "@supabase/supabase-js";
const supabasekey=process.env.React_APP_SUPABASE_KEY;
const supabaseurl=process.env.React_APP_SUPABASE_URL;
const supabaseServiceKey=process.env.React_APP_SERVICE_KEY;
export const supabase=createClient(supabaseurl,supabasekey);
export const supabaseservicekey=createClient(supabaseurl,supabaseServiceKey);