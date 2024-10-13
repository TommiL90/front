import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { SWRConfig } from 'swr'

import { TailwindIndicator } from './components/tailwind-indicator'
import { Toaster } from 'sonner'

export default function App() {
  return (
    <SWRConfig
      value={{
        dedupingInterval: 30000,
      }}
    >
      <RouterProvider router={router} />
      <Toaster richColors={true} expand={true} position="top-right" />
      <TailwindIndicator />
    </SWRConfig>
  )
}
