export const App = (props) => {
    let content = '';
    if(typeof window === 'undefined'){
        content = require(`.${props.pathname}`).default();
    }
    return `
        <div class="App">
            <h1 class='dedo'>DEDOS 🖐</h1>
            <ol>
                <li><a href="/polegar" onclick="goTo()">Polegar</a></li>
                <li><a href="/indicador" onclick="goTo()">Indicador</a></li>
                <li><a href="/medio" onclick="goTo()">Dedo médio</a></li>
                <li><a href="/anelar" onclick="goTo()">Anelar</a></li>
            </ol>
            <div id='pages'>
                <!--  Sync in SSR -->
                ${content}
            </div>
        </div>
        `;
};

