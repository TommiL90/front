import { creator } from "@/services/creator"
import { zodResolver } from "@hookform/resolvers/zod"
import { AxiosError } from "axios"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"
import { z } from "zod"


const formSchema = z
  .object({
    name: z
      .string()
      .min(5, {
        message: 'Name must be at least 5 characters.',
      })
      .max(50, {
        message: 'Name must be less than 50 characters.',
      })
      .transform(name => {
        return name
          .trim()
          .split(' ')
          .map(word => {
            return word[0].toLocaleUpperCase().concat(word.substring(1))
          })
          .join(' ')
      }),
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
      })
      .regex(/.*[A-Z].*/, 'Password must contain at least one uppercase letter')
      .regex(/.*[a-z].*/, 'Password must contain at least one lowercase letter')
      .regex(/.*\d.*/, 'Password must contain at least one digit')
      .regex(
        /.*[`~<>?,.\/!@#$%^&*()\-_+="\'|{}\[\];:\\].*/,
        'Password must contain at least one special character'
      ),
    confirmPassword: z.string(),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  })

type FormValues = z.infer<typeof formSchema>

export const useSignUp = () => {

  const navigate = useNavigate()

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: '',
      confirmPassword: '',
    },
  })

  const isSubmitting = form.formState.isSubmitting

  const onSubmit = async (values: FormValues) => {
    let toastId: string | number = ''
    try {
      toastId = toast.loading('Sending...🚀')
      await creator<FormValues, string>('/users/register', {
        arg: values,
      })

      toast.success('Registration successful! 🎉 You can now log in.', {
        id: toastId,
      })

      navigate('/signin')
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
    isSubmitting
  }
}