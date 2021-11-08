import geraSenha from "./Geradores";

const numerica = document.querySelector('.qtd-numerica');
const maiuscula = document.querySelector('.chk-maiuscula');
const menuscula = document.querySelector('.chk-menuscula');
const numeros = document.querySelector('.chk-numeros');
const sinbolo = document.querySelector('.chk-sinbolos');
const btn = document.querySelector('.gerar-senha');
const resss = document.querySelector('.senha-gerada');

export default () => {
btn.addEventListener('click', () => {
resss.innerHTML = gerar()
})
}

function gerar(){
    const senha = geraSenha(
        numerica.value,
        maiuscula.checked,
        menuscula.checked,
        numeros.checked,
        sinbolo.checked      
        )
        return senha;   
    }
