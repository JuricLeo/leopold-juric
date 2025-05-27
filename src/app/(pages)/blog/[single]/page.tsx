import { supabase } from "@/lib/supabase";
import { format } from "date-fns";
import Image from "next/image";
import { Suspense } from "react";
import "@/app/tiptap.css";
import SafeHtml from "@/components/global/safe-html";

export type BlogParamsType = Promise<{ single: string }>;
export type SearchParamsType = Promise<
  Record<string, string | string[] | undefined>
>;

async function SingleBlog({ params }: { params: BlogParamsType }) {
  const { single: slug } = await params;
  let blog;
  let error = null;

  try {
    const { data, error: supabaseError } = await supabase
      .from("blogs")
      .select("*")
      .eq("slug", slug)
      .single();

    if (supabaseError) throw supabaseError;
    blog = data;
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
    <div className="flex flex-col gap-12 donda">
      <div className="flex flex-col md:flex-row gap-12 items-stretch">
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
            <h2 className="text-3xl font-bold max-w-[600px]">{blog.title}</h2>
            <p className="text-muted-foreground">{blog.summary}</p>
          </div>
          <div className="flex gap-2 mt-6 md:mt-auto items-center">
            <p className="text-sm bg-secondary py-1 px-3 w-fit">
              {blog.category}
            </p>
            <p className="text-sm">{format(blog.created_at, "dd.MM.yyyy.")}</p>
          </div>
        </div>
      </div>
      <SafeHtml
        html={blog.content}
        className="tiptap max-w-full lg:max-w-[900px] mx-auto prose prose-sm md:prose-base prose-img:w-full prose-img:max-w-full"
      />
    </div>
  );
}

export default function SingleBlogPage({ params }: { params: BlogParamsType }) {
  return (
    <div className="mt-12">
      <Suspense fallback={<div>The blog is loading...</div>}>
        <SingleBlog params={params} />
      </Suspense>
    </div>
  );
}
