

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

//2ª QUESTÃO
let preencherTUDO = function(e){
		let verificar = 1;
		let todosCampos = document.querySelector("form").querySelectorAll("input");
		for(let j = 0;j < todosCampos.length;j++){
			if((todosCampos[j].type == "text" || todosCampos[j].type == "password" || todosCampos[j].type == "number") && todosCampos[j].value == ""){
				todosCampos[j].style = 'border: dashed 1px red;border-radius: 6px;';
				e.cancelable;
				e.preventDefault();	
				verificar = 0;
			}else{
				todosCampos[j].style = 'border: solid 1px transparent';
			}
		}
		if(verificar == 1){
			alert("Adicionamento feito com sucesso!!!");
		}else{
			alert("Algum campo em branco")
		}
}
document.getElementsByClassName("sumbit")[0].addEventListener("click",preencherTUDO);