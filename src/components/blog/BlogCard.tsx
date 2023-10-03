const BlogCard = () => {
  return (
    <div className="flex py-8 gap-2">
        <ul className="space-y-4">
            <li className="dark:text-slate-100 font-bold">Fringilla Ut Morbi Tincidunt Augue Interdum Velit Euismod In Pellentesque</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati vero perspiciatis ullam ea? Nihil accusamus similique debitis</li>
            <li  className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-full overflow-hidden">
                  <img src="/assets/assets/blog/3.png" alt="" />
              </span>
                <span className="font-bold dark:text-slate-300">Camren Banes</span>
                <span>May 20, 2021</span>
            </li>
          </ul>
          <div className="w-44 h-44 shrink-0 rounded-3xl overflow-hidden">
              <img src="/assets/assets/blog/1.webp" alt="" />
            </div>
    </div>
  )
}

export default BlogCard