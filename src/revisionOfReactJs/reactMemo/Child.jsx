import React from "react";

const ReactMemoChild = ({name}) => {
    console.log("Child rendered");

    return (
        <>
            <h1>Hello , {name}</h1>
        </>
    )
}

export default React.memo(ReactMemoChild); 