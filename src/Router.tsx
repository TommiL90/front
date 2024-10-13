import { createBrowserRouter } from 'react-router-dom'

import { Applayout } from './components/layouts/AppLayout'

import NoMatch from './pages/NoMatch'
import Dashboard from './pages/Dashboard'
import Empty from './pages/Empty'
import Sample from './pages/Sample'
import { SignUp } from './pages/SignInUp'
import { SignIn } from './pages/signin'

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Applayout />,
      children: [
        {
          path: '',
          element: <Dashboard />,
        },
        {
          path: 'sample',
          element: <Sample />,
        },
        {
          path: 'empty',
          element: <Empty />,
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
