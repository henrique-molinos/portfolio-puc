const soap = require('soap');

const url1 = 'http://www.dneonline.com/calculator.asmx?wsdl';

soap.createClient(url1, function(err, client){
    console.log('Descrição -> ', client.describe().Calculator.CalculatorSoap)

    client.Add({intA: 1, intB: 2}, function(err, res){
        if (err) {
            console.log(err)
        } else {
            console.log('A soma é:', res.AddResult)
        }
    })
    client.Subtract({intA: 1, intB: 2}, function(err, res){
        if (err) {
            console.log(err)
        } else {
            console.log('A subtração é:', res.SubtractResult)
        }
    })
    client.Multiply({intA: 1, intB: 2}, function(err, res){
        if (err) {
            console.log(err)
        } else {
            console.log('A multiplicação é:', res.MultiplyResult)
        }
    })
    client.Divide({intA: 1, intB: 2}, function(err, res){
        if (err) {
            console.log(err)
        } else {
            console.log('A divisão é:', res.DivideResult)
        }
    })
});

