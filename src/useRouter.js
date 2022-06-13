export function getPageContent(route) {
    switch (route) {
        case '/indicador':
            return import('./indicador.js');
        case '/polegar':
            return import('./polegar.js');
        case '/medio':
            return import('./medio.js');
        default:
            return ''
    }
}

export function useRouter(route) {
    document.getElementById('pages').innerHTML = getPageContent(route);
}