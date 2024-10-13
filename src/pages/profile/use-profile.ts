import { fetcher } from "@/services/fetcher"
import { updater } from "@/services/updater"
import type { ProfileResponse } from "@/types"
import { zodResolver } from "@hookform/resolvers/zod"
import { AxiosError } from "axios"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import useSWR from "swr"
import { z } from "zod"



const formSchema = z.object({
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
})

type FormValues = z.infer<typeof formSchema>

export const useProfile = () => {

  const { data, mutate } = useSWR<ProfileResponse>('/users/me', fetcher, {
    revalidateOnFocus: false,
    revalidateIfStale: false,
  })

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      username: '',
    },
  })

  const isSubmitting = form.formState.isSubmitting

  const onSubmit = async (values: FormValues) => {
    let toastId: string | number = ''
    try {
      toastId = toast.loading('Sending...🚀')
      await updater<FormValues, string>('/users/me', {
        arg: values,
      })

      toast.success('Registration successful! 🎉 ', {
        id: toastId,
      })
      form.reset()
      mutate()
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

  useEffect(() => {
    if (data) {
      form.reset({
        name: data.name,
        username: data.username,
      })
    }
  }, [data, form])

  return {
    form,
    onSubmit,
    isSubmitting,
    data,
  }

}