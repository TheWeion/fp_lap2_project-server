//
// ─── SITE CONSTRUCTION ──────────────────────────────────────────────────────────
//

const publicRoutes = ['#', '#login', '#register'];
const privateRoutes = ['#feed', '#profile'];

function updateNav(){
    nav.innerHTML = '';
    let links;
    let logoutBtn;
    if (currentUser()){
        links = privateRoutes.map(createNavLink);
        logoutBtn = document.createElement('button');
        logoutBtn.textContent = 'Logout';
        logoutBtn.onclick = logout;
        nav.appendChild(logoutBtn);
    } else {
        links = publicRoutes.map(createNavLink);
    }
    links.forEach(l => nav.insertBefore(l, logoutBtn))
}

function updateMain(path) {
    main.innerHTML = '';
    if (path) {
        switch(path){
            case '#login':
                renderLoginForm(); break;
            case '#register':
                renderRegisterForm(); break;
            case '#profile':
                renderProfile(); break;
            default:
                render404(); break;
        }
    } else {
        return("../index.html");
    }
}

function updateContent(){
    const path = window.location.hash;
    if (privateRoutes.includes(path) && !currentUser()){
        window.location.hash = '#';
    } else {
        updateNav();
    }
}

updateContent();

