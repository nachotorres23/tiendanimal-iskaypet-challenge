import { generateLoremIpsum } from "../common/generation"
import { getToDo } from "../axios/endpoints"
import { ToDoResponse } from "../domain/reponses"
import { ToDoTask } from "../domain/tasks"
import { useEffect, useState } from "react"
import Loading from "../components/atoms/Loading"
import ToDoItem from "../components/myTasks/ToDoItem"
import Button from "../components/atoms/Button"
import AddTaskModal from "../components/myTasks/AddTaskModal"

const LIMIT = 5

const MyTasks = () => {
  const [ toDoList, setToDoList ] = useState<ToDoTask[]>([])
  const [ showAddTaskModal, setShowAddTaskModal ] = useState(false)
  const [ isLoading, setIsLoading ] = useState(false)
  const [ page, setPage ] = useState(1)
  const [ totalPages, setTotalPages ] = useState(1)
  const [ error, setError ] = useState(false)

  const formatResponseTasks = (data: ToDoResponse[]): ToDoTask[] =>
    data.map(value => ({
      id: value.id,
      title: value.title,
      description: generateLoremIpsum(Math.round(Math.random() * 15) + 1)
    }))

  const getTodos = async () => {
    if (error) { setError(false) }

    setIsLoading(true)

    try {
      const response = await getToDo()
      const paginateFrom = (page - 1) * LIMIT
      const paginateTo = paginateFrom + LIMIT

      if (!response.length) {
        setPage(0)
        setTotalPages(0)
        setToDoList([])
        setIsLoading(false)

        return
      }

      const formattedTasks = formatResponseTasks(
        response.slice(paginateFrom, paginateTo)
      )

      setToDoList(formattedTasks)
      setTotalPages(Math.ceil(response.length / LIMIT))

      setIsLoading(false)
    } catch (err) {
      console.error(err)
      setError(true)
      setIsLoading(false)
    }
  }

  useEffect(() => { getTodos() }, [page])

  return (
    <div className="flex flex-col gap-y-2">
      <p className="text-xl font-bold text-[#555555]">
        Mis tareas
      </p>

      <div className="flex flex-col gap-y-6">
        {
          isLoading
            ? <div className="w-full h-full flex justify-center text-center">
              <Loading />
            </div>
            : error
              ? <div className="w-full h-full flex justify-center text-center my-8">
                <p className="text-xl text-red-600">
                  Oops! Parece que algo salio mal.
                </p>
              </div>
              : toDoList.map(value =>
              <ToDoItem
                key={value.id}
                title={value.title}
                description={value.description}
                deleteAction={() =>
                  setToDoList(toDoList.filter(task => task.id !== value.id))
                }
              />
            )
        }
      </div>

      {
        !isLoading && !error &&
          <Button
            label="Añadir tarea"
            onButtonClick={() => setShowAddTaskModal(true)}
            customClass="mt-12 bg-[#639605] text-white"
          />
      }

      {
        !isLoading && !error &&
          <div
            className="
              flex gap-x-2 items-center text-center justify-center text-[#555555]
              text-lg font-semibold
            "
          >
            <button
              onClick={() => setPage(1)}
              disabled={page === 1 || !toDoList.length}
              className="flex transition duration-300 mt-2 disabled:opacity-0"
            >
              <p className="-mr-0.5">
                &lt;
              </p>

              <p>
                &lt;
              </p>
            </button>

            <button
              onClick={() => setPage(prev => prev - 1)}
              disabled={page === 1 || !toDoList.length}
              className="transition duration-300 disabled:opacity-0"
            >
              &lt;
            </button>

            <p className="tracking-tighter">
              { page } of { totalPages }
            </p>

            <button
              onClick={() => setPage(prev => prev + 1)}
              disabled={page === totalPages || !toDoList.length}
              className="transition duration-300 disabled:opacity-0"
            >
              &gt;
            </button>

            <button
              onClick={() => setPage(totalPages)}
              disabled={page === totalPages || !toDoList.length}
              className="flex transition duration-300 disabled:opacity-0"
            >
              <p className="-mr-0.5">
                &gt;
              </p>

              <p>
                &gt;
              </p>
            </button>
          </div>
      }

      {
        showAddTaskModal &&
          <AddTaskModal
            addButtonAction={(title: string, description: string) => {
              const newTask = {
                id: toDoList[toDoList.length - 1].id + 1,
                title,
                description
              }

              toDoList.push(newTask)
              setShowAddTaskModal(false)
            }}
            cancelButtonAction={() => setShowAddTaskModal(false)}
          />
      }
    </div>
)
}

export default MyTasks
