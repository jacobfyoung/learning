import { supabase } from "$lib/supabase";

export async function load() {
  const { data } = await supabase.from("maps").select();
  return {
    maps: data ?? [],
  };
}