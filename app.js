import React from "react";
import {createRoot} from "react-dom/client";
const parent = React.createElement("div", {id:"head"}, [ 
    React.createElement("div", {id:"child1"}, [
        React.createElement("h1", {}, "this is namaste react"),
        React.createElement("h2", {}, "this is namaste react")]
    ),
    React.createElement("div", {id:"child2"}, [
        React.createElement("h1", {}, "hello"),
        React.createElement("h2", {}, "ggggg")]
    )
]);

const root = createRoot(document.getElementById("root"));
root.render(parent);
