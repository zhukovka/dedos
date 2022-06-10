import {App} from "./app.js";
import {useRouter} from "./useRouter";

function goTo() {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    history.pushState({}, document.title, href);
    useRouter(location.pathname);
}

function render() {
    document.getElementById('root').innerHTML = App();
}

render();
useRouter(location.pathname);