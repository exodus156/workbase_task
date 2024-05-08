export type TodoItemProps = {
	title: string
	id: string
	dueDate: string
	isCompleted: boolean
	handleModalUpdate: () => void
}

export const TodoItem: React.FC<TodoItemProps> = ({
	title,
	id,
	dueDate,
	isCompleted,
	handleModalUpdate,
}) => {
	const infoText = `[id:${id}] Due date: ${dueDate}`
	const statusText = isCompleted ? 'Completed' : 'Pending'

	return (
		<div
			onClick={handleModalUpdate}
			className="px-2 py-1 border bg-gray-600 border-gray-500 rounded-md mt-4 w-full hover:cursor-pointer hover:border-gray-200"
		>
			<div className="font-bold text-gray-300 text-xl mb-3">{title}</div>
			<div className="flex flex-1 justify-between">
				<span className="text-gray-400 italic">{infoText}</span>
				<span className={isCompleted ? 'text-green-500' : 'text-yellow-500'}>
					{statusText}
				</span>
			</div>
		</div>
	)
}
