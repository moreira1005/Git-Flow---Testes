document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    let telefone = document.getElementById("telefone").value;

    if(nome === "" || email === "" || senha === "" || telefone === "") {
        alert("Preencha todos os campos!");
    } else {
        alert("Cadastro realizado com sucesso!");
    }
});