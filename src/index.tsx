import React from "react"
import ReactDOM from "react-dom/client"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

import "./styles.css"
import ShopItemPage from "./pages/shop-item"
import { CartPage } from "./pages"

const router = createBrowserRouter([
  {
    path: "/",
    element: <ShopItemPage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
])

const rootElement = document.getElementById("root")!
const root = ReactDOM.createRoot(rootElement)

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
