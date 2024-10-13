import api from "@/services/api"
import { creator } from "@/services/creator"
import { fetcher } from "@/services/fetcher"
import type { ToDoResponse } from "@/types"
import { zodResolver } from "@hookform/resolvers/zod"
import { AxiosError } from "axios"
import { type ChangeEvent, useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import useSWR from "swr"
import { useDebouncedCallback } from "use-debounce"
import { z } from "zod"


const formSchema = z.object({
  title: z
    .string()
    .min(5, {
      message: 'Name must be at least 5 characters.',
    })
    .max(15, {
      message: 'Name must be less than 15 characters.',
    }),
  description: z
    .string()
    .min(5, {
      message: 'Username must be at least 5 characters.',
    })
    .max(250, {
      message: 'Username must be less than 250 characters.',
    }),
})

type FormValues = z.infer<typeof formSchema>


export const useToDo = () => {
  const [search, setSearch] = useState('')
  const [open, setOpen] = useState(false)

  const url = `/todo?q=${encodeURIComponent(search)}`
  const { data, isLoading, error, mutate } = useSWR<ToDoResponse[]>(
    url,
    fetcher
  )

  const handleSearch = useDebouncedCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      console.log(e.target.value)
      setSearch(e.target.value)
    },
    500
  )

  const handleChangeStatus = async (id: string) => {
    let toastId: string | number = ''
    try {
      toastId = toast.loading('Updating task status...')
      await api.patch(`/todo/${id}`)
      await mutate()
      toast.success('Task status updated successfully', {
        id: toastId,
      })
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data, {
          id: toastId,
        })
      }
      console.log(error)
    }
  }

  const handleDelete = async (id: string) => {
    let toastId: string | number = ''
    try {
      toastId = toast.loading('Deleting task...')
      await api.delete(`/todo/${id}`)
      await mutate()
      toast.success('Deleted task', {
        id: toastId,
      })
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data, {
          id: toastId,
        })
      }
      console.log(error)
    }
  }



  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      description: '',
    },
  })

  const onSubmit = async (data: FormValues) => {
    let toastId: string | number = ''
    try {
      toastId = toast.loading('Creating task...')
      await creator<FormValues, ToDoResponse>('/todo', {
        arg: data,
      })
      await mutate()
      toast.success('Task created successfully', {
        id: toastId,
      })
      setOpen(false)
      form.reset()
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data, {
          id: toastId,
        })
      }
      console.log(error)
    }
  }
  return {  
    data,
    isLoading,
    error,
    handleSearch,
    handleChangeStatus,
    handleDelete,
    open,
    setOpen,
    form,
    onSubmit
  }
}
