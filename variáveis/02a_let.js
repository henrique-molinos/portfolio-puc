function testLet() {
    let let01  = 'let 01'
    {
        console.log('## Dentro do escopo local ##')
        let let02 = 'let 02'
        console.log('01a.' + let01)
        console.log('01b.' + let02)
    }
    console.log('## Fora do escopo local ##')
    console.log('02a.' + let01)
}

testLet()