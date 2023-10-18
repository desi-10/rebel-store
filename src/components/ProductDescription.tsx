const ProductDescription = () => {
  return (
    <section className="mt-5 space-y-5">
      <div>
        <h3 className="p-3 dark:bg-gray-800 bg-slate-100 rounded-lg">Description</h3>
        <p className=" p-3">
          Fashion is a form of self-expression and autonomy at a particular
          period and place and in a specific context, of clothing, footwear,
          lifestyle, accessories, makeup, hairstyle, and body posture.
        </p>
      </div>
      <div>
        <h3 className="p-3 dark:bg-gray-800 bg-slate-100 rounded-lg">Fabric + Care</h3>
        <ul className="p-3">
          <li>Made from a sheer Belgian power micromesh.</li>
          <li>74% Polyamide (Nylon) 26% Elastane (Spandex)</li>
          <li>Adjustable hook & eye closure and straps</li>
          <li>Hand wash in cold water, dry flat</li>
        </ul>
      </div>
      <div>
        <h3 className="p-3 dark:bg-gray-800 bg-slate-100 rounded-lg">How it works</h3>
        <p className="hidden p-3">
          Use this as a guide. Preference is a huge factor — if you're near the
          top of a size range and/or prefer more coverage, you may want to size
          up.
        </p>
      </div>
      <div>
        <h3 className="p-3 dark:bg-gray-800 bg-slate-100 rounded-lg">FAQ</h3>
        <ul className="hidden p-3">
          <li>
            All full-priced, unworn items, with tags attached and in their
            original packaging are eligible for return or exchange within 30
            days of placing your order
          </li>
          <li>
            Please note, packs must be returned in full. We do not accept
            partial returns of packs.
          </li>
          <li>Want to know our full returns policies? Here you go.</li>
          <li>
            Want more info about shipping, materials or care instructions? Here!
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ProductDescription;
