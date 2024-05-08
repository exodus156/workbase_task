import { TodoItemProps } from 'components/TodoItem'

export const dummyTodos: Omit<TodoItemProps, 'handleModalUpdate'>[] = [
	{
		id: '1',
		title: 'Test1',
		isCompleted: false,
		dueDate: '2024-05-09',
	},
	{
		id: '2',
		title: 'Test2',
		isCompleted: false,
		dueDate: '2024-05-20',
	},
	{
		id: '3',
		title: 'Test3',
		isCompleted: false,
		dueDate: '2024-05-12',
	},
	{
		id: '4',
		title: 'Test4',
		isCompleted: false,
		dueDate: '2024-03-09',
	},
	{
		id: '5',
		title: 'Test5',
		isCompleted: false,
		dueDate: '2024-08-09',
	},
]
