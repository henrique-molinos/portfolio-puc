function testVar() {
    var var01 = 'var 01'
    {
        console.log('## Dentro do escopo local ##')
        console.log('01a.' + var01)
        var01 = 'var 02'
        console.log('02a.' + var01)
    }
    console.log('## Fora do escopo local ##')
    var var01 = 'var 03'
    console.log('03a.' + var01)
}

testVar()