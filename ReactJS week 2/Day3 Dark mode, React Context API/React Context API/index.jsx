import {createRoot} from "react-dom/client"
import Home from './components/Home'
import App from "./App"
import Error from "./components/Error"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CountryDetails from "./components/CountryDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<Error/>,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/contact",
        element: <h1>Contact Us</h1>,
      },
      {
        path: "/:country",
        element: <CountryDetails />,
      },
    ]
  },
]);
const root = createRoot(document.getElementById("root"))
root.render(<RouterProvider router={router} />)