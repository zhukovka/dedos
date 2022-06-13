import {Indicador} from "./indicador.js";
import {Polegar} from "./polegar.js";
import {Medio} from "./medio.js";

export function getPageContent(route) {
    switch (route) {
        case '/indicador':
            return Indicador();
        case '/polegar':
            return Polegar();
        case '/medio':
            return Medio();
        default:
            return ''
    }
}

export function useRouter(route) {
    document.getElementById('pages').innerHTML = getPageContent(route);
}