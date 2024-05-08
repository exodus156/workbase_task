/* eslint-disable no-unused-vars */
import { ModalDataProps } from '../../App'
import { TodoItem, TodoItemProps } from '../TodoItem'

export type TodoListProps = {
	todos: Omit<TodoItemProps, 'handleModalUpdate'>[]
	setModalData: (data: ModalDataProps) => void
	showModal: () => void
}

export const TodoList: React.FC<TodoListProps> = ({
	todos,
	setModalData,
	showModal,
}) => {
	return (
		<div className="flex flex-col flex-1 w-full pt-3 px-10">
			{todos.map(({ id, title, isCompleted, dueDate }) => (
				<TodoItem
					id={id}
					dueDate={dueDate}
					title={title}
					isCompleted={isCompleted}
					key={`${id}_${title}_${dueDate}`}
					handleModalUpdate={() => {
						setModalData({
							variant: 'update',
							title,
							dueDate,
							isCompleted,
							id,
						})
						showModal()
					}}
				/>
			))}
		</div>
	)
}
