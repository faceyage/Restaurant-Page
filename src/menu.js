import kebabIcon from './kebab.png';
import meatDonerIcon from './meatDoner.png';
import chickenDonerIcon from './chickenDoner.png';

const Menu = (() => {
    function main_component() {
        const main = document.createElement("main");

        const foods = document.createElement("div");
        foods.classList.add("foods");
        main.appendChild(foods);

        const kebab = createFood("ADANA KEBAB", kebabIcon, "200gr Kebab with Tomato, Lettuce, Onion", "15$");
        foods.appendChild(kebab);

        const meatDoner = createFood("MEAT DONER", meatDonerIcon, "200gr Meat Doner with Tomato, Lettuce, Onion", "12$");
        foods.appendChild(meatDoner);

        const chickenDoner = createFood("CHICKEN DONER", chickenDonerIcon, "200gr Chicken Doner with Tomato, Lettuce, Onion", "10$")
        foods.appendChild(chickenDoner);

        return main;
    }

    function createFood(name, img, desc, price) {
        const food = document.createElement("div");
        food.classList.add("food");

        const foodName = document.createElement("h2");
        foodName.textContent = name;
        food.appendChild(foodName);

        const _desc = document.createElement("p");
        _desc.classList.add("desc");
        _desc.textContent = desc;
        food.appendChild(_desc);

        const _price = document.createElement("p");
        _price.textContent = price;
        food.appendChild(_price);

        const _img = document.createElement("img");
        _img.src = img; 
        food.appendChild(_img);

        return food;
    }

    function render() {
        const content = document.getElementById("content");
        const main = document.querySelector("main");
        content.removeChild(main);
        content.appendChild(main_component());
    }

    return {render};
})();



export default Menu;