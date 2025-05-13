
interface ICategories {
    list: string[],
    setSelectedCategory: (category: string) => void,
    selectedCategory: string
}
const CategoryDropDownComponent = ({ list, setSelectedCategory, selectedCategory }: ICategories) => {

    const orderedCategories = [
        selectedCategory,
        ...list.filter((cat: string) => cat !== selectedCategory),
    ];

    return (
        <div className="w-auto">
            {orderedCategories.map((category: string, index) => (
                <div
                    key={index}
                    onClick={() => setSelectedCategory(category)}
                    className={`cursor-pointer py-2 px-4 rounded-md transition-all duration-300 ease-in-out 
                                 ${category === selectedCategory ? "font-bold text-black text-3xl hover:underline"
                            : "text-gray-500 hover:text-[20px]"}`}>
                    {category}
                </div>
            ))}
        </div>
    );
};

export default CategoryDropDownComponent;
