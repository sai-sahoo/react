import React from "react";
import ReactDOM from "react-dom/client";
/* const parent = React.createElement('div',{id: "parent"},[
    React.createElement('div',{id: "child1"},[
        React.createElement('h1',{},'H1 Tag'),
        React.createElement('h1',{},'H2 Tag')]
    ),
    React.createElement('div',{id: "child2"},[
        React.createElement('h1',{},'H1 Tag'),
        React.createElement('h1',{},'H2 Tag')]
    )
    ]
); */
const elem = <div>React JSX ELEM</div>;
const title = (
    <h1 id="title" className="title" tabIndex="5">
        {elem}
        Title Component
    </h1>
);
const HeadingComponent = () => (
    <div id="container">
        {title}
        <h1 id="heading" className="heading" tabIndex="5">Heading Component</h1>
    </div>
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent />);