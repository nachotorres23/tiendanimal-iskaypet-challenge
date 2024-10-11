import { useEffect, useState } from "react"
import Input from "../atoms/Input"
import Button from "../atoms/Button"
import Textarea from "../atoms/Textarea"
import { validTextarea, validTitle } from "../../common/validators"

type Props = {
  addButtonAction: (title: string, description: string) => void
  cancelButtonAction: () => void
}

const AddTaskModal = ({ addButtonAction, cancelButtonAction }: Props) => {
  const [ name, setName ] = useState('')
  const [ description, setDescription ] = useState('')
  const [ error, setError ] = useState(false)

  useEffect(() => {
    if (!name.length || !description.length) {
      setError(true)
      return
    }

    const isValidName = validTitle(name)
    const isValidTextarea = validTextarea(description)

    setError(!(isValidName && isValidTextarea))
  }, [ name, description ])

  return (
    <div
      className="
        absolute top-0 left-0 w-full h-full flex justify-center items-center bg-[#2C2C2CC2]/20
      "
    >
      <div
        className="flex flex-col w-[28%] p-4 bg-white gap-y-4 rounded-lg"
      >
        <div className="flex justify-between items-center w-full">
          <p className="text-[#333333] font-bold text-xl">
            Añadir tarea
          </p>

          <button
            onClick={cancelButtonAction}
            className="text-[#48423D] font-bold text-xl"
          >
            X
          </button>
        </div>

        <div className="flex flex-col items-center gap-y-6 w-full">
          <Input
            label="Nombre"
            value={name}
            onInputChange={e => setName(e.target.value)}
            rules={[validTitle]}
            errorMessage="Name should not be more than 24 characters"
          />

          <Textarea
            label="Descripción"
            value={description}
            onTextareaChange={e => setDescription(e.target.value)}
            rules={[validTextarea]}
            errorMessage="Description should not be more than 80 characters"
            customClass="min-h-[150px] max-h-[150px] w-full"
          />
        </div>

        <div className="flex justify-between items-center gap-x-4 mt-2">
          <Button
            label="Cancelar"
            onButtonClick={cancelButtonAction}
            customClass="bg-white text-[#B3B3B3]"
          />

          <Button
            label="Guardar"
            disabled={error}
            onButtonClick={() => addButtonAction(name, description)}
            customClass="bg-[#639605] text-white disabled:grayscale"
          />
        </div>
      </div>
    </div>
)
}

export default AddTaskModal
