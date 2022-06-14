import { Routes, Route, Outlet, Link } from "react-router-dom";
import loadable from '@loadable/component'
const Polegar = loadable(() => import('./polegar'));
const Minimo = loadable(() => import('./minimo'));
const Indicador = loadable(() => import('./indicador'));
const Anelar = loadable(() => import('./anelar'));
const Medio = loadable(() => import('./medio'));

function Layout() {
    return (
        <div>
            <ol>
                <li><Link to="/polegar">Polegar</Link></li>
                <li><Link to="/indicador">Indicador</Link></li>
                <li><Link to="/medio">Dedo médio</Link></li>
                <li><Link to="/anelar">Anelar</Link></li>
                <li><Link to="/minimo">Minimo</Link></li>
            </ol>
            <Outlet />
        </div>
    );
}

export default function App() {
    return (
        <div className="App">
            <h1 className='dedo'>DEDOS 🖐</h1>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="polegar" element={<Polegar />} />
                    <Route path="indicador" element={<Indicador />} />
                    <Route path="medio" element={<Medio />} />
                    <Route path="anelar" element={<Anelar />} />
                    <Route path="minimo" element={<Minimo />} />
                </Route>
            </Routes>
        </div>
    );
}