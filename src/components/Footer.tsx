const Footer = () => {
  return (
    <section className="py-10">
      <footer className="lg:flex justify-between w-[90%] lg:w-[1000px] mx-auto">
        <div className="flex items-center lg:flex-col space-x-5 lg:space-x-0 mr-10 mb-5">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img
              src="/assets/02ec642b-414e-43fd-8b61-e5992c0b4868.JPG"
              alt=""
              className="w-full h-full"
            />
          </div>
          <div className="flex lg:block space-x-3 text-sm">
            <p>Facebook</p>
          </div>
        </div>

        <article className="w-full grid grid-cols-2 md:grid-cols-4 gap-5 justify-between">
          <div>
            <h5 className="font-bold mb-5">Getting started</h5>
            <p>Release notes</p>
            <p>Release notes</p>
            <p>Release notes</p>
            <p>Release notes</p>
          </div>
          <div>
            <h5 className="font-bold mb-5">Explore</h5>
            <p>Release notes</p>
            <p>Release notes</p>
            <p>Release notes</p>
            <p>Release notes</p>
          </div>
          <div>
            <h5 className="font-bold mb-5">Resources</h5>
            <p>Release notes</p>
            <p>Release notes</p>
            <p>Release notes</p>
            <p>Release notes</p>
          </div>
          <div>
            <h5 className="font-bold mb-5">Community</h5>
            <p>Release notes</p>
            <p>Release notes</p>
            <p>Release notes</p>
            <p>Release notes</p>
          </div>
        </article>
      </footer>
    </section>
  );
};

export default Footer;
