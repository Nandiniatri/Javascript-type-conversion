import { useState } from "react";

const tabData = [
    { id: 1, title: 'Tab 1', content: 'Tab 1 Content' },
    { id: 2, title: 'Tab 2', content: 'Tab 2 Content' },
    { id: 3, title: 'Tab 3', content: 'Tab 3 Content' }
]

const TabComponents = () => {
    const [tabCom , setTabCom] =  useState([]);

    const handleTab = (item) => {
        console.log(item.content);
        setTabCom(item.content)
    }

    return (
        <>
            {tabData.map((item) => {
                return (
                    <div key={item.id}>
                        <button onClick={() => handleTab(item)}>{item.title}</button>
                    </div>
                )
            })}

            <h2>{tabCom}</h2>
        </>
    )
}

export default TabComponents;