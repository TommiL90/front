import { NavLink, useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { LogoPurple } from '../logo-purple'
import { fetcher } from '@/services/fetcher'
import useSWR from 'swr'

interface ProfileResponse {
  id: string
  username: string
  name: string
}

export function Header() {
  const navigate = useNavigate()
  const logout = () => {
    localStorage.removeItem('@to-do:Token')
    localStorage.removeItem('@to-do:username')
    navigate('/signin')
  }

  const { data, error } = useSWR<ProfileResponse>('/users/me', fetcher)

  const name = data?.name.split(' ')
  const firstInitial = name && name.length >= 1 ? name[0].charAt(0) : '0'
  const secondInitial = name && name.length >= 2 ? name[1].charAt(0) : '0'
  const initials = `${firstInitial}${secondInitial}`.toUpperCase()

  if (error) {
    console.log(error)
  }

  return (
    <header className="sticky top-0 z-50 w-full py-2 border-b supports-backdrop-blur:bg-background/60 bg-background/90 backdrop-blur ">
      <div className="container flex items-center px-4 md:px-8 h-14">
        <div className="hidden mr-4 md:flex">
          <NavLink to="/" className="flex items-center mr-6 space-x-2">
            <LogoPurple />
          </NavLink>
        </div>
        <a href="/" className="flex items-center mr-6 space-x-2 md:hidden">
          <LogoPurple size="sm" />
        </a>
        {/* right */}
        <div className="flex items-center justify-between flex-1 space-x-2 md:justify-end">
          <div className="flex-1 w-full md:w-auto md:flex-none">
            {/* <CommandMenu /> */}
          </div>
          <nav className="flex items-center space-x-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative w-8 h-8 rounded-full"
                >
                  <Avatar className="w-8 h-8">
                    <AvatarFallback>{initials}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {data?.name}
                    </p>
                    <p className="text-xs leading-none text-muted-foreground">
                      {data?.username}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <NavLink to="/profile">Profile</NavLink>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={logout}>Log out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>
      </div>
    </header>
  )
}
