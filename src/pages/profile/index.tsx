import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { CalendarIcon, PersonIcon } from '@radix-ui/react-icons'
import { useProfile } from './use-profile'



export const Profile = () => {
  const [isEditing, setIsEditing] = useState(false)

  const { form, isSubmitting, onSubmit, data } = useProfile()

  return (
    <main>
      <Card className="container max-w-2xl mt-16">
        <CardHeader>
          <CardTitle className="text-2xl">User Profile</CardTitle>
          <CardDescription>Edit your profile information</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <PersonIcon className="w-20 h-20 text-gray-400" />
              <div>
                <h2 className="text-2xl font-bold">{data?.name}</h2>
                <p className="text-sm text-gray-500">@{data?.username}</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <CalendarIcon className="w-5 h-5 text-gray-500" />
                <span className="text-sm text-gray-500">
                  Member since{' '}
                  {`${data?.createdAt[0]}/${data?.createdAt[1]}/${data?.createdAt[2]}`}
                </span>
              </div>
              <Separator />
              {isEditing ? (
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="John Doe"
                              disabled={isSubmitting}
                              defaultValue={data?.name}
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            Please enter your full name.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="username"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Username</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="jdhoe90"
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
                    <Button
                      type="submit"
                      className="w-full"
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Loading...' : 'Edit profile'}
                    </Button>
                  </form>
                </Form>
              ) : (
                <div className="space-y-4">
                  <div>
                    <Label>Name</Label>
                    <p>{data?.name}</p>
                  </div>
                  <div>
                    <Label>Username</Label>
                    <p>{data?.username}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </CardContent>
        <CardFooter>
          {!isEditing && (
            <Button onClick={() => setIsEditing(true)}>Edit profile</Button>
          )}
        </CardFooter>
      </Card>
    </main>
  )
}
