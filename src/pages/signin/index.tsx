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
import { fetcher } from '@/services/fetcher'
import useSWR from 'swr'
import { useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { creator } from '@/services/creator'
import { toast } from 'sonner'
import { AxiosError } from 'axios'
import { jwtDecode } from 'jwt-decode'

const formSchema = z.object({
  username: z
    .string()
    .min(5, {
      message: 'Username must be at least 5 characters.',
    })
    .max(15, {
      message: 'Username must be less than 15 characters.',
    }),

  password: z
    .string()
    .min(5, {
      message: 'Password must be at least 8 characters.',
    })
    .max(15, {
      message: 'Password must be less than 15 characters.',
    }),
})

type FormValues = z.infer<typeof formSchema>

export const SignIn = () => {
  const navigate = useNavigate();
  const { data, error } = useSWR('/', fetcher)

  if (data) {
    console.log(data)
  }

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  })

  const isSubmitting = form.formState.isSubmitting

  const onSubmit = async (values: FormValues) => {
    let toastId: string | number = ''
    try {
      toastId = toast.loading('Sending...🚀')
      const token = await creator<FormValues, string>('/login', {
        arg: values,
      })

      
      toast.success('Login successful! 🎉', {
        id: toastId,
      })

      toast.success(token)

      const tokenDecoded = jwtDecode(token)

      const username = tokenDecoded.sub as string

      localStorage.setItem('@to-do:Token', token);
      localStorage.setItem('@to-do:username', username);
      

      console.log(tokenDecoded)
      
      navigate('/')
    } catch (error) {

      if (error instanceof AxiosError) {
        console.log(error)
        toast.warning(`${error.response?.data} 😢`, {
          id: toastId,
        })
      }
      console.error(error)
    }
  }

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
              O jeito fácil, grátis
            </Heading>
            <p className={cn(subtitle())}>
              flexível e atrativo de gerenciar seus projetos em uma única
              plataforma.
            </p>
            <small>
              <pre>
                <code>{JSON.stringify(data, null, 2)}</code>
              </pre>
            </small>
          </div>
        </div>
        <div className="flex items-center justify-center py-12">
          <Card className="container w-full md:w-[480px] py-8">
            <CardHeader>
              <CardTitle className="text-2xl">Login</CardTitle>
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
                            placeholder="TommiTimix"
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
                  Sign up
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
