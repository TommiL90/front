import { creator } from "@/services/creator"
import { fetcher } from "@/services/fetcher"
import { zodResolver } from "@hookform/resolvers/zod"
import { AxiosError } from "axios"
import { jwtDecode } from "jwt-decode"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"
import useSWR from "swr"
import { z } from "zod"

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

export const useSignIn = () => {
  const navigate = useNavigate()

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
      
      const tokenDecoded = jwtDecode(token)

      const username = tokenDecoded.sub as string

      localStorage.setItem('@to-do:Token', token)
      localStorage.setItem('@to-do:username', username)

      toast.success(`Login successful! 🎉, welcome ${username}`, {
        id: toastId,
      })

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


  return {
    form,
    onSubmit,
    isSubmitting,
  }
}