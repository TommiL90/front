import { Heading, subtitle } from '@/components/heading'
import { Logo } from '@/components/logo'
import { Button, buttonVariants } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { useSignIn } from './use-signin'
import { NavLink } from 'react-router-dom'



export const SignIn = () => {
  const {form, isSubmitting, onSubmit} = useSignIn()
  return (
    <div
      className="flex-1 bg-gradient-to-b lg:bg-gradient-to-r from-primary to-background lg:from-[65%] lg:to-[35%] 
"
    >
      <div className="container w-full min-h-screen lg:grid lg:grid-cols-2">
        <div className="flex items-center justify-center py-12">
          <div className="w-full text-primary-foreground lg:w-[435px] mb-8 lg:mb-0 space-y-4">
            <Logo size="lg" />
            <Heading as="h1" size="md">
              The easy, free way
            </Heading>
            <p className={cn(subtitle())}>
              Manage your tasks with ease. <br />
              Get started now!
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center py-12">
          <Card className="container w-full md:w-[480px] py-8">
            <CardHeader>
              <CardTitle className="text-2xl">Sign In</CardTitle>
              <CardDescription>
                Enter your email below to login to your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Username</FormLabel>
                        <FormControl>
                          <Input
                            placeholder=""
                            disabled={isSubmitting}
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          This is your register username.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Username</FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            placeholder="********"
                            disabled={isSubmitting}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    className="w-full"
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Loading...' : 'Login'}
                  </Button>
                </form>
              </Form>
              <div className="mt-4">
                <p className="mb-4 text-sm text-center text-card-foreground">
                  {' '}
                  Don't have an account?{' '}
                </p>
                <NavLink
                  to="/signup"
                  className={buttonVariants({
                    variant: 'outline',
                    className: 'w-full',
                    size: 'lg',
                  })}
                >
                     Sign up
                </NavLink>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
