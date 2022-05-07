function loadScript(href) {
    if(href === '/'){
        return;
    }
    import(`${href}.js`)
        .then(({default: dedo}) => {
            // Do something with the module.
            document.getElementById('suspense').innerHTML = dedo();
        });
}

function goTo() {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    console.log(href);
    history.pushState({}, document.title, href);
    loadScript(href);
}

document.getElementById('root').innerHTML = `
    <div class="App">
            <h1 class='dedo'>DEDOS 🖐</h1>
            <ol>
            <li><a href="/polegar" onclick="goTo()">Polegar</a></li>
            <li><a href="/indicador" onclick="goTo()">Indicador</a></li>
            <li><a href="/medio" onclick="goTo()">Dedo médio</a></li>
            <li><a href="/anelar" onclick="goTo()">Anelar</a></li>
            <li><a href="/minimo" onclick="goTo()">Dedo mínimo</a></li>
            </ol>
            <div id='suspense'></div>
        </div>
`