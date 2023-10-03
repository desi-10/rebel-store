import BlogCard from "./BlogCard"

const TopBlogs = () => {
  return (
    <section className="grid md:grid-cols-2">
        <div className="space-y-4 p-8">
            <div className="h-[30rem] rounded-3xl overflow-hidden">
              <img src="https://images.pexels.com/photos/6168061/pexels-photo-6168061.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
            </div>
          <ul className="space-y-4">
            <li className="dark:text-slate-100 text-2xl font-bold">Fringilla Ut Morbi Tincidunt Augue Interdum Velit Euismod In Pellentesque</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati vero perspiciatis ullam ea? Nihil accusamus similique debitis</li>
            <li  className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-full overflow-hidden">
                  <img src="https://ciseco-reactjs.vercel.app/static/media/Image-7.c88583919650f636b191.png" alt="" />
              </span>
                <span className="font-bold dark:text-slate-300">Camren Banes</span>
                <span>May 20, 2021</span>
            </li>
          </ul>
        </div>
        <div>
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
    </section>
  )
}

export default TopBlogs