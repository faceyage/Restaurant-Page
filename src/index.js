import './style.css';


function header_component() {
    const header = document.createElement("header");
    
    const logo = document.createElement("div");
    logo.classList.add("logo");
    logo.textContent = "O'KEBAB";
    header.appendChild(logo);

    const links = document.createElement("div");
    links.classList.add("links");
    
    const home = document.createElement("div");
    home.classList.add("home");
    const homeURL = document.createElement("home");
    homeURL.textContent = "HOME";
    home.appendChild(homeURL);
    links.appendChild(home);

    const menu = document.createElement("div");
    menu.classList.add("menu");
    const menuURL = document.createElement("a");
    menuURL.textContent = "MENU"
    menu.appendChild(menuURL);
    links.appendChild(menu);
    
    const contact = document.createElement("div");
    contact.classList.add("contact");
    const contactURL = document.createElement("a");
    contactURL.textContent = "CONTACT";
    contact.appendChild(contactURL)
    links.appendChild(contact);

    header.appendChild(logo);
    header.appendChild(links);

    return header;
}

function main_component() {
    const main = document.createElement("main");
    
    const text = document.createElement("p");
    text.textContent = "Best Keabab in your Country!"
    main.appendChild(text);
    
    const text2 = document.createElement("p");
    text2.textContent = "Made with passion since since 1998!"
    main.appendChild(text2);
    
    return main;
}

const content = document.getElementById("content");
content.appendChild(header_component());
content.appendChild(main_component());