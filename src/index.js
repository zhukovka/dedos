function hydrate() {
    //add event listeners
    function goTo() {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        history.pushState({}, document.title, href);
        import((`.${location.pathname}.js`)).then((module) => {
            document.getElementById('pages').innerHTML = module.default()
        });
    }
    window.goTo = goTo;
}

hydrate();