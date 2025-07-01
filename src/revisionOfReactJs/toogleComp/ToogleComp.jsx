import { useState } from "react";

const ToogleButton = () => {
    const [show, setShow] = useState(false);

    return (
        <div>
            <h2>Hello I am show</h2>
            <button>Toogle</button>
        </div>
    )
}

export default ToogleButton;