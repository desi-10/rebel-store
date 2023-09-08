const Footer = () => {
  return (
    <section className="py-10">
      <footer className="lg:flex justify-between w-[90%] lg:w-[1000px] mx-auto">
        <div className="flex lg:flex-col space-x-5 lg:space-x-0 mr-10">
          <p className="mb-5">Logo</p>
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
