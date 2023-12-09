import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
    constructor(props) {
        super(props);
        console.log('Parent constructor');
    }

    componentDidMount() {
        console.log('Parent componentDidMount');
    }
    componentDidUpdate() {
        console.log('Parent componentDidUpdate');
    }
    componentWillUnmount() {
        console.log('Parent componentWillUnmount');
    }

    render() {
        console.log('Parent render');
        return (
            <div>
                <div>About</div>
                {/* <User name={"Sai (Funcomp)"} location={"Bhadrak Funcomp"} /> */}
                <UserClass name={"Sai (Class)"} location={"Bhadrak Class"} />
            </div>
        );
    }
}
export default About;