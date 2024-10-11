import { ChangeEvent, useEffect, useState } from "react"

type Props = {
  label: string
  value: string,
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void
  rules?: ((value: string | number) => boolean)[]
  errorMessage?: string
  optional?: boolean
}

const Input = (
  { label, value, onInputChange, rules, errorMessage, optional }: Props
) => {
  const [ validInput, setValidInput ] = useState(true)

  useEffect(() => {
    if (!rules) return

    const isValid = rules.every(rule => rule(value))
    setValidInput(isValid)
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

      <input
        value={value}
        onChange={onInputChange}
        placeholder={label}
        className="
          rounded-[3px] border border-[#C9C9C9] placeholder:text-[#C9C9C9]
          w-full px-4 py-2
        "
      />

      {
        !validInput &&
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

export default Input
