import './style.css';
import Menu from './menu';
import Contact from "./contact";
function header_component() {
    const header = document.createElement("header");
    
    const logo = document.createElement("div");
    logo.classList.add("logo");
    logo.textContent = "O'KEBAB";
    header.appendChild(logo);

    const links = document.createElement("div");
    links.classList.add("links");
    
    const home = document.createElement("button");
    home.classList.add("home");
    home.textContent = "HOME";
    home.onclick = renderHome;
    links.appendChild(home);

    const menu = document.createElement("button");
    menu.classList.add("menu");
    menu.textContent = "MENU";
    menu.onclick = Menu.render;
    links.appendChild(menu);
    
    const contact = document.createElement("button");
    contact.classList.add("contact");
    contact.textContent = "CONTACT";
    contact.onclick = Contact.render;
    links.appendChild(contact);

    header.appendChild(logo);
    header.appendChild(links);

    return header;
}

function main_component() {
    const main = document.createElement("main");
    
    const hero = document.createElement("div");
    hero.classList.add("hero");
    main.appendChild(hero);
    
    const text = document.createElement("h1");
    text.textContent = "Come on down for some delicious Turkish cuisine!"
    hero.appendChild(text);
    
    const text2 = document.createElement("p");
    text2.textContent = "Same Taste since 1998!"
    hero.appendChild(text2);
    
    const orderBtn = document.createElement("button");
    orderBtn.classList.add("btn");
    main.appendChild(orderBtn);

    return main;
}

function renderHome() {
    const content = document.getElementById("content");
    const main = document.querySelector("main");
    content.removeChild(main);
    content.appendChild(main_component());
}

const content = document.getElementById("content");
content.appendChild(header_component());
content.appendChild(main_component());
