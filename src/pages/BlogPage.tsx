import LatestArticle from "../components/blog/LatestArticle"
import TopBlogs from "../components/blog/TopBlogs"
import { TrendingTopic, PopularPosts } from "../components/blog/BlogAside"

const BlogPage = () => {
  return (
    <div className="container mx-auto">
      <TopBlogs />
      <section className="grid md:grid-cols-3 mt-8">
        <LatestArticle />
        <aside>
          <TrendingTopic />
          <PopularPosts />
        </aside>
      </section>
    </div>
  )
}

export default BlogPage