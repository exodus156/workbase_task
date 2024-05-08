import { v4 as uuidv4 } from 'uuid'
import { TodoItemProps } from 'components/TodoItem'
import { useEffect, useState } from 'react'

export const useHandleTodos = (sortOption: string) => {
	const [todosList, setTodosList] = useState<
		Omit<TodoItemProps, 'handleModalUpdate'>[]
	>([])
	const [sortedTodosList, setSortedTodosList] = useState<
		Omit<TodoItemProps, 'handleModalUpdate'>[]
	>([])

	const handleCreateTodo = (data: {
		title: string
		dueDate: string
		isCompleted: boolean
	}) => {
		setTodosList((prevState) => {
			return [
				...prevState,
				{
					id: uuidv4(),
					title: data.title,
					dueDate: data.dueDate,
					isCompleted: data.isCompleted,
				},
			]
		})
	}

	const handleUpdateTodo = (data: {
		id: string
		title: string
		dueDate: string
		isCompleted: boolean
	}) => {
		setTodosList((prevState) => {
			return prevState.map((el) =>
				el.id === data.id
					? {
							id: el.id,
							title: data.title,
							dueDate: data.dueDate,
							isCompleted: data.isCompleted,
						}
					: el,
			)
		})
	}

	const handleDeleteTodo = (id: string) => {
		setTodosList((prevState) => {
			return prevState.filter((el) => el.id !== id)
		})
	}

	useEffect(() => {
		if (sortOption === 'ascending') {
			setSortedTodosList(
				[...todosList].sort(
					(a, b) => Date.parse(a.dueDate) - Date.parse(b.dueDate),
				),
			)
			return
		}

		if (sortOption === 'descending') {
			setSortedTodosList(
				[...todosList].sort(
					(a, b) => Date.parse(b.dueDate) - Date.parse(a.dueDate),
				),
			)
			return
		}

		setSortedTodosList([])
	}, [sortOption, todosList])

	// const fetchData = async () => {
	// 	const res = await fetch("url")
	// 	const data = await res.json()
	// 	setTodosList(data)
	// }

	// useEffect(() => {
	// 	fetchData()
	// }, [])

	return {
		todosList: !sortedTodosList.length ? todosList : sortedTodosList,
		handleCreateTodo,
		handleUpdateTodo,
		handleDeleteTodo,
	}
}
