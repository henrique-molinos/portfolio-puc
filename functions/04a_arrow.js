var somar = () => console.log('1. Função sem parâmetros')
somar()
somar(1)

somar = _ => console.log('2. Sem parâmetros, mas com underscore')
somar()

somar = (x, y) => x + y;
console.log(somar(1, 2));

somar = (x, y) => { return x + y };
console.log(somar(3, 4));

// Retorna o maior número
somar = (x, y) => x>y?x:y; // KKKKK que coisa foda -- x é maior que y? se sim, retorna x... se não, retorna y
console.log(somar(5,6));

somar = (x,y) => {
    if(x>y)
        return x
    else
        return y
}
console.log(somar(7, 8));

