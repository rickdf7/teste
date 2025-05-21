let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', () => {
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', () => {
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', () => {
    menu.classList.remove('abrir-menu')
})

//formulario 
const form = document.querySelector('#form');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    emailjs.init({
        publicKey: "oLO2-RC-qE00Kme_h",
    });

    emailjs.sendForm("service_iqargfe", "template_j56vqom", form)
        .then((response) => { alert("Mensagem enviada com sucesso!"); })
        .catch((error) => {
            console.log(error);
            alert("Ocorreu um erro com o envio do seu e-mail");
        });

    console.log("passei aqui!");
});