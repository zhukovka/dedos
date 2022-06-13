export const App = (props) => {
    return `
        <div class="App">
                <h1 class='dedo'>DEDOS 🖐</h1>
                <ol>
                <li><a href="/polegar" onclick="goTo()">Polegar</a></li>
                <li><a href="/indicador" onclick="goTo()">Indicador</a></li>
                <li><a href="/medio" onclick="goTo()">Dedo médio</a></li>
                </ol>
                <div id='pages'>
                    <!--  Async -->
                    <script >
                        import('.${props.pathname}.js').then((module) => {
                            document.getElementById('pages').innerHTML = module.default()
                        })
                    </script>
                </div>
            </div>
        `;
};

