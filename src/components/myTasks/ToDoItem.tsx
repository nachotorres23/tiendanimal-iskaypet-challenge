import Card from "../atoms/Card"

type Props = {
  title: string,
  description: string,
  deleteAction: () => void,
}

const ToDoItem = ({ title, description, deleteAction }: Props) => (
  <Card customClass="flex flex-col w-full p-3">
    <>
    <div className="flex justify-between items-center">
      <p className="font-semibold text-[#333333]">
        { title }
      </p>

      <button
        onClick={deleteAction}
        className="text-[#B3B3B3] hover:text-red-500 transition duration-300"
      >
        <i className="ri-delete-bin-line" />
      </button>
    </div>

      <p className="text-[#777777] text-xs">
        { description}
      </p>
    </>
  </Card>
)

export default ToDoItem
