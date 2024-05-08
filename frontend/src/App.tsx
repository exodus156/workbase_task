import { useState } from 'react'
import { SortMenu, TodoList, TodoModal, TodoModalProps } from './components'
import { useHandleTodos } from 'hooks/useHandleTodos'

export type ModalDataProps = {
	variant: TodoModalProps['variant']
	title?: string
	dueDate?: string
	isCompleted?: boolean
	id?: string
}

function App() {
	const [sortOption, setSortOption] = useState('default')
	const [isModalVisible, setIsModalVisible] = useState(false)
	const [modalData, setModalData] = useState<ModalDataProps>({
		variant: 'create',
		title: '',
		dueDate: '',
	})

	const { todosList, handleCreateTodo, handleDeleteTodo, handleUpdateTodo } =
		useHandleTodos(sortOption)

	const hideModal = () => {
		setIsModalVisible(false)
	}

	const showModal = () => {
		setIsModalVisible(true)
	}

	return (
		<>
			<div className="bg-gray-600 divide-y-2 divide-gray-500 flex flex-col w-lvw h-lvh justify-center items-center overflow-hidden">
				<div className="w-full flex justify-center py-2">
					<SortMenu
						sortOption={sortOption}
						setSortOption={setSortOption}
					/>
					<button
						onClick={() => {
							setModalData({
								variant: 'create',
								title: '',
								dueDate: '',
							})
							showModal()
						}}
						className="text-white inline-flex ml-3 items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					>
						Add new modal
					</button>
				</div>
				<TodoList
					todos={todosList}
					setModalData={setModalData}
					showModal={showModal}
				/>
			</div>
			{isModalVisible && (
				<TodoModal
					hideModal={hideModal}
					onClickCreate={handleCreateTodo}
					onClickDelete={handleDeleteTodo}
					onClickUpdate={handleUpdateTodo}
					{...modalData}
				/>
			)}
		</>
	)
}

export default App
