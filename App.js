/*
<div id="parent">
    <div id="child">
        <h1>siblings</h1>
        <h2>siblings</h2>
    </div>
</div>
*/
const parent = React.createElement('div',{id: "parent"},[
    React.createElement('div',{id: "child1"},[
        React.createElement('h1',{},'H1 Tag'),
        React.createElement('h1',{},'H2 Tag')]
    ),
    React.createElement('div',{id: "child2"},[
        React.createElement('h1',{},'H1 Tag'),
        React.createElement('h1',{},'H2 Tag')]
    )
    ]
);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);