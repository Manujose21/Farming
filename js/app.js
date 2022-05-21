const menuToggle = document.getElementById('menuIcon');
const menu = document.getElementById('menu');
const clipboard = document.querySelector('.clipboard');
const input = document.querySelector('#referral-link');
const message = document.getElementById("message");
menuToggle.addEventListener("click", ()=>{
    menu.classList.toggle('active')
});

clipboard.addEventListener("click", ()=>{
    input.focus();
    document.execCommand('selectAll');
    document.execCommand('copy');

    message.textContent = "Copiado al portapapeles";
    message.classList.add("message");

    setTimeout(()=> {
        message.textContent = "";
        message.classList.remove('message');
    }, 3000)
})