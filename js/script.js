const abrirMenu = document.getElementById("abrirMenu");
const fecharMenu = document.getElementById("fecharMenu");
const menu = document.getElementById("menu");


abrirMenu.addEventListener('click', () =>{
    menu.style.display = 'flex';
    menu.style.right = (menu.offsetWidth * -1) + "px";
    abrirMenu.style.display = "none";

    setTimeout(() => {
        menu.style.opacity = "1"
        menu.style.right = "0"
    }, 10)
    
})

fecharMenu.addEventListener('click', () =>{
    menu.style.opacity = '0';
    menu.style.right = (menu.offsetWidth * -1) + "px"
    setTimeout(() => {
        menu.removeAttribute("style")
        abrirMenu.removeAttribute("style")
    }, 200)
    
})

const produtos = document.getElementById('produtos')

produtos.addEventListener('click', event =>{
    event.preventDefault();

    if (event.target.tagName === "A"){
        const tituloClick = event.target.parentNode.children[1].innerText;
        const url = `https://wa.me/558597422142?text=Ol%C3%A1,%20gostaria%20de%20verificar%20a%20disponibilidade%20da%20planta%20${encodeURIComponent(tituloClick)}.`;
        window.open(url, "_blanck");
    }
});