import {getPageContent} from "./useRouter";

export const App = (props) => {
    let content = getPageContent(props.pathname);
    return `
        <div class="App">
                <h1 class='dedo'>DEDOS 🖐</h1>
                <ol>
                <li><a href="/polegar" onclick="goTo()">Polegar</a></li>
                <li><a href="/indicador" onclick="goTo()">Indicador</a></li>
                <li><a href="/medio" onclick="goTo()">Dedo médio</a></li>
                </ol>
                <div id='pages'>${content}</div>
            </div>
        `;
};

