let forms_complete = false;

function getCampo(id) {
    const elemento = document.getElementById(`warning-${id}`); // Garantir que os IDs estão corretos
    return elemento;
}

function getInput(id) {
    const input = document.getElementById(id); // Não precisa de template literal aqui
    return input;
}

function verInput() {
    // Obtém todos os valores uma vez
    const name = getInput("name").value;
    const email = getInput("email").value;
    const subject = getInput("subject").value;
    const message = getInput("message").value;
    
    if (!name) {
        getCampo("name").textContent = "Preencha seu Nome!";
        return forms_complete = false;
    }
    
    if (!email) {
        getCampo("email").textContent = "Preencha seu Email!";
        return forms_complete = false;
    }
    
    if (!email.includes("@")) {
        getCampo("email").textContent = "Email Inválido!";
        return forms_complete = false;
    }
    
    if (!subject) {
        getCampo("select").textContent = "Escolha um Assunto";
        return forms_complete = false;
    }
    
    if (!message) {
        getCampo("msg").textContent = "Descreva seu problema";
        return forms_complete = false;
    }
    
    // Se passou por todas as validações
    return forms_complete = true;
}

document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById("button-menssage");
    if (button) {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            verInput();
        });
    }
});
