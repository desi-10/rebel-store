import LatestArticle from "../components/blog/LatestArticle"
import TopBlogs from "../components/blog/TopBlogs"
import { TrendingTopic, PopularPosts } from "../components/blog/BlogAside"
import Promo from "../components/blog/Promo"

const BlogPage = () => {
  return (
    <div className="container mx-auto">
      <TopBlogs />
      <section className="grid lg:grid-cols-3 mt-8">
        <LatestArticle />
        <aside className="p-4 col-span-3 lg:col-span-1">
          <TrendingTopic />
          <PopularPosts />
        </aside>
      </section>
        <div className="grid md:grid-cols-2 gap-4 p-4">
          <ul className="flex gap-2 cursor-pointer">
            <li className="hover:dark:bg-blue-500 hover:dark:text-slate-100 border rounded-full w-6 h-6 p-4 flex justify-center items-center">1</li>
            <li className="hover:dark:bg-blue-500 hover:dark:text-slate-100 border rounded-full w-6 h-6 p-4 flex justify-center items-center">2</li>
            <li className="hover:dark:bg-blue-500 hover:dark:text-slate-100 border rounded-full w-6 h-6 p-4 flex justify-center items-center">3</li>
            <li className="hover:dark:bg-blue-500 hover:dark:text-slate-100 border rounded-full w-6 h-6 p-4 flex justify-center items-center">4</li>
          </ul>
          <button type="button" className="bg-slate-100 rounded-full md:w-max px-4 py-2 text-slate-900">Show me more</button>
        </div>

        <Promo />
    </div>
  )
}

export default BlogPage