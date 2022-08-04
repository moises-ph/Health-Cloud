const user_id = localStorage.getItem('user');
fetch('/dashboard/getData/'+user_id).then(res => res.json()).then(data => {
    console.log(data);
    const {name, lastname, email, age, num_documento, doc_type, user_type} = data;
});

const logout_button = document.getElementById('logout_button');

logout_button.addEventListener('click', (e)=>{
    fetch( `/logout/${user_id}`).then(res => res.json()).then(data => {
        if(data.status === 'ok'){
            window.location.href = '/login';
        }
    }).catch(err => console.log(err));
});