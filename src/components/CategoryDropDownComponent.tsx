"use client";

import React, { useState } from "react";

const categories = ["All", "Upcoming", "Oncoming", "Expired"];

const CategoryDropDownComponent = () => {
    const [selected, setSelected] = useState("Upcoming");

    const orderedCategories = [
        selected,
        ...categories.filter((cat) => cat !== selected),
    ];

    return (
        <div className="w-auto">
            {orderedCategories.map((category, index) => (
                <div
                    key={category}
                    onClick={() => setSelected(category)}
                    className={`cursor-pointer py-2 px-4 rounded-md transition-all duration-300 ease-in-out 
            ${category === selected ? "font-bold text-black text-3xl hover:underline" : "text-gray-500 hover:text-[20px]"}`

                    }
                >
                    {category}
                </div>
            ))}
        </div>
    );
};

export default CategoryDropDownComponent;
