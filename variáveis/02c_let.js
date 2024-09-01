function testLet() {
    let let01  = 'let 01'
    {
        console.log('## Dentro do escopo local ##')
        console.log('01a.' + let01) // Erro de acesso devido à redefinição de let01 ocorrer depois da chamada nesta linha.
        let let01 = 'let 02'
        console.log('02a.' + let01)
    }
    console.log('## Fora do escopo local ##')
    console.log('03a.' + let01)
}

testLet()