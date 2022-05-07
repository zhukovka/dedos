import {App} from "./app.js";

function hydrate() {
    document.getElementById('root').innerHTML = App();
}

hydrate();
