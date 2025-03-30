import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

//Imorting the components so main.js can handle the routing for our website.
import Invoice from "./InvoiceFormPage.js";
import WelcomePage from "./WelcomePage.js";

//Handles the url routes for our website
//localhost:3000/ will return the welcomePage component
//localhost:3000/invoice will return the InvoiceFormPage component
const router = createBrowserRouter([
  {
    path: "/",
    element: <WelcomePage />
  },
  {
    path: "/invoice",
    element: <Invoice/>
  }

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);