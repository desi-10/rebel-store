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
        <section className="bg-slate-700 rounded-2xl my-8">
            <div className="flex justify-between p-4">
                <h4 className={h4Style}>✨ Trending topic</h4>
                <a className={aStyle}>View all</a>
            </div>
            
            <ul className="[&>*]:border-t-[1px] [&>*]:border-t-slate-600 [&>*]:p-4">
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
        <li className="flex gap-2">
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
            <div className="shrink-0 w-24 h-24 rounded-lg overflow-hidden">
                <img src="/assets/assets/blog/2.jpeg" alt="" />
            </div>
        </li>
    )
}

export const PopularPosts = () => {
    return (
        <section className="bg-slate-700 rounded-2xl my-8">
            <div className="flex justify-between p-4">
                <h4 className={h4Style}>🎯 Popular Posts</h4>
                <a className={aStyle}>View all</a>
            </div>
            <ul className="[&>*]:border-t-[1px] [&>*]:border-t-slate-600 [&>*]:p-4">
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