import { useState } from "react";

const useToogle = (initialValue = false) => {

    const [value, setValue] = useState(initialValue);

    const toogle = () => {
        setValue(prev => !prev);
    }

    return [toogle, value];
}

export default useToogle;