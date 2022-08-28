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
    orderBtn.textContent = "Order Now!";
    orderBtn.onclick = Menu.render;
    main.appendChild(orderBtn);

    const info = document.createElement("div");
    info.classList.add("info");
    main.appendChild(info);

    const adress = document.createElement("div");
    adress.classList.add("adress");
    adress.textContent = "🏠 Hollywood Boulevard 42, Los Angeles, USA";
    info.appendChild(adress);

    const hours = document.createElement("div");
    hours.classList.add("hours");
    hours.textContent = "";

    const weekday_hours = document.createElement("p");
    weekday_hours.textContent = "🕛Mon-Thurs: 8am - 8pm";
    hours.appendChild(weekday_hours);

    const weekened_hours = document.createElement("p");
    weekened_hours.textContent = "🕛 Fri-Sun: 8am - 11pm";
    hours.appendChild(weekened_hours);
    info.appendChild(hours);

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
