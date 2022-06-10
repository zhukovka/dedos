function polegar(){
    return (`
    <h1>Polegar 👍</h1>
    `)
}
function indicador(){
    return `<h1>Indicador 👆</h1>`
}

function useRouter() {
    const route = location.pathname.substr(1);
    document.getElementById('pages').innerHTML = route && window[route]();
}

function goTo() {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    history.pushState({}, document.title, href);
    useRouter();
}

const App = () => {
    return `
        <div class="App">
                <h1 class='dedo'>DEDOS 🖐</h1>
                <ol>
                    <li><a href="/polegar" onclick="goTo()">Polegar</a></li>
                    <li><a href="/indicador" onclick="goTo()">Indicador</a></li>
                </ol>
                <div id='pages'></div>
            </div>
        `;
};

function render() {
    document.getElementById('root').innerHTML = App();
}

render();
useRouter();