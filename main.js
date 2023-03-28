document.addEventListener('click', (e) => {
    if(e.target.tagName === 'A'){
        route(e);
    }
    e.preventDefault();
});

const route = (e) => {
    window.history.pushState({}, '', e.target.href);
    handleLocation();
}

const routes = {
    '/': 'main.html',
    '/contact': 'contact.html',
    '/about': 'about.html'
}

const handleLocation = async () => {
    const path = window.location.pathname;
    const html = await fetch(routes[path]).then(data => data.text());
    document.querySelector('#content').innerHTML = html;
}

window.route = route;
window.onpopstate = handleLocation;
handleLocation();