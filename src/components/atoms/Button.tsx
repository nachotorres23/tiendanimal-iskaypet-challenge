type Props = {
  label: string
  disabled?: boolean
  onButtonClick?: () => void
  customClass?: string
}

const Button = ({ label, disabled, onButtonClick, customClass }: Props) => (
  <button
    onClick={onButtonClick}
    disabled={disabled}
    className={`
      flex py-2 justify-center text-center font-semibold rounded-[5px] w-full
      ${customClass}
    `}
  >
    { label }
  </button>
)

export default Button
