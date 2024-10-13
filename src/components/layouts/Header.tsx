import { NavLink } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { Icons } from '@/components/icons'
import { appConfig } from '@/config/app'
import { Button, buttonVariants } from '@/components/ui/button'
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

export function Header() {
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
            <a
              href={appConfig.github.url}
              title={appConfig.github.title}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({
                    variant: 'ghost',
                  }),
                  'w-9 px-0'
                )}
              >
                <Icons.gitHub className="w-4 h-4" />
                <span className="sr-only">GitHub</span>
              </div>
            </a>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative w-8 h-8 rounded-full"
                >
                  <Avatar className="w-8 h-8">
                    <AvatarFallback>SC</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">shadcn</p>
                    <p className="text-xs leading-none text-muted-foreground">
                      m@example.com
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Log out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>
      </div>
    </header>
  )
}
