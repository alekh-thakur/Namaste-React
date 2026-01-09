const parent = React.createElement("div",{id:"head"},[ 
    React.createElement("div",{id:"child1"},[
        React.createElement("h1",{},"Hello from nested tag"),
        React.createElement("h2",{},"Hello from nested tag")]
    ),React.createElement("div",{id:"child2"},[
        React.createElement("h1",{},"Hello from nested tag"),
        React.createElement("h2",{},"Hello from nested tag")]
    )])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent)