import {useRouter} from "./useRouter.js";

function hydrate() {
    //add event listeners
    function goTo() {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        history.pushState({}, document.title, href);
        useRouter(location.pathname);
    }
    window.goTo = goTo;
}

hydrate();