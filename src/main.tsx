import React from 'react'
import ReactDOM from 'react-dom/client'
import './i18n'
import App from './pages/app'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css"
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min"
import { ErrorPage } from './pages/error-page'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "/about",
    element: <div>About page</div>
  },
  {
    path: "/experiences",
    element: <div>Experiences page</div>
  },
  {
    path: "/skills",
    element: <div>Skills page</div>
  },
  {
    path: "/projects",
    element: <div>Projects page</div>
  },
  {
    path: "/contact",
    element: <div>Contact page</div>
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>,
)
