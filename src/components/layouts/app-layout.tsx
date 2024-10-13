import { Outlet } from 'react-router-dom'
import { Header } from './header'



export function Applayout() {
  return (
    <>
      <Header />
      <div className="flex flex-col flex-grow">
        <div className="container flex flex-col flex-grow px-4 md:px-8">
          <Outlet />
        </div>
      </div>
    </>
  )
}
