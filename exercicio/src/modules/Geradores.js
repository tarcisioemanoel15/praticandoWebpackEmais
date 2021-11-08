const randy = (min, max) => Math.floor(Math.random() * (max - min) + min);
const geraMaiuscula = () => String.fromCharCode(randy(65 ,91));
const geraMenuscula = () => String.fromCharCode(randy(97 ,123));
const geraNumeros = () => String.fromCharCode(randy(48 ,58));

const sinbolo = ',.;/<>:[]{}~´^``!@#$%¨&*()_-+=';
const gerasinbolo = () => sinbolo[randy(0, sinbolo.length)];


export default function geraSenha(qtd, maiuscula, menuscula, numeros, sinbolos){

    const senhaarray = [];
    qtd = Number(qtd);

    for(let i = 0; i < qtd; i++){
    maiuscula && senhaarray.push(geraMaiuscula());
    menuscula && senhaarray.push(geraMenuscula());
    numeros && senhaarray.push(geraNumeros());
    sinbolos && senhaarray.push(gerasinbolo());
    }
    return senhaarray.join('').slice(0, qtd);
}
// geraSenha(5, true, true, true, true);