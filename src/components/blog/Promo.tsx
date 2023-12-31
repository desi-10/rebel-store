const Promo = () => {
  return (
    <section className="relative grid lg:grid-cols-2 mt-8 dark:bg-slate-800 bg-slate-100 p-4 md:p-16 rounded-3xl">
        <div className="space-y-8">
            <h1 className="text-5xl font-bold">Don't miss out on special offers</h1>
            <p className="text-xl">Register to receive news about the latest, savings combos, discount codes...</p>
            <ul>
                <li className="space-x-2 mt-2">
                    <span className="bg-blue-300 px-3 rounded-full text-blue-600">01</span>
                    <span>Savings combos</span>
                </li>
                <li className="space-x-2 mt-2">
                    <span className="bg-blue-300 px-3 rounded-full text-blue-600">02</span>
                    <span>Freeship</span>
                </li>
                <li className="space-x-2 mt-2">
                    <span className="bg-blue-300 px-3 rounded-full text-blue-600">03</span>
                    <span>Premium magazines</span>
                </li>
            </ul>
            <input type="email" placeholder="Enter your email" className="dark:bg-slate-900 shadow-lg px-6 py-3 rounded-full w-full" />
        </div>
        <div className="lg:absolute lg:bottom-0 lg:right-0 lg:h-full lg:scale-105 lg:mb-[12px] mt-8">
            <img src="/assets/assets/blog/4.png" alt="" className="lg:h-full" />
        </div>
    </section>
  )
}

export default Promo