import { createBrowserRouter } from 'react-router-dom'

import { Applayout } from './components/layouts/app-layout'

import { Profile } from './pages/profile'
import { SignIn } from './pages/signin'
import { ProtectedRoutes } from './protected-routes'
import { SignUp } from './pages/signup'
import { Dashboard } from './pages/dashboard'
import { NoMatch } from './pages/no-match'

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <ProtectedRoutes />,
      children: [
        {
          path: '',
          element: <Applayout />,
          children: [
            {
              path: '',
              element: <Dashboard />,
            },
            {
              path: 'profile',
              element: <Profile />,
            },
          ],
        },
      ],
    },
    {
      path: '/signin',
      element: <SignIn />,
    },
    {
      path: '/signup',
      element: <SignUp />,
    },
    {
      path: '*',
      element: <NoMatch />,
    },
  ],
  {
    basename: global.basename,
  }
)
