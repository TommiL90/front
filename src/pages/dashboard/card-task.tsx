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
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { CheckIcon, TrashIcon } from '@radix-ui/react-icons'
import { useToDo } from './use-todo'
import { TaskDetail } from './task-detail'
import type { ToDoResponse } from '@/types'


interface CardTaskProps {
  todo: ToDoResponse
}

export const CardTask = ({ todo }: CardTaskProps) => {
  const { handleChangeStatus, handleDelete } = useToDo()
  return (
    <Card key={todo.id}>
      <CardHeader className="flex flex-row justify-between">
        <div className="space-y-4">
          <CardTitle>{todo.title}</CardTitle>
          <CardDescription>
            <ul>
              <li>
                Created:{' '}
                <strong>{`${todo.createdAt[2]}/${todo.createdAt[1]}/${todo.createdAt[0]}`}</strong>
              </li>
              <li>
                Finished:{' '}
                <strong>
                  {todo.completedAt
                    ? `${todo.createdAt[2]}/${todo.createdAt[1]}/${todo.createdAt[0]}`
                    : '-'}
                </strong>
              </li>
            </ul>
          </CardDescription>
        </div>
        <div className="flex gap-2">
          <Button
            variant="destructive"
            size="icon"
            onClick={() => handleDelete(todo.id)}
          >
            {' '}
            <TrashIcon className="w-6 h-6" />
          </Button>
          <Button
            variant={todo.completed ? 'secondary' : 'outline'}
            size="icon"
            onClick={() => handleChangeStatus(todo.id)}
          >
            {' '}
            <CheckIcon className="w-6 h-6" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="w-full line-clamp-2">
        {todo.description}
      </CardContent>

      <CardFooter className="justify-end mt-4">
        <TaskDetail todo={todo} />
      </CardFooter>
    </Card>
  )
}
