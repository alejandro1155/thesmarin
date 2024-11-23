const textarea = document.getElementById('mensaje');
const contador = document.getElementById('contador');


textarea.addEventListener('input',()=>{
    console.log(textarea.value)
    cantidad = textarea.value
    contador.innerHTML = cantidad.length + "/300"
})