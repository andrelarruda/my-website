import React from 'react'
import ReactDOM from 'react-dom/client'
import './i18n'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css"
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min"

import App from './pages/app'
import { ErrorPage } from './pages/error-page'
import { AboutPage } from './pages/about-page'
import { ExperiencesPage } from './pages/experiences-page'
import { SkillsPage } from './pages/skills-page'
import { ContactPage } from './pages/contact-page'
import { ProjectsPage } from './pages/projects-page'
import { HomePage } from './pages/home-page'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App><HomePage /></App>,
    errorElement: <ErrorPage />
  },
  {
    path: "/about",
    element: <App><AboutPage /></App>
  },
  {
    path: "/experiences",
    element: <App><ExperiencesPage /></App>
  },
  {
    path: "/skills",
    element: <App><SkillsPage /></App>
  },
  {
    path: "/projects",
    element: <App><ProjectsPage /></App>
  },
  {
    path: "/contact",
    element: <App><ContactPage /></App>
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>,
)
