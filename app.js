let usuarioCorrecto = "Admin";
let contraseñaCorrecta = "admin2024";
let resultado = document.getElementById('resultado');

function login(){
    let usuario = document.getElementById('usuario').value;
    let contraseña = document.getElementById('contraseña').value;
    console.log(usuario);
    if (usuario === usuarioCorrecto && contraseña === contraseñaCorrecta){
        resultado.style.color = 'green';
        resultado.innerHTML= 'acceso concedido';

    }else{
        resultado.style.color='red';
        resultado.innerHTML = 'acceso concedido'
       
    }
}