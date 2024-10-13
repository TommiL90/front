import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { CheckIcon, TrashIcon } from '@radix-ui/react-icons'

export default function Dashboard() {
  return (
    <main className="py-8 space-y-6">
      <section className="flex gap-4 lg:w-2/3">
        <Input
          type="search"
          placeholder="Pesquisar por tarefa ..."
          className="bg-white"
        />
        <Dialog>
          <DialogTrigger asChild>
            <Button>Adicionar nova tarefa</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid items-center grid-cols-4 gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  defaultValue="Pedro Duarte"
                  className="col-span-3"
                />
              </div>
              <div className="grid items-center grid-cols-4 gap-4">
                <Label htmlFor="username" className="text-right">
                  Username
                </Label>
                <Input
                  id="username"
                  defaultValue="@peduarte"
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </section>
      <section className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 10 }).map((_, index) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          <Card key={index}>
            <CardHeader className="flex flex-row">
              <div className="space-y-4">
                <CardTitle>
                  {' '}
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </CardTitle>
                <CardDescription>
                  <ul>
                    <li>
                      Creada: <strong>10/22/2023</strong>
                    </li>
                    <li>
                      Finalizada: <strong>10/22/2023</strong>
                    </li>
                  </ul>
                </CardDescription>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="icon">
                  {' '}
                  <TrashIcon className="w-6 h-6" />
                </Button>
                <Button variant="outline" size="icon">
                  {' '}
                  <CheckIcon className="w-6 h-6" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="w-full line-clamp-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
              quisquam tempora eum, magni officiis hic corrupti ducimus adipisci
              aliquam doloribus alias dignissimos cum? Dolorem excepturi minima
              dignissimos ipsa voluptate deleniti.
            </CardContent>

            <CardFooter className="justify-end mt-4">
              <Button variant="outline">Details</Button>
            </CardFooter>
          </Card>
        ))}
      </section>
    </main>
  )
}
