

//1ª QUESTÃO
const olho = document.getElementById("show");

let revelar = function (){
	let caixa_passwords = document.getElementById("number");
	let inputs_pass = caixa_passwords.getElementsByTagName("input");
	
	for(let i = 0;i < inputs_pass.length;i++){
		if(inputs_pass[i].type == "password"){
			inputs_pass[i].type = "text";
		}else{
			inputs_pass[i].type = "password";
		}
	}
}

olho.addEventListener("click",revelar)