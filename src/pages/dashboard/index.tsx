import { Input } from '@/components/ui/input'
import { AddTask } from './add-task'
import { useToDo } from './use-todo'
import { CardTask } from './card-task'


export const Dashboard = () => {
  const { handleSearch, data} = useToDo()
  return (
    <main className="py-8 space-y-6">
      <section className="flex gap-4 lg:w-2/3">
        <Input
          type="search"
          placeholder="Search for task ..."
          className="bg-white"
          onChange={handleSearch}
        />
        <AddTask />
      </section>
      <section className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data?.map(todo => (
          <CardTask key={todo.id} todo={todo} />
        ))}
      </section>
    </main>
  )
}
