document.querySelectorAll('.toggle-password').forEach(function(eye) {
    eye.addEventListener('click', function() {
var passwordField = document.querySelector(this.getAttribute('toggle'));
if (passwordField.getAttribute('type') === 'password') {
passwordField.setAttribute('type', 'text');
} else {
passwordField.setAttribute('type', 'password');
}
});
});


const nombre = document.getElementById("nombre")
const apellidos = document.getElementById("apellidos")
const correo = document.getElementById("correo")
const form = document.getElementById("formulario")
const contra = document.getElementById("contra")
const parrafo = document.getElementById("warnings")


form.addEventListener("submit", e=> {
    e.preventDefault()
    let warnings= ""
    let expRegCorreo = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,4})+$/
    if(nombre.value.length <3){
        warnings += `¡Nombre no valido! <br>`
        entrar=true
        }
    if(apellidos.value.length <3) {
        warnings += `¡Apellidos no es valido! <br>`
    }
    if (!expRegCorreo.test(correo.value)){
        warnings += `¡El correo no es valido! <br>`
        }
    if (contra.value.length <8){
        warnings += `¡La contraseña no es valida! <br>`
    }

    if(entrar){
        parrafo.innerHTML = warnings
    }
    
})

