

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

//2ª e 3ª QUESTÃO
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
			e.cancelable
			if(e.cancelable){
				let final,nome,dia,mes;

				final = document.createTextNode(todosCampos[3].value);
				nome = document.createTextNode(todosCampos[5].value);
				dia = document.createTextNode(todosCampos[6].value);
				mes = document.createTextNode(todosCampos[7].value);

				console.log("Final: ",todosCampos[3].value);
				console.log("Nome:",todosCampos[5].value);
				console.log("Dia:",todosCampos[6].value);
				console.log("Mes:",todosCampos[7].value);
				e.preventDefault();
			}
		}else{
			alert("Algum campo em branco")
		}
}
document.getElementsByClassName("sumbit")[0].addEventListener("click",preencherTUDO);

/*
 <div class="item">
    <div class="logo">
        <img src="https://brand.mastercard.com/content/dam/mccom/brandcenter/thumbnails/mastercard_circles_92px_2x.png"
             alt=""/>
    </div>
    <p>
        <strong>MasterCard final 1234</strong><br>
        <small>Fulando da Silva</small><br/>
        <small>Vencimento <span>10/10</span></small><br/>
    </p>

    <div class="close"></div>
</div>
*/