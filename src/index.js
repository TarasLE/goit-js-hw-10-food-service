import './styles.css';
import menuList from './menu.json';
import menuTemplate from '../templates/menu-card.hbs';


// const menuContainer = document.querySelector(".js-menu");
// const themeSwitcher = document.querySelector('#theme-switch-toggle')
// const bodyTheme = document.querySelector("body")
themeSwitcher.addEventListener('change', changeTheme)


const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

let currentTheme = Theme.LIGHT;


function changeTheme(event) {
    event.preventDefault(); 
    if (themeSwitcher.checked) {
        currentTheme = Theme.DARK;
        localStorage.setItem('current-theme', JSON.stringify(currentTheme))
        bodyTheme.classList.toggle(Theme.DARK);
       
    } else {
        currentTheme = Theme.LIGHT;
        localStorage.setItem('current-theme', JSON.stringify(currentTheme))
        bodyTheme.classList.toggle(Theme.DARK);
    }
}

function chosenTheme(){
    const chosen = JSON.parse(localStorage.getItem('current-theme'));
    themeSwitcher.checked = chosen == 'dark-theme' ? true : false;
    if (themeSwitcher.checked) {
       bodyTheme.classList.add(Theme.DARK);
    } 
}

chosenTheme()

const createMenu = menuTemplate(menuList);
menuContainer.insertAdjacentHTML("beforeend", createMenu);
