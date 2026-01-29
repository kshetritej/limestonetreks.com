import { LucideArrowRight } from "lucide-react";
import { BlogCard, TBlog } from "../cards/blog-card";
import SectionTemplate from "../templates/section-template";
import { Button } from "../ui/button";

export default async function RecentBlogs() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/blogs/published?page=1&limit=3`,
  );
  const blogs = await response.json();
  const recentBlogs = blogs?.blogs;

  return (
    <>
      <SectionTemplate
        badgeText={<p>BLOGS</p>}
        title={<p>Travel Notes & Trekking Guides</p>}
        buttonLink="/blogs"
        buttonText="See More"
        text={
          <p>
            Insights from the trail — packing tips, route breakdowns, seasonal
            advice, and stories from the mountains to help you plan better.
          </p>
        }
      >
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          {/* {recentBlogs?.map((blog: TBlog) => {
            return <BlogCard key={blog.slug} blog={blog} />;
          })} */}
          <div className="w-full h-120 bg-secondary rounded-md"></div>
          <div className="space-y-2">
            <div className="w-full h-1/2 bg-secondary rounded-md" />
            <div className="w-full h-1/2 bg-secondary rounded-md" />
          </div>
        </div>
        <Button className="mt-4">Explore More <LucideArrowRight/></Button>
      </SectionTemplate>
    </>
  );
}
