import './styles.css';
import menuList from './menu.json';
import menuTemplate from '../templates/menu-card.hbs';


const menuContainer = document.querySelector(".js-menu");
const themeSwitcher = document.querySelector('#theme-switch-toggle')
const bodyTheme = document.querySelector("body")
themeSwitcher.addEventListener('change', changeTheme)
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

function changeTheme(event) {
    
}

const createMenu = menuTemplate(menuList);
menuContainer.insertAdjacentHTML("beforeend", createMenu);

// console.log(themeSwitcher);
// console.log(createMenu);
// console.log(menuTemplate);
// console.log(menuList);
// console.log('test message');
// console.log(menuContainer);
console.log(bodyTheme);