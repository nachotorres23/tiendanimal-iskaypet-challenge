type Props = {
  children: JSX.Element,
  customClass?: string,
}

const Card = ({ children, customClass }: Props) => (
  <div
    className={`rounded-[4px] ${customClass}`}
    style={{ boxShadow: '0px 2px 4px 2px rgba(0, 0, 0, 0.12)' }}
  >
    { children }
  </div>
)

export default Card
