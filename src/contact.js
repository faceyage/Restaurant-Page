const Contact = (() => {
    function main_component() {
        const main = document.createElement("main");

        const phoneNumber = document.createElement("p")
        phoneNumber.textContent = "📞111 111 111"
        main.appendChild(phoneNumber);

        const adress = document.createElement("p");
        adress.textContent = "🏠 Hollywood Boulevard 42, Los Angeles, USA"
        main.appendChild(adress);

        const googleMap = document.createElement("iframe");
        googleMap.src = "https://www.google.com/maps/d/embed?mid=1Ex-waadheaKy8f9UJeA7v4nPjTQ&hl=en&ehbc=2E312F";
        googleMap.width = 200;
        googleMap.height = 200;
        main.appendChild(googleMap);

        return main;
    }

    function render() {
        const content = document.getElementById("content");
        const main = document.querySelector("main");
        content.removeChild(main);
        content.appendChild(main_component());
    }

    return {render};
})();

export default Contact;