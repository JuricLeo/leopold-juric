const LEGACY_SUPABASE_HOSTS = new Set(["nnqogevbpqixisobkvbg.supabase.co"]);

export function normalizeSupabasePublicUrl(url: string) {
  if (!url) return url;

  const currentSupabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  if (!currentSupabaseUrl) return url;

  try {
    const parsed = new URL(url);
    if (!LEGACY_SUPABASE_HOSTS.has(parsed.hostname)) return url;

    const current = new URL(currentSupabaseUrl);
    parsed.protocol = current.protocol;
    parsed.hostname = current.hostname;
    parsed.port = current.port;

    return parsed.toString();
  } catch {
    return url;
  }
}
