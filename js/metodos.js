// Se declaran los métodos y objetos que se ejecutarán desde la carga de la página.
window.onload = function()
{
    // Este objeto permite desplegar la fecha en la que se despliega la página.
    var fecha = new Date();
    document.getElementById("fecha").innerHTML = fecha.toLocaleDateString();
    
    // Este objeto permite desplegar la hora en la que se despliega la página.
    var hora = new Date();
    document.getElementById("hora").innerHTML = hora.toTimeString()
}

// Esta función permite desplegar una alerta en el navegador cuando el usuario se mueve a una nueva página.  
function alerta(opcion)
{
    // Este método permite desplegar una alerta en el navegador.
    alert('Se te está redirigiendo a ' + opcion + '...');
}

// Esta función permite desplegar una alerta en el navegador cuando el usuario envía su información en el formulario.  
function formulario(nombre, correo, opinion)
{
    // Se declara una variable con la expresión regular de un correo electrónico.
    var expresion_correo = "((([a-z]|[A-Z])|[0-9])+|(-|_)*)+@(([a-z]|(A-Z))|[0-9])+\\.+((([a-z]|(A-Z))|[0-9])+|\\.+)+"

    // Se declara un objeto para realizar la comprobación de la expresión regular del correo.
    var probar_correo = new RegExp(expresion_correo);

    // Se declara una variable que contendrá el resultado de la evaluación anterior
    var resultado_correo = probar_correo.test(correo.value);

    // Se evalúa si la información ingresada es correcta.
    if (nombre.value != 0 && resultado_correo == true && opinion.value != 0) {
        // Este método permite desplegar una alerta en el navegador.
        alert('¡Gracias por tu atención!');
    } else {
        alert('La información ingresada es incorrecta o está incompleta. Inténtelo de nuevo.');
    }
}

// Esta función permite desplegar una confirmación en el navegador para redirigir al perfil de Facebook correspondiente.
function confirmar(facebook)
{
    // Este método permite desplegar una confirmación en pantalla.
    if (confirm('¿Quieres entrar a mi perfil de Facebook?')) {
        // Este método permite redirigir el enlace de Facebook a una nueva pestaña.
        window.open(facebook, "_blank");
    }
}

// Esta función permite generar un número aleatorio en pantalla.
function numero_rand()
{
    // Se declara un número aleatorio.
    var numero = Math.random();
    
    // Se imprime el número.
    document.getElementById("numeroaleatorio").innerHTML = numero;
}

// Esta función permite desplegar una alerta en el navegador cuando el usuario inicia sesión.  
function login(correo, password)
{
    // Se declara una variable con la expresión regular de un correo electrónico.
    var expresion_correo = "((([a-z]|[A-Z])|[0-9])+|(-|_)*)+@(([a-z]|(A-Z))|[0-9])+\\.+((([a-z]|(A-Z))|[0-9])+|\\.+)+"

    // Se declara un objeto para realizar la comprobación de la expresión regular del correo.
    var probar_correo = new RegExp(expresion_correo);

    // Se declara una variable que contendrá el resultado de la evaluación anterior
    var resultado_correo = probar_correo.test(correo.value);

    // Se evalúa si la información ingresada es correcta.
    if (resultado_correo == true && password.value != 0) {
        // Este método permite desplegar una alerta en el navegador.
        alert('¡Bienvenido!');
    } else {
        alert('Error al iniciar sesión. Inténte de nuevo.');
    }
}

// Esta función permite redirigir el archivo a una pestaña nueva, y en caso de no poder manejar su tipo, permite descargarlo.  
function descarga(archivo)
{
    // Este método permite cargar el archivo, en este caso, en otra pestaña.
    window.open(archivo, "_blank");
}