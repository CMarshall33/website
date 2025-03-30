import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Invoice from "./pages/InvoiceFormPage.js";
import WelcomePage from "./pages/WelcomePage.js";
import CustomerOrderPage from "./pages/CustomerOrderPage.js";
const router = createBrowserRouter([
  {
    path: "/",
    element: <WelcomePage />
  },
  {
    path: "/invoice",
    element: <Invoice/>
  },
  {
    path: "/orderForm",
    element: <CustomerOrderPage/>
  }

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);