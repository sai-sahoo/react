import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                name: 'dummy',
                location: 'default location',
                avatar_url: ''
            }
        };
        console.log(this.props.name+ ' Child constructor');
    }

    async componentDidMount() {
        console.log(this.props.name+ ' Child componentDidMount');
        const userData = await fetch('https://api.github.com/users/akshaymarch7');
        const jsonUser = await userData.json();
        console.log(jsonUser);
        this.setState({
            userInfo: jsonUser
        });
    }
    componentDidUpdate() {
        console.log('Child componentDidUpdate');
    }
    componentWillUnmount() {
        console.log('Child componentWillUnmount');
    }

    render() {
        console.log(this.props.name+ ' Child render');
        const { name, location, avatar_url } = this.state.userInfo;
        // debugger;
        return (
            <div className="p-4 border-solid border-2 border-slate-950">
                <img src={avatar_url} />
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: 9178362420</h4>
            </div>
        );
    };
}

export default UserClass;