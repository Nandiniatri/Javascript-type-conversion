import { useState } from "react";

const tabData = [
    { title: 'Tab 1', content: 'Tab 1 Content' },
    { title: 'Tab 2', content: 'Tab 2 Content' },
    { title: 'Tab 3', content: 'Tab 3 Content' }
]

const TabComponents = () => {
    const [tabCom, setTabCom] = useState(tabData[0].content);

    const handleTab = (item) => {
        console.log(item.content);
        setTabCom(item.content)
    }

    return (
        <>
            {tabData.map((item) => {
                return (
                    <div key={item.title}>
                        <button onClick={() => handleTab(item)}>{item.title}</button>
                    </div>
                )
            })}

            <h2>{tabCom}</h2>
        </>
    )
}

export default TabComponents;