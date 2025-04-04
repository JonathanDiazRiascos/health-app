import{createClient} from "@supabase/supabase-js";

const SUPABASE_URL = "https://loxgrevujkgwuhgwgjjs.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxveGdyZXZ1amtnd3VoZ3dnampzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM1NjIxNDYsImV4cCI6MjA1OTEzODE0Nn0.PBt8p8Prr48IvbI4pzyocqESCjKj0IHi7QYwZSk3rz4";

export const supabase = createClient(SUPABASE_URL,SUPABASE_ANON_KEY);