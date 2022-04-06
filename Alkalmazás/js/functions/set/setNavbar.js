const setNavbar = () => {
    const navbar = document.getElementById('navbar');
    navbar.classList.add('navbar', 'navbar-expand-lg', 'navbar-dark', 'fixed-top');
    navbar.innerHTML =
    '<div class="container">'+
        '<a class="navbar-brand" href="./">'+
            '<img src="./img/logo-navbar.png" alt="TeamAd alkalmazás logója" class="d-inline-block align-text-top me-1">'+
            'TeamAd'+
        '</a>'+
        '<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">'+
            '<span class="navbar-toggler-icon"></span>'+
        '</button>'+
        '<div class="collapse navbar-collapse justify-content-end" id="navbarNav">'+
            '<ul class="navbar-nav">'+
                '<li class="nav-item">'+
                    '<a class="nav-link" href="courses.html"><i class="fas fa-users"></i> Kurzusok</a>'+
                '</li>'+
                '<li class="nav-item">'+
                    '<a class="nav-link" href="participants.html"><i class="fas fa-user-graduate"></i> Résztvevők</a>'+
                '</li>'+
                '<li class="nav-item">'+
                    '<a class="nav-link" href="breaktimes.html"><i class="fas fa-sun"></i> Szünetek</a>'+
                '</li>'+
                '<li class="nav-item dropdown">'+
                    '<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"></a>'+
                    '<ul class="dropdown-menu" aria-labelledby="navbarDropdown">'+
                        '<li><a class="dropdown-item" href="./manage-users.html"><i class="fas fa-users-cog"></i> Felhasználók kezelése</a></li>'+
                        '<li><hr class="dropdown-divider"></li>'+
                        '<li><a class="dropdown-item" href="./password-change.html"><i class="fas fa-key"></i> Jelszó cseréje</a></li>'+
                        '<li><a class="dropdown-item" href="#" id="logoutBtn"><i class="fas fa-sign-out-alt"></i> Kijelentkezés</a></li>'+
                    '</ul>'+
                '</li>'+
            '</ul>'+
        '</div>'+
    '</div>';
    document.getElementById('logoutBtn').onclick = (e) => {
        e.preventDefault();
        logout();
    }
}