import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

import { HomePage } from './home-page'
import { AboutPage } from './about-page'
import { ExperiencesPage } from './experiences-page'
import { SkillsPage } from './skills-page'
import { ProjectsPage } from './projects-page'
import { ContactPage } from './contact-page'
import { RootLayout } from '../layouts/root-layout'
import { ErrorPage } from './error-page'


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'experiences',
        element: <ExperiencesPage />
      },
      {
        path: 'skills',
        element: <SkillsPage />
      },
      {
        path: 'projects',
        element: <ProjectsPage />
      },
      {
        path: 'contact',
        element: <ContactPage />
      },
    ],
  }
])

export function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}