const user_id = localStorage.getItem('user');
var Data = [];
fetch('/dashboard/getData/'+user_id).then(res => res.json()).then(data => {
    const {name, lastname, email, age, num_documento, doc_type, date_of_birth, gender, regim, civil_status,city, phone, stratus, state} = data;
    Data = {name, lastname, email, age, num_documento, doc_type, date_of_birth, gender, regim, civil_status,city, phone, stratus, state};
    DataKeys = Object.keys(Data)
    console.log(Data);
    console.log(DataKeys);
    for(let i = 0; i < DataKeys.length; i++){
        let clave = DataKeys[i];
        console.log(clave);
        if(Data[clave] != '0' || Data[clave] != 0){
            console.log('value');
            document.getElementById(clave).value = Data[clave];
        }
    }
});

const logout_button = document.getElementById('logout_button');

logout_button.addEventListener('click', (e)=>{
    fetch( `/logout/${user_id}`).then(res => res.json()).then(data => {
        if(data.status === 'ok'){
            window.location.href = '/login';
        }
    }).catch(err => console.log(err));
});