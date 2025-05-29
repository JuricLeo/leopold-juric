import { supabase } from "@/lib/supabase";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let blogs = [];
  let error = null;

  try {
    const { data, error: supabaseError } = await supabase
      .from("blogs")
      .select("*")
      .eq("status", "published")
      .order("created_at", { ascending: false });

    if (supabaseError) throw supabaseError;
    blogs = data;
  } catch (err) {
    console.error(err);
    error = err;
  }

  const blogEntries: MetadataRoute.Sitemap = blogs.map(
    ({ slug, created_at }) => ({
      url: `https://leopold-juric.com/blog/${slug}`,
      lastModified: new Date(created_at),
      changeFrequency: "monthly",
      priority: 0.7,
    })
  );

  return [
    {
      url: "https://leopold-juric.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://leopold-juric.com/work",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://leopold-juric.com/blog",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...blogEntries,
  ];
}
