const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
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
    }).then(res => res.json()).then(data => console.log(data)).catch(err => console.log(err));
    e.preventDefault();
});