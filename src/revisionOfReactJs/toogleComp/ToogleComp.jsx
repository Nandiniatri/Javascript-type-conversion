import { useState } from "react";

const ToogleButton = () => {
    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(true);
    }

    return (
        <div>
            {show && <h2>Hello I am show</h2>}
            <button onClick={handleShow}>Toogle</button>
        </div>
    )
}

export default ToogleButton;