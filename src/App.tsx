import { Routes, Route } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Products from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import Categories from "./pages/Categories";
import BlogPage from "./pages/BlogPage";


function App() {
  return (
    <section className="dark:text-slate-400 dark:bg-slate-950">
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/blog" element={<BlogPage />} />
        </Route>
      </Routes>
    </section>
  );
}

export default App;