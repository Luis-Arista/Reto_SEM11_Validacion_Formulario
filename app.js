

const validacion = () => {
    let nombre = document.getElementById('name').value
    let apellido = document.getElementById('apellido').value
    let edad = document.getElementById('edad').value
    let email = document.getElementById('email').value

   if (nombre === null || nombre.length < 3 || /^\s+$/.test(nombre) ){
      alert('error nombre deve ser mayor a 3 caracteres, actualmente usas solo: ' + nombre.length)
      return false
   } else if ( apellido === null || apellido.length < 3 || /^\s+$/.test(apellido) ) {
      alert('error Apellido deve ser mayor a 3 caracteres. actualmente usas solo: ' + apellido.length)

      return false
   } else if ( isNaN(edad) || edad === '' || /^\s+$/.test(edad) ) {
      alert('error Edad deve contener puero numero')
      return false
   }else if ( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(email))) {
    alert('error ingrese un correo valido')
  
    return false
   }else {
       return true
   }
  
   
}
