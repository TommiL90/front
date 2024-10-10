import { Heading, subtitle, titleVariants } from '@/components/heading'
import { Logo } from '@/components/logo'
import { Button, buttonVariants } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'

export const SignUp = () => {
  return (
    <div
      className="relative flex-1 bg-gradient-to-b lg:bg-gradient-to-l from-primary to-background lg:from-[65%] lg:to-[35%] 
"
    >
      <div className="container flex flex-col-reverse w-full min-h-screen lg:flex-row lg:grid lg:grid-cols-2">
        <div className="flex items-center justify-center py-12">
          <Card className="container w-full md:w-[480px] py-12 ">
            <CardHeader>
              <CardTitle className={cn(titleVariants({ size: 'md' }))}>
                Sign Up
              </CardTitle>
              <CardDescription>
                Enter your information to create an account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="first-name">First name</Label>
                    <Input id="first-name" placeholder="Max" required />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="last-name">Last name</Label>
                    <Input id="last-name" placeholder="Robinson" required />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  Create an account
                </Button>
              </div>
              <div className="mt-4">
                <p className="mb-4 text-sm text-center text-card-foreground">
                  {' '}
                  Already have an account?{' '}
                </p>
                <a
                  href="/signup"
                  className={buttonVariants({
                    variant: 'outline',
                    className: 'w-full',
                    size: 'lg',
                  })}
                >
                  Sign in
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="flex items-center justify-center py-12">
          <div className="w-full text-primary-foreground lg:w-[435px] mb-8 lg:mb-0 space-y-4">
            <Logo size="lg" />
            <Heading as="h1" size="md">
              O jeito fácil, grátis
            </Heading>
            <p className={cn(subtitle())}>
              flexível e atrativo de gerenciar seus projetos em uma única
              plataforma.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
