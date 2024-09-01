function testConst() {
    const const01 = {propriedade: 'valor'}
    console.log('01a.' + const01.propriedade)

    const01 = {propriedade: 'novo valor'} // Erro gerado propositalmente. Não se pode redefinir constantes
    console.log('02a.' + const01.propriedade)
}

testConst()