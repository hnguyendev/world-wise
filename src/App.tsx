import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
// import { lazy } from "react";

import Homepage from "./pages/Homepage";
import Product from "./pages/Product";
// const Pricing = lazy(() => import("./pages/Pricing"));
import Pricing from "./pages/Pricing";
import Login from "./pages/Login";
import AppLayout from "./pages/AppLayout";
import PageNotFound from "./pages/PageNotFound";
import CountryList from "./components/CountryList";
import CityList from "./components/CityList";
import City from "./components/City";
import Form from "./components/Form";

const router = createBrowserRouter([
  { path: "/", element: <Homepage /> },
  { path: "/product", element: <Product /> },
  { path: "/pricing", element: <Pricing /> },
  { path: "/login", element: <Login /> },
  {
    path: "/app",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Navigate replace to="cities" />,
      },
      {
        path: "cities",
        element: <CityList />,
      },
      { path: `cities/:id`, element: <City /> },
      { path: "countries", element: <CountryList /> },
      { path: "form", element: <Form /> },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
