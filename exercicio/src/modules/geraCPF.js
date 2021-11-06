import Validacpf from "./ValidaCPF";

export default class Gerandocpf{
rand = (min = 100000000, max = 999999999) => {
return String(Math.floor(Math.random() * (max - min) + min));
}

separa(cpf){
    return(
        cpf.slice(0, 3) + '.' +
        cpf.slice(3, 6) + '.' +
        cpf.slice(6, 9) + '-' +
        cpf.slice(9, 11)
        )
    }

geradigito(){
    const parcisal = this.rand();
    const digito1 = Validacpf.criadigito(parcisal);
    const digito2 = Validacpf.criadigito(parcisal + digito1);
    const novocpf = parcisal + digito1 + digito2;
    return this.separa(novocpf);
}
}





