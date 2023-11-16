import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Login from "./pages/Login";
import AppLayout from "./pages/AppLayout";
import PageNotFound from "./pages/PageNotFound";
import CountryList from "./components/CountryList";
import CityList from "./components/CityList";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

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
        path: "cities",
        element: <CityList />,

        index: true,
      },
      { path: "countries", element: <CountryList /> },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />;
    </QueryClientProvider>
  );
}

export default App;
