function conta(){
    var email = document.getElementById("email");
    var senha = document.getElementById("senha");

    if(email.value == "teste" && senha.value == "teste"){
        alert("Login efetuado com sucesso");
    }
    else{
        alert("Email ou senha Invalidos");
    }
}