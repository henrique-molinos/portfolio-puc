function testVar() {
    var var01 = 'var 01'
    {
        console.log('## Dentro do escopo local ##')
        var var02 = 'var 02'
        console.log('01a.' + var01)
        console.log('01b.' + var02)
    }
    console.log('## Fora do escopo local ##')
    console.log('02a.' + var01)
    console.log('02b.' + var02)
}

testVar()