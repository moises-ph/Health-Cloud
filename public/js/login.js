const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('submit');
    let user_id = e.target.Usuario_login.value;
    let password = e.target.Contraseña_login.value;
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user_id,
            password
        })
    }).then(res => res.json()).then(data => {
        if(data.status === 'ok'){
            localStorage.setItem('user', user_id);
            window.location.href = `/dashboard`;
        }
        else{
            swal("Error", `${data.message}`, "error");
        }
    }).catch(err => console.log(err));
});