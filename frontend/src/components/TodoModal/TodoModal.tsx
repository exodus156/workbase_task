import { useState } from 'react'

/* eslint-disable no-unused-vars */
export type TodoModalProps = {
	variant: 'create' | 'update'
	title?: string
	dueDate?: string
	isCompleted?: boolean
	id?: string
	onClickCreate?: (data: {
		title: string
		dueDate: string
		isCompleted: boolean
	}) => void
	onClickUpdate?: (data: {
		id: string
		title: string
		dueDate: string
		isCompleted: boolean
	}) => void
	onClickDelete?: (id: string) => void
	hideModal: () => void
}

export const TodoModal: React.FC<TodoModalProps> = ({
	variant,
	id,
	title,
	dueDate,
	isCompleted,
	onClickCreate,
	onClickDelete,
	onClickUpdate,
	hideModal,
}) => {
	const [titleInput, setTitleInput] = useState(title ?? '')
	const [dueDateInput, setDueDateInput] = useState(dueDate ?? '')
	const [isCompleteInput, setIsCompleteInput] = useState(isCompleted ?? false)

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (variant === 'create' && onClickCreate) {
			onClickCreate({
				title: titleInput,
				dueDate: dueDateInput,
				isCompleted: isCompleteInput,
			})
			hideModal()
			return
		}

		if (variant === 'update' && onClickUpdate && id) {
			onClickUpdate({
				id,
				title: titleInput,
				dueDate: dueDateInput,
				isCompleted: isCompleteInput,
			})
			hideModal()
			return
		}
	}

	return (
		<div
			tabIndex={-1}
			onClick={hideModal}
			className="fixed bg-gray-900 bg-opacity-40 top-0 right-0 left-0 justify-center items-center w-full h-full"
		>
			<div
				onClick={(e) => {
					e.stopPropagation()
				}}
				className="absolute p-4 w-full max-w-md max-h-full z-50 left-[37%] top-[20%]"
			>
				<div className="rounded-lg shadow bg-gray-700">
					<div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-600">
						<h3 className="text-lg font-semibold text-white">
							{variant === 'create' ? 'Create New Todo' : 'Update Todo'}
						</h3>
						<button
							type="button"
							className="text-gray-400 bg-transparent rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center hover:bg-gray-600 hover:text-white"
							onClick={hideModal}
						>
							<svg
								className="w-3 h-3"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 14 14"
							>
								<path
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
								/>
							</svg>
							<span className="sr-only">Close modal</span>
						</button>
					</div>
					<form
						onSubmit={handleSubmit}
						className="p-4 md:p-5"
					>
						<div className="grid gap-4 mb-4 grid-cols-2">
							<div className="col-span-2">
								<label
									htmlFor="title"
									className="block mb-2 text-sm font-medium text-white"
								>
									Title
								</label>
								<input
									type="text"
									name="title"
									id="title"
									className="border text-sm rounded-lg block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
									placeholder="What's to do?"
									value={titleInput}
									onChange={(e) => {
										setTitleInput(e.target.value)
									}}
									required
								/>
							</div>
							<div className="col-span-2 sm:col-span-1">
								<label
									htmlFor="dueDate"
									className="block mb-2 text-sm font-medium text-white"
								>
									Due date
								</label>
								<input
									type="date"
									name="dueDate"
									id="dueDate"
									className="border text-sm rounded-lg block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
									placeholder="Select due date"
									value={dueDateInput}
									onChange={(e) => {
										setDueDateInput(e.target.value)
									}}
									required
								/>
							</div>
							<div className="col-span-2 sm:col-span-1">
								<label
									htmlFor="Status"
									className="block mb-2 text-sm font-medium text-white"
								>
									Status
								</label>
								<select
									id="Status"
									className="border text-sm rounded-lg block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 hover:bg-gray-600 text-white focus:ring-primary-500 focus:border-primary-500"
									value={isCompleteInput ? 'Completed' : 'Pending'}
									onChange={(e) => {
										if (e.target.value === 'Completed') {
											setIsCompleteInput(true)
											return
										}
										setIsCompleteInput(false)
									}}
								>
									<option>Select status</option>
									<option value="Pending">Pending</option>
									<option value="Completed">Completed</option>
								</select>
							</div>
						</div>
						<div className="flex items-center">
							<button
								type="submit"
								className="text-white mr-4 my-2 inline-flex items-center focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
							>
								{variant === 'create' ? 'Add new todo' : 'Update todo'}
							</button>
							{variant === 'update' && id && onClickDelete && (
								<button
									type="button"
									onClick={() => {
										onClickDelete(id)
										hideModal()
									}}
									className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
								>
									Delete todo
								</button>
							)}
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}
