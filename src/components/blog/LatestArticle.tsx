import BlogCard from "./BlogCard"

const LatestArticle = () => {
  return (
    <section className="p-8 col-span-2">
        <h2 className="text-3xl font-bold dark:text-slate-100">Latest Articles 🎈</h2>
        <ul>
            <li><BlogCard /></li>
            <li><BlogCard /></li>
            <li><BlogCard /></li>
            <li><BlogCard /></li>
            <li><BlogCard /></li>
            <li><BlogCard /></li>
        </ul>
    </section>
  )
}

export default LatestArticle