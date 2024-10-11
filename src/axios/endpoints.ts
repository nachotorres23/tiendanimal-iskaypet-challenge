import { ToDoResponse } from "../domain/reponses"
import { axiosInstance } from "./instances"

export const getToDo = async (): Promise<ToDoResponse[]> => {
  const url = '/todos'
  const response = await axiosInstance.get(url)

  return response.data
}
