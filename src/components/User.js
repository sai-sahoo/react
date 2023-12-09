import { useEffect, useState } from "react";

const User = (props) => {
    const [count] = useState(0);
    useEffect(() => {

    }, []);

    return (
        <div className="p-4 border-solid border-2 border-slate-950">
            <h1>Count: {count}</h1>
            <h2>Name: {props.name}</h2>
            <h3>Location: {props.location}</h3>
            <h4>Contact: 9178362420</h4>
        </div>
    );
}

export default User;