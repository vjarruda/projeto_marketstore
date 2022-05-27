function putLogin(){
    email = document.getElementById("floatingInput").value;
    password = document.getElementById("floatingPassword").value;
    localStorage.setItem("email",email)
    localStorage.setItem("senha",password)
}

function getLogin(){
    email = localStorage.getItem("email");
    password = localStorage.getItem("senha");
    document.getElementById("codeEmail").textContent = email
    document.getElementById("codeSenha").textContent = password
}