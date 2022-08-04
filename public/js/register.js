const form = document.getElementById('formulario-registro');

function validatePasswords(password, password2) {
    if (password !== password2) {
        swal("Error", "Las contraseñas no coinciden", "error");
        return false;
    }
    return true;
}

function validateEmails(email, email2) {
    if (email !== email2) {
        swal("Error", "Los correos no coinciden", "error");
        return false;
    }
    return true;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('submit');
  let pass_true = validatePasswords(e.target.password.value, e.target.password2.value);
  let email_true = validateEmails(e.target.email.value, e.target.email2.value);
  if (pass_true && email_true) {
    fetch('/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userId: e.target.userId.value,
        name: e.target.name.value,
        lastname: e.target.lastname.value,
        password: e.target.password.value,
        age: e.target.age.value,
        gender: e.target.gender.value,
        email: e.target.email.value,
        userType: e.target.userType.value,
        docType: e.target.docType.value
      })
    }).then(res => res.json()).then(data => {
      if(data.status === 'ok'){
        swal("Succes!", "Usuario registrado correctamente", "success");
      }
    }).catch(err => console.log(err));
  }
  else if(!pass_true){
    swal("Error", "Las contraseñas no coinciden", "error");
  }
  else if(!email_true){
    swal("Error", "Los correos no coinciden", "error");
  }
  else{
    swal("Error", "Error al registrar usuario", "error");
  }
});