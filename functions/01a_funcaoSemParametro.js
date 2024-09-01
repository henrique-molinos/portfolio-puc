function funcaoSemRetorno() {
	console.log("Olá Mundo!");
}

function funcaoComRetorno() {
	return "Olá Mundo!";
}

let msg = funcaoSemRetorno()
console.log(msg)

msg = funcaoComRetorno()
console.log(msg)