document.addEventListener('DOMContentLoaded', () => {
    const openMenu = document.getElementById('open-menu-icon');
    const exitMenu = document.getElementById('close-menu-icon')
    let navBar = document.getElementById('nav')
    let width = window.innerWidth;

    function openMenuBar(){
        if(width < 576 ){
            navBar.style.display = 'flex';
        }
    }
    openMenu.addEventListener('click', openMenuBar)

    function exitMenuBar(){
        if(navBar.style.display === 'flex'){
            navBar.style.display = 'none';
        }
    }
    exitMenu.addEventListener('click',exitMenuBar);
})