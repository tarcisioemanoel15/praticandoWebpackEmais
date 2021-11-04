class ValidaCPF{

    constructor(cpfenviado){
        Object.defineProperty(this, 'cpflimpo', {
            enumerable: true,
            get funcion(){
                return cpfenviado.replace(/\D+/g, '');
            }
        })

    }

}

const cpf = new ValidaCPF('111.111.111-11');
console.log(cpf.cpflimpo);