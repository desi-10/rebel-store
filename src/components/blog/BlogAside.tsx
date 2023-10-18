const h4Style: string = "dark:text-slate-100 font-bold text-2xl"
const aStyle: string = "cursor-pointer dark:text-cyan-500 font-bold"

const TrendingTopicCard = () => {
    return (
        <div className="flex items-center space-x-2">
            <div className="w-16 h-16 dark:bg-slate-500 rounded-lg overflow-hidden">
                <img src="https://images.pexels.com/photos/3579484/pexels-photo-3579484.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=loadd" alt="" />
            </div>
            <div>
                <h4 className="dark:text-slate-100 font-bold text-lg">Php</h4>
                <small>43 Articles</small>
            </div>
        </div>
    )
}

export const TrendingTopic = () => {
    return (
        <section className="dark:bg-slate-700 bg-slate-100 rounded-2xl my-8">
            <div className="flex justify-between p-4">
                <h4 className={h4Style}>✨ Trending topic</h4>
                <a className={aStyle}>View all</a>
            </div>
            
            <ul className="[&>*]:border-t-[1px] [&>*]:dark:border-t-slate-600 [&>*]:border-t-slate-300 [&>*]:p-4">
                <li><TrendingTopicCard /></li>
                <li><TrendingTopicCard /></li>
                <li><TrendingTopicCard /></li>
                <li><TrendingTopicCard /></li>
                <li><TrendingTopicCard /></li>
                <li><TrendingTopicCard /></li>
            </ul>
        </section>
    ) 
}

const PopularPostsCard = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row justify-between gap-2">
            <div className="text-sm space-y-2">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full overflow-hidden">
                        <img src="/assets/assets/blog/3.png" alt="" />
                    </div>
                    <span className="font-bold dark:text-slate-300">Camren Banes</span>
                    <span>May 20, 2021</span>
                </div>
                <h5 className="font-medium text-lg dark:text-slate-100">
                    Tellus Integer Feugiat Scelerisque Varius Morbi Enim
                </h5>
            </div>
            <div className="w-full shrink-0 md:w-24 h-24 rounded-lg overflow-hidden">
                <img src="/assets/assets/blog/2.jpeg" alt="" />
            </div>
        </div>
    )
}

export const PopularPosts = () => {
    return (
        <section className="dark:bg-slate-700 bg-slate-100 rounded-2xl my-8">
            <div className="flex  justify-between p-4">
                <h4 className={h4Style}>🎯 Popular Posts</h4>
                <a className={aStyle}>View all</a>
            </div>
            <ul className="[&>*]:border-t-[1px] [&>*]:dark:border-t-slate-600 [&>*]:border-t-slate-300 [&>*]:p-4">
                <li><PopularPostsCard /></li>
                <li><PopularPostsCard /></li>
                <li><PopularPostsCard /></li>
                <li><PopularPostsCard /></li>
                <li><PopularPostsCard /></li>
                <li><PopularPostsCard /></li>
            </ul>
        </section>
    )
}