import { ChangeEvent, useEffect, useState } from "react"

type Props = {
  label: string
  value: string
  onTextareaChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
  rules?: ((value: string | number) => boolean)[]
  errorMessage?: string
  optional?: boolean
  customClass?: string
}

const Textarea = ({
  label, value, onTextareaChange, rules, errorMessage, optional, customClass
}: Props) => {
  const [ validTextarea, setValidTextarea ] = useState(true)

  useEffect(() => {
    if (!rules) return

    const isValid = rules.every(rule => rule(value))
    setValidTextarea(isValid)
  }, [value])

  return (
    <div className="flex flex-col gap-y-2 w-full relative">
      <div className="flex gap-x-1 text-[#555555]">
        <p>
          { label }
        </p>

        {
          !optional &&
          <p className="text-red-600">
            *
          </p>
        }
      </div>

      <textarea
        value={value}
        onChange={onTextareaChange}
        placeholder={label}
        className={`
          rounded-[3px] border border-[#C9C9C9] placeholder:text-[#C9C9C9]
          w-full px-4 py-2 resize-none
          ${customClass}
        `}
      />

      {
        !validTextarea &&
          <p
            className="
              text-red-600 absolute text-xs -bottom-5 left-2 font-medium
            "
          >
            { errorMessage }
          </p>
      }
    </div>
  )
}
export default Textarea
