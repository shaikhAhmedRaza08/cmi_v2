import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Products from "./components/Products";
import Cart from "./components/Cart";
import FeaturedProducts from "./components/FeaturedProducts";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "", index: true, element: <Products /> },
        { path: "/featuredProducts", element: <FeaturedProducts /> },
        { path: "/cart", element: <Cart /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
