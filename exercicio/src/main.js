import 'core-js/stable';
import 'regenerator-runtime/runtime';

import './assets/css/style.css';

import Gerandocpf from './modules/geraCPF';
import Validacpf from './modules/ValidaCPF';
import formGerasenha from './modules/formGerasenha';
formGerasenha();


// gera cpf
(function(){
    const gera = new Gerandocpf();
    const resultado = document.querySelector('.cpf-gerado');
    resultado.innerHTML = gera.geradigito();
})();

// cpf valido ou falso            
(function(){
    const display = document.querySelector('.envcpf');
    const btn = document.querySelector('.btn');
    const resultado = document.querySelector('.encpf');
        
    btn.addEventListener('click', () => {
        const cpf = new Validacpf(display.value);
        if(cpf.valida()){
            resultado.innerHTML = 'CPF Valido';
        }else{
            resultado.innerHTML = 'CPF Invalido';
        }
    })
})();
 