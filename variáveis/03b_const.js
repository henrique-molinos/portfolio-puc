function testConst() {
    const const01 = {propriedade: 'valor'}
    console.log('01a.' + const01.propriedade)

    const01.propriedade = 'novo valor' // Modificar a propriedade de um objeto dentro de uma constante é permitido.
    console.log('02a.' + const01.propriedade)
}

testConst()