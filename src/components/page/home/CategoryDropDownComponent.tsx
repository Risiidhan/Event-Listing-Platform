import { useEventContext } from "@/context/EventContext";

const CategoryDropDownComponent = ({list}: any) => {

    const { formData, setFormData } = useEventContext();

    const orderedCategories = [
        formData?.category,
        ...list.filter((cat: string) => cat !== formData?.category),
    ];

    return (
        <div className="w-auto">
            {orderedCategories.map((category: string, index) => (
                <div
                    key={index}
                    onClick={() => setFormData({ ...formData, category: category || '' })}
                    className={`cursor-pointer py-2 px-4 rounded-md transition-all duration-300 ease-in-out 
                                 ${category === formData?.category ? "font-bold text-black text-3xl hover:underline"
                            : "text-gray-500 hover:text-[20px]"}`}>
                    {category}
                </div>
            ))}
        </div>
    );
};

export default CategoryDropDownComponent;
