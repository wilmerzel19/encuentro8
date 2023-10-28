function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username == "admin" && password == "admin") {

        //definir un valor en el local storage
        localStorage.setItem("logged", "true");

        window.location.href = "index.html";

    } else {
        localStorage.setItem("logged", "false");
        alert("Usuario o contraseña incorrecta");

    }
}
function logout() {
    localStorage.setItem("logged", "false");
    window.location.href = "cards.html";


}

function validar_login() {
    const logged = localStorage.getItem("logged");
    if (logged == "true") {
        window.location.href = "cards.html";
    }
}



