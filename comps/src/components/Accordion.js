import { useState } from 'react';
import { GoChevronDown, GoChevronLeft } from 'react-icons/go';

function Accordion({ items }) {
    const [expandedIndex, setExpandedIndex] = useState(-1);

    const handleClick = (nextIndex) => {
        setExpandedIndex(current => {
            // this is a functional state update, "current" represents the most up to date state, 
            // basically it makes sure other state changes were already done when executing
            // or it 'await's to be done with the state
            if (current === nextIndex) {
                return -1;
            } else {
                return nextIndex;
            }
        })
        // if (expandedIndex === nextIndex) {
        //     setExpandedIndex(-1);
        // } else {
        //     setExpandedIndex(nextIndex);
        // }
    }

    const renderedItems = items.map((item, index) => {
        const isExpanded = (index === expandedIndex);

        const content = isExpanded && <div className="border-b p-5">{item.content}</div>;
        // daca isExpanded e truthy o sa puna divul in variabila, daca e falsy va pune Booleanul (first falsy or last truthy)

        const icon = <span className="text-xl">
            {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
        </span>

        return (
            <div key={item.id}>
                <div
                    className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer"
                    onClick={() => handleClick(index)}
                >
                    {item.label}
                    {icon}
                </div>
                {/* arrow function needed to prevent infinitely calling the function */}
                {content}
            </div>
        )
    })

    return <div className="border-x border-t rounded">
        {renderedItems}
    </div>
}

export default Accordion;