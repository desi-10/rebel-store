import { Routes, Route } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Products from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import BlogPage from "./pages/BlogPage";
import Categories from "./pages/Categories";

function App() {
  return (
    <section className="text-slate-400 bg-slate-950">
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/categories" element={<Categories />} />
        </Route>
      </Routes>
    </section>
  );
}

export default App;
