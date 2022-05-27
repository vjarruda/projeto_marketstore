function putLogin(){
    email = document.getElementById("floatingInput").value;
    password = document.getElementById("floatingPassword").value;
    localStorage.setItem("email",email)
    localStorage.setItem("senha",password)
}