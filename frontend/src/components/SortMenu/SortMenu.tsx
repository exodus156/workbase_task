/* eslint-disable no-unused-vars */
export type SortMenuProps = {
	sortOption: string
	setSortOption: (option: string) => void
}

export const SortMenu: React.FC<SortMenuProps> = ({
	sortOption,
	setSortOption,
}) => {
	const handleOptionSwitch = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setSortOption(e.target.value)
	}

	return (
		<select
			id="sort_by"
			className="border mr-3 text-sm rounded-lg p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 hover:bg-gray-600 text-white focus:ring-primary-500 focus:border-primary-500"
			value={sortOption}
			onChange={handleOptionSwitch}
		>
			<option value="default">Sort by...</option>
			<option value="ascending">Ascending due date</option>
			<option value="descending">Descending due date</option>
		</select>
	)
}
