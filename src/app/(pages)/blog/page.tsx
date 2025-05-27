import { supabase } from "@/lib/supabase";
import Image from "next/image";
import { Suspense } from "react";
import { format } from "date-fns";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export const dynamic = "force-dynamic";

async function BlogList() {
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

  if (error) {
    return (
      <p className="text-red-500">
        Error loading blogs. Please try again later.
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-12">
      {blogs.map((blog, index) => (
        <div key={blog.id}>
          <Link
            href={`/blog/${blog.slug}`}
            className="flex flex-col md:flex-row gap-12 items-stretch group"
          >
            <div className="relative w-full md:w-[320px] lg:w-[420px] aspect-[4/3]">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="rounded-lg object-cover"
              />
            </div>
            <div className="flex flex-col flex-1">
              <div className="flex flex-col gap-3">
                <h2 className="text-3xl font-bold max-w-[600px] group-hover:underline">
                  {blog.title}
                </h2>
                <p className="text-muted-foreground">{blog.summary}</p>
              </div>
              <div className="flex gap-2 mt-6 md:mt-auto items-center">
                <p className="text-sm text-secondary-foreground bg-secondary py-1 px-3 w-fit">
                  {blog.category}
                </p>
                <p className="text-sm">
                  {format(blog.created_at, "dd.MM.yyyy.")}
                </p>
              </div>
            </div>
          </Link>
          {index !== blogs.length - 1 && <Separator className="mt-12" />}
        </div>
      ))}
    </div>
  );
}

export default function BlogPage() {
  return (
    <div>
      <h1 className="text-5xl font-bold mt-12">Blog</h1>
      <div className="mt-12">
        <Suspense fallback={<div>Blogs are loading...</div>}>
          <BlogList />
        </Suspense>
      </div>
    </div>
  );
}
