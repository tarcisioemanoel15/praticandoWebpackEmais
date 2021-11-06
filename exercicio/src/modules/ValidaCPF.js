export default class Validacpf{
    constructor(envio){
        Object.defineProperty(this, 'limpo', {
            value: envio.replace(/\D+/g, '')
        })
    }

eSequencia(){
    const seq = this.limpo[0].repeat(this.limpo.length);
    return seq === this.limpo;
}

separador(){
    const cpfparcial = this.limpo.slice(0, -2);
    const digito1 = Validacpf.criadigito(cpfparcial);
    const digito2 = Validacpf.criadigito(cpfparcial + digito1);
     this.novocpf = cpfparcial + digito1 + digito2;  
    }

static criadigito(parciall){
    let total = 0;
    let reverso = parciall.length + 1;

    for(let digito of parciall){
        total += (reverso * Number(digito))
        reverso--;
    }

    const digito = 11 - (total % 11);
    return digito <= 9 ? String(digito) : '0';
};

valida(){
    if( typeof this.limpo === 'undefined') return false;
    if( this.limpo.length !== 11) return false;
    if(this.eSequencia()) return false;

    this.separador();
    
  return this.novocpf === this.limpo;
  
}
}